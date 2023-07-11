<div id="toc" markdown="1">
- [Trigger API Reference\DCEI Events\Unit](#trigger-api-referencedcei-eventsunit)
  * [TriggerAddUnitSelectedEvent](#triggeraddunitselectedevent-2)
  * [TriggerAddUnitDeselectedEvent](#triggeraddunitdeselectedevent-2)
  * [TriggerAddUnitDamageEvent](#triggeraddunitdamageevent-3)
  * [TriggerAddUnitCriticalDamageEvent](#triggeraddunitcriticaldamageevent-2)
  * [TriggerAddUnitHealEvent](#triggeraddunithealevent-2)
  * [TriggerAddUnitSpawnEvent](#triggeraddunitspawnevent-3)
  * [TriggerAddUnitDiedEvent](#triggeraddunitdiedevent-3)
  * [TriggerAddUnitMoveCommandEvent](#triggeraddunitmovecommandevent-2)
  * [TriggerAddOnUnitIdleEvent](#triggeraddonunitidleevent-2)
  * [TriggerAddUnitRemovedEvent](#triggeraddunitremovedevent-3)

</div>

***

# [Trigger API Reference](Trigger-API-Reference)\\DCEI Events\Unit {Trigger-API-ReferenceDCEI-EventsUnit}

[](overview-start)

[](overview-end)

## void TriggerAddUnitSelectedEvent(unit unit, TypedCallback trigger) {triggeraddunitselectedevent-2}
```cs
void TriggerAddUnitSelectedEvent(unit unit, TypedCallback trigger)
```
#### Description
[](description-start)
This event is triggered when a unit is selected.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event for any unit.
- *TypedCallback* `trigger` the callback function that is run when the event is triggered.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
local function OnUnitSelected()
    local unit = DCEI.TriggeringUnit
    local unit_name = DCEI.GetUnitType(unit)
    DCEI.LogMessage(unit_name .. " has been selected.")
end
    
DCEI.TriggerAddUnitSelectedEvent(DCEI.UnitAny, OnUnitSelected)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [UnitAny](Trigger-API-Reference-DCEI-Variables#unitany)
- [TriggeringUnit](Trigger-API-Reference-DCEI-Variables#triggeringunit)
[](extra-section-end)

## void TriggerAddUnitDeselectedEvent(unit unit, TypedCallback trigger) {triggeraddunitdeselectedevent-2}
```cs
void TriggerAddUnitDeselectedEvent(unit unit, TypedCallback trigger)
```
#### Description
[](description-start)
This event is triggered when a unit is deselected.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event for any unit.
- *TypedCallback* `trigger` the callback function that is run when the event is triggered.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
local function OnUnitDeselected()
    local unit = DCEI.TriggeringUnit
    local unit_name = DCEI.GetUnitType(unit)
    DCEI.LogMessage(unit_name .. " has been deselected.")
end

DCEI.TriggerAddUnitDeselectedEvent(DCEI.UnitAny, OnUnitDeselected)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [UnitAny](Trigger-API-Reference-DCEI-Variables#unitany)
- [TriggeringUnit](Trigger-API-Reference-DCEI-Variables#triggeringunit)
[](extra-section-end)

## void TriggerAddUnitDamageEvent(unit unit, TypedCallback\<float, unit> trigger, CriticalFilter filter = default) {triggeraddunitdamageevent-3}
```cs
void TriggerAddUnitDamageEvent(unit unit, TypedCallback<float, unit> trigger, CriticalFilter filter = default)
```
#### Description
[](description-start)
This event is triggered when a unit is damaged. Inputs the damage done to the unit into the trigger as the first parameter, and passes the target unit to the second parameter.

**Note:** DCEI.Wait is explicitly disabled in callbacks for TriggerAddUnitDamageEvent, TriggerAddUnitCriticalDamageEvent, TriggerAddUnitHealEvent as these triggers may each fire multiple times per second and DCEI.Wait is relatively costly. To circumvent this, you should wrap trigger into a DCEI.TriggerAddTimerEventElapsed (or Core.Timer).
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event for any unit.
- *TypedCallback\<float, unit>* `trigger` the callback function that is run when the event is triggered.
- *[CriticalFilter](Trigger-API-Reference-DCEI-Types#criticalfilter)* `filter` whether this event is triggered on all damage event, or just critical ones, or just non-critical ones.

[](parameters-end)

#### Callback Parameters
- *Single* `amount`
- *Unit* `target_unit`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local function OnUnitDamaged(damage, target_unit)
    local context = DCEI.TriggeringEffectContext
    local effect = DCEI.TriggeringEffectName
    local caster_name = DCEI.GetUnitType(context.caster)
    local source_name = DCEI.GetUnitType(context.source)
    local target_name = DCEI.GetUnitType(context.target)
    -- Alternatively;
    -- local target_name = DCEI.GetUnitType(target_unit)
    DCEI.LogMessage(target_name .. " was damaged for " .. damage .. " by " .. caster_name .. " via " .. source_name .. " through the use of " .. effect .. ".")
end

DCEI.TriggerAddUnitDamageEvent(DCEI.UnitAny, OnUnitDamaged, {critical_only = true})
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [UnitAny](Trigger-API-Reference-DCEI-Variables#unitany)
- [TriggeringUnit](Trigger-API-Reference-DCEI-Variables#triggeringunit)
- [TriggeringEffectContext](Trigger-API-Reference-DCEI-Variables#triggeringeffectcontext)
- [TriggeringEffectId](Trigger-API-Reference-DCEI-Variables#triggeringeffectid)
- [TriggeringEffectName](Trigger-API-Reference-DCEI-Variables#triggeringeffectname)
[](extra-section-end)

## void TriggerAddUnitCriticalDamageEvent(unit unit, TypedCallback\<float, unit> trigger) {triggeraddunitcriticaldamageevent-2}
```cs
void TriggerAddUnitCriticalDamageEvent(unit unit, TypedCallback<float, unit> trigger)
```
#### Description
[](description-start)
This event is triggered when a unit is damaged by a critical hit from a weapon. Inputs the damage done to the unit into the trigger as the first parameter, and passes the target unit to the second parameter.

**Note:** DCEI.Wait is explicitly disabled in callbacks for TriggerAddUnitDamageEvent, TriggerAddUnitCriticalDamageEvent, TriggerAddUnitHealEvent as these triggers may each fire multiple times per second and DCEI.Wait is relatively costly. To circumvent this, you should wrap trigger into a DCEI.TriggerAddTimerEventElapsed (or Core.Timer).
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event for any unit.
- *TypedCallback\<float, unit>* `trigger` the callback function that is run when the event is triggered.

[](parameters-end)

#### Callback Parameters
- *Single* `amount`
- *Unit* `target_unit`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
local function OnUnitCriticalDamaged(damage, target_unit)
    local context = DCEI.TriggeringEffectContext
    local effect = DCEI.TriggeringEffectName
    local caster_name = DCEI.GetUnitType(context.caster)
    local source_name = DCEI.GetUnitType(context.source)
    local target_name = DCEI.GetUnitType(context.target)
    -- Alternatively;
    -- local target_name = DCEI.GetUnitType(target_unit)
    DCEI.LogMessage(target_name .. " was damaged for " .. damage .. " by " .. caster_name .. " via " .. source_name .. " through the use of " .. effect .. ".")
end

DCEI.TriggerAddUnitCriticalDamageEvent(DCEI.UnitAny, OnUnitCriticalDamaged)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [UnitAny](Trigger-API-Reference-DCEI-Variables#unitany)
- [TriggeringUnit](Trigger-API-Reference-DCEI-Variables#triggeringunit)
- [TriggeringEffectContext](Trigger-API-Reference-DCEI-Variables#triggeringeffectcontext)
- [TriggeringEffectId](Trigger-API-Reference-DCEI-Variables#triggeringeffectid)
- [TriggeringEffectName](Trigger-API-Reference-DCEI-Variables#triggeringeffectname)
[](extra-section-end)

## void TriggerAddUnitHealEvent(unit unit, TypedCallback\<float, unit> trigger) {triggeraddunithealevent-2}
```cs
void TriggerAddUnitHealEvent(unit unit, TypedCallback<float, unit> trigger)
```
#### Description
[](description-start)
This event is triggered when a unit is healed. Inputs the amount healed by the unit into the trigger as the first parameter, and passes the target unit to the second parameter.

**Note:** DCEI.Wait is explicitly disabled in callbacks for TriggerAddUnitDamageEvent, TriggerAddUnitCriticalDamageEvent, TriggerAddUnitHealEvent as these triggers may each fire multiple times per second and DCEI.Wait is relatively costly. To circumvent this, you should wrap trigger into a DCEI.TriggerAddTimerEventElapsed (or Core.Timer).
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event for any unit.
- *TypedCallback\<float, unit>* `trigger` the callback function that is run when the event is triggered.

[](parameters-end)

#### Callback Parameters
- *Single* `amount`
- *Unit* `target_unit`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
local function OnUnitHealed(amount, target_unit)
    local context = DCEI.TriggeringEffectContext
    local effect = DCEI.TriggeringEffectName
    local caster_name = DCEI.GetUnitType(context.caster)
    local source_name = DCEI.GetUnitType(context.source)
    local target_name = DCEI.GetUnitType(context.target)
    -- Alternatively;
    -- local target_name = DCEI.GetUnitType(target_unit)
    DCEI.LogMessage(target_name .. " was healed for " .. amount .. " by " .. caster_name .. " via " .. source_name .. " through the use of " .. effect .. ".")
end

DCEI.TriggerAddUnitHealEvent(DCEI.UnitAny, OnUnitHealed)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [UnitAny](Trigger-API-Reference-DCEI-Variables#unitany)
- [TriggeringUnit](Trigger-API-Reference-DCEI-Variables#triggeringunit)
[](extra-section-end)

## void TriggerAddUnitSpawnEvent(unit unit, TypedCallback trigger, bool simple = False) {triggeraddunitspawnevent-3}
```cs
void TriggerAddUnitSpawnEvent(unit unit, TypedCallback trigger, bool simple = False)
```
#### Description
[](description-start)
This event is triggered when a unit is spawned.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event for any unit.
- *TypedCallback* `trigger` the callback function that is run when the event is triggered.
- *bool* `simple` this flag reduces overhead by preventing the usage of DCEI.Wait() within the trigger. You should only set this to true if the trigger does not utilize DCEI.Wait() at all.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
local function OnUnitSpawned()
    local unit = DCEI.TriggeringUnit
    local name = DCEI.GetUnitType(unit)
    DCEI.LogMessage(name .. " was spawned.")
end

DCEI.TriggerAddUnitSpawnEvent(DCEI.UnitAny, OnUnitSpawned)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [UnitAny](Trigger-API-Reference-DCEI-Variables#unitany)
- [TriggeringUnit](Trigger-API-Reference-DCEI-Variables#triggeringunit)
[](extra-section-end)

## void TriggerAddUnitDiedEvent(unit unit, TypedCallback\<unit> trigger, bool simple = False) {triggeraddunitdiedevent-3}
```cs
void TriggerAddUnitDiedEvent(unit unit, TypedCallback<unit> trigger, bool simple = False)
```
#### Description
[](description-start)
This event is triggered when a unit dies.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event for any unit.
- *TypedCallback\<unit>* `trigger` the callback function that is run when the event is triggered. This function can also pass the killing unit as a parameter to the callback function.
- *bool* `simple` this flag reduces overhead by preventing the usage of DCEI.Wait() within the trigger. You should only set this to true if the trigger does not utilize DCEI.Wait() at all.

[](parameters-end)

#### Callback Parameters
- *Unit* `killing_unit`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
local function OnUnitDeath(killing_unit)
    local unit = DCEI.TriggeringUnit
    local name = DCEI.GetUnitType(unit)
    local killing_unit_name = DCEI.GetUnitType(killing_unit)
    DCEI.LogMessage(killing_unit_name .. " has killed " .. name)
end

DCEI.TriggerAddUnitDiedEvent(DCEI.UnitAny, OnUnitDeath)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [UnitAny](Trigger-API-Reference-DCEI-Variables#unitany)
- [TriggeringUnit](Trigger-API-Reference-DCEI-Variables#triggeringunit)
- [TriggerAddUnitRemovedEvent](#triggeraddunitremovedevent-3)
[](extra-section-end)

## void TriggerAddUnitMoveCommandEvent(unit unit, TypedCallback\<Float2> trigger) {triggeraddunitmovecommandevent-2}
```cs
void TriggerAddUnitMoveCommandEvent(unit unit, TypedCallback<Float2> trigger)
```
#### Description
[](description-start)
This event is triggered when a unit **starts** moving. Inputs the destination into the first parameter of the trigger as a float2 value.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event for any unit.
- *TypedCallback\<Float2>* `trigger` the callback function that is run when the event is triggered.

[](parameters-end)

#### Callback Parameters
- *Float2* `target_position`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
local function OnUnitMoveCommand(destination)
    local unit = DCEI.TriggeringUnit
    local unit_name = DCEI.GetUnitType(unit)
    local position = DCEI.GetUnitPosition2D(unit)

    local message = string.format("%q is moving to (%.2f, %.2f) from (%.2f, %.2f).", unit_name, destination.x, destination.y, position.x, position.y)
    DCEI.LogMessage(message)
end

DCEI.TriggerAddUnitMoveCommandEvent(DCEI.UnitAny, OnUnitMoveCommand)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [UnitAny](Trigger-API-Reference-DCEI-Variables#unitany)
- [TriggeringUnit](Trigger-API-Reference-DCEI-Variables#triggeringunit)
- [GetUnitPosition2D](#getunitposition2d-1)
[](extra-section-end)

## void TriggerAddOnUnitIdleEvent(unit unit, TypedCallback trigger) {triggeraddonunitidleevent-2}
```cs
void TriggerAddOnUnitIdleEvent(unit unit, TypedCallback trigger)
```
#### Description
[](description-start)
This event is triggered when a unit goes into the idle state (no commands queued). 

**Note:** The unit must be set, [DCEI.UnitAny](Trigger-API-Reference-DCEI-Variables#unitany) does not work for this event.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event.
- *TypedCallback* `trigger` the callback function that is run when the event is triggered.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local test_subject = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)

local function OnUnitIdle()
    local unit = DCEI.TriggeringUnit
    local unit_name = DCEI.GetUnitType(unit)

    DCEI.LogMessage(unit_name .. " has become idle.")
end

DCEI.TriggerAddOnUnitIdleEvent(test_subject, OnUnitIdle)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [UnitAny](Trigger-API-Reference-DCEI-Variables#unitany)
- [TriggeringUnit](Trigger-API-Reference-DCEI-Variables#triggeringunit)
[](extra-section-end)

## void TriggerAddUnitRemovedEvent(unit unit, TypedCallback trigger, bool simple = False) {triggeraddunitremovedevent-3}
```cs
void TriggerAddUnitRemovedEvent(unit unit, TypedCallback trigger, bool simple = False)
```
#### Description
[](description-start)
This event is triggered when a unit is removed.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event for any unit.
- *TypedCallback* `trigger` the callback function that is run when the event is triggered.
- *bool* `simple` this flag reduces overhead by preventing the usage of DCEI.Wait() within the trigger. You should only set this to true if the trigger does not utilize DCEI.Wait() at all.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
local function OnUnitRemoved()
    local unit = DCEI.TriggeringUnit
    local unit_name = DCEI.GetUnitType(unit)

    DCEI.LogMessage(unit_name .. " has been removed.")
end

DCEI.TriggerAddUnitRemovedEvent(DCEI.UnitAny, OnUnitRemoved)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [UnitAny](Trigger-API-Reference-DCEI-Variables#unitany)
- [TriggeringUnit](Trigger-API-Reference-DCEI-Variables#triggeringunit)
- [TriggerAddUnitDiedEvent](Trigger-API-Reference-DCEI-Events-Unit#triggeraddunitdiedevent-3)
[](extra-section-end)

