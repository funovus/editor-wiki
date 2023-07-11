This page covers how to setup a unit to work with joystick and ability button controls, common in ARPG type games.

Download the example map [here](https://github.com/crunchystudio/editor-wiki/files/6601709/Example_InputController.zip).

### Overview
* [Joystick](#joystick)
* [Joystick Buttons](#joystick-buttons)
* [Abilities UI](#abilities-ui)
* [Discussion](#discussion)

## Joystick
![joystick](https://user-images.githubusercontent.com/56179276/69755456-169f3100-110d-11ea-998a-1ef0d72aa329.png)

The joystick is created with the `TriggerAddJoystickEvent()` trigger event. The script below creates a standard joystick that controls the movement of a "HERO" unit (the `HERO` variable must be defined elsewhere). The joystick is can be used with WASD, Arrow Keys, or by clicking and dragging the joystick button.

```lua
function OnJoystickMove()
    local axes = DCEI.TriggeringJoystickAxes
    local pos = DCEI.GetUnitPosition2D(HERO)

    -- order unit to move in direction of joystick axes
    DCEI.Move(HERO, pos.x + axes.x, pos.y + axes.y)
end

DCEI.TriggerAddJoystickEvent(OnJoystickMove)
```

We can move the joystick's screen position by adding the optional joystick options parameter to the `TriggerAddJoystickEvent()`. Joystick options support `offset` (x and y in pixels) and `anchor` (x and y in Cartesian coordinates) properties. The default joystick placement is the equivalent to `offset = {x = 256, y = 256}` and `anchor = {x = 0, y = 0}`. These options can be used to move the joystick offscreen, while still controlling a unit with WASD/Arrow keys. We can move the joystick to the right side of the screen with the following joystick options:

```lua
local joystick_options = {
    offset = {
        x = -256,
        y = 256
    },
    anchor = {
        x = 1,
        y = 0
    }
}

DCEI.TriggerAddJoystickEvent(OnJoystickMove, joystick_options)
```
![joystick right](https://user-images.githubusercontent.com/56179276/69755780-dee4b900-110d-11ea-94db-f638d211e49d.png)

There's also a `TriggerAddJoystickReleaseEvent()` that fires when the joystick is released. We can use this to make the joystick feel more responsive by making the HERO stop moving immediately when the joystick is released.

```lua
function OnJoystickRelease()
    local pos = DCEI.GetUnitPosition2D(HERO)

    -- order unit to move to its current location to 'stop'
    DCEI.Move(HERO, pos.x, pos.y)
end

DCEI.TriggerAddJoystickReleaseEvent(OnJoystickRelease)
```

## Joystick Buttons
Up to four buttons can be created with the `TriggerAddJoystickButtonEvent()` trigger event. Button Id's 0-3 each correspond with a different preset button position. You can use any sprites listed in the Asset Preview Window for the button icons.

```lua
DCEI.TriggerAddJoystickButtonEvent(0, OnJoystickButton, {icon = DCEI.Texture("icon_ingame_towerslot_barracks")})
DCEI.TriggerAddJoystickButtonEvent(1, OnJoystickButton, {icon = DCEI.Texture("icon_ingame_towerslot_arrowtower")})
DCEI.TriggerAddJoystickButtonEvent(2, OnJoystickButton, {icon = DCEI.Texture("icon_ingame_towerslot_cannontower")})
DCEI.TriggerAddJoystickButtonEvent(3, OnJoystickButton, {icon = DCEI.Texture("icon_ingame_towerslot_teslatower")})
```

![buttons](https://user-images.githubusercontent.com/56179276/69759680-916d4980-1117-11ea-84cb-b8013130dac9.png)

Here's an example of how to hook up a joystick button to cast an ability.

```lua
function OnJoystickButton()
    local button_id = DCEI.TriggeringJoystickButtonId
    local button_event = DCEI.TriggeringJoystickButtonEventType

    -- check button id is correct and button event is OnDown
    if button_id == 0 and button_event == 0 then
        DCEI.CastAbility(HERO_SLASH, HERO, HERO)
    end
end

DCEI.TriggerAddJoystickButtonEvent(0, OnJoystickButton, {icon = DCEI.Texture("icon_ingame_towerslot_barracks")})
```

Note that `TriggeringJoystickButtonId` returns the ID of the button pressed and `TriggeringJoystickButtonEventType` returns 0 for ButtonDown and 1 for ButtonUp.

## Abilities UI
As an alternative to Joystick buttons, you can also display a unit's first four abilities with the following:

```lua
DCEI.ShowAbilitiesUi(4, HERO)
```

Ability buttons created this way display mana cost and cooldown (which are not hooked up for JoystickButtons).

![ability4](https://user-images.githubusercontent.com/56179276/69776114-cbf2d880-114f-11ea-9536-01900711e76b.png)


## Discussion

Since units controlled by joystick movement are constantly getting move commands, you will likely need to use the "Can Cast While Moving" flag on abilities for your hero unit.