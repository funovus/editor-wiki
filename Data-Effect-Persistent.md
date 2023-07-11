<div id="toc" markdown="1">
- [Data\Effect\Persistent](#dataeffectpersistent)
  * [Periodic Count](#periodic-count)
  * [Start Effect](#start-effect)
  * [Final Effect](#final-effect)
  * [Location](#location)
  * [Offset Start](#offset-start)
  * [Offset End](#offset-end)
  * [Start Effect Offset](#start-effect-offset)
  * [Final Effect Offset](#final-effect-offset)
  * [World Facing](#world-facing)
  * [Periodic Duration Select Mode](#periodic-duration-select-mode)
  * [Periodic Durations](#periodic-durations)
  * [Periodic Effect Select Mode](#periodic-effect-select-mode)
  * [Periodic Effects](#periodic-effects)
  * [Periodic Offset Select Mode](#periodic-offset-select-mode)
  * [Periodic Effect Offsets](#periodic-effect-offsets)
  * [Periodic Validators](#periodic-validators)
  * [Terminate On Periodic Effect Success](#terminate-on-periodic-effect-success)
  * [Terminate On Periodic Effect Failure](#terminate-on-periodic-effect-failure)

</div>

***

# [](dcei.engine.proto.Effect.persistent)**[Data](Data)\\[Effect](Data-Effect)\Persistent** {dataEffectPersistent}
Creates and sequences additional effects.

[](manual-wiki-start)
Can be used to create multiple effects over time and/or with offsets.
[](manual-wiki-end)

## [](dcei.engine.proto.EffectPersistent.periodic_count)**Periodic Count** {Periodic-Count}
The number of periodic effects to create.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectPersistent.start_effect)**Start Effect** {Start-Effect}
The effect created when the persistent is created, before the periodic effects.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectPersistent.final_effect)**Final Effect** {Final-Effect}
The effect created when the persistent ends, after the periodic effects.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectPersistent.location)**Location** {Location}
Determines where the persistent effect is created. - If unit, the persistent effect will move along with the unit and effects created by the persistent will use the unit as the source. If the associated unit is removed, the persistent effect will stay at its last position. - If location, the persistent effect will be created at that location and effects created will use the location as their source. - If unit or location, unit will be selected first if available and if not location will be used.


[](manual-wiki-start)
If set to unit, but the unit doesn't exist (e.g. use `Target Unit` but the effect's target is a position), the persistent effect won't be created.
If set to location, but the the target is actually a unit (e.g. use `Target Location` but the effect's target is a unit), the unit's position will be used.
[](manual-wiki-end)

## [](dcei.engine.proto.EffectPersistent.offset_start)**Offset Start** {Offset-Start}
Used in combination with Offset End to determine the facing of this effect. If start & end is at the same point, facing of the source unit is used as a fallback and if source is not an unit, facing of the caster unit is used.


[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectPersistent.offset_end)**Offset End** {Offset-End}
Used in combination with Offset Start to determine the facing of this effect. If start & end is at the same point, facing of the source unit is used as a fallback and if source is not an unit, facing of the caster unit is used.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectPersistent.start_effect_offset)**Start Effect Offset** {Start-Effect-Offset}
[](dcei.engine.proto.EffectOffset)**MessageType: [EffectOffset](GenericMessage#effectoffset)**

Offset coordinates for the start effect. Offsets are relative to the effect's facing.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectPersistent.final_effect_offset)**Final Effect Offset** {Final-Effect-Offset}
[](dcei.engine.proto.EffectOffset)**MessageType: [EffectOffset](GenericMessage#effectoffset)**

Offset coordinates for the final effect. Offsets are relative to the effect's facing.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectPersistent.world_facing)**World Facing** {World-Facing}
When checked, the persistent will ignore Offset Start/End and instead use world grid facing. This is useful for certain game types such as an arcade shooter where projectiles always travel up.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectPersistent.periodic_duration_select_mode)**Periodic Duration Select Mode** {Periodic-Duration-Select-Mode}
[](dcei.engine.proto.EffectPersistent.SelectMode)**EnumType: [EffectPersistent.SelectMode](GenericEnum#effectpersistentselectmode)**

Determines how the periodic duration, effect, or offset is selected.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectPersistent.periodic_durations)**Periodic Durations** {Periodic-Durations}
The duration of each period.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectPersistent.periodic_effect_select_mode)**Periodic Effect Select Mode** {Periodic-Effect-Select-Mode}
[](dcei.engine.proto.EffectPersistent.SelectMode)**EnumType: [EffectPersistent.SelectMode](GenericEnum#effectpersistentselectmode)**

Determines how the periodic duration, effect, or offset is selected.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectPersistent.periodic_effects)**Periodic Effects** {Periodic-Effects}
The effects to run at the end of each period.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectPersistent.periodic_offset_select_mode)**Periodic Offset Select Mode** {Periodic-Offset-Select-Mode}
[](dcei.engine.proto.EffectPersistent.SelectMode)**EnumType: [EffectPersistent.SelectMode](GenericEnum#effectpersistentselectmode)**

Determines how the periodic duration, effect, or offset is selected.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectPersistent.periodic_effect_offsets)**Periodic Effect Offsets** {Periodic-Effect-Offsets}
[](dcei.engine.proto.EffectOffset)**MessageType: [EffectOffset](GenericMessage#effectoffset)**

The offset used to create the periodic effects. Uses the effect's facing to determine offset facing.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectPersistent.periodic_validators)**Periodic Validators** {Periodic-Validators}
All validators listed are checked each period and the periodic effect is only executed if all validators succeed.

[](manual-wiki-start)
See: [Data/Validator](Data-Validator).
[](manual-wiki-end)

## [](dcei.engine.proto.EffectPersistent.terminate_on_periodic_effect_success)**Terminate On Periodic Effect Success** {Terminate-On-Periodic-Effect-Success}
If checked, the persistent effect will be destroyed the first time the periodic validators succeed. The final effect will be executed when the persistent is terminated.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectPersistent.terminate_on_periodic_effect_failure)**Terminate On Periodic Effect Failure** {Terminate-On-Periodic-Effect-Failure}
If checked, the persistent effect will be destroyed the first time the periodic validators fail. The final effect will be executed when the persistent is terminated.

[](manual-wiki-start)

[](manual-wiki-end)

