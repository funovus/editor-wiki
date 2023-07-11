<div id="toc" markdown="1">
- [Ui XML Reference\Grid](#ui-xml-referencegrid)
  * [cellWidth](#cellwidth)
  * [cellHeight](#cellheight)

</div>

***

# [Ui XML Reference](Ui-XML)\\Grid {ui-xml-referenceGrid}

[](overview-start)

Layout children frames in a grid automatically, based on the given cell width, cell height, frame width, and frame height. Grids require a [cellWidth](#cellwidth) and [cellHeight](#cellheight) to be set. By default, this frame type attempts to fill its parent size unless given explicit dimensions. When setting up a grid with [padding](Ui-XML-CommonAttributes#padding) and [spacing](Ui-XML-CommonAttributes#spacing), make sure to account for the added width/height when setting the grid's width/height.



#### Example Usage
[](example-usage-start)
```xml
<Grid cellHeight="100" cellWidth="100" width="230" spacing="10" padding="10" backgroundImage="frame01_blue">
    <Frame height="50" width="50" backgroundImage="cart" />
    <Frame height="100" width="100" backgroundImage="cart" />
    <Frame height="100" width="100" backgroundImage="cart" />
    <Frame height="150" width="150" backgroundImage="cart" />
</Grid>
```
This XML produces the following UI:
![image](https://user-images.githubusercontent.com/34138206/149568162-ee90ffa0-c0a2-4fb6-a716-7fcb5f8f4b8e.png)

[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [CreateGridFrame()](Trigger-API-Reference-DCEI-Functions-Custom-UI#transform-creategridframetransform-parent)

#### Related UI XML Properties:
- [spacing](Ui-XML-CommonAttributes#spacing)
[](extra-section-end)

[](overview-end)

Layout children frames in a grid

## [](Grid.cellWidth)cellWidth {cellWidth}
**Value type: `number`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The grid cell width. This is the width of the automatically created cells in a grid. The content of the grid cell can overflow this cell width if the content width is greater than the cell width.
[](description-end)



#### Example Usage
[](example-usage-start)
```xml
<Grid cellHeight="100" cellWidth="100" width="230" spacing="10" padding="10" backgroundImage="frame01_blue">
    <Frame height="50" width="50" backgroundImage="cart" />
    <Frame height="100" width="100" backgroundImage="cart" />
    <Frame height="100" width="100" backgroundImage="cart" />
    <Frame height="150" width="150" backgroundImage="cart" />
</Grid>
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetGridFrameCellWidth()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setgridframecellwidthtransform-ui-float-width)
[](extra-section-end)

[](manual-wiki-end)

## [](Grid.cellHeight)cellHeight {cellHeight}
**Value type: `number`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The grid cell height. This is the height of the automatically created cells in a grid. The content of the grid cell can overflow this cell height if the content height is greater than the cell height.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Grid cellHeight="100" cellWidth="100" width="230" spacing="10" padding="10" backgroundImage="frame01_blue">
    <Frame height="50" width="50" backgroundImage="cart" />
    <Frame height="100" width="100" backgroundImage="cart" />
    <Frame height="100" width="100" backgroundImage="cart" />
    <Frame height="150" width="150" backgroundImage="cart" />
</Grid>
```
[](example-usage-end)



[](extra-section-start)
#### Related Trigger Function(s):
- [SetGridFrameCellHeight()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setgridframecellheighttransform-ui-float-height)
[](extra-section-end)

[](manual-wiki-end)

