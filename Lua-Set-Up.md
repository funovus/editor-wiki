# **Writing Lua for Dream Editor Projects**
Our game engine uses [Lua](https://en.wikipedia.org/wiki/Lua_(programming_language)) to build game logic. Lua is a widely-used lightweight scripting system focused on speed and ease-of-use. Lua is widely documented and googling "How do I do X in Lua" usually returns useful results.

## Install VS Code

To write lua scripts you should first install [Visual Studio Code](https://code.visualstudio.com/), an excellent, free, cross-platform code editor. When installing VS Code, be sure to check the "Add 'Open with Code' to Windows Explorer" option, as it will make your life easier in the future. 

You may have a preferred code editor; but we only support our DreamEditor extension for VS Code.

## Recommended Plugins
![1 code extension](https://user-images.githubusercontent.com/56179276/66619854-43b27700-eb93-11e9-843e-a75b799d57dd.png)

Once you've installed VS Code, there are several plugins we recommend. Click on the "Extensions" icon and use the search bar to find the following plugins, and click install:
* **Lua** by **sumneko** 
  <img src="https://user-images.githubusercontent.com/56179268/203633913-69cdd76e-545a-44d5-8a1e-ca6b02ee798f.png"  style="width:400px;"/>
* **StyLua** by **JohnnyMorganz** [(See our Setup Guide](Automatic-Lua-Formatting) for proper setup)
  <img src="https://user-images.githubusercontent.com/56179268/203634072-1ba51ce0-a36d-4b9c-a073-62042385bfd7.png"  style="width:400px;"/>
* Code Spell Checker (or similar alternative)
<img src="https://user-images.githubusercontent.com/56179268/203633754-cb41000c-a3b0-472c-9bf4-d794c9409414.png"  style="width:400px;"/>


Next we're going to modify VS Code's file associations so it recognizes our trigger files as Lua script. You can likely skip this step if you have the DreamEditor extension added to VS Code as it should setup the file extensions automatically. The DreamEditor extension is automatically installed and updated whenever you install a new version of the editor. You can check if you already have installed in the "Extensions" icon in VS Code.

<img src="https://user-images.githubusercontent.com/56179276/162342352-c0b98fa1-b0f3-4435-9f07-ae1d4f8e9d37.png"  style="width:400px;"/>



To manually set up your file associations, go to "File > Preferences > Settings". Then on the left go to "Text Editor > Files". Finally, under "Associations" click "Add Item". On the Item box write "*.lua.txt", and on Value write "lua", without quotation marks.

It should now look like this:

<img src="https://user-images.githubusercontent.com/56179276/162342103-592e543b-a3cf-41d3-81d3-ea048b3c6423.png"  style="width:600px;"/>

# [**Follow the style guide!**](https://funovus.notion.site/Lua-Scripting-8f54f72df8044482a37463180a15fc79)

Be sure to read and follow our [Lua Style Guide](https://funovus.notion.site/Lua-Scripting-8f54f72df8044482a37463180a15fc79)
