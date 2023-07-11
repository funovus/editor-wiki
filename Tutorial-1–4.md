In this tutorial, we will be learning the basics of creating triggers in Lua and refactoring our map so that the units are created by script rather than being directly placed in the Terrain Editor.

This tutorial will cover:
- [1. Getting Started With Lua](#1-getting-started-with-lua)
- [2. Adding Triggers To Your Map](#2-adding-triggers-to-your-map)
- [3. Creating Units In Triggers](#3-creating-units-in-triggers)
- [4. Variables, Arrays, Loops](#4-variables-arrays-loops)

## 1. Getting Started With Lua

Our game engine uses [Lua](https://en.wikipedia.org/wiki/Lua_(programming_language)) to build game logic that shape how games are actually played. At some point we will add a trigger GUI for writing game logic without writing script, but for now we use Lua. It may sound like scary coding, but in reality Lua is a widely-used lightweight scripting system focused on speed and ease-of-use. Lua is widely documented and googling "How do I do X in Lua" usually returns useful results.

Follow our  [Lua Setup Guide](Lua-Set-Up) to get started with Lua, including:
- Installing [VS Code](https://code.visualstudio.com/)
- Installing appropriate plugins for VS code (Lua by sumneko, StyLua by JohnnyMorganz)
- Following the [Lua Style Guide](https://funovus.notion.site/Lua-Scripting-8f54f72df8044482a37463180a15fc79)

Great! Now we're ready to get started adding some triggers to our map! You can close each of the open tabs in VS Code by click the "x" in the tab or with the `Ctrl+W` shortcut.

## 2. Adding Triggers To Your Map

Triggers live inside the "Trigger.lua.txt" file inside the map folder. You can open this file directly by pressing this "Open Lua Script" Button on the left side in the Terrain or Data Window.

<img src="https://user-images.githubusercontent.com/35605743/123470487-1c474c00-d5ba-11eb-8834-46c6ddd575f9.PNG" alt="1-4-2_1a" style="width:200px;"/><br><br />

Alternatively, you can open this file by selecting "File > Open" in VS Code or by dragging the .lua.txt file directly into your open VS Code window. By default, the Trigger.lua.txt file will look like this:

![6 preset lua](https://user-images.githubusercontent.com/35605743/123470813-86f88780-d5ba-11eb-8d59-d138fd568836.PNG)

For this tutorial, we'll remove this code (removing it won't cause any problems).

Write the following (actually write it out, it'll help you learn better than copy-pasting): 

```lua
DCEI.LogMessage("Hello Lua!")
```

Save the trigger file when you finished and press Play in the editor to test your work.

At first it may seem like nothing is different. But if you open "Window > Play Settings Window", look for the Player Logs on the right side, and scroll to the bottom, you'll see that "Hello Lua!" has been printed. So what exactly happened there? We used the DCEI LogMessage function, which takes a string and prints it to the log window. 

![7 player logs](https://user-images.githubusercontent.com/35605743/123472513-e35ca680-d5bc-11eb-8d65-0c38e2e80fd4.PNG)

## 3. Creating Units In Triggers

Now let's do something a little more useful. We'll use the DCEI CreateUnit function to... create a unit! Back in VS Code, add a few new lines and write: `DCEI.CreateUnit(1, 1, "Hero IceMage", 16, 16)`. If you used a different name for your hero, use that instead of "Hero IceMage". 

We'll add a comment here by writing `-- TRIGGERS`. Our code will ignore this line. We'll talk more about comments in the next tutorial, so for now all you need to know is that comments can help us visually categorize our code.

```lua
-- TRIGGERS
DCEI.LogMessage("Hello Lua!")

DCEI.CreateUnit(1, 1, "Hero IceMage", 16, 16)
```

SAVE again and hit play. You should see two heroes fighting enemies. Great! At this point you may be wondering what those parameters we used in CreateUnit() were. If we take a look at the CreateUnit() function in the [API Reference](Trigger-API-Reference-DCEI-Functions-Unit#unit-createunitint-teamid-int-playerid-string-unittype-float-x-float-z-float-dx-float-dz) we can find out: 

 `CreateUnit(int teamId, int playerId, string unitTypeName, float x, float z, float dx, float dz)`

What each of those things does:
* Team Id (which team the unit is on. 1 is the local player's team)
* Player Id (which player owns the unit. 1 is the local player)
* Unit Type Name (which unit to create)
* Map Coordinates (where to spawn the unit in X, Z)
* Unit Facing (optional, what direction the unit is facing)

Now that we know how to create units in triggers, let's refactor the map so that the hero and enemies are created by triggers rather than being pre-placed on the terrain. Erase the units on the map by first entering selection mode rather than painting mode by pressing the `Escape` key on your keyboard. Then select them and press the `Delete` key on your keyboard and save. Hit Play again.

...And now there's no units? If you check the Player Logs Window (`Ctrl+Shift+L`), you'll see the cause:

![9 lua error](https://user-images.githubusercontent.com/65057459/178041874-e666d035-7143-435d-9bd7-5d4a09ffa02d.png)

Our first lua error: "Hero IceMage is not registered". In order to create units, effects, or behaviors using triggers, they must be explicitly registered somewhere in your script so the engine knows to load that piece of data into memory. We didn't encounter this error before because the engine already knew about the hero since it was placed in the Terrain Window.

To fix this, simply add DCEI.Unit() to your CreateUnit line.
```lua
DCEI.CreateUnit(1, 1, DCEI.Unit("Hero IceMage"), 16, 16)
```

SAVE again and if you hit Play, your hero unit should be created in the center of the map. Next, try creating the three enemy units (Standard MeleeUnit) in the map in triggers. **Remember** the team id and player id for enemies is -1, otherwise your hero won't attack the melee units.

Your triggers should look something like this:

```lua
-- TRIGGERS
DCEI.LogMessage("Hello Lua!")

DCEI.CreateUnit(1, 1, DCEI.Unit("Hero IceMage"), 16, 16)

DCEI.CreateUnit(1, 1, DCEI.Unit("Standard MeleeUnit"), 20, 15)
DCEI.CreateUnit(1, 1, DCEI.Unit("Standard MeleeUnit"), 20, 16)
DCEI.CreateUnit(1, 1, DCEI.Unit("Standard MeleeUnit"), 20, 17)
```

> **PRO TIP:** The editor supports hot reloading of triggers and data. If you save your triggers file and press the "Restart" button in-game, your changes will be applied without having to relaunch the game instance.<br/><br/>![12 restart](https://user-images.githubusercontent.com/56179276/66672671-afd4bf80-ec13-11e9-90e5-56257016b887.png)
***

## 4. Variables, Arrays, Loops

We can improve our Lua script by using variables instead of using the unit type name to improve readability and reduce the chance of errors.

To create a variable that stores the enemy unit type name, we'll write: `local enemy_unit_name = "Standard MeleeUnit"`. Make sure to write this line _above_ the lines where you actually create the enemy units. We can then replace all instances of "Standard MeleeUnit" in our script with our new variables `enemy_unit_name`.

I'm also adding another comment `-- VARIABLES` on the line above to organize where I track my variables.
```lua
-- VARIABLES
local enemy_unit_name = DCEI.Unit("Standard MeleeUnit")

-- TRIGGERS
DCEI.LogMessage("Hello Lua!")

DCEI.CreateUnit(1, 1, DCEI.Unit("Hero IceMage"), 16, 16)

DCEI.CreateUnit(1, 1, enemy_unit_name, 20, 14)
DCEI.CreateUnit(1, 1, enemy_unit_name, 21, 16)
DCEI.CreateUnit(1, 1, enemy_unit_name, 20, 18)
```


We can store the x, y coordinates in an array variable.

```lua
-- VARIABLES
local enemy_points = {
    {20, 14},
    {21, 16},
    {20, 18}
}
```

We can reference array values in our script like so:

```lua
-- VARIABLES
local enemy_unit_name = DCEI.Unit("Standard MeleeUnit")
local enemy_points = {
    {20, 14},
    {21, 16},
    {20, 18}
}

-- TRIGGERS
DCEI.CreateUnit(-1, -1, enemy_unit_name, enemy_points[1][1], enemy_points[1][2])
DCEI.CreateUnit(-1, -1, enemy_unit_name, enemy_points[2][1], enemy_points[2][2])
DCEI.CreateUnit(-1, -1, enemy_unit_name, enemy_points[3][1], enemy_points[3][2])
```

Lastly we can clean up our script with a [for loop](https://www.lua.org/pil/4.3.4.html) to create our three enemy units with less code:

```lua
-- TRIGGERS
for i = 1, 3, 1 do
    DCEI.CreateUnit(-1, -1, enemy_unit_name, enemy_points[i][1], enemy_points[i][2])
end
```

We can use a variable in our for loop to increase readability.

```lua
-- TRIGGERS
for i = 1, 3, 1 do
    local point = enemy_points[i]
    DCEI.CreateUnit(-1, -1, enemy_unit_name, point[1], point[2])
end
```

It's also good practice to make a variable for "Hero IceMage" as well, so let's do that. 

```lua
-- VARIABLES
local hero_unit_name = DCEI.Unit("Hero IceMage")

-- TRIGGERS
DCEI.CreateUnit(1, 1, hero_unit_name, 16, 16)
```

You can also use [ipairs](https://stackoverflow.com/questions/55108794/what-is-the-difference-of-pairs-vs-ipairs-in-lua) to iterate through the table instead of a for loop. Now that you refactored your code, your final Trigger.lua.txt script should look like this:

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
DCEI.LogMessage("Hello Lua!")

DCEI.CreateUnit(1, 1, hero_unit_name, 16, 16)

for key, value in ipairs(enemy_points) do
    DCEI.CreateUnit(-1, -1, enemy_unit_name, value[1], value[2])
end

```

Look at how clean and readable that code is now!

***

Tutorial Map: https://platform.wildsky.dev/arcade/game/624

[Next Up: Tutorial 1–5: Writing More Triggers In Lua](Tutorial-1%E2%80%935)
