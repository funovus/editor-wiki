<div id="toc" markdown="1">
- [Ui XML Reference\VStack](#ui-xml-referencevstack)
  * [reverse](#reverse)

</div>

***

# [Ui XML Reference](Ui-XML)\\VStack {ui-xml-referenceVStack}

[](overview-start)

Stacks children frames vertically. This frame type has a default size of 0 and expands to fit any children.

Note that [Flex Layouts](Ui-FlexLayouts) automatically arrange their children similar to an HStack. You can then change the `flexDirection` attribute to `column` to stack it vertically.

#### Example Usage
[](example-usage-start)
```xml
<!-- Legacy version -->
<VStack layout="legacy" spacing="10" padding="10" frameImage="frame01_blue">
    <Frame height="80" width="80" frameImage="cart" />
    <Frame height="90" width="90" frameImage="cart" />
    <Frame height="100" width="100" frameImage="cart" />
    <Frame height="110" width="110" frameImage="cart" />
</VStack>

<!-- Flex version -->
<Frame layout="flex" padding="10" frameImage="frame01_blue" flexDirection="column">
    <Frame height="80" width="80" frameImage="cart" marginBottom="10" />
    <Frame height="90" width="90" frameImage="cart" marginBottom="10" />
    <Frame height="100" width="100" frameImage="cart" marginBottom="10" />
    <Frame height="110" width="110" frameImage="cart" />
</Frame>
```
This XML produces the following UI:
![image](https://user-images.githubusercontent.com/34138206/149571053-99220913-20cc-48ad-b707-c1ad553749d4.png)

[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [CreateVStackFrame()](Trigger-API-Reference-DCEI-Functions-Custom-UI#createvstackframe-1)

#### Related UI XML Properties:
- [spacing](Ui-XML-CommonAttributes#spacing)
[](extra-section-end)

[](overview-end)

## [](VStack.reverse)reverse {reverse}
**Value type: `boolean`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The reverse status of the VStack frame, where `true` reverses the order in which child frames are added (the last created frame will be the first frame displayed) and `false` displays child frames normally.

Only works in legacy layout. For the flex layout equivalent, see [FlexDirection](Ui-FlexLayouts#flexdirection).
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<VStack layout="legacy" spacing="10" padding="10" frameImage="frame01_blue" reverse="true">
    <Frame height="80" width="80" frameImage="cart" />
    <Frame height="90" width="90" frameImage="cart" />
    <Frame height="100" width="100" frameImage="cart" />
    <Frame height="110" width="110" frameImage="cart" />
</VStack>
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetFrameReverseChildrenFrameOrder()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframereversechildrenframeorder-2)

[](manual-wiki-end)

