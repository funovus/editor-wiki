### Requirements

This tutorial assumes that you know your basics with mods. [How to work with mods](https://github.com/dctopspin/Wild-Modding/wiki/T%E2%80%93101-Working-With-Mods) would be a good starting point if that is not the case for you.

It also assumes that you have a mod and a map ready and want to use triggers from your mod in your map.

### Example Setup

If you dont like reading or want a working example while you follow the tutorial, you can use this: 
[Workplace.zip](https://github.com/dctopspin/Wild-Modding/files/4252371/Workplace.zip)

# Setting up the mod's triggers

This tutorial is trying to create a mod to make UI editing easier, the concepts used here apply to all types of trigger mods though. Our starting mod's **trigger.lua.txt** file  is looking like this:

![Mod Starting Triggers](https://user-images.githubusercontent.com/16945537/75289640-02a7c000-581f-11ea-94e5-6c401162bb96.jpg)

To make the variable and the function accessible from the outside, we have to put them into a table and return this table at the end of our mod. To do this, put `local mod = {}` infront of your code and `return mod` at the end of it. Additionally, rename each variable you want to have accessible in your map from `local variableName = ...` to `mod.variableName = ...` and each function you want accessible from `function FunctionName() ...` to `function mod.FunctionName() ...`. Your mod should look somewhat like this:

![Mod End Triggers](https://user-images.githubusercontent.com/16945537/75289651-05a2b080-581f-11ea-844a-aff011610397.jpg)

Now your mod's triggers are useable from a map!

# Using your mod's triggers from a map

To access the stuff we just made accessible, you have to open your map's **trigger.lua.txt** file and add `local myMod = GameModules["Mods/My Mod"]` at the top. `myMod` can be changed to your choice and `Mods/My Mod` should be the same path you have put into your map's **dependencies** field to make it use your mod. Now all the stuff from your mod's triggers file that you put into the table is accessible in the map's trigger file using the `myMod` variable. This could look something like this:

![Map Triggers](https://user-images.githubusercontent.com/16945537/75291667-f4f43980-5822-11ea-9141-933ab7ca1870.jpg)

Congratulations! You are now using triggers from your mod inside your map.