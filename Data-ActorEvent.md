<div id="toc" markdown="1">
- [Data\Actor\Events](#dataactorevents)
  * [Events](#events)
  * [Conditions](#conditions)
  * [Actions](#actions)

</div>

***

# [](dcei.engine.proto.ActorEvent)**[Data](Data)\\[Actor](Data-Actor)\Events** {dataActorEvents}

[](manual-wiki-start)
Events are used to play animations on units in response to data events (like playing an attack animation when a unit attacks with a weapon or playing a death animation when a unit dies.)
Each event can have multiple conditions and multiple actions.
![events](https://user-images.githubusercontent.com/56179276/88447226-b076c500-cde5-11ea-9b8a-bef7de1189d8.png)
Similiar to triggers, actor events have 3 components.
* **Event**: The event that triggers the actor event.
* **Condition**: Optional conditions to evaluate. All conditions must succeed for the action to be executed.
* **Action**: The actions to execute in response to the event.
[](manual-wiki-end)

## [](dcei.engine.proto.ActorEvent.actor_term)**Events** {Events}
An actor event can be used multiple times on an actor. When the same event is used more than once, the events are checked in order from top to bottom.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorTerm.unit_spawn)**Unit Spawn** {Unit-Spawn}
Triggers when the linked unit is spawned.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorTerm.unit_morph)**Unit Morph** {Unit-Morph}
Triggers when a unit undergoes a **Morph** effect.

[](manual-wiki-start)
If **Unit Type** is not set, any morph on a unit will trigger this event.
[](manual-wiki-end)

#### [](dcei.engine.proto.ActorTerm.UnitTerm.unit_type)**Unit Type** {Unit-Type}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorTerm.unit_remove)**Unit Remove** {Unit-Remove}
Triggers when a unit is removed.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorTerm.unit_stand)**Unit Stand** {Unit-Stand}
Triggers when a unit leaves its movement state (ie, when it begins standing).

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorTerm.unit_walk)**Unit Walk** {Unit-Walk}
Triggers when a unit enters its movement state (ie, when it begins walking).

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorTerm.unit_death)**Unit Death** {Unit-Death}
Triggers when a unit dies.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorTerm.unit_weapon_start)**Unit Weapon Start** {Unit-Weapon-Start}
Triggers when a unit begins attacking with a weapon.

[](manual-wiki-start)
If **Weapon** is not set, any weapon attack will trigger this event. If this event triggers a [Play Animation](#play-animation) action, the animation duration will be calculated from the weapon preswing + backswing, multiplied by any attack speed modifiers.
[](manual-wiki-end)

#### [](dcei.engine.proto.ActorTerm.UnitWeaponTerm.weapon)**Weapon** {Weapon}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorTerm.unit_weapon_stop)**Unit Weapon Stop** {Unit-Weapon-Stop}
Triggers when a unit stops attacking with a weapon.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorTerm.UnitWeaponTerm.weapon)**Weapon** {Weapon}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorTerm.unit_ability_start)**Unit Ability Start** {Unit-Ability-Start}
Triggers when a unit starts casting an ability.

[](manual-wiki-start)
If this event triggers a [Play Animation](#play-animation) action, the animation duration will be calculated from the ability prep time + finish time.
[](manual-wiki-end)

#### [](dcei.engine.proto.ActorTerm.UnitAbilityTerm.ability)**Ability** {Ability}

[](manual-wiki-start)
If left blank, any ability will trigger the event.
[](manual-wiki-end)

### [](dcei.engine.proto.ActorTerm.unit_ability_stop)**Unit Ability Stop** {Unit-Ability-Stop}
Triggers when a unit stops casting an ability.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorTerm.UnitAbilityTerm.ability)**Ability** {Ability}

[](manual-wiki-start)
If left blank, any ability will trigger the event.
[](manual-wiki-end)

### [](dcei.engine.proto.ActorTerm.unit_ability_targeting_on)**Unit Ability Targeting On** {Unit-Ability-Targeting-On}
Triggers when an ability enters targeting mode.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorTerm.UnitAbilityTerm.ability)**Ability** {Ability}

[](manual-wiki-start)
If left blank, any ability will trigger the event.
[](manual-wiki-end)

### [](dcei.engine.proto.ActorTerm.unit_ability_targeting_off)**Unit Ability Targeting Off** {Unit-Ability-Targeting-Off}
Triggers when an ability leaves targeting mode.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorTerm.UnitAbilityTerm.ability)**Ability** {Ability}

[](manual-wiki-start)
If left blank, any ability will trigger the event.
[](manual-wiki-end)

