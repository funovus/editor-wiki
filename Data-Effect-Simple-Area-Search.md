<div id="toc" markdown="1">
- [Data\Effect\Simple Area Search](#dataeffectsimple-area-search)
  * [Debug Draw](#debug-draw)
  * [Area Search Type](#area-search-type)
  * [Max Unit Count](#max-unit-count)
  * [Filter](#filter)
  * [Distance Check Mode](#distance-check-mode)
  * [Effect](#effect)
  * [Missing Effect](#missing-effect)

</div>

***

# [](dcei.engine.proto.Effect.simple_area_search)**[Data](Data)\\[Effect](Data-Effect)\Simple Area Search** {dataEffectSimple-Area-Search}
Searches an area and applies effects to found simple units.

[](manual-wiki-start)
For more info about simple units, see [Simple Units Guide.](https://funovus.notion.site/Simple-Units-Introduction-8a39c47f07d64f4c9549c5947c2c281f)
[](manual-wiki-end)

## [](dcei.engine.proto.EffectSimpleAreaSearch.debug_draw)**Debug Draw** {Debug-Draw}
When checked, shows the area of this search effect in-game.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectSimpleAreaSearch.area_search_type)**Area Search Type** {Area-Search-Type}
[](dcei.engine.proto.AreaSearchType)**MessageType: [AreaSearchType](GenericMessage#areasearchtype)**

Determines whether to search in a circle, arc, rectangle, or the source unit's children units.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectSimpleAreaSearch.max_unit_count)**Max Unit Count** {Max-Unit-Count}
The maximum number of units that will be found by the search.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectSimpleAreaSearch.filter)**Filter** {Filter}
Parameters for which targets are valid for the search.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SimpleSearchFilter.primary_sort_keys)**Primary Sort Keys** {Primary-Sort-Keys}
[](dcei.engine.proto.SimpleSearchFilter.SearchFilterSort)**MessageType: [SearchFilterSort](GenericMessage#simplesearchfiltersearchfiltersort)**

Potential targets are sorted based on these parameters.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SimpleSearchFilter.secondary_sort_keys)**Secondary Sort Keys** {Secondary-Sort-Keys}
[](dcei.engine.proto.SimpleSearchFilter.SearchFilterSort)**MessageType: [SearchFilterSort](GenericMessage#simplesearchfiltersearchfiltersort)**

If a pair of targets have the same priority value due to Primary Sort Keys, this sort key is then used to determine which unit to target.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SimpleSearchFilter.player)**Player** {Player}
[](dcei.engine.proto.SimpleSearchFilter.Flag)**EnumType: [SimpleSearchFilter.Flag](GenericEnum#simplesearchfilterflag)**

Targets owned by the player that created the search will match the filter.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SimpleSearchFilter.ally)**Ally** {Ally}
[](dcei.engine.proto.SimpleSearchFilter.Flag)**EnumType: [SimpleSearchFilter.Flag](GenericEnum#simplesearchfilterflag)**

Targets owned by an ally of the player that created the search will match the filter.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SimpleSearchFilter.enemy)**Enemy** {Enemy}
[](dcei.engine.proto.SimpleSearchFilter.Flag)**EnumType: [SimpleSearchFilter.Flag](GenericEnum#simplesearchfilterflag)**

Targets owned by an enemy of the player that created the search will match the filter.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SimpleSearchFilter.neutral)**Neutral** {Neutral}
[](dcei.engine.proto.SimpleSearchFilter.Flag)**EnumType: [SimpleSearchFilter.Flag](GenericEnum#simplesearchfilterflag)**

Targets that are neutral to the player that created the search will match the filter.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SimpleSearchFilter.is_simple_unit)**Is Simple Unit** {Is-Simple-Unit}
[](dcei.engine.proto.SimpleSearchFilter.Flag)**EnumType: [SimpleSearchFilter.Flag](GenericEnum#simplesearchfilterflag)**

Targets that are simple units will match the filter.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SimpleSearchFilter.has_simple_health)**Has Simple Health** {Has-Simple-Health}
[](dcei.engine.proto.SimpleSearchFilter.Flag)**EnumType: [SimpleSearchFilter.Flag](GenericEnum#simplesearchfilterflag)**

Targets that have simple health components will match the filter.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SimpleSearchFilter.has_simple_collision)**Has Simple Collision** {Has-Simple-Collision}
[](dcei.engine.proto.SimpleSearchFilter.Flag)**EnumType: [SimpleSearchFilter.Flag](GenericEnum#simplesearchfilterflag)**

Targets that have simple collision components will match the filter.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SimpleSearchFilter.has_simple_mover)**Has Simple Mover** {Has-Simple-Mover}
[](dcei.engine.proto.SimpleSearchFilter.Flag)**EnumType: [SimpleSearchFilter.Flag](GenericEnum#simplesearchfilterflag)**

Targets that have simple mover components will match the filter.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.SimpleSearchFilter.has_simple_mass)**Has Simple Mass** {Has-Simple-Mass}
[](dcei.engine.proto.SimpleSearchFilter.Flag)**EnumType: [SimpleSearchFilter.Flag](GenericEnum#simplesearchfilterflag)**

Targets that have simple mass components will match the filter.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectSimpleAreaSearch.distance_check_mode)**Distance Check Mode** {Distance-Check-Mode}
[](dcei.engine.proto.DistanceCheckModes)**EnumType: [DistanceCheckModes](GenericEnum#distancecheckmodes)**

Determines whether to consider unit radius or center point when finding targets.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectSimpleAreaSearch.effect)**Effect** {Effect}
The effect created on targets found by the search.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectSimpleAreaSearch.missing_effect)**Missing Effect** {Missing-Effect}
This effect is created if the number of targets found is less than the Max Unit Count (if set). This effect is created for each missing target. Ex: if the Max Unit Count is 3 but only 1 target is found, then the Effect will executed once on the target and the Missing Effect will be executed twice at the search location.

[](manual-wiki-start)

[](manual-wiki-end)

