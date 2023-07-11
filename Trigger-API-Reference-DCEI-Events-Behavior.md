<div id="toc" markdown="1">
- [Trigger API Reference\DCEI Events\Behavior](#trigger-api-referencedcei-eventsbehavior)
  * [TriggerAddBehaviorStackIncreaseEvent](#triggeraddbehaviorstackincreaseevent-4)
  * [TriggerAddBehaviorStackDecreaseEvent](#triggeraddbehaviorstackdecreaseevent-4)
  * [TriggerAddBehaviorAddEvent](#triggeraddbehavioraddevent-4)
  * [TriggerAddBehaviorExpireEvent](#triggeraddbehaviorexpireevent-4)
  * [TriggerAddBehaviorDisabledEvent](#triggeraddbehaviordisabledevent-4)
  * [TriggerAddBehaviorEnabledEvent](#triggeraddbehaviorenabledevent-4)
  * [TriggerAddBehaviorRemoveEvent](#triggeraddbehaviorremoveevent-4)

</div>

***

# [Trigger API Reference](Trigger-API-Reference)\\DCEI Events\Behavior {Trigger-API-ReferenceDCEI-EventsBehavior}

[](overview-start)

[](overview-end)

## void TriggerAddBehaviorStackIncreaseEvent(unit unit, TypedCallback\<EffectContext, int> trigger, bool simple = False, BehaviorFilter filter = default) {triggeraddbehaviorstackincreaseevent-4}
```cs
void TriggerAddBehaviorStackIncreaseEvent(unit unit, TypedCallback<EffectContext, int> trigger, bool simple = False, BehaviorFilter filter = default)
```
#### Description
[](description-start)
This event triggers when a behavior's stack count increase. This function can also pass the effect context and stack count delta as parameters to the callback function.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event for any unit.
- *TypedCallback\<EffectContext, int>* `trigger` the callback function that is run when the event is triggered.
- *bool* `simple` this flag reduces overhead by preventing the usage of DCEI.Wait() within the trigger. You should only set this to true if the trigger does not use DCEI.Wait().
- *[BehaviorFilter](Trigger-API-Reference-DCEI-Types#behaviorfilter)* `filter` could make this event only trigger on certain behaviors

[](parameters-end)

#### Callback Parameters
- *EffectContext* `effect_context`
- *Int32* `stack_count_delta`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
DCEI.TriggerAddBehaviorStackIncreaseEvent(DCEI.UnitAny, OnUnitBehaviorIncrease, true)

function OnUnitBehaviorIncrease(effect_context, stack_count_delta)
    local name = DCEI.TriggeringBehaviorName
    local u = DCEI.TriggeringUnit
    local unit_type = DCEI.GetUnitType(u)
    DCEI.LogMessage(unit_type .. " behavior " .. name .. " increased for a total of " .. stack_count_delta .. " stacks.")
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void TriggerAddBehaviorStackDecreaseEvent(unit unit, TypedCallback\<EffectContext, int> trigger, bool simple = False, BehaviorFilter filter = default) {triggeraddbehaviorstackdecreaseevent-4}
```cs
void TriggerAddBehaviorStackDecreaseEvent(unit unit, TypedCallback<EffectContext, int> trigger, bool simple = False, BehaviorFilter filter = default)
```
#### Description
[](description-start)
This event triggers when a behavior's stack count decrease. This function can also pass the effect context and stack count delta as parameters to the callback function.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event for any unit.
- *TypedCallback\<EffectContext, int>* `trigger` the callback function that is run when the event is triggered.
- *bool* `simple` this flag reduces overhead by preventing the usage of DCEI.Wait() within the trigger. You should only set this to true if the trigger does not use DCEI.Wait().
- *[BehaviorFilter](Trigger-API-Reference-DCEI-Types#behaviorfilter)* `filter` could make this event only trigger on certain behaviors

[](parameters-end)

#### Callback Parameters
- *EffectContext* `effect_context`
- *Int32* `stack_count_delta`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
DCEI.TriggerAddBehaviorStackDecreaseEvent(DCEI.UnitAny, OnUnitBehaviorDecrease, true)

function OnUnitBehaviorDecrease(effect_context, stack_count_delta)
    local name = DCEI.TriggeringBehaviorName
    local u = DCEI.TriggeringUnit
    local unit_type = DCEI.GetUnitType(u)
    DCEI.LogMessage(unit_type .. " behavior " .. name .. " Decreased for a total of " .. stack_count_delta .. " stacks.")
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void TriggerAddBehaviorAddEvent(unit unit, TypedCallback\<EffectContext> trigger, bool simple = False, BehaviorFilter filter = default) {triggeraddbehavioraddevent-4}
```cs
void TriggerAddBehaviorAddEvent(unit unit, TypedCallback<EffectContext> trigger, bool simple = False, BehaviorFilter filter = default)
```
#### Description
[](description-start)
This event triggers when a behavior is added to a unit. This function can also pass the effect context as a parameter to the callback function.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event for any unit.
- *TypedCallback\<EffectContext>* `trigger` the callback function that is run when the event is triggered.
- *bool* `simple` this flag reduces overhead by preventing the usage of DCEI.Wait() within the trigger. You should only set this to true if the trigger does not use DCEI.Wait().
- *[BehaviorFilter](Trigger-API-Reference-DCEI-Types#behaviorfilter)* `filter` could make this event only trigger on certain behaviors

[](parameters-end)

#### Callback Parameters
- *EffectContext* `effect_context`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
DCEI.TriggerAddBehaviorAddEvent(DCEI.UnitAny, OnUnitBehaviorAdd, true)

function OnUnitBehaviorAdd(effect_context)
    local name = DCEI.TriggeringBehaviorName
    local u = DCEI.TriggeringUnit
    local unit_type = DCEI.GetUnitType(u)
    local stacks = UnitBehaviorStackCount(u, name)
    DCEI.LogMessage(unit_type .. " had " .. name .. " added for a total of " .. stacks .. " stacks.")
end
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [TriggeringBehaviorId](Trigger-API-Reference-DCEI-Variables#triggeringbehaviorid)
- [TriggeringBehaviorName](Trigger-API-Reference-DCEI-Variables#triggeringbehaviorname)
- [TriggeringUnit](Trigger-API-Reference-DCEI-Variables#triggeringunit)
- [UnitAny](Trigger-API-Reference-DCEI-Variables#unitany)
- [EffectContext](Trigger-API-Reference-DCEI-Types#effectcontext)
[](extra-section-end)

## void TriggerAddBehaviorExpireEvent(unit unit, TypedCallback trigger, bool simple = False, BehaviorFilter filter = default) {triggeraddbehaviorexpireevent-4}
```cs
void TriggerAddBehaviorExpireEvent(unit unit, TypedCallback trigger, bool simple = False, BehaviorFilter filter = default)
```
#### Description
[](description-start)
This event triggers when a behavior expires on a unit. 
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event for any unit.
- *TypedCallback* `trigger` the callback function that is run when the event is triggered.
- *bool* `simple` this flag reduces overhead by preventing the usage of DCEI.Wait() within the trigger. You should only set this to true if the trigger does not use DCEI.Wait().
- *[BehaviorFilter](Trigger-API-Reference-DCEI-Types#behaviorfilter)* `filter` could make this event only trigger on certain behaviors

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
function OnUnitBehaviorExpire()
    local name = DCEI.TriggeringBehaviorName
    local u = DCEI.TriggeringUnit
    local unit_type = DCEI.GetUnitType(u)
    DCEI.LogMessage(unit_type .. " lost " .. name .. " .")
end

DCEI.TriggerAddBehaviorExpireEvent(DCEI.UnitAny, OnUnitBehaviorExpire, true)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [TriggeringBehaviorId](Trigger-API-Reference-DCEI-Variables#triggeringbehaviorid)
- [TriggeringBehaviorName](Trigger-API-Reference-DCEI-Variables#triggeringbehaviorname)
- [TriggeringUnit](Trigger-API-Reference-DCEI-Variables#triggeringunit)
- [UnitAny](Trigger-API-Reference-DCEI-Variables#unitany)
[](extra-section-end)

## void TriggerAddBehaviorDisabledEvent(unit unit, TypedCallback trigger, bool simple = False, BehaviorFilter filter = default) {triggeraddbehaviordisabledevent-4}
```cs
void TriggerAddBehaviorDisabledEvent(unit unit, TypedCallback trigger, bool simple = False, BehaviorFilter filter = default)
```
#### Description
[](description-start)
This event triggers when a unit has a behavior on it is disabled. Use [TriggeringBehaviorName](Trigger-API-Reference-DCEI-Variables#triggeringbehaviorname) to get the behavior that triggered the event.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event for any unit.
- *TypedCallback* `trigger` the callback function that is run when the event is triggered.
- *bool* `simple` this flag reduces overhead by preventing the usage of DCEI.Wait() within the trigger. You should only set this to true if the trigger does not use DCEI.Wait().
- *[BehaviorFilter](Trigger-API-Reference-DCEI-Types#behaviorfilter)* `filter` could make this event only trigger on certain behaviors

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
function OnUnitBehaviorDisable()
    local name = DCEI.TriggeringBehaviorName
    local u = DCEI.TriggeringUnit
    local unit_type = DCEI.GetUnitType(u)
    local stacks = UnitBehaviorStackCount(u, name)
    DCEI.LogMessage(stacks .. " stacks of " .. name .. " no long have any effect on " .. unit_type ..".")
end

DCEI.TriggerAddBehaviorDisabledEvent(DCEI.UnitAny, OnUnitBehaviorDisable, true)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [TriggeringBehaviorId](Trigger-API-Reference-DCEI-Variables#triggeringbehaviorid)
- [TriggeringBehaviorName](Trigger-API-Reference-DCEI-Variables#triggeringbehaviorname)
- [TriggeringUnit](Trigger-API-Reference-DCEI-Variables#triggeringunit)
- [UnitAny](Trigger-API-Reference-DCEI-Variables#unitany)
[](extra-section-end)

## void TriggerAddBehaviorEnabledEvent(unit unit, TypedCallback trigger, bool simple = False, BehaviorFilter filter = default) {triggeraddbehaviorenabledevent-4}
```cs
void TriggerAddBehaviorEnabledEvent(unit unit, TypedCallback trigger, bool simple = False, BehaviorFilter filter = default)
```
#### Description
[](description-start)
This event is triggered when a unit has a behavior on it enabled. Use [TriggeringBehaviorName](Trigger-API-Reference-DCEI-Variables#triggeringbehaviorname) to figure out which behavior triggered the event.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event for any unit.
- *TypedCallback* `trigger` the callback function that is run when the event is triggered.
- *bool* `simple` this flag reduces overhead by preventing the usage of DCEI.Wait() within the trigger. You should only set this to true if the trigger does not use DCEI.Wait().
- *[BehaviorFilter](Trigger-API-Reference-DCEI-Types#behaviorfilter)* `filter` could make this event only trigger on certain behaviors

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
function OnUnitBehaviorEnable()
    local name = DCEI.TriggeringBehaviorName
    local u = DCEI.TriggeringUnit
    local unit_type = DCEI.GetUnitType(u)
    local stacks = UnitBehaviorStackCount(u, name)
    DCEI.LogMessage(stacks .. " stacks of " .. name .. " on " .. unit_type .. " now work.")
end

DCEI.TriggerAddBehaviorEnabledEvent(DCEI.UnitAny, OnUnitBehaviorEnable, true)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [TriggeringBehaviorId](Trigger-API-Reference-DCEI-Variables#triggeringbehaviorid)
- [TriggeringBehaviorName](Trigger-API-Reference-DCEI-Variables#triggeringbehaviorname)
- [TriggeringUnit](Trigger-API-Reference-DCEI-Variables#triggeringunit)
- [UnitAny](Trigger-API-Reference-DCEI-Variables#unitany)
[](extra-section-end)

## void TriggerAddBehaviorRemoveEvent(unit unit, TypedCallback trigger, bool simple = False, BehaviorFilter filter = default) {triggeraddbehaviorremoveevent-4}
```cs
void TriggerAddBehaviorRemoveEvent(unit unit, TypedCallback trigger, bool simple = False, BehaviorFilter filter = default)
```
#### Description
[](description-start)
This event is triggered when a unit has a behavior on it removed.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event for any unit.
- *TypedCallback* `trigger` the callback function that is run when the event is triggered.
- *bool* `simple` this flag reduces overhead by preventing the usage of DCEI.Wait() within the trigger. You should only set this to true if the trigger does not use DCEI.Wait().
- *[BehaviorFilter](Trigger-API-Reference-DCEI-Types#behaviorfilter)* `filter` could make this event only trigger on certain behaviors

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
function OnUnitBehaviorRemove()
    local name = DCEI.TriggeringBehaviorName
    local u = DCEI.TriggeringUnit
    local unit_type = DCEI.GetUnitType(u)
    DCEI.LogMessage(name .. " was removed from " .. unit_type .. ".")
end

DCEI.TriggerAddBehaviorRemoveEvent(DCEI.UnitAny, OnUnitBehaviorRemove, true)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [TriggeringBehaviorId](Trigger-API-Reference-DCEI-Variables#triggeringbehaviorid)
- [TriggeringBehaviorName](Trigger-API-Reference-DCEI-Variables#triggeringbehaviorname)
- [TriggeringUnit](Trigger-API-Reference-DCEI-Variables#triggeringunit)
- [UnitAny](Trigger-API-Reference-DCEI-Variables#unitany)
[](extra-section-end)

