<div id="toc" markdown="1">
- [Data\Effect\Area Search](#dataeffectarea-search)
  * [Debug Draw](#debug-draw)
  * [Distance Check Mode](#distance-check-mode)
  * [Distance Extend Mode](#distance-extend-mode)
  * [Area Search Type](#area-search-type)
  * [Max Unit Count](#max-unit-count)
  * [Caster](#caster)
  * [Source](#source)
  * [Target](#target)
  * [Filter](#filter)
  * [Validators](#validators)
  * [Required Tag Names](#required-tag-names)
  * [Excluded Tag Names](#excluded-tag-names)
  * [Effect](#effect)
  * [Missing Effect](#missing-effect)
  * [Repeated Target Cooldown](#repeated-target-cooldown)
  * [Location](#location)
  * [Use Source Facing](#use-source-facing)
  * [Facing Adjustment](#facing-adjustment)
  * [Offset Start](#offset-start)
  * [Offset End](#offset-end)
  * [Offset](#offset)

</div>

***

# [](dcei.engine.proto.Effect.area_search)**[Data](Data)\\[Effect](Data-Effect)\Area Search** {dataEffectArea-Search}
Searches an area and applies effects to found targets.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectAreaSearch.debug_draw)**Debug Draw** {Debug-Draw}
When checked, shows the area of this search effect in-game.

[](manual-wiki-start)
Useful for debugging effects.
[](manual-wiki-end)

## [](dcei.engine.proto.EffectAreaSearch.distance_check_mode)**Distance Check Mode** {Distance-Check-Mode}
[](dcei.engine.proto.DistanceCheckModes)**EnumType: [DistanceCheckModes](GenericEnum#distancecheckmodes)**

Determines whether to consider unit radius or center point when finding targets.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectAreaSearch.distance_extend_mode)**Distance Extend Mode** {Distance-Extend-Mode}
[](dcei.engine.proto.DistanceExtendModes)**EnumType: [DistanceExtendModes](GenericEnum#distanceextendmodes)**

Determines whether to extend the search radius by the source unit's radius.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectAreaSearch.area_search_type)**Area Search Type** {Area-Search-Type}
[](dcei.engine.proto.AreaSearchType)**MessageType: [AreaSearchType](GenericMessage#areasearchtype)**

Determines whether to search in a circle, arc, rectangle, or the source unit's children units.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectAreaSearch.max_unit_count)**Max Unit Count** {Max-Unit-Count}
The maximum number of units that will be found by the search.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectAreaSearch.caster)**Caster** {Caster}
[](dcei.engine.proto.EffectAreaSearch.IncludeFlags)**EnumType: [EffectAreaSearch.IncludeFlags](GenericEnum#effectareasearchincludeflags)**

Whether to automatically include or exclude the effect caster.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectAreaSearch.source)**Source** {Source}
[](dcei.engine.proto.EffectAreaSearch.IncludeFlags)**EnumType: [EffectAreaSearch.IncludeFlags](GenericEnum#effectareasearchincludeflags)**

Whether to automatically include or exclude the effect source.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectAreaSearch.target)**Target** {Target}
[](dcei.engine.proto.EffectAreaSearch.IncludeFlags)**EnumType: [EffectAreaSearch.IncludeFlags](GenericEnum#effectareasearchincludeflags)**

Whether to automatically include or exclude the effect target.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectAreaSearch.filter)**Filter** {Filter}
[](dcei.engine.proto.SearchFilter)**MessageType: [SearchFilter](GenericMessage#searchfilter)**

Parameters for which targets are valid for the search.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectAreaSearch.validators)**Validators** {Validators}
Targets must pass these validators to be considered valid targets.

[](manual-wiki-start)
See: [Data/Validator](Data-Validator).
[](manual-wiki-end)

## [](dcei.engine.proto.EffectAreaSearch.required_tag_names)**Required Tag Names** {Required-Tag-Names}
If set, units must have these tags to be considered valid targets.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectAreaSearch.excluded_tag_names)**Excluded Tag Names** {Excluded-Tag-Names}
If set, units with these tags will be excluded from the search.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectAreaSearch.effect)**Effect** {Effect}
The effect created on targets found by the search.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectAreaSearch.missing_effect)**Missing Effect** {Missing-Effect}
This effect is created if the number of targets found is less than the Max Unit Count (if set). This effect is created for each missing target. Ex: if the Max Unit Count is 3 but only 1 target is found, then the Effect will executed once on the target and the Missing Effect will be executed twice at the search location.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectAreaSearch.repeated_target_cooldown)**Repeated Target Cooldown** {Repeated-Target-Cooldown}
When set, targets found by this search effect will be excluded from other instances of this search effect within its effect tree for the duration. This is useful for making abilities with overlapping search effects where you only want to hit each target once.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectAreaSearch.location)**Location** {Location}
Where the search is created.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectAreaSearch.use_source_facing)**Use Source Facing** {Use-Source-Facing}
If checked, the search's facing will be set to the source unit's facing (before facing adjustment is applied).

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectAreaSearch.facing_adjustment)**Facing Adjustment** {Facing-Adjustment}
The angle to offset the search's facing by.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectAreaSearch.offset_start)**Offset Start** {Offset-Start}
Used in combination with Offset End to determine the facing of this effect. If both are set to a unit, the effect will use that unit's facing.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectAreaSearch.offset_end)**Offset End** {Offset-End}
Used in combination with Offset Start to determine the facing of this effect. If both are set to a unit, the effect will use that unit's facing.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectAreaSearch.offset)**Offset** {Offset}
[](dcei.engine.proto.EffectOffset)**MessageType: [EffectOffset](GenericMessage#effectoffset)**

The offset coordinates for this effect.

[](manual-wiki-start)

[](manual-wiki-end)

