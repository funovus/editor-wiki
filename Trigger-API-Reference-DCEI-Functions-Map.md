<div id="toc" markdown="1">
- [Trigger API Reference\DCEI Functions\Map](#trigger-api-referencedcei-functionsmap)
  * [GetLevel](#getlevel-0)
  * [GetLevelName](#getlevelname-0)
  * [PlayLevel](#playlevel-4)
  * [GetPlayLevelData](#getplayleveldata-0)

</div>

***

# [Trigger API Reference](Trigger-API-Reference)\\DCEI Functions\Map {Trigger-API-ReferenceDCEI-FunctionsMap}

[](overview-start)

[](overview-end)

## string GetLevel() {getlevel-0}
```cs
string GetLevel()
```
#### Description
[](description-start)
Get the name of the level being played
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function UpgradeCreeps()
    if DCEI.GetLevel() ~= "Events/Fire03_Easter/Maryn_Leviathan_Typhoon/Level09" then
        DCEI.LogMessage(DCEI.GetLevel())
    end
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## string GetLevelName() {getlevelname-0}
```cs
string GetLevelName()
```
#### Description
[](description-start)
Returns the published name of the map.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local level_name = DCEI.GetLevelName()
DCEI.LogMessage(level_name)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void PlayLevel(string path, string projectName, string data = null, object usedUnits = null) {playlevel-4}
```cs
void PlayLevel(string path, string projectName, string data = null, object usedUnits = null)
```
#### Description
[](description-start)
Loads and plays the given map. The map to load must be within the same project.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `path` the path to the map, or just the map name if both maps are in the same folder.
- *string* `data` any data that is passed to the new level.
- *object* `usedUnits` a table declaring any units used by the new level, if not declared locally already.

[](parameters-end)

#### Example Usage
[](example-usage-start)

[](example-usage-end)

[](extra-section-start)
```lua
DCEI.PlayLevel("Workshop 02 - Debugging & Foundations", nil, nil, nil)
```
[](extra-section-end)

## string GetPlayLevelData() {getplayleveldata-0}
```cs
string GetPlayLevelData()
```
#### Description
[](description-start)
Returns the play level data.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local level_data = DCEI.GetPlayLevelData()
DCEI.LogMessage(level_data)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