### [](dcei.engine.proto.ActorTerm.unit_children_selection_on)**Unit Children Selection On** {Unit-Children-Selection-On}
Triggers when the children of this unit are selected.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorTerm.UnitTerm.unit_type)**Unit Type** {Unit-Type}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorTerm.unit_children_selection_off)**Unit Children Selection Off** {Unit-Children-Selection-Off}
Triggers when the children of this unit are deselected.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorTerm.UnitTerm.unit_type)**Unit Type** {Unit-Type}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorTerm.unit_move_command_received)**Unit Move Command Received** {Unit-Move-Command-Received}
Triggers when a unit receives a movement command.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorTerm.unit_attack_command_received)**Unit Attack Command Received** {Unit-Attack-Command-Received}
Triggers when a unit receives an attack command.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorTerm.unit_weapon_damage_point)**Unit Weapon Damage Point** {Unit-Weapon-Damage-Point}
Triggers when a unit executes an attack with a weapon (occurs after preswing).

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorTerm.UnitWeaponTerm.weapon)**Weapon** {Weapon}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorTerm.pre_ability_targeted_on)**Pre Ability Targeted On** {Pre-Ability-Targeted-On}
Triggers when a unit becomes highlighted by ability in targeting mode.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorTerm.UnitAbilityTerm.ability)**Ability** {Ability}

[](manual-wiki-start)
If left blank, any ability will trigger the event.
[](manual-wiki-end)

### [](dcei.engine.proto.ActorTerm.pre_ability_targeted_off)**Pre Ability Targeted Off** {Pre-Ability-Targeted-Off}
Triggers when a unit is unhighlighted by ability in targeting mode.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorTerm.UnitAbilityTerm.ability)**Ability** {Ability}

[](manual-wiki-start)
If left blank, any ability will trigger the event.
[](manual-wiki-end)

### [](dcei.engine.proto.ActorTerm.pre_ability_cast_targeted)**Pre Ability Cast Targeted** {Pre-Ability-Cast-Targeted}
Sent to the target unit's actor scope when a targeting ability is cast on the unit.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorTerm.UnitAbilityTerm.ability)**Ability** {Ability}

[](manual-wiki-start)
If left blank, any ability will trigger the event.
[](manual-wiki-end)

### [](dcei.engine.proto.ActorTerm.selection_on)**Selection On** {Selection-On}
Triggers when a unit is selected or on mouse hover.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorTerm.SelectionTerm.selection_type)**Selection Type** {Selection-Type}

[](manual-wiki-start)

[](manual-wiki-end)

>* **SELECTION**: Use **selection** for on select.
>* **PRE_SELECTION**: Use **preselection** for on hover.

### [](dcei.engine.proto.ActorTerm.selection_off)**Selection Off** {Selection-Off}
Triggers when a unit is deselected or on mouse hover off.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorTerm.SelectionTerm.selection_type)**Selection Type** {Selection-Type}

[](manual-wiki-start)

[](manual-wiki-end)

>* **SELECTION**: Use **selection** for on select.
>* **PRE_SELECTION**: Use **preselection** for on hover.

### [](dcei.engine.proto.ActorTerm.behavior_on)**Behavior On** {Behavior-On}
Triggers when a unit gains a behavior.

[](manual-wiki-start)
If **Behavior** is not set, any behavior will trigger this event.
[](manual-wiki-end)

#### [](dcei.engine.proto.ActorTerm.BehaviorTerm.behavior)**Behavior** {Behavior}
The behavior that triggers this event.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorTerm.behavior_off)**Behavior Off** {Behavior-Off}
Triggers when a unit loses a behavior (including if the behavior becomes disabled).

[](manual-wiki-start)
If **Behavior** is not set, any behavior will trigger this event.
[](manual-wiki-end)

#### [](dcei.engine.proto.ActorTerm.BehaviorTerm.behavior)**Behavior** {Behavior}
The behavior that triggers this event.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorTerm.behavior_stack_increase)**Behavior Stack Increase** {Behavior-Stack-Increase}
Triggers when a unit gains behavior stack(s).

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorTerm.BehaviorTerm.behavior)**Behavior** {Behavior}
The behavior that triggers this event.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorTerm.behavior_stack_decrease)**Behavior Stack Decrease** {Behavior-Stack-Decrease}
Triggers when a unit loses behavior stack(s).

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorTerm.BehaviorTerm.behavior)**Behavior** {Behavior}
The behavior that triggers this event.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorTerm.persistent_effect_on)**Persistent Effect On** {Persistent-Effect-On}
Triggers when a persistent effect is created.

[](manual-wiki-start)
The persistent effect must have a [period count](Data-Effect-Persistent#periodic-count) of at least 1. If **Effect** is not set, any persistent effect will trigger this effect.
[](manual-wiki-end)

#### [](dcei.engine.proto.ActorTerm.EffectTerm.effect)**Effect** {Effect}
The persistent effect that triggers this event.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorTerm.persistent_effect_off)**Persistent Effect Off** {Persistent-Effect-Off}
Triggers when a persistent effect is destroyed.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorTerm.EffectTerm.effect)**Effect** {Effect}
The persistent effect that triggers this event.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorTerm.actor_create)**Actor Create** {Actor-Create}
Triggers when the actor is created.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorTerm.actor_destroy)**Actor Destroy** {Actor-Destroy}
Triggers when the actor is destroyed.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorTerm.actor_orphan)**Actor Orphan** {Actor-Orphan}
Triggers when the actor becomes orphaned. Actors become orphaned when their host actor is destroyed (an actor's host is typically the actor that created it).

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorTerm.animation_finish)**Animation Finish** {Animation-Finish}
Triggers when an animation on the actor finishes.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorTerm.AnimationTerm.clip)**Clip** {Clip}
The animation that should trigger this event.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorTerm.on_timer)**On Timer** {On-Timer}

