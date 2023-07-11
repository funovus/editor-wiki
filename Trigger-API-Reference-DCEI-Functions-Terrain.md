<div id="toc" markdown="1">
- [Trigger API Reference\DCEI Functions\Terrain](#trigger-api-referencedcei-functionsterrain)
  * [EnableRoute](#enableroute-2)
  * [GetMapSize](#getmapsize-0)
  * [GetMapCenterPoint](#getmapcenterpoint-0)
  * [GetTerrainTypeAtPoint](#getterraintypeatpoint-2)
  * [GetTerrainHeightAtPoint](#getterrainheightatpoint-2)
  * [ChangePropLayerDisplay](#changeproplayerdisplay-2)
  * [LoadPropLayer](#loadproplayer-2)
  * [UnloadPropLayer](#unloadproplayer-1)
  * [GetPropLayerLoadStatus](#getproplayerloadstatus-1)
  * [GetTerrainChunkPosition](#getterrainchunkposition-1)
  * [SetTerrainChunkPosition](#setterrainchunkposition-2)
  * [SetTerrainChunkPositionWithInterpolation](#setterrainchunkpositionwithinterpolation-3)
  * [InstantiateTerrainChunk](#instantiateterrainchunk-2)
  * [DestroyTerrainChunkInstance](#destroyterrainchunkinstance-1)
  * [GetTerrainChunkInstancePosition](#getterrainchunkinstanceposition-1)
  * [SetTerrainChunkInstancePosition](#setterrainchunkinstanceposition-2)
  * [SetTerrainChunkInstancePositionWithInterpolation](#setterrainchunkinstancepositionwithinterpolation-3)
  * [GetWeather](#getweather-0)
  * [SetWeather](#setweather-2)
  * [GetTimeOfTheDay](#gettimeoftheday-0)
  * [SetTimeOfTheDay](#settimeoftheday-2)
  * [GetCurrentLightColor](#getcurrentlightcolor-0)
  * [SetOverrideLightColor](#setoverridelightcolor-2)
  * [SetSkyboxColor](#setskyboxcolor-2)
  * [ResetSkyboxColor](#resetskyboxcolor-1)
  * [AddLine](#addline-5)
  * [AddLineWithSprite](#addlinewithsprite-6)
  * [RemoveLine](#removeline-1)
  * [MoveLineWithInterpolation](#movelinewithinterpolation-4)
  * [RemoveAllLines](#removealllines-0)
  * [ChangeLineColor](#changelinecolor-2)
  * [ChangeLineDisplay](#changelinedisplay-2)
  * [AddGrid](#addgrid-8)
  * [AddGridWithSprite](#addgridwithsprite-9)
  * [RemoveGrid](#removegrid-1)
  * [SetBlurredScreenCaptureAsBackground](#setblurredscreencaptureasbackground-2)

</div>

***

# [Trigger API Reference](Trigger-API-Reference)\\DCEI Functions\Terrain {Trigger-API-ReferenceDCEI-FunctionsTerrain}

[](overview-start)

[](overview-end)

## void EnableRoute(string routeName, bool enable) {enableroute-2}
```cs
void EnableRoute(string routeName, bool enable)
```
#### Description
[](description-start)
Enable/disable a waypoints route according to route name.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `routeName` the name of the route.
- *bool* `enable` if true, enabel the route.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.EnableRoute("test_route", true)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## Float2 GetMapSize() {getmapsize-0}
```cs
Float2 GetMapSize()
```
#### Description
[](description-start)
Returns the X and Z dimensions of the map.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local map_dim = DCEI.GetMapSize()
DCEI.LogMessage("Map Dim X: " .. map_dim.x .. " Map Dim Z: " .. map_dim.y)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## Float2 GetMapCenterPoint() {getmapcenterpoint-0}
```cs
Float2 GetMapCenterPoint()
```
#### Description
[](description-start)
Returns the X and Z coordinates of the center of the map.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local map_center = DCEI.GetMapCenterPoint()
DCEI.LogMessage("Map Center X: " .. map_center.x .. " Map Center Z: " .. map_center.y)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## int GetTerrainTypeAtPoint(float x, float z) {getterraintypeatpoint-2}
```cs
int GetTerrainTypeAtPoint(float x, float z)
```
#### Description
[](description-start)
Returns the terrain type at the given point. Returns 0-4 depending on the texture painted at the point, with 0 being the default texture. Ignores terrain features such as cliffs, borders, and water - this returns the texture that would otherwise be painted on the tile.
[](description-end)

#### Parameters
[](parameters-start)
- *float* `x` the X coordinate of the point.
- *float* `z` the Z coordinate of the point.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local terrain_type = DCEI.GetTerrainTypeAtPoint(16, 16)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## float GetTerrainHeightAtPoint(float x, float z) {getterrainheightatpoint-2}
```cs
float GetTerrainHeightAtPoint(float x, float z)
```
#### Description
[](description-start)
Returns the terrain height at the given point. Values can range from 5 to -5. Default terrain height is 0, border height defaults to -1. Ignores water height.
[](description-end)

#### Parameters
[](parameters-start)
- *float* `x` the X coordinate of the point.
- *float* `z` the Z coordinate of the point.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local terrain_height = DCEI.GetTerrainHeightAtPoint(16, 16)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ChangePropLayerDisplay(string layerName, bool display) {changeproplayerdisplay-2}
```cs
void ChangePropLayerDisplay(string layerName, bool display)
```
#### Description
[](description-start)
Enables or disables the display of a prop player.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `layerName` the name of the layer.
- *bool* `display` if true, display the prop layer, otherwise hide the prop layer.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.ChangePropLayerDisplay("layer_1", false)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void LoadPropLayer(string layerName, bool initialDisplay) {loadproplayer-2}
```cs
void LoadPropLayer(string layerName, bool initialDisplay)
```
#### Description
[](description-start)
Loads the prop layer into memory. If prop layer has already been loaded, does nothing. Layers may need to be unloaded via [UnloadPropLayer](#unloadproplayer-1) first.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `layerName` the name of the layer.
- *bool* `initialDisplay` set to true/false to show or hide the prop layer initially.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function OnRegionEnter()
    DCEI.LoadPropLayer("layer_1", true)
end

DCEI.UnloadPropLayer("layer_1")
DCEI.TriggerAddUnitEnterRegionEvent(DCEI.UnitAny, DCEI.RegionAny, OnRegionEnter)
```
[](example-usage-end)

[](extra-section-start)
 #### Related
- [UnloadPropLayer](#unloadproplayer-1)
- [GetPropLayerLoadStatus](#getproplayerloadstatus-1)
[](extra-section-end)

## void UnloadPropLayer(string layerName) {unloadproplayer-1}
```cs
void UnloadPropLayer(string layerName)
```
#### Description
[](description-start)
Unloads the given prop layer from memory, preventing it from being displayed. Prop layers unloaded can be reloaded via [LoadPropLayer](Trigger-API-Reference-DCEI-Functions-Terrain#loadproplayer-2).
[](description-end)

#### Parameters
[](parameters-start)
- *string* `layerName` the name of the layer.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function OnRegionEnter()
    DCEI.LoadPropLayer("layer_1", true)
end

DCEI.UnloadPropLayer("layer_1")
DCEI.TriggerAddUnitEnterRegionEvent(DCEI.UnitAny, DCEI.RegionAny, OnRegionEnter)
```
[](example-usage-end)

[](extra-section-start)
 #### Related
- [LoadPropLayer](Trigger-API-Reference-DCEI-Functions-Terrain#loadproplayer-2)
- [GetPropLayerLoadStatus](#getproplayerloadstatus-1)
[](extra-section-end)

## bool GetPropLayerLoadStatus(string layerName) {getproplayerloadstatus-1}
```cs
bool GetPropLayerLoadStatus(string layerName)
```
#### Description
[](description-start)
Returns true if given prop layer is loaded.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `layerName` the name of the layer.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function OnRegionEnter()
    DCEI.LoadPropLayer("layer_1", true)
    DCEI.LogMessage(tostring(DCEI.GetPropLayerLoadStatus("layer_2")))
end

DCEI.UnloadPropLayer("layer_1")
DCEI.TriggerAddUnitEnterRegionEvent(DCEI.UnitAny, DCEI.RegionAny, OnRegionEnter)
```
[](example-usage-end)

[](extra-section-start)
 #### Related
- [UnloadPropLayer](Trigger-API-Reference-DCEI-Functions-Terrain#unloadproplayer-1)
- [LoadPropLayer](Trigger-API-Reference-DCEI-Functions-Terrain#loadproplayer-2)
[](extra-section-end)

## Float3 GetTerrainChunkPosition(string chunkName) {getterrainchunkposition-1}
```cs
Float3 GetTerrainChunkPosition(string chunkName)
```
#### Description
[](description-start)
Returns the [3D position](Trigger-API-Reference-DCEI-Types#float3) of a terrain chunk.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `chunkName` the name of the terrain chunk.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local terrain_chunk_pos = DCEI.GetTerrainChunkPosition("terrain_chunk_0")
DCEI.LogMessage("X: " .. terrain_chunk_pos.x)
DCEI.LogMessage("Y: " .. terrain_chunk_pos.y)
DCEI.LogMessage("Z: " .. terrain_chunk_pos.z)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## bool SetTerrainChunkPosition(string chunkName, Float3 pos) {setterrainchunkposition-2}
```cs
bool SetTerrainChunkPosition(string chunkName, Float3 pos)
```
#### Description
[](description-start)
Sets the [position](Trigger-API-Reference-DCEI-Types#float2) of a terrain chunk. Returns true if the terrain chunk position was set successfully. 
[](description-end)

#### Parameters
[](parameters-start)
- *string* `chunkName` the name of the terrain chunk.
- *[Float3](Trigger-API-Reference-DCEI-Types#float3)* `pos` the new coordinates for the center of the terrain chunk.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.LogMessage(tostring(DCEI.SetTerrainChunkPosition("terrain_chunk_0", {x = 16, y = -1, z = 16})))
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## bool SetTerrainChunkPositionWithInterpolation(string chunkName, Float3 pos, float duration) {setterrainchunkpositionwithinterpolation-3}
```cs
bool SetTerrainChunkPositionWithInterpolation(string chunkName, Float3 pos, float duration)
```
#### Description
[](description-start)
Sets the [3D position](Trigger-API-Reference-DCEI-Types#float3) of a terrain chunk while animating it to that position. Returns true if the position was set successfully.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `chunkName` the name of the terrain chunk.
- *[Float3](Trigger-API-Reference-DCEI-Types#float3)* `pos` the new coordinates for the center of the terrain chunk.
- *float* `duration` the time taken for the terrain chunk to reach its destination.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.LogMessage(tostring(DCEI.SetTerrainChunkPositionWithInterpolation("terrain_chunk_0", {x = 16, y = -1, z = 16}, 5)))
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## int InstantiateTerrainChunk(string chunkName, Float3 pos) {instantiateterrainchunk-2}
```cs
int InstantiateTerrainChunk(string chunkName, Float3 pos)
```
#### Description
[](description-start)
Instantiates a terrain chunk at the given location and returns the instanceId of the terrain chunk instance. Returns 0 on failure.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `chunkName` the name of the terrain chunk to create an instance of.
- *[Float3](Trigger-API-Reference-DCEI-Types#float3)* `pos` the coordinates for the center of the terrain chunk instance.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local terrain_chunk_instance = DCEI.InstantiateTerrainChunk("terrain_chunk_0", {x = 16.5, y = -1.1, z = 16.5})
DCEI.LogMessage("Terrain Chunk instance ID: " .. terrain_chunk_instance)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void DestroyTerrainChunkInstance(int instanceId) {destroyterrainchunkinstance-1}
```cs
void DestroyTerrainChunkInstance(int instanceId)
```
#### Description
[](description-start)
Destroys a terrain chunk instance.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `instanceId` the instanceId assigned to the terrain chunk instance.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.DestroyTerrainChunkInstance(1)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## Float3 GetTerrainChunkInstancePosition(int instanceId) {getterrainchunkinstanceposition-1}
```cs
Float3 GetTerrainChunkInstancePosition(int instanceId)
```
#### Description
[](description-start)
Returns the [3D position](Trigger-API-Reference-DCEI-Types#float3) of a terrain chunk instance.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `instanceId` the instanceId assigned to the terrain chunk instance.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local terrain_chunk_position = DCEI.GetTerrainChunkInstancePosition(1)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## bool SetTerrainChunkInstancePosition(int instanceId, Float3 pos) {setterrainchunkinstanceposition-2}
```cs
bool SetTerrainChunkInstancePosition(int instanceId, Float3 pos)
```
#### Description
[](description-start)
Sets the [3D position](Trigger-API-Reference-DCEI-Types#float3) of a terrain chunk instance. Returns true if the position was set successfully.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `instanceId` the instanceId assigned to the terrain chunk instance.
- *[Float3](Trigger-API-Reference-DCEI-Types#float3)* `pos` the new coordinates for the center of the terrain chunk instance.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.LogMessage(tostring(DCEI.SetTerrainChunkInstancePosition(1, {x = 11.5, y = 0.4, z = 14.5})))
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## bool SetTerrainChunkInstancePositionWithInterpolation(int instanceId, Float3 pos, float duration) {setterrainchunkinstancepositionwithinterpolation-3}
```cs
bool SetTerrainChunkInstancePositionWithInterpolation(int instanceId, Float3 pos, float duration)
```
#### Description
[](description-start)
Sets the [3D position](Trigger-API-Reference-DCEI-Types#float3) of a terrain chunk instance while animating it to that position. Returns true if the position was set successfully.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `instanceId` the instanceId assigned to the terrain chunk instance.
- *[Float3](Trigger-API-Reference-DCEI-Types#float3)* `pos` the new coordinates for the center of the terrain chunk instance.
- *float* `duration` the time taken for the terrain chunk instance to reach its destination.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.LogMessage(tostring(DCEI.SetTerrainChunkInstancePositionWithInterpolation(1, {x = 12.5, y = 3, z = 12.5}, 5)))
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## int GetWeather() {getweather-0}
```cs
int GetWeather()
```
#### Description
[](description-start)
Returns an integer corresponding to the weather. Does not detect the heatwave option.
0 - None
1 - Rain
2 - Snow
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local weather = DCEI.GetWeather()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetWeather(int weatherStatus, float duration = 4) {setweather-2}
```cs
void SetWeather(int weatherStatus, float duration = 4)
```
#### Description
[](description-start)
Sets a weather status over the given duration. Use 0 for an instant transition. Cannot set the heatwave option.
0 - None
1 - Rain
2 - Snow
[](description-end)

#### Parameters
[](parameters-start)
- *int* `weatherStatus` the integer corresponding to a weather status.
- *float* `duration` the transition duration.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.SetWeather(1, 50)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## int GetTimeOfTheDay() {gettimeoftheday-0}
```cs
int GetTimeOfTheDay()
```
#### Description
[](description-start)
Returns an integer corresponding to the time of the day.
0 - Noon
1 - Night
2 - Void
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local time_lighting = DCEI.DCEI.GetTimeOfTheDay()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetTimeOfTheDay(int timeOfTheDay, float duration = 4) {settimeoftheday-2}
```cs
void SetTimeOfTheDay(int timeOfTheDay, float duration = 4)
```
#### Description
[](description-start)
Sets a time of the day over the given duration. Use 0 for an instant transition.
0 - Noon
1 - Night
2 - Void
[](description-end)

#### Parameters
[](parameters-start)
- *int* `timeOfTheDay` the integer corresponding to a timeOfTheDay.
- *float* `duration` the transition duration.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.SetTimeOfTheDay(2, 10)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## ColorRGB GetCurrentLightColor() {getcurrentlightcolor-0}
```cs
ColorRGB GetCurrentLightColor()
```
#### Description
[](description-start)
Get the current light's RGB value
[](description-end)

#### Example Usage
[](example-usage-start)

[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetOverrideLightColor(ColorRGB color, float duration) {setoverridelightcolor-2}
```cs
void SetOverrideLightColor(ColorRGB color, float duration)
```
#### Description
[](description-start)
Set light color RGB value for a period of time
[](description-end)

#### Parameters
[](parameters-start)
- *[ColorRGB](Trigger-API-Reference-DCEI-Types#colorrgb)* `color` the RGB values for the color. Also accepts hex values such as `"#32a852"`
- *float* `duration` duration of time over which the transition from the current color to the new color will occur

[](parameters-end)

#### Example Usage
[](example-usage-start)

[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetSkyboxColor(ColorRGB color, float duration) {setskyboxcolor-2}
```cs
void SetSkyboxColor(ColorRGB color, float duration)
```
#### Description
[](description-start)
Set skybox RGB color value for a period of time.
[](description-end)

#### Parameters
[](parameters-start)
- *[ColorRGB](Trigger-API-Reference-DCEI-Types#colorrgb)* `color` the RGB values for the color. Also accepts hex values such as `"#32a852"`
- *float* `duration` duration of time over which the transition from the current color to the new color will occur

[](parameters-end)

#### Example Usage
[](example-usage-start)

[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ResetSkyboxColor(float duration) {resetskyboxcolor-1}
```cs
void ResetSkyboxColor(float duration)
```
#### Description
[](description-start)
Resets the skybox color to the default over the given duration. Use 0 for an instant transition.
[](description-end)

#### Parameters
[](parameters-start)
- *float* `duration` the transition duration.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.ResetSkyboxColor(10)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## int AddLine(Float3 startPos, Float3 endPos, float width, ColorRGBA color, bool rectCap = False) {addline-5}
```cs
int AddLine(Float3 startPos, Float3 endPos, float width, ColorRGBA color, bool rectCap = False)
```
#### Description
[](description-start)
Draws a line on the terrain, with color! Returns the lineId of the created line if successful.
[](description-end)

#### Parameters
[](parameters-start)
- *[Float3](Trigger-API-Reference-DCEI-Types#float3)* `startPos` the starting coordinates for the line.
- *[Float3](Trigger-API-Reference-DCEI-Types#float3)* `endPos` the ending coordinates for the line.
- *float* `width` the width of the line, in terms of tiles.
- *[ColorRGBA](Trigger-API-Reference-DCEI-Types#colorrgba)* `color` the RGBA values for the line.  Also accepts hex codes, such as `"#32a852"`

- *bool* `rectCap` if true, the ends of the line are rectangular instead of rounded.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.AddLine({x = 1, y = 1, z = 15}, {x = 30, y = 1, z = 15}, 1, {r = 0.5, g = 0.5, b = 0, a = 0.5}, false)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## int AddLineWithSprite(Float3 startPos, Float3 endPos, float width, ColorRGBA color, string spriteName, float tex_multiplier = 1) {addlinewithsprite-6}
```cs
int AddLineWithSprite(Float3 startPos, Float3 endPos, float width, ColorRGBA color, string spriteName, float tex_multiplier = 1)
```
#### Description
[](description-start)
Draws a line on the terrain using repeating sprites. Returns the lineId of the created line if successful.
[](description-end)

#### Parameters
[](parameters-start)
- *[Float3](Trigger-API-Reference-DCEI-Types#float3)* `startPos` the starting coordinates for the line.
- *[Float3](Trigger-API-Reference-DCEI-Types#float3)* `endPos` the ending coordinates for the line.
- *float* `width` the width of the line, in terms of tiles.
- *[ColorRGBA](Trigger-API-Reference-DCEI-Types#colorrgba)* `color` the RGBA values for the line.  Also accepts hex codes, such as `"#32a852"`

- *string* `spriteName` the name of the sprite to draw.
- *float* `tex_multiplier` the multiplier for sprite scaling.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.AddLineWithSprite({x = 15, y = 1, z = 1}, {x = 15, y = 1, z = 30}, 1, {r = 0.5, g = 0.5, b = 0, a = 0.5}, DCEI.Texture("airship_onMap"), 1)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void RemoveLine(int lineId) {removeline-1}
```cs
void RemoveLine(int lineId)
```
#### Description
[](description-start)
Removes a line.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `lineId` the ID of the line to remove.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.RemoveLine(1)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void MoveLineWithInterpolation(int lineId, Float3 startPos, Float3 endPos, float duration) {movelinewithinterpolation-4}
```cs
void MoveLineWithInterpolation(int lineId, Float3 startPos, Float3 endPos, float duration)
```
#### Description
[](description-start)
Moves a line's start and end points (and thus the line itself) to new locations over the given duration.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `lineId` the ID of the line to move.
- *[Float3](Trigger-API-Reference-DCEI-Types#float3)* `startPos` the new starting coordinates for the line.
- *[Float3](Trigger-API-Reference-DCEI-Types#float3)* `endPos` the new ending coordinates for the line.
- *float* `duration` the duration of the line's movement.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.MoveLineWithInterpolation(2, {x = 1, y = 1, z = 15}, {x = 30, y = 1, z = 15}, 3)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void RemoveAllLines() {removealllines-0}
```cs
void RemoveAllLines()
```
#### Description
[](description-start)
Removes all lines.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.RemoveAllLines()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ChangeLineColor(int lineId, ColorRGBA color) {changelinecolor-2}
```cs
void ChangeLineColor(int lineId, ColorRGBA color)
```
#### Description
[](description-start)
Changes a line's color.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `lineId` the ID of the line.
- *[ColorRGBA](Trigger-API-Reference-DCEI-Types#colorrgba)* `color` the RGBA values for the line.  Also accepts hex codes, such as `"#32a852"`

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.ChangeLineColor(1, {r = 0.5, g = 0.5, b = 0, a = 0.5},)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ChangeLineDisplay(int lineId, bool display) {changelinedisplay-2}
```cs
void ChangeLineDisplay(int lineId, bool display)
```
#### Description
[](description-start)
Toggles the display of a line.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `lineId` the ID of the line.
- *bool* `display` if true, displays the line.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.ChangeLineDisplay(1, false)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## int AddGrid(Float3 center, float width, float height, int xCount, int zCount, float lineWidth, ColorRGBA color, bool rectCap = False) {addgrid-8}
```cs
int AddGrid(Float3 center, float width, float height, int xCount, int zCount, float lineWidth, ColorRGBA color, bool rectCap = False)
```
#### Description
[](description-start)
Draws a grid with lines. Returns a gridId integer if successful.
[](description-end)

#### Parameters
[](parameters-start)
- *[Float3](Trigger-API-Reference-DCEI-Types#float3)* `center` the coordinates for the center of the grid.
- *float* `width` the width of the grid (in tiles).
- *float* `height` the height of the grid (in tiles).
- *int* `xCount` the number of columns (along the x axis).
- *int* `zCount` the number of rows (along the z axis).
- *float* `lineWidth` the width of the grid lines.
- *[ColorRGBA](Trigger-API-Reference-DCEI-Types#colorrgba)* `color` the RGBA values for the line.  Also accepts hex codes, such as `"#32a852"`
- *bool* `rectCap` if true, the ends of the grid lines are rectangular instead of rounded.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.AddGrid({x = 16, y = 0.5, z = 16}, 15, 15, 5, 15, 0.1, {r = 0.5, g = 0.5, b = 0, a = 0.5}, false)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## int AddGridWithSprite(Float3 center, float width, float height, int xCount, int zCount, float lineWidth, ColorRGBA color, string spriteName, float tex_multiplier = 1) {addgridwithsprite-9}
```cs
int AddGridWithSprite(Float3 center, float width, float height, int xCount, int zCount, float lineWidth, ColorRGBA color, string spriteName, float tex_multiplier = 1)
```
#### Description
[](description-start)
Draws a grid with lines made of repeating sprites. Returns a gridId integer if successful.
[](description-end)

#### Parameters
[](parameters-start)
- *[Float3](Trigger-API-Reference-DCEI-Types#float3)* `center` the coordinates for the center of the grid.
- *float* `width` the width of the grid (in tiles).
- *float* `height` the height of the grid (in tiles).
- *int* `xCount` the number of columns (along the x axis).
- *int* `zCount` the number of rows (along the z axis).
- *float* `lineWidth` the width of the grid lines.
- *[ColorRGBA](Trigger-API-Reference-DCEI-Types#colorrgba)* `color` the RGBA values for the line.  Also accepts hex codes, such as `"#32a852"`

- *string* `spriteName` the name of the sprite to draw.
- *float* `tex_multiplier` the multiplier for sprite scaling.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.AddGridWithSprite({x = 16, y = 0.5, z = 16}, 15, 15, 5, 15, 0.5, {r = 0.5, g = 0.5, b = 0, a = 0.5}, DCEI.Texture("airship_onMap"), 1)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void RemoveGrid(int gridId) {removegrid-1}
```cs
void RemoveGrid(int gridId)
```
#### Description
[](description-start)
Removes a grid.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `gridId` the ID of the grid to remove.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.RemoveGrid(1)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetBlurredScreenCaptureAsBackground(bool set, float duration) {setblurredscreencaptureasbackground-2}
```cs
void SetBlurredScreenCaptureAsBackground(bool set, float duration)
```
#### Description
[](description-start)
Toggles a blurred version of your terrain in the background. Note that this background renders underneath the terrain, so you may need to move your game camera to see it.
[](description-end)

#### Parameters
[](parameters-start)
- *bool* `set` if true, enables the blurred background.
- *float* `duration` the transition duration.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.SetBlurredScreenCaptureAsBackground(true, 5)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

