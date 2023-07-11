
We use the code formatter [StyLua](https://github.com/JohnnyMorganz/StyLua) to automatically correct spacing, new lines and more in our lua files. **Make sure to install StyLua before you begin committing code.**
 
## Installing StyLua
1. Use [VS Code](https://code.visualstudio.com/) to find and install the [StyLua extension](https://marketplace.visualstudio.com/items?itemName=JohnnyMorganz.stylua). Learn how to install extensions [here](https://code.visualstudio.com/docs/editor/extension-marketplace).
2. Enable the VS Code setting “Format On Save”. Learn how to change settings [here](https://code.visualstudio.com/docs/getstarted/settings#:~:text=To%20open%20the%20Settings%20editor,macOS%20%2D%20Code%20%3E%20Preferences%20%3E%20Settings).


## Using StyLua
Open a lua file and press save. StyLua should automatically format the file. 

Nothing will happen if the file is already formatted. To test that StyLua is working you can add a few spaces at the start of any non-comment line, save, and watch them be removed.



## New Project Setup
When making a new project, you'll need to add a settings file to tell StyLua to use spaces over tabs when indenting. You can unzip and use the settings file provided below or set one up manually. This `stylua.toml` file should be placed in the top level folder of your project. Learn more about the settings file [here](https://github.com/JohnnyMorganz/StyLua#configuration).

### StyluaSettings.zip
You can use the the settings file provided [here](https://github.com/funovus/editor-wiki/files/9221770/StyluaSettings.zip).

### Manual Setup
1. Create the file `stylua.toml` in the top level folder of the project. 
2. Open the file and add one line `indent_type = "Spaces"`

To test that your settings files are working correctly, open your project and reformat a lua file (see "Use StyLua"). Highlight a line of code and observe that it is indented with spaces and not tabs (in VS Code, highlighted spaces are marked with a faded circle, tabs are marked with a faded arrow).

## Preventing Code Blocks From Being Formatted
In very rare cases you may need to stop StyLua from formatting certain code. **This is a poor practice and should be avoided unless absolutely necessary.** Talk to your team before doing this.

The StyLua codebase has detailed instructions on [ignoring certain parts of a file](https://github.com/JohnnyMorganz/StyLua#ignoring-parts-of-a-file) and [ignoring entire files](https://github.com/JohnnyMorganz/StyLua#filtering-using-styluaignore).