[](manual-wiki-start)
Triggers when a [timer](#create-timer) expires.
[](manual-wiki-end)

#### [](dcei.engine.proto.ActorTerm.TimerTerm.name)**Name** {Name}
The name of the timer that triggers this event.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorTerm.on_custom_event)**On Custom Event** {On-Custom-Event}

[](manual-wiki-start)
Triggers when a [custom event](#send-custom-event) is recieved.
[](manual-wiki-end)

#### [](dcei.engine.proto.ActorTerm.CustomEvent.identifier)**Identifier** {Identifier}
The name of the custom event that triggers this event.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorTerm.beam_lost_target)**Beam Lost Target** {Beam-Lost-Target}
Triggers when the target of beam model actor is destroyed.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorTerm.beam_lost_launch)**Beam Lost Launch** {Beam-Lost-Launch}
Triggers when the launch of beam model actor is destroyed.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ActorEvent.conditions)**Conditions** {Conditions}
Conditions to be met for the actions to be executed. If any of the condition evaulates to 0, the actions will not be executed. Note that the condition will be evaulated in the context of an existing actor. If this event is used to create a new actor (e.g., create a actor when a certain behavior is turned on), the evaulation context will be the root of the actor scope (e.g., the unit actor). If no actor can be found, the conditions are assumed to be met.

[](manual-wiki-start)
In most cases, you want to use the [Compare](Data-ActorExpression#compare) condition.
[](manual-wiki-end)

## [](dcei.engine.proto.ActorEvent.actions)**Actions** {Actions}
Actions to run in response to an event, after conditions are checked. Actions that target other actors can only be sent to other actors of the same scope.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorAction.play_animation)**Play Animation** {Play-Animation}
Plays an animation on the actor.

[](manual-wiki-start)
GPU model animations can be previewed in the Asset Previewer.
[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.PlayAnimation.clip_id)**Clip Id** {Clip-Id}
Which animation to play. The default animation is "Attack".

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.PlayAnimation.use_real_timer)**Use Real Timer** {Use-Real-Timer}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorAction.stop_animation)**Stop Animation** {Stop-Animation}

[](manual-wiki-start)
Stops playing an animation that was initiated by a [Play Animation](#play-animation) action.
[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.StopAnimation.clip_id)**Clip Id** {Clip-Id}
Which animation to stop playing. The default animation is "Attack".

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorAction.create)**Create** {Create}
Create a new actor in the scope of this actor.

[](manual-wiki-start)
The new actor should be a [Model Actor](Data-Actor-Model-Actor).
[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.CreateActor.actor)**Actor** {Actor}
The type of new actor to create.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.CreateActor.host_site)**Host Site** {Host-Site}
If set, this value will overwrite the **Host Site** field of the created actor.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.CreateActor.host_site_operations)**Host Site Operations** {Host-Site-Operations}
If set, this value will overwrite the **Host Site Operations** field of the created actor.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.CreateActor.aliases)**Aliases** {Aliases}
Used to assign an **Alias** to the new actor.

[](manual-wiki-start)
An actor can be referenced by its name or any of its aliases.
[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.CreateActor.detached)**Detached** {Detached}
When checked, prevents the created actor from following its source actor.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorAction.destroy)**Destroy** {Destroy}
Destroys an actor.

[](manual-wiki-start)
If **Actor** is not set, the actor will destroy itself.
[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.DestroyActor.actor)**Actor** {Actor}
Look for an actor with this name within the scope to destroy.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorAction.log)**Log** {Log}

[](manual-wiki-start)
Prints a log message in the [Play Settings Log](Data-Play-Settings).
[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.DebugLog.type)**Type** {Type}
Determines if the message is displayed as a debug, warning, or error message.

[](manual-wiki-start)

[](manual-wiki-end)

>* **DEBUG**: The log message will use black text.
>* **WARNING**: The log message will use yellow text.
>* **ERROR**: The log message will use red text.

#### [](dcei.engine.proto.ActorAction.DebugLog.message)**Message** {Message}
The message to be printed.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorAction.create_timer)**Create Timer** {Create-Timer}

