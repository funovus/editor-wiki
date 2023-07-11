<div id="toc" markdown="1">
- [Trigger API Reference\DCEI Functions\General](#trigger-api-referencedcei-functionsgeneral)
  * [Texture](#texture-1)
  * [WildCastleDownloadRemoteImages](#wildcastledownloadremoteimages-3)
  * [Actor](#actor-1)
  * [Unit](#unit-1)
  * [SimpleUnit](#simpleunit-1)
  * [Effect](#effect-1)
  * [Behavior](#behavior-1)
  * [Sound](#sound-1)
  * [Tag](#tag-1)
  * [Upgrade](#upgrade-1)
  * [Font](#font-1)
  * [Ability](#ability-1)
  * [Weapon](#weapon-1)
  * [Particle](#particle-1)
  * [SetScreenSleep](#setscreensleep-1)
  * [GetGameTime](#getgametime-0)
  * [SetSimpleUnitMapBounds](#setsimpleunitmapbounds-1)
  * [GetValueFromDataPath](#getvaluefromdatapath-1)
  * [ValidateDataPath](#validatedatapath-1)
  * [TriggerAddSimulationCommandEvent](#triggeraddsimulationcommandevent-2)
  * [SendSimulationCommand](#sendsimulationcommand-2)
  * [TriggerAddPresentationCommandEvent](#triggeraddpresentationcommandevent-1)
  * [SendPresentationCommand](#sendpresentationcommand-3)
  * [ShareDataWithPresentation](#sharedatawithpresentation-2)
  * [GetSharedDataFromSimulation](#getshareddatafromsimulation-1)
  * [TriggerAddUpdateEvent](#triggeraddupdateevent-1)
  * [CreateCustomIapProductData](#createcustomiapproductdata-0)
  * [CreateCustomIapProduct](#createcustomiapproduct-2)
  * [AddCustomIapProduct](#addcustomiapproduct-2)
  * [GetProtectedValue](#getprotectedvalue-1)
  * [ClearProtectedValue](#clearprotectedvalue-1)
  * [SetProtectedValue](#setprotectedvalue-2)
  * [SetEffectFieldValueForPlayer](#seteffectfieldvalueforplayer-4)
  * [ApplyModifier](#applymodifier-2)
  * [IsPointOnNavMesh](#ispointonnavmesh-2)
  * [GetClosestPointOnNavMesh](#getclosestpointonnavmesh-2)
  * [AddNavmeshCut](#addnavmeshcut-1)
  * [SetPropVisibility](#setpropvisibility-2)
  * [EnableNavmeshCut](#enablenavmeshcut-2)
  * [SetSpeedTurbo](#setspeedturbo-1)
  * [GetDataContextValue](#getdatacontextvalue-1)
  * [GetCardDamageStats](#getcarddamagestats-0)
  * [ResetCardDamageStats](#resetcarddamagestats-0)
  * [TriggerOnFocusChange](#triggeronfocuschange-1)
  * [GarbageCollect](#garbagecollect-0)
  * [GetLuaMemorySize](#getluamemorysize-0)
  * [GetLevelDataLoadingTime](#getleveldataloadingtime-0)
  * [Wait](#wait-2)

</div>

***

# [Trigger API Reference](Trigger-API-Reference)\\DCEI Functions\General {Trigger-API-ReferenceDCEI-FunctionsGeneral}

[](overview-start)

[](overview-end)

## string Texture(string texture) {texture-1}
```cs
string Texture(string texture)
```
#### Description
[](description-start)
Register a used sprite. Data used in Lua has to be registered in order for it to be loaded in-game. 
[](description-end)

#### Parameters
[](parameters-start)
- *string* `texture` the sprite name to register.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local image_name = DCEI.Texture("btn_close")

local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImage(frame, image_name)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void WildCastleDownloadRemoteImages(int projectId, List\<string> remoteImages, TypedCallback\<List\<string>> callback) {wildcastledownloadremoteimages-3}
```cs
void WildCastleDownloadRemoteImages(int projectId, List<string> remoteImages, TypedCallback<List<string>> callback)
```
#### Description
[](description-start)
Register remote images that uploaded to [platform site](https://platform.wildsky.dev) under the "Remote Images" field of the "Request Build" section of your project management page. Only supports .png files. Image name will be the key, which must be unique. Cannot delete images uploaded.
 
[](description-end)

#### Parameters
[](parameters-start)
- *int* `projectId` the id of the project that uploaded remote images. (id can be found in project page url)
- *List\<string>* `remoteImages` list of image names without .png extension.
- *TypedCallback\<List\<string>>* `callback` When remote images finish loading, this function will be called with a parameter, which is a list of all successfully loaded remote  images. NOTE: Some remote images may fail to load, so the list passed to callback may not be the same as remoteImages passed to this api.

[](parameters-end)

#### Callback Parameters
- *List`1* `images`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.WildCastleDownloadRemoteImages(145, {"my_image_1", "another_image", "and_so_on"}, RemoteImagesDownloaded)

function RemoteImagesDownloaded(images)
  for k, v in pairs(images) do
    DCEI.LogMessage(v .. " Loaded")
  end
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## string Actor(string actor) {actor-1}
```cs
string Actor(string actor)
```
#### Description
[](description-start)
Register a used actor.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `actor` the actor name to register.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
--this creates an vfx model actor on your unit
on_hit = DCEI.Actor("COMBAT AreaAttack Impact FX")
core.SendActorMessage(target_unit, "create", on_hit)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## string Unit(string unit) {unit-1}
```cs
string Unit(string unit)
```
#### Description
[](description-start)
Register a used unit. Data used in Lua has to be registered in order for it to be loaded in-game. 
[](description-end)

#### Parameters
[](parameters-start)
- *string* `unit` the unit name to register.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local unit_type = DCEI.Unit("Goblin")
DCEI.CreateUnit(1, 1, unit_type, 0, 1)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## string SimpleUnit(string unit) {simpleunit-1}
```cs
string SimpleUnit(string unit)
```
#### Description
[](description-start)
See [Simple Units Guide.](https://funovus.notion.site/Simple-Units-Introduction-8a39c47f07d64f4c9549c5947c2c281f)
[](description-end)

#### Parameters
[](parameters-start)

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local MissileData = {
    list = {
        -- ATTACK ITEMS
        {
            id = "attack_rock",
            icon = DCEI.Texture("flat_icon_emoji_rock_1faa8_ipick"),
            missile = DCEI.SimpleUnit("COMBAT Missile Rock"),
            missile_type = MISSILE_TYPE.ATTACK,
            impact = DCEI.SimpleUnit("COMBAT Unit Simple HitFx"),
            spin_speed = -720,
        },
        {
            id = "attack_brick",
            icon = DCEI.Texture("flat_icon_emoji_brick_1f9f1_ipick"),
            missile = DCEI.SimpleUnit("COMBAT Missile Brick"),
            missile_type = MISSILE_TYPE.ATTACK,
        },
        {
            id = "attack_soccer_ball",
            icon = DCEI.Texture("flat_icon_emoji_soccer_ball_26bd_ipick"),
            missile = DCEI.SimpleUnit("COMBAT Missile SoccerBall"),
            missile_type = MISSILE_TYPE.ATTACK,
        }
    },
}
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## string Effect(string effect) {effect-1}
```cs
string Effect(string effect)
```
#### Description
[](description-start)
Register a used effect. Data used in Lua has to be registered in order for it to be loaded in-game. 
[](description-end)

#### Parameters
[](parameters-start)
- *string* `effect` the effect name to register.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local effect = DCEI.Effect("EVENT Lightning Hook")
Core.Effect.Create(effect, pos.x, pos.y)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## string Behavior(string behavior) {behavior-1}
```cs
string Behavior(string behavior)
```
#### Description
[](description-start)
Register a used behavior. Data used in Lua has to be registered in order for it to be loaded in-game. 
[](description-end)

#### Parameters
[](parameters-start)
- *string* `behavior` the actor name to register.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local behavior = DCEI.Behavior("COMBAT Shield")
DCEI.ApplyBehaviorToSelf(target_unit, behavior, 1)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## string Sound(string sound) {sound-1}
```cs
string Sound(string sound)
```
#### Description
[](description-start)
Register a used sound. Data used in Lua has to be registered in order for it to be loaded in-game. 
[](description-end)

#### Parameters
[](parameters-start)
- *string* `sound` the sound name to register.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local sound = DCEI.Sound("dryad_bewitch_cast")
local volume = 2
DCEI.PlaySound(sound, volume)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## string Tag(string tag) {tag-1}
```cs
string Tag(string tag)
```
#### Description
[](description-start)
Register a used tag. Data used in Lua has to be registered in order for it to be loaded in-game. 
[](description-end)

#### Parameters
[](parameters-start)
- *string* `tag` the tag name to register.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local tag = DCEI.Tag("human")
DCEI.ApplyTag(unit, tag, -1, 5)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## string Upgrade(string upgrade) {upgrade-1}
```cs
string Upgrade(string upgrade)
```
#### Description
[](description-start)
Register a used upgrade. This is mostly just used in Wild Sky. Data used in Lua has to be registered in order for it to be loaded in-game. 
[](description-end)

#### Parameters
[](parameters-start)
- *string* `upgrade` the upgrade name to register.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local upgrade = DCEI.Upgrade("tech_tree_1")
DCEI.SetUpgradeLevelAsync(upgrade, 1)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## string Font(string font) {font-1}
```cs
string Font(string font)
```
#### Description
[](description-start)
Register a used font. Data used in Lua has to be registered in order for it to be loaded in-game. 
[](description-end)

#### Parameters
[](parameters-start)
- *string* `font` the font name to register.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- As of editor 0.31 there isn't really a use case for this API, as no other APIs take a font
DCEI.Font("comic sans")
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## string Ability(string ability) {ability-1}
```cs
string Ability(string ability)
```
#### Description
[](description-start)
Register a used ability. Data used in Lua has to be registered in order for it to be loaded in-game. 
[](description-end)

#### Parameters
[](parameters-start)
- *string* `ability` the ability name to register.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local fireball_ability = DCEI.Ability("fireball")
DCEI.CastAbilityAtUnit(fireball_ability, caster_unit, target_unit, true)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## string Weapon(string weapon) {weapon-1}
```cs
string Weapon(string weapon)
```
#### Description
[](description-start)
Register a used weapon. Data used in Lua has to be registered in order for it to be loaded in-game. 
[](description-end)

#### Parameters
[](parameters-start)
- *string* `weapon` the weapon name to register.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local weapon = DCEI.Weapon("Standard MeleeUnit Weapon")
local unit_type = DCEI.Unit("Standard RangedUnit")
DCEI.AddUnitWeapon(unit_type, weapon)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## string Particle(string particle) {particle-1}
```cs
string Particle(string particle)
```
#### Description
[](description-start)

[](description-end)

#### Parameters
[](parameters-start)

[](parameters-end)

#### Example Usage
[](example-usage-start)

[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetScreenSleep(bool flag) {setscreensleep-1}
```cs
void SetScreenSleep(bool flag)
```
#### Description
[](description-start)
If set to false, disable screen auto sleep; if set to true, use system screen sleep setting.
[](description-end)

#### Parameters
[](parameters-start)
- *bool* `flag` the screen sleep state to set.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- Prevent the users phone screen from sleeping; useful for idle games
DCEI.SetScreenSleep(false)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## float GetGameTime() {getgametime-0}
```cs
float GetGameTime()
```
#### Description
[](description-start)
Returns the time passed since the game has started (in seconds).
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local time = DCEI.GetGameTime()
DCEI.LogMessage(time)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetSimpleUnitMapBounds(SimpleUnitMapBoundOptions options) {setsimpleunitmapbounds-1}
```cs
void SetSimpleUnitMapBounds(SimpleUnitMapBoundOptions options)
```
#### Description
[](description-start)
When simple units leave the map bounds, they are automatically removed. Includes a filter for player ID so that only units owned by a certain player will be removed. 
[](description-end)

#### Parameters
[](parameters-start)
- *[SimpleUnitMapBoundOptions](Trigger-API-Reference-DCEI-Types#simpleunitmapboundoptions)* `options` options for setting simple unit map bounds.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
  local size = self:GetPlayableSize()
  DCEI.SetSimpleUnitMapBounds({
      center_x = 0,
      center_y = 0,
      width =  32, 
      height = 32, 
      player_id_remove_mask = -1,
  })
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## object GetValueFromDataPath(String[] paths) {getvaluefromdatapath-1}
```cs
object GetValueFromDataPath(String[] paths)
```
#### Description
[](description-start)
Returns a value from fields defined in the data editor, stored at the given data path. For example, if in the editor you’ve defined an Ability `"Hero Marksman Ability"` with a base mana cost of 20, then in code you can read that base mana cost via `DCEI.GetValueFromDataPath({ "abilities", "Hero Marksman Ability", "cost", "mana" })`

[See Notion guide on this feature.](https://funovus.notion.site/Getting-Data-Values-In-Script-b56f5be31fb246d488b8fbc529bec701)

 This can only return either a string or integer. You can find a data object's json path names in the JSON view of Data Window and use them directly with the API. You can also right click any field in the editor and select "Copy Data Path" to copy the field's data path to the clipboard.
[](description-end)

#### Parameters
[](parameters-start)
- *String[]* `paths` the paths to retrieve values from. Accepts both lowerCamelCase and snake_case.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local data_path = {"units", "Standard MeleeUnit", "components", "unitStats", "radius"}
if DCEI.ValidateDataPath(data_path) then
    local data_path_val = DCEI.GetValueFromDataPath(data_path)
    DCEI.LogMessage(data_path_val)
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## bool ValidateDataPath(String[] paths) {validatedatapath-1}
```cs
bool ValidateDataPath(String[] paths)
```
#### Description
[](description-start)
Returns true if value stored at the given data path is a string or integer. You can find a data object's json path names in the JSON view of Data Window and use them directly with the API. You can also right click any field in the editor and select "Copy Data Path" to copy the field's data path to the clipboard.
[](description-end)

#### Parameters
[](parameters-start)
- *String[]* `paths` the paths to validate. Accepts both lowerCamelCase and snake_case.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local data_path = {"units", "Standard MeleeUnit", "components", "unit_stats", "radius"}
if DCEI.ValidateDataPath(data_path) then
    local data_path_val = DCEI.GetValueFromDataPath(data_path)
    DCEI.LogMessage(data_path_val)
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void TriggerAddSimulationCommandEvent(int player, TypedCallback\<string, object> callback) {triggeraddsimulationcommandevent-2}
```cs
void TriggerAddSimulationCommandEvent(int player, TypedCallback<string, object> callback)
```
#### Description
[](description-start)
Use in conjunction with `DCEI.SendSimulationCommand` to allow Presentation.lua.txt script to run a function within the simulation layer by sending a payload that `TriggerAddSimulationCommandEvent` can receive. 

See `SendPresentationCommand` & `TriggerAddPresentationCommandEvent` to do the opposite (send an event from simulation script to presentation script)

See [Presentation vs Simulation scripts.](https://www.notion.so/funovus/Presentation-vs-Simulation-Script-02155b2974e549c6afe3b3128ba841fb)
[](description-end)

#### Parameters
[](parameters-start)
- *int* `player` player id of the triggering player
- *TypedCallback\<string, object>* `callback` the callback function that is run when the event is triggered. The string parameter is the command sent from presentation script, usually json encoded for more info.

[](parameters-end)

#### Callback Parameters
- *String* `command`
- *Object* `context`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
--this runs in simulation script, receiving command from presentation script
DCEI.TriggerAddSimulationCommandEvent(
  1,
  function(payload)
    local command = json.decode(payload)
    if command.type == "set_speed" then
      speed = command.speed
      DCEI.LogMessage("Speed change to: " .. speed)
    elseif command.type == "pause_unpause" then
      pause = not pause
    end
  end
)
```
```lua
-- Put this in presentation script, when the button is clicked, send command to simulation script
DCEI.SetOnClickCallback(
  window,
  function()
    DCEI.SendSimulationCommand(
      json.encode(
        {
          type = "pause_unpause"
        }
      )
    )
  end
)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SendSimulationCommand(string command, object context) {sendsimulationcommand-2}
```cs
void SendSimulationCommand(string command, object context)
```
#### Description
[](description-start)
Use in conjunction with `DCEI.TriggerAddSimulationCommandEvent` to allow Presentation.lua.txt script to run a function within the simulation layer by sending a payload that `TriggerAddSimulationCommandEvent` can receive. 

See `SendPresentationCommand` & `TriggerAddPresentationCommandEvent` to do the opposite (send an event from simulation script to presentation script)

See [Presentation vs Simulation scripts.](https://www.notion.so/funovus/Presentation-vs-Simulation-Script-02155b2974e549c6afe3b3128ba841fb)
[](description-end)

#### Parameters
[](parameters-start)
- *string* `command` the command sent to simulation script, usually json encoded to contain more information
- *object* `context` a Lua table (or function). Use this to keep track of the context info for a sequence of actions spreading across simulation and presentation.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
--this runs in simulation script, receiving command from presentation script
DCEI.TriggerAddSimulationCommandEvent(
  1,
  function(payload)
    local command = json.decode(payload)
    if command.type == "set_speed" then
      speed = command.speed
      DCEI.LogMessage("Speed change to: " .. speed)
    elseif command.type == "pause_unpause" then
      pause = not pause
    end
  end
)
```
```lua
-- Put this in presentation script, when the button is clicked, send command to simulation script
DCEI.SetOnClickCallback(
  window,
  function()
    DCEI.SendSimulationCommand(
      json.encode(
        {
          type = "pause_unpause"
        }
      )
    )
  end
)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void TriggerAddPresentationCommandEvent(TypedCallback\<string, object> callback) {triggeraddpresentationcommandevent-1}
```cs
void TriggerAddPresentationCommandEvent(TypedCallback<string, object> callback)
```
#### Description
[](description-start)
This establishes a function to run within `Presentation.lua.txt` script when receiving an event from simulation `Trigger.lua.txt` sent with the `DCEI.SendPresentationCommand` API.  

See `SendSimulationCommand` & `TriggerAddSimulationCommandEvent` to do the opposite (send an event from presentation script to simulation script)

See [Presentation vs Simulation scripts for more information about the two scripting layers.](https://www.notion.so/funovus/Presentation-vs-Simulation-Script-02155b2974e549c6afe3b3128ba841fb)
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback\<string, object>* `callback` the callback function that is run when the event is triggered. the string parameter is the command sent to presentation scrip, usually json encoded for more info.

[](parameters-end)

#### Callback Parameters
- *String* `command`
- *Object* `context`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
--this runs in presentation script, receiving command from simulation script
DCEI.TriggerAddPresentationCommandEvent(function(payload)
    local command = json.decode(payload)
    if command.type == "pause_unpause" then
        pause = not pause
    end
end)
```
```lua
-- Put this in simulation script, when the button is clicked, send command to presentation script
DCEI.SetOnClickCallback(
  window,
  function()
    DCEI.SendPresentationCommand(
      1,
      json.encode(
        {
          type = "pause_unpause"
        }
      )
    )
  end
)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SendPresentationCommand(int player, string command, object simulationContext) {sendpresentationcommand-3}
```cs
void SendPresentationCommand(int player, string command, object simulationContext)
```
#### Description
[](description-start)
Send a payload of information in the simulation `Trigger.lua.txt` that will be received in `Presentation.lua.txt` script by the `TriggerAddPresentationCommandEvent` API. 

See `SendSimulationCommand` & `TriggerAddSimulationCommandEvent` to do the opposite (send an event from presentation script to simulation script)

See [Presentation vs Simulation scripts for more information about the two scripting layers.](https://www.notion.so/funovus/Presentation-vs-Simulation-Script-02155b2974e549c6afe3b3128ba841fb)
[](description-end)

#### Parameters
[](parameters-start)
- *int* `player` player id of the triggering player
- *string* `command` the command sent to simulation script, usually json encoded to contain more information
- *object* `simulationContext` a Lua table (or function). Use this to keep track of the context info for a sequence of actions spreading across simulation and presentation.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
--this runs in presentation script, receiving command from simulation script
DCEI.TriggerAddPresentationCommandEvent(function(payload)
    local command = json.decode(payload)
    if command.type == "pause_unpause" then
        pause = not pause
    end
end)
```
```lua
-- Put this in simulation script, when the button is clicked, send command to presentation script
DCEI.SetOnClickCallback(
  window,
  function()
    DCEI.SendPresentationCommand(
      1,
      json.encode(
        {
          type = "pause_unpause"
        }
      )
    )
  end
)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ShareDataWithPresentation(string key, object data) {sharedatawithpresentation-2}
```cs
void ShareDataWithPresentation(string key, object data)
```
#### Description
[](description-start)
The data argument is a Lua table that needs to be accessed from presentation layer, and key is a string identifier. 

See [Presentation vs Simulation scripts.](https://www.notion.so/funovus/Presentation-vs-Simulation-Script-02155b2974e549c6afe3b3128ba841fb)
[](description-end)

#### Parameters
[](parameters-start)
- *string* `key` string identifier. Use with GetSharedDataFromSimulation to retrieve data in presentation script.
- *object* `data` a Lua table to share with presentation layer with DCEI.GetSharedDataFromSimulation

[](parameters-end)

#### Example Usage
[](example-usage-start)
Trigger.lua.txt (Simulation)
```lua
-- TRIGGERS
local function OnGoldDummySpawn()
    local u = DCEI.TriggeringUnit
    local key = "my_unit_key"
    DCEI.ShareDataWithPresentation(key, { unit = u })
    GMUI.RunPresentationFunction("AttachUiToGoldDummyUnit", key)
end
```

Presentation.lua.txt (Presentation)

```lua
-- FUNCTIONS
function AttachUiToGoldDummyUnit(key)
    local data = DCEI.GetSharedDataFromSimulation(key)
    local unit = data.unit

    -- create and attach coin to dummy unit
    local layout = GMUI.Layout.New({
        name = "Game/Coin",
    })
    local options = {}
    DCEI.AttachFrameToUnit(layout.Frame, unit, options, USE_CURRENT_UI_ROOT)
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## object GetSharedDataFromSimulation(string key) {getshareddatafromsimulation-1}
```cs
object GetSharedDataFromSimulation(string key)
```
#### Description
[](description-start)
If a Lua table data is shared from simulation with the given key, this API returns a read-only view of that data, accessed like a regular Lua table. When the original Lua table is updated in simulation, the view will reflect the updated values as well. 

See [Presentation vs Simulation scripts.](https://www.notion.so/funovus/Presentation-vs-Simulation-Script-02155b2974e549c6afe3b3128ba841fb)
[](description-end)

#### Parameters
[](parameters-start)
- *string* `key` key used to retrieve value shared by `DCEI.ShareDataWithPresentation`

[](parameters-end)

#### Example Usage
[](example-usage-start)
Trigger.lua.txt (Simulation)
```lua
-- TRIGGERS
local function OnGoldDummySpawn()
    local u = DCEI.TriggeringUnit
    local key = "my_unit_key"
    DCEI.ShareDataWithPresentation(key, { unit = u })
    GMUI.RunPresentationFunction("AttachUiToGoldDummyUnit", key)
end
```

Presentation.lua.txt (Presentation)

```lua
-- FUNCTIONS
function AttachUiToGoldDummyUnit(key)
    local data = DCEI.GetSharedDataFromSimulation(key)
    local unit = data.unit

    -- create and attach coin to dummy unit
    local layout = GMUI.Layout.New({
        name = "Game/Coin",
    })
    local options = {}
    DCEI.AttachFrameToUnit(layout.Frame, unit, options, USE_CURRENT_UI_ROOT)
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void TriggerAddUpdateEvent(TypedCallback\<float> callback) {triggeraddupdateevent-1}
```cs
void TriggerAddUpdateEvent(TypedCallback<float> callback)
```
#### Description
[](description-start)
Run the callback function every presentation frame, which is way higher than simulation frame (16 fps fixed for now). This can be used to create smooth UI animations.
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback\<float>* `callback` the callback function that is run every presentation frame.

[](parameters-end)

#### Callback Parameters
- *Single* `delta_time`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local rotation = 0
DCEI.TriggerAddUpdateEvent(
    function(delta_time)
        if not pause then
            rotation = rotation + speed * 90 * delta_time
            DCEI.SetFrameRotation(window, rotation)
        end
    end
)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## object CreateCustomIapProductData() {createcustomiapproductdata-0}
```cs
object CreateCustomIapProductData()
```
#### Description
[](description-start)
Returns a table for custom in-app product data.  Most games should use the [Shop Mod](https://wiki.funovus.com/master/Mods-IAP-Shop-Mod) to handle IAP.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local product_list = DCEI.CreateCustomIapProductData()

-- construct product list from IAP data
for index, iap in ipairs(iap_data.product_list) do
    local product_id = iap.product_id
    if product_id then
        -- use product_id as IAP reference name
        IAP[product_id] = iap

        -- convert price and item product data into protected values
        ProtectItemData(product_id)

        -- store USD price for analytics revenue logging
        local usd_price = mod.GetProductPriceUSD(product_id)

        -- add items with usd price to product list
        if usd_price then
            local custom_product = DCEI.CreateCustomIapProduct(product_id, usd_price)
            DCEI.AddCustomIapProduct(product_list, custom_product)

            -- DCEI.LogMessage("> Initialized IAP [" .. product_id .. "][usd_price " .. usd_price .. "]")
        end
    else
        -- error handling
        DCEI.LogError("> IAP [" .. index .. "] has invalid product_id")
        return
    end
  end
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## object CreateCustomIapProduct(string productId, float price) {createcustomiapproduct-2}
```cs
object CreateCustomIapProduct(string productId, float price)
```
#### Description
[](description-start)
Returns a custom in-app product with the values given.  Most games should use the [Shop Mod](https://wiki.funovus.com/master/Mods-IAP-Shop-Mod) to handle IAP.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `productId` the product ID.
- *float* `price` the price for the product.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local product_list = DCEI.CreateCustomIapProductData()

-- construct product list from IAP data
for index, iap in ipairs(iap_data.product_list) do
    local product_id = iap.product_id
    if product_id then
        -- use product_id as IAP reference name
        IAP[product_id] = iap

        -- convert price and item product data into protected values
        ProtectItemData(product_id)

        -- store USD price for analytics revenue logging
        local usd_price = mod.GetProductPriceUSD(product_id)

        -- add items with usd price to product list
        if usd_price then
            local custom_product = DCEI.CreateCustomIapProduct(product_id, usd_price)
            DCEI.AddCustomIapProduct(product_list, custom_product)

            -- DCEI.LogMessage("> Initialized IAP [" .. product_id .. "][usd_price " .. usd_price .. "]")
        end
    else
        -- error handling
        DCEI.LogError("> IAP [" .. index .. "] has invalid product_id")
        return
    end
  end
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## object AddCustomIapProduct(CustomIapProductData data, CustomIapProduct product) {addcustomiapproduct-2}
```cs
object AddCustomIapProduct(CustomIapProductData data, CustomIapProduct product)
```
#### Description
[](description-start)
Combines the custom in app product data and product returned from the above functions and returns a whole product. Most games should use the [Shop Mod](https://wiki.funovus.com/master/Mods-IAP-Shop-Mod) to handle IAP.
[](description-end)

#### Parameters
[](parameters-start)
- *CustomIapProductData* `data` data structure created from CreateCustomIapProductData(),
- *CustomIapProduct* `product` product structure created from CreateCustomIapProduct().

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local product_list = DCEI.CreateCustomIapProductData()
local iap_item = DCEI.CreateCustomIapProduct("product_1", 1)
DCEI.AddCustomIapProduct(product_list, iap_item)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## float GetProtectedValue(string key) {getprotectedvalue-1}
```cs
float GetProtectedValue(string key)
```
#### Description
[](description-start)
Returns a protected value from its key. 

Protected values are encoded to make it harder for cheaters using a simple memory reader to find and modify the value. Be sure not to store the value ever in a Lua variable. This would defeat the purpose, by still allowing cheaters to easy read and modify the value before/after using Get/SetProtected value. 

When you no longer need a protected value, it's good practice to call ClearProtectedValue.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `key` key associated with the value.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function GetPlayerWinterCoin()
    return math.floor(DCEI.GetProtectedValue(data.safe.winter_coin))
end

function AddPlayerWinterCoin(value, skip_commit)
    SetPlayerWinterCoin(value + GetPlayerWinterCoin(), skip_commit)
end

function SetPlayerWinterCoin(value, skip_commit)
    DCEI.SetProtectedValue(data.safe.winter_coin, value)

    if not skip_commit then
        Bank:CommitWinterCoin()
    end
end

function GetPlayerSpringCoin()
    return math.floor(DCEI.GetProtectedValue(data.safe.spring_coin))
end

function AddPlayerSpringCoin(value, skip_commit)
    SetPlayerSpringCoin(value + GetPlayerSpringCoin(), skip_commit)
end

function SetPlayerSpringCoin(value, skip_commit)
    DCEI.SetProtectedValue(data.safe.spring_coin, value)

    if not skip_commit then
        Bank:CommitSpringCoin()
    end
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ClearProtectedValue(string key) {clearprotectedvalue-1}
```cs
void ClearProtectedValue(string key)
```
#### Description
[](description-start)
Clears the protected value pair of a given key.

Protected values are encoded to make it harder for cheaters using a simple memory reader to find and modify the value. Be sure not to store the value ever in a Lua variable. This would defeat the purpose, by still allowing cheaters to easy read and modify the value before/after using Get/SetProtected value. 

When you no longer need a protected value, it's good practice to call ClearProtectedValue.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `key` the key to clear.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- Setting value
DCEI.SetProtectedValue("path_key_string", 23)
DCEI.Wait(5)
DCEI.ClearProtectedValue("path_key_string")
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetProtectedValue(string key, float value) {setprotectedvalue-2}
```cs
void SetProtectedValue(string key, float value)
```
#### Description
[](description-start)
Sets a protected value pair.

Protected values are encoded to make it harder for cheaters using a simple memory reader to find and modify the value. Be sure not to store the value ever in a Lua variable. This would defeat the purpose, by still allowing cheaters to easy read and modify the value before/after using Get/SetProtected value. 

When you no longer need a protected value, it's good practice to call ClearProtectedValue.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `key` the key of the pair.
- *float* `value` the value of the pair.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function GetPlayerWinterCoin()
    return math.floor(DCEI.GetProtectedValue(data.safe.winter_coin))
end

function AddPlayerWinterCoin(value, skip_commit)
    SetPlayerWinterCoin(value + GetPlayerWinterCoin(), skip_commit)
end

function SetPlayerWinterCoin(value, skip_commit)
    DCEI.SetProtectedValue(data.safe.winter_coin, value)

    if not skip_commit then
        Bank:CommitWinterCoin()
    end
end

function GetPlayerSpringCoin()
    return math.floor(DCEI.GetProtectedValue(data.safe.spring_coin))
end

function AddPlayerSpringCoin(value, skip_commit)
    SetPlayerSpringCoin(value + GetPlayerSpringCoin(), skip_commit)
end

function SetPlayerSpringCoin(value, skip_commit)
    DCEI.SetProtectedValue(data.safe.spring_coin, value)

    if not skip_commit then
        Bank:CommitSpringCoin()
    end
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetEffectFieldValueForPlayer(int playerId, string effectName, String[] path, object value) {seteffectfieldvalueforplayer-4}
```cs
void SetEffectFieldValueForPlayer(int playerId, string effectName, String[] path, object value)
```
#### Description
[](description-start)
Set effect field value for player with playerId. This is similar to effect hooks but faster because it doesn't need to run lua every time the effect runs, and  result can be cached. 
[](description-end)

#### Parameters
[](parameters-start)
- *int* `playerId` player id
- *string* `effectName` name of the effect to modify
- *String[]* `path` field path to modify. You can right-click on a field in the data editor and select "copy data path" to find the correct path to input.
- *object* `value` the value to set the effect field to for this player.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua

  DCEI.SetEffectFieldValueForPlayer(1, DCEI.Effect("Standard Damage"), {"effects", "Standard Damage", "damage", "damageAmount"}, 15)

```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## float ApplyModifier(BehaviorModifier modifier, float value) {applymodifier-2}
```cs
float ApplyModifier(BehaviorModifier modifier, float value)
```
#### Description
[](description-start)
Applies a behavior modifier to a value, returning the scaled/modified value. This makes it easier to mimic value scaling in Lua the same way these values would be scaled via data. 
[](description-end)

#### Parameters
[](parameters-start)
- *[BehaviorModifier](Trigger-API-Reference-DCEI-Types#behaviormodifier)* `modifier` behavior modifier to apply.
- *float* `value` base value to scale by the BehaviorModifier.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local example_value = DCEI.ApplyModifier({scaled = 5, unscaled = 0, additive_factor = 1, positive_unified_factor = 1, negative_unified_factor = 0, multiplier_factor = 1}, 5)
DCEI.LogMessage(example_value)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## bool IsPointOnNavMesh(float x, float z) {ispointonnavmesh-2}
```cs
bool IsPointOnNavMesh(float x, float z)
```
#### Description
[](description-start)
Returns true if the given coordinates are on the nav mesh.
[](description-end)

#### Parameters
[](parameters-start)
- *float* `x` the x coordinate.
- *float* `z` the z coordinate.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local x = 16
local y = 16
local check_point = DCEI.IsPointOnNavMesh(x, y)
DCEI.LogMessage(tostring(check_point))
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## Float2 GetClosestPointOnNavMesh(float x, float z) {getclosestpointonnavmesh-2}
```cs
Float2 GetClosestPointOnNavMesh(float x, float z)
```
#### Description
[](description-start)
Returns the closest coordinates on the nav mesh to the given coordinates.
[](description-end)

#### Parameters
[](parameters-start)
- *float* `x` the x coordinate.
- *float* `z` the z coordinate.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local point = DCEI.GetClosestPointOnNavMesh(15, 15)
DCEI.LogMessage("x: " .. point.x .. " y: " .. point.y)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void AddNavmeshCut(string prop_tag) {addnavmeshcut-1}
```cs
void AddNavmeshCut(string prop_tag)
```
#### Description
[](description-start)
Add a navmesh cut according to prop's tag, the navmesh cut will share the same position, rotation and shape of this prop.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `prop_tag` the prop's tag.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- Prop tags can be definined in the terrain editor by selecting a prop and changing the "Prop Tag" field. 
DCEI.AddNavmeshCut("prop_test")
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetPropVisibility(string prop_tag, bool visibility) {setpropvisibility-2}
```cs
void SetPropVisibility(string prop_tag, bool visibility)
```
#### Description
[](description-start)
Set the visibility of prop according to prop tag.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `prop_tag` the prop's tag.
- *bool* `visibility` if true, make the prop visible.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- Prop tags can be definined in the terrain editor by selecting a prop and changing the "Prop Tag" field. 
DCEI.SetPropVisibility("prop_test", false)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void EnableNavmeshCut(string prop_tag, bool enable = True) {enablenavmeshcut-2}
```cs
void EnableNavmeshCut(string prop_tag, bool enable = True)
```
#### Description
[](description-start)
Enable/disable a navmesh cut according to prop tag.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `prop_tag` the prop's tag.
- *bool* `enable` if true, enable the navmesh cut.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- Prop tags can be definined in the terrain editor by selecting a prop and changing the "Prop Tag" field. 
DCEI.AddNavmeshCut("prop_test")
DCEI.EnableNavmeshCut("prop_test", true)
DCEI.Wait(5)
DCEI.EnableNavmeshCut("prop_test", false)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetSpeedTurbo(bool turbo) {setspeedturbo-1}
```cs
void SetSpeedTurbo(bool turbo)
```
#### Description
[](description-start)
Toggles the built-in 2x speed button. Commonly used to disable the 2x speed during a tutorial and cinematic and/or resume it again after the tutorial/cinematic ends.
[](description-end)

#### Parameters
[](parameters-start)
- *bool* `turbo` if true, enable turbo (2x) speed.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
  function game.SetSpeedFactor(factor)
      DCEI.SetSpeedTurbo(false)
      DCEI.SetSpeedFactor(factor)
  end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## object GetDataContextValue(string key) {getdatacontextvalue-1}
```cs
object GetDataContextValue(string key)
```
#### Description
[](description-start)
Used by Wild Sky to get some level data context, such as difficulty or if the level has already been completed by players or not. 
[](description-end)

#### Parameters
[](parameters-start)
- *string* `key` the key for the data index to retrieve.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local completed = DCEI.GetDataContextValue("Completed") --This value returns "true" if players have already COMPLETED the level
if not completed then -- Only play Dialogue if players have not already completed the level
    gameStartBighead()
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## object GetCardDamageStats() {getcarddamagestats-0}
```cs
object GetCardDamageStats()
```
#### Description
[](description-start)
Returns a table containing the card damage stats. Damage effects in the data editor need a "card" field for this damage stacking to be properly counted. When counted, the in-game dev menu can be set to display these damage counts.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function ProcessBattleData()
    local stats = DCEI.GetCardDamageStats()
    local damage_total = 0
    local battle_data = {}

    for unit_name, damage_value in pairs(stats) do
        damage_total = damage_total + damage_value

        table.insert(battle_data, { name = unit_name, damage = damage_value })
    end

    DCEI.ResetCardDamageStats()
    
    return battle_data
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ResetCardDamageStats() {resetcarddamagestats-0}
```cs
void ResetCardDamageStats()
```
#### Description
[](description-start)
Resets the card damage stats.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function ProcessBattleData()
    local stats = DCEI.GetCardDamageStats()
    local damage_total = 0
    local battle_data = {}

    for unit_name, damage_value in pairs(stats) do
        damage_total = damage_total + damage_value

        table.insert(battle_data, { name = unit_name, damage = damage_value })
    end

    DCEI.ResetCardDamageStats()

    return battle_data
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void TriggerOnFocusChange(TypedCallback\<bool> callback) {triggeronfocuschange-1}
```cs
void TriggerOnFocusChange(TypedCallback<bool> callback)
```
#### Description
[](description-start)
This triggers the callback function on focus change (for the game window).
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback\<bool>* `callback` the callback function that is run.

[](parameters-end)

#### Callback Parameters
- *Boolean* `has_focus`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function OnFocusChange()
    DCEI.LogMessage("Focus changed.")
end

DCEI.TriggerOnFocusChange(OnFocusChange)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void GarbageCollect() {garbagecollect-0}
```cs
void GarbageCollect()
```
#### Description
[](description-start)
Runs the garbage collector.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function GarbageCollect()
    DCEI.LogMessage("GC before: " .. collectgarbage("count"))
    DCEI.GarbageCollect()
    DCEI.LogMessage("GC after: " .. collectgarbage("count"))
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## int GetLuaMemorySize() {getluamemorysize-0}
```cs
int GetLuaMemorySize()
```
#### Description
[](description-start)
Returns the lua memory size.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local size = DCEI.GetLuaMemorySize()
DCEI.LogMessage(size)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## double GetLevelDataLoadingTime() {getleveldataloadingtime-0}
```cs
double GetLevelDataLoadingTime()
```
#### Description
[](description-start)
Returns the level data loading time.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local loading_time = DCEI.GetLevelDataLoadingTime()
DCEI.LogMessage(loading_time)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void Wait(float time, bool useRealTime) {wait-2}
```cs
void Wait(float time, bool useRealTime)
```
#### Description
[](description-start)
Waits for the given amount of time. Note that Wait cannot be used inside [TriggerAddUnitSpawnEvent](Trigger-API-Reference-DCEI-Events-Unit#triggeraddunitspawnevent-3) callback functions or main body. 

This type of Wait will hold up all following code in the thread, even code in another function. Sometimes this behavior is necessary. However, when it is not, such behavior can make your code more difficult to troubleshoot and more prone to unexpected behavior, so other types of timers like [Core timers](https://wiki.funovus.com/release/Mods-Core#addduration) should be used. 

For more examples of when different times of waits or timers should be used, see [this notion guide.](https://www.notion.so/funovus/Timers-Waits-ade2f0f581aa4c42a231c1e0e2545a3f?pvs=4) 
[](description-end)

#### Parameters
[](parameters-start)
- *float* `time` the amount of time to wait.
- *bool* `useRealTime` if true, uses real time.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function OnFocusChange()
    DCEI.LogMessage("Focus changed.")
    DCEI.Wait(5, false)
    DCEI.LogMessage("It has been 5 seconds since the focus changed.")
end

DCEI.TriggerOnFocusChange(OnFocusChange)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

