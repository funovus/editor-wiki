<div id="toc" markdown="1">
- [Ui XML Reference\HScroll](#ui-xml-referencehscroll)
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

# [Ui XML Reference](Ui-XML)\\HScroll {ui-xml-referenceHScroll}

[](overview-start)

A scrollable frame that stacks children frames horizontally. By default, this frame type attempts to fill its parent size unless given explicit dimensions. To set [padding](Ui-XML-CommonAttributes#padding) and [spacing](Ui-XML-CommonAttributes#spacing) for the child frames, the child frames should be placed in a [ScrollContent](Ui-XML-ScrollContent) element. Unlike the Trigger API version, placing the child frames directly under the HScroll itself (omitting the ScrollContent) will still work.

#### Example Usage
[](example-usage-start)
```xml
<HScroll height="120" width="450" backgroundImage="frame01_blue">
    <ScrollContent spacing="10" padding="10">
        <Frame height="100" width="100" backgroundImage="cart" />
        <Frame height="100" width="100" backgroundImage="cart" />
        <Frame height="100" width="100" backgroundImage="cart" />
        <Frame height="100" width="100" backgroundImage="cart" />
        <Frame height="100" width="100" backgroundImage="cart" />
        <Frame height="100" width="100" backgroundImage="cart" />
    </ScrollContent>
</HScroll>
```
This XML produces the following UI:
![image](https://user-images.githubusercontent.com/34138206/149568585-a3f84b26-c0fc-48c8-aeb5-0b6558c8b223.png)

[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [CreateHScrollFrame()](Trigger-API-Reference-DCEI-Functions-Custom-UI#transform-createhscrollframetransform-parent)

#### Related UI XML Properties:
- [spacing](Ui-XML-CommonAttributes#spacing)
- [ScrollContent](Ui-XML-ScrollContent)
[](extra-section-end)

[](overview-end)

A scrollable frame that stacks children frames horizontally

## [](HScroll.inertia)inertia {inertia}
**Value type: `boolean`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The inertia status of the HScroll frame, where `true` is enabled and `false` is disabled. Inertia is set to `true` by default. Inertia causes the scroll frame's scrolling to slow by the given deceleration rate, to a stop, after the mouse is released. If inertia is disabled the frame does not continue scrolling after the mouse is released.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<HScroll height="120" width="300" backgroundImage="frame01_blue" inertia="false">
    <Frame height="100" width="100" backgroundImage="cart" />
    <Frame height="100" width="100" backgroundImage="cart" />
    <Frame height="100" width="100" backgroundImage="cart" />
    <Frame height="100" width="100" backgroundImage="cart" />
    <Frame height="100" width="100" backgroundImage="cart" />
    <Frame height="100" width="100" backgroundImage="cart" />
</HScroll>
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetScrollFrameScrollInertia()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setscrollframescrollinertiatransform-ui-bool-value)
[](extra-section-end)

[](manual-wiki-end)

## [](HScroll.decelerationRate)decelerationRate {decelerationRate}
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
<HScroll height="120" width="300" backgroundImage="frame01_blue" decelerationRate="0.5">
    <Frame height="100" width="100" backgroundImage="cart" />
    <Frame height="100" width="100" backgroundImage="cart" />
    <Frame height="100" width="100" backgroundImage="cart" />
    <Frame height="100" width="100" backgroundImage="cart" />
    <Frame height="100" width="100" backgroundImage="cart" />
    <Frame height="100" width="100" backgroundImage="cart" />
</HScroll>
```
HScroll deceleration from the above example usage:
![HScrollDecel](https://user-images.githubusercontent.com/34138206/147709847-b40500a1-cb58-48fc-a170-b823930a7510.gif)

[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetScrollFrameScrollDecelerationRate()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setscrollframescrolldecelerationratetransform-ui-float-value)
[](extra-section-end)

[](manual-wiki-end)

## [](HScroll.reverse)reverse {reverse}
**Value type: `boolean`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The reverse status of the HScroll frame, where `true` reverses the order in which child frames are added (the last created frame will be the first frame displayed) and `false` displays child frames normally.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<HScroll height="120" width="300" backgroundImage="frame01_blue" reverse="true">
    <Frame height="80" width="80" backgroundImage="cart" />
    <Frame height="90" width="90" backgroundImage="cart" />
    <Frame height="100" width="100" backgroundImage="cart" />
    <Frame height="110" width="110" backgroundImage="cart" />
    <Frame height="120" width="120" backgroundImage="cart" />
</HScroll>
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameReverseChildrenFrameOrder()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframereversechildrenframeordertransform-ui-bool-value)
[](extra-section-end)

[](manual-wiki-end)

## [](HScroll.contentAlignment)contentAlignment {contentAlignment}
**Value type: `string`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The content alignment of the HScroll frame. This value determines where the initial display location of the scroll content is. Options are `left` (default) and `right`.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<HScroll height="120" width="300" backgroundImage="frame01_blue" contentAlignment="right">
    <Frame height="80" width="80" backgroundImage="cart" />
    <Frame height="90" width="90" backgroundImage="cart" />
    <Frame height="100" width="100" backgroundImage="cart" />
    <Frame height="110" width="110" backgroundImage="cart" />
    <Frame height="120" width="120" backgroundImage="cart" />
</HScroll>
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetScrollFrameScrollContentAlignment()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setscrollframescrollcontentalignmenttransform-ui-string-value)
[](extra-section-end)

[](manual-wiki-end)

## [](HScroll.snap)snap {snap}
**Value type: `boolean`**

[](manual-wiki-start)



[](manual-wiki-end)

## [](HScroll.snapStep)snapStep {snapStep}
**Value type: `number`**

[](manual-wiki-start)



[](manual-wiki-end)

## [](HScroll.snapStepCount)snapStepCount {snapStepCount}
**Value type: `number`**

[](manual-wiki-start)



[](manual-wiki-end)

## [](HScroll.snapBeginThreshold)snapBeginThreshold {snapBeginThreshold}
**Value type: `number`**

[](manual-wiki-start)



[](manual-wiki-end)

## [](HScroll.snapSpeed)snapSpeed {snapSpeed}
**Value type: `number`**

[](manual-wiki-start)



[](manual-wiki-end)

