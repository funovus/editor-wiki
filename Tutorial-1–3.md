In this tutorial, we will be improving our weapon with actors. This tutorial will be a bit heavier than our previous ones as actors are a bit more involved.

This tutorial will cover:
- [1. Creating An Action Actor](#1-creating-an-action-actor)
- [2. Host Sites](#2-host-sites)
- [3. Impact FX](#3-impact-fx)
- [4. Let There Be Sound](#4-let-there-be-sound)


## 1. Creating An Action Actor

You may have noticed at the end of the last tutorial that the missiles were launching from the hero's feet and impacted at the enemy's feet. This is less than ideal. We can fix this with action actors. While most actors represent a single model, VFX, or sound, action actors are special actors that configure how other actors are created, as well as adjusting the launch and impact positions of launch missile effects.

To get started, create a new actor. Let's name it "Hero IceMage Weapon Attack FX". Set the Parent to "_FX Attack SingleTarget." Then set the Actor Type to "Action Actor."

In this Action Actor you just created, in Effect, select your weapon's launch missile effect (Hero IceMage Weapon Launch).

![1 Action Actor](https://user-images.githubusercontent.com/56179268/218166273-d1a55139-107d-42e8-afa5-63e50a754361.png)


The thing to pay attention to here is the Launch Site and Target Site of the action actor (set to SiteWeapon and SiteHit from our parent actor, respectively). The action actor tells the launch missile effect to use these sites for its Launch and Target positions. So when the Hero IceMage Weapon Launch effect fires, it will look for a "SiteWeapon" on the caster unit and a "SiteHit" on the target unit.

## 2. Host Sites

So what are these Sites? These sites are arbitrary attachments that can be added to unit actors. If you look at your hero actor and scroll down to its "unitActor.hostSites" you can see that it already has a "SiteHit" and "SiteStatus" that it's inheriting from its parent actors (our enemy units have these same sites as well). The action actor we created looks for a "SiteWeapon" on the caster... but our hero doesn't have one yet. So let's add one.

![2 Host Sites](https://user-images.githubusercontent.com/56179268/218166617-bda28c94-daaa-417f-9440-af5b14b1c538.png)


Click the "Add" button next to the unitActor.hostSites and name the new site "SiteWeapon" (this name is important, since it's what our action actor is currently looking for).

![3 new host site](https://user-images.githubusercontent.com/56179268/218166775-1306b14e-74be-4c83-bb89-4ab732aeca8d.png)

Set the new site's Forward and Up properties to "0.5". These values mean that this site will be 0.5 forward and 0.5 up from the hero's origin position, which is about where the tip of the mage's wand is during the attack animation.

![4 new host site values](https://user-images.githubusercontent.com/56179268/218166875-cb4d8658-6406-4fe9-b976-89a0b46c2655.png)



> **PRO TIP:** You can use actor events to quickly test/debug your own host sites. Don't sweat if you're not familiar with actor events BUT IF YOU ARE, the psuedo events would be:<br/><br/> `Hit Plus for new Event > ActorCreate > Create > Actor:"Some Actor" HostSite:"SiteWeapon"`<br/><br/>![5 pro tip actor events](https://user-images.githubusercontent.com/35605743/123491297-fe8ade80-d5db-11eb-8d14-2a1b78297685.PNG)<br/><br/>...which looks like this in-game!<br/><br/>![5b gif](https://user-images.githubusercontent.com/56179276/66532227-78ef9400-eac3-11e9-806a-c0daf3931628.gif)
***

## 3. Impact FX

Okay, now our missile no longer launches from/targets feet. An improvement for sure, but it's still missing impact VFX. So let's add that now.

Create a new actor and name it "Hero IceMage Weapon Impact FX". Keep the Actor Type set to "Model Actor" and set the Parent type to "_FX OneShot SelfRemoving." This parent type is useful for VFX as it tells the asset to play its default animation and destroy itself when finished. Again, you may want to collapse the events so the actor data is more readable. Set the Resource Type to "ParticleAnimation" (where most VFX live) and Resource Name to "vfx_icemage_frostbolt_impact".

![6b impact fx](https://user-images.githubusercontent.com/56179268/218167304-9e0686d5-4d2a-40a9-8dbb-d17ec8f77540.png)


Now we can add our new impact fx to our action actor. Select the action actor and set the Impact Model to the new impact FX.

![7 action again](https://user-images.githubusercontent.com/56179268/218168338-00d8c7a4-813a-4330-83c5-f271209863ab.png)


## 4. Let There Be Sound

The last thing we'll add in this tutorial is a sound effect when the missile is launched.

Create a new actor and name it "Hero IceMage Weapon Launch SFX". Set the Parent type to "_SFX OneShot SelfRemoving" (note that it's _SFX and not _FX). Keep the Actor Type as "Model Actor" and click Add.

Set the Resource Type to "Sound" and the Resource Name to "ice_mage_missile_launch".

![8 sfx](https://user-images.githubusercontent.com/56179268/218168676-048c2d0d-a32a-4942-81f6-9ef20f9c3b64.png)


Then head back over to the action actor and set its Launch Model to the sound actor you just created (Is a sound really a model? Yes).

![9 action again AGAIN](https://user-images.githubusercontent.com/56179268/218169081-2c7ccd81-1908-4371-b3d6-a14eb7517b18.png)


And that's all! Now our weapon looks and sounds nicer!

![12b gif](https://user-images.githubusercontent.com/56179276/66535486-8eb68680-eace-11e9-926d-f9f501dec75a.gif)

***

Tutorial Map:  https://platform.wildsky.dev/arcade/game/625

[Next Up: Tutorial 1–4: Writing Scripts In Lua](Tutorial-1%E2%80%934)
