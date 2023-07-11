<div id="toc" markdown="1">
- [Data\Actor\Site Operation](#dataactorsite-operation)
  * [Offset](#offset)
  * [Rotate](#rotate)
  * [Absolute Height](#absolute-height)
  * [Hold Position](#hold-position)
  * [Absolute Offset](#absolute-offset)
  * [Absolute X](#absolute-x)
  * [Absolute Y](#absolute-y)
  * [Absolute Z](#absolute-z)
  * [Ballistic Move](#ballistic-move)
  * [Orbit](#orbit)

</div>

***

# [](dcei.engine.proto.Actor.site_operation)**[Data](Data)\\[Actor](Data-Actor)\Site Operation** {dataActorSite-Operation}
Site operations are special actors that modify the position or rotation of other actors.

[](manual-wiki-start)
They can be used to do things like adding offsets to attached models or rotating a model to be upside down. Some site operations can also be used to apply motion over time to create basic "animations", such as making a unit spin or slowly float up and then down. 
Site operations can be applied via various [Site Operation](Data-Actor-Unit-Actor#host-site-operations) fields or through [Actor Events](Data-ActorEvent). Site operations stack cumulatively in the order in which they are applied.
**Note**: Unit actors (and site operations applied to them) are purely the visual representation and not game objects themselves. Applying site operations to offset or rotate a unit actor does not change the unit's position or facing.
[](manual-wiki-end)

## [](dcei.engine.proto.SiteOperation.offset)**Offset** {Offset}
[](dcei.engine.proto.SiteOperation.Offset)**MessageType: [Offset](GenericMessage#siteoperationoffset)**

Applies an offset to the actor's position.

[](manual-wiki-start)
The offset is relative to the [Orientation](#orientation). 
[](manual-wiki-end)

## [](dcei.engine.proto.SiteOperation.rotate)**Rotate** {Rotate}
Rotates an actor.

[](manual-wiki-start)
The X/Y/Z fields are used to apply static rotation (or a one-off rotation over time using actor [Events](Actor-Events)). The Dx/Dy/Dz field are used to apply a constant rotation over time (aka spin). The rotation is relative to the [Orientation](#orientation).
**Note**: [Event Orientation](#orientation) and [Move Orientation](#orientation) settings are special cases that behave slightly differently than other orientations.
[](manual-wiki-end)

### [](dcei.engine.proto.SiteOperation.Rotate.x)**X** {X}
The rotation in degrees around the X axis (aka Pitch).

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SiteOperation.Rotate.y)**Y** {Y}
The rotation in degrees around the Y axis (aka Yaw).

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SiteOperation.Rotate.z)**Z** {Z}
The rotation in degrees around the Z axis (aka Roll).

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SiteOperation.Rotate.dx)**Dx** {Dx}
The rotation in degrees per second around the X axis.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SiteOperation.Rotate.dy)**Dy** {Dy}
The rotation in degrees per second around the Y axis.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SiteOperation.Rotate.dz)**Dz** {Dz}
The rotation in degrees per second around the Z axis.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SiteOperation.Rotate.orientation)**Orientation** {Orientation}
[](dcei.engine.proto.SiteOperation.OrientationType)**EnumType: [SiteOperation.OrientationType](GenericEnum#siteoperationorientationtype)**

Determines relative orientation of the rotation.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.SiteOperation.absolute_height)**Absolute Height** {Absolute-Height}
Set's the absolute height (or Y position) of the actor. Can be used to make aura VFX appear at ground height regardless of unit height (assuming no cliffs are used).

[](manual-wiki-start)
Functionally similar to [Absolute Y](Data-Actor-Site-Operation-Absolute-Y) Site Op.
[](manual-wiki-end)

### [](dcei.engine.proto.SiteOperation.AbsoluteHeight.height)**Height** {Height}
Sets the absolute height of the actor.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.SiteOperation.hold_position)**Hold Position** {Hold-Position}
Makes the actor no longer update position or rotation.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.SiteOperation.absolute_offset)**Absolute Offset** {Absolute-Offset}
Sets the absolute position of an actor using world orientation.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SiteOperation.AbsoluteOffset.x)**X** {X}
Horizontal position on the world grid. A value of 0 is the map's left edge.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SiteOperation.AbsoluteOffset.y)**Y** {Y}
Height position on the world grid. A value of 0 is the map's base height.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SiteOperation.AbsoluteOffset.z)**Z** {Z}
Vertical position on the world grid. A value of 0 is the map's bottom edge.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SiteOperation.AbsoluteOffset.x_range)**X Range** {X-Range}
If set, a random value between 0 and the X Range will be applied to the X position when this site operation is applied. Only accepts positive values.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SiteOperation.AbsoluteOffset.y_range)**Y Range** {Y-Range}
If set, a random value between 0 and the Y Range will be applied to the Y position when this site operation is applied. Only accepts positive values.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SiteOperation.AbsoluteOffset.z_range)**Z Range** {Z-Range}
If set, a random value between 0 and the Z Range will be applied to the Z position when this site operation is applied. Only accepts positive values.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.SiteOperation.absolute_x)**Absolute X** {Absolute-X}
Locks the actor to a specific X value on the world grid.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SiteOperation.AbsoluteX.x)**X** {X}
Horizontal position on the world grid. A value of 0 is the map's left edge.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SiteOperation.AbsoluteX.x_range)**X Range** {X-Range}
If set, a random value between 0 and the X Range will be applied to the X position when this site operation is applied. Only accepts positive values.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.SiteOperation.absolute_y)**Absolute Y** {Absolute-Y}
Locks the actor to a specific Y value on the world grid.

[](manual-wiki-start)
Functionally similar to the [Absolute Height](Data-Actor-Site-Operation-Absolute-Height) Site Op.
[](manual-wiki-end)

### [](dcei.engine.proto.SiteOperation.AbsoluteY.y)**Y** {Y}
Height position on the world grid. A value of 0 is the map's base height.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SiteOperation.AbsoluteY.y_range)**Y Range** {Y-Range}
If set, a random value between 0 and the Y Range will be applied to the Y position when this site operation is applied. Only accepts positive values.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.SiteOperation.absolute_z)**Absolute Z** {Absolute-Z}
Locks the actor to a specific Z value on the world grid.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SiteOperation.AbsoluteZ.z)**Z** {Z}
Vertical position on the world grid. A value of 0 is the map's bottom edge.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SiteOperation.AbsoluteZ.z_range)**Z Range** {Z-Range}
If set, a random value between 0 and the Z Range will be applied to the Z position when this site operation is applied. Only accepts positive values.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.SiteOperation.ballistic_move)**Ballistic Move** {Ballistic-Move}
Makes the actor move to a target position. Works the same as a Ballistic Mover.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SiteOperation.BallisticMove.target_position_offset)**Target Position Offset** {Target-Position-Offset}
[](dcei.engine.proto.SiteOperation.Offset)**MessageType: [Offset](GenericMessage#siteoperationoffset)**

The offset for the target position of this site operation. This offset is relative the source actor's position and facing. Note that BallisticMove siteOperation may not work correctly with other siteOperation types that also change actors' positions.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SiteOperation.BallisticMove.flight_time)**Flight Time** {Flight-Time}
When set, the actor move speed will be adjusted so that it takes this time to reach its target, regardless of the distance. When using flight time, speed should be set to 0.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SiteOperation.BallisticMove.flight_time_range)**Flight Time Range** {Flight-Time-Range}
A random value between 0 and this value is added to the flight time.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SiteOperation.BallisticMove.speed)**Speed** {Speed}
Speed of the Actor. When using speed, flight time should be set to 0. Speed is measured in terrain grid-units-per-second.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SiteOperation.BallisticMove.speed_range)**Speed Range** {Speed-Range}
A random value between 0 and this value is added to the speed.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SiteOperation.BallisticMove.gravity)**Gravity** {Gravity}
Used to determine the height of the arc. Higher values mean a higher arc.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.SiteOperation.orbit)**Orbit** {Orbit}
Makes the actor orbit its host site.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SiteOperation.Orbit.radius)**Radius** {Radius}
Sets the offset radius that the actor will orbit round its host.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SiteOperation.Orbit.speed)**Speed** {Speed}
Sets the speed of the orbit in degrees per second.

[](manual-wiki-start)

[](manual-wiki-end)

