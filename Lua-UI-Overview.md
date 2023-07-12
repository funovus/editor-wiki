## Custom UI Overview
This page will cover the basics of creating custom UI. This page assumes a basic understanding of lua and contemporary UI frameworks. This tutorial focuses on the basics of UI and uses Lua to create UI for simplicity. 

### Best practice
[The best practice for creating custom UI is to use XML and the GMUI library.](Using-XML-For-UI)

Using lua as below is generally only if you're struggling to quickly pick up xml/GMUI. For information on how to create custom UI with XML, refer to [this guide.](Using-XML-For-UI)

### References
* Download the example map [here](https://github.com/crunchystudio/editor-wiki/files/6601706/Example_CustomUI.zip).
* [Custom UI Trigger APIs](Trigger-API-Reference#custom-ui).

## Basics
You can create new UI elements with the `CreateFrame()` function. If you look at the API, you'll see that all new frames require a parent frame (the new frame is created inside the parent frame). On a blank map, the only existing frame is the UI Root, which can be referenced with `GetUiRootFrame()`. The following script is how to create a basic frame:

```lua
local root = DCEI.GetUiRootFrame()

local square = DCEI.CreateFrame(root)
DCEI.SetFrameImage(square, DCEI.Texture("btn_grey"))
DCEI.SetFrameMinSize(square, 120, 120)
```

This creates a blank square in the middle of the screen. Exquisite.

![square](https://user-images.githubusercontent.com/56179276/69770681-d8bb0080-113e-11ea-8807-daab3aaa5cbf.png)

By default, new frames are centered inside their parent frame (in this case the UI root) and have no dimensions unless set by `SetFrameMinSize()` or by having child frames with dimensions. Parent frames will attempt to expand to fit all children frames.

You can find a list of available textures that can used in `SetFrameImage()` in the **Asset Previewer** (Window > Asset Preview Window) under "Sprites.

We can add the following script to create two text labels in either corner of our square:

```lua
local label_one = DCEI.CreateTextFrame(square)
DCEI.SetFrameTopAlignmentInParent(label_one)
DCEI.SetFrameLeftAlignmentInParent(label_one)
DCEI.SetTextFrameText(label_one, "1")

local label_two = DCEI.CreateTextFrame(square)
DCEI.SetFrameBottomAlignmentInParent(label_two)
DCEI.SetFrameRightAlignmentInParent(label_two)
DCEI.SetTextFrameText(label_two, "2")
```

Our new text frames are pressed directly against the edges of our square, which doesn't look quite right. Let's fix this.

![square with labels](https://user-images.githubusercontent.com/56179276/69770959-d60cdb00-113f-11ea-89d9-feb89788b9c1.png)

One approach is to add offsets to our text frames. Note that positive values move frames right/up and negative values move frames left/down.

```lua
local label_one = DCEI.CreateTextFrame(square)
DCEI.SetFrameTopAlignmentInParent(label_one)
DCEI.SetFrameLeftAlignmentInParent(label_one)
DCEI.SetFrameHorizontalOffsetInParent(label_one, 10)
DCEI.SetFrameVerticalOffsetInParent(label_one, -10)
DCEI.SetTextFrameText(label_one, "1")

local label_two = DCEI.CreateTextFrame(square)
DCEI.SetFrameBottomAlignmentInParent(label_two)
DCEI.SetFrameRightAlignmentInParent(label_two)
DCEI.SetFrameHorizontalOffsetInParent(label_two, -10)
DCEI.SetFrameVerticalOffsetInParent(label_two, 10)
DCEI.SetTextFrameText(label_two, "2")
```

Another approach is to simply apply some padding to our square.

```lua
DCEI.SetFramePadding(square, 10)
```
Either method creates space between the edge of the frame and our text labels (note that using both will create *double* spacing).

![square with spacing](https://user-images.githubusercontent.com/56179276/69771273-1c166e80-1141-11ea-9e42-bff4ae848228.png)

Lastly you can destroy a UI frame with `DestroyFrame()`. Destroying a frame will destroy all of its children frames. Variables that hold references to UI frames are not set to `nil` when the referenced frame is destroyed, so you will want to manage this yourself if needed.

## Frame Types
* `CreateFrame()` is the basic frame type and is commonly used for containers and images.

* `CreateVStackFrame()` creates a vertical stack that evenly spaces children frames vertically. 
  * `SetFrameSpacing()` to set the spacing between stack elements.

* `CreateHStackFrame()` creates a horizontal stack that evenly spaces children frames horizontally. 
  * Use `SetFrameSpacing()` to set the spacing between stack elements.

* `CreateButtonFrame()` creates a clickable button. 
  * Use `SetOnClickCallback()` to add a callback function to execute when the button is pressed. 
  * Use `SetButtonFrameEnable()` to enable/disable buttons.

* `CreateTextFrame()` creates a text label. 
  * Use `SetTextFrameText()` to set the content of the text label.

## Discussion

Visualizing how the badge_container vstack (black) expands to hold badge_row hstacks (blue) by adding background images to the respective frames. Note that the stacks only expand left-to-right and top-to-bottom due to how their alignment has been set.

![stacks](https://user-images.githubusercontent.com/56179276/69772440-cf349700-1144-11ea-8067-f24bfeac9f68.gif)