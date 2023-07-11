<div id="toc" markdown="1">
- [Trigger API Reference\DCEI Functions\Unit](#trigger-api-referencedcei-functionsunit)
  * [DefaultHero](#defaulthero-0)
  * [ExtraHeros](#extraheros-0)
  * [CreateUnitFilter](#createunitfilter-1)
  * [CreateUnit](#createunit-7)
  * [CreateSimpleUnit](#createsimpleunit-9)
  * [GetPlayerStats](#getplayerstats-2)
  * [ResetPlayerStats](#resetplayerstats-0)
  * [SetUnitMass](#setunitmass-2)
  * [SetSimpleHealthData](#setsimplehealthdata-2)
  * [SetSimpleUnitMoveTargetUnit](#setsimpleunitmovetargetunit-2)
  * [SetSimpleUnitMoveTargetWorldPosition2D](#setsimpleunitmovetargetworldposition2d-3)
  * [SetSimpleUnitMoveTargetDirection](#setsimpleunitmovetargetdirection-3)
  * [SetSimpleUnitTeamId](#setsimpleunitteamid-2)
  * [ApplyTransformAnimationToSimpleUnit](#applytransformanimationtosimpleunit-2)
  * [ApplyTintColorAnimationToSimpleUnit](#applytintcoloranimationtosimpleunit-2)
  * [AddKillTimerToSimpleUnit](#addkilltimertosimpleunit-2)
  * [AddRemoveTimerToSimpleUnit](#addremovetimertosimpleunit-2)
  * [ApplySimpleMoverGuided](#applysimplemoverguided-6)
  * [ApplySimpleMoverUniformAcceleration](#applysimplemoveruniformacceleration-7)
  * [ApplySimpleMoverSineWave](#applysimplemoversinewave-5)
  * [SetCollisionDamageData](#setcollisiondamagedata-2)
  * [SetCollisionForceData](#setcollisionforcedata-2)
  * [SetCollisionStatsData](#setcollisionstatsdata-2)
  * [SetSimpleUnitToDestroySelfOnCollision](#setsimpleunittodestroyselfoncollision-1)
  * [SetCollisionComponentData](#setcollisioncomponentdata-2)
  * [RegisterSimpleUnitType](#registersimpleunittype-2)
  * [RegisterSimpleDamageNumberStyles](#registersimpledamagenumberstyles-1)
  * [SetDefaultSimpleDamageNumberStyle](#setdefaultsimpledamagenumberstyle-1)
  * [AddTransformAnimationToSimpleDamageNumberStyle](#addtransformanimationtosimpledamagenumberstyle-2)
  * [AddTintColorAnimationToSimpleDamageNumberStyle](#addtintcoloranimationtosimpledamagenumberstyle-2)
  * [ShowSimpleDamageNumber](#showsimpledamagenumber-3)
  * [RegisterSimpleParticle](#registersimpleparticle-1)
  * [CreateSimpleUnitAsync](#createsimpleunitasync-2)
  * [RegisterSimpleLoot](#registersimpleloot-5)
  * [SetSimpleUnitLootData](#setsimpleunitlootdata-3)
  * [CreateUnitAsync](#createunitasync-7)
  * [CreateChildUnit](#createchildunit-6)
  * [CreateChildUnitAsync](#createchildunitasync-4)
  * [KillUnit](#killunit-1)
  * [RemoveUnit](#removeunit-1)
  * [RemoveSimpleUnit](#removesimpleunit-1)
  * [KillSimpleUnit](#killsimpleunit-1)
  * [GetUnitType](#getunittype-1)
  * [GetUnitTypeHealth](#getunittypehealth-1)
  * [GetUnitDisplayName](#getunitdisplayname-1)
  * [GetUnitCategory](#getunitcategory-1)
  * [AttachUnit](#attachunit-3)
  * [DetachUnit](#detachunit-1)
  * [Move](#move-3)
  * [Attack](#attack-2)
  * [DirectionalMove](#directionalmove-3)
  * [TurnUnitTowards](#turnunittowards-4)
  * [GetHealth](#gethealth-1)
  * [AddHealth](#addhealth-2)
  * [AddHealthAsync](#addhealthasync-2)
  * [SetHealth](#sethealth-2)
  * [SetUnitOwner](#setunitowner-2)
  * [SetUnitTeamId](#setunitteamid-2)
  * [SetHealthValueAsync](#sethealthvalueasync-2)
  * [GetMana](#getmana-1)
  * [AddMana](#addmana-2)
  * [AddManaAsync](#addmanaasync-2)
  * [SetMana](#setmana-2)
  * [SetManaValueAsync](#setmanavalueasync-2)
  * [GetUnitFacing2D](#getunitfacing2d-1)
  * [GetUnitBounty](#getunitbounty-1)
  * [GetUnitBehaviorList](#getunitbehaviorlist-1)
  * [GetUnitWeaponList](#getunitweaponlist-1)
  * [GetUnitAbilityList](#getunitabilitylist-1)
  * [ApplyTag](#applytag-4)
  * [RemoveTag](#removetag-3)
  * [GetUnitTagCount](#getunittagcount-2)
  * [GetUnitTagList](#getunittaglist-1)
  * [GetUnitTotalDamage](#getunittotaldamage-1)
  * [GetUnitRallyPoint](#getunitrallypoint-1)
  * [GetUnitWaypointNodeIndex](#getunitwaypointnodeindex-1)
  * [GetUnitPosition2D](#getunitposition2d-1)
  * [GetUnitPosition3D](#getunitposition3d-1)
  * [SetUnitPosition2D](#setunitposition2d-3)
  * [SetUnitPosition3D](#setunitposition3d-4)
  * [SetUnitPosition2DWithInterpolation](#setunitposition2dwithinterpolation-3)
  * [SetUnitPosition3DWithInterpolation](#setunitposition3dwithinterpolation-4)
  * [SetUnitPosition2DAsync](#setunitposition2dasync-3)
  * [SetUnitPosition3DAsync](#setunitposition3dasync-4)
  * [SetUnitPosition2DWithInterpolationAsync](#setunitposition2dwithinterpolationasync-3)
  * [SetUnitPosition3DWithInterpolationAsync](#setunitposition3dwithinterpolationasync-4)
  * [GetUnitRotationEuler](#getunitrotationeuler-1)
  * [SetUnitRotationEuler](#setunitrotationeuler-4)
  * [MoveAttack](#moveattack-3)
  * [UnitExists](#unitexists-1)
  * [SimpleUnitExists](#simpleunitexists-1)
  * [UnitIsAlive](#unitisalive-1)
  * [UnitIsMoving](#unitismoving-1)
  * [EnableUnitSelection](#enableunitselection-1)
  * [DisableUnitSelection](#disableunitselection-1)
  * [GetMaxShield](#getmaxshield-1)
  * [SetMaxShield](#setmaxshield-2)
  * [SetMaxShieldAsync](#setmaxshieldasync-2)
  * [GetShield](#getshield-1)
  * [AddShield](#addshield-2)
  * [SetShield](#setshield-2)
  * [AddShieldAsync](#addshieldasync-2)
  * [SetShieldValueAsync](#setshieldvalueasync-2)
  * [GetMaxHealth](#getmaxhealth-1)
  * [SetMaxHealth](#setmaxhealth-2)
  * [SetMaxHealthAsync](#setmaxhealthasync-2)
  * [GetMaxMana](#getmaxmana-1)
  * [SetMaxMana](#setmaxmana-2)
  * [SetMaxManaAsync](#setmaxmanaasync-2)
  * [SetGoldBounty](#setgoldbounty-2)
  * [SetGoldBountyAsync](#setgoldbountyasync-2)
  * [ApplyWaypoint](#applywaypoint-3)
  * [ApplyWaypoint](#applywaypoint-2)
  * [GetWaypointPaths](#getwaypointpaths-1)
  * [GetWaypointPathStartPosition](#getwaypointpathstartposition-2)
  * [OnUnitSpawning](#onunitspawning-2)
  * [FollowUnit](#followunit-5)
  * [FollowUnitWithOffset](#followunitwithoffset-3)
  * [ClearFollowUnit](#clearfollowunit-1)
  * [SelectUnit](#selectunit-1)
  * [DeselectUnit](#deselectunit-1)
  * [FindUnit](#findunit-1)
  * [FindUnitsByPlayerId](#findunitsbyplayerid-1)
  * [FindUnitsByTeamId](#findunitsbyteamid-1)
  * [FindSimpleUnitsByName](#findsimpleunitsbyname-1)
  * [FindSimpleUnitsByPlayerId](#findsimpleunitsbyplayerid-1)
  * [FindUnits](#findunits-1)
  * [FindUnitAtPosition](#findunitatposition-3)
  * [IsUnitSelected](#isunitselected-1)

</div>

***

# [Trigger API Reference](Trigger-API-Reference)\\DCEI Functions\Unit {Trigger-API-ReferenceDCEI-FunctionsUnit}

[](overview-start)

[](overview-end)

## string DefaultHero() {defaulthero-0}
```cs
string DefaultHero()
```
#### Description
[](description-start)
Wild Sky only. Returns the default hero. 
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
    local hero_names = {}
    table.insert(hero_names, DCEI.DefaultHero())
    for _, hero in ipairs(DCEI.ExtraHeros()) do
        table.insert(hero_names, hero)
    end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## object ExtraHeros() {extraheros-0}
```cs
object ExtraHeros()
```
#### Description
[](description-start)
Wild Sky only. Returns other heroes players have equipped. 
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
    local hero_names = {}
    table.insert(hero_names, DCEI.DefaultHero())
    for _, hero in ipairs(DCEI.ExtraHeros()) do
        table.insert(hero_names, hero)
    end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## unit CreateUnitFilter(UnitFilter filter) {createunitfilter-1}
```cs
unit CreateUnitFilter(UnitFilter filter)
```
#### Description
[](description-start)
Creates a filter for a specific unit type, which can be used with any trigger event API (like `DCEI.TriggerAddUnitSelectedEvent`) that accepts a unit as a parameter. This filter will then cause the event to register only for this specific unit type rather than all unit types. See [Using Trigger Event Filters](https://www.notion.so/Using-Trigger-Event-Filters-3e948c57edf24bacbc69b521c12a4550)
[](description-end)

#### Parameters
[](parameters-start)
- *[UnitFilter](Trigger-API-Reference-DCEI-Types#unitfilter)* `filter` the unit filter to create.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local function UnitSelected()
    DCEI.LogMessage("Player 1 Standard MeleeUnit Selected")
end

local unit_filter = DCEI.CreateUnitFilter({ team = 1, name = DCEI.Unit("Standard MeleeUnit") })
DCEI.TriggerAddUnitSelectedEvent(unit_filter, UnitSelected)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## unit CreateUnit(int teamId, int playerId, string unitType, float x, float z, float dx = 0, float dz = 1) {createunit-7}
```cs
unit CreateUnit(int teamId, int playerId, string unitType, float x, float z, float dx = 0, float dz = 1)
```
#### Description
[](description-start)
Creates a unit at the specified location using default facing.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `teamId` which team to create the unit for. Use `1` for local player and `-1` for enemy.
- *int* `playerId` which player to create the unit for. Use `1` for local player and `-1` for enemy.
- *string* `unitType` name of data for the unit type to create
- *float* `x` the x coordinate of where to create the unit.
- *float* `z` the y coordinate of where to create the unit.
- *float* `dx` a value between -1.0 and 1.0 that indicates the relative direction to face along the x-axis.
- *float* `dz` a value between -1.0 and 1.0 that indicates the relative direction at to face along y-axis.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, z = 16, 16
DCEI.CreateUnit(team_id, player_id, unit_type, x, z)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [TriggerAddUnitSpawnEvent](Trigger-API-Reference-DCEI-Events-Unit#triggeraddunitspawnevent-3)
[](extra-section-end)

## unit CreateSimpleUnit(int playerId, SimpleUnitOptions unitOptions, CollisionOptions collisionOptions, float x, float z, float dx = 0, float dz = 1, float vx = 0, float vz = 0) {createsimpleunit-9}
```cs
unit CreateSimpleUnit(int playerId, SimpleUnitOptions unitOptions, CollisionOptions collisionOptions, float x, float z, float dx = 0, float dz = 1, float vx = 0, float vz = 0)
```
#### Description
[](description-start)
Creates a simple unit moving in a given direction. Simple units are more perform better, allowing for higher unit counts while still maintaining good FPS on mobile devices, but they support less functionality. Features such as behaviors and complex path-finding don't work on simple units. For more info about simple units, see [Simple Units Guide.](https://funovus.notion.site/Simple-Units-Introduction-8a39c47f07d64f4c9549c5947c2c281f)
[](description-end)

#### Parameters
[](parameters-start)
- *int* `playerId` which player to create the unit for. Use `1` for local player and `-1` for enemy.
- *[SimpleUnitOptions](Trigger-API-Reference-DCEI-Types#simpleunitoptions)* `unitOptions` table of options that includes `{type_name, max_health}`
- *[CollisionOptions](Trigger-API-Reference-DCEI-Types#collisionoptions)* `collisionOptions` table of options that includes `{
- *float* `x` the x coordinate of where to create the unit
- *float* `z` the y coordinate of where to create the unit.
- *float* `dx` a value between -1.0 and 1.0 that indicates the relative direction to face along the x-axis.
- *float* `dz` a value between -1.0 and 1.0 that indicates the relative direction at to face along y-axis.
- *float* `vx` a value that indicates the movement velocity along the x-axis.
- *float* `vz` a value that indicates the movement velocity along the y-axis.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local unit_data = {
    Collider = {
        belongs_to_layer_mask = 1,
        collides_with_layer_mask = 3,
        take_damage = false,
        radius = 3,
    },
    Unit = {
        type_name = DCEI.Unit("Collector"),
        max_health = 1,
    },
}
local position = {x = 15, y = 15}
local facing_down = {x = 0, y = -1}
local still_velocity = {x = 0, y = 0}
local unit = DCEI.CreateSimpleUnit(
    player_id,
    unit_data.Unit,
    unit_data.Collider,
    position.x,
    position.y,
    facing_down.x,
    facing_down.y,
    still_velocity.x,
    still_velocity.y
)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## float GetPlayerStats(int playerId, int statsId) {getplayerstats-2}
```cs
float GetPlayerStats(int playerId, int statsId)
```
#### Description
[](description-start)
This is used in conjunction with simple units to improve performance. Ordinary methods of getting damaged dealt or tracking XP are not performant enough or don't work with simple units. For more info about simple units, see [Simple Units Guide.](https://funovus.notion.site/Simple-Units-Introduction-8a39c47f07d64f4c9549c5947c2c281f)

- Enemy playerId is 0, player playerId is 1
- statsId 0 is total damage dealt (collision damage(unit owner) + simple damage(caster owner))
- statsId 1 is total experience gained
- Returns 0 if playerId or statsId not found
[](description-end)

#### Parameters
[](parameters-start)
- *int* `playerId` player to get stat for. `0 = enemy`, `1 = player`
- *int* `statsId` which stat to get. `0 = damage dealt`, `1 = experience`

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua

-- Get XP for player
local experience = DCEI.GetPlayerStats(1, 1)

```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ResetPlayerStats() {resetplayerstats-0}
```cs
void ResetPlayerStats()
```
#### Description
[](description-start)
Resets the stats tracking from `DCEI.GetPlayerStats`
[](description-end)

#### Example Usage
[](example-usage-start)
```lua

-- Rests XP, damage, kill simple stats
DCEI.ResetPlayerStats()

```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetUnitMass(unit unit, float massValue) {setunitmass-2}
```cs
void SetUnitMass(unit unit, float massValue)
```
#### Description
[](description-start)
Set a unit's mass. This affects how units behave whrn [Simple Force](Data-Effect-Simple-Force) is applied. Bigger mass value means higher inertia. Units that don't have mass se default to 1 mass. 
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` unit to set mass value for.
- *float* `massValue` mass value to set.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local unit_data = {
    Collider = {
        belongs_to_layer_mask = 1,
        collides_with_layer_mask = 3,
        take_damage = false,
        radius = 3,
    },
    Unit = {
        type_name = DCEI.Unit("Collector"),
        max_health = 1,
    },
}
local position = {x = 15, y = 15}
local facing_down = {x = 0, y = -1}
local still_velocity = {x = 0, y = 0}
local new_simple_unit = DCEI.CreateSimpleUnit(
    player_id,
    unit_data.Unit,
    unit_data.Collider,
    position.x,
    position.y,
    facing_down.x,
    facing_down.y,
    still_velocity.x,
    still_velocity.y
)

DCEI.SetUnitMass(new_simple_unit, 2)

```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetSimpleHealthData(unit unit, SimpleHealthOptions options) {setsimplehealthdata-2}
```cs
void SetSimpleHealthData(unit unit, SimpleHealthOptions options)
```
#### Description
[](description-start)
Set Simple Health Component for simple or normal unit. For more info about simple units, see [Simple Units Guide.](https://funovus.notion.site/Simple-Units-Introduction-8a39c47f07d64f4c9549c5947c2c281f)
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` unit to set simple health options for.
- *[SimpleHealthOptions](Trigger-API-Reference-DCEI-Types#simplehealthoptions)* `options` set the current and max health values: `{value = 10, max = 10}`

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local unit_data = {
    Collider = {
        belongs_to_layer_mask = 1,
        collides_with_layer_mask = 3,
        take_damage = false,
        radius = 3,
    },
    Unit = {
        type_name = DCEI.Unit("Collector"),
        max_health = 1,
    },
}
local position = {x = 15, y = 15}
local facing_down = {x = 0, y = -1}
local still_velocity = {x = 0, y = 0}
local new_simple_unit = DCEI.CreateSimpleUnit(
    player_id,
    unit_data.Unit,
    unit_data.Collider,
    position.x,
    position.y,
    facing_down.x,
    facing_down.y,
    still_velocity.x,
    still_velocity.y
)

DCEI.SetSimpleHealthData(new_simple_unit, {max = 10, value = 10})

```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetSimpleUnitMoveTargetUnit(unit unit, unit targetUnit) {setsimpleunitmovetargetunit-2}
```cs
void SetSimpleUnitMoveTargetUnit(unit unit, unit targetUnit)
```
#### Description
[](description-start)
Set a given simple unit to move to the target unit. For more info about simple units, see [Simple Units Guide.](https://funovus.notion.site/Simple-Units-Introduction-8a39c47f07d64f4c9549c5947c2c281f)
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` simple unit to issue move command to
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `targetUnit` target unit for the move command

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua

function Spawner:SpawnHostile(unit_properties, position, rotation, velocity, target)
    local unit = DCEI.CreateSimpleUnit(
        PLAYERS.Hostile,
        unit_properties.Unit,
        unit_properties.Collider,
        position.x,
        position.y,
        rotation.x,
        rotation.y,
        velocity.x,
        velocity.y
    )

    DCEI.SetSimpleUnitMoveTargetUnit(unit, target)
    return unit
end

```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetSimpleUnitMoveTargetWorldPosition2D(unit unit, float x, float y) {setsimpleunitmovetargetworldposition2d-3}
```cs
void SetSimpleUnitMoveTargetWorldPosition2D(unit unit, float x, float y)
```
#### Description
[](description-start)
Set Simple Unit Move Target Location. For more info about simple units, see [Simple Units Guide.](https://funovus.notion.site/Simple-Units-Introduction-8a39c47f07d64f4c9549c5947c2c281f)
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` simple unit to issue move command to
- *float* `x` the x coordinate of the target position
- *float* `y` the y coordinate of the target position

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua

function Spawner:SpawnHostile(unit_properties, position, rotation, velocity, target_pos)
    local unit = DCEI.CreateSimpleUnit(
        PLAYERS.Hostile,
        unit_properties.Unit,
        unit_properties.Collider,
        position.x,
        position.y,
        rotation.x,
        rotation.y,
        velocity.x,
        velocity.y
    )

    DCEI.SetSimpleUnitMoveTargetWorldPosition2D(unit, target_pos.x, target_pos.y)
    return unit
end

```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetSimpleUnitMoveTargetDirection(unit unit, float dx, float dy) {setsimpleunitmovetargetdirection-3}
```cs
void SetSimpleUnitMoveTargetDirection(unit unit, float dx, float dy)
```
#### Description
[](description-start)
Set simple unit move target direction. For more info about simple units, see [Simple Units Guide.](https://funovus.notion.site/Simple-Units-Introduction-8a39c47f07d64f4c9549c5947c2c281f)
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` simple unit to issue move command to
- *float* `dx` a value between -1.0 and 1.0 that indicates the relative direction to move along the x-axis.
- *float* `dy` a value between -1.0 and 1.0 that indicates the relative direction to move along the y-axis.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua

function Spawner:SpawnHostile(unit_properties, position, rotation, velocity)
    local unit = DCEI.CreateSimpleUnit(
        PLAYERS.Hostile,
        unit_properties.Unit,
        unit_properties.Collider,
        position.x,
        position.y,
        rotation.x,
        rotation.y,
        velocity.x,
        velocity.y
    )

    DCEI.SetSimpleUnitMoveTargetDirection(unit, move_vector.x, move_vector.y)
    return unit
end

```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetSimpleUnitTeamId(unit unit, int teamId) {setsimpleunitteamid-2}
```cs
void SetSimpleUnitTeamId(unit unit, int teamId)
```
#### Description
[](description-start)
Set the team ID for an existing simple unit. 
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` simple unit to change the team ownership of
- *int* `teamId` team id to set.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function Units.Spawn.Hostile(hostile_data, position, facing, velocity, life)
    local unit_data = {
        Collider = {
            belongs_to_layer_mask = 1,
            collides_with_layer_mask = 3,
            take_damage = false,
            radius = 3,
        },
        Unit = {
            type_name = DCEI.Unit("Collector"),
            max_health = 1,
        },
    }
    local position = {x = 15, y = 15}
    local facing_down = {x = 0, y = -1}
    local still_velocity = {x = 0, y = 0}
    local unit = DCEI.CreateSimpleUnit(
        1,
        unit_data.Unit,
        unit_data.Collider,
        position.x,
        position.y,
        facing_down.x,
        facing_down.y,
        still_velocity.x,
        still_velocity.y
    )
    DCEI.SetSimpleUnitTeamId(unit, TEAMS.Hostile)

    return unit
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ApplyTransformAnimationToSimpleUnit(unit unit, SimpleUnitTransformAnimationOptions options) {applytransformanimationtosimpleunit-2}
```cs
void ApplyTransformAnimationToSimpleUnit(unit unit, SimpleUnitTransformAnimationOptions options)
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

## void ApplyTintColorAnimationToSimpleUnit(unit unit, SimpleUnitTintColorAnimationOptions options) {applytintcoloranimationtosimpleunit-2}
```cs
void ApplyTintColorAnimationToSimpleUnit(unit unit, SimpleUnitTintColorAnimationOptions options)
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

## void AddKillTimerToSimpleUnit(unit unit, float seconds) {addkilltimertosimpleunit-2}
```cs
void AddKillTimerToSimpleUnit(unit unit, float seconds)
```
#### Description
[](description-start)
Kill simple unit after some time.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` simple unit to kill.
- *float* `seconds` seconds until the unit is killed.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function TemporarySimpleUnit()
    local unit_data = {
        Collider = {
            belongs_to_layer_mask = 1,
            collides_with_layer_mask = 3,
            take_damage = false,
            radius = 3,
        },
        Unit = {
            type_name = DCEI.Unit("Collector"),
            max_health = 1,
        },
    }
    local position = {x = 15, y = 15}
    local facing_down = {x = 0, y = -1}
    local still_velocity = {x = 0, y = 0}
    local unit = DCEI.CreateSimpleUnit(
        1,
        unit_data.Unit,
        unit_data.Collider,
        position.x,
        position.y,
        facing_down.x,
        facing_down.y,
        still_velocity.x,
        still_velocity.y
    )
    DCEI.AddKillTimerToSimpleUnit(unit, 15)

    return unit
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void AddRemoveTimerToSimpleUnit(unit unit, float seconds) {addremovetimertosimpleunit-2}
```cs
void AddRemoveTimerToSimpleUnit(unit unit, float seconds)
```
#### Description
[](description-start)
Remove simple unit after some time.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` simple unit to remove.
- *float* `seconds` seconds until the unit is removed.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function TemporarySimpleUnit()
    local unit_data = {
        Collider = {
            belongs_to_layer_mask = 1,
            collides_with_layer_mask = 3,
            take_damage = false,
            radius = 3,
        },
        Unit = {
            type_name = DCEI.Unit("Collector"),
            max_health = 1,
        },
    }
    local position = {x = 15, y = 15}
    local facing_down = {x = 0, y = -1}
    local still_velocity = {x = 0, y = 0}
    local unit = DCEI.CreateSimpleUnit(
        1,
        unit_data.Unit,
        unit_data.Collider,
        position.x,
        position.y,
        facing_down.x,
        facing_down.y,
        still_velocity.x,
        still_velocity.y
    )
    DCEI.AddRemoveTimerToSimpleUnit(unit, 15)

    return unit
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ApplySimpleMoverGuided(unit unit, unit target, float speed, float accelerationMagnitude, float startSeconds, float endSeconds) {applysimplemoverguided-6}
```cs
void ApplySimpleMoverGuided(unit unit, unit target, float speed, float accelerationMagnitude, float startSeconds, float endSeconds)
```
#### Description
[](description-start)
Applies a guided simple mover to a simple unit. 
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` simple unit to apply the mover to.
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `target` target unit.
- *float* `speed` missile speed.
- *float* `accelerationMagnitude` acceleration magnituide.
- *float* `startSeconds` duration before the acceleration begins.
- *float* `endSeconds` time when the acceleration will end. e.g. The total duration will be `endSeconds` - `startSeconds`

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
    local target_unit = DCEI.CreateUnit(-1, -1, DCEI.Unit("MyUnit"), 15, 15)

    local missile_simple_unit = DCEI.CreateSimpleUnit(2, {
        max_health = 10,
        type_name = DCEI.Unit("simple_missile_type"),
    }, {
        belongs_to_layer_mask = 2,
        collides_with_layer_mask = 1,
        radius = 0.2,
        take_damage = false,
    }, caster_position.x, caster_position.y, 1, 1, 0, 0)

    DCEI.ApplySimpleMoverGuided(
        missile_simple_unit, --unit
        target_unit, --target
        15, --speed
        5, --accelerationMagnitude
        0, --startSeconds
        1.0625 --endSeconds
    )
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ApplySimpleMoverUniformAcceleration(unit unit, float velocityX, float velocityY, float accelerationX, float accelerationY, float startSeconds, float endSeconds) {applysimplemoveruniformacceleration-7}
```cs
void ApplySimpleMoverUniformAcceleration(unit unit, float velocityX, float velocityY, float accelerationX, float accelerationY, float startSeconds, float endSeconds)
```
#### Description
[](description-start)
Applies a simple mover to a simple unit. 
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` simple unit to apply the mover to.
- *float* `velocityX` initial x velocity.
- *float* `velocityY` initial y velocity.
- *float* `accelerationX` x acceleration.
- *float* `accelerationY` y acceleration.
- *float* `startSeconds` duration before the acceleration begins.
- *float* `endSeconds` time when the acceleration will end. e.g. The total duration will be `endSeconds` - `startSeconds`

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
    local missile_simple_unit = DCEI.CreateSimpleUnit(2, {
        max_health = 10,
        type_name = DCEI.Unit("simple_missile_type"),
    }, {
        belongs_to_layer_mask = 2,
        collides_with_layer_mask = 1,
        radius = 0.2,
        take_damage = false,
    }, caster_position.x, caster_position.y, 1, 1, 0, 0)

    local distance = Util.VectorMinus(target_position, caster_position)

    DCEI.ApplySimpleMoverUniformAcceleration(
        missile_simple_unit, --unit
        0, --velocityX
        distance.y, --velocityY
        0, --accelerationX
        0, --accelerationY
        0, --startSeconds
        1.0625 --endSeconds
    )
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ApplySimpleMoverSineWave(unit unit, float amplitude, float periodSeconds, float startSeconds, float endSeconds) {applysimplemoversinewave-5}
```cs
void ApplySimpleMoverSineWave(unit unit, float amplitude, float periodSeconds, float startSeconds, float endSeconds)
```
#### Description
[](description-start)
Applies a sine simple mover to a simple unit. 
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` simple unit to apply the mover to.
- *float* `amplitude` the depth of the sine wave curves.
- *float* `periodSeconds` the distance between peaks in the sine wave.
- *float* `startSeconds` duration before the mover begins.
- *float* `endSeconds` time when the mover will end. e.g. The total duration will be `endSeconds` - `startSeconds`

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
    local target_unit = DCEI.CreateUnit(-1, -1, DCEI.Unit("MyUnit"), 15, 15)

    local missile_simple_unit = DCEI.CreateSimpleUnit(2, {
        max_health = 10,
        type_name = DCEI.Unit("simple_missile_type"),
    }, {
        belongs_to_layer_mask = 2,
        collides_with_layer_mask = 1,
        radius = 0.2,
        take_damage = false,
    }, caster_position.x, caster_position.y, 1, 1, 0, 0)

    DCEI.ApplySimpleMoverSineWave(
        missile_simple_unit, --unit
        5, --amplitude
        1, --periodSeconds
        0, --startSeconds
        1.0625 --endSeconds
    )
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetCollisionDamageData(unit unit, CollisionDamageApplierOptions options) {setcollisiondamagedata-2}
```cs
void SetCollisionDamageData(unit unit, CollisionDamageApplierOptions options)
```
#### Description
[](description-start)
Enable applying damage on collision for a given unit. 
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` simple unit to issue move command to
- *[CollisionDamageApplierOptions](Trigger-API-Reference-DCEI-Types#collisiondamageapplieroptions)* `options` a table of options with timing, cooldown, and deal_damage_value

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua

    DCEI.SetCollisionDamageData(self.unit, {
        timing = 1,
        cooldown = 5,
        deal_damage_value = 1,
    })

```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetCollisionForceData(unit unit, CollisionForceApplierOptions options) {setcollisionforcedata-2}
```cs
void SetCollisionForceData(unit unit, CollisionForceApplierOptions options)
```
#### Description
[](description-start)
Enable applying force on collision for a given unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` simple unit to issue move command to
- *[CollisionForceApplierOptions](Trigger-API-Reference-DCEI-Types#collisionforceapplieroptions)* `options` a table of options with timing, cooldown, and deal_damage_value

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua

    DCEI.SetCollisionForceData(self.unit, {
        force = 10, -- Push Force (+)
        factor = -20, -- Change over Time
        duration = 0.5, -- Seconds
    })

```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetCollisionStatsData(unit unit, CollisionStatsApplierOptions options) {setcollisionstatsdata-2}
```cs
void SetCollisionStatsData(unit unit, CollisionStatsApplierOptions options)
```
#### Description
[](description-start)
Enable applying stats on collision for unit
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` simple unit to issue move command to
- *[CollisionStatsApplierOptions](Trigger-API-Reference-DCEI-Types#collisionstatsapplieroptions)* `options` a table of options stats_id, delta_value

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua

DCEI.SetCollisionStatsData(unit, {stats_id = 1, delta_value = 15})

```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetSimpleUnitToDestroySelfOnCollision(unit unit) {setsimpleunittodestroyselfoncollision-1}
```cs
void SetSimpleUnitToDestroySelfOnCollision(unit unit)
```
#### Description
[](description-start)
Set simple unit to destroy self on collision. For more info about simple units, see [Simple Units Guide.](https://funovus.notion.site/Simple-Units-Introduction-8a39c47f07d64f4c9549c5947c2c281f)
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` target unit to enable self-destruction on collision

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua

DCEI.SetSimpleUnitToDestroySelfOnCollision(unit)

```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetCollisionComponentData(unit unit, CollisionOptions options) {setcollisioncomponentdata-2}
```cs
void SetCollisionComponentData(unit unit, CollisionOptions options)
```
#### Description
[](description-start)
Enable collision for unit, with options 
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` target unit to enable self-destruction on collision
- *[CollisionOptions](Trigger-API-Reference-DCEI-Types#collisionoptions)* `options` table of collision options, including radius, take_damage, and collision layers

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua

    -- Setup Collision Data
    DCEI.SetCollisionComponentData(self.unit, {
        belongs_to_layer_mask = 1,
        collides_with_layer_mask = 3,
        take_damage = false,
        radius = 3,
    })

```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void RegisterSimpleUnitType(string name, SimpleUnitTypeOptions options) {registersimpleunittype-2}
```cs
void RegisterSimpleUnitType(string name, SimpleUnitTypeOptions options)
```
#### Description
[](description-start)
Register a simple unit type.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `name` name of simple unit type
- *[SimpleUnitTypeOptions](Trigger-API-Reference-DCEI-Types#simpleunittypeoptions)* `options` table of simple unit type options.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function RegisterUnitType(unit_data, life, damage, speed, mass)
    local meta_data = {
        type_name = DCEI.SimpleUnit("Hostile - Runner"), -- A Registered Simple Unit.
        player_id = -1, -- The Owners Player Id.
        team_id = -1, -- The Owners Team Id.
    }
    local health_data = {
        max = 6, -- The Maximum Health of the Unit.
        value = 6, -- The Current Health of the Unit.
    }
    local loot_data = {
        loot_id = DCEI.SimpleUnit("Experience - Small"), -- The Registered Loot Id to Drop.
        drop_rate = 0.5, -- The Chance [0 - 1] of dropping this Loot when the Unit is Killed.
    }
    local movement_data = {
        max_speed = 15, -- The Max Speed of the Unit.
        velocity = { x = 1, y = 0, z = 1 }, -- The Direction of Travel.
    }
    local collision_data = {
        belongs_to_layer_mask = -1, -- The Layer of the Unit.
        collides_with_layer_mask = 1, -- The Layer the Unit can collide with.
        radius = 0.5, -- The Radius of the Unit.
        takes_damage = true, -- Determines if the Unit can take Damage.
        use_rvo_agent = true, -- Determines if the Unit can Navigate around other RVO Units.
    }
    local collision_damage_data = {
        timing = timing, -- The Timing (Start, Continue, Stop) that will trigger this response.
        deal_damage_value = 4, -- The amount of Damage to deal.
        cooldown = 8, -- The Delay (in Frames) before a target can be Damaged again.
    }
    local options = {
        meta = meta_data,
        health_options = health_data,
        loot_options = loot_data,
        movement_options = movement_data,
        collision_options = collision_data,
        collision_damage_applier_options = collision_damage_data,
        collision_force_applier_options = nil,
        collision_stats_applier_options = nil,
        kill_timer_options = nil,
        remove_timer_options = nil,
        follow_unit = nil,
        mass = 2,
    }
    DCEI.RegisterSimpleUnitType(unit_data.Name, options)
    return unit_data.Name
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void RegisterSimpleDamageNumberStyles(SimpleDamageNumberStyleOptions options) {registersimpledamagenumberstyles-1}
```cs
void RegisterSimpleDamageNumberStyles(SimpleDamageNumberStyleOptions options)
```
#### Description
[](description-start)
Register a simple damage number style. These text settings will be used when this style is used when calling `DCEI.ShowSimpleDamageNumber`
[](description-end)

#### Parameters
[](parameters-start)
- *[SimpleDamageNumberStyleOptions](Trigger-API-Reference-DCEI-Types#simpledamagenumberstyleoptions)* `options` the settings for this style.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local function RegisterSimpleDigitStyle()
    -- damage number style
    DCEI.RegisterSimpleDamageNumberStyles({
        font_type = 1,
        duration_seconds = 0.9,
        distance_between_digits = {
            x = 0.4,
            y = 0,
            z = 0,
        },
    })

    local x_y_ratio = 1
    local x_final = 0.5

    DCEI.AddTransformAnimationToSimpleDamageNumberStyle(1, {
        start_scale = { x = 0, y = 0, z = 0 },
        random_position_offset = { x = 0, y = 0, z = 0 },
        end_scale = { x = x_final * 1.2, y = x_final * x_y_ratio * 1.2, z = x_final * 1.2 },
        end_position = { x = 0, y = 0, z = 0 },
        end_degree = 0,
        pivot = { x = 0, y = 0 },
        start_seconds = 0,
        end_seconds = 0.25,
    })

    DCEI.AddTransformAnimationToSimpleDamageNumberStyle(1, {
        start_scale = { x = x_final * 1.2, y = x_final * x_y_ratio * 1.2, z = x_final * 1.2 },
        random_position_offset = { x = 0, y = 0, z = 0 },
        end_scale = { x = x_final * 0.9, y = x_final * x_y_ratio * 0.9, z = x_final * 0.9 },
        end_position = { x = 0, y = 0, z = 0 },
        end_degree = 0,
        pivot = { x = 0, y = 0 },
        start_seconds = 0.25,
        end_seconds = 0.375,
    })

    DCEI.AddTintColorAnimationToSimpleDamageNumberStyle(1, {
        start_alpha = 0.1,
        end_alpha = 1,
        start_tint_color = { x = 1, y = 1, z = 1 },
        end_tint_color = { x = 1, y = 1, z = 1 },
        start_seconds = 0,
        end_seconds = 0.25,
    })

    DCEI.AddTintColorAnimationToSimpleDamageNumberStyle(1, {
        start_alpha = 1,
        end_alpha = 1,
        start_tint_color = { x = 1, y = 1, z = 1 },
        end_tint_color = { x = 1, y = 1, z = 1 },
        start_seconds = 0.25,
        end_seconds = 0.75,
    })
end

local function OnUnitDamaged(damage, target_unit)
    DCEI.ShowSimpleDamageNumber(target_unit, 1, damage)
end

DCEI.TriggerAddUnitDamageEvent(DCEI.UnitAny, OnUnitDamaged, {critical_only = true})
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetDefaultSimpleDamageNumberStyle(SimpleDamageNumberStyleOptions options) {setdefaultsimpledamagenumberstyle-1}
```cs
void SetDefaultSimpleDamageNumberStyle(SimpleDamageNumberStyleOptions options)
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

## void AddTransformAnimationToSimpleDamageNumberStyle(int idx, SimpleUnitTransformAnimationOptions options) {addtransformanimationtosimpledamagenumberstyle-2}
```cs
void AddTransformAnimationToSimpleDamageNumberStyle(int idx, SimpleUnitTransformAnimationOptions options)
```
#### Description
[](description-start)
Add a transform animation to an simple number style registered with `DCEI.RegisterSimpleDamageNumberStyles` 
[](description-end)

#### Parameters
[](parameters-start)
- *int* `idx` index of the style to add the transform to.
- *[SimpleUnitTransformAnimationOptions](Trigger-API-Reference-DCEI-Types#simpleunittransformanimationoptions)* `options` the settings for the transform animation.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local function RegisterSimpleDigitStyle()
    -- damage number style
    DCEI.RegisterSimpleDamageNumberStyles({
        font_type = 1,
        duration_seconds = 0.9,
        distance_between_digits = {
            x = 0.4,
            y = 0,
            z = 0,
        },
    })

    local x_y_ratio = 1
    local x_final = 0.5

    DCEI.AddTransformAnimationToSimpleDamageNumberStyle(1, {
        start_scale = { x = 0, y = 0, z = 0 },
        random_position_offset = { x = 0, y = 0, z = 0 },
        end_scale = { x = x_final * 1.2, y = x_final * x_y_ratio * 1.2, z = x_final * 1.2 },
        end_position = { x = 0, y = 0, z = 0 },
        end_degree = 0,
        pivot = { x = 0, y = 0 },
        start_seconds = 0,
        end_seconds = 0.25,
    })

    DCEI.AddTransformAnimationToSimpleDamageNumberStyle(1, {
        start_scale = { x = x_final * 1.2, y = x_final * x_y_ratio * 1.2, z = x_final * 1.2 },
        random_position_offset = { x = 0, y = 0, z = 0 },
        end_scale = { x = x_final * 0.9, y = x_final * x_y_ratio * 0.9, z = x_final * 0.9 },
        end_position = { x = 0, y = 0, z = 0 },
        end_degree = 0,
        pivot = { x = 0, y = 0 },
        start_seconds = 0.25,
        end_seconds = 0.375,
    })
end

local function OnUnitDamaged(damage, target_unit)
    DCEI.ShowSimpleDamageNumber(target_unit, 1, damage)
end

DCEI.TriggerAddUnitDamageEvent(DCEI.UnitAny, OnUnitDamaged, {critical_only = true})
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void AddTintColorAnimationToSimpleDamageNumberStyle(int idx, SimpleUnitTintColorAnimationOptions options) {addtintcoloranimationtosimpledamagenumberstyle-2}
```cs
void AddTintColorAnimationToSimpleDamageNumberStyle(int idx, SimpleUnitTintColorAnimationOptions options)
```
#### Description
[](description-start)
Add a tint animation to an simple number style registered with `DCEI.RegisterSimpleDamageNumberStyles` 
[](description-end)

#### Parameters
[](parameters-start)
- *int* `idx` index of the style to add the tint animation to.
- *[SimpleUnitTintColorAnimationOptions](Trigger-API-Reference-DCEI-Types#simpleunittintcoloranimationoptions)* `options` the settings for the tint animation.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local function RegisterSimpleDigitStyle()
    -- damage number style
    DCEI.RegisterSimpleDamageNumberStyles({
        font_type = 1,
        duration_seconds = 0.9,
        distance_between_digits = {
            x = 0.4,
            y = 0,
            z = 0,
        },
    })

    local x_y_ratio = 1
    local x_final = 0.5

    DCEI.AddTransformAnimationToSimpleDamageNumberStyle(1, {
        start_scale = { x = 0, y = 0, z = 0 },
        random_position_offset = { x = 0, y = 0, z = 0 },
        end_scale = { x = x_final * 1.2, y = x_final * x_y_ratio * 1.2, z = x_final * 1.2 },
        end_position = { x = 0, y = 0, z = 0 },
        end_degree = 0,
        pivot = { x = 0, y = 0 },
        start_seconds = 0,
        end_seconds = 0.25,
    })

    DCEI.AddTransformAnimationToSimpleDamageNumberStyle(1, {
        start_scale = { x = x_final * 1.2, y = x_final * x_y_ratio * 1.2, z = x_final * 1.2 },
        random_position_offset = { x = 0, y = 0, z = 0 },
        end_scale = { x = x_final * 0.9, y = x_final * x_y_ratio * 0.9, z = x_final * 0.9 },
        end_position = { x = 0, y = 0, z = 0 },
        end_degree = 0,
        pivot = { x = 0, y = 0 },
        start_seconds = 0.25,
        end_seconds = 0.375,
    })

    DCEI.AddTintColorAnimationToSimpleDamageNumberStyle(1, {
        start_alpha = 0.1,
        end_alpha = 1,
        start_tint_color = { x = 1, y = 1, z = 1 },
        end_tint_color = { x = 1, y = 1, z = 1 },
        start_seconds = 0,
        end_seconds = 0.25,
    })

    DCEI.AddTintColorAnimationToSimpleDamageNumberStyle(1, {
        start_alpha = 1,
        end_alpha = 1,
        start_tint_color = { x = 1, y = 1, z = 1 },
        end_tint_color = { x = 1, y = 1, z = 1 },
        start_seconds = 0.25,
        end_seconds = 0.75,
    })
end

local function OnUnitDamaged(damage, target_unit)
    DCEI.ShowSimpleDamageNumber(target_unit, 1, damage)
end

DCEI.TriggerAddUnitDamageEvent(DCEI.UnitAny, OnUnitDamaged, {critical_only = true})
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ShowSimpleDamageNumber(unit unit, int styleType, float damageValue) {showsimpledamagenumber-3}
```cs
void ShowSimpleDamageNumber(unit unit, int styleType, float damageValue)
```
#### Description
[](description-start)
Display a simple damage number over a unit, using a style registered with `DCEI.RegisterSimpleDamageNumberStyles`.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit for the damage number to appear above.
- *int* `styleType` the style registered with `DCEI.RegisterSimpleDamageNumberStyles`.
- *float* `damageValue` number value to display in the damage text.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local function RegisterSimpleDigitStyle()
    -- damage number style
    DCEI.RegisterSimpleDamageNumberStyles({
        font_type = 1,
        duration_seconds = 0.9,
        distance_between_digits = {
            x = 0.4,
            y = 0,
            z = 0,
        },
    })

    local x_y_ratio = 1
    local x_final = 0.5

    DCEI.AddTransformAnimationToSimpleDamageNumberStyle(1, {
        start_scale = { x = 0, y = 0, z = 0 },
        random_position_offset = { x = 0, y = 0, z = 0 },
        end_scale = { x = x_final * 1.2, y = x_final * x_y_ratio * 1.2, z = x_final * 1.2 },
        end_position = { x = 0, y = 0, z = 0 },
        end_degree = 0,
        pivot = { x = 0, y = 0 },
        start_seconds = 0,
        end_seconds = 0.25,
    })

    DCEI.AddTransformAnimationToSimpleDamageNumberStyle(1, {
        start_scale = { x = x_final * 1.2, y = x_final * x_y_ratio * 1.2, z = x_final * 1.2 },
        random_position_offset = { x = 0, y = 0, z = 0 },
        end_scale = { x = x_final * 0.9, y = x_final * x_y_ratio * 0.9, z = x_final * 0.9 },
        end_position = { x = 0, y = 0, z = 0 },
        end_degree = 0,
        pivot = { x = 0, y = 0 },
        start_seconds = 0.25,
        end_seconds = 0.375,
    })

    DCEI.AddTintColorAnimationToSimpleDamageNumberStyle(1, {
        start_alpha = 0.1,
        end_alpha = 1,
        start_tint_color = { x = 1, y = 1, z = 1 },
        end_tint_color = { x = 1, y = 1, z = 1 },
        start_seconds = 0,
        end_seconds = 0.25,
    })

    DCEI.AddTintColorAnimationToSimpleDamageNumberStyle(1, {
        start_alpha = 1,
        end_alpha = 1,
        start_tint_color = { x = 1, y = 1, z = 1 },
        end_tint_color = { x = 1, y = 1, z = 1 },
        start_seconds = 0.25,
        end_seconds = 0.75,
    })
end

local function OnUnitDamaged(damage, target_unit)
    DCEI.ShowSimpleDamageNumber(target_unit, 1, damage)
end

DCEI.TriggerAddUnitDamageEvent(DCEI.UnitAny, OnUnitDamaged, {critical_only = true})
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void RegisterSimpleParticle(SimpleParticleSpawnOptions options) {registersimpleparticle-1}
```cs
void RegisterSimpleParticle(SimpleParticleSpawnOptions options)
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

## void CreateSimpleUnitAsync(string name, SimpleUnitInstanceOptions options) {createsimpleunitasync-2}
```cs
void CreateSimpleUnitAsync(string name, SimpleUnitInstanceOptions options)
```
#### Description
[](description-start)
Create instances of Simple Unit Type that has been registered with `RegisterSimpleUnitType`
[](description-end)

#### Parameters
[](parameters-start)
- *string* `name` name of simple unit type registered with `RegisterSimpleUnitType`
- *[SimpleUnitInstanceOptions](Trigger-API-Reference-DCEI-Types#simpleunitinstanceoptions)* `options` unit creation options

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local meta_data = {
    type_name = DCEI.SimpleUnit("Hostile - Runner"), -- A Registered Simple Unit.
    player_id = -1, -- The Owners Player Id.
    team_id = -1, -- The Owners Team Id.
}
local health_data = {
    max = 6, -- The Maximum Health of the Unit.
    value = 6, -- The Current Health of the Unit.
}
local loot_data = {
    loot_id = DCEI.SimpleUnit("Experience - Small"), -- The Registered Loot Id to Drop.
    drop_rate = 0.5, -- The Chance [0 - 1] of dropping this Loot when the Unit is Killed.
}
local movement_data = {
    max_speed = 15, -- The Max Speed of the Unit.
    velocity = { x = 1, y = 0, z = 1 }, -- The Direction of Travel.
}
local collision_data = {
    belongs_to_layer_mask = -1, -- The Layer of the Unit.
    collides_with_layer_mask = 1, -- The Layer the Unit can collide with.
    radius = 0.5, -- The Radius of the Unit.
    takes_damage = true, -- Determines if the Unit can take Damage.
    use_rvo_agent = true, -- Determines if the Unit can Navigate around other RVO Units.
}
local collision_damage_data = {
    timing = timing, -- The Timing (Start, Continue, Stop) that will trigger this response.
    deal_damage_value = 4, -- The amount of Damage to deal.
    cooldown = 8, -- The Delay (in Frames) before a target can be Damaged again.
}
local options = {
    meta = meta_data,
    health_options = health_data,
    loot_options = loot_data,
    movement_options = movement_data,
    collision_options = collision_data,
    collision_damage_applier_options = collision_damage_data,
    collision_force_applier_options = nil,
    collision_stats_applier_options = nil,
    kill_timer_options = nil,
    remove_timer_options = nil,
    follow_unit = nil,
    mass = 2,
}
DCEI.RegisterSimpleUnitType("Hostile - Runner", options)
DCEI.CreateSimpleUnitAsync("Hostile - Runner", {
    player_id = -1,
    team_id = -1,
    position = { x = 15, y = 0, z = 15 },
    facing = { x = 0, y = 0 },
    velocity = { x = 1, y = 0, z = 1 },
    follow_unit = nil,
})
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## int RegisterSimpleLoot(string name, int owningPlayerId, SimpleUnitOptions unitOptions, CollisionOptions collisionOptions, CollisionStatsApplierOptions statsOptions) {registersimpleloot-5}
```cs
int RegisterSimpleLoot(string name, int owningPlayerId, SimpleUnitOptions unitOptions, CollisionOptions collisionOptions, CollisionStatsApplierOptions statsOptions)
```
#### Description
[](description-start)
Register loot with a name, owning player, simple unit options, and collision options. Registered loot can then be dropped by simple units by setting the simple unit loot data on creation/registration or after creation with `SetSimpleUnitLootData`. 
[](description-end)

#### Parameters
[](parameters-start)
- *string* `name` name of simple unit type.
- *int* `owningPlayerId` owning player.
- *[SimpleUnitOptions](Trigger-API-Reference-DCEI-Types#simpleunitoptions)* `unitOptions` simple unit options.
- *[CollisionOptions](Trigger-API-Reference-DCEI-Types#collisionoptions)* `collisionOptions` collision options.
- *[CollisionStatsApplierOptions](Trigger-API-Reference-DCEI-Types#collisionstatsapplieroptions)* `statsOptions` collision stats.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
    local unit_options = {
        type_name = DCEI.Unit("XP Item"),
        max_health = 1,
        drop_rate = 0,
    }
    local collision_options = {
        belongs_to_layer_mask = 1,
        collides_with_layer_mask = 2,
        radius = 0.5,
        take_damage = false,
    }
    local collision_stats = {
        stats_id = 1,
        delta_value = reward,
    }

    DCEI.RegisterSimpleLoot("basic_loot", 1, unit_options, collision_options, collision_stats)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetSimpleUnitLootData(unit unit, string name, float dropRate) {setsimpleunitlootdata-3}
```cs
void SetSimpleUnitLootData(unit unit, string name, float dropRate)
```
#### Description
[](description-start)
Set simple unit to have a chance to drop loot that was previously registered with the same name using `DCEI.RegisterSimpleLoot`. For more info about simple units, see [Simple Units Guide.](https://funovus.notion.site/Simple-Units-Introduction-8a39c47f07d64f4c9549c5947c2c281f)
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to add the chance of dropping loot to
- *string* `name` name index of loot, previously registered with `DCEI.RegisterSimpleLoot`
- *float* `dropRate` the chance to drop loot

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
    local unit_options = {
        type_name = DCEI.Unit("XP Item"),
        max_health = 1,
        drop_rate = 0,
    }
    local collision_options = {
        belongs_to_layer_mask = 1,
        collides_with_layer_mask = 2,
        radius = 0.5,
        take_damage = false,
    }
    local collision_stats = {
        stats_id = 1,
        delta_value = reward,
    }

    DCEI.RegisterSimpleLoot("basic_loot", unit_options, collision_options, collision_stats)
    DCEI.SetSimpleUnitLootData(unit, "basic_loot", 1.00)


```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## unit CreateUnitAsync(int teamId, int playerId, string unitType, float x, float z, float dx = 0, float dz = 1) {createunitasync-7}
```cs
unit CreateUnitAsync(int teamId, int playerId, string unitType, float x, float z, float dx = 0, float dz = 1)
```
#### Description
[](description-start)
Creates a unit at the specified location using default facing. Asynchronous, meaning the unit may not finish initializing until the next frame. Wait a full frame before trying to reference the created unit with other APIs.  
[](description-end)

#### Parameters
[](parameters-start)
- *int* `teamId` which team to create the unit for. Use `1` for local player and `-1` for enemy.
- *int* `playerId` which player to create the unit for. Use `1` for local player and `-1` for enemy.
- *string* `unitType` name of data for the unit type to create
- *float* `x` the x coordinate of where to create the unit.
- *float* `z` the y coordinate of where to create the unit.
- *float* `dx` a value between -1.0 and 1.0 that indicates the relative direction to face along the x-axis.
- *float* `dz` a value between -1.0 and 1.0 that indicates the relative direction at to face along y-axis.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, z = 16, 16
DCEI.CreateUnitAsync(team_id, player_id, unit_type, x, z)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## unit CreateChildUnit(unit parent, string unitType, float x, float z, float dx = 0, float dz = 1) {createchildunit-6}
```cs
unit CreateChildUnit(unit parent, string unitType, float x, float z, float dx = 0, float dz = 1)
```
#### Description
[](description-start)
Creates a child unit for a parent unit. Used for Wild Sky to create pets that follow and defend parent units.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `parent` parent unit to create this unit under.
- *string* `unitType` name of data for the unit type to create
- *float* `x` the x coordinate of where to create the unit.
- *float* `z` the y coordinate of where to create the unit.
- *float* `dx` a value between -1.0 and 1.0 that indicates the relative direction to face along the x-axis.
- *float* `dz` a value between -1.0 and 1.0 that indicates the relative direction at to face along y-axis.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local parent_unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)

DCEI.CreateChildUnit(parent_unit, unit_type, x + 1, y + 1)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## unit CreateChildUnitAsync(unit parent, string unitType, float x, float z) {createchildunitasync-4}
```cs
unit CreateChildUnitAsync(unit parent, string unitType, float x, float z)
```
#### Description
[](description-start)
Creates a child unit for a parent unit. Used for Wild Sky to create pets that follow and defend parent units. Asynchronous, meaning the unit may not be created/initialized on the same frame. Wait a full frame before trying to reference the created unit. 
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `parent` parent unit to create this unit under.
- *string* `unitType` name of data for the unit type to create
- *float* `x` the x coordinate of where to create the unit.
- *float* `z` the y coordinate of where to create the unit.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local parent_unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)

DCEI.CreateChildUnitAsync(parent_unit, unit_type, x + 1, y + 1)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void KillUnit(unit unit) {killunit-1}
```cs
void KillUnit(unit unit)
```
#### Description
[](description-start)
Kills a unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to kill.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
DCEI.KillUnit(unit)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [TriggerAddUnitDiedEvent](Trigger-API-Reference-DCEI-Events-Unit#triggeraddunitdiedevent-3)
[](extra-section-end)

## void RemoveUnit(unit unit) {removeunit-1}
```cs
void RemoveUnit(unit unit)
```
#### Description
[](description-start)
Removes a unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to remove.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, z = 16, 16
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, z)
DCEI.RemoveUnit(unit)
```
[](example-usage-end)

[](extra-section-start)
#### Related
-  [TriggerAddUnitRemovedEvent](Trigger-API-Reference-DCEI-Events-Unit#triggeraddunitremovedevent-3)
[](extra-section-end)

## void RemoveSimpleUnit(unit unit) {removesimpleunit-1}
```cs
void RemoveSimpleUnit(unit unit)
```
#### Description
[](description-start)
Remove a simple unit, without triggering death effects. 
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to remove.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local unit_data = {
    Collider = {
        belongs_to_layer_mask = 1,
        collides_with_layer_mask = 3,
        take_damage = false,
        radius = 3,
    },
    Unit = {
        type_name = DCEI.Unit("Collector"),
        max_health = 1,
    },
}
local position = {x = 15, y = 15}
local facing_down = {x = 0, y = -1}
local still_velocity = {x = 0, y = 0}
local unit = DCEI.CreateSimpleUnit(
    player_id,
    unit_data.Unit,
    unit_data.Collider,
    position.x,
    position.y,
    facing_down.x,
    facing_down.y,
    still_velocity.x,
    still_velocity.y
)
DCEI.RemoveSimpleUnit(unit)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void KillSimpleUnit(unit unit) {killsimpleunit-1}
```cs
void KillSimpleUnit(unit unit)
```
#### Description
[](description-start)
Kill simple unit. 
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to kill.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local unit_data = {
    Collider = {
        belongs_to_layer_mask = 1,
        collides_with_layer_mask = 3,
        take_damage = false,
        radius = 3,
    },
    Unit = {
        type_name = DCEI.Unit("Collector"),
        max_health = 1,
    },
}
local position = {x = 15, y = 15}
local facing_down = {x = 0, y = -1}
local still_velocity = {x = 0, y = 0}
local unit = DCEI.CreateSimpleUnit(
    player_id,
    unit_data.Unit,
    unit_data.Collider,
    position.x,
    position.y,
    facing_down.x,
    facing_down.y,
    still_velocity.x,
    still_velocity.y
)
DCEI.KillSimpleUnit(unit)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## string GetUnitType(unit unit) {getunittype-1}
```cs
string GetUnitType(unit unit)
```
#### Description
[](description-start)
Returns the unit name as a string.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to get the name of.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
local unit_type = DCEI.GetUnitType(unit)

-- prints "Standard MeleeUnit
DCEI.LogMessage(unit_name)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## double GetUnitTypeHealth(string unitType) {getunittypehealth-1}
```cs
double GetUnitTypeHealth(string unitType)
```
#### Description
[](description-start)
Returns the maximum health for a unit type.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `unitType` the unit type to get the health of.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local unit_type = DCEI.Unit("Standard MeleeUnit")
local health = DCEI.GetUnitTypeHealth(unit_type)
DCEI.LogMessage(health)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [Max Health (Data)](Data-Unit#max-health)
[](extra-section-end)

## string GetUnitDisplayName(unit unit) {getunitdisplayname-1}
```cs
string GetUnitDisplayName(unit unit)
```
#### Description
[](description-start)
Returns the [Display Name](Data-Unit#display-name) of a unit as a string.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit whose display name to get.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
local display_name = DCEI.GetUnitDisplayName(unit)
DCEI.LogMessage(display_name)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [Display Name (Data)](Data-Unit#display-name)
[](extra-section-end)

## string GetUnitCategory(unit unit) {getunitcategory-1}
```cs
string GetUnitCategory(unit unit)
```
#### Description
[](description-start)
Returns the unit category of a unit as a string (Unit, Missile, or Structure).
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit whose unit category to get.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
local unit_category = DCEI.GetUnitCategory(unit)

-- prints "Unit"
DCEI.LogMessage(unit_category)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void AttachUnit(unit childUnit, unit parentUnit, AttachOffsetOptions option) {attachunit-3}
```cs
void AttachUnit(unit childUnit, unit parentUnit, AttachOffsetOptions option)
```
#### Description
[](description-start)
Attach two units. 

You can use AttachUnit to attach a ["Simple"](https://funovus.notion.site/Simple-Units-Introduction-8a39c47f07d64f4c9549c5947c2c281f) unit to a "Normal" unit. It's bridge for Simple/Complex units working together. 
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `childUnit` the child unit in attach.
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `parentUnit` the parent unit in attach.
- *[AttachOffsetOptions](Trigger-API-Reference-DCEI-Types#attachoffsetoptions)* `option` options to customize how units attach.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local parent_unit = DCEI.FindUnit("Ship")
local child_unit = DCEI.FindUnit("Archer")
DCEI.AttachUnit(child_unit, parent_unit, {explicit_offset = {forward = 3}, use_child_facing = true, orientation_type ="WorldOrientation"})
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void DetachUnit(unit unit) {detachunit-1}
```cs
void DetachUnit(unit unit)
```
#### Description
[](description-start)
If unit is attached to a parent unit, detach this unit from it's parent unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to detach.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local child_unit = DCEI.FindUnit("Archer")
DCEI.DetachUnit(child_unit)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void Move(unit unit, float x, float z) {move-3}
```cs
void Move(unit unit, float x, float z)
```
#### Description
[](description-start)
Issues an order for a unit to move to a target point.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit instance to issue the move command to.
- *float* `x` the x-axis coordinate to move towards.
- *float* `z` the z-axis coordinate to move towards.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)

DCEI.TriggerAddUnitMoveCommandEvent(unit, OnUnitMoveCommand)

function OnUnitMoveCommand(destination)
    local unit = DCEI.TriggeringUnit
    local unit_name = DCEI.GetUnitType(unit)
    local position = DCEI.GetUnitPosition2D(unit)

    local message = string.format("%q is moving to (%.2f, %.2f) from (%.2f, %.2f).", unit_name, destination.x, destination.y, position.x, position.y)
    DCEI.LogMessage(message)
end

DCEI.Move(unit, 15, 15)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [DirectionalMove](#directionalmove-3)
- [MoveAttack](#moveattack-3)
- [TriggerAddUnitMoveCommandEvent](Trigger-API-Reference-DCEI-Events-Unit#triggeraddunitmovecommandevent-2)
[](extra-section-end)

## void Attack(unit unit, unit target) {attack-2}
```cs
void Attack(unit unit, unit target)
```
#### Description
[](description-start)
Issues an order for a unit to attack another unit, causing it to move to get in range if necessary.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the attacking unit.
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `target` the unit to attack.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
local target = DCEI.CreateUnit(team_id, player_id, unit_type, x + 1, y + 1)

DCEI.Attack(unit, target)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [MoveAttack](#moveattack-3)
[](extra-section-end)

## void DirectionalMove(unit target, float right, float up) {directionalmove-3}
```cs
void DirectionalMove(unit target, float right, float up)
```
#### Description
[](description-start)
Issues an order for the unit to move in a specified direction.

**Notes:** The unit will not attempt to navigate around units or obstacles when using Directional Move. This function only runs for a single frame. To have the unit continue to move in a specific direction, this function must be run each frame. This useful for games with that use WASD or joystick movement to control units.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `target` the unit to move.
- *float* `right` a value between -1.0 and 1.0 that indicates the relative speed and direction to move along the x-axis.
- *float* `up` a value between -1.0 and 1.0 that indicates the relative speed and direction to move along the y-axis.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)

function OnJoystickMove()
    local axes = DCEI.TriggeringJoystickAxes
    -- order unit to move in direction of joystick axes
    DCEI.LogMessage("(" .. axes.x .. ", " .. axes.y .. ")")
    DCEI.DirectionalMove(unit, axes.x, axes.y)
end

DCEI.TriggerAddJoystickEvent(OnJoystickMove)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [Move](Trigger-API-Reference-DCEI-Functions-Unit#move-3)
- [TriggerAddUnitMoveCommandEvent](Trigger-API-Reference-DCEI-Events-Unit#triggeraddunitmovecommandevent-2)
- [TriggerAddJoystickEvent](Trigger-API-Reference-DCEI-Events-Input#triggeraddjoystickevent-1)
[](extra-section-end)

## void TurnUnitTowards(unit unit, float dx, float dz, float duration = 0) {turnunittowards-4}
```cs
void TurnUnitTowards(unit unit, float dx, float dz, float duration = 0)
```
#### Description
[](description-start)
Turns a unit to face towards a specified direction. 
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to turn.
- *float* `dx` a value between -1.0 and 1.0 that indicates the relative direction to face along the x-axis.
- *float* `dz` a value between -1.0 and 1.0 that indicates the relative direction at to face along y-axis.
- *float* `duration` duration of time the turning takes

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)

-- Make the unit face southwest
DCEI.TurnUnitTowards(unit, -1.0,-1.0, 3.0)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [GetUnitFacing2D](#getunitfacing2d-1)
- [GetUnitRotationEuler](#getunitrotationeuler-1)
- [SetUnitRotationEuler](#setunitrotationeuler-4)
[](extra-section-end)

## float GetHealth(unit unit) {gethealth-1}
```cs
float GetHealth(unit unit)
```
#### Description
[](description-start)
Returns the current health of a unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to check.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.TriggerAddTimerEventElapsed(function()
    local team_id = 1
    local player_id = 1
    local unit_type = DCEI.Unit("Standard MeleeUnit")
    local x, y = 16, 16
    local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
    DCEI.Wait(1)

    DCEI.SetHealth(unit, 5)
    DCEI.SetMaxHealth(unit, 30)
    local hp = DCEI.GetHealth(unit)
    local max_hp = DCEI.GetMaxHealth(unit)
    DCEI.LogMessage(unit_type .. " has " .. hp .. "/" .. max_hp .. " hp currently.")

    DCEI.AddHealth(unit, 10)
    hp = DCEI.GetHealth(unit)
    DCEI.LogMessage(unit_type .. " has " .. hp .. "/" .. max_hp .. " hp currently.")
end, 
0)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void AddHealth(unit unit, float value) {addhealth-2}
```cs
void AddHealth(unit unit, float value)
```
#### Description
[](description-start)
Increases the current health of a unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to add health to.
- *float* `value` the amount of health to add.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.TriggerAddTimerEventElapsed(function()
    local team_id = 1
    local player_id = 1
    local unit_type = DCEI.Unit("Standard MeleeUnit")
    local x, y = 16, 16
    local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
    DCEI.Wait(1)

    DCEI.SetHealth(unit, 5)
    DCEI.SetMaxHealth(unit, 30)
    local hp = DCEI.GetHealth(unit)
    DCEI.LogMessage(unit_type .. " has " .. hp .. " hp currently.")

    DCEI.AddHealth(unit, 10)
    hp = DCEI.GetHealth(unit)
    DCEI.LogMessage(unit_type .. " has " .. hp .. " hp currently.")
end, 
0)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void AddHealthAsync(unit unit, float value) {addhealthasync-2}
```cs
void AddHealthAsync(unit unit, float value)
```
#### Description
[](description-start)
Increases the current health of a unit. Async, meaning it may not happen on this exact frame.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to add health to.
- *float* `value` the amount of health to add.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.TriggerAddTimerEventElapsed(function()
    local team_id = 1
    local player_id = 1
    local unit_type = DCEI.Unit("Standard MeleeUnit")
    local x, y = 16, 16
    local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
    DCEI.Wait(1)

    DCEI.SetHealth(unit, 5)
    DCEI.SetMaxHealth(unit, 30)
    local hp = DCEI.GetHealth(unit)
    DCEI.LogMessage(unit_type .. " has " .. hp .. " hp currently.")

    DCEI.AddHealthAsync(unit, 10)

    DCEI.Wait(1)

    hp = DCEI.GetHealth(unit)
    DCEI.LogMessage(unit_type .. " has " .. hp .. " hp currently.")
end, 
0)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetHealth(unit unit, float value) {sethealth-2}
```cs
void SetHealth(unit unit, float value)
```
#### Description
[](description-start)
Sets the current health of a unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to set the health of.
- *float* `value` the amount to set it to.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.TriggerAddTimerEventElapsed(function()
    local team_id = 1
    local player_id = 1
    local unit_type = DCEI.Unit("Standard MeleeUnit")
    local x, y = 16, 16
    local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
    DCEI.Wait(1)

    DCEI.SetHealth(unit, 5)
    DCEI.SetMaxHealth(unit, 30)
    local hp = DCEI.GetHealth(unit)
    local max_hp = DCEI.GetMaxHealth(unit)
    DCEI.LogMessage(unit_type .. " has " .. hp .. "/" .. max_hp .. " hp currently.")

    DCEI.AddHealth(unit, 10)
    hp = DCEI.GetHealth(unit)
    DCEI.LogMessage(unit_type .. " has " .. hp .. "/" .. max_hp .. " hp currently.")
end, 
0)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetUnitOwner(unit unit, int playerId) {setunitowner-2}
```cs
void SetUnitOwner(unit unit, int playerId)
```
#### Description
[](description-start)
Sets the owner of a unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to change ownership of.
- *int* `playerId` the player to give the unit to.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function OnRegionEnter()
    DCEI.SetUnitOwner(DCEI.TriggeringUnit, 2)
    DCEI.LogMessage(DCEI.GetUnitPlayerId(DCEI.TriggeringUnit))
end

DCEI.TriggerAddUnitEnterRegionEvent(DCEI.UnitAny, DCEI.RegionAny, OnRegionEnter)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetUnitTeamId(unit unit, int teamId) {setunitteamid-2}
```cs
void SetUnitTeamId(unit unit, int teamId)
```
#### Description
[](description-start)
Sets the team id of a unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to change ownership of.
- *int* `teamId` the team ID to assign to the unit.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function OnRegionEnter()
    DCEI.SetUnitTeamId(DCEI.TriggeringUnit, 2)
    DCEI.LogMessage(DCEI.UnitTeamId(DCEI.TriggeringUnit))
end

DCEI.TriggerAddUnitEnterRegionEvent(DCEI.UnitAny, DCEI.RegionAny, OnRegionEnter)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetHealthValueAsync(unit unit, float amount) {sethealthvalueasync-2}
```cs
void SetHealthValueAsync(unit unit, float amount)
```
#### Description
[](description-start)
Sets the current health of a unit. Asynchronous, so may not happen on this exact frame. 
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to set the health of.
- *float* `amount` the amount to set it to.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.TriggerAddTimerEventElapsed(function()
    local team_id = 1
    local player_id = 1
    local unit_type = DCEI.Unit("Standard MeleeUnit")
    local x, y = 16, 16
    local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
    DCEI.Wait(1)

    DCEI.SetHealthValueAsync(unit, 5)
    DCEI.SetMaxHealth(unit, 30)

    DCEI.Wait(1)
        
    local hp = DCEI.GetHealth(unit)
    local max_hp = DCEI.GetMaxHealth(unit)
    DCEI.LogMessage(unit_type .. " has " .. hp .. "/" .. max_hp .. " hp currently.")

    DCEI.AddHealth(unit, 10)
    hp = DCEI.GetHealth(unit)
    DCEI.LogMessage(unit_type .. " has " .. hp .. "/" .. max_hp .. " hp currently.")
end, 
0)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## float GetMana(unit unit) {getmana-1}
```cs
float GetMana(unit unit)
```
#### Description
[](description-start)
Returns the current mana of a unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to check.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.TriggerAddTimerEventElapsed(function()
    local team_id = 1
    local player_id = 1
    local unit_type = DCEI.Unit("Standard MeleeUnit")
    local x, y = 16, 16
    local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
    DCEI.Wait(1)

    DCEI.SetMaxMana(unit, 20)
    DCEI.SetMana(unit, 5)
    local mana = DCEI.GetMana(unit)
    local max_mana = DCEI.GetMaxMana(unit)
    DCEI.LogMessage(unit_type .. " has " .. mana .. "/" .. max_mana .. " mana currently.")

    DCEI.AddMana(unit, 10)
    mana = DCEI.GetMana(unit)
    DCEI.LogMessage(unit_type .. " has " .. mana .. "/" .. max_mana .. " mana currently.")
end, 
0)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void AddMana(unit unit, float value) {addmana-2}
```cs
void AddMana(unit unit, float value)
```
#### Description
[](description-start)
Increases the current mana of a unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to add mana to.
- *float* `value` the amount to add.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.TriggerAddTimerEventElapsed(function()
    local team_id = 1
    local player_id = 1
    local unit_type = DCEI.Unit("Standard MeleeUnit")
    local x, y = 16, 16
    local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
    DCEI.Wait(1)

    DCEI.SetMaxMana(unit, 20)
    DCEI.SetMana(unit, 5)
    local mana = DCEI.GetMana(unit)
    local max_mana = DCEI.GetMaxMana(unit)
    DCEI.LogMessage(unit_type .. " has " .. mana .. "/" .. max_mana .. " mana currently.")

    DCEI.AddMana(unit, 10)
    mana = DCEI.GetMana(unit)
    DCEI.LogMessage(unit_type .. " has " .. mana .. "/" .. max_mana .. " mana currently.")
end, 
0)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void AddManaAsync(unit unit, float value) {addmanaasync-2}
```cs
void AddManaAsync(unit unit, float value)
```
#### Description
[](description-start)
Increases the current mana of a unit. Asychronous, so may not occur on this frame. 
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to add mana to.
- *float* `value` the amount to add.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.TriggerAddTimerEventElapsed(function()
    local team_id = 1
    local player_id = 1
    local unit_type = DCEI.Unit("Standard MeleeUnit")
    local x, y = 16, 16
    local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
    DCEI.Wait(1)

    DCEI.SetMaxMana(unit, 20)
    DCEI.SetMana(unit, 5)
    local mana = DCEI.GetMana(unit)
    local max_mana = DCEI.GetMaxMana(unit)
    DCEI.LogMessage(unit_type .. " has " .. mana .. "/" .. max_mana .. " mana currently.")

    DCEI.AddManaAsync(unit, 10)

    DCEI.Wait(1)

    mana = DCEI.GetMana(unit)
    DCEI.LogMessage(unit_type .. " has " .. mana .. "/" .. max_mana .. " mana currently.")
end, 
0)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetMana(unit unit, float value) {setmana-2}
```cs
void SetMana(unit unit, float value)
```
#### Description
[](description-start)
Sets the current mana of a unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to add mana to.
- *float* `value` the amount to set it to.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.TriggerAddTimerEventElapsed(function()
    local team_id = 1
    local player_id = 1
    local unit_type = DCEI.Unit("Standard MeleeUnit")
    local x, y = 16, 16
    local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
    DCEI.Wait(1)

    DCEI.SetMaxMana(unit, 20)
    DCEI.SetMana(unit, 5)
    local mana = DCEI.GetMana(unit)
    local max_mana = DCEI.GetMaxMana(unit)
    DCEI.LogMessage(unit_type .. " has " .. mana .. "/" .. max_mana .. " mana currently.")

    DCEI.AddMana(unit, 10)
    mana = DCEI.GetMana(unit)
    DCEI.LogMessage(unit_type .. " has " .. mana .. "/" .. max_mana .. " mana currently.")
end, 
0)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetManaValueAsync(unit unit, float amount) {setmanavalueasync-2}
```cs
void SetManaValueAsync(unit unit, float amount)
```
#### Description
[](description-start)
Sets the current mana of a unit. Asynchronous, so may take a simulation frame to occur. 
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to add mana to.
- *float* `amount` the amount to add.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.TriggerAddTimerEventElapsed(function()
    local team_id = 1
    local player_id = 1
    local unit_type = DCEI.Unit("Standard MeleeUnit")
    local x, y = 16, 16
    local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
    DCEI.Wait(1)

    DCEI.SetMaxMana(unit, 20)
    DCEI.SetManaValueAsync(unit, 5)

    DCEI.Wait(1)

    local mana = DCEI.GetMana(unit)
    local max_mana = DCEI.GetMaxMana(unit)
    DCEI.LogMessage(unit_type .. " has " .. mana .. "/" .. max_mana .. " mana currently.")

    DCEI.AddMana(unit, 10)
    mana = DCEI.GetMana(unit)
    DCEI.LogMessage(unit_type .. " has " .. mana .. "/" .. max_mana .. " mana currently.")
end, 
0)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## Float2 GetUnitFacing2D(unit unit) {getunitfacing2d-1}
```cs
Float2 GetUnitFacing2D(unit unit)
```
#### Description
[](description-start)
Returns the facing of a unit as a vector with X and Y coordinates. 
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to get the position of.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)

local facing = DCEI.GetUnitFacing2D(unit)
DCEI.LogMessage(unit_type .. " is facing " .. facing.x .. ", " .. facing.y)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [TurnUnitTowards](Trigger-API-Reference-DCEI-Functions-Unit#turnunittowards-4)
- [GetUnitRotationEuler](#getunitrotationeuler-1)
- [SetUnitRotationEuler](#setunitrotationeuler-4)
- [Float2](Trigger-API-Reference-DCEI-Types#float2)
[](extra-section-end)

## float GetUnitBounty(unit unit) {getunitbounty-1}
```cs
float GetUnitBounty(unit unit)
```
#### Description
[](description-start)
Returns the [SetGoldBounty](#setgoldbounty-2) of a unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to get the bounty of.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)

DCEI.SetGoldBounty(unit, 5.0)
local bounty = DCEI.GetUnitBounty(unit)
DCEI.LogMessage(unit_type .. " has a bounty of " .. bounty .. " gold.")
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [SetGoldBounty](#setgoldbounty-2)
[](extra-section-end)

## object GetUnitBehaviorList(unit unit) {getunitbehaviorlist-1}
```cs
object GetUnitBehaviorList(unit unit)
```
#### Description
[](description-start)
Returns a list of behaviors on a unit along with their stack count.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to get the list of behaviors from.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local behaviors = DCEI.GetUnitBehaviorList(unit)
for _, behavior in ipairs(behaviors) do
    DCEI.LogMessage(behavior.name .. ": " .. behavior.stack_count)
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## object GetUnitWeaponList(unit unit) {getunitweaponlist-1}
```cs
object GetUnitWeaponList(unit unit)
```
#### Description
[](description-start)
Returns a list of weapons on a unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to get the list of weapons from.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local weapons = DCEI.GetUnitWeaponList(unit)
for _, weapon in ipairs(weapons) do
    DCEI.LogMessage(weapon)
end
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [IsUnitWeaponEnabled](#isunitweaponenabled-2)
[](extra-section-end)

## object GetUnitAbilityList(unit unit) {getunitabilitylist-1}
```cs
object GetUnitAbilityList(unit unit)
```
#### Description
[](description-start)
Returns a list of abilities on a unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to get the list of abilities from.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local abilities = DCEI.GetUnitAbilityList(unit)
for _, ability in ipairs(abilities) do
    DCEI.LogMessage(ability)
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ApplyTag(unit unit, string tagName, float duration, int stackCount) {applytag-4}
```cs
void ApplyTag(unit unit, string tagName, float duration, int stackCount)
```
#### Description
[](description-start)
Applies a set number of tags to a unit for a set duration.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to apply the tags to.
- *string* `tagName` the name of the tag to apply.
- *float* `duration` the length of time to apply the tag for. A value of `-1` applies it permanently.
- *int* `stackCount` the number of tags to apply.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
local tag = DCEI.Tag("Banana")

DCEI.ApplyTag(unit, tag, -1, 5)
local tag_count = DCEI.GetUnitTagCount(unit, tag)
DCEI.LogMessage(tag_count)


DCEI.RemoveTag(unit, tag, 2)
tag_count = DCEI.GetUnitTagCount(unit, tag)
DCEI.LogMessage(tag_count)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void RemoveTag(unit unit, string tagName, int stackCount = 0) {removetag-3}
```cs
void RemoveTag(unit unit, string tagName, int stackCount = 0)
```
#### Description
[](description-start)
Removes a set number of tags from a unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to remove the tags from.
- *string* `tagName` the name of the tag to remove.
- *int* `stackCount` the number of tags to remove.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
local tag = DCEI.Tag("Banana")

DCEI.ApplyTag(unit, tag, -1, 5)
local tag_count = DCEI.GetUnitTagCount(unit, tag)
DCEI.LogMessage(tag_count)


DCEI.RemoveTag(unit, tag, 2)
tag_count = DCEI.GetUnitTagCount(unit, tag)
DCEI.LogMessage(tag_count)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## int GetUnitTagCount(unit unit, string tagName) {getunittagcount-2}
```cs
int GetUnitTagCount(unit unit, string tagName)
```
#### Description
[](description-start)
Returns the tag count of a given tag on a unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to count the tags on.
- *string* `tagName` the name of the tag to count.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
local tag = DCEI.Tag("Banana")

DCEI.ApplyTag(unit, tag, -1, 5)
local tag_count = DCEI.GetUnitTagCount(unit, tag)
DCEI.LogMessage(tag_count)


DCEI.RemoveTag(unit, tag, 2)
tag_count = DCEI.GetUnitTagCount(unit, tag)
DCEI.LogMessage(tag_count)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## object GetUnitTagList(unit unit) {getunittaglist-1}
```cs
object GetUnitTagList(unit unit)
```
#### Description
[](description-start)
Returns a list of tags on a unit
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to get the total damage of.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local tags = DCEI.GetUnitTagList(unit)
for _, tag in ipairs(tags) do
    DCEI.LogMessage(tag)
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## float GetUnitTotalDamage(unit unit) {getunittotaldamage-1}
```cs
float GetUnitTotalDamage(unit unit)
```
#### Description
[](description-start)
Returns the total amount of damage a unit has dealt.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to get the total damage of.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)

local total_damage = DCEI.GetUnitTotalDamage(unit)
DCEI.LogMessage(total_damage)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## Float2 GetUnitRallyPoint(unit unit) {getunitrallypoint-1}
```cs
Float2 GetUnitRallyPoint(unit unit)
```
#### Description
[](description-start)
Get the unit's rally point target, for Wild Sky units using a rally point ability. 
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to get the rally point for.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function TowerHunterHutCreateTraps(unit, quantity)
    local pos = DCEI.GetUnitPosition2D(unit)
    --local target = DCEI.FindClosestPointOnRoad(pos.x, pos.y, true)
    local target = DCEI.GetUnitRallyPoint(unit)
    for i = 1, quantity do
        DCEI.TriggerAddTimerEventElapsed(function()
            DCEI.CreateEffectAtPosition(
                "Tower HunterHut Trapmaster Trap Launch",
                unit,
                target.x + (math.random() * math.random(-1, 1) * 0.9),
                target.y + (math.random() * math.random(-1, 1) * 0.9)
            )
        end, i * 0.125)
    end
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## int GetUnitWaypointNodeIndex(unit unit) {getunitwaypointnodeindex-1}
```cs
int GetUnitWaypointNodeIndex(unit unit)
```
#### Description
[](description-start)
Wild Sky only. Gets the index for the current node along a waypoint path that a unit is traveling, if the unit is currently travelling along a waypoint path. This can then be used with API's like `ApplyWaypoint` to make sure the unit resumes the waypoint at the same position it left it, if you temporarily interrupt the unit. 
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to get the waypoint node index for.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local pos = { x = 31, y = 8 } -- spawn pos
local GoblinWarshipUnit = DCEI.CreateUnit(-1, -1, DCEI.Unit("Goblin Warship"), pos.x, pos.y, 1, -1)
DCEI.ApplyWaypoint(GoblinWarshipUnit, "GoblinWarshipFlyby", 0.5)
DCEI.Wait(5)
local node_index = DCEI.GetUnitWaypointNodeIndex(GoblinWarshipUnit)
DCEI.Stop(GoblinWarshipUnit)
DCEI.Wait(5)
DCEI.ApplyWaypoint(GoblinWarshipUnit, {
    waypoint_name = "GoblinWarshipFlyby",
    dispersal = 0.5,
    use_natural_dispersal = true,
    node_index = node_index
})
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## Float2 GetUnitPosition2D(unit unit) {getunitposition2d-1}
```cs
Float2 GetUnitPosition2D(unit unit)
```
#### Description
[](description-start)
Returns the [position](Trigger-API-Reference-DCEI-Types#float2) of a unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to get the position of.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)

local position = DCEI.GetUnitPosition2D(unit)
DCEI.LogMessage("Unit position " .. position.x .. ", " .. position.y)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## Float3 GetUnitPosition3D(unit unit) {getunitposition3d-1}
```cs
Float3 GetUnitPosition3D(unit unit)
```
#### Description
[](description-start)
Returns the [3D position](Trigger-API-Reference-DCEI-Types#float3) of a unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to get the position of.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)

local position = DCEI.GetUnitPosition3D(unit)
DCEI.LogMessage("Unit position " .. position.x .. ", " .. position.y .. ", " .. position.z)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetUnitPosition2D(unit unit, float x, float z) {setunitposition2d-3}
```cs
void SetUnitPosition2D(unit unit, float x, float z)
```
#### Description
[](description-start)
Sets the [position](Trigger-API-Reference-DCEI-Types#float2) of a unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to set the position of.
- *float* `x` the x-axis coordinate of the new position.
- *float* `z` the z-axis coordinate of the new position.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)

local position = DCEI.GetUnitPosition2D(unit)
DCEI.LogMessage("Unit position " .. position.x .. ", " .. position.y)

DCEI.SetUnitPosition2D(unit, 15, 15)

position = DCEI.GetUnitPosition2D(unit)
DCEI.LogMessage("Unit position " .. position.x .. ", " .. position.y)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [SetUnitPosition2DWithInterpolation](#setunitposition2dwithinterpolation-3)
[](extra-section-end)

## void SetUnitPosition3D(unit unit, float x, float y, float z) {setunitposition3d-4}
```cs
void SetUnitPosition3D(unit unit, float x, float y, float z)
```
#### Description
[](description-start)
Sets the [3D position](Trigger-API-Reference-DCEI-Types#float3) of a unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to set the position of.
- *float* `x` the x-axis coordinate of the new position.
- *float* `y` the y-axis coordinate of the new position.
- *float* `z` the z-axis coordinate of the new position.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)

local position = DCEI.GetUnitPosition3D(unit)
DCEI.LogMessage("Unit position " .. position.x .. ", " .. position.y .. ", " .. position.z)

DCEI.SetUnitPosition3D(unit, 15, 1, 15)

position = DCEI.GetUnitPosition3D(unit)
DCEI.LogMessage("Unit position " .. position.x .. ", " .. position.y .. ", " .. position.z)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [SetUnitPosition3DWithInterpolation](#setunitposition3dwithinterpolation-4)
[](extra-section-end)

## void SetUnitPosition2DWithInterpolation(unit unit, float x, float z) {setunitposition2dwithinterpolation-3}
```cs
void SetUnitPosition2DWithInterpolation(unit unit, float x, float z)
```
#### Description
[](description-start)
Sets the [position](Trigger-API-Reference-DCEI-Types#float2) of a unit while causing it to seemingly leap to that position.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to set the position of.
- *float* `x` the x-axis coordinate of the new position.
- *float* `z` the z-axis coordinate of the new position.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)

local position = DCEI.GetUnitPosition2D(unit)
DCEI.LogMessage("Unit position " .. position.x .. ", " .. position.y)

DCEI.SetUnitPosition2DWithInterpolation(unit, 15, 15)

position = DCEI.GetUnitPosition2D(unit)
DCEI.LogMessage("Unit position " .. position.x .. ", " .. position.y)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [SetUnitPosition2D](Trigger-API-Reference-DCEI-Functions-Unit#setunitposition2d-3)
[](extra-section-end)

## void SetUnitPosition3DWithInterpolation(unit unit, float x, float y, float z) {setunitposition3dwithinterpolation-4}
```cs
void SetUnitPosition3DWithInterpolation(unit unit, float x, float y, float z)
```
#### Description
[](description-start)
Sets the [3D position](Trigger-API-Reference-DCEI-Types#float3) of a unit while causing it to seemingly leap to that position.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to set the position of.
- *float* `x` the x-axis coordinate of the new position.
- *float* `y` the y-axis coordinate of the new position.
- *float* `z` the z-axis coordinate of the new position.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)

local position = DCEI.GetUnitPosition3D(unit)
DCEI.LogMessage("Unit position " .. position.x .. ", " .. position.y .. ", " .. position.z)

DCEI.SetUnitPosition3DWithInterpolation(unit, 15, 1, 15)

position = DCEI.GetUnitPosition3D(unit)
DCEI.LogMessage("Unit position " .. position.x .. ", " .. position.y .. ", " .. position.z)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [SetUnitPosition3D](Trigger-API-Reference-DCEI-Functions-Unit#setunitposition3d-4)
[](extra-section-end)

## void SetUnitPosition2DAsync(unit unit, float x, float z) {setunitposition2dasync-3}
```cs
void SetUnitPosition2DAsync(unit unit, float x, float z)
```
#### Description
[](description-start)
Sets the [position](Trigger-API-Reference-DCEI-Types#float2) of a unit. Asynchronous, so may not occur this simulation frame.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to set the position of.
- *float* `x` the x-axis coordinate of the new position.
- *float* `z` the z-axis coordinate of the new position.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)

local position = DCEI.GetUnitPosition2D(unit)
DCEI.LogMessage("Unit position " .. position.x .. ", " .. position.y)

DCEI.SetUnitPosition2DAsync(unit, 15, 15)

DCEI.Wait(0.0625) -- Wait because the API is async

position = DCEI.GetUnitPosition2D(unit)
DCEI.LogMessage("Unit position " .. position.x .. ", " .. position.y)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetUnitPosition3DAsync(unit unit, float x, float y, float z) {setunitposition3dasync-4}
```cs
void SetUnitPosition3DAsync(unit unit, float x, float y, float z)
```
#### Description
[](description-start)
Sets the [3D position](Trigger-API-Reference-DCEI-Types#float3) of a unit. Asynchronous so may not occur this simulation frame. 
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to set the position of.
- *float* `x` the x-axis coordinate of the new position.
- *float* `y` the y-axis coordinate of the new position.
- *float* `z` the z-axis coordinate of the new position.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)

local position = DCEI.GetUnitPosition3D(unit)
DCEI.LogMessage("Unit position " .. position.x .. ", " .. position.y .. ", " .. position.z)

DCEI.SetUnitPosition3DAsync(unit, 15, 1, 15)

DCEI.Wait(0.0625) -- Wait since the API is async

position = DCEI.GetUnitPosition3D(unit)
DCEI.LogMessage("Unit position " .. position.x .. ", " .. position.y .. ", " .. position.z)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetUnitPosition2DWithInterpolationAsync(unit unit, float x, float z) {setunitposition2dwithinterpolationasync-3}
```cs
void SetUnitPosition2DWithInterpolationAsync(unit unit, float x, float z)
```
#### Description
[](description-start)
Sets the [position](Trigger-API-Reference-DCEI-Types#float2) of a unit while causing it to seemingly leap to that position. Async so may not happen this simulation frame. Recommended you use the non-Async version. 
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to set the position of.
- *float* `x` the x-axis coordinate of the new position.
- *float* `z` the z-axis coordinate of the new position.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)

local position = DCEI.GetUnitPosition2D(unit)
DCEI.LogMessage("Unit position " .. position.x .. ", " .. position.y)

DCEI.SetUnitPosition2DWithInterpolationAsync(unit, 15, 15)

DCEI.Wait(0.0625) -- Wait because this is the Async version of this API.

position = DCEI.GetUnitPosition2D(unit)
DCEI.LogMessage("Unit position " .. position.x .. ", " .. position.y)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetUnitPosition3DWithInterpolationAsync(unit unit, float x, float y, float z) {setunitposition3dwithinterpolationasync-4}
```cs
void SetUnitPosition3DWithInterpolationAsync(unit unit, float x, float y, float z)
```
#### Description
[](description-start)
Sets the [3D position](Trigger-API-Reference-DCEI-Types#float3) of a unit while causing it to seemingly leap to that position. Async so may not occur this frame. Recommended you use the non-async version of this API.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to set the position of.
- *float* `x` the x-axis coordinate of the new position.
- *float* `y` the y-axis coordinate of the new position.
- *float* `z` the z-axis coordinate of the new position.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)

local position = DCEI.GetUnitPosition3D(unit)
DCEI.LogMessage("Unit position " .. position.x .. ", " .. position.y .. ", " .. position.z)

DCEI.SetUnitPosition3DWithInterpolationAsync(unit, 15, 1, 15)

DCEI.Wait(0.0625) -- Wait since this is the async version of the api

position = DCEI.GetUnitPosition3D(unit)
DCEI.LogMessage("Unit position " .. position.x .. ", " .. position.y .. ", " .. position.z)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## Float3 GetUnitRotationEuler(unit unit) {getunitrotationeuler-1}
```cs
Float3 GetUnitRotationEuler(unit unit)
```
#### Description
[](description-start)
Returns the [3d facing](Trigger-API-Reference-DCEI-Types#float3) of a unit as a set of [Euler Angles](https://en.wikipedia.org/wiki/Euler_angles).
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to get the facing of.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)

local rotation = DCEI.GetUnitRotationEuler(unit)
DCEI.LogMessage("Unit rotation: " .. rotation.x .. ", " .. rotation.y .. ", " .. rotation.z)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [TurnUnitTowards](Trigger-API-Reference-DCEI-Functions-Unit#turnunittowards-4)
- [GetUnitFacing2D](Trigger-API-Reference-DCEI-Functions-Unit#getunitfacing2d-1)
- [SetUnitRotationEuler](#setunitrotationeuler-4)
[](extra-section-end)

## void SetUnitRotationEuler(unit unit, float x, float y, float z) {setunitrotationeuler-4}
```cs
void SetUnitRotationEuler(unit unit, float x, float y, float z)
```
#### Description
[](description-start)
Sets the facing of a unit using [Euler Angles](https://en.wikipedia.org/wiki/Euler_angles).
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to set the facing of of.
- *float* `x` the x-axis rotation.
- *float* `y` the y-axis rotation.
- *float* `z` the z-axis rotation.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)

local rotation = DCEI.GetUnitRotationEuler(unit)
DCEI.LogMessage("Unit rotation: " .. rotation.x .. ", " .. rotation.y .. ", " .. rotation.z)

DCEI.SetUnitRotationEuler(unit,90, 150, 270)

rotation = DCEI.GetUnitRotationEuler(unit)
DCEI.LogMessage("Unit rotation: " .. rotation.x .. ", " .. rotation.y .. ", " .. rotation.z)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [TurnUnitTowards](Trigger-API-Reference-DCEI-Functions-Unit#turnunittowards-4)
- [GetUnitFacing2D](Trigger-API-Reference-DCEI-Functions-Unit#getunitfacing2d-1)
- [SetUnitRotationEuler](Trigger-API-Reference-DCEI-Functions-Unit#setunitrotationeuler-4)
[](extra-section-end)

## void MoveAttack(unit target, float x, float z) {moveattack-3}
```cs
void MoveAttack(unit target, float x, float z)
```
#### Description
[](description-start)
Issues an order for a unit to move to a target point while attacking any enemies they come across while moving.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `target` unit to issue the attack-move command to.
- *float* `x` the x-axis coordinate of the target point.
- *float* `z` the z-axis coordinate of the target point.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
local enemy = DCEI.CreateUnit(-1, -1, unit_type, 12, 12)

DCEI.MoveAttack(unit, 10, 10)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [Move](Trigger-API-Reference-DCEI-Functions-Unit#move-3)
- [Attack](Trigger-API-Reference-DCEI-Functions-Unit#attack-2)
- [TriggerAddUnitMoveCommandEvent](Trigger-API-Reference-DCEI-Events-Unit#triggeraddunitmovecommandevent-2)
[](extra-section-end)

## bool UnitExists(unit unit) {unitexists-1}
```cs
bool UnitExists(unit unit)
```
#### Description
[](description-start)
Returns true is a units exists.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to check.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local status = DCEI.UnitExists(DCEI.UnitAny)
DCEI.LogMessage(status)

local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)

status = DCEI.UnitExists(unit)
DCEI.LogMessage(status)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [UnitIsAlive](#unitisalive-1)
- [UnitIsMoving](#unitismoving-1)
[](extra-section-end)

## bool SimpleUnitExists(unit unit) {simpleunitexists-1}
```cs
bool SimpleUnitExists(unit unit)
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

## bool UnitIsAlive(unit unit) {unitisalive-1}
```cs
bool UnitIsAlive(unit unit)
```
#### Description
[](description-start)
Returns true if a unit is alive.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to check.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)

local status = DCEI.UnitIsAlive(unit)
DCEI.LogMessage("Unit is " .. (status and "alive." or "dead."))
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [UnitExists](Trigger-API-Reference-DCEI-Functions-Unit#unitexists-1)
- [UnitIsMoving](#unitismoving-1)
[](extra-section-end)

## bool UnitIsMoving(unit unit) {unitismoving-1}
```cs
bool UnitIsMoving(unit unit)
```
#### Description
[](description-start)
Returns true if a unit is moving.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to check.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)

local status = DCEI.UnitIsMoving(unit)
DCEI.LogMessage("Unit is " .. (status and "" or "not ") .. "moving.")

DCEI.Move(unit, 13, 13)
DCEI.TriggerAddTimerEventElapsed(function()
    status = DCEI.UnitIsMoving(unit)
    DCEI.LogMessage("Unit is " .. (status and "" or "not ") .. "moving.")
end, 0.5, false, true)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [UnitExists](Trigger-API-Reference-DCEI-Functions-Unit#unitexists-1)
- [UnitIsAlive](Trigger-API-Reference-DCEI-Functions-Unit#unitisalive-1)
- [TriggerAddUnitMoveCommandEvent](Trigger-API-Reference-DCEI-Events-Unit#triggeraddunitmovecommandevent-2)
[](extra-section-end)

## void EnableUnitSelection(unit target) {enableunitselection-1}
```cs
void EnableUnitSelection(unit target)
```
#### Description
[](description-start)
Enables selection for a unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `target` the unit to enable selection on.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, z = 16, 16
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, z)

DCEI.DisableUnitSelection(unit)
DCEI.EnableUnitSelection(unit)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [TriggerAddUnitSelectedEvent](Trigger-API-Reference-DCEI-Events-Unit#triggeraddunitselectedevent-2)
- [TriggerAddUnitDeselectedEvent](Trigger-API-Reference-DCEI-Events-Unit#triggeraddunitdeselectedevent-2)
[](extra-section-end)

## void DisableUnitSelection(unit target) {disableunitselection-1}
```cs
void DisableUnitSelection(unit target)
```
#### Description
[](description-start)
Disables selection for a unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `target` the unit to disable selection on.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, z = 16, 16
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, z)

DCEI.DisableUnitSelection(unit)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## float GetMaxShield(unit unit) {getmaxshield-1}
```cs
float GetMaxShield(unit unit)
```
#### Description
[](description-start)
Returns the maximum shields of a unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to check.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.TriggerAddTimerEventElapsed(function()
    local team_id = 1
    local player_id = 1
    local unit_type = DCEI.Unit("Standard MeleeUnit")
    local x, y = 16, 16
    local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
    DCEI.Wait(1)

    DCEI.SetShield(unit, 5)
    DCEI.SetMaxShield(unit,30)
    local shields = DCEI.GetShield(unit)
    local max_shields = DCEI.GetMaxShield(unit)
    DCEI.LogMessage(unit_type .. " has " .. shields .. "/" .. max_shields .. " shields currently.")

    DCEI.AddShield(unit, 10)
    shields = DCEI.GetShield(unit)
    DCEI.LogMessage(unit_type .. " has " .. shields .. "/" .. max_shields .. " shields currently.")
end, 
0.0)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetMaxShield(unit unit, float value) {setmaxshield-2}
```cs
void SetMaxShield(unit unit, float value)
```
#### Description
[](description-start)
Sets the maximum shields for a unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to modify.
- *float* `value` the new maximum for the unit.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.TriggerAddTimerEventElapsed(function()
    local team_id = 1
    local player_id = 1
    local unit_type = DCEI.Unit("Standard MeleeUnit")
    local x, y = 16, 16
    local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
    DCEI.Wait(1)

    DCEI.SetShield(unit, 5)
    DCEI.SetMaxShield(unit,30)
    local shields = DCEI.GetShield(unit)
    local max_shields = DCEI.GetMaxShield(unit)
    DCEI.LogMessage(unit_type .. " has " .. shields .. "/" .. max_shields .. " shields currently.")

    DCEI.AddShield(unit, 10)
    shields = DCEI.GetShield(unit)
    DCEI.LogMessage(unit_type .. " has " .. shields .. "/" .. max_shields .. " shields currently.")
end, 
0.0)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetMaxShieldAsync(unit unit, float value) {setmaxshieldasync-2}
```cs
void SetMaxShieldAsync(unit unit, float value)
```
#### Description
[](description-start)
Sets the maximum shields for a unit. Async version of API; may not occur until a simulation frame tick after it's called. Recommended you use the non-async version of this API. 
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to modify.
- *float* `value` the new maximum for the unit.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.TriggerAddTimerEventElapsed(function()
    local team_id = 1
    local player_id = 1
    local unit_type = DCEI.Unit("Standard MeleeUnit")
    local x, y = 16, 16
    local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
    DCEI.Wait(1)

    DCEI.SetShield(unit, 5)
    DCEI.SetMaxShieldAsync(unit,30)

    DCEI.Wait(0.0625) -- Wait because async

    local shields = DCEI.GetShield(unit)
    local max_shields = DCEI.GetMaxShield(unit)
    DCEI.LogMessage(unit_type .. " has " .. shields .. "/" .. max_shields .. " shields currently.")

    DCEI.AddShield(unit, 10)
    shields = DCEI.GetShield(unit)
    DCEI.LogMessage(unit_type .. " has " .. shields .. "/" .. max_shields .. " shields currently.")
end, 
0.0)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## float GetShield(unit unit) {getshield-1}
```cs
float GetShield(unit unit)
```
#### Description
[](description-start)
Returns the current shields of a unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to check.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.TriggerAddTimerEventElapsed(function()
    local team_id = 1
    local player_id = 1
    local unit_type = DCEI.Unit("Standard MeleeUnit")
    local x, y = 16, 16
    local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
    DCEI.Wait(1)

    DCEI.SetShield(unit, 5)
    DCEI.SetMaxShield(unit,30)
    local shields = DCEI.GetShield(unit)
    local max_shields = DCEI.GetMaxShield(unit)
    DCEI.LogMessage(unit_type .. " has " .. shields .. "/" .. max_shields .. " shields currently.")

    DCEI.AddShield(unit, 10)
    shields = DCEI.GetShield(unit)
    DCEI.LogMessage(unit_type .. " has " .. shields .. "/" .. max_shields .. " shields currently.")
end, 
0.0)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void AddShield(unit unit, float value) {addshield-2}
```cs
void AddShield(unit unit, float value)
```
#### Description
[](description-start)
Increases the current shields of a unit by a set amount up to its maximum.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to add shields to.
- *float* `value` amount of shields to add.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.TriggerAddTimerEventElapsed(function()
    local team_id = 1
    local player_id = 1
    local unit_type = DCEI.Unit("Standard MeleeUnit")
    local x, y = 16, 16
    local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
    DCEI.Wait(1)

    DCEI.SetShield(unit, 5)
    DCEI.SetMaxShield(unit,30)
    local shields = DCEI.GetShield(unit)
    local max_shields = DCEI.GetMaxShield(unit)
    DCEI.LogMessage(unit_type .. " has " .. shields .. "/" .. max_shields .. " shields currently.")

    DCEI.AddShield(unit, 10)
    shields = DCEI.GetShield(unit)
    DCEI.LogMessage(unit_type .. " has " .. shields .. "/" .. max_shields .. " shields currently.")
end, 
0.0)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetShield(unit unit, float value) {setshield-2}
```cs
void SetShield(unit unit, float value)
```
#### Description
[](description-start)
Set the current shields of a unit to a set amount up to its maximum.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to add shields to.
- *float* `value` the amount of shields to add.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.TriggerAddTimerEventElapsed(function()
    local team_id = 1
    local player_id = 1
    local unit_type = DCEI.Unit("Standard MeleeUnit")
    local x, y = 16, 16
    local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
    DCEI.Wait(1)

    DCEI.SetShield(unit, 5)
    DCEI.SetMaxShield(unit,30)
    local shields = DCEI.GetShield(unit)
    local max_shields = DCEI.GetMaxShield(unit)
    DCEI.LogMessage(unit_type .. " has " .. shields .. "/" .. max_shields .. " shields currently.")

    DCEI.AddShield(unit, 10)
    shields = DCEI.GetShield(unit)
    DCEI.LogMessage(unit_type .. " has " .. shields .. "/" .. max_shields .. " shields currently.")
end, 
0.0)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void AddShieldAsync(unit unit, float value) {addshieldasync-2}
```cs
void AddShieldAsync(unit unit, float value)
```
#### Description
[](description-start)
Increases the current shields of a unit by a set amount up to its maximum. Async so may not occur on the same simulation frame as it's called. Recommended you use the non-async version of this API.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to add shields to.
- *float* `value` amount of shields to add.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.TriggerAddTimerEventElapsed(function()
    local team_id = 1
    local player_id = 1
    local unit_type = DCEI.Unit("Standard MeleeUnit")
    local x, y = 16, 16
    local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
    DCEI.Wait(1)

    DCEI.SetShield(unit, 5)
    DCEI.SetMaxShield(unit,30)
    local shields = DCEI.GetShield(unit)
    local max_shields = DCEI.GetMaxShield(unit)
    DCEI.LogMessage(unit_type .. " has " .. shields .. "/" .. max_shields .. " shields currently.")

    DCEI.AddShieldAsync(unit, 10)

    DCEI.Wait(0.0625) -- Wait because of async api

    shields = DCEI.GetShield(unit)
    DCEI.LogMessage(unit_type .. " has " .. shields .. "/" .. max_shields .. " shields currently.")
end, 
0.0)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetShieldValueAsync(unit unit, float amount) {setshieldvalueasync-2}
```cs
void SetShieldValueAsync(unit unit, float amount)
```
#### Description
[](description-start)
Set the current shields of a unit to a set amount up to its maximum. Async so may not occur util after the current simulation frame. Recommended you use the non-async API instead.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to add shields to.
- *float* `amount` amount of shields to add.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.TriggerAddTimerEventElapsed(function()
    local team_id = 1
    local player_id = 1
    local unit_type = DCEI.Unit("Standard MeleeUnit")
    local x, y = 16, 16
    local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
    DCEI.Wait(1)

    DCEI.SetShieldValueAsync(unit, 5)

    DCEI.Wait(0.0625) -- Wait for async API 

    DCEI.SetMaxShield(unit,30)
    local shields = DCEI.GetShield(unit)
    local max_shields = DCEI.GetMaxShield(unit)
    DCEI.LogMessage(unit_type .. " has " .. shields .. "/" .. max_shields .. " shields currently.")

    DCEI.AddShield(unit, 10)
    shields = DCEI.GetShield(unit)
    DCEI.LogMessage(unit_type .. " has " .. shields .. "/" .. max_shields .. " shields currently.")
end, 
0.0)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## float GetMaxHealth(unit unit) {getmaxhealth-1}
```cs
float GetMaxHealth(unit unit)
```
#### Description
[](description-start)
Returns the maximum health of a unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to check.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.TriggerAddTimerEventElapsed(function()
    local team_id = 1
    local player_id = 1
    local unit_type = DCEI.Unit("Standard MeleeUnit")
    local x, y = 16, 16
    local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
    DCEI.Wait(1)

    DCEI.SetHealth(unit, 5)
    DCEI.SetMaxHealth(unit,30)
    local hp = DCEI.GetHealth(unit)
    local max_hp = DCEI.GetMaxHealth(unit)
    DCEI.LogMessage(unit_type .. " has " .. hp .. "/" .. max_hp .. " hp currently.")

    DCEI.AddHealth(unit, 10)
    hp = DCEI.GetHealth(unit)
    DCEI.LogMessage(unit_type .. " has " .. hp .. "/" .. max_hp .. " hp currently.")
end, 
0.0)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetMaxHealth(unit unit, float value) {setmaxhealth-2}
```cs
void SetMaxHealth(unit unit, float value)
```
#### Description
[](description-start)
Sets the maximum health for a unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to modify.
- *float* `value` the new maximum for the unit.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.TriggerAddTimerEventElapsed(function()
    local team_id = 1
    local player_id = 1
    local unit_type = DCEI.Unit("Standard MeleeUnit")
    local x, y = 16, 16
    local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
    DCEI.Wait(1)

    DCEI.SetHealth(unit, 5)
    DCEI.SetMaxHealth(unit,30)
    local hp = DCEI.GetHealth(unit)
    local max_hp = DCEI.GetMaxHealth(unit)
    DCEI.LogMessage(unit_type .. " has " .. hp .. "/" .. max_hp .. " hp currently.")

    DCEI.AddHealth(unit, 10)
    hp = DCEI.GetHealth(unit)
    DCEI.LogMessage(unit_type .. " has " .. hp .. "/" .. max_hp .. " hp currently.")
end, 
0.0)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetMaxHealthAsync(unit unit, float value) {setmaxhealthasync-2}
```cs
void SetMaxHealthAsync(unit unit, float value)
```
#### Description
[](description-start)
Sets the maximum health for a unit. Async, so may not occur until next simulation frame. Recommended you use the non-async version of this API.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to modify.
- *float* `value` the new maximum for the unit.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.TriggerAddTimerEventElapsed(function()
    local team_id = 1
    local player_id = 1
    local unit_type = DCEI.Unit("Standard MeleeUnit")
    local x, y = 16, 16
    local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
    DCEI.Wait(1)

    DCEI.SetHealth(unit, 5)
    DCEI.SetMaxHealthAsync(unit,30)

    DCEI.Wait(0.0625) -- Wait for async API

    local hp = DCEI.GetHealth(unit)
    local max_hp = DCEI.GetMaxHealth(unit)
    DCEI.LogMessage(unit_type .. " has " .. hp .. "/" .. max_hp .. " hp currently.")

    DCEI.AddHealth(unit, 10)
    hp = DCEI.GetHealth(unit)
    DCEI.LogMessage(unit_type .. " has " .. hp .. "/" .. max_hp .. " hp currently.")
end, 
0.0)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## float GetMaxMana(unit unit) {getmaxmana-1}
```cs
float GetMaxMana(unit unit)
```
#### Description
[](description-start)
Returns the maximum mana of a unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to check.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.TriggerAddTimerEventElapsed(function()
    local team_id = 1
    local player_id = 1
    local unit_type = DCEI.Unit("Standard MeleeUnit")
    local x, y = 16, 16
    local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
    DCEI.Wait(1)

    DCEI.SetMaxMana(unit, 20)
    DCEI.SetMana(5)
    local mana = DCEI.GetMana(unit)
    local max_mana = DCEI.GetMaxMana(unit)
    DCEI.LogMessage(unit_type .. " has " .. mana .. "/" .. max_mana .. " mana currently.")

    DCEI.AddMana(unit, 10)
    mana = DCEI.GetMana(unit)
    DCEI.LogMessage(unit_type .. " has " .. mana .. "/" .. max_mana .. " mana currently.")
end, 
0.0)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetMaxMana(unit unit, float value) {setmaxmana-2}
```cs
void SetMaxMana(unit unit, float value)
```
#### Description
[](description-start)
Sets the maximum mana for a unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to modify.
- *float* `value` the new maximum for the unit.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.TriggerAddTimerEventElapsed(function()
    local team_id = 1
    local player_id = 1
    local unit_type = DCEI.Unit("Standard MeleeUnit")
    local x, y = 16, 16
    local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
    DCEI.Wait(1)

    DCEI.SetMaxMana(unit, 20)
    DCEI.SetMana(5)
    local mana = DCEI.GetMana(unit)
    local max_mana = DCEI.GetMaxMana(unit)
    DCEI.LogMessage(unit_type .. " has " .. mana .. "/" .. max_mana .. " mana currently.")

    DCEI.AddMana(unit, 10)
    mana = DCEI.GetMana(unit)
    DCEI.LogMessage(unit_type .. " has " .. mana .. "/" .. max_mana .. " mana currently.")
end, 
0.0)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetMaxManaAsync(unit unit, float value) {setmaxmanaasync-2}
```cs
void SetMaxManaAsync(unit unit, float value)
```
#### Description
[](description-start)
Sets the maximum mana for a unit. Async, so may not occur until next simulation frame. Recommended you use the non-async API. 
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to modify.
- *float* `value` the new maximum for the unit.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.TriggerAddTimerEventElapsed(function()
    local team_id = 1
    local player_id = 1
    local unit_type = DCEI.Unit("Standard MeleeUnit")
    local x, y = 16, 16
    local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
    DCEI.Wait(1)

    DCEI.SetMaxManaAsync(unit, 20)

    DCEI.Wait(0.0625) -- Async version of API

    DCEI.SetMana(5)
    local mana = DCEI.GetMana(unit)
    local max_mana = DCEI.GetMaxMana(unit)
    DCEI.LogMessage(unit_type .. " has " .. mana .. "/" .. max_mana .. " mana currently.")

    DCEI.AddMana(unit, 10)
    mana = DCEI.GetMana(unit)
    DCEI.LogMessage(unit_type .. " has " .. mana .. "/" .. max_mana .. " mana currently.")
end, 
0.0)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetGoldBounty(unit unit, float amount) {setgoldbounty-2}
```cs
void SetGoldBounty(unit unit, float amount)
```
#### Description
[](description-start)
Sets the [SetGoldBounty](Trigger-API-Reference-DCEI-Functions-Unit#setgoldbounty-2) for a unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to set the bounty on.
- *float* `amount` the amount of gold the unit is worth.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)

DCEI.SetGoldBounty(unit, 5.0)
local bounty = DCEI.GetUnitBounty(unit)
DCEI.LogMessage(unit_type .. " has a bounty of " .. bounty .. " gold.")
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [GetUnitBounty](Trigger-API-Reference-DCEI-Functions-Unit#getunitbounty-1)
[](extra-section-end)

## void SetGoldBountyAsync(unit unit, float amount) {setgoldbountyasync-2}
```cs
void SetGoldBountyAsync(unit unit, float amount)
```
#### Description
[](description-start)
Sets the [SetGoldBounty](Trigger-API-Reference-DCEI-Functions-Unit#setgoldbounty-2) for a unit. Async so may not occur until the next simulation frame. Recommended you use the non-async version instead. 
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to set the bounty on.
- *float* `amount` the amount of gold the unit is worth.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)

DCEI.SetGoldBountyAsync(unit, 5.0)

DCEI.Wait(0.0625) -- Wait because of async API

local bounty = DCEI.GetUnitBounty(unit)
DCEI.LogMessage(unit_type .. " has a bounty of " .. bounty .. " gold.")
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ApplyWaypoint(unit unit, string waypointName, float waypointDispersal) {applywaypoint-3}
```cs
void ApplyWaypoint(unit unit, string waypointName, float waypointDispersal)
```
#### Description
[](description-start)
Make a unit follow a waypoint using a certain dispersal. Wild Sky only. 
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to apply waypoints to.
- *string* `waypointName` the name of the waypoint path as defined in the terrain editor.
- *float* `waypointDispersal` distance offset from the center of the waypoint path the unit should walk.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local pos = { x = 31, y = 8 } -- spawn pos
local GoblinWarshipUnit = DCEI.CreateUnit(-1, -1, DCEI.Unit("Goblin Warship"), pos.x, pos.y, 1, -1)
DCEI.ApplyWaypoint(GoblinWarshipUnit, "GoblinWarshipFlyby", 0.5)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ApplyWaypoint(unit unit, WaypointOptions option) {applywaypoint-2}
```cs
void ApplyWaypoint(unit unit, WaypointOptions option)
```
#### Description
[](description-start)
Make a unit follow a waypoint using additional options. Wild Sky only. 
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to apply waypoints to.
- *[WaypointOptions](Trigger-API-Reference-DCEI-Types#waypointoptions)* `option` waypoint options including waypoint name, dispersal, use natural dispersal flag, and node index.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local pos = { x = 31, y = 8 } -- spawn pos
local GoblinWarshipUnit = DCEI.CreateUnit(-1, -1, DCEI.Unit("Goblin Warship"), pos.x, pos.y, 1, -1)
DCEI.ApplyWaypoint(GoblinWarshipUnit, {
    waypoint_name = "GoblinWarshipFlyby",
    dispersal = 0.5,
    use_natural_dispersal = true,
    node_index = 2
})
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## object GetWaypointPaths(bool includeRallyDisabledLanes) {getwaypointpaths-1}
```cs
object GetWaypointPaths(bool includeRallyDisabledLanes)
```
#### Description
[](description-start)
Wild Sky feature. Get all waypoint paths defined in the terrain editor.
[](description-end)

#### Parameters
[](parameters-start)
- *bool* `includeRallyDisabledLanes` if true, includes waypoint paths with the "rallyDisabled" flag checked.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function HeroMakaWolfSpawner(u)
    -- First we assign the spawner a waypoint
    local paths = DCEI.GetWaypointPaths()

    local path = paths[(1 % #paths) + 1]
    local start = DCEI.GetWaypointPathStartPosition(path)
    -- Second we find the closest tower slot
    local slot = game.GetClosestUnit(DCEI.FindUnits(DCEI.Unit("Tower Slot")), start)
    if slot and slot ~= DCEI.UnitAny then
        -- Third we get a polar offset from the slot toward the start
        local pos = game.PolarOffsetFromUnit2D(slot, 0.5, game.AngleBetweenUnitAndPoint2D(slot, start))
        -- Finally we find the closest point on a road and translate the spawner
        local road = DCEI.FindClosestPointOnRoad(pos.x, pos.y, true)
        DCEI.SetUnitPosition2DAsync(u, road.x, road.y)
    end
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## Float2 GetWaypointPathStartPosition(string name, float dispersal = 0.5) {getwaypointpathstartposition-2}
```cs
Float2 GetWaypointPathStartPosition(string name, float dispersal = 0.5)
```
#### Description
[](description-start)
Wild Sky feature. Get the starting point of a given waypoint path. 
[](description-end)

#### Parameters
[](parameters-start)
- *string* `name` name of the waypoint path to get the starting coordinants for.
- *float* `dispersal` range of dispersal from the center of the waypoint path.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function HeroMakaWolfSpawner(u)
    -- First we assign the spawner a waypoint
    local paths = DCEI.GetWaypointPaths()

    local path = paths[(1 % #paths) + 1]
    local start = DCEI.GetWaypointPathStartPosition(path)
    -- Second we find the closest tower slot
    local slot = game.GetClosestUnit(DCEI.FindUnits(DCEI.Unit("Tower Slot")), start)
    if slot and slot ~= DCEI.UnitAny then
        -- Third we get a polar offset from the slot toward the start
        local pos = game.PolarOffsetFromUnit2D(slot, 0.5, game.AngleBetweenUnitAndPoint2D(slot, start))
        -- Finally we find the closest point on a road and translate the spawner
        local road = DCEI.FindClosestPointOnRoad(pos.x, pos.y, true)
        DCEI.SetUnitPosition2DAsync(u, road.x, road.y)
    end
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void OnUnitSpawning(unit unit, float duration) {onunitspawning-2}
```cs
void OnUnitSpawning(unit unit, float duration)
```
#### Description
[](description-start)
Tells the hardcoded Hero Portrait UI to display a countdown duration on the hero portrait until the hero revives.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the hero unit which died.
- *float* `duration` the duration until the hero revives.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local HERO_RESPAWN_PERIOD = 15

function OnHeroDied()
    local u = DCEI.TriggeringUnit
    local heroType = DCEI.GetUnitType(u)
    local revivePoint = DCEI.GetUnitPosition2D(u)
    local tombstone = DCEI.CreateUnitAsync(1, 1, HERO_TOMBSTONE_NAME, revivePoint.x, revivePoint.y)

    -- Respawn the hero after HERO_RESPAWN_PERIOD seconds
    DCEI.TriggerAddTimerEventElapsed(function()
        HeroRevive(heroType, revivePoint.x, revivePoint.y)
    end, HERO_RESPAWN_PERIOD)

    -- Use this same HERO_RESPAWN_PERIOD to display cooldown over hero portrait
    DCEI.OnUnitSpawning(DCEI.TriggeringUnit, HERO_RESPAWN_PERIOD)
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void FollowUnit(unit unit, unit targetUnit, float offsetX, float offsetY, float distanceMax) {followunit-5}
```cs
void FollowUnit(unit unit, unit targetUnit, float offsetX, float offsetY, float distanceMax)
```
#### Description
[](description-start)
Commands a unit to follow another unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to command.
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `targetUnit` the unit to follow.
- *float* `offsetX` x offset from the target unit.
- *float* `offsetY` y offset from the target unit.
- *float* `distanceMax` if the distance between the units becomes larger than this, the follower unit will move towards the target unit, using the given offsets.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local target = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)

DCEI.FollowUnit(unit, target, 1.0, 1.0, 2.0)

DCEI.Move(target, 10, 10)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void FollowUnitWithOffset(unit unit, unit targetUnit, float offset) {followunitwithoffset-3}
```cs
void FollowUnitWithOffset(unit unit, unit targetUnit, float offset)
```
#### Description
[](description-start)
Commands a unit to follow another unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to command.
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `targetUnit` the unit to follow.
- *float* `offset` offset distance from the target unit.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local target = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)

DCEI.FollowUnit(unit, target, 2.0)

DCEI.Move(target, 10, 10)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ClearFollowUnit(unit unit) {clearfollowunit-1}
```cs
void ClearFollowUnit(unit unit)
```
#### Description
[](description-start)
Clears the order for a unit to follow another unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to command.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
local target = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)

DCEI.FollowUnit(unit, target, 1.0, 1.0, 2.0)

DCEI.Move(target, 10, 10)

DCEI.TriggerAddTimerEventElapsed(function()
    DCEI.ClearFollowUnit(unit)
end, 2.0, false, true)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SelectUnit(unit unit) {selectunit-1}
```cs
void SelectUnit(unit unit)
```
#### Description
[](description-start)
Selects a unit for the player.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to select.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, z = 16, 16
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, z)

DCEI.SelectUnit(unit)

if DCEI.IsUnitSelected then
    DCEI.LogMessage(unit_type .. " is selected.")
end

DCEI.TriggerAddTimerEventElapsed(function()
    DCEI.Deselect(unit)
end, 2.0, false, true)

if DCEI.IsUnitSelected then
    DCEI.LogMessage(unit_type .. " is selected.")
else
    DCEI.LogMessage(unit_type .. " is not selected.")
end
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [DeselectUnit](#deselectunit-1)
- [IsUnitSelected](#isunitselected-1)
[](extra-section-end)

## void DeselectUnit(unit unit) {deselectunit-1}
```cs
void DeselectUnit(unit unit)
```
#### Description
[](description-start)
Deselects a unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to deselect.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, z = 16, 16
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, z)

DCEI.SelectUnit(unit)

if DCEI.IsUnitSelected then
    DCEI.LogMessage(unit_type .. " is selected.")
end

DCEI.TriggerAddTimerEventElapsed(function()
    DCEI.Deselect(unit)
end, 2.0, false, true)

if DCEI.IsUnitSelected then
    DCEI.LogMessage(unit_type .. " is selected.")
else
    DCEI.LogMessage(unit_type .. " is not selected.")
end
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [SelectUnit](Trigger-API-Reference-DCEI-Functions-Unit#selectunit-1)
- [IsUnitSelected](#isunitselected-1)
[](extra-section-end)

## unit FindUnit(string name) {findunit-1}
```cs
unit FindUnit(string name)
```
#### Description
[](description-start)
Attempts to return an existing unit from its name. 
[](description-end)

#### Parameters
[](parameters-start)
- *string* `name` the name of the unit type to find.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 12, 12
local unit = {}
local i
for i = 1, 5 do
    unit[i] = DCEI.CreateUnit(i, i % 2, unit_type, x+i, y+i)
    DCEI.SetHealth(unit[i], i)
end

local test_subject = DCEI.FindUnit(unit_type)

local hp = DCEI.GetHealth(test_subject)
DCEI.LogMessage(unit_type .. " has " .. hp .. " hp currently.")
DCEI.SetUnitPosition2D(test_subject,14,10)

test_subject = DCEI.FindUnitAtPosition(unit_type, 14,14)
DCEI.LogMessage(DCEI.GetUnitType(test_subject) .. " owned by player " .. DCEI.GetUnitPlayerId(test_subject) .. " is at " .. DCEI.GetUnitPosition2D(test_subject).x .. ", " .. DCEI.GetUnitPosition2D(test_subject).y .. " currently.")
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [FindUnitsByPlayerId](#findunitsbyplayerid-1)
- [FindUnitsByTeamId](#findunitsbyteamid-1)
- [FindUnits](#findunits-1)
- [FindUnitAtPosition](#findunitatposition-3)
[](extra-section-end)

## object FindUnitsByPlayerId(int playerId) {findunitsbyplayerid-1}
```cs
object FindUnitsByPlayerId(int playerId)
```
#### Description
[](description-start)
Returns a list of all units owned by a player.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `playerId` the player id to search for units by.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 12, 12
local unit = {}
local i
for i = 1, 5 do
    unit[i] = DCEI.CreateUnit(i, i % 2, unit_type, x+i, y+i)
    DCEI.SetHealth(unit[i], i)
end

local group = DCEI.FindUnitsByPlayerId(1)

for _, unit in ipairs(group) do
    DCEI.LogMessage(DCEI.GetUnitType(unit) .. " owned by player " .. DCEI.GetUnitPlayerId(unit) .. " is at " .. DCEI.GetUnitPosition2D(unit).x .. ", " .. DCEI.GetUnitPosition2D(unit).y .. " currently.")
end
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [FindUnit](Trigger-API-Reference-DCEI-Functions-Unit#findunit-1)
- [FindUnitsByTeamId](#findunitsbyteamid-1)
- [FindUnits](#findunits-1)
- [FindUnitAtPosition](#findunitatposition-3)
[](extra-section-end)

## object FindUnitsByTeamId(int teamId) {findunitsbyteamid-1}
```cs
object FindUnitsByTeamId(int teamId)
```
#### Description
[](description-start)
Returns a list of all units that belong to the specified team.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `teamId` the team id to search for units by.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 12, 12
local unit = {}
local i
for i = 1, 5 do
    unit[i] = DCEI.CreateUnit(i, i % 2, unit_type, x+i, y+i)
    DCEI.SetHealth(unit[i], i)
end

local group = DCEI.FindUnitsByTeamId(1)

for _, unit in ipairs(group) do
    DCEI.LogMessage(DCEI.GetUnitType(unit) .. " owned by player " .. DCEI.GetUnitPlayerId(unit) .. " is at " .. DCEI.GetUnitPosition2D(unit).x .. ", " .. DCEI.GetUnitPosition2D(unit).y .. " currently.")
end
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [FindUnit](Trigger-API-Reference-DCEI-Functions-Unit#findunit-1)
- [FindUnitsByPlayerId](Trigger-API-Reference-DCEI-Functions-Unit#findunitsbyplayerid-1)
- [FindUnits](#findunits-1)
- [FindUnitAtPosition](#findunitatposition-3)
[](extra-section-end)

## object FindSimpleUnitsByName(string name) {findsimpleunitsbyname-1}
```cs
object FindSimpleUnitsByName(string name)
```
#### Description
[](description-start)
Find all simple units by unit type name. For more info about simple units, see [Simple Units Guide.](https://funovus.notion.site/Simple-Units-Introduction-8a39c47f07d64f4c9549c5947c2c281f)
[](description-end)

#### Parameters
[](parameters-start)
- *string* `name` the name of the simple unit type to find

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua

local unit_type = "Simple Unit"
local x, y = 12, 12
local unit = {}

for i = 1, 5 do
    unit[i] = DCEI.CreateSimpleUnit(
        -1
        unit_properties.Unit,
        unit_properties.Collider,
        position.x,
        position.y,
        rotation.x,
        rotation.y,
        velocity.x,
        velocity.y
    )
end

local group = DCEI.FindSimpleUnitsByName("Simple Unit")

for _, unit in ipairs(group) do
    DCEI.LogMessage("Unit Found")
end

```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## object FindSimpleUnitsByPlayerId(int playerId) {findsimpleunitsbyplayerid-1}
```cs
object FindSimpleUnitsByPlayerId(int playerId)
```
#### Description
[](description-start)
Find all simple units by owner player ID. For more info about simple units, see [Simple Units Guide.](https://funovus.notion.site/Simple-Units-Introduction-8a39c47f07d64f4c9549c5947c2c281f)
[](description-end)

#### Parameters
[](parameters-start)
- *int* `playerId` the player ID to fetch  table of units for

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua

local unit_type = "Simple Unit"
local x, y = 12, 12
local unit = {}

for i = 1, 5 do
    unit[i] = DCEI.CreateSimpleUnit(
        -1
        unit_properties.Unit,
        unit_properties.Collider,
        position.x,
        position.y,
        rotation.x,
        rotation.y,
        velocity.x,
        velocity.y
    )
end

local group = DCEI.FindSimpleUnitsByPlayerId(-1)

for _, unit in ipairs(group) do
    DCEI.LogMessage("Unit Found")
end

```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## object FindUnits(string name) {findunits-1}
```cs
object FindUnits(string name)
```
#### Description
[](description-start)
Returns a list of all units with the specified unit name.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `name` the name of the unit type to find.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 12, 12
local unit = {}
local i
for i = 1, 5 do
    unit[i] = DCEI.CreateUnit(i, i % 2, unit_type, x+i, y+i)
    DCEI.SetHealth(unit[i], i)
end

local group = DCEI.FindUnits(unit_type)

for _, unit in ipairs(group) do
    DCEI.LogMessage(DCEI.GetUnitType(unit) .. " owned by player " .. DCEI.GetUnitPlayerId(unit) .. " is at " .. DCEI.GetUnitPosition2D(unit).x .. ", " .. DCEI.GetUnitPosition2D(unit).y .. " currently.")
end
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [FindUnit](#findunit-1)
- [FindUnitsByPlayerId](#findunitsbyplayerid-1)
- [FindUnitsByTeamId](#findunitsbyteamid-1)
- [FindUnitAtPosition()](#findunitatposition-3)
[](extra-section-end)

## unit FindUnitAtPosition(string name, float x, float z) {findunitatposition-3}
```cs
unit FindUnitAtPosition(string name, float x, float z)
```
#### Description
[](description-start)
Returns the unit with the given name closest to the given coordinates.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `name` the name of the unit type to find.
- *float* `x` the x-coordinate of the point to search for the unit at.
- *float* `z` the y-coordinate of the point to search for the unit at.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, z = 12, 12
local unit = {}
local i
for i = 1, 5 do
    unit[i] = DCEI.CreateUnit(i, i % 2, unit_type, x + i, y + i)
    DCEI.SetHealth(unit[i], i)
end

local test_subject = DCEI.FindUnit(unit_type)

local hp = DCEI.GetHealth(test_subject)
DCEI.LogMessage(unit_type .. " has " .. hp .. " hp currently.")
DCEI.SetUnitPosition2D(test_subject, 14, 10)

test_subject = DCEI.FindUnitAtPosition(unit_type, 14, 14)
DCEI.LogMessage(DCEI.GetUnitType(test_subject) .. " owned by player " .. DCEI.GetUnitPlayerId(test_subject) .. " is at " .. DCEI.GetUnitPosition2D(test_subject).x .. ", " .. DCEI.GetUnitPosition2D(test_subject).y .. " currently.")
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [FindUnit](Trigger-API-Reference-DCEI-Functions-Unit#findunit-1)
- [FindUnitsByPlayerId](Trigger-API-Reference-DCEI-Functions-Unit#findunitsbyplayerid-1)
- [FindUnitsByTeamId](Trigger-API-Reference-DCEI-Functions-Unit#findunitsbyteamid-1)
- [FindUnits](Trigger-API-Reference-DCEI-Functions-Unit#findunits-1)
[](extra-section-end)

## bool IsUnitSelected(unit unit) {isunitselected-1}
```cs
bool IsUnitSelected(unit unit)
```
#### Description
[](description-start)
Returns true if the unit is selected.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to check.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)

DCEI.SelectUnit(unit)

if DCEI.IsUnitSelected then
    DCEI.LogMessage(unit_type .. " is selected.")
end

DCEI.TriggerAddTimerEventElapsed(function()
    DCEI.Deselect(unit)
end, 2.0, false, true)

if DCEI.IsUnitSelected then
    DCEI.LogMessage(unit_type .. " is selected.")
else
    DCEI.LogMessage(unit_type .. " is not selected.")
end
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [SelectUnit](Trigger-API-Reference-DCEI-Functions-Unit#selectunit-1)
- [DeselectUnit](Trigger-API-Reference-DCEI-Functions-Unit#deselectunit-1)
[](extra-section-end)

