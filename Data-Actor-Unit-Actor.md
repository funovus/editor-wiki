<div id="toc" markdown="1">
- [Data\Actor\Unit Actor](#dataactorunit-actor)
  * [Resource](#resource)
  * [Preserve On Unit Remove](#preserve-on-unit-remove)
  * [Events](#events)
  * [Event Macros](#event-macros)
  * [Host Sites](#host-sites)
  * [Walk Animation Speed](#walk-animation-speed)
  * [Model Scale](#model-scale)
  * [Host Site Operations](#host-site-operations)
  * [Selection Bonus Radius](#selection-bonus-radius)
  * [Exclude From Unit Body](#exclude-from-unit-body)
  * [Selection Shape](#selection-shape)
  * [Selection Scale](#selection-scale)
  * [Aliases](#aliases)
  * [Hide Shadow](#hide-shadow)
  * [Scale Multiplier](#scale-multiplier)
  * [Sprite Options](#sprite-options)

</div>

***

# [](dcei.engine.proto.Actor.unit_actor)**[Data](Data)\\[Actor](Data-Actor)\Unit Actor** {dataActorUnit-Actor}
Unit actors determine how units look, sound, and animate. Units are linked to actors with the same name, and unit actors are automatically created without needing additional actor events.

[](manual-wiki-start)
Making changes to the **Presentation** fields of a unit will automatically create a new unit actor of the same name. Editing these fields will update the data of the linked unit actor.
[](manual-wiki-end)

## [](dcei.engine.proto.UnitActor.resource)**Resource** {Resource}
[](dcei.engine.proto.ActorResource)**MessageType: [ActorResource](GenericMessage#actorresource)**

The asset to use for the actor. This determines what the actor looks or sounds like.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.UnitActor.preserve_on_unit_remove)**Preserve On Unit Remove** {Preserve-On-Unit-Remove}
By default, unit actor will be destroyed automatically when the unit is removed (on the UnitRemove event). When this flag is enabled enabled, the actor is not removed with the unit and must be destroyed with actor events. Enabling this flag is necessary for playing a death animations on the unit.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.UnitActor.events)**Events** {Events}
[](dcei.engine.proto.ActorEvent)**MessageType: [ActorEvent](Data-ActorEvent)**


[](manual-wiki-start)
Defines the [Actor Events](Data-ActorEvent).
[](manual-wiki-end)

## [](dcei.engine.proto.UnitActor.event_macros)**Event Macros** {Event-Macros}
Event macros will be expanded after the events field.

[](manual-wiki-start)
Adds a collection of actor events to the actor via [Event Macros](Data-Actor-Event-Macro).
[](manual-wiki-end)

## [](dcei.engine.proto.UnitActor.host_sites)**Host Sites** {Host-Sites}
Defines a list of named sites on this actor that other actors can be attached to (or reference).

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.UnitActor.host_sites.name)**Name** {Name}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.HostSite.offset)**Offset** {Offset}
The position of the host site, relative to the actor's origin position.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.UnitActor.walk_animation_speed)**Walk Animation Speed** {Walk-Animation-Speed}
Adjusts the speed of the unit's walk animation. This can be used to correct "slippery feet" on certain models.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.UnitActor.model_scale)**Model Scale** {Model-Scale}
Adjusts the size of the model. Using 0 defaults to 1.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.UnitActor.host_site_operations)**Host Site Operations** {Host-Site-Operations}
A set of operations applied to the host site position/rotation to determine the final position/rotation for this actor.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.UnitActor.selection_bonus_radius)**Selection Bonus Radius** {Selection-Bonus-Radius}
Adjusts the size of this actors's hit sphere for mouse selection and targeting if the model actor is within the scope of a unit actor. Useful for making small units more click-friendly.

[](manual-wiki-start)
Can be previewed in [Debug Options](Debugging-Features).
[](manual-wiki-end)

## [](dcei.engine.proto.UnitActor.exclude_from_unit_body)**Exclude From Unit Body** {Exclude-From-Unit-Body}
If checked, this actor will not be considered as part of the unit when doing hit tests or calculating the bounds of the unit. If you use this flag, make sure there is at least one **Model Actor** on this unit that has the **Include In Unit Body** flag checked.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.UnitActor.selection_shape)**Selection Shape** {Selection-Shape}
[](dcei.engine.proto.UnitActor.SelectionShape)**EnumType: [UnitActor.SelectionShape](GenericEnum#unitactorselectionshape)**

Used to change mouse selection collider from sphere (default) to a cube. Useful for games with grid-based selection.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.UnitActor.selection_scale)**Selection Scale** {Selection-Scale}
[](dcei.engine.proto.UnitActor.SelectionScale)**MessageType: [SelectionScale](GenericMessage#unitactorselectionscale)**

Adjusts the scale of the selection collider if **Selection Shape** is set to Cube.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.UnitActor.aliases)**Aliases** {Aliases}
User defined name references that can be used to send messages to this actor from other actors in the same scope.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.UnitActor.hide_shadow)**Hide Shadow** {Hide-Shadow}
Prevents the actor from casting a shadow.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.UnitActor.scale_multiplier)**Scale Multiplier** {Scale-Multiplier}
[](dcei.engine.proto.InitialScale)**MessageType: [InitialScale](GenericMessage#initialscale)**

Sets the scale of the actor across individual axes. The final scale will be these values multiplied by the **Model Scale**.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.UnitActor.sprite_options)**Sprite Options** {Sprite-Options}
[](dcei.engine.proto.SpriteOptions)**MessageType: [SpriteOptions](GenericMessage#spriteoptions)**

Sprite options are for actor using sprite as resource.

[](manual-wiki-start)

[](manual-wiki-end)

