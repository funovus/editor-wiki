<table><tbody><tr></tr><tr><td><details>
<summary><b> Table of Contents</b></summary><hr>

<div markdown="1">
- [What should I do if saving doesn’t work?](#what-should-i-do-if-saving-doesn-t-work-)
- [Why there is a VS Code warning pop up when installing the editor?](#why-there-is-a-vs-code-warning-pop-up-when-installing-the-editor-)
- [How can I get units found by a search effect in Lua?](#how-can-i-get-units-found-by-a-search-effect-in-lua-)
- [Why is my ranged ability not working?](#why-is-my-ranged-ability-not-working-)
- [How can I make a knockback effect?](#how-can-i-make-a-knockback-effect-)
- [How can I apply multiple effects at the same time?](#how-can-i-apply-multiple-effects-at-the-same-time-)

</div>
</details></td></tr></tbody></table>

## What should I do if the editor doesn't install correctly?
Sometimes Windows or a firewall/anti-virus limits the permissions of the installer, preventing it from installing correctly.
You can run uninstall the editor, disable your anti-virus and run the installer as an administrator.

If that doesn't work, you can try downloading the editor as a .zip folder and unzipping it rather than using an installer, using the download link at: https://www.notion.so/funovus/Old-Editor-Versions-d58e197fbee2442c88ced370cdde991b?pvs=4

## What if I get "invalid token" or can't login?
This means your email address isn't authenticated to login to the editor, either because the wrong address was used or your credentials expired. Email editor-support@funovus.com and ask for your login credentials to be extended.  

## What should I do if saving doesn’t work?

The editor can sometimes fail to save if the Terrain Window crashes. You can usually close the Terrain Window (while keeping other windows like Data open) and try saving again. 


## Why there is a VS Code warning pop up when installing the editor?

The editor installation comes with a VS Code plugin for API reference and auto-completion for our Lua scripting system. Feel free to ignore this warning as it won't have any effect on the installation.

## The editor isn't automatically detecting my VS Code install, how do I fix it?

![image](https://user-images.githubusercontent.com/65057459/188967249-0310c8c2-0eb7-46f7-b6e2-18c699a4e4d5.png)
In Player Settings (`Ctrl+Shift+L`), type in your VS Code .exe file path like this. Associating VS Code lets you click on any error message in the Player Log to jump to the relevant line in Lua script.

## How do I get auto complete for all the DCEI APIs?

![image](https://user-images.githubusercontent.com/65057459/188985876-8fde2c92-e4a5-4cf2-b82b-b82ba5be826b.png)
The editor's VS Code plugin provides auto-complete and documentation for all the DCEI APIs. The plguin should automatically install when installing the editor if you have VS Code installed. If it's not working, first make sure you have VS Code installed and then try reinstalling the editor.
letion for our Lua scripting system. Feel free to ignore this warning as it won't have any effect on the installation.

## What is a "Unit" in script? How do I make a unit use an ability in script?

Creating a unit in the Data Window creates a definition for that unit type (like a template). To actually get the unit into the game, you can create an instance of that unit in the Terrain Window with the unit brush or with `DCEI.CreateUnit()` in script.

You can get access to pre-placed units in Terrain in script with `DCEI.FindUnit()`, or simply get the unit reference returned from `DCEI.CreateUnit()` like this:
```lua
local hero_name = DCEI.Unit("IceMage")
local hero = DCEI.CreateUnit(0, 0, hero_name, 8, 8, 0, 1)
DCEI.CastAbilityAtPosition(ability_name, hero, 10, 10)
```

NOTE: `DCEI.Unit` is not a reference to the unit. It is only telling the engine to preload the unit into cache so it can be used later.

## Where can I add custom inputs for specific keys?

![image](https://user-images.githubusercontent.com/65057459/188987238-abaa734e-067f-437d-867d-6e41728e1cd7.png)

Custom key mappings can be defined the Project Settings Window. You can use the [DCEI.TriggerAddMappedKeyDownEvent()](Trigger-API-Reference-DCEI-Events-Input#triggeraddmappedkeydownevent-2) trigger event to capture input events for such keys.

## How can I get units found by a search effect in Lua?

You can make the area search apply a behavior and add units with the behavior to a list, such as:

```lua
function OnUnitBehaviorAdd()
    local u = DCEI.TriggeringUnit
    local b = DCEI.TriggeringBehaviorName

    local search_list = {}
    local search_behavior = DCEI.Behavior("MySearchBehavior")
    if b = search_behavior then
        -- add units with the behavior to the list
        table.insert(search_list, u)

        -- remove the behavior so it can be applied again
        local stack_count = DCEI.GetUnitBehaviorStackCount(u, search_behavior)
        DCEI.RemoveBehavior(u, search_behavior, stack_count)
    end
end

DCEI.TriggerAddBehaviorAddEvent(DCEI.UnitAny, OnUnitBehaviorAdd)
```


## Why is my ranged ability not working?

There are a few reasons an ability may fail to cast:
- Check if the range is set
- Check if the arc is set and the caster is able to turn
- Check if the cost is set and the caster has required resources

If you've checked each of these and your ability still isn't working, let us know and we can take a look.


## How do I make a knockback effect?

We often use the [Launch Missile](Data-Effect-Launch-Missile) effect to create knockbacks. The typical data pattern is
- Create a launch missile effect and keep the **Missile Unit** as "None" (this will launch the effect target)
- Set the **Launch Location** to "Target Unit"
- Apply the launch missile effect to the unit you want to knock back

You can also use this pattern to create "jump"-like abilities (setting the **Launch Location** as "Source Unit").

![image](https://user-images.githubusercontent.com/65057459/179045386-205b2942-2d74-4406-a295-4ec1738ecd75.png)


## How can I apply multiple effects at the same time?

Use a [Set](Data-Effect-Set) effect.

![image](https://user-images.githubusercontent.com/65057459/179045162-f4f84cdc-6d51-48f0-bc6e-610d68096cc6.png)

## How do I separate my lua script into multiple files?

First, add a new script file under your map's `/Assets/Scripts/` folder, such as `GameUI.lua.txt`. Note that the `.lua.txt` extension is required (see: [Getting Started with Lua](https://wiki.editor.funovus.com/release/Tutorial-1%E2%80%93#1-getting-started-with-lua) for more info about file associations).

In this script write:
```lua
local GameUI = {}

DCEI.LogMessage("> Loaded Game UI Script")

return GameUI
```

Next, import the file in your main script with `require`, such as:

```lua
local GameUI = require("GameUI")
```

You can now write scripts in your new script file that will get executed when your game runs.