<div id="toc" markdown="1">
- [Trigger API Reference\DCEI Events\Timer](#trigger-api-referencedcei-eventstimer)
  * [TriggerAddTimerEventElapsed](#triggeraddtimereventelapsed-4)
  * [OnMapStart](#onmapstart-1)
  * [TriggerAddTimerEventPeriodic](#triggeraddtimereventperiodic-5)
  * [TriggerAddTimerEventPeriodicIndefinite](#triggeraddtimereventperiodicindefinite-4)

</div>

***

# [Trigger API Reference](Trigger-API-Reference)\\DCEI Events\Timer {Trigger-API-ReferenceDCEI-EventsTimer}

[](overview-start)

[](overview-end)

## void TriggerAddTimerEventElapsed(TypedCallback trigger, float time, bool useRealTime = False, bool simple = False) {triggeraddtimereventelapsed-4}
```cs
void TriggerAddTimerEventElapsed(TypedCallback trigger, float time, bool useRealTime = False, bool simple = False)
```
#### Description
[](description-start)
This event triggers when the timer has elapsed. Particularly if you need to pause or destroy a timer before it elapses, you will want to use [Core timers](Mods-Core#addduration) instead.

For more examples of when different times of waits or timers should be used, see [this notion guide.](https://www.notion.so/funovus/Timers-Waits-ade2f0f581aa4c42a231c1e0e2545a3f?pvs=4) 
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback* `trigger` the callback function that is run when the event is triggered.
- *float* `time` the amount of time the timer runs for.
- *bool* `useRealTime` if true, uses real time instead of game time.
- *bool* `simple` this flag reduces overhead by preventing the usage of DCEI.Wait() within the trigger. You should only set this to true if the trigger does not utilize DCEI.Wait() at all.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.TriggerAddTimerEventElapsed(OnTimer, 5, false, true)

function OnTimer()
    DCEI.LogMessage("Timer Ended")
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void OnMapStart(TypedCallback trigger) {onmapstart-1}
```cs
void OnMapStart(TypedCallback trigger)
```
#### Description
[](description-start)
This event triggers on map start.
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback* `trigger` the callback function that is run when the event is triggered.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.OnMapStart(A)

function A()
    DCEI.LogMessage("A")
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void TriggerAddTimerEventPeriodic(TypedCallback trigger, float period, int lifeCount, bool useRealTime = False, bool simple = False) {triggeraddtimereventperiodic-5}
```cs
void TriggerAddTimerEventPeriodic(TypedCallback trigger, float period, int lifeCount, bool useRealTime = False, bool simple = False)
```
#### Description
[](description-start)
This event triggers periodically on a timer, for the given number of times. In most cases, you will want to use [Core timers](Mods-Core#addduration) instead.

For more examples of when different times of waits or timers should be used, see [this notion guide.](https://www.notion.so/funovus/Timers-Waits-ade2f0f581aa4c42a231c1e0e2545a3f?pvs=4) 
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback* `trigger` the callback function that is run when the event is triggered.
- *float* `period` the amount of time between each trigger call.
- *int* `lifeCount` the number of times the trigger is called.
- *bool* `useRealTime` if true, uses real time instead of game time.
- *bool* `simple` this flag reduces overhead by preventing the usage of DCEI.Wait() within the trigger. You should only set this to true if the trigger does not utilize DCEI.Wait() at all.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function A()
    DCEI.LogMessage("A")
end

DCEI.TriggerAddTimerEventPeriodic(A, 1, 15, false, true)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void TriggerAddTimerEventPeriodicIndefinite(TypedCallback trigger, float period, bool useRealTime = False, bool simple = False) {triggeraddtimereventperiodicindefinite-4}
```cs
void TriggerAddTimerEventPeriodicIndefinite(TypedCallback trigger, float period, bool useRealTime = False, bool simple = False)
```
#### Description
[](description-start)
This event triggers periodically on a timer, for an indefinite number of times. In most cases, you will want to use [Core timers](Mods-Core#addduration) instead.

For more examples of when different times of waits or timers should be used, see [this notion guide.](https://www.notion.so/funovus/Timers-Waits-ade2f0f581aa4c42a231c1e0e2545a3f?pvs=4) 
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback* `trigger` the callback function that is run when the event is triggered.
- *float* `period` the amount of time between each trigger call.
- *bool* `useRealTime` if true, uses real time instead of game time.
- *bool* `simple` this flag reduces overhead by preventing the usage of DCEI.Wait() within the trigger. You should only set this to true if the trigger does not utilize DCEI.Wait() at all.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function A()
    DCEI.LogMessage("A")
end

DCEI.TriggerAddTimerEventPeriodicIndefinite(A, 1, false, true)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

