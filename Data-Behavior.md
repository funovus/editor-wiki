<div id="toc" markdown="1">
- [Data\Behavior](#databehavior)
  * [Default Stack Type](#default-stack-type)
  * [Independent Stack Type](#independent-stack-type)
  * [Template](#template)
  * [Parent](#parent)
  * [Family](#family)
  * [Alignment](#alignment)
  * [Refresh Stack](#refresh-stack)
  * [Max Stack Count](#max-stack-count)
  * [Update Duration While Disabled](#update-duration-while-disabled)
  * [Duration Random Addition](#duration-random-addition)
  * [Unit Modifier](#unit-modifier)
  * [Duration](#duration)
  * [Stacks Removed On Expire](#stacks-removed-on-expire)
  * [Start Effect](#start-effect)
  * [Final Effect](#final-effect)
  * [Refresh Effect](#refresh-effect)
  * [Expire Effect](#expire-effect)
  * [Periodic Interval](#periodic-interval)
  * [Periodic Interval Expressions](#periodic-interval-expressions)
  * [Periodic Effect](#periodic-effect)
  * [Periodic Effect Count](#periodic-effect-count)
  * [Behavior Validators Apply](#behavior-validators-apply)
  * [Behavior Validators Remove](#behavior-validators-remove)
  * [Behavior Validators Disable](#behavior-validators-disable)
  * [Modifiers](#modifiers)
  * [Damage Response](#damage-response)
  * [Death Response](#death-response)
  * [Behavior Tag Array](#behavior-tag-array)
  * [Persist Through Morph](#persist-through-morph)
  * [Locked](#locked)
  * [BehaviorModifier](#behaviormodifier)

</div>

***

# [](dcei.engine.proto.Behavior)**[Data](Data)\Behavior** {dataBehavior}

[](manual-wiki-start)
Behaviors are usually buffs or debuffs that can be applied to units that modify the unit's attributes or how it acts. Behaviors can also apply tags and can function like custom attributes.
[](manual-wiki-end)

## [](dcei.engine.proto.Behavior.default_stack_type)**Default Stack Type** {Default-Stack-Type}
When the behavior's duration expires, it will remove a number of stacks as determined by "Stacks Removed on Expire".

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Behavior.DefaultStackType.refresh_stack)**Refresh Stack** {Refresh-Stack}
If this is checked, the behavior's Duration will reset when subsequent stacks of the behavior are applied to the unit.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Behavior.DefaultStackType.stacks_removed_on_expire)**Stacks Removed On Expire** {Stacks-Removed-On-Expire}
How many behavior stacks will be removed when the duration expires, 0 means all stacks will be removed. If duration expires but not all behavior stacks removed, the duration timer will be refreshed.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Behavior.DefaultStackType.refresh_effect)**Refresh Effect** {Refresh-Effect}
The effect created when subsequent stacks of a behavior are applied to a unit.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Behavior.independent_stack_type)**Independent Stack Type** {Independent-Stack-Type}
Each behavior stack will have its own duration.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Behavior.template)**Template** {Template}
[](GenericField.template)**FieldType: [Template](GenericField#template)**


[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Behavior.parent)**Parent** {Parent}
[](GenericField.parent)**FieldType: [Parent](GenericField#parent)**


[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Behavior.family)**Family** {Family}
Used for filtering families of behaviors via behavior filter.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Behavior.alignment)**Alignment** {Alignment}

[](manual-wiki-start)
You can set this field to say whether a behavior is good, bad, neutral, or both for a unit. Does not affect gameplay in any way.
[](manual-wiki-end)

>* **NEUTRAL**: Marks the behavior as neutral.
>* **POSITIVE**: Marks the behavior as positive.
>* **NEGATIVE**: Marks the behavior as negative.
>* **MIXED**: Marks the behavior as both positive and negative.

## [](dcei.engine.proto.Behavior.refresh_stack)**Refresh Stack** {Refresh-Stack}
If this is checked, the behavior's Duration will reset when subsequent stacks of the behavior are applied to the unit.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Behavior.max_stack_count)**Max Stack Count** {Max-Stack-Count}
The maximum number of stacks a unit can have of this behavior.

[](manual-wiki-start)
Applying additional stacks beyond the maximum will not increase the stack count, but will refresh the duration if [Refresh Stack](#refresh-stack) is checked. 
A maximum stack count of 0 means that there is no limit to the number of copies allowed on a unit.
[](manual-wiki-end)

## [](dcei.engine.proto.Behavior.update_duration_while_disabled)**Update Duration While Disabled** {Update-Duration-While-Disabled}

[](manual-wiki-start)
If this is checked and the behavior is disabled from a [Disable Validator](#Behavior-Validators-Disable), the behavior's [Duration](#duration) will continue to count down, rather than be paused.
[](manual-wiki-end)

## [](dcei.engine.proto.Behavior.duration_random_addition)**Duration Random Addition** {Duration-Random-Addition}

[](manual-wiki-start)
If set, a random value between 0 and the duration random addition will be added to behavior's the [Duration](#duration) when applied. A negative number will instead reduce the [Duration](#duration) in the same manner.
[](manual-wiki-end)

## [](dcei.engine.proto.Behavior.unit_modifier)**Unit Modifier** {Unit-Modifier}
Modifications that are applied to the unit when the behavior is applied.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Behavior.UnitModifier.ownership)**Ownership** {Ownership}
Used to change the owner of a unit. You typically want to use caster unit or source unit for charm behaviors.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Behavior.UnitModifier.target_behavior_type)**Target Behavior Type** {Target-Behavior-Type}
[](dcei.engine.proto.BehaviorComponent.BehaviorType)**EnumType: [BehaviorComponent.BehaviorType](GenericEnum#behaviorcomponentbehaviortype)**

Used to change the unit's AI behavior type.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Behavior.duration)**Duration** {Duration}
This is how long the behavior will last for.

[](manual-wiki-start)
By default, this duration is not reset when additional stacks are applied. All stacks are removed when the duration expires. A duration of 0 will result in the behavior lasting indefinitely.
[](manual-wiki-end)

## [](dcei.engine.proto.Behavior.stacks_removed_on_expire)**Stacks Removed On Expire** {Stacks-Removed-On-Expire}
How many behavior stacks will be removed when the duration expires, 0 means all stacks will be removed. If duration expires but not all behavior stacks removed, the duration timer will be refreshed.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Behavior.start_effect)**Start Effect** {Start-Effect}
The effect created when the behavior is started.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Behavior.final_effect)**Final Effect** {Final-Effect}
The effect created when the behavior is removed.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Behavior.refresh_effect)**Refresh Effect** {Refresh-Effect}
The effect created when subsequent stacks of a behavior are applied to a unit.

[](manual-wiki-start)
Requires the [Refresh Stack](#refresh-stack) flag to be enabled.
[](manual-wiki-end)

## [](dcei.engine.proto.Behavior.expire_effect)**Expire Effect** {Expire-Effect}
The effect created when the behavior's duration expires.

[](manual-wiki-start)
This effect won't be executed if the behavior is removed via [Effect/Remove Behavior](Data-Effect-Remove-Behavior).
[](manual-wiki-end)

## [](dcei.engine.proto.Behavior.periodic_interval)**Periodic Interval** {Periodic-Interval}
Determines how often the Periodic Effect occurs. Must be greater than 0 to function to create periodic effects.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Behavior.periodic_interval_expressions)**Periodic Interval Expressions** {Periodic-Interval-Expressions}
The evaluated expressions are added to the Periodic Interval.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Behavior.periodic_effect)**Periodic Effect** {Periodic-Effect}
The effect created a the end of each Periodic Interval.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Behavior.periodic_effect_count)**Periodic Effect Count** {Periodic-Effect-Count}
Determines how many times the Periodic Effect is run. A periodic effect with count of -1 will last until the behavior is removed.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Behavior.behavior_validators_apply)**Behavior Validators Apply** {Behavior-Validators-Apply}
The behavior will only be applied if all of validators listed here succeed. Unlike Remove and Disable validators, these are only checked once.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Behavior.behavior_validators_remove)**Behavior Validators Remove** {Behavior-Validators-Remove}
The behavior will be removed if any of these validators succeed.

[](manual-wiki-start)
**NOTE:** these remove validators are checked every frame while the behavior is active and can cause significant CPU overhead. It's recommended to have less than 20 of such behaviors active at once.
[](manual-wiki-end)

## [](dcei.engine.proto.Behavior.behavior_validators_disable)**Behavior Validators Disable** {Behavior-Validators-Disable}
The behavior will be disabled if any of these validators succeed. The behavior will be enabled again the next time that all of these validators fail.

[](manual-wiki-start)
**NOTE:** these disable validators are checked every frame while the behavior is active and can cause significant CPU overhead. It's recommended to have less than 20 of such behaviors active at once.
[](manual-wiki-end)

## [](dcei.engine.proto.Behavior.modifiers)**Modifiers** {Modifiers}
These modifiers can be applied to a number unit attributes (like health or movement speed) and different types of modifiers interact in different ways. Each modifier is applied once per stack of the behavior. Modifiers are only applied while the behavior is active.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorModifiers.flags)**Flags** {Flags}

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.BehaviorFlags.invulnerable)**Invulnerable** {Invulnerable}
Prevents damage taken.

[](manual-wiki-start)
Can be filtered by search filters such as in [Effect\AreaSearch](Data-Effect-Area-Search#filter).
[](manual-wiki-end)

#### [](dcei.engine.proto.BehaviorFlags.stealth)**Stealth** {Stealth}
Can be filtered by search filters. By itself stealth does not do anything.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.BehaviorFlags.suppress_movement)**Suppress Movement** {Suppress-Movement}
Prevents the unit from moving.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.BehaviorFlags.suppress_weapon)**Suppress Weapon** {Suppress-Weapon}
Prevents the unit using weapons.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.BehaviorFlags.suppress_ability)**Suppress Ability** {Suppress-Ability}
Prevents the unit from casting abilities.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.BehaviorFlags.suppress_turning)**Suppress Turning** {Suppress-Turning}
Prevents the unit from turning.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.BehaviorFlags.suppress_collision)**Suppress Collision** {Suppress-Collision}
Prevents the unit from interacting with or being affected by other unit's collision.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.BehaviorFlags.ignore_pathing)**Ignore Pathing** {Ignore-Pathing}
Prevents the unit from being restricted to moving on the navmesh.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorModifiers.max_health_modifier)**Max Health Modifier** {Max-Health-Modifier}
[](dcei.engine.proto.BehaviorModifier)**MessageType: [BehaviorModifier](Data-Behavior#behaviormodifier)**

Modifies the unit's health.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorModifiers.max_mana_modifier)**Max Mana Modifier** {Max-Mana-Modifier}
[](dcei.engine.proto.BehaviorModifier)**MessageType: [BehaviorModifier](Data-Behavior#behaviormodifier)**

Modifies the unit's mana.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorModifiers.max_shield_modifier)**Max Shield Modifier** {Max-Shield-Modifier}
[](dcei.engine.proto.BehaviorModifier)**MessageType: [BehaviorModifier](Data-Behavior#behaviormodifier)**

Modifies the unit's shield.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorModifiers.health_regeneration_modifier)**Health Regeneration Modifier** {Health-Regeneration-Modifier}
[](dcei.engine.proto.BehaviorModifier)**MessageType: [BehaviorModifier](Data-Behavior#behaviormodifier)**

Modifies the unit's health regen.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorModifiers.mana_regeneration_modifier)**Mana Regeneration Modifier** {Mana-Regeneration-Modifier}
[](dcei.engine.proto.BehaviorModifier)**MessageType: [BehaviorModifier](Data-Behavior#behaviormodifier)**

Modifies the unit's mana regen.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorModifiers.shield_regeneration_modifier)**Shield Regeneration Modifier** {Shield-Regeneration-Modifier}
[](dcei.engine.proto.BehaviorModifier)**MessageType: [BehaviorModifier](Data-Behavior#behaviormodifier)**

Modifies the unit's shield regen.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorModifiers.unit_target_priority)**Unit Target Priority** {Unit-Target-Priority}
[](dcei.engine.proto.BehaviorModifier)**MessageType: [BehaviorModifier](Data-Behavior#behaviormodifier)**

Modifies the unit's target priority.

[](manual-wiki-start)
See: [Data/Unit/Target Priortity](Data-Unit#target-priority).
[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorModifiers.unit_radius_modifier)**Unit Radius Modifier** {Unit-Radius-Modifier}
[](dcei.engine.proto.BehaviorModifier)**MessageType: [BehaviorModifier](Data-Behavior#behaviormodifier)**

Modifies the unit's radius.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorModifiers.move_speed_modifier)**Move Speed Modifier** {Move-Speed-Modifier}
[](dcei.engine.proto.BehaviorModifier)**MessageType: [BehaviorModifier](Data-Behavior#behaviormodifier)**

Modifies the unit's movement speed.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorModifiers.attack_speed_modifier)**Attack Speed Modifier** {Attack-Speed-Modifier}
[](dcei.engine.proto.BehaviorModifier)**MessageType: [BehaviorModifier](Data-Behavior#behaviormodifier)**

Modifies the unit's weapon attack speed.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorModifiers.weapon_damage_modifier)**Weapon Damage Modifier** {Weapon-Damage-Modifier}
[](dcei.engine.proto.BehaviorModifier)**MessageType: [BehaviorModifier](Data-Behavior#behaviormodifier)**

Modifies the unit's weapon damage.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorModifiers.ability_damage_modifier)**Ability Damage Modifier** {Ability-Damage-Modifier}
[](dcei.engine.proto.BehaviorModifier)**MessageType: [BehaviorModifier](Data-Behavior#behaviormodifier)**

Modifies the unit's ability damage.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorModifiers.weapon_damage_taken_modifier)**Weapon Damage Taken Modifier** {Weapon-Damage-Taken-Modifier}
[](dcei.engine.proto.BehaviorModifier)**MessageType: [BehaviorModifier](Data-Behavior#behaviormodifier)**

Modifies the unit's damage taken (from weapons).

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorModifiers.ability_damage_taken_modifier)**Ability Damage Taken Modifier** {Ability-Damage-Taken-Modifier}
[](dcei.engine.proto.BehaviorModifier)**MessageType: [BehaviorModifier](Data-Behavior#behaviormodifier)**

Modifies the unit's damage taken (from abilities).

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorModifiers.critical_chance_modifier)**Critical Chance Modifier** {Critical-Chance-Modifier}
[](dcei.engine.proto.BehaviorModifier)**MessageType: [BehaviorModifier](Data-Behavior#behaviormodifier)**

Modifies the unit's critical chance with weapons.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorModifiers.ability_critical_chance_modifier)**Ability Critical Chance Modifier** {Ability-Critical-Chance-Modifier}
[](dcei.engine.proto.BehaviorModifier)**MessageType: [BehaviorModifier](Data-Behavior#behaviormodifier)**

Modifies the unit's critical chance with abilities.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorModifiers.ability_gold_cost_modifier)**Ability Gold Cost Modifier** {Ability-Gold-Cost-Modifier}
[](dcei.engine.proto.BehaviorModifier)**MessageType: [BehaviorModifier](Data-Behavior#behaviormodifier)**

Modifies the gold cost of the unit's abilities.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorModifiers.ability_mana_cost_modifier)**Ability Mana Cost Modifier** {Ability-Mana-Cost-Modifier}
[](dcei.engine.proto.BehaviorModifier)**MessageType: [BehaviorModifier](Data-Behavior#behaviormodifier)**

Modifies the mana cost of the unit's abilities.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorModifiers.ability_health_cost_modifier)**Ability Health Cost Modifier** {Ability-Health-Cost-Modifier}
[](dcei.engine.proto.BehaviorModifier)**MessageType: [BehaviorModifier](Data-Behavior#behaviormodifier)**

Modifies the health cost of the unit's abilities.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorModifiers.heal_modifier)**Heal Modifier** {Heal-Modifier}
[](dcei.engine.proto.BehaviorModifier)**MessageType: [BehaviorModifier](Data-Behavior#behaviormodifier)**

Modifies the unit's healing effects. Note that this modifier only applies to flat (non-percentage) healing effects.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorModifiers.weapon_range_modifier)**Weapon Range Modifier** {Weapon-Range-Modifier}
[](dcei.engine.proto.BehaviorModifier)**MessageType: [BehaviorModifier](Data-Behavior#behaviormodifier)**

Modifies the unit's weapon range.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorModifiers.weapon_scan_range_modifier)**Weapon Scan Range Modifier** {Weapon-Scan-Range-Modifier}
[](dcei.engine.proto.BehaviorModifier)**MessageType: [BehaviorModifier](Data-Behavior#behaviormodifier)**

Modifies the unit's weapon scan range.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorModifiers.ability_cooldown_modifier)**Ability Cooldown Modifier** {Ability-Cooldown-Modifier}
[](dcei.engine.proto.BehaviorModifier)**MessageType: [BehaviorModifier](Data-Behavior#behaviormodifier)**

Modifies the unit's cooldown recharge speed.

[](manual-wiki-start)
Increases the speed of ability **cooldown** by this factor.
Setting **scaled** or **unscaled** to 1 will increase ability cooldown recharge speed to 200% (1.00 + 1.00 = 2.00), reducing the cooldown time by half.
Setting **additive**, **unified**, or **multiplier factor** to 1 will also increase ability cooldown recharge speed to 200% (1.00 * (1.00 + 1.00) = 2.00).
[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorModifiers.ability_speed_modifier)**Ability Speed Modifier** {Ability-Speed-Modifier}
[](dcei.engine.proto.BehaviorModifier)**MessageType: [BehaviorModifier](Data-Behavior#behaviormodifier)**

Modifies the unit's ability cast speed.

[](manual-wiki-start)
Increases the speed of ability **prep time**, **finish time**, and **cooldown** by this factor.
Setting **scaled** or **unscaled** to 1 will increase ability cast speed to 200% (1.00 + 1.00 = 2.00), reducing the total cast and cooldown time by half.
Setting **additive**, **unified**, or **multiplier factor** to 1 will also increase ability cast speed to 200% (1.00 * (1.00 + 1.00) = 2.00).
[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorModifiers.ability_cooldown_period_modifier)**Ability Cooldown Period Modifier** {Ability-Cooldown-Period-Modifier}
[](dcei.engine.proto.BehaviorModifier)**MessageType: [BehaviorModifier](Data-Behavior#behaviormodifier)**

Modifies the unit's ability cooldown reduction.

[](manual-wiki-start)
This modifier only acts on ability **cooldown** and does not modify **prep time** or **finish time**.
To reduce ability cooldowns by 1 second, you could set the **scaled** or **unscaled** value to -1.
To reduce ability cooldowns by 50%, you could set the **additive**, **unified**, or **multiplier factor** to -0.5.
[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorModifiers.disabled_weapons)**Disabled Weapons** {Disabled-Weapons}
Prevents the unit from using these weapons.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorModifiers.enabled_weapons)**Enabled Weapons** {Enabled-Weapons}
Enables these weapons if they are disabled.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorModifiers.disabled_weapon_families)**Disabled Weapon Families** {Disabled-Weapon-Families}
Prevents the unit from using weapons under these families.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorModifiers.enabled_weapon_families)**Enabled Weapon Families** {Enabled-Weapon-Families}
Enables weapons under these families if they are disabled.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorModifiers.weapon_modifier_group)**Weapon Modifier Group** {Weapon-Modifier-Group}
If set, modifiers affecting weapons (such as weapon damage, weapon range, attack speed, etc) only apply to weapons listed here rather than to all weapons.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorModifiers.ability_modifier_group)**Ability Modifier Group** {Ability-Modifier-Group}
If set, modifiers affecting abilities (such as ability damage, ability cooldown, ability speed, etc) only apply to abilities listed here rather than to all abilities.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorModifiers.disabled_abilities)**Disabled Abilities** {Disabled-Abilities}
Prevents the unit from using these abilities.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorModifiers.enabled_abilities)**Enabled Abilities** {Enabled-Abilities}
Enables these abilities if they are disabled.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorModifiers.hide_abilities)**Hide Abilities** {Hide-Abilities}
Hide these abilities from the built-in UI.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorModifiers.show_abilities)**Show Abilities** {Show-Abilities}
Show these abilities in the built-in UI if hidden.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorModifiers.add_highlight_to_abilities)**Add Highlight To Abilities** {Add-Highlight-To-Abilities}
Highlight these abilities in the built-in UI.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorModifiers.remove_highlight_from_abilities)**Remove Highlight From Abilities** {Remove-Highlight-From-Abilities}
Remove highlight from these abilities in the built-in UI.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Behavior.damage_response)**Damage Response** {Damage-Response}
Allows the unit to create an effect or modify damage amounts in response to taking or dealing damage.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.DamageResponse.chance)**Chance** {Chance}
The chance that the damage response will occur. If 0, the damage response will never be triggered. If 1 the damage response will always be triggered.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.DamageResponse.cooldown)**Cooldown** {Cooldown}
The duration (in seconds) the damage response has to wait before it has a Chance of occurring again.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.DamageResponse.location)**Location** {Location}

[](manual-wiki-start)

[](manual-wiki-end)

>* **DEFENDER**: The damage response occurs when the unit takes damage.
>* **ATTACKER**: The damage response occurs when the unit deals damage.

### [](dcei.engine.proto.DamageResponse.fatal_only)**Fatal Only** {Fatal-Only}
If enabled, the damage response only occurs when taking or dealing fatal damage.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.DamageResponse.effect)**Effect** {Effect}
The effect is created when the damage response succeeds.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.DamageResponse.damage_modifier)**Damage Modifier** {Damage-Modifier}
[](dcei.engine.proto.BehaviorModifier)**MessageType: [BehaviorModifier](Data-Behavior#behaviormodifier)**

The damage that triggered the damage response is modified by these values when the damage response succeeds.

[](manual-wiki-start)
See [BehaviorModifier](#behaviormodifier) for how these values are calculated.
[](manual-wiki-end)

### [](dcei.engine.proto.DamageResponse.validators)**Validators** {Validators}
These validators must succeed when the damage response is triggered for the damage response to be executed.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.DamageResponse.chance_modifier_per_stack)**Chance Modifier Per Stack** {Chance-Modifier-Per-Stack}
[](dcei.engine.proto.BehaviorModifier)**MessageType: [BehaviorModifier](Data-Behavior#behaviormodifier)**

Modifies the damage responses chance per stack of the behavior on the unit.

[](manual-wiki-start)
See [BehaviorModifier](#behaviormodifier) for how these values are calculated.
[](manual-wiki-end)

### [](dcei.engine.proto.DamageResponse.damage_clamp_min)**Damage Clamp Min** {Damage-Clamp-Min}
If set, any damage below this amount will be adjusted to this amount when the damage response is triggered.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.DamageResponse.damage_clamp_max)**Damage Clamp Max** {Damage-Clamp-Max}
If set, any damage above this amount will be adjusted to this amount when the damage response is triggered.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Behavior.death_response)**Death Response** {Death-Response}
Allows the unit to create an effect when it dies.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.DeathResponse.chance)**Chance** {Chance}
The chance that the death response will occur. If 0, the death response will never be triggered. If 1 the death response will always be triggered.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.DeathResponse.effect)**Effect** {Effect}
The effect created by the death response.

[](manual-wiki-start)
[Target Type](#target-type) determines who it affects.
[](manual-wiki-end)

### [](dcei.engine.proto.DeathResponse.target_type)**Target Type** {Target-Type}
The location where the death response occurs. In this context Caster/Source refers to the killing unit and Target refers to this unit.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Behavior.behavior_tag_array)**Behavior Tag Array** {Behavior-Tag-Array}
Used to have the behavior apply global tags to the unit. Tags can be referenced in validators and expressions.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Behavior.TagItem.name)**Name** {Name}

[](manual-wiki-start)
The name of the tag to apply.
[](manual-wiki-end)

### [](dcei.engine.proto.Behavior.TagItem.count)**Count** {Count}

[](manual-wiki-start)
The number of stacks of the tag to apply (per behavior stack).
[](manual-wiki-end)

## [](dcei.engine.proto.Behavior.persist_through_morph)**Persist Through Morph** {Persist-Through-Morph}

[](manual-wiki-start)
See: [Data/Effect/Morph](Data-Effect-Morph).
[](manual-wiki-end)

## [](dcei.engine.proto.Behavior.locked)**Locked** {Locked}
Disables the behavior. Used by Wild Sky to allow behaviors to be enabled by contextual loading.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.BehaviorModifier)**BehaviorModifier** {BehaviorModifier}

[](manual-wiki-start)
The total result of all modifiers for an attribute follows this formula:
> ```CSS
>  result = (value + sum(scaled))
>           * (1 + sum(additive_factor))
>           * (1 + positive(max(unified_factor)) + negative(min(unified_factor)))
>           * (1 + multiplier_factor[1]) *  (1 + multiplier_factor[2])
>           + sum(unscaled).
>  ```
>
[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorModifier.scaled)**Scaled** {Scaled}
The value is added to the base value, and can be multiplied by additive, unified, or multiplier factors.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorModifier.unscaled)**Unscaled** {Unscaled}
The value is added to the base value but are never multiplied by additive, unified, or multiplier factors.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorModifier.additive_factor)**Additive Factor** {Additive-Factor}
Increases the base value as a multiplier.

[](manual-wiki-start)
When multiple sources of additive factors are applied, they combine additively (Ex: `+0.5` + `+0.25` = `+0.75`).
[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorModifier.unified_factor)**Unified Factor** {Unified-Factor}
Increases the base value as a multiplier.

[](manual-wiki-start)
When multiple sources of unified factors are applied, only the highest positive value and lowest negative value are used (Ex: `+0.5` + `+0.25` = `+0.5`).
[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorModifier.multiplier_factor)**Multiplier Factor** {Multiplier-Factor}
Increases the base value as a multiplier.

[](manual-wiki-start)
When multiple sources of multiplier factors are applied, they combine multiplicatively (Ex: `+0.5` + `+0.25` = `+0.875`).
[](manual-wiki-end)

