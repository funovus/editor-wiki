This guide assumes that you already know how to work with mods within your map. If you do not know how, I recommend reading these:
- [Working With Mods](https://github.com/dctopspin/Wild-Modding/wiki/T%E2%80%93101-Working-With-Mods)
- [Using Triggers From A Mod](https://github.com/dctopspin/Wild-Modding/wiki/T%E2%80%93102-Using-Triggers-From-A-Mod)

***
# Caveats/Untested stuff
There are some things that map transitioning cannot do
- It does not save your "mod/game state" i.e variables current value, when transitioning. This can be mitigated by using the save/load functions [https://github.com/dctopspin/Wild-Modding/wiki/Trigger-API-Reference-DCEI-Functions-Save](https://github.com/dctopspin/Wild-Modding/wiki/Trigger-API-Reference-DCEI-Functions-Save)
- I have not tested this, but i'm not sure how the map handles pre-placed units

# Structure/Map Setup
Your folder setup should look like this:
```
Maps/
 - Level 1
 - Level 2
 - Level 3

Mods/
 - Main

.dreameditor
```

Each map **MUST** have the same dependencies & include NO Data objects (i.e units, abilities). A good way to go about this is by setting every map's dependencies to your main mod.
![](https://i.imgur.com/4if61wg.png)

Then within your main mod you can include all your transition maps & any other dependencies you may need. 
![](https://i.imgur.com/gcy1yeV.png)

# Loading Different Levels
The bread and butter of this operation revolves around this function `DCEI.PlayLevel(string path, string displayName)`
- `string path` refers to the location this level is located, the path to said level starts in your root directory, so if its located within `Maps`, the correct path would be `Maps/Level 1`
- `string displayName` refers to the displayName you which to associate with this. (*Currently I have no use for this, or where it displays so i leave it blank)

## Example: Loading Specific Map
```
DCEI.PlayLevel("Maps/Level 1", "Level 1")
```
## Example: Loading Random Map
```
local randomMaps = {
    {
        name = "level 1",
        path = "Maps/Level 1"
    },
    {
        name = "level 2",
        path = "Maps/Level 2"
    },
    {
        name = "level 3",
        path = "Maps/Level 3"
    }
}

function playRandomMap()
    local r_int = randomMaps[math.random(#randomMaps)]
    DCEI.PlayLevel(r_int.path, r_int.name)
end
```

# Example: Demo

Attached is a demo of loading a different map every 5 seconds. Please use this as a reference on how this are structured & organized

[Transition-Level Example](https://drive.google.com/file/d/1tG9dy0bpo8bS35szqTHuIY7o3yLbpky6/view?usp=sharing)

