<div id="toc" markdown="1">
- [Data\Validator](#datavalidator)
  * [Unit Within Range](#unit-within-range)
  * [Nearby Unit Health](#nearby-unit-health)
  * [Health Value](#health-value)
  * [Troop Amount [Wild Sky]](#troop-amount-wild-sky)
  * [Is Child [Wild Sky]](#is-child-wild-sky)
  * [Unit Filter](#unit-filter)
  * [Combine](#combine)
  * [Unit Engaged [Wild Sky]](#unit-engaged-wild-sky)
  * [Unit Type](#unit-type)
  * [Location Is Lane](#location-is-lane)
  * [Unit Ai Behavior](#unit-ai-behavior)
  * [Wave Started [Wild Sky]](#wave-started-wild-sky)
  * [Unit Stats](#unit-stats)
  * [Point On Navmesh](#point-on-navmesh)
  * [Effect Critical Hit](#effect-critical-hit)
  * [Unit Is Moving](#unit-is-moving)
  * [Point On Cliff](#point-on-cliff)
  * [Expression](#expression)
  * [Negate](#negate)

</div>

***

# [](dcei.engine.proto.Validator)**[Data](Data)\Validator** {dataValidator}

[](manual-wiki-start)
Validators are conditions that evaluate to true or false. Validators can be plugged into other data types and can be used to [remove](Data-Behavior#behavior-validators-remove)/[disable behaviors](Data-Behavior#behavior-validators-disable), add additional checks to determine if a [weapon](Data-Weapon#validators) or [ability](Data-Ability#validators) can fire, or create if/then/elseif style statements within [effects](Data-Effect-Switch-Effect) (among other uses). 
See our notion guide on [Using Validators](https://www.notion.so/funovus/Using-Validators-dcf07ecd524d48548302cd77b9633e29)
[](manual-wiki-end)

## [](dcei.engine.proto.Validator.unit_within_range)**Unit Within Range** {Unit-Within-Range}
Returns true if the specified number of units are found within a search radius.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Validator.UnitWithinRange.range)**Range** {Range}
The radius of the circle to search.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Validator.UnitWithinRange.unit_count_range)**Unit Count Range** {Unit-Count-Range}
[](dcei.engine.proto.ValidatorExpressions.RangeInt)**MessageType: [RangeInt](GenericMessage#validatorexpressionsrangeint)**

Returns true if the number of units found is between this min and max.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Validator.UnitWithinRange.distance_check_mode)**Distance Check Mode** {Distance-Check-Mode}
[](dcei.engine.proto.DistanceCheckModes)**EnumType: [DistanceCheckModes](GenericEnum#distancecheckmodes)**

Determines whether to consider unit radius or center point when finding targets.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Validator.UnitWithinRange.distance_extend_mode)**Distance Extend Mode** {Distance-Extend-Mode}
[](dcei.engine.proto.DistanceExtendModes)**EnumType: [DistanceExtendModes](GenericEnum#distanceextendmodes)**

Determines whether to extend the search radius by the source unit's radius.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Validator.UnitWithinRange.search_filter)**Search Filter** {Search-Filter}
[](dcei.engine.proto.SearchFilter)**MessageType: [SearchFilter](GenericMessage#searchfilter)**


[](manual-wiki-start)
Similar to other search filters.
See: [Data/Effect/Area Search](Data-Effect-Area-Search#filter)
[](manual-wiki-end)

### [](dcei.engine.proto.Validator.UnitWithinRange.target_validators)**Target Validators** {Target-Validators}
Target units must pass these validators to be considered valid targets.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Validator.nearby_unit_health)**Nearby Unit Health** {Nearby-Unit-Health}
Returns true if a number of units are found within a search radius with a specific health value.

[](manual-wiki-start)
Shares many fields with [Unit Within Range](#unit-within-range).
[](manual-wiki-end)

### [](dcei.engine.proto.Validator.NearbyUnitHealth.range)**Range** {Range}
The radius of the circle to search.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Validator.NearbyUnitHealth.unit_count_range)**Unit Count Range** {Unit-Count-Range}
[](dcei.engine.proto.ValidatorExpressions.RangeInt)**MessageType: [RangeInt](GenericMessage#validatorexpressionsrangeint)**

Returns true if the number of units found is between this min and max.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Validator.NearbyUnitHealth.value_type)**Value Type** {Value-Type}
[](dcei.engine.proto.Validator.ValidatorValueType)**EnumType: [Validator.ValidatorValueType](GenericEnum#validatorvalidatorvaluetype)**

Whether the validator will check units' health as an **Absolute** or **Percentage** (between 0 and 1).

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Validator.NearbyUnitHealth.health_value_range)**Health Value Range** {Health-Value-Range}
[](dcei.engine.proto.ValidatorExpressions.RangeDouble)**MessageType: [RangeDouble](GenericMessage#validatorexpressionsrangedouble)**

Returns true if enough units are found with health within this min and max.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Validator.NearbyUnitHealth.check_health_unit_range)**Check Health Unit Range** {Check-Health-Unit-Range}
[](dcei.engine.proto.ValidatorExpressions.RangeInt)**MessageType: [RangeInt](GenericMessage#validatorexpressionsrangeint)**

Determines how many units must be found with the health value specified in **Health Value Range**.

[](manual-wiki-start)
Note that the total number of units found must also satisfy the **Unit Count Range**.
[](manual-wiki-end)

### [](dcei.engine.proto.Validator.NearbyUnitHealth.distance_check_mode)**Distance Check Mode** {Distance-Check-Mode}
[](dcei.engine.proto.DistanceCheckModes)**EnumType: [DistanceCheckModes](GenericEnum#distancecheckmodes)**

Determines whether to consider unit radius or center point when finding targets.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Validator.NearbyUnitHealth.distance_extend_mode)**Distance Extend Mode** {Distance-Extend-Mode}
[](dcei.engine.proto.DistanceExtendModes)**EnumType: [DistanceExtendModes](GenericEnum#distanceextendmodes)**

Determines whether to extend the search radius by the source unit's radius.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Validator.NearbyUnitHealth.search_filter)**Search Filter** {Search-Filter}
[](dcei.engine.proto.SearchFilter)**MessageType: [SearchFilter](GenericMessage#searchfilter)**


[](manual-wiki-start)
Similar to other search filters.
See: [Data/Effect/Area Search](Data-Effect-Area-Search#filter)
[](manual-wiki-end)

## [](dcei.engine.proto.Validator.health_value)**Health Value** {Health-Value}
Returns true if a unit has health within a specific range.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Validator.HealthValue.which_unit)**Which Unit** {Which-Unit}
Which unit will be considered by the validator. Using NONE defaults to TARGET_UNIT.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Validator.HealthValue.health_value_range)**Health Value Range** {Health-Value-Range}
[](dcei.engine.proto.ValidatorExpressions.RangeDouble)**MessageType: [RangeDouble](GenericMessage#validatorexpressionsrangedouble)**

Returns true if the checked unit's health is within this min and max.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Validator.HealthValue.value_type)**Value Type** {Value-Type}
[](dcei.engine.proto.Validator.ValidatorValueType)**EnumType: [Validator.ValidatorValueType](GenericEnum#validatorvalidatorvaluetype)**

Whether the validator will check health as an **Absolute** or **Percentage** (between 0 and 1).

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Validator.troop_amount)**Troop Amount [Wild Sky]** {Troop-Amount-Wild-Sky}
Returns true of the unit has a specified number of child troop units.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Validator.TroopAmount.amount_range)**Amount Range** {Amount-Range}
[](dcei.engine.proto.ValidatorExpressions.RangeInt)**MessageType: [RangeInt](GenericMessage#validatorexpressionsrangeint)**

Returns true of the unit has a specified number of child troop units.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Validator.TroopAmount.unit_type_name)**Unit Type Name** {Unit-Type-Name}
Returns true if enough units are found with health within this min and max.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Validator.is_child)**Is Child [Wild Sky]** {Is-Child-Wild-Sky}
Returns true if the child_unit is a child troop of parent_unit.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Validator.IsChild.child_unit)**Child Unit** {Child-Unit}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Validator.IsChild.parent_unit)**Parent Unit** {Parent-Unit}

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Validator.unit_filter)**Unit Filter** {Unit-Filter}

[](manual-wiki-start)
Returns true if a unit matches a specific [unit type](Data-Unit#unit-type) (unit, missile, or structure).
[](manual-wiki-end)

### [](dcei.engine.proto.Validator.UnitFilter.validate_unit_filter)**Validate Unit Filter** {Validate-Unit-Filter}
[](dcei.engine.proto.UnitComponent.UnitType)**EnumType: [UnitComponent.UnitType](GenericEnum#unitcomponentunittype)**

Returns true if the specified unit is of this type.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Validator.UnitFilter.which_unit)**Which Unit** {Which-Unit}
Which unit will be considered by the validator.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Validator.combine)**Combine** {Combine}
Allows you to combine other validators using logical operators.

[](manual-wiki-start)
Combine validators can be nested. Can be combined with [negate](#negate) for even more logic.
[](manual-wiki-end)

### [](dcei.engine.proto.Validator.Combine.operation)**Operation** {Operation}

[](manual-wiki-start)

[](manual-wiki-end)

>* **AND**: Returns true if all of the listed validators are true.
>* **OR**: Returns true if any of the listed validators are true.

### [](dcei.engine.proto.Validator.Combine.validator_list)**Validator List** {Validator-List}
The list of validators to combine.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Validator.unit_engaged)**Unit Engaged [Wild Sky]** {Unit-Engaged-Wild-Sky}
Returns true if the specified unit is engaged.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Validator.UnitEngaged.which_unit)**Which Unit** {Which-Unit}
Using NONE defaults to TARGET_UNIT.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Validator.unit_type)**Unit Type** {Unit-Type}
Returns true if a unit is of a specific type.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Validator.UnitType.unit_type_name)**Unit Type Name** {Unit-Type-Name}
Returns true if the unit is of this type.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Validator.UnitType.which_unit)**Which Unit** {Which-Unit}
Which unit will be considered by the validator.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Validator.location_is_lane)**Location Is Lane** {Location-Is-Lane}
Returns true if a point is in a lane (as defined in Terrain/WayPoints/Routes).

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Validator.LocationIsLane.target)**Target** {Target}
Which point to check.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Validator.LocationIsLane.ignore_rally_disabled_lanes)**Ignore Rally Disabled Lanes** {Ignore-Rally-Disabled-Lanes}
If enabled, routes using the "Disable Rally" flag won't be considered.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Validator.unit_ai_behavior)**Unit Ai Behavior** {Unit-Ai-Behavior}

[](manual-wiki-start)
Returns true if a unit has the specified [AI Behavior type](Data-Unit#behavior).
[](manual-wiki-end)

### [](dcei.engine.proto.Validator.UnitAiBehavior.behavior_type)**Behavior Type** {Behavior-Type}
[](dcei.engine.proto.BehaviorComponent.BehaviorType)**EnumType: [BehaviorComponent.BehaviorType](GenericEnum#behaviorcomponentbehaviortype)**

Returns true if the unit has this AI behavior type.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Validator.UnitAiBehavior.which_unit)**Which Unit** {Which-Unit}
Which unit will be considered by the validator.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Validator.wave_started)**Wave Started [Wild Sky]** {Wave-Started-Wild-Sky}
Returns true if the first wave has started.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Validator.unit_stats)**Unit Stats** {Unit-Stats}
Returns true if a unit matches the specified unit filter.

[](manual-wiki-start)
Currently only supports checking if the unit is an [air](Data-Unit#unit-stats) unit.
[](manual-wiki-end)

### [](dcei.engine.proto.Validator.UnitStats.which_unit)**Which Unit** {Which-Unit}
Which unit will be considered by the validator.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Validator.UnitStats.air)**Air** {Air}
[](dcei.engine.proto.SearchFilter.Flag)**EnumType: [SearchFilter.Flag](GenericEnum#searchfilterflag)**

Returns true if the unit matches this filter.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Validator.point_on_navmesh)**Point On Navmesh** {Point-On-Navmesh}
Returns true if a point is on the nav mesh.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Validator.PointOnNavmesh.target)**Target** {Target}
Which point to check.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Validator.effect_critical_hit)**Effect Critical Hit** {Effect-Critical-Hit}
Returns true if the effect tree is a critical hit.

[](manual-wiki-start)
Note that this is only relevant for effect trees created by [abilities](Data-Ability#critical-chance) or [weapons](Data-Weapon#critical-chance). 
[](manual-wiki-end)

## [](dcei.engine.proto.Validator.unit_is_moving)**Unit Is Moving** {Unit-Is-Moving}
Returns true if a unit is currently moving.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Validator.UnitIsMoving.which_unit)**Which Unit** {Which-Unit}
Which unit to check. Using NONE defaults to TARGET_UNIT.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Validator.point_on_cliff)**Point On Cliff** {Point-On-Cliff}
Returns true if a point is on the cliff.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Validator.PointOnCliff.location)**Location** {Location}
Which point to check.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Validator.expression)**Expression** {Expression}

[](manual-wiki-start)
Returns the result of the evaluated [expression](Data-Expression). Non-zero numbers are treated as true, 0 is treated as false.
[](manual-wiki-end)

## [](dcei.engine.proto.Validator.negate)**Negate** {Negate}
Flips the result of the validator, similar to the `not` in Lua (true becomes false, false becomes true).

[](manual-wiki-start)

[](manual-wiki-end)

