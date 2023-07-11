<div id="toc" markdown="1">
- [Ui XML Reference\ScrollContent](#ui-xml-referencescrollcontent)

</div>

***

# [Ui XML Reference](Ui-XML)\\ScrollContent {ui-xml-referenceScrollContent}

[](overview-start)

The scrollable content frame. Automatically created by creating a [CreateHScrollFrame()](Trigger-API-Reference-DCEI-Functions-Custom-UI#transform-createhscrollframetransform-parent), [CreateVScrollFrame()](Trigger-API-Reference-DCEI-Functions-Custom-UI#transform-createvscrollframetransform-parent), or [CreateScrollFrame()](Trigger-API-Reference-DCEI-Functions-Custom-UI#transform-createscrollframetransform-parent) in lua. When creating the scroll elements in xml, the explicit declaration of this frame is only necessary to set the [padding](Ui-XML-CommonAttributes#padding) and [spacing](Ui-XML-CommonAttributes#spacing) for the child frames.

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
![image](https://user-images.githubusercontent.com/34138206/149569052-04897229-cddd-4c6e-8b49-64d966ab46db.png)

[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [GetScrollFrameContent()](Trigger-API-Reference-DCEI-Functions-Custom-UI#transform-getscrollframecontenttransform-parent)
- [CreateHScrollFrame()](Trigger-API-Reference-DCEI-Functions-Custom-UI#transform-createhscrollframetransform-parent)
- [CreateVScrollFrame()](Trigger-API-Reference-DCEI-Functions-Custom-UI#transform-createvscrollframetransform-parent)
- [CreateScrollFrame()](Trigger-API-Reference-DCEI-Functions-Custom-UI#transform-createscrollframetransform-parent)

#### Related UI XML Properties:
- [VScroll](Ui-XML-VScroll)
- [HScroll](Ui-XML-HScroll)
- [Scroll](Ui-XML-Scroll)
[](extra-section-end)

[](overview-end)

The scrollable content frame.

