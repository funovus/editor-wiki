<div id="toc" markdown="1">
- [Trigger API Reference\DCEI Functions\Ability](#trigger-api-referencedcei-functionsability)
  * [IsUnitAbilityEnabled](#isunitabilityenabled-2)
  * [GetUnitAbilityCooldown](#getunitabilitycooldown-2)
  * [GetAbilityCost](#getabilitycost-1)
  * [UnitHasAbility](#unithasability-2)
  * [UnitTypeHasAbility](#unittypehasability-2)
  * [GetUnitAbilityCurrentCharge](#getunitabilitycurrentcharge-2)
  * [SetUnitAbilityCooldown](#setunitabilitycooldown-3)
  * [SetUnitAbilityMaxCooldown](#setunitabilitymaxcooldown-3)
  * [CastAbilityAtUnit](#castabilityatunit-4)
  * [CastAbilityEffect](#castabilityeffect-3)
  * [CancelAbilities](#cancelabilities-1)
  * [EnterTargetingMode](#entertargetingmode-2)
  * [ExitTargetingMode](#exittargetingmode-0)
  * [AddUnitAbility](#addunitability-2)
  * [RemoveUnitAbility](#removeunitability-2)
  * [CastAbilityAtPosition](#castabilityatposition-5)
  * [CastAbilityEffectAtPosition](#castabilityeffectatposition-4)
  * [SetAbilityCurrentCharge](#setabilitycurrentcharge-4)

</div>

***

# [Trigger API Reference](Trigger-API-Reference)\\DCEI Functions\Ability {Trigger-API-ReferenceDCEI-FunctionsAbility}

[](overview-start)

[](overview-end)

## bool IsUnitAbilityEnabled(unit unit, string abilityName) {isunitabilityenabled-2}
```cs
bool IsUnitAbilityEnabled(unit unit, string abilityName)
```
#### Description
[](description-start)
Returns true if the ability is enabled on a unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to check for ability status.
- *string* `abilityName` the name of the ability to check.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
function SetAbilityButtonStatus(unit, ability, button)
    local enabled = DCEI.IsUnitAbilityEnabled(unit, ability)
    DCEI.SetButtonFrameEnable(button, enabled)
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## float GetUnitAbilityCooldown(unit unit, string abilityName) {getunitabilitycooldown-2}
```cs
float GetUnitAbilityCooldown(unit unit, string abilityName)
```
#### Description
[](description-start)
Returns the remaining cooldown of a unit's ability. 
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to check for ability cooldown.
- *string* `abilityName` the name of the ability to check.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
function CooldownBonusObtained(unit, ability, reduction)
    local cooldown = DCEI.GetUnitAbilityCooldown(unit, ability)
    local reduced_cooldown = cooldown - reduction
    if reduced_cooldown > 0.0 then
        DCEI.SetUnitAbilityCooldown(unit, ability, reduced_cooldown)
    else
        DCEI.SetUnitAbilityCooldown(unit, ability, 0.0)
    end
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## AbilityCost GetAbilityCost(string abilityName) {getabilitycost-1}
```cs
AbilityCost GetAbilityCost(string abilityName)
```
#### Description
[](description-start)
Returns the cost of an ability as a table.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `abilityName` the name of the ability to get the cost of.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
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

[](extra-section-end)

## bool UnitHasAbility(unit unit, string abilityName) {unithasability-2}
```cs
bool UnitHasAbility(unit unit, string abilityName)
```
#### Description
[](description-start)
Returns whether a unit has an ability or not.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to check for the ability.
- *string* `abilityName` the name of the ability to check for.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
function ShowAbilityButton(unit, ability, button)
    local has_ability = DCEI.UnitHasAbility(unit, ability)
    DCEI.SetFrameActive(button, has_ability)
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## bool UnitTypeHasAbility(string unitType, string abilityName) {unittypehasability-2}
```cs
bool UnitTypeHasAbility(string unitType, string abilityName)
```
#### Description
[](description-start)
Returns true if a unit type has an ability.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `unitType` the unit type to check for the ability.
- *string* `abilityName` the name of the ability to check for.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
function ShowUpgradeButton(unit_type, ability, button)
    local has_ability = DCEI.UnitTypeHasAbility(unit_type, ability)
    DCEI.SetFrameActive(button, has_ability)
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## int GetUnitAbilityCurrentCharge(unit unit, string abilityName) {getunitabilitycurrentcharge-2}
```cs
int GetUnitAbilityCurrentCharge(unit unit, string abilityName)
```
#### Description
[](description-start)
Returns the number of charges a unit has left for an ability.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to check for charge count.
- *string* `abilityName` the name of the ability to check.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
function SetAbilityButtonStatus(unit, ability, button)
    local charges = DCEI.GetUnitAbilityCurrentCharge(unit, ability)
    DCEI.SetButtonFrameEnable(button, charges)
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetUnitAbilityCooldown(unit unit, string abilityName, float seconds) {setunitabilitycooldown-3}
```cs
void SetUnitAbilityCooldown(unit unit, string abilityName, float seconds)
```
#### Description
[](description-start)
Sets the current remaining cooldown of an ability on a unit to a specified time in seconds.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to set the ability's cooldown.
- *string* `abilityName` the name of the ability to set the cooldown for.
- *float* `seconds` the time in seconds to set the cooldown of the ability to.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
function CooldownBonusObtained(unit, ability, reduction)
    local cooldown = DCEI.GetUnitAbilityCooldown(unit, ability)
    local reduced_cooldown = cooldown - reduction
    if reduced_cooldown > 0.0 then
        DCEI.SetUnitAbilityCooldown(unit, ability, reduced_cooldown)
    else
        DCEI.SetUnitAbilityCooldown(unit, ability, 0.0)
    end
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetUnitAbilityMaxCooldown(unit unit, string abilityName, float seconds) {setunitabilitymaxcooldown-3}
```cs
void SetUnitAbilityMaxCooldown(unit unit, string abilityName, float seconds)
```
#### Description
[](description-start)
Sets the maximum cooldown of an ability on a unit to a specified time in seconds.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to set the ability's maximum cooldown.
- *string* `abilityName` the name of the ability to set the maximum cooldown for.
- *float* `seconds` the time in seconds to set the maximum cooldown of the ability to.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
function PermanentCooldownBonusObtained(unit, ability, reduction)
    local cooldown = DCEI.GetUnitAbilityCooldown(unit, ability)
    local reduced_cooldown = cooldown - reduction
    if reduced_cooldown > 0.0 then
        DCEI.SetUnitAbilityMaxCooldown(unit, ability, reduced_cooldown)
    else
        DCEI.SetUnitAbilityMaxCooldown(unit, ability, 0.0)
    end
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void CastAbilityAtUnit(string abilityName, unit caster, unit target, bool immediate = False) {castabilityatunit-4}
```cs
void CastAbilityAtUnit(string abilityName, unit caster, unit target, bool immediate = False)
```
#### Description
[](description-start)
Issues the order for a unit to cast an ability targeting another unit. For an instant ability, this will ignore the target parameter and simply cast the ability.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `abilityName` the name of the ability to cast.
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `caster` the unit to cast the ability.
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `target` the unit to target with the ability.
- *bool* `immediate` if true, the unit will attempt to cast the ability in the same frame that it's ordered, rather than queuing the command.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
function OnSwordAttackButtonPressed(unit)
    DCEI.CastAbilityAtUnit(DCEI.Ability("Sword Swing"), unit, unit, true)
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void CastAbilityEffect(string abilityName, unit caster, unit target) {castabilityeffect-3}
```cs
void CastAbilityEffect(string abilityName, unit caster, unit target)
```
#### Description
[](description-start)
Immediately casts the given ability's linked effect with the context provided. Unlike [CastAbilityAtUnit](Trigger-API-Reference-DCEI-Functions-Ability#castabilityatunit-4), the unit does not need to have the ability bound in order for the effect to fire.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `abilityName` the name of the ability to cast the effect of.
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `caster` the unit to cast the ability.
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `target` the unit to target with the ability.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function OnDoNothing()
    local context = DCEI.TriggeringEffectContext
    local ability_name = DCEI.Ability("Ability_Name")

    DCEI.CastAbilityEffect(ability_name, context.caster, context.target)
end

DCEI.TriggerAddEffectEvent(DCEI.Effect("DoNothing"), OnDoNothing, true)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void CancelAbilities(unit unit) {cancelabilities-1}
```cs
void CancelAbilities(unit unit)
```
#### Description
[](description-start)
Cancels all ability orders a unit has queued.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to cancel abilities for.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
function Stop(unit)
    local position = DCEI.GetUnitPosition2D(unit)
    DCEI.CancelAbilities(unit)
    DCEI.Move(unit, position.x, position.y)
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void EnterTargetingMode(unit unit, string abilityName) {entertargetingmode-2}
```cs
void EnterTargetingMode(unit unit, string abilityName)
```
#### Description
[](description-start)
Enters targeting mode for a unit's ability. Only works for targeted abilities.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to enter targeting mode for.
- *string* `abilityName` the name of the ability to enter the targeting mode for.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
function AbilityButtonPressed(unit, ability)
    DCEI.EnterTargetingMode(unit, ability)
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ExitTargetingMode() {exittargetingmode-0}
```cs
void ExitTargetingMode()
```
#### Description
[](description-start)
Exits targeting mode for any abilities currently in targeting mode.
[](description-end)

#### Example Usage
[](example-usage-start)
```LUA
function CancelButtonPressed()
    DCEI.ExitTargetingMode()
    DCEI.SelectUnit(hero)
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void AddUnitAbility(string unitType, string abilityName) {addunitability-2}
```cs
void AddUnitAbility(string unitType, string abilityName)
```
#### Description
[](description-start)
Adds an ability to a unit type.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `unitType` the unit type to add the ability to.
- *string* `abilityName` the name of the ability to add.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
local unit_type = DCEI.Unit("Standard MeleeUnit")
local ability = DCEI.Ability("MyAbility")
DCEI.AddUnitAbility(unit_type, ability)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void RemoveUnitAbility(string unitType, string abilityName) {removeunitability-2}
```cs
void RemoveUnitAbility(string unitType, string abilityName)
```
#### Description
[](description-start)
Removes an ability from a unit type.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `unitType` the unit type to remove the ability from.
- *string* `abilityName` the name of the ability to remove.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
local unit_type = DCEI.Unit("Standard MeleeUnit")
local ability = DCEI.Ability("MyAbility")
DCEI.RemoveUnitAbility(unit_type, ability)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void CastAbilityAtPosition(string abilityName, unit caster, float x, float z, bool immediate = False) {castabilityatposition-5}
```cs
void CastAbilityAtPosition(string abilityName, unit caster, float x, float z, bool immediate = False)
```
#### Description
[](description-start)
Issues the order for a unit to cast an ability targeting another unit. For an instant ability, this will ignore the target parameter and simply cast the ability.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `abilityName` the name of the ability to cast.
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `caster` the unit which will cast the ability.
- *float* `x` the x-axis coordinate to cast the ability at.
- *float* `z` the z-axis coordinate to cast the ability at.
- *bool* `immediate` if true, the unit will attempt to cast the ability in the same frame that it's ordered, rather than queuing the command.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
function OnFireballButtonPressed(unit)
    local facing = DCEI.GetUnitFacing2D(unit)
    local position = DCEI.GetUnitPosition2D(unit)
    local angle = math.atan(facing.y/facing.x)
    local target = {
        x = position.x + 2.0*math.cos(angle),
        z = position.y + 2.0*math.sin(angle)
    }
    DCEI.CastAbilityAtPosition(DCEI.Ability("Fireball"), unit, target.x, target.z, true)
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void CastAbilityEffectAtPosition(string abilityName, unit caster, float x, float z) {castabilityeffectatposition-4}
```cs
void CastAbilityEffectAtPosition(string abilityName, unit caster, float x, float z)
```
#### Description
[](description-start)
Immediately casts the given ability's linked effect at a location with the context provided. Unlike [CastAbilityAtPosition()](Trigger-API-Reference-DCEI-Functions-Ability#castabilityatposition-5), the unit does not need to have the ability bound in order for the effect to fire.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `abilityName` the name of the ability to cast the effect of.
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `caster` the unit to cast the ability.
- *float* `x` the X coordinate.
- *float* `z` the Z coordinate.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
--Whenever a unit casts an ability, they instantly 'cast' a duplicate targeting (16, 16)
function OnAbilityCast()
    local unit = DCEI.TriggeringUnit
    local ability_name = DCEI.TriggeringAbilityName
    DCEI.CastAbilityEffectAtPosition(ability_name, unit, 16, 16)
end

DCEI.TriggerAddCastAbilityEvent(DCEI.UnitAny, OnAbilityCast)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetAbilityCurrentCharge(unit unit, string abilityName, int chargeCount, bool clampChargeCount) {setabilitycurrentcharge-4}
```cs
void SetAbilityCurrentCharge(unit unit, string abilityName, int chargeCount, bool clampChargeCount)
```
#### Description
[](description-start)
Sets the current number of charges for an ability on a unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to set ability charges for.
- *string* `abilityName` the name of the ability to set the charges for.
- *int* `chargeCount` the number of charges to set the ability to.
- *bool* `clampChargeCount` if true, the number of charges is clamped to the maximum charge count set for the ability.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
function BonusChargeEarned(unit, ability)
    local current_charges = DCEI.GetUnitAbilityCurrentCharge(unit, ability)
    DCEI.SetAbilityCurrentCharge(unit, ability, current_charges + 1, false)
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

