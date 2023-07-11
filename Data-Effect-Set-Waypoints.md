<div id="toc" markdown="1">
- [Data\Effect\Set Waypoints](#dataeffectset-waypoints)
  * [Target](#target)
  * [Waypoints](#waypoints)
  * [Dispersal Offset](#dispersal-offset)
  * [Dispersal Offset Range](#dispersal-offset-range)
  * [Use Natural Dispersal](#use-natural-dispersal)
  * [Ignore Rally Disabled Lanes](#ignore-rally-disabled-lanes)

</div>

***

# [](dcei.engine.proto.Effect.set_waypoints)**[Data](Data)\\[Effect](Data-Effect)\Set Waypoints** {dataEffectSet-Waypoints}
Sets the waypoint path for TD_Creep or Generic Controllable units.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectSetWaypoints.target)**Target** {Target}
Which unit to set waypoints for.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectSetWaypoints.waypoints)**Waypoints** {Waypoints}
Which method is used for setting waypoints.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.EffectSetWaypoints.Waypoints.oneof_waypoints_type)**Waypoints Type** {Waypoints-Type}
[](dcei.engine.proto.EffectSetWaypoints.Waypoints.oneof_waypoints_type)**SelectableType: [EffectSetWaypoints.Waypoints.Waypoints Type](SelectableType#effectsetwaypointswaypointswaypoints-type)**


[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectSetWaypoints.dispersal_offset)**Dispersal Offset** {Dispersal-Offset}
Sets the waypoints offset across the lane width (0 = left edge, 1 = right edge).

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectSetWaypoints.dispersal_offset_range)**Dispersal Offset Range** {Dispersal-Offset-Range}
A random number between this and 0 will be added to the dispersal offset.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectSetWaypoints.use_natural_dispersal)**Use Natural Dispersal** {Use-Natural-Dispersal}
If checked, determine dispersal automatically from unit's current position.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectSetWaypoints.ignore_rally_disabled_lanes)**Ignore Rally Disabled Lanes** {Ignore-Rally-Disabled-Lanes}
When checked, lanes marked as "Disable Rally" as valid waypoints.

[](manual-wiki-start)

[](manual-wiki-end)

