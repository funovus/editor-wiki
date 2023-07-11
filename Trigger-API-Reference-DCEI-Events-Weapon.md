<div id="toc" markdown="1">
- [Trigger API Reference\DCEI Events\Weapon](#trigger-api-referencedcei-eventsweapon)
  * [TriggerAddUseWeaponEvent](#triggeradduseweaponevent-4)

</div>

***

# [Trigger API Reference](Trigger-API-Reference)\\DCEI Events\Weapon {Trigger-API-ReferenceDCEI-EventsWeapon}

[](overview-start)

[](overview-end)

## void TriggerAddUseWeaponEvent(unit unit, TypedCallback\<unit, Float2> trigger, bool simple = False, WeaponFilter filter = default) {triggeradduseweaponevent-4}
```cs
void TriggerAddUseWeaponEvent(unit unit, TypedCallback<unit, Float2> trigger, bool simple = False, WeaponFilter filter = default)
```
#### Description
[](description-start)
This event is triggered whenever a weapon is used. This function can also pass the the target unit and target location as parameters to the callback function.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event for any unit.
- *TypedCallback\<unit, Float2>* `trigger` the callback function that is run when the event is triggered.
- *bool* `simple` this flag reduces overhead by preventing the usage of DCEI.Wait() within the trigger. You should only set this to true if the trigger does not use DCEI.Wait().
- *[WeaponFilter](Trigger-API-Reference-DCEI-Types#weaponfilter)* `filter` could make this event only trigger on certain weapons

[](parameters-end)

#### Callback Parameters
- *Unit* `target_unit`
- *Float2* `target_position`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
local function OnUnitUseWeapon(target_unit, target_pos)
    local unit = DCEI.TriggeringUnit
    local unit_name = DCEI.GetUnitType(unit)
    local weapon = DCEI.TriggeringWeaponName
    DCEI.LogMessage(unit_name .. " has attacked with " .. weapon ..".")
    
    local target_name = DCEI.GetUnitType(target_unit)
    DCEI.LogMessage("Target: " .. target_name .. " at (" .. target_pos.x .. ", " .. target_pos.y .. ")")
end
    
DCEI.TriggerAddUseWeaponEvent(DCEI.UnitAny, OnUnitUseWeapon, true)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [TriggeringWeaponId](Trigger-API-Reference-DCEI-Variables#triggeringweaponid)
- [TriggeringWeaponName](Trigger-API-Reference-DCEI-Variables#triggeringweaponname)
[](extra-section-end)

