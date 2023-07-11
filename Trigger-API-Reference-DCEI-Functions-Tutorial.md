<div id="toc" markdown="1">
- [Trigger API Reference\DCEI Functions\Tutorial](#trigger-api-referencedcei-functionstutorial)
  * [ShowWaveIndicatorHelper](#showwaveindicatorhelper-0)
  * [HideWaveIndicatorHelper](#hidewaveindicatorhelper-0)
  * [ShowWorldPositionHelper](#showworldpositionhelper-2)
  * [HideWorldPositionHelper](#hideworldpositionhelper-0)
  * [BlockGameWorld](#blockgameworld-0)
  * [WhitelistUnit](#whitelistunit-1)
  * [WhitelistWorldPosition](#whitelistworldposition-3)
  * [WhitelistUi](#whitelistui-1)
  * [UnblockGameWorld](#unblockgameworld-0)

</div>

***

# [Trigger API Reference](Trigger-API-Reference)\\DCEI Functions\Tutorial {Trigger-API-ReferenceDCEI-FunctionsTutorial}

[](overview-start)

[](overview-end)

## void ShowWaveIndicatorHelper() {showwaveindicatorhelper-0}
```cs
void ShowWaveIndicatorHelper()
```
#### Description
[](description-start)
Show helping hand pointing at the Call Wave indicator for Wild Sky waves.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.ShowWaveIndicatorHelper()

DCEI.Wait(0.0625)

DCEI.HideWaveIndicatorHelper()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void HideWaveIndicatorHelper() {hidewaveindicatorhelper-0}
```cs
void HideWaveIndicatorHelper()
```
#### Description
[](description-start)
Hide helping hand pointing at the Call Wave indicator for Wild Sky waves.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.ShowWaveIndicatorHelper()

DCEI.Wait(0.0625)

DCEI.HideWaveIndicatorHelper()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ShowWorldPositionHelper(float x, float z) {showworldpositionhelper-2}
```cs
void ShowWorldPositionHelper(float x, float z)
```
#### Description
[](description-start)
Shows the position helper hand at the specified coordinates. This will replace previous position helpers.
[](description-end)

#### Parameters
[](parameters-start)
- *float* `x` the X coordinate.
- *float* `z` the Z coordinate.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.ShowPositionHelper(16, 16)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void HideWorldPositionHelper() {hideworldpositionhelper-0}
```cs
void HideWorldPositionHelper()
```
#### Description
[](description-start)
Hides the position helper.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.HideWorldPositionHelper()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void BlockGameWorld() {blockgameworld-0}
```cs
void BlockGameWorld()
```
#### Description
[](description-start)
Blocks the player from interacting with the game world. Removes any active whitelist(s). An exception to this is joystick input.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.BlockGameWorld()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void WhitelistUnit(unit u) {whitelistunit-1}
```cs
void WhitelistUnit(unit u)
```
#### Description
[](description-start)
Whitelists a unit for player selection while normal input is blocked with `DCEI.BlockGameWorld()`. In isolation, this will allow a player to select a unit but not issue movement or other commands to it.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `u` the unit to whitelist.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.WhitelistUnit(unit)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void WhitelistWorldPosition(float x, float z, float radius) {whitelistworldposition-3}
```cs
void WhitelistWorldPosition(float x, float z, float radius)
```
#### Description
[](description-start)
Whitelists a map position for player interaction while normal input is blocked with `DCEI.BlockGameWorld()`.
[](description-end)

#### Parameters
[](parameters-start)
- *float* `x` the X coordinate.
- *float* `z` the Z coordinate.
- *float* `radius` the radius of the area whitelisted for player interaction.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.WhitelistWorldPosition(20, 16, 2)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void WhitelistUi(InGameUILayoutComponent ui) {whitelistui-1}
```cs
void WhitelistUi(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Whitelists the given UI element while normal input is blocked with `DCEI.BlockGameWorld()`
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the UI element to whitelist.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.WhitelistUi(button)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void UnblockGameWorld() {unblockgameworld-0}
```cs
void UnblockGameWorld()
```
#### Description
[](description-start)
Unblocks the game world, allowing user interaction again.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.UnblockGameWorld()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

