<div id="toc" markdown="1">
- [Data\Effect\Sell](#dataeffectsell)
  * [Value Type](#value-type)
  * [Refund](#refund)
  * [Unit Cost Only](#unit-cost-only)

</div>

***

# [](dcei.engine.proto.Effect.sell)**[Data](Data)\\[Effect](Data-Effect)\Sell** {dataEffectSell}
Destroys a unit and refunds the cost to the owner.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectSell.value_type)**Value Type** {Value-Type}
[](dcei.engine.proto.ValueType)**EnumType: [ValueType](GenericEnum#valuetype)**

Whether to refund a percentage of the target's cost or an explicit amount.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectSell.refund)**Refund** {Refund}
The amount of gold to refund. If using percentage, 0.5 means 50%.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectSell.unit_cost_only)**Unit Cost Only** {Unit-Cost-Only}

[](manual-wiki-start)
If checked, ignores modifications to the unit's cost from abilities (such as from [Abilities/Add To Unit Cost](Data-Ability#add-to-unit-cost)).
[](manual-wiki-end)

