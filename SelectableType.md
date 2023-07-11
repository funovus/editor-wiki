<div id="toc" markdown="1">
- [Data\Selectable Type](#dataselectable-type)
- [BehaviorComponent.Behavior Type](#behaviorcomponentbehavior-type)
  * [Do Nothing](#do-nothing)
  * [Generic Controllable Unit](#generic-controllable-unit)
  * [Wander](#wander)
  * [Td Types [Wild Sky]](#td-types-wild-sky)
- [Unit.MiniMapConfig.Mini Map Ui Type](#unitminimapconfigmini-map-ui-type)
  * [Circle](#circle)
  * [Sprite](#sprite)
- [EffectOffset.Offset Type](#effectoffsetoffset-type)
  * [Explicit Offset](#explicit-offset)
  * [Polar Offset](#polar-offset)
- [AreaSearchType.Area Search Type](#areasearchtypearea-search-type)
  * [Circle](#circle)
  * [Circle Sector](#circle-sector)
  * [Rectangle](#rectangle)
  * [Children](#children)
- [EffectSetWaypoints.Waypoints.Waypoints Type](#effectsetwaypointswaypointswaypoints-type)
  * [Waypoints Name](#waypoints-name)
  * [From Unit](#from-unit)
  * [Nearest Waypoint](#nearest-waypoint)
- [EffectEnumerateUnitList.Location Mode](#effectenumerateunitlistlocation-mode)
  * [Use Search Location](#use-search-location)
  * [Use Target Location](#use-target-location)
- [EffectModifyUnit.ModifyAbilityCooldown.Ability Name Type](#effectmodifyunitmodifyabilitycooldownability-name-type)
  * [Ability Name](#ability-name)
  * [Ability Family](#ability-family)
  * [Ability Tag](#ability-tag)
- [EffectModifyUnit.ModifyAbilityChargeCount.Ability Name Type](#effectmodifyunitmodifyabilitychargecountability-name-type)
  * [Ability Name](#ability-name)
  * [Ability Family](#ability-family)
  * [Ability Tag](#ability-tag)
- [EffectModifyUnit.Modify Unit Type](#effectmodifyunitmodify-unit-type)
  * [Modify Mana](#modify-mana)
  * [Modify Shield](#modify-shield)
  * [Modify Ability Cooldown](#modify-ability-cooldown)
  * [Modify Ability Charge Count](#modify-ability-charge-count)
- [EffectIssueAbility.Ability Reference](#effectissueabilityability-reference)
  * [Ability Name](#ability-name)
  * [Ability Tag](#ability-tag)
- [EffectForce.Force Type](#effectforceforce-type)
  * [Direction](#direction)
  * [Center](#center)
- [EffectAttachUnit.AttachOffset.Offset Type](#effectattachunitattachoffsetoffset-type)
  * [Explicit Offset](#explicit-offset)
  * [Polar Offset](#polar-offset)
  * [Use Offset When Effect Impact](#use-offset-when-effect-impact)
- [EffectOrientation.Type](#effectorientationtype)
  * [Unit Orientation](#unit-orientation)
  * [Offset Orientation](#offset-orientation)
- [EffectApplySimpleMover.Type](#effectapplysimplemovertype)
  * [Target Unit](#target-unit)
  * [Target Direction](#target-direction)
- [OrbitingMover.Orbit Speed Type](#orbitingmoverorbit-speed-type)
  * [Speed](#speed)
  * [Degree Per Second](#degree-per-second)
- [MultiStageMover.MoverStage.Motion Type](#multistagemovermoverstagemotion-type)
  * [Guidance](#guidance)
  * [Ballistic](#ballistic)
  * [Throw](#throw)
- [MultiStageMover.MotionOverlay.Overlay Type](#multistagemovermotionoverlayoverlay-type)
  * [Sine Wave](#sine-wave)
  * [Orbiting](#orbiting)

</div>

***

# [](Selectable_Type)**[Data](Data)\Selectable Type** {dataSelectable-Type}

[](manual-wiki-start)

[](manual-wiki-end)

# [](dcei.engine.proto.BehaviorComponent.oneof_behavior_type)**BehaviorComponent.Behavior Type** {BehaviorComponentBehavior-Type}
Controls the AI behavior type of the unit. Most of the time this should be set to **Generic Controllable Unit**. It's generally recommended to not use **Td Types** unless you know what you're doing and are creating a similar tower defense game.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.BehaviorComponent.do_nothing)**Do Nothing** {Do-Nothing}
The unit will have no AI behavior. This causes the unit to be unable to move, attack, or otherwise accept commands.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.BehaviorComponent.generic_controllable_unit)**Generic Controllable Unit** {Generic-Controllable-Unit}
The unit will use the basic AI behavior and accept commands. Generic controllable units with weapons will attempt to attack valid targets in range.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorComponent.BehaviorGenericControllableUnit.leash_radius)**Leash Radius** {Leash-Radius}
Units will only chase auto-acquired targets within this radius. If the unit leaves this radius, it will be ordered to return to its original position (ie the origin of the leash radius). The unit will not be able to auto-acquire a new target until it reaches the leash reset radius. The position of the leash region only updates when a unit becomes idle.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorComponent.BehaviorGenericControllableUnit.leash_reset_radius)**Leash Reset Radius** {Leash-Reset-Radius}
Leashed units (ones that have abandoned their auto-acquired targets and are moving towards their original position) are allowed to acquire new targets within this radius. The leash reset region uses the same origin as the leash region (and updates with it). The purpose of using two regions is to prevent attackers from being able to kite defenders by jumping in and out of the leash radius; The leash reset radius should be significantly smaller than the leash radius to provide the defender a decent area to retreat to.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorComponent.BehaviorGenericControllableUnit.force_rescan)**Force Rescan** {Force-Rescan}

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.BehaviorComponent.BehaviorGenericControllableUnit.ForceRescan.period)**Period** {Period}
If set, the unit will be forced to reconsider its current weapon target each period. Otherwise weapons tend to stick to the current target until it becomes invalid or dies.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.BehaviorComponent.wander)**Wander** {Wander}
The unit will wander aimlessly. Useful for villagers or critters.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorComponent.BehaviorWander.change_location_period)**Change Location Period** {Change-Location-Period}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorComponent.BehaviorWander.wander_radius)**Wander Radius** {Wander-Radius}

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.BehaviorComponent.td_types)**Td Types [Wild Sky]** {Td-Types-Wild-Sky}
//////////////////////////////////////// TD types

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorComponent.BehaviorTdTypes.behavior_type)**Behavior Type** {Behavior-Type}
[](dcei.engine.proto.BehaviorComponent.BehaviorType)**EnumType: [BehaviorComponent.BehaviorType](GenericEnum#behaviorcomponentbehaviortype)**

The unit will wait for this duration before wandering to a new location.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorComponent.BehaviorTdTypes.unit_battle_data)**Unit Battle Data** {Unit-Battle-Data}
[](dcei.engine.proto.UnitBattleData)**MessageType: [UnitBattleData](GenericMessage#unitbattledata)**

The unit will wander within this radius.

[](manual-wiki-start)

[](manual-wiki-end)

# [](dcei.engine.proto.Unit.MiniMapConfig.mini_map_ui_type)**Unit.MiniMapConfig.Mini Map Ui Type** {UnitMiniMapConfigMini-Map-Ui-Type}
Determines whether the unit renders as a circle or sprite on the minimap.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Unit.MiniMapConfig.circle)**Circle** {Circle}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Unit.MiniMapConfig.MiniMapTypeCircle.radius)**Radius** {Radius}
The radius to use for the unit's minimap icon.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Unit.MiniMapConfig.sprite)**Sprite** {Sprite}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Unit.MiniMapConfig.MiniMapTypeSprite.icon)**Icon** {Icon}
The sprite name to use for the unit's minimap icon.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Unit.MiniMapConfig.MiniMapTypeSprite.size)**Size** {Size}
The size to use for the unit's minimap icon.

[](manual-wiki-start)

[](manual-wiki-end)

# [](dcei.engine.proto.EffectOffset.oneof_offset_type)**EffectOffset.Offset Type** {EffectOffsetOffset-Type}

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectOffset.explicit_offset)**Explicit Offset** {Explicit-Offset}
[](dcei.engine.proto.EffectOffset.ExplicitOffset)**MessageType: [ExplicitOffset](GenericMessage#effectoffsetexplicitoffset)**

Offset base on forward/right/up coordinate.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectOffset.polar_offset)**Polar Offset** {Polar-Offset}
[](dcei.engine.proto.EffectOffset.PolarOffset)**MessageType: [PolarOffset](GenericMessage#effectoffsetpolaroffset)**

Offset base on polar coordinate.

[](manual-wiki-start)

[](manual-wiki-end)

# [](dcei.engine.proto.AreaSearchType.oneof_area_search_type)**AreaSearchType.Area Search Type** {AreaSearchTypeArea-Search-Type}

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.AreaSearchType.circle)**Circle** {Circle}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.AreaSearchCircle.radius)**Radius** {Radius}
Sets the radius of the circle to search.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.AreaSearchCircle.radius_expressions)**Radius Expressions** {Radius-Expressions}
Any expressions here will be evaluated and added to the **radius** each time the search is executed.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.AreaSearchType.circle_sector)**Circle Sector** {Circle-Sector}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.AreaSearchCircleSector.outer_radius)**Outer Radius** {Outer-Radius}
Sets the outer radius of the circle sector to search.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.AreaSearchCircleSector.outer_radius_expressions)**Outer Radius Expressions** {Outer-Radius-Expressions}
Any expressions here will be evaluated and added to the **outer radius** each time the search is executed.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.AreaSearchCircleSector.inner_radius)**Inner Radius** {Inner-Radius}
Sets the inner radius of the circle sector to search.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.AreaSearchCircleSector.inner_radius_expressions)**Inner Radius Expressions** {Inner-Radius-Expressions}
Any expressions here will be evaluated and added to the **inner radius** each time the search is executed.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.AreaSearchCircleSector.angle)**Angle** {Angle}
Sets the angle of the circle sector to search. Used to make a search occur in an arc.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.AreaSearchCircleSector.angle_expressions)**Angle Expressions** {Angle-Expressions}
Any expressions here will be evaluated and added to the **angle** each time the search is executed.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.AreaSearchType.rectangle)**Rectangle** {Rectangle}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.AreaSearchRectangle.rectangle_origin)**Rectangle Origin** {Rectangle-Origin}
Sets the origin point of the rectangle.

[](manual-wiki-start)

[](manual-wiki-end)

>* **CENTER**: The rectangle search will be centered on the target position.
>* **EXTEND**: The search will be offset so its starting edge will originate at the target position. Using this setting, the search will extend from its target position rather than be centered on it.

### [](dcei.engine.proto.AreaSearchRectangle.width)**Width** {Width}
Sets the width of the rectangle to search.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.AreaSearchRectangle.width_expressions)**Width Expressions** {Width-Expressions}
Any expressions here will be evaluated and added to the **width** each time the search is executed.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.AreaSearchRectangle.length)**Length** {Length}
Sets the length of the rectangle to search.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.AreaSearchRectangle.length_expressions)**Length Expressions** {Length-Expressions}
Any expressions here will be evaluated and added to the **length** each time the search is executed.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.AreaSearchType.children)**Children** {Children}
The search will find the source unit's children.

[](manual-wiki-start)

[](manual-wiki-end)

# [](dcei.engine.proto.EffectSetWaypoints.Waypoints.oneof_waypoints_type)**EffectSetWaypoints.Waypoints.Waypoints Type** {EffectSetWaypointsWaypointsWaypoints-Type}

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectSetWaypoints.Waypoints.waypoints_name)**Waypoints Name** {Waypoints-Name}

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectSetWaypoints.Waypoints.from_unit)**From Unit** {From-Unit}

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectSetWaypoints.Waypoints.nearest_waypoint)**Nearest Waypoint** {Nearest-Waypoint}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.EffectSetWaypoints.Waypoints.NearestWaypoint.allowed_routes)**Allowed Routes** {Allowed-Routes}
Which routes will be searched, when set to NONE, all routes will be searched.

[](manual-wiki-start)

[](manual-wiki-end)

# [](dcei.engine.proto.EffectEnumerateUnitList.oneof_location_mode)**EffectEnumerateUnitList.Location Mode** {EffectEnumerateUnitListLocation-Mode}

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectEnumerateUnitList.use_search_location)**Use Search Location** {Use-Search-Location}
Run the search using the **Search Effect** location.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectEnumerateUnitList.use_target_location)**Use Target Location** {Use-Target-Location}
Run successive searches at the previous target's location.

[](manual-wiki-start)
This is useful for creating chain lightning effects.
[](manual-wiki-end)

### [](dcei.engine.proto.EffectEnumerateUnitList.LocationModeDynamic.step_delay)**Step Delay** {Step-Delay}
Creates a delay between each search.

[](manual-wiki-start)

[](manual-wiki-end)

# [](dcei.engine.proto.EffectModifyUnit.ModifyAbilityCooldown.oneof_ability_name_type)**EffectModifyUnit.ModifyAbilityCooldown.Ability Name Type** {EffectModifyUnitModifyAbilityCooldownAbility-Name-Type}
Determines if the ability is selected by name, tag, or family.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectModifyUnit.ModifyAbilityCooldown.ability_name)**Ability Name** {Ability-Name}
The name of the ability to modify cooldown for.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectModifyUnit.ModifyAbilityCooldown.ability_family)**Ability Family** {Ability-Family}
The ability family to modify cooldowns for.

[](manual-wiki-start)
Note that all abilities with this family on the target will have their cooldown reduced.
[](manual-wiki-end)

## [](dcei.engine.proto.EffectModifyUnit.ModifyAbilityCooldown.ability_tag)**Ability Tag** {Ability-Tag}
The ability tags to modify cooldowns for.

[](manual-wiki-start)
Note that all abilities with this tag on the target will have their cooldown reduced.
[](manual-wiki-end)

# [](dcei.engine.proto.EffectModifyUnit.ModifyAbilityChargeCount.oneof_ability_name_type)**EffectModifyUnit.ModifyAbilityChargeCount.Ability Name Type** {EffectModifyUnitModifyAbilityChargeCountAbility-Name-Type}
Determines if the ability is selected by name, tag, or family.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectModifyUnit.ModifyAbilityChargeCount.ability_name)**Ability Name** {Ability-Name}
The name of the ability to modify charge count for.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectModifyUnit.ModifyAbilityChargeCount.ability_family)**Ability Family** {Ability-Family}
The ability family to modify charge count for.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectModifyUnit.ModifyAbilityChargeCount.ability_tag)**Ability Tag** {Ability-Tag}
The ability tags to modify charge count for.

[](manual-wiki-start)

[](manual-wiki-end)

# [](dcei.engine.proto.EffectModifyUnit.oneof_modify_unit_type)**EffectModifyUnit.Modify Unit Type** {EffectModifyUnitModify-Unit-Type}
Which unit property to modify.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectModifyUnit.modify_mana)**Modify Mana** {Modify-Mana}
Modifies a unit's mana.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.EffectModifyUnit.ModifyMana.modify_type)**Modify Type** {Modify-Type}
[](dcei.engine.proto.EffectModifyUnit.ModifyType)**EnumType: [EffectModifyUnit.ModifyType](GenericEnum#effectmodifyunitmodifytype)**

Determine the modify type

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.EffectModifyUnit.ModifyMana.value_type)**Value Type** {Value-Type}
[](dcei.engine.proto.ValueType)**EnumType: [ValueType](GenericEnum#valuetype)**

Whether to modify mana as percentage or explicit value.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.EffectModifyUnit.ModifyMana.amount)**Amount** {Amount}
The amount of mana to modify.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.EffectModifyUnit.ModifyMana.expressions)**Expressions** {Expressions}

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectModifyUnit.modify_shield)**Modify Shield** {Modify-Shield}
Modifies a unit's shields.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.EffectModifyUnit.ModifyShield.modify_type)**Modify Type** {Modify-Type}
[](dcei.engine.proto.EffectModifyUnit.ModifyType)**EnumType: [EffectModifyUnit.ModifyType](GenericEnum#effectmodifyunitmodifytype)**

Determine the modify type

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.EffectModifyUnit.ModifyShield.value_type)**Value Type** {Value-Type}
[](dcei.engine.proto.ValueType)**EnumType: [ValueType](GenericEnum#valuetype)**

Whether to modify shields as percentage or explicit value.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.EffectModifyUnit.ModifyShield.amount)**Amount** {Amount}
The amount of shields to modify.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.EffectModifyUnit.ModifyShield.expressions)**Expressions** {Expressions}

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectModifyUnit.modify_ability_cooldown)**Modify Ability Cooldown** {Modify-Ability-Cooldown}
Modifies an ability's current cooldown.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.EffectModifyUnit.ModifyAbilityCooldown.oneof_ability_name_type)**Ability Name Type** {Ability-Name-Type}
[](dcei.engine.proto.EffectModifyUnit.ModifyAbilityCooldown.oneof_ability_name_type)**SelectableType: [EffectModifyUnit.ModifyAbilityCooldown.Ability Name Type](SelectableType#effectmodifyunitmodifyabilitycooldownability-name-type)**

Determines if the ability is selected by name, tag, or family.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.EffectModifyUnit.ModifyAbilityCooldown.modify_type)**Modify Type** {Modify-Type}
[](dcei.engine.proto.EffectModifyUnit.ModifyType)**EnumType: [EffectModifyUnit.ModifyType](GenericEnum#effectmodifyunitmodifytype)**

Determine the modify type

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.EffectModifyUnit.ModifyAbilityCooldown.value_type)**Value Type** {Value-Type}
[](dcei.engine.proto.ValueType)**EnumType: [ValueType](GenericEnum#valuetype)**

Whether to modify cooldown by a percentage or explicit value (in seconds).

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.EffectModifyUnit.ModifyAbilityCooldown.amount)**Amount** {Amount}
The duration to modify cooldown by.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectModifyUnit.modify_ability_charge_count)**Modify Ability Charge Count** {Modify-Ability-Charge-Count}
Modifies an ability's charge count.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.EffectModifyUnit.ModifyAbilityChargeCount.oneof_ability_name_type)**Ability Name Type** {Ability-Name-Type}
[](dcei.engine.proto.EffectModifyUnit.ModifyAbilityChargeCount.oneof_ability_name_type)**SelectableType: [EffectModifyUnit.ModifyAbilityChargeCount.Ability Name Type](SelectableType#effectmodifyunitmodifyabilitychargecountability-name-type)**

Determines if the ability is selected by name, tag, or family.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.EffectModifyUnit.ModifyAbilityChargeCount.modify_type)**Modify Type** {Modify-Type}
[](dcei.engine.proto.EffectModifyUnit.ModifyType)**EnumType: [EffectModifyUnit.ModifyType](GenericEnum#effectmodifyunitmodifytype)**

Determine the modify type

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.EffectModifyUnit.ModifyAbilityChargeCount.amount)**Amount** {Amount}
The amount to modify charge count by.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.EffectModifyUnit.ModifyAbilityChargeCount.clamp)**Clamp** {Clamp}
When checked, clamp charge count between 0 and max charge count.

[](manual-wiki-start)

[](manual-wiki-end)

# [](dcei.engine.proto.EffectIssueAbility.oneof_ability_reference)**EffectIssueAbility.Ability Reference** {EffectIssueAbilityAbility-Reference}
Determines whether ability is referenced by name or tag.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectIssueAbility.ability_name)**Ability Name** {Ability-Name}
Select the ability to be cast by name.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectIssueAbility.ability_tag)**Ability Tag** {Ability-Tag}
Select the first ability with the matching tag on the unit to cast.

[](manual-wiki-start)

[](manual-wiki-end)

# [](dcei.engine.proto.EffectForce.oneof_force_type)**EffectForce.Force Type** {EffectForceForce-Type}

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectForce.direction)**Direction** {Direction}
A force pointing towards the same direction.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.EffectForce.Direction.direction_offset)**Direction Offset** {Direction-Offset}
Offset in degrees added (clockwise) to the effect facing to determine the force's direction.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectForce.center)**Center** {Center}
A force pointing towards the effect center.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.EffectForce.Center.direction_offset)**Direction Offset** {Direction-Offset}
Offset in degrees added (clockwise) to the force's direction.

[](manual-wiki-start)

[](manual-wiki-end)

# [](dcei.engine.proto.EffectAttachUnit.AttachOffset.oneof_offset_type)**EffectAttachUnit.AttachOffset.Offset Type** {EffectAttachUnitAttachOffsetOffset-Type}

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectAttachUnit.AttachOffset.explicit_offset)**Explicit Offset** {Explicit-Offset}
[](dcei.engine.proto.EffectOffset.ExplicitOffset)**MessageType: [ExplicitOffset](GenericMessage#effectoffsetexplicitoffset)**

Offset is based on forward/right/up directions.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectAttachUnit.AttachOffset.polar_offset)**Polar Offset** {Polar-Offset}
[](dcei.engine.proto.EffectOffset.PolarOffset)**MessageType: [PolarOffset](GenericMessage#effectoffsetpolaroffset)**

Offset is based on angle and distance.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectAttachUnit.AttachOffset.use_offset_when_effect_impact)**Use Offset When Effect Impact** {Use-Offset-When-Effect-Impact}
Offset is based on the angle and distance between parent and child unit.

[](manual-wiki-start)

[](manual-wiki-end)

# [](dcei.engine.proto.EffectOrientation.Type)**EffectOrientation.Type** {EffectOrientationType}

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectOrientation.unit_orientation)**Unit Orientation** {Unit-Orientation}

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectOrientation.offset_orientation)**Offset Orientation** {Offset-Orientation}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.OffsetOrientation.offset_start)**Offset Start** {Offset-Start}
Used in combination with Offset End to determine the facing of this effect. If start & end is at the same point, facing of the source unit is used as a fallback and if source is not an unit, facing of the caster unit is used.


[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.OffsetOrientation.offset_end)**Offset End** {Offset-End}
Used in combination with Offset Start to determine the facing of this effect. If start & end is at the same point, facing of the source unit is used as a fallback and if source is not an unit, facing of the caster unit is used.

[](manual-wiki-start)

[](manual-wiki-end)

# [](dcei.engine.proto.EffectApplySimpleMover.type)**EffectApplySimpleMover.Type** {EffectApplySimpleMoverType}

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectApplySimpleMover.target_unit)**Target Unit** {Target-Unit}
The mover will move towards a target unit

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.EffectApplySimpleMover.TargetUnitMover.which_unit)**Which Unit** {Which-Unit}
Move towards which unit

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.EffectApplySimpleMover.TargetUnitMover.initial_speed)**Initial Speed** {Initial-Speed}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.EffectApplySimpleMover.TargetUnitMover.acceleration_magnitude)**Acceleration Magnitude** {Acceleration-Magnitude}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.EffectApplySimpleMover.TargetUnitMover.delay_seconds)**Delay Seconds** {Delay-Seconds}
When the mover become active after the effect applied

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.EffectApplySimpleMover.TargetUnitMover.duration_seconds)**Duration Seconds** {Duration-Seconds}
When the mover become inactive after the effect applied

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectApplySimpleMover.target_direction)**Target Direction** {Target-Direction}
The mover will move in one direction, determined by the angle between the source and target at launch

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.EffectApplySimpleMover.TargetDirectionMover.initial_speed)**Initial Speed** {Initial-Speed}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.EffectApplySimpleMover.TargetDirectionMover.acceleration_magnitude)**Acceleration Magnitude** {Acceleration-Magnitude}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.EffectApplySimpleMover.TargetDirectionMover.delay_seconds)**Delay Seconds** {Delay-Seconds}
When the mover become active after the effect applied

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.EffectApplySimpleMover.TargetDirectionMover.duration_seconds)**Duration Seconds** {Duration-Seconds}
When the mover become inactive after the effect applied

