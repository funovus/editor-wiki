<div id="toc" markdown="1">
- [Trigger API Reference\DCEI Functions\Effect](#trigger-api-referencedcei-functionseffect)
  * [GetEffectType](#geteffecttype-1)
  * [CreateEffectAtUnit](#createeffectatunit-2)
  * [CreateEffectAtSelf](#createeffectatself-2)
  * [CreateEffectAtUnit](#createeffectatunit-4)
  * [CreateEffectAtTarget](#createeffectattarget-4)
  * [CreateEffectAtPosition](#createeffectatposition-4)
  * [EvaluateEffectHookExpression](#evaluateeffecthookexpression-1)
  * [GetEffectHookFieldValue](#geteffecthookfieldvalue-1)
  * [SetEffectHookFieldValue](#seteffecthookfieldvalue-2)

</div>

***

# [Trigger API Reference](Trigger-API-Reference)\\DCEI Functions\Effect {Trigger-API-ReferenceDCEI-FunctionsEffect}

[](overview-start)

[](overview-end)

## string GetEffectType(string effectName) {geteffecttype-1}
```cs
string GetEffectType(string effectName)
```
#### Description
[](description-start)
Returns the effect type of an effect as a string.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `effectName` the name of the effect to check the type of.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
local effect_type = DCEI.GetEffectType(DCEI.Effect("DoNothing"))
DCEI.LogMessage(effect_type)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void CreateEffectAtUnit(string effectName, unit target) {createeffectatunit-2}
```cs
void CreateEffectAtUnit(string effectName, unit target)
```
**:warning:Warning:warning::** This api was deprecated at 6/6/2023, and will be removed after 90 days.

#### Description
[](description-start)
Creates an effect targeting a unit. There is no source or caster unit.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `effectName` the name of the effect to create.
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `target` the unit to target with the effect.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local test_subject = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
DCEI.CreateEffectAtUnit(DCEI.Effect("Kill"), test_subject)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void CreateEffectAtSelf(string effectName, unit target) {createeffectatself-2}
```cs
void CreateEffectAtSelf(string effectName, unit target)
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

## void CreateEffectAtUnit(string effectName, unit target, unit caster, unit source = default) {createeffectatunit-4}
```cs
void CreateEffectAtUnit(string effectName, unit target, unit caster, unit source = default)
```
**:warning:Warning:warning::** This api was deprecated at 6/6/2023, and will be removed after 90 days.

#### Description
[](description-start)
Create an effect targeting a unit via a source unit as if cast by another unit.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `effectName` the name of the effect to create.
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `target` the unit to target with the effect.
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `caster` the unit that is considered to be the caster of the effect.
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `source` the unit to treat as the effect source.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local caster = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
local source = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
local target = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
DCEI.CreateEffectAtUnit(DCEI.Effect("Kill"), target, caster, source)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void CreateEffectAtTarget(string effectName, unit target, unit caster, unit source = default) {createeffectattarget-4}
```cs
void CreateEffectAtTarget(string effectName, unit target, unit caster, unit source = default)
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

## void CreateEffectAtPosition(string effectName, unit caster, float x, float z) {createeffectatposition-4}
```cs
void CreateEffectAtPosition(string effectName, unit caster, float x, float z)
```
#### Description
[](description-start)
Creates an effect from a unit targeting a point.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `effectName` the name of the effect to create.
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `caster` the unit that is considered to be the caster of the effect.
- *float* `x` the x-axis coordinate to cast the ability at.
- *float* `z` the z-axis coordinate to cast the ability at.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit"))
local x, y = 16, 16
local test_subject = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
DCEI.CreateEffectAtPosition(DCEI.Effect("Kill"), test_subject)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## double EvaluateEffectHookExpression(string name) {evaluateeffecthookexpression-1}
```cs
double EvaluateEffectHookExpression(string name)
```
#### Description
[](description-start)
Added effect hook trigger APIs that let you customize effect data at runtime for each effect instance.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `name` the name of the expression to evaluate

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
DCEI.TriggerAddEffectHookEvent(
    DCEI.Effect("Standard RangedUnit Weapon Launch"),
    function(context)
        if DCEI.EvaluateEffectHookExpression("RandomChance 50%") ~= 0 then
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

## object GetEffectHookFieldValue(String[] path) {geteffecthookfieldvalue-1}
```cs
object GetEffectHookFieldValue(String[] path)
```
#### Description
[](description-start)
Added effect hook trigger APIs that let you customize effect data at runtime for each effect instance.
[](description-end)

#### Parameters
[](parameters-start)
- *String[]* `path` field path for the value to get.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
DCEI.TriggerAddEffectHookEvent(
    DCEI.Effect("Standard RangedUnit Weapon Launch"),
    function(context)
        if DCEI.EvaluateEffectHookExpression("RandomChance 50%") ~= 0 then
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

## void SetEffectHookFieldValue(String[] path, object value) {seteffecthookfieldvalue-2}
```cs
void SetEffectHookFieldValue(String[] path, object value)
```
#### Description
[](description-start)
Added effect hook trigger APIs that let you customize effect data at runtime for each effect instance.
[](description-end)

#### Parameters
[](parameters-start)
- *String[]* `path` field path for the value to set.
- *object* `value` the value to set.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
DCEI.TriggerAddEffectHookEvent(
    DCEI.Effect("Standard RangedUnit Weapon Launch"),
    function(context)
        if DCEI.EvaluateEffectHookExpression("RandomChance 50%") ~= 0 then
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

