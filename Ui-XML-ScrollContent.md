<div id="toc" markdown="1">
- [Ui XML Reference\ScrollContent](#ui-xml-referencescrollcontent)

</div>

***

# [Ui XML Reference](Ui-XML)\\ScrollContent {ui-xml-referenceScrollContent}

[](overview-start)

The scrollable content frame. Automatically created by creating a [CreateHScrollFrame()](Trigger-API-Reference-DCEI-Functions-Custom-UI#createhscrollframe-1), [CreateVScrollFrame()](Trigger-API-Reference-DCEI-Functions-Custom-UI#createvscrollframe-1), or [CreateScrollFrame()](Trigger-API-Reference-DCEI-Functions-Custom-UI#createscrollframe-1) in lua. When creating the scroll elements in xml, the explicit declaration of this frame is only necessary to set the [padding](Ui-XML-CommonAttributes#padding) and [spacing](Ui-XML-CommonAttributes#spacing) for the child frames.

Note that spacing only works in legacy layouts. If you wanted to achieve a similar effect in a flex layout, you would have to adjust the children. See [FlexLayouts/Margins](Ui-FlexLayouts#margins).

#### Example Usage
[](example-usage-start)
```xml
<!-- Flex version -->
<VScroll layout="flex" height="200" width="120" frameImage="frame01_blue">
    <ScrollContent padding="10">
        <Frame height="100" width="100" frameImage="cart" marginBottom="10" />
        <Frame height="100" width="100" frameImage="cart" marginBottom="10" />
        <Frame height="100" width="100" frameImage="cart" marginBottom="10" />
        <Frame height="100" width="100" frameImage="cart" />
    </ScrollContent>
</VScroll>

<!-- Legacy version -->
<VScroll layout="legacy" height="200" width="120" frameImage="frame01_blue">
    <ScrollContent spacing="10" padding="10">
        <Frame height="100" width="100" frameImage="cart" />
        <Frame height="100" width="100" frameImage="cart" />
        <Frame height="100" width="100" frameImage="cart" />
        <Frame height="100" width="100" frameImage="cart" />
    </ScrollContent>
</VScroll>
```
This XML produces the following UI:
![image](https://user-images.githubusercontent.com/34138206/149569052-04897229-cddd-4c6e-8b49-64d966ab46db.png)

[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [GetScrollFrameContent()](Trigger-API-Reference-DCEI-Functions-Custom-UI#getscrollframecontent-1)
- [CreateHScrollFrame()](Trigger-API-Reference-DCEI-Functions-Custom-UI#createhscrollframe-1)
- [CreateVScrollFrame()](Trigger-API-Reference-DCEI-Functions-Custom-UI#createvscrollframe-1)
- [CreateScrollFrame()](Trigger-API-Reference-DCEI-Functions-Custom-UI#createscrollframe-1)

#### Related UI XML Properties:
- [VScroll](Ui-XML-VScroll)
- [HScroll](Ui-XML-HScroll)
- [Scroll](Ui-XML-Scroll)
[](extra-section-end)

[](overview-end)

The scrollable content frame.