[](manual-wiki-start)

[](manual-wiki-end)

# [](dcei.engine.proto.OrbitingMover.orbit_speed_type)**OrbitingMover.Orbit Speed Type** {OrbitingMoverOrbit-Speed-Type}
Determines whether the orbit speed is controlled by a flat speed or degrees per second.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.OrbitingMover.speed)**Speed** {Speed}
When set, the missile unit's orbit speed, in terrain grid-units-per-second.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.OrbitingMover.degree_per_second)**Degree Per Second** {Degree-Per-Second}
When set, the missile unit's orbit speed, in degrees-per-second.

[](manual-wiki-start)

[](manual-wiki-end)

# [](dcei.engine.proto.MultiStageMover.MoverStage.oneof_motion_type)**MultiStageMover.MoverStage.Motion Type** {MultiStageMoverMoverStageMotion-Type}

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.MultiStageMover.MoverStage.guidance)**Guidance** {Guidance}
[](dcei.engine.proto.GuidanceMover)**MessageType: [GuidanceMover](GenericMessage#guidancemover)**

Moves the missile unit linearly towards the target with tracking (like a guided missile).

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.MultiStageMover.MoverStage.ballistic)**Ballistic** {Ballistic}
[](dcei.engine.proto.BallisticMover)**MessageType: [BallisticMover](GenericMessage#ballisticmover)**

Moves the missile unit in a parabolic arc (like a thrown grenade).

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.MultiStageMover.MoverStage.throw)**Throw** {Throw}
[](dcei.engine.proto.ThrowMover)**MessageType: [ThrowMover](GenericMessage#throwmover)**

Moves the missile unit in a fixed direction. Unlike other movers, this mover doesn't move towards the target and will move indefinitely unless some other means of hit detection are used (such as the arrive_on_search_hit flag), or replaced by another mover (either by another launch missile effect, or when used in a multi-stage mover).

[](manual-wiki-start)

[](manual-wiki-end)

# [](dcei.engine.proto.MultiStageMover.MotionOverlay.oneof_overlay_type)**MultiStageMover.MotionOverlay.Overlay Type** {MultiStageMoverMotionOverlayOverlay-Type}

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.MultiStageMover.MotionOverlay.sine_wave)**Sine Wave** {Sine-Wave}
Moves in a sine wave pattern.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.MultiStageMover.SineWaveOverlay.wave_length)**Wave Length** {Wave-Length}
[](dcei.engine.proto.ValueWithRangeAndExpression)**MessageType: [ValueWithRangeAndExpression](GenericMessage#valuewithrangeandexpression)**

The distance between consecutive wave patterns.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.MultiStageMover.MotionOverlay.orbiting)**Orbiting** {Orbiting}
Moves with a circular motion centered around the mover's position without this overlay applied.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.MultiStageMover.OrbitingOverlay.degree_per_second)**Degree Per Second** {Degree-Per-Second}
[](dcei.engine.proto.ValueWithRangeAndExpression)**MessageType: [ValueWithRangeAndExpression](GenericMessage#valuewithrangeandexpression)**

Circular speed in degrees per second.

[](manual-wiki-start)

[](manual-wiki-end)

