<div id="toc" markdown="1">
- [Trigger API Reference\DCEI Functions\Region](#trigger-api-referencedcei-functionsregion)
  * [CreateRegion](#createregion-4)
  * [RemoveRegion](#removeregion-1)
  * [FindRegion](#findregion-1)
  * [RegionExists](#regionexists-1)
  * [GetRegionName](#getregionname-1)
  * [GetRandomPointInRegion](#getrandompointinregion-1)
  * [GetCenterOfRegion](#getcenterofregion-1)
  * [GetSizeOfRegion](#getsizeofregion-1)
  * [CheckPointInRegion](#checkpointinregion-3)
  * [GetUnitsInRegion](#getunitsinregion-1)
  * [HideRegion](#hideregion-1)
  * [RevealRegion](#revealregion-1)
  * [MoveRegion](#moveregion-3)

</div>

***

# [Trigger API Reference](Trigger-API-Reference)\\DCEI Functions\Region {Trigger-API-ReferenceDCEI-FunctionsRegion}

[](overview-start)

[](overview-end)

## Region CreateRegion(float x, float z, float w, float h) {createregion-4}
```cs
Region CreateRegion(float x, float z, float w, float h)
```
#### Description
[](description-start)
Creates a dynamic region.
[](description-end)

#### Parameters
[](parameters-start)
- *float* `x` the x coordinate of the new region.
- *float* `z` the z coordinate of the new region.
- *float* `w` the width of the new region.
- *float* `h` the height of the new region.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local region = DCEI.CreateRegion(16, 16, 4, 4)
local random_point = DCEI.GetRandomPointInRegion(region)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void RemoveRegion(Region region) {removeregion-1}
```cs
void RemoveRegion(Region region)
```
#### Description
[](description-start)
Removes a region.
[](description-end)

#### Parameters
[](parameters-start)
- *[Region](Trigger-API-Reference-DCEI-Types#region)* `region` region to remove

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function OnRegionLeave()
    local r = DCEI.TriggeringRegion
    DCEI.RemoveRegion(r)
end

DCEI.TriggerAddUnitEnterRegionEvent(DCEI.UnitAny, region, OnRegionLeave)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## Region FindRegion(string name) {findregion-1}
```cs
Region FindRegion(string name)
```
#### Description
[](description-start)
Returns a region by name. Currently only works for regions pre-placed in the Terrain Window.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `name` the name of the existing region to return.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local region = DCEI.FindRegion("region_a")
local center_point = DCEI.GetCenterOfRegion(region)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## bool RegionExists(string name) {regionexists-1}
```cs
bool RegionExists(string name)
```
#### Description
[](description-start)
Returns true if the region exists. Currently only works for regions pre-placed in the Terrain Window.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `name` name of the region to check.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function OnRegionEnter()
  SCORE = SCORE + 1
end

local region = DCEI.FindRegion("region_a")
if DCEI.RegionExists(region) then
    DCEI.TriggerAddUnitEnterRegionEvent(DCEI.UnitAny, region, OnRegionEnter)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## string GetRegionName(Region region) {getregionname-1}
```cs
string GetRegionName(Region region)
```
#### Description
[](description-start)
Returns the name of a region. Currently only works for regions pre-placed in the Terrain Window.
[](description-end)

#### Parameters
[](parameters-start)
- *[Region](Trigger-API-Reference-DCEI-Types#region)* `region` the region to get the name of.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function OnRegionEnter()
    local u = DCEI.TriggeringUnit
    local r = DCEI.TriggeringRegion

    local region_name = DCEI.RegionName(r)
    if region_name = "goal_region" then
        SCORE = SCORE + 1
    end
end

DCEI.TriggerAddUnitEnterRegionEvent(DCEI.UnitAny, DCEI.RegionAny, OnRegionEnter)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## Float2 GetRandomPointInRegion(Region region) {getrandompointinregion-1}
```cs
Float2 GetRandomPointInRegion(Region region)
```
#### Description
[](description-start)
Returns the coordinates of a random point in the region.
[](description-end)

#### Parameters
[](parameters-start)
- *[Region](Trigger-API-Reference-DCEI-Types#region)* `region` the region to find a random point in.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local region = DCEI.CreateRegion(16, 16, 4, 4)
local random_point = DCEI.GetRandomPointInRegion(region)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## Float2 GetCenterOfRegion(Region region) {getcenterofregion-1}
```cs
Float2 GetCenterOfRegion(Region region)
```
#### Description
[](description-start)
Returns the coordinates of the center point of the region.
[](description-end)

#### Parameters
[](parameters-start)
- *[Region](Trigger-API-Reference-DCEI-Types#region)* `region` the region to find the center point of.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local region = DCEI.CreateRegion(16, 16, 4, 4)
local center_point = DCEI.GetCenterOfRegion(region)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## Float2 GetSizeOfRegion(Region region) {getsizeofregion-1}
```cs
Float2 GetSizeOfRegion(Region region)
```
#### Description
[](description-start)
Returns the X and Y dimensions of the region.
[](description-end)

#### Parameters
[](parameters-start)
- *[Region](Trigger-API-Reference-DCEI-Types#region)* `region` the region to find the dimensions of.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local region = DCEI.CreateRegion(16, 16, 4, 4)
local region_size = DCEI.GetSizeOfRegion(region)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## bool CheckPointInRegion(Region region, float x, float z) {checkpointinregion-3}
```cs
bool CheckPointInRegion(Region region, float x, float z)
```
#### Description
[](description-start)
Returns true if coordinates are within the region.
[](description-end)

#### Parameters
[](parameters-start)
- *[Region](Trigger-API-Reference-DCEI-Types#region)* `region` the region to find the dimensions of.
- *float* `x` the x coordinate of the point.
- *float* `z` the z coordinate of the point.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
    local SCORE = 0
    local region = DCEI.CreateRegion(16, 16, 4, 4)

    if DCEI.CheckPointInRegion(region, 14, 18) then
        SCORE = SCORE + 1
    end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## object GetUnitsInRegion(Region region) {getunitsinregion-1}
```cs
object GetUnitsInRegion(Region region)
```
#### Description
[](description-start)
Returns a table of the units within the region.
[](description-end)

#### Parameters
[](parameters-start)
- *[Region](Trigger-API-Reference-DCEI-Types#region)* `region` the region to find the units within.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local region = DCEI.CreateRegion(16, 16, 4, 4)
local units_in_region = DCEI.GetUnitsInRegion(region)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void HideRegion(Region region) {hideregion-1}
```cs
void HideRegion(Region region)
```
#### Description
[](description-start)
Obscures the region on the map from the player.
[](description-end)

#### Parameters
[](parameters-start)
- *[Region](Trigger-API-Reference-DCEI-Types#region)* `region` the region to obscure (creates fog of war).

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local region = DCEI.CreateRegion(16, 16, 4, 4)
DCEI.HideRegion(region)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void RevealRegion(Region region) {revealregion-1}
```cs
void RevealRegion(Region region)
```
#### Description
[](description-start)
Reveals a previously hidden region on the map to the player (clears fog of war).
[](description-end)

#### Parameters
[](parameters-start)
- *[Region](Trigger-API-Reference-DCEI-Types#region)* `region` the region to reveal.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local region = DCEI.CreateRegion(16, 16, 4, 4)
DCEI.HideRegion(region)
DCEI.RevealRegion(region)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void MoveRegion(Region region, float x, float z) {moveregion-3}
```cs
void MoveRegion(Region region, float x, float z)
```
#### Description
[](description-start)
Moves the center of the region to the specified coordinates.
[](description-end)

#### Parameters
[](parameters-start)
- *[Region](Trigger-API-Reference-DCEI-Types#region)* `region` the region to move.
- *float* `x` the x coordinate to move the region to.
- *float* `z` the z coordinate to move the region to.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local region = DCEI.CreateRegion(16, 16, 4, 4)
DCEI.MoveRegion(region, 10, 10)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

