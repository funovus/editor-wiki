<div id="toc" markdown="1">
- [Data\Unit](#dataunit)
  * [Template](#template)
  * [Parent](#parent)
  * [Unit Category](#unit-category)
  * [Unit Stats](#unit-stats)
  * [Health](#health)
  * [Mana](#mana)
  * [Shield](#shield)
  * [Movement](#movement)
  * [Turning](#turning)
  * [Behavior](#behavior)
  * [Unit Battle Data [Wild Sky] [Deprecated]](#unit-battle-data-wild-sky-deprecated)
  * [Rally Point [Wild Sky]](#rally-point-wild-sky)
  * [Unit Value](#unit-value)
  * [References](#references)
  * [Level](#level)
  * [Display Name](#display-name)
  * [Hide Unit Status Bar [Deprecated]](#hide-unit-status-bar-deprecated)
  * [Ingame Icon](#ingame-icon)
  * [Bind Ability Ui](#bind-ability-ui)
  * [Health Bar](#health-bar)
  * [Unit Event Triggers](#unit-event-triggers)
  * [Dependent Units](#dependent-units)
  * [Dependent Effects](#dependent-effects)
  * [Dependent Behaviors](#dependent-behaviors)
  * [Dependent Sprite Assets](#dependent-sprite-assets)
  * [Mini Map Config](#mini-map-config)
  * [Affinity Index [Wild Sky]](#affinity-index-wild-sky)
  * [Card Name [Wild Sky]](#card-name-wild-sky)

</div>

***

# [](dcei.engine.proto.Unit)**[Data](Data)\Unit** {dataUnit}

[](manual-wiki-start)
Units are the core interactive game object of the editor. All other data types (such as abilities, weapons, and behaviors) interact with units in some way, shape, or form.
[](manual-wiki-end)

## [](dcei.engine.proto.Unit.template)**Template** {Template}
[](GenericField.template)**FieldType: [Template](GenericField#template)**


[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Unit.parent)**Parent** {Parent}
[](GenericField.parent)**FieldType: [Parent](GenericField#parent)**


[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.UnitComponent.unit_category)**Unit Category** {Unit-Category}
[](dcei.engine.proto.UnitComponent.UnitType)**EnumType: [UnitComponent.UnitType](GenericEnum#unitcomponentunittype)**

Sets the type of unit.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.UnitComponents.unit_stats)**Unit Stats** {Unit-Stats}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.UnitStatsComponent.radius)**Radius** {Radius}
Determines the collision size of the unit.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.UnitStatsComponent.invulnerable)**Invulnerable** {Invulnerable}

[](manual-wiki-start)
When checked, the unit will match the "Invulnerable" [target filters](Data-Effect-Area-Search#filter). Note that currently this flag does not actually make the unit immortal or invulnerable.
[](manual-wiki-end)

### [](dcei.engine.proto.UnitStatsComponent.ground)**Ground** {Ground}

[](manual-wiki-start)
When checked, the unit will collide with other ground units and match the "Ground" [target filters](Data-Effect-Area-Search#filter).
[](manual-wiki-end)

### [](dcei.engine.proto.UnitStatsComponent.air)**Air** {Air}

[](manual-wiki-start)
When checked, the unit will collide with other air units and match the "Air" [target filters](Data-Effect-Area-Search#filter).
[](manual-wiki-end)

### [](dcei.engine.proto.UnitStatsComponent.selectable)**Selectable** {Selectable}
Determines whether or not the unit can be selected.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.UnitStatsComponent.target_priority)**Target Priority** {Target-Priority}

[](manual-wiki-start)
Determines the target priority for the "Target Priority" [target filter sort key](GenericEnum#searchfilterfiltersortmethod). Default target priority is 10. Useful for making certain units higher or lower priority attack targets.
[](manual-wiki-end)

### [](dcei.engine.proto.UnitStatsComponent.selection_priority)**Selection Priority** {Selection-Priority}
Determines the unit selection priority when multiple units are overlapping. Higher priority units will be selected over lower priority units.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.UnitStatsComponent.ignore_unit_collision)**Ignore Unit Collision** {Ignore-Unit-Collision}
When checked, the unit will ignore collision with other units. Note that this does not affect navigation mesh pathfinding (ie collision with props).

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.UnitStatsComponent.ignore_pathing)**Ignore Pathing** {Ignore-Pathing}
When checked, the unit will ignore navigation mesh and move in a direct line to its target position.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.UnitComponents.health)**Health** {Health}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.HealthComponent.max_health)**Max Health** {Max-Health}
The maximum health of the unit.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.HealthComponent.start_health)**Start Health** {Start-Health}
The starting health of the unit. By default this will use the **Max Health** value.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.HealthComponent.regeneration)**Regeneration** {Regeneration}
The amount of health the unit regenerates per second.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.HealthComponent.regeneration_delay)**Regeneration Delay** {Regeneration-Delay}
The delay after the unit takes damage before it begins regenerating health. Useful for making health only regenerate outside of combat.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.UnitComponents.mana)**Mana** {Mana}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ManaComponent.max_mana)**Max Mana** {Max-Mana}
The maximum mana of the unit.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ManaComponent.start_mana)**Start Mana** {Start-Mana}
The starting mana of the unit. By default this will use the **Max Mana** value.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ManaComponent.regeneration)**Regeneration** {Regeneration}
The amount of mana the unit regenerates per second.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ManaComponent.regeneration_delay)**Regeneration Delay** {Regeneration-Delay}
The delay after the spends mana before it begins regenerating mana.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.UnitComponents.shield)**Shield** {Shield}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ShieldComponent.max_shield)**Max Shield** {Max-Shield}
The maximum shields of the unit.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ShieldComponent.start_shield)**Start Shield** {Start-Shield}
The starting shields of the unit. By default this will use the **Max Shield** value.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ShieldComponent.regeneration)**Regeneration** {Regeneration}
The amount of shields the unit regenerates per second.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ShieldComponent.regeneration_delay)**Regeneration Delay** {Regeneration-Delay}
The delay after the unit takes damage before it begins regenerating shields.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.UnitComponents.movement)**Movement** {Movement}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.MovementComponent.move_speed)**Move Speed** {Move-Speed}
The movement speed of the unit, in terrain grid-units-per-second.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.MovementComponent.unit_height)**Unit Height** {Unit-Height}
The visual height of the unit. Useful for making flying units appear to be flying in the air.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.UnitComponents.turning)**Turning** {Turning}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.UnitTurningComponent.turning_speed)**Turning Speed** {Turning-Speed}
The turning speed of the unit. Note that the unit must turn before moving if the target position is greater than 90 degrees from the unit's facing.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.UnitComponents.behavior)**Behavior** {Behavior}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorComponent.oneof_behavior_type)**Behavior Type** {Behavior-Type}
[](dcei.engine.proto.BehaviorComponent.oneof_behavior_type)**SelectableType: [BehaviorComponent.Behavior Type](SelectableType#behaviorcomponentbehavior-type)**

Controls the AI behavior type of the unit. Most of the time this should be set to **Generic Controllable Unit**. It's generally recommended to not use **Td Types** unless you know what you're doing and are creating a similar tower defense game.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BehaviorComponent.behavior_type)**Behavior Type [Deprecated]** {Behavior-Type-Deprecated}
[](dcei.engine.proto.BehaviorComponent.BehaviorType)**EnumType: [BehaviorComponent.BehaviorType](GenericEnum#behaviorcomponentbehaviortype)**


[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.UnitComponents.unit_battle_data)**Unit Battle Data [Wild Sky] [Deprecated]** {Unit-Battle-Data-Wild-Sky-Deprecated}
[](dcei.engine.proto.UnitBattleData)**MessageType: [UnitBattleData](GenericMessage#unitbattledata)**


[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.UnitComponents.rally_point)**Rally Point [Wild Sky]** {Rally-Point-Wild-Sky}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.RallyPointComponent.offset)**Offset** {Offset}

[](manual-wiki-start)
The offset applied to [Set Rally Point](Data-Effect-Set-Rally-Point) effects.
[](manual-wiki-end)

## [](dcei.engine.proto.UnitComponents.unit_value)**Unit Value** {Unit-Value}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.UnitValueComponent.gold_cost)**Gold Cost** {Gold-Cost}
The base gold cost of the unit.

[](manual-wiki-start)
Can be used to set the cost of morph abilities using [Use Unit Cost Difference](Data-Ability#use-unit-cost-difference). Can be modified by ability cost when using [Add To Unit Cost](Data-Ability#add-to-unit-cost).
[](manual-wiki-end)

## [](dcei.engine.proto.Unit.references)**References** {References}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.UnitReferences.weapon_list)**Weapon List** {Weapon-List}

[](manual-wiki-start)
Which [Weapons](Data-Weapon) are available to the unit. Weapons are prioritized from top to bottom.
[](manual-wiki-end)

### [](dcei.engine.proto.UnitReferences.ability_list)**Ability List** {Ability-List}

[](manual-wiki-start)
Which [Abilities](Data-Ability) are available to the unit. Abilities are prioritized from top to bottom.
[](manual-wiki-end)

### [](dcei.engine.proto.UnitReferences.behavior_list)**Behavior List** {Behavior-List}

[](manual-wiki-start)
Which [Behaviors](Data-Behavior) the unit starts with. Behaviors are applied from top to bottom.
[](manual-wiki-end)

### [](dcei.engine.proto.UnitReferences.on_start_ability)**On Start Ability** {On-Start-Ability}

[](manual-wiki-start)
If set, this [Ability](Data-Ability) will be cast when the unit is created. This ability will be added to the unit's **Ability List** if not already present.
[](manual-wiki-end)

### [](dcei.engine.proto.UnitReferences.tag_list)**Tag List** {Tag-List}

[](manual-wiki-start)
Which [Tags](Data-Behavior#behavior-tag-array) the unit starts with.
[](manual-wiki-end)

#### [](dcei.engine.proto.Tag.name)**Name** {Name}
The name of the tag to apply.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.Tag.count)**Count** {Count}
The number of stacks of the tag to apply.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.Tag.duration)**Duration** {Duration}
The duration the tag will last (the default setting will last indefinitely).

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Unit.level)**Level** {Level}
A unit level reference that can be referenced in validator expressions. Current usage is limited.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Unit.display_name)**Display Name** {Display-Name}

[](manual-wiki-start)
Sets the display name of the unit, which can be referenced in triggers with [DCEI.GetUnitDisplayName()](Trigger-API-Reference-DCEI-Functions-Unit#string-getunitdisplaynameunit-unit). Accepts string or localization key.
[](manual-wiki-end)

## [](dcei.engine.proto.Unit.hide_unit_status_bar)**Hide Unit Status Bar [Deprecated]** {Hide-Unit-Status-Bar-Deprecated}

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Unit.ingame_icon)**Ingame Icon** {Ingame-Icon}

[](manual-wiki-start)
Sets the unit icon as displayed by [DCEI.ShowUnitStatusUiInSlot()](InGame-UI-Functions-Overview#hero-status). Enabling the **custom** flag allows you to specify any texture (using the asset name, not asset path).
[](manual-wiki-end)

## [](dcei.engine.proto.Unit.bind_ability_ui)**Bind Ability Ui** {Bind-Ability-Ui}

[](manual-wiki-start)
When enabled, the unit will display its ability menu when selected, similar to [DCEI.ShowAbilitiesUi()](InGame-UI-Functions-Overview#circle-menu). Useful for quickly testing abilities.
[](manual-wiki-end)

## [](dcei.engine.proto.Unit.health_bar)**Health Bar** {Health-Bar}
The type of health bar to display.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Unit.HealthBarOption.type)**Type** {Type}

[](manual-wiki-start)

[](manual-wiki-end)

>* **DEFAULT**: The default health bar. Displays in green for allied units and red for enemy units.
>* **GENERAL**: The default health bar. Displays in green for allied units and red for enemy units.
>* **SHIP**: A massive health bar. Displays in green for allied and enemy units.
>* **HERO**: A bigger health bar. Displays in green for allied and enemy units.
>* **DOT_MANA**: Displays mana as a large yellow bar with 10 segments.
>* **DOT_HEALTH**: Displays health as a large yellow bar with 10 segments.
>* **HEALTH_WITH_MANA**: Same as **SHIP** but additional displays mana in purple.
>* **NONE**: Shows no health bar for the unit.

### [](dcei.engine.proto.Unit.HealthBarOption.show_when_full)**Show When Full** {Show-When-Full}
Some health bars will automatically hide when the unit's health is full. Set this flag will override this behavior and make it always show.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Unit.unit_event_triggers)**Unit Event Triggers** {Unit-Event-Triggers}
Effects triggerd on unit events

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.UnitEventTriggers.on_unit_create_effects)**On Unit Create Effects** {On-Unit-Create-Effects}
Effects will be triggered when the unit is created.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.UnitEventTriggers.on_unit_death_effects)**On Unit Death Effects** {On-Unit-Death-Effects}
Effects will be triggered when the unit dies.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.UnitEventTriggers.on_unit_remove_effects)**On Unit Remove Effects** {On-Unit-Remove-Effects}
Effects will be triggered when the unit is removed.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Unit.dependent_units)**Dependent Units** {Dependent-Units}
Dependent units will be loaded when the unit is loaded

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Unit.dependent_effects)**Dependent Effects** {Dependent-Effects}
Dependent effects will be loaded when the unit is loaded

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Unit.dependent_behaviors)**Dependent Behaviors** {Dependent-Behaviors}
Dependent behaviors will be loaded when the unit is loaded

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Unit.dependent_sprite_assets)**Dependent Sprite Assets** {Dependent-Sprite-Assets}
Dependent sprites will be loaded when this unit is loaded.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Unit.mini_map_config)**Mini Map Config** {Mini-Map-Config}
These settings determine how the unit will be rendered on a minimap frame.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Unit.MiniMapConfig.mini_map_ui_type)**Mini Map Ui Type** {Mini-Map-Ui-Type}
[](dcei.engine.proto.Unit.MiniMapConfig.mini_map_ui_type)**SelectableType: [Unit.MiniMapConfig.Mini Map Ui Type](SelectableType#unitminimapconfigmini-map-ui-type)**

Determines whether the unit renders as a circle or sprite on the minimap.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Unit.MiniMapConfig.show_on_mini_map)**Show On Mini Map** {Show-On-Mini-Map}
When enabled, causes the unit to render on minimap frames.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Unit.MiniMapConfig.render_priority)**Render Priority** {Render-Priority}
Higher render priority units will display above lower priority ones in the minimap.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.Unit.MiniMapConfig.tint_color)**Tint Color** {Tint-Color}
Sets the tint color of the unit's minimap render using RGB values.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Unit.affinity_index)**Affinity Index [Wild Sky]** {Affinity-Index-Wild-Sky}
The affinity of this unit. Only set this field if: 1. this is a hero unit. 2. and this hero is used as a built-in hero (i.e., not added through a loadout hero card but available in the level automatically). The mapping: 1 => normal 2 => fire 3 => ice 4 => nature 5 => light 6 => dark

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.Unit.card_name)**Card Name [Wild Sky]** {Card-Name-Wild-Sky}
Name of the card this unit is associated with. Used for reporting in-game stats. It's automatically set by the engine when loading card information. Only set it explicitly if the unit belongs to a card that hasn't been implemented yet and you want to gather stats for it.

[](manual-wiki-start)

[](manual-wiki-end)

