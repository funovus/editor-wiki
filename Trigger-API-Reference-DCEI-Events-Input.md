<div id="toc" markdown="1">
- [Trigger API Reference\DCEI Events\Input](#trigger-api-referencedcei-eventsinput)
  * [TriggerAddMouseDownEvent](#triggeraddmousedownevent-2)
  * [TriggerAddMouseUpEvent](#triggeraddmouseupevent-2)
  * [TriggerAddSwipeTouchDownEvent](#triggeraddswipetouchdownevent-1)
  * [TriggerAddSwipeTouchUpEvent](#triggeraddswipetouchupevent-1)
  * [TriggerAddTouchDownEvent](#triggeraddtouchdownevent-1)
  * [TriggerAddTouchUpEvent](#triggeraddtouchupevent-1)
  * [TriggerAddJoystickEvent](#triggeraddjoystickevent-1)
  * [TriggerAddJoystickEventWithJoystickOptions](#triggeraddjoystickeventwithjoystickoptions-2)
  * [TriggerAddJoystickTapEvent](#triggeraddjoysticktapevent-4)
  * [TriggerAddJoystickSwipeEvent](#triggeraddjoystickswipeevent-3)
  * [TriggerAddJoystickReleaseEvent](#triggeraddjoystickreleaseevent-1)
  * [TriggerAddJoystickReleaseEventWithId](#triggeraddjoystickreleaseeventwithid-2)
  * [TriggerAddTextCommandEvent](#triggeraddtextcommandevent-1)
  * [TriggerAddJoystickButtonEvent](#triggeraddjoystickbuttonevent-3)
  * [TriggerAddMappedKeyDownEvent](#triggeraddmappedkeydownevent-2)
  * [TriggerAddMappedKeyUpEvent](#triggeraddmappedkeyupevent-2)
  * [TriggerAddOnMouseWorldPositionTrackingEvent](#triggeraddonmouseworldpositiontrackingevent-1)
  * [StartMouseTracking](#startmousetracking-1)
  * [StopMouseTracking](#stopmousetracking-1)
  * [SetQuestionButton](#setquestionbutton-1)
  * [SetBackButton](#setbackbutton-1)
  * [SetOnMouseEnterCallback](#setonmouseentercallback-2)
  * [SetOnMouseExitCallback](#setonmouseexitcallback-2)
  * [SetOnDownCallback](#setondowncallback-2)
  * [SetOnUpCallback](#setonupcallback-2)
  * [SetOnClickCallback](#setonclickcallback-2)
  * [SetOnClickOutsideCallback](#setonclickoutsidecallback-2)
  * [SetPauseMenuCallback](#setpausemenucallback-1)

</div>

***

# [Trigger API Reference](Trigger-API-Reference)\\DCEI Events\Input {Trigger-API-ReferenceDCEI-EventsInput}

[](overview-start)

[](overview-end)

## void TriggerAddMouseDownEvent(int mouseButtonId, TypedCallback\<Float2, unit> trigger) {triggeraddmousedownevent-2}
```cs
void TriggerAddMouseDownEvent(int mouseButtonId, TypedCallback<Float2, unit> trigger)
```
#### Description
[](description-start)
This event triggers when the specified mouse button down occurs. Using this event will disable unit selection as well as all other built-in mouse functions tied to the given mouse button id including any [TriggerAddMouseUpEvent](#triggeraddmouseupevent-2). This function can also pass the mouse cursor position as a parameter to the callback function.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `mouseButtonId` the mouse button; mouseButtonId 0: left mouse, mouseButtonId 1: right mouse.
- *TypedCallback\<Float2, unit>* `trigger` the callback function that is run when the event is triggered.

[](parameters-end)

#### Callback Parameters
- *Float2* `position`
- *Unit* `target_unit`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.TriggerAddMouseDownEvent(0, OnMouseDown)

function OnMouseDown(cursor_pos)
    DCEI.LogMessage("LMB Down")
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void TriggerAddMouseUpEvent(int mouseButtonId, TypedCallback\<Float2, unit> trigger) {triggeraddmouseupevent-2}
```cs
void TriggerAddMouseUpEvent(int mouseButtonId, TypedCallback<Float2, unit> trigger)
```
#### Description
[](description-start)
This event triggers when the specified mouse button up occurs. Using this event will disable unit commands as well as all other built-in mouse functions tied to the given mouse button id including any [TriggerAddMouseDownEvent](Trigger-API-Reference-DCEI-Events-Input#triggeraddmousedownevent-2).
[](description-end)

#### Parameters
[](parameters-start)
- *int* `mouseButtonId` the mouse button; mouseButtonId 0: left mouse, mouseButtonId 1: right mouse.
- *TypedCallback\<Float2, unit>* `trigger` the callback function that is run when the event is triggered.

[](parameters-end)

#### Callback Parameters
- *Float2* `position`
- *Unit* `target_unit`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.TriggerAddMouseUpEvent(1, OnMouseUp)

function OnMouseUp()
    DCEI.LogMessage("RMB Up")
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void TriggerAddSwipeTouchDownEvent(TypedCallback\<Float2> trigger) {triggeraddswipetouchdownevent-1}
```cs
void TriggerAddSwipeTouchDownEvent(TypedCallback<Float2> trigger)
```
#### Description
[](description-start)
This event triggers when the start of a screen swipe input has been detected. Only works on mobile. Using this event will disable camera pan as well as all other built-in touch functions including TriggerAddTouchUpEvent. 
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback\<Float2>* `trigger` the trigger to run when this event occurs. Parameter `point` denotes the point in screenspace (not worldspace), where the Swipe input was started.

[](parameters-end)

#### Callback Parameters
- *Float2* `position`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.TriggerAddSwipeTouchDownEvent(function(point)
  DCEI.LogMessage("Swipe down happens on screen point: " .. point.x .. ", " .. point.y)
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void TriggerAddSwipeTouchUpEvent(TypedCallback\<Float2> trigger) {triggeraddswipetouchupevent-1}
```cs
void TriggerAddSwipeTouchUpEvent(TypedCallback<Float2> trigger)
```
#### Description
[](description-start)
This event triggers when the end of a screen swipe input has been detected. Only works on mobile. Using this event will disable camera pan as well as all other built-in touch functions including TriggerAddTouchUpEvent. 
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback\<Float2>* `trigger` the trigger to run when this event occurs. Parameter `point` denotes the point in screenspace (not worldspace), where the Swipe input has ended.

[](parameters-end)

#### Callback Parameters
- *Float2* `position`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua

DCEI.TriggerAddSwipeTouchUpEvent(function(point)
  DCEI.LogMessage("Swipe up happens on screen point: " .. point.x .. ", " .. point.y)
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void TriggerAddTouchDownEvent(TypedCallback\<Float2, unit> trigger) {triggeraddtouchdownevent-1}
```cs
void TriggerAddTouchDownEvent(TypedCallback<Float2, unit> trigger)
```
#### Description
[](description-start)
This event triggers when the start of a touch input is detected. Only works on mobile. Using this event will disable unit selection as well as all other built-in touch functions including TriggerAddSwipeTouchDownEvent. 
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback\<Float2, unit>* `trigger` the trigger to run when this event occurs. Parameter `point` denotes the point in screenspace (not worldspace), where the Touch input occurred.

[](parameters-end)

#### Callback Parameters
- *Float2* `position`
- *Unit* `target_unit`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.TriggerAddTouchDownEvent(function(point)
  DCEI.LogMessage("Touch down happens on screen point: " .. point.x .. ", " .. point.y)
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void TriggerAddTouchUpEvent(TypedCallback\<Float2, unit> trigger) {triggeraddtouchupevent-1}
```cs
void TriggerAddTouchUpEvent(TypedCallback<Float2, unit> trigger)
```
#### Description
[](description-start)
This event triggers when the end of a touch input is detected. Only works on mobile. Using this event will disable unit selection as well as all other built-in touch functions including TriggerAddSwipeTouchDownEvent. 
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback\<Float2, unit>* `trigger` the trigger to run when this event occurs. Parameter `point` denotes the point in screenspace (not worldspace), where the Touch input occurred.

[](parameters-end)

#### Callback Parameters
- *Float2* `position`
- *Unit* `target_unit`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.TriggerAddTouchUpEvent(function(point)
  DCEI.LogMessage("Touch up happens on screen point: " .. point.x .. ", " .. point.y)
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void TriggerAddJoystickEvent(TypedCallback trigger) {triggeraddjoystickevent-1}
```cs
void TriggerAddJoystickEvent(TypedCallback trigger)
```
#### Description
[](description-start)
Creates an on-screen joystick and that triggers this event when moved. Uses default [JoystickOptions](Trigger-API-Reference-DCEI-Types#joystickoptions).
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback* `trigger` the trigger to run when this event occurs.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function OnJoystickMove()
    local axes = DCEI.TriggeringJoystickAxes
    DCEI.DirectionalMove(unit, axes.x, axes.y)
end

DCEI.TriggerAddJoystickEvent(OnJoystickMove)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void TriggerAddJoystickEventWithJoystickOptions(TypedCallback trigger, JoystickOptions options) {triggeraddjoystickeventwithjoystickoptions-2}
```cs
void TriggerAddJoystickEventWithJoystickOptions(TypedCallback trigger, JoystickOptions options)
```
#### Description
[](description-start)
Creates an on-screen joystick and that triggers this event when moved. Uses default [JoystickOptions](Trigger-API-Reference-DCEI-Types#joystickoptions).

By default, the joystick can be used with WASD, arrow keys, or by click-dragging the joystick button.
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback* `trigger` the trigger to run when this event occurs.
- *[JoystickOptions](Trigger-API-Reference-DCEI-Types#joystickoptions)* `options` see [JoystickOptions](Trigger-API-Reference-DCEI-Types#joystickoptions)

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local unit = DCEI.CreateUnit(1, 1, "Standard MeleeUnit", 15, 15)

local function OnJoystickMove()
    local axes = DCEI.TriggeringJoystickAxes
    DCEI.DirectionalMove(unit, axes.x, axes.y)
end

local function CreateJoystick()
    local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())

    DCEI.SetFrameWidth(frame, 1500)
    DCEI.SetFrameHeight(frame, 1500)

    local joystick_options = {
        anchor = { x = 0, y = 0 },
        offset = { x = 0, y = 0 },
        disable_wasd = true,
        disable_arrow_keys = true,
        joystick_id = 1,
        dynamic_position = true,
        always_show = true,
        radius = 150,
        active_area_offset = {
            left = 500,
            right = 50,
            top = 500,
            bottom = 50,
            debug_draw_color = { r = 0, g = 1, b = 0, a = 0.5 },
        },
        handle_icon = DCEI.Texture("icon_arrow"),
        handle_icon_color = { r = 1, g = 0, b = 0, a = 0.5 },
        background_icon = DCEI.Texture("general_icon_wildsky_mall_light_circle"),
        background_icon_color = { r = 1, g = 0, b = 0, a = 0.5 },
        handle_rotation = true,
        parent = frame,
    }

    DCEI.TriggerAddJoystickEventWithJoystickOptions(OnJoystickMove, joystick_options)
end

CreateJoystick()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void TriggerAddJoystickTapEvent(TypedCallback trigger, int joystickId, float validDuration, float validRadius) {triggeraddjoysticktapevent-4}
```cs
void TriggerAddJoystickTapEvent(TypedCallback trigger, int joystickId, float validDuration, float validRadius)
```
#### Description
[](description-start)
This event triggers when a joystick is tapped.
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback* `trigger` the trigger to run when this event occurs.
- *int* `joystickId` the ID of the joystick to register the event for.
- *float* `validDuration` the time window where interacting with the joystick will register as a tap. This is also the time window before the joystick will accept input regularly. If the joystick tap location exits the deadzone given in the next parameter, this duration will immediately end.
- *float* `validRadius` the deadzone where interacting with the joystick will register as a tap. Accepted values are from 0-1, corresponding to the radius of the joystick (measured from the center). Tapping the joystick outside this deadzone will not trigger the event.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function OnJoystickTap()
    DCEI.LogMessage("Joystick Tapped: " .. DCEI.TriggeringJoystickId)
end

DCEI.TriggerAddJoystickEventWithJoystickOptions(OnJoystickMove, joystickOptions)
DCEI.TriggerAddJoystickTapEvent(OnJoystickTap, 0, 0.25, 0.5)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void TriggerAddJoystickSwipeEvent(TypedCallback trigger, int joystickId, float validDuration) {triggeraddjoystickswipeevent-3}
```cs
void TriggerAddJoystickSwipeEvent(TypedCallback trigger, int joystickId, float validDuration)
```
#### Description
[](description-start)
This event triggers when a joystick is swiped.
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback* `trigger` the trigger to run when this event occurs.
- *int* `joystickId` the ID of the joystick to register the event for.
- *float* `validDuration` the time window where interacting with the joystick will register as a swipe. This time window starts counting when the joystick is interacted with, even if it is within the deadzone of a [TriggerAddJoystickTapEvent](Trigger-API-Reference-DCEI-Events-Input#triggeraddjoysticktapevent-4).

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function OnJoystickTap()
    DCEI.LogMessage("Joystick Tapped: " .. DCEI.TriggeringJoystickId)
end

DCEI.TriggerAddJoystickEventWithJoystickOptions(OnJoystickMove, joystickOptions)
DCEI.TriggerAddJoystickSwipeEvent(OnJoystickSwipe, 0, 1)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void TriggerAddJoystickReleaseEvent(TypedCallback trigger) {triggeraddjoystickreleaseevent-1}
```cs
void TriggerAddJoystickReleaseEvent(TypedCallback trigger)
```
#### Description
[](description-start)
This event triggers when a joystick is released.
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback* `trigger` the trigger to run when this event occurs.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function OnJoystickRelease()
    DCEI.LogMessage("Joystick Released: " .. DCEI.TriggeringJoystickId)
end
DCEI.TriggerAddJoystickReleaseEvent(OnJoystickRelease)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void TriggerAddJoystickReleaseEventWithId(TypedCallback trigger, int joystickId) {triggeraddjoystickreleaseeventwithid-2}
```cs
void TriggerAddJoystickReleaseEventWithId(TypedCallback trigger, int joystickId)
```
#### Description
[](description-start)
This event triggers when the given joystick is released.
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback* `trigger` the trigger to run when this event occurs.
- *int* `joystickId` the ID of the joystick to register the event for.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.TriggerAddJoystickReleaseEventWithId(OnJoystickRelease, 0)

function OnJoystickRelease()
    DCEI.LogMessage("Joystick Released: " .. DCEI.TriggeringJoystickId)
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void TriggerAddTextCommandEvent(TypedCallback\<string> trigger) {triggeraddtextcommandevent-1}
```cs
void TriggerAddTextCommandEvent(TypedCallback<string> trigger)
```
#### Description
[](description-start)
This event triggers when a text command is entered.
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback\<string>* `trigger` the callback function for the chat command. Parameter `text_command` is the text command entered.

[](parameters-end)

#### Callback Parameters
- *String* `command`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.TriggerAddTextCommandEvent(OnTextCommand)

function OnTextCommand(text_command)
    DCEI.ShowFeedbackMessage(text_command)
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void TriggerAddJoystickButtonEvent(int buttonId, TypedCallback trigger, JoystickButtonOptions options) {triggeraddjoystickbuttonevent-3}
```cs
void TriggerAddJoystickButtonEvent(int buttonId, TypedCallback trigger, JoystickButtonOptions options)
```
#### Description
[](description-start)
Creates an on-screen button corresponding to the given buttonId.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `buttonId` which joystick button index to use. Accepted values: `[0, 3]` (see below).
```
Button Ids
-------------------
|                 |
|             (3) |
|          (2)    |
|       (1)   (0) |
|-----------------|
```
- *TypedCallback* `trigger` the callback function for when the joystick button is used.
- *[JoystickButtonOptions](Trigger-API-Reference-DCEI-Types#joystickbuttonoptions)* `options` [accepted values](JoystickButtonOptions)

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function OnJoystickButton()
    local button_id = DCEI.TriggeringJoystickButtonId
    local button_event = DCEI.TriggeringJoystickButtonEventType

    -- button event 0 is for ButtonDown, event 1 is for ButtonUp
    if button_id == 0 and button_event == 0 then
        -- currently does not support targeted abilities
        -- movement commands will interrupt ability prep time / finish time, unless ability has "can cast while moving" flag checked
        DCEI.CastAbility(HERO_SLASH, HERO, HERO)
    end
end

DCEI.TriggerAddJoystickButtonEvent(0, OnJoystickButton, { icon = DCEI.Texture("icon_ingame_towerslot_barracks") })
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void TriggerAddMappedKeyDownEvent(string keyEventName, TypedCallback\<string> trigger) {triggeraddmappedkeydownevent-2}
```cs
void TriggerAddMappedKeyDownEvent(string keyEventName, TypedCallback<string> trigger)
```
#### Description
[](description-start)
This event triggers when the corresponding key is pressed. Key mappings are defined in [input settings](Data-ProjectSetting#key-mappings). 
[](description-end)

#### Parameters
[](parameters-start)
- *string* `keyEventName` the mapped key event that will trigger this event.
- *TypedCallback\<string>* `trigger` the trigger to run when this event occurs.

[](parameters-end)

#### Callback Parameters
- *String* `key event name`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua

function OnPressKeyShoot()
  -- shoot a projectile
end

-- for a key mapped to the name "Shoot"
DCEI.TriggerAddMappedKeyDownEvent("Shoot", OnPressKeyShoot)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void TriggerAddMappedKeyUpEvent(string keyEventName, TypedCallback\<string> trigger) {triggeraddmappedkeyupevent-2}
```cs
void TriggerAddMappedKeyUpEvent(string keyEventName, TypedCallback<string> trigger)
```
#### Description
[](description-start)
This event triggers when the corresponding key is released. Key mappings are defined in [input settings](Data-ProjectSetting#key-mappings). 
[](description-end)

#### Parameters
[](parameters-start)
- *string* `keyEventName` the mapped key event that will trigger this event.
- *TypedCallback\<string>* `trigger` the trigger to run when this event occurs.

[](parameters-end)

#### Callback Parameters
- *String* `key event name`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua

function OnReleaseKeyShoot()
  -- shoot a projectile
end

-- for a key mapped to the name "Shoot"
DCEI.TriggerAddMappedKeyUpEvent("Shoot", OnReleaseKeyShoot)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void TriggerAddOnMouseWorldPositionTrackingEvent(TypedCallback\<int, Float2> trigger) {triggeraddonmouseworldpositiontrackingevent-1}
```cs
void TriggerAddOnMouseWorldPositionTrackingEvent(TypedCallback<int, Float2> trigger)
```
#### Description
[](description-start)
Tracks mouse position every frame when StartMouseTracking is called. StopMouseTracking will end it. 
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback\<int, Float2>* `trigger` function to run when event is called

[](parameters-end)

#### Callback Parameters
- *Int32* `player_id`
- *Float2* `mouse_position`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```Lua
function OnMouseTracking(player_id, mouse_position)
    local current_mouse_position = mouse_position --current mouse position
end
TriggerAddOnMouseWorldPositionTrackingEvent(OnMouseTracking)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void StartMouseTracking(int playerId) {startmousetracking-1}
```cs
void StartMouseTracking(int playerId)
```
#### Description
[](description-start)
Start tracking mouse. Notice this is very costy especially in multiplayer mode. So only use it for short time (follow mouse laser for example)
[](description-end)

#### Parameters
[](parameters-start)
- *int* `playerId` id of player to track

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.StartMouseTracking(1)
DCEI.TriggerAddOnMouseTrackingEvent(MouseTrack)

function MouseTrack(player_id, position)
    if game.mouse_down then
        game.player_mouse_pos = position or DCEI.GetMousePosition2D()
    end
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void StopMouseTracking(int playerId) {stopmousetracking-1}
```cs
void StopMouseTracking(int playerId)
```
#### Description
[](description-start)
Stop mouse tracking for certain player. 
[](description-end)

#### Parameters
[](parameters-start)
- *int* `playerId` id of player to track

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.StartMouseTracking(1)
DCEI.TriggerAddOnMouseTrackingEvent(MouseTrack)

function MouseTrack(player_id, position)
    if game.mouse_down then
        game.player_mouse_pos = position or DCEI.GetMousePosition2D()
    end
end

DCEI.Wait(10)

DCEI.StopMouseTracking(1)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetQuestionButton(TypedCallback callback) {setquestionbutton-1}
```cs
void SetQuestionButton(TypedCallback callback)
```
#### Description
[](description-start)
Shows a help button that runs a function when clicked, commonly combined with a message box to give gameplay tips.
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback* `callback` function to call when the question button is pressed.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function ShowQuestionMessage()
    local title = "Another Message"
    local body = "The question button runs a function when pressed, such as showing a message box."  
    local button_text = "Continue"
    DCEI.ShowMessageWithButtonText(title, body, button_text)
end

DCEI.SetQuestionButton(ShowQuestionMessage)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetBackButton(TypedCallback callback) {setbackbutton-1}
```cs
void SetBackButton(TypedCallback callback)
```
#### Description
[](description-start)
This event triggers when the back button on mobile devices is used.
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback* `callback` lua function to run when the back button is pressed.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function OnBackButton()
    DCEI.LogMessage("Back Button pressed.")
end

DCEI.SetBackButton(OnBackButton)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetOnMouseEnterCallback(InGameUILayoutComponent ui, TypedCallback trigger) {setonmouseentercallback-2}
```cs
void SetOnMouseEnterCallback(InGameUILayoutComponent ui, TypedCallback trigger)
```
#### Description
[](description-start)
Register a callback to occur when the player's mouse hovers over a UI frame. 
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the UI frame that will trigger the mouse enter callback.
- *TypedCallback* `trigger` the callback function for when the mouse enters the ui frame.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local button = DCEI.CreateButtonFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(button, 100, 100)
DCEI.SetOnMouseEnterCallback(button, function()
    DCEI.LogMessage("Mouse has entered button")
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetOnMouseExitCallback(InGameUILayoutComponent ui, TypedCallback trigger) {setonmouseexitcallback-2}
```cs
void SetOnMouseExitCallback(InGameUILayoutComponent ui, TypedCallback trigger)
```
#### Description
[](description-start)
Register a callback to occur when the player's mouse leaves a UI frame.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the UI frame that will trigger the mouse exit callback.
- *TypedCallback* `trigger` the callback function for when the mouse leaves the ui frame.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local button = DCEI.CreateButtonFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(button, 100, 100)
DCEI.SetOnMouseExitCallback(button, function()
    DCEI.LogMessage("Mouse has left button")
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetOnDownCallback(InGameUILayoutComponent ui, object callback) {setondowncallback-2}
```cs
void SetOnDownCallback(InGameUILayoutComponent ui, object callback)
```
#### Description
[](description-start)
This event triggers when the given button is pressed down. This can feel more responsive than [SetOnUpCallback](#setonupcallback-2).
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the button that triggers the event.
- *object* `callback` the callback function that is called when the event is triggered.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local button = DCEI.CreateButtonFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(button, 100, 100)
DCEI.SetOnDownCallback(
    button, 
    function()    
        DCEI.LogMessage("Button is pressed down")
    end
)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateButtonFrame()](Trigger-API-Reference-DCEI-Functions-Custom-UI#createbuttonframe-1)
[](extra-section-end)

## void SetOnUpCallback(InGameUILayoutComponent ui, object callback) {setonupcallback-2}
```cs
void SetOnUpCallback(InGameUILayoutComponent ui, object callback)
```
#### Description
[](description-start)
This event triggers when the given button press is released. This is functionally similar to [SetOnClickCallback](#setonclickcallback-2) but the event will fire regardless of input position when the button is released.

This can be combined with [SetOnDownCallback](Trigger-API-Reference-DCEI-Events-Input#setondowncallback-2) to make something happen when a button is held down.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the button that triggers the event.
- *object* `callback` the callback function that is called when the event is triggered.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local button = DCEI.CreateButtonFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(button, 100, 100)
DCEI.SetOnUpCallback(
    button, 
    function()    
        DCEI.LogMessage("Button is released")
    end
)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateButtonFrame()](Trigger-API-Reference-DCEI-Functions-Custom-UI#createbuttonframe-1)
[](extra-section-end)

## void SetOnClickCallback(InGameUILayoutComponent ui, object callback) {setonclickcallback-2}
```cs
void SetOnClickCallback(InGameUILayoutComponent ui, object callback)
```
#### Description
[](description-start)
This event triggers when the specified UI button frame is clicked. This is functionally similar to [DCEI.SetOnUpCallback()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setonupcallback-2) with one key difference--this event will only fire if the input position is still over the button when released.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the button that triggers the event.
- *object* `callback` the callback function that is called when the event is triggered.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local button = DCEI.CreateButtonFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(button, 100, 100)
DCEI.SetOnClickCallback(
    button, 
    function()    
        DCEI.LogMessage("Button is clicked")
    end
)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateButtonFrame()](Trigger-API-Reference-DCEI-Functions-Custom-UI#createbuttonframe-1)
[](extra-section-end)

## void SetOnClickOutsideCallback(InGameUILayoutComponent ui, TypedCallback callback) {setonclickoutsidecallback-2}
```cs
void SetOnClickOutsideCallback(InGameUILayoutComponent ui, TypedCallback callback)
```
#### Description
[](description-start)
Registers a callback to run when a click/touch happens outside of the specified UI frame while the frame is active. Unlike DCEI.[SetOnClickCallback](#setonclickcallback-2)(), this API works on any frame type. You can enable "Custom UI Inspector" in the in-game dev panel to check what UI frames are under the current mouse position to better understand what's considered outside of a frame by the engine.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the ui that triggers the event.
- *TypedCallback* `callback` the callback function that is called when the event is triggered.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local button = DCEI.CreateButtonFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(button, 100, 100)
DCEI.SetOnClickOutsideCallback(
    button, 
    function()    
        DCEI.LogMessage("Somewhere besides the button has been clicked")
    end
)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetPauseMenuCallback(TypedCallback\<bool> callback) {setpausemenucallback-1}
```cs
void SetPauseMenuCallback(TypedCallback<bool> callback)
```
#### Description
[](description-start)
This event is triggered when a custom pause menu is opened or closed. Setting this callback will overwrite the default pause menu functionality of stopping game time, so you will need to re-add that in your own implementation if desired.
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback\<bool>* `callback` the callback function that is called when the pause menu is opened or closed.

[](parameters-end)

#### Callback Parameters
- *Boolean* `pause`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- create a custom pause menu
local menu = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(menu, 400, 600)
DCEI.SetFrameImage(menu, DCEI.Texture("frame01_purple"))
DCEI.SetPauseMenuFrame(menu)
    
-- the pause menu is inactive by default but we can update it safely with UpdateFrame
DCEI.UpdateFrame(
    menu,
    function()
        local resume_button = DCEI.CreateButtonFrame(menu)
        DCEI.SetFrameSize(resume_button, 200, 100)
        DCEI.SetOnClickCallback(
            resume_button, 
            function()
                DCEI.HidePauseMenuFrame(menu)
            end
        )
    end
)

-- create a custom pause menu button
local pause_button = DCEI.CreateButtonFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImage(pause_button, DCEI.Texture("btn_red"))
DCEI.SetFrameTopAlignmentInParent(pause_button)
DCEI.SetFrameLeftAlignmentInParent(pause_button)
DCEI.SetFrameSize(pause_button, 200, 200)

-- hookup the pause menu button callback
DCEI.SetOnClickCallback(
    pause_button,
    function()
        DCEI.ShowPauseMenuFrame(menu)
    end
)

-- add custom pause menu callback
DCEI.SetPauseMenuCallback(
    function(pause)
        if pause then
            Core.GameSpeed.Set(0)
        else
            Core.GameSpeed.Set(1)
        end
    end
)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [SetPauseMenuFrame()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setpausemenuframe-1)
- [ShowPauseMenuFrame()](Trigger-API-Reference-DCEI-Functions-Custom-UI#showpausemenuframe-0)
- [HidePauseMenuFrame()](Trigger-API-Reference-DCEI-Functions-Custom-UI#hidepausemenuframe-0)
- [SetPauseMenuFrameResumeButton()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setpausemenuframeresumebutton-1)
- [SetPauseMenuFrameQuitButton()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setpausemenuframequitbutton-1)
- [SetPauseMenuFrameRestartButton()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setpausemenuframerestartbutton-1)
- [SetPauseMenuFramePlayLevelButton()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setpausemenuframeplaylevelbutton-3)
- [SetPauseMenuFrameSettingsButton()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setpausemenuframesettingsbutton-1)
- [SuppressPauseMenuOnApplicationPause()](Trigger-API-Reference-DCEI-Functions-Custom-UI#suppresspausemenuonapplicationpause-0)
[](extra-section-end)

