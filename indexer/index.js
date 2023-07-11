import fs from 'fs/promises';
import fetch from 'node-fetch';
import path from 'path';
import TextRenderer from 'marked-plaintext';
import {marked} from 'marked';

const MEILISEARCH_SERVER = 'http://meilisearch.prod.dreamcraft.com:7700';

const textRenderer = new TextRenderer();
function markdownToTxt(md) {
    // The markdown-to-text library automatically adds html entities. We don't want that.
    return marked(md, {renderer: textRenderer})
        .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
        .replace(/&#39;/g, '\'').replace(/&amp;/g, '&');
}

function normalizeId(id) {
    // IDs can only contain alphanumberic characters, '-' and '_'. See:
    //   https://docs.meilisearch.com/learn/core_concepts/indexes.html#index-uid
    //   https://docs.meilisearch.com/learn/core_concepts/primary_key.html#invalid-document-id
    return id.replace(/[^a-zA-Z0-9_-]/g, '-');
}

function filterTableOfContent(lines) {
    const result = [];
    // 2 types of TOC:
    //   1. <div id="toc" ... </div>
    //   2. <table ... </table>
    let type = 0;
    for (const line of lines) {
        if (type === 1) {
            if (line.startsWith('</div>')) {
                type = 0;
                continue;
            }
        } else if (type === 2) {
            if (line.endsWith('</table>')) {
                type = 0;
                continue;
            }
        } else if (line.startsWith('<div id="toc"')) {
            type = 1;
        } else if (line.startsWith('<table')) {
            type =2;
        } else {
            result.push(line);
        }
    }
    return result;
}

function parseHeader(header) {
    const text = markdownToTxt(header).trim();
    if (text.endsWith('}')) {
        const hashStart = text.lastIndexOf('{');
        return [text.substring(0, hashStart).trim(), text.substring(hashStart + 1, text.length - 1).toLowerCase()];
    }
    const hash = text.replace(/[()\[\]{}<>/\\.:]/g, '').replace(/ /g, '-').toLowerCase();
    return [text, hash];
}

function parseMarkdownTree(markdown) {
    const root = {
        level: 0,
        title: '',
        hash: '',
        lines: [],
        children: [],
        totalLines: 0,
    };
    const stack = [];
    let current = root;
    const lines = filterTableOfContent(markdown.split('\n').filter(l => !!l.trim()));
    for (const line of lines) {
        if (line.startsWith('#')) {
            const level = line.indexOf(' ');
            if (level === -1) {
                // Ignore headers without any text.
                continue;
            }
            const [title, hash] = parseHeader(line);
            while (current.level >= level) {
                current = stack.pop();
            }
            const child = {level, title, hash, lines: [], children: []};
            current.children.push(child);
            stack.push(current);
            current = child;
        } else {
            current.lines.push(line);
        }
    }
    function updateTotalLines(node) {
        for (const child of node.children) {
            updateTotalLines(child);
        }
        node.totalLines = node.lines.length + node.children.reduce((sum, child) => sum + child.totalLines, 0);
    }
    updateTotalLines(root);
    return root;
}

function generateDocuments(url, name, tree, documents) {
    const page = name.replace(/-/g, ' ');
    function combinePrefix(prefix, hash) {
        if (!prefix) {
            return hash;
        } else if (!hash) {
            return prefix;
        } else {
            return `${prefix}-${hash}`;
        }
    }
    function removeEmptyLines(text) {
        return text.split('\n').filter(l => !!l.trim()).join('\n');
    }
    function nodeToTextParts(node) {
        let result = [node.title + '\n', removeEmptyLines(markdownToTxt(node.lines.join('\n')))];
        for (const child of node.children) {
            result = result.concat(nodeToTextParts(child));
        }
        return result;
    }
    function createIndexedText(text) {
        // Meilisearch doesn't break up function names like GetLeaderBoardScore. As a result the function won't
        // be on the top list when searching for "leader board".
        // We fix this by doing the split ourselves.
        // Match identifiers with an upper case letter following a lower case letter.
        return text.replace(/[ .][a-zA-Z0-9_]*[a-z][A-Z][a-zA-Z0-9_]*\(/g, (input) => {
            let output = '';
            let isLower = false;
            for (const c of input) {
                if (c >= 'a' && c <= 'z') {
                    isLower = true;
                } else {
                    if (isLower && c >= 'A' && c <= 'Z') {
                        output += ' ';
                    }
                    isLower = false;
                }
                output += c;
            }
            return output;
        });
    }
    function generate(prefix, parentText, node) {
        prefix = combinePrefix(prefix, node.hash);
        if (node.totalLines <= 50 || node.children.every(c => c.level > 3)) {
            const content = nodeToTextParts(node).join('').trim();
            if (!content) {
                return;
            }
            const text = parentText + content;
            documents.push({
                id: normalizeId(combinePrefix(name, prefix)),
                name: node.title || page,
                url: `${url}#${node.hash}`,
                text,
                page,
                index: createIndexedText(text),
            });
            return;
        }
        const content = removeEmptyLines(markdownToTxt(node.lines.join('\n'))).trim();
        if (content) {
            const parts = [node.title + '\n', content + '\n'];
            for (const child of node.children) {
                parts.push(child.title + '\n');
            }
            const text = parentText + parts.join('');
            documents.push({
                id: normalizeId(combinePrefix(name, prefix)),
                name: node.title || page,
                url: `${url}#${node.hash}`,
                text,
                page,
                index: createIndexedText(text),
            });
        }
        parentText = parentText + node.title + '\n';
        for (const child of node.children) {
            generate(prefix, parentText, child);
        }
    }
    generate('', '', tree);
}

async function run() {
    const [branch, dir] = process.argv.slice(2);
    const indexId = normalizeId(`wiki-${branch}`);
    const urlPrefix = `https://wiki.funovus.com/${branch}`;
    const documents = [];
    for (const file of await fs.readdir(dir)) {
        if (!file.endsWith('.md')) {
            continue;
        }
        const name = path.parse(file).name;
        const url = `${urlPrefix}/${name}`;
        const markdown = await fs.readFile(path.join(dir, file), 'utf-8');
        const tree = parseMarkdownTree(markdown);
        generateDocuments(url, name, tree, documents);
    }

    if (documents.length === 0) {
        return;
    }

    // Delete existing documents first.
    await fetch(`${MEILISEARCH_SERVER}/indexes/${indexId}`, {
        method: 'DELETE',
    });

    const response = await fetch(`${MEILISEARCH_SERVER}/indexes/${indexId}/documents?primaryKey=id`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(documents),
    });
    if (!response.ok) {
        throw new Error(`Failed to index: ${response.statusText}, ${await response.text()}`);
    }
    const task = await response.json();
    console.log('task', task);
    // Wait for the index task to finish.
    while (true) {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        const taskResponse = await fetch(`${MEILISEARCH_SERVER}/tasks/${task.taskUid}`);
        const taskStatus = await taskResponse.json();
        console.log('status', taskStatus);
        if (taskStatus.status === 'succeeded') {
            break;
        } else if (taskStatus.status === 'failed') {
            throw new Error(taskStatus.error.message);
        }
    }
    // Exclude the id field from searchable.
    await fetch(`${MEILISEARCH_SERVER}/indexes/${indexId}/settings/searchable-attributes`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(['url', 'name', 'index']),
    })
    console.log('finished');
}

run().then(() => {
    console.log('done.');
    process.exit(0);
}).catch((error) => {
    console.error(error);
    process.exit(1);
});
