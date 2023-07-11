<table ><tbody ><tr></tr><tr><td><details>
<summary><b>Table of Contents</b></summary><hr>

<div markdown="1">
- [Data\Actor\Events](#dataactorevents)
    * [Events](#events)
        - [Unit Spawn [Deprecated]](#unit-spawn--deprecated-)
        - [Unit Morph](#unit-morph)
        - [Unit Remove](#unit-remove)
        - [Unit Stand](#unit-stand)
        - [Unit Walk](#unit-walk)
        - [Unit Death](#unit-death)
        - [Unit Weapon Start](#unit-weapon-start)
        - [Unit Weapon Stop](#unit-weapon-stop)
        - [Unit Ability Start](#unit-ability-start)
        - [Unit Ability Stop](#unit-ability-stop)
        - [Unit Ability Targeting On](#unit-ability-targeting-on)
        - [Unit Ability Targeting Off](#unit-ability-targeting-off)
        - [Unit Children Selection On [Wild Sky]](#unit-children-selection-on--wild-sky-)
        - [Unit Children Selection Off [Wild Sky]](#unit-children-selection-off--wild-sky-)
        - [Unit Move Command Received](#unit-move-command-received)
        - [Unit Attack Command Received](#unit-attack-command-received)
        - [Unit Weapon Damage Point](#unit-weapon-damage-point)
        - [Selection On](#selection-on)
        - [Selection Off](#selection-off)
        - [Behavior On](#behavior-on)
        - [Behavior Off](#behavior-off)
        - [Persistent Effect On](#persistent-effect-on)
        - [Persistent Effect Off](#persistent-effect-off)
        - [Actor Create](#actor-create)
        - [Actor Destroy](#actor-destroy)
        - [Actor Orphan](#actor-orphan)
        - [Animation Finish](#animation-finish)
        - [On Timer](#on-timer)
        - [On Custom Event](#on-custom-event)
    * [Conditions](#conditions)
        - [Compare](#compare)
        - [Logic Or](#logic-or)
        - [Logic And](#logic-and)
        - [Logic Not](#logic-not)
    * [Actions](#actions)
        - [Play Animation](#play-animation)
        - [Stop Animation](#stop-animation)
        - [Create](#create)
        - [Destroy](#destroy)
        - [Send [Deprecated]](#send--deprecated-)
        - [Log](#log)
        - [Create Timer](#create-timer)
        - [Remove Timer](#remove-timer)
        - [Set Site Operations](#set-site-operations)
        - [Create Aliases](#create-aliases)
        - [Set Variable](#set-variable)
        - [Send Custom Event](#send-custom-event)
        - [Set Tint Color](#set-tint-color)
        - [Set Mesh Effect [Deprecated]](#set-mesh-effect--deprecated-)
        - [Play Music [Deprecated]](#play-music--deprecated-)
        - [Stop Music [Deprecated]](#stop-music--deprecated-)
        - [Shake Camera](#shake-camera)
        - [Set Visibility](#set-visibility)
        - [Set Model Scale](#set-model-scale)
        - [Broadcast Custom Event](#broadcast-custom-event)
        - [Apply Mesh Effect](#apply-mesh-effect)
        - [Remove Mesh Effect](#remove-mesh-effect)
        - [Set Team Color](#set-team-color)
        - [Set Shadow Height](#set-shadow-height)
        - [Play Animation With Duration](#play-animation-with-duration)
        - [Pause Animation](#pause-animation)
        - [Resume Animation](#resume-animation)

</div>
</details></td></tr></tbody></table>

***
# [Data](Data)\\[Actor](Data-Actor)\\Events

Actor events are a logic system used by actors to execute actions from triggered events. Events are used to play animations on units in response to data events (like playing an attack animation when a unit attacks with a weapon or playing a death animation when a unit dies.)

Each event can have multiple conditions and multiple actions.

![events](https://user-images.githubusercontent.com/56179276/88447226-b076c500-cde5-11ea-9b8a-bef7de1189d8.png)

Similar to triggers, actor events have 3 components.
* **Event**: The event that triggers the actor event.
* **Condition**: Optional conditions to evaluate. All conditions must succeed for the action to be executed.
* **Action**: The actions to execute in response to the event.


## Events
An actor event can be used multiple times on an actor. When the same event is used more than once, the events are checked in order from top to bottom.

### Unit Spawn [Deprecated]
Triggers when the linked unit is spawned. Use ActorCreation instead as actors are automatically created when a linked unit is created.

### Unit Morph
Triggers when a unit undergoes a [Morph](https://wiki.funovus.com/release/Data-Effect-Morph) effect. If **Unit Type** is not set, any morph on a unit will trigger this event.
* **Unit Type**: The type of unit morph that triggers this event.

### Unit Remove
Triggers when a unit is removed.

### Unit Stand
Triggers when a unit leaves its movement state.

### Unit Walk
Triggers when a unit enters its movement state.

### Unit Death
Triggers when a unit dies.

### Unit Weapon Start
Triggers when a unit begins attacking with a weapon. If **Weapon** is not set, any weapon attack will trigger this event. If this event triggers a [Play Animation](#play-animation) action, the animation duration will be calculated from the weapon preswing + backswing.
* **Weapon**: The weapon that triggers this event.

### Unit Weapon Stop
Triggers when a unit stops attacking with a weapon.
* **Weapon**: The weapon that triggers this event.
 
### Unit Ability Start
Triggers when a unit starts casting an ability. If **Ability** is not set, any ability will trigger this event. If this event triggers a [Play Animation](#play-animation) action, the animation duration will be calculated from the ability prep time + finish time.
* **Ability**: The ability that triggers this event.
 
### Unit Ability Stop
Triggers when a unit stops casting an ability.
* **Ability**: The ability that triggers this event.

### Unit Ability Targeting On
Triggers when an ability enters targeting mode.
* **Ability**: The ability that triggers this event.
  
### Unit Ability Targeting Off
Triggers wehn an ability leaves targeting mode.
* **Ability**: The ability that triggers this event.

### Unit Children Selection On [Wild Sky]
Triggers when the children of this unit are selected.
* **Unit Type**: Used to specify which child unit type will trigger this event.
  
### Unit Children Selection Off [Wild Sky]
Triggers when the children of this unit are deselected.
* **Unit Type**: Used to specify which child unit type will trigger this event.

### Unit Move Command Received
Triggers when a unit receives a movement command. 

### Unit Attack Command Received
Triggers when a unit receives an attack command. 

### Unit Weapon Damage Point
Triggers when a unit executes an attack with a weapon (occurs after preswing).
* **Weapon**: The weapon that triggers this event.

### Selection On
Triggers when a unit is selected or on mouse hover.
* **Selection Type**: Use **selection** for on select, use **preselection** for on hover.

### Selection Off
Triggers when a unit is deselected or on mouse hover off.
* **Selection Type**: Use **selection** for on select, use **preselection** for on hover.

### Behavior On
Triggers when a unit gains a behavior. If **Behavior** is not set, any behavior will trigger this event.
* **Behavior**: The behavior that triggers this event.

### Behavior Off
Triggers when a unit loses a behavior (including if the behavior becomes disabled). If **Behavior** is not set, any behavior will trigger this event.
* **Behavior**: The behavior that triggers this event.

### Persistent Effect On
Triggers when a persistent effect is created. The persistent effect must have a [period count](https://wiki.funovus.com/release/Data-Effect-Persistent#periodic-count) of at least 1. If **Effect** is not set, any persistent effect will trigger this effect.
* **Effect**: The persistent effect that triggers this event.

### Persistent Effect Off
Triggers when a persistent effect is destroyed. 
* **Effect**: The persistent effect that triggers this event.

### Actor Create
Triggers when the actor is created.

### Actor Destroy
Triggers when the actor is destroyed.

### Actor Orphan
Triggers when the actor becomes orphaned. Actors become orphaned when their host actor is destroyed (an actor's host is typically the actor that created it).

### Animation Finish
Triggers when an animation on the actor finishes.
* **Clip**: The animation that should trigger this event.

### On Timer
Triggers when a [timer](#create-timer) expires.
* **Name**: The name of the timer that triggers this event.

### On Custom Event
Triggers when a [custom event](#send-custom-event) is recieved.
* **Identifier**: The name of the custom event that triggers this event.

## Conditions
While it appears there are several actor conditions, [Compare](#compare) is essentially the only useful one.

### Compare
Returns the result of the evaluated comparison. Typically used to compare an actor [variable](#set-variable) against a constant (or random integer). Basic arithmetic is supported.

### Logic Or
Returns true if either operation succeeds.

### Logic And
Returns true if both operations succeed.

### Logic Not
Returns true if the operation fails.

## Actions
Actions that target other actors can only be sent to other actors of the same scope.

### Play Animation
Plays an animation on the actor. GPU model animations can be checked in the [Asset Previewer]().
* **Clip Id**: Which animation to play. The default animation is "Attack".

### Stop Animation
Stops playing an animation that was initiated by a [Play Animation](#play-animation) action.
* **Clip Id**: Which animation to stop playing. The default animation is "Attack".

### Create
Create a new actor in the scope of this actor. The new actor should be a [Model Actor](https://wiki.funovus.com/release/Data-Actor-Model-Actor).

* **Actor**: The type of new actor to create.
* **Host Site**: Used to assign a host site for the new actor. Otherwise the parent actor's origin will be used.
* **Host Site Operations**: Used to assign [Site Operations](https://wiki.funovus.com/release/Data-Actor-Site-Operation) to the new actor.
* **Aliases**: Used to assign an [Alias](https://wiki.funovus.com/release/Data-Actor-Model-Actor#aliases) to the new actor.

### Destroy
Destroys an actor. If **Actor** is not set, the actor will destroy itself.
* **Actor**: Look for an actor with this name within the scope to destroy.

### Send [Deprecated]
Use [Send Custom Event](#send-custom-event).

### Log
Prints a log message in the [Play Settings Log]().
* **Type**: Determines if the message is displayed as a debug, warning, or error message.
* **Message**: The message to be printed.

### Create Timer
Creates a custom timer on the actor that triggers a [On Timer](#on-timer) event.
* **Name**: The name of the timer.
* **Duration**: The duration of the timer.
* **Repeat**: If enabled, the timer will repeat until [removed](#remove-timer).

### Remove Timer
Removes a timer without trigger an [On Timer](#on-timer) event.
* **Name**: The timer to be removed.

### Set Site Operations
Sets the [Site Operations](https://wiki.funovus.com/release/Data-Actor-Model-Actor#host-site-operations) of the actor. Note that unless **Append** is enabled, the new site operations will overwrite any existing site operations on the actor. **Duration** can be used to create simple animations.
* **Site Operations**: The site operations to apply to the actor.
* **Duration**: If set, the site operations will be applied over this duration. Does not work for all types of site operations.
* **Append**: If set, the new site operations will be added to the existing site operations on the actor instead of overwriting them. Does not work for all type sof site operations.

### Create Aliases
Applies an [alias](https://wiki.funovus.com/release/Data-Actor-Model-Actor#aliases) to the actor. If **Actor** is not set, the aliases will be applied to this actor.
* **Actor**: The actor to apply the aliases to. Accepts an actor name or alias.
* **Aliases**: The aliases to apply.

### Set Variable
Sets a variable on the actor that can be checked by [Conditions](#conditions).
* **Name**: The name of the variable.
* **Value Expression**: The value of the variable. Most commonly set to a **constant**, **random integer**, or using **add** to increment the variable by a constant.

### Send Custom Event
Sends a custom event that triggers an [On Custom Event](#on-custom-event) event. If **Actor** is not set, then the actor will send the custom event to itself. If the actor scope contains multiple actors with the targeted name or alias, only the first actor will recieve the event (See: [Broadcast Custom Event](#broadcast-custom-event)).
* **Actor**: The actor to send a custom event to. Accepts an actor name or alias.
* **Identifier**: The name of the custom event.

### Set Tint Color
Sets the tint color of an actor. To clear tint color, set RGB to 255, 255, 255.
* **Actor**: The actor to tint. Accepts an actor name or alias.
* **RGB**: The color to tint the actor. Values over 255 can be used to increase brightness.

### Set Mesh Effect [Deprecated]
Use [Apply Mesh Effect](#apply-mesh-effect) instead.

### Play Music [Deprecated]

### Stop Music [Deprecated]

### Shake Camera
Shakes the camera.
* **Duration**: The duration of the camera shake.
* **Strength**: The magnitude of the camera shake.
* **Vibrato**: The vibration intensity of the camera shake.

### Set Visibility
Modifies the visibility of the actor. Hidden actors can't be selected or otherwise interact with the cursor.
* **Actor**: The actor to set visibility for. Accepts an actor name or alias.
* **Visibility**: If disabled, hide the actor. If enabled, show the actor.

### Set Model Scale
Sets the [model scale](https://wiki.funovus.com/release/Data-Actor-Model-Actor#model-scale) of the actor. The default model scale is 1.

* **Actor**: The actor to be scaled. Accepts an actor name or alias.
* **Model Scale**: The new scale of the actor.
* **Model Scale Expression**: The evaluated expression is added to the **Model Scale**.
* **Duration**: If set, the scale will be applied over this duration. This can be used to make simple grow/shrink animations.

### Broadcast Custom Event
Similar [Send Custom Event](#send-custom-event) but all the message is sent to all targeted actors.
* **Actor**: The actor to send a custom event to. Accepts an actor name or alias.
* **Identifier**: The name of the custom event.

### Apply Mesh Effect
Applies a mesh effect to the actor. Mesh effects are similar to shaders effects.
* **Actor**: The actor to apply a mesh effect on. Accepts an actor name or alias.
* **Effect**: The mesh effect to apply.

### Remove Mesh Effect
Removes a mesh effect from the actor.
* **Actor**: The actor to remove a mesh effect from. Accepts an actor name or alias.
* **Effect**: The mesh effect to remove.

### Set Team Color
Applies colorization to specific sections of model's texture. Only works with supported models.
* **Actor**: The actor to apply team color to. Accepts an actor name or alias.
* **RGBA**: The colorization to apply. **RGB** takes values relative to the maximum color value. **A** takes values between 0 and 255 and determines colorization intensity.

### Set Shadow Height
Sets the shadow height of the actor. Can be used to make shadows appear for models on cliffs.
* **Actor**: The actor to set the shadow height for. Accepts an actor name or alias.
* **Shadow Height**: The set shadow height.

### Play Animation With Duration
Similar to [Play Animation](#play-animation) but supports a duration for the animation. 
* **Clip Id**: Which animation to play. The default animation is "Attack".
* **Clip Duration**: The duration of the animation.

### Pause Animation
Used to pause a currently playing animation on the actor.
* **Clip Id**: Which animation to pause. The default animation is "Attack".

### Resume Animation
Resumes a paused animation on the actor.
* **Clip Id**: Which animation to resume. The default animation is "Attack".
