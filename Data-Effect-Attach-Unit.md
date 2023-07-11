<div id="toc" markdown="1">
- [Data\Effect\Attach Unit](#dataeffectattach-unit)
  * [Parent Unit](#parent-unit)
  * [Child Unit](#child-unit)
  * [Use Child Facing](#use-child-facing)
  * [Attach Offset](#attach-offset)

</div>

***

# [](dcei.engine.proto.Effect.attach_unit)**[Data](Data)\\[Effect](Data-Effect)\Attach Unit** {dataEffectAttach-Unit}
Attach two units.

[](manual-wiki-start)
You can use AttachUnit to attach a ["Simple"](https://funovus.notion.site/Simple-Units-Introduction-8a39c47f07d64f4c9549c5947c2c281f) unit to a "Normal" unit. It's bridge for Simple/Complex units working together.
[](manual-wiki-end)

## [](dcei.engine.proto.EffectAttachUnit.parent_unit)**Parent Unit** {Parent-Unit}
Which unit is parent.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectAttachUnit.child_unit)**Child Unit** {Child-Unit}
Which unit is child.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectAttachUnit.use_child_facing)**Use Child Facing** {Use-Child-Facing}
When set, child unit will use it's own rotation instead of locked to host's rotation.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectAttachUnit.attach_offset)**Attach Offset** {Attach-Offset}
Offset between the parent and child unit.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.EffectAttachUnit.AttachOffset.oneof_offset_type)**Offset Type** {Offset-Type}
[](dcei.engine.proto.EffectAttachUnit.AttachOffset.oneof_offset_type)**SelectableType: [EffectAttachUnit.AttachOffset.Offset Type](SelectableType#effectattachunitattachoffsetoffset-type)**


[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.EffectAttachUnit.AttachOffset.type)**Type** {Type}
Sets the orientation the offset is relative to.

[](manual-wiki-start)

[](manual-wiki-end)

>* **PARENT_ORIENTATION**: Orientation is relative to the direction from parent unit's facing.
>* **WORLD_ORIENTATION**: Orientation is relative to world facing (i.e., north).

