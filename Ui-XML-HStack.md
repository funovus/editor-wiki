<div id="toc" markdown="1">
- [Ui XML Reference\HStack](#ui-xml-referencehstack)
  * [reverse](#reverse)

</div>

***

# [Ui XML Reference](Ui-XML)\\HStack {ui-xml-referenceHStack}

[](overview-start)

Stacks children frames horizontally. This frame type has a default size of 0 and expands to fit any children.

Note that [Flex Layouts](Ui-FlexLayouts) automatically arrange their children similar to an HStack.

#### Example Usage
[](example-usage-start)
```xml
<!-- Legacy version -->
<HStack layout="legacy" spacing="10" padding="10" frameImage="frame01_blue">
    <Frame height="80" width="80" frameImage="cart" />
    <Frame height="90" width="90" frameImage="cart" />
    <Frame height="100" width="100" frameImage="cart" />
    <Frame height="110" width="110" frameImage="cart" />
</HStack>

<!-- Flex version -->
<Frame layout="flex" padding="10" frameImage="frame01_blue">
    <Frame height="80" width="80" frameImage="cart" marginRight="10" />
    <Frame height="90" width="90" frameImage="cart" marginRight="10" />
    <Frame height="100" width="100" frameImage="cart" marginRight="10" />
    <Frame height="110" width="110" frameImage="cart" />
</Frame>
```
This XML produces the following UI:
![image](https://user-images.githubusercontent.com/34138206/149568646-648c3e31-c404-4e9c-814e-9e552fe2a366.png)

[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [CreateHStackFrame()](Trigger-API-Reference-DCEI-Functions-Custom-UI#createhstackframe-1)

#### Related UI XML Properties:
- [spacing](Ui-XML-CommonAttributes#spacing)
[](extra-section-end)

[](overview-end)

## [](HStack.reverse)reverse {reverse}
**Value type: `boolean`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The reverse status of the HStack frame, where `true` reverses the order in which child frames are added (the last created frame will be the first frame displayed) and `false` displays child frames normally.

Only works in legacy layout. For the flex layout equivalent, see [FlexDirection](Ui-FlexLayouts#flexdirection).
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<HStack layout="legacy" spacing="10" padding="10" frameImage="frame01_blue" reverse="true">
    <Frame height="80" width="80" frameImage="cart" />
    <Frame height="90" width="90" frameImage="cart" />
    <Frame height="100" width="100" frameImage="cart" />
    <Frame height="110" width="110" frameImage="cart" />
</HStack>
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameReverseChildrenFrameOrder()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframereversechildrenframeorder-2)
[](extra-section-end)

[](manual-wiki-end)

