<div id="toc" markdown="1">
- [Ui XML Reference\State](#ui-xml-referencestate)
  * [name](#name)
  * [numberValue](#numbervalue)
  * [stringValue](#stringvalue)
  * [booleanValue](#booleanvalue)

</div>

***

# [Ui XML Reference](Ui-XML)\\State {ui-xml-referenceState}

[](overview-start)

Define a UI state. Often used with `bind` properties. The value can be changed based on events or lua scripts.

#### Example Usage
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
Example lua script to modify a state's value:
```lua
local state = DCEI.GetFrameState(text_ui)

-- updates any lua state conditions defined in the XML element that use the `mode` state
state.mode = "default"
```
This XML produces the following UI:
![image](https://user-images.githubusercontent.com/34138206/149570650-800a26e7-615f-4cf6-8ed4-7b21344e5a6b.png)

[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [GetFrameState()](Trigger-API-Reference-DCEI-Functions-Custom-UI#getframestate-1)
[](extra-section-end)

[](overview-end)

Define a UI state

**This frame cannot have child frame.**

**This frame doesn't support common attributes.**

## [](State.name)name {name}
**Value type: `string`**

[](manual-wiki-start)

#### Description
[](description-start)
The name of the UI state. Used to identify the state when binding properties or updated the value.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<State name="enable" booleanValue="false" />
```
Lua script to modify the state's value:
```lua
local state = DCEI.GetFrameState(xml)
state.enable = "true"
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [GetFrameState()](Trigger-API-Reference-DCEI-Functions-Custom-UI#getframestate-1)
[](extra-section-end)

[](manual-wiki-end)

## [](State.numberValue)numberValue {numberValue}
**Value type: `number`**

[](manual-wiki-start)

#### Description
[](description-start)
The number value of the UI state.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<State name="size" numberValue="100" />
```
Lua script to modify the state's value:
```lua
local state = DCEI.GetFrameState(xml)
state.size = "500"
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [GetFrameState()](Trigger-API-Reference-DCEI-Functions-Custom-UI#getframestate-1)
[](extra-section-end)

[](manual-wiki-end)

## [](State.stringValue)stringValue {stringValue}
**Value type: `string`**

[](manual-wiki-start)

#### Description
[](description-start)
The string value of the UI state.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<State name="text" stringValue="Placeholder Text" />
```
Lua script to modify the state's value:
```lua
local state = DCEI.GetFrameState(xml)
state.text = "Still Placeholder Text"
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [GetFrameState()](Trigger-API-Reference-DCEI-Functions-Custom-UI#getframestate-1)
[](extra-section-end)

[](manual-wiki-end)

## [](State.booleanValue)booleanValue {booleanValue}
**Value type: `boolean`**

[](manual-wiki-start)

#### Description
[](description-start)
The boolean value of the UI state.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<State name="enable" booleanValue="false" />
```
Lua script to modify the state's value:
```lua
local state = DCEI.GetFrameState(xml)
state.enable = "true"
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [GetFrameState()](Trigger-API-Reference-DCEI-Functions-Custom-UI#getframestate-1)
[](extra-section-end)

[](manual-wiki-end)

