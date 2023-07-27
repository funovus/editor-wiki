<table ><tbody ><tr></tr><tr><td><details>
<summary><b>Table of Contents</b></summary><hr>
<div markdown="1">
  * [Trigger API Reference\DCEI Events](#trigger-api-referencedcei-events)
    - [Event Functions](#eventfunctions)
    - [Ability](#Ability)
    - [Behavior](#Behavior)
    - [Effect](#Effect)
    - [Input](#input)
    - [Region](#region)
    - [Timer](#timer)
    - [Tower Defense](#tower-defense)
    - [Unit](#Unit)
    - [Weapon](#Weapon)

</div>
</details></td></tr></tbody></table>

***
# [Trigger API Reference](Trigger-API-Reference)\\[DCEI Events](Trigger-API-Reference-DCEI-Events)


## Event Functions
```
Unit UnitAny
Unit UnitNull

Unit TriggeringUnit
int TriggeringButtonIndex
int TriggeringWaveId
string TriggeringWaveStatus
int TriggeringAbilityId
string TriggeringAbilityName
int TriggeringBehaviorId
string TriggeringBehaviorName
int TriggeringEffectId
string TriggeringEffectName
Float2 TriggeringJoystickAxes
int TriggeringJoystickButtonId -- corresponds to buttonId input into TriggerAddJoystickButtonEvent
int TriggeringJoystickButtonEventType --index 0 is ButtonDown, index 1 is ButtonUp
int TriggeringPlayerId
Region TriggeringRegion
```

## [Ability](Trigger-API-Reference-DCEI-Events-Ability)
  + [TriggerAddActivateAbilityEvent()](Trigger-API-Reference-DCEI-Events-Ability#triggeraddactivateabilityevent-4)
  + [TriggerAddCastAbilityEvent()](Trigger-API-Reference-DCEI-Events-Ability#triggeraddcastabilityevent-4)
  + [TriggerAddDeactivateAbilityEvent()](Trigger-API-Reference-DCEI-Events-Ability#triggeradddeactivateabilityevent-4)
  + [TriggerAddUnitAbilityOnOffEvent()](Trigger-API-Reference-DCEI-Events-Ability#triggeraddunitabilityonoffevent-4)
  + [TriggerAddUseAbilityEvent()](Trigger-API-Reference-DCEI-Events-Ability#triggeradduseabilityevent-4)

## [Behavior](Trigger-API-Reference-DCEI-Events-Behavior)
  + [TriggerAddBehaviorAddEvent()](Trigger-API-Reference-DCEI-Events-Behavior#triggeraddbehavioraddevent-4)
  + [TriggerAddBehaviorExpireEvent()](Trigger-API-Reference-DCEI-Events-Behavior#triggeraddbehaviorexpireevent-4)

## [Effect](Trigger-API-Reference-DCEI-Events-Effect)
  + [TriggerAddEffectEvent()](Trigger-API-Reference-DCEI-Events-Effect#triggeraddeffectevent-3)

## [Input](Trigger-API-Reference-DCEI-Events-Input)
  + [TriggerAddJoystickButtonEvent()](Trigger-API-Reference-DCEI-Events-Input#triggeraddjoystickbuttonevent-3)
  + [TriggerAddJoystickEvent()](Trigger-API-Reference-DCEI-Events-Input#triggeraddjoystickevent-1)
  + [TriggerAddJoystickEventWithJoystickOptions()](Trigger-API-Reference-DCEI-Events-Input#triggeraddjoystickeventwithjoystickoptions-2)
  + [TriggerAddJoystickReleaseEvent()](Trigger-API-Reference-DCEI-Events-Input#triggeraddjoystickreleaseevent-1)
  + [TriggerAddJoystickReleaseEventWithId()](Trigger-API-Reference-DCEI-Events-Input#triggeraddjoystickreleaseeventwithid-2)
  + [TriggerAddMappedKeyDownEvent()](Trigger-API-Reference-DCEI-Events-Input#triggeraddmappedkeydownevent-2)
  + [TriggerAddMouseDownEvent()](Trigger-API-Reference-DCEI-Events-Input#triggeraddmousedownevent-2)
  + [TriggerAddMouseUpEvent()](Trigger-API-Reference-DCEI-Events-Input#triggeraddmouseupevent-2)
  + [TriggerAddTextCommandEvent()](Trigger-API-Reference-DCEI-Events-Input#triggeraddtextcommandevent-1)
  + [TriggerAddTouchDownEvent()](Trigger-API-Reference-DCEI-Events-Input#triggeraddtouchdownevent-1)
  + [TriggerAddTouchUpEvent()](Trigger-API-Reference-DCEI-Events-Input#triggeraddtouchupevent-1)

## [Region](Trigger-API-Reference-DCEI-Events-Region)
  + [TriggerAddUnitEnterRegionEvent()](Trigger-API-Reference-DCEI-Events-Region#triggeraddunitenterregionevent-3)
  + [TriggerAddUnitLeaveRegionEvent()](Trigger-API-Reference-DCEI-Events-Region#triggeraddunitleaveregionevent-3)

## [Timer](Trigger-API-Reference-DCEI-Events-Timer)
  + [TriggerAddTimerEventElapsed()](Trigger-API-Reference-DCEI-Events-Timer#triggeraddtimereventelapsed-4)
  + [TriggerAddTimerEventPeriodic()](Trigger-API-Reference-DCEI-Events-Timer#triggeraddtimereventperiodic-5)
  + [TriggerAddTimerEventPeriodicIndefinite()](Trigger-API-Reference-DCEI-Events-Timer#triggeraddtimereventperiodicindefinite-4)

## [Unit](Trigger-API-Reference-DCEI-Events-Unit)
  + [TriggerAddOnUnitIdleEvent()](Trigger-API-Reference-DCEI-Events-Unit#triggeraddonunitidleevent-2)
  + [TriggerAddUnitCriticalDamageEvent()](Trigger-API-Reference-DCEI-Events-Unit#triggeraddunitcriticaldamageevent-2)
  + [TriggerAddUnitDamageEvent()](Trigger-API-Reference-DCEI-Events-Unit#triggeraddunitdamageevent-3)
  + [TriggerAddUnitDeselectedEvent()](Trigger-API-Reference-DCEI-Events-Unit#triggeraddunitdeselectedevent-2)
  + [TriggerAddUnitDiedEvent()](Trigger-API-Reference-DCEI-Events-Unit#triggeraddunitdiedevent-3)
  + [TriggerAddUnitHealEvent()](Trigger-API-Reference-DCEI-Events-Unit#triggeraddunithealevent-2)
  + [TriggerAddUnitMoveCommandEvent()](Trigger-API-Reference-DCEI-Events-Unit#triggeraddunitmovecommandevent-2)
  + [TriggerAddUnitRemovedEvent()](Trigger-API-Reference-DCEI-Events-Unit#triggeraddunitremovedevent-3)
  + [TriggerAddUnitSelectedEvent()](Trigger-API-Reference-DCEI-Events-Unit#triggeraddunitselectedevent-2)
  + [TriggerAddUnitSpawnEvent()](Trigger-API-Reference-DCEI-Events-Unit#triggeraddunitspawnevent-3)

## [Weapon](Trigger-API-Reference-DCEI-Events-Weapon)
  + [TriggerAddUseWeaponEvent()](Trigger-API-Reference-DCEI-Events-Weapon#triggeradduseweaponevent-4)
