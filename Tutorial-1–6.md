In Tutorial 1–4, the basics are shown for writing your own triggers in Lua. This tutorial will demonstrate how the Graphical User Interface (GUI) of the editor can be used to create triggers instead. While this method of creating triggers means you will have a little less control over your triggers, it does make them a lot easier and quicker to create.

## Trigger Terminology: Events, Conditions, Actions and Variables
Before creating any triggers, let's take a moment to discuss the basic concept of how they work. All triggers function with the trinity of 'Events', 'Conditions' and 'Actions', which will be briefly explained here.

**Events:** the start of any trigger is its event. The event specifies _when_ the trigger should run. An event could be "_when a unit dies_", or "_when an ability is cast_", or even something as simple as "_when the map has been running for 1 second_" if you want a trigger that helps you set up the map before gameplay starts. A trigger will typically always have an event.

**Conditions:** these allow you to be a little more specific in when a trigger should run. Say you want to set up a trigger that causes the player to lose the game if their hero unit dies. By simply using the event "_When a unit dies_", the trigger will cause players to lose the game if **any** unit dies - including even enemy units! As such, you would set up a condition that says "_and the dying unit is the players' hero_" to make sure your trigger only runs when the right _conditions_ are met. Though most triggers will have conditions, they are not required.

**Actions:** the end of a trigger is typically the action specified. Usually, this is the main reason for the trigger to exist. You have specified exactly _when_ a thing will happen, but what is it that actually happens? Examples of actions are "_the player loses the game_", "_spawn a unit_", "_play a cinematic dialogue_", and "_set the camera to zoom in on a unit_". A trigger will always have at least one action in order to be of any use.

Finally, some triggers may use **variables**. These are not required to make a trigger work, but will sometimes allow you to do certain things that were otherwise impossible. They will be explained later in this tutorial.

## Basics Trigger Set-up
First, open up a new map to work in. You can use the map from previous tutorials, in which you have created a 'Hero IceMage' unit, for this purpose as well. When you have done so, you can find the trigger interface in the data window of the editor. Once there, click on the 'Tabs' drop-down menu near the top, and select 'triggers'. You will now be looking at the trigger window, though it will still be completely empty as we have not yet added any triggers to our new map!

(Insert Screenshot1)

If you double click 'Triggers' in the editor, you will get a prompt that allows you to create a new trigger. For the purposes of this tutorial, you can give it any name you want. Once you have done so, you will see your trigger in the list, and on the main panel to the right you will the options "_Select One Event_", "_Local Variables_", "_Conditions_" and "_Actions_". You have now made your first trigger, and are ready to make it functional.

## Making A Trigger
For the purpose of this tutorial, let's try and make a trigger that ensures that our player loses the game if their hero unit dies.

First, double click the "_Select One Event_" option. We want this trigger to run _when_ a hero unit dies, so select the "_Unit - Unit Dead_" option from the list, and click OK to confirm.

(Insert Screenshot2)

Second, let's get the Action out of the way, as it's equally simple. We want to make sure that the player loses the game when the trigger runs, so double click "_Actions_", select "_Function_", scroll down to find "_Game - Set Defeat_", and click 'ADD'. Your trigger should now look like this.

(Insert Screenshot3)

Note that the way the trigger is set up right now, it will simply cause the player to lose the map the moment any unit dies. As such, we're going to need a condition. Similar to the example listed in the terminology section, we want to make sure this trigger only runs if it's specifically _the player's hero_ that dies. 

Double click 'Conditions' to start setting a condition. What we want to do in this case is compare the unit that died to 'the player's hero unit', and make sure the trigger proceeds if they are the same, or stops running if not.

Click "_LogicalExpression_" and select "_==_" - then click OK. You have now set up a logical 'compare' expression. Now double click the first "_ANY: <NONE>_", and under "_Variable_" find "_triggering_unit_". Select it and hit OK. Then, double click the second instance of "_ANY: <NONE>_". Select "_Value_", set it to "_STRING_", and type in 'Hero IceMage' in the text box. Your trigger should now look like this.

(Insert Screenshot4)

And with that, you have completed your first trigger. Going from top to bottom, what it does is the following:
1. Whenever a unit dies
2. If the triggering unit (i.e. the unit that died and started the trigger) is 'Hero Icemage'...
3. The player loses the game

Do note that, depending on the complexity of the map you are creating, you would need to edit a trigger like this. For example, if both the player and the AI control a 'Hero Icemage' unit, this trigger will cause the player to lose even if the AI's hero dies. As such, any trigger made for your game has to make sense within the context of your game, and the challenge is figuring out how to set your triggers up in such a way that they only trigger when they should.

To do: bit on variables and a more complex trigger that uses them