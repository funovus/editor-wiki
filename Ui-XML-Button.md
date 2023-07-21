<div id="toc" markdown="1">
- [Ui XML Reference\Button](#ui-xml-referencebutton)
  * [enable](#enable)
  * [onClick](#onclick)

</div>

***

# [Ui XML Reference](Ui-XML)\\Button {ui-xml-referenceButton}

[](overview-start)

A button which can can be hooked up to run a lua function or change a XML state on click. By default, new buttons use a [padding](Ui-XML-CommonAttributes#padding) of 12 and `btn_green` as their [background image](Ui-XML-CommonAttributes#backgroundimage). This frame type has a default size of 0 and expands to fit any children. Commonly supports a child text frame as button text.

#### Example Usage
[](example-usage-start)
```xml
<Button layout="flex" width="200" height="100">
    <Text text="Button" />
</Button>
```
This XML produces the following UI (shown in the UI Previewer):
![image](https://user-images.githubusercontent.com/34138206/149418802-2305c9c2-4027-4e59-8804-b016846e1224.png)

[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [CreateButtonFrame()](Trigger-API-Reference-DCEI-Functions-Custom-UI#createbuttonframe-1)
[](extra-section-end)

[](overview-end)

## [](Button.enable)enable {enable}
**Value type: `boolean`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The enabled status for the button frame, where `true` is enabled and `false` is disabled. Disabled buttons are grayed out and do not register events.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Button layout="flex" width="200" height="100" enable="false">
    <Text text="Button" />
</Button>
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetButtonFrameEnable()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setbuttonframeenabletransform-ui-bool-enable)
[](extra-section-end)

[](manual-wiki-end)

## [](Button.onClick)onClick {onClick}
**Value type: `string`**

**Supports data binding**

[](manual-wiki-start)

[](example-usage-start)
```xml
<Frame layout="flex" flexDirection="column">
    <!-- Declare initial state values. -->
    <State name="red" booleanValue="false" />
    <!-- Show different background images depending on the state value and flip state value when clicked. -->
    <Button bind:frameImage="'btn_' .. (state.red and 'red' or 'blue')" bind:onClick="state.red = not state.red">
        <Text text="switch color" />
    </Button>
    <Text bind:text="state.red and 'red' or 'blue'" />
</Frame>
```
[](example-usage-end)
[](extra-section-start)
#### Related Trigger Function(s):
- [SetOnClickCallback()](Trigger-API-Reference-DCEI-Events-Input#void-setonclickcallbacktransform-ui-object-callback)

#### Related UI XML Properties:
- [xmlns:bind](Ui-XML-CommonAttributes#xmlnsbind)
- [Ui XML State](Ui-XML-State)
[](extra-section-end)

[](manual-wiki-end)

