<div id="toc" markdown="1">
- [Trigger API Reference\DCEI Events\Ability](#trigger-api-referencedcei-eventsability)
  * [TriggerAddCastAbilityEvent](#triggeraddcastabilityevent-4)
  * [TriggerAddUseAbilityEvent](#triggeradduseabilityevent-4)
  * [TriggerAddActivateAbilityEvent](#triggeraddactivateabilityevent-4)
  * [TriggerAddUnitAbilityOnOffEvent](#triggeraddunitabilityonoffevent-4)
  * [TriggerAddUnitAbilityOnEvent](#triggeraddunitabilityonevent-4)
  * [TriggerAddUnitAbilityOffEvent](#triggeraddunitabilityoffevent-4)
  * [TriggerAddDeactivateAbilityEvent](#triggeradddeactivateabilityevent-4)

</div>

***

# [Trigger API Reference](Trigger-API-Reference)\\DCEI Events\Ability {Trigger-API-ReferenceDCEI-EventsAbility}

[](overview-start)
## Ability Events Overview
The order of phases for abilities and their corresponding events are as follows:

1. Ability Starts (via trigger or button)
2. Enter Target Mode ([TriggerAddActivateAbilityEvent()](Trigger-API-Reference-DCEI-Events-Ability#void-triggeraddactivateabilityeventunit-unit-typedcallback-trigger-bool-simple-abilityfilter-filter))
3. Exit Target Mode ([TriggerAddDeactivateAbilityEvent()](Trigger-API-Reference-DCEI-Events-Ability#void-triggeradddeactivateabilityeventunit-unit-typedcallback-trigger-bool-simple-abilityfilter-filter))
4. Queued
5. Prep Time Start
6. Prep Time End
7. Cast ([TriggerAddCastAbilityEvent()](Trigger-API-Reference-DCEI-Events-Ability#void-triggeraddcastabilityeventunit-unit-typedcallbackunit-float2-trigger-bool-simple-abilityfilter-filter))
8. Finish Time Start
9. Finish Time End ([TriggerAddUseAbilityEvent()](Trigger-API-Reference-DCEI-Events-Ability#void-triggeradduseabilityeventunit-unit-typedcallbackunit-float2-trigger-bool-simple-abilityfilter-filter))
10. Cooldown Start ([TriggerAddUnitAbilityOnOffEvent()](Trigger-API-Reference-DCEI-Events-Ability#void-triggeraddunitabilityonoffeventunit-unit-typedcallbackbool-trigger-bool-simple-abilityfilter-filter))
11. Cooldown End ([TriggerAddUnitAbilityOnOffEvent()](Trigger-API-Reference-DCEI-Events-Ability#void-triggeraddunitabilityonoffeventunit-unit-typedcallbackbool-trigger-bool-simple-abilityfilter-filter))
[](overview-end)

## void TriggerAddCastAbilityEvent(unit unit, TypedCallback\<unit, Float2> trigger, bool simple = False, AbilityFilter filter = default) {triggeraddcastabilityevent-4}
```cs
void TriggerAddCastAbilityEvent(unit unit, TypedCallback<unit, Float2> trigger, bool simple = False, AbilityFilter filter = default)
```
#### Description
[](description-start)
This event triggers when an ability has completed its cast. This function can also pass the target unit and target location as parameters to the callback function (if target is only a location, target unit will return nil). You can also set up an [Ability Filter](Trigger-API-Reference-DCEI-Types#abilityfilter) to make this only trigger for certain ability.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event when any unit uses an ability.
- *TypedCallback\<unit, Float2>* `trigger` the callback function that is run when the event is triggered.
- *bool* `simple` this flag reduces overhead by preventing the usage of DCEI.Wait() within the trigger. You should only set this to true if the trigger does not use DCEI.Wait().
- *[AbilityFilter](Trigger-API-Reference-DCEI-Types#abilityfilter)* `filter` this filter allows you to only trigger this event on certain abilities

[](parameters-end)

#### Callback Parameters
- *Unit* `target_unit`
- *Float2* `target_position`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
function OnAbilityCast(target_unit, target_pos)
    local unit = DCEI.TriggeringUnit
    local unit_name = DCEI.GetUnitType(unit)
    local ability_name = DCEI.TriggeringAbilityName
    DCEI.LogMessage(unit_name .. " casts " .. ability_name)
    
    local target_name = DCEI.GetUnitType(target_unit)
    DCEI.LogMessage("Target: " .. target_name .. " at (" .. target_pos.x .. ", " .. target_pos.y .. ")")
end
DCEI.TriggerAddCastAbilityEvent(DCEI.UnitAny, OnAbilityCast, true)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void TriggerAddUseAbilityEvent(unit unit, TypedCallback\<unit, Float2> trigger, bool simple = False, AbilityFilter filter = default) {triggeradduseabilityevent-4}
```cs
void TriggerAddUseAbilityEvent(unit unit, TypedCallback<unit, Float2> trigger, bool simple = False, AbilityFilter filter = default)
```
#### Description
[](description-start)
This event triggers when an ability exits the finish phase. This function can also pass the target unit and target location as parameters to the callback function (if target is only a location, target unit will return nil). You can also set up an [Ability Filter](Trigger-API-Reference-DCEI-Types#abilityfilter) to make this only trigger for certain ability.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event when any unit uses an ability.
- *TypedCallback\<unit, Float2>* `trigger` the callback function that is run when the event is triggered.
- *bool* `simple` this flag reduces overhead by preventing the usage of DCEI.Wait() within the trigger. You should only set this to true if the trigger does not use DCEI.Wait().
- *[AbilityFilter](Trigger-API-Reference-DCEI-Types#abilityfilter)* `filter` this filter allows you to only trigger this event on certain abilities

[](parameters-end)

#### Callback Parameters
- *Unit* `target_unit`
- *Float2* `target_position`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
function OnAbilityCast(target_unit, target_pos)
    local unit = DCEI.TriggeringUnit
    local unit_name = DCEI.GetUnitType(unit)
    local ability_name = DCEI.TriggeringAbilityName
    DCEI.LogMessage(unit_name .. " casts " .. ability_name)
    
    local target_name = DCEI.GetUnitType(target_unit)
    DCEI.LogMessage("Target: " .. target_name .. " at (" .. target_pos.x .. ", " .. target_pos.y .. ")")
end
DCEI.TriggerAddUseAbilityEvent(DCEI.UnitAny, OnAbilityCast, true)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void TriggerAddActivateAbilityEvent(unit unit, TypedCallback trigger, bool simple = False, AbilityFilter filter = default) {triggeraddactivateabilityevent-4}
```cs
void TriggerAddActivateAbilityEvent(unit unit, TypedCallback trigger, bool simple = False, AbilityFilter filter = default)
```
#### Description
[](description-start)
This event triggers when an ability activates. You can also set up an [Ability Filter](Trigger-API-Reference-DCEI-Types#abilityfilter) to make this only trigger for certain ability.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event when any unit uses an ability.
- *TypedCallback* `trigger` the callback function that is run when the event is triggered.
- *bool* `simple` this flag reduces overhead by preventing the usage of DCEI.Wait() within the trigger. You should only set this to true if the trigger does not use DCEI.Wait().
- *[AbilityFilter](Trigger-API-Reference-DCEI-Types#abilityfilter)* `filter` this filter allows you to only trigger this event on certain abilities

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
function OnAbilityActivate()
    local ability_name = DCEI.TriggeringAbilityName
    DCEI.LogMessage("Ability " .. ability_name .. "activated!")
end
DCEI.TriggerAddActivateAbilityEvent(DCEI.UnitAny, OnAbilityActivate, true)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void TriggerAddUnitAbilityOnOffEvent(unit unit, TypedCallback\<bool> trigger, bool simple = False, AbilityFilter filter = default) {triggeraddunitabilityonoffevent-4}
```cs
void TriggerAddUnitAbilityOnOffEvent(unit unit, TypedCallback<bool> trigger, bool simple = False, AbilityFilter filter = default)
```
#### Description
[](description-start)
This event triggers when an ability goes on or off cooldown. For abilities with charges, the event will only trigger when the charge count decreases to 0 or increases to at least 1.

The first parameter of the callback function is a boolean that indicates whether the ability has become available (true) or unavailable (false).
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event when any unit uses an ability.
- *TypedCallback\<bool>* `trigger` the callback function that is run when the event is triggered. This first parameter of this function will return `true` when the ability goes off cooldown and `false` when the ability enters cooldown.
- *bool* `simple` this flag reduces overhead by preventing the usage of DCEI.Wait() within the trigger. You should only set this to true if the trigger does not use DCEI.Wait().
- *[AbilityFilter](Trigger-API-Reference-DCEI-Types#abilityfilter)* `filter` this filter allows you to only trigger this event on certain abilities

[](parameters-end)

#### Callback Parameters
- *Boolean* `is_on`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
function OnAbilityOnOff(is_ready)
    local unit = DCEI.TriggeringUnit
    local unit_name = DCEI.GetUnitType(unit)
    local ability_name = DCEI.TriggeringAbilityName
    local state = is_ready and "on" or "off"

    DCEI.LogMessage(ability_name .. " is now ".. state .. " for " .. unit_name)
end

DCEI.TriggerAddUnitAbilityOnOffEvent(DCEI.UnitAny, OnAbilityOnOff, true)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [TriggeringAbilityID](Trigger-API-Reference-DCEI-Variables#triggeringabilityid)
- [TriggeringAbilityName](Trigger-API-Reference-DCEI-Variables#triggeringabilityname)
- [TriggeringUnit](Trigger-API-Reference-DCEI-Variables#triggeringunit)
- [UnitAny](Trigger-API-Reference-DCEI-Variables#unitany)
[](extra-section-end)

## void TriggerAddUnitAbilityOnEvent(unit unit, TypedCallback\<bool> trigger, bool simple = False, AbilityFilter filter = default) {triggeraddunitabilityonevent-4}
```cs
void TriggerAddUnitAbilityOnEvent(unit unit, TypedCallback<bool> trigger, bool simple = False, AbilityFilter filter = default)
```
#### Description
[](description-start)
This event triggers when an ability goes on cooldown. 
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event when any unit uses an ability.
- *TypedCallback\<bool>* `trigger` the callback function that is run when the event is triggered. This first parameter of this function will return `true` when the ability goes off cooldown and `false` when the ability enters cooldown.
- *bool* `simple` this flag reduces overhead by preventing the usage of DCEI.Wait() within the trigger. You should only set this to true if the trigger does not use DCEI.Wait().
- *[AbilityFilter](Trigger-API-Reference-DCEI-Types#abilityfilter)* `filter` this filter allows you to only trigger this event on certain abilities

[](parameters-end)

#### Callback Parameters
- *Boolean* `is_on`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
function OnAbilityOn()
    local unit = DCEI.TriggeringUnit
    local unit_name = DCEI.GetUnitType(unit)
    local ability_name = DCEI.TriggeringAbilityName

    DCEI.LogMessage(ability_name .. " is now on for " .. unit_name)
end

DCEI.TriggerAddUnitAbilityOnEvent(DCEI.UnitAny, OnAbilityOn, true)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void TriggerAddUnitAbilityOffEvent(unit unit, TypedCallback\<bool> trigger, bool simple = False, AbilityFilter filter = default) {triggeraddunitabilityoffevent-4}
```cs
void TriggerAddUnitAbilityOffEvent(unit unit, TypedCallback<bool> trigger, bool simple = False, AbilityFilter filter = default)
```
#### Description
[](description-start)
This event triggers when an ability goes off cooldown. 
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event when any unit uses an ability.
- *TypedCallback\<bool>* `trigger` the callback function that is run when the event is triggered. This first parameter of this function will return `true` when the ability goes off cooldown and `false` when the ability enters cooldown.
- *bool* `simple` this flag reduces overhead by preventing the usage of DCEI.Wait() within the trigger. You should only set this to true if the trigger does not use DCEI.Wait().
- *[AbilityFilter](Trigger-API-Reference-DCEI-Types#abilityfilter)* `filter` this filter allows you to only trigger this event on certain abilities

[](parameters-end)

#### Callback Parameters
- *Boolean* `is_on`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
function OnAbilityOnOff()
    local unit = DCEI.TriggeringUnit
    local unit_name = DCEI.GetUnitType(unit)
    local ability_name = DCEI.TriggeringAbilityName

    DCEI.LogMessage(ability_name .. " is now off for " .. unit_name)
end

DCEI.TriggerAddUnitAbilityOffEvent(DCEI.UnitAny, OnAbilityOnOff, true)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void TriggerAddDeactivateAbilityEvent(unit unit, TypedCallback trigger, bool simple = False, AbilityFilter filter = default) {triggeradddeactivateabilityevent-4}
```cs
void TriggerAddDeactivateAbilityEvent(unit unit, TypedCallback trigger, bool simple = False, AbilityFilter filter = default)
```
#### Description
[](description-start)
This event triggers when an ability exits targeting mode for the unit. 

**Note:** This is event is triggered regardless of method by which the targeting mode was exited, whether it was canceled or a target was set.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event when any unit uses an ability.
- *TypedCallback* `trigger` the callback function that is run when the event is triggered.
- *bool* `simple` this flag reduces overhead by preventing the usage of DCEI.Wait() within the trigger. You should only set this to true if the trigger does not use DCEI.Wait().
- *[AbilityFilter](Trigger-API-Reference-DCEI-Types#abilityfilter)* `filter` this filter allows you to only trigger this event on certain abilities

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
function OnAbilityDeactivate()
    local unit = DCEI.TriggeringUnit
    local unit_name = DCEI.GetUnitType(unit)
    local ability_name = DCEI.TriggeringAbilityName
    DCEI.LogMessage(unit_name .. " has exited the targeting mode for " .. ability_name)
end

DCEI.TriggerAddDeactivateAbilityEvent(DCEI.UnitAny, OnAbilityDeactivate, true)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [TriggeringAbilityID](Trigger-API-Reference-DCEI-Variables#triggeringabilityid)
- [TriggeringAbilityName](Trigger-API-Reference-DCEI-Variables#triggeringabilityname)
- [TriggeringUnit](Trigger-API-Reference-DCEI-Variables#triggeringunit)
- [UnitAny](Trigger-API-Reference-DCEI-Variables#unitany)
[](extra-section-end)