[](manual-wiki-start)
Creates a custom timer on the actor that triggers a [On Timer](#on-timer) event.
[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.CreateTimer.name)**Name** {Name}
Name of the timer. This name is only defined in the scope of the current actor. You can use the same timer name in different actors and they won't interfere.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.CreateTimer.duration)**Duration** {Duration}
How soon the timer should expire (in seconds). After the timer is expired, an OnTimer event will be sent to the actor.

[](manual-wiki-start)
Note that actors are not bound by the 1/16 second game update, so any duration used here doesn't need to be a multiple of 0.0625.
[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.CreateTimer.repeat)**Repeat** {Repeat}
By default a timer will be removed after it's expired. Set this flag to true will keep the timer and an OnTimer event will be fired every time when the time specified in "duration" has passed.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorAction.remove_timer)**Remove Timer** {Remove-Timer}

[](manual-wiki-start)
Removes a timer without trigger an [On Timer](#on-timer) event.
[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.RemoveTimer.name)**Name** {Name}
Name of the timer to remove. Note that a timer event may still be fired after removing the timer.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorAction.set_site_operations)**Set Site Operations** {Set-Site-Operations}

[](manual-wiki-start)
Sets the [Site Operations](Data-Actor-Model-Actor#host-site-operations) of the actor. Note that unless **Append** is enabled, the new site operations will overwrite any existing site operations on the actor. **Duration** can be used to create simple animations.
[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.SetSiteOperations.site_operations)**Site Operations** {Site-Operations}
The site operations to apply to the actor.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.SetSiteOperations.duration)**Duration** {Duration}
If set, the site operations will be applied over this duration. Does not work for all types of site operations.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.SetSiteOperations.append)**Append** {Append}
If set, the new site operations will be added to the existing site operations on the actor instead of overwriting them. Does not work for all type sof site operations.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.SetSiteOperations.ease)**Ease** {Ease}
The easing function to use if the site operations are applied over a duration.

[](manual-wiki-start)

[](manual-wiki-end)

>* **LINEAR**: 
>* **IN_SINE**: 
>* **OUT_SINE**: 
>* **IN_OUT_SINE**: 
>* **IN_QUAD**: 
>* **OUT_QUAD**: 
>* **IN_OUT_QUAD**: 
>* **IN_CUBIC**: 
>* **OUT_CUBIC**: 
>* **IN_OUT_CUBIC**: 
>* **IN_QUART**: 
>* **OUT_QUART**: 
>* **IN_OUT_QUART**: 
>* **IN_QUINT**: 
>* **OUT_QUINT**: 
>* **IN_OUT_QUINT**: 
>* **IN_EXPO**: 
>* **OUT_EXPO**: 
>* **IN_OUT_EXPO**: 
>* **IN_CIRC**: 
>* **OUT_CIRC**: 
>* **IN_OUT_CIRC**: 
>* **IN_ELASTIC**: 
>* **OUT_ELASTIC**: 
>* **IN_OUT_ELASTIC**: 
>* **IN_BACK**: 
>* **OUT_BACK**: 
>* **IN_OUT_BACK**: 
>* **IN_BOUNCE**: 
>* **OUT_BOUNCE**: 
>* **IN_OUT_BOUNCE**: 
>* **FLASH**: 
>* **IN_FLASH**: 
>* **OUT_FLASH**: 
>* **IN_OUT_FLASH**: 

#### [](dcei.engine.proto.ActorAction.SetSiteOperations.ease_intensity)**Ease Intensity** {Ease-Intensity}
Optional parameter for some easing functions (elastic, back, and bounce) to adjust the amplitude or overshoot amount.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorAction.create_aliases)**Create Aliases** {Create-Aliases}
Add aliases for an actor.

[](manual-wiki-start)
Applies an [alias](Data-Actor-Model-Actor#aliases) to the actor. If **Actor** is not set, the aliases will be applied to this actor.
[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.CreateAliases.actor)**Actor** {Actor}
The actor to apply the aliases to. Accepts an actor name or alias.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.CreateAliases.aliases)**Aliases** {Aliases}
The aliases to apply.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorAction.set_variable)**Set Variable** {Set-Variable}

[](manual-wiki-start)
Sets a variable on the actor that can be checked by [Conditions](#conditions).
[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.SetVariable.name)**Name** {Name}
The name of the variable.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.SetVariable.value_expression)**Value Expression** {Value-Expression}
The value of the variable. Most commonly set to a constant, random integer, or using add to increment the variable by a constant.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorAction.send_custom_event)**Send Custom Event** {Send-Custom-Event}

[](manual-wiki-start)
Sends a custom event that triggers an [On Custom Event](#on-custom-event) event. If **Actor** is not set, then the actor will send the custom event to itself. If the actor scope contains multiple actors with the targeted name or alias, only the first actor will recieve the event (See: [Broadcast Custom Event](#broadcast-custom-event)).
[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.SendCustomEvent.actor)**Actor** {Actor}
The actor that should receive the event. Accepts an actor name or alias.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.SendCustomEvent.identifier)**Identifier** {Identifier}
The name of the custom event.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorAction.set_tint_color)**Set Tint Color** {Set-Tint-Color}
Sets the tint color of the actor. To clear tint color use ClearTintColor or set RGB to 255, 255, 255.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.SetTintColor.actor)**Actor** {Actor}
The actor that should receive the event. Accepts an actor name or alias.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.SetTintColor.color)**Color** {Color}
These color values will be used to tint the model multiplicatively.

[](manual-wiki-start)
For example, a value of (0, 0, 255) will cause the model to lose all of its red and green colors, and become bright blue; a value of (128, 128, 1024) will weaken the model's red and green colors by half, and amplify the blue color by 400%.
[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.SetTintColor.priority_label)**Priority Label** {Priority-Label}

