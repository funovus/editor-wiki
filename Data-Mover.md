<div id="toc" markdown="1">
- [Data\Mover](#datamover)
  * [Mover Type](#mover-type)
  * [Upright](#upright)
  * [No Rotation](#no-rotation)
  * [Stay On Nav Mesh](#stay-on-nav-mesh)

</div>

***

# [](dcei.engine.proto.Mover)**[Data](Data)\Mover** {dataMover}

[](manual-wiki-start)
Movers are a specialized data type that describe the movement pattern of units or missiles launched with the [Launch Missile](Data-Effect-Launch-Missile) effect.
[](manual-wiki-end)

## [](dcei.engine.proto.Mover.oneof_motion_type)**Mover Type**
* **[Guidance](Data-Mover-Guidance)**
* **[Ballistic](Data-Mover-Ballistic)**
* **[Sine Wave](Data-Mover-Sine-Wave)**
* **[Orbiting](Data-Mover-Orbiting)**
* **[Throw](Data-Mover-Throw)**
* **[Multi Stage](Data-Mover-Multi-Stage)**

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Mover.upright)**Upright** {Upright}
When enabled, forces the missile unit to maintain its original up vector (rather than following the arc of movement).

[](manual-wiki-start)
Typically used for ballistic knockback movers to make the knockback motion look more natural.
[](manual-wiki-end)

## [](dcei.engine.proto.Mover.no_rotation)**No Rotation** {No-Rotation}
When enabled, forces the missile unit to maintain its original facing (rather than rotating towards the target position).

[](manual-wiki-start)
Typically used for ballistic knockback movers to make the knockback motion look more natural.
[](manual-wiki-end)

## [](dcei.engine.proto.Mover.stay_on_nav_mesh)**Stay On Nav Mesh** {Stay-On-Nav-Mesh}
When enabled, attempts to keep the missile unit's target position inside the nav mesh. Useful for making knockback effects that respect nav mesh.

[](manual-wiki-start)

[](manual-wiki-end)

