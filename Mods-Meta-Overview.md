# Meta Overview

The meta mod is for supporting meta-game features, such as FTUE (spotlight and bighand) or talent tree and gear systems.

# [Documentation](Mods-Meta)
All of the Meta functionality is documented with annotations, meaning when once you include Meta with `local GMUI = require("Meta")` hovering over or typing the "Meta" variable name will display help text about all of the contained classes and functions. These annotations have been exported as a wiki page of [Documentation](Mods-Meta) as well.

# How to install:
First open the Project Settings Window and add Meta as a registry dependency:
![image](https://github.com/funovus/editor-wiki/assets/56179268/8683d4bf-65ec-4b9f-ab98-cd1fb2bf7615)
Then include in your lua file with `local Meta = require("Meta")`


# Example Usage

Here is a Lua snippet from the most recent demo to give you a quick rundown of how to use gmui for UI in Lua. Be sure to downlod the project for a closer look, and reference the test of this document for more documentation on the gmui mod. 

```lua
-- LIBRARIES
local Core = require("Core")
local GMUI = require("GMUI")
local Meta = require("Meta")

-- LOCAL VARIABLES
local unit_1 = DCEI.CreateUnit(1, 1, DCEI.Unit("Standard MeleeUnit"), 14, 16, 0, -1)
local unit_2 = DCEI.CreateUnit(1, 1, DCEI.Unit("Standard MeleeUnit"), 18, 16, 0, -1)

-- LOCAL FUNCTIONS
local function OnPressButton()
    local key = "big_hand_on_button"
    GMUI.InputState.UnblockUserInput(key)

    Meta.BigHand.AnimateBetweenTargets({ start_unit = unit_1, end_unit = unit_2 })
end

-- FUNCTIONS
function HighlightUnit1()
    local text = "This is a unit"
    Meta.Spotlight.Create({ unit = unit_1, tip_text = text }, HighlightUnit2)
end

function HighlightUnit2()
    local text = "This is also a unit, but bigger"
    Meta.Spotlight.Create({ unit = unit_2, tip_text = text, scale = 3 }, BigHandOnButton)
end

function BigHandOnButton()
    local button_address = "ui.glue.Button"
    local key = "big_hand_on_button"

    GMUI.InputState.BlockUserInputExcept({ whitelist_frame_address = button_address, key = key })

    local delay = 0.125
    DCEI.TriggerAddTimerEventElapsed(function()
        Meta.BigHand.Create({ frame_address = button_address, flip_x = true })
    end, delay, true, true)
end

-- TRIGGERS
function OnMapStart()
    Core.HideDefaultUi()

    -- highlight on unit 1
    HighlightUnit1()

    -- make unit 2 massive
    Core.Unit.SendActorMessage(unit_2, "setModelScale", 5)
end

-- INITIALIZE
GMUI.RegisterUiLayoutContext("ui.glue", OnPressButton)
DCEI.TriggerAddTimerEventElapsed(OnMapStart, 0)
```
