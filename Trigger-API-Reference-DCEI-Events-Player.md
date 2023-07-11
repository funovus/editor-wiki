<div id="toc" markdown="1">
- [Trigger API Reference\DCEI Events\Player](#trigger-api-referencedcei-eventsplayer)
  * [TriggerAddOnGoldChangeEvent](#triggeraddongoldchangeevent-1)

</div>

***

# [Trigger API Reference](Trigger-API-Reference)\\DCEI Events\Player {Trigger-API-ReferenceDCEI-EventsPlayer}

[](overview-start)

[](overview-end)

## void TriggerAddOnGoldChangeEvent(TypedCallback\<int, int> trigger) {triggeraddongoldchangeevent-1}
```cs
void TriggerAddOnGoldChangeEvent(TypedCallback<int, int> trigger)
```
#### Description
[](description-start)
This event triggers when the player's gold changes. This function can also pass the player gaining gold and the net change in gold as parameters to the callback function.
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback\<int, int>* `trigger` the callback function that is run when the event is triggered. [DCEI.TriggeringPlayerId](Trigger-API-Reference-DCEI-Variables#triggeringplayerid) will not get the triggering player ID.

[](parameters-end)

#### Callback Parameters
- *Int32* `player_id`
- *Int32* `amount`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function OnGoldChange(player, net_difference)
    local value = DCEI.GetGold(player)
    DCEI.LogMessage("> player [" .. tostring(player) .. "] gold = " .. tostring(value) .. " (net difference: " .. net_difference .. ")")
end

DCEI.TriggerAddOnGoldChangeEvent(OnGoldChange)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [AddGold](#addgold-2)
- [SetGold](#setgold-2)
- [GetGold](#getgold-1)
[](extra-section-end)

