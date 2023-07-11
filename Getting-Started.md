### Getting Started

First [install VS Code](https://code.visualstudio.com) if you don't already have it. Doing this before you install our editor will ensure the editor installs our VS Code plugin correctly, which will help you write Lua by providing annotations for all our APIs. 

Once you've [downloaded the editor](https://github.com/dctopspin/Wild-Modding/releases), the first step is to open it up. From here you'll be faced with a login window. Click the "Login with Google" and it'll open up a browser that asks for your Google login.

If you have any issues installing or logging in, contact editor-support@funovus.com
![1 Login](https://user-images.githubusercontent.com/56179276/66509156-52136c80-ea87-11e9-997a-2137d8c0779a.png)

After you log in, you'll be prompted to either create a new map or open an existing one. If you've [downloaded the demo projects](Demo-Projects) (highly recommended) you can browse through them. You can safely ignore the "Include Wild Sky default game data" checkbox (it's used for our internal devs).

![2 Prompt](https://user-images.githubusercontent.com/56179276/66509183-5dff2e80-ea87-11e9-98c8-2887c008ce0c.png)

For this guide we're going to start by downloading [Wild Zombie Survival Demo Project](https://platform.wildsky.dev/arcade/game/261). Note that you can download the project with the "Source" button. 

Open up the `Wild Zombies\Maps\EntryMap` map in the editor and you should see a handful of units placed in the Terrain Window:

![image](https://user-images.githubusercontent.com/56179268/212168941-1208f2f7-63ed-4b88-99c0-b50a1138db61.png)

If you hit the "Play" button at the left of the screen, the game will start in a new window:

![image](https://user-images.githubusercontent.com/56179268/212169027-3def28b4-5558-4633-9012-af2f0c57de0e.png)



### Cool, What's Next?

To get started making your own games (or modding the existing ones) you'll need to become familiar with the editor's main components:
* **Terrain Window**: Used to create the physical terrain of the map and placing units, props, etc.  (What we've been using so far.)
* **Data Window**: Used to create units, abilities, and all the good stuff
* **Triggers**: Written as lua script that controls the game logic, such as spawning units, victory/defeat conditions/etc.

You can get started with our first tutorial series: [Tutorial 1–1: Creating A Unit](Tutorial-1%E2%80%931)