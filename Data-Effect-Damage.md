<div id="toc" markdown="1">
- [Data\Effect\Damage](#dataeffectdamage)
  * [Which Unit](#which-unit)
  * [Damage Amount](#damage-amount)
  * [Expressions](#expressions)
  * [Expressions After Behavior Modifiers](#expressions-after-behavior-modifiers)
  * [Expressions After Damage Response](#expressions-after-damage-response)
  * [Card Name](#card-name)

</div>

***

# [](dcei.engine.proto.Effect.damage)**[Data](Data)\\[Effect](Data-Effect)\Damage** {dataEffectDamage}
Applies damage to a unit.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectDamage.which_unit)**Which Unit** {Which-Unit}
Which unit to apply damage to.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectDamage.damage_amount)**Damage Amount** {Damage-Amount}
The amount of damage to deal.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectDamage.expressions)**Expressions** {Expressions}
The result of each expression listed here will be evaluated and added to the damage amount. The total damage amount will then be passed through any behavior modifiers or damage responses.

[](manual-wiki-start)
See: [Data/Expression](Data-Expression).
Note that the expression's [Value/DamageAmount](Data-Expression#damage-amount) refers to the Damage Amount of this effect.
[](manual-wiki-end)

## [](dcei.engine.proto.EffectDamage.expressions_after_behavior_modifiers)**Expressions After Behavior Modifiers** {Expressions-After-Behavior-Modifiers}
The damage value after behavior modifiers are applied will be used when evaulating this expression and the combined value will be used to further apply damage responses.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectDamage.expressions_after_damage_response)**Expressions After Damage Response** {Expressions-After-Damage-Response}
The damage value after damage responses are applied will be used when evaluating this expression and the result will be added to the damage value.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectDamage.card_name)**Card Name** {Card-Name}
Name of the card this damage effect is associated with. Used for reporting in-game stats.

[](manual-wiki-start)

[](manual-wiki-end)

