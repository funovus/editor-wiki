<div id="toc" markdown="1">
- [Data\Expression](#dataexpression)
  * [Value](#value)
  * [Divide](#divide)
  * [Multiply](#multiply)
  * [Subtract](#subtract)
  * [Add](#add)
  * [Compare](#compare)
  * [Logic Not](#logic-not)
  * [Logic And](#logic-and)
  * [Logic Or](#logic-or)
  * [Named Expression](#named-expression)
  * [Exponent](#exponent)
  * [Modulo](#modulo)
  * [If](#if)

</div>

***

# [](dcei.engine.proto.ValidatorExpressions.Expression)**[Data](Data)\Expression** {dataExpression}

[](manual-wiki-start)
Expressions are a powerful feature of the DreamEditor that allows you to write formulas and plug them into various fields of game data. They're useful for creating things like damage formulas, where certain weapon types (fire, nature, armored) will deal more or less damage to different "armor" types (water, earth, light) as arbitrarily defined with tags. [See notion guide "Using Expressions."](https://www.notion.so/funovus/Using-Expressions-96418b963c274b5daa4e88ccab846d40)

Similar to [Validators](Data-Validator), expressions are evaluated and return a result. Expressions are more flexible as they can be configured to write user defined formulas, and unlike validators they can return numeric or boolean values depending on context. 
In numeric cases, true is treated as `1` and false is treated as `0`. In boolean cases, non-zero numbers are treated as `true` and 0 is treated as `false`. Note that expressions can also be used as [validators](Data-Validator#expression).

The most common use case for expressions are for creating custom damage formulas, such as `damage = ([caster]STRENGTH * 10) - [target]ARMOR)`, where `STRENGTH` and `ARMOR` are arbitrary attributes defined as [tags](Data-Behavior#behavior-tag-array).
**Supported Fields**
Expressions can be plugged into a number of existing data fields and can also be used with data binding in [custom UI](Trigger-API-Reference-DCEI-Functions-Custom-UI#settextframetextexpression-2). These are the currently supported data fields:
- [Behavior/PeriodicInterval](Data-Behavior#periodic-interval-expressions)
- [Effect/ApplyBehavior/Duration](Data-Effect-Apply-Behavior#expressions)
- [Effect/Damage/DamageAmount](Data-Effect-Damage#expressions)
- [Effect/EnumerateUnitList/StepCount](Data-Effect-Enumerate-Unit-List#step-count-expressions)
- [Effect/Heal/HealAmount](Data-Effect-Heal#expressions)
- [Effect/ModifyUnit/ModifyMana/Amount](Data-Effect-Modify-Unit#modify-mana)
- [Effect/ModifyUnit/ModifyShield/Amount](Data-Effect-Modify-Unit#modify-shield)
- [Mover/Orbiting/Radius](Data-Mover-Orbiting#datamoverorbiting)
As of version 0.10.x and up, [Effects](Data-Effect) now have a universal field expression section where you can overwrite any numeric effect field with an expression by specifying its field path. The expression will be evaluated right before the effect is cast using the same caster/source/target info as passed to the effect itself.
[](manual-wiki-end)

## [](dcei.engine.proto.ValidatorExpressions.Expression.value)**Value** {Value}
These are the types of values you can include or reference in expression formulas.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ValidatorExpressions.Value.constant)**Constant** {Constant}
Returns a constant value.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ValidatorExpressions.ConstantValue.bool_value)**Bool Value** {Bool-Value}
Returns true or false.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ValidatorExpressions.ConstantValue.int32_value)**Int32 Value** {Int32-Value}
Returns an integer value.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ValidatorExpressions.ConstantValue.double_value)**Double Value** {Double-Value}
Returns a floating point number (with decimal).

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ValidatorExpressions.Value.random)**Random** {Random}
Returns a random number between the min and max value.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ValidatorExpressions.RandomValue.int32_value)**Int32 Value** {Int32-Value}
[](dcei.engine.proto.ValidatorExpressions.RangeInt)**MessageType: [RangeInt](GenericMessage#validatorexpressionsrangeint)**

Returns an integer value.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ValidatorExpressions.RandomValue.double_value)**Double Value** {Double-Value}
[](dcei.engine.proto.ValidatorExpressions.RangeDouble)**MessageType: [RangeDouble](GenericMessage#validatorexpressionsrangedouble)**

Returns a floating point number (with decimal).

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ValidatorExpressions.Value.damage_amount)**Damage Amount** {Damage-Amount}
The damage amount is multiplied by this value (default 0).

[](manual-wiki-start)
Returns the literal [damage value](Data-Effect-Damage#damage-amount) when used within a [damage effect](Data-Effect-Damage#expressions).
[](manual-wiki-end)

#### [](dcei.engine.proto.ValidatorExpressions.DamageAmountValue.multiplier)**Multiplier** {Multiplier}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ValidatorExpressions.Value.heal_amount)**Heal Amount** {Heal-Amount}
The heal amount is multiplied by this value (default 0).

[](manual-wiki-start)
Returns the literal [heal value](Data-Effect-Heal#heal-amount) when used within a [heal effect](Data-Effect-Heal#expressions).
[](manual-wiki-end)

#### [](dcei.engine.proto.ValidatorExpressions.HealAmountValue.multiplier)**Multiplier** {Multiplier}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ValidatorExpressions.Value.tag_count)**Tag Count** {Tag-Count}

[](manual-wiki-start)
Returns the tag count of a specific [tag](Data-Behavior#behavior-tag-array) on a unit.
[](manual-wiki-end)

#### [](dcei.engine.proto.ValidatorExpressions.TagCount.unit)**Unit** {Unit}
[](dcei.engine.proto.ValidatorExpressions.UnitLocation)**EnumType: [ValidatorExpressions.UnitLocation](GenericEnum#validatorexpressionsunitlocation)**

Which unit is evaluated.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ValidatorExpressions.TagCount.tag_name)**Tag Name** {Tag-Name}
Which tag is evaluated.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ValidatorExpressions.Value.unit_level)**Unit Level** {Unit-Level}

[](manual-wiki-start)
Returns the [level](Data-Unit#level-unused) of a unit. Currently limited in usefulness.
[](manual-wiki-end)

#### [](dcei.engine.proto.ValidatorExpressions.UnitLevel.unit)**Unit** {Unit}
[](dcei.engine.proto.ValidatorExpressions.UnitLocation)**EnumType: [ValidatorExpressions.UnitLocation](GenericEnum#validatorexpressionsunitlocation)**

Which unit is evaluated.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ValidatorExpressions.Value.ability_level)**Ability Level** {Ability-Level}

[](manual-wiki-start)
Returns the [level](Data-Ability#level-unused) of an ability. Currently limited in usefulness.
[](manual-wiki-end)

#### [](dcei.engine.proto.ValidatorExpressions.AbilityLevel.ability)**Ability** {Ability}
Which ablity is evaluated.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ValidatorExpressions.Value.wildsky_upgrade_level)**Wildsky Upgrade Level [Wild Sky]** {Wildsky-Upgrade-Level-Wild-Sky}
Returns the level of a wild sky upgrade.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ValidatorExpressions.DataUpgradeLevel.data_upgrade)**Data Upgrade** {Data-Upgrade}
Which upgrade is evaluated.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ValidatorExpressions.Value.upgrade_level)**Upgrade Level** {Upgrade-Level}
Returns the level of an upgrade.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ValidatorExpressions.UpgradeLevel.upgrade)**Upgrade** {Upgrade}
Which upgrade is evaluated.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ValidatorExpressions.Value.remaining_path_distance)**Remaining Path Distance** {Remaining-Path-Distance}

[](manual-wiki-start)
Returns the remaining path distance for a unit with [waypoints](Data-Effect-Set-Waypoints).
[](manual-wiki-end)

#### [](dcei.engine.proto.ValidatorExpressions.RemainingPathDistanceValue.unit)**Unit** {Unit}
[](dcei.engine.proto.ValidatorExpressions.UnitLocation)**EnumType: [ValidatorExpressions.UnitLocation](GenericEnum#validatorexpressionsunitlocation)**

Which unit is evaluated.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ValidatorExpressions.Value.unit_ability_cooldown)**Unit Ability Cooldown** {Unit-Ability-Cooldown}
Returns the current cooldown remaining for an ability.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ValidatorExpressions.UnitAbilityCooldown.unit)**Unit** {Unit}
[](dcei.engine.proto.ValidatorExpressions.UnitLocation)**EnumType: [ValidatorExpressions.UnitLocation](GenericEnum#validatorexpressionsunitlocation)**

Which unit is evaluated.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ValidatorExpressions.UnitAbilityCooldown.ability)**Ability** {Ability}
Which ablity is evaluated.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ValidatorExpressions.UnitAbilityCooldown.use_cooldown_period)**Use Cooldown Period** {Use-Cooldown-Period}
When checked, the expression returns the total cooldown duration, rather than time remaining.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ValidatorExpressions.Value.health)**Health** {Health}
Returns the current health of a unit.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ValidatorExpressions.HealthValue.unit)**Unit** {Unit}
[](dcei.engine.proto.ValidatorExpressions.UnitLocation)**EnumType: [ValidatorExpressions.UnitLocation](GenericEnum#validatorexpressionsunitlocation)**

Which unit is evaluated.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ValidatorExpressions.Value.max_health)**Max Health** {Max-Health}
Returns the max health of a unit.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ValidatorExpressions.MaxHealthValue.unit)**Unit** {Unit}
[](dcei.engine.proto.ValidatorExpressions.UnitLocation)**EnumType: [ValidatorExpressions.UnitLocation](GenericEnum#validatorexpressionsunitlocation)**

Which unit is evaluated.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ValidatorExpressions.Value.health_fraction)**Health Fraction** {Health-Fraction}
Returns the current health fraction of a unit.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ValidatorExpressions.HealthFraction.unit)**Unit** {Unit}
[](dcei.engine.proto.ValidatorExpressions.UnitLocation)**EnumType: [ValidatorExpressions.UnitLocation](GenericEnum#validatorexpressionsunitlocation)**

Which unit is evaluated.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ValidatorExpressions.Value.mana)**Mana** {Mana}
Returns the current mana of a unit.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ValidatorExpressions.ManaValue.unit)**Unit** {Unit}
[](dcei.engine.proto.ValidatorExpressions.UnitLocation)**EnumType: [ValidatorExpressions.UnitLocation](GenericEnum#validatorexpressionsunitlocation)**

Which unit is evaluated.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ValidatorExpressions.Value.max_mana)**Max Mana** {Max-Mana}
Returns the max mana of a unit.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ValidatorExpressions.MaxManaValue.unit)**Unit** {Unit}
[](dcei.engine.proto.ValidatorExpressions.UnitLocation)**EnumType: [ValidatorExpressions.UnitLocation](GenericEnum#validatorexpressionsunitlocation)**

Which unit is evaluated.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ValidatorExpressions.Value.mana_fraction)**Mana Fraction** {Mana-Fraction}
Returns the current mana fraction of a unit.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ValidatorExpressions.ManaFraction.unit)**Unit** {Unit}
[](dcei.engine.proto.ValidatorExpressions.UnitLocation)**EnumType: [ValidatorExpressions.UnitLocation](GenericEnum#validatorexpressionsunitlocation)**

Which unit is evaluated.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ValidatorExpressions.Value.shield)**Shield** {Shield}
Returns the current shields of a unit.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ValidatorExpressions.ShieldValue.unit)**Unit** {Unit}
[](dcei.engine.proto.ValidatorExpressions.UnitLocation)**EnumType: [ValidatorExpressions.UnitLocation](GenericEnum#validatorexpressionsunitlocation)**

Which unit is evaluated.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ValidatorExpressions.Value.max_shield)**Max Shield** {Max-Shield}
Returns the max shields of a unit.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ValidatorExpressions.MaxShieldValue.unit)**Unit** {Unit}
[](dcei.engine.proto.ValidatorExpressions.UnitLocation)**EnumType: [ValidatorExpressions.UnitLocation](GenericEnum#validatorexpressionsunitlocation)**

Which unit is evaluated.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ValidatorExpressions.Value.shield_fraction)**Shield Fraction** {Shield-Fraction}
Returns the current shield fraction of a unit.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ValidatorExpressions.ShieldFraction.unit)**Unit** {Unit}
[](dcei.engine.proto.ValidatorExpressions.UnitLocation)**EnumType: [ValidatorExpressions.UnitLocation](GenericEnum#validatorexpressionsunitlocation)**

Which unit is evaluated.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ValidatorExpressions.Value.behavior_stack_count)**Behavior Stack Count** {Behavior-Stack-Count}
Returns the current stack count of a behavior on a unit.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ValidatorExpressions.BehaviorStackCountValue.unit)**Unit** {Unit}
[](dcei.engine.proto.ValidatorExpressions.UnitLocation)**EnumType: [ValidatorExpressions.UnitLocation](GenericEnum#validatorexpressionsunitlocation)**

Which unit is evaluated.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ValidatorExpressions.BehaviorStackCountValue.behavior)**Behavior** {Behavior}
Which behavior is evaluated.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ValidatorExpressions.Value.behavior_elapsed_time)**Behavior Elapsed Time** {Behavior-Elapsed-Time}
Returns the elapsed time that a behavior has been on a unit.

[](manual-wiki-start)
Note that this duration is reset to 0 when the stack count is [refreshed](Data-Behavior#refresh-stack).
[](manual-wiki-end)

#### [](dcei.engine.proto.ValidatorExpressions.BehaviorElapsedTimeValue.unit)**Unit** {Unit}
[](dcei.engine.proto.ValidatorExpressions.UnitLocation)**EnumType: [ValidatorExpressions.UnitLocation](GenericEnum#validatorexpressionsunitlocation)**

Which unit is evaluated.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ValidatorExpressions.BehaviorElapsedTimeValue.behavior)**Behavior** {Behavior}
Which behavior is evaluated.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ValidatorExpressions.Value.behavior_duration)**Behavior Duration** {Behavior-Duration}
Returns the duration that a behavior has been on a unit.

[](manual-wiki-start)
Returns the maximum [duration](Data-Behavior#duration) of a behavior on a unit. Note that this duration is not extended when the stack count is [refreshed](Data-Behavior#refresh-stack).
[](manual-wiki-end)

#### [](dcei.engine.proto.ValidatorExpressions.BehaviorDurationValue.unit)**Unit** {Unit}
[](dcei.engine.proto.ValidatorExpressions.UnitLocation)**EnumType: [ValidatorExpressions.UnitLocation](GenericEnum#validatorexpressionsunitlocation)**

Which unit is evaluated.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ValidatorExpressions.BehaviorDurationValue.behavior)**Behavior** {Behavior}
Which behavior is evaluated.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ValidatorExpressions.Value.add_expressions)**Add Expressions** {Add-Expressions}
Returns the sum of the listed expressions.

[](manual-wiki-start)
Functionally similar to [Add](#add) but used as an expression value rather than a top-level operator.
[](manual-wiki-end)

### [](dcei.engine.proto.ValidatorExpressions.Value.effect_critical_hit)**Effect Critical Hit** {Effect-Critical-Hit}

[](manual-wiki-start)
Returns 1 if the effect tree is the result of a critical hit with a [weapon](Data-Weapon#critical-effect) or [ability](Data-Ability#critical-effect).
This can be used to create [damage expressions](Data-Effect-Damage#expressions) that deal increased damage on critical hits. For example this psuedo-expression would cause a damage effect to deal 150% damage on critical hit. 
```
Multiply( EffectCrticial * DamageAmount(1) * Constant(0.5) )
```
Swap out the constant for value derived from [tag count]((#tag-count)) to support dynamic critical hit damage multipliers.
[](manual-wiki-end)

### [](dcei.engine.proto.ValidatorExpressions.Value.units_distance)**Units Distance** {Units-Distance}
Returns the distance between units.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ValidatorExpressions.UnitsDistance.from_unit)**From Unit** {From-Unit}
[](dcei.engine.proto.ValidatorExpressions.UnitLocation)**EnumType: [ValidatorExpressions.UnitLocation](GenericEnum#validatorexpressionsunitlocation)**


[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ValidatorExpressions.UnitsDistance.to_unit)**To Unit** {To-Unit}
[](dcei.engine.proto.ValidatorExpressions.UnitLocation)**EnumType: [ValidatorExpressions.UnitLocation](GenericEnum#validatorexpressionsunitlocation)**


[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ValidatorExpressions.Expression.divide)**Divide** {Divide}
Divide a value by another.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ValidatorExpressions.Expression.multiply)**Multiply** {Multiply}
Multiply multiple values together. Supports nested expressions.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ValidatorExpressions.Expression.subtract)**Subtract** {Subtract}
Subtract a value from another.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ValidatorExpressions.Expression.add)**Add** {Add}
Add multiple values together. Supports nested expressions.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ValidatorExpressions.Expression.compare)**Compare** {Compare}
Compares two values/expressions and returns true or false based on the result.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ValidatorExpressions.Expression.logic_not)**Logic Not** {Logic-Not}
Returns the flipped value or expression (true becomes false, false becomes true).

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ValidatorExpressions.Expression.logic_and)**Logic And** {Logic-And}
Returns true if all listed values/expressions are true.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ValidatorExpressions.Expression.logic_or)**Logic Or** {Logic-Or}
Returns true if any listed values/expressions are true.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ValidatorExpressions.Expression.named_expression)**Named Expression** {Named-Expression}

[](manual-wiki-start)
Used to reference another [expression](#dataexpression). This is useful for combining multiple expressions or breaking complex expressions into smaller abstractions.
[](manual-wiki-end)

## [](dcei.engine.proto.ValidatorExpressions.Expression.exponent)**Exponent** {Exponent}

[](manual-wiki-start)
Returns value to the [power](https://en.wikipedia.org/wiki/Exponentiation) of another. Similar to the `^` operator in Lua.
[](manual-wiki-end)

## [](dcei.engine.proto.ValidatorExpressions.Expression.modulo)**Modulo** {Modulo}

[](manual-wiki-start)
Returns the [remainder](https://en.wikipedia.org/wiki/Modulo_operation) of a value after being divided by another. Similar to the `%` operator in Lua.
[](manual-wiki-end)

## [](dcei.engine.proto.ValidatorExpressions.Expression.if)**If** {If}

[](manual-wiki-start)
Returns the sum of the **Values** expressions if the **Compare** condition returns true. Otherwise returns the same of the **Else Values** expressions.
[](manual-wiki-end)

