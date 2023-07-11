<div id="toc" markdown="1">
- [Data\Actor\Model Actor](#dataactormodel-actor)
  * [Resource](#resource)
  * [Events](#events)
  * [Event Macros](#event-macros)
  * [Host Site](#host-site)
  * [Host Site Operations](#host-site-operations)
  * [Host Sites](#host-sites)
  * [Additional Resources](#additional-resources)
  * [Model Scale](#model-scale)
  * [Selection Bonus Radius](#selection-bonus-radius)
  * [Aliases](#aliases)
  * [Include In Unit Body](#include-in-unit-body)
  * [Selection Shape](#selection-shape)
  * [Selection Scale](#selection-scale)
  * [Hide Shadow](#hide-shadow)
  * [Scale Multiplier](#scale-multiplier)
  * [Sprite Options](#sprite-options)

</div>

***

# [](dcei.engine.proto.Actor.model_actor)**[Data](Data)\\[Actor](Data-Actor)\Model Actor** {dataActorModel-Actor}

[](manual-wiki-start)
Model actors are used for all non-unit visuals and sound effects in the game. Each individual visual effect or sound has its own model actor. Shares many fields with [Unit Actor](Data-Actor-Unit-Actor).
[](manual-wiki-end)

## [](dcei.engine.proto.ModelActor.resource)**Resource** {Resource}
[](dcei.engine.proto.ActorResource)**MessageType: [ActorResource](GenericMessage#actorresource)**

The asset to use for the actor. This determines what the actor looks or sounds like.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ModelActor.events)**Events** {Events}
[](dcei.engine.proto.ActorEvent)**MessageType: [ActorEvent](Data-ActorEvent)**


[](manual-wiki-start)
Defines the [Actor Events](Data-ActorEvent).
[](manual-wiki-end)

## [](dcei.engine.proto.ModelActor.event_macros)**Event Macros** {Event-Macros}
Event macros will be expanded after the events field.

[](manual-wiki-start)
Adds a collection of actor events to the actor via [Event Macros](Data-Actor-Event-Macro).
[](manual-wiki-end)

## [](dcei.engine.proto.ModelActor.host_site)**Host Site** {Host-Site}
Where this actor will be attached to in the actor scope. It can be the name of an actor (that actor will be used as the parent and this actor will be attached to its origin point), or a host site defined in an actor (that actor will be used as the parent and the referenced site will be the attach point), or an attachment defined in the model of an actor.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ModelActor.host_site_operations)**Host Site Operations** {Host-Site-Operations}
A set of operations applied to the host site position/rotation to determine the final position/rotation for this actor.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ModelActor.host_sites)**Host Sites** {Host-Sites}
Define a list of named sites on this actor that other actors can be attached to (or reference).

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ModelActor.host_sites.name)**Name** {Name}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.HostSite.offset)**Offset** {Offset}
The position of the host site, relative to the actor's origin position.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ModelActor.additional_resources)**Additional Resources** {Additional-Resources}
[](dcei.engine.proto.ActorResource)**MessageType: [ActorResource](GenericMessage#actorresource)**


[](manual-wiki-start)
If set, a random resource will be chosen from a list comprised of this list and the [Resource Name](#resource-name). This is useful for playing random voice lines, among other uses.
[](manual-wiki-end)

## [](dcei.engine.proto.ModelActor.model_scale)**Model Scale** {Model-Scale}
Adjusts the size of the model. Using 0 defaults to 1.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ModelActor.selection_bonus_radius)**Selection Bonus Radius** {Selection-Bonus-Radius}
Adjusts the size of this actors's hit sphere for mouse selection and targeting if the model actor is within the scope of a unit actor. Useful for making small units more click-friendly.

[](manual-wiki-start)
Can be previewed in [Debug Options](Debugging-Features).
[](manual-wiki-end)

## [](dcei.engine.proto.ModelActor.aliases)**Aliases** {Aliases}
User defined name references that can be used to send messages to this actor from other actors in the same scope.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ModelActor.include_in_unit_body)**Include In Unit Body** {Include-In-Unit-Body}
When enabled, the model actor counts as selectable when within the scope of a unit actor.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ModelActor.selection_shape)**Selection Shape** {Selection-Shape}
[](dcei.engine.proto.UnitActor.SelectionShape)**EnumType: [UnitActor.SelectionShape](GenericEnum#unitactorselectionshape)**

Used to change mouse selection collider from sphere (default) to a cube. Useful for games with grid-based selection.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ModelActor.selection_scale)**Selection Scale** {Selection-Scale}
[](dcei.engine.proto.UnitActor.SelectionScale)**MessageType: [SelectionScale](GenericMessage#unitactorselectionscale)**

Adjusts the scale of the selection collider if **Selection Shape** is set to Cube.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ModelActor.hide_shadow)**Hide Shadow** {Hide-Shadow}
Prevents the actor from casting a shadow.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ModelActor.scale_multiplier)**Scale Multiplier** {Scale-Multiplier}
[](dcei.engine.proto.InitialScale)**MessageType: [InitialScale](GenericMessage#initialscale)**

Sets the scale of the actor across individual axes. The final scale will be these values multiplied by the **Model Scale**.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ModelActor.sprite_options)**Sprite Options** {Sprite-Options}
[](dcei.engine.proto.SpriteOptions)**MessageType: [SpriteOptions](GenericMessage#spriteoptions)**

Sprite options are for actor using sprite as resource.

[](manual-wiki-start)

[](manual-wiki-end)

