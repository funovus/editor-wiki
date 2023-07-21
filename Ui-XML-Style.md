<div id="toc" markdown="1">
- [Ui XML Reference\Style](#ui-xml-referencestyle)
  * [name](#name)

</div>

***

# [Ui XML Reference](Ui-XML)\\Style {ui-xml-referenceStyle}

[](overview-start)

This object allows you to define a css-like style sheet that can be used to automatically apply CSS attributes to your text. By using classes, you can also define specific rules for certain kinds of text.

#####See the [Styles With Custom UI](https://funovus.notion.site/Using-Styles-With-Custom-UI-6d841ad81bd7444fac76d8b99bf7f36a) guide.

#### Example Usage
[](example-usage-start)
```xml
<!-- Style object that applies to all frames -->
<Style>
    <![CDATA[
    /* Style for all text frames */
    Text {
        color: #ff0000;
        font-size: 64px;
        -dcei-text-shadow: false;
        -dcei-text-outline: false;
    }
    .small {
        color: #00ff00;
        font-size: 32px;
    }
    .large {
        color: #0000ff20;
        font-size: 128px;
    }
    ]]>
</Style>

<!-- A different object utilizing the style -->
<Frame layout="flex" flexDirection="column">
    <Text text="test" />
    <Text class="large" text="test" />
    <Text class="small" text="test" />
</Frame>
```
<img src="https://github.com/funovus/editor-wiki/assets/60531792/f1b014d3-2729-45fc-8e60-ac78c1326e05"/>

####Supported Attributes
```css
color: #FF0000;
font-size: 16px;
white-space: normal | nowrap;
overflow: visible | hidden;
-dcei-font-size-min: 16px;
-dcei-font-size-max: 32px;
-dcei-text-rtl-support: false;
-dcei-text-alignment: start | end | ...;
-dcei-text-shadow: true;
-dcei-text-shadow-width: 1;
-dcei-text-shadow-softness: 2;
-dcei-text-shadow-color: #FF0000;
-dcei-text-shadow-direction: 1 2;
-dcei-text-outline: true;
-dcei-text-outline-color: #ff0000;
-dcei-text-outline-width: 2;
-dcei-text-outline-softness: 1;
```

[](example-usage-end)

[](extra-section-start)
#### Related UI XML Properties:
- [Class](Ui-XML-CommonAttributes#class)
[](extra-section-end)


[](overview-end)

Define a CSS-like style sheet.

**This frame doesn't support common attributes.**

## [](Style.name)name {name}
**Value type: `string`**

[](manual-wiki-start)

#### Description
[](description-start)
Allows you to assign a name to a style.

#####See the [Styles With Custom UI](https://funovus.notion.site/Using-Styles-With-Custom-UI-6d841ad81bd7444fac76d8b99bf7f36a) guide.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<!-- Style object that applies to all frames -->
<Style name="DefaultStyle">
    <![CDATA[
    /* Style for all text frames */
    Text {
        color: #ff0000;
        font-size: 64px;
        -dcei-text-shadow: false;
        -dcei-text-outline: false;
    }
    .small {
        color: #00ff00;
        font-size: 32px;
    }
    .large {
        color: #0000ff20;
        font-size: 128px;
    }
    ]]>
</Style>

<!-- A different object utilizing the style -->
<Frame layout="flex" flexDirection="column">
    <Text text="test" />
    <Text class="large" text="test" />
    <Text class="small" text="test" />
</Frame>
```
<img src="https://github.com/funovus/editor-wiki/assets/60531792/f1b014d3-2729-45fc-8e60-ac78c1326e05"/>

[](example-usage-end)

[](extra-section-start)
#### Related UI XML Properties:
- [Class](Ui-XML-CommonAttributes#class)
[](extra-section-end)

[](manual-wiki-end)

