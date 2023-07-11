In this tutorial, we will be adding a ranged weapon to the unit we created in the previous tutorial. Weapons allow units to auto-attack other units. 

This tutorial will cover:
- [1. Creating A Missile Unit](#1-creating-a-missile-unit)
- [2. Creating Effects](#2-creating-effects)
- [3. Creating A Mover](#3-creating-a-mover)
- [4. Creating A Weapon](#4-creating-a-weapon)

## 1. Creating A Missile Unit

Create a new unit named "Hero IceMage Weapon Missile" and set its Parent to "_CMissile. The names don't really matter (except when creating a unit and unit actor—those names must match), but we use a general naming pattern that helps keep large projects organized.

![1 missile unit](https://user-images.githubusercontent.com/56179268/218136294-d90e8848-7227-402d-8f0d-22efc078156a.png)

As with the hero, the actor for the projectile is automatically created. Set the actor's Resource Type to "ParticleAnimation" and the Resource Name to "vfx_icemage_weapon_missile".

![2 missile actor](https://user-images.githubusercontent.com/56179268/218137255-ccfd44ee-f08f-453a-aaa2-3f853dbbf5a7.png)

## 2. Creating Effects

Enable the Effect filter and create a new effect. Name it "Hero IceMage Weapon Damage". Set the Effect Type to "damage", and the Damage Amount to "5". You'll notice there's a Which Unit field that we're leaving it set to the default value of "Target Unit". This means that the effect is run on the target unit of the previous effect (or weapon/ability that creates this effect).

![3 effect damage](https://user-images.githubusercontent.com/56179268/218140445-823f5905-8230-45d1-be8c-6193c01f479d.png)

Next create another new effect and name it "Hero IceMage Weapon Launch". Make sure the Effect Type is set to "Launch Missile" (which is the default). Set the Missile Unit to the missile unit we created (Hero IceMage Weapon Missile). Set the Impact Effect as the damage effect we created (Hero IceMage Weapon Damage). Leave the rest as the default values.

Notice the Object Explorer. Our Weapon Missile unit and Weapon Damage effect are now both associated with our Weapon Launch effect. We made a connection between the two effects when we set them in the Field Editor. You can also see the connection in the Node Editor window. 

![4 effect launch](https://user-images.githubusercontent.com/56179268/218143394-9a6b2206-197a-4463-b5fb-d50a19467e4a.png)


## 3. Creating A Mover

Now enable the Mover filter (or "All") and create a new mover. (Alternatively, right-click in the node editor and select "Add New Object") As the name implies, Movers help determine how other objects/units move.

This time, let's use a template by setting the Template field to "Standard Ballistic Missile". Using a template is similar to using a Parent field, except the data is only copied once (when the new object is created), and not updated if the parent value changes. Let's name it "Hero IceMage Weapon Missile" since this mover will determine how that missile moves.

There are a few different mover types: ballistic, guidance, sineWave, and orbiting. Ballistic movers move in an arc controlled by the mover's gravity and flight time. Guidance movers move in a straight line towards their target at a rate controlled by the mover's speed and acceleration. SineWave movers move with periodic bounces. Orbiting movers mode in a continuous orbit around an object.

![5 mover](https://user-images.githubusercontent.com/56179268/218144279-43959c0d-a177-4106-94e3-92b7fcb5f296.png)


Next, go back to your Launch Missile effect, and set the Mover field as the Mover we just created. Alternatively, you can hook this up via the Node Editor window as well.

![6 hookup mover](https://user-images.githubusercontent.com/56179268/218144787-3903a5df-b92f-48b2-88a4-b7945b2ceccb.png)

## 4. Creating A Weapon

Now go to the Weapon filter or node editor and create a new weapon. Name it "Hero IceMage Weapon" and set the Parent to "_StandardRangedWeapon". Then set the Effect Name to your launch missile effect (Hero IceMage Weapon Launch).

![7b weapon](https://user-images.githubusercontent.com/56179268/218148082-2f1431d3-70d4-4654-b95b-056d6827a887.png)
Finally, go to your hero Unit data. Scroll down to "Components" > "Behavior" > "Generic Controllable Unit" and ensure the Leash Radius is set to "30" to let our hero see the enemies before they see him. Then add the weapon we created to the hero's Weapon List.

Because of this connection, we can see that our weapon hierarchy has been added to our unit's hierarchy in the Object Explorer, making it easier to identify which effects/movers/actors are connected together. You can also see the connection in the node editor.

![8b weapon list](https://user-images.githubusercontent.com/56179268/218148427-c6d334a3-5d5c-448a-b5ce-9d53da119de8.png)


To test that our new weapon works, we have to add some enemies for our hero to fight! Head back to the Terrain Window and under the unit tab, set the current unit to "Standard MeleeUnit" and place a few on the terrain nearby to your hero. Make sure they are far enough that they don't attack your hero, but still close enough where your hero can attack them.

![9 units on map](https://user-images.githubusercontent.com/56179268/218149372-09472138-428a-4075-867f-f5e7707990d5.png)


By default, units placed on the map belong to the player's team (and thus the hero won't attack them by default). We can remedy this by changing the value of "Selected Unit Team" for each enemy unit from "1" to "-1". You would change this value to "2" if the game was multiplayer with player vs. player.

Change to selection mode by pressing the "ESC" key. Select each of the melee units and change their UnitTeam from "Player" (1) to "Enemy" (-1).

![11 enemy team](https://user-images.githubusercontent.com/56179268/218150044-c90bac71-6544-42cd-af35-79d7f5be5b3f.png)


Finally, SAVE and hit Play to see our new weapon in action!

![12b gif](https://user-images.githubusercontent.com/56179276/66530628-63776b80-eabd-11e9-8cd7-304df8dd430f.gif)

***

Tutorial Map: https://platform.wildsky.dev/arcade/game/626

[Next Up: Tutorial 1–3: Improving Things With Actors](Tutorial-1%E2%80%933)
