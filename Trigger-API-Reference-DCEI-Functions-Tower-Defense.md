<div id="toc" markdown="1">
- [Trigger API Reference\DCEI Functions\Tower Defense](#trigger-api-referencedcei-functionstower-defense)
  * [StartWaves](#startwaves-0)
  * [PauseCallWaveTimer](#pausecallwavetimer-0)
  * [GetTotalWaveCount](#gettotalwavecount-0)
  * [ResumeCallWaveTimer](#resumecallwavetimer-0)
  * [CallNextWave](#callnextwave-0)
  * [SetDisableWaveAutoStart](#setdisablewaveautostart-1)
  * [GetCurrentWaveId](#getcurrentwaveid-0)
  * [ShowDotManaBar](#showdotmanabar-1)
  * [ShowDotHealthBar](#showdothealthbar-1)
  * [ShowShipHealthBar](#showshiphealthbar-1)
  * [IsWaveSpawning](#iswavespawning-0)
  * [ShowCallWaveIndicators](#showcallwaveindicators-0)
  * [HideCallWaveIndicators](#hidecallwaveindicators-0)
  * [ShowTowerMenuHelper](#showtowermenuhelper-2)
  * [HideTowerMenuHelper](#hidetowermenuhelper-0)
  * [ShowShipSpellHelper](#showshipspellhelper-2)
  * [HideShipSpellHelper](#hideshipspellhelper-0)
  * [ShowHeroHelper](#showherohelper-1)
  * [HideHeroHelper](#hideherohelper-1)
  * [ShowHeroSkillHelper](#showheroskillhelper-1)
  * [HideHeroSkillHelper](#hideheroskillhelper-1)
  * [FindClosestPointOnRoad](#findclosestpointonroad-3)
  * [ShowVictoryContinueHelper](#showvictorycontinuehelper-0)
  * [ShowDefeatReplayHelper](#showdefeatreplayhelper-0)
  * [HideFastForwardButton](#hidefastforwardbutton-0)
  * [DisableQuitButton](#disablequitbutton-0)
  * [HideShipSpellMenu](#hideshipspellmenu-0)
  * [HideShipSpellMenuAnimated](#hideshipspellmenuanimated-0)
  * [ShowShipSpellMenu](#showshipspellmenu-0)
  * [ShowShipSpellMenuAnimated](#showshipspellmenuanimated-0)
  * [UnblockShipSpell](#unblockshipspell-1)
  * [BlockAllShipSpells](#blockallshipspells-0)
  * [UnblockAllShipSpells](#unblockallshipspells-0)
  * [ShowMessageClickHelper](#showmessageclickhelper-0)
  * [HideMessageClickHelper](#hidemessageclickhelper-0)
  * [RecordShipHp](#recordshiphp-0)
  * [UseBossWaveIndicator](#usebosswaveindicator-0)
  * [ExitTargetingModeAndDeselectUnits](#exittargetingmodeanddeselectunits-0)
  * [RegisterSpawnGroup](#registerspawngroup-2)
  * [RegisterSpawnPattern](#registerspawnpattern-5)
  * [AddSpawnWave](#addspawnwave-1)
  * [AddDynamicSpawnWaves](#adddynamicspawnwaves-2)
  * [RemoveTowerBuildLimit](#removetowerbuildlimit-0)
  * [IncreaseTowerBuildLimit](#increasetowerbuildlimit-1)

</div>

***

# [Trigger API Reference](Trigger-API-Reference)\\DCEI Functions\Tower Defense {Trigger-API-ReferenceDCEI-FunctionsTower-Defense}

[](overview-start)

[](overview-end)

## void StartWaves() {startwaves-0}
```cs
void StartWaves()
```
#### Description
[](description-start)
Force the Wild Sky TD wave to start, as if the "Call Wave" button had been pressed.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function Wave05()
    DCEI.SetDisableWaveAutoStart() -- Pause waves
    DCEI.Wait(4)
    DCEI.StartWaves() -- Force waves to start anyway
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void PauseCallWaveTimer() {pausecallwavetimer-0}
```cs
void PauseCallWaveTimer()
```
#### Description
[](description-start)
Pause the countdown until the next Wild Sky TD wave begins. 
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function Wave05()
    DCEI.PauseCallWaveTimer() -- Pause waves
    DCEI.Wait(4)
    DCEI.ResumeCallWaveTimer() -- Resume waves
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## int GetTotalWaveCount() {gettotalwavecount-0}
```cs
int GetTotalWaveCount()
```
#### Description
[](description-start)
Get the number of Wild Sky TD creep spawn waves that are currently initialized.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function OnWaveStatusChange()
    -- The last wave will always be a boss; so number of waves = boss wave
    local boss_wave = DCEI.GetTotalWaveCount()
    if DCEI.TriggeringWaveId == boss_wave and DCEI.TriggeringWaveStatus == "Spawning" then
        -- If current wave that's spawning is the boss wave, spawn the boss
        BossWaveStart()
    end
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ResumeCallWaveTimer() {resumecallwavetimer-0}
```cs
void ResumeCallWaveTimer()
```
#### Description
[](description-start)
Resume the countdown until the next Wild Sky TD wave begins. 
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function Wave05()
    DCEI.PauseCallWaveTimer() -- Pause wave countdown
    DCEI.Wait(4)
    DCEI.ResumeCallWaveTimer() -- Resume wave countdown
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## bool CallNextWave() {callnextwave-0}
```cs
bool CallNextWave()
```
#### Description
[](description-start)
Force the Wild Sky TD wave to start, as if the "Call Wave" button had been pressed.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function Wave05()
    DCEI.PauseCallWaveTimer() -- Pause waves
    DCEI.Wait(4)
    DCEI.CallNextWave() -- Force waves to start anyway
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetDisableWaveAutoStart(bool disable) {setdisablewaveautostart-1}
```cs
void SetDisableWaveAutoStart(bool disable)
```
#### Description
[](description-start)
Sets the wave auto-start behavior. When disable is set to true, the wave auto-start feature is disabled. When disable is set to false, the wave auto-start feature is enabled.
[](description-end)

#### Parameters
[](parameters-start)
- *bool* `disable` A boolean value indicating whether to disable wave auto-start.
[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function Wave05()
    DCEI.SetDisableWaveAutoStart(true) -- Pause waves
    DCEI.Wait(4)
    DCEI.StartWaves() -- Force waves to start anyway
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## int GetCurrentWaveId() {getcurrentwaveid-0}
```cs
int GetCurrentWaveId()
```
#### Description
[](description-start)
Returns the current wave ID. Wild Sky TD only. 
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function LogTakeHeroItemEvent(hero_name, item_name)
    local data = string.format(
        '{"Stage": "%s", "Wave": %d, "Hero": "%s", "Item": "%s"}',
        DCEI.GetLevel(),
        DCEI.GetCurrentWaveId(),
        hero_name,
        item_name
    )
    DCEI.LogEvent("Take HeroItems", data)
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ShowDotManaBar(unit unit) {showdotmanabar-1}
```cs
void ShowDotManaBar(unit unit)
```
#### Description
[](description-start)
Show a dot-style mana bar. 
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to create the mana bar for.
[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local unit = DCEI.CreateUnit(1, 1, DCEI.Unit("Creep Golem Light Player"), x, y)
DCEI.ShowDotManaBar(unit)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ShowDotHealthBar(unit unit) {showdothealthbar-1}
```cs
void ShowDotHealthBar(unit unit)
```
#### Description
[](description-start)
Show a dot-style health bar. 
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to create the health bar for.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local unit = DCEI.CreateUnit(1, 1, DCEI.Unit("Creep Golem Light Player"), x, y)
DCEI.ShowDotHealthBar(unit)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ShowShipHealthBar(unit unit) {showshiphealthbar-1}
```cs
void ShowShipHealthBar(unit unit)
```
#### Description
[](description-start)
Show a ship-style health bar.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to create the health bar for.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local unit = DCEI.CreateUnit(1, 1, DCEI.Unit("Creep Golem Light Player"), x, y)
DCEI.ShowShipHealthBar(unit)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## bool IsWaveSpawning() {iswavespawning-0}
```cs
bool IsWaveSpawning()
```
#### Description
[](description-start)
Returns if a wild sky TD creep wave is currently spawning or not.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function SophiaStartSequence()
    -- Wait until wave 3 is done spawning
    while DCEI.IsWaveSpawning() do
        DCEI.Wait(0.0625)
    end

    -- Create Sophia
    local pos = { x = 23, y = 15 }
    local SophiaUnit = DCEI.CreateUnit(1, 1, DCEI.Unit("Sophia"), pos.x, pos.y, -1, 1)
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ShowCallWaveIndicators() {showcallwaveindicators-0}
```cs
void ShowCallWaveIndicators()
```
#### Description
[](description-start)
Show the call wave indicator for the next Wild Sky creep wave. 
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function OnPreviousWaveFinish()
  DCEI.HideCallWaveIndicators()
  DCEI.Wait(15)
  DCEI.ShowCallWaveIndicators()
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void HideCallWaveIndicators() {hidecallwaveindicators-0}
```cs
void HideCallWaveIndicators()
```
#### Description
[](description-start)
Hide the call wave indicator for the next Wild Sky creep wave. 
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function OnPreviousWaveFinish()
  DCEI.HideCallWaveIndicators()
  DCEI.Wait(15)
  DCEI.ShowCallWaveIndicators()
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ShowTowerMenuHelper(unit unit, string abilityName) {showtowermenuhelper-2}
```cs
void ShowTowerMenuHelper(unit unit, string abilityName)
```
#### Description
[](description-start)
Shows a "big hand" pointing at an icon for a specific ability on a tower build menu. Wild Sky only.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to show the helper hand on.
- *string* `abilityName` the ability to show the helper hand on.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function SellTutorialDialogSequence()
    local pos = {
        x = 14.39,
        y = 19.34,
    }
    local tower = DCEI.FindUnitAtPosition(DCEI.Unit("Arrow Tower"), pos.x, pos.y)
    DCEI.SelectUnit(tower)

    -- Sell tower
    DCEI.ShowTowerMenuHelper(tower, DCEI.Ability("Sell"))

    -- Wait
    DCEI.Wait(5)
    
    -- Hide helper
    DCEI.HideTowerMenuHelper()
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void HideTowerMenuHelper() {hidetowermenuhelper-0}
```cs
void HideTowerMenuHelper()
```
#### Description
[](description-start)
Hide any currently active "big hand" pointing at an icon for a specific ability on a tower build menu. Wild Sky only.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function SellTutorialDialogSequence()
    local pos = {
        x = 14.39,
        y = 19.34,
    }
    local tower = DCEI.FindUnitAtPosition(DCEI.Unit("Arrow Tower"), pos.x, pos.y)
    DCEI.SelectUnit(tower)

    -- Sell tower
    DCEI.ShowTowerMenuHelper(tower, DCEI.Ability("Sell"))

    -- Wait
    DCEI.Wait(5)
    
    -- Hide helper
    DCEI.HideTowerMenuHelper()
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ShowShipSpellHelper(unit unit, string abilityName) {showshipspellhelper-2}
```cs
void ShowShipSpellHelper(unit unit, string abilityName)
```
#### Description
[](description-start)
Show a big hand pointing at a ship ability icon.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that has the ability.
- *string* `abilityName` the name of the ability to highlight.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local ship = DCEI.CreateUnit(-1, -1, DCEI.Unit("Ship"), 15, 15)
DCEI.ShowShipSpellMenu()
DCEI.ShowShipSpellHelper(ship, "Barrage")
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void HideShipSpellHelper() {hideshipspellhelper-0}
```cs
void HideShipSpellHelper()
```
#### Description
[](description-start)
Hide any big hand pointing at a ship ability icon.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local ship = DCEI.CreateUnit(-1, -1, DCEI.Unit("Ship"), 15, 15)
DCEI.ShowShipSpellMenu()
DCEI.ShowShipSpellHelper(ship, "Barrage")
DCEI.Wait(5)
DCEI.HideShipSpellHelper()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ShowHeroHelper(int slot) {showherohelper-1}
```cs
void ShowHeroHelper(int slot)
```
#### Description
[](description-start)
Show a finger pointing at the in-game UI for a hero button.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `slot` which hero slot to point at.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local slot_to_highlight = 2 

-- Show hero icons
DCEI.ShowUnitStatusUiInSlot(3, hero1, 1)  
DCEI.ShowUnitStatusUiInSlot(3, hero2, slot_to_highlight) 
DCEI.ShowUnitStatusUiInSlot(3, hero3, 3) 

-- Highlight one of them
DCEI.ShowHeroHelper(slot_to_highlight)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void HideHeroHelper(int slot) {hideherohelper-1}
```cs
void HideHeroHelper(int slot)
```
#### Description
[](description-start)
Hide helper finger pointing at the in-game UI for a hero button.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `slot` which hero slot to stop pointing at.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local slot_to_highlight = 2 

-- Show hero icons
DCEI.ShowUnitStatusUiInSlot(3, hero1, 1)  
DCEI.ShowUnitStatusUiInSlot(3, hero2, slot_to_highlight) 
DCEI.ShowUnitStatusUiInSlot(3, hero3, 3) 

-- Highlight one of them
DCEI.ShowHeroHelper(slot_to_highlight)

DCEI.Wait(5)

DCEI.HideHeroHelper(slot_to_highlight)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ShowHeroSkillHelper(int slot) {showheroskillhelper-1}
```cs
void ShowHeroSkillHelper(int slot)
```
#### Description
[](description-start)
Helper pointer for a hero's skill button.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `slot` which hero slot to stop pointing at.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local slot_to_highlight = 2 

-- Show hero icons
DCEI.ShowUnitStatusUiInSlot(3, hero1, 1)  
DCEI.ShowUnitStatusUiInSlot(3, hero2, slot_to_highlight) 
DCEI.ShowUnitStatusUiInSlot(3, hero3, 3) 

-- Show hero ability icons
DCEI.ShowAbilitiesUiInSlot(2, hero1, 1)  
DCEI.ShowAbilitiesUiInSlot(2, hero2, slot_to_highlight) 
DCEI.ShowAbilitiesUiInSlot(2, hero3, 3) 

-- Highlight one of them
DCEI.ShowHeroSkillHelper(slot_to_highlight)

DCEI.Wait(5)

DCEI.HideHeroSkillHelper(slot_to_highlight)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void HideHeroSkillHelper(int slot) {hideheroskillhelper-1}
```cs
void HideHeroSkillHelper(int slot)
```
#### Description
[](description-start)
Hide helper pointer for a hero's skill button.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `slot` which hero slot to stop pointing at.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local slot_to_highlight = 2 

-- Show hero icons
DCEI.ShowUnitStatusUiInSlot(3, hero1, 1)  
DCEI.ShowUnitStatusUiInSlot(3, hero2, slot_to_highlight) 
DCEI.ShowUnitStatusUiInSlot(3, hero3, 3) 

-- Show hero ability icons
DCEI.ShowAbilitiesUiInSlot(2, hero1, 1)  
DCEI.ShowAbilitiesUiInSlot(2, hero2, slot_to_highlight) 
DCEI.ShowAbilitiesUiInSlot(2, hero3, 3) 

-- Highlight one of them
DCEI.ShowHeroSkillHelper(slot_to_highlight)

DCEI.Wait(5)

DCEI.HideHeroSkillHelper(slot_to_highlight)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## Float2 FindClosestPointOnRoad(float x, float z, bool ignoreRallyDisabledLanes) {findclosestpointonroad-3}
```cs
Float2 FindClosestPointOnRoad(float x, float z, bool ignoreRallyDisabledLanes)
```
#### Description
[](description-start)
Returns a point on the closest waypoint path to the given coordinants. 
[](description-end)

#### Parameters
[](parameters-start)
- *float* `x` the x coordinant of point to find nearest path point to
- *float* `z` the z coordinant of point to find nearest path point to
- *bool* `ignoreRallyDisabledLanes` if true, ignores waypoint paths with the "rallyDisabled" flag checked.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.TriggerAddEffectEvent(DCEI.Effect("GameSystem MoveToLane LuaHook"), function()
	local target = DCEI.TriggeringEffectContext.target
	local targetPos = DCEI.GetUnitPosition2D(target)
	local pos = DCEI.FindClosestPointOnRoad(targetPos.x, targetPos.y, true)
	DCEI.Move(target, pos.x, pos.y)
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ShowVictoryContinueHelper() {showvictorycontinuehelper-0}
```cs
void ShowVictoryContinueHelper()
```
#### Description
[](description-start)
Show Wild Sky victory continue helper
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
    -- tutorial settings
    DCEI.ShowVictoryContinueHelper()
    DCEI.ShowDefeatReplayHelper()
    DCEI.ShowMessageClickHelper()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ShowDefeatReplayHelper() {showdefeatreplayhelper-0}
```cs
void ShowDefeatReplayHelper()
```
#### Description
[](description-start)
Show helper on Wild Sky defeat replay button
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
    -- tutorial settings
    DCEI.ShowVictoryContinueHelper()
    DCEI.ShowDefeatReplayHelper()
    DCEI.ShowMessageClickHelper()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void HideFastForwardButton() {hidefastforwardbutton-0}
```cs
void HideFastForwardButton()
```
#### Description
[](description-start)
Hides the fast forward button.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local layout = GMUI.Layout.New({
    parent = DCEI.GetUiRootFrame(),
    name = "Standard/Button/Button",
})
DCEI.SetOnClickCallback(layout.Button, function()
    DCEI.HideFastForwardButton()
end)

```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void DisableQuitButton() {disablequitbutton-0}
```cs
void DisableQuitButton()
```
#### Description
[](description-start)
Disable the quit button.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local layout = GMUI.Layout.New({
    parent = DCEI.GetUiRootFrame(),
    name = "Standard/Button/Button",
})
DCEI.SetOnClickCallback(layout.Button, function()
    DCEI.DisableQuitButton()
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void HideShipSpellMenu() {hideshipspellmenu-0}
```cs
void HideShipSpellMenu()
```
#### Description
[](description-start)
Hide Wild Sky ship spell menu. 
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local layout = GMUI.Layout.New({
    parent = DCEI.GetUiRootFrame(),
    name = "Standard/Button/Button",
})
DCEI.SetOnClickCallback(layout.Button, function()
    DCEI.HideShipSpellMenu()
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void HideShipSpellMenuAnimated() {hideshipspellmenuanimated-0}
```cs
void HideShipSpellMenuAnimated()
```
#### Description
[](description-start)
Animate the hiding of the wild sky ship spell menu.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local ship = DCEI.CreateUnit(-1, -1, DCEI.Unit("Ship"), 15, 15)
DCEI.ShowShipSpellMenuAnimated()
DCEI.Wait(5)
DCEI.HideShipSpellMenuAnimated()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ShowShipSpellMenu() {showshipspellmenu-0}
```cs
void ShowShipSpellMenu()
```
#### Description
[](description-start)
Show the Wild Sky ship spell menu.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local ship = DCEI.CreateUnit(-1, -1, DCEI.Unit("Ship"), 15, 15)
DCEI.ShowShipSpellMenu()
DCEI.Wait(5)
DCEI.HideShipSpellMenu()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ShowShipSpellMenuAnimated() {showshipspellmenuanimated-0}
```cs
void ShowShipSpellMenuAnimated()
```
#### Description
[](description-start)
Animate showing the Wild Sky ship spell menu.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local ship = DCEI.CreateUnit(-1, -1, DCEI.Unit("Ship"), 15, 15)
DCEI.ShowShipSpellMenuAnimated()
DCEI.Wait(5)
DCEI.HideShipSpellMenuAnimated()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void UnblockShipSpell(string abilityName) {unblockshipspell-1}
```cs
void UnblockShipSpell(string abilityName)
```
#### Description
[](description-start)
Unblock a wild sky ship spell button. 
[](description-end)

#### Parameters
[](parameters-start)
- *string* `abilityName` the name of the ability to unblock.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local ship = DCEI.CreateUnit(-1, -1, DCEI.Unit("Ship"), 15, 15)
DCEI.ShowShipSpellMenuAnimated()

DCEI.BlockAllShipSpells()
DCEI.Wait(5)
DCEI.UnblockShipSpell("Barrage")
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void BlockAllShipSpells() {blockallshipspells-0}
```cs
void BlockAllShipSpells()
```
#### Description
[](description-start)
Blocks all Wild Sky ship spell buttons. 
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local ship = DCEI.CreateUnit(-1, -1, DCEI.Unit("Ship"), 15, 15)
DCEI.ShowShipSpellMenuAnimated()
DCEI.BlockAllShipSpells()

DCEI.Wait(5)

DCEI.UnblockShipSpell("Barrage")
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void UnblockAllShipSpells() {unblockallshipspells-0}
```cs
void UnblockAllShipSpells()
```
#### Description
[](description-start)

[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local ship = DCEI.CreateUnit(-1, -1, DCEI.Unit("Ship"), 15, 15)
DCEI.ShowShipSpellMenuAnimated()

DCEI.BlockAllShipSpells()

DCEI.Wait(5)

DCEI.UnblockAllShipSpells("Barrage")
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ShowMessageClickHelper() {showmessageclickhelper-0}
```cs
void ShowMessageClickHelper()
```
#### Description
[](description-start)
Show Wild Sky message click helper
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
    -- tutorial settings
    DCEI.ShowVictoryContinueHelper()
    DCEI.ShowDefeatReplayHelper()
    DCEI.ShowMessageClickHelper()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void HideMessageClickHelper() {hidemessageclickhelper-0}
```cs
void HideMessageClickHelper()
```
#### Description
[](description-start)
Hide Wild Sky message click helper
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
    -- tutorial settings
    DCEI.HideVictoryContinueHelper()
    DCEI.HideDefeatReplayHelper()
    DCEI.HideMessageClickHelper()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## bool RecordShipHp() {recordshiphp-0}
```cs
bool RecordShipHp()
```
#### Description
[](description-start)
Records the ship's HP for Wild Sky; for the meta side to utilize. 
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local ship = DCEI.CreateUnit(-1, -1, DCEI.Unit("Ship"), 15, 15)

DCEI.Wait(5)

DCEI.RecordShipHp()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void UseBossWaveIndicator() {usebosswaveindicator-0}
```cs
void UseBossWaveIndicator()
```
#### Description
[](description-start)
Use the boss wave indicator.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function OnWaveStatusChange()
    local status = DCEI.TriggeringWaveStatus
    local wave = DCEI.TriggeringWaveId

    if status == "Spawning" and wave == 10 then
        DCEI.UseBossWaveIndicator()
    end
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ExitTargetingModeAndDeselectUnits() {exittargetingmodeanddeselectunits-0}
```cs
void ExitTargetingModeAndDeselectUnits()
```
#### Description
[](description-start)
Exits the targeting phase of ability casting, and deselects units. 
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function tutorialBigHand()
    DCEI.ExitTargetingModeAndDeselectUnits()
    DCEI.BlockGameWorld()

    DCEI.SetSpeedFactor(1 / 256)
    DCEI.BlockAllShipSpells()
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void RegisterSpawnGroup(string name, List\<SpawnGroupUnit> units) {registerspawngroup-2}
```cs
void RegisterSpawnGroup(string name, List<SpawnGroupUnit> units)
```
#### Description
[](description-start)
This function is used to generate [Spawn Groups](https://wiki.funovus.com/master/Tower-Defense-Feature-Overview#spawn-groups) which can then be used in dynamic spawn waves. Note that this is optional, as you can also use spawn groups defined in data or simply a unit type and pattern. For more information see [Subgroups](https://wiki.funovus.com/master/Tower-Defense-Feature-Overview#spawn-waves).
[](description-end)

#### Parameters
[](parameters-start)
- *string* `name` Used to reference the spawn group when adding to the spawn wave later.
- *List\<SpawnGroupUnit>* `units` A list of unit types, delays, and offsets that make up a spawn group, just like spawn groups in data.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local pattern = {
    name = "Goblin x3",
    group = {
        {
            unit = "Creep Goblin",
            delay = 0,
            offset = 0,
        },
        {
            unit = "Creep Goblin",
            delay = 1,
            offset = -0.25,
        },
        {
            unit = "Creep Goblin",
            delay = 1,
            offset = 0.25,
        }
    }
}

DCEI.RegisterSpawnGroup(pattern.name, pattern.group)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void RegisterSpawnPattern(string name, float intervalMin, float intervalMax, float dispersalMin, float dispersalMax) {registerspawnpattern-5}
```cs
void RegisterSpawnPattern(string name, float intervalMin, float intervalMax, float dispersalMin, float dispersalMax)
```
#### Description
[](description-start)
Register a Wild Sky creep wave "Spawn Pattern"
[](description-end)

#### Parameters
[](parameters-start)
- *string* `name` name of the spawn pattern
- *float* `intervalMin` minimum wait between spawns
- *float* `intervalMax` maximum wait between spawns
- *float* `dispersalMin` minimum positional offset on the path
- *float* `dispersalMax` maximum positional offset on the path

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local Spawn_Patterns = {
	-- Wave 1
	{
		{ -- route 2
			route_name = Route_Names[2],
			initial_delay = 3,
			group_pattern = "Generic_Goblin",
			pattern = "W1_R2",
			count = 4,
		},
		{ -- route 3
			route_name = Route_Names[3],
			initial_delay = 3,
			group_pattern = "Generic_Goblin",
			pattern = "W1_R3",
			count = 4,
		},
	},
	-- Wave 2
	{
		{
			route_name = Route_Names[1],
			initial_delay = 1,
			group_pattern = "W2_R1",
			pattern = "W2_R1",
			count = 2,
		},
		{
			route_name = Route_Names[4],
			initial_delay = 1,
			group_pattern = "W2_R4",
			pattern = "W2_R4",
			count = 2,
		},
	},
}
function mod.SetSpawnPatterns()
	for i = 1, #Spawn_Patterns do
		for j = 1, #Spawn_Patterns[i] do
			DCEI.RegisterSpawnPattern(Spawn_Patterns[i][j].pattern, 0, 0, 0.5, 0.5)
		end
	end
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void AddSpawnWave(SpawnWaveOptions options) {addspawnwave-1}
```cs
void AddSpawnWave(SpawnWaveOptions options)
```
#### Description
[](description-start)
This function is used to describe waves. The `options` parameter accepts a table with many specific attributes that match the same parameters available in [Spawn Waves](https://wiki.funovus.com/master/Tower-Defense-Feature-Overview#spawn-groups) data. It additionally accepts a `behaviors = {}` property, which can be used to apply stacks of behaviors to units as they spawn, which is useful in creating infinitely scaling waves (as you can increase health/damage infinitely based on wave number).
[](description-end)

#### Parameters
[](parameters-start)
- *[SpawnWaveOptions](Trigger-API-Reference-DCEI-Types#spawnwaveoptions)* `options` spawn wave options.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function GenerateNextWave()
    local wave_id = DCEI.TriggeringWaveId
    local groups = GenerateGroups(wave_id) -- we'll explain groups in a moment, but you'll have to generate them yourself

    local wave = {
            total_gold = 100 + 50 * wave_id, 
            bonus_gold = wave_id == 1 and 300 or 100,  -- sets bonus gold to 300 for 1st wave, 100 for subsequent
            start_delay = 1,
            call_wave_countdown = 30,
            groups = groups,
            behaviors = {
                -- Increase creep power for every 5 waves.
                {name = "MorePower", stack = math.floor(wave_id / 3)}
            }
        }
    DCEI.AddSpawnWave(wave)
end
```

`groups` takes a list of groups, matching the same parameters as [Subgroups](https://wiki.funovus.com/master/Tower-Defense-Feature-Overview#spawn-waves). Note that similar to a subgroup, each group can take either a `group_pattern` OR `unit

Example:
```lua
local groups = {}
local group = {
    route_name = "Main",
    initial_delay = 0,
    group_pattern = "Goblin x3",
    pattern = "Line long",
    count = 1
}

table.insert(groups, group)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void AddDynamicSpawnWaves(int count, object callback) {adddynamicspawnwaves-2}
```cs
void AddDynamicSpawnWaves(int count, object callback)
```
#### Description
[](description-start)
This function is what actually adds dynamic waves to the game.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `count` How many waves to generate (-1 for infinite waves) by calling the callback function this many times.
- *object* `callback` callback function that should include `AddSpawnWave()`.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function GenerateNextWave()
	local wave_id = DCEI.TriggeringWaveId
	local groups = {}

	local wave = {
		total_gold = 1000 + 50 * wave_id, -- How much gold to give for a wave
		bonus_gold = wave_id == 1 and 300 or 100, -- Additional gold to give per kills divided amongst spawned creeps.
		start_delay = 10, -- How long until the next wave can start countdown
		call_wave_countdown = 20, -- How long the countdown timer persists before autocall
		groups = mod.GetWaveGroups(wave_id), -- Set the wave groups
	}
	DCEI.AddSpawnWave(wave)
end

-- Negative one makes infinite waves for an endless mode
DCEI.AddDynamicSpawnWaves(-1, GenerateNextWave)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void RemoveTowerBuildLimit() {removetowerbuildlimit-0}
```cs
void RemoveTowerBuildLimit()
```
#### Description
[](description-start)
Disable the wild sky tower build limit.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
-- See also `IncreaseTowerBuildLimit`
DCEI.RemoveTowerBuildLimit()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void IncreaseTowerBuildLimit(int value) {increasetowerbuildlimit-1}
```cs
void IncreaseTowerBuildLimit(int value)
```
#### Description
[](description-start)
Increase the wild sky tower build limit.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `value` How much to increase the tower build limit by.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- See also `RemoveTowerBuildLimit`
DCEI.IncreaseTowerBuildLimit(2)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