[](manual-wiki-start)

[](manual-wiki-end)

##### [](dcei.engine.proto.PriorityLabel.label)**Label** {Label}
Use labels to apply multiple tint colors. Only the current tint color with the highest priority will be used. Use ClearTintColor to remove tint color by label.

[](manual-wiki-start)

[](manual-wiki-end)

##### [](dcei.engine.proto.PriorityLabel.priority)**Priority** {Priority}
Setting tint color with higher priority will overwrite any tint colors with lower priority. The default priority is 50.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.SetTintColor.duration)**Duration** {Duration}
If set, the tint color will be applied over this duration.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.SetTintColor.ease)**Ease** {Ease}
The easing function to use if the tint color is applied over a duration.

[](manual-wiki-start)

[](manual-wiki-end)

>* **LINEAR**: 
>* **IN_SINE**: 
>* **OUT_SINE**: 
>* **IN_OUT_SINE**: 
>* **IN_QUAD**: 
>* **OUT_QUAD**: 
>* **IN_OUT_QUAD**: 
>* **IN_CUBIC**: 
>* **OUT_CUBIC**: 
>* **IN_OUT_CUBIC**: 
>* **IN_QUART**: 
>* **OUT_QUART**: 
>* **IN_OUT_QUART**: 
>* **IN_QUINT**: 
>* **OUT_QUINT**: 
>* **IN_OUT_QUINT**: 
>* **IN_EXPO**: 
>* **OUT_EXPO**: 
>* **IN_OUT_EXPO**: 
>* **IN_CIRC**: 
>* **OUT_CIRC**: 
>* **IN_OUT_CIRC**: 
>* **IN_ELASTIC**: 
>* **OUT_ELASTIC**: 
>* **IN_OUT_ELASTIC**: 
>* **IN_BACK**: 
>* **OUT_BACK**: 
>* **IN_OUT_BACK**: 
>* **IN_BOUNCE**: 
>* **OUT_BOUNCE**: 
>* **IN_OUT_BOUNCE**: 
>* **FLASH**: 
>* **IN_FLASH**: 
>* **OUT_FLASH**: 
>* **IN_OUT_FLASH**: 

#### [](dcei.engine.proto.ActorAction.SetTintColor.ease_intensity)**Ease Intensity** {Ease-Intensity}
Optional parameter for some easing functions (elastic, back, and bounce) to adjust the amplitude or overshoot amount.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorAction.set_mesh_effect)**Set Mesh Effect** {Set-Mesh-Effect}
Applies a mesh effect to to the model, overriding any existing mesh effects.

[](manual-wiki-start)
It's recommended to use [Apply Mesh Effect](#apply-mesh-effect) instead as it doesn't override existing mesh effects.
[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.SetMeshEffect.actor)**Actor** {Actor}
The actor that should receive the event. Accepts an actor name or alias.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.SetMeshEffect.effect)**Effect** {Effect}
dcei.engine.proto.ActorAction.SetMeshEffect.effect,,The mesh effect to apply.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorAction.play_music)**Play Music** {Play-Music}
Used to set the game's music track.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.PlayMusic.music_name)**Music Name** {Music-Name}
The music asset to play.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.PlayMusic.push)**Push** {Push}
Whether to save the previously playing music to a stack. This is useful if you want to resume that music later (using **Stop Music** with the pop flag set to true).

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorAction.stop_music)**Stop Music** {Stop-Music}
Used to stop the game's music track.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.StopMusic.pop)**Pop** {Pop}
If set to true, will play the previously saved music. If not set, the music will simply stop.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorAction.shake_camera)**Shake Camera** {Shake-Camera}
Shakes the camera.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.ShakeCamera.parameters)**Parameters** {Parameters}
If no parameters are set, the default camera shake will be used.

[](manual-wiki-start)

[](manual-wiki-end)

##### [](dcei.engine.proto.ActorAction.ShakeCamera.CameraShakeParameters.duration)**Duration** {Duration}
The duration of the camera shake.

[](manual-wiki-start)

[](manual-wiki-end)

##### [](dcei.engine.proto.ActorAction.ShakeCamera.CameraShakeParameters.strength)**Strength** {Strength}
The magnitude of the camera shake.

[](manual-wiki-start)

[](manual-wiki-end)

##### [](dcei.engine.proto.ActorAction.ShakeCamera.CameraShakeParameters.vibrato)**Vibrato** {Vibrato}
The vibration intensity of the camera shake.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorAction.set_visibility)**Set Visibility** {Set-Visibility}
Modifies the visibility of the actor. Hidden actors can't be selected or otherwise interact with the cursor.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.SetVisibility.actor)**Actor** {Actor}
The actor that should receive the event. Accepts an actor name or alias.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.SetVisibility.visibility)**Visibility** {Visibility}
If disabled, hide the actor. If enabled, show the actor.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorAction.set_model_scale)**Set Model Scale** {Set-Model-Scale}
The actor that should receive the event. Accepts an actor name or alias.

