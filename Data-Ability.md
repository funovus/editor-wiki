<div id="toc" markdown="1">
- [Data\Ability](#dataability)
  * [Template](#template)
  * [Parent](#parent)
  * [Ability Type](#ability-type)
  * [Cast Type](#cast-type)
  * [Target Range Mode](#target-range-mode)
  * [Effect](#effect)
  * [Stats](#stats)
  * [Use Unit Cost Difference](#use-unit-cost-difference)
  * [Add To Unit Cost](#add-to-unit-cost)
  * [Cost](#cost)
  * [Priority](#priority)
  * [Family](#family)
  * [Validators](#validators)
  * [Level](#level)
  * [Can Cast While Moving](#can-cast-while-moving)
  * [Is Rally Ability [Wild Sky]](#is-rally-ability-wild-sky)
  * [Disabled](#disabled)
  * [Hide](#hide)
  * [Distance Check Mode](#distance-check-mode)
  * [Distance Extend Mode](#distance-extend-mode)
  * [Target Filter](#target-filter)
  * [Highlight](#highlight)
  * [Ability Tags](#ability-tags)
  * [Charge Ignore Cooldown](#charge-ignore-cooldown)
  * [Show Charge Count Ui](#show-charge-count-ui)
  * [Critical Chance](#critical-chance)
  * [Critical Effect](#critical-effect)
  * [Dependent Units](#dependent-units)
  * [Dependent Effects](#dependent-effects)
  * [Dependent Behaviors](#dependent-behaviors)
  * [Command Card Index](#command-card-index)
  * [Command Card Icon](#command-card-icon)
  * [Command Card Confirm Icon [Wild Sky]](#command-card-confirm-icon-wild-sky)
  * [Command Card Display Text [Wild Sky]](#command-card-display-text-wild-sky)
  * [Command Card Enhancement Icon [Wild Sky]](#command-card-enhancement-icon-wild-sky)
  * [Command Card Ornament Icon [Wild Sky]](#command-card-ornament-icon-wild-sky)
  * [Preserve Menu [Wild Sky]](#preserve-menu-wild-sky)
  * [Description [Wild Sky]](#description-wild-sky)
  * [Title [Wild Sky]](#title-wild-sky)
  * [Affinity Index](#affinity-index)
  * [Card Name](#card-name)
  * [Targeting Valid Cursor Actor](#targeting-valid-cursor-actor)
  * [Targeting Invalid Cursor Actor](#targeting-invalid-cursor-actor)

</div>

***

# [](dcei.engine.proto.Ability)**[Data](Data)\Ability** {dataAbility}

[](manual-wiki-start)
Abilities are spells or skills that are cast by units. Similar to weapons, abilities create effect trees that determine their functionality.
[](manual-wiki-end)

## [](dcei.engine.proto.Ability.template)**Template** {Template}
[](GenericField.template)**FieldType: [Template](GenericField#template)**


[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Ability.parent)**Parent** {Parent}
[](GenericField.parent)**FieldType: [Parent](GenericField#parent)**


[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Ability.ability_type)**Ability Type** {Ability-Type}

[](manual-wiki-start)
Determines how the ability's target location is chosen. Targeted abilities will cause the caster to enter [targeting mode](Trigger-API-Reference-DCEI-Functions-Ability#void-entertargetingmodeunit-unit-string-abilityname) while selecting a cast location. 
[](manual-wiki-end)

>* **NONE_ABILITY_TYPE**: 
>* **TARGET**: When cast, the target for the effect of the ability is a unit or location within range of the ability.
>* **INSTANT**: When cast, the casting unit or location is the target for the effect of the ability.

## [](dcei.engine.proto.Ability.cast_type)**Cast Type** {Cast-Type}

[](manual-wiki-start)
**(NOTE: Currently AUTO type is not supported for targeted abilities)**.
[](manual-wiki-end)

>* **NONE_CAST_TYPE**: 
>* **MANUAL**: The player must activate the ability themselves.
>* **AUTO**: The ability will automatically be cast when off cooldown and the validators are met.

## [](dcei.engine.proto.Ability.target_range_mode)**Target Range Mode** {Target-Range-Mode}

[](manual-wiki-start)

[](manual-wiki-end)

>* **NORMAL**: When cast outside of the ability's range, the caster will attempt to move into range before casting.
>* **CLAMP**: When cast outside of the ability's range, the caster will cast the ability at the ability's maximum range in the direction of the target.
>* **MAX_RANGE**: The ability will always be cast at the maximum range in the direction of the target.

## [](dcei.engine.proto.Ability.effect)**Effect** {Effect}
The effect used by the ability when it is cast.

[](manual-wiki-start)
See: [Data/Effect](Data-Effect)
For [targeted abilities](#ability-type), this effect determines whether this ability can target units, locations, or both. This is usually decided by the effect's 'Target Type' or 'Location' field, though some effect types always occur at a unit or location.
* **Example 1**: If the effect is a [Persistent](Data-Effect-Persistent) with [location](Data-Effect-Persistent#location) set to 'Target Location', then the ability targets locations. 
* **Example 2**: If the effect is a [Damage](Data-Effect-Damage) effect (which occurs on a unit), then the ability targets units.
[](manual-wiki-end)

## [](dcei.engine.proto.Ability.stats)**Stats** {Stats}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.AbilityStats.prep_time)**Prep Time** {Prep-Time}
The delay between the ability being cast and the effect being executed.

[](manual-wiki-start)
Used with [Finish Time](#finish-time) for the purposes of animating the unit.
[](manual-wiki-end)

### [](dcei.engine.proto.AbilityStats.finish_time)**Finish Time** {Finish-Time}
The delay between the effect being executed and the ability ending.

[](manual-wiki-start)
The [Finish Time](#finish-time) begins as soon as [Prep Time](#prep-time) ends.
Used with [Prep Time](#prep-time) for the purposes of animating the unit. The sum of [Prep Time](#prep-time) plus [Finish Time](#finish-time) is the minimum cooldown of an ability.
[](manual-wiki-end)

### [](dcei.engine.proto.AbilityStats.cooldown)**Cooldown** {Cooldown}
The cooldown of the ability or how long the unit must wait to use it again.

[](manual-wiki-start)
The [Cooldown](#cooldown) begins as soon as [Prep Time](#prep-time) ends.
If [Max Charge](#max-charge) is greater than 1, this instead determines how long it takes to gain another charge of the ability. In this case the cooldown of the ability is instead the sum of [Prep Time](#prep-time) plus [Finish Time](#finish-time) as long as there is another charge on the ability.
[](manual-wiki-end)

### [](dcei.engine.proto.AbilityStats.use_initial_cooldown)**Use Initial Cooldown** {Use-Initial-Cooldown}
If checked, this ability will start on cooldown.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.AbilityStats.use_cooldown_on_enable)**Use Cooldown On Enable** {Use-Cooldown-On-Enable}
If checked, this ability will enter cooldown when it is disabled then enabled.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.AbilityStats.range)**Range** {Range}
The maximum distance for the target of the ability.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.AbilityStats.scan_range)**Scan Range** {Scan-Range}
If ability's abilty type is **TARGET** and cast type is **AUTO**, this is the range that unit will use to search for targets.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.AbilityStats.max_charge)**Max Charge** {Max-Charge}
The maximum number of charges for an ability. In order for an ability to be able to be cast, this number must be 1 or greater.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.AbilityStats.arc)**Arc** {Arc}
The angle in front of the caster that targets must be in. If the target is outside this arc, the caster will attempt to turn to face the target before casting. Example: Arc 360 means the ability can be cast in any direction, 90 is a cone in front, and 0 is directly facing the target.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Ability.use_unit_cost_difference)**Use Unit Cost Difference** {Use-Unit-Cost-Difference}
If the ability contains a morph effect, uses the difference in gold cost between the two units as the ability's gold cost.

[](manual-wiki-start)
If the ability contains a morph effect, uses the difference in gold cost between the two units as the ability's gold cost.
[](manual-wiki-end)

## [](dcei.engine.proto.Ability.add_to_unit_cost)**Add To Unit Cost** {Add-To-Unit-Cost}
When checked, the cost of unit will be increased by the gold cost of the ability when it is cast.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Ability.cost)**Cost** {Cost}
What resources the unit uses when it casts the ability. If the unit is unable to meet any of the costs, it is unable to cast the ability.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.AbilityCost.health)**Health** {Health}
How much health the unit loses when the ability is cast.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.AbilityCost.mana)**Mana** {Mana}
How much mana the unit loses when the ability is cast.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.AbilityCost.gold)**Gold** {Gold}
How much gold the player loses when the ability is cast.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Ability.priority)**Priority** {Priority}
Abilities with higher priority can interrupt the casting of abilities with lower priority.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Ability.family)**Family** {Family}

[](manual-wiki-start)
Can be used to target specific abilities for cooldown or charge modification using the [Modify Unit](Data-Effect-Modify-Unit) effect.
[](manual-wiki-end)

## [](dcei.engine.proto.Ability.Validators)**Validators** {Validators}
Each validator must succeed in order for the ability to be able to be cast.

[](manual-wiki-start)
See: [Data/Validator](Data-Validator)
[](manual-wiki-end)

## [](dcei.engine.proto.Ability.level)**Level** {Level}
Ability level reference that can be referenced in validator expressions.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Ability.can_cast_while_moving)**Can Cast While Moving** {Can-Cast-While-Moving}
If this is checked, using this ability will not stop movement.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Ability.is_rally_ability)**Is Rally Ability [Wild Sky]** {Is-Rally-Ability-Wild-Sky}
Used for additional rally ability functionality in Wild Sky.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Ability.disabled)**Disabled** {Disabled}
When checked, the ability is disabled by default. Requires behaviors or other means to be enabled.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Ability.hide)**Hide** {Hide}
When checked, the ability is hidden from the command card by default. Requires behaviors or other means to be visible.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Ability.distance_check_mode)**Distance Check Mode** {Distance-Check-Mode}
[](dcei.engine.proto.DistanceCheckModes)**EnumType: [DistanceCheckModes](GenericEnum#distancecheckmodes)**


[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Ability.distance_extend_mode)**Distance Extend Mode** {Distance-Extend-Mode}
[](dcei.engine.proto.DistanceExtendModes)**EnumType: [DistanceExtendModes](GenericEnum#distanceextendmodes)**


[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Ability.target_filter)**Target Filter** {Target-Filter}
[](dcei.engine.proto.SearchFilter)**MessageType: [SearchFilter](GenericMessage#searchfilter)**


[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Ability.highlight)**Highlight** {Highlight}
If checked, the ability will always be highlighted on the unit's command card and a behavior or some other means will be needed to stop it.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Ability.ability_tags)**Ability Tags** {Ability-Tags}
Used in conjunction with Issue Ability effect to cast abilities with specific tags.

[](manual-wiki-start)
See: [Data/Effect/Issue Ability](Data-Effect-Issue-Ability).
Can also be used to target specific abilities for cooldown reduction using the [Modify Unit](Data-Effect-Modify-Unit) effect.
[](manual-wiki-end)

## [](dcei.engine.proto.Ability.charge_ignore_cooldown)**Charge Ignore Cooldown** {Charge-Ignore-Cooldown}
If checked, the ability charges will not recover each cooldown. Instead the ability charges must be changed some other way.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Ability.show_charge_count_ui)**Show Charge Count Ui** {Show-Charge-Count-Ui}
Whether the charges of the ability are displayed in the in-game UI or not.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Ability.critical_chance)**Critical Chance** {Critical-Chance}
The chance that the ability usage is considered a critical. The value is a fraction, so 0 is 0% chance and 1 is 100% chance of critical hit.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Ability.critical_effect)**Critical Effect** {Critical-Effect}
The effect that is executed instead of the effect when the ability is a critical.

[](manual-wiki-start)
If this is not set, the default [effect](#effect) will be used on critical instead.
[](manual-wiki-end)

## [](dcei.engine.proto.Ability.dependent_units)**Dependent Units** {Dependent-Units}
Dependent units will be loaded when the ability is loaded.

[](manual-wiki-start)
Any units declared here will be preloaded when this ability is preloaded. This is an alternative to declaring data in [Settings](Data-ProjectSetting).
[](manual-wiki-end)

## [](dcei.engine.proto.Ability.dependent_effects)**Dependent Effects** {Dependent-Effects}
Dependent effects will be loaded when this unit is loaded.

[](manual-wiki-start)
Any effects declared here will be preloaded when this ability is preloaded. This is an alternative to declaring data in [Settings](Data-ProjectSetting).
[](manual-wiki-end)

## [](dcei.engine.proto.Ability.dependent_behaviors)**Dependent Behaviors** {Dependent-Behaviors}
Dependent behaviors will be loaded when this unit is loaded.

[](manual-wiki-start)
Any behaviors declared here will be preloaded when this ability is preloaded. This is an alternative to declaring data in [Settings](Data-ProjectSetting).
[](manual-wiki-end)

## [](dcei.engine.proto.Ability.command_card_index)**Command Card Index** {Command-Card-Index}
What slot of the In-Game UI Command Card the ability occupies.

[](manual-wiki-start)
Can be used to lay out the abilities on a unit in a certain manner.
[](manual-wiki-end)

## [](dcei.engine.proto.Ability.command_card_icon)**Command Card Icon** {Command-Card-Icon}
The icon of the ability.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Ability.command_card_confirm_icon)**Command Card Confirm Icon [Wild Sky]** {Command-Card-Confirm-Icon-Wild-Sky}
If the ability needs to be confirmed (i.e., tap a second time to use), the icon to display after the first tap.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Ability.command_card_display_text)**Command Card Display Text [Wild Sky]** {Command-Card-Display-Text-Wild-Sky}
The text that the ability button displays when it is opened.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Ability.command_card_enhancement_icon)**Command Card Enhancement Icon [Wild Sky]** {Command-Card-Enhancement-Icon-Wild-Sky}
The icon for the ability when it is enhanced.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Ability.command_card_ornament_icon)**Command Card Ornament Icon [Wild Sky]** {Command-Card-Ornament-Icon-Wild-Sky}
The icon for the ability when it has an ornament.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Ability.preserve_menu)**Preserve Menu [Wild Sky]** {Preserve-Menu-Wild-Sky}
When the ability is used through the tower menu, the menu stays open.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Ability.description)**Description [Wild Sky]** {Description-Wild-Sky}
Used by wild sky, can be used for the description of an ability.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Ability.title)**Title [Wild Sky]** {Title-Wild-Sky}
Used by wild sky, can be used to form a title for the ability.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Ability.affinity_index)**Affinity Index** {Affinity-Index}
The affinity of this ability. Only set this field if: 1. this is a ship ability. 2. and this ability is used as a built-in ability (i.e., not added through a loadout spell card but available in the level automatically). The mapping: 1 => normal 2 => fire 3 => ice 4 => nature 5 => light 6 => dark.

[](manual-wiki-start)
Used by Wild Sky to help associate abilities with affinities.
[](manual-wiki-end)

## [](dcei.engine.proto.Ability.card_name)**Card Name** {Card-Name}
Used to associate the ability with a card name for damage stats tracking.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Ability.targeting_valid_cursor_actor)**Targeting Valid Cursor Actor** {Targeting-Valid-Cursor-Actor}
The cursor actor used for the ability's target mode when the target is valid.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Ability.targeting_invalid_cursor_actor)**Targeting Invalid Cursor Actor** {Targeting-Invalid-Cursor-Actor}
The cursor actor used for the ability's target mode when the target is invalid.

[](manual-wiki-start)

[](manual-wiki-end)

