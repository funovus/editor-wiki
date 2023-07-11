<div id="toc" markdown="1">
- [Trigger API Reference\DCEI Types](#trigger-api-referencedcei-types)
  * [YogaFlexDirection](#yogaflexdirection)
  * [YogaWrap](#yogawrap)
  * [YogaJustify](#yogajustify)
  * [YogaAlign](#yogaalign)
  * [YogaPositionType](#yogapositiontype)
  * [FullScreenMode](#fullscreenmode)
  * [UnitBehaviorStatus](#unitbehaviorstatus)
  * [BehaviorFilter](#behaviorfilter)
  * [AbilityFilter](#abilityfilter)
  * [WeaponFilter](#weaponfilter)
  * [CriticalFilter](#criticalfilter)
  * [UnitTagStatus](#unittagstatus)
  * [UnitFilter](#unitfilter)
  * [Unit](#unit)
  * [Region](#region)
  * [Float2](#float2)
  * [AbilityCost](#abilitycost)
  * [BehaviorModifier](#behaviormodifier)
  * [Float3](#float3)
  * [EffectContext](#effectcontext)
  * [UnitLabelOptions](#unitlabeloptions)
  * [Offset](#offset)
  * [TextOptions](#textoptions)
  * [ExplicitOffset](#explicitoffset)
  * [PolarOffset](#polaroffset)
  * [SimpleUnitOptions](#simpleunitoptions)
  * [SimpleUnitMeta](#simpleunitmeta)
  * [SimpleUnitMoverOptions](#simpleunitmoveroptions)
  * [SimpleUnitLocalAvoidanceOptions](#simpleunitlocalavoidanceoptions)
  * [SimpleUnitTimerOptions](#simpleunittimeroptions)
  * [SimpleLootOptions](#simplelootoptions)
  * [SimpleUnitTransformAnimationOptions](#simpleunittransformanimationoptions)
  * [SimpleUnitTintColorAnimationOptions](#simpleunittintcoloranimationoptions)
  * [SimpleUnitAnimationOptions](#simpleunitanimationoptions)
  * [SimpleUnitShadowOptions](#simpleunitshadowoptions)
  * [SimpleUnitAnimatorOptions](#simpleunitanimatoroptions)
  * [SimpleParticleSpawnOptions](#simpleparticlespawnoptions)
  * [SimpleUnitTypeOptions](#simpleunittypeoptions)
  * [SimpleUnitInstanceOptions](#simpleunitinstanceoptions)
  * [SimpleDamageNumberStyleOptions](#simpledamagenumberstyleoptions)
  * [SimpleUnitMapBoundOptions](#simpleunitmapboundoptions)
  * [SimpleUnitMovementOptions](#simpleunitmovementoptions)
  * [CollisionOptions](#collisionoptions)
  * [CollisionDamageApplierOptions](#collisiondamageapplieroptions)
  * [CollisionForceApplierOptions](#collisionforceapplieroptions)
  * [CollisionStatsApplierOptions](#collisionstatsapplieroptions)
  * [SimpleHealthOptions](#simplehealthoptions)
  * [AttachOffsetOptions](#attachoffsetoptions)
  * [ColorRGBA](#colorrgba)
  * [ColorRGB](#colorrgb)
  * [WaypointOptions](#waypointoptions)
  * [ScreenBackgroundOptions](#screenbackgroundoptions)
  * [AreaOffset](#areaoffset)
  * [JoystickOptions](#joystickoptions)
  * [JoystickButtonOptions](#joystickbuttonoptions)
  * [BigHeadMessageOptions](#bigheadmessageoptions)
  * [SpawnGroupUnit](#spawngroupunit)
  * [SpawnGroup](#spawngroup)
  * [SpawnWaveInitialBehavior](#spawnwaveinitialbehavior)
  * [SpawnWaveOptions](#spawnwaveoptions)
  * [AsyncPvpBot](#asyncpvpbot)
  * [Ease](#ease)
  * [LoopType](#looptype)

</div>

***

# [Trigger API Reference](Trigger-API-Reference)\\DCEI Types {trigger-api-referencedcei-types}

[](overview-start)

[](overview-end)

## YogaFlexDirection
```cs
Enum YogaFlexDirection
```
#### Enum Structure
```cs
Column
ColumnReverse
Row
RowReverse
```
#### Description
[](description-start)
Used for the flex frame property `FlexDirection`, see:
- [flexDirection](https://wiki.funovus.com/master/Ui-XML-CommonAttributes#flexdirection)
- [DCEI.SetFrameFlexDirection](https://wiki.funovus.com/master/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeflexdirection-2)
[](description-end)

#### Example Usage
[](example-usage-start)
XML "FlexLayout":
```xml
<Frame layout="flex">
    <Frame frameImageColor="#ff0000ff" width="50" height="50" />
    <Frame frameImageColor="#00ff00ff" width="50" height="50" />
</Frame>

```
Lua: 
```lua
local GMUI = require("GMUI")

local function TestFlexProperty()
    local NewFlexLayout = GMUI.Layout.New({ name = "FlexLayout" })
    DCEI.SetFrameFlexDirection(NewFlexLayout.Frame, "column")
end

TestFlexProperty()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## YogaWrap
```cs
Enum YogaWrap
```
#### Enum Structure
```cs
NoWrap
Wrap
WrapReverse
```
#### Description
[](description-start)
Used for the flex frame property `FlexDirection`, see:
- [flexWrap](https://wiki.funovus.com/master/Ui-XML-CommonAttributes#flexwrap)
- [DCEI.SetFrameFlexWrap](https://wiki.funovus.com/master/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeflexwrap-2)
[](description-end)

#### Example Usage
[](example-usage-start)
XML "FlexLayout":
```xml
<Frame layout="flex" width="200" >
    <Frame id="child1" frameImageColor="#ff0000ff" widthPercent="100" height="50" />
    <Frame id="child2" frameImageColor="#00ff00ff" widthPercent="100" height="50" />
</Frame>
```

Lua: 
```lua
local GMUI = require("GMUI")

local function TestFlexProperty()
    local NewFlexLayout = GMUI.Layout.New({ name = "FlexLayout" })
    DCEI.SetFrameFlexWrap(NewFlexLayout.Frame, "wrap")
end

TestFlexProperty()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## YogaJustify
```cs
Enum YogaJustify
```
#### Enum Structure
```cs
FlexStart
Center
FlexEnd
SpaceBetween
SpaceAround
```
#### Description
[](description-start)
This defines the alignment along the main axis. For more info (including visualizations of each property) see [justifyContent XML attribute.](https://wiki.funovus.com/master/Ui-FlexLayouts#justifycontent). See also `DCEI.SetFrameJustifyContent`. 
[](description-end)

#### Example Usage
[](example-usage-start)
XML "FlexLayout":
```xml
<Frame layout="flex" width="200">
    <Frame id="child1" frameImageColor="#ff0000ff" width="50" height="50" />
    <Frame id="child2" frameImageColor="#00ff00ff" width="50" height="50" />
</Frame>
```

Lua: 
```lua
local GMUI = require("GMUI")

local function TestFlexProperty()
    local NewFlexLayout = GMUI.Layout.New({ name = "FlexLayout" })
    DCEI.SetFrameJustifyContent(NewFlexLayout.Frame, "space-between")
end

TestFlexProperty()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## YogaAlign
```cs
Enum YogaAlign
```
#### Enum Structure
```cs
Auto
FlexStart
Center
FlexEnd
Stretch
Baseline
SpaceBetween
SpaceAround
```
#### Description
[](description-start)
This defines the default behavior for how flex items are laid out along the cross axis on the current line. Think of it as the justify-content version for the cross-axis (perpendicular to the main-axis). 

For more info (including visualizations of each property) see [alignItems XML attribute.](https://wiki.funovus.com/master/Ui-FlexLayouts#alignitems)
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame layout="flex" width="200">
    <Frame id="child1" frameImageColor="#ff0000ff" width="50" height="150" />
    <Frame id="child2" frameImageColor="#00ff00ff" width="50" height="50" />
</Frame>
```

Lua: 
```lua
local GMUI = require("GMUI")

local function TestFlexProperty()
    local NewFlexLayout = GMUI.Layout.New({ name = "FlexLayout" })
    DCEI.SetFrameAlignItems(NewFlexLayout.Frame, "center")
end

TestFlexProperty()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## YogaPositionType
```cs
Enum YogaPositionType
```
#### Enum Structure
```cs
Relative
Absolute
```
#### Description
[](description-start)
Position `Relative` or `Absolute`.

`Relative`  By default an element is positioned relatively. This means an element is positioned according to the normal flow of the layout, and then offset relative to that position based on the values of top, right, bottom, and left. The offset does not affect the position of any sibling or parent elements.

`Absolute` When positioned absolutely an element doesn't take part in the normal layout flow. It is instead laid out independent of its siblings. The position is determined based on the top, right, bottom, and left values.

For more info see [position XML attribute.](https://wiki.funovus.com/master/Ui-FlexLayouts#position)
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame layout="flex" width="200" height="200" flexWrap="wrap">
    <Frame id="child1" frameImageColor="#ff0000ff" widthPercent="50" height="55" />
    <Frame id="child2" frameImageColor="#00ff00ff" widthPercent="50" height="55" />
</Frame>

```

Lua: 
```lua
local GMUI = require("GMUI")

local function TestFlexProperty()
    local NewFlexLayout = GMUI.Layout.New({ name = "FlexLayout" })
    DCEI.SetFramePosition(NewFlexLayout.child1, "Absolute")
    DCEI.SetFrameLeft(NewFlexLayout.child1, 150)
end

TestFlexProperty()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## FullScreenMode
```cs
Enum FullScreenMode
```
#### Enum Structure
```cs
ExclusiveFullScreen
FullScreenWindow
MaximizedWindow
Windowed
```
#### Description
[](description-start)

[](description-end)

#### Example Usage
[](example-usage-start)

[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## UnitBehaviorStatus
```cs
Type UnitBehaviorStatus
```
#### Type Structure
```cs
UnitBehaviorStatus
{
string name
int stack_count
}
```
#### Description
[](description-start)
Unit's behavior stats, including behavior name and stack count.
[](description-end)

#### Example Usage
[](example-usage-start)

[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## BehaviorFilter
```cs
Type BehaviorFilter
```
#### Type Structure
```cs
BehaviorFilter
{
string name
string family
}
```
#### Description
[](description-start)
Behavior Filters allow you to create a filter for trigger events such as `TriggerAddBehaviorStackIncreaseEvent` that make the event only fire for specific behavior type instead of all behaviors. See [Using Trigger Event Filters](https://www.notion.so/funovus/Using-Trigger-Event-Filters-3e948c57edf24bacbc69b521c12a4550)
[](description-end)

#### Example Usage
[](example-usage-start)

[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## AbilityFilter
```cs
Type AbilityFilter
```
#### Type Structure
```cs
AbilityFilter
{
string name
string family
}
```
#### Description
[](description-start)
Ability Filters allow you to create a filter for trigger events such as `TriggerAddCastAbilityEvent` that make the event only fire for specific a specific ability type instead of all abilities. See [Using Trigger Event Filters](https://www.notion.so/funovus/Using-Trigger-Event-Filters-3e948c57edf24bacbc69b521c12a4550)
[](description-end)

#### Example Usage
[](example-usage-start)

[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## WeaponFilter
```cs
Type WeaponFilter
```
#### Type Structure
```cs
WeaponFilter
{
string name
string family
}
```
#### Description
[](description-start)
Weapon Filters allow you to create a filter for trigger events such as `TriggerAddUseWeaponEvent` that make the event only fire for specific a specific weapon type instead of all weapons. See [Using Trigger Event Filters](https://www.notion.so/funovus/Using-Trigger-Event-Filters-3e948c57edf24bacbc69b521c12a4550)
[](description-end)

#### Example Usage
[](example-usage-start)

[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## CriticalFilter
```cs
Type CriticalFilter
```
#### Type Structure
```cs
CriticalFilter
{
bool critical_only
bool not_critical_only
}
```
#### Description
[](description-start)
Used to make events like `TriggerAddUnitDamageEvent` trigger with only critical or not critical damage events. See [Using Trigger Event Filters](https://www.notion.so/funovus/Using-Trigger-Event-Filters-3e948c57edf24bacbc69b521c12a4550)
[](description-end)

#### Example Usage
[](example-usage-start)

[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## UnitTagStatus
```cs
Type UnitTagStatus
```
#### Type Structure
```cs
UnitTagStatus
{
string name
int stack_count
}
```
#### Description
[](description-start)
Tag status on unit, with name and stack count.
[](description-end)

#### Example Usage
[](example-usage-start)

[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## UnitFilter
```cs
Type UnitFilter
```
#### Type Structure
```cs
UnitFilter
{
Nullable<int> team
string name
}
```
#### Description
[](description-start)
Creates a filter for a specific unit type, which can be used with any trigger event API (like `DCEI.TriggerAddUnitSelectedEvent`) that accepts a unit as a parameter. This filter will then cause the event to register only for this specific unit type rather than all unit types. See [Using Trigger Event Filters](https://www.notion.so/Using-Trigger-Event-Filters-3e948c57edf24bacbc69b521c12a4550)
[](description-end)

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

## Unit
```cs
Type Unit
```
#### Type Structure
```cs
Unit
{
Entity UnsafeEntity
UnitFilter filter
}
```
#### Description
[](description-start)
A `Unit` instance. Create a `Unit Type` in the Data window of the editor, and then place them on the terrain or create them via Lua using apis like `DCEI.CreateUnit` to create a `Unit` instance. 
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, z = 16, 16
local unit_instance = DCEI.CreateUnit(team_id, player_id, unit_type, x, z)

DCEI.RemoveUnit(unit_instance)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## Region
```cs
Type Region
```
#### Type Structure
```cs
Region
{
Entity UnsafeEntity
}
```
#### Description
[](description-start)
A region is an area of the in-game level, similar to an area search but permanent. 
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local region = DCEI.CreateRegion(16, 16, 4, 4)

function OnRegionEnter()
    DCEI.SetUnitOwner(DCEI.TriggeringUnit, 2)
    DCEI.LogMessage(DCEI.GetUnitPlayerId(DCEI.TriggeringUnit))
end

DCEI.TriggerAddUnitEnterRegionEvent(DCEI.UnitAny, region, OnRegionEnter)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## Float2
```cs
Type Float2
```
#### Type Structure
```cs
Float2
{
float x
float y
}
```
#### Description
[](description-start)
Usually use for Position 2D.
[](description-end)

#### Example Usage
[](example-usage-start)
```Lua
local pos = {x = 1, y = 1}
DCEI.SetUnitPosition2D(unit, pos.x, pos.y)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## AbilityCost
```cs
Type AbilityCost
```
#### Type Structure
```cs
AbilityCost
{
float health
float mana
float gold
}
```
#### Description
[](description-start)
Ability cost table.
[](description-end)

#### Example Usage
[](example-usage-start)
```Lua
function OnAbilityUse()
    local id = DCEI.TriggeringAbilityId
    local name = DCEI.TriggeringAbilityName
    DCEI.LogMessage(name .. " use")
    local cost = DCEI.GetAbilityCost(name)
    for key, value in pairs(cost) do
        DCEI.LogMessage(key .. " : " .. value)
    end
end

DCEI.TriggerAddUseAbilityEvent(DCEI.UnitAny, OnAbilityUse)
```
[](example-usage-end)

[](extra-section-start)
[GetAbilityCost](Trigger-API-Reference-DCEI-Functions-Ability#getabilitycost-1)
[](extra-section-end)

## BehaviorModifier
```cs
Type BehaviorModifier
```
#### Type Structure
```cs
BehaviorModifier
{
float scaled
float unscaled
float additive_factor
float positive_unified_factor
float negative_unified_factor
float multiplier_factor
}
```
#### Description
[](description-start)
Works in the same way as [BehaviorModifier](Data-Behavior#behaviormodifier) in behavior data.
[](description-end)

#### Example Usage
[](example-usage-start)

[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## Float3
```cs
Type Float3
```
#### Type Structure
```cs
Float3
{
float x
float y
float z
}
```
#### Description
[](description-start)
Can be used as Position 3D or Scale 3D.
[](description-end)

#### Example Usage
[](example-usage-start)
```Lua
local duration = 1
local ease = "Linear"
local k1 = {x = min_scale, y = min_scale, z = min_scale}
local k2 = {x = max_scale, y = max_scale, z = max_scale}
local anim = DCEI.AnimateFrameScale(layout.Frame, k1, k2, duration, ease)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## EffectContext
```cs
Type EffectContext
```
#### Type Structure
```cs
EffectContext
{
unit caster
unit source
unit target
Float2 target_location
string damage_source_type
string damage_source_name
}
```
#### Description
[](description-start)
Get effect's context.
[](description-end)

#### Example Usage
[](example-usage-start)

[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## UnitLabelOptions
```cs
Type UnitLabelOptions
```
#### Type Structure
```cs
UnitLabelOptions
{
Offset offset
bool center_at_unit_origin
bool center_at_unit_top
}
```
#### Description
[](description-start)
Built in unit label option table.
[](description-end)

#### Example Usage
[](example-usage-start)
```Lua
local label_options = {offset = {right = 1, up = 1, front = 1}, center_at_unit_origin = true, center_at_unit_top = true}
DCEI.ShowUnitLabel(unit, "Unit", label_options)
```
[](example-usage-end)

[](extra-section-start)
[ShowUnitLabel](Trigger-API-Reference-DCEI-Functions-UI#showunitlabel-3)
[HideUnitLabel](Trigger-API-Reference-DCEI-Functions-UI#hideunitlabel-1)
[](extra-section-end)

## Offset
```cs
Type Offset
```
#### Type Structure
```cs
Offset
{
double right
double up
double front
}
```
#### Description
[](description-start)
Helper table in some API for offset
[](description-end)

#### Example Usage
[](example-usage-start)
```Lua
local frame = DCEI.CreateTextFrame(DCEI.GetUiRootFrame())
DCEI.SetTextFrameText(frame, "Bob")

local unit = DCEI.CreateUnit(1, 1, DCEI.Unit("Standard MeleeUnit"), 16, 16, 0, -1)

local options = {
    offset = {up = 1.2},
    center_at_unit_origin = true
}

DCEI.AttachFrameToUnit(frame, unit, options)
```
[](example-usage-end)

[](extra-section-start)
[AttachFrameToUnit](Trigger-API-Reference-DCEI-Functions-Custom-UI#attachframetounit-4)
[](extra-section-end)

## TextOptions
```cs
Type TextOptions
```
#### Type Structure
```cs
TextOptions
{
Offset offset
}
```
#### Description
[](description-start)
Text option.
[](description-end)

#### Example Usage
[](example-usage-start)

[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## ExplicitOffset
```cs
Type ExplicitOffset
```
#### Type Structure
```cs
ExplicitOffset
{
double right
double up
double forward
}
```
#### Description
[](description-start)
Offset is based on forward/right/up directions.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local explicit_offset = {right = 1, up = 1, forward = 1}
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## PolarOffset
```cs
Type PolarOffset
```
#### Type Structure
```cs
PolarOffset
{
double yaw
double pitch
double distance
}
```
#### Description
[](description-start)
Offset is based on angle and distance.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local polar_offset = {yaw = 90, distance = 2}
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## SimpleUnitOptions
```cs
Type SimpleUnitOptions
```
#### Type Structure
```cs
SimpleUnitOptions
{
string type_name
float max_health
float drop_rate
}
```
#### Description
[](description-start)
Settings used for APIs such as `DCEI.CreateSimpleUnit` and `DCEI.RegisterSimpleLoot` which specify the unit type name, max health, and drop rate for a simple unit or simple loot. For more info about simple units, see [Simple Units Guide.](https://funovus.notion.site/Simple-Units-Introduction-8a39c47f07d64f4c9549c5947c2c281f)
[](description-end)

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

## SimpleUnitMeta
```cs
Type SimpleUnitMeta
```
#### Type Structure
```cs
SimpleUnitMeta
{
string type_name
}
```
#### Description
[](description-start)
Used for `SimpleUnitTypeOptions` which is used by the `DCEI.RegisterSimpleUnitType` API. Specify the unit type name and the player and team IDs. 
[](description-end)

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

## SimpleUnitMoverOptions
```cs
Type SimpleUnitMoverOptions
```
#### Type Structure
```cs
SimpleUnitMoverOptions
{
bool enabled
}
```
#### Description
[](description-start)

[](description-end)

#### Example Usage
[](example-usage-start)

[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## SimpleUnitLocalAvoidanceOptions
```cs
Type SimpleUnitLocalAvoidanceOptions
```
#### Type Structure
```cs
SimpleUnitLocalAvoidanceOptions
{
bool enabled
}
```
#### Description
[](description-start)

[](description-end)

#### Example Usage
[](example-usage-start)

[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## SimpleUnitTimerOptions
```cs
Type SimpleUnitTimerOptions
```
#### Type Structure
```cs
SimpleUnitTimerOptions
{
float remove_unit_after_seconds
float kill_unit_after_seconds
float remove_actor_after_killed_seconds
}
```
#### Description
[](description-start)

[](description-end)

#### Example Usage
[](example-usage-start)

[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## SimpleLootOptions
```cs
Type SimpleLootOptions
```
#### Type Structure
```cs
SimpleLootOptions
{
int loot_id
float drop_rate
}
```
#### Description
[](description-start)
Used by the `SimpleUnitTypeOptions` type which is used by the `DCEI.RegisterSimpleUnitType` API. Specifies the loot ID and drop rate for a simple unit type. See `DCEI.RegisterSimpleLoot` as well. 
[](description-end)

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

## SimpleUnitTransformAnimationOptions
```cs
Type SimpleUnitTransformAnimationOptions
```
#### Type Structure
```cs
SimpleUnitTransformAnimationOptions
{
Float3 start_position
Float3 end_position
Float3 random_position_offset
Float3 start_scale
Float3 end_scale
Float3 pivot
float start_seconds
float end_seconds
Float3 rotation_axis
float start_degree
float end_degree
Ease ease
}
```
#### Description
[](description-start)
Used for the `DCEI.AddTransformAnimationToSimpleDamageNumberStyle` API. Adds an animation to the scale, position, or rotation of a simple damage number text style. 
[](description-end)

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

## SimpleUnitTintColorAnimationOptions
```cs
Type SimpleUnitTintColorAnimationOptions
```
#### Type Structure
```cs
SimpleUnitTintColorAnimationOptions
{
Float3 start_tint_color
Float3 end_tint_color
float start_alpha
float end_alpha
float start_seconds
float end_seconds
Ease ease
}
```
#### Description
[](description-start)
Used for the API `DCEI.ApplyTransparencyAnimationToSimpleUnit`. Sets the tint color, alpha, and tmiing for color animmations on a simple unit. 
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function AnimateSimpleUnit()
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
    DCEI.ApplyTransparencyAnimationToSimpleUnit(unit, {            
        start_tint_color = { x = 1, y = 1, z = 1},
        end_tint_color = { x = 1, y = 1, z = 1},
        start_alpha = 1,
        end_alpha = 0.5,
        start_seconds = 3,
        end_seconds = 5
    })

    return unit
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## SimpleUnitAnimationOptions
```cs
Type SimpleUnitAnimationOptions
```
#### Type Structure
```cs
SimpleUnitAnimationOptions
{
bool enabled
float frame_rate
}
```
#### Description
[](description-start)

[](description-end)

#### Example Usage
[](example-usage-start)

[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## SimpleUnitShadowOptions
```cs
Type SimpleUnitShadowOptions
```
#### Type Structure
```cs
SimpleUnitShadowOptions
{
bool enabled
float shadow_radius
}
```
#### Description
[](description-start)

[](description-end)

#### Example Usage
[](example-usage-start)

[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## SimpleUnitAnimatorOptions
```cs
Type SimpleUnitAnimatorOptions
```
#### Type Structure
```cs
SimpleUnitAnimatorOptions
{
SimpleUnitShadowOptions shadow_options
Dictionary<int, int> death_particle_effects
SimpleUnitAnimationOptions animation_options
}
```
#### Description
[](description-start)

[](description-end)

#### Example Usage
[](example-usage-start)

[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## SimpleParticleSpawnOptions
```cs
Type SimpleParticleSpawnOptions
```
#### Type Structure
```cs
SimpleParticleSpawnOptions
{
string name
Float3 scale
Dictionary<string, ParticleProperties> subsystem_properties
}
```
#### Description
[](description-start)

[](description-end)

#### Example Usage
[](example-usage-start)

[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## SimpleUnitTypeOptions
```cs
Type SimpleUnitTypeOptions
```
#### Type Structure
```cs
SimpleUnitTypeOptions
{
SimpleUnitMeta meta
SimpleHealthOptions health_options
SimpleLootOptions loot_options
SimpleUnitMovementOptions movement_options
SimpleUnitLocalAvoidanceOptions local_avoidance_options
SimpleUnitMoverOptions mover_options
CollisionOptions collision_options
CollisionDamageApplierOptions collision_damage_applier_options
CollisionForceApplierOptions collision_force_applier_options
CollisionStatsApplierOptions collision_stats_applier_options
SimpleUnitTimerOptions timer_options
float mass
SimpleUnitAnimatorOptions animator_options
}
```
#### Description
[](description-start)
Options for the `DCEI.RegisterSimpleUnitType` API for registering a new simple unit type. 
[](description-end)

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

## SimpleUnitInstanceOptions
```cs
Type SimpleUnitInstanceOptions
```
#### Type Structure
```cs
SimpleUnitInstanceOptions
{
int player_id
int team_id
Float3 position
Float3 velocity
Float2 facing
unit move_target_unit
Float3 move_target_position
Float3 move_target_direction
}
```
#### Description
[](description-start)
Option type for `DCEI.CreateSimpleUnitAsync` used to specify the team an dplayer ID, position, velocity, and facing of the simple unit.
[](description-end)

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

## SimpleDamageNumberStyleOptions
```cs
Type SimpleDamageNumberStyleOptions
```
#### Type Structure
```cs
SimpleDamageNumberStyleOptions
{
int font_type
int prefix_symbol_index
int suffix_symbol_index
Float3 distance_between_digits
float duration_seconds
}
```
#### Description
[](description-start)
Type used for `DCEI.RegisterSimpleDamageNumberStyles` for setting font style options. 
[](description-end)

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

## SimpleUnitMapBoundOptions
```cs
Type SimpleUnitMapBoundOptions
```
#### Type Structure
```cs
SimpleUnitMapBoundOptions
{
float center_x
float center_y
float width
float height
int player_id_remove_mask
}
```
#### Description
[](description-start)
Used for `DCEI.SetSimpleUnitMapBounds` API for setting simple unit map bounds. 
[](description-end)

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

## SimpleUnitMovementOptions
```cs
Type SimpleUnitMovementOptions
```
#### Type Structure
```cs
SimpleUnitMovementOptions
{
float max_speed
}
```
#### Description
[](description-start)
Used in the `SimpleUnitTypeOptions` type which is used by the `DCEI.RegisterSimpleUnitType` API. Specifies max speed and other simple unit movement options.
[](description-end)

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

## CollisionOptions
```cs
Type CollisionOptions
```
#### Type Structure
```cs
CollisionOptions
{
int belongs_to_layer_mask
int collides_with_layer_mask
float radius
bool use_rvo_agent
bool take_damage
}
```
#### Description
[](description-start)
Used for APIs such as `CreateSimpleUnit`, `SetCollisionComponentData` and `RegisterSimpleLoot` to set collision options.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua

local unit_data = {
    -- These are the collision options. 
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

## CollisionDamageApplierOptions
```cs
Type CollisionDamageApplierOptions
```
#### Type Structure
```cs
CollisionDamageApplierOptions
{
float deal_damage_value
CollisionTiming timing
float cooldown_seconds
int style_index
}
```
#### Description
[](description-start)
Used for API `SetCollisionDamageData`
[](description-end)

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

## CollisionForceApplierOptions
```cs
Type CollisionForceApplierOptions
```
#### Type Structure
```cs
CollisionForceApplierOptions
{
float horizontal_force
float horizontal_friction
float vertical_force
float vertical_friction
float duration
CollisionTiming timing
bool only_trigger_on_kill
float cooldown_seconds
}
```
#### Description
[](description-start)
Used for api `SetCollisionForceData`
[](description-end)

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

## CollisionStatsApplierOptions
```cs
Type CollisionStatsApplierOptions
```
#### Type Structure
```cs
CollisionStatsApplierOptions
{
int stats_id
float delta_value
CollisionTiming timing
}
```
#### Description
[](description-start)
Used for api `SetCollisionStatsData`
[](description-end)

#### Example Usage
[](example-usage-start)
```lua

DCEI.SetCollisionStatsData(unit, {stats_id = 1, delta_value = 15})

```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## SimpleHealthOptions
```cs
Type SimpleHealthOptions
```
#### Type Structure
```cs
SimpleHealthOptions
{
float max
float value
}
```
#### Description
[](description-start)
Used for API `SetSimpleHealthData`. For more info about simple units, see [Simple Units Guide.](https://funovus.notion.site/Simple-Units-Introduction-8a39c47f07d64f4c9549c5947c2c281f)
[](description-end)

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

## AttachOffsetOptions
```cs
Type AttachOffsetOptions
```
#### Type Structure
```cs
AttachOffsetOptions
{
ExplicitOffset explicit_offset
PolarOffset polar_offset
bool use_current_offset
bool use_child_facing
OrientationType orientation_type
}
```
#### Description
[](description-start)
Options to customize how units attch.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local attach_option = {explicit_offset = {forward = 3}, use_child_facing = true, orientation_type ="WorldOrientation"}
```
[](example-usage-end)

[](extra-section-start)
orientation_type:
* **WorldOrientation**: Orientation is relative to world facing (i.e., north).
* **ParentOrientation**: Orientation is relative to the direction from parent unit's facing.
[](extra-section-end)

## ColorRGBA
```cs
Type ColorRGBA
```
#### Type Structure
```cs
ColorRGBA
{
float r
float g
float b
float a
}
```
#### Description
[](description-start)
Color table. Notice the float is 0~1 instead of 0~255. APIs using this parameter also accept hex codes, such as `"#32a852"`
[](description-end)

#### Example Usage
[](example-usage-start)
```Lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImageColor(frame, {r = 251/255, g = 79/255, b = 79/255, a = 1})
DCEI.SetFrameImageColor(frame, "#32a852") -- This also works
DCEI.SetFrameSize(frame, 100, 100)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## ColorRGB
```cs
Type ColorRGB
```
#### Type Structure
```cs
ColorRGB
{
float r
float g
float b
}
```
#### Description
[](description-start)
Color table. Notice the float is 0~1 instead of 0~255. Also accepts hex values such as `"#32a852"`
[](description-end)

#### Example Usage
[](example-usage-start)
```Lua
DCEI.SetTextFrameColorRGB(text_frame, { r = 0.5, g = 0.5, b = 0.5 })
DCEI.SetTextFrameColorRGB(text_frame, "#32a852") -- Also works
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## WaypointOptions
```cs
Type WaypointOptions
```
#### Type Structure
```cs
WaypointOptions
{
string waypoint_name
float dispersal
bool use_natural_dispersal
int node_index
}
```
#### Description
[](description-start)
Waypoint options including waypoint name, dispersal, use natural dispersal flag, and node index to use for API's such as `DCEI.ApplyWaypoint`. 
[](description-end)

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

## ScreenBackgroundOptions
```cs
Type ScreenBackgroundOptions
```
#### Type Structure
```cs
ScreenBackgroundOptions
{
Color color
float duration
}
```
#### Description
[](description-start)
Color and duration options for `DCEI.ShowScreenMask`
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local screen_options = {color = {r = 255, g = 0, b = 255, a = 255}, duration = 5}
DCEI.ShowScreenMask(0.5, screen_options)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## AreaOffset
```cs
Type AreaOffset
```
#### Type Structure
```cs
AreaOffset
{
float left
float right
float top
float bottom
ColorRGBA debug_draw_color
}
```
#### Description
[](description-start)
AreaOffset used for `JoystickOptions` to offset the radius of area on screen the joystick will be activated if pressed. 
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local unit = DCEI.CreateUnit(1, 1, "Standard MeleeUnit", 15, 15)

local function OnJoystickMove()
    local axes = DCEI.TriggeringJoystickAxes
    DCEI.DirectionalMove(unit, axes.x, axes.y)
end

local function CreateJoystick()
    local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())

    DCEI.SetFrameWidth(frame, 1500)
    DCEI.SetFrameHeight(frame, 1500)

    local joystick_options = {
        anchor = { x = 0, y = 0 },
        offset = { x = 0, y = 0 },
        disable_wasd = true,
        disable_arrow_keys = true,
        joystick_id = 1,
        dynamic_position = true,
        always_show = true,
        radius = 150,
        active_area_offset = {
            left = 500,
            right = 50,
            top = 500,
            bottom = 50,
            debug_draw_color = { r = 0, g = 1, b = 0, a = 0.5 },
        },
        handle_icon = DCEI.Texture("icon_arrow"),
        handle_icon_color = { r = 1, g = 0, b = 0, a = 0.5 },
        background_icon = DCEI.Texture("general_icon_wildsky_mall_light_circle"),
        background_icon_color = { r = 1, g = 0, b = 0, a = 0.5 },
        handle_rotation = true,
        parent = frame,
    }

    DCEI.TriggerAddJoystickEventWithJoystickOptions(OnJoystickMove, joystick_options)
end

CreateJoystick()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## JoystickOptions
```cs
Type JoystickOptions
```
#### Type Structure
```cs
JoystickOptions
{
Float2 anchor
Float2 offset
bool disable_wasd
bool disable_arrow_keys
int joystick_id
bool dynamic_position
bool always_show
float radius
AreaOffset active_area_offset
string handle_icon
ColorRGBA handle_icon_color
string background_icon
ColorRGBA background_icon_color
bool handle_rotation
InGameUILayoutComponent parent
JoystickOptions Default
}
```
#### Description
[](description-start)
All the joystick options for virtual joystick.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local unit = DCEI.CreateUnit(1, 1, "Standard MeleeUnit", 15, 15)

local function OnJoystickMove()
    local axes = DCEI.TriggeringJoystickAxes
    DCEI.DirectionalMove(unit, axes.x, axes.y)
end

local function CreateJoystick()
    local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())

    DCEI.SetFrameWidth(frame, 1500)
    DCEI.SetFrameHeight(frame, 1500)

    local joystick_options = {
        anchor = { x = 0, y = 0 },
        offset = { x = 0, y = 0 },
        disable_wasd = true,
        disable_arrow_keys = true,
        joystick_id = 1,
        dynamic_position = true,
        always_show = true,
        radius = 150,
        active_area_offset = {
            left = 500,
            right = 50,
            top = 500,
            bottom = 50,
            debug_draw_color = { r = 0, g = 1, b = 0, a = 0.5 },
        },
        handle_icon = DCEI.Texture("icon_arrow"),
        handle_icon_color = { r = 1, g = 0, b = 0, a = 0.5 },
        background_icon = DCEI.Texture("general_icon_wildsky_mall_light_circle"),
        background_icon_color = { r = 1, g = 0, b = 0, a = 0.5 },
        handle_rotation = true,
        parent = frame,
    }

    DCEI.TriggerAddJoystickEventWithJoystickOptions(OnJoystickMove, joystick_options)
end

CreateJoystick()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## JoystickButtonOptions
```cs
Type JoystickButtonOptions
```
#### Type Structure
```cs
JoystickButtonOptions
{
string icon
bool hide
}
```
#### Description
[](description-start)
All the joystick button options for virtual joystick.
[](description-end)

#### Example Usage
[](example-usage-start)

[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## BigHeadMessageOptions
```cs
Type BigHeadMessageOptions
```
#### Type Structure
```cs
BigHeadMessageOptions
{
bool pause
object on_dismiss
double delay
Color message_box_color
Color title_box_color
}
```
#### Description
[](description-start)
Big head message options
[](description-end)

#### Example Usage
[](example-usage-start)

[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## SpawnGroupUnit
```cs
Type SpawnGroupUnit
```
#### Type Structure
```cs
SpawnGroupUnit
{
string unit
double delay
double offset
}
```
#### Description
[](description-start)
A list of unit types, delays, and offsets that make up a [Spawn Groups](https://wiki.funovus.com/master/Tower-Defense-Feature-Overview#spawn-groups), just like spawn groups in data.
[](description-end)

#### Example Usage
[](example-usage-start)
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
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## SpawnGroup
```cs
Type SpawnGroup
```
#### Type Structure
```cs
SpawnGroup
{
string name
string route_name
bool hide_wave_indicator
double initial_delay
string group_pattern
string unit
string pattern
int count
List<string> yield_group
}
```
#### Description
[](description-start)
Used for `SpawnWaveOptions` parameter for `DCEI.AddSpawnWave(SpawnWaveOptions options)`
[](description-end)

#### Example Usage
[](example-usage-start)
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
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## SpawnWaveInitialBehavior
```cs
Type SpawnWaveInitialBehavior
```
#### Type Structure
```cs
SpawnWaveInitialBehavior
{
string name
int stack
}
```
#### Description
[](description-start)
Used for `SpawnWaveOptions` parameter for `DCEI.AddSpawnWave(SpawnWaveOptions options)`
[](description-end)

#### Example Usage
[](example-usage-start)
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
local wave = {
        total_gold = 100 + 50 * wave_id, 
        bonus_gold = wave_id == 1 and 300 or 100,  -- sets bonus gold to 300 for 1st wave, 100 for subsequent
        start_delay = 1,
        call_wave_countdown = 30,
        groups = groups,
        behaviors = {
            -- Increase creep power for every 5 waves.
            {name = DCEI.Behavior("MorePower"), stack = math.floor(wave_id / 3)}
        }
    }
DCEI.AddSpawnWave(wave)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## SpawnWaveOptions
```cs
Type SpawnWaveOptions
```
#### Type Structure
```cs
SpawnWaveOptions
{
double total_gold
double bonus_gold
double start_delay
double call_wave_countdown
List<SpawnGroup> groups
List<SpawnWaveInitialBehavior> behaviors
}
```
#### Description
[](description-start)
Used for `DCEI.AddSpawnWave(SpawnWaveOptions options)`.
[](description-end)

#### Example Usage
[](example-usage-start)
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
local wave = {
        total_gold = 100 + 50 * wave_id, 
        bonus_gold = wave_id == 1 and 300 or 100,  -- sets bonus gold to 300 for 1st wave, 100 for subsequent
        start_delay = 1,
        call_wave_countdown = 30,
        groups = groups,
        behaviors = {
            -- Increase creep power for every 5 waves.
            {name = DCEI.Behavior("MorePower"), stack = math.floor(wave_id / 3)}
        }
    }
DCEI.AddSpawnWave(wave)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## AsyncPvpBot
```cs
Type AsyncPvpBot
```
#### Type Structure
```cs
AsyncPvpBot
{
string uuid
string tag
string name
string board
double elo
}
```
#### Description
[](description-start)

[](description-end)

#### Example Usage
[](example-usage-start)

[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## Ease
```cs
Enum Ease
```
#### Enum Structure
```cs
Unset
Linear
InSine
OutSine
InOutSine
InQuad
OutQuad
InOutQuad
InCubic
OutCubic
InOutCubic
InQuart
OutQuart
InOutQuart
InQuint
OutQuint
InOutQuint
InExpo
OutExpo
InOutExpo
InCirc
OutCirc
InOutCirc
InElastic
OutElastic
InOutElastic
InBack
OutBack
InOutBack
InBounce
OutBounce
InOutBounce
Flash
InFlash
OutFlash
InOutFlash
```
#### Description
[](description-start)
See https://easings.net/en for visual examples.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function AnimateSparkle(self, frame)
    local k1, k2 = 0, 1
    local duration = core.Random(1, 2, 2)
    local ease = "OutQuart"
    local animation = DCEI.AnimateFrameAlpha(frame, k1, k2, duration, ease)
    DCEI.SetFrameAnimationLoops(animation, -1, "Yoyo")

    local k1 = { x = 0.5, y = 0.5, z = 0.5 }
    local k2 = { x = 1.5, y = 1.5, z = 1.5 }
    local ease = "OutSine"
    local animation = DCEI.AnimateFrameScale(frame, k1, k2, duration, ease)
    DCEI.SetFrameAnimationLoops(animation, -1, "Yoyo")

    local start_rotation = math.random(1, 360)
    local k1, k2 = { z = start_rotation }, { z = start_rotation - 90 }
    local ease = "Linear"
    local duration = 1
    local duration = core.Random(1.5, 2.5, 2)
    local animation = DCEI.AnimateFrameRotation(frame, k1, k2, duration, ease)
    DCEI.SetFrameAnimationLoops(animation, -1, "Incremental")
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## LoopType
```cs
Enum LoopType
```
#### Enum Structure
```cs
Restart
Yoyo
Incremental
```
#### Description
[](description-start)
`Restart`
When the animation finishes, it resets to the start. An animation rotating 15 degrees will reset to 0 degrees and animate back towards 15 degrees again.

`Yoyo`
When the animation finishes, it reverses and plays back to the start, then plays forwards again. An animation rotating 15 degrees will rotate back to 0 degrees, then forwards to 15 degrees, etc. 

`Incremental`
When the animation finishes, it continues to play additively. An animation rotating 15 degrees will continue, rotating 30 degrees, 45 degrees, etc. 
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function AnimateSparkle(self, frame)
    local k1, k2 = 0, 1
    local duration = core.Random(1, 2, 2)
    local ease = "OutQuart"
    local animation = DCEI.AnimateFrameAlpha(frame, k1, k2, duration, ease)
    DCEI.SetFrameAnimationLoops(animation, -1, "Yoyo")

    local k1 = { x = 0.5, y = 0.5, z = 0.5 }
    local k2 = { x = 1.5, y = 1.5, z = 1.5 }
    local ease = "OutSine"
    local animation = DCEI.AnimateFrameScale(frame, k1, k2, duration, ease)
    DCEI.SetFrameAnimationLoops(animation, -1, "Yoyo")

    local start_rotation = math.random(1, 360)
    local k1, k2 = { z = start_rotation }, { z = start_rotation - 90 }
    local ease = "Linear"
    local duration = 1
    local duration = core.Random(1.5, 2.5, 2)
    local animation = DCEI.AnimateFrameRotation(frame, k1, k2, duration, ease)
    DCEI.SetFrameAnimationLoops(animation, -1, "Incremental")
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

