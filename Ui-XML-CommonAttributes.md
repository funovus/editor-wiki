<div id="toc" markdown="1">
- [Ui XML Reference\CommonAttributes](#ui-xml-referencecommonattributes)
  * [xmlns:bind](#xmlnsbind)
  * [id](#id)
  * [active](#active)
  * [width](#width)
  * [height](#height)
  * [minWidth](#minwidth)
  * [maxWidth](#maxwidth)
  * [minHeight](#minheight)
  * [maxHeight](#maxheight)
  * [backgroundImage](#backgroundimage)
  * [frameImage](#frameimage)
  * [padding](#padding)
  * [leftAlignmentInParent](#leftalignmentinparent)
  * [rightAlignmentInParent](#rightalignmentinparent)
  * [topAlignmentInParent](#topalignmentinparent)
  * [bottomAlignmentInParent](#bottomalignmentinparent)
  * [centerAlignmentInParent](#centeralignmentinparent)
  * [horizontalOffsetInParent](#horizontaloffsetinparent)
  * [verticalOffsetInParent](#verticaloffsetinparent)
  * [flipHorizontal](#fliphorizontal)
  * [flipVertical](#flipvertical)
  * [matchParentHeight](#matchparentheight)
  * [matchParentWidth](#matchparentwidth)
  * [paddingLeft](#paddingleft)
  * [paddingRight](#paddingright)
  * [paddingTop](#paddingtop)
  * [paddingBottom](#paddingbottom)
  * [spacing](#spacing)
  * [leftAlignment](#leftalignment)
  * [rightAlignment](#rightalignment)
  * [topAlignment](#topalignment)
  * [bottomAlignment](#bottomalignment)
  * [centerAlignment](#centeralignment)
  * [alpha](#alpha)
  * [useImageSizeRatio](#useimagesizeratio)
  * [frameSizeByBackgroundImageSizeAndRatio](#framesizebybackgroundimagesizeandratio)
  * [backgroundImageExpression](#backgroundimageexpression)
  * [backgroundImageFillAmount](#backgroundimagefillamount)
  * [backgroundImageFillHorizontal](#backgroundimagefillhorizontal)
  * [backgroundImageFillVertical](#backgroundimagefillvertical)
  * [backgroundImageFillRadial](#backgroundimagefillradial)
  * [backgroundImageFillOrigin](#backgroundimagefillorigin)
  * [backgroundImageFillAmountExpression](#backgroundimagefillamountexpression)
  * [backgroundImageTiled](#backgroundimagetiled)
  * [backgroundImagePixelsPerUnitMultiplier](#backgroundimagepixelsperunitmultiplier)
  * [frameImageExpression](#frameimageexpression)
  * [frameImageFillAmount](#frameimagefillamount)
  * [frameImageFillHorizontal](#frameimagefillhorizontal)
  * [frameImageFillVertical](#frameimagefillvertical)
  * [frameImageFillRadial](#frameimagefillradial)
  * [frameImageFillOrigin](#frameimagefillorigin)
  * [frameImageFillAmountExpression](#frameimagefillamountexpression)
  * [frameImageTiled](#frameimagetiled)
  * [frameImagePixelsPerUnitMultiplier](#frameimagepixelsperunitmultiplier)
  * [widthExpression](#widthexpression)
  * [heightExpression](#heightexpression)
  * [backgroundImageColor](#backgroundimagecolor)
  * [backgroundImageColorExpressionR](#backgroundimagecolorexpressionr)
  * [backgroundImageColorExpressionG](#backgroundimagecolorexpressiong)
  * [backgroundImageColorExpressionB](#backgroundimagecolorexpressionb)
  * [backgroundImageColorExpressionA](#backgroundimagecolorexpressiona)
  * [backgroundImageGrayScale](#backgroundimagegrayscale)
  * [frameImageColor](#frameimagecolor)
  * [frameImageColorExpressionR](#frameimagecolorexpressionr)
  * [frameImageColorExpressionG](#frameimagecolorexpressiong)
  * [frameImageColorExpressionB](#frameimagecolorexpressionb)
  * [frameImageColorExpressionA](#frameimagecolorexpressiona)
  * [frameImageGrayScale](#frameimagegrayscale)
  * [tooltipText](#tooltiptext)
  * [blockInput](#blockinput)
  * [rotation3d](#rotation3d)
  * [preview](#preview)
  * [layout](#layout)
  * [flexDirection](#flexdirection)
  * [flexGrow](#flexgrow)
  * [flexShrink](#flexshrink)
  * [flexWrap](#flexwrap)
  * [justifyContent](#justifycontent)
  * [alignItems](#alignitems)
  * [alignContent](#aligncontent)
  * [alignSelf](#alignself)
  * [marginLeft](#marginleft)
  * [marginRight](#marginright)
  * [marginTop](#margintop)
  * [marginBottom](#marginbottom)
  * [widthPercent](#widthpercent)
  * [heightPercent](#heightpercent)
  * [position](#position)
  * [left](#left)
  * [right](#right)
  * [top](#top)
  * [bottom](#bottom)
  * [aspectRatio](#aspectratio)
  * [controller](#controller)
  * [class](#class)

</div>

***

# [Ui XML Reference](Ui-XML)\\CommonAttributes {ui-xml-referenceCommonAttributes}

[](overview-start)

Attributes commonly available to most custom UI frames created in XML.

[](overview-end)



## [](CommonAttributes.xmlns:bind)xmlns:bind {xmlnsbind}
**Value type: `string`**

[](manual-wiki-start)

#### Description
[](description-start)
Used to enable data binding of other XML attributes (where supported) by adding xmlns:bind="https://platform.wildsky.dev/xml/ui/bind" to the top level frame of a UI element. Attribute binding can be used to bind constants or state variables to XML attributes that update automatically on state change.

Attributes marked with **Supports data binding** indicate that the attribute can be bound to states, with some frames having unique bindings such as [buttons' onClick](Ui-XML-Button#bindonclick).
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<VStack xmlns:bind="https://platform.wildsky.dev/xml/ui/bind">
    <!-- Declare initial state values. -->
    <State name="red" booleanValue="false" />
    <!-- Show different background images depending on the state value and flip state value when clicked. -->
    <Button bind:backgroundImage="'btn_' .. (state.red and 'red' or 'blue')" bind:onClick="state.red = not state.red">
        <Text text="switch color" />
    </Button>
    <Text bind:text="state.red and 'red' or 'blue'" />
</VStack>
```
State variables can be declared using XML tag "State" and assgined an initial value (right now only boolean/number/string types are supported). To bind attributes to state variables, first add a declaration for the "bind" XML namespace to the outer most XML tag and then use "bind:xxx" attributes to bind attributes to a Lua expression. In the lua expression you can reference the current UI state variables through a Lua table named "state".

To access UI state variables in trigger, use [GetFrameState()](Trigger-API-Reference-DCEI-Functions-Custom-UI#object-getframestatetransform-ui). E.g.:
```lua
local state = DCEI.GetFrameState(ui)
state.red = true
```
Unlike UI data binding expressions that are evaluated every frame, this new UI state binding will only re-evaluate the attributes when the state changes. It's also more convenient to use as it can be declared entirely in XML and is more expressive as it allows any valid Lua expressions.
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.id)id {id}
**Value type: `string`**

[](manual-wiki-start)

#### Description
[](description-start)
The ID of the UI frame.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame id="frame" height="100" width="100" backgroundImageColor="r: 1, g: 1, b: 1, a: 0.5"/>
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [GetChildFrameById()](Trigger-API-Reference-DCEI-Functions-Custom-UI#transform-getchildframebyidtransform-ui-string-id)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.active)active {active}
**Value type: `boolean`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The active status of the UI frame, where `true` is active and `false` is inactive. Inactive frames are not displayed.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame id="frame" height="100" width="100" backgroundImageColor="r: 1, g: 1, b: 1, a: 0.5" active="false" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [IsFrameActive()](Trigger-API-Reference-DCEI-Functions-Custom-UI#bool-isframeactivetransform-ui)
- [SetFrameActive()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframeactivetransform-ui-bool-value)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.width)width {width}
**Value type: `number`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The width of the UI frame.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame id="frame" height="100" width="100" backgroundImageColor="r: 1, g: 1, b: 1, a: 0.5"/>
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [GetFrameWidth()](Trigger-API-Reference-DCEI-Functions-Custom-UI#float-getframewidthtransform-ui)
- [SetFrameSize()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframesizetransform-ui-float-width-float-height)

#### Related UI XML Properties:
- [matchParentWidth](#matchparentwidth)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.height)height {height}
**Value type: `number`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The height of the UI frame.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame id="frame" height="100" width="100" backgroundImageColor="r: 1, g: 1, b: 1, a: 0.5"/>
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [GetFrameHeight()](Trigger-API-Reference-DCEI-Functions-Custom-UI#float-getframeheighttransform-ui)
- [SetFrameSize()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframesizetransform-ui-float-width-float-height)

#### Related UI XML Properties:
- [matchParentHeight](#matchparentheight)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.minWidth)minWidth {minWidth}
**Value type: `number`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The minimum width of the UI frame.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame id="frame" minHeight="100" minWidth="100" backgroundImageColor="r: 1, g: 1, b: 1, a: 0.5" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameMinSize()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframeminsizetransform-ui-float-width-float-height)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.maxWidth)maxWidth {maxWidth}
**Value type: `number`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The maximum width of the UI frame.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame id="frame" maxHeight="100" maxWidth="100" backgroundImageColor="r: 1, g: 1, b: 1, a: 0.5">
    <Frame height="200" width="200" backgroundImageColor="r: 0, g: 0, b: 1, a: 0.5" />
</Frame>
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameMaxSize()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframemaxsizetransform-ui-float-width-float-height)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.minHeight)minHeight {minHeight}
**Value type: `number`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The minimum height of the UI frame.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame id="frame" minHeight="100" minWidth="100" backgroundImageColor="r: 1, g: 1, b: 1, a: 0.5" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameMinSize()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframeminsizetransform-ui-float-width-float-height)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.maxHeight)maxHeight {maxHeight}
**Value type: `number`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The maximum height of the UI frame.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame id="frame" maxHeight="100" maxWidth="100" backgroundImageColor="r: 1, g: 1, b: 1, a: 0.5">
    <Frame height="200" width="200" backgroundImageColor="r: 0, g: 0, b: 1, a: 0.5" />
</Frame>
```
[](example-usage-end)

[](extra-section-start)
Related Trigger Function(s):
- [SetFrameMaxSize()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframemaxsizetransform-ui-float-width-float-height)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.backgroundImage)backgroundImage {backgroundImage}
**Value type: `texture`**

**:warning:Warning:warning::** This attribute was deprecated at editor version: 0.25.0, and will be removed after 90 days.

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The background image of the UI frame. This background image can be tinted by [backgroundImageColor](#backgroundimagecolor).
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame id="frame" height="100" width="100" backgroundImage="cart" backgroundImageColor="r: 1, g: 1, b: 1, a: 0.5" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameImage()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframeimagetransform-ui-string-name)

#### Related UI XML Properties:
- [backgroundImageExpression](#backgroundimageexpression)
- [backgroundImageColor](#backgroundimagecolor)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.frameImage)frameImage {frameImage}
**Value type: `texture`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The background image of the UI frame. This background image can be tinted by [backgroundImageColor](#backgroundimagecolor).
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame id="frame" height="100" width="100" backgroundImage="cart" backgroundImageColor="r: 1, g: 1, b: 1, a: 0.5" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameImage()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframeimagetransform-ui-string-name)

#### Related UI XML Properties:
- [backgroundImageExpression](#backgroundimageexpression)
- [backgroundImageColor](#backgroundimagecolor)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.padding)padding {padding}
**Value type: `string`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The padding of the UI frame.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<VStack padding="20" backgroundImage="frame01">
    <Frame height="100" width="100" backgroundImageColor="r: 0.5, g: 1, b: 0.5, a: 1" />
    <Frame height="100" width="100" backgroundImageColor="r: 0.5, g: 0.5, b: 1, a: 1" />
</VStack>
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFramePadding()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframepaddingtransform-ui-float-padding)

#### Related UI XML Properties:
- [paddingLeft](#paddingleft)
- [paddingRight](#paddingright)
- [paddingTop](#paddingtop)
- [paddingBottom](#paddingbottom)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.leftAlignmentInParent)leftAlignmentInParent {leftAlignmentInParent}
**Value type: `boolean`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The left alignment status of the UI frame in its parent, where `true` is left-aligned and `false` is not.

Note that setting left/right alignment won't work for frames that have their horizontal alignment determined by another source (ex, the children frames of a hstack). This can be worked around by wrapping the frame you want to reposition inside a blank frame.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame height="100" width="100" backgroundImageColor="r: 1, g: 1, b: 0.5, a: 1" leftAlignmentInParent="true" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameLeftAlignmentInParent()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframeleftalignmentinparenttransform-ui)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.rightAlignmentInParent)rightAlignmentInParent {rightAlignmentInParent}
**Value type: `boolean`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The right alignment status of the UI frame in its parent, where `true` is right-aligned and `false` is not.

Note that setting left/right alignment won't work for frames that have their horizontal alignment determined by another source (ex, the children frames of a hstack). This can be worked around by wrapping the frame you want to reposition inside a blank frame.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame height="100" width="100" backgroundImageColor="r: 1, g: 1, b: 0.5, a: 1" rightAlignmentInParent="true" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameRightAlignmentInParent()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframerightalignmentinparenttransform-ui)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.topAlignmentInParent)topAlignmentInParent {topAlignmentInParent}
**Value type: `boolean`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The top alignment status of the UI frame in its parent, where `true` is top-aligned and `false` is not.

Note that setting top/bottom alignment won't work for frames that have their vertical alignment determined by another source (ex, the children frames of a vstack). This can be worked around by wrapping the frame you want to reposition inside a blank frame.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame height="100" width="100" backgroundImageColor="r: 1, g: 1, b: 0.5, a: 1" topAlignmentInParent="true" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameTopAlignmentInParent()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframetopalignmentinparenttransform-ui)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.bottomAlignmentInParent)bottomAlignmentInParent {bottomAlignmentInParent}
**Value type: `boolean`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The bottom alignment status of the UI frame in its parent, where `true` is bottom-aligned and `false` is not.

Note that setting top/bottom alignment won't work for frames that have their vertical alignment determined by another source (ex, the children frames of a vstack). This can be worked around by wrapping the frame you want to reposition inside a blank frame.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame height="100" width="100" backgroundImageColor="r: 1, g: 1, b: 0.5, a: 1" bottomAlignmentInParent="true" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameBottomAlignmentInParent()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframebottomalignmentinparenttransform-ui)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.centerAlignmentInParent)centerAlignmentInParent {centerAlignmentInParent}
**Value type: `boolean`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The center alignment status of the UI frame in its parent, where `true` is center-aligned and `false` is not. This is the default alignment for newly created frames.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame height="100" width="100" backgroundImageColor="r: 1, g: 1, b: 0.5, a: 1" centerAlignmentInParent="true" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameCenterAlignmentInParent()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframecenteralignmentinparenttransform-ui)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.horizontalOffsetInParent)horizontalOffsetInParent {horizontalOffsetInParent}
**Value type: `number`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The horizontal offset of the UI frame in its parent.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame height="100" width="100" backgroundImageColor="r: 1, g: 1, b: 0.5, a: 1" horizontalOffsetInParent="100" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameHorizontalOffsetInParent()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframehorizontaloffsetinparenttransform-ui-float-value)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.verticalOffsetInParent)verticalOffsetInParent {verticalOffsetInParent}
**Value type: `number`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The vertical offset of the UI frame in its parent.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame height="100" width="100" backgroundImageColor="r: 1, g: 1, b: 0.5, a: 1" verticalOffsetInParent="100" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameVerticalOffsetInParent()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframeverticaloffsetinparenttransform-ui-float-value)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.flipHorizontal)flipHorizontal {flipHorizontal}
**Value type: `boolean`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The horizontal flip status of the UI frame, where `true` is flipped and `false` is not. Does not work on the root UI.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame backgroundImage="cart" useImageSizeRatio="1" flipHorizontal="true" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [FlipFrameHorizontal()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-flipframehorizontaltransform-ui)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.flipVertical)flipVertical {flipVertical}
**Value type: `boolean`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The vertical flip status of the UI frame, where `true` is flipped and `false` is not. Does not work on the root UI.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame backgroundImage="cart" useImageSizeRatio="1" flipVertical="true" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [FlipFrameVertical()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-flipframeverticaltransform-ui)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.matchParentHeight)matchParentHeight {matchParentHeight}
**Value type: `boolean`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The match parent height status of the UI frame, where `true` is matching and `false` means there is a set height.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame height="300" width="300">
    <Frame backgroundImage="cart" matchParentHeight="true" matchParentWidth="true" />
</Frame>
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameMatchParent()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframematchparenttransform-ui-bool-matchwidth-bool-matchheight)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.matchParentWidth)matchParentWidth {matchParentWidth}
**Value type: `boolean`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The match parent width status of the UI frame, where `true` is matching and `false` means there is a set width.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame height="300" width="300">
    <Frame backgroundImage="cart" matchParentHeight="true" matchParentWidth="true" />
</Frame>
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameMatchParent()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframematchparenttransform-ui-bool-matchwidth-bool-matchheight)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.paddingLeft)paddingLeft {paddingLeft}
**Value type: `number`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The left padding of the UI frame.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<VStack padding="10" paddingLeft="20" backgroundImage="frame01">
    <Frame height="100" width="100" backgroundImageColor="r: 0.5, g: 1, b: 0.5, a: 1" />
    <Frame height="100" width="100" backgroundImageColor="r: 0.5, g: 0.5, b: 1, a: 1" />
</VStack>
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFramePaddingLeft()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframepaddinglefttransform-ui-float-padding)

#### Related UI XML Properties:
- [padding](#padding)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.paddingRight)paddingRight {paddingRight}
**Value type: `number`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The right padding of the UI frame.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<VStack padding="10" paddingRight="20" backgroundImage="frame01">
    <Frame height="100" width="100" backgroundImageColor="r: 0.5, g: 1, b: 0.5, a: 1" />
    <Frame height="100" width="100" backgroundImageColor="r: 0.5, g: 0.5, b: 1, a: 1" />
</VStack>
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFramePaddingRight()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframepaddingrighttransform-ui-float-padding)

#### Related UI XML Properties:
- [padding](#padding)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.paddingTop)paddingTop {paddingTop}
**Value type: `number`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The top padding of the UI frame.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<VStack padding="10" paddingTop="20" backgroundImage="frame01">
    <Frame height="100" width="100" backgroundImageColor="r: 0.5, g: 1, b: 0.5, a: 1" />
    <Frame height="100" width="100" backgroundImageColor="r: 0.5, g: 0.5, b: 1, a: 1" />
</VStack>
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFramePaddingTop()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframepaddingtoptransform-ui-float-padding)

#### Related UI XML Properties:
- [padding](#padding)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.paddingBottom)paddingBottom {paddingBottom}
**Value type: `number`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The bottom padding of the UI frame.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<VStack padding="10" paddingBottom="20" backgroundImage="frame01">
    <Frame height="100" width="100" backgroundImageColor="r: 0.5, g: 1, b: 0.5, a: 1" />
    <Frame height="100" width="100" backgroundImageColor="r: 0.5, g: 0.5, b: 1, a: 1" />
</VStack>
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFramePaddingBottom()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframepaddingbottomtransform-ui-float-padding)

#### Related UI XML Properties:
- [padding](#padding)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.spacing)spacing {spacing}
**Value type: `number`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The spacing of the UI frame's child elements. This function affects frames that automatically position their children, such as stacks or scrolls. For scrolls, this function should be called on the content frame returned by [GetScrollFrameContent()](Trigger-API-Reference-DCEI-Functions-Custom-UI#transform-getscrollframecontenttransform-parent).
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<VStack padding="20" spacing="20" backgroundImage="frame01">
    <Frame height="100" width="100" backgroundImageColor="r: 0.5, g: 1, b: 0.5, a: 1" />
    <Frame height="100" width="100" backgroundImageColor="r: 0.5, g: 0.5, b: 1, a: 1" />
</VStack>
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameSpacing()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframespacingtransform-ui-float-spacing)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.leftAlignment)leftAlignment {leftAlignment}
**Value type: `boolean`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The left alignment status for the UI frame's contents, where `true` is left-aligned and `false` is not.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame height="200" width="200" leftAlignment="true" backgroundImageColor="r: 1, g: 0, b: 1, a: 0.4">
    <Frame backgroundImage="cart" height="100" width="100" />
</Frame>
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameLeftAlignment()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframeleftalignmenttransform-ui)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.rightAlignment)rightAlignment {rightAlignment}
**Value type: `boolean`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The right alignment status for the UI frame's contents, where `true` is right-aligned and `false` is not.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame height="200" width="200" rightAlignment="true" backgroundImageColor="r: 1, g: 0, b: 1, a: 0.4">
    <Frame backgroundImage="cart" height="100" width="100" />
</Frame>
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameRightAlignment()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframerightalignmenttransform-ui)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.topAlignment)topAlignment {topAlignment}
**Value type: `boolean`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The top alignment status for the UI frame's contents, where `true` is top-aligned and `false` is not.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame height="200" width="200" topAlignment="true" backgroundImageColor="r: 1, g: 0, b: 1, a: 0.4">
    <Frame backgroundImage="cart" height="100" width="100" />
</Frame>
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameTopAlignment()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframetopalignmenttransform-ui)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.bottomAlignment)bottomAlignment {bottomAlignment}
**Value type: `boolean`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The bottom alignment status for the UI frame's contents, where `true` is bottom-aligned and `false` is not.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame height="200" width="200" bottomAlignment="true" backgroundImageColor="r: 1, g: 0, b: 1, a: 0.4">
    <Frame backgroundImage="cart" height="100" width="100" />
</Frame>
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameBottomAlignment()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframebottomalignmenttransform-ui)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.centerAlignment)centerAlignment {centerAlignment}
**Value type: `boolean`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The center alignment status for the UI frame's contents, where `true` is center-aligned and `false` is not. This is the default alignment.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame height="200" width="200" centerAlignment="true" backgroundImageColor="r: 1, g: 0, b: 1, a: 0.4">
    <Frame backgroundImage="cart" height="100" width="100" />
</Frame>
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameCenterAlignment()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframecenteralignmenttransform-ui)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.alpha)alpha {alpha}
**Value type: `number`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The alpha value for the UI frame. This controls the transparency of the frame, and has a compounding effect with the [alpha value of the background image color](#backgroundimagecolor). This alpha value will also be applied to any children frames, making them transparent or opaque in turn - this cannot be overwritten by calling this function on children frames.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame backgroundImage="cart" useImageSizeRatio="1" alpha="0.5" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameAlpha()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframealphatransform-ui-float-alpha)
- [AnimateFrameAlpha()](Trigger-API-Reference-DCEI-Functions-Custom-UI#tweener-animateframealphatransform-ui-float-start-float-end-float-duration-string-ease)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.useImageSizeRatio)useImageSizeRatio {useImageSizeRatio}
**Value type: `number`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
This ratio determines the size of the frame based on the size of its background image, where `1` is the original size of the image. This size ratio will not overwrite a set size for the frame. Larger values will display a larger image.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame backgroundImage="cart" useImageSizeRatio="1" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameUseImageSizeRatio()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframeuseimagesizeratiotransform-ui-float-ratio)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.frameSizeByBackgroundImageSizeAndRatio)frameSizeByBackgroundImageSizeAndRatio {frameSizeByBackgroundImageSizeAndRatio}
**Value type: `number`**

**:warning:Warning:warning::** This attribute was deprecated at editor version: 0.25.0, and will be removed after 90 days.

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The image size ratio for the UI frame. Functionally identical to [useImageSizeRatio](#useimagesizeratio), may be deprecated.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame backgroundImage="cart" frameSizeByBackgroundImageSizeAndRatio="1" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameUseImageSizeRatio()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframeuseimagesizeratiotransform-ui-float-ratio)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.backgroundImageExpression)backgroundImageExpression {backgroundImageExpression}
**Value type: `string`**

**:warning:Warning:warning::** This attribute was deprecated at editor version: 0.25.0, and will be removed after 90 days.

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The background image expression for the UI frame. Expressions use data bound by [BindLuaTable()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-bindluatablestring-name-object-value).
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame backgroundImageExpression="data.image" useImageSizeRatio="1" />
```
Where "data.image" is [data bound](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-bindluatablestring-name-object-value) in lua:
```lua
local data = {image = "cart"}
DCEI.BindLuaTable("data", data)
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameImageExpression()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimageexpression-2)
- [BindLuaTable()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-bindluatablestring-name-object-value)

#### Related UI XML Properties:
- [backgroundImage](#backgroundimage)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.backgroundImageFillAmount)backgroundImageFillAmount {backgroundImageFillAmount}
**Value type: `number`**

**:warning:Warning:warning::** This attribute was deprecated at editor version: 0.25.0, and will be removed after 90 days.

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The background image fill amount for the UI frame, from 0-1.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame backgroundImage="cart" backgroundImageFillAmount="0.5" useImageSizeRatio="1" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameImageFillAmount()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframeimagefillamounttransform-ui-float-fill)
- [GetFrameImageFillAmount()](Trigger-API-Reference-DCEI-Functions-Custom-UI#float-getframeimagefillamounttransform-ui)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.backgroundImageFillHorizontal)backgroundImageFillHorizontal {backgroundImageFillHorizontal}
**Value type: `boolean`**

**:warning:Warning:warning::** This attribute was deprecated at editor version: 0.25.0, and will be removed after 90 days.

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The background image horizontal fill status of the UI frame in its parent, where `true` means the background image fill is horizontal and `false` means it is not. This is the default fill direction.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame backgroundImage="cart" backgroundImageFillAmount="0.5" backgroundImageFillHorizontal="true" useImageSizeRatio="1" />
```
Horizontal fill origin left:
![image](https://user-images.githubusercontent.com/34138206/149423196-008f3116-1532-45d4-9af3-5592c4661ef7.png)

Horizontal fill origin right:
![image](https://user-images.githubusercontent.com/34138206/149423223-71211480-9aa7-43aa-902e-c04eac120777.png)

[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameImageFillHorizontal()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframeimagefillhorizontaltransform-ui)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.backgroundImageFillVertical)backgroundImageFillVertical {backgroundImageFillVertical}
**Value type: `boolean`**

**:warning:Warning:warning::** This attribute was deprecated at editor version: 0.25.0, and will be removed after 90 days.

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The background image vertical fill status of the UI frame in its parent, where `true` means the background image fill is vertical and `false` means it is not.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame backgroundImage="cart" backgroundImageFillAmount="0.5" backgroundImageFillVertical="true" useImageSizeRatio="1" />
```
Vertical fill origin bottom:
![image](https://user-images.githubusercontent.com/34138206/149423622-5f9d49c1-151e-4608-9f0c-b8d173616889.png)

Vertical fill origin top:
![image](https://user-images.githubusercontent.com/34138206/149423640-75280b73-e0e0-42f1-bb79-ff97f5ae3e23.png)

[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameImageFillVertical()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframeimagefillverticaltransform-ui)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.backgroundImageFillRadial)backgroundImageFillRadial {backgroundImageFillRadial}
**Value type: `boolean`**

**:warning:Warning:warning::** This attribute was deprecated at editor version: 0.25.0, and will be removed after 90 days.

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The background image radial fill status of the UI frame in its parent, where `true` means the background image fill is radial and `false` means it is not.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame backgroundImage="cart" backgroundImageFillAmount="0.75" backgroundImageFillRadial="true" useImageSizeRatio="1" />
```
Radial fill origin bottom:
![image](https://user-images.githubusercontent.com/34138206/149423777-28779cff-ca44-4245-86cd-ac60a0d02cca.png)

Radial fill origin right:
![image](https://user-images.githubusercontent.com/34138206/149423801-1fa4c625-58ba-4020-bf7b-512b20c72eb2.png)

Radial fill origin top:
![image](https://user-images.githubusercontent.com/34138206/149423825-63baf560-de15-499a-b505-64a0de45f369.png)

Radial fill origin left:
![image](https://user-images.githubusercontent.com/34138206/149423847-1a6ab6b4-619e-4bac-a817-98efb2a3aefb.png)

[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameImageFillRadial()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframeimagefillradialtransform-ui)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.backgroundImageFillOrigin)backgroundImageFillOrigin {backgroundImageFillOrigin}
**Value type: `number`**

**:warning:Warning:warning::** This attribute was deprecated at editor version: 0.25.0, and will be removed after 90 days.

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The background image fill origin side of the UI frame in its parent.
```
[0, 1] for horizontal or vertical fills ([left, right] and [bottom, top])
[0, 1, 2, 3] for radial fills ([bottom, right, top, left])
```
Horizontal fill origin left:
![image](https://user-images.githubusercontent.com/34138206/149423196-008f3116-1532-45d4-9af3-5592c4661ef7.png)

Horizontal fill origin right:
![image](https://user-images.githubusercontent.com/34138206/149423223-71211480-9aa7-43aa-902e-c04eac120777.png)

Vertical fill origin bottom:
![image](https://user-images.githubusercontent.com/34138206/149423622-5f9d49c1-151e-4608-9f0c-b8d173616889.png)

Vertical fill origin top:
![image](https://user-images.githubusercontent.com/34138206/149423640-75280b73-e0e0-42f1-bb79-ff97f5ae3e23.png)

Radial fill origin bottom:
![image](https://user-images.githubusercontent.com/34138206/149423777-28779cff-ca44-4245-86cd-ac60a0d02cca.png)

Radial fill origin right:
![image](https://user-images.githubusercontent.com/34138206/149423801-1fa4c625-58ba-4020-bf7b-512b20c72eb2.png)

Radial fill origin top:
![image](https://user-images.githubusercontent.com/34138206/149423825-63baf560-de15-499a-b505-64a0de45f369.png)

Radial fill origin left:
![image](https://user-images.githubusercontent.com/34138206/149423847-1a6ab6b4-619e-4bac-a817-98efb2a3aefb.png)

[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame backgroundImage="cart" backgroundImageFillAmount="0.75" backgroundImageFillRadial="true" backgroundImageFillOrigin="3" useImageSizeRatio="1" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameImageFillOrigin()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframeimagefillorigintransform-ui-int-origin)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.backgroundImageFillAmountExpression)backgroundImageFillAmountExpression {backgroundImageFillAmountExpression}
**Value type: `string`**

**:warning:Warning:warning::** This attribute was deprecated at editor version: 0.25.0, and will be removed after 90 days.

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The background image fill amount expression for the UI frame. Expressions use data bound by [BindLuaTable()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-bindluatablestring-name-object-value).
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame backgroundImage="cart" backgroundImageFillAmountExpression="data.fill" useImageSizeRatio="1" />
```
Where "data.fill" is [data bound](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-bindluatablestring-name-object-value) in lua:
```lua
local data = {fill = 0.5}
DCEI.BindLuaTable("data", data)
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameImageFillAmountExpression()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframeimagefillamountexpressiontransform-ui-string-expression-bool-inverse)
- [BindLuaTable()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-bindluatablestring-name-object-value)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.backgroundImageTiled)backgroundImageTiled {backgroundImageTiled}
**Value type: `boolean`**

**:warning:Warning:warning::** This attribute was deprecated at editor version: 0.25.0, and will be removed after 90 days.

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The background image tiling status for the UI frame. By default this is true for [9 sliced](https://en.wikipedia.org/wiki/9-slice_scaling) images.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame backgroundImage="frame01" height="300" width="300" backgroundImageTiled="false" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameImageTiled()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframeimagetiledtransform-ui-bool-settiled)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.backgroundImagePixelsPerUnitMultiplier)backgroundImagePixelsPerUnitMultiplier {backgroundImagePixelsPerUnitMultiplier}
**Value type: `number`**

**:warning:Warning:warning::** This attribute was deprecated at editor version: 0.25.0, and will be removed after 90 days.

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The background image pixels per unit multiplier for the UI frame. For [9 sliced](https://en.wikipedia.org/wiki/9-slice_scaling) images, this will increase or decrease the amount of tile slices used in the background image.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<!-- standard cart background image -->
<Frame backgroundImage="cart" useImageSizeRatio="1" horizontalOffsetInParent="-300" backgroundImagePixelsPerUnitMultiplier="1" backgroundImageTiled="true" />

<!-- 9-sliced frame background image -->
<Frame backgroundImage="frame01_blue" height="250" width="250" horizontalOffsetInParent="300" backgroundImagePixelsPerUnitMultiplier="1" />
```
Lua code to render the frames:
```lua
    local xml = DCEI.CreateFrameFromXml(DCEI.GetUiRootFrame(), "frame")
    local cart = DCEI.CreateFrameFromXml(DCEI.GetUiRootFrame(), "cart")
```
The example usage above produces this output:
![image](https://user-images.githubusercontent.com/34138206/147608112-03a59615-838f-47bd-a0e6-8e6d9f69d2d1.png)

Both frames look normal.

When `backgroundImagePixelsPerUnitMultiplier` is given a value of 2:
![image](https://user-images.githubusercontent.com/34138206/147608409-2564e234-3198-447e-a8c1-f422050f8888.png)

On the left, there is now a grid of cart images, and on the right the 9-sliced image has sharper corners.

When `backgroundImagePixelsPerUnitMultiplier` is given a value of 0.5:
![image](https://user-images.githubusercontent.com/34138206/147608625-626aa3a6-6c81-4ef8-8117-c989219a5e9f.png)

On the left, the cart image only displays the bottom right corner as that is all it has space for, and on the right the 9-sliced image is much more rounded. Both images are also noticeably more pixilated.
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFramePixelsPerUnitMultiplier()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframepixelsperunitmultipliertransform-ui-float-pixelsperunitmultiplier)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.frameImageExpression)frameImageExpression {frameImageExpression}
**Value type: `string`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The background image expression for the UI frame. Expressions use data bound by [BindLuaTable()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-bindluatablestring-name-object-value).
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame backgroundImageExpression="data.image" useImageSizeRatio="1" />
```
Where "data.image" is [data bound](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-bindluatablestring-name-object-value) in lua:
```lua
local data = {image = "cart"}
DCEI.BindLuaTable("data", data)
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameImageExpression()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimageexpression-2)
- [BindLuaTable()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-bindluatablestring-name-object-value)

#### Related UI XML Properties:
- [backgroundImage](#backgroundimage)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.frameImageFillAmount)frameImageFillAmount {frameImageFillAmount}
**Value type: `number`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The background image fill amount for the UI frame, from 0-1.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame backgroundImage="cart" backgroundImageFillAmount="0.5" useImageSizeRatio="1" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameImageFillAmount()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframeimagefillamounttransform-ui-float-fill)
- [GetFrameImageFillAmount()](Trigger-API-Reference-DCEI-Functions-Custom-UI#float-getframeimagefillamounttransform-ui)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.frameImageFillHorizontal)frameImageFillHorizontal {frameImageFillHorizontal}
**Value type: `boolean`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The background image horizontal fill status of the UI frame in its parent, where `true` means the background image fill is horizontal and `false` means it is not. This is the default fill direction.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame backgroundImage="cart" backgroundImageFillAmount="0.5" backgroundImageFillHorizontal="true" useImageSizeRatio="1" />
```
Horizontal fill origin left:
![image](https://user-images.githubusercontent.com/34138206/149423196-008f3116-1532-45d4-9af3-5592c4661ef7.png)

Horizontal fill origin right:
![image](https://user-images.githubusercontent.com/34138206/149423223-71211480-9aa7-43aa-902e-c04eac120777.png)

[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameImageFillHorizontal()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframeimagefillhorizontaltransform-ui)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.frameImageFillVertical)frameImageFillVertical {frameImageFillVertical}
**Value type: `boolean`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The background image vertical fill status of the UI frame in its parent, where `true` means the background image fill is vertical and `false` means it is not.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame backgroundImage="cart" backgroundImageFillAmount="0.5" backgroundImageFillVertical="true" useImageSizeRatio="1" />
```
Vertical fill origin bottom:
![image](https://user-images.githubusercontent.com/34138206/149423622-5f9d49c1-151e-4608-9f0c-b8d173616889.png)

Vertical fill origin top:
![image](https://user-images.githubusercontent.com/34138206/149423640-75280b73-e0e0-42f1-bb79-ff97f5ae3e23.png)

[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameImageFillVertical()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframeimagefillverticaltransform-ui)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.frameImageFillRadial)frameImageFillRadial {frameImageFillRadial}
**Value type: `boolean`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The background image radial fill status of the UI frame in its parent, where `true` means the background image fill is radial and `false` means it is not.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame backgroundImage="cart" backgroundImageFillAmount="0.75" backgroundImageFillRadial="true" useImageSizeRatio="1" />
```
Radial fill origin bottom:
![image](https://user-images.githubusercontent.com/34138206/149423777-28779cff-ca44-4245-86cd-ac60a0d02cca.png)

Radial fill origin right:
![image](https://user-images.githubusercontent.com/34138206/149423801-1fa4c625-58ba-4020-bf7b-512b20c72eb2.png)

Radial fill origin top:
![image](https://user-images.githubusercontent.com/34138206/149423825-63baf560-de15-499a-b505-64a0de45f369.png)

Radial fill origin left:
![image](https://user-images.githubusercontent.com/34138206/149423847-1a6ab6b4-619e-4bac-a817-98efb2a3aefb.png)

[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameImageFillRadial()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframeimagefillradialtransform-ui)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.frameImageFillOrigin)frameImageFillOrigin {frameImageFillOrigin}
**Value type: `number`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The background image fill origin side of the UI frame in its parent.
```
[0, 1] for horizontal or vertical fills ([left, right] and [bottom, top])
[0, 1, 2, 3] for radial fills ([bottom, right, top, left])
```
Horizontal fill origin left:
![image](https://user-images.githubusercontent.com/34138206/149423196-008f3116-1532-45d4-9af3-5592c4661ef7.png)

Horizontal fill origin right:
![image](https://user-images.githubusercontent.com/34138206/149423223-71211480-9aa7-43aa-902e-c04eac120777.png)

Vertical fill origin bottom:
![image](https://user-images.githubusercontent.com/34138206/149423622-5f9d49c1-151e-4608-9f0c-b8d173616889.png)

Vertical fill origin top:
![image](https://user-images.githubusercontent.com/34138206/149423640-75280b73-e0e0-42f1-bb79-ff97f5ae3e23.png)

Radial fill origin bottom:
![image](https://user-images.githubusercontent.com/34138206/149423777-28779cff-ca44-4245-86cd-ac60a0d02cca.png)

Radial fill origin right:
![image](https://user-images.githubusercontent.com/34138206/149423801-1fa4c625-58ba-4020-bf7b-512b20c72eb2.png)

Radial fill origin top:
![image](https://user-images.githubusercontent.com/34138206/149423825-63baf560-de15-499a-b505-64a0de45f369.png)

Radial fill origin left:
![image](https://user-images.githubusercontent.com/34138206/149423847-1a6ab6b4-619e-4bac-a817-98efb2a3aefb.png)

[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame backgroundImage="cart" backgroundImageFillAmount="0.75" backgroundImageFillRadial="true" backgroundImageFillOrigin="3" useImageSizeRatio="1" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameImageFillOrigin()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframeimagefillorigintransform-ui-int-origin)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.frameImageFillAmountExpression)frameImageFillAmountExpression {frameImageFillAmountExpression}
**Value type: `string`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The background image fill amount expression for the UI frame. Expressions use data bound by [BindLuaTable()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-bindluatablestring-name-object-value).
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame backgroundImage="cart" backgroundImageFillAmountExpression="data.fill" useImageSizeRatio="1" />
```
Where "data.fill" is [data bound](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-bindluatablestring-name-object-value) in lua:
```lua
local data = {fill = 0.5}
DCEI.BindLuaTable("data", data)
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameImageFillAmountExpression()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframeimagefillamountexpressiontransform-ui-string-expression-bool-inverse)
- [BindLuaTable()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-bindluatablestring-name-object-value)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.frameImageTiled)frameImageTiled {frameImageTiled}
**Value type: `boolean`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The background image tiling status for the UI frame. By default this is true for [9 sliced](https://en.wikipedia.org/wiki/9-slice_scaling) images.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame backgroundImage="frame01" height="300" width="300" backgroundImageTiled="false" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameImageTiled()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframeimagetiledtransform-ui-bool-settiled)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.frameImagePixelsPerUnitMultiplier)frameImagePixelsPerUnitMultiplier {frameImagePixelsPerUnitMultiplier}
**Value type: `number`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The background image pixels per unit multiplier for the UI frame. For [9 sliced](https://en.wikipedia.org/wiki/9-slice_scaling) images, this will increase or decrease the amount of tile slices used in the background image.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<!-- standard cart background image -->
<Frame backgroundImage="cart" useImageSizeRatio="1" horizontalOffsetInParent="-300" backgroundImagePixelsPerUnitMultiplier="1" backgroundImageTiled="true" />

<!-- 9-sliced frame background image -->
<Frame backgroundImage="frame01_blue" height="250" width="250" horizontalOffsetInParent="300" backgroundImagePixelsPerUnitMultiplier="1" />
```
Lua code to render the frames:
```lua
    local xml = DCEI.CreateFrameFromXml(DCEI.GetUiRootFrame(), "frame")
    local cart = DCEI.CreateFrameFromXml(DCEI.GetUiRootFrame(), "cart")
```
The example usage above produces this output:
![image](https://user-images.githubusercontent.com/34138206/147608112-03a59615-838f-47bd-a0e6-8e6d9f69d2d1.png)

Both frames look normal.

When `backgroundImagePixelsPerUnitMultiplier` is given a value of 2:
![image](https://user-images.githubusercontent.com/34138206/147608409-2564e234-3198-447e-a8c1-f422050f8888.png)

On the left, there is now a grid of cart images, and on the right the 9-sliced image has sharper corners.

When `backgroundImagePixelsPerUnitMultiplier` is given a value of 0.5:
![image](https://user-images.githubusercontent.com/34138206/147608625-626aa3a6-6c81-4ef8-8117-c989219a5e9f.png)

On the left, the cart image only displays the bottom right corner as that is all it has space for, and on the right the 9-sliced image is much more rounded. Both images are also noticeably more pixilated.
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFramePixelsPerUnitMultiplier()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframepixelsperunitmultipliertransform-ui-float-pixelsperunitmultiplier)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.widthExpression)widthExpression {widthExpression}
**Value type: `string`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The width expression for the UI frame. Expressions use data bound by [BindLuaTable()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-bindluatablestring-name-object-value).
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame backgroundImage="cart" width="data.width" height="data.height" />
```
Where "data.width" is [data bound](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-bindluatablestring-name-object-value) in lua:
```lua
local data = {width = 100, height = 100}
DCEI.BindLuaTable("data", data)
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameWidthExpression()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframewidthexpression-2)
- [BindLuaTable()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-bindluatablestring-name-object-value)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.heightExpression)heightExpression {heightExpression}
**Value type: `string`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The height expression for the UI frame. Expressions use data bound by [BindLuaTable()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-bindluatablestring-name-object-value).
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame backgroundImage="cart" width="data.width" height="data.height" />
```
Where "data.height" is [data bound](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-bindluatablestring-name-object-value) in lua:
```lua
local data = {width = 100, height = 100}
DCEI.BindLuaTable("data", data)
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameHeightExpression()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeheightexpression-2)
- [BindLuaTable()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-bindluatablestring-name-object-value)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.backgroundImageColor)backgroundImageColor {backgroundImageColor}
**Value type: `color`**

**:warning:Warning:warning::** This attribute was deprecated at editor version: 0.25.0, and will be removed after 90 days.

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The background image color or tint for the UI frame, using RGBA values (valid values are between 0 and 1). Note that frames without background images can be tinted a solid color. Alpha 1 is completely opaque, alpha 0 is completely transparent.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame height="100" width="100" backgroundImageColor="r: 0.5, g: 1, b: 0.5, a: 1" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameImageColor()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframeimagecolortransform-ui-colorrgba-color)

#### Related UI XML Properties:
- [backgroundImage](#backgroundimage)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.backgroundImageColorExpressionR)backgroundImageColorExpressionR {backgroundImageColorExpressionR}
**Value type: `string`**

**:warning:Warning:warning::** This attribute was deprecated at editor version: 0.25.0, and will be removed after 90 days.

[](manual-wiki-start)

#### Description
[](description-start)
The background image color's R value expression for the UI frame. Expressions use data bound by [BindLuaTable()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-bindluatablestring-name-object-value).
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame backgroundImage="cart" backgroundImageColorExpressionR="data.R" backgroundImageColorExpressionG="data.G" backgroundImageColorExpressionB="data.B" backgroundImageColorExpressionA="data.A" useImageSizeRatio="1" />
```
Where "data.R", "data.G", "data.B", and "data.A" are [data bound](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-bindluatablestring-name-object-value) in lua:
```lua
local data = {R = 1, G = 1, B = 1, A = 1}
DCEI.BindLuaTable("data", data)
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameImageColorExpression()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagecolorexpression-5)
- [BindLuaTable()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-bindluatablestring-name-object-value)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.backgroundImageColorExpressionG)backgroundImageColorExpressionG {backgroundImageColorExpressionG}
**Value type: `string`**

**:warning:Warning:warning::** This attribute was deprecated at editor version: 0.25.0, and will be removed after 90 days.

[](manual-wiki-start)

#### Description
[](description-start)
The background image color's G value expression for the UI frame. Expressions use data bound by [BindLuaTable()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-bindluatablestring-name-object-value).
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame backgroundImage="cart" backgroundImageColorExpressionR="data.R" backgroundImageColorExpressionG="data.G" backgroundImageColorExpressionB="data.B" backgroundImageColorExpressionA="data.A" useImageSizeRatio="1" />
```
Where "data.R", "data.G", "data.B", and "data.A" are [data bound](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-bindluatablestring-name-object-value) in lua:
```lua
local data = {R = 1, G = 1, B = 1, A = 1}
DCEI.BindLuaTable("data", data)
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameImageColorExpression()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagecolorexpression-5)
- [BindLuaTable()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-bindluatablestring-name-object-value)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.backgroundImageColorExpressionB)backgroundImageColorExpressionB {backgroundImageColorExpressionB}
**Value type: `string`**

**:warning:Warning:warning::** This attribute was deprecated at editor version: 0.25.0, and will be removed after 90 days.

[](manual-wiki-start)

#### Description
[](description-start)
The background image color's B value expression for the UI frame. Expressions use data bound by [BindLuaTable()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-bindluatablestring-name-object-value).
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame backgroundImage="cart" backgroundImageColorExpressionR="data.R" backgroundImageColorExpressionG="data.G" backgroundImageColorExpressionB="data.B" backgroundImageColorExpressionA="data.A" useImageSizeRatio="1" />
```
Where "data.R", "data.G", "data.B", and "data.A" are [data bound](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-bindluatablestring-name-object-value) in lua:
```lua
local data = {R = 1, G = 1, B = 1, A = 1}
DCEI.BindLuaTable("data", data)
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameImageColorExpression()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagecolorexpression-5)
- [BindLuaTable()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-bindluatablestring-name-object-value)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.backgroundImageColorExpressionA)backgroundImageColorExpressionA {backgroundImageColorExpressionA}
**Value type: `string`**

**:warning:Warning:warning::** This attribute was deprecated at editor version: 0.25.0, and will be removed after 90 days.

[](manual-wiki-start)

#### Description
[](description-start)
The background image color's A value expression for the UI frame. Expressions use data bound by [BindLuaTable()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-bindluatablestring-name-object-value).
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame backgroundImage="cart" backgroundImageColorExpressionR="data.R" backgroundImageColorExpressionG="data.G" backgroundImageColorExpressionB="data.B" backgroundImageColorExpressionA="data.A" useImageSizeRatio="1" />
```
Where "data.R", "data.G", "data.B", and "data.A" are [data bound](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-bindluatablestring-name-object-value) in lua:
```lua
local data = {R = 1, G = 1, B = 1, A = 1}
DCEI.BindLuaTable("data", data)
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameImageColorExpression()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagecolorexpression-5)
- [BindLuaTable()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-bindluatablestring-name-object-value)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.backgroundImageGrayScale)backgroundImageGrayScale {backgroundImageGrayScale}
**Value type: `boolean`**

**:warning:Warning:warning::** This attribute was deprecated at editor version: 0.25.0, and will be removed after 90 days.

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The background image gray scale status for the UI frame, where `true` means the background image is in gray scale and `false` means it is not.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame backgroundImage="cart" useImageSizeRatio="1" backgroundImageGrayScale="true" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameImageGrayScale()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframeimagegrayscaletransform-ui-bool-isgrayscale)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.frameImageColor)frameImageColor {frameImageColor}
**Value type: `color`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The background image color or tint for the UI frame, using RGBA values (valid values are between 0 and 1). Note that frames without background images can be tinted a solid color. Alpha 1 is completely opaque, alpha 0 is completely transparent.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame height="100" width="100" backgroundImageColor="r: 0.5, g: 1, b: 0.5, a: 1" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameImageColor()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframeimagecolortransform-ui-colorrgba-color)

#### Related UI XML Properties:
- [backgroundImage](#backgroundimage)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.frameImageColorExpressionR)frameImageColorExpressionR {frameImageColorExpressionR}
**Value type: `string`**

[](manual-wiki-start)

#### Description
[](description-start)
The background image color's R value expression for the UI frame. Expressions use data bound by [BindLuaTable()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-bindluatablestring-name-object-value).
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame backgroundImage="cart" backgroundImageColorExpressionR="data.R" backgroundImageColorExpressionG="data.G" backgroundImageColorExpressionB="data.B" backgroundImageColorExpressionA="data.A" useImageSizeRatio="1" />
```
Where "data.R", "data.G", "data.B", and "data.A" are [data bound](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-bindluatablestring-name-object-value) in lua:
```lua
local data = {R = 1, G = 1, B = 1, A = 1}
DCEI.BindLuaTable("data", data)
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameImageColorExpression()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagecolorexpression-5)
- [BindLuaTable()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-bindluatablestring-name-object-value)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.frameImageColorExpressionG)frameImageColorExpressionG {frameImageColorExpressionG}
**Value type: `string`**

[](manual-wiki-start)

#### Description
[](description-start)
The background image color's G value expression for the UI frame. Expressions use data bound by [BindLuaTable()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-bindluatablestring-name-object-value).
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame backgroundImage="cart" backgroundImageColorExpressionR="data.R" backgroundImageColorExpressionG="data.G" backgroundImageColorExpressionB="data.B" backgroundImageColorExpressionA="data.A" useImageSizeRatio="1" />
```
Where "data.R", "data.G", "data.B", and "data.A" are [data bound](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-bindluatablestring-name-object-value) in lua:
```lua
local data = {R = 1, G = 1, B = 1, A = 1}
DCEI.BindLuaTable("data", data)
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameImageColorExpression()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagecolorexpression-5)
- [BindLuaTable()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-bindluatablestring-name-object-value)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.frameImageColorExpressionB)frameImageColorExpressionB {frameImageColorExpressionB}
**Value type: `string`**

[](manual-wiki-start)

#### Description
[](description-start)
The background image color's B value expression for the UI frame. Expressions use data bound by [BindLuaTable()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-bindluatablestring-name-object-value).
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame backgroundImage="cart" backgroundImageColorExpressionR="data.R" backgroundImageColorExpressionG="data.G" backgroundImageColorExpressionB="data.B" backgroundImageColorExpressionA="data.A" useImageSizeRatio="1" />
```
Where "data.R", "data.G", "data.B", and "data.A" are [data bound](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-bindluatablestring-name-object-value) in lua:
```lua
local data = {R = 1, G = 1, B = 1, A = 1}
DCEI.BindLuaTable("data", data)
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameImageColorExpression()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagecolorexpression-5)
- [BindLuaTable()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-bindluatablestring-name-object-value)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.frameImageColorExpressionA)frameImageColorExpressionA {frameImageColorExpressionA}
**Value type: `string`**

[](manual-wiki-start)

#### Description
[](description-start)
The background image color's A value expression for the UI frame. Expressions use data bound by [BindLuaTable()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-bindluatablestring-name-object-value).
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame backgroundImage="cart" backgroundImageColorExpressionR="data.R" backgroundImageColorExpressionG="data.G" backgroundImageColorExpressionB="data.B" backgroundImageColorExpressionA="data.A" useImageSizeRatio="1" />
```
Where "data.R", "data.G", "data.B", and "data.A" are [data bound](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-bindluatablestring-name-object-value) in lua:
```lua
local data = {R = 1, G = 1, B = 1, A = 1}
DCEI.BindLuaTable("data", data)
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameImageColorExpression()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagecolorexpression-5)
- [BindLuaTable()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-bindluatablestring-name-object-value)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.frameImageGrayScale)frameImageGrayScale {frameImageGrayScale}
**Value type: `boolean`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The background image gray scale status for the UI frame, where `true` means the background image is in gray scale and `false` means it is not.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame backgroundImage="cart" useImageSizeRatio="1" backgroundImageGrayScale="true" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameImageGrayScale()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframeimagegrayscaletransform-ui-bool-isgrayscale)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.tooltipText)tooltipText {tooltipText}
**Value type: `string`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The tooltip text for the UI frame. Child frame tooltips will show over parent frame tooltips.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame backgroundImage="cart" useImageSizeRatio="1" tooltipText="Frame" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameTooltipText()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetooltiptext-2)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.blockInput)blockInput {blockInput}
**Value type: `boolean`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The input blocking status for the UI frame, where `true` means input is being blocked and `false` means it is not. Requires a [background image](#backgroundimage) (or color) to be set (but it can be made [invisible](#backgroundimagecolor)).
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<!-- Image blocking input -->
<Frame backgroundImage="cart" useImageSizeRatio="1" blockInput="true" />

<!-- Solid background color blocking input -->
<Frame backgroundImageColor="r: 0, g: 1, b: 1, a: 0.25" matchParentHeight="true" matchParentWidth="true" blockInput="true" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameBlockInput()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframeblockinputtransform-ui-bool-value)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.rotation3d)rotation3d {rotation3d}
**Value type: `vector3`**

[](manual-wiki-start)

#### Description
[](description-start)
The [3D rotation](Trigger-API-Reference-DCEI-Types#float3) for the UI frame.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<HStack spacing="20" padding="20" backgroundImage="frame01_purple">
    <Frame backgroundImage="cart" useImageSizeRatio="1" rotation3d="x: 45, y: 0, z: 0" />
    <Frame backgroundImage="cart" useImageSizeRatio="1" rotation3d="x: 0, y: 45, z: 0" />
    <Frame backgroundImage="cart" useImageSizeRatio="1" rotation3d="x: 0, y: 0, z: 45" />
</HStack>
```
To help visualize the rotation axis, the above example usage creates the following UI:
![image](https://user-images.githubusercontent.com/34138206/147615106-c0ba1669-1c3d-4fc0-a760-b6a8e35acf9e.png)

[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameRotation3D()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframerotation3dtransform-ui-float-x-float-y-float-z)
[](extra-section-end)

[](manual-wiki-end)

## [](CommonAttributes.preview)preview {preview}
**Value type: `boolean`**

[](manual-wiki-start)

If set to `true` the frame will only be created in the UI Preview Window, not in-game. Useful for frames that will be created during runtime using Lua, but you still want to preview how the frame would look while designing the XML. 

[](manual-wiki-end)

## [](CommonAttributes.layout)layout {layout}
**Value type: `layout`**

[](manual-wiki-start)

**Values:**  `flex`,  `legacy` (default) 

Setting a layout to `flex` enables [Flex Layouts](Ui-FlexLayouts); an entirely different layout engine which has limited compatibility with `legacy` layout. It's more powerful and responsive, allowing for less static UI that can adjust based on screen sizes and aspect ratios. 

For more info, see:
* [Flex Layouts](Ui-FlexLayouts) main wiki documentation page
* [yogalayout documentation](https://yogalayout.com/docs) and [playground](https://yogalayout.com/playground)
* [Flexbox complete guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flex-grow)

[](manual-wiki-end)

## [](CommonAttributes.flexDirection)flexDirection {flexDirection}
**Value type: `flexDirection`**

[](manual-wiki-start)

**Value type: `flexDirection`**
**Values**: `column, column-reverse, row, row-reverse`

#### See <u>[FlexLayouts/flexDirection](Ui-FlexLayouts#flexdirection)</u>

Flex direction controls the direction in which children of a node are laid out.
![image](https://user-images.githubusercontent.com/56179268/201359497-60605ea0-a1df-4655-a16c-9e9b00fe3b26.png)

[](manual-wiki-end)

## [](CommonAttributes.flexGrow)flexGrow {flexGrow}
**Value type: `number`**

[](manual-wiki-start)

**Values**: Real numbers >= 0
#### See <u>[FlexLayouts/flexGrow](Ui-FlexLayouts#flexgrow)</u>

A attribute only used by [Flex Layouts](Ui-FlexLayouts). `flexGrow` describes how space within a container should be distributed among its children. If all items have `flexGrow` set to 1, the remaining space in the container will be distributed equally to all children. If one of the children has a value of 2, that child would take up twice as much of the space either one of the others.
![image](https://user-images.githubusercontent.com/56179268/201425671-6a3899fe-b984-43ef-9b82-39bb2320a495.png)

[](manual-wiki-end)

## [](CommonAttributes.flexShrink)flexShrink {flexShrink}
**Value type: `number`**

[](manual-wiki-start)

**Values**: Real numbers >= 0
#### See <u>[FlexLayouts/flexShrink](Ui-FlexLayouts#flexshrink)</u>

A attribute only used by [Flex Layouts](Ui-FlexLayouts). `flexShrink` is very similar to `flexGrow` and can be thought of in the same way if any overflowing size is considered to be negative remaining space. These two properties also work well together by allowing children to grow and shrink as needed.

<img src="https://user-images.githubusercontent.com/56179268/201428908-ac7f9688-3a4d-410e-8f3d-27ef3ecfb9fe.png" width="500"/>

[](manual-wiki-end)

## [](CommonAttributes.flexWrap)flexWrap {flexWrap}
**Value type: `flexWrap`**

[](manual-wiki-start)

**Values**: `wrap`, `wrap-reverse`, `no-wrap`
#### See <u>[FlexLayouts/flexWrap](Ui-FlexLayouts#flexwrap)</u>

A attribute only used by [Flex Layouts](Ui-FlexLayouts). By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.

<img src="https://user-images.githubusercontent.com/56179268/201434854-7e4e83af-354e-497e-92bf-e48982b5f092.png"/>

[](manual-wiki-end)

## [](CommonAttributes.justifyContent)justifyContent {justifyContent}
**Value type: `flexJustify`**

[](manual-wiki-start)

**Values**: `center`, `flex-end`, `flex-start`, `space-around`, `space-between` 
#### See <u>[FlexLayouts/justifyContent](Ui-FlexLayouts#justifycontent)</u>

A attribute only used by [Flex Layouts](Ui-FlexLayouts). This defines the alignment along the main axis. It helps distribute extra free space leftover when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line. For multi-line containers, see alignContent. 

<img src="https://user-images.githubusercontent.com/56179268/201700478-de17fae1-2f1e-421f-adfb-025d26e1a963.png" width="300"/>

[](manual-wiki-end)

## [](CommonAttributes.alignItems)alignItems {alignItems}
**Value type: `flexAlign`**

[](manual-wiki-start)

**Values**: `baseline`, `center`, `flex-end`, `flex-start`, `stretch`
#### See <u>[FlexLayouts/alignItems](Ui-FlexLayouts#alignitems)</u>

A attribute only used by [Flex Layouts](Ui-FlexLayouts). This defines the default behavior for how flex items are laid out along the cross axis on the current line. Think of it as the justify-content version for the cross-axis (perpendicular to the main-axis).

<img src="https://user-images.githubusercontent.com/56179268/201709209-1fa8aadd-d52c-4722-ab9e-e4c6dca56692.png" width="300"/>

[](manual-wiki-end)

## [](CommonAttributes.alignContent)alignContent {alignContent}
**Value type: `flexAlign`**

[](manual-wiki-start)

**Values**: `baseline`, `center`, `flex-end`, `flex-start`, `stretch`
#### See <u>[FlexLayouts/alignContent](Ui-FlexLayouts#aligncontent)</u>

A attribute only used by [Flex Layouts](Ui-FlexLayouts). This aligns a flex container’s lines within when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis.

Note: This property only takes effect on multi-line flexible containers, where flex-wrap is set to either wrap or wrap-reverse). A single-line flexible container (i.e. where flex-wrap is set to its default value, no-wrap) will not reflect align-content.

<img src="https://user-images.githubusercontent.com/56179268/201718757-be14528b-3997-4342-b005-c3a5d9e34be5.png" width="300"/>

[](manual-wiki-end)

## [](CommonAttributes.alignSelf)alignSelf {alignSelf}
**Value type: `flexAlign`**

[](manual-wiki-start)

**Values**: `baseline`, `center`, `flex-end`, `flex-start`, `stretch`
#### See <u>[FlexLayouts/alignSelf](Ui-FlexLayouts#alignself)</u>

A attribute only used by [Flex Layouts](Ui-FlexLayouts). This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items.

<img src="https://user-images.githubusercontent.com/56179268/201765048-101ae3d1-1ed9-45c5-8b8f-d53b404f8dbe.png" width="300"/>

[](manual-wiki-end)

## [](CommonAttributes.marginLeft)marginLeft {marginLeft}
**Value type: `number`**

[](manual-wiki-start)

#### See <u>[FlexLayouts/Margins](Ui-FlexLayouts#margins)</u>

A attribute only used by [Flex Layouts](Ui-FlexLayouts). Margin effects the spacing around the outside of a node.

[](manual-wiki-end)

## [](CommonAttributes.marginRight)marginRight {marginRight}
**Value type: `number`**

[](manual-wiki-start)

#### See <u>[FlexLayouts/Margins](Ui-FlexLayouts#margins)</u>

A attribute only used by [Flex Layouts](Ui-FlexLayouts). Margin effects the spacing around the outside of a node.

[](manual-wiki-end)

## [](CommonAttributes.marginTop)marginTop {marginTop}
**Value type: `number`**

[](manual-wiki-start)

#### See <u>[FlexLayouts/Margins](Ui-FlexLayouts#margins)</u>

A attribute only used by [Flex Layouts](Ui-FlexLayouts). Margin effects the spacing around the outside of a node.

[](manual-wiki-end)

## [](CommonAttributes.marginBottom)marginBottom {marginBottom}
**Value type: `number`**

[](manual-wiki-start)

#### See <u>[FlexLayouts/Margins](Ui-FlexLayouts#margins)</u>

A attribute only used by [Flex Layouts](Ui-FlexLayouts). Margin effects the spacing around the outside of a node.

[](manual-wiki-end)

## [](CommonAttributes.widthPercent)widthPercent {widthPercent}
**Value type: `number`**

[](manual-wiki-start)

**Values**: Typically `0`-`100`
#### See <u>[FlexLayouts/widthPercent](Ui-FlexLayouts#widthpercent)</u>

A attribute only used by [Flex Layouts](Ui-FlexLayouts). This defines a frame's width as a percentage of it's parent's width. 

[](manual-wiki-end)

## [](CommonAttributes.heightPercent)heightPercent {heightPercent}
**Value type: `number`**

[](manual-wiki-start)

**Values**: Typically `0`-`100`
#### See <u>[FlexLayouts/heightPercent](Ui-FlexLayouts#heightpercent)</u>

A attribute only used by [Flex Layouts](Ui-FlexLayouts). This defines a frame's height as a percentage of it's parent's height. 

[](manual-wiki-end)

## [](CommonAttributes.position)position {position}
**Value type: `position`**

[](manual-wiki-start)

**Values**: `relative` (default), `absolute`
#### See <u>[FlexLayouts/Position](Ui-FlexLayouts#position)</u>

A attribute only used by [Flex Layouts](Ui-FlexLayouts).

`relative`  By default an element is positioned relatively. This means an element is positioned according to the normal flow of the layout, and then offset relative to that position based on the values of top, right, bottom, and left. The offset does not affect the position of any sibling or parent elements.

`absolute` When positioned absolutely an element doesn't take part in the normal layout flow. It is instead laid out independent of its siblings. The position is determined based on the top, right, bottom, and left values.

[](manual-wiki-end)

## [](CommonAttributes.left)left {left}
**Value type: `number`**

[](manual-wiki-start)

#### See <u>[FlexLayouts/Position](Ui-FlexLayouts#position)</u>

A attribute only used by [Flex Layouts](Ui-FlexLayouts). This is a left-direction offset by pixels. The behavior of the offset depends if the frame position is relative or absolute. 

[](manual-wiki-end)

## [](CommonAttributes.right)right {right}
**Value type: `number`**

[](manual-wiki-start)

#### See <u>[FlexLayouts/Position](Ui-FlexLayouts#position)</u>

A attribute only used by [Flex Layouts](Ui-FlexLayouts). This is a right-direction offset by pixels. The behavior of the offset depends if the frame position is relative or absolute. 

[](manual-wiki-end)

## [](CommonAttributes.top)top {top}
**Value type: `number`**

[](manual-wiki-start)

#### See <u>[FlexLayouts/Position](Ui-FlexLayouts#position)</u>

A attribute only used by [Flex Layouts](Ui-FlexLayouts). This is a top-direction offset by pixels. The behavior of the offset depends if the frame position is relative or absolute. 

[](manual-wiki-end)

## [](CommonAttributes.bottom)bottom {bottom}
**Value type: `number`**

[](manual-wiki-start)

#### See <u>[FlexLayouts/Position](Ui-FlexLayouts#position)</u>

A attribute only used by [Flex Layouts](Ui-FlexLayouts). This is a  bottom-direction offset by pixels. The behavior of the offset depends if the frame position is relative or absolute. 

[](manual-wiki-end)

## [](CommonAttributes.aspectRatio)aspectRatio {aspectRatio}
**Value type: `number`**

[](manual-wiki-start)



[](manual-wiki-end)

## [](CommonAttributes.controller)controller {controller}
**Value type: `string`**

[](manual-wiki-start)

Script file associated with this frame. See [UI Controllers](https://funovus.notion.site/Animation-Previews-with-UI-Controllers-538d53a156174cfb949d05b561b78b28).

[](manual-wiki-end)

## [](CommonAttributes.class)class {class}
**Value type: `string`**

[](manual-wiki-start)



[](manual-wiki-end)

