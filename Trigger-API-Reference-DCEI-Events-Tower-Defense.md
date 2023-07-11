<div id="toc" markdown="1">
- [Trigger API Reference\DCEI Events\Tower Defense](#trigger-api-referencedcei-eventstower-defense)
  * [TriggerAddWaveStatusChangeEvent](#triggeraddwavestatuschangeevent-1)
  * [TriggerAddCallWaveEvent](#triggeraddcallwaveevent-1)
  * [TriggerAddFastForwardEvent](#triggeraddfastforwardevent-1)

</div>

***

# [Trigger API Reference](Trigger-API-Reference)\\DCEI Events\Tower Defense {Trigger-API-ReferenceDCEI-EventsTower-Defense}

[](overview-start)

[](overview-end)

## void TriggerAddWaveStatusChangeEvent(TypedCallback trigger) {triggeraddwavestatuschangeevent-1}
```cs
void TriggerAddWaveStatusChangeEvent(TypedCallback trigger)
```
#### Description
[](description-start)
Fires an event when the wave status changes. 

There are two relevant APIs:

- *int* `DCEI.TriggeringWaveId` returns the number id of the wave. 
- *string* `DCEI.TriggeringWaveStatus` the current status of the wave. 
  
The types of statuses:

- None,
- NotStarted,
Delay time defined in data, will not show Call Wave Button. Will start count down when this reaches 0
- Delay,
Count down time to show Call Wave Button. Will spawn when this reaches 0
- CountDown,
- Spawning,
- Finished
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback* `trigger` the lua function to run when the event is triggered

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function OnWaveStatusChange()
    if DCEI.TriggeringWaveId == 1 and DCEI.TriggeringWaveStatus == "Spawning" then
        game.OpenAllDoorProps()
    end
end
DCEI.TriggerAddWaveStatusChangeEvent(OnWaveStatusChange)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void TriggerAddCallWaveEvent(TypedCallback\<float> trigger) {triggeraddcallwaveevent-1}
```cs
void TriggerAddCallWaveEvent(TypedCallback<float> trigger)
```
#### Description
[](description-start)
Register an event to trigger a callback whenever a spawn wave is called.
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback\<float>* `trigger` the lua function to run when the event is triggered

[](parameters-end)

#### Callback Parameters
- *Single* `remaining_seconds`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.TriggerAddCallWaveEvent(function()
    if play_story and not firstWaveSpawned then
        game.Wait(3)
        FionaHeroicStartSequence()
        firstWaveSpawned = true
    end
end)
end
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void TriggerAddFastForwardEvent(TypedCallback\<bool> trigger) {triggeraddfastforwardevent-1}
```cs
void TriggerAddFastForwardEvent(TypedCallback<bool> trigger)
```
#### Description
[](description-start)
Register an event to trigger a callback whenever fast forward is toggled.
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback\<bool>* `trigger` the lua function to run when the event is triggered

[](parameters-end)

#### Callback Parameters
- *Boolean* `enable`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.TriggerAddFastForwardEvent(function(isEnabled)
    if isEnabled and ui_helper ~= nil then
        ui_helper.Destroy()
        ui_helper = nil
    end
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

