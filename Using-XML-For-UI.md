## Creating Custom UI

There are two approaches to creating custom UI in the editor. The most powerful and fastest method involves writing XML. A primary benefit here is you can see your changes in real-time using the UI previewer without having to play test the game.

However, for simple immediate applications, some users find it easier to learn UI by creating it through [Lua API calls](Lua-UI-Overview).
## Using XML for Custom UI
Custom UI can be constructed with XML via the `UI Editor` window (Windows > UI Editor).

![image](https://user-images.githubusercontent.com/56179268/210110580-0831ae56-081c-407d-8095-13c21bfb3ee6.png)

Custom UI can be previewed via the UI Preview Window:

![image](https://user-images.githubusercontent.com/34138206/147990965-ada21d6a-c153-45f5-9ca1-ca9b4018d163.png)

This will allow you to preview whatever UI XML you have selected in the Data Window (Ctrl+Shift+D) on the UI tab. 

To use the GMUI mod to manage custom UI, please refer to [this guide](Mods-GMUI-Overview).
## Basics
 On a blank map, the only existing frame is the UI Root, which can be referenced with `GetUiRootFrame()`. 

By default, new frames are centered inside their parent frame (in this case the UI root) and have no dimensions unless you explicitly set width/height properties or by having child frames with dimensions. Parent frames will attempt to expand to fit all children frames. 

You can find a list of available textures that can used in `SetFrameImage()` in the **Asset Previewer** (Window > Asset Preview Window) under "Sprites.

## [Frame Types](Ui-XML)
For a full list, see [UI XML](Ui-XML). Here are some basics you'll need to frequently use:

Basic
* [Text](Ui-XML-Text)
* [Frame](Ui-XML-Frame) 
* [Button](Ui-XML-Button)
  
Organizational

* [VStack](Ui-XML-VStack) / [HStack](Ui-XML-HStack) 
* [VScroll](Ui-XML-VScroll) / [HScroll](Ui-XML-HScroll) 

Utility
* [include](Ui-XML-include) 
* [Constant](Ui-XML-Constant) 
* [State](Ui-XML-State) 

## [Frame Attributes](Ui-XML-CommonAttributes)
For a full list, see [Common Attributes](Ui-XML-CommonAttributes). Here are some basics you'll need to frequently use:


  + [width](Ui-XML-CommonAttributes#width) / [height](Ui-XML-CommonAttributes#height)
  + [minWidth](Ui-XML-CommonAttributes#minwidth) / [maxWidth](Ui-XML-CommonAttributes#maxwidth)
  + [minHeight](Ui-XML-CommonAttributes#minheight) / [maxHeight](Ui-XML-CommonAttributes#maxheight)
  + [backgroundImage](Ui-XML-CommonAttributes#backgroundimage)
  + [padding](Ui-XML-CommonAttributes#padding) (Can also be set on left/right/top/bottom individually)
  + AlignmentInParent: [left](Ui-XML-CommonAttributes#leftalignmentinparent) / [right](Ui-XML-CommonAttributes#rightalignmentinparent) / [top](Ui-XML-CommonAttributes#topalignmentinparent) /  [bottom](Ui-XML-CommonAttributes#bottomalignmentinparent) / [center](Ui-XML-CommonAttributes#centeralignmentinparent)
  + [horizontalOffsetInParent](Ui-XML-CommonAttributes#horizontaloffsetinparent) / [verticalOffsetInParent](Ui-XML-CommonAttributes#verticaloffsetinparent)
  + [matchParentWidth](Ui-XML-CommonAttributes#matchparentwidth) / [matchParentHeight](Ui-XML-CommonAttributes#matchparentheight)
  + [spacing](Ui-XML-CommonAttributes#spacing)
  + Alignment: [left](Ui-XML-CommonAttributes#leftalignment) / [right](Ui-XML-CommonAttributes#rightalignment) / [top](Ui-XML-CommonAttributes#topalignment) / [bottom](Ui-XML-CommonAttributes#bottomalignment) / [center](Ui-XML-CommonAttributes#centeralignment)
  + [preview](Ui-XML-CommonAttributes#preview)
  + [controller](Ui-XML-CommonAttributes#controller)


## **Example "TestCard"**
```xml
<HStack>
    <Frame backgroundImage="banner03_gray" padding="40">
        <Text id="text" text="left" color="r: 1, g: 0.5, b: 1"/>
    </Frame>
    <Button id="button" backgroundImage="arrow01_r" width="72" height="94"/>
</HStack>
```
![image](https://user-images.githubusercontent.com/56179268/204570489-98668262-987c-4208-8baf-4d974a107411.png)

## [Combining XML with the GMUI Library](Mods-GMUI-Overview)
It's strongly recommended to use the [GMUI Library](Mods-GMUI-Overview) for creating and managing UIs written in XML. You can take a look at the [GMUI Library page](Mods-GMUI-Overview) for examples and best practices for a number of UI features.

However, these XML frames could be created and referenced in script directly using the lua APIs:
* [DCEI.CreateFrameFromXml](Trigger-API-Reference-DCEI-Functions-Custom-UI#createframefromxml-2)
* [DCEI.GetChildrenFramesIdAndFrameType](Trigger-API-Reference-DCEI-Functions-Custom-UI#getchildrenframesidandframetype-1)
* [DCEI.GetXmlFrames](Trigger-API-Reference-DCEI-Functions-Custom-UI#getxmlframes-0)
* [DCEI.GetChildFrameById](Trigger-API-Reference-DCEI-Functions-Custom-UI#getchildframebyid-2)

# Other XML/UI Resources

### [Useful UI Features](Ui-UsefulFeatures)