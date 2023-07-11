<table ><tbody ><tr></tr><tr><td><details>
<summary><b>Table of Contents</b></summary><hr>

<div markdown="1">
* [Metagame Scaling Mod](#modsmetagame-scaling-mod)
    - [Features](#features)
    - [Card Methods](#card-methods)
        * [Card:New()](#cardnew-table-card_data-)
        * [Card:GetLevel()](#cardgetlevel)
        * [Card:SetLevel()](#cardsetlevel-number-value-)
        * [Card:AddLevel()](#cardaddlevel-number-value-)
        * [Card:GetShards()](#cardgetshards)
        * [Card:SetShards()](#cardsetshards-number-value-)
        * [Card:AddShards()](#cardaddshards-number-value-)
        * [Card:IsUnlocked()](#cardisunlocked)
        * [Card:SetUnlocked()](#cardsetunlocked-bool-flag-)
        * [Card:GetProgressValue()](#cardgetprogressvalue-string-key-number-level-)
        * [Card:OverrideProgressValue()](#cardoverrideprogressvalue-string-key-number-level-number-value-)
        * [Card:GetMaxLevel()](#cardgetmaxlevel)
        * [Card:GetDisplayLevel()](#cardgetdisplaylevel-number-level-)
        * [Card:GetDamageScale()](#cardgetdamagescale-number-level-)
        * [Card:GetHealthScale()](#cardgethealthscale-number-level-)
        * [Card:GetShardRequirement()](#cardgetshardrequirement-number-level-)
        * [Card:GetUpgradeCost()](#cardgetupgradecost-number-level-)
        * [Card:ResetPlayerData()](#cardresetplayerdata)
        * [Card:AttemptLevelUpAndConsumeShards()](#cardattemptlevelupandconsumeshards-table-options-)
    - [Mod Functions](#mod-functions)
        * [GetUnitCard( unit )](#getunitcard-unit-unit-)
        * [SavePlayerData()](#saveplayerdata)
        * [LoadPlayerData()](#loadplayerdata)
        * [SetDisableWarnings()](#setdisablewarnings-bool-flag-)
    - [Progression Tables](#progression-tables)
    - [Progession Table Templates](#progession-table-templates)
        * [Number of Shards Required for Upgrade](#number-of-shards-required-for-upgrade)
        * [Currency Cost Required for Upgrade](#currency-cost-required-for-upgrade)
        * [Health and Damage Scaling per Upgrade](#health-and-damage-scaling-per-upgrade)

</div>
</details></td></tr></tbody></table>

***
# Mods\Metagame Scaling Mod

The Metagame Scaling Mod is used to assist in creating and managing unit cards, based on [metagame mechanics](https://clashroyale.fandom.com/wiki/Card_Overviews) in Clash Royale.

## Features
* Create and manage cards with level progression
* Level up cards with shards + currency (either gold or a custom currency)
* Automatically applies health and damage scaling values to card-associated units
* Automatically manages save data for card progression (unlock state, level, shards)


Download the mod [here](https://github.com/dctopspin/Wild-Modding/files/5171858/Meta.Game.Scaling.zip) or play the demo map [here](https://platform.wildsky.dev/arcade/game/112)!

![MGSLib](https://user-images.githubusercontent.com/56179276/92065200-1135dd80-ed54-11ea-89bd-4fb91f40a23f.png)


## Card Methods

The following functions can be used such as:

```lua
local meta = GameModules["MetaMod"]

local card_data = {
  name = "basic_range",
  progression = meta.ProgressionTemplates.Common,
  units = {
    "Standard RangedUnit",
  }
}

-- creates a new card using the supplied card_data
meta.Card:New(card_data)
```

### Card:New( <i>table</i> card_data )

Defines a new card using the supplied card data. You should use this function to define all the cards in your project in your map initialization function before calling [meta.LoadPlayerData](#loadplayerdata).

**card_data values**:
* `name` defines the card name for it to be referenced elsewhere.
* `progression` a [progression table](#progression-tables) that defines parameters of the card's progression.
* `units` a list of units that will receive health and damage scaling based off of [progression table](#progression-tables) values.

You may find it useful to add your own values to card_data, such as:

```lua
local card_data = {
  name = "basic_melee",
  display_name = "Footman",
  icon = "btn_unit_wildsky_barracks_troop_rank01",
  rarity = "Common",
  progression = meta.ProgressionTemplates.Common,
  units = {
      "Standard MeleeUnit",
      "Standard MeleeUnit Rank 2",
      "Standard MeleeUnit Rank 3",
  }
}
```
### Card:GetLevel()

### Card:SetLevel( <i>number</i> value )

### Card:AddLevel( <i>number</i> value )

### Card:GetShards()

### Card:SetShards( <i>number</i> value )

### Card:AddShards( <i>number</i> value )

### Card:IsUnlocked()

### Card:SetUnlocked( <i>bool</i> flag )

### Card:GetProgressValue( <i>string</i> key, <i>number</i> level )

### Card:OverrideProgressValue( <i>string</i> key, <i>number</i> level, <i>number</i> value )

### Card:GetMaxLevel()

### Card:GetDisplayLevel( <i>number</i> level )

### Card:GetDamageScale( <i>number</i> level )

### Card:GetHealthScale( <i>number</i> level )

### Card:GetShardRequirement( <i>number</i> level )

### Card:GetUpgradeCost( <i>number</i> level )

### Card:ResetPlayerData()

### Card:AttemptLevelUpAndConsumeShards( <i>table</i> options )

Attempts to level up the given card, first checking required upgrade cost and required shards. If successful, the card will leveled up, the required shards will be consumed, and the health and damage scaling upgrade behaviors will be updated for relevant units.

Note that the upgrade cost will **not** be consumed (but the resulting value will be returned in the `result_callback` function) and must be handled in your own script. It's also recommended to call [SavePlayerData()](#saveplayerdata--) in the `result_callback` function.

**Options**
* (optional) `custom_currency` if set, card cost will check against this value rather than DCEI.GetGold().
* `result_callback` this function will be called after the function is finished running with the following `result` parameters:
  * `is_success` will return true if the card was successfully leveled up.
  * `currency` will return the new currency value after the upgrade cost has been subtracted.

## Mod Functions

The following functions can be used such as:

```lua
local meta = GameModules["MetaMod"]

-- load player card save data
meta.LoadPlayerData()

-- finds the card associated the the unit "Standard MeleeUnit"
local unit = DCEI.FindUnit( DCEI.Unit("Standard MeleeUnit") )
local card = meta.GetUnitCard( unit )

card:SetUnlocked( true )

-- save and commit player card save data
meta.SavePlayerData()

```

### GetUnitCard( <i>unit</i> unit )

### SavePlayerData()
Saves the `level`, `shard`, and `unlocked` properties of each card to the player's save file.

### LoadPlayerData()
Loads the `level`, `shard`, and `unlocked` properties of each card from the player's save file. Call this in your map initialization function after all of the cards have been defined with [Card:New()](#cardnew-table-card_data-).

### SetDisableWarnings( <i>bool</i> flag )

## Progression Tables
Cards must be given a progression table that defines the following values per level:
* `shard_required` the number of shards required to upgrade to that level
* `upgrade_cost` the currency cost to upgrade to that level
* `health_scale` the health value for that level (as a percentage of base health)
* `damage_scale` the damage value for that level (as a percentage of base damage)

The library also comes with a number of pre-defined [progression table templates](#progession-table-templates) ready for use.

Example progression table:
```lua
local progression_table = {
  {
    shard_required = 0,
    upgrade_cost = 0,
    health_scale = 1.00,
    damage_scale = 1.00,
  },
  {
    shard_required = 2,
    upgrade_cost = 10,
    health_scale = 1.05,
    damage_scale = 1.05,
  },
  {	
    shard_required = 4,
    upgrade_cost = 20,
    health_scale = 1.1,
    damage_scale = 1.1,
  },
}

```

## Progession Table Templates

The following predefined progression tables can be used as such:

```lua
local meta = GameModules["MetaMod"]

local common_progression = meta.ProgressionTemplates.Common
local rare_progression = meta.ProgressionTemplates.Rare
local epic_progression = meta.ProgressionTemplates.Epic
local legendary_progression = meta.ProgressionTemplates.Legendary
```

Full table values can be viewed [here](https://gist.github.com/coffee8479/1ce49339f3c343e2320340bdbab5846b). 

Note that Rare/Epic/Legendary still start at level 1 (when getting card level from `Card:GetLevel()`) and simply have a lower max level. For this reason the default progression templates additional include the `display_level` property, which is used for level display in the demo map to have Rare/Epic/Legendary cards start at level 3/6/9.

### Health and Damage Scaling per Upgrade
|	Level	|	Common	|	Rare	|	Epic	|	Legendary	|
|	--	|	--	|	--	|	--	|	--	|
|	1	|	100%	|	N/A	|	N/A	|	N/A	|
|	2	|	110%	|	N/A	|	N/A	|	N/A	|
|	3	|	120%	|	100%	|	N/A	|	N/A	|
|	4	|	133%	|	110%	|	N/A	|	N/A	|
|	5	|	145%	|	120%	|	N/A	|	N/A	|
|	6	|	160%	|	133%	|	100%	|	N/A	|
|	7	|	175%	|	145%	|	110%	|	N/A	|
|	8	|	193%	|	160%	|	120%	|	N/A	|
|	9	|	210%	|	175%	|	133%	|	100%	|
|	10	|	233%	|	193%	|	145%	|	110%	|
|	11	|	255%	|	210%	|	160%	|	120%	|
|	12	|	280%	|	233%	|	175%	|	133%	|
|	13	|	308%	|	255%	|	193%	|	145%	|

### Number of Shards Required for Upgrade		
|	Level	|	Common	|	Rare	|	Epic	|	Legendary	|
|	--	|	--	|	--	|	--	|	--	|
|	1	|	0	|	N/A	|	N/A	|	N/A	|
|	2	|	2	|	N/A	|	N/A	|	N/A	|
|	3	|	4	|	0	|	N/A	|	N/A	|
|	4	|	10	|	2	|	N/A	|	N/A	|
|	5	|	20	|	4	|	N/A	|	N/A	|
|	6	|	50	|	10	|	0	|	N/A	|
|	7	|	100	|	20	|	2	|	N/A	|
|	8	|	200	|	50	|	4	|	N/A	|
|	9	|	400	|	100	|	10	|	0	|
|	10	|	800	|	200	|	20	|	2	|
|	11	|	1,000	|	400	|	50	|	4	|
|	12	|	2,000	|	800	|	100	|	10	|
|	13	|	5,000	|	1,000	|	200	|	20	|
|	**Total**	|	**9,586**	|	**2,586**	|	**386**	|	**36**	|

### Currency Cost Required for Upgrade
|	Level	|	Common	|	Rare	|	Epic	|	Legendary	|
|	--	|	--	|	--	|	--	|	--	|
|	1	|	N/A	|	N/A	|	N/A	|	N/A	|
|	2	|	5	|	N/A	|	N/A	|	N/A	|
|	3	|	20	|	N/A	|	N/A	|	N/A	|
|	4	|	50	|	50	|	N/A	|	N/A	|
|	5	|	150	|	150	|	N/A	|	N/A	|
|	6	|	400	|	400	|	N/A	|	N/A	|
|	7	|	1,000	|	1,000	|	400	|	N/A	|
|	8	|	2,000	|	2,000	|	2,000	|	N/A	|
|	9	|	4,000	|	4,000	|	4,000	|	N/A	|
|	10	|	8,000	|	8,000	|	8,000	|	5,000	|
|	11	|	20,000	|	20,000	|	20,000	|	20,000	|
|	12	|	50,000	|	50,000	|	50,000	|	50,000	|
|	13	|	100,000	|	100,000	|	100,000	|	100,000	|
|	**Total**	|	**185,625**	|	**185,600**	|	**184,400**	|	**175,000**	|