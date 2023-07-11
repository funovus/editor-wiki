<div id="toc" markdown="1">
- [Data\Effect\Issue Command](#dataeffectissue-command)
  * [Type](#type)
  * [Which Unit](#which-unit)
  * [Target Unit](#target-unit)
  * [Target Location](#target-location)
  * [Target Offset](#target-offset)
  * [Target Offset Start](#target-offset-start)
  * [Target Offset End](#target-offset-end)

</div>

***

# [](dcei.engine.proto.Effect.issue_command)**[Data](Data)\\[Effect](Data-Effect)\Issue Command** {dataEffectIssue-Command}
Issues move or attack commands to a unit.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectIssueCommand.type)**Type** {Type}

[](manual-wiki-start)

[](manual-wiki-end)

>* **NONE**: 
>* **MOVE_TO_LOCATION**: The unit will be ordered to move to the location.
>* **ATTACK_TO_LOCATION**: The unit will be ordered to attack move to the location.
>* **ATTACK_UNIT**: The unit will be ordered to attack the target unit.

## [](dcei.engine.proto.EffectIssueCommand.which_unit)**Which Unit** {Which-Unit}
Which unit to give the move or attack order to.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectIssueCommand.target_unit)**Target Unit** {Target-Unit}
Which unit to attack when using **Attack Unit**.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectIssueCommand.target_location)**Target Location** {Target-Location}
Which location to use when using **Move To Location** or **Attack To Location**.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectIssueCommand.target_offset)**Target Offset** {Target-Offset}
[](dcei.engine.proto.EffectOffset)**MessageType: [EffectOffset](GenericMessage#effectoffset)**

Offset used for the target location if type is location.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectIssueCommand.target_offset_start)**Target Offset Start** {Target-Offset-Start}
Offset start & end together determines the orientation of the offset.
If offset start & end are both specified but are overlapping, and the offset start is an unit (e.g., caster unit), the facing of that unit will be used.
If offset start & end are not specified, or specified but cannot determine the facing using the above rules, the commanded unit's facing will be used.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectIssueCommand.target_offset_end)**Target Offset End** {Target-Offset-End}
Used in combination with Offset Start to determine the facing of this effect. If both are set to a unit, the effect will use that unit's facing.

[](manual-wiki-start)

[](manual-wiki-end)

