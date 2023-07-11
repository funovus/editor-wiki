<div id="toc" markdown="1">
- [Data\Effect\Simple Spawn](#dataeffectsimple-spawn)
  * [Spawn Unit Type](#spawn-unit-type)
  * [Effect](#effect)
  * [Location](#location)
  * [Orientation](#orientation)

</div>

***

# [](dcei.engine.proto.Effect.simple_spawn)**[Data](Data)\\[Effect](Data-Effect)\Simple Spawn** {dataEffectSimple-Spawn}
Spawn a simple unit around an anchor unit

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectSimpleSpawn.spawn_unit_type)**Spawn Unit Type** {Spawn-Unit-Type}
Type registered with DCEI.RegisterSimpleUnitType

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectSimpleSpawn.effect)**Effect** {Effect}
Effect to apply on newly spawned unit Must be an effect that supports simple units

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectSimpleSpawn.location)**Location** {Location}
Location for spawning unit

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.EffectLocation.base)**Base** {Base}
Spawn at this location

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.EffectLocation.offset_absolute)**Offset Absolute** {Offset-Absolute}
[](dcei.engine.proto.Double3)**MessageType: [Double3](GenericMessage#double3)**

Position offset in world coordinate

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.EffectLocation.orientation_for_offset_relative)**Orientation For Offset Relative** {Orientation-For-Offset-Relative}
[](dcei.engine.proto.EffectOrientation)**MessageType: [EffectOrientation](GenericMessage#effectorientation)**

Orientation for relative position offset

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.EffectLocation.offset_relative)**Offset Relative** {Offset-Relative}
[](dcei.engine.proto.Double3)**MessageType: [Double3](GenericMessage#double3)**

Relative position offset

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectSimpleSpawn.orientation)**Orientation** {Orientation}
[](dcei.engine.proto.EffectOrientation)**MessageType: [EffectOrientation](GenericMessage#effectorientation)**

Orientation for spawnd unit

[](manual-wiki-start)

[](manual-wiki-end)

