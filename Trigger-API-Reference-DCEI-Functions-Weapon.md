<div id="toc" markdown="1">
- [Trigger API Reference\DCEI Functions\Weapon](#trigger-api-referencedcei-functionsweapon)
  * [IsUnitWeaponEnabled](#isunitweaponenabled-2)
  * [GetUnitWeaponDamageModifier](#getunitweapondamagemodifier-2)
  * [GetUnitWeaponCriticalChanceModifier](#getunitweaponcriticalchancemodifier-2)
  * [GetUnitWeaponAttackSpeedModifier](#getunitweaponattackspeedmodifier-2)
  * [GetUnitWeaponCriticalChance](#getunitweaponcriticalchance-1)
  * [GetUnitWeaponAttackSpeed](#getunitweaponattackspeed-1)
  * [AddUnitWeapon](#addunitweapon-2)
  * [RemoveUnitWeapon](#removeunitweapon-2)

</div>

***

# [Trigger API Reference](Trigger-API-Reference)\\DCEI Functions\Weapon {Trigger-API-ReferenceDCEI-FunctionsWeapon}

[](overview-start)

[](overview-end)

## bool IsUnitWeaponEnabled(unit unit, string weaponName) {isunitweaponenabled-2}
```cs
bool IsUnitWeaponEnabled(unit unit, string weaponName)
```
#### Description
[](description-start)
Returns true if a weapon is enabled for a unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit with the weapon.
- *string* `weaponName` the name of the weapon to check.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local unit = DCEI.CreateUnitSync(team_id, player_id, unit_type, x, y)

local enabled
local weapons = DCEI.GetUnitWeaponList(unit)
local unit_name = DCEI.GetUnitType(unit)
for _, weapon in ipairs(weapons) do
    enabled = DCEI.IsUnitWeaponEnabled(unit, weapon)
    DCEI.LogMessage(unit_name .. "'s weapon " .. weapon .. (enabled and " is " or " is not ") .. "enabled for " .. unit_type)
end
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [GetUnitWeaponList](Trigger-API-Reference-DCEI-Functions-Unit#getunitweaponlist-1)
[](extra-section-end)

## BehaviorModifier GetUnitWeaponDamageModifier(unit unit, string weaponName) {getunitweapondamagemodifier-2}
```cs
BehaviorModifier GetUnitWeaponDamageModifier(unit unit, string weaponName)
```
#### Description
[](description-start)
Returns a [BehaviorModifier](Trigger-API-Reference-DCEI-Types#behaviormodifier) for the damage modifiers on the given weapon.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit with the weapon.
- *string* `weaponName` the name of the weapon to check.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local unit = DCEI.CreateUnitSync(team_id, player_id, unit_type, x, y)

DCEI.ApplyBehavior(unit, DCEI.Behavior("Damage Dealt Double"), 2)

local damage_modifier
local weapons = DCEI.GetUnitWeaponList(unit)
local unit_name = DCEI.GetUnitType(unit)
for _, weapon in ipairs(weapons) do
    damage_modifier = DCEI.GetUnitWeaponDamageModifier(unit, weapon)
    DCEI.LogMessage(unit_name .. "'s weapon " .. weapon .. "has a damage multiplier of: " .. damage_modifier.multiplier_factor)
end
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [GetUnitWeaponList](Trigger-API-Reference-DCEI-Functions-Unit#getunitweaponlist-1)
- [GetUnitBehaviorList](Trigger-API-Reference-DCEI-Functions-Unit#getunitbehaviorlist-1)
- [BehaviorModifier](Trigger-API-Reference-DCEI-Types#behaviormodifier)
[](extra-section-end)

## BehaviorModifier GetUnitWeaponCriticalChanceModifier(unit unit, string weaponName) {getunitweaponcriticalchancemodifier-2}
```cs
BehaviorModifier GetUnitWeaponCriticalChanceModifier(unit unit, string weaponName)
```
#### Description
[](description-start)
Returns a [BehaviorModifier](Trigger-API-Reference-DCEI-Types#behaviormodifier) for the critical chance modifiers on the given weapon.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit with the weapon.
- *string* `weaponName` the name of the weapon to check.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local unit = DCEI.CreateUnitSync(team_id, player_id, unit_type, x, y)

DCEI.ApplyBehavior(unit, DCEI.Behavior("Damage Dealt Double"), 2)

local critical_modifier
local weapons = DCEI.GetUnitWeaponList(unit)
local unit_name = DCEI.GetUnitType(unit)
for _, weapon in ipairs(weapons) do
    critical_modifier = DCEI.GetUnitWeaponCriticalChanceModifier(unit, weapon)
    DCEI.LogMessage(unit_name .. "'s weapon " .. weapon .. " has a critical chance multiplier of: " .. critical_modifier.multiplier_factor)
end
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [GetUnitWeaponList](Trigger-API-Reference-DCEI-Functions-Unit#getunitweaponlist-1)
- [BehaviorModifier](Trigger-API-Reference-DCEI-Types#behaviormodifier)
[](extra-section-end)

## BehaviorModifier GetUnitWeaponAttackSpeedModifier(unit unit, string weaponName) {getunitweaponattackspeedmodifier-2}
```cs
BehaviorModifier GetUnitWeaponAttackSpeedModifier(unit unit, string weaponName)
```
#### Description
[](description-start)
Returns a [BehaviorModifier](Trigger-API-Reference-DCEI-Types#behaviormodifier) for the attack speed modifiers on the given weapon.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit with the weapon.
- *string* `weaponName` the name of the weapon to check.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local unit = DCEI.CreateUnitSync(team_id, player_id, unit_type, x, y)

DCEI.ApplyBehavior(unit, DCEI.Behavior("Damage Dealt Double"), 2)

local speed_modifier
local weapons = DCEI.GetUnitWeaponList(unit)
local unit_name = DCEI.GetUnitType(unit)
for _, weapon in ipairs(weapons) do
    speed_modifier = DCEI.GetUnitWeaponAttackSpeedModifier(unit, weapon)
    DCEI.LogMessage(unit_name .. "'s weapon " .. weapon .. " has a attack speed multiplier of: " .. speed_modifier.multiplier_factor)
end
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [GetUnitWeaponList](Trigger-API-Reference-DCEI-Functions-Unit#getunitweaponlist-1)
- [BehaviorModifier](Trigger-API-Reference-DCEI-Types#behaviormodifier)
[](extra-section-end)

## float GetUnitWeaponCriticalChance(string weaponName) {getunitweaponcriticalchance-1}
```cs
float GetUnitWeaponCriticalChance(string weaponName)
```
#### Description
[](description-start)
Returns the given weapon's critical chance.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `weaponName` the name of the weapon to check.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
local weapon_name = DCEI.Weapon("Standard MeleeUnit Weapon")
local critical_chance = DCEI.GetUnitWeaponCriticalChance(weapon_name)
DCEI.LogMessage(weapon_name .. " has an attack speed of: " .. critical_chance)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [GetUnitWeaponList](Trigger-API-Reference-DCEI-Functions-Unit#getunitweaponlist-1)
[](extra-section-end)

## float GetUnitWeaponAttackSpeed(string weaponName) {getunitweaponattackspeed-1}
```cs
float GetUnitWeaponAttackSpeed(string weaponName)
```
#### Description
[](description-start)
Returns the given weapon's attack speed.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `weaponName` the name of the weapon to check.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
local weapon_name = DCEI.Weapon("Standard MeleeUnit Weapon")
local attack_speed = DCEI.GetUnitWeaponAttackSpeed(weapon_name)
DCEI.LogMessage(weapon_name .. " has an attack speed of: " .. attack_speed)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [GetUnitWeaponList](Trigger-API-Reference-DCEI-Functions-Unit#getunitweaponlist-1)
[](extra-section-end)

## void AddUnitWeapon(string unitType, string weaponName) {addunitweapon-2}
```cs
void AddUnitWeapon(string unitType, string weaponName)
```
#### Description
[](description-start)
Adds the given weapon to the unit type.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `unitType` the name of the type of unit to add the weapon to.
- *string* `weaponName` the name of the weapon to add.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.AddUnitWeapon(DCEI.Unit("Standard MeleeUnit"), DCEI.Weapon("Standard RangedUnit Weapon"))
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void RemoveUnitWeapon(string unitType, string weaponName) {removeunitweapon-2}
```cs
void RemoveUnitWeapon(string unitType, string weaponName)
```
#### Description
[](description-start)
Removes the given weapon from the unit type.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `unitType` the name of the type of unit to remove the weapon from.
- *string* `weaponName` the name of the weapon to remove.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.RemoveUnitWeapon(unit_type, DCEI.Unit("Standard MeleeUnit"))
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

