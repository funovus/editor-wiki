<div id="toc" markdown="1">
- [Ui XML Reference\Mask](#ui-xml-referencemask)

</div>

***

# [Ui XML Reference](Ui-XML)\\Mask {ui-xml-referenceMask}

[](overview-start)

Creates a mask, combine with Stencil Masks to show only part of children UI frames. By default, this frame type attempts to fill its parent size unless given explicit dimensions. This frame uses a child frame to actually provide the tinting and masking. This child frame should be created after any [Stencil Mask frames](Trigger-API-Reference-DCEI-Functions-Custom-UI#transform-createstencilmaskframetransform-parent), otherwise the stencil mask will not function.

#### Example Usage
[](example-usage-start)
```xml
<Mask layout="flex" widthPercent="100" heightPercent="100" justifyContent="center" alignItems="center">
    <!-- Button has a child stencil mask that will 'cut through' the masking frame's effect -->
    <Button height="200" width="200" position="absolute">
        <Frame position="absolute" widthPercent="120" heightPercent="120">
            <StencilMask frameImage="shape_square_32x32" widthPercent="100" heightPercent="100" />
        </Frame>
    </Button>
    <!-- Frame that actually creates the masking effect -->
    <Frame widthPercent="100" heightPercent="100" frameImageColor="r: 0, g: 0, b: 0, a: 0.45" />
</Mask>
```
This xml script produces the following UI:
![Mask](https://user-images.githubusercontent.com/34138206/147840463-2b9ebb37-1f91-449d-858a-794621edd077.gif)

The stencil mask is slightly larger than it's parent button. As the button changes size in response to being clicked on, the stencil mask matches its size and thus the stenciled portion adjusts smoothly.

The masking frame's tinting shape can be influenced by setting a black and white background image. This background image will determine the shape of the mask. If the background image is not a 9-sliced image, the image may be very pixilated. Setting a 9-sliced image as the background will function as normally expected, including the usage of [backgroundImagePixelsPerUnitMultiplier](Ui-XML-CommonAttributes#backgroundimagepixelsperunitmultiplier):
```xml
<Frame layout="flex" heightPercent="100" widthPercent="100" frameImageColor="r: 0, g: 0, b: 0, a: 0.45" frameImagePixelsPerUnitMultiplier="0.1" frameImage="shape_round_12" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [CreateMaskFrame()](Trigger-API-Reference-DCEI-Functions-Custom-UI#createmaskframe-1)

#### Related UI XML Properties:
- [StencilMask](Ui-XML-StencilMask)
[](extra-section-end)

[](overview-end)

Shows only part of children UI frames

