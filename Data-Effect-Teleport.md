<div id="toc" markdown="1">
- [Data\Effect\Teleport](#dataeffectteleport)
  * [Which Unit](#which-unit)
  * [To](#to)
  * [Offset Start](#offset-start)
  * [Offset End](#offset-end)
  * [Offset](#offset)

</div>

***

# [](dcei.engine.proto.Effect.teleport)**[Data](Data)\\[Effect](Data-Effect)\Teleport** {dataEffectTeleport}
Teleport a unit instantly.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectTeleport.which_unit)**Which Unit** {Which-Unit}
Which unit to teleport.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectTeleport.to)**To** {To}
Where to teleport the unit to.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectTeleport.offset_start)**Offset Start** {Offset-Start}
Offset start & end together determines the offset forward, right and up directions.
If start & end are same unit, forward direction will be that unit's orientation. If start & end are using target unit but effect is casted on target location, offset will be ignored. If start & end are different units, forward direction will be start--->end

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectTeleport.offset_end)**Offset End** {Offset-End}
Used in combination with Offset Start to determine the facing of this effect. If both are set to a unit, the effect will use that unit's facing.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectTeleport.offset)**Offset** {Offset}
[](dcei.engine.proto.EffectOffset)**MessageType: [EffectOffset](GenericMessage#effectoffset)**

Offset for the teleport destination.

[](manual-wiki-start)

[](manual-wiki-end)

