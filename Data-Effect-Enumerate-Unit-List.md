<div id="toc" markdown="1">
- [Data\Effect\Enumerate Unit List](#dataeffectenumerate-unit-list)
  * [Location Mode](#location-mode)
  * [Target Type](#target-type)
  * [Iteration Mode](#iteration-mode)
  * [Repeat List](#repeat-list)
  * [Step Count](#step-count)
  * [Step Count Expressions](#step-count-expressions)
  * [Validator](#validator)
  * [Search Effect](#search-effect)
  * [Missing Effect](#missing-effect)
  * [Impact Effect](#impact-effect)
  * [Update Source To Previous Target](#update-source-to-previous-target)

</div>

***

# [](dcei.engine.proto.Effect.enumerate_unit_list)**[Data](Data)\\[Effect](Data-Effect)\Enumerate Unit List** {dataEffectEnumerate-Unit-List}
Uses a search effect to generate a list of units and runs effects on units in the list.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectEnumerateUnitList.oneof_location_mode)**Location Mode** {Location-Mode}
[](dcei.engine.proto.EffectEnumerateUnitList.oneof_location_mode)**SelectableType: [EffectEnumerateUnitList.Location Mode](SelectableType#effectenumerateunitlistlocation-mode)**


[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectEnumerateUnitList.target_type)**Target Type** {Target-Type}
Used to determine the ability target type if this effect is the first effect of an ability.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectEnumerateUnitList.iteration_mode)**Iteration Mode** {Iteration-Mode}
Determines how to iterate through the unit list.

[](manual-wiki-start)
- [Step Count](#step-count)
- [validator](#validator)
- [Impact Effect](#impact-effect)
[](manual-wiki-end)

>* **REPEAT**: For each Step Count, check the validator and run the Impact Effect on the top unit of the list. If the validator fails, remove the top unit from the list and move on to the next unit in the list.
>* **FALL_THROUGH**: For each Step Count, check the validator and run the Impact Effect on the next unit in the list. The unit list is iterated through in sequence.

## [](dcei.engine.proto.EffectEnumerateUnitList.repeat_list)**Repeat List** {Repeat-List}
When checked, the list will be iterated through on repeat until the step count is exhausted or no valid targets remain.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectEnumerateUnitList.step_count)**Step Count** {Step-Count}
The number of times to run the impact effect.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectEnumerateUnitList.step_count_expressions)**Step Count Expressions** {Step-Count-Expressions}

[](manual-wiki-start)
The evaluated [expressions](Data-Expression) are added to [Step Count](#step-count).
[](manual-wiki-end)

## [](dcei.engine.proto.EffectEnumerateUnitList.validator)**Validator** {Validator}

[](manual-wiki-start)
The [validator](Data-Validator) checked before running the [Impact Effect](#impact-effect). If the validator fails, the effect is not executed and the step is not counted.
[](manual-wiki-end)

## [](dcei.engine.proto.EffectEnumerateUnitList.search_effect)**Search Effect** {Search-Effect}

[](manual-wiki-start)
The [Area Search](Data-Effect-Area-Search) effect used to generate the unit list. Typically this search should not have Effect or Missing Effect as it should only be used to generate a list of potential targets for the Enumerate Unit List effect.
[](manual-wiki-end)

## [](dcei.engine.proto.EffectEnumerateUnitList.missing_effect)**Missing Effect** {Missing-Effect}
This effect is created if the number of units found by the [Search Effect](#search-effect) is less than the [Step Count](#step-count). This effect is created for each missing target.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectEnumerateUnitList.impact_effect)**Impact Effect** {Impact-Effect}

[](manual-wiki-start)
The effect run on the unit list each step that the [validator](#validator) passes.
[](manual-wiki-end)

## [](dcei.engine.proto.EffectEnumerateUnitList.update_source_to_previous_target)**Update Source To Previous Target** {Update-Source-To-Previous-Target}
If this is set, for the current iteration, the target of previous iteration will be used as the source for this iteration. E.g. Chain lighting

[](manual-wiki-start)
Used in combination with [Use Target Location](#location-mode) to update the search location (useful for creating chain lighting effects).
[](manual-wiki-end)

