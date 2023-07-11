<div id="toc" markdown="1">
- [Data\Effect\Spawn](#dataeffectspawn)
  * [Unit](#unit)
  * [Count](#count)
  * [Owner](#owner)
  * [Owner Id](#owner-id)
  * [Location](#location)
  * [Offset Start](#offset-start)
  * [Offset End](#offset-end)
  * [Offset](#offset)
  * [Facing Offset](#facing-offset)
  * [Effect](#effect)
  * [Spawn On Navmesh](#spawn-on-navmesh)

</div>

***

# [](dcei.engine.proto.Effect.spawn)**[Data](Data)\\[Effect](Data-Effect)\Spawn** {dataEffectSpawn}
Creates units.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectSpawn.unit)**Unit** {Unit}
The type of unit to create.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectSpawn.count)**Count** {Count}
The number of units to create.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectSpawn.owner)**Owner** {Owner}
Which unit's owner will be the owner for the spawned units.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectSpawn.owner_id)**Owner Id** {Owner-Id}
If specified (i.e., non-zero), this field will be used instead of the "owner" field.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectSpawn.location)**Location** {Location}
Determines the position and facing of the spawned unit. If the specified location is not an unit, spawned units use the default facing (0).


[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectSpawn.offset_start)**Offset Start** {Offset-Start}
Offset start & end together determines the "facing" of this effect. This facing will be used to interpret offsets and also will be used as the initial facing of the created missile unit.
If offset start & end are both set to non-none values and the specified locations don't overlap, the effect will face from start to end.
If offset start & end are both specified but are overlapping, and the offset start is an unit (e.g., caster unit), the facing of that unit will be used.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectSpawn.offset_end)**Offset End** {Offset-End}
Used in combination with Offset Start to determine the facing of this effect. If both are set to a unit, the effect will use that unit's facing.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectSpawn.offset)**Offset** {Offset}
[](dcei.engine.proto.EffectOffset)**MessageType: [EffectOffset](GenericMessage#effectoffset)**

Offset relative to the facing of the created unit.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectSpawn.facing_offset)**Facing Offset** {Facing-Offset}
[](dcei.engine.proto.EffectOffset)**MessageType: [EffectOffset](GenericMessage#effectoffset)**

Additional facing offset applied to the created unit. Note that this facing will be applied after position offset facing is applied.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectSpawn.effect)**Effect** {Effect}
Effect applied to the spawned unit after they are spawned.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectSpawn.spawn_on_navmesh)**Spawn On Navmesh** {Spawn-On-Navmesh}
If checked, the unit will be spawned at the nearest pathable location if the target location isn't pathable.

[](manual-wiki-start)

[](manual-wiki-end)

