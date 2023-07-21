<div id="toc" markdown="1">
- [Ui XML Reference\Text](#ui-xml-referencetext)
  * [text](#text)
  * [textExpression](#textexpression)
  * [translationKey](#translationkey)
  * [fontSize](#fontsize)
  * [fontSizeMin](#fontsizemin)
  * [fontSizeMax](#fontsizemax)
  * [color](#color)
  * [outline](#outline)
  * [shadow](#shadow)
  * [wrapping](#wrapping)
  * [rtlSupport](#rtlsupport)
  * [alignment](#alignment)
  * [overflow](#overflow)
  * [outsideOutline](#outsideoutline)
  * [outlineColor](#outlinecolor)
  * [outlineWidth](#outlinewidth)
  * [outlineSoftness](#outlinesoftness)
  * [shadowWidth](#shadowwidth)
  * [shadowSoftness](#shadowsoftness)
  * [shadowColor](#shadowcolor)
  * [shadowDirection](#shadowdirection)

</div>

***

# [Ui XML Reference](Ui-XML)\\Text {ui-xml-referenceText}

[](overview-start)

A text frame, displays simple text. This frame type has a default size of 0 and expands to fit its text.

#### Example Usage
[](example-usage-start)
```xml
<Text layout="flex" text="Text Frame" />
```
This XML produces the following UI:
![image](https://user-images.githubusercontent.com/34138206/149570762-3aee569f-0d03-4cf1-9d76-d36188fffb35.png)

[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [CreateTextFrame()](Trigger-API-Reference-DCEI-Functions-Custom-UI#createtextframe-1)
[](extra-section-end)

[](overview-end)

A text frame

## [](Text.text)text {text}
**Value type: `string`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The text in the text frame.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Text layout="flex" text="Text Frame" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetTextFrameText()](Trigger-API-Reference-DCEI-Functions-Custom-UI#settextframetext-2)
[](extra-section-end)

[](manual-wiki-end)

## [](Text.textExpression)textExpression {textExpression}
**Value type: `string`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The expression for the text in the text frame. Data bound values can be formatted to specific decimal values by appending the expression such as `:F2`.
(You can find more documentation [here](https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-numeric-format-strings)). DreamEditor also provides an additional specifier `:K` to format huge numbers as "xxxK", "xxxM" or "xxxB". The default parameter for `:K` is `:K2`. When binding units or data, make sure to bind the data before creating the xml frame in lua. For a list of fields that can be accessed after the unit is bound, see [Data-Binding](Data-Binding).

[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Text layout="flex" textExpression="{data.text}" />
```
Where `{data.text}` is declared and bound in lua before the text frame is created:
```lua
local data = {text = "Text Frame"}
DCEI.BindLuaTable("data", data)
local xml = DCEI.CreateFrameFromXml(DCEI.GetUiRootFrame(), "text")
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetTextFrameTextExpression()](Trigger-API-Reference-DCEI-Functions-Custom-UI#settextframetextexpression-2)
- [BindUnitData()](Trigger-API-Reference-DCEI-Functions-Custom-UI#bindunitdata-2)
- [BindLuaTable()](Trigger-API-Reference-DCEI-Functions-Custom-UI#bindluatable-2)
[](extra-section-end)

[](manual-wiki-end)

## [](Text.translationKey)translationKey {translationKey}
**Value type: `string`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The translation key for the text frame. This uses a translation key declared in the Data Window (Localization tab) to display text across different languages.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Text layout="flex" translationKey="key" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- None.
[](extra-section-end)

[](manual-wiki-end)

## [](Text.fontSize)fontSize {fontSize}
**Value type: `number`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The font size for the text frame.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Text layout="flex" text="Text Frame" fontSize="40" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetTextFrameFontSize()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-settextframefontsizetransform-text-float-size)
[](extra-section-end)

[](manual-wiki-end)

## [](Text.fontSizeMin)fontSizeMin {fontSizeMin}
**Value type: `number`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The minimum font size for the text frame. Does not work if there is a set font size.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Text layout="flex" text="Text Frame" fontSizeMin="40" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetTextFrameFontSizeMin()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-settextframefontsizemintransform-text-float-size)
[](extra-section-end)

[](manual-wiki-end)

## [](Text.fontSizeMax)fontSizeMax {fontSizeMax}
**Value type: `number`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The maximum font size for the text frame. Does not work if there is a set font size.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Text layout="flex" text="Text Frame" fontSizeMax="60" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetTextFrameFontSizeMax()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-settextframefontsizemaxtransform-text-float-size)
[](extra-section-end)

[](manual-wiki-end)

## [](Text.color)color {color}
**Value type: `color`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The font color for the text frame.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Text layout="flex" text="Text Frame" fontSize="40" color="r: 1, g: 0, b: 0, a: 1" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetTextFrameColor()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-settextframecolortransform-text-colorrgb-color)
[](extra-section-end)

[](manual-wiki-end)

## [](Text.outline)outline {outline}
**Value type: `boolean`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The status of the text outline for the text frame, where `true` means the outline is enabled. This is true by default.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Text layout="flex" text="Text Frame" fontSize="40" outline="false" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetTextFrameOutline()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-settextframeoutlinetransform-text-bool-outline)
[](extra-section-end)

[](manual-wiki-end)

## [](Text.shadow)shadow {shadow}
**Value type: `boolean`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The status of the text shadow for the text frame, where `true` means the shadow is enabled. This is true by default, disabling the text shadow will also disable the outline (even if otherwise enabled with `outline="true"`).
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Text layout="flex" text="Text Frame" fontSize="40" shadow="false" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetTextFrameShadow()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-settextframeshadowtransform-text-bool-enableshadow)
[](extra-section-end)

[](manual-wiki-end)

## [](Text.wrapping)wrapping {wrapping}
**Value type: `boolean`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The status of the text wrapping for the text frame, where `true` means the wrapping is enabled. Wrapping will make the text automatically create new lines if the text would overflow the size of the frame; disabling text wrapping will force the text to display on one line. This is true by default, disabling text wrapping will cause the text to [overflow](#overflow) if it is enabled.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame layout="flex" frameImageColor="r: 0, g: 0, b: 0, a: 0.6">
    <Text width="150" text="Text Frame" fontSize="40" wrapping="false" />
</Frame>
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetTextFrameWrapping()](Trigger-API-Reference-DCEI-Functions-Custom-UI#settextframewrapping-2)
[](extra-section-end)

[](manual-wiki-end)

## [](Text.rtlSupport)rtlSupport {rtlSupport}
**Value type: `boolean`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The status of the text RTL support (right to left text) for the text frame, where `true` means RTL support is enabled. This property is for text that is written right to left, such as Arabic.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Text layout="flex" rtlSupport="true" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetTextFrameRtlSupport()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-settextframertlsupporttransform-text-bool-value)
[](extra-section-end)

[](manual-wiki-end)

## [](Text.alignment)alignment {alignment}
**Value type: `string`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The alignment of the text inside the text frame. Possible values:
```
start, end, top, bottom, (top|bottom)-(start|end)
```
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame layout="flex" frameImageColor="r: 0, g: 0, b: 0, a: 0.6">
    <Text height="200" width="400" text="Text Frame" fontSize="40" alignment="bottom-end" />
</Frame>
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetTextFrameAlignment()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-settextframealignmenttransform-text-string-alignment)
[](extra-section-end)

[](manual-wiki-end)

## [](Text.overflow)overflow {overflow}
**Value type: `boolean`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The status of the text overflow for the text frame, where `true` means the text will overflow the frame. This is true by default. Text will only overflow if it exceeds the height and width for the text frame. If the text size would exceed the frame size in both height and width, then no text will be displayed at all.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame layout="flex" frameImageColor="r: 0, g: 0, b: 0, a: 0.6">
    <Text height="40" width="150" text="Text Frame" fontSize="40" overflow="false" />
</Frame>
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetTextFrameOverflow()](Trigger-API-Reference-DCEI-Functions-Custom-UI#settextframeoverflow-2)
[](extra-section-end)

[](manual-wiki-end)

## [](Text.outsideOutline)outsideOutline {outsideOutline}
**Value type: `boolean`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
Adjusts the placement of the outline on the text frame, allowing you to choose between the outer edge and the inside. By default, the outline is positioned inside the text frame. Set to `true` to place the outline outside the text frame, and `false` to keep it inside.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Text layout="flex" text="Text Frame" fontSize="40" outsideOutline="true" outlineWidth="0.5"/>
```
Outside:
![outside](https://github.com/funovus/editor-wiki/assets/60531792/5185ceed-90c7-4cbe-b6bc-0f2c075826ad)
Inside:
![inside](https://github.com/funovus/editor-wiki/assets/60531792/1bf29953-76d1-405d-b5de-457293c84816)
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetTextFrameOutlineOutside()](Trigger-API-Reference-DCEI-Functions-Custom-UI#settextframeoutlineoutside-2)
[](extra-section-end)

[](manual-wiki-end)

## [](Text.outlineColor)outlineColor {outlineColor}
**Value type: `color`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The text outline color for the text frame. Black by default.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Text layout="flex" text="Text Frame" fontSize="40" outlineColor="r: 1, g: 0, b: 0, a: 1" />

```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetTextFrameOutlineColor()](Trigger-API-Reference-DCEI-Functions-Custom-UI#settextframeoutlinecolor-2)
[](extra-section-end)

[](manual-wiki-end)

## [](Text.outlineWidth)outlineWidth {outlineWidth}
**Value type: `number`**

[](manual-wiki-start)

#### Description
[](description-start)
The text outline width for the text frame, scaled from 0-1. A value less than 0 will disable the outline.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Text layout="flex" text="Text Frame" fontSize="40" outlineColor="r: 1, g: 0, b: 0, a: 1" outlineWidth="0.5" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetTextFrameOutlineWidth()](Trigger-API-Reference-DCEI-Functions-Custom-UI#settextframeoutlinewidth-2)
[](extra-section-end)

[](manual-wiki-end)

## [](Text.outlineSoftness)outlineSoftness {outlineSoftness}
**Value type: `number`**

[](manual-wiki-start)

#### Description
[](description-start)
The text outline softness for the text frame, scaled from 0-1.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Text layout="flex" text="Text Frame" fontSize="40" outlineColor="r: 1, g: 0, b: 0, a: 1" outlineSoftness="0.3" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetTextFrameOutlineSoftness()](Trigger-API-Reference-DCEI-Functions-Custom-UI#settextframeoutlinesoftness-2)
[](extra-section-end)

[](manual-wiki-end)

## [](Text.shadowWidth)shadowWidth {shadowWidth}
**Value type: `number`**

[](manual-wiki-start)

#### Description
[](description-start)
The text shadow width for the text frame, scaled from 0-1. A value less than 0 will remove the shadow without removing the outline.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Text layout="flex" text="Text Frame" fontSize="40" shadowColor="r: 1, g: 0, b: 0, a: 1" shadowWidth="0.5" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetTextFrameShadowWidth()](Trigger-API-Reference-DCEI-Functions-Custom-UI#settextframeshadowwidth-2)
[](extra-section-end)

[](manual-wiki-end)

## [](Text.shadowSoftness)shadowSoftness {shadowSoftness}
**Value type: `number`**

[](manual-wiki-start)

#### Description
[](description-start)
The text shadow softness for the text frame, scaled from 0-1.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Text layout="flex" text="Text Frame" fontSize="40" outline="false" shadowSoftness="0.3" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetTextFrameShadowSoftness()](Trigger-API-Reference-DCEI-Functions-Custom-UI#settextframeshadowsoftness-2)
[](extra-section-end)

[](manual-wiki-end)

## [](Text.shadowColor)shadowColor {shadowColor}
**Value type: `color`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The text shadow color for the text frame.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Text layout="flex" text="Text Frame" fontSize="40" shadowColor="r: 1, g: 0, b: 0, a: 1" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetTextFrameShadowColor()](Trigger-API-Reference-DCEI-Functions-Custom-UI#settextframeshadowcolor-2)
[](extra-section-end)

[](manual-wiki-end)

## [](Text.shadowDirection)shadowDirection {shadowDirection}
**Value type: `vector2`**

[](manual-wiki-start)

#### Description
[](description-start)
The text shadow direction for the text frame. The coordinate's direction is based on the unit circle. The default direction is (0, -1).
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Text layout="flex" text="Text Frame" fontSize="40" outline="false" shadowDirection="x: 1, y: 1" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetTextFrameShadowDirection()](Trigger-API-Reference-DCEI-Functions-Custom-UI#settextframeshadowdirection-3)
[](extra-section-end)

[](manual-wiki-end)