[](manual-wiki-start)
Sets the **[model scale](Data-Actor-Model-Actor#model-scale)** of the actor. The default model scale is 1.
[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.SetModelScale.actor)**Actor** {Actor}
The name of the actor that should receive the event. Can be aliases.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.SetModelScale.model_scale)**Model Scale** {Model-Scale}
Adjusts the size of the model over a duration. Using model scale 0 defaults to 1.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.SetModelScale.model_scale_expression)**Model Scale Expression** {Model-Scale-Expression}
The evaluated expression is added to the **Model Scale**.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.SetModelScale.duration)**Duration** {Duration}
If set, the scale will be applied over this duration. This can be used to make simple grow/shrink animations.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.SetModelScale.ease)**Ease** {Ease}
The easing function to use if the scale is applied over a duration.

[](manual-wiki-start)

[](manual-wiki-end)

>* **LINEAR**: 
>* **IN_SINE**: 
>* **OUT_SINE**: 
>* **IN_OUT_SINE**: 
>* **IN_QUAD**: 
>* **OUT_QUAD**: 
>* **IN_OUT_QUAD**: 
>* **IN_CUBIC**: 
>* **OUT_CUBIC**: 
>* **IN_OUT_CUBIC**: 
>* **IN_QUART**: 
>* **OUT_QUART**: 
>* **IN_OUT_QUART**: 
>* **IN_QUINT**: 
>* **OUT_QUINT**: 
>* **IN_OUT_QUINT**: 
>* **IN_EXPO**: 
>* **OUT_EXPO**: 
>* **IN_OUT_EXPO**: 
>* **IN_CIRC**: 
>* **OUT_CIRC**: 
>* **IN_OUT_CIRC**: 
>* **IN_ELASTIC**: 
>* **OUT_ELASTIC**: 
>* **IN_OUT_ELASTIC**: 
>* **IN_BACK**: 
>* **OUT_BACK**: 
>* **IN_OUT_BACK**: 
>* **IN_BOUNCE**: 
>* **OUT_BOUNCE**: 
>* **IN_OUT_BOUNCE**: 
>* **FLASH**: 
>* **IN_FLASH**: 
>* **OUT_FLASH**: 
>* **IN_OUT_FLASH**: 

#### [](dcei.engine.proto.ActorAction.SetModelScale.ease_intensity)**Ease Intensity** {Ease-Intensity}
Optional parameter for some easing functions (elastic, back, and bounce) to adjust the amplitude or overshoot amount.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorAction.broadcast_custom_event)**Broadcast Custom Event** {Broadcast-Custom-Event}

[](manual-wiki-start)
Similar [Send Custom Event](#send-custom-event) but the message is sent to all matching actors within the actor scope.
[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.BroadcastCustomEvent.actor)**Actor** {Actor}
The actor that should receive the event. Accepts an actor name or alias.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.BroadcastCustomEvent.identifier)**Identifier** {Identifier}
The name of the custom event.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorAction.apply_mesh_effect)**Apply Mesh Effect** {Apply-Mesh-Effect}
Applies a mesh effect to the actor. Mesh effects are similar to shaders effects.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.ApplyMeshEffect.actor)**Actor** {Actor}
The actor that should receive the event. Accepts an actor name or alias.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.ApplyMeshEffect.effect)**Effect** {Effect}
The mesh effect to apply.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorAction.remove_mesh_effect)**Remove Mesh Effect** {Remove-Mesh-Effect}
Removes a mesh effect from the actor.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.RemoveMeshEffect.actor)**Actor** {Actor}
The actor that should receive the event. Accepts an actor name or alias.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.RemoveMeshEffect.effect)**Effect** {Effect}
The mesh effect to remove.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorAction.set_team_color)**Set Team Color** {Set-Team-Color}
Applies colorization to specific sections of model's texture.

[](manual-wiki-start)
Currently only works with support models. Check the **Asset Previewer** to see which models support team color. Feel free to request more.
[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.SetTeamColor.actor)**Actor** {Actor}
The actor that should receive the event. Accepts an actor name or alias.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.SetTeamColor.color)**Color** {Color}
These color values will be used to colorize the team color sections of the model, using the A value as the blending value.

[](manual-wiki-start)
For example, a value of (0, 0, 255, 255) will set the team color to bright blue. Setting the A value to 0 means that no team color will be applied.
[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.SetTeamColor.second_color)**Second Color** {Second-Color}
These color values will be used to colorize the secondary team color sections of the model.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorAction.set_shadow_height)**Set Shadow Height** {Set-Shadow-Height}
Sets the shadow height of the actor.

[](manual-wiki-start)
Can be used to make shadows appear for models on cliffs.
[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.SetShadowHeight.actor)**Actor** {Actor}
The actor to set the shadow height for. Accepts an actor name or alias.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.SetShadowHeight.shadow_height)**Shadow Height** {Shadow-Height}
The value to set shadow height.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorAction.play_animation_with_duration)**Play Animation With Duration** {Play-Animation-With-Duration}

