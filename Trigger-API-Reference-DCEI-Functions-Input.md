<div id="toc" markdown="1">
- [Trigger API Reference\DCEI Functions\Input](#trigger-api-referencedcei-functionsinput)
  * [GetMouseWorldPosition2D](#getmouseworldposition2d-0)
  * [GetTouchWorldPosition2D](#gettouchworldposition2d-0)
  * [GetSwipeScreenPosition](#getswipescreenposition-0)
  * [HideJoystick](#hidejoystick-1)
  * [ShowJoystick](#showjoystick-1)
  * [HideJoystickButton](#hidejoystickbutton-1)
  * [ShowJoystickButton](#showjoystickbutton-1)
  * [HasUserInput](#hasuserinput-0)

</div>

***

# [Trigger API Reference](Trigger-API-Reference)\\DCEI Functions\Input {Trigger-API-ReferenceDCEI-FunctionsInput}

[](overview-start)

[](overview-end)

## Float2 GetMouseWorldPosition2D() {getmouseworldposition2d-0}
```cs
Float2 GetMouseWorldPosition2D()
```
#### Description
[](description-start)
Returns the map coordinates of the mouse.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local mouse_pos = DCEI.GetMouseWorldPosition2D()
DCEI.LogMessage("x: " .. mouse_pos.x .. " y: " .. mouse_pos.y)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## Float2 GetTouchWorldPosition2D() {gettouchworldposition2d-0}
```cs
Float2 GetTouchWorldPosition2D()
```
#### Description
[](description-start)
Returns the map coordinates of the last touch input. Only works on mobile.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local touch_pos = DCEI.GetTouchWorldPosition2D()
DCEI.LogMessage("x: " .. touch_pos.x .. " y: " .. touch_pos.y)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## Float2 GetSwipeScreenPosition() {getswipescreenposition-0}
```cs
Float2 GetSwipeScreenPosition()
```
#### Description
[](description-start)
Return the swipe position based on screen coordinates in pixels.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local swipe_pos = DCEI.GetSwipeScreenPosition()
DCEI.LogMessage("x: " .. swipe_pos.x .. " y: " .. swipe_pos.y)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void HideJoystick(int joystickId = 0) {hidejoystick-1}
```cs
void HideJoystick(int joystickId = 0)
```
#### Description
[](description-start)
Hides the given joystick.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `joystickId` the ID of the joystick to hide.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.HideJoystick(0)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ShowJoystick(int joystickId = 0) {showjoystick-1}
```cs
void ShowJoystick(int joystickId = 0)
```
#### Description
[](description-start)
Shows the given joystick.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `joystickId` the ID of the joystick to show. Use [TriggerAddJoystickEvent](Trigger-API-Reference-DCEI-Events-Input#triggeraddjoystickevent-1) or [TriggerAddJoystickEventWithJoystickOptions](Trigger-API-Reference-DCEI-Events-Input#triggeraddjoystickeventwithjoystickoptions-2) to create a joystick.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.ShowJoystick(0)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [TriggerAddJoystickEvent](Trigger-API-Reference-DCEI-Events-Input#triggeraddjoystickevent-1)
- [TriggerAddJoystickEventWithJoystickOptions](Trigger-API-Reference-DCEI-Events-Input#triggeraddjoystickeventwithjoystickoptions-2)
- [TriggerAddJoystickTapEvent](Trigger-API-Reference-DCEI-Events-Input#triggeraddjoysticktapevent-4)
- [TriggerAddJoystickSwipeEvent](Trigger-API-Reference-DCEI-Events-Input#triggeraddjoystickswipeevent-3)
- [TriggerAddJoystickReleaseEvent](Trigger-API-Reference-DCEI-Events-Input#triggeraddjoystickreleaseevent-1)
- [TriggerAddJoystickReleaseEventWithId()](Trigger-API-Reference-DCEI-Events-Input#triggeraddjoystickreleaseeventwithid-2)
[](extra-section-end)

## void HideJoystickButton(int joystickButtonId) {hidejoystickbutton-1}
```cs
void HideJoystickButton(int joystickButtonId)
```
#### Description
[](description-start)
Hides the given joystick button.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `joystickButtonId` the ID of the joystick button to hide.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.HideJoystickButton(1)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ShowJoystickButton(int joystickButtonId) {showjoystickbutton-1}
```cs
void ShowJoystickButton(int joystickButtonId)
```
#### Description
[](description-start)
Shows the given joystick button. Use [TriggerAddJoystickButtonEvent](Trigger-API-Reference-DCEI-Events-Input#triggeraddjoystickbuttonevent-3) to create the joystick button.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `joystickButtonId` the ID of the joystick button to show.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.ShowJoystickButton(1)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [TriggerAddJoystickButtonEvent](Trigger-API-Reference-DCEI-Events-Input#triggeraddjoystickbuttonevent-3)
[](extra-section-end)

## bool HasUserInput() {hasuserinput-0}
```cs
bool HasUserInput()
```
#### Description
[](description-start)
Returns true if the current frame has user input.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.LogMessage(tostring(DCEI.HasUserInput()))
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

