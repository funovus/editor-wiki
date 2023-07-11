<div id="toc" markdown="1">
- [Data\Effect\Force](#dataeffectforce)
  * [Force Type](#force-type)
  * [Location](#location)
  * [Offset Start](#offset-start)
  * [Offset End](#offset-end)
  * [World Facing](#world-facing)
  * [Facing Adjustment](#facing-adjustment)
  * [Search Area](#search-area)
  * [Search Filter](#search-filter)
  * [Duration](#duration)
  * [Duration Expressions](#duration-expressions)
  * [Speed](#speed)
  * [Speed Expressions](#speed-expressions)
  * [Validators](#validators)
  * [Debug Draw](#debug-draw)

</div>

***

# [](dcei.engine.proto.Effect.force)**[Data](Data)\\[Effect](Data-Effect)\Force** {dataEffectForce}
Applies a force to units in a target area.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectForce.oneof_force_type)**Force Type** {Force-Type}
[](dcei.engine.proto.EffectForce.oneof_force_type)**SelectableType: [EffectForce.Force Type](SelectableType#effectforceforce-type)**


[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectForce.location)**Location** {Location}
Determines where the force effect is created. - If unit, the force effect will move along with the unit. If the associated unit is removed, the force effect will stay at its last position. - If location, the force effect will be created at that location. - If unit or location, unit will be selected first if available and if not location will be used.


[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectForce.offset_start)**Offset Start** {Offset-Start}
Used in combination with Offset End to determine the facing of this effect. If start & end is the same unit, the facing of that unit is used; if start & end is at the same point, facing of the source unit is used as a fallback and if source is not an unit, facing of the caster unit is used.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectForce.offset_end)**Offset End** {Offset-End}
Used in combination with Offset Start to determine the facing of this effect.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectForce.world_facing)**World Facing** {World-Facing}
When checked, the effect will ignore Offset Start/End and instead use world grid facing.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectForce.facing_adjustment)**Facing Adjustment** {Facing-Adjustment}
Offset in degrees added (clockwise) to the effect's facing.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectForce.search_area)**Search Area** {Search-Area}
[](dcei.engine.proto.AreaSearchType)**MessageType: [AreaSearchType](GenericMessage#areasearchtype)**

The target area that will be affected by the force.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectForce.search_filter)**Search Filter** {Search-Filter}
[](dcei.engine.proto.SearchFilter)**MessageType: [SearchFilter](GenericMessage#searchfilter)**

Parameters for which units are affected by the force.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectForce.duration)**Duration** {Duration}
How long the effect lasts in seconds.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectForce.duration_expressions)**Duration Expressions** {Duration-Expressions}
Any expressions here will be evaluated and added to the **duration** when the force effect is created.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectForce.speed)**Speed** {Speed}
The distance to travel per second for units affected by the force.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectForce.speed_expressions)**Speed Expressions** {Speed-Expressions}
Any expressions here will be evaluated and added to the **speed** when the force effect is created.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectForce.validators)**Validators** {Validators}
If set, only targets pass these validators will be affected by the force.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectForce.debug_draw)**Debug Draw** {Debug-Draw}
When checked, shows the area of this force effect in-game.

[](manual-wiki-start)

[](manual-wiki-end)

