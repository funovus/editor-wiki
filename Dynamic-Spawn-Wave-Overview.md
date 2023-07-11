This page covers the basics of the dynamic spawn wave triggers, allowing formations of units to be spawned on the fly. Dynamic waves require [waypoints](https://wiki.funovus.com/master/Tower-Defense-Feature-Overview#waypoints) to be used for spawn position. If the units being spawned use one of the `TD CREEP` AI behaviors, they will automatically begin moving down the lane in which they've spawned.

Download the example map [here](https://github.com/dctopspin/Wild-Modding/files/3899188/Example_DynamicWaveGeneration.zip).

### Overview

Three main functions are used to generate dynamic spawn waves.

- [Register Spawn Group](#register-spawn-group)
- [Add Spawn Wave](#add-spawn-wave)
- [Add Dynamic Spawn Waves](#add-dynamic-spawn-waves)

## Register Spawn Group
```lua
RegisterSpawnGroup(string name, List<SpawnGroupUnit> units)
```

This function is used to generate [Spawn Groups](https://wiki.funovus.com/master/Tower-Defense-Feature-Overview#spawn-groups) which can then be used in dynamic spawn waves. Note that this is optional, as you can also use spawn groups defined in data or simply a unit type and pattern. For more information see [Subgroups](https://wiki.funovus.com/master/Tower-Defense-Feature-Overview#spawn-waves).

The `name` parameter is simply a string that's used to reference the spawn group when adding to the spawn wave later.

The `units` parameter is a list of unit types, delays, and offsets that make up a spawn group, just like spawn groups in data.

![spawn group](https://user-images.githubusercontent.com/56179276/69764692-2119f480-1126-11ea-987c-eb2e52bc44f4.png)

To recreate the spawn group above in triggers, you would use the following:

```lua
local pattern = {
    name = "Goblin x3",
    group = {
        {
            unit = "Creep Goblin",
            delay = 0,
            offset = 0,
        },
        {
            unit = "Creep Goblin",
            delay = 1,
            offset = -0.25,
        },
        {
            unit = "Creep Goblin",
            delay = 1,
            offset = 0.25,
        }
    }
}

DCEI.RegisterSpawnGroup(pattern.name, pattern.group)
```

## Add Spawn Wave
```lua
AddSpawnWave(SpawnWaveOptions options)
```
This function is used to describe waves. The `options` parameter accepts a table with many specific attributes that match the same parameters available in [Spawn Waves](https://wiki.funovus.com/master/Tower-Defense-Feature-Overview#spawn-groups) data. It additionally accepts a `behaviors = {}` property, which can be used to apply stacks of behaviors to units as they spawn, which is useful in creating infinitely scaling waves (as you can increase health/damage infinitely based on wave number).

Example:
```lua
function GenerateNextWave()
    local wave_id = DCEI.TriggeringWaveId
    local groups = GenerateGroups(wave_id) -- we'll explain groups in a moment, but you'll have to generate them yourself

    local wave = {
            total_gold = 100 + 50 * wave_id, 
            bonus_gold = wave_id == 1 and 300 or 100,  -- sets bonus gold to 300 for 1st wave, 100 for subsequent
            start_delay = 1,
            call_wave_countdown = 30,
            groups = groups,
            behaviors = {
                -- Increase creep power for every 5 waves.
                {name = "MorePower", stack = math.floor(wave_id / 3)}
            }
        }
    DCEI.AddSpawnWave(wave)
end
```

`groups` takes a list of groups, matching the same parameters as [Subgroups](https://wiki.funovus.com/master/Tower-Defense-Feature-Overview#spawn-waves). Note that similar to a subgroup, each group can take either a `group_pattern` OR `unit

Example:
```lua
local groups = {}
local group = {
    route_name = "Main",
    initial_delay = 0,
    group_pattern = "Goblin x3",
    pattern = "Line long",
    count = 1
}

table.insert(groups, group)
```

## Add Dynamic Spawn Waves
```lua
AddDynamicSpawnWaves(int count, object callback)
```

This function is what actually adds dynamic waves to the game.

The `count` describes how many waves to generate (-1 for infinite waves) by calling the callback function this many times.

The `callback` is a callback function that should include `AddSpawnWave()`.

Example (using our `GenerateNextWave()` function from above):
```lua
DCEI.AddDynamicSpawnWaves(-1, GenerateNextWave)
```


