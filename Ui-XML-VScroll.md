<div id="toc" markdown="1">
- [Ui XML Reference\VScroll](#ui-xml-referencevscroll)
  * [inertia](#inertia)
  * [decelerationRate](#decelerationrate)
  * [reverse](#reverse)
  * [contentAlignment](#contentalignment)
  * [snap](#snap)
  * [snapStep](#snapstep)
  * [snapStepCount](#snapstepcount)
  * [snapBeginThreshold](#snapbeginthreshold)
  * [snapSpeed](#snapspeed)

</div>

***

# [Ui XML Reference](Ui-XML)\\VScroll {ui-xml-referenceVScroll}

[](overview-start)

A scrollable frame that stacks children frames vertically. By default, this frame type attempts to fill its parent size unless given explicit dimensions. To set [padding](Ui-XML-CommonAttributes#padding) and [spacing](Ui-XML-CommonAttributes#spacing) for the child frames, the child frames should be placed in a [ScrollContent](Ui-XML-ScrollContent) element. Unlike the Trigger API version, placing the child frames directly under the VScroll itself (omitting the ScrollContent) will still work.

#### Example Usage
[](example-usage-start)
```xml
<VScroll height="200" width="120" backgroundImage="frame01_blue">
    <ScrollContent spacing="10" padding="10">
        <Frame height="100" width="100" backgroundImage="cart" />
        <Frame height="100" width="100" backgroundImage="cart" />
        <Frame height="100" width="100" backgroundImage="cart" />
        <Frame height="100" width="100" backgroundImage="cart" />
    </ScrollContent>
</VScroll>
```
This XML produces the following UI:
![image](https://user-images.githubusercontent.com/34138206/149570971-bfae8f4a-a718-486e-aabd-931071213cc5.png)

[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [CreateVScrollFrame()](Trigger-API-Reference-DCEI-Functions-Custom-UI#transform-createvscrollframetransform-parent)

#### Related UI XML Properties:
- [spacing](Ui-XML-CommonAttributes#spacing)
- [ScrollContent](Ui-XML-ScrollContent)
[](extra-section-end)

[](overview-end)

A scrollable frame that stacks children frames vertically

## [](VScroll.inertia)inertia {inertia}
**Value type: `boolean`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The inertia status of the VScroll frame, where `true` is enabled and `false` is disabled. Inertia is set to `true` by default. Inertia causes the scroll frame's scrolling to slow by the given deceleration rate, to a stop, after the mouse is released. If inertia is disabled the frame does not continue scrolling after the mouse is released.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<VScroll height="300" width="120" backgroundImage="frame01_blue" inertia="false">
    <Frame height="100" width="100" backgroundImage="cart" />
    <Frame height="100" width="100" backgroundImage="cart" />
    <Frame height="100" width="100" backgroundImage="cart" />
    <Frame height="100" width="100" backgroundImage="cart" />
    <Frame height="100" width="100" backgroundImage="cart" />
    <Frame height="100" width="100" backgroundImage="cart" />
</VScroll>
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetScrollFrameScrollInertia()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setscrollframescrollinertiatransform-ui-bool-value)
[](extra-section-end)

[](manual-wiki-end)

## [](VScroll.decelerationRate)decelerationRate {decelerationRate}
**Value type: `number`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The deceleration rate for the inertia, if enabled. A value of 0 will cause instant deceleration (equivalent to setting the inertia to false). Values between 0 and 1 will cause deceleration. A value of 1 will cause no deceleration. A value greater than 1 will cause acceleration. A negative value will break the scroll element.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<VScroll height="300" width="120" backgroundImage="frame01_blue" decelerationRate="0.5">
    <Frame height="100" width="100" backgroundImage="cart" />
    <Frame height="100" width="100" backgroundImage="cart" />
    <Frame height="100" width="100" backgroundImage="cart" />
    <Frame height="100" width="100" backgroundImage="cart" />
    <Frame height="100" width="100" backgroundImage="cart" />
    <Frame height="100" width="100" backgroundImage="cart" />
</VScroll>
```
VScroll deceleration from the above example usage:
![VScrollDecel](https://user-images.githubusercontent.com/34138206/147785858-e9d1408b-78bf-4fc7-9db2-417f79cb9f03.gif)

[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetScrollFrameScrollDecelerationRate()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setscrollframescrolldecelerationratetransform-ui-float-value)
[](extra-section-end)

[](manual-wiki-end)

## [](VScroll.reverse)reverse {reverse}
**Value type: `boolean`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The reverse status of the VScroll frame, where `true` reverses the order in which child frames are added (the last created frame will be the first frame displayed) and `false` displays child frames normally.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<VScroll height="300" width="120" backgroundImage="frame01_blue" reverse="true">
    <Frame height="80" width="80" backgroundImage="cart" />
    <Frame height="90" width="90" backgroundImage="cart" />
    <Frame height="100" width="100" backgroundImage="cart" />
    <Frame height="110" width="110" backgroundImage="cart" />
    <Frame height="120" width="120" backgroundImage="cart" />
</VScroll>
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameReverseChildrenFrameOrder()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframereversechildrenframeordertransform-ui-bool-value)
[](extra-section-end)

[](manual-wiki-end)

## [](VScroll.contentAlignment)contentAlignment {contentAlignment}
**Value type: `string`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The content alignment of the VScroll frame. This value determines where the initial display location of the scroll content is. Options are `top` (default) and `bottom`.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<VScroll height="300" width="120" backgroundImage="frame01_blue" contentAlignment="bottom">
    <Frame height="80" width="80" backgroundImage="cart" />
    <Frame height="90" width="90" backgroundImage="cart" />
    <Frame height="100" width="100" backgroundImage="cart" />
    <Frame height="110" width="110" backgroundImage="cart" />
    <Frame height="120" width="120" backgroundImage="cart" />
</VScroll>
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetScrollFrameScrollContentAlignment()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setscrollframescrollcontentalignmenttransform-ui-string-value)
[](extra-section-end)

[](manual-wiki-end)

## [](VScroll.snap)snap {snap}
**Value type: `boolean`**

[](manual-wiki-start)



[](manual-wiki-end)

## [](VScroll.snapStep)snapStep {snapStep}
**Value type: `number`**

[](manual-wiki-start)



[](manual-wiki-end)

## [](VScroll.snapStepCount)snapStepCount {snapStepCount}
**Value type: `number`**

[](manual-wiki-start)



[](manual-wiki-end)

## [](VScroll.snapBeginThreshold)snapBeginThreshold {snapBeginThreshold}
**Value type: `number`**

[](manual-wiki-start)



[](manual-wiki-end)

## [](VScroll.snapSpeed)snapSpeed {snapSpeed}
**Value type: `number`**

[](manual-wiki-start)



[](manual-wiki-end)

