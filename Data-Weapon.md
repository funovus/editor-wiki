<div id="toc" markdown="1">
- [Data\Weapon](#dataweapon)
  * [Template](#template)
  * [Parent](#parent)
  * [Family](#family)
  * [Effect](#effect)
  * [Critical Chance](#critical-chance)
  * [Critical Effect](#critical-effect)
  * [Independent Target Acquisition](#independent-target-acquisition)
  * [Independent Pre And Back Swing](#independent-pre-and-back-swing)
  * [Can Fire While Moving](#can-fire-while-moving)
  * [Channeled](#channeled)
  * [Force Cast Followthrough](#force-cast-followthrough)
  * [No Turn Outside Of Arc](#no-turn-outside-of-arc)
  * [Validators](#validators)
  * [Stats](#stats)
  * [Distance Check Mode](#distance-check-mode)
  * [Distance Extend Mode](#distance-extend-mode)
  * [Target Filter](#target-filter)
  * [Disabled](#disabled)

</div>

***

# [](dcei.engine.proto.Weapon)**[Data](Data)\Weapon** {dataWeapon}

[](manual-wiki-start)
Weapons are used to create auto-attacks for units. Similar to abilities, weapons create effect trees that determine their functionality. 
**Common Weapon Patterns**
* **Melee Weapon**: Weapon > [Damage](Data-Effect-Damage)
* **Melee Weapon (AOE)**: Weapon > [Area Search](Data-Effect-Area-Search) > [Damage](Data-Effect-Damage)
* **Ranged Weapon**: Weapon > [Launch Missile](Data-Effect-Launch-Missile) > [Damage](Data-Effect-Damage)
[](manual-wiki-end)

## [](dcei.engine.proto.Weapon.template)**Template** {Template}
[](GenericField.template)**FieldType: [Template](GenericField#template)**


[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Weapon.parent)**Parent** {Parent}
[](GenericField.parent)**FieldType: [Parent](GenericField#parent)**


[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Weapon.family)**Family** {Family}
Used for enabling/disabling families of weapons via behaviors.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Weapon.effect)**Effect** {Effect}
The Effect created by the weapon on the target unit.

[](manual-wiki-start)
See: [Data/Effect](Data-Effect)
[](manual-wiki-end)

## [](dcei.engine.proto.Weapon.critical_chance)**Critical Chance** {Critical-Chance}
The chance that the weapon attack is considered a critical. The value is a fraction, so 0 is 0% chance and 1 is 100% chance of critical hit.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Weapon.critical_effect)**Critical Effect** {Critical-Effect}
The effect that is executed instead of the Effect when the ability is a critical. If this is not set, the default Effect will be used on critical instead.

[](manual-wiki-start)
See: [Data/Effect](Data-Effect)
[](manual-wiki-end)

## [](dcei.engine.proto.Weapon.independent_target_acquisition)**Independent Target Acquisition** {Independent-Target-Acquisition}
If this is set, this weapon can acquire its own target and search for a target.

[](manual-wiki-start)
When checked, the weapon can acquire its own target, rather than being limited to the current target of the unit. This is useful for making secondary weapons.
[](manual-wiki-end)

## [](dcei.engine.proto.Weapon.independent_pre_and_back_swing)**Independent Pre And Back Swing** {Independent-Pre-And-Back-Swing}
If this is checked, this weapon can fire when other weapons are in pre or back swing stage.

[](manual-wiki-start)
When checked, the weapon can be fired while other weapons on the unit are in preswing/backswing state. Otherwise only weapon can be fired at a time.
[](manual-wiki-end)

## [](dcei.engine.proto.Weapon.can_fire_while_moving)**Can Fire While Moving** {Can-Fire-While-Moving}
If this is checked, using this weapon will not stop movement.

[](manual-wiki-start)
When checked, allows the weapon to be used while the unit is moving.
[](manual-wiki-end)

## [](dcei.engine.proto.Weapon.channeled)**Channeled** {Channeled}
If this is checked, this weapon will be a channelling weapon along with a channeling persistent effect

[](manual-wiki-start)
When checked, the weapon will function as a channeled weapon if the [effect](#effect) is a [persistent](Data-Effect-Persistent) effect.
Channeled weapons will continuously fire after the [Pre Swing](#pre-swing), using data from the persistent effect:
* The [periodic durations](Data-Effect-Persistent#periodic-durations) as the channeled tick rate. 
* The [periodic effects](Data-Effect-Persistent#periodic-effects) as the channeled effects each tick rate.
* The [periodic count](Data-Effect-Persistent#periodic-count) for will be ignored, as the weapon will fire continuously as long as it has a valid target.
[](manual-wiki-end)

## [](dcei.engine.proto.Weapon.force_cast_followthrough)**Force Cast Followthrough** {Force-Cast-Followthrough}
If target dies, this flag will keep the weapon firing to the last valid target position

[](manual-wiki-start)
When checked, the weapon will continue firing and execute its effect if the target dies or becomes invalid during the [Pre Swing](#pre-swing), rather than canceling the attack (and attack animation).
This tends to make ranged weapon attack animations look better when facing many targets as it prevents the unit from continuously canceling animations.
[](manual-wiki-end)

## [](dcei.engine.proto.Weapon.no_turn_outside_of_arc)**No Turn Outside Of Arc** {No-Turn-Outside-Of-Arc}
If the flag is set and target is out of arc, this weapon cannot be used to attack

[](manual-wiki-start)
When checked, the unit won't turn to face targets that are outside of the primary weapon [arc](#arc). This is useful for units that are not meant to turn (such as in shoot-em-up type games).
[](manual-wiki-end)

## [](dcei.engine.proto.Weapon.validators)**Validators** {Validators}
Weapon does not execute if any validator fails (does not trigger cost or cooldown)

[](manual-wiki-start)
Each [validator](Data-Validator) must succeed in order for the weapon to be able to be fire.
[](manual-wiki-end)

## [](dcei.engine.proto.Weapon.stats)**Stats** {Stats}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.WeaponStats.pre_swing)**Pre Swing** {Pre-Swing}
The delay between the weapon starting to fire and the effect being executed.

[](manual-wiki-start)
Used with [Back Swing](#back-swing) for the purposes of animating the unit.
[](manual-wiki-end)

### [](dcei.engine.proto.WeaponStats.random_preswing_delay_min)**Random Preswing Delay Min** {Random-Preswing-Delay-Min}
The minimum random delay added to the weapon's Pre Swing stats. Supports negative numbers.

[](manual-wiki-start)
Useful for preventing groups of units that share the same weapon from firing in sync.
[](manual-wiki-end)

### [](dcei.engine.proto.WeaponStats.random_preswing_delay_max)**Random Preswing Delay Max** {Random-Preswing-Delay-Max}
The maximum random delay added to the weapon's Pre Swing stats. Supports negative numbers.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.WeaponStats.back_swing)**Back Swing** {Back-Swing}
The delay between the effect being executed and the weapon firing state ending.

[](manual-wiki-start)
Used with [Pre Swing](#pre-swing) for the purposes of animating the unit. The sum of [Pre Swing](#pre-swing) plus [Back Swing](#back-swing) is the minimum cooldown of the weapon.
[](manual-wiki-end)

### [](dcei.engine.proto.WeaponStats.period)**Period** {Period}
The cooldown of the weapon or how long the unit must wait to use it again.

[](manual-wiki-start)
The duration of the cooldown is effectively extended by the [Pre Swing](#pre-swing), as the period doesn't begin counting down until after the damage point.
[](manual-wiki-end)

### [](dcei.engine.proto.WeaponStats.use_initial_cooldown)**Use Initial Cooldown** {Use-Initial-Cooldown}
If checked, this weapon will start on cooldown.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.WeaponStats.use_cooldown_on_enable)**Use Cooldown On Enable** {Use-Cooldown-On-Enable}
If checked, this weapon will enter cooldown when it is disabled then enabled.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.WeaponStats.minimal_range)**Minimal Range** {Minimal-Range}
The minimum distance the weapon can fire at.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.WeaponStats.range)**Range** {Range}
The maximum distance the weapon can fire at.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.WeaponStats.scan_range)**Scan Range** {Scan-Range}
The range that the unit will use to search for targets to acquire when using this weapon.

[](manual-wiki-start)
Typically set to the same value as [Range](#range).
[](manual-wiki-end)

### [](dcei.engine.proto.WeaponStats.arc)**Arc** {Arc}
The angle in front of the caster that targets must be in. If the target is outside this arc, the caster will attempt to turn to face the target before casting.

[](manual-wiki-start)
Example: Arc 360 means the ability can be cast in any direction, 90 is a cone in front, and 0 is directly facing the target.
[](manual-wiki-end)

### [](dcei.engine.proto.WeaponStats.buffer_range)**Buffer Range** {Buffer-Range}
Determines the distance targets must move beyond of the weapon range that will cause the weapon to cancel during pre swing. The default value of 0 causes the buffer range to be infinite.

[](manual-wiki-start)
Determines the distance targets must move beyond of the weapon range that will cause the weapon to cancel during pre swing. The default value of 0 causes the buffer range to be infinite.
[](manual-wiki-end)

## [](dcei.engine.proto.Weapon.distance_check_mode)**Distance Check Mode** {Distance-Check-Mode}
[](dcei.engine.proto.DistanceCheckModes)**EnumType: [DistanceCheckModes](GenericEnum#distancecheckmodes)**


[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Weapon.distance_extend_mode)**Distance Extend Mode** {Distance-Extend-Mode}
[](dcei.engine.proto.DistanceExtendModes)**EnumType: [DistanceExtendModes](GenericEnum#distanceextendmodes)**


[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Weapon.target_filter)**Target Filter** {Target-Filter}
Used to determine the valid target types for the weapon.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.WeaponSearchFilter.primary_sort_keys)**Primary Sort Keys** {Primary-Sort-Keys}
Potential targets are sorted based on these parameters.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.WeaponSearchFilter.PrimarySort.key)**Key** {Key}
[](dcei.engine.proto.SearchFilter.FilterSortMethod)**EnumType: [SearchFilter.FilterSortMethod](GenericEnum#searchfilterfiltersortmethod)**

The method used to sort potential targets.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.WeaponSearchFilter.PrimarySort.order)**Order** {Order}
[](dcei.engine.proto.SearchFilter.FilterSortOrder)**EnumType: [SearchFilter.FilterSortOrder](GenericEnum#searchfilterfiltersortorder)**

The order in which potential targets are sorted for priority.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.WeaponSearchFilter.secondary_sort_keys)**Secondary Sort Keys** {Secondary-Sort-Keys}
If a pair of targets have the same priority value due to Primary Sort Keys, this sort key is then used to determine which unit to target.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.WeaponSearchFilter.SecondarySort.key)**Key** {Key}
[](dcei.engine.proto.SearchFilter.FilterSortMethod)**EnumType: [SearchFilter.FilterSortMethod](GenericEnum#searchfilterfiltersortmethod)**

The method used to sort potential targets.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.WeaponSearchFilter.SecondarySort.order)**Order** {Order}
[](dcei.engine.proto.SearchFilter.FilterSortOrder)**EnumType: [SearchFilter.FilterSortOrder](GenericEnum#searchfilterfiltersortorder)**

The order in which potential targets are sorted for priority.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.WeaponSearchFilter.player)**Player** {Player}
[](dcei.engine.proto.SearchFilter.Flag)**EnumType: [SearchFilter.Flag](GenericEnum#searchfilterflag)**

Targets owned by the player that created the search will match the filter.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.WeaponSearchFilter.ally)**Ally** {Ally}
[](dcei.engine.proto.SearchFilter.Flag)**EnumType: [SearchFilter.Flag](GenericEnum#searchfilterflag)**

Targets owned by an ally of the player that created the search will match the filter.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.WeaponSearchFilter.enemy)**Enemy** {Enemy}
[](dcei.engine.proto.SearchFilter.Flag)**EnumType: [SearchFilter.Flag](GenericEnum#searchfilterflag)**

Targets owned by an enemy of the player that created the search will match the filter.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.WeaponSearchFilter.neutral)**Neutral** {Neutral}
[](dcei.engine.proto.SearchFilter.Flag)**EnumType: [SearchFilter.Flag](GenericEnum#searchfilterflag)**

Targets that are neutral to the player that created the search will match the filter.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.WeaponSearchFilter.unit)**Unit** {Unit}
[](dcei.engine.proto.SearchFilter.Flag)**EnumType: [SearchFilter.Flag](GenericEnum#searchfilterflag)**

Targets that use the "Unit" category will match the filter.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.WeaponSearchFilter.missile)**Missile** {Missile}
[](dcei.engine.proto.SearchFilter.Flag)**EnumType: [SearchFilter.Flag](GenericEnum#searchfilterflag)**

Targets that use the "Missile" category will match the filter.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.WeaponSearchFilter.structure)**Structure** {Structure}
[](dcei.engine.proto.SearchFilter.Flag)**EnumType: [SearchFilter.Flag](GenericEnum#searchfilterflag)**

Targets that use the "Structure" category will match the filter.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.WeaponSearchFilter.air)**Air** {Air}
[](dcei.engine.proto.SearchFilter.Flag)**EnumType: [SearchFilter.Flag](GenericEnum#searchfilterflag)**

Targets that use air unit collision will match the filter.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.WeaponSearchFilter.ground)**Ground** {Ground}
[](dcei.engine.proto.SearchFilter.Flag)**EnumType: [SearchFilter.Flag](GenericEnum#searchfilterflag)**

Targets that use ground unit collision will match the filter.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.WeaponSearchFilter.stealth)**Stealth** {Stealth}
[](dcei.engine.proto.SearchFilter.Flag)**EnumType: [SearchFilter.Flag](GenericEnum#searchfilterflag)**

Targets with a behavior that uses the stealth flag will match the filter.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.WeaponSearchFilter.invulerable)**Invulerable** {Invulerable}
[](dcei.engine.proto.SearchFilter.Flag)**EnumType: [SearchFilter.Flag](GenericEnum#searchfilterflag)**

Targets with the invulnerable flag will match the filter.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.WeaponSearchFilter.alive)**Alive** {Alive}
[](dcei.engine.proto.SearchFilter.Flag)**EnumType: [SearchFilter.Flag](GenericEnum#searchfilterflag)**

Targets that are currently alive will match the filter.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Weapon.disabled)**Disabled** {Disabled}
When checked, the weapon is disabled by default. Requires behaviors or other means to be enabled.

[](manual-wiki-start)

[](manual-wiki-end)

