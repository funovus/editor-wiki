<div id="toc" markdown="1">
- [Ui XML Reference\StencilMask](#ui-xml-referencestencilmask)
  * [onlyAffectChildren](#onlyaffectchildren)

</div>

***

# [Ui XML Reference](Ui-XML)\\StencilMask {ui-xml-referenceStencilMask}

[](overview-start)

Shows through part of parent or self `Mask` area.

#### Example Usage
[](example-usage-start)
```xml
<Mask>
    <!-- Button has a child stencil mask that will 'cut through' the masking frame's effect -->
    <Button height="200" width="200">
        <Frame padding="-20">
            <StencilMask id="mask_stencil" backgroundImage="shape_square_32x32" matchParentWidth="true" matchParentHeight="true" />
        </Frame>
    </Button>
    <!-- Frame that actually creates the masking effect -->
    <Frame id="mask" active="true" width="9000" height="9000" backgroundImageColor="r: 0, g: 0, b: 0, a: 0.45" />
</Mask>
```
This xml script produces the following UI:
![Stencil Mask](https://user-images.githubusercontent.com/34138206/147840463-2b9ebb37-1f91-449d-858a-794621edd077.gif)

The stencil mask, given a negative padding, is slightly larger than it's parent button. As the button changes size in response to being clicked on, the stencil mask matches its size and thus the stenciled portion adjusts smoothly.
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [CreateStencilMaskFrame()](Trigger-API-Reference-DCEI-Functions-Custom-UI#transform-createstencilmaskframetransform-parent)

#### Related UI XML Properties:
- [Mask](Ui-XML-Mask)
[](extra-section-end)

[](overview-end)

Shows through part of parent or self Mask area

## [](StencilMask.onlyAffectChildren)onlyAffectChildren {onlyAffectChildren}
**Value type: `boolean`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
If `true` the stencil mask will only affect children frames. This will make the stencil mask no longer stencil out part of its parent mask. Instead, the stencil will stencil out any covered portions of children frames. This still requires the stencil mask to be placed inside a mask frame, but the mask frame does not need a tinting frame.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Mask>
    <StencilMask id="mask_stencil" height="150" width="150" backgroundImage="shape_square_32x32" onlyAffectChildren="true">
        <Button height="200" width="200" />
    </StencilMask>
</Mask>
```
This xml script produces the following UI:
![Stencil Mask Child Only](https://user-images.githubusercontent.com/34138206/147840462-d8c71d72-a360-46e7-a050-8e990d4620e3.gif)

Here the stencil mask cuts a static hole in its child button frame.
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

[](manual-wiki-end)