[](manual-wiki-start)
Similar to [Play Animation](#play-animation) but supports a duration for the animation. 
[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.PlayAnimationWithDuration.clip_id)**Clip Id** {Clip-Id}
Which animation to play. The default animation is "Attack".

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.PlayAnimationWithDuration.clip_duration)**Clip Duration** {Clip-Duration}
The duration of the animation.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.PlayAnimationWithDuration.use_real_timer)**Use Real Timer** {Use-Real-Timer}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorAction.pause_animation)**Pause Animation** {Pause-Animation}
Used to pause a currently playing animation on the actor.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.PauseAnimation.clip_id)**Clip Id** {Clip-Id}
Which animation to pause. The default animation is "Attack".

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorAction.resume_animation)**Resume Animation** {Resume-Animation}
Resumes a paused animation on the actor.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.ResumeAnimation.clip_id)**Clip Id** {Clip-Id}
Which animation to resume. The default animation is "Attack".

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorAction.play_sound)**Play Sound** {Play-Sound}
Used to play a sound from an actor directly.

[](manual-wiki-start)
The alternative is to create a separate sound actor.
[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.PlaySound.sound_name)**Sound Name** {Sound-Name}
The name of the sound asset to play.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.PlaySound.volume)**Volume** {Volume}
The volume multiplier for the sound. Using 0 defaults to 1.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorAction.set_scale_multiplier)**Set Scale Multiplier** {Set-Scale-Multiplier}
Sets the scale of the actor across individual axes. The final scale will be these values multiplied by the **Model Scale**.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.SetScaleMultiplier.actor)**Actor** {Actor}
The name of the actor that should receive the event. Accepts an actor name or alias.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.SetScaleMultiplier.scale)**Scale** {Scale}
[](dcei.engine.proto.InitialScale)**MessageType: [InitialScale](GenericMessage#initialscale)**

Specified the initial scale of the model and it can be non-uniform, this is display only, the finial display will multiply this by actual model scale

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.SetScaleMultiplier.duration)**Duration** {Duration}
If set, the scale multiplier will be applied over this duration. This can be used to make simple grow/shrink animations.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.SetScaleMultiplier.ease)**Ease** {Ease}
The easing function to use if the scale multiplier is applied over a duration.

[](manual-wiki-start)

[](manual-wiki-end)

>* **LINEAR**: 
>* **IN_SINE**: 
>* **OUT_SINE**: 
>* **IN_OUT_SINE**: 
>* **IN_QUAD**: 
>* **OUT_QUAD**: 
>* **IN_OUT_QUAD**: 
>* **IN_CUBIC**: 
>* **OUT_CUBIC**: 
>* **IN_OUT_CUBIC**: 
>* **IN_QUART**: 
>* **OUT_QUART**: 
>* **IN_OUT_QUART**: 
>* **IN_QUINT**: 
>* **OUT_QUINT**: 
>* **IN_OUT_QUINT**: 
>* **IN_EXPO**: 
>* **OUT_EXPO**: 
>* **IN_OUT_EXPO**: 
>* **IN_CIRC**: 
>* **OUT_CIRC**: 
>* **IN_OUT_CIRC**: 
>* **IN_ELASTIC**: 
>* **OUT_ELASTIC**: 
>* **IN_OUT_ELASTIC**: 
>* **IN_BACK**: 
>* **OUT_BACK**: 
>* **IN_OUT_BACK**: 
>* **IN_BOUNCE**: 
>* **OUT_BOUNCE**: 
>* **IN_OUT_BOUNCE**: 
>* **FLASH**: 
>* **IN_FLASH**: 
>* **OUT_FLASH**: 
>* **IN_OUT_FLASH**: 

