In this tutorial, we will be creating a new project and hero unit to be used for the rest of this tutorial series.

This tutorial will cover:
- [1. Creating A New Project](#1-creating-a-new-project)
- [2. Creating A New Unit](#2-creating-a-new-unit)
- [3. Creating A Unit Actor](#3-creating-a-unit-actor)
- [4. Getting The Unit In-Game](#4-getting-the-unit-in-game)


## 1. Creating A New Project

Start by pressing the "New Project" button at the left of the Terrain Window, or click on "File" > "New" (Shortcut `Ctrl+Shift+N`).

You will be prompted to enter a name for the new project. I named mine "HeroTutorialProject" and then hit Select.

After that, you should be looking at a blank map in the Terrain Window.


## 2. Creating A New Unit

To create a new unit, first we must open the Data Window. To do this, press "Window" > "Data Window" (shortcut `Ctrl+Shift+D`).

![image](https://user-images.githubusercontent.com/56179268/217943600-dea6b5e5-9a5d-48d1-8fb9-de334dc78e5e.png)

From here you'll see the Data Window. 

![image](https://user-images.githubusercontent.com/56179268/217944264-10bda1e8-c40c-4852-9e0f-125cbeff1fb7.png)

The object list displays all data. You can filter it with the drop down list or the colored icons below the search bar. You can use Shift or Control to select multiple data types at once.
![image](https://user-images.githubusercontent.com/56179268/217945846-c1bb41a8-e368-4059-86dd-a6bd18323ebb.png)
Try it now by switching to the "Unit" filter and typing "Standard MeleeUnit" and then click on the "Standard MeleeUnit" that will appear. This will populate the Object Explorer, Node Editor, and Field editor with this object's data. 

To start with, the object explorer shows all other data that's somehow linked to this object. For an example, this unit has a weapon and an actor. Those in turn use other data, which is shown on this list. 

![image](https://user-images.githubusercontent.com/56179268/217947085-9ae15498-cb25-41f4-94e3-0a62dd02ab3a.png)

The middle panel, the Node Editor, displays how all of this data is connected in a visual way. Note that it doesn't currently show Actors.
![image](https://user-images.githubusercontent.com/56179268/217948152-786e7a91-db72-4ed8-9b8b-42d5f56d2d0a.png)

Clicking on any of these objects will allow you to inspect and modify it in the right-most panel, the Field Editor:
![image](https://user-images.githubusercontent.com/56179268/217948333-01794c58-3b84-440b-8907-e3916b9affb1.png)

Note that all of these panels can be closed, moved around, or locked. The "Add Pane" and "Layouts" button at the top right allow you to further customize your work space. 

Now, let's create our very own Unit!

To create a new unit, click the "+ New" button at the top of the object list and give the unit a name (you can leave the Prefix blank). I named mine "Hero IceMage" since it will be a hero with an icy theme. Leave the Parent and Template fields set to "[None]" for now (you can change these field values later).
 
Press the "Add" button to create the new unit. 

<img src="https://user-images.githubusercontent.com/56179268/218126323-117788f0-e9d0-4744-b828-1fa8dca64c3c.png" alt="drawing" style="width:350px;"/><br><br />

You should now see your new unit in the Object list. (If not, enable the unit filter and clear the search bar)

Next we'll add some basic data to the unit by setting its **Parent** value, which lets it inherit data from another object. Change your unit's **Parent** value from "[None]" to "_CUnit".

![change base unit](https://user-images.githubusercontent.com/56179268/218126846-e7b4116f-13c4-4370-8e3b-f534124aa9cc.png)

When you do this, you should see some of data values change. Specifically:

* Radius = 0.125
* Max Health = 10
* Start Health = 10
* Move Speed = 2
* Turning Speed = 900
* Behavior Type = Generic Controllable Unit

This just sets up some basic data for the unit, inherited from the "_CUnit" unit type.

To make our hero more heroic, let's set its Max Health and Max Mana to **100**. Note that the editor automatically sets the Start Health and Start Mana to 100 in order to match the new Max Health and Max Mana values we set.

![image](https://user-images.githubusercontent.com/56179268/218127375-894c67c8-104a-4d2f-a8b2-cc7b786def1a.png)

## 3. Creating A Unit Actor

The final step before being able to use our new unit in-game is to configure its **Actor**. All units use an actor to tell the game what it should look like and when to play animations, along with setting other visual and audio data for the unit. Actors can also be used to create and configure VFX and SFX for abilities, buffs, and more, but we'll get into that later.

Actors are automatically created for new units. You can navigate to a unit's actor by selecting the actor from the object explorer. A unit's actor will have the same name as the unit.

![unit actor in object explorer](https://user-images.githubusercontent.com/56179268/218127620-1e09ca4e-1a21-4cb3-860c-d91bb1420c51.png)

Now set your actor's Parent field to "_StandardUnit DecayOnDeath":

![actor field editor](https://user-images.githubusercontent.com/56179268/218127959-f705c42f-d06b-4bcb-a3c4-7821df935f2c.png)


This is exactly the same as how we set the unit's "Parent" field, except you'll see a lot more data has been populated for our new actor (such as Walk Animation Speed). Actors are one of the most complicated (and powerful) pieces of the Data Window so we won't go too deep into them just yet. 

To get our mage hero looking like a mage, we'll need to set our Unit Actor's Resource to an elven mage model. By default our Parent field automatically selected the "goblin_green" model. Let's change that to the "elvenmage" model (under "Unit Actor > Resource > Name"). 

You'll notice there are two fields under Resource: "Type" and "Name". The "Type" field determines the category of assets we can choose from in the "Name" field. In this instance, "GpuAnimation" gives us a selection of models that have animations tied to them, such as our elvenmage model (you can start typing the name directly into the input text box to narrow the search in the dropdown menu).

![Elven Mage Model selection](https://user-images.githubusercontent.com/56179268/218128251-5249cf23-3aeb-4a78-b1de-f24a09563c1b.png)


Next, press the "+" next to "Event Macros", and set the new Event Macro to "Events StandardUnit Selectable". This sets up the actor to show a selection ring around the unit when it's selected. 

![image](https://user-images.githubusercontent.com/56179268/218128457-cadaf773-07f0-4bc1-8996-e36dda1cff11.png)

You may have noticed the Object Explorer hierarchy getting bigger. This is a good way to quickly figure out what additional objects have been inherited from our Parent and Event Macro selections.

![events selectable](https://user-images.githubusercontent.com/56179268/218128950-3b4f0d5d-ef7d-4ded-8e1e-10e5ca4310b8.png)


Lastly, let's set the "Walk Animation Speed" to "1.75". This controls how fast the walk animation is played on the unit, and 1.75 happens to look better than the default value. Don't worry about it too much. 

Here's a screenshot of everything we set for our "Hero IceMage" UnitActor. 

![image](https://user-images.githubusercontent.com/56179268/218129263-c539353c-6da1-42fb-b3d9-a6106eb579a6.png)


## 4. Getting The Unit In-Game

First, SAVE your map by pressing the "Save" button, pressing "File" > "Save", or using the shortcut (`Ctrl+S`). Next go back to the terrain window (Ctrl+shift+T) and click on the "Units" tab.

A list of available units will appear. Search for your unit's name and select it.

![terrain unit select](https://user-images.githubusercontent.com/56179268/218129639-60a2eadc-3f06-4e0c-9b19-eabec7d53b59.png)

Selecting a unit from the list will enter paint mode, so now you can spawn your selected unit anywhere on the map. Let's put our mage in the middle of the map. Press the Escape key on your keyboard to exit selection mode and then click on your mage hero to select it if you need to move or delete it. 

<img src="https://user-images.githubusercontent.com/35605743/123344634-e18dd700-d519-11eb-9152-69b2e822a3fc.PNG" alt="1-1-4_3b" style="width:750px;"/><br><br />

Save again, and press "Play". If everything has gone according to plan, you should see your new unit! You should be able to select and issue commands to your unit.

![17 gif](https://user-images.githubusercontent.com/56179276/66525431-4d13e480-eaaa-11e9-8775-d829e6f4c6ee.gif)

***
Tutorial Map: https://platform.wildsky.dev/arcade/game/627

[Next Up: Tutorial 1–2: Creating A Weapon](Tutorial-1%E2%80%932)

