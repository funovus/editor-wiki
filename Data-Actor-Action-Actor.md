<div id="toc" markdown="1">
- [Data\Actor\Action Actor](#dataactoraction-actor)
  * [Effect](#effect)
  * [Launch Model](#launch-model)
  * [Launch Model Detached](#launch-model-detached)
  * [Impact Model](#impact-model)
  * [Impact Model Detached](#impact-model-detached)
  * [Beam Model](#beam-model)
  * [Launch Site](#launch-site)
  * [Target Site](#target-site)
  * [Launch Site Operations](#launch-site-operations)
  * [Target Site Operations](#target-site-operations)
  * [Host Site [Deprecated]](#host-site-deprecated)
  * [Host Site Operations [Deprecated]](#host-site-operations-deprecated)
  * [Additional Models](#additional-models)

</div>

***

# [](dcei.engine.proto.Actor.action_actor)**[Data](Data)\\[Actor](Data-Actor)\Action Actor** {dataActorAction-Actor}

[](manual-wiki-start)
Action Actors don't have models or sounds themselves, but are used to help hook up visuals and sounds to effects. You generally want to have at least one action actor for each [Weapon] and [Ability](Data-Ability).
[](manual-wiki-end)

## [](dcei.engine.proto.ActionActor.effect)**Effect** {Effect}
The effect that triggers the action.

[](manual-wiki-start)
Typically used to set the impact actor of a single effect (such as a [Damage](Data-Effect-Damage) effect or [Area Search](Data-Effect-Area-Search)) or the launch and impact actor of a [Launch Missile](Data-Effect-Launch-Missile) effect.
[](manual-wiki-end)

## [](dcei.engine.proto.ActionActor.launch_model)**Launch Model** {Launch-Model}
The actor that's created when the action actor's effect starts. Uses the start location of the **effect**

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ActionActor.launch_model_detached)**Launch Model Detached** {Launch-Model-Detached}
When checked, prevents the launch model from following a unit if the **effect** target is a unit.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ActionActor.impact_model)**Impact Model** {Impact-Model}
The actor that's created when the action actor's **effect** ends. Uses the end location of the effect.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ActionActor.impact_model_detached)**Impact Model Detached** {Impact-Model-Detached}
When checked, prevents the impact model from following a unit if the **effect** target is a unit.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ActionActor.beam_model)**Beam Model** {Beam-Model}
Creates a beam between the action's **launch site** and **target site**.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ActionActor.launch_site)**Launch Site** {Launch-Site}

[](manual-wiki-start)
Used to attach the launch model to a [Host Site](Data-Actor-Unit-Actor#host-sites) on the caster.
[](manual-wiki-end)

## [](dcei.engine.proto.ActionActor.target_site)**Target Site** {Target-Site}

[](manual-wiki-start)
Used to attach the impact model to a [Host Site](Data-Actor-Unit-Actor#host-sites) on the target.
[](manual-wiki-end)

## [](dcei.engine.proto.ActionActor.launch_site_operations)**Launch Site Operations** {Launch-Site-Operations}
Site operations applied to the **launch model**.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ActionActor.target_site_operations)**Target Site Operations** {Target-Site-Operations}
Site operations applied to the **impact model**.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ActionActor.host_site)**Host Site [Deprecated]** {Host-Site-Deprecated}

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ActionActor.host_site_operations)**Host Site Operations [Deprecated]** {Host-Site-Operations-Deprecated}

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ActionActor.additional_models)**Additional Models** {Additional-Models}
Used to add additional launch and impact models to the action.

[](manual-wiki-start)

[](manual-wiki-end)

