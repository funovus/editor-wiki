<table ><tbody ><tr></tr><tr><td><details>
<summary><b>Table of Contents</b></summary><hr>

<div markdown="1">
- [UI](#ui)
  * [Frame Types](#frame-types)
  * [Frame Attributes](#frame-attributes)
  * [Button Attributes](#button-attributes)
  * [Input Attributes](#input-attributes)
  * [Text Attributes](#text-attributes)
  * [Scroll Properties](#scroll-properties-applies-to-scroll-hscroll-vscroll)
  * [Camera](#camera)

</div>
</details></td></tr></tbody></table>

***
# UI
Custom UI can be constructed with XML via the `UI Editor` window (Windows > UI Editor).

**Example "TestCard"**
```xml
<HStack>
    <Frame backgroundImage="banner03_gray" padding="40">
        <Text id="text" text="left" textColor="r: 1, g: 0.5, b: 1"/>
    </Frame>
    <Button id="button" backgroundImage="arrow01_r" width="72" height="94">
</HStack>
```
These XML frames can then be created and referenced in script as such:
```lua
-- Create the UI
local card = DCEI.CreateFrameFromXml(parent, "TestCard")
-- Get references to children frames.
local text_ui = DCEI.GetChildFrameById(item, "text")
local button_ui = DCEI.GetChildFrameById(item, "button")
```


## Frame Types
- Frame
- Button
- Input
- VStack
- HStack
- VScroll
- HScroll
- Scroll
- Mask
- Highlight
- Camera
- Text

## Frame Attributes
- `id` <i>string</i>
- `width` <i>number</i>
- `minWidth` <i>number</i>
- `maxWidth` <i>number</i>
- `widthExpression` <i>string</i>
- `height` <i>number</i>
- `minHeight` <i>number</i>
- `maxHeight` <i>number</i>
- `heightExpression` <i>string</i>
- `backgroundImage` <i>string</i>
- `backgroundImageExpression` <i>string</i>
- `backgroundImageFillAmount` <i>number</i>
- `backgroundImageFillHorizontal` <i>boolean</i>
- `backgroundImageFillVertical` <i>boolean</i>
- `backgroundImageFillRadial` <i>boolean</i>
- `backgroundImageFillOrigin` <i>number</i>
- `backgroundImageFillAmountExpression` <i>string</i>
- `backgroundImageColor` <i>color</i>
- `backgroundImageColorExpressionR` <i>string</i>
- `backgroundImageColorExpressionG` <i>string</i>
- `backgroundImageColorExpressionB` <i>string</i>
- `backgroundImageColorExpressionA` <i>string</i>
- `backgroundImageGrayScale` <i>boolean</i>
- `padding` <i>string</i>
- `paddingLeft` <i>number</i>
- `paddingRight` <i>number</i>
- `paddingTop` <i>number</i>
- `paddingBottom` <i>number</i>
- `leftAlignment` <i>boolean</i>
- `rightAlignment` <i>boolean</i>
- `topAlignment` <i>boolean</i>
- `bottomAlignment` <i>boolean</i>
- `centerAlignment` <i>boolean</i>
- `leftAlignmentInParent` <i>boolean</i>
- `rightAlignmentInParent` <i>boolean</i>
- `topAlignmentInParent` <i>boolean</i>
- `bottomAlignmentInParent` <i>boolean</i>
- `centerAlignmentInParent` <i>boolean</i>
- `horizontalOffsetInParent` <i>number</i>
- `verticialOffsetInParent` <i>number</i>
- `flipHorizontal` <i>boolean</i>
- `flipVertical` <i>boolean</i>
- `matchParentHeight` <i>boolean</i>
- `matchParentWidth` <i>boolean</i>
- `tooltipText` <i>string</i>
- `blockInput` <i>boolean</i>
- `spacing` <i>number</i> (only useful for vstack and hstack)

## Button Attributes
- `enable` <i>boolean</i>

## Input Attributes
- `text` <i>string</i>
- `fontSize` <i>number</i>
- `color` <i>color</i>
- `outline` <i>boolean</i>
- `placeholder` <i>string</i>
- `placeholderFontSize` <i>number</i>
- `placeholderColor` <i>color</i>
- `placeholderOutline` <i>boolean</i>

## Text Attributes
- `text` <i>string</i>
- `textExpression` <i>expression</i>
- `fontSize` <i>number</i>
- `fontSizeMin` <i>number</i>
- `fontSizeMax` <i>number</i>
- `color` <i>color</i>
- `outline` <i>boolean</i>

## Scroll Properties (applies to Scroll, HScroll, VScroll)
- `inertia` <i>boolean</i>
- `decelerationRate` <i>number</i>

## Camera
- `size` <i>vector2</i>
- `position` <i>vector3</i>
- `rotation` <i>vector3</i>
- `discardDepth` <i>boolean</i>
- `cullingMask` <i>number</i>
- `cameraBackgroundColor` <i>color</i>
