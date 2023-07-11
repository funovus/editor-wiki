<div id="toc" markdown="1">
- [Trigger API Reference\DCEI Variables](#trigger-api-referencedcei-variables)
  * [Service](#service)
  * [Unit](#unit)
  * [Effect](#effect)
  * [Tower Defense](#tower-defense)
  * [Ability](#ability)
  * [Weapon](#weapon)
  * [Behavior](#behavior)
  * [Region](#region)
  * [Input](#input)
  * [Player](#player)

</div>

***

# [Trigger API Reference](Trigger-API-Reference)\\DCEI Variables {trigger-api-referencedcei-variables}

[](overview-start)

[](overview-end)

## Service
### Platform
```cs
string Platform
```
#### Description
[](description-start)
Returns the platform that the game is played on as one of the following string values:
- WindowsPlayer
- WebGLPlayer
- Android
- IPhonePlayer
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local platform = DCEI.Platform
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

### Version
```cs
string Version
```
#### Description
[](description-start)
Returns the current game version number. In editor play mode and arcade mode it will return editor/engine version.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
-- Return the editor/engine version number.
DCEI.LogError(DCEI.Version)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## Unit
### UnitAny
```cs
unit UnitAny
```
#### Description
[](description-start)
Returns an any unit, useful for binding generic trigger events.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function OnRegionEnter()
    DCEI.LogMessage("Triggering Unit: " .. DCEI.GetUnitType(DCEI.TriggeringUnit))
end

DCEI.TriggerAddUnitEnterRegionEvent(DCEI.UnitAny, DCEI.RegionAny, OnRegionEnter)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

### TriggeringUnit
```cs
unit TriggeringUnit
```
#### Description
[](description-start)
Returns the triggering unit.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function OnRegionEnter()
    local unit_name = DCEI.GetUnitType(DCEI.TriggeringUnit)
    DCEI.LogMessage("Triggering Unit: " .. unit_name)
end

DCEI.TriggerAddUnitEnterRegionEvent(DCEI.UnitAny, DCEI.RegionAny, OnRegionEnter)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## Effect
### TriggeringEffectContext
```cs
EffectContext TriggeringEffectContext
```
#### Description
[](description-start)
Returns the triggering effect's effect context.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function OnDoNothing()
    local context = DCEI.TriggeringEffectContext
    local caster_name = DCEI.GetUnitType(context.caster)
    local source_name = DCEI.GetUnitType(context.source)
    local target_name = DCEI.GetUnitType(context.target)

    DCEI.LogMessage(caster_name .. " did nothing to " .. target_name .. " via " .. source_name .. ".")
end

DCEI.TriggerAddEffectEvent(DCEI.Effect("DoNothing"), OnDoNothing, true)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [TriggerAddEffectEvent](/Trigger-API-Reference-DCEI-Events-Effect#void-triggeraddeffecteventstring-effectname-typedcallbackeffectcontext-trigger-bool-simple)
- [EffectContext](Trigger-API-Reference-DCEI-Types#effectcontext)
- [TriggeringEffectId](Trigger-API-Reference-DCEI-Variables#triggeringeffectid)
- [TriggeringEffectName](Trigger-API-Reference-DCEI-Variables#triggeringeffectname)
[](extra-section-end)

### TriggeringEffectId
```cs
int TriggeringEffectId
```
#### Description
[](description-start)
Returns the triggering effect's id.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function OnDoNothing()
    local id = DCEI.TriggeringEffectId
end

DCEI.TriggerAddEffectEvent(DCEI.Effect("DoNothing"), OnDoNothing, true)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

### TriggeringEffectName
```cs
string TriggeringEffectName
```
#### Description
[](description-start)
Returns the triggering effect's name.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function OnDoNothing()
    local name = DCEI.TriggeringEffectName
end

DCEI.TriggerAddEffectEvent(DCEI.Effect("DoNothing"), OnDoNothing, true)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

### TriggeringEffectIsCritical
```cs
bool TriggeringEffectIsCritical
```
#### Description
[](description-start)
Returns if the damage is a critical damage. Only works in [TriggerAddUnitDamageEvent](Trigger-API-Reference-DCEI-Events-Unit#triggeraddunitdamageevent-3)
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function OnTakingDamage()
    local is_critical = DCEI.TriggeringEffectIsCritical
end

DCEI.TriggerAddUnitDamageEvent(DCEI.UnitAny, OnTakingDamage)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## Tower Defense
### TriggeringWaveId
```cs
int TriggeringWaveId
```
#### Description
[](description-start)
Returns the triggering wave ID for events such as `TriggerAddWaveStatusChangeEvent`. 
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function OnWaveStatusChange()
    if DCEI.TriggeringWaveId == 1 and DCEI.TriggeringWaveStatus == "Spawning" then
        game.OpenAllDoorProps()
    end
end
DCEI.TriggerAddWaveStatusChangeEvent(OnWaveStatusChange)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

### TriggeringWaveStatus
```cs
string TriggeringWaveStatus
```
#### Description
[](description-start)
Returns the triggering wave status for events such as `TriggerAddWaveStatusChangeEvent`. 
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function OnWaveStatusChange()
    if DCEI.TriggeringWaveId == 1 and DCEI.TriggeringWaveStatus == "Spawning" then
        game.OpenAllDoorProps()
    end
end
DCEI.TriggerAddWaveStatusChangeEvent(OnWaveStatusChange)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## Ability
### TriggeringAbilityId
```cs
int TriggeringAbilityId
```
#### Description
[](description-start)
Returns the triggering ability's id.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function OnCastAbility()
    local ability_id = DCEI.TriggeringAbilityId
end

DCEI.TriggerAddCastAbilityEvent(DCEI.UnitAny, OnAbilityCast)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

### TriggeringAbilityName
```cs
string TriggeringAbilityName
```
#### Description
[](description-start)
Returns the triggering ability's name.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function OnCastAbility()
    local ability_id = DCEI.TriggeringAbilityName
end

DCEI.TriggerAddCastAbilityEvent(DCEI.UnitAny, OnAbilityCast)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## Weapon
### TriggeringWeaponId
```cs
int TriggeringWeaponId
```
#### Description
[](description-start)
Returns the triggering weapon's id.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local function OnUnitUseWeapon()
    local weapon = DCEI.TriggeringWeaponId
end
    
DCEI.TriggerAddUnitSelectedEvent(DCEI.UnitAny, OnUnitUseWeapon)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

### TriggeringWeaponName
```cs
string TriggeringWeaponName
```
#### Description
[](description-start)
Return the triggering weapon's name.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local function OnUnitUseWeapon()
    local weapon = DCEI.TriggeringWeaponId
end
    
DCEI.TriggerAddUnitSelectedEvent(DCEI.UnitAny, OnUnitUseWeapon)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## Behavior
### TriggeringBehaviorId
```cs
int TriggeringBehaviorId
```
#### Description
[](description-start)
Return the triggering behavior's id.
[](description-end)

#### Example Usage
[](example-usage-start)
```LUA
function OnUnitBehaviorAdd()
    local id = DCEI.TriggeringBehaviorId
end

DCEI.TriggerAddBehaviorAddEvent(DCEI.UnitAny, OnUnitBehaviorAdd, true)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

### TriggeringBehaviorName
```cs
string TriggeringBehaviorName
```
#### Description
[](description-start)
Returns the triggering behavior's name.
[](description-end)

#### Example Usage
[](example-usage-start)
```LUA
function OnUnitBehaviorAdd()
    local name = DCEI.TriggeringBehaviorName
end

DCEI.TriggerAddBehaviorAddEvent(DCEI.UnitAny, OnUnitBehaviorAdd, true)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## Region
### TriggeringRegion
```cs
Region TriggeringRegion
```
#### Description
[](description-start)
Returns the triggering region.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function OnRegionEnter()
    local r = DCEI.TriggeringRegion
end

DCEI.TriggerAddUnitEnterRegionEvent(DCEI.UnitAny, DCEI.RegionAny, OnRegionEnter)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

### RegionAny
```cs
Region RegionAny
```
#### Description
[](description-start)
Returns an any region, useful for binding generic trigger events.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function OnRegionEnter()
    local region_name = DCEI.GetRegionName(DCEI.TriggeringRegion)
    DCEI.LogMessage("A Unit Entered " .. region_name)
end

DCEI.TriggerAddUnitEnterRegionEvent(DCEI.UnitAny, DCEI.RegionAny, OnRegionEnter)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## Input
### TriggeringJoystickAxes
```cs
Float2 TriggeringJoystickAxes
```
#### Description
[](description-start)
Returns the triggering joystick axes.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function OnJoystickMove()
    local axes = DCEI.TriggeringJoystickAxes
    local pos = DCEI.GetUnitPosition2D(HERO)

    -- order unit to move in direction of joystick axes
    DCEI.Move(HERO, pos.x + axes.x, pos.y + axes.y)
    DCEI.LogMessage("Joystick input: " .. axes.x .. ", " .. axes.y)
end

local joystick_options = {
    offset = {
        x = 148,
        y = 148
    },
    anchor = {
        x = 0,
        y = 0
    }
}

DCEI.TriggerAddJoystickEvent(OnJoystickMove, joystick_options)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

### TriggeringJoystickId
```cs
int TriggeringJoystickId
```
#### Description
[](description-start)
Returns the triggering joystick's id.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function OnJoystickMove()
    local id = DCEI.TriggeringJoystickId
end

local joystick_options = {
    offset = {
        x = 148,
        y = 148
    },
    anchor = {
        x = 0,
        y = 0
    }
}

DCEI.TriggerAddJoystickEvent(OnJoystickMove, joystick_options)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

### TriggeringJoystickButtonId
```cs
int TriggeringJoystickButtonId
```
#### Description
[](description-start)
Return the triggering joystick button's id.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function OnJoystickButton()
    local button_id = DCEI.TriggeringJoystickButtonId
    local button_event = DCEI.TriggeringJoystickButtonEventType

    -- button event 0 is for ButtonDown, event 1 is for ButtonUp
    if button_id == 0 and button_event == 0 then
        -- currently does not support targeted abilities
        -- movement commands will interrupt ability prep time / finish time, unless ability has "can cast while moving" flag checked
        DCEI.CastAbility(HERO_SLASH, HERO, HERO)
    end
end

DCEI.TriggerAddJoystickButtonEvent(0, OnJoystickButton, {icon = "icon_ingame_towerslot_barracks"})
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

### TriggeringJoystickButtonEventType
```cs
int TriggeringJoystickButtonEventType
```
#### Description
[](description-start)
Returns the trigger joystick button event type. Button event 0 is for ButtonDown, event 1 is for ButtonUp.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function OnJoystickButton()
    local button_id = DCEI.TriggeringJoystickButtonId
    local button_event = DCEI.TriggeringJoystickButtonEventType

    -- button event 0 is for ButtonDown, event 1 is for ButtonUp
    if button_id == 0 and button_event == 0 then
        -- currently does not support targeted abilities
        -- movement commands will interrupt ability prep time / finish time, unless ability has "can cast while moving" flag checked
        DCEI.CastAbility(HERO_SLASH, HERO, HERO)
    end
end

DCEI.TriggerAddJoystickButtonEvent(0, OnJoystickButton, {icon = "icon_ingame_towerslot_barracks"})
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## Player
### TriggeringPlayerId
```cs
int TriggeringPlayerId
```
#### Description
[](description-start)
Returns the triggering player's id.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function OnFocusChange()
    DCEI.LogMessage("Focus changed: " .. DCEI.TriggeringPlayerId)
end

DCEI.TriggerOnFocusChange(OnFocusChange)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

