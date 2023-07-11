In this tutorial, we will be implementing a score counter that increments when an enemy is killed and a trigger to respawn enemies.

This tutorial will cover:

- [1. Creating Functions](#1-creating-functions)
- [2. Organizing Your Script With Comments](#2-organizing-your-script-with-comments)
- [3. Hooking Up Trigger Events](#3-hooking-up-trigger-events)
- [4. Respawning Enemies With Timers](#4-respawning-enemies-with-timers)
- [5. Casting spell with your hero](#5-casting-spell-with-your-hero)

## 1. Creating Functions

So far we've used the LogMessage() and CreateUnit() DCEI functions but we can create our own functions too. This lets us create re-usable pieces of code with customizable behavior (you can read more about functions [here](http://lua-users.org/wiki/FunctionsTutorial)).

Let's write a function that spawns an enemy unit from just one "point" parameter (Lua supports passing arrays as parameters). In Lua, parameter names are arbitrary and untyped. We called ours "point" but we could call it whatever we wanted. Descriptive names are generally recommended. 

Write the following function right below the `-- TRIGGERS` section.

```lua
-- TRIGGERS
function SpawnEnemyUnitAtPoint(point)
    DCEI.CreateUnit(-1, -1, enemy_unit_name, point[1], point[2])
end
```

If you SAVE and hit play, nothing new will happen. This is because functions must be called to be executed. Let's refactor our for loop to use our new function. At this point your complete trigger file should look like this:

```lua
-- VARIABLES
local hero_unit_name = DCEI.Unit("Hero IceMage")
local enemy_unit_name = DCEI.Unit("Standard MeleeUnit")
local enemy_points = {
    {20, 14},
    {21, 16},
    {20, 18}
}

-- TRIGGERS
local function SpawnEnemyUnitAtPoint(point)
    DCEI.CreateUnit(-1, -1, enemy_unit_name, point[1], point[2])
end

DCEI.LogMessage("Hello Lua!")

DCEI.CreateUnit(1, 1, hero_unit_name, 16, 16)

for key, value in ipairs(enemy_points) do
    SpawnEnemyUnitAtPoint(value)
end
```

Note that local functions must be defined _above_ where it is called in the script. This is because Lua executes line by line from the top down. If you tried to declare your function after the for loop, you'll get a script error.

## 2. Organizing Your Script With Comments

As you've seen so far, we've been separating our Variables and Triggers in separate sections. As your project grows, keeping your game logic organized is an important consideration for keeping development running smoothly. 

I like to split my trigger files into four main sections: libraries, global variables, triggers, and initialization. We can use comments to split our trigger files into multiple sections that are easier to keep track of.

```lua
-- LIBRARIES

-- VARIABLES

-- TRIGGERS

-- INITIALIZATION
```

To write comments, start a line with `-- Comment text`. Commented lines aren't run by the game and are used to make the script more understandable. Block or multiline comments can be created with `--[[ ]]`:
```lua
--[[
    Block comment text that
    can span multiple lines
]]
```
Comments can also be used to add notes about a specific piece of code or even temporarily disable/enable code for testing. For practice, let's comment out the `DCEI.LogMessage("Hello Lua!")` since we don't need it anymore. If done correctly it should change color.

```lua
-- DCEI.LogMessage("Hello Lua!")
```

> **PRO TIP:** The Windows VS Code keyboard shortcut for toggle line comment is `Ctrl+/`

We can delete our "Hello Lua" log message now.

> **PRO TIP:** The Windows VS Code keyboard shortcut for move line up/down is `Alt+↑`/`Alt+↓ `

Lastly, let's clean up our floating CreateUnit and For loop, since it's generally bad practice to have code floating around. Move these floating lines into a new function called `OnMapStart()`, so that all of the starting units are created when this function is called. Then call this function under INITIALIZATION. Note that functions being called inside other functions (such as `SpawnEnemyUnitAtPoint` inside of `OnMapStart()`) do not need to be defined in order unless they are prefixed with `local`. 

```lua
-- VARIABLES
local hero_unit_name = DCEI.Unit("Hero IceMage")
local enemy_unit_name = DCEI.Unit("Standard MeleeUnit")
local enemy_points = {
    { 20, 14 },
    { 20, 16 },
    { 20, 18 },
}

-- TRIGGERS
local function OnMapStart()
    DCEI.CreateUnit(1, 1, hero_unit_name, 16, 16)

    for key, value in ipairs(enemy_points) do
        SpawnEnemyUnitAtPoint(value)
    end
end

function SpawnEnemyUnitAtPoint(point)
    DCEI.CreateUnit(-1, -1, enemy_unit_name, point[1], point[2])
end

-- INITIALIZATION
OnMapStart()
```

## 3. Hooking Up Trigger Events

Trigger events in Lua function similarly to trigger events in StarCraft II or Warcraft III, but the way you create them is a little different. You can find a complete list of currently supported trigger events [here](Trigger-API-Reference#dcei-trigger-events). To create a trigger that fires when any unit dies, you'd write this:

```lua
-- TRIGGERS
function OnUnitDied()
    DCEI.LogMessage("> Some unit died")
end

-- INITIALIZATION
DCEI.TriggerAddUnitDiedEvent(DCEI.UnitAny, OnUnitDied)
```

Note that in the trigger event, we're passing a _function_ as a parameter, and that the `()` and parameters of OnUnitDied aren't used. Writing `DCEI.TriggerAddUnitDiedEvent(DCEI.UnitAny, OnUnitDied())` will **not** work.

Now that we know about trigger events, lets create a score counter that increments whenever an enemy is defeated. To get started, create an OnUnitDied function and trigger event, as well as a global variable called score with a default value of 0.

```lua
-- VARIABLES
local score = 0
local hero_unit_name = DCEI.Unit("Hero IceMage")
local enemy_unit_name = DCEI.Unit("Standard MeleeUnit")
local enemy_points = {
    { 20, 14 },
    { 20, 16 },
    { 20, 18 },
}

-- TRIGGERS
function OnMapStart()
    DCEI.CreateUnit(1, 1, hero_unit_name, 16, 16)

    for key, value in ipairs(enemy_points) do
        SpawnEnemyUnitAtPoint(value)
    end
end

function SpawnEnemyUnitAtPoint(point)
    DCEI.CreateUnit(-1, -1, enemy_unit_name, point[1], point[2])
end

function OnUnitDied()

end

-- INITIALIZATION
OnMapStart()
DCEI.TriggerAddUnitDiedEvent(DCEI.UnitAny, OnUnitDied)

```

Next we'll check if the unit that died is an enemy unit by comparing the unit type name of the dying unit with our `enemy_unit_name` variable. We can get the unit that died with `DCEI.TriggeringUnit` and a unit type name with `DCEI.GetUnitType`. Then we can compare the two with an if statement (similar to conditions in SC2/War3) and use a log message to check that our trigger is working correctly.

```lua
-- TRIGGERS
function OnUnitDied()
    local u = DCEI.TriggeringUnit
    local name = DCEI.GetUnitType(u)

    if name == enemy_unit_name then
        DCEI.LogMessage("> an enemy unit died!")
    end
end
```

To hookup our score counter, let's write a new function called `UpdateScore()` using a new function called `DCEI.ShowObjectiveText()`. In Lua we use `..` to concatenate (or combine) strings. Lua automatically converts numbers into strings.

```lua
-- TRIGGERS
function UpdateScore()
    DCEI.ShowObjectiveText("Score: " .. score)
end
```

Next let's update our OnUnitDied function to increment our score variable and update the score display. While we're at it, we might as well add `UpdateScore()` to `OnMapStart()` so we can show our initial score value (of 0) when the game starts.

```lua
-- VARIABLES
local score = 0
local hero_unit_name = DCEI.Unit("Hero IceMage")
local enemy_unit_name = DCEI.Unit("Standard MeleeUnit")
local enemy_points = {
    { 20, 14 },
    { 20, 16 },
    { 20, 18 },
}

-- TRIGGERS
local function UpdateScore()
    DCEI.ShowObjectiveText("Score: " .. score)
end

local function SpawnEnemyUnitAtPoint(point)
    DCEI.CreateUnit(-1, -1, enemy_unit_name, point[1], point[2])
end

local function OnMapStart()
    UpdateScore()

    DCEI.CreateUnit(1, 1, hero_unit_name, 16, 16)

    for key, value in ipairs(enemy_points) do
        SpawnEnemyUnitAtPoint(value)
    end
end

function OnUnitDied()
    local u = DCEI.TriggeringUnit
    local name = DCEI.GetUnitType(u)

    if name == enemy_unit_name then
        DCEI.LogMessage("> an enemy unit died!")
        score = score + 1
        UpdateScore()
    end
end

-- INITIALIZATION
OnMapStart()
DCEI.TriggerAddUnitDiedEvent(DCEI.UnitAny, OnUnitDied)
```

If everything is working correctly, you should have a score counter in-game that updates whenever an enemy is destroyed.

![score counter](https://user-images.githubusercontent.com/56179276/66879297-57365700-ef72-11e9-8dd5-453f571c2d4a.gif)


## 4. Respawning Enemies With Timers

Lastly we'll respawn enemies a few seconds after they die using the `TriggerAddTimerEventElapsed()` event and the `SpawnEnemyUnitAtPoint()` function we wrote earlier. 

We can get the point of the dying unit with `GetUnitPosition2D()` like so:

```lua
function OnUnitDied()
    local u = DCEI.TriggeringUnit
    local name = DCEI.GetUnitType(u)
    local p = DCEI.GetUnitPosition2D(u)

    if name == enemy_unit_name then
        DCEI.LogMessage("> an enemy unit died!")
        score = score + 1
        UpdateScore()
    end
end
```

Note that `GetUnitPosition2D()` returns a table, rather than an array so we have to convert it to a two dimensional array for it to work in our `SpawnEnemyUnitAtPoint()` function. We can accomplish this like so:

```lua
function OnUnitDied()
    local u = DCEI.TriggeringUnit
    local name = DCEI.GetUnitType(u)
    local p = DCEI.GetUnitPosition2D(u)
    local point = {p.x, p.y}

    if name == enemy_unit_name then
        DCEI.LogMessage("> an enemy unit died!")
        score = score + 1
        UpdateScore()
    end
end

```

If we look at the [Trigger Event API's](rigger-API-Reference-DCEI-Events-Timer#void-triggeraddtimereventelapsedtypedcallback-trigger-float-time-bool-userealtime-bool-simple) we'll see that `TriggerAddTimerEventElapsed()` takes a trigger (aka function) and float for the duration. As we learned earlier, `DCEI.TriggerAddTimerEventElapsed(SpawnEnemyUnitAtPoint(point), duration)` will not work.

What we can do, is wrap `SpawnEnemyUnitAtPoint(point)` in its own function without parameters like so:

```lua
    DCEI.TriggerAddTimerEventElapsed(
        function()
            SpawnEnemyUnitAtPoint(point)
        end,
        2
    )
```

It may look weird at first, but you'll get used to this syntax in no-time as it's very commonly used. Note that the duration is set to `2`, so enemies should respawn 2 seconds after dying.

Altogether your function should look like this:

```lua
function OnUnitDied()
    local u = DCEI.TriggeringUnit
    local name = DCEI.GetUnitType(u)
    local p = DCEI.GetUnitPosition2D(u)
    local point = {p.x, p.y}

    if name == enemy_unit_name then
        DCEI.LogMessage("> an enemy unit died!")
        score = score + 1
        UpdateScore()

        DCEI.TriggerAddTimerEventElapsed(
            function()
                SpawnEnemyUnitAtPoint(point)
            end,
            2
        )
    end
end
```

If everything has gone according to plan, you should have endlessly respawning enemies for your hero to thrash!

## 5. Casting spell with your hero

Now let's make your hero cast a cool ability! 

We'll start in the data editor. Here's the road map. Sometimes you can build it out quickly in the node editor, and then refine the details afterwards.

![image](https://user-images.githubusercontent.com/56179268/218193873-5c7259ec-f8d4-4cd7-b930-4ccbef61fe0c.png)




First we will need a ability. Let's create one in the data editor. Make a new ability. Make sure to increase the range of the ability so it can be cast anywhere!

![image](https://user-images.githubusercontent.com/56179268/218194272-312a4729-7724-4c78-b64e-1339fd69a023.png)


We want to make a Ice Spike AOE damage ability. We want some delay before the damage takes effect. Let's start with the damage effect:
![image](https://user-images.githubusercontent.com/56179268/218195476-a51ec07b-746b-47d2-bc76-105e12bea697.png)

Then create the search effect, and attach the damage effect to it:
![image](https://user-images.githubusercontent.com/56179268/218195600-ac3f8111-95b2-417b-b7c3-5762f1690faf.png)

Finally, for the delay, create a persistent and hook up the search effect to it:

![image](https://user-images.githubusercontent.com/56179268/218195844-d01080f3-a91e-4860-bbbe-76324fc00de9.png)

Lastly, create the visuals using actors. Start with a one-shot FX that will appear when the actual search effect which deals damage appears.Note the vfx better be created with the parent template `_FX OneShot SelfRemoving` so this particle would only play once and destroy self. You can take a look at its pre-made events to see how this is triggered!
![image](https://user-images.githubusercontent.com/56179268/218196108-cc267ef5-6b50-48f6-b559-49a25c610924.png)

Hook it up to the search effect with an Action Actor:
![image](https://user-images.githubusercontent.com/56179268/218196157-db92d05f-f72d-41af-8a3f-325655943aa9.png)
You also need a visual for the persistent effect so there's something to see during the delay before the explosion. 
![image](https://user-images.githubusercontent.com/56179268/218196218-1e409bbc-490e-4eab-8d9d-ef8bad6c3d68.png)


Finally we hook the effect to the ability and put the ability on our hero!

![image](https://user-images.githubusercontent.com/56179268/218196396-eb17b6af-44ac-49fa-93b8-b317a6bd080f.png)


![image](https://user-images.githubusercontent.com/56179268/218192963-f9f4bd9d-5553-4008-9753-13c4141d66fe.png)

Now we are all set with the data, let's make it cast spell to mouse position when pressing Q!

First we will need to register the Q key in project setting. (Window > Project Settings) You can call it whatever name you like here, we will call it later in script.
![image](https://user-images.githubusercontent.com/56179268/218204716-51d133d7-3924-4675-a43f-209f06159e23.png)


Now let's go to the script and write the trigger!

```lua
function OnKeyDown()
    local hero = DCEI.FindUnit(hero_unit_name)
    local mouse_position = DCEI.GetMouseWorldPosition2D()

    DCEI.CastAbilityAtPosition("Ice Spike", hero, mouse_position.x, mouse_position.y)
end

DCEI.TriggerAddMappedKeyDownEvent("Special", OnKeyDown)
```

First we will find our hero entity, and our mouse position. We will then cast the spell to that position. Pretty straightforward right?

Now your ice mage should be able to cast the ice spike on your mouse position!

> **PRO TIP:** Creating a unit in the Data Window creates a definition for that unit type (like a template). To actually get the unit into the game, you can create an instance of that unit in the Terrain Window with the unit brush or with `DCEI.CreateUnit()` in script.

You can get access to pre-placed units in Terrain in script with `DCEI.FindUnit()`, or simply get the unit reference returned from `DCEI.CreateUnit()` like this:
```lua
local hero_name = DCEI.Unit("Hero IceMage")
local hero = DCEI.CreateUnit(0, 0, hero_name, 8, 8, 0, 1)
DCEI.CastAbilityAtPosition(ability_name, hero, 10, 10)
```

NOTE: `DCEI.Unit` is not a reference to the unit. It is only telling the engine to preload the unit into cache so it can be used later.

***

Tutorial Map:  https://platform.wildsky.dev/arcade/game/623

**[Continue on to the next step!](Post-Onboarding)**
