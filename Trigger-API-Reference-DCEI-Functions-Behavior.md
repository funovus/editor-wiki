<div id="toc" markdown="1">
- [Trigger API Reference\DCEI Functions\Behavior](#trigger-api-referencedcei-functionsbehavior)
  * [GetUnitBehaviorStackCount](#getunitbehaviorstackcount-2)
  * [ApplyBehaviorToSelf](#applybehaviortoself-3)
  * [ApplyBehaviorToUnit](#applybehaviortounit-5)
  * [RemoveBehavior](#removebehavior-3)
  * [SetBehaviorDuration](#setbehaviorduration-4)
  * [ApplyBehaviorAsync](#applybehaviorasync-2)
  * [RemoveBehaviorAsync](#removebehaviorasync-2)
  * [ApplyBehaviorCountAsync](#applybehaviorcountasync-3)
  * [RemoveBehaviorCountAsync](#removebehaviorcountasync-3)
  * [ApplyBehaviorWithDurationAsync](#applybehaviorwithdurationasync-4)

</div>

***

# [Trigger API Reference](Trigger-API-Reference)\\DCEI Functions\Behavior {Trigger-API-ReferenceDCEI-FunctionsBehavior}

[](overview-start)

[](overview-end)

## int GetUnitBehaviorStackCount(unit unit, string behaviorName) {getunitbehaviorstackcount-2}
```cs
int GetUnitBehaviorStackCount(unit unit, string behaviorName)
```
#### Description
[](description-start)
Returns the stack count of a behavior on a unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to count the behavior stack count on.
- *string* `behaviorName` the name of the behavior to get the stack count of.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local test_subject = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
local behavior_type = DCEI.Behavior(DCEI.Behavior("Damage Taken Half")

DCEI.ApplyBehavior(test_subject, behavior_type, 5)

local stacks = DCEI.GetUnitBehaviorStackCount(test_subject, behavior_type)

DCEI.LogMessage(unit_type .. " has " .. stacks .. " stacks of " .. behavior_type)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ApplyBehaviorToSelf(unit unit, string behaviorName, int count = 1) {applybehaviortoself-3}
```cs
void ApplyBehaviorToSelf(unit unit, string behaviorName, int count = 1)
```
#### Description
[](description-start)
Applies a behavior to a unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to apply the behavior to.
- *string* `behaviorName` the name of the behavior to apply.
- *int* `count` the number of stacks of the chosen behavior to apply.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local test_subject = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
local behavior_name = DCEI.Behavior("Damage Taken Half")

DCEI.ApplyBehaviorToSelf(test_subject, behavior_name, 2)

local stacks = DCEI.GetUnitBehaviorStackCount(test_subject, behavior_name)

DCEI.LogMessage(unit_type .. " has " .. stacks .. " stacks of " .. behavior_name)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ApplyBehaviorToUnit(unit caster, unit source, unit target, string behaviorName, int count = 1) {applybehaviortounit-5}
```cs
void ApplyBehaviorToUnit(unit caster, unit source, unit target, string behaviorName, int count = 1)
```
#### Description
[](description-start)
Applies a behavior to a unit with source and caster references
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `caster` the unit that the behavior is considered to be the caster and owner of the applied behavior.
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `source` the unit that the behavior is considered to have originated from.
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `target` the unit to apply the behavior to.
- *string* `behaviorName` the name of the behavior to apply.
- *int* `count` the number of stacks of the chosen behavior to apply.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
local team_id = 1
local player_id = 1
local enemy_id = -1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local caster = DCEI.CreateUnit(enemy_id, enemy_id, unit_type, x-1, y-1)
local source = caster
local target = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
local behavior_name = DCEI.Behavior("Damage Taken Double")

DCEI.ApplyBehaviorToUnit(caster, source, target, behavior_name, 1)

local stacks = DCEI.GetUnitBehaviorStackCount(target, behavior_name)

DCEI.LogMessage(unit_type .. " has " .. stacks .. " stacks of " .. behavior_name)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void RemoveBehavior(unit unit, string behaviorName, int count = 0) {removebehavior-3}
```cs
void RemoveBehavior(unit unit, string behaviorName, int count = 0)
```
#### Description
[](description-start)
Removes a behavior from a unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to remove the behavior from.
- *string* `behaviorName` the name of the behavior to remove.
- *int* `count` the number of stacks of the chosen behavior to remove.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
-- create our test subject
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local test_subject = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
local behavior_name = DCEI.Behavior("Damage Taken Half")

-- apply behavior to them and get the count
DCEI.ApplyBehavior(test_subject, behavior_name, 3)
local stacks = DCEI.GetUnitBehaviorStackCount(test_subject, behavior_name)
DCEI.LogMessage(unit_type .. " has " .. stacks .. " stacks of " .. behavior_name)

-- remove a stack and get the new count
DCEI.RemoveBehavior(test_subject, behavior_name, 1)
stacks = DCEI.GetUnitBehaviorStackCount(test_subject, behavior_name)
DCEI.LogMessage(unit_type .. " has " .. stacks .. " stacks of" .. behavior_name)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetBehaviorDuration(unit unit, string behaviorName, float duration, bool extendDuration) {setbehaviorduration-4}
```cs
void SetBehaviorDuration(unit unit, string behaviorName, float duration, bool extendDuration)
```
#### Description
[](description-start)
Sets the duration of a behavior currently on a unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit with the behavior on it.
- *string* `behaviorName` the name of the behavior to set the duration for.
- *float* `duration` the duration to set the behavior to.
- *bool* `extendDuration` if true, the duration of the behavior is extended by the duration instead of set.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
-- Create our test subject
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local test_subject = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)

-- Apply our behavior
DCEI.ApplyBehaviorToSelf(test_subject, DCEI.Behavior("Damage Taken Half"), 1)
-- extend the duration by a random duration between 0 and 1.5 seconds.
DCEI.SetBehaviorDuration(test_subject, DCEI.Behavior("Damage Taken Half"), math.random() * 1.5, true)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ApplyBehaviorAsync(unit unit, string behaviorName) {applybehaviorasync-2}
```cs
void ApplyBehaviorAsync(unit unit, string behaviorName)
```
#### Description
[](description-start)
Applies a behavior to a unit. Asynchronous.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to apply the behavior to.
- *string* `behaviorName` the name of the behavior to apply.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local test_subject = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
local behavior_name = DCEI.Behavior("Damage Taken Half")

DCEI.ApplyBehaviorAsync(test_subject, behavior_name)

DCEI.Wait(0.0625)

local stacks = DCEI.GetUnitBehaviorStackCount(test_subject, behavior_name)

DCEI.LogMessage(unit_type .. " has " .. stacks .. " stacks of " .. behavior_name)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void RemoveBehaviorAsync(unit unit, string behaviorName) {removebehaviorasync-2}
```cs
void RemoveBehaviorAsync(unit unit, string behaviorName)
```
#### Description
[](description-start)
Removes a behavior from a unit. Asynchronous.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to remove the behavior from.
- *string* `behaviorName` the name of the behavior to remove.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
-- create our test subject
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local test_subject = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
local behavior_name = DCEI.Behavior("Damage Taken Half")

-- apply behavior to them and get the count
DCEI.ApplyBehavior(test_subject, behavior_name, 3)
local stacks = DCEI.GetUnitBehaviorStackCount(test_subject, behavior_name)
DCEI.LogMessage(unit_type .. " has " .. stacks .. " stacks of " .. behavior_name)

-- remove a stack and get the new count
DCEI.RemoveBehaviorAsync(test_subject, behavior_name, 1)

DCEI.Wait(0.0625) -- Wait for Async API

stacks = DCEI.GetUnitBehaviorStackCount(test_subject, behavior_name)
DCEI.LogMessage(unit_type .. " has " .. stacks .. " stacks of" .. behavior_name)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ApplyBehaviorCountAsync(unit unit, string behaviorName, int count) {applybehaviorcountasync-3}
```cs
void ApplyBehaviorCountAsync(unit unit, string behaviorName, int count)
```
#### Description
[](description-start)
Applies a behavior to a unit. Async version of API. 
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to apply the behavior to.
- *string* `behaviorName` the name of the behavior to apply.
- *int* `count` the number of stacks of the chosen behavior to apply.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local test_subject = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
local behavior_name = DCEI.Behavior("Damage Taken Half")

DCEI.ApplyBehaviorCountAsync(test_subject, behavior_name, 2)

DCEI.Wait(0.0625) -- Wait for Async API

local stacks = DCEI.GetUnitBehaviorStackCount(test_subject, behavior_name)

DCEI.LogMessage(unit_type .. " has " .. stacks .. " stacks of " .. behavior_name)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void RemoveBehaviorCountAsync(unit unit, string behaviorName, int count) {removebehaviorcountasync-3}
```cs
void RemoveBehaviorCountAsync(unit unit, string behaviorName, int count)
```
#### Description
[](description-start)
Removes a behavior from a unit. Async version. 
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to remove the behavior from.
- *string* `behaviorName` the name of the behavior to remove.
- *int* `count` the number of stacks of the chosen behavior to remove.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
-- create our test subject
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local test_subject = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
local behavior_name = DCEI.Behavior("Damage Taken Half")

-- apply behavior to them and get the count
DCEI.ApplyBehavior(test_subject, behavior_name, 3)
local stacks = DCEI.GetUnitBehaviorStackCount(test_subject, behavior_name)
DCEI.LogMessage(unit_type .. " has " .. stacks .. " stacks of " .. behavior_name)

-- remove a stack and get the new count
DCEI.RemoveBehaviorCountAsync(test_subject, behavior_name, 1)

DCEI.Wait(0.0625) -- Wait for async API

stacks = DCEI.GetUnitBehaviorStackCount(test_subject, behavior_name)
DCEI.LogMessage(unit_type .. " has " .. stacks .. " stacks of" .. behavior_name)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ApplyBehaviorWithDurationAsync(unit unit, string behaviorName, float duration, bool extendDuration) {applybehaviorwithdurationasync-4}
```cs
void ApplyBehaviorWithDurationAsync(unit unit, string behaviorName, float duration, bool extendDuration)
```
#### Description
[](description-start)
Applies a behavior to a unit. Asynchronous.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to apply the behavior to.
- *string* `behaviorName` the name of the behavior to apply.
- *float* `duration` duration of the behavior.
- *bool* `extendDuration` extend existing duration or set as new duration.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local test_subject = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)
local behavior_name = DCEI.Behavior("Damage Taken Half")

DCEI.ApplyBehaviorWithDurationAsync(test_subject, behavior_name, 15, true)

DCEI.Wait(0.0625)

local stacks = DCEI.GetUnitBehaviorStackCount(test_subject, behavior_name)

DCEI.LogMessage(unit_type .. " has " .. stacks .. " stacks of " .. behavior_name)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

