<div id="toc" markdown="1">
- [Ui XML Reference\UserInputText](#ui-xml-referenceuserinputtext)
  * [text](#text)
  * [fontSize](#fontsize)
  * [wrapping](#wrapping)
  * [color](#color)

</div>

***

# [Ui XML Reference](Ui-XML)\\UserInputText {ui-xml-referenceUserInputText}

[](overview-start)

A text frame with user input text. The key difference between this frame and a normal [text frame](Ui-XML-Text) is how it is rendered. This frame renders text using the user's system font, meaning the text may be blurrier than the standard text frame. The intended use for this frame is to display text the user has typed themselves (such as entering their username). By default, this frame type attempts to fill its parent.

#### Example Usage
[](example-usage-start)
```xml
<UserInputText text="User Input Text" height="80" width="200" />
```
This XML produces the following UI:
![image](https://user-images.githubusercontent.com/34138206/149570848-4721af57-2ebe-46b5-906d-b0fe4f6f06d1.png)

[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [CreateUserInputTextFrame()](Trigger-API-Reference-DCEI-Functions-Custom-UI#transform-createuserinputtextframetransform-parent)
[](extra-section-end)

[](overview-end)

A text frame with user input text.

## [](UserInputText.text)text {text}
**Value type: `string`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The text in the user input text frame.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<UserInputText text="User Input Text" height="80" width="200" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetUserInputTextFrameText()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setuserinputtextframetexttransform-text-string-content)
[](extra-section-end)

[](manual-wiki-end)

## [](UserInputText.fontSize)fontSize {fontSize}
**Value type: `number`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The font size in the user input text frame.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<UserInputText text="User Input Text" height="120" width="500" fontSize="80" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetUserInputTextFrameFontSize()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setuserinputtextframefontsizetransform-text-float-size)
[](extra-section-end)

[](manual-wiki-end)

## [](UserInputText.wrapping)wrapping {wrapping}
**Value type: `boolean`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The status of the text wrapping in the user input text frame, where `true` means the wrapping is enabled. This is false by default.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<UserInputText text="User Input Text" height="120" width="200" fontSize="80" wrapping="true" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetUserInputTextFrameWrapping()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setuserinputtextframewrappingtransform-text-bool-enable)
[](extra-section-end)

[](manual-wiki-end)

## [](UserInputText.color)color {color}
**Value type: `color`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The text color in the user input text frame.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<UserInputText text="User Input Text" height="80" width="250" fontSize="40" color="r: 1, g: 1, b: 1, a: 1" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetUserInputTextFrameColor()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setuserinputtextframecolortransform-text-colorrgb-color)
[](extra-section-end)

[](manual-wiki-end)

