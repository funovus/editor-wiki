<div id="toc" markdown="1">
- [Trigger API Reference\DCEI Functions\UI](#trigger-api-referencedcei-functionsui)
  * [ShowFeedbackMessage](#showfeedbackmessage-1)
  * [ShowSystemUi](#showsystemui-1)
  * [HideSystemUi](#hidesystemui-1)
  * [ShowAbilitiesUi](#showabilitiesui-2)
  * [ShowAbilitiesUiInSlot](#showabilitiesuiinslot-3)
  * [HideAbilitiesUi](#hideabilitiesui-2)
  * [ShowAbilitiesUiForPlayer](#showabilitiesuiforplayer-3)
  * [HideAbilitiesUiForPlayer](#hideabilitiesuiforplayer-3)
  * [ShowUnitStatusUi](#showunitstatusui-2)
  * [ShowUnitStatusUiForPlayer](#showunitstatusuiforplayer-3)
  * [SetUnitHealthBarUiScale](#setunithealthbaruiscale-1)
  * [SetGoldRewardTextScale](#setgoldrewardtextscale-1)
  * [ShowSpeechBubble](#showspeechbubble-4)
  * [ShowSpeechBubble](#showspeechbubble-5)
  * [ShowUnitLabel](#showunitlabel-2)
  * [ShowUnitLabel](#showunitlabel-3)
  * [HideUnitLabel](#hideunitlabel-1)
  * [ShowFloatingText](#showfloatingtext-4)
  * [ShowFloatingText](#showfloatingtext-6)
  * [ShowFloatingTextWithOptions](#showfloatingtextwithoptions-6)
  * [ShowFloatingTextAtUnit](#showfloatingtextatunit-6)
  * [HideSpeechBubble](#hidespeechbubble-1)
  * [ShowUnitStatusUiInSlot](#showunitstatusuiinslot-3)
  * [SetHeroStatusUiVisibility](#setherostatusuivisibility-1)
  * [HideUnitStatusUi](#hideunitstatusui-2)
  * [HideUnitStatusUiForPlayer](#hideunitstatusuiforplayer-3)
  * [ShowMessageWithButtonText](#showmessagewithbuttontext-6)
  * [ShowBigHeadMessage](#showbigheadmessage-3)
  * [ShowBigHeadMessage](#showbigheadmessage-4)
  * [HideBigHeadMessage](#hidebigheadmessage-0)
  * [ShowObjectiveText](#showobjectivetext-1)
  * [HideObjective](#hideobjective-0)
  * [ShowScreenMask](#showscreenmask-2)
  * [HideScreenMask](#hidescreenmask-0)
  * [TakeScreenShot](#takescreenshot-3)
  * [TakeScreenShotWildSky](#takescreenshotwildsky-1)
  * [DeleteScreenShot](#deletescreenshot-1)
  * [ShowSlowMotionEffect](#showslowmotioneffect-0)
  * [HideSlowMotionEffect](#hideslowmotioneffect-0)

</div>

***

# [Trigger API Reference](Trigger-API-Reference)\\DCEI Functions\UI {Trigger-API-ReferenceDCEI-FunctionsUI}

[](overview-start)

[](overview-end)

## void ShowFeedbackMessage(string message) {showfeedbackmessage-1}
```cs
void ShowFeedbackMessage(string message)
```
#### Description
[](description-start)
Shows a in-game feedback message in the center of the player's screen.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `message` the message to display.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- Creates a button
local button_layout = GMUI.Layout.New({
    parent = DCEI.GetUiRootFrame(),
    name = "Standard/Button/Button",
})

-- Sets the button to show the feedback message
DCEI.SetOnClickCallback(button_layout.Button, function()
    DCEI.ShowFeedbackMessage("Message")
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ShowSystemUi(int typeId) {showsystemui-1}
```cs
void ShowSystemUi(int typeId)
```
#### Description
[](description-start)
Shows a specific built-in UI frame. These UI frames are shown by default.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `typeId` accepted values:
`0` for wave indicator
`1` for gold display
`2` for speed up button

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- Hides the wave and gold UI
DCEI.HideSystemUi(0)
DCEI.HideSystemUi(1)

-- Creates a button
local button_layout = GMUI.Layout.New({
    parent = DCEI.GetUiRootFrame(),
    name = "Standard/Button/Button",
})

-- Sets the button to show the wave and gold UI
DCEI.SetOnClickCallback(button_layout.Button, function()
    DCEI.ShowSystemUi(0)
    DCEI.ShowSystemUi(1)
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void HideSystemUi(int typeId) {hidesystemui-1}
```cs
void HideSystemUi(int typeId)
```
#### Description
[](description-start)
Hides a specific built-in UI frame.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `typeId` accepted values:
`0` for wave indicator
`1` for gold display
`2` for speed up button

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- Hides the wave and gold UI
DCEI.HideSystemUi(0)
DCEI.HideSystemUi(1)

-- Creates a button
local button_layout = GMUI.Layout.New({
    parent = DCEI.GetUiRootFrame(),
    name = "Standard/Button/Button",
})

-- Sets the button to show the wave and gold UI
DCEI.SetOnClickCallback(button_layout.Button, function()
    DCEI.ShowSystemUi(0)
    DCEI.ShowSystemUi(1)
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ShowAbilitiesUi(int id, unit unit) {showabilitiesui-2}
```cs
void ShowAbilitiesUi(int id, unit unit)
```
#### Description
[](description-start)
Shows the UI for the specified ability on the given unit. A specific ability can only be bound to one slot, even if multiple units have the ability. 
[](description-end)

#### Parameters
[](parameters-start)
- *int* `id` the ID of the ability on the unit.
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that has the ability.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- Creates a button
local button_layout = GMUI.Layout.New({
    parent = DCEI.GetUiRootFrame(),
    name = "Standard/Button/Button",
})

-- Sets the button to alternate between showing and hiding the ability UI
local ability_id = 0
local ability_ui_shown = false
DCEI.SetOnClickCallback(button_layout.Button, function()
    if ability_ui_shown then
        DCEI.HideAbilitiesUi(ability_id, unit)
    else
        DCEI.ShowAbilitiesUi(ability_id, unit)
    end
    ability_ui_shown = not ability_ui_shown
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ShowAbilitiesUiInSlot(int id, unit unit, int slotKey) {showabilitiesuiinslot-3}
```cs
void ShowAbilitiesUiInSlot(int id, unit unit, int slotKey)
```
#### Description
[](description-start)
Shows the built-in UI for the specified ability on the given unit in a specific UI slot.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `id` the ID of the ability on the unit.
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that has the ability.
- *int* `slotKey` the ability UI slot key.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local ability_id = 1
local slot_key = 3
DCEI.ShowAbilitiesUiInSlot(ability_id, unit, slot_key)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void HideAbilitiesUi(int id, unit unit) {hideabilitiesui-2}
```cs
void HideAbilitiesUi(int id, unit unit)
```
#### Description
[](description-start)
Hides the built-in UI for the specified ability on the given unit.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `id` the ID of the ability on the unit.
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that has the ability.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- Creates a button
local button_layout = GMUI.Layout.New({
    parent = DCEI.GetUiRootFrame(),
    name = "Standard/Button/Button",
})

-- Sets the button to alternate between showing and hiding the ability UI
local ability_id = 0
local ability_ui_shown = false
DCEI.SetOnClickCallback(button_layout.Button, function()
    if ability_ui_shown then
        DCEI.HideAbilitiesUi(ability_id, unit)
    else
        DCEI.ShowAbilitiesUi(ability_id, unit)
    end
    ability_ui_shown = not ability_ui_shown
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ShowAbilitiesUiForPlayer(int id, unit unit, int player) {showabilitiesuiforplayer-3}
```cs
void ShowAbilitiesUiForPlayer(int id, unit unit, int player)
```
#### Description
[](description-start)
Shows the built-in UI for the specified ability on the given unit for the given player.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `id` the ID of the ability on the unit.
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that has the ability.
- *int* `player` the player to show the UI for.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- Creates a button
local button_layout = GMUI.Layout.New({
    parent = DCEI.GetUiRootFrame(),
    name = "Standard/Button/Button",
})

-- Sets the button to alternate between showing and hiding the ability UI
local ability_id = 0
local player = 1
local ability_ui_shown = false
DCEI.SetOnClickCallback(button_layout.Button, function()
    if ability_ui_shown then
        DCEI.HideAbilitiesUiForPlayer(ability_id, g_hero, player)
    else
        DCEI.ShowAbilitiesUiForPlayer(ability_id, g_hero, player)
    end
    ability_ui_shown = not ability_ui_shown
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void HideAbilitiesUiForPlayer(int id, unit unit, int player) {hideabilitiesuiforplayer-3}
```cs
void HideAbilitiesUiForPlayer(int id, unit unit, int player)
```
#### Description
[](description-start)
Hides the built-in UI for the specified ability on the given unit for the given player.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `id` the ID of the ability on the unit.
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that has the ability.
- *int* `player` the player to hide the UI for.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- Creates a button
local button_layout = GMUI.Layout.New({
    parent = DCEI.GetUiRootFrame(),
    name = "Standard/Button/Button",
})

-- Sets the button to alternate between showing and hiding the ability UI
local ability_id = 0
local player = 1
local ability_ui_shown = false
DCEI.SetOnClickCallback(button_layout.Button, function()
    if ability_ui_shown then
        DCEI.HideAbilitiesUiForPlayer(ability_id, g_hero, player)
    else
        DCEI.ShowAbilitiesUiForPlayer(ability_id, g_hero, player)
    end
    ability_ui_shown = not ability_ui_shown
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ShowUnitStatusUi(int id, unit unit) {showunitstatusui-2}
```cs
void ShowUnitStatusUi(int id, unit unit)
```
#### Description
[](description-start)
Shows the built-in status UI for the given unit.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `id` the status UI to show. [List of values.](UnitStatusUi-ids)
```
2 - Large HP bar
3 - Slightly larger than default HP bar, bottom right corner "hero unit" UI
4 - Animated big hand pointer at the unit
5 - Top center HP bar with percent current HP
6 - Default speech bubble
7 - Nothing
8 - Yellow boxes/resource bar
9 - Yellow boxes as HP bar
10 - Nothing
11 - Top center HP bar with fractional current HP
```
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to show the status UI for.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- Creates the unit
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, z = 16, 16
local unit_instance = DCEI.CreateUnit(team_id, player_id, unit_type, x, z)

-- Shows the status UI
local status_id = 9
DCEI.ShowUnitStatusUi(status_id, unit_instance)

-- Hides the status UI after 2 seconds
local show_duration = 2
DCEI.TriggerAddTimerEventElapsed(function()
    DCEI.HideUnitStatusUi(status_id, unit_instance)
end, show_duration)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ShowUnitStatusUiForPlayer(int id, unit unit, int player) {showunitstatusuiforplayer-3}
```cs
void ShowUnitStatusUiForPlayer(int id, unit unit, int player)
```
#### Description
[](description-start)
Shows the built-in status UI for the given unit for the given player.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `id` the status UI to show. [List of values.](UnitStatusUi-ids)
`2` - Large HP bar
`3` - Slightly larger than default HP bar, bottom right corner "hero unit" UI
`4` - Animated big hand pointer at the unit
`5` - Top center HP bar with percent current HP
`6` - Default speech bubble
`7` - Nothing
`8` - Yellow boxes/resource bar
`9` - Yellow boxes as HP bar
`10` - Nothing
`11` - Top center HP bar with fractional current HP
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to show the status UI for.
- *int* `player` the player to show the UI for.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- Creates the unit
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, z = 16, 16
local unit_instance = DCEI.CreateUnit(team_id, player_id, unit_type, x, z)

-- Shows the status UI
local status_id = 9
DCEI.ShowUnitStatusUiForPlayer(status_id, unit_instance, player_id)

-- Hides the status UI after 2 seconds
local show_duration = 2
DCEI.TriggerAddTimerEventElapsed(function()
    DCEI.HideUnitStatusUiForPlayer(status_id, unit_instance, player_id)
end, show_duration)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetUnitHealthBarUiScale(float scale) {setunithealthbaruiscale-1}
```cs
void SetUnitHealthBarUiScale(float scale)
```
#### Description
[](description-start)
Sets the scale of the unit health bar UI.
[](description-end)

#### Parameters
[](parameters-start)
- *float* `scale` the scale of the unit health bar. A value of `0` will hide the health bar, useful when using [ShowUnitStatusUi](Trigger-API-Reference-DCEI-Functions-UI#showunitstatusui-2) or custom frames.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local scale = 0.5
DCEI.SetUnitHealthBarUiScale(scale)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetGoldRewardTextScale(float scale) {setgoldrewardtextscale-1}
```cs
void SetGoldRewardTextScale(float scale)
```
#### Description
[](description-start)
Sets the scale of the gold reward text, displayed when units with a [SetGoldBounty](Trigger-API-Reference-DCEI-Functions-Unit#setgoldbounty-2) are killed.
[](description-end)

#### Parameters
[](parameters-start)
- *float* `scale` the scale of the gold reward text. A value of `0` will hide the gold reward text.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local scale = 2
DCEI.SetGoldRewardTextScale(scale)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ShowSpeechBubble(unit unit, int width, string content, string title) {showspeechbubble-4}
```cs
void ShowSpeechBubble(unit unit, int width, string content, string title)
```
#### Description
[](description-start)
Displays a speech bubble for the given unit. Speech bubble will disappear if the unit dies. Will not overwrite previous speech bubbles attached to the unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to attach the speech bubble to.
- *int* `width` theoretically, the width of the speech bubble. Appears to instead control the offset of the bubble containing the text from the arrow.
- *string* `content` the content of the speech bubble.
- *string* `title` the title of the speech bubble. Commonly used to show speaker name.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- Creates the unit
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, z = 16, 16
local unit_instance = DCEI.CreateUnit(team_id, player_id, unit_type, x, z)

-- Creates the speech bubble
local width = 100
local content = "Content"
local title = "Title"
DCEI.ShowSpeechBubble(unit_instance, width, content, title)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ShowSpeechBubble(unit unit, int width, string content, string title, TextOptions options) {showspeechbubble-5}
```cs
void ShowSpeechBubble(unit unit, int width, string content, string title, TextOptions options)
```
#### Description
[](description-start)
Displays a speech bubble for the given unit. Speech bubble will disappear if the unit dies. Will not overwrite previous speech bubbles attached to the unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to attach the speech bubble to.
- *int* `width` theoretically, the width of the speech bubble. Appears to instead control the offset of the bubble containing the text from the arrow.
- *string* `content` the content of the speech bubble.
- *string* `title` the title of the speech bubble. Commonly used to show speaker name.
- *[TextOptions](Trigger-API-Reference-DCEI-Types#textoptions)* `options` the text options for the speech bubble. This controls the offset of the entire speech bubble.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- Creates the unit
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, z = 16, 16
local unit_instance = DCEI.CreateUnit(team_id, player_id, unit_type, x, z)

-- Creates the speech bubble
local width = 100
local content = "Content"
local title = "Title"
local text_options = { offset = { right = 1, up = 1, front = 2 } }
DCEI.ShowSpeechBubble(unit_instance, width, content, title, text_options)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ShowUnitLabel(unit unit, string content) {showunitlabel-2}
```cs
void ShowUnitLabel(unit unit, string content)
```
#### Description
[](description-start)
Shows a text tag attached to a unit. Will not overwrite existing labels.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit show to a label for.
- *string* `content` the text to display.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- Creates the unit
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, z = 16, 16
local unit_instance = DCEI.CreateUnit(team_id, player_id, unit_type, x, z)

-- Creates the label
local content = "Content"
DCEI.ShowUnitLabel(unit_instance, content)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ShowUnitLabel(unit unit, string content, UnitLabelOptions options) {showunitlabel-3}
```cs
void ShowUnitLabel(unit unit, string content, UnitLabelOptions options)
```
#### Description
[](description-start)
Shows a text tag attached to a unit. Will not overwrite existing labels.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit show to a label for.
- *string* `content` the text to display.
- *[UnitLabelOptions](Trigger-API-Reference-DCEI-Types#unitlabeloptions)* `options` accepted values:

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- Creates the unit
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, z = 16, 16
local unit_instance = DCEI.CreateUnit(team_id, player_id, unit_type, x, z)

-- Creates the label
local content = "Content"
local label_options = {offset = {right = 1, up = 1, front = 1}, center_at_unit_origin = true, center_at_unit_top = true}
DCEI.ShowUnitLabel(unit_instance, content, label_options)

-- Hides the label after 2 seconds
local show_duration = 2
DCEI.TriggerAddTimerEventElapsed(function()
    DCEI.HideUnitLabel(unit_instance)
end, show_duration)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void HideUnitLabel(unit unit) {hideunitlabel-1}
```cs
void HideUnitLabel(unit unit)
```
#### Description
[](description-start)
Hides a text tag attached to a unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to hide the label on.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- Creates the unit
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, z = 16, 16
local unit_instance = DCEI.CreateUnit(team_id, player_id, unit_type, x, z)

-- Creates the label
local content = "Content"
local label_options = {offset = {right = 1, up = 1, front = 1}, center_at_unit_origin = true, center_at_unit_top = true}
DCEI.ShowUnitLabel(unit_instance, content, label_options)

-- Hides the label after 2 seconds
local show_duration = 2
DCEI.TriggerAddTimerEventElapsed(function()
    DCEI.HideUnitLabel(unit_instance)
end, show_duration)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ShowFloatingText(float x, float y, float z, string content) {showfloatingtext-4}
```cs
void ShowFloatingText(float x, float y, float z, string content)
```
#### Description
[](description-start)
Displays floating text at the specified location. Text will immediately start to fade away.
[](description-end)

#### Parameters
[](parameters-start)
- *float* `x` the X coordinate.
- *float* `y` the Y coordinate.
- *float* `z` the Z coordinate.
- *string* `content` the content of the floating text.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local x, y, z = 12, 4, 12
local text = "Floating Text"
DCEI.ShowFloatingText(x, y, z, text)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ShowFloatingText(Float3 pos, string content, float stayDuration, int animationType, float animationDuration, TextOptions options) {showfloatingtext-6}
```cs
void ShowFloatingText(Float3 pos, string content, float stayDuration, int animationType, float animationDuration, TextOptions options)
```
#### Description
[](description-start)
Displays floating text at the specified location.
[](description-end)

#### Parameters
[](parameters-start)
- *[Float3](Trigger-API-Reference-DCEI-Types#float3)* `pos` the position for the floating text.
- *string* `content` the content of the floating text.
- *float* `stayDuration` the duration of the floating text. There is a short, fixed fade in and our duration at the start and end, respectively. If duration this is longer than the `animationDuration`, this duration will be used.
- *int* `animationType` the animation of the floating text: `0 - Text pops in`  `1 - text slowly floats upwards`
- *float* `animationDuration` The duration of the animation. If this duration is longer than the `stayDuration`, this duration will be used.
- *[TextOptions](Trigger-API-Reference-DCEI-Types#textoptions)* `options` the text options for floating text.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local float_text_pos = {x = 20, y = 2, z = 20}
local text_options = {offset = {right = 1, up = 10, front = 10}}
DCEI.ShowFloatingText(float_text_pos, "Floating Text", 5, 1, 5, text_options)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ShowFloatingTextWithOptions(Float3 pos, string content, float stayDuration, int animationType, float animationDuration, TextOptions options) {showfloatingtextwithoptions-6}
```cs
void ShowFloatingTextWithOptions(Float3 pos, string content, float stayDuration, int animationType, float animationDuration, TextOptions options)
```
#### Description
[](description-start)
Displays floating text at the specified location.
[](description-end)

#### Parameters
[](parameters-start)
- *[Float3](Trigger-API-Reference-DCEI-Types#float3)* `pos` the position for the floating text.
- *string* `content` the content of the floating text.
- *float* `stayDuration` the duration of the floating text. There is a short, fixed fade in and our duration at the start and end, respectively. If duration this is longer than the `animationDuration`, this duration will be used.
- *int* `animationType` the animation of the floating text: `0 - Text pops in`  `1 - text slowly floats upwards`
- *float* `animationDuration` The duration of the animation. If this duration is longer than the `stayDuration`, this duration will be used.
- *[TextOptions](Trigger-API-Reference-DCEI-Types#textoptions)* `options` the text options for floating text.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local float_text_pos = {x = 20, y = 2, z = 20}
local text_options = {offset = {right = 1, up = 10, front = 10}}
DCEI.ShowFloatingTextWithOptions(float_text_pos, "Floating Text", 5, 1, 5, text_options)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ShowFloatingTextAtUnit(unit unit, string content, float stayDuration, int animationType, float animationDuration, UnitLabelOptions options) {showfloatingtextatunit-6}
```cs
void ShowFloatingTextAtUnit(unit unit, string content, float stayDuration, int animationType, float animationDuration, UnitLabelOptions options)
```
#### Description
[](description-start)
Displays floating text at the specified unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to create the floating text at.
- *string* `content` the content of the floating text.
- *float* `stayDuration` the duration of the floating text. There is a short, fixed fade in and our duration at the start and end, respectively. If duration this is longer than the `animationDuration`, this duration will be used.
- *int* `animationType` the animation of the floating text: `0 - Text pops in`  `1 - text slowly floats upwards`
- *float* `animationDuration` The duration of the animation. If this duration is longer than the `stayDuration`, this duration will be used.
- *[UnitLabelOptions](Trigger-API-Reference-DCEI-Types#unitlabeloptions)* `options` accepted values:

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local label_options = {offset = {right = 1, up = 1, front = 1}, center_at_unit_origin = true, center_at_unit_top = true}
DCEI.ShowFloatingTextAtUnit(unit, "Floating Text", 5, 0, 5, label_options)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void HideSpeechBubble(unit unit) {hidespeechbubble-1}
```cs
void HideSpeechBubble(unit unit)
```
#### Description
[](description-start)
Hides a speech bubble attached to the given unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to hide the speech bubble for.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- Creates the unit
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, z = 16, 16
local unit_instance = DCEI.CreateUnit(team_id, player_id, unit_type, x, z)

-- Creates the speech bubble
local width = 100
local content = "Content"
local title = "Title"
DCEI.ShowSpeechBubble(unit_instance, width, content, title)

-- Hides the speech bubble after 2 seconds
local show_duration = 2
DCEI.TriggerAddTimerEventElapsed(function()
    DCEI.HideSpeechBubble(unit_instance)
end, show_duration)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ShowUnitStatusUiInSlot(int id, unit unit, int slotKey) {showunitstatusuiinslot-3}
```cs
void ShowUnitStatusUiInSlot(int id, unit unit, int slotKey)
```
#### Description
[](description-start)
Shows the built-in status UI for the given unit in the specified slot.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `id` the status UI to show. [List of values.](UnitStatusUi-ids)
`2` - Large HP bar
`3` - Slightly larger than default HP bar, bottom right corner "hero unit" UI
`4` - Animated big hand pointer at the unit
`5` - Top center HP bar with percent current HP
`6` - Default speech bubble
`7` - Nothing
`8` - Yellow boxes/resource bar
`9` - Yellow boxes as HP bar
`10` - Nothing
`11` - Top center HP bar with fractional current HP

- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to show the status UI for.
- *int* `slotKey` the slot key to bind the status UI to.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- Creates the unit
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, z = 16, 16
local unit_instance = DCEI.CreateUnit(team_id, player_id, unit_type, x, z)

-- Shows the status UI
local status_id = 9
local slot_key = 1
DCEI.ShowUnitStatusUiInSlot(status_id, unit, slot_key)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetHeroStatusUiVisibility(bool visible) {setherostatusuivisibility-1}
```cs
void SetHeroStatusUiVisibility(bool visible)
```
#### Description
[](description-start)
Set Hero Status UI visible or not
[](description-end)

#### Parameters
[](parameters-start)
- *bool* `visible` if true, the UI is shown. If false, the UI is hidden.

[](parameters-end)

#### Example Usage
[](example-usage-start)

[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void HideUnitStatusUi(int id, unit unit) {hideunitstatusui-2}
```cs
void HideUnitStatusUi(int id, unit unit)
```
#### Description
[](description-start)
Hides the given built-in status UI for a given unit.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `id` the status UI to hide.
`2` - Large HP bar
`3` - Slightly larger than default HP bar, bottom right corner "hero unit" UI
`4` - Animated big hand pointer at the unit
`5` - Top center HP bar with percent current HP
`6` - Default speech bubble
`7` - Nothing
`8` - Yellow boxes/resource bar
`9` - Yellow boxes as HP bar
`10` - Nothing
`11` - Top center HP bar with fractional current HP
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to hide the status UI for.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- Creates the unit
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, z = 16, 16
local unit_instance = DCEI.CreateUnit(team_id, player_id, unit_type, x, z)

-- Shows the status UI
local status_id = 9
DCEI.ShowUnitStatusUi(status_id, unit_instance)

-- Hides the status UI after 2 seconds
local show_duration = 2
DCEI.TriggerAddTimerEventElapsed(function()
    DCEI.HideUnitStatusUi(status_id, unit_instance)
end, show_duration)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void HideUnitStatusUiForPlayer(int id, unit unit, int player) {hideunitstatusuiforplayer-3}
```cs
void HideUnitStatusUiForPlayer(int id, unit unit, int player)
```
#### Description
[](description-start)
Hides the given built-in status UI for a given unit, for the given player.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `id` the status UI to hide.
`2` - Large HP bar
`3` - Slightly larger than default HP bar, bottom right corner "hero unit" UI
`4` - Animated big hand pointer at the unit
`5` - Top center HP bar with percent current HP
`6` - Default speech bubble
`7` - Nothing
`8` - Yellow boxes/resource bar
`9` - Yellow boxes as HP bar
`10` - Nothing
`11` - Top center HP bar with fractional current HP
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to hide the status UI for.
- *int* `player` the player to hide the status UI for.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- Creates the unit
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, z = 16, 16
local unit_instance = DCEI.CreateUnit(team_id, player_id, unit_type, x, z)

-- Shows the status UI
local status_id = 9
DCEI.ShowUnitStatusUiForPlayer(status_id, unit_instance, player_id)

-- Hides the status UI after 2 seconds
local show_duration = 2
DCEI.TriggerAddTimerEventElapsed(function()
    DCEI.HideUnitStatusUiForPlayer(status_id, unit_instance, player_id)
end, show_duration)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ShowMessageWithButtonText(string title, string content, string button, string image1, string image2, string image3) {showmessagewithbuttontext-6}
```cs
void ShowMessageWithButtonText(string title, string content, string button, string image1, string image2, string image3)
```
#### Description
[](description-start)
Displays a pop-up message with a button. Displays up to 3 images.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `title` the title of the message pop-up.
- *string* `content` the text of the message.
- *string* `button` the text on the button.
- *string* `image1` the name or link to the first image.
- *string* `image2` the name or link to the second image.
- *string* `image3` the name or link to the third image.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local title = "Title"
local content = "Content"
local button_text = "Button Text"
local image1 = "airship_onMap"
local image2 = "crown_gold"
local image3 = "icon_boss"
DCEI.ShowMessageWithButtonText(title, content, button_text, image1, image2, image3)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ShowBigHeadMessage(string title, string message, string image) {showbigheadmessage-3}
```cs
void ShowBigHeadMessage(string title, string message, string image)
```
#### Description
[](description-start)
Displays a "big head" message. You can view a list of accepted images [here](https://gist.github.com/coffee8479/063ddb5fbd710969f58499aabf295974).
May require an older editor build.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `title` the title of the big head message.
- *string* `message` the text of the big head message.
- *string* `image` the big head image. Note that specific big head images must be used.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local title = "Title"
local message = "Message"
local image = "bighead_hero_smith"
DCEI.ShowBigHeadMessage(title, message, image)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ShowBigHeadMessage(string title, string message, string image, BigHeadMessageOptions options) {showbigheadmessage-4}
```cs
void ShowBigHeadMessage(string title, string message, string image, BigHeadMessageOptions options)
```
#### Description
[](description-start)
Displays a "big head" message with additional options. Will not overwrite an existing big head message. You can view a list of accepted images [here](https://gist.github.com/coffee8479/063ddb5fbd710969f58499aabf295974).
May require an older editor build.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `title` the title of the big head message.
- *string* `message` the text of the big head message.
- *string* `image` the big head image. Note that specific big head images must be used.
- *[BigHeadMessageOptions](Trigger-API-Reference-DCEI-Types#bigheadmessageoptions)* `options` the additional options for a big head message.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local title = "Title"
local message = "Message"
local image = "bighead_hero_smith"
local big_head_options = {
    pause = true,
    on_dismiss = function()
        DCEI.LogMessage("Dismissed")
    end,
    delay = 5,
    message_box_color = { r = 255, g = 0, b = 255, a = 255 },
    title_box_color = { r = 255, g = 0, b = 255, a = 255 },
}
DCEI.ShowBigHeadMessage(title, message, image, big_head_options)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void HideBigHeadMessage() {hidebigheadmessage-0}
```cs
void HideBigHeadMessage()
```
#### Description
[](description-start)
Hides any big head messages.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
-- Creates the big head message
local title = "Title"
local message = "Message"
local image = "bighead_hero_smith"
local big_head_options = {
    pause = true,
    on_dismiss = function()
        DCEI.LogMessage("Dismissed")
    end,
    delay = 5,
    message_box_color = { r = 255, g = 0, b = 255, a = 255 },
    title_box_color = { r = 255, g = 0, b = 255, a = 255 },
}
DCEI.ShowBigHeadMessage(title, message, image, big_head_options)

-- Hides the message after 2 seconds
local show_duration = 2
DCEI.TriggerAddTimerEventElapsed(function()
    DCEI.HideBigHeadMessage()
end, show_duration)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ShowObjectiveText(string text) {showobjectivetext-1}
```cs
void ShowObjectiveText(string text)
```
#### Description
[](description-start)
Show objective text.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `text` the text of the objective.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- Creates the objective text
local objective_text = "Objective Text"
DCEI.ShowObjectiveText(objective_text)

-- Hides the text after 2 seconds
local show_duration = 2
DCEI.TriggerAddTimerEventElapsed(function()
    DCEI.HideObjective()
end, show_duration)

```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void HideObjective() {hideobjective-0}
```cs
void HideObjective()
```
#### Description
[](description-start)
Hides any active objectives.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
-- Creates the objective text
local objective_text = "Objective Text"
DCEI.ShowObjectiveText(objective_text)

-- Hides the text after 2 seconds
local show_duration = 2
DCEI.TriggerAddTimerEventElapsed(function()
    DCEI.HideObjective()
end, show_duration)

```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ShowScreenMask(float alpha = 0, ScreenBackgroundOptions options = default) {showscreenmask-2}
```cs
void ShowScreenMask(float alpha = 0, ScreenBackgroundOptions options = default)
```
#### Description
[](description-start)
Shows a screen mask (overlay tint). This will block interaction with everything. This will also overwrite previous screen masks.
[](description-end)

#### Parameters
[](parameters-start)
- *float* `alpha` the alpha of the screen mask.
- *[ScreenBackgroundOptions](Trigger-API-Reference-DCEI-Types#screenbackgroundoptions)* `options` lua dictionary `{color, duration}`

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- Creates the screen mask
local mask_alpha = 0.5
local screen_options = { color = { r = 255, g = 0, b = 255, a = 255 }, duration = 1 }
DCEI.ShowScreenMask(mask_alpha, screen_options)

-- Hides the mask after 2 seconds
local show_duration = 2
DCEI.TriggerAddTimerEventElapsed(function()
    DCEI.HideScreenMask()
end, show_duration)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void HideScreenMask() {hidescreenmask-0}
```cs
void HideScreenMask()
```
#### Description
[](description-start)
Hides any active screen mask.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
-- Creates the screen mask
local mask_alpha = 0.5
local screen_options = { color = { r = 255, g = 0, b = 255, a = 255 }, duration = 1 }
DCEI.ShowScreenMask(mask_alpha, screen_options)

-- Hides the mask after 2 seconds
local show_duration = 2
DCEI.TriggerAddTimerEventElapsed(function()
    DCEI.HideScreenMask()
end, show_duration)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void TakeScreenShot(string fileName, float delay = 0, int quality = 1) {takescreenshot-3}
```cs
void TakeScreenShot(string fileName, float delay = 0, int quality = 1)
```
#### Description
[](description-start)
Takes a screenshot of the game. On Windows PCs, this file is saved in `C:\Users\#YOUR_USER_NAME\AppData\Local\Temp\Wild Sky Dev\Wild Arcade`
[](description-end)

#### Parameters
[](parameters-start)
- *string* `fileName` the name of the screenshot file
- *float* `delay` delay before taking screenshot
- *int* `quality` accepts integers 1 or higher. Higher values multiply the number of pixels in the image.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
    DCEI.TakeScreenShot("A-ScreenshotNormal", 0, 1)
    DCEI.TakeScreenShot("A-ScreenshotHQ", 0.1, 6)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## int TakeScreenShotWildSky(float delay = 0) {takescreenshotwildsky-1}
```cs
int TakeScreenShotWildSky(float delay = 0)
```
#### Description
[](description-start)
Takes a screenshot of the game. Returns ID of screenshot taken.
[](description-end)

#### Parameters
[](parameters-start)
- *float* `delay` delay before taking screenshot

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
  -- See also `DCEI.TakeScreenShot`
  local screen_shot_index = DCEI.TakeScreenShotWildSky(1)

  DCEI.Wait(1.125)

  DCEI.DeleteScreenShot(screen_shot_index)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## bool DeleteScreenShot(int key) {deletescreenshot-1}
```cs
bool DeleteScreenShot(int key)
```
#### Description
[](description-start)
Delete a screenshot from `TakeScreenShotWildSky`
[](description-end)

#### Parameters
[](parameters-start)
- *int* `key` id of screenshot to delete, from `TakeScreenShotWildSky`

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
  -- See also `DCEI.TakeScreenShot`
  local screen_shot_index = DCEI.TakeScreenShotWildSky(1)

  DCEI.Wait(1.125)

  DCEI.DeleteScreenShot(screen_shot_index)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ShowSlowMotionEffect() {showslowmotioneffect-0}
```cs
void ShowSlowMotionEffect()
```
#### Description
[](description-start)
Shows the slow motion effect on the screen.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
-- Starts the slow motion effect
DCEI.ShowSlowMotionEffect()

-- Hides the effect after 2 seconds
local show_duration = 2
DCEI.TriggerAddTimerEventElapsed(function()
    DCEI.HideSlowMotionEffect()
end, show_duration)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void HideSlowMotionEffect() {hideslowmotioneffect-0}
```cs
void HideSlowMotionEffect()
```
#### Description
[](description-start)
Hides the slow motion effect on the screen.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
-- Starts the slow motion effect
DCEI.ShowSlowMotionEffect()

-- Hides the effect after 2 seconds
local show_duration = 2
DCEI.TriggerAddTimerEventElapsed(function()
    DCEI.HideSlowMotionEffect()
end, show_duration)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

