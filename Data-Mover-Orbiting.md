<div id="toc" markdown="1">
- [Data\Mover\Orbiting](#datamoverorbiting)
  * [Orbit Speed Type](#orbit-speed-type)
  * [Bind To Owner](#bind-to-owner)
  * [Life Period](#life-period)
  * [Rotation Axis](#rotation-axis)
  * [Radius](#radius)
  * [Radius Expressions](#radius-expressions)

</div>

***

# [](dcei.engine.proto.Mover.orbiting)**[Data](Data)\\[Mover](Data-Mover)\Orbiting** {dataMoverOrbiting}
Moves the missile in an orbit around the target.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.OrbitingMover.orbit_speed_type)**Orbit Speed Type** {Orbit-Speed-Type}
[](dcei.engine.proto.OrbitingMover.orbit_speed_type)**SelectableType: [OrbitingMover.Orbit Speed Type](SelectableType#orbitingmoverorbit-speed-type)**

Determines whether the orbit speed is controlled by a flat speed or degrees per second.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.OrbitingMover.bind_to_owner)**Bind To Owner** {Bind-To-Owner}
When checked, the mover will be destroyed if the caster dies.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.OrbitingMover.life_period)**Life Period** {Life-Period}
When set, the missile unit will die after this duration.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.OrbitingMover.rotation_axis)**Rotation Axis** {Rotation-Axis}
Sets the axis of rotation for the orbit. The default axis is 0, 1, 0 for a clockwise rotation. An axis of 0, -1, 0 will create a counter-clockwise rotation.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Axis.x)**X** {X}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Axis.y)**Y** {Y}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Axis.z)**Z** {Z}

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.OrbitingMover.radius)**Radius** {Radius}
The radius of the orbit.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.OrbitingMover.radius_expressions)**Radius Expressions** {Radius-Expressions}
If set, the evaluated expression will be added to the radius when the missile unit is launched.

[](manual-wiki-start)

[](manual-wiki-end)

