In this tutorial we will be creating a skill shot for our unit that stops upon colliding with an enemy based upon the weapon data created in [Tutorial 1–2: Creating A Weapon](https://github.com/dctopspin/Wild-Modding/wiki/Tutorial-1–2). A skill shot is an ability that fires a missile.

This tutorial will cover:
1. [Creating A Search Effect To Apply A Set Effect](#1-creating-a-search-effect-to-apply-a-set-effect)
2. [Creating A Behavior With A Periodic Effect And Making A Missile To Add It To](#2-creating-a-behavior-with-a-periodic-effect-and-making-a-missile-to-add-it-to)
3. [Creating An Ability To Launch the Missile and adding it to the Hero](#3-creating-an-ability-to-launch-the-missile-and-adding-it-to-the-hero)

## 1. Creating A Search Effect To Apply A Set Effect

First we're going to duplicate the "Hero IceMage Weapon Damage" damage effect, to do this right-click on the effect and click "duplicate", setting the name of the duplicated effect to "Hero - Ice Blast - Damage".

![1a Duplicate](https://user-images.githubusercontent.com/11213059/74206247-68952480-4c2f-11ea-98b4-6c0b58bfb28d.PNG)
![1b Duplicate](https://user-images.githubusercontent.com/11213059/74206344-db9e9b00-4c2f-11ea-98a2-d0deddccb24e.PNG)

Then add another effect called "Hero - Ice Blast - Remove Missile" and set its effect type to "remove" and Which Unit to "SOURCE_UNIT". This will remove the source unit when the effect is run.

![1 Remove Effect](https://user-images.githubusercontent.com/11213059/74206493-88791800-4c30-11ea-8646-290ac18362ac.PNG)

Next, add a third effect called "Hero - Ice Blast - Set" and set its effect type to "set". Next add "Hero IceMage Weapon Damage" and "Hero - Ice Blast - Remove Missile" to the effect list by clicking on the "+" and selecting them.

![1 Set Effect](https://user-images.githubusercontent.com/11213059/74206688-4b615580-4c31-11ea-9ed3-280631fbf8c7.PNG)

Finally, add a fourth effect called "Hero - Ice Blast - Search" and set its effect type to "areaSearch". Set the Area Search Type to "circle" with a Radius of "0.25" and check the box for Debug Draw, this will cause the effect to create a circle on the ground whenever it is run, allowing you to see it in action. Set the filter to "Excluded" for Player and Ally, and the Effect to "Hero - Ice Blast - Set".

![1a Search Effect](https://user-images.githubusercontent.com/11213059/74206940-4e107a80-4c32-11ea-8436-3109fb76c991.PNG)
![1b Search Effect](https://user-images.githubusercontent.com/11213059/74206975-77310b00-4c32-11ea-98eb-7c9d11dd01a8.PNG)

## 2. Creating A Behavior With A Periodic Effect And Making A Missile To Add It To

Move the the Behavior tab and create a new behavior called "Hero - Ice Blast - Search Behavior". Set it to have a Periodic Interval of "0.01" and a Periodic Effect of "Hero - Ice Blast - Search".

![2 Behavior](https://user-images.githubusercontent.com/11213059/74207218-7ea4e400-4c33-11ea-84f6-b843aedb793a.PNG)

Next, move to the Mover tab and create a new mover called "Hero - Ice Blast - Mover" with "Standard Guided Missile" as the template.

![2 Mover](https://user-images.githubusercontent.com/11213059/74207310-ed823d00-4c33-11ea-9e65-419e3414ced7.PNG)

Then move to the Unit tab and create a missile as outlined in [Tutorial 1–2: Creating A Weapon](https://github.com/dctopspin/Wild-Modding/wiki/Tutorial-1%E2%80%932:-Creating-A-Weapon#1-Creating-A-Missile-Unit) with the name "Hero - Ice Blast - Missile", then add "Hero - Ice Blast - Search Behavior" to the missile.
![2 Missile](https://user-images.githubusercontent.com/11213059/74207492-b9f3e280-4c34-11ea-8aae-191645e811f8.PNG)

## 3. Creating An Ability To Launch the Missile and adding it to the Hero

Move back to the Effect Tab and create a new effect called "Hero - Ice Blast - Launch Missile" with the effect type "launchMissile". Then set the Missile Unit to "Hero - Ice Blast - Missile", the Impact Location to "TARGET_LOCATION", and the Mover to "Hero - Ice Blast - Mover".

![3 Launch Effect](https://user-images.githubusercontent.com/11213059/74208251-954d3a00-4c37-11ea-97be-6ce6a37ccd68.PNG)

Move to the Ability tab and create a new ability called "Hero - Ice Blast". Set its Ability Type to "TARGET", the Cast Type to "MANUAL", and its Target Range Mode to "MAX_RANGE". This will make it so that you decide where and when it's cast, and that it will always be cast targeting the maximum range of the ability. Next set its Effect to "Hero - Ice Blast - Launch Missile", Prep Time to "0.5", Finish Time to "0.5", Period to "1", Range to "8", Arc to "60", and set its Command Card Icon to "icon_spell_ice_spike". 

![3a Ability](https://user-images.githubusercontent.com/11213059/74208756-bf076080-4c39-11ea-9a3d-ae9986f4def9.PNG)
![3b Ability](https://user-images.githubusercontent.com/11213059/74208827-08f04680-4c3a-11ea-8e36-99adb2cab153.PNG)

Move to the Unit tab and select the "Hero IceMage" unit. Remove the weapon and add the "Hero - Ice Blast" ability to it. Then check the Bind Ability Ui box so that we can see the ability when we select the hero and set it so that the attack animation is used for the ability cast.

![3 Hero](https://user-images.githubusercontent.com/11213059/74208882-43f27a00-4c3a-11ea-8213-e6cec4224289.PNG)

Finally, Save and hit Play to test out the ability.

![In Action](https://user-images.githubusercontent.com/11213059/74209234-c465aa80-4c3b-11ea-8da2-d78987c0878c.gif)

Tutorial Map: [Tutorial 1–2.5: Skillshot.zip](https://github.com/dctopspin/Wild-Modding/files/4184090/Tutorial.1-2.5.Skillshot.zip)