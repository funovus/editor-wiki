<div id="toc" markdown="1">
- [Trigger API Reference\DCEI Functions\Log](#trigger-api-referencedcei-functionslog)
  * [LogMessage](#logmessage-1)
  * [LogWarning](#logwarning-1)
  * [LogError](#logerror-1)
  * [OverwriteShipHp](#overwriteshiphp-1)
  * [LogEvent](#logevent-2)
  * [LogEndGameStringValue](#logendgamestringvalue-2)
  * [LogEndGameNumberValue](#logendgamenumbervalue-2)
  * [LogEndGameBooleanValue](#logendgamebooleanvalue-2)
  * [LogEndGameUnitsTotalHp](#logendgameunitstotalhp-2)
  * [LogEndGameUnitHps](#logendgameunithps-2)
  * [LogEndGameUnitHpPercentage](#logendgameunithppercentage-2)

</div>

***

# [Trigger API Reference](Trigger-API-Reference)\\DCEI Functions\Log {Trigger-API-ReferenceDCEI-FunctionsLog}

[](overview-start)

[](overview-end)

## void LogMessage(string message) {logmessage-1}
```cs
void LogMessage(string message)
```
#### Description
[](description-start)
Prints the given message to the [Play Settings Log](Data-Play-Settings). Useful for debugging.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `message` The string to output.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- This will show a normal white message in the play log
DCEI.LogMessage("Hello" .. "World")

-- Multiline
DCEI.LogMessage(
    "test"
    .. " and test"
    .. " and test"
)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [Core.Util.Dump()](Mods-Core#dump)
- [Core.Util.LogDump()](Mods-Core#logdump)
[](extra-section-end)

## void LogWarning(string message) {logwarning-1}
```cs
void LogWarning(string message)
```
#### Description
[](description-start)
Similar to [LogMessage()](#logmessage-1), but the output text color is orange.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `message` The string to output.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- This will show yellow in the play log window
DCEI.LogWarning("Hello" .. "World")
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [Core.Util.Dump()](Mods-Core#dump)
- [Core.Util.LogDump()](Mods-Core#logdump)
[](extra-section-end)

## void LogError(string message) {logerror-1}
```cs
void LogError(string message)
```
#### Description
[](description-start)
Similar to [LogMessage()](#logmessage-1), but the output text color is red.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `message` The string to output.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- This will show up red in the play log with a stack trace
DCEI.LogError("Hello" .. "World")
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [Core.Util.Dump()](Mods-Core#dump)
- [Core.Util.LogDump()](Mods-Core#logdump)
[](extra-section-end)

## void OverwriteShipHp(int hp) {overwriteshiphp-1}
```cs
void OverwriteShipHp(int hp)
```
#### Description
[](description-start)
A Wild Sky specific API for overwriting the Ship HP reported to the meta-game victory/defeat screen. 
[](description-end)

#### Parameters
[](parameters-start)
- *int* `hp` The amount of health

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
    function game.OverwriteShipHp(hp)
        local maxHealth = DCEI.GetMaxHealth(ship)
        local newHealth = maxHealth * (hp / 100)
        local percentage = newHealth / maxHealth * 100
        DCEI.LogMessage("Overwrite Ship HP to (" .. newHealth .. ") - " .. percentage .. "%")
        DCEI.SetHealthValueAsync(ship, newHealth)
        DCEI.LogEndGameStringValue("Overwrite Ship Icon", DCEI.Texture("btn_icon_wildsky_heart"))
    end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void LogEvent(string name, string json) {logevent-2}
```cs
void LogEvent(string name, string json)
```
#### Description
[](description-start)
Log an event for Wild Sky. May be used for Amplitude statistics, or be used by the meta-game layer. 
[](description-end)

#### Parameters
[](parameters-start)
- *string* `name` The id for the log event
- *string* `json` A string of json data to report with the event.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function LogOverchargeEvent(spell_name)
    local data = string.format('{"Stage": "%s", "Wave": %d}', DCEI.GetLevel(), DCEI.GetCurrentWaveId())
    DCEI.LogEvent("Use TowerOvercharge", data)
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void LogEndGameStringValue(string name, string value) {logendgamestringvalue-2}
```cs
void LogEndGameStringValue(string name, string value)
```
#### Description
[](description-start)
Wild Sky only. Used for logging certain game-values for the meta-game to reference. 
[](description-end)

#### Parameters
[](parameters-start)
- *string* `name` The log name.
- *string* `value` The string data to log.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function game.OverwriteShipHp(hp)
    local maxHealth = DCEI.GetMaxHealth(ship)
    local newHealth = maxHealth * (hp / 100)
    local percentage = newHealth / maxHealth * 100
    DCEI.LogMessage("Overwrite Ship HP to (" .. newHealth .. ") - " .. percentage .. "%")
    DCEI.SetHealthValueAsync(ship, newHealth)
    DCEI.LogEndGameStringValue("Overwrite Ship Icon", DCEI.Texture("btn_icon_wildsky_heart"))
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void LogEndGameNumberValue(string name, double value) {logendgamenumbervalue-2}
```cs
void LogEndGameNumberValue(string name, double value)
```
#### Description
[](description-start)
Wild Sky only. Used for logging certain game-values for the meta-game to reference, such as mine health or co-op damage values. 
[](description-end)

#### Parameters
[](parameters-start)
- *string* `name` The log name.
- *double* `value` The number value to log.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
	DCEI.LogEndGameNumberValue("BossUndamagedHP", boss_undamaged_HP)
	DCEI.LogEndGameNumberValue("PlayerDamageThisGame", DCEI.GetProtectedValue("player_dmg_this_game"))
	DCEI.LogEndGameNumberValue("DisplayBossHP", DCEI.GetHealth(boss_unit))
	DCEI.LogEndGameNumberValue("BossHP", DCEI.GetHealth(boss_unit))
	DCEI.LogEndGameNumberValue("PercentDamageDealt", percent_damage_dealt)
	DCEI.LogEndGameNumberValue("PercentHPRemaining", percent_hp_remaining)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void LogEndGameBooleanValue(string name, bool value) {logendgamebooleanvalue-2}
```cs
void LogEndGameBooleanValue(string name, bool value)
```
#### Description
[](description-start)
Wild Sky only. Used for logging certain game-values for the meta-game to reference. 
[](description-end)

#### Parameters
[](parameters-start)
- *string* `name` The log name.
- *bool* `value` The bool value to log.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function game.DefaultQuest(text)
    DCEI.LogEndGameBooleanValue("UseSideQuest", true)
    DCEI.LogEndGameStringValue("SideQuest01Display", text or "Quest")
    DCEI.LogEndGameBooleanValue("SideQuest01Status", false)
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void LogEndGameUnitsTotalHp(string name, IEnumerable\<string> unitNames) {logendgameunitstotalhp-2}
```cs
void LogEndGameUnitsTotalHp(string name, IEnumerable<string> unitNames)
```
#### Description
[](description-start)
Wild Sky only. Used for logging certain game-values for the meta-game to reference, such as mine health or co-op damage values. 
[](description-end)

#### Parameters
[](parameters-start)
- *string* `name` The log name.
- *IEnumerable\<string>* `unitNames` A list of unit names

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- e.g. Logging the combined health of all mine units
DCEI.LogEndGameUnitsTotalHp("mine_health", {"Mine Big", "Mine Medium", "Mine Small"})
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void LogEndGameUnitHps(string name, IEnumerable\<string> unitNames) {logendgameunithps-2}
```cs
void LogEndGameUnitHps(string name, IEnumerable<string> unitNames)
```
#### Description
[](description-start)
Wild Sky only. Used for logging certain game-values for the meta-game to reference. 
[](description-end)

#### Parameters
[](parameters-start)
- *string* `name` The log name.
- *IEnumerable\<string>* `unitNames` A list of unit names

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- e.g. Logging the combined health of all mine units
DCEI.LogEndGameUnitHps("mine_health", {"Mine Big", "Mine Medium", "Mine Small"})
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void LogEndGameUnitHpPercentage(string name, unit u) {logendgameunithppercentage-2}
```cs
void LogEndGameUnitHpPercentage(string name, unit u)
```
#### Description
[](description-start)
Wild Sky only. Used for logging certain game-values for the meta-game to reference. 
[](description-end)

#### Parameters
[](parameters-start)
- *string* `name` The log name.
- *unit* `u` The unit name.
[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function OnUnitSpawn()
    local u = DCEI.TriggeringUnit
    local unit_name = DCEI.GetUnitType(u)

    if unit_name == BOSS_NAME then
        -- Log boss hp stats.
        DCEI.LogEndGameUnitHpPercentage("Boss Hp", u)
    end
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

