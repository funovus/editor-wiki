<div id="toc" markdown="1">
- [Data\Effect\Launch Missile](#dataeffectlaunch-missile)
  * [Target Type](#target-type)
  * [Missile Unit](#missile-unit)
  * [Missile Death Type](#missile-death-type)
  * [Start Effect](#start-effect)
  * [Impact Effect](#impact-effect)
  * [Launch Location](#launch-location)
  * [Impact Location](#impact-location)
  * [Offset Start](#offset-start)
  * [Offset End](#offset-end)
  * [Launch Offset](#launch-offset)
  * [Impact Offset](#impact-offset)
  * [Use Missile Height At Destination](#use-missile-height-at-destination)
  * [Missile Effect](#missile-effect)
  * [Mover](#mover)
  * [Area Search Effect](#area-search-effect)
  * [Simple Area Search Effect](#simple-area-search-effect)
  * [Arrive On Search Hit](#arrive-on-search-hit)
  * [Dynamic Search Area](#dynamic-search-area)
  * [Unique Targets Only](#unique-targets-only)

</div>

***

# [](dcei.engine.proto.Effect.launch_missile)**[Data](Data)\\[Effect](Data-Effect)\Launch Missile** {dataEffectLaunch-Missile}
Launches a missile unit at a target unit or location.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectLaunchMissile.target_type)**Target Type** {Target-Type}
Determines the target type for the effect.


[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectLaunchMissile.missile_unit)**Missile Unit** {Missile-Unit}
The type of Unit used as a missile. If set to **None**, the unit specified in launch location will be used (typically caster or target, useful to create knockback effects).

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectLaunchMissile.missile_death_type)**Missile Death Type** {Missile-Death-Type}
Determines what happens to the missile unit on impact.

[](manual-wiki-start)

[](manual-wiki-end)

>* **IMPACT**: The missile unit will be removed on impact.
>* **NONE**: The missile unit will persist after impact (useful for knockback effects).

## [](dcei.engine.proto.EffectLaunchMissile.start_effect)**Start Effect** {Start-Effect}
The effect created when the missile is launched.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectLaunchMissile.impact_effect)**Impact Effect** {Impact-Effect}
The effect created when the missile impacts its target.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectLaunchMissile.launch_location)**Launch Location** {Launch-Location}
Where the missile will be launched from.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectLaunchMissile.impact_location)**Impact Location** {Impact-Location}
Where the missile will impact.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectLaunchMissile.offset_start)**Offset Start** {Offset-Start}
Offset start & end together determines the "facing" of this effect. This facing will be used to interpret offsets and also will be used as the initial facing of the created missile unit.
If offset start & end are both set to non-none values and the specified locations don't overlap, the effect will face from start to end.
If offset start & end are both specified but are overlapping, and the offset start is an unit (e.g., caster unit), the facing of that unit will be used.
If offset start & end are not specified, or specified but cannot determine the facing using the above rules, the facing will be determined by launch & impact location instead using the same rules as above.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectLaunchMissile.offset_end)**Offset End** {Offset-End}
Used in combination with Offset Start to determine the facing of this effect. If both are set to a unit, the effect will use that unit's facing.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectLaunchMissile.launch_offset)**Launch Offset** {Launch-Offset}
[](dcei.engine.proto.EffectOffset)**MessageType: [EffectOffset](GenericMessage#effectoffset)**

The offset coordinates for the missile's launch location. Offsets are relative to the effect's facing.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectLaunchMissile.impact_offset)**Impact Offset** {Impact-Offset}
[](dcei.engine.proto.EffectOffset)**MessageType: [EffectOffset](GenericMessage#effectoffset)**

The offset coordinates for the missile's impact location. Offsets are relative to the effect's facing.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectLaunchMissile.use_missile_height_at_destination)**Use Missile Height At Destination** {Use-Missile-Height-At-Destination}
When checked, the missile unit's height will be considered when when calculating the impact location.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectLaunchMissile.missile_effect)**Missile Effect** {Missile-Effect}
The effect applied to the missile when it's created.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectLaunchMissile.mover)**Mover** {Mover}
The mover that determines how the missile will travel.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectLaunchMissile.area_search_effect)**Area Search Effect** {Area-Search-Effect}
Tie a Search effect to a missile unit, which will apply every update

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectLaunchMissile.simple_area_search_effect)**Simple Area Search Effect** {Simple-Area-Search-Effect}
Tie a Simple Search Effect to a missile unit, which will apply every update

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectLaunchMissile.arrive_on_search_hit)**Arrive On Search Hit** {Arrive-On-Search-Hit}
This flag specifies if the Missile counts as "HitTarget" (reached it's destination) if the missile "Search Effect" finds a target.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectLaunchMissile.dynamic_search_area)**Dynamic Search Area** {Dynamic-Search-Area}
If set, if the search effect is a rectangular search, the length will automatically extend to make sure there are no gaps in the search radiuses, based on the speed of the projectile.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectLaunchMissile.unique_targets_only)**Unique Targets Only** {Unique-Targets-Only}
If set, this search effect will only impact a target once per source. E.g., enabling this would prevent a target from being hit multiple times from different instances of a search effect originating from a single missile.

[](manual-wiki-start)

[](manual-wiki-end)

