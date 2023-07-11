
***
Table of Contents:
- [Mods\\UserInterface Mod](#modsuserinterface-mod)
- [WARNING: This mod is deprecated. See GMUI instead.](#warning-this-mod-is-deprecated-see-gmui-instead)
  - [How to install:](#how-to-install)
  - [Features](#features)
  - [Download the demo maps:](#download-the-demo-maps)
  - [Usage Instruction](#usage-instruction)
- [Layout Methods](#layout-methods)
  - [Layout:Show()](#layoutshow)
    - [Description](#description)
  - [Layout:Hide()](#layouthide)
    - [Description](#description-1)
  - [Layout:HideImmediate()](#layouthideimmediate)
    - [Description](#description-2)
  - [Layout:Destroy()](#layoutdestroy)
    - [Description](#description-3)
  - [Layout:OnShow()](#layoutonshow)
    - [Description](#description-4)
    - [Example Usage](#example-usage)
  - [Layout:OnHide()](#layoutonhide)
    - [Description](#description-5)
    - [Example Usage](#example-usage-1)
  - [Layout:OnPress()](#layoutonpress)
    - [Description](#description-6)
  - [Layout:Exists()](#layoutexists)
    - [Description](#description-7)
  - [Layout:GetChildCollection()](#layoutgetchildcollection)
    - [Description](#description-8)
    - [Example Usage](#example-usage-2)
- [Mod Functions](#mod-functions)
  - [Layout:New()](#layoutnew)
    - [Description](#description-9)
    - [Root Frame](#root-frame)
    - [Parameters](#parameters)
    - [Example Usage](#example-usage-3)
  - [AnimateFrameBetweenUnits()](#animateframebetweenunits)
    - [Description](#description-10)
    - [Parameters](#parameters-1)
    - [Example Usage](#example-usage-4)
  - [AnimateFrameBetweenFrames()](#animateframebetweenframes)
    - [Description](#description-11)
    - [Parameters](#parameters-2)
    - [Example Usage](#example-usage-5)
  - [NewBigHand()](#newbighand)
    - [Description](#description-12)
    - [Dismiss](#dismiss)
    - [Parameters](#parameters-3)
    - [Example Usage](#example-usage-6)
  - [NewBigHandBetweenUnits()](#newbighandbetweenunits)
    - [Description](#description-13)
    - [Parameters](#parameters-4)
    - [Example Usage](#example-usage-7)
  - [NewPip()](#newpip)
    - [Description](#description-14)
    - [ShowAnimated](#showanimated)
    - [Parameters](#parameters-5)
    - [Example Usage](#example-usage-8)
- [Animation Templates](#animation-templates)
- [UI Templates](#ui-templates)
  - [Change Log](#change-log)
    - [1.1.5 (released 8/6/21)](#115-released-8621)
    - [1.1.3 (released 4/20/21)](#113-released-42021)
    - [1.1.1 (released 3/9/21)](#111-released-3921)
    - [1.0.1 (released 1/13/21)](#101-released-11321)
    - [1.0.0 (released 12/9/20)](#100-released-12920)

# Mods\UserInterface Mod

The UserInterface Mod is used to quickly create, hookup, and manage game UI. This is best used when working with UI [created with XML](Ui-XML) but also supports script-created UI. It also comes with a number of handy UI templates such as red pips and big hand.

For newer projects using Presentation scripting, see [GMUI](Mods-GMUI), a newer generation that differentiates itself from this mod's lower case spelling of gmui.

# WARNING: This mod is deprecated. See [GMUI](Mods-GMUI-Overview) instead.


## How to install:
First open the Data Window and add gmui as a registry dependency:
![image](https://user-images.githubusercontent.com/56179268/210113229-c0e2ec22-abe8-418d-806e-bf9b943b5b9c.png)
Then include in your lua file with `local gmui = require("gmui")`

## Features
* Create and manage UI layouts
* Hookup XML layouts with child frame references
* Common UI templates for tutorials and game systems

Here is a Lua snippet from the most recent demo to give you a quick rundown of how to use gmui for UI in Lua. Be sure to downlod the project for a closer look, and reference the test of this document for more documentation on the gmui mod. 
## Download the demo maps:
- **(Most Recent!)** [GMUI Demo Project](https://platform.wildsky.dev/arcade/game/576) ([source](https://platform.wildsky.dev/api/store/project/576/source))
- Older: [UI Demo](https://platform.wildsky.dev/arcade/game/125)
- Older: [HERE](https://github.com/crunchystudio/editor-wiki/files/6601756/User.Interface.Demo.zip) 

```lua
-- LIBRARIES
local core = require("core")
local gmui = require("gmui") -- Must also be added as a registry dependency under "Project Settings" in the data window
local data = require("game_data")

-- SCRIPT EXPORTS
local ui = {}

-- =======================================================================================
-- ANCHOR (1) LAYOUT BASICS
-- start here for the basics on how to use GMUI layouts, their methods, and xml states
-- =======================================================================================
-- NOTE: using recursive hookup will hook up all includes as a hierarchy of layout object references
ui.glue = gmui.Layout:New({
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
    -- NOTE: the root frame of a layout is automatically assigned the id "Frame" by gmui
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

function layout:IncrementButtonPressCount()
    self.button_press_count = self.button_press_count + 1
    self:Update()
end

-- GAME PAGE - TOGGLE ACTIVE BUTTON
-- NOTE: XML frames (frame objects) use CamelCase id's whereas included layouts (class objects) use snake_case id's
-- this style is used so you always know what type of object you're dealing with
local layout = ui.glue.pages.game.toggle_active
DCEI.SetOnClickCallback(layout.Button, function()
    local chest_layout = ui.glue.pages.game.basic_chest

    -- NOTE: gmui layouts come with a few of useful methods, like Show/Hide() and OnShow/OnHide()
    if DCEI.IsFrameActive(chest_layout.Frame) then
        chest_layout:Hide()
    else
        chest_layout:Show()
    end

    -- increment game page button press count
    ui.glue.pages.game:IncrementButtonPressCount()
end)
```


## Usage Instruction
- To use this mod, add the `gmui` registry module to your project using the latest version `^1.0.0`.

![](https://user-images.githubusercontent.com/56179276/101714008-97497a80-3a4d-11eb-9419-c658a8ad305a.png)

Have an idea for additional features or UI templates? Let [@coffee](https://github.com/coffee8479) know!

# Layout Methods
The following functions can be used with any layouts created with [Layout:New()](#layoutnew) and can be used such as:

```lua
local gmui = require("gmui")

local layout = gmui.Layout:New({
    parent = DCEI.GetUiRootFrame(),
    name = "Standard/Layer/Mask"
})

-- initialize
layout:HideImmediate()
```

Note that the following are template functions and don't actually do anything until overwritten:
- [Layout:OnShow()](#layoutonshow)
- [Layout:OnHide()](#layoutonhide)
- [Layout:OnPress()](#layoutonpress)

## Layout:Show()
```lua
layout:Show()
```
### Description
Shows the layout's root frame and runs any related functions. Specifically:
- Runs the layout's [OnShow()](#layoutonshow) method
- Runs the layout's `on_show_animation` if it has one
- Sets the layout's `is_active` property to `true`

Note that Show/Hide set the root frame's active state and should not be used with [DCEI.SetFrameActive()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframeactivetransform-ui-bool-value).

## Layout:Hide()
```lua
layout:Hide()
```
### Description
Hides the layout's root frame and runs any related functions. Specifically:
- Runs the layout's [OnHide()](#layoutonhide) method
- Runs the layout's `on_hide_animation` if it has one
- Sets the layout's `is_active` property to `false`

Note that Show/Hide set the root frame's active state and should not be used with [DCEI.SetFrameActive()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframeactivetransform-ui-bool-value).

## Layout:HideImmediate()
```lua
layout:HideImmediate()
```
### Description
Hides the layout's root frame as in [Layout:Hide()](#layouthide) but does *not* play the `on_hide_animation`. This is useful for initializing frames that are not visible on map start.

## Layout:Destroy()
```lua
layout:Destroy()
```
### Description
Destroys the layout by running `DCEI.Destroy(self.Frame)`.


## Layout:OnShow()
```lua
layout:OnShow()
```
### Description
An empty function that can be overwritten to execute functions when the layout is shown.

### Example Usage
```lua
local layout = gmui.Layout:New({
    parent = ui.lower.Frame,
    name = "Menu/Leaderboard"
})

function layout:OnShow()
    -- shows the lower screen mask when the leaderboard is shown
    ui.lower.mask:Show()
end
```

## Layout:OnHide()
```lua
layout:OnHide()
```
### Description
An empty function that can be overwritten to execute functions when the layout is hidden.

### Example Usage
```lua
local layout = gmui.Layout:New({
    parent = ui.lower.Frame,
    name = "Menu/Leaderboard"
})

function layout:OnHide()
    -- hides the lower screen mask when the leaderboard is hidden
    ui.lower.mask:Hide()
end
```

## Layout:OnPress()
```lua
layout:OnPress()
```
### Description
An empty function that exists for each layout to be overriden. This one has no explicit usage by itself, but is suggested for use if the layout is a button.


## Layout:Exists()
```lua
layout:Exists()
```
### Description
Returns true if the layout's root frame still exists.

## Layout:GetChildCollection()
```lua
layout:GetChildCollection( collection_name )
```
### Description
Returns a list of child layouts or frames with ids that match the `collection_name` appended with "_n" where n will be the child's collection index. Useful creating and hooking up tables of layouts with many static child items, such as inventory slots or attribute lists.

### Example Usage
```lua
-- for a layout with children "item_1", "item_2", and "item_3", the collection would contain these 3 frames
layout.items = layout:GetChildCollection("item")
for index, child in ipairs(layout.items) do
    DCEI.SetTextFrameText(child.Label, index)
end
```
# Mod Functions

## Layout:New()
```lua
gmui.Layout:New(args)
```
### Description
Returns a new layout from the given arguments. A layout is a `table` that represents a UI element and has some built-in functionality with the [Layout Methods](#layout-methods). Layouts can be built from UI frames defined in XML or in script.

Layouts created from XML will have each child frame with id added to the layout using the id as the frame's key. For instance, if a layout contains a child with the id `TitleLabel`, this child frame can be referenced as `layout.TitleLabel`. 

### Root Frame
Regardless of how the layout was constructed, the root frame can be gotten with `layout.Frame` such as:
```lua
local layout = gmui.Layout:New()
DCEI.SetFrameSize(layout.Frame, 100, 100)
DCEI.SetFrameImageColor(layout.Frame, {r = 1, g = 0, b = 0, a = 0.5})
```

### Parameters
* <i>table</i> `args` arguments for hooking up the layout.
  * (optional) <i>Transform</i> `parent` the parent frame to use when creating this layout. If no parent is given then `DCEI.GetUiRootFrame()` will be used instead.
  * (optional) <i>xmlReference</i> `name` if used, the layout will be created from the given XML reference. If no `name` or `frame` is given, a new blank frame will be created for the layout.
  * (optional) <i>AnimationPreset</i> `on_show_animation` if used, this animtion preset will be run when the layout is shown.
  * (optional) <i>AnimationPreset</i> `on_hide_animation` if used, this animtion preset will be run when the layout is hidden.
  * (optional) <i>Transform</i> `frame` if used, a new layout will be created using the given frame.
  * (optional) <i>boolean</i> `recursive_hookup` if set, any child frames in the named XML using the `include` tag will be hooked up recursively as a [layout](#description-8) instead of a frame.

### Example Usage
Using an XML frame named "Standard/Button/Button" such as:
```xml
<Frame>
    <Button id="Button" height="108" width="224">
        <Text id="Label" translationKey="ui/continue" text="Continue" fontSizeMin="22" fontSizeMax="32" maxWidth="188" maxHeight="26" />
    </Button>
</Frame>
```
```lua
local ui = {
    Root = DCEI.GetUiRootFrame()
}

function CreateButtonFrame()
    local layout = gmui.Layout:New({
        parent = ui.Root,
        name = "Standard/Button/Button",
        on_show_animation = gmui.Animations.BackIn
    })

    -- layout
    DCEI.SetFrameImage(layout.Button, DCEI.Texture("btn_red"))
    DCEI.SetTextFrameText(layout.Label, "Press Me!")

    -- initialize
    layout:HideImmediate()
    return layout
end

ui.button = CreateButtonFrame()
DCEI.TriggerAddTimerEventElapsed(
    function()
        ui.button:Show()
    end, 
    2
)
```

## AnimateFrameBetweenUnits()
```lua
gmui.AnimateFrameBetweenUnits(args)
```
### Description
Animates a frame from the position of one unit to another with the given arguments. Useful for creating world-position UI animations.

### Parameters
* <i>table</i> `args` arguments for the function.
  * <i>Transform</i> `frame` the frame to animate.
  * <i>Unit</i> `unit1` the unit to animate from.
  * <i>Unit</i> `unit2` the unit to animate to.
  * (optional) <i>boolean</i> `no_loop` if set, the animation will only play once.
  * (optional) <i>number</i> `duration` used to set the duration of the animation. If no duration is specified, `1.5` seconds will be used.
  * (optional) <i>string</i> `loop_type` choose the loop type. If no loop type is specified, `Restart` will be used. For loop types and how they function, see [SetFrameAnimationLoops()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframeanimationloopstweener-tweener-int-loops-string-looptype)
### Example Usage
```lua
local unit1 = DCEI.CreateUnitWithFacing(1, 1, DCEI.Unit("Standard MeleeUnit"), 16, 16, 1, 0)
local unit2 = DCEI.CreateUnitWithFacing(1, 1, DCEI.Unit("Standard MeleeUnit"), 13, 16, 1, 0)
    
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame, 100, 100)
DCEI.SetFrameImageColor(frame, {r = 1, g = 0, b = 0, a = 0.5})

local args = {
    frame = frame,
    unit1 = unit1,
    unit2 = unit2,
    duration = 3
}
gmui.AnimateFrameBetweenUnits(args)
```

## AnimateFrameBetweenFrames()
```lua
gmui.AnimateFrameBetweenFrames(args)
```
### Description
Animates a frame from the position of one frame to another with the given arguments. Useful for creating world-position UI animations.

### Parameters
* <i>table</i> `args` arguments for the function.
  * <i>Transform</i> `frame` the frame to animate.
  * <i>Transform</i> `start_frame` the frame to animate from.
  * <i>Transform</i> `end_frame` the frame to animate to.
  * (optional) <i>boolean</i> `preserve` if set to true, the frame won't be destroyed
  * (optional) <i>boolean</i> `no_loop` if set, the animation will only play once.
  * (optional) <i>number</i> `duration` used to set the duration of the animation. If no duration is specified, `1.5` seconds will be used.
  * (optional) <i>string</i> `loop_type` choose the loop type. If no loop type is specified, `Restart` will be used. For loop types and how they function, see [SetFrameAnimationLoops()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-setframeanimationloopstweener-tweener-int-loops-string-looptype)
### Example Usage
```lua
    
local frame_1 = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame_1, 100, 100)
DCEI.SetFrameImageColor(frame_1, {r = 1, g = 0, b = 0, a = 0.5})

local frame_2 = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame_2 , 100, 100)
DCEI.SetFrameImageColor(frame_1, {r = 0, g = 1, b = 0, a = 0.5})
DCEI.SetFrameVerticalOffsetInParent(frame_2, 100)
DCEI.SetFrameHorizontalOffsetInParent(frame_2, 100)

local frame_3 = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame_3 , 100, 100)
DCEI.SetFrameImageColor(frame_3, {r = 0, g = 0, b = 1, a = 0.5})
DCEI.SetFrameVerticalOffsetInParent(frame_3, -100)
DCEI.SetFrameHorizontalOffsetInParent(frame_3, -100)

local args = {
    frame = frame_1,
    start_frame = frame_2,
    end_frame = frame_3,
    duration = 3
}
gmui.AnimateFrameBetweenFrames(args)
```

## NewBigHand()
```lua
gmui.NewBigHand(args)
```

![big_hand](https://user-images.githubusercontent.com/56179276/101714090-b811d000-3a4d-11eb-808d-1ec7213ccc4c.gif)

### Description
Creates and returns layout for an animated "Big Hand" from the given arguments. This is commonly used for building tutorial sequences.

### Dismiss
The bighand can (and should) be destroyed with `layout:Dimiss()` when no longer needed:
```lua
local layout = gmui.NewBigHand()
DCEI.TriggerAddTimerEventElapsed(
    function()
        layout:Dismiss()
    end,
    2
)
```

### Parameters
* <i>table</i> `args` arguments for hooking up the layout.
  * (optional) <i>Transform</i> `parent` the parent frame to use when creating this layout. If no parent is given then `DCEI.GetUiRootFrame()` will be used instead.
  * (optional) <i>float</i> `scale` sets the scale of the big hand (default is `1` for 100% scale) 
  * (optional) <i>float</i> `horizontal_offset` adds a horizontal offset to the position of the big hand.
  * (optional) <i>float</i> `vertical_offset` adds a vertical offset to the position of the big hand.
  * (optional) <i>boolean</i> `flip` if true, flips the big hand horizontally.
  * (optional) <i>Transform</i> `frame` if used, the big hand will be created at the position of the given frame. Can't be used with `unit`.
  * (optional) <i>Unit</i> `unit` if used, the big hand will be attached to the given unit. Can't be used with `frame`.
  * (optional) <i>table</i> `unit_label_options` used in conjunction with `unit` to provide attachment options as per the `options` parameter of [DCEI.AttachFrameToUnit()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-attachframetounittransform-ui-unit-unit-unitlabeloptions-options-bool-usecurrentuiroot).

### Example Usage
```lua
local options = {
    frame = ui.glue_menu.post_score.Button,
    vertical_offset = -25,
    flip = true
}

ui.big_hand = gmui.NewBigHand(options)
```

## NewBigHandBetweenUnits()
```lua
gmui.NewBigHandBetweenUnits(args)
```
### Description
Animates a bighand from the position of one unit to another in a dragging motion.

### Parameters
* <i>table</i> `args` arguments for hooking up the layout.
  * <i>Unit</i> `unit1` the unit to animate from.
  * <i>Unit</i> `unit2` the unit to animate to.
  * (optional) <i>boolean</i> `no_loop` if set, the animation will only play once.
  * (optional) <i>number</i> `duration` used to set the duration of the 
  * (optional) <i>Transform</i> `parent` the parent frame to use when creating this layout. If no parent is given then `DCEI.GetUiRootFrame()` will be used instead.
  * (optional) <i>float</i> `scale` sets the scale of the big hand (default is `1` for 100% scale) 
  * (optional) <i>float</i> `horizontal_offset` adds a horizontal offset to the position of the big hand.
  * (optional) <i>float</i> `vertical_offset` adds a vertical offset to the position of the big hand.
  * (optional) <i>boolean</i> `flip` if true, flips the big hand horizontally.
  * (optional) <i>table</i> `unit_label_options` used in conjunction with `unit` to provide attachment options as per the `options` parameter of [DCEI.AttachFrameToUnit()](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-attachframetounittransform-ui-unit-unit-unitlabeloptions-options-bool-usecurrentuiroot).
### Example Usage
```lua
local unit1 = DCEI.CreateUnitWithFacing(1, 1, DCEI.Unit("Standard MeleeUnit"), 16, 16, 1, 0)
local unit2 = DCEI.CreateUnitWithFacing(1, 1, DCEI.Unit("Standard MeleeUnit"), 13, 16, 1, 0)

local args = {
    unit1 = unit1,
    unit2 = unit2,
    duration = 3
}
gmui.NewBigHandBetweenUnits(args)
```

## NewPip()
```lua
gmui.NewPip(args)
```
![red_pip](https://user-images.githubusercontent.com/56179276/101714132-c8c24600-3a4d-11eb-95b6-d9d1d44270f8.gif)

### Description
Creates and returns layout for an animated "Red Pip" from the given arguments. This is commonly used for bringing player attention to specific UI elements.

### ShowAnimated
The pip is initially hidden when created and can be shown with an attention grabbing animation by using `layout:ShowAnimated()` as such:
```lua
local layout = gmui.NewPip()
layout:ShowAnimated()
```

### Parameters
* <i>table</i> `args` arguments for hooking up the layout.
  * (optional) <i>Transform</i> `parent` the parent frame to use when creating this layout. If no parent is given then `DCEI.GetUiRootFrame()` will be used instead.
  * (optional) <i>string</i> `anchor` used to anchor the pip to the top left or top right of the parent frame. Accepts values `"top_left"` and `"top_right"` (defaults to `"top_left"`). 

### Example Usage
```lua
local ui = {
    Root = DCEI.GetUiRootFrame()
}

function CreateButtonFrame()
    local layout = gmui.Layout:New({
        parent = ui.Root,
        name = "Standard/Button/Button",
        on_show_animation = gmui.Animations.BackIn
    })

    -- layout
    DCEI.SetFrameImage(layout.Button, DCEI.Texture("btn_red"))
    DCEI.SetTextFrameText(layout.Label, "Press Me!")

    local pip = gmui.NewPip({
        parent = layout.Frame
    })

    -- functions
    function layout:OnShow()
        pip:ShowAnimated()
    end

    -- initialize
    layout:Show()
    return layout
end

ui.button = CreateButtonFrame()
```

# Animation Templates
This mod comes with a number of animation templates that can easily be applied to any layout using the `on_show_animation`/`on_hide_animation` parameters (ex `on_hide_animation = gmui.Animations.BackOut`).

* BackIn
* BackOut
* UpIn
* UpOut
* DownIn
* DownOut
* FadeIn
* FadeOut

# UI Templates
This mod comes with a number of ready-to-use XML frame templates.

- **Standard/Menu/PauseMenu** a simple pause menu with a stack for adding menu options
- **Standard/Layer/Mask** a fullscreen dark mask
- **Standard/Layer/Fullscreen** a fullscreen frame, useful for creating UI layers
- **Standard/Helper/RedPip** a red pip, used in the [NewPip](#newpip) layout
- **Standard/Helper/BigHand** a big hand, used in the [BigHand](#newbighand) layout
- **Standard/Button/UpgradeButton** a basic upgrade button with a cost label and icon
- **Standard/Button/ResourceFrame** a non-button resource frame
- **Standard/Button/ResourceFramePlusButton** a resource frame as a button, perfect for hookup up to an [in-game shop](Mods-IAP-Shop-Mod)
- **Standard/Button/PauseButton** a pause button resembling the default game pause button
- **Standard/Button/PauseButton_InGame** a pause button in the same position as the default game pause button, useful for overriding the default pause button functionality
- **Standard/Button/Button** a basic labeled button


*** 
## Change Log

### 1.1.5 (released 8/6/21)
- AnimateFrameBetweenFrames has a "preserve" arg so the frame isn't destroyed after animating
- Fixed a bug where AnimateFrameBetweenFrames didn't use default value for "ease"
### 1.1.3 (released 4/20/21)
- Layout `is_active` property is now set on initialization based on whether or not the root frame is actually active, rather than defaulting to true
- Added [Layout:Exists()](#layoutexists) to check if a layout frame still exists
- Added [Layout:GetChildCollection()](#layoutgetchildcollection) to get a table of ordered children frames
### 1.1.1 (released 3/9/21)
- Layout child id references are now hookedup automatically and don't need to be declared in `refs`
- Added new function AnimateFrameBetweenUnits()
- Added new function NewBigHandBetweenUnits()
### 1.0.1 (released 1/13/21)
- Added [Layout:Destroy()](#layoutdestroy) to destroy a layout and update the layout references list
- Fixed an issue with default animation templates that could cause frames to become stuck when Hiding/Showing too quickly
- Show/Hide/HideImmediate actions will no longer be called subsequently if the layout is already in the relevant state
- Add some small improvements to the UI test map (dimiss repeated score notifications, use new Destroy method)

### 1.0.0 (released 12/9/20)
- UI Mod released