<div id="toc" markdown="1">
- [Ui XML Reference\Input](#ui-xml-referenceinput)
  * [text](#text)
  * [translationKey](#translationkey)
  * [fontSize](#fontsize)
  * [color](#color)
  * [outline](#outline)
  * [wrapping](#wrapping)
  * [placeholder](#placeholder)
  * [placeholderTranslationKey](#placeholdertranslationkey)
  * [placeholderFontSize](#placeholderfontsize)
  * [placeholderColor](#placeholdercolor)
  * [placeholderOutline](#placeholderoutline)

</div>

***

# [Ui XML Reference](Ui-XML)\\Input {ui-xml-referenceInput}

[](overview-start)

A text input frame. By default, this frame type attempts to fill its parent size unless given explicit dimensions.

#### Example Usage
[](example-usage-start)
```xml
<Input layout="flex" height="30" width="200" />
```
This XML produces the following UI:
![image](https://user-images.githubusercontent.com/34138206/149568950-299acc22-7079-4c6d-92c6-7210df6b97d0.png)

[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [CreateInputFrame()](Trigger-API-Reference-DCEI-Functions-Custom-UI#createinputframe-1)
[](extra-section-end)

[](overview-end)

A text input frame

## [](Input.text)text {text}
**Value type: `string`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The text in the input frame.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Input layout="flex" height="30" width="200" text="Text Input" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetInputFrameText()](rigger-API-Reference-DCEI-Functions-Custom-UI#setinputframetext-2)
- [GetInputFrameText()](Trigger-API-Reference-DCEI-Functions-Custom-UI#getinputframetext-1)
[](extra-section-end)

[](manual-wiki-end)

## [](Input.translationKey)translationKey {translationKey}
**Value type: `string`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The translation key for the input frame. This uses a translation key declared in the Data Window (Localization tab) to display text across different languages.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Input layout="flex" height="30" width="200" text="Text Input" translationKey="key" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- None.
[](extra-section-end)

[](manual-wiki-end)

## [](Input.fontSize)fontSize {fontSize}
**Value type: `number`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The font size for the input frame.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Input layout="flex" height="100" width="400" text="Text Input" fontSize="80" color="r: 1, g: 0, b: 0, a: 1" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetInputFrameFontSize()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setinputframefontsize-2)
[](extra-section-end)

[](manual-wiki-end)

## [](Input.color)color {color}
**Value type: `color`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The font color for the input frame.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Input layout="flex" height="100" width="400" text="Text Input" fontSize="80" color="r: 1, g: 0, b: 0, a: 1" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetInputFrameColor()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setinputframecolor-2)
[](extra-section-end)

[](manual-wiki-end)

## [](Input.outline)outline {outline}
**Value type: `boolean`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The text outline status for the input frame, where `true` enables the text outline.

*Note that this doesn't actually work. Outline is only supported for Text frames.*
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Input layout="flex" height="100" width="400" text="Text Input" fontSize="80" color="r: 1, g: 0, b: 0, a: 1" outline="true" />
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

[](manual-wiki-end)

## [](Input.wrapping)wrapping {wrapping}
**Value type: `boolean`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The font wrapping status for the input frame, where `true` enables font wrapping. Font wrapping will wrap text to the next line if it would exceed the current line. By default, this value is false for input frames.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Input layout="flex" height="300" width="200" text="Text Input" fontSize="80" color="r: 1, g: 0, b: 0, a: 1" wrapping="true" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetInputFrameWrapping()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setinputframewrapping-2)
[](extra-section-end)

[](manual-wiki-end)

## [](Input.placeholder)placeholder {placeholder}
**Value type: `string`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The placeholder text that appears whenever the input frame is empty. This text is bolded and italicized by default.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Input layout="flex" height="40" width="200" placeholder="Text Input" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetInputFramePlaceholder()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setinputframeplaceholder-2)
[](extra-section-end)

[](manual-wiki-end)

## [](Input.placeholderTranslationKey)placeholderTranslationKey {placeholderTranslationKey}
**Value type: `string`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The translation key for the placeholder text. This uses a translation key declared in the Data Window (Localization tab) to display text across different languages.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Input layout="flex" height="40" width="200" placeholder="Text Input" placeholderTranslationKey="key" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- None.
[](extra-section-end)

[](manual-wiki-end)

## [](Input.placeholderFontSize)placeholderFontSize {placeholderFontSize}
**Value type: `number`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The placeholder text font size for the input frame.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Input layout="flex" height="90" width="400" placeholder="Text Input" placeholderFontSize="60"/>
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetInputFramePlaceholderFontSize()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setinputframeplaceholderfontsize-2)
[](extra-section-end)

[](manual-wiki-end)

## [](Input.placeholderColor)placeholderColor {placeholderColor}
**Value type: `color`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The placeholder text color for the input frame.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Input layout="flex" height="90" width="400" placeholder="Text Input" placeholderFontSize="60" placeholderColor="r: 0, g: 0, b: 1, a: 1" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetInputFramePlaceholderColor()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setinputframeplaceholdercolor-2)
[](extra-section-end)

[](manual-wiki-end)

## [](Input.placeholderOutline)placeholderOutline {placeholderOutline}
**Value type: `boolean`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The placeholder text outline status for the input frame, where `true` enables the text outline. The outline is always black.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Input layout="flex" height="90" width="400" placeholder="Text Input" placeholderFontSize="60" placeholderColor="r: 1, g: 1, b: 0, a: 1" placeholderOutline="true" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetInputFramePlaceholderOutline()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setinputframeplaceholderoutline-2)
[](extra-section-end)

[](manual-wiki-end)

