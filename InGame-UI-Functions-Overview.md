## Overview
This page covers the editor's currently available UI functions.

Download the example map [here](https://github.com/dctopspin/Wild-Modding/files/3774048/Example_InGameUI.zip).


* [Big Head Message](#Big-Head-Message)
* [Circle Menu](#Circle-Menu)
* [Fast Forward Button](#Fast-Forward-Button)
* [Feedback Message](#Feedback-Message)
* [Floating Text](#Floating-Text)
* [Help Button](#Help-Button)
* [Hero Status](#Hero-Status)
* [Left Menu](#Left-Menu)
* [Message Box](#Message-Box)
* [Objective Display](#Objective-Display)
* [Screen Mask](#Screen-Mask)
* [Slow Motion FX](#Slow-Motion-FX)
* [Speech Bubble](#Speech-Bubble)
* [Unit Label](#Unit-Label)

### Big Head Message

> Displays a "big head" image with a title and text.

```lua
local bighead_images = {
    "bighead_hero_smith",
    "bighead_hero_windknight",
    "bighead_hero_icemage_02",
    "bighead_hero_chosengirl",
    "bighead_hero_alchemist",
    "bighead_hero_lastdragoon"
}

local title = "Hero"
local text = "This is a \"Big Head\" Message!"
local image = bighead_images[math.random(1, #bighead_images)]

DCEI.ShowBigHeadMessage(title, text, image)
```

```lua
DCEI.HideBigHeadMessage()
```

![big_head](https://user-images.githubusercontent.com/56179276/67607879-df6ae800-f73a-11e9-9c0e-9f276ce0c61e.gif)


### Circle Menu
> Displays a circular command card for a unit that displays up to six abilities.

```lua
-- 0 is the command card index

DCEI.ShowAbilitiesUi(0, unit)
```

```lua
DCEI.HideAbilitiesUi(0, unit)
```

![circle_menu](https://user-images.githubusercontent.com/56179276/67607958-278a0a80-f73b-11e9-86cb-0c059fe7696b.gif)


### Fast Forward Button
> Hide the fast forward button.

```lua
DCEI.HideFastForwardButton()
```

![speed up](https://user-images.githubusercontent.com/56179276/67608006-50120480-f73b-11e9-8bb5-236198f72ac6.png)


### Feedback Message
> Displays a feedback message in the middle of the screen.

```lua
local text = "This is a feedback message."

DCEI.ShowFeedbackMessage(text)
```

![feedback_msg](https://user-images.githubusercontent.com/56179276/67607973-307adc00-f73b-11e9-8d9c-e11ee666b2be.gif)


### Floating Text
> Create floating text at a unit.

```lua
-- use anim_id = 0 for bounce-in animation
-- use anim_id = 1 for float-up animation

local pos = DCEI.GetUnitPosition3D(unit)
local text = "<color=green>" .. "text!"
local anim_id = 0
local show_duration = 0.5
local anim_duration = 1

--optional offset options
local options = { 
    offset = {
        up = 1.25,
        right = 0,
        front = 0
    }
}

DCEI.ShowFloatingText(
    pos,
    text,
    show_duration,
    anim_id,
    anim_duration,
    options
)
```

![floating_text](https://user-images.githubusercontent.com/56179276/67608019-5bfdc680-f73b-11e9-81a9-58eb0482aefa.gif)


### Help Button
> Shows a help button that runs a function when clicked, commonly combined with a message box to give gameplay tips.

```lua
function ShowQuestionMessage()
    local title = "Another Message"
    local body = "The question button runs a function when pressed, such as showing a message box."  
    local button_text = "Continue"
    DCEI.ShowMessageWithButtonText(title, body, button_text)
end

DCEI.SetQuestionButton(ShowQuestionMessage)
```

![question_btn](https://user-images.githubusercontent.com/56179276/67608038-68821f00-f73b-11e9-84c9-a787a1fe51d6.gif)


### Hero Status
> Shows a portrait, health bar, mana bar, and ability cast button for a unit.

```lua
DCEI.ShowUnitStatusUiInSlot(3, hero, slot)  -- shows unit status
DCEI.ShowAbilitiesUiInSlot(2, hero, slot)   -- shows ability button
```

```lua
DCEI.HideUnitStatusUi(3, unit)  -- hides unit status (this doesn't seem to work)
DCEI.HideAbilitiesUi(2, unit)   -- hides ability button
```

![hero_status](https://user-images.githubusercontent.com/56179276/67608046-733cb400-f73b-11e9-8a22-71058c54d469.gif)



### Left Menu
> Shows a mana bar and ability buttons for a unit.

```lua
DCEI.ShowShipSpellMenu()        
DCEI.ShowUnitStatusUi(2, unit)  -- shows mana bar
DCEI.ShowAbilitiesUi(1, unit)   -- shows abilities
```

```lua
DCEI.HideShipSpellMenu()        
DCEI.HideUnitStatusUi(2, unit)  -- hides mana bar
DCEI.HideAbilitiesUi(1, unit)   -- hides abilities
```

![left_menu](https://user-images.githubusercontent.com/56179276/67608054-7a63c200-f73b-11e9-97f1-b0bdeb66427c.gif)


### Message Box
> Displays a modal message box that pauses gameplay and masks user input until dismissed.

```lua
local title = "Message Title"
local body = (
    "This is a message box. It pauses the game.\n" ..
    "It supports multiple lines.\n" ..
    "And also <color=yellow>rich text</color><size=125%>!</size></color><size=175%>!</size></color><size=125%>!</size>\n" ..
    "It also supports images, but you can't use custom images yet so this is of limited use."
)     
local button_text = "Continue"
        
DCEI.ShowMessageWithButtonText(title, body, button_text)  
```

![message_box](https://user-images.githubusercontent.com/56179276/67608073-94050980-f73b-11e9-872f-2ed4a91258ba.gif)



### Objective Display
> Shows objective text in the upper left corner of the screen.

```lua
DCEI.ShowObjective("- Objective Text")
```

```lua
DCEI.HideObjective()
```

![objective_text](https://user-images.githubusercontent.com/56179276/67608081-9bc4ae00-f73b-11e9-8664-3a77cd9d3bb8.gif)



### Screen Mask
> Shows a screen mask with or without alpha that completely blocks mouse input while shown.

```lua
local alpha_value = 0.5

DCEI.ShowScreenMaskWithAlpha(alpha_value)
```

```lua
DCEI.ShowScreenMask() -- functionally the same as as DCEI.ShowScreenMaskWithAlpha(0)
```

```lua
DCEI.HideScreenMask()
```

![screen_mask](https://user-images.githubusercontent.com/56179276/67608099-ac752400-f73b-11e9-95da-fa344c1200bd.gif)


### Slow Motion FX
> Overlays a vignette and some particle FX.

```lua
DCEI.ShowSlowMotionEffect()
```

```lua
DCEI.HideSlowMotionEffect()
```

![slow_mo](https://user-images.githubusercontent.com/56179276/67608105-b3039b80-f73b-11e9-8a83-72f203d45163.gif)


### Speech Bubble
> Attach a speech bubble with a title to a unit.

```lua
local max_width = 320
local text = "Hello!"
local title = "Slime"

-- optional offset options
local options = {   
    up = 0.5,
    right = 0,
    front = 0
}

DCEI.ShowSpeechBubble(unit, max_width, text, title, options)
```

```lua
DCEI.HideSpeechBubble(unit)
```

![speech_bubble](https://user-images.githubusercontent.com/56179276/67608117-b9921300-f73b-11e9-9395-03b0b0cabd49.gif)


### Unit Label
> Attach static text to a unit. Supports [rich text](https://docs.unity3d.com/Manual/StyledText.html).

```lua
local text = "Some Text"

-- optional offset options
local options = {   
    offset = {
        right = 0,
        up = 0.5,
        front = 0
    }
}

-- shows unit label
DCEI.ShowUnitLabel(unit, text, options)
```

```lua
-- hides unit label
DCEI.HideUnitLabel(unit)
```

> ![ui_unit_label](https://user-images.githubusercontent.com/56179276/67604411-59e23a80-f730-11e9-98c9-0bb3f78d079c.png)