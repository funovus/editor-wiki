<div id="toc" markdown="1">
- [Trigger API Reference\DCEI Events\Effect](#trigger-api-referencedcei-eventseffect)
  * [TriggerAddEffectEvent](#triggeraddeffectevent-3)
  * [TriggerAddEffectHookEvent](#triggeraddeffecthookevent-3)

</div>

***

# [Trigger API Reference](Trigger-API-Reference)\\DCEI Events\Effect {Trigger-API-ReferenceDCEI-EventsEffect}

[](overview-start)

[](overview-end)

## void TriggerAddEffectEvent(string effectName, TypedCallback\<EffectContext> trigger, bool simple = False) {triggeraddeffectevent-3}
```cs
void TriggerAddEffectEvent(string effectName, TypedCallback<EffectContext> trigger, bool simple = False)
```
#### Description
[](description-start)
This event is triggered when an effect occurs. Use [TriggeringEffectName](Trigger-API-Reference-DCEI-Variables#triggeringeffectname) and [TriggeringEffectContext](Trigger-API-Reference-DCEI-Variables#triggeringeffectcontext) to get the name and context of the effect. This function can also pass the effect context as a parameter to the callback function.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `effectName` the name of the effect which triggers the event.
- *TypedCallback\<EffectContext>* `trigger` the callback function that is run when the event is triggered.
- *bool* `simple` this flag reduces overhead by preventing the usage of DCEI.Wait() within the trigger. You should only set this to true if the trigger does not use DCEI.Wait().

[](parameters-end)

#### Callback Parameters
- *EffectContext* `effect_context`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
function OnDoNothing(effect_context)
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

- [TriggeringEffectContext](Trigger-API-Reference-DCEI-Variables#triggeringeffectcontext)
- [TriggeringEffectId](Trigger-API-Reference-DCEI-Variables#triggeringeffectid)
- [TriggeringEffectName](Trigger-API-Reference-DCEI-Variables#triggeringeffectname)
[](extra-section-end)

## void TriggerAddEffectHookEvent(string effectName, TypedCallback\<EffectContext> trigger, bool simple = False) {triggeraddeffecthookevent-3}
```cs
void TriggerAddEffectHookEvent(string effectName, TypedCallback<EffectContext> trigger, bool simple = False)
```
#### Description
[](description-start)
Effect hooks allow you to intercept an effect and modify the data before executing it during Lua run-time.  In the following example, this effect hook intercepts a launch missile effect to make it use the very unit it’s attacking as the missile for the Launch Missile effect. See [Using Effect Hooks](https://www.notion.so/funovus/Using-Effect-Hooks-14bc65d3472b4b1a93b65b30deed1aa9)
[](description-end)

#### Parameters
[](parameters-start)
- *string* `effectName` the name of the effect which triggers the event.
- *TypedCallback\<EffectContext>* `trigger` the callback function that is run when the event is triggered.
- *bool* `simple` this flag reduces overhead by preventing the usage of DCEI.Wait() within the trigger. You should only set this to true

[](parameters-end)

#### Callback Parameters
- *EffectContext* `effect_context`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
DCEI.TriggerAddEffectHookEvent(
    DCEI.Effect("Standard RangedUnit Weapon Launch"),
    function(context)
        if DCEI.EvaluateEffectHookExpression("RandomChance 100%") ~= 0 then
            local field_path = {"launchMissile", "missileUnit"}
            local missile_unit = DCEI.GetUnitType(context.target)
            DCEI.SetEffectHookFieldValue(field_path, missile_unit)
        end
    end
)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

