# GMUI Overview

The GMUI Mod is used to quickly create, hookup, and manage game UI. This is best used when working with UI [created with XML](Ui-XML) but also supports script-created UI. It also comes with a number of handy UI templates such as red pips and big hand.

For legacy projects, see the older version of this mod, [gmui](Mods-Legacy-gmui).

# [Documentation](Mods-GMUI)
All of the GMUI functionality is documented with annotations, meaning when once you include GMUI with `local GMUI = require("GMUI")` hovering over or typing the "GMUI" variable name will display help text about all of the contained classes and functions. These annotations have been exported as a wiki page of [Documentation](Mods-GMUI) as well.

# How to install:
First open the Project Settings Window and add GMUI as a registry dependency:
![image](https://user-images.githubusercontent.com/56179268/228280412-2df4f4ac-9017-46cf-93ef-7d662614813c.png)
Then include in your lua file with `local GMUI = require("GMUI:Simulation")` 

# Example Usage & Demo Map

See the GMUI Feature Demo map: https://platform.wildsky.dev/arcade/game/989 (Click "Source" to download)

Here is a Lua snippet from the most recent demo to give you a quick rundown of how to use GMUI for UI in Lua. Be sure to download the project for a closer look, and reference the rest of this document for more documentation on the GMUI mod. 

```lua
-- LIBRARIES
local Core = require("Core:Simulation")
local GMUI = require("GMUI:Simulation")
local data = require("game_data")

-- SCRIPT EXPORTS
local ui = {}

-- =======================================================================================
-- ANCHOR (1) LAYOUT BASICS
-- start here for the basics on how to use GMUI layouts, their methods, and xml states
-- =======================================================================================
-- NOTE: will hook up all includes as a hierarchy of layout object references
ui.glue = GMUI.Layout.New({
    name = "Glue",
    recursive_hookup = true,
})

-- GAME PAGE
-- since "Glue/Pages" was included in "Glue" with id "pages", it can now be referenced as `ui.glue.pages`
-- and since "Glue/Pages/Game" was in "Glue/Pages" with id "game", it can be referenced as `ui.glue.pages.game`
local layout = ui.glue.pages.game

-- NOTE: a layout is just a class object that represents XML defined in data
-- you can add properties to it, just like any other table
layout.button_press_count = 0

function layout:Initialize()
    -- NOTE: the root frame of a layout is automatically assigned the id "Frame" by GMUI
    -- we can create a mask by adjusting the root frame's image color on init
    DCEI.SetFrameImageColor(self.Frame, { r = 0, g = 0, b = 0, a = 0.5 })

    -- set this layout as initialized
    self.is_initialized = true
end

function layout:Update()
    -- initialize this layout the first time it updates
    if not self.is_initialized then
        self:Initialize()
    end

    -- NOTE: any frame within the XML can be referenced by its id; here we're updating `ToggleCountLabel`
    -- note how "{[x]}"" in the translation text is replaced by the `x` key value
    local text = DCEI.GetTranslationText("ui/game/buttons_pressed", { x = self.button_press_count })
    DCEI.SetTextFrameText(self.ToggleCountLabel, text)
end
```

# Features
### [Layout Class](Mods-GMUI#layout)
* Create and manage UI layouts
* Hookup XML layouts with child frame references
### [LazyLayout Class](Mods-GMUI#lazylayout)
* Inherits Layouts, but with [lazy loading](https://en.wikipedia.org/wiki/Lazy_loading) so UI elements are only initialized when they are first shown

### [LayoutComponent](Mods-GMUI#layoutcomponent)
* LayoutComponents are used to create layout logic templates that can be applied to new Lazy|Layouts as needed.
### [UiHelper](Mods-GMUI#uihelper)
* UiHelper is a library of helper functions:
  * AnimateFrameToCanvasPosition
  * AnimateFrameToFrame
  * GetLayoutFromLayoutAddress
  * MoveFrameToCanvasPositionUsingOffsets
  * MoveFrameToFrame
  * MoveFrameToFrameUsingOffsets
  * MoveFrameToUnitUsingOffsets
  * RunFunctionAfterTimeElapsed

### [InputState](Mods-GMUI#inputstate)
* Contains functions for managing input state

### [Debug](Mods-GMUI#debug)
* Contains debugging functions to make it easier to debug between presentation and simulation layers.

