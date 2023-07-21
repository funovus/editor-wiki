<div id="toc" markdown="1">
- [Ui XML Reference\Scroll](#ui-xml-referencescroll)
  * [inertia](#inertia)
  * [decelerationRate](#decelerationrate)
  * [contentAlignment](#contentalignment)

</div>

***

# [Ui XML Reference](Ui-XML)\\Scroll {ui-xml-referenceScroll}

[](overview-start)

A 2D scrollable frame. By default, this frame type attempts to fill its parent size unless given explicit dimensions.

#### Example Usage
[](example-usage-start)
```xml
<Scroll layout="flex" height="500" width="500">
    <Frame width="1000" height="1000" frameImageColor="r: 1, g: 1, b: 1, a: 0.8">
        <Text text="Left" position="absolute" left="0" />
        <Text text="Right" position="absolute" right="0" />
        <Text text="Top" position="absolute" top="0" />
        <Text text="Bottom" position="absolute" bottom="0" />
        <Text text="Center" position="absolute" />
    </Frame>
</Scroll>
```
This xml script produces the following UI:
![Scroll](https://user-images.githubusercontent.com/34138206/147792207-0cd0ef50-68d5-4f52-a901-9d27b0cbe330.gif)

[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [CreateScrollFrame()](Trigger-API-Reference-DCEI-Functions-Custom-UI#createscrollframe-1)

#### Related UI XML Properties:
- [ScrollContent](Ui-XML-ScrollContent)
[](extra-section-end)

[](overview-end)

A scrollable frame that be scrolled both vertically and horizontally

## [](Scroll.inertia)inertia {inertia}
**Value type: `boolean`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The inertia status of the Scroll frame, where `true` is enabled and `false` is disabled. Inertia is set to `true` by default. Inertia causes the scroll frame's scrolling to slow by the given deceleration rate, to a stop, after the mouse is released. If inertia is disabled the frame does not continue scrolling after the mouse is released.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Scroll layout="flex" height="500" width="500" inertia = "false">
    <Frame width="1000" height="1000" frameImageColor="r: 1, g: 1, b: 1, a: 0.8">
        <Text text="Left" position="absolute" left="0" />
        <Text text="Right" position="absolute" right="0" />
        <Text text="Top" position="absolute" top="0" />
        <Text text="Bottom" position="absolute" bottom="0" />
        <Text text="Center" position="absolute" />
    </Frame>
</Scroll>
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetScrollFrameScrollInertia()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setscrollframescrollinertia-2)
[](extra-section-end)

[](manual-wiki-end)

## [](Scroll.decelerationRate)decelerationRate {decelerationRate}
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
<Scroll layout="flex" height="500" width="500" decelerationRate="0.5">
    <Frame width="1000" height="1000" frameImageColor="r: 1, g: 1, b: 1, a: 0.8">
        <Text text="Left" position="absolute" left="0" />
        <Text text="Right" position="absolute" right="0" />
        <Text text="Top" position="absolute" top="0" />
        <Text text="Bottom" position="absolute" bottom="0" />
        <Text text="Center" position="absolute" />
    </Frame>
</Scroll>
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
Related Trigger Function(s):
- [SetScrollFrameScrollDecelerationRate()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setscrollframescrolldecelerationrate-2)
[](extra-section-end)

[](manual-wiki-end)

## [](Scroll.contentAlignment)contentAlignment {contentAlignment}
**Value type: `string`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The content alignment of the Scroll frame.This value determines where the initial display location of the scroll content is. Options are `left`, `right`, `top`, `bottom`, and `(top|bottom)-(left|right)`. The default alignment is `top-left`
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Scroll layout="flex" height="500" width="500" contentAlignment="bottom-right">
    <Frame width="1000" height="1000" frameImageColor="r: 1, g: 1, b: 1, a: 0.8">
        <Text text="Left" position="absolute" left="0" />
        <Text text="Right" position="absolute" right="0" />
        <Text text="Top" position="absolute" top="0" />
        <Text text="Bottom" position="absolute" bottom="0" />
        <Text text="Center" position="absolute" />
    </Frame>
</Scroll>
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetScrollFrameScrollContentAlignment()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setscrollframescrollcontentalignment-2)
[](extra-section-end)

[](manual-wiki-end)

