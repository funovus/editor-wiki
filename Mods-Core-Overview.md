# Core Overview

The Core Mod is used to quickly create, hookup, and manage game UI. This is best used when working with UI [created with XML](Ui-XML) but also supports script-created UI. It also comes with a number of handy UI templates such as red pips and big hand.

For [legacy projects](difference-between-latest-mods-gmui-and-legacy-mods-gmui), see the older version of this mod, [core](Mods-Legacy-core).

# [Documentation](Mods-Core)
All of the Core functionality is documented with annotations, meaning when once you include Core with `local Core = require("Core")` hovering over or typing the "Core." variable name will display help text about all of the contained classes and functions. These annotations have been exported as a wiki page of [Documentation](Mods-Core) as well.

# How to install:
First open the Project Settings Window and add Core as a registry dependency:
![image](https://user-images.githubusercontent.com/56179268/228280412-2df4f4ac-9017-46cf-93ef-7d662614813c.png)
Then include in your lua file with `local Core = require("Core")`

# Features
### functions
* Core.HideDefaultUi - Hides the default game-UI, such as wave and gold counter and ship spell menu
### [Color Class](Mods-Core#color)
* Class script for converting colors between different formats (hex, RGBA 0-255, RGBA 0-1)
### [Effect Class](Mods-Core#effect-1)
* Class script for manipulating effects
### [GameSpeed Class](Mods-Core#gamespeed)
* Class script for manipulating effects
### [Input Class](Mods-Core#input-1)
* Class script for controlling user input, e.g. virtual joysticks
### [Math Class](Mods-Core#math-1)
* Class script for performing math operations
### [Point Class](Mods-Core#point)
* Class script for manipulating game-points, e.g. `{x, y}` tables that correspond to positions on the in-game map
### [Random Class](Mods-Core#random-1)
* Class script for generating random values
### [String Class](Mods-Core#string-1)
* Class script for manipulating strings
### [Table Class](Mods-Core#table-1)
* Class script for manipulating lua tables and dictionaries
### [Timer Class](Mods-Core#timer)
* Timer class script useful for repeating, single-use, or infinite timers using game time, real time, or OS time.
* Can run functions on completion, every tick, or on a given condition. More performant than other methods of creating timers.
### [Unit Class](Mods-Core#unit)
* Class script for manipulating units
### [Util Class](Mods-Core#util-1)
* Class script for miscellaneous helper functions