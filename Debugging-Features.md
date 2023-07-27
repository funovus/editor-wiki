
<table><tbody><tr></tr><tr><td><details>
<summary><b> Table of Contents</b></summary><hr>

<div markdown="1">
- [Play Window Debugging](#play-window-debugging)
  * [Debug Shortcuts](#debug-shortcuts)
  * [Is Dev Setting](#is-dev-setting)
  * [Text Commands](#text-commands)
- [Trigger Debugging](#trigger-debugging)
  * [Trigger Logging](#trigger-logging)
  * [Trigger Profile](#trigger-profile)
- [Data Debugging](#data-debugging)
  * [Debug Draw](#debug-draw)
  * [Actor Logging](#actor-logging)

</div>
</details></td></tr></tbody></table>

***
## Play Window Debugging

### Debug Shortcuts
The following keys are tied to debug settings by default:
- `P`: Pauses/unpauses the simulation
- `N`: Advances the simulation by 1 frame (while paused)
- `Page Up`: Increases simulation speed
- `Page Down`: Decreases simulation speed
- `+`: Increase gold for local player by 1000
- `Shift` + `+`: Increase gold for local player by 100000
- `Alt` + `Left Click`: Free move camera rotation
### Is Dev Setting
You can enable the in-game debug window by selecting the "Is Dev" setting in the Play Settings Window (`Ctrl+Shift+L`).

![play settings](https://user-images.githubusercontent.com/56179276/67725875-20643600-f9a1-11e9-81b0-610ab49b69e7.png)

The most useful of these settings is the "Selected Unit Info" setting, which gives you a plethora of information about the currently highlighted unit.

![ingame debug](https://user-images.githubusercontent.com/56179276/67726372-dd0ac700-f9a2-11e9-8b29-6dd4a4fad759.png)


### Text Commands
Using the "Is Dev" setting also allows you to send text commands by pressing "Enter" in the Play Window. These commands can trigger events via [DCEI.TriggerAdddTextCommandEvent()](Trigger-API-Reference-DCEI-Events-Input#triggeraddtextcommandevent-1).

## Trigger Debugging

### Trigger Logging
The quickest way to debug your lua triggers is often through the use of log messages. Lots and lots of descriptive log messages (depending on the complexity of your script). Example:

```lua
if thing_thats_supposed_to_happen then
    DCEI.LogMessage("> thing happened successfully")
else
    DCEI.LogMessage("> thing failed to happen")
end
```

You can also use the Core LogDump functions to print the contents of a table. Example:

```lua
local Core = require("Core")

local some_table = {
    position = { x = 11, y = 12 },
    name = "Goblin",
    level = 11
}

-- logs the contents of the table
Core.Util.LogDumpSimple(some_table)

-- logs the contents of the table and any nested tables
Core.Util.LogDump(some_table)
```

### Trigger Profile
Press F6 in the Play Window to dump a log file (search for "Trigger profiling" in player logs). It contains info about how many times each trigger API has been called and the total time spent in these trigger API calls.

## Data Debugging

### Debug Draw
For effects, the easiest way to debug complicated effect trees is to use area searches with [Debug Draw](Data-Effect-Area-Search#debug-draw) enabled.

### Actor Logging
For actors, you can use the [Log action](Data-ActorEvent#log) to print messages to the Player Logs Window, similar to trigger debugging.