<div id="toc" markdown="1">
- [Trigger API Reference\DCEI Functions\Player](#trigger-api-referencedcei-functionsplayer)
  * [GetPlayerCount](#getplayercount-0)
  * [GetCurrentPlayerId](#getcurrentplayerid-0)
  * [SetPlayerTeamId](#setplayerteamid-2)
  * [GetPlayerTeamId](#getplayerteamid-1)
  * [AddGold](#addgold-2)
  * [AddGoldAsync](#addgoldasync-2)
  * [SetGold](#setgold-2)
  * [SetGoldAsync](#setgoldasync-2)
  * [GetGold](#getgold-1)
  * [GetUnitPlayerId](#getunitplayerid-1)
  * [GetUnitTeamId](#getunitteamid-1)
  * [GetPlayerDeckCards](#getplayerdeckcards-0)

</div>

***

# [Trigger API Reference](Trigger-API-Reference)\\DCEI Functions\Player {Trigger-API-ReferenceDCEI-FunctionsPlayer}

[](overview-start)

[](overview-end)

## int GetPlayerCount() {getplayercount-0}
```cs
int GetPlayerCount()
```
#### Description
[](description-start)
Returns the number of players in the game.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local player_count = DCEI.GetPlayerCount()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## int GetCurrentPlayerId() {getcurrentplayerid-0}
```cs
int GetCurrentPlayerId()
```
#### Description
[](description-start)
Get the current player's id. Only useful in multiplayer.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local player_id = DCEI.GetCurrentPlayerId()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetPlayerTeamId(int playerId, int teamId) {setplayerteamid-2}
```cs
void SetPlayerTeamId(int playerId, int teamId)
```
#### Description
[](description-start)
Used to set a player's team id.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `playerId` the ID of the player to be switched.
- *int* `teamId` the ID of the player's new team.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local player_team_id = DCEI.GetPlayerTeamId(1)
if player_team_id = 1 then
    DCEI.SetPlayerTeamId(1, 2)
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## int GetPlayerTeamId(int playerId) {getplayerteamid-1}
```cs
int GetPlayerTeamId(int playerId)
```
#### Description
[](description-start)
Returns a player's team id.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `playerId` the ID of the player.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local player_id = DCEI.GetCurrentPlayerId()
local player_team_id = DCEI.GetPlayerTeamId(player_id)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void AddGold(int playerId, int amount) {addgold-2}
```cs
void AddGold(int playerId, int amount)
```
#### Description
[](description-start)
Adds gold to a player. Maximum gold value for a player is 2,147,483,647 (2^31-1).
[](description-end)

#### Parameters
[](parameters-start)
- *int* `playerId` the ID of the player.
- *int* `amount` the amount of gold to be added. Use negative values to subtract gold.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function OnRegionEnter()
    DCEI.AddGold(1, 10)
end

DCEI.TriggerAddUnitEnterRegionEvent(DCEI.UnitAny, DCEI.RegionAny, OnRegionEnter)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [TriggerAddOnGoldChangeEvent](Trigger-API-Reference-DCEI-Events-Player#triggeraddongoldchangeevent-1)
[](extra-section-end)

## void AddGoldAsync(int playerId, int amount) {addgoldasync-2}
```cs
void AddGoldAsync(int playerId, int amount)
```
#### Description
[](description-start)
Adds a specified amount of gold to the player. Primarily used for Wild Sky; as most other games implement custom currencies via Lua rather than use the hard-coded engine gold currency. Maximum gold value for a player is 2,147,483,647 (2^31-1).
[](description-end)

#### Parameters
[](parameters-start)
- *int* `playerId` the ID of the player.
- *int* `amount` the amount of gold to be added. Use negative values to subtract gold.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function OnRegionEnter()
    DCEI.AddGold(1, 10)
end

DCEI.TriggerAddUnitEnterRegionEvent(DCEI.UnitAny, DCEI.RegionAny, OnRegionEnter)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetGold(int playerId, int amount) {setgold-2}
```cs
void SetGold(int playerId, int amount)
```
#### Description
[](description-start)
Sets a player's gold value. Maximum gold value for a player is 2,147,483,647 (2^31-1).
[](description-end)

#### Parameters
[](parameters-start)
- *int* `playerId` the ID of the player.
- *int* `amount` the amount of gold to be set.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function OnRegionEnter()
    DCEI.SetGold(1, 10)
end

DCEI.TriggerAddUnitEnterRegionEvent(DCEI.UnitAny, DCEI.RegionAny, OnRegionEnter)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [TriggerAddOnGoldChangeEvent](Trigger-API-Reference-DCEI-Events-Player#triggeraddongoldchangeevent-1)
[](extra-section-end)

## void SetGoldAsync(int playerId, int amount) {setgoldasync-2}
```cs
void SetGoldAsync(int playerId, int amount)
```
#### Description
[](description-start)
Sets a player's gold value. Maximum gold value for a player is 2,147,483,647 (2^31-1).
[](description-end)

#### Parameters
[](parameters-start)
- *int* `playerId` the ID of the player.
- *int* `amount` the amount of gold to be set.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function OnRegionEnter()
    DCEI.SetGold(1, 10)
end

DCEI.TriggerAddUnitEnterRegionEvent(DCEI.UnitAny, DCEI.RegionAny, OnRegionEnter)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## int GetGold(int playerId) {getgold-1}
```cs
int GetGold(int playerId)
```
#### Description
[](description-start)
Returns a player's gold value.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `playerId` the ID of the player.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function OnRegionEnter()
    local player_gold = DCEI.GetGold(1)
    if (player_gold + 10) > 2147483647 then
        DCEI.SetGold(1, 2147483647)
    else
        DCEI.AddGold(1, 10)
    end
end

DCEI.TriggerAddUnitEnterRegionEvent(DCEI.UnitAny, DCEI.RegionAny, OnRegionEnter)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [TriggerAddOnGoldChangeEvent](Trigger-API-Reference-DCEI-Events-Player#triggeraddongoldchangeevent-1)
[](extra-section-end)

## int GetUnitPlayerId(unit unit) {getunitplayerid-1}
```cs
int GetUnitPlayerId(unit unit)
```
#### Description
[](description-start)
Returns the player ID of the owner of a unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to return the player ID of.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local region = DCEI.FindRegion("region_0")
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)

DCEI.LogMessage("Unit's Player ID: " .. DCEI.GetUnitPlayerId(unit))
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## int GetUnitTeamId(unit unit) {getunitteamid-1}
```cs
int GetUnitTeamId(unit unit)
```
#### Description
[](description-start)
Returns the team ID of a unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to return the team ID of.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local region = DCEI.FindRegion("region_0")
local team_id = 1
local player_id = 1
local unit_type = "DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)

DCEI.LogMessage("Unit Team ID: " .. DCEI.GetUnitTeamId(unit))
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## object GetPlayerDeckCards() {getplayerdeckcards-0}
```cs
object GetPlayerDeckCards()
```
#### Description
[](description-start)
Wild Sky specific. Returns a lua table of the equipped cards from the meta. 
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local deck = DCEI.GetPlayerDeckCards()
Core.Util.LogDump(deck)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

