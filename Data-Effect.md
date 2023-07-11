<div id="toc" markdown="1">
- [Data\Effect](#dataeffect)
  * [Effect Type](#effect-type)
  * [Wild Sky Effect Type](#wild-sky-effect-type)
  * [Template](#template)
  * [Parent](#parent)
  * [Debug Log Context](#debug-log-context)
  * [Universal Field Expressions](#universal-field-expressions)

</div>

***

# [](dcei.engine.proto.Effect)**[Data](Data)\Effect** {dataEffect}

[](manual-wiki-start)
Effects are the building blocks of abilities and weapons and can be used to launch missiles, perform searches, deal damage, and the like. Effects can be chained together to create complex ability sequences.
For example to create a fireball abilities that explodes and deals damage in an area, you can create an effect tree such as **Launch Missile** > **Area Search** > **Damage**. The effects can be configured so that the **Launch Missile** effect creates an **Area Search** on impact, which runs a **Damage** effect on enemy units within a small radius.
# Effect Locations
Some effects have a [Location](Data-Effect-Persistent#location) field which determines where the effect is created. For effects that can only occur on a unit (such as Damage or Apply Behavior) this field may be called [Which Unit]((Data-Effect-Damage#which-unit)) or [Target]((Data-Effect-Apply-Behavior#target)). Regardless of whether the target type is a unit or location, where the effect is created follows the same general semantics.
### Unit
If the target type is unit and the specified unit isn't found, then the effect won't be executed.
* **Target Unit**: The target unit of the previous effect, weapon, ability, or behavior.
* **Source Unit**: The last unit involved in the effect tree (a previous target, spawned unit, or missile).
* **Caster Unit**: The first unit involved in the effect tree (typically the unit that used the weapon or ability).
### Location
If the target type is location but the target happens to be a unit, then the location of the unit will be used instead.
* **Target Location**: The target location of the previous effect, weapon, ability, or behavior.
* **Source Location**: The location of the previous effect in the effect tree.
* **Caster Location**: The location of first unit involved in the effect tree.
### Unit or Location
If the target type is unit or location, it will look for a unit first before falling back to a location.
* **Target Unit or Location**: The target unit/location of the previous effect, weapon, ability, or behavior.
* **Source Unit or Location**: The last unit/effect location in the effect tree.
* **Caster Unit or Location**: The first unit/location involved in the effect tree.
[](manual-wiki-end)

## [](dcei.engine.proto.Effect.oneof_effect_type)**Effect Type**
* **[Launch Missile](Data-Effect-Launch-Missile)**
* **[Damage](Data-Effect-Damage)**
* **[Area Search](Data-Effect-Area-Search)**
* **[Persistent](Data-Effect-Persistent)**
* **[Kill](Data-Effect-Kill)**
* **[Spawn](Data-Effect-Spawn)**
* **[Morph](Data-Effect-Morph)**
* **[Apply Behavior](Data-Effect-Apply-Behavior)**
* **[Remove Behavior](Data-Effect-Remove-Behavior)**
* **[Apply Tag](Data-Effect-Apply-Tag)**
* **[Remove Tag](Data-Effect-Remove-Tag)**
* **[Switch Effect](Data-Effect-Switch-Effect)**
* **[Sell](Data-Effect-Sell)**
* **[Heal](Data-Effect-Heal)**
* **[Add Gold](Data-Effect-Add-Gold)**
* **[Teleport](Data-Effect-Teleport)**
* **[Set](Data-Effect-Set)**
* **[Enumerate Unit List](Data-Effect-Enumerate-Unit-List)**
* **[Set Bounty ](Data-Effect-Set-Bounty-)**
* **[Remove](Data-Effect-Remove)**
* **[Stop](Data-Effect-Stop)**
* **[Modify Unit](Data-Effect-Modify-Unit)**
* **[Issue Ability](Data-Effect-Issue-Ability)**
* **[Consume Mana](Data-Effect-Consume-Mana)**
* **[Issue Command](Data-Effect-Issue-Command)**
* **[Force](Data-Effect-Force)**
* **[Attach Unit](Data-Effect-Attach-Unit)**
* **[Detach Unit](Data-Effect-Detach-Unit)**
* **[Modify Upgrade Level](Data-Effect-Modify-Upgrade-Level)**
* **[Simple Damage](Data-Effect-Simple-Damage)**
* **[Simple Force](Data-Effect-Simple-Force)**
* **[Simple Area Search](Data-Effect-Simple-Area-Search)**
* **[Simple Movement Speed Modifier](Data-Effect-Simple-Movement-Speed-Modifier)**
* **[Simple Spawn](Data-Effect-Simple-Spawn)**
* **[Apply Simple Mover](Data-Effect-Apply-Simple-Mover)**
## [](wildSkyEffectType)**Wild Sky Effect Type**
* **[Spawn Troop](Data-Effect-Spawn-Troop)**
* **[Morph Troop](Data-Effect-Morph-Troop)**
* **[Set Waypoints](Data-Effect-Set-Waypoints)**
* **[Disengage](Data-Effect-Disengage)**
* **[Teleport Along Waypoint](Data-Effect-Teleport-Along-Waypoint)**
* **[Set Rally Point](Data-Effect-Set-Rally-Point)**

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Effect.template)**Template** {Template}
[](GenericField.template)**FieldType: [Template](GenericField#template)**


[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Effect.parent)**Parent** {Parent}
[](GenericField.parent)**FieldType: [Parent](GenericField#parent)**


[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Effect.debug_log_context)**Debug Log Context** {Debug-Log-Context}
When checked, prints the effect's caster/source/target info to the log.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Effect.universal_field_expressions)**Universal Field Expressions** {Universal-Field-Expressions}

[](manual-wiki-start)
Universal Field Expressions allow you to set an expression for most fields in effects even when they wouldn’t ordinarily accept an expression. [See notion guide "Universal Field Expressions"](https://www.notion.so/funovus/Universal-Field-Expressions-1c8388c126e14bff83c1944ddbf8aea1)
[](manual-wiki-end)

### [](dcei.engine.proto.UniversalFieldExpression.field_path)**Field Path** {Field-Path}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.UniversalFieldExpression.expression)**Expression** {Expression}

[](manual-wiki-start)

[](manual-wiki-end)

