<div id="toc" markdown="1">
- [Trigger API Reference\DCEI Functions\Actor](#trigger-api-referencedcei-functionsactor)
  * [GetAnimationClipId](#getanimationclipid-1)
  * [CompileActorAction](#compileactoraction-1)
  * [SendActorAction](#sendactoraction-3)
  * [SetVfxPriorityLevel](#setvfxprioritylevel-1)

</div>

***

# [Trigger API Reference](Trigger-API-Reference)\\DCEI Functions\Actor {Trigger-API-ReferenceDCEI-FunctionsActor}

[](overview-start)

[](overview-end)

## int GetAnimationClipId(string name) {getanimationclipid-1}
```cs
int GetAnimationClipId(string name)
```
#### Description
[](description-start)
Get animation clip Id according to the clip name.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `name` animation clip name.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local id = DCEI.GetAnimationClipId("attack")
DCEI.CompileActorAction('{"playAnimation": {"clipId": ' .. tostring(id) .. '}}')
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## int CompileActorAction(string action) {compileactoraction-1}
```cs
int CompileActorAction(string action)
```
#### Description
[](description-start)
Compiles the given action for an actor and returns a corresponding integer ID.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `action` the action to compile, as a JSON string.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local action_id = DCEI.CompileActorAction("{\"create\":{\"actor\":\"Standard RangedUnit\"}}")
DCEI.SendActorAction(unit, action_id, "Standard MeleeUnit")
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [SendActorMessage()](Mods-Core#sendactormessage)
- [Actions](Data-ActorEvent#actions)
[](extra-section-end)

## void SendActorAction(unit unit, int compiledActorActionId, string targetActorName = null) {sendactoraction-3}
```cs
void SendActorAction(unit unit, int compiledActorActionId, string targetActorName = null)
```
#### Description
[](description-start)
Sends the compiled actor action to the given actor on the given unit.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to send the actor action to.
- *int* `compiledActorActionId` the actor action ID generated by [CompileActorAction](Trigger-API-Reference-DCEI-Functions-Actor#compileactoraction-1)
- *string* `targetActorName` (optional) the actor to execute the compiled actor action. Must belong to the unit's actor scope. If no target actor is given, the unit's actor will be used instead.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local action_id = DCEI.CompileActorAction("{\"create\":{\"actor\":\"Standard RangedUnit\"}}")
DCEI.SendActorAction(unit, action_id, "Standard MeleeUnit")
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [SendActorMessage()](Mods-Core#sendactormessage)
- [Actions](Data-ActorEvent#actions)
[](extra-section-end)

## void SetVfxPriorityLevel(int level) {setvfxprioritylevel-1}
```cs
void SetVfxPriorityLevel(int level)
```
#### Description
[](description-start)
Discard some VFX for better performance on low-end devices. The priority levels are 1, 2, and 3, and all VFX with priority lower than the priority level will not display. The actor's priority can be set in the editor's actor data tab. 
[](description-end)

#### Parameters
[](parameters-start)
- *int* `level` the level of VFX to discard.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local button_layout = GMUI.Layout.New({
    parent = DCEI.GetUiRootFrame(),
    name = "Standard/Button/Button",
})

DCEI.SetOnClickCallback(button_layout.Button, function()
    DCEI.SetVfxPriorityLevel(2)
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

