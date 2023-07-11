### Example Setup

If you don't like reading or want a working example while you follow the tutorial, you can use this: [Workplace.zip](https://github.com/dctopspin/Wild-Modding/files/4251917/Workplace.zip)


# Setting up your workplace

To use mods, you have to first create a file named exactly ".dreameditor" (important: **No** other extensions like .dreameditor.txt) in the folder you want to save your maps and mods to. The content of this file is not important, only the name matters.

The folder with the .dreameditor file in it is now your workplace. If you open a map inside your workplace, the .dreameditor file marks the root from which all maps and mods will be addressed **relatively**. 

Now create 2 new folders in your workplace and call them "Maps" and "Mods".

![Workplace finished](https://user-images.githubusercontent.com/16945537/75282362-3b409d00-5811-11ea-9803-fa37c411fcf6.png)

Now you are ready to go!

# Creating a mod

Creating a mod is pretty simple. Create a new folder inside the "Mods" folder you just added, name it whatever you want your mod to be named. This tutorial will go with "My Mod".

![My Mod](https://user-images.githubusercontent.com/16945537/75282461-675c1e00-5811-11ea-9667-fbed31d47653.png)

Open up the DreamEditor and create a new map using the folder we just made. Go to the Data Window and then to the **settings** tab. Go to **Type:** at the top and change it to **DATA_MODULE**. Save the mod.

![Data_Module](https://user-images.githubusercontent.com/16945537/75258590-fef84700-57e6-11ea-8975-b194a72603fb.png)

That's it, you have now created a mod in the DreamEditor! To properly test it out, you might want to create a unit:

In the Data Window, go to the unit tab and hit the **New** button at the top. Set the template to **Standard Melee Unit** and the name to "Test Unit" or similar. Hit **Add**

![Test Unit](https://user-images.githubusercontent.com/16945537/75251796-9fe10500-57db-11ea-814b-2517d1d6df50.png)

Selecting the new unit, scroll to the very bottom to **Presentation** and set **Model Type** to **GpuAnimation** and **Model Name** to **goblin_assassin**. Save the mod.

![Test Unit Presentation](https://user-images.githubusercontent.com/16945537/75252214-7b395d00-57dc-11ea-9135-9164e22fbba3.png)

# Using your mod in a map

To test out the new mod you created, you have to either create a map inside your new workplace (preferably in the "Maps" folder you made) or move an existing map inside the workplace.

Open this map in the dreameditor. Inside the Data Window, go to the **settings** tab and under **Map settings** at the top, click on the **+** button next to **Dependencies**. In the new field that just popped up, you now have to input your new mod's location, **relative from the .dreameditor file you created earlier**. With the mod's name being "My Mod" in this tutorial, you would have to input "Mods/My Mod". If you have chosen another name or path, you would have to input that accordingly. Save the map.

![Map Dependencies](https://user-images.githubusercontent.com/16945537/75259240-fc4a2180-57e7-11ea-99c9-01d40a50ec69.jpg)

To see the mod having an effect on the map, we have to reopen the map. **It is important that you dont exit the dreameditor now**, but instead click on the **Open Map** button on the left side. The file explorer should be in the correct place, so you should be able to just hit **Select Folder** to reopen the map.

Now one of 2 things can happen. Either (seemingly) nothing happens, or you get the following error message:

![Error](https://user-images.githubusercontent.com/16945537/75282811-f5d09f80-5811-11ea-9758-ed43fdb194dc.jpg)

This is the reason why you shouldn't close the editor, because otherwise you wouldn't be able to open your map without file-editing. The reason for this error message is that you have put the wrong path to your mod into the **Dependencies** field of your map. Fortunately, your map is still open. Therefore you can now fix your mistake and input the right path to your mod. Keep in mind that it **has to be relative from the .dreameditor file** and the path should include the exact name of your mod's folder.

When your map has opened without error now, you can go to the Unit tab again. If the unit you created is listed there being greyed out then congratulations, you have successfully added your mod to a map! You can also place the unit in the Terrain Window, to enjoy those weird little goblins playing as ninjas.

![Testmap Goblins](https://user-images.githubusercontent.com/16945537/75256691-23065900-57e4-11ea-9e57-008f4d39006b.jpg)


# I have closed my map and now get an error opening it, help

Don't panic, your map is not broken beyond repair. First of all slap yourself from me, as this is exactly what I have warned you of. Then in a file explorer of your choice open your map's folder and search for the **Settings.json** file. Open this file in your favorite text editor.

![Wrong Dependency](https://user-images.githubusercontent.com/16945537/75255593-7677a780-57e2-11ea-8f8c-dadad30fa076.png)

Now at the top under "Dependencies" you will see all the mods you have loaded into your map. "Arcade/Core" should stay. Whatever you input shouldn't. Either fix your path in here or delete it (and dont forget to delete the comma preceding your entry). I have chosen to delete it completely as seen in the next screenshot, but if you are feeling brave you can change it to the right path in here, too.

![Deleted Dependency](https://user-images.githubusercontent.com/16945537/75255843-dec68900-57e2-11ea-9f35-dedce3237925.png)

Once you have saved this file, try to open the map again. If it  does work now, you can proceed to add the right path to your mod, as described in the **Using your mod in a map** chapter. 

If it does not open, either go back to the **Settings.json** file and try to find a mistake or go to the discord server and ask for help there. Dont hesitate to do the latter, as there are more than enough people in the server willing to help you out.