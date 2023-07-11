<div id="toc" markdown="1">
- [Data\Effect\Switch Effect](#dataeffectswitch-effect)
  * [Target Type](#target-type)
  * [Cases](#cases)

</div>

***

# [](dcei.engine.proto.Effect.switch_effect)**[Data](Data)\\[Effect](Data-Effect)\Switch Effect** {dataEffectSwitch-Effect}
Run different effects based on validators/conditions.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectSwitch.target_type)**Target Type** {Target-Type}
Used to determine the ability target type if this effect is the first effect of an ability.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectSwitch.cases)**Cases** {Cases}
For each case (from top to bottom), check the Validator and execute the effect if the Validator succeeds. By default the switch ends when the first Validator passes.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.EffectSwitch.EffectCase.effect)**Effect** {Effect}
The effect to run if the validator passes.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.EffectSwitch.EffectCase.validator)**Validator** {Validator}

[](manual-wiki-start)
The [validator](Data-Validator) to check.
[](manual-wiki-end)

### [](dcei.engine.proto.EffectSwitch.EffectCase.fall_through)**Fall Through** {Fall-Through}
If checked, the next case will be evaluated even if this case passes.

[](manual-wiki-start)

[](manual-wiki-end)

