<div id="toc" markdown="1">
- [Ui XML Reference\HStack](#ui-xml-referencehstack)
  * [reverse](#reverse)

</div>

***

# [Ui XML Reference](Ui-XML)\\HStack {ui-xml-referenceHStack}

[](overview-start)

Stacks children frames horizontally. This frame type has a default size of 0 and expands to fit any children.

#### Example Usage
[](example-usage-start)
```xml
<HStack spacing="10" padding="10" backgroundImage="frame01_blue">
    <Frame height="80" width="80" backgroundImage="cart" />
    <Frame height="90" width="90" backgroundImage="cart" />
    <Frame height="100" width="100" backgroundImage="cart" />
    <Frame height="110" width="110" backgroundImage="cart" />
</HStack>
```
This XML produces the following UI:
![image](https://user-images.githubusercontent.com/34138206/149568646-648c3e31-c404-4e9c-814e-9e552fe2a366.png)

[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [CreateHStackFrame()](Trigger-API-Reference-DCEI-Functions-Custom-UI#transform-createhstackframetransform-parent)

#### Related UI XML Properties:
- [spacing](Ui-XML-CommonAttributes#spacing)
[](extra-section-end)

[](overview-end)

Stacks children frames horizontally

## [](HStack.reverse)reverse {reverse}
**Value type: `boolean`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The reverse status of the HStack frame, where `true` reverses the order in which child frames are added (the last created frame will be the first frame displayed) and `false` displays child frames normally.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<HStack spacing="10" padding="10" backgroundImage="frame01_blue" reverse="true">
    <Frame height="80" width="80" backgroundImage="cart" />
    <Frame height="90" width="90" backgroundImage="cart" />
    <Frame height="100" width="100" backgroundImage="cart" />
    <Frame height="110" width="110" backgroundImage="cart" />
</HStack>
```
[](example-usage-end)

[](extra-section-start)
#### 
Related Trigger Function(s):
- [SetFrameReverseChildrenFrameOrder()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframereversechildrenframeordertransform-ui-bool-value)
[](extra-section-end)

[](manual-wiki-end)

