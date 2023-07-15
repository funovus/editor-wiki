<div id="toc" markdown="1">
- [Trigger API Reference\DCEI Functions\Steam](#trigger-api-referencedcei-functionssteam)
  * [Steam.UnlockAchievement](#unlockachievement-1)
  * [Steam.IsAchievementUnlocked](#isachievementunlocked-1)

</div>

***

# [Trigger API Reference](Trigger-API-Reference)\\DCEI Functions\Steam {Trigger-API-ReferenceDCEI-FunctionsSteam}

[](overview-start)

[](overview-end)

## void Steam.UnlockAchievement(string achievementId) {unlockachievement-1}
```cs
void Steam.UnlockAchievement(string achievementId)
```
#### Description
[](description-start)
Unlocks the specified achievement in a Steam game.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `achievementId` the unique identifier of the achievement to be unlocked.
[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local achievementId = "DefeatStage3"
if not DCEI.Steam.IsAchievementUnlocked(achievementId) then
    DCEI.Steam.UnlockAchievement(achievementId)
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## bool Steam.IsAchievementUnlocked(string achievementId) {isachievementunlocked-1}
```cs
bool Steam.IsAchievementUnlocked(string achievementId)
```
#### Description
[](description-start)
Checks if the specified achievement is unlocked in a Steam game. 
[](description-end)

#### Parameters
[](parameters-start)
- *string* `achievementId` the unique identifier of the achievement that is checked to determine if it has been unlocked.
[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local achievementId = "DefeatStage3"
if not DCEI.Steam.IsAchievementUnlocked(achievementId) then
    DCEI.Steam.UnlockAchievement(achievementId)
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

