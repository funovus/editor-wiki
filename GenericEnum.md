<div id="toc" markdown="1">
- [Data\Generic Enum](#datageneric-enum)
- [UnitActor.SelectionShape](#unitactorselectionshape)
- [SpriteOptions.RenderingGroup](#spriteoptionsrenderinggroup)
- [SiteOperation.OrientationType](#siteoperationorientationtype)
- [BehaviorComponent.BehaviorType](#behaviorcomponentbehaviortype)
- [SearchFilter.FilterSortMethod](#searchfilterfiltersortmethod)
- [SearchFilter.FilterSortOrder](#searchfilterfiltersortorder)
- [SearchFilter.Flag](#searchfilterflag)
- [EffectUnitTarget.Type](#effectunittargettype)
- [EffectTarget.Type](#effecttargettype)
- [DistanceCheckModes](#distancecheckmodes)
- [DistanceExtendModes](#distanceextendmodes)
- [EffectAreaSearch.IncludeFlags](#effectareasearchincludeflags)
- [EffectPersistent.SelectMode](#effectpersistentselectmode)
- [EffectTargetType.Type](#effecttargettypetype)
- [ValueType](#valuetype)
- [EffectModifyUnit.ModifyType](#effectmodifyunitmodifytype)
- [SimpleSearchFilter.FilterSortMethod](#simplesearchfilterfiltersortmethod)
- [SimpleSearchFilter.FilterSortOrder](#simplesearchfilterfiltersortorder)
- [SimpleSearchFilter.Flag](#simplesearchfilterflag)
- [ThrowMover.OrientationType](#throwmoverorientationtype)
- [Validator.ValidatorValueType](#validatorvalidatorvaluetype)
- [UnitComponent.UnitType](#unitcomponentunittype)
- [ValidatorExpressions.UnitLocation](#validatorexpressionsunitlocation)

</div>

***

# [](Generic_Enum)**[Data](Data)\Generic Enum** {dataGeneric-Enum}

[](manual-wiki-start)

[](manual-wiki-end)

# [](dcei.engine.proto.UnitActor.SelectionShape)**UnitActor.SelectionShape** {UnitActorSelectionShape}

[](manual-wiki-start)

[](manual-wiki-end)

>* **SPHERE**: The actor will use a sphere shape for hit tests (default)
>* **CUBE**: The actor will use a cube shape for hit tests

# [](dcei.engine.proto.SpriteOptions.RenderingGroup)**SpriteOptions.RenderingGroup** {SpriteOptionsRenderingGroup}

[](manual-wiki-start)

[](manual-wiki-end)

>* **BACKGROUND**: Background sprites are rendered below shadow and other sprites. To make the sprite render below units, put the sprite further away from the camera.
>* **FOREGROUND**: Foreground sprites are rendered above shadow and background sprites. To make the sprite render above units, put the sprite closer to the camera.
>* **OVERLAY**: Overlay sprites are rendered above all other objects except for UI.

# [](dcei.engine.proto.SiteOperation.OrientationType)**SiteOperation.OrientationType** {SiteOperationOrientationType}

[](manual-wiki-start)

[](manual-wiki-end)

>* **WORLD_ORIENTATION**: Sets the site operation relative to world facing (north is up).
>* **ACTOR_ORIENTATION**: Sets the site operation relative to the actor's facing.
>* **ACTOR_ORIENTATION_IGNORING_OTHER_SITE_OPERATIONS**: Sets the site operation relative to the actor's facing before any other site operations are applied.
>* **EVENT_ORIENTATION**: Makes the actor face the source of the triggering event (supports **Unit Weapon Start** and **Unit Ability Start**).
>* **MOVE_ORIENTATION**: Makes the actor's orientation align with its 3D movement vector.

# [](dcei.engine.proto.BehaviorComponent.BehaviorType)**BehaviorComponent.BehaviorType** {BehaviorComponentBehaviorType}

[](manual-wiki-start)

[](manual-wiki-end)

>* **DO_NOTHING**: The unit has no AI behavior.
>* **GENERIC_CONTROLLABLE_UNIT**: The unit has basic RTS behavior.
>* **TD_HERO**: The unit is a WildSky TD hero.
>* **TD_HERO_PET**: The unit is a WildSky TD hero pet.
>* **TD_TOWER**: The unit is a WildSky TD tower.
>* **TD_TOWER_TROOP**: The unit is a WildSky TD tower troop.
>* **TD_CREEP**: The unit is a WildSky TD creep.
>* **TD_CREEP_AGGRESSIVE**: The unit is a WildSky TD creep that actively searches for targets.
>* **TD_CreepNoEngage**: The unit is a WildSky TD non-aggressive creep.
>* **TD_JUNGLE_CREEP**: The unit is a WildSky TD jungle creep.
>* **TD_SHIP**: The unit is a WildSky TD ship.
>* **TD_SUMMONED_TROOP**: The unit is a WildSky TD summoned troop.
>* **WANDER**: The unit wanders aimlessly.

# [](dcei.engine.proto.SearchFilter.FilterSortMethod)**SearchFilter.FilterSortMethod** {SearchFilterFilterSortMethod}

[](manual-wiki-start)

[](manual-wiki-end)

>* **NONE**: Targets are sorted randomly.
>* **TARGET_PRIORITY**: Targets are sorted by target priority.
>* **REMAINING_PATH_DISTANCE**: Targets are sorted by waypoints distance.
>* **DISTANCE_TO_SEARCH_CENTER**: Targets are sorted by proximity to search center.
>* **HEALTH_VALUE**: Targets are sorted by current health.
>* **HEALTH_MAX**: Targets are sorted by total health.
>* **HEALTH_FRACTION**: Targets are sorted by health percentage.
>* **VITALS**: Targets are sorted by current health + shield.
>* **VITALS_MAX**: Targets are sorted by total health + shield.
>* **VITALS_FRACTION**: Targets are sorted by health + shield percentage.
>* **SHIELD_VALUE**: Targets are sorted by current shield value.
>* **SHIELD_MAX**: Targets are sorted by total shield value.
>* **SHIELD_FRACTION**: Targets are sorted by shield percentage.
>* **ENGAGED**: Targets are sorted by engaged state.
>* **UNIT_COST**: Targets are sorted by cost.
>* **DISTANCE_TO_EFFECT_SOURCE**: Targets are sorted by distance to the effect source.

# [](dcei.engine.proto.SearchFilter.FilterSortOrder)**SearchFilter.FilterSortOrder** {SearchFilterFilterSortOrder}

[](manual-wiki-start)

[](manual-wiki-end)

>* **LOWEST_FIRST**: Values are sorted from lowest to highest.
>* **HIGHEST_FIRST**: Values are sorted from highest to lowest.

# [](dcei.engine.proto.SearchFilter.Flag)**SearchFilter.Flag** {SearchFilterFlag}

[](manual-wiki-start)

[](manual-wiki-end)

>* **ALLOWED**: If the target has this type, it is still valid.
>* **REQUIRED**: The target must have this type in order to be valid.
>* **EXCLUDED**: If the target has this type it is invalid, even if it has a required type.

# [](dcei.engine.proto.EffectUnitTarget.Type)**EffectUnitTarget.Type** {EffectUnitTargetType}

[](manual-wiki-start)

[](manual-wiki-end)

>* **NONE**: 
>* **TARGET_UNIT**: the target unit of the previous effect, weapon, ability, or behavior.
>* **SOURCE_UNIT**: the last unit involved in the effect tree (a previous target, spawned unit, or missile).
>* **CASTER_UNIT**: the first unit involved in the effect tree (typically the unit that used the weapon or ability).

# [](dcei.engine.proto.EffectTarget.Type)**EffectTarget.Type** {EffectTargetType}

[](manual-wiki-start)

[](manual-wiki-end)

>* **NONE**: 
>* **TARGET_UNIT**: 
>* **TARGET_LOCATION**: 
>* **TARGET_UNIT_OR_LOCATION**: 
>* **SOURCE_UNIT**: 
>* **SOURCE_LOCATION**: 
>* **SOURCE_UNIT_OR_LOCATION**: 
>* **CASTER_UNIT**: 
>* **CASTER_LOCATION**: 
>* **CASTER_UNIT_OR_LOCATION**: 

# [](dcei.engine.proto.DistanceCheckModes)**DistanceCheckModes** {DistanceCheckModes}

[](manual-wiki-start)

[](manual-wiki-end)

>* **CHECK_CLOSEST_EDGE**: Targets are considered to be in-range if the outer edge of their radius is in-range.
>* **CHECK_CENTER_ONLY**: Targets are considered to be in-range if their center position is in-range.

# [](dcei.engine.proto.DistanceExtendModes)**DistanceExtendModes** {DistanceExtendModes}

[](manual-wiki-start)

[](manual-wiki-end)

>* **NO_EXTEND**: The caster's radius is not added to the ability's range.
>* **INCLUDE_SOURCE_UNIT_RADIUS**: The caster's radius is added to the ability's range.

# [](dcei.engine.proto.EffectAreaSearch.IncludeFlags)**EffectAreaSearch.IncludeFlags** {EffectAreaSearchIncludeFlags}

[](manual-wiki-start)

[](manual-wiki-end)

>* **NORMAL**: Use default settings for this unit.
>* **INCLUDE**: This unit will always be included in the search.
>* **EXCLUDE**: This unit will always be excluded in the search.

# [](dcei.engine.proto.EffectPersistent.SelectMode)**EffectPersistent.SelectMode** {EffectPersistentSelectMode}
Determines how the periodic duration, effect, or offset is selected.

[](manual-wiki-start)

[](manual-wiki-end)

>* **SEQUENCE**: Values are selected in order from top to bottom.
>* **RANDOM**: Values are selected randomly with no additional rules.
>* **RANDOM_NO_REPEAT**: Values are selected randomly with no sequentially repeating values (if possible).
>* **RANDOM_SHUFFLE**: Values will be put in a random order and then selected in that order.

# [](dcei.engine.proto.EffectTargetType.Type)**EffectTargetType.Type** {EffectTargetTypeType}

[](manual-wiki-start)

[](manual-wiki-end)

>* **NONE**: 
>* **UNIT**: 
>* **LOCATION**: 
>* **UNIT_OR_LOCATION**: 

# [](dcei.engine.proto.ValueType)**ValueType** {ValueType}

[](manual-wiki-start)

[](manual-wiki-end)

>* **PERCENTAGE**: Use percentage values.
>* **VALUE**: Use a literal value.

# [](dcei.engine.proto.EffectModifyUnit.ModifyType)**EffectModifyUnit.ModifyType** {EffectModifyUnitModifyType}

[](manual-wiki-start)

[](manual-wiki-end)

>* **NONE_MODIFY_TYPE**: 
>* **ADD**: Add the amount to current amount.
>* **SET**: Set current amount.

# [](dcei.engine.proto.SimpleSearchFilter.FilterSortMethod)**SimpleSearchFilter.FilterSortMethod** {SimpleSearchFilterFilterSortMethod}

[](manual-wiki-start)

[](manual-wiki-end)

>* **NONE**: Targets are sorted randomly.
>* **DISTANCE_TO_SEARCH_CENTER**: Targets are sorted by proximity to search center.
>* **DISTANCE_TO_EFFECT_SOURCE**: Targets are sorted by distance to the effect source.

# [](dcei.engine.proto.SimpleSearchFilter.FilterSortOrder)**SimpleSearchFilter.FilterSortOrder** {SimpleSearchFilterFilterSortOrder}

[](manual-wiki-start)

[](manual-wiki-end)

>* **LOWEST_FIRST**: Values are sorted from lowest to highest.
>* **HIGHEST_FIRST**: Values are sorted from highest to lowest.

# [](dcei.engine.proto.SimpleSearchFilter.Flag)**SimpleSearchFilter.Flag** {SimpleSearchFilterFlag}

[](manual-wiki-start)

[](manual-wiki-end)

>* **ALLOWED**: If the target has this type, it is still valid.
>* **REQUIRED**: The target must have this type in order to be valid.
>* **EXCLUDED**: If the target has this type it is invalid, even if it has a required type.

# [](dcei.engine.proto.ThrowMover.OrientationType)**ThrowMover.OrientationType** {ThrowMoverOrientationType}

[](manual-wiki-start)

[](manual-wiki-end)

>* **TARGET_ORIENTATION**: Orientation is relative to the direction from launch position to target position ignoring height differences.
>* **WORLD_ORIENTATION**: Orientation is relative to world facing (i.e., north).

# [](dcei.engine.proto.Validator.ValidatorValueType)**Validator.ValidatorValueType** {ValidatorValidatorValueType}

[](manual-wiki-start)

[](manual-wiki-end)

>* **NONE**: Defaults to using absolute value.
>* **ABSOLUTE**: Use a literal value for comparison.
>* **PERCENTAGE**: Use percentage values for comparison (between 0 and 1).

# [](dcei.engine.proto.UnitComponent.UnitType)**UnitComponent.UnitType** {UnitComponentUnitType}

[](manual-wiki-start)

[](manual-wiki-end)

>* **UNIT**: The unit type is unit
>* **MISSILE**: The unit type is missile
>* **STRUCTURE**: The unit type is structure

# [](dcei.engine.proto.ValidatorExpressions.UnitLocation)**ValidatorExpressions.UnitLocation** {ValidatorExpressionsUnitLocation}

[](manual-wiki-start)

[](manual-wiki-end)

>* **CASTER_UNIT**: The first unit involved in the effect tree (typically the unit that used the weapon or ability).
>* **SOURCE_UNIT**: The last unit involved in the effect tree (a previous target, spawned unit, or missile).
>* **TARGET_UNIT**: The target unit of the previous effect, weapon, ability, or behavior.

