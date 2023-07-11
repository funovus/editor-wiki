<div id="toc" markdown="1">
- [Data\Generic Message](#datageneric-message)
  * [ActorResource](#actorresource)
  * [UnitActor.SelectionScale](#unitactorselectionscale)
  * [InitialScale](#initialscale)
  * [SpriteOptions](#spriteoptions)
  * [SiteOperation.Offset](#siteoperationoffset)
  * [UnitBattleData](#unitbattledata)
  * [EffectOffset](#effectoffset)
  * [SearchFilter.SearchFilterSort](#searchfiltersearchfiltersort)
  * [MorphParameters](#morphparameters)
  * [AreaSearchType](#areasearchtype)
  * [SearchFilter](#searchfilter)
  * [EffectOffset.ExplicitOffset](#effectoffsetexplicitoffset)
  * [EffectOffset.PolarOffset](#effectoffsetpolaroffset)
  * [SimpleSearchFilter.SearchFilterSort](#simplesearchfiltersearchfiltersort)
  * [Double3](#double3)
  * [EffectOrientation](#effectorientation)
  * [ValueWithRangeAndExpression](#valuewithrangeandexpression)
  * [GuidanceMover](#guidancemover)
  * [BallisticMover](#ballisticmover)
  * [ThrowMover](#throwmover)
  * [ThrowMover.Orientation](#throwmoverorientation)
  * [ValidatorExpressions.RangeInt](#validatorexpressionsrangeint)
  * [ValidatorExpressions.RangeDouble](#validatorexpressionsrangedouble)

</div>

***

# [](Generic_Message)**[Data](Data)\Generic Message** {dataGeneric-Message}

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ActorResource)**ActorResource** {ActorResource}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorResource.type)**Type** {Type}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorResource.name)**Name** {Name}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorResource.priority)**Priority** {Priority}
Currently only works for actors with ParticleAnimation resource type. Particle animations with a priority level lower than the game's VFX priority level won't be created. This can be set using DCEI.SetVfxPriorityLevel(). Note that the actor will be created, just not the particle animation

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.UnitActor.SelectionScale)**UnitActor.SelectionScale** {UnitActorSelectionScale}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.UnitActor.SelectionScale.x)**X** {X}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.UnitActor.SelectionScale.y)**Y** {Y}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.UnitActor.SelectionScale.z)**Z** {Z}

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.InitialScale)**InitialScale** {InitialScale}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.InitialScale.x)**X** {X}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.InitialScale.y)**Y** {Y}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.InitialScale.z)**Z** {Z}

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.SpriteOptions)**SpriteOptions** {SpriteOptions}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SpriteOptions.disable_camera_facing)**Disable Camera Facing** {Disable-Camera-Facing}
Set actor with sprite asset not billboard facing camera, default sprite will keep facing camera

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SpriteOptions.center_sprite_anchor)**Center Sprite Anchor** {Center-Sprite-Anchor}
Set actor with sprite asset anchor to center, default will be bottom of the sprite

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SpriteOptions.flip_x)**Flip X** {Flip-X}
If checked, flips the sprite horizontally.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SpriteOptions.flip_y)**Flip Y** {Flip-Y}
If checked, flips the sprite vertically.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SpriteOptions.rendering_group)**Rendering Group** {Rendering-Group}
[](dcei.engine.proto.SpriteOptions.RenderingGroup)**EnumType: [SpriteOptions.RenderingGroup](GenericEnum#spriteoptionsrenderinggroup)**

Sprites from different rendering groups are rendered in different phases of the engine's render pipeline. Set a proper rendering group to make the sprite render above/below other objects.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SpriteOptions.rendering_priority)**Rendering Priority** {Rendering-Priority}
Sets the sprite's rendering priority. Sprites within the same rendering group will be sorted by the rendering priority before rendering. To make the sprite render above/below other objects, set a proper rendering group.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SpriteOptions.enable_x_z_rotation_with_camera_facing)**Enable X Z Rotation With Camera Facing** {Enable-X-Z-Rotation-With-Camera-Facing}
If checked, this allow sprites using camera facing to retain any rotations applied on the X or Z planes. This typically used with missile sprite actors to preserve mover rotations.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.SiteOperation.Offset)**SiteOperation.Offset** {SiteOperationOffset}
Applies an offset to the actor's position.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SiteOperation.Offset.x)**X** {X}
Left/Right offset. Positive values are offset right, negative values are offset left.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SiteOperation.Offset.y)**Y** {Y}
Up/Down offset. Positive values are up, negative values are down.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SiteOperation.Offset.z)**Z** {Z}
Forward/Back offset. Positive values are forward, negative values are back.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SiteOperation.Offset.x_range)**X Range** {X-Range}
If set, a random value between 0 and the X Range will be applied to the X offset when this site operation is applied. Only accepts positive values.

[](manual-wiki-start)
Example: X is -1 and X Range is 2 will result in a random X offset between -1 and 1.
[](manual-wiki-end)

### [](dcei.engine.proto.SiteOperation.Offset.y_range)**Y Range** {Y-Range}
If set, a random value between 0 and the Y Range will be applied to the Y offset when this site operation is applied. Only accepts positive values.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SiteOperation.Offset.z_range)**Z Range** {Z-Range}
If set, a random value between 0 and the Z Range will be applied to the Z offset when this site operation is applied. Only accepts positive values.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SiteOperation.Offset.orientation)**Orientation** {Orientation}
[](dcei.engine.proto.SiteOperation.OrientationType)**EnumType: [SiteOperation.OrientationType](GenericEnum#siteoperationorientationtype)**

Determines relative direction of the offset.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.UnitBattleData)**UnitBattleData** {UnitBattleData}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.UnitBattleData.enemy_search_range)**Enemy Search Range** {Enemy-Search-Range}
The unit will search for enemies to attack within this radius.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.UnitBattleData.engage_radius)**Engage Radius** {Engage-Radius}
The unit will search for enemies to engage within this radius.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.UnitBattleData.reset_radius)**Reset Radius** {Reset-Radius}
The unit will leash if it leaves this radius.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.UnitBattleData.chase_in_defense_area_only)**Chase In Defense Area Only** {Chase-In-Defense-Area-Only}
Used for generic controllable unit. If target is outside of the range, the unit will stop chasing and go back

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.UnitBattleData.force_rescan_period)**Force Rescan Period** {Force-Rescan-Period}
Time in seconds for weapons to be forced to rescan targets.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectOffset)**EffectOffset** {EffectOffset}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.EffectOffset.oneof_offset_type)**Offset Type** {Offset-Type}
[](dcei.engine.proto.EffectOffset.oneof_offset_type)**SelectableType: [EffectOffset.Offset Type](SelectableType#effectoffsetoffset-type)**


[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.SearchFilter.SearchFilterSort)**SearchFilter.SearchFilterSort** {SearchFilterSearchFilterSort}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SearchFilter.SearchFilterSort.key)**Key** {Key}
[](dcei.engine.proto.SearchFilter.FilterSortMethod)**EnumType: [SearchFilter.FilterSortMethod](GenericEnum#searchfilterfiltersortmethod)**

The method used to sort potential targets.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SearchFilter.SearchFilterSort.order)**Order** {Order}
[](dcei.engine.proto.SearchFilter.FilterSortOrder)**EnumType: [SearchFilter.FilterSortOrder](GenericEnum#searchfilterfiltersortorder)**

The order in which potential targets are sorted for priority.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.MorphParameters)**MorphParameters** {MorphParameters}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.MorphParameters.reset_health_percentage)**Reset Health Percentage** {Reset-Health-Percentage}
If unchecked, new unit will retain the same health percentage as before the morph.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.MorphParameters.reset_mana_percentage)**Reset Mana Percentage** {Reset-Mana-Percentage}
If unchecked, new unit will retain the same mana percentage as before the morph.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.AreaSearchType)**AreaSearchType** {AreaSearchType}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.AreaSearchType.oneof_area_search_type)**Area Search Type** {Area-Search-Type}
[](dcei.engine.proto.AreaSearchType.oneof_area_search_type)**SelectableType: [AreaSearchType.Area Search Type](SelectableType#areasearchtypearea-search-type)**


[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.SearchFilter)**SearchFilter** {SearchFilter}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SearchFilter.primary_sort_keys)**Primary Sort Keys** {Primary-Sort-Keys}
[](dcei.engine.proto.SearchFilter.SearchFilterSort)**MessageType: [SearchFilterSort](GenericMessage#searchfiltersearchfiltersort)**

Potential targets are sorted based on these parameters.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SearchFilter.secondary_sort_keys)**Secondary Sort Keys** {Secondary-Sort-Keys}
[](dcei.engine.proto.SearchFilter.SearchFilterSort)**MessageType: [SearchFilterSort](GenericMessage#searchfiltersearchfiltersort)**

If a pair of targets have the same priority value due to Primary Sort Keys, this sort key is then used to determine which unit to target.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SearchFilter.player)**Player** {Player}
[](dcei.engine.proto.SearchFilter.Flag)**EnumType: [SearchFilter.Flag](GenericEnum#searchfilterflag)**

Targets owned by the player that created the search will match the filter.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SearchFilter.ally)**Ally** {Ally}
[](dcei.engine.proto.SearchFilter.Flag)**EnumType: [SearchFilter.Flag](GenericEnum#searchfilterflag)**

Targets owned by an ally of the player that created the search will match the filter.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SearchFilter.enemy)**Enemy** {Enemy}
[](dcei.engine.proto.SearchFilter.Flag)**EnumType: [SearchFilter.Flag](GenericEnum#searchfilterflag)**

Targets owned by an enemy of the player that created the search will match the filter.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SearchFilter.neutral)**Neutral** {Neutral}
[](dcei.engine.proto.SearchFilter.Flag)**EnumType: [SearchFilter.Flag](GenericEnum#searchfilterflag)**

Targets that are neutral to the player that created the search will match the filter.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SearchFilter.unit)**Unit** {Unit}
[](dcei.engine.proto.SearchFilter.Flag)**EnumType: [SearchFilter.Flag](GenericEnum#searchfilterflag)**

Targets that use the "Unit" category will match the filter.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SearchFilter.missile)**Missile** {Missile}
[](dcei.engine.proto.SearchFilter.Flag)**EnumType: [SearchFilter.Flag](GenericEnum#searchfilterflag)**

Targets that use the "Missile" category will match the filter.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SearchFilter.structure)**Structure** {Structure}
[](dcei.engine.proto.SearchFilter.Flag)**EnumType: [SearchFilter.Flag](GenericEnum#searchfilterflag)**

Targets that use the "Structure" category will match the filter.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SearchFilter.air)**Air** {Air}
[](dcei.engine.proto.SearchFilter.Flag)**EnumType: [SearchFilter.Flag](GenericEnum#searchfilterflag)**

Targets that use air unit collision will match the filter.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SearchFilter.ground)**Ground** {Ground}
[](dcei.engine.proto.SearchFilter.Flag)**EnumType: [SearchFilter.Flag](GenericEnum#searchfilterflag)**

Targets that use ground unit collision will match the filter.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SearchFilter.stealth)**Stealth** {Stealth}
[](dcei.engine.proto.SearchFilter.Flag)**EnumType: [SearchFilter.Flag](GenericEnum#searchfilterflag)**

Targets with a behavior that uses the stealth flag will match the filter.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SearchFilter.invulerable)**Invulerable** {Invulerable}
[](dcei.engine.proto.SearchFilter.Flag)**EnumType: [SearchFilter.Flag](GenericEnum#searchfilterflag)**

Targets with the invulnerable flag will match the filter.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SearchFilter.alive)**Alive** {Alive}
[](dcei.engine.proto.SearchFilter.Flag)**EnumType: [SearchFilter.Flag](GenericEnum#searchfilterflag)**

Targets that are currently alive will match the filter.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectOffset.ExplicitOffset)**EffectOffset.ExplicitOffset** {EffectOffsetExplicitOffset}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.EffectOffset.ExplicitOffset.forward)**Forward** {Forward}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.EffectOffset.ExplicitOffset.right)**Right** {Right}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.EffectOffset.ExplicitOffset.up)**Up** {Up}

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectOffset.PolarOffset)**EffectOffset.PolarOffset** {EffectOffsetPolarOffset}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.EffectOffset.PolarOffset.yaw)**Yaw** {Yaw}
Yaw (nose left or right, positive is right) around the normal axis in degrees .

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.EffectOffset.PolarOffset.pitch)**Pitch** {Pitch}
Pitch (nose up or down, positive is down) around the transverse axis in degrees.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.EffectOffset.PolarOffset.distance)**Distance** {Distance}

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.SimpleSearchFilter.SearchFilterSort)**SimpleSearchFilter.SearchFilterSort** {SimpleSearchFilterSearchFilterSort}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SimpleSearchFilter.SearchFilterSort.key)**Key** {Key}
[](dcei.engine.proto.SimpleSearchFilter.FilterSortMethod)**EnumType: [SimpleSearchFilter.FilterSortMethod](GenericEnum#simplesearchfilterfiltersortmethod)**

The method used to sort potential targets.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SimpleSearchFilter.SearchFilterSort.order)**Order** {Order}
[](dcei.engine.proto.SimpleSearchFilter.FilterSortOrder)**EnumType: [SimpleSearchFilter.FilterSortOrder](GenericEnum#simplesearchfilterfiltersortorder)**

The order in which potential targets are sorted for priority.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Double3)**Double3** {Double3}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Double3.x)**X** {X}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Double3.y)**Y** {Y}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Double3.z)**Z** {Z}

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectOrientation)**EffectOrientation** {EffectOrientation}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.EffectOrientation.Type)**Type** {Type}
[](dcei.engine.proto.EffectOrientation.Type)**SelectableType: [EffectOrientation.Type](SelectableType#effectorientationtype)**


[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ValueWithRangeAndExpression)**ValueWithRangeAndExpression** {ValueWithRangeAndExpression}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ValueWithRangeAndExpression.value)**Value** {Value}
The base value.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ValueWithRangeAndExpression.range)**Range** {Range}
A random value between 0 and this value is added to the base value.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ValueWithRangeAndExpression.expressions)**Expressions** {Expressions}
If set, the evaluated expression will be added to the base value.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.GuidanceMover)**GuidanceMover** {GuidanceMover}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.GuidanceMover.acceleration)**Acceleration** {Acceleration}
This value is added to the missile unit's speed each second.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.GuidanceMover.acceleration_expressions)**Acceleration Expressions** {Acceleration-Expressions}
If set, the evaluated expression will be added to the acceleration when the missile unit is launched.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.GuidanceMover.acceleration_range)**Acceleration Range** {Acceleration-Range}
A random value between 0 and this value is added to the missile unit's acceleration.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.GuidanceMover.speed)**Speed** {Speed}
The missile unit's initial speed, in terrain grid-units-per-second.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.GuidanceMover.speed_expressions)**Speed Expressions** {Speed-Expressions}
If set, the evaluated expression will be added to the speed when the missile unit is launched.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.GuidanceMover.speed_range)**Speed Range** {Speed-Range}
A random value between 0 and this value is added to the missile unit's speed.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.GuidanceMover.min_speed)**Min Speed** {Min-Speed}
The minimum speed the missile unit can move.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.GuidanceMover.max_speed)**Max Speed** {Max-Speed}
The maximum speed the missile unit can move. Note that this needs to be above 0 for the missile unit to go anywhere.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.BallisticMover)**BallisticMover** {BallisticMover}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BallisticMover.flight_time)**Flight Time** {Flight-Time}
When set, the missile unit's speed will be adjusted so that it takes this time to reach its target, regardless of the distance. When using flight time, speed should be set to 0.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BallisticMover.flight_time_expressions)**Flight Time Expressions** {Flight-Time-Expressions}
If set, the evaluated expression will be added to the flight time when the missile unit is launched.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BallisticMover.flight_time_range)**Flight Time Range** {Flight-Time-Range}
A random value between 0 and this value is added to the missile unit's flight time.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BallisticMover.speed)**Speed** {Speed}
Speed of the mover. When using speed, flight time should be set to 0. Speed is measured in terrain grid-units-per-second.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BallisticMover.speed_expressions)**Speed Expressions** {Speed-Expressions}
If set, the evaluated expression will be added to the speed when the missile unit is launched.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BallisticMover.speed_range)**Speed Range** {Speed-Range}
A random value between 0 and this value is added to the missile unit's speed.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BallisticMover.gravity)**Gravity** {Gravity}
Used to determine the height of the arc. Higher values mean a higher arc.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ThrowMover)**ThrowMover** {ThrowMover}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ThrowMover.acceleration)**Acceleration** {Acceleration}
[](dcei.engine.proto.ValueWithRangeAndExpression)**MessageType: [ValueWithRangeAndExpression](GenericMessage#valuewithrangeandexpression)**

This value is added to the missile unit's speed each second.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ThrowMover.speed)**Speed** {Speed}
[](dcei.engine.proto.ValueWithRangeAndExpression)**MessageType: [ValueWithRangeAndExpression](GenericMessage#valuewithrangeandexpression)**

The missile unit's initial speed, in terrain grid-units-per-second.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ThrowMover.min_speed)**Min Speed** {Min-Speed}
The minimum speed the missile unit can move.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ThrowMover.max_speed)**Max Speed** {Max-Speed}
The maximum speed the missile unit can move. Note that this needs to be above 0 for the missile unit to go anywhere.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ThrowMover.orientation)**Orientation** {Orientation}
[](dcei.engine.proto.ThrowMover.Orientation)**MessageType: [Orientation](GenericMessage#throwmoverorientation)**

The mover's move direction.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ThrowMover.Orientation)**ThrowMover.Orientation** {ThrowMoverOrientation}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ThrowMover.Orientation.yaw)**Yaw** {Yaw}
[](dcei.engine.proto.ValueWithRangeAndExpression)**MessageType: [ValueWithRangeAndExpression](GenericMessage#valuewithrangeandexpression)**

Turn right or left in degrees (positive is right, negative is left).

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ThrowMover.Orientation.pitch)**Pitch** {Pitch}
[](dcei.engine.proto.ValueWithRangeAndExpression)**MessageType: [ValueWithRangeAndExpression](GenericMessage#valuewithrangeandexpression)**

Turn down or up in degrees (positive is down, negative is up).

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ThrowMover.Orientation.type)**Type** {Type}
[](dcei.engine.proto.ThrowMover.OrientationType)**EnumType: [ThrowMover.OrientationType](GenericEnum#throwmoverorientationtype)**


[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ValidatorExpressions.RangeInt)**ValidatorExpressions.RangeInt** {ValidatorExpressionsRangeInt}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ValidatorExpressions.RangeInt.min)**Min** {Min}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ValidatorExpressions.RangeInt.max)**Max** {Max}

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ValidatorExpressions.RangeDouble)**ValidatorExpressions.RangeDouble** {ValidatorExpressionsRangeDouble}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ValidatorExpressions.RangeDouble.min)**Min** {Min}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ValidatorExpressions.RangeDouble.max)**Max** {Max}

[](manual-wiki-start)

[](manual-wiki-end)

