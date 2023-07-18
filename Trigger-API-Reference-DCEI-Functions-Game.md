<div id="toc" markdown="1">
- [Trigger API Reference\DCEI Functions\Game](#trigger-api-referencedcei-functionsgame)
  * [SetUpdateFrequency](#setupdatefrequency-1)
  * [ClearUpdateFrequency](#clearupdatefrequency-0)
  * [GetUpdateFrequency](#getupdatefrequency-0)
  * [SetSpeedFactor](#setspeedfactor-1)
  * [GetSpeedFactor](#getspeedfactor-0)
  * [SetVictory](#setvictory-0)
  * [SetDefeat](#setdefeat-0)
  * [SetVictoryForPlayer](#setvictoryforplayer-2)
  * [SetDefeatForPlayer](#setdefeatforplayer-2)
  * [GetConsumableItemCount](#getconsumableitemcount-1)
  * [AddConsumableItem](#addconsumableitem-2)
  * [ReduceConsumableItem](#reduceconsumableitem-2)
  * [DisableGameEndDetection](#disablegameenddetection-2)
  * [EnableGameEndDetection](#enablegameenddetection-0)
  * [SetEndgamePause](#setendgamepause-1)

</div>

***

# [Trigger API Reference](Trigger-API-Reference)\\DCEI Functions\Game {Trigger-API-ReferenceDCEI-FunctionsGame}

[](overview-start)

[](overview-end)

## void SetUpdateFrequency(float value) {setupdatefrequency-1}
```cs
void SetUpdateFrequency(float value)
```
#### Description
[](description-start)
Changes how frequently a simulation update is called. The default of 1 means 16 FPS. Regardless what frequency is used, each simulation update will advance game time by 0.0625 unless [SetSpeedFactor](#setspeedfactor-1) is also used.
[](description-end)

#### Parameters
[](parameters-start)
- *float* `value` the frequency with which simulation updates are called. Supported values are [1/4, 1/2, 1, 2].

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local button_layout = GMUI.Layout.New({
    parent = DCEI.GetUiRootFrame(),
    name = "Standard/Button/Button",
})

local function SetUpdateFrequencyButton()
    local update_freq = DCEI.GetUpdateFrequency()
    if update_freq == 1 then
        DCEI.SetUpdateFrequency(0.5)
    else
        DCEI.ClearUpdateFrequency()
    end
end

DCEI.SetOnClickCallback(button_layout.Button, SetUpdateFrequencyButton)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [SetSpeedFactor](#setspeedfactor-1)
- [Core.GameSpeed](Mods-Core#gamespeed)
[](extra-section-end)

## void ClearUpdateFrequency() {clearupdatefrequency-0}
```cs
void ClearUpdateFrequency()
```
#### Description
[](description-start)
Resets update frequency to the default frequency of 1, meaning 16 FPS.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local button_layout = GMUI.Layout.New({
    parent = DCEI.GetUiRootFrame(),
    name = "Standard/Button/Button",
})

local function SetUpdateFrequencyButton()
    local update_freq = DCEI.GetUpdateFrequency()
    if update_freq == 1 then
        DCEI.SetUpdateFrequency(0.5)
    else
        DCEI.ClearUpdateFrequency()
    end
end

DCEI.SetOnClickCallback(button_layout.Button, SetUpdateFrequencyButton)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## float GetUpdateFrequency() {getupdatefrequency-0}
```cs
float GetUpdateFrequency()
```
#### Description
[](description-start)
Returns the update frequency.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local button_layout = GMUI.Layout.New({
    parent = DCEI.GetUiRootFrame(),
    name = "Standard/Button/Button",
})

local function SetUpdateFrequencyButton()
    local update_freq = DCEI.GetUpdateFrequency()
    if update_freq == 1 then
        DCEI.SetUpdateFrequency(0.5)
    else
        DCEI.ClearUpdateFrequency()
    end
end

DCEI.SetOnClickCallback(button_layout.Button, SetUpdateFrequencyButton)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetSpeedFactor(float value) {setspeedfactor-1}
```cs
void SetSpeedFactor(float value)
```
#### Description
[](description-start)
Sets the speed factor for the simulation. The speed factor applies a multiplier to delta time in simulation updates, affecting how much time is processed in each simulation update. This will affect simulation results so it's recommended to only use it for slow motion effects with values like 1/64, 1/128, etc. Simulation update rate is now defaulted to 16 FPS with exactly 0.0625 delta time between updates.
[](description-end)

#### Parameters
[](parameters-start)
- *float* `value` the multiplier for how much time is processed on each game update.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local button_layout = GMUI.Layout.New({
    parent = DCEI.GetUiRootFrame(),
    name = "Standard/Button/Button",
})

local function SetSpeedFactorButton()
    local speed_factor = DCEI.GetSpeedFactor()
    if speed_factor == 1 then
        DCEI.SetSpeedFactor(0.5)
    else
        DCEI.SetSpeedFactor(1)
    end
end

DCEI.SetOnClickCallback(button_layout.Button, SetSpeedFactorButton)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [SetUpdateFrequency](Trigger-API-Reference-DCEI-Functions-Game#setupdatefrequency-1)
- [Core.GameSpeed](Mods-Core#gamespeed)
[](extra-section-end)

## float GetSpeedFactor() {getspeedfactor-0}
```cs
float GetSpeedFactor()
```
#### Description
[](description-start)
Returns the speed factor.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local button_layout = GMUI.Layout.New({
    parent = DCEI.GetUiRootFrame(),
    name = "Standard/Button/Button",
})

local function SetSpeedFactorButton()
    local speed_factor = DCEI.GetSpeedFactor()
    if speed_factor == 1 then
        DCEI.SetSpeedFactor(0.5)
    else
        DCEI.SetSpeedFactor(1)
    end
end

DCEI.SetOnClickCallback(button_layout.Button, SetSpeedFactorButton)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetVictory() {setvictory-0}
```cs
void SetVictory()
```
#### Description
[](description-start)
Ends the game in a victory.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local button_layout = GMUI.Layout.New({
    parent = DCEI.GetUiRootFrame(),
    name = "Standard/Button/Button",
})

DCEI.SetOnClickCallback(button_layout.Button, function()
    DCEI.SetVictory()
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetDefeat() {setdefeat-0}
```cs
void SetDefeat()
```
#### Description
[](description-start)
Ends the game in a defeat.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local button_layout = GMUI.Layout.New({
    parent = DCEI.GetUiRootFrame(),
    name = "Standard/Button/Button",
})

DCEI.SetOnClickCallback(button_layout.Button, function()
    DCEI.SetDefeat()
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetVictoryForPlayer(int player, string result = null) {setvictoryforplayer-2}
```cs
void SetVictoryForPlayer(int player, string result = null)
```
#### Description
[](description-start)
End the game in a victory for given player, with the given result.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `player` integer corresponding to the player.
- *string* `result` the result.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local button_layout = GMUI.Layout.New({
    parent = DCEI.GetUiRootFrame(),
    name = "Standard/Button/Button",
})

DCEI.SetOnClickCallback(button_layout.Button, function()
    DCEI.SetVictoryForPlayer(1, "Win")
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetDefeatForPlayer(int player, string result = null) {setdefeatforplayer-2}
```cs
void SetDefeatForPlayer(int player, string result = null)
```
#### Description
[](description-start)
End the game in a defeat for given player, with the given result.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `player` integer corresponding to the player.
- *string* `result` the result.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local button_layout = GMUI.Layout.New({
    parent = DCEI.GetUiRootFrame(),
    name = "Standard/Button/Button",
})

DCEI.SetOnClickCallback(button_layout.Button, function()
    DCEI.SetVictoryForPlayer(1, "Lose")
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## int GetConsumableItemCount(string key) {getconsumableitemcount-1}
```cs
int GetConsumableItemCount(string key)
```
#### Description
[](description-start)
Get Wild Sky consumable item quantity from the players meta inventory. 
[](description-end)

#### Parameters
[](parameters-start)
- *string* `key` the consumable's name/ID.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local barrage_count = DCEI.GetConsumableItemCount("consumable_barrage")
DCEI.LogMessage("barrage: " .. barrage_count)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void AddConsumableItem(string key, int amount) {addconsumableitem-2}
```cs
void AddConsumableItem(string key, int amount)
```
#### Description
[](description-start)
Add Wild Sky consumable item quantity from the players meta inventory. 
[](description-end)

#### Parameters
[](parameters-start)
- *string* `key` the consumable's name/ID.
- *int* `amount` the amount to increase consumable by.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local barrage_count = DCEI.GetConsumableItemCount("consumable_barrage")
DCEI.LogMessage("barrage: " .. barrage_count)

DCEI.AddConsumableItem("consumable_barrage", 5)

local barrage_count = DCEI.GetConsumableItemCount("consumable_barrage")
DCEI.LogMessage("barrage: " .. barrage_count)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ReduceConsumableItem(string key, int amount) {reduceconsumableitem-2}
```cs
void ReduceConsumableItem(string key, int amount)
```
#### Description
[](description-start)
Reduce Wild Sky consumable item quantity from the players meta inventory. 
[](description-end)

#### Parameters
[](parameters-start)
- *string* `key` the consumable's name/ID.
- *int* `amount` the amount to decrease consumable by.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local barrage_count = DCEI.GetConsumableItemCount("consumable_barrage")
DCEI.LogMessage("barrage: " .. barrage_count)

DCEI.AddConsumableItem("consumable_barrage", 5)

local barrage_count = DCEI.GetConsumableItemCount("consumable_barrage")
DCEI.LogMessage("barrage: " .. barrage_count)

DCEI.ReduceConsumableItem("consumable_barrage", 2)

local barrage_count = DCEI.GetConsumableItemCount("consumable_barrage")
DCEI.LogMessage("barrage: " .. barrage_count)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void DisableGameEndDetection(object victoryCallback = null, object defeatCallback = null) {disablegameenddetection-2}
```cs
void DisableGameEndDetection(object victoryCallback = null, object defeatCallback = null)
```
#### Description
[](description-start)
Disables automatic defeat on Ship death in Wild Sky, with callbacks to handle what should occur on Victory and Defeat. 
[](description-end)

#### Parameters
[](parameters-start)
- *object* `victoryCallback` lua function to run on victory.
- *object* `defeatCallback` lua function to run on defeat.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
  DCEI.DisableGameEndDetection(function()
      DCEI.RecordShipHp()
      DCEI.SetVictory()
  end, function()
      DCEI.SetDefeat()
  end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void EnableGameEndDetection() {enablegameenddetection-0}
```cs
void EnableGameEndDetection()
```
#### Description
[](description-start)
Re-enable automatic end-game detection for Wild Sky, if previously disabled with `DCEI.DisableGameEndDetection`
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
  DCEI.DisableGameEndDetection(function()
      DCEI.RecordShipHp()
      DCEI.SetVictory()
  end, function()
      DCEI.SetDefeat()
  end)
  DCEI.EnableGameEndDetection()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetEndgamePause(bool toPause) {setendgamepause-1}
```cs
void SetEndgamePause(bool toPause)
```
#### Description
[](description-start)
Toggles on and off pausing on victory/defeat. 
[](description-end)

#### Parameters
[](parameters-start)
- *bool* `toPause` true to pause, false to not pause.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.SetEndgamePause(false)
DCEI.SetVictory()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

