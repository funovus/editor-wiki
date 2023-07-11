In this tutorial, we will be learning how to create a simple status bar for units and attaching it to units that we create.

This tutorial will cover:

1. [Creating a Status Bar Frame](#1-creating-a-status-bar-frame)
2. [Hooking Up Custom UI Items to Units](#2-hooking-up-custom-ui-items-to-units)

This tutorial assumes that the reader has done tutorials [1-2: Creating A Weapon](https://github.com/dctopspin/Wild-Modding/wiki/Tutorial-1–2), [C-1: Creating a Skill Shot](https://github.com/dctopspin/Wild-Modding/wiki/Tutorial-C–1) and [1-4: Writing Triggers In Lua](https://github.com/dctopspin/Wild-Modding/wiki/Tutorial-1–4). In addition the reader is assumed to have created a unit prior to starting this tutorial.

# 1. Creating a Status Bar Frame
First, we're going to start out by creating a function called `CreateStatusFrame` in our trigger.lua.txt file. This will give us something that looks like this.


```LUA
--LIBRARIES
local core = GameModules["Arcade/Core"]

-- VARIABLES

-- FUNCTIONS
function CreateStatusFrame(unit)
end

-- TRIGGERS
function OnMapStart()
    core.HideDefaultUi()
end

-- INITIALIZE
DCEI.TriggerAddTimerEventElapsed(OnMapStart, 0)
```

Next, we're going to decide on the images we want to use for our status bars by consulting the [available image textures](https://github.com/dctopspin/Wild-Modding/wiki/Image-Textures).

In this case, I have decided on using the following textures for each aspect:
* Empty: health_bar_player_empty01
* Health: health_bar_player_fill00
* Shield: health_bar_player_fill00_shield
* Mana: health_bar_boss_special_fill
* Background: frame07

Adding the textures to the function for ease of referencing later we now have:

```LUA
function CreateStatusFrame(unit)
    image = {
        empty = "health_bar_player_empty01",
        health = "health_bar_player_fill01",
        shield = "health_bar_player_fill01_shield",
        mana = "health_bar_boss_special_fill",
        background = "frame07"
    }
end
```
Now we need to actually create the frame itself. First we have to use `DCEI.GetUiRootFrame()` to get the initial UI frame, then `DCEI.CreateVStackFrame` for the container, and `DCEI.CreateFrame` for each of the bars and their fill textures. Giving us this:

```LUA
--LIBRARIES
local core = GameModules["Arcade/Core"]

-- VARIABLES
local root = DCEI.GetUiRootFrame()

-- FUNCTIONS
function CreateStatusFrame(unit)
    images = {
        empty = "health_bar_player_empty01",
        health = "health_bar_player_fill00",
        shield = "health_bar_player_fill00_shield",
        mana = "health_bar_boss_special_fill",
        background = "frame07"
    }

    -- Create the container
    local container = DCEI.CreateVStackFrame(root)
    -- Shield bar
    local shield = {}
    shield.background = DCEI.CreateFrame(container)
    shield.fill = DCEI.CreateFrame(shield.background)
    -- Health bar
    local health = {}
    health.background = DCEI.CreateFrame(container)
    health.fill = DCEI.CreateFrame(health.background)
    -- Mana bar
    local mana = {}
    mana.background = DCEI.CreateFrame(container)
    mana.fill = DCEI.CreateFrame(mana.background)
end

-- TRIGGERS
function OnMapStart()
    core.HideDefaultUi()
end

-- INITIALIZE
DCEI.TriggerAddTimerEventElapsed(OnMapStart, 0)
```

Next, we need to set the images for each frame using `DCEI.SetFrameImage` followed by setting their size with `DCEI.SetFrameSize`. In addition, we'll set padding for the background with `DCEI.SetFramePadding` so that the bars are properly within its borders. This changes our function to:

```LUA
function CreateStatusFrame(unit)
    images = {
        empty = "health_bar_player_empty01",
        health = "health_bar_player_fill01",
        shield = "health_bar_player_fill01_shield",
        mana = "health_bar_boss_special_fill",
        background = "frame07"
    }

    -- Create the container
    local container = DCEI.CreateVStackFrame(root)
    DCEI.SetFrameImage(container, images.background)
    DCEI.SetFramePadding(container, 5)
    -- Shield bar
    local shield = {}
    shield.background = DCEI.CreateFrame(container)
    shield.fill = DCEI.CreateFrame(shield.background)
    DCEI.SetFrameImage(shield.background, images.empty)
    DCEI.SetFrameImage(shield.fill, images.shield)
    DCEI.SetFrameMinSize(shield.background, 64, 10)
    DCEI.SetFrameMinSize(shield.fill, 64, 10)
    -- Health bar
    local health = {}
    health.background = DCEI.CreateFrame(container)
    health.fill = DCEI.CreateFrame(health.background)
    DCEI.SetFrameImage(health.background, images.empty)
    DCEI.SetFrameImage(health.fill, images.health)
    DCEI.SetFrameMinSize(health.background, 64, 10)
    DCEI.SetFrameMinSize(health.fill, 64, 10)
    -- Mana bar
    local mana = {}
    mana.background = DCEI.CreateFrame(container)
    mana.fill = DCEI.CreateFrame(mana.background)
    DCEI.SetFrameImage(mana.background, images.empty)
    DCEI.SetFrameImage(mana.fill, images.mana)
    DCEI.SetFrameMinSize(mana.background, 64, 10)
    DCEI.SetFrameMinSize(mana.fill, 64, 10)
end
```

We have now created a function to create the status frame, if we add `CreateStatusFrame("a")` to `OnMapStart` we can get a preview of what our status frame looks like.

![image](https://user-images.githubusercontent.com/11213059/82517383-d2945400-9ad1-11ea-8851-a9ceac36654d.png)

# 2. Hooking Up Custom UI Items to Units
Now currently there are two issues with our status bars.

1. They're always full.
2. They aren't attached to a unit.

First, we'll start off by addressing the issue that they don't change when a unit's stats change. We can do this with `DCEI.SetFrameImageFillAmountExpression(Transform ui, string expression)`. But first, I need to address how string expressions work for this.

Every string expression takes the form of `Unit.Category.Value`.

* Unit: This is a string value that becomes associated with a unit that tells the expression to be evaluated on it.
* Category: This is the category of the value we're looking for, such as health, or mana, but also things like expression which are named expressions created in the Data Window.
* Value: This is the value that the expression is looking for and returns.

Since we want to create a status frame for each unit that we spawn, we need to make a unique string value for them to become associated with. Luckily this is relatively simple. We'll create a variable called `unit_count` that stores a count of the units that have been spawned so far and use it to create a unique unit identifier for our string. We'll then use `DCEI.SetFrameImageFillAmountExpression` and create the appropriate string expressions for the values we want to get. This is what our code should look like now:

```LUA
--LIBRARIES
local core = GameModules["Arcade/Core"]

-- VARIABLES
local root = DCEI.GetUiRootFrame()
local unit_count = 0

-- FUNCTIONS
function CreateStatusFrame(unit)
    images = {
        empty = "health_bar_player_empty01",
        health = "health_bar_player_fill01",
        shield = "health_bar_player_fill01_shield",
        mana = "health_bar_boss_special_fill",
        background = "frame07"
    }

    -- Create the container
    local container = DCEI.CreateVStackFrame(root)
    DCEI.SetFrameImage(container, images.background)
    DCEI.SetFramePadding(container, 5)
    -- Shield bar
    local shield = {}
    shield.background = DCEI.CreateFrame(container)
    shield.fill = DCEI.CreateFrame(shield.background)
    DCEI.SetFrameImage(shield.background, images.empty)
    DCEI.SetFrameImage(shield.fill, images.shield)
    DCEI.SetFrameMinSize(shield.background, 64, 10)
    DCEI.SetFrameMinSize(shield.fill, 64, 10)
    -- Health bar
    local health = {}
    health.background = DCEI.CreateFrame(container)
    health.fill = DCEI.CreateFrame(health.background)
    DCEI.SetFrameImage(health.background, images.empty)
    DCEI.SetFrameImage(health.fill, images.health)
    DCEI.SetFrameMinSize(health.background, 64, 10)
    DCEI.SetFrameMinSize(health.fill, 64, 10)
    -- Mana bar
    local mana = {}
    mana.background = DCEI.CreateFrame(container)
    mana.fill = DCEI.CreateFrame(mana.background)
    DCEI.SetFrameImage(mana.background, images.empty)
    DCEI.SetFrameImage(mana.fill, images.mana)
    DCEI.SetFrameMinSize(mana.background, 64, 10)
    DCEI.SetFrameMinSize(mana.fill, 64, 10)

    -- Set up our unit expressions.
    unit_count = unit_count + 1
    local identifier = "unit" .. unit_count
    DCEI.SetFrameImageFillAmountExpression(shield.fill, identifier .. ".Shield.Fraction")
    DCEI.SetFrameImageFillAmountExpression(health.fill, identifier .. ".Health.Fraction")
    DCEI.SetFrameImageFillAmountExpression(mana.fill, identifier .. ".Mana.Fraction")
end

-- TRIGGERS
function OnMapStart()
    core.HideDefaultUi()
end

-- INITIALIZE
DCEI.TriggerAddTimerEventElapsed(OnMapStart, 0)
```

We then use `DCEI.BindUnitData` to bind our unit with the identifier, and `DCEI.AttachFrameToUnit` in order to attach the UI to the unit we made. This gives us:

```LUA
function CreateStatusFrame(unit)
    images = {
        empty = "health_bar_player_empty01",
        health = "health_bar_player_fill01",
        shield = "health_bar_player_fill01_shield",
        mana = "health_bar_boss_special_fill",
        background = "frame07"
    }

    -- Create the container
    local container = DCEI.CreateVStackFrame(root)
    DCEI.SetFrameImage(container, images.background)
    DCEI.SetFramePadding(container, 5)
    -- Shield bar
    local shield = {}
    shield.background = DCEI.CreateFrame(container)
    shield.fill = DCEI.CreateFrame(shield.background)
    DCEI.SetFrameImage(shield.background, images.empty)
    DCEI.SetFrameImage(shield.fill, images.shield)
    DCEI.SetFrameMinSize(shield.background, 64, 10)
    DCEI.SetFrameMinSize(shield.fill, 64, 10)
    -- Health bar
    local health = {}
    health.background = DCEI.CreateFrame(container)
    health.fill = DCEI.CreateFrame(health.background)
    DCEI.SetFrameImage(health.background, images.empty)
    DCEI.SetFrameImage(health.fill, images.health)
    DCEI.SetFrameMinSize(health.background, 64, 10)
    DCEI.SetFrameMinSize(health.fill, 64, 10)
    -- Mana bar
    local mana = {}
    mana.background = DCEI.CreateFrame(container)
    mana.fill = DCEI.CreateFrame(mana.background)
    DCEI.SetFrameImage(mana.background, images.empty)
    DCEI.SetFrameImage(mana.fill, images.mana)
    DCEI.SetFrameMinSize(mana.background, 64, 10)
    DCEI.SetFrameMinSize(mana.fill, 64, 10)

    -- Set up our unit expressions.
    unit_count = unit_count + 1
    local identifier = tostring("unit" .. unit_count)
    DCEI.LogMessage(identifier)
    DCEI.SetFrameImageFillAmountExpression(shield.fill, identifier .. ".Shield.Fraction")
    DCEI.SetFrameImageFillAmountExpression(health.fill, identifier .. ".Health.Fraction")
    DCEI.SetFrameImageFillAmountExpression(mana.fill, identifier .. ".Mana.Fraction")

    -- Bind our Unit
    DCEI.BindUnitData(identifier, unit)

    -- Attach the UI to our unit
    local options = {   
        offset = {
            right = 0,
            up = 1.0,
            front = 0
        }
    }
    DCEI.AttachFrameToUnit(container, unit, options)
end
```

If we run our triggers, and create units, we'll notice that the status frame sticks around after they die.

![image](https://user-images.githubusercontent.com/11213059/82524885-de3d4600-9ae4-11ea-99f0-5913f5c828ad.png)

This means that we need to clean up our UI when the unit dies. Luckily `DCEI.TriggerAddUnitDiedEvent` and `DCEI.TriggerAddUnitRemovedEvent` can help us here. By passing along a function that destroys the container when it's run, we can make it so that when a unit dies or is removed.

```LUA
    DCEI.TriggerAddUnitDiedEvent(unit, function() DCEI.Destroy(container) end)
    DCEI.TriggerAddUnitRemovedEvent(unit, function() DCEI.Destroy(container) end)
```

Adding those two lines to program, our code now looks like:

```LUA
--LIBRARIES
local core = GameModules["Arcade/Core"]

-- VARIABLES
local root = DCEI.GetUiRootFrame()
local unit_count = 0

-- FUNCTIONS
function CreateStatusFrame(unit)
    images = {
        empty = "health_bar_player_empty01",
        health = "health_bar_player_fill01",
        shield = "health_bar_player_fill01_shield",
        mana = "health_bar_boss_special_fill",
        background = "frame07"
    }

    -- Create the container
    local container = DCEI.CreateVStackFrame(root)
    DCEI.SetFrameImage(container, images.background)
    DCEI.SetFramePadding(container, 5)
    -- Shield bar
    local shield = {}
    shield.background = DCEI.CreateFrame(container)
    shield.fill = DCEI.CreateFrame(shield.background)
    DCEI.SetFrameImage(shield.background, images.empty)
    DCEI.SetFrameImage(shield.fill, images.shield)
    DCEI.SetFrameMinSize(shield.background, 64, 10)
    DCEI.SetFrameMinSize(shield.fill, 64, 10)
    -- Health bar
    local health = {}
    health.background = DCEI.CreateFrame(container)
    health.fill = DCEI.CreateFrame(health.background)
    DCEI.SetFrameImage(health.background, images.empty)
    DCEI.SetFrameImage(health.fill, images.health)
    DCEI.SetFrameMinSize(health.background, 64, 10)
    DCEI.SetFrameMinSize(health.fill, 64, 10)
    -- Mana bar
    local mana = {}
    mana.background = DCEI.CreateFrame(container)
    mana.fill = DCEI.CreateFrame(mana.background)
    DCEI.SetFrameImage(mana.background, images.empty)
    DCEI.SetFrameImage(mana.fill, images.mana)
    DCEI.SetFrameMinSize(mana.background, 64, 10)
    DCEI.SetFrameMinSize(mana.fill, 64, 10)

    -- Set up our unit expressions.
    unit_count = unit_count + 1
    local identifier = tostring("unit" .. unit_count)
    DCEI.LogMessage(identifier)
    DCEI.SetFrameImageFillAmountExpression(shield.fill, identifier .. ".Shield.Fraction")
    DCEI.SetFrameImageFillAmountExpression(health.fill, identifier .. ".Health.Fraction")
    DCEI.SetFrameImageFillAmountExpression(mana.fill, identifier .. ".Mana.Fraction")

    -- Bind our Unit
    DCEI.BindUnitData(identifier, unit)

    -- Attach the UI to our unit
    local options = {   
        offset = {
            right = 0,
            up = 1.0,
            front = 0
        }
    }
    DCEI.AttachFrameToUnit(container, unit, options)

    -- Clean-up our UI when the unit dies
    DCEI.TriggerAddUnitDiedEvent(unit, function() DCEI.Destroy(container) end)
    DCEI.TriggerAddUnitRemovedEvent(unit, function() DCEI.Destroy(container) end)
end

-- TRIGGERS
function OnMapStart()
    core.HideDefaultUi()

    local x
    local unit
    for x = 1, 10 do
        --math.randomseed(os.time())
        unit = DCEI.CreateUnit(x % 2 - (x-1) % 2, x % 2 - (x-1) % 2, (math.random() > 0.5) and "Hero IceMage" or "Sword Dude", 10+x, 10+x)
        CreateStatusFrame(unit)
        DCEI.Wait(0.1)
    end
end

-- INITIALIZE
DCEI.TriggerAddTimerEventElapsed(OnMapStart, 0)
```

If everything was set up appropriately, you should now have unit status frame that reflects a unit's shields, health, and mana.

***

Tutorial map: [Example Custom Unit Status Bar.zip](https://github.com/dctopspin/Wild-Modding/files/4660693/Example.Custom.Unit.Status.Bar.zip)