#### [](dcei.engine.proto.ActorAction.SetScaleMultiplier.ease_intensity)**Ease Intensity** {Ease-Intensity}
Optional parameter for some easing functions (elastic, back, and bounce) to adjust the amplitude or overshoot amount.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorAction.set_shadow)**Set Shadow** {Set-Shadow}
Used to hide or show the shadow of an actor.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.SetShadow.actor)**Actor** {Actor}
The name of the actor that should receive the event. Accepts an actor name or alias.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.SetShadow.shadow_display)**Shadow Display** {Shadow-Display}
When unchecked, hides the actor's shadow.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorAction.clear_tint_color)**Clear Tint Color** {Clear-Tint-Color}
Removes tint color from the actor.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.ClearTintColor.actor)**Actor** {Actor}
The actor that should receive the event. Accepts an actor name or alias.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.ClearTintColor.label)**Label** {Label}
If set, only the tint with the matching label will be removed. Otherwise all tint color will be removed.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorAction.set_outline)**Set Outline** {Set-Outline}
Sets the outline render for the actor

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.SetOutline.actor)**Actor** {Actor}
The name of the actor that should receive the event. Accepts an actor name or alias.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.SetOutline.outline_color)**Outline Color** {Outline-Color}
Sets the outline color. The default is black.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.SetOutline.outline_width)**Outline Width** {Outline-Width}
The outline width to use. The default is 1.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorAction.clear_outline)**Clear Outline** {Clear-Outline}
Clear the outline render for the actor

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.ClearOutline.actor)**Actor** {Actor}
The name of the actor that should receive the event. Accepts an actor name or alias.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorAction.set_walk_animation)**Set Walk Animation** {Set-Walk-Animation}
Sets the walk animation for the actor

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.SetWalkAnimation.clip_id)**Clip Id** {Clip-Id}
Which animation to play when unit is moving.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorAction.set_idle_animation)**Set Idle Animation** {Set-Idle-Animation}
Sets the idle animation for the actor

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.SetIdleAnimation.clip_id)**Clip Id** {Clip-Id}
Which animation to play when unit is idle.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorAction.set_dynamic_aoe_params)**Set Dynamic Aoe Params** {Set-Dynamic-Aoe-Params}
Sets the cone angle and inner radius for dynamic AOEs

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.SetDynamicAoeParams.cone_angle)**Cone Angle** {Cone-Angle}
The angle of the AOE

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.SetDynamicAoeParams.inner_radius)**Inner Radius** {Inner-Radius}
The inner radius (as a fraction of the outer radius)

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorAction.set_particle_properties)**Set Particle Properties** {Set-Particle-Properties}
Sets particle start properties

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.SetParticleProperties.particle_properties)**Particle Properties** {Particle-Properties}

[](manual-wiki-start)

[](manual-wiki-end)

##### [](dcei.engine.proto.ActorAction.SetParticleProperty.set_start_lifetime)**Set Start Lifetime** {Set-Start-Lifetime}
How long will the particle last?

[](manual-wiki-start)

[](manual-wiki-end)

###### [](dcei.engine.proto.ActorAction.SetParticleProperty.SetStartLifetime.min_value)**Min Value** {Min-Value}

[](manual-wiki-start)

[](manual-wiki-end)

###### [](dcei.engine.proto.ActorAction.SetParticleProperty.SetStartLifetime.max_value)**Max Value** {Max-Value}

[](manual-wiki-start)

[](manual-wiki-end)

##### [](dcei.engine.proto.ActorAction.SetParticleProperty.set_start_speed)**Set Start Speed** {Set-Start-Speed}
How fast does the particle move when spawned?

[](manual-wiki-start)

[](manual-wiki-end)

###### [](dcei.engine.proto.ActorAction.SetParticleProperty.SetStartSpeed.min_value)**Min Value** {Min-Value}

[](manual-wiki-start)

[](manual-wiki-end)

###### [](dcei.engine.proto.ActorAction.SetParticleProperty.SetStartSpeed.max_value)**Max Value** {Max-Value}

[](manual-wiki-start)

[](manual-wiki-end)

##### [](dcei.engine.proto.ActorAction.SetParticleProperty.set_start_size)**Set Start Size** {Set-Start-Size}

[](manual-wiki-start)

[](manual-wiki-end)

###### [](dcei.engine.proto.ActorAction.SetParticleProperty.SetStartSize.min_value)**Min Value** {Min-Value}

[](manual-wiki-start)

[](manual-wiki-end)

###### [](dcei.engine.proto.ActorAction.SetParticleProperty.SetStartSize.max_value)**Max Value** {Max-Value}

[](manual-wiki-start)

[](manual-wiki-end)

##### [](dcei.engine.proto.ActorAction.SetParticleProperty.set_start_color)**Set Start Color** {Set-Start-Color}

[](manual-wiki-start)

[](manual-wiki-end)

###### [](dcei.engine.proto.ActorAction.SetParticleProperty.SetStartColor.color_a)**Color A** {Color-A}
A random color will be picked in between ColorA and ColorB

[](manual-wiki-start)

[](manual-wiki-end)

###### [](dcei.engine.proto.ActorAction.SetParticleProperty.SetStartColor.color_b)**Color B** {Color-B}

[](manual-wiki-start)

[](manual-wiki-end)

##### [](dcei.engine.proto.ActorAction.SetParticleProperty.set_simulation_speed)**Set Simulation Speed** {Set-Simulation-Speed}
Sets the simulation speed of the entire particle system. Unlike SetStartSpeed which affects only the move speed of spawned particles (e.g., it does nothing if the spawned particles only rotate but not move), this makes everything move faster or slower. Default is 1.

[](manual-wiki-start)

[](manual-wiki-end)

###### [](dcei.engine.proto.ActorAction.SetParticleProperty.SetSimulationSped.value)**Value** {Value}

[](manual-wiki-start)

[](manual-wiki-end)

##### [](dcei.engine.proto.ActorAction.SetParticleProperty.particle_sub_system)**Particle Sub System** {Particle-Sub-System}
Which subsystem this event should affect

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ActorAction.set_model)**Set Model** {Set-Model}
Sets a new model for an actor, only sprite resources are supported for now

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.SetModel.type)**Type** {Type}

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.ActorAction.SetModel.name)**Name** {Name}

[](manual-wiki-start)

[](manual-wiki-end)

