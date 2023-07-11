<div id="toc" markdown="1">
- [Data\Effect\Apply Behavior](#dataeffectapply-behavior)
  * [Behavior](#behavior)
  * [Target](#target)
  * [Stack Count](#stack-count)
  * [Stack Count Expressions](#stack-count-expressions)
  * [Duration](#duration)
  * [Extend Duration](#extend-duration)
  * [Expressions](#expressions)
  * [Retain Caster](#retain-caster)

</div>

***

# [](dcei.engine.proto.Effect.apply_behavior)**[Data](Data)\\[Effect](Data-Effect)\Apply Behavior** {dataEffectApply-Behavior}

[](manual-wiki-start)
Applies a Behavior to a unit.
[](manual-wiki-end)

## [](dcei.engine.proto.EffectApplyBehavior.behavior)**Behavior** {Behavior}
The behavior to apply.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectApplyBehavior.target)**Target** {Target}
Which unit to apply the behavior to. Using NONE defaults to TARGET_UNIT. NONE is TARGET_UNIT

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectApplyBehavior.stack_count)**Stack Count** {Stack-Count}
The number of behavior stacks to apply. If set to 0, 1 stack count will be added.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectApplyBehavior.stack_count_expressions)**Stack Count Expressions** {Stack-Count-Expressions}

[](manual-wiki-start)
The evaluated [expressions](Data-Expression) will be added to the effect's [Stack Count](#stack-count).
[](manual-wiki-end)

## [](dcei.engine.proto.EffectApplyBehavior.duration)**Duration** {Duration}
If set, this will be used instead of the behavior's duration.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectApplyBehavior.extend_duration)**Extend Duration** {Extend-Duration}
If checked, the duration will be added to the existing behavior on the target.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectApplyBehavior.expressions)**Expressions** {Expressions}

[](manual-wiki-start)
The evaluated [expressions](Data-Expression) will be added to the effect's [Duration](#duration).
[](manual-wiki-end)

## [](dcei.engine.proto.EffectApplyBehavior.retain_caster)**Retain Caster** {Retain-Caster}
If checked, the effects created by the applied behavior will use the caster of this effect as the caster reference. By default, behaviors will use their target unit as the caster reference. This is useful for making colliding projectiles that deal damage using a damage expression that references behaviors or tags on the caster.

[](manual-wiki-start)

[](manual-wiki-end)

