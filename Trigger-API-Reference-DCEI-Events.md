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
  + [TriggerAddActivateAbilityEvent()](Trigger-API-Reference-DCEI-Events-Ability#void-triggeraddactivateabilityeventunit-unit-typedcallback-trigger-bool-simple-abilityfilter-filter)
  + [TriggerAddCastAbilityEvent()](Trigger-API-Reference-DCEI-Events-Ability#void-triggeraddcastabilityeventunit-unit-typedcallbackunit-float2-trigger-bool-simple-abilityfilter-filter)
  + [TriggerAddDeactivateAbilityEvent()](Trigger-API-Reference-DCEI-Events-Ability#void-triggeraddcastabilityeventunit-unit-typedcallbackunit-float2-trigger-bool-simple-abilityfilter-filter)
  + [TriggerAddUnitAbilityOnOffEvent()](Trigger-API-Reference-DCEI-Events-Ability#void-triggeraddunitabilityonoffeventunit-unit-typedcallbackbool-trigger-bool-simple-abilityfilter-filter)
  + [TriggerAddUseAbilityEvent()](Trigger-API-Reference-DCEI-Events-Ability#void-triggeradduseabilityeventunit-unit-typedcallbackunit-float2-trigger-bool-simple-abilityfilter-filter)

## [Behavior](Trigger-API-Reference-DCEI-Events-Behavior)
  + [TriggerAddBehaviorAddEvent()](Trigger-API-Reference-DCEI-Events-Behavior#void-triggeraddbehavioraddeventunit-unit-typedcallbackeffectcontext-trigger-bool-simple-behaviorfilter-filter)
  + [TriggerAddBehaviorExpireEvent()](Trigger-API-Reference-DCEI-Events-Behavior#void-triggeraddbehaviorexpireeventunit-unit-typedcallback-trigger-bool-simple-behaviorfilter-filter)

## [Effect](Trigger-API-Reference-DCEI-Events-Effect)
  + [TriggerAddEffectEvent()](Trigger-API-Reference-DCEI-Events-Effect#void-triggeraddeffecteventstring-effectname-typedcallbackeffectcontext-trigger-bool-simple)

## [Input](Trigger-API-Reference-DCEI-Events-Input)
  + [TriggerAddJoystickButtonEvent()](Trigger-API-Reference-DCEI-Events-Input#void-triggeraddjoystickbuttoneventint-buttonid-typedcallback-trigger-joystickbuttonoptions-options)
  + [TriggerAddJoystickEvent()](Trigger-API-Reference-DCEI-Events-Input#void-triggeraddjoystickeventtypedcallback-trigger)
  + [TriggerAddJoystickEventWithJoystickOptions()](Trigger-API-Reference-DCEI-Events-Input#void-triggeraddjoystickeventwithjoystickoptionstypedcallback-trigger-joystickoptions-options)
  + [TriggerAddJoystickReleaseEvent()](Trigger-API-Reference-DCEI-Events-Input#void-triggeraddjoystickreleaseeventtypedcallback-trigger)
  + [TriggerAddJoystickReleaseEventWithId()](Trigger-API-Reference-DCEI-Events-Input#void-triggeraddjoystickreleaseeventwithidtypedcallback-trigger-int-joystickid)
  + [TriggerAddMappedKeyDownEvent()](Trigger-API-Reference-DCEI-Events-Input#void-triggeraddmappedkeydowneventstring-keyeventname-typedcallbackstring-trigger)
  + [TriggerAddMouseDownEvent()](Trigger-API-Reference-DCEI-Events-Input#void-triggeraddmousedowneventint-mousebuttonid-typedcallbackfloat2-unit-trigger)
  + [TriggerAddMouseUpEvent()](Trigger-API-Reference-DCEI-Events-Input#void-triggeraddmouseupeventint-mousebuttonid-typedcallbackfloat2-unit-trigger)
  + [TriggerAddTextCommandEvent()](Trigger-API-Reference-DCEI-Events-Input#void-triggeraddtextcommandeventtypedcallbackstring-trigger)
  + [TriggerAddTouchDownEvent()](Trigger-API-Reference-DCEI-Events-Input#void-triggeraddtouchdowneventtypedcallbackfloat2-unit-trigger)
  + [TriggerAddTouchUpEvent()](Trigger-API-Reference-DCEI-Events-Input#void-triggeraddtouchupeventtypedcallbackfloat2-unit-trigger)

## [Region](Trigger-API-Reference-DCEI-Events-Region)
  + [TriggerAddUnitEnterRegionEvent()](Trigger-API-Reference-DCEI-Events-Region#void-triggeraddunitenterregioneventunit-unit-region-region-typedcallback-trigger)
  + [TriggerAddUnitLeaveRegionEvent()](Trigger-API-Reference-DCEI-Events-Region#void-triggeraddunitleaveregioneventunit-unit-region-region-typedcallback-trigger)

## [Timer](Trigger-API-Reference-DCEI-Events-Timer)
  + [TriggerAddTimerEventElapsed()](Trigger-API-Reference-DCEI-Events-Timer#void-triggeraddtimereventelapsedtypedcallback-trigger-float-time-bool-userealtime-bool-simple)
  + [TriggerAddTimerEventPeriodic()](Trigger-API-Reference-DCEI-Events-Timer#void-triggeraddtimereventperiodictypedcallback-trigger-float-period-int-lifecount-bool-userealtime-bool-simple)
  + [TriggerAddTimerEventPeriodicIndefinite()](Trigger-API-Reference-DCEI-Events-Timer#void-triggeraddtimereventperiodicindefinitetypedcallback-trigger-float-period-bool-userealtime-bool-simple)

## [Unit](Trigger-API-Reference-DCEI-Events-Unit)
  + [TriggerAddOnUnitIdleEvent()](Trigger-API-Reference-DCEI-Events-Unit#void-triggeraddonunitidleeventunit-unit-typedcallback-trigger)
  + [TriggerAddUnitCriticalDamageEvent()](Trigger-API-Reference-DCEI-Events-Unit#void-triggeraddunitcriticaldamageeventunit-unit-typedcallbackfloat-unit-trigger)
  + [TriggerAddUnitDamageEvent()](Trigger-API-Reference-DCEI-Events-Unit#void-triggeraddunitdamageeventunit-unit-typedcallbackfloat-unit-trigger-criticalfilter-filter)
  + [TriggerAddUnitDeselectedEvent()](Trigger-API-Reference-DCEI-Events-Unit#void-triggeraddunitdeselectedeventunit-unit-typedcallback-trigger)
  + [TriggerAddUnitDiedEvent()](Trigger-API-Reference-DCEI-Events-Unit#void-triggeraddunitdiedeventunit-unit-typedcallbackunit-trigger-bool-simple)
  + [TriggerAddUnitHealEvent()](Trigger-API-Reference-DCEI-Events-Unit#void-triggeraddunithealeventunit-unit-typedcallbackfloat-unit-trigger)
  + [TriggerAddUnitMoveCommandEvent()](Trigger-API-Reference-DCEI-Events-Unit#void-triggeraddunitmovecommandeventunit-unit-typedcallbackfloat2-trigger)
  + [TriggerAddUnitRemovedEvent()](Trigger-API-Reference-DCEI-Events-Unit#void-triggeraddunitremovedeventunit-unit-typedcallback-trigger-bool-simple)
  + [TriggerAddUnitSelectedEvent()](Trigger-API-Reference-DCEI-Events-Unit#void-triggeraddunitselectedeventunit-unit-typedcallback-trigger)
  + [TriggerAddUnitSpawnEvent()](Trigger-API-Reference-DCEI-Events-Unit#void-triggeraddunitspawneventunit-unit-typedcallback-trigger-bool-simple)

## [Weapon](Trigger-API-Reference-DCEI-Events-Weapon)
  + [TriggerAddUseWeaponEvent()](Trigger-API-Reference-DCEI-Events-Weapon#void-triggeradduseweaponeventunit-unit-typedcallbackunit-float2-trigger-bool-simple-weaponfilter-filter)
