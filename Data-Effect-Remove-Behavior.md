<div id="toc" markdown="1">
- [Data\Effect\Remove Behavior](#dataeffectremove-behavior)
  * [Behavior](#behavior)
  * [Target](#target)
  * [Stack Count](#stack-count)
  * [Stack Count Expressions](#stack-count-expressions)

</div>

***

# [](dcei.engine.proto.Effect.remove_behavior)**[Data](Data)\\[Effect](Data-Effect)\Remove Behavior** {dataEffectRemove-Behavior}
Removes a Behavior from a unit.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectRemoveBehavior.behavior)**Behavior** {Behavior}
The behavior to remove.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectRemoveBehavior.target)**Target** {Target}
Which unit to remove the behavior from. Using NONE defaults to TARGET_UNIT. NONE is TARGET_UNIT

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectRemoveBehavior.stack_count)**Stack Count** {Stack-Count}
How many stacks to remove. If set to 0, the behavior will be removed regardless of the existing stack count.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectRemoveBehavior.stack_count_expressions)**Stack Count Expressions** {Stack-Count-Expressions}

[](manual-wiki-start)
The evaluated [expressions](Data-Expression) will be added to the effect's [Stack Count](#stack-count).
[](manual-wiki-end)

