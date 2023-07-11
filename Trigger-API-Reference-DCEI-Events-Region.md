<div id="toc" markdown="1">
- [Trigger API Reference\DCEI Events\Region](#trigger-api-referencedcei-eventsregion)
  * [TriggerAddUnitEnterRegionEvent](#triggeraddunitenterregionevent-3)
  * [TriggerAddUnitLeaveRegionEvent](#triggeraddunitleaveregionevent-3)

</div>

***

# [Trigger API Reference](Trigger-API-Reference)\\DCEI Events\Region {Trigger-API-ReferenceDCEI-EventsRegion}

[](overview-start)

[](overview-end)

## void TriggerAddUnitEnterRegionEvent(unit unit, Region region, TypedCallback trigger) {triggeraddunitenterregionevent-3}
```cs
void TriggerAddUnitEnterRegionEvent(unit unit, Region region, TypedCallback trigger)
```
#### Description
[](description-start)
This event is triggered when the specified unit enters the specified region. You can use [DCEI.TriggeringUnit](Trigger-API-Reference-DCEI-Variables#triggeringunit)/[DCEI.TriggeringRegion](Trigger-API-Reference-DCEI-Variables#triggeringregion) to get the event unit/region in the trigger callback.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to trigger the event. Use [DCEI.UnitAny](Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event for any unit.
- *[Region](Trigger-API-Reference-DCEI-Types#region)* `region` the region for the unit to enter. Use [DCEI.RegionAny](Trigger-API-Reference-DCEI-Variables#regionany) to trigger this event for any region.
- *TypedCallback* `trigger` the callback function that is called when the event is triggered.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function OnRegionEnter()
    local u = DCEI.TriggeringUnit
    local r = DCEI.TriggeringRegion

    local region_name = DCEI.GetRegionName(r)
    if region_name = "goal_region" then
        SCORE = SCORE + 1
    end
end

DCEI.TriggerAddUnitEnterRegionEvent(DCEI.UnitAny, DCEI.RegionAny, OnRegionEnter)
```
[](example-usage-end)

[](extra-section-start)
 #### Related
- [RemoveRegion](#removeregion-1)
- [GetRegionName](#getregionname-1)
- [RevealRegion](#revealregion-1)
- [MoveRegion](#moveregion-3)
[](extra-section-end)

## void TriggerAddUnitLeaveRegionEvent(unit unit, Region region, TypedCallback trigger) {triggeraddunitleaveregionevent-3}
```cs
void TriggerAddUnitLeaveRegionEvent(unit unit, Region region, TypedCallback trigger)
```
#### Description
[](description-start)
This event is triggered when the specified unit leaves the specified region. You can use [DCEI.TriggeringUnit](Trigger-API-Reference-DCEI-Variables#triggeringunit)/[DCEI.TriggeringRegion](Trigger-API-Reference-DCEI-Variables#triggeringregion) to get the event unit/region in the trigger callback.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to trigger the event. Use [DCEI.UnitAny](Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event for any unit.
- *[Region](Trigger-API-Reference-DCEI-Types#region)* `region` the region for the unit to leave. Use [DCEI.RegionAny](Trigger-API-Reference-DCEI-Variables#regionany) to trigger this event for any region.
- *TypedCallback* `trigger` the callback function that is called when the event is triggered.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function OnRegionLeave()
    local r = DCEI.TriggeringRegion
    DCEI.RemoveRegion(r)
end

DCEI.TriggerAddUnitLeaveRegionEvent(DCEI.UnitAny, region, OnRegionLeave)
```
[](example-usage-end)

[](extra-section-start)
 #### Related
- [CreateRegion](#createregion-4)
- [RemoveRegion](#removeregion-1)
- [HideRegion](#hideregion-1)
[](extra-section-end)

