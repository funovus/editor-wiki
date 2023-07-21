<div id="toc" markdown="1">

- [Flex Layouts](#flex-layouts)
  - [Example Map](#example-map)
  - ["Flex" \<\> "Legacy" Compatibility](#flex--legacy-compatibility)
  - [Other Limitations](#other-limitations)
  - [Relevant XML Attributes](#relevant-xml-attributes)
    - [layout](#layout)
    - [flexGrow](#flexgrow)
    - [flexShrink](#flexshrink)
    - [flexDirection](#flexdirection)
      - [`row` (default)](#row-default)
      - [`row-reverse`](#row-reverse)
      - [`column`](#column)
      - [`column-reverse`](#column-reverse)
    - [flexWrap](#flexwrap)
      - [`no-wrap` (default)](#no-wrap-default)
      - [`wrap`](#wrap)
      - [`wrap-reverse`](#wrap-reverse)
    - [justifyContent](#justifycontent)
      - [`center` (default)](#center-default)
      - [`flex-start`](#flex-start)
      - [`flex-end`](#flex-end)
      - [`space-around`](#space-around)
      - [`space-between`](#space-between)
    - [alignItems](#alignitems)
      - [`center` (default)](#center-default-1)
      - [`flex-start`](#flex-start-1)
      - [`flex-end`](#flex-end-1)
      - [`baseline`](#baseline)
      - [`stretch`](#stretch)
    - [alignContent](#aligncontent)
      - [`flex-start`](#flex-start-2)
      - [`flex-end`](#flex-end-2)
      - [`center`](#center)
      - [`stretch`](#stretch-1)
      - [`space-between`](#space-between-1)
      - [`space-around`](#space-around-1)
    - [alignSelf](#alignself)
    - [Margins](#margins)
      - [`marginLeft`](#marginleft)
      - [`marginRight`](#marginright)
      - [`marginTop`](#margintop)
      - [`marginBottom`](#marginbottom)
    - [widthPercent](#widthpercent)
    - [heightPercent](#heightpercent)
    - [position](#position)
      - [`left`](#left)
      - [`right`](#right)
      - [`top`](#top)
      - [`bottom`](#bottom)
    - [aspectRatio](#aspectratio)
  
</div>



***
# Flex Layouts
By setting `layout="flex"` you can switch a UI subtree to use a different UI layout engine backed by [yogalayout](https://yogalayout.com) (which implements the [CSS flexbox layout model](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)).

The yogalayout website has [playground](https://yogalayout.com/playground) where can freely experiment as well as [visual documentation](https://yogalayout.com/docs) that will allow you to experiment and quickly grasp how it works. This [flexbox guide](css-tricks.com/snippets/css/a-guide-to-flexbox/) us also useful to cross-reference for some more confusing fields. 

The main advantage of `layout="flex"` over the default (`layout="legacy"`) is the ability to make responsive UI that works for a variety of different screen sizes and aspect ratios. It also helps for making items take up a percentage of their parents size rather than using "matchParentWidth/Height" or a static size. 

Finally, it can be useful any time you struggling to accomplish what you want with HStack, VStack, Scrolls, [Virtual Lists](Ui-XML-List), or Grids.

Some features:
 1. widthPercent/heightPercent to define width/height value as a percentage of the parent frame
 2. position=absolute and left/right/top/bottom attributes to position frames relative to the parent frame 
 3. flexGrow/Shrink to define how a UI frame resizes according to screen resolution changes. 

When using Flex layouts; it can help to realize that a frame type labeled `flex` will automatically arrange children similar to a Stack. You will have to change the flex-related attributes of the parent and children frames if this isn't the behavior you desire. 

## Example Map

This demo map demonstrates each attribute separately. Open the UI Editor (Window > UI Editor) and the UI previewer (Window > UI Previewer) and click on each frame to preview it's behavior.  Resizing the UI Previewer window may make the behavior more obvious in some cases.


https://platform.wildsky.dev/arcade/game/613
*(Click "Source" to download)*


---
##  "Flex" <> "Legacy" Compatibility

Flex and Legacy layouts can only be combined in specific ways.

**Rule 1:** A `legacy` frame can contain either `flex` or `legacy` children
```xml
<Frame layout="legacy">
    <Frame layout="legacy" matchParentHeight="true" matchParentWidth="true" backgroundImageColor="r: 1, g: 0.400, b: 0, a: 1" />
    <Frame layout="flex" widthPercent="25" heightPercent="25" backgroundImageColor="r: 0, g: 0.400, b: 1, a: 1" />
</Frame>
```


**Rule 2:** The reverse is not true. `flex` frames can only contain `flex` children. `legacy` frames will be treated as `flex` automatically and regardless if the user attempts to specify otherwise
```xml
<Frame layout="flex">
    <Frame layout="flex" widthPercent="25" heightPercent="25" backgroundImageColor="r: 0, g: 0.400, b: 1, a: 1" />
    <-- The following `legacy` frame is actually treated as a `flex`, thus using flex properties like `widthPercent` -->
    <Frame layout="legacy" widthPercent="100" heightPercent="100" backgroundImageColor="r: 1, g: 0.400, b: 0, a: 1" />
</Frame>
```

## Other Limitations

Currently there aren’t trigger APIs for many flex properties, including animating flex properties. This also means some GMUI helper functions for animating frames won’t work on flex layouts.

## Relevant XML Attributes
### layout

Set `"layout="flex"` to enable flex layouts on a Frame.

---


### flexGrow
**Value type: `number`**
**Values**: >= 0

`flexGrow` describes how any space within a container should be distributed among its children along the main axis. After laying out its children, a container will distribute any remaining space according to the `flexGrow` values specified by its children.

If all items have `flexGrow` set to 1, the remaining space in the container will be distributed equally to all children. If one of the children has a value of 2, that child would take up twice as much of the space either one of the others (or it will try, at least).

![image](https://user-images.githubusercontent.com/56179268/201425671-6a3899fe-b984-43ef-9b82-39bb2320a495.png)


**For more info, see:** 
* [flex (yogalayout)](https://yogalayout.com/docs/flex) 
* [flex-grow (Flexbox)](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flex-grow)


<table><details>
<summary>EXAMPLES (Click to expand)</summary>
<div markdown="1">

```xml
<Frame layout="flex" justifyContent="space-around" alignItems="stretch" alignContent="stretch">
    <Frame layout="flex" flexDirection="row" marginBottom="25" heightPercent="50">
        <include name="DemoAttributes/BasicBlockA" widthPercent="25" flexGrow="0"/>
        <include name="DemoAttributes/BasicBlockB" widthPercent="25" flexGrow="0"/>
        <include name="DemoAttributes/BasicBlockC" widthPercent="25" flexGrow="0"/>
    </Frame>
    <Frame layout="flex" flexDirection="row" heightPercent="50">
        <include name="DemoAttributes/BasicBlockA" widthPercent="25" flexGrow="0.5" />
        <include name="DemoAttributes/BasicBlockB" widthPercent="25" flexGrow="2" />
        <include name="DemoAttributes/BasicBlockC" widthPercent="25" flexGrow="0.5" />
    </Frame>
</Frame>
```
<img src="https://user-images.githubusercontent.com/56179268/201426265-cbe9bd00-0565-4506-9eae-5774546ff2ad.png" width="500"/>

</div>
</details></table>

---

### flexShrink
**Value type: `number`**
**Values**: Real numbers >= 0

`flexShrink` is very similar to `flexGrow` and can be thought of in the same way if any overflowing size is considered to be negative remaining space. These two properties also work well together by allowing children to grow and shrink as needed.

**For more info, see:** 
* [flex (yogalayout)](https://yogalayout.com/docs/flex) 
* [flex-shrink (Flexbox)](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flex-shrink)

<table><details>
<summary>EXAMPLES (Click to expand)</summary>
<div markdown="1">

```xml
<Frame layout="flex" justifyContent="space-around" alignItems="stretch" alignContent="stretch">
    <Frame layout="flex" flexDirection="row" marginBottom="25" heightPercent="50">
        <include name="DemoAttributes/BasicBlockA" widthPercent="40" flexShrink="0" />
        <include name="DemoAttributes/BasicBlockB" widthPercent="40" flexShrink="0" />
        <include name="DemoAttributes/BasicBlockC" widthPercent="40" flexShrink="0" />
    </Frame>
    <Frame layout="flex" flexDirection="row" heightPercent="50">
        <include name="DemoAttributes/BasicBlockA" widthPercent="100" flexShrink="1" />
        <include name="DemoAttributes/BasicBlockB" widthPercent="100" flexShrink="1" />
        <include name="DemoAttributes/BasicBlockC" widthPercent="100" flexShrink="1" />
    </Frame>
</Frame>

```
<img src="https://user-images.githubusercontent.com/56179268/201428908-ac7f9688-3a4d-410e-8f3d-27ef3ecfb9fe.png" width="500"/>

</div>
</details></table>

---

### flexDirection
**Value type: `flexDirection`**
**Values**: `row, row-reverse, column, column-reverse`

Flex direction controls the direction in which children of a node are laid out. Row is the default.
![image](https://user-images.githubusercontent.com/56179268/201359497-60605ea0-a1df-4655-a16c-9e9b00fe3b26.png)


**For more info, see:**
* [flex-direction (yogalayout)](https://yogalayout.com/docs/flex-direction) 
* [flex-direction (Flexbox)](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flex-direction)


<table><details>
<summary>EXAMPLES (Click to expand)</summary>

<div markdown="1">

####  `row` (default)

Align children from left to right. If wrapping is enabled then the next line will start under the first item on the left of the container.

```xml
<Frame layout="flex" flexDirection="row">
    <include name="DemoAttributes/BasicBlockA" />
    <include name="DemoAttributes/BasicBlockB" />
    <include name="DemoAttributes/BasicBlockC" />
</Frame>
```

<img src="https://user-images.githubusercontent.com/56179268/201363891-cc258ede-a1e4-433d-947b-f186e2ca39c8.png" width="300"/>

---

####  `row-reverse` 

Align children from right to left. If wrapping is enabled then the next line will start under the first item on the right of the container.

```xml
<Frame layout="flex" flexDirection="row-reverse">
    <include name="DemoAttributes/BasicBlockA" />
    <include name="DemoAttributes/BasicBlockB" />
    <include name="DemoAttributes/BasicBlockC" />
</Frame>
```
<img src="https://user-images.githubusercontent.com/56179268/201371889-e6d4bd1c-27c8-4500-aa49-7fbe0aa4dde1.png"  width="300"/>

---

#### `column` 

Align children from top to bottom. If wrapping is enabled then the next line will start to the left first item on the top of the container.

```xml
<Frame layout="flex" flexDirection="column">
    <include name="DemoAttributes/BasicBlockA" />
    <include name="DemoAttributes/BasicBlockB" />
    <include name="DemoAttributes/BasicBlockC" />
</Frame>
```

<img src="https://user-images.githubusercontent.com/56179268/201372765-a2711ebe-ae84-464b-accb-39008b1722c8.png" width="300"/>

---

####  `column-reverse` 

Align children from bottom to top. If wrapping is enabled then the next line will start to the left first item on the bottom of the container.

```xml
<Frame layout="flex" flexDirection="column-reverse">
    <include name="DemoAttributes/BasicBlockA" />
    <include name="DemoAttributes/BasicBlockB" />
    <include name="DemoAttributes/BasicBlockC" />
</Frame>
```

<img src="https://user-images.githubusercontent.com/56179268/201373053-93761b32-f045-4589-9073-6af7f1c40f35.png" width="300"/>

</div>
</details></table>


---
### flexWrap
**Value type: `flexWrap`**
**Values**: `no-wrap`, `wrap`, `wrap-reverse`

By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.
<img src="https://user-images.githubusercontent.com/56179268/201434854-7e4e83af-354e-497e-92bf-e48982b5f092.png"/>


**For more info, see:**
* [flex-wrap (yogalayout)](https://yogalayout.com/docs/flex-wrap) 
* [flex-wrap (Flexbox)](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flex-wrap)


<table><details>
<summary>EXAMPLES (Click to expand)</summary>

<div markdown="1">

#### `no-wrap` (default) 

```xml
<Frame layout="flex" flexWrap="wrap" heightPercent="50" alignContent="no-wrap" frameImageColor="r: 0.3, g: 0.3, b: 0.3, a: 1">
    <include name="BasicBlockA" width="400" />
    <include name="BasicBlockB" width="400" />
    <include name="BasicBlockC" width="400" />
    <include name="BasicBlockD" width="400" />
</Frame>
```

<img src="https://github.com/funovus/editor-wiki/assets/60531792/7bdc8f91-23b8-4af1-9ec8-fee3dbcb1ed2" width="300"/>

---

#### `wrap`

```xml
<Frame layout="flex" flexWrap="wrap" heightPercent="50" alignContent="flex-start" frameImageColor="r: 0.3, g: 0.3, b: 0.3, a: 1">
    <include name="BasicBlockA" width="400" />
    <include name="BasicBlockB" width="400" />
    <include name="BasicBlockC" width="400" />
    <include name="BasicBlockD" width="400" />
</Frame>
```

<img src="https://github.com/funovus/editor-wiki/assets/60531792/b9edc682-9413-4fcb-8faf-e27113e6c934" width="300"/>

---

#### `wrap-reverse` 

```xml
<Frame layout="flex" flexWrap="wrap" heightPercent="50" alignContent="wrap-reverse" frameImageColor="r: 0.3, g: 0.3, b: 0.3, a: 1">
    <include name="BasicBlockA" width="400" />
    <include name="BasicBlockB" width="400" />
    <include name="BasicBlockC" width="400" />
    <include name="BasicBlockD" width="400" />
</Frame>
```

<img src="https://github.com/funovus/editor-wiki/assets/60531792/bd2bbfa8-2735-44e2-b7e0-c11db7744b5e" width="300"/>

</div>
</details></table>

---

### justifyContent
**Value type: `flexJustify`**
**Values**: `center`, `flex-start`, `flex-end`, `space-around`, `space-between` 

This defines the alignment along the main axis. It helps distribute extra free space leftover when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line. Center is the default.

<img src="https://user-images.githubusercontent.com/56179268/201700478-de17fae1-2f1e-421f-adfb-025d26e1a963.png" width="300"/>


**For more info, see:**
* [justify-content (yogalayout)](https://yogalayout.com/docs/justify-content) 
* [justify-content (Flexbox)](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-justify-content)

<table><details>
<summary>EXAMPLES (Click to expand)</summary>
<div markdown="1">

#### `center` (default) 

```xml
<Frame layout="flex" justifyContent="center" frameImageColor="r: 0.3, g: 0.3, b: 0.3, a: 1" widthPercent="100">
    <include name="DemoAttributes/BasicBlockA" widthPercent="10" flexGrow="0" />
    <include name="DemoAttributes/BasicBlockB" widthPercent="30" flexGrow="0" />
    <include name="DemoAttributes/BasicBlockC" widthPercent="20" flexGrow="0" />
</Frame>
```
<img src="https://github.com/funovus/editor-wiki/assets/60531792/cf0294fa-cc2c-48d6-bd15-ea73c4339301" width="500"/>

---

#### `flex-start`

```xml
<Frame layout="flex" justifyContent="flex-start" frameImageColor="r: 0.3, g: 0.3, b: 0.3, a: 1" widthPercent="100">
    <include name="DemoAttributes/BasicBlockA" widthPercent="10" flexGrow="0" />
    <include name="DemoAttributes/BasicBlockB" widthPercent="30" flexGrow="0" />
    <include name="DemoAttributes/BasicBlockC" widthPercent="20" flexGrow="0" />
</Frame>
```
<img src="https://github.com/funovus/editor-wiki/assets/60531792/ba992969-f1e7-4bec-bd0c-6b5bba06ffb2" width="500"/>

---

#### `flex-end` 

```xml
<Frame layout="flex" justifyContent="flex-end" frameImageColor="r: 0.3, g: 0.3, b: 0.3, a: 1" widthPercent="100">
    <include name="DemoAttributes/BasicBlockA" widthPercent="10" flexGrow="0" />
    <include name="DemoAttributes/BasicBlockB" widthPercent="30" flexGrow="0" />
    <include name="DemoAttributes/BasicBlockC" widthPercent="20" flexGrow="0" />
</Frame>
```
<img src="https://github.com/funovus/editor-wiki/assets/60531792/f5880222-223a-4a83-9f22-990838ce17b5" width="500"/>

---

#### `space-around`

```xml
<Frame layout="flex" justifyContent="space-around" frameImageColor="r: 0.3, g: 0.3, b: 0.3, a: 1" widthPercent="100">
    <include name="DemoAttributes/BasicBlockA" widthPercent="10" flexGrow="0" />
    <include name="DemoAttributes/BasicBlockB" widthPercent="30" flexGrow="0" />
    <include name="DemoAttributes/BasicBlockC" widthPercent="20" flexGrow="0" />
</Frame>
```
<img src="https://github.com/funovus/editor-wiki/assets/60531792/43dd5223-d23d-4f52-8552-a8f09f9eecfc" width="500"/>

---

#### `space-between`

```xml
<Frame layout="flex" justifyContent="space-between" frameImageColor="r: 0.3, g: 0.3, b: 0.3, a: 1" widthPercent="100">
    <include name="DemoAttributes/BasicBlockA" widthPercent="10" flexGrow="0" />
    <include name="DemoAttributes/BasicBlockB" widthPercent="30" flexGrow="0" />
    <include name="DemoAttributes/BasicBlockC" widthPercent="20" flexGrow="0" />
</Frame>
```
<img src="https://github.com/funovus/editor-wiki/assets/60531792/110a9ec3-9efc-41e4-9a85-91affbb195f8" width="500"/>

</div>
</details></table>

--- 


### alignItems
**Values**: `center`, `flex-start`, `flex-end`, `baseline`, `stretch`

 This defines the default behavior for how flex items are laid out along the cross axis on the current line. Think of it as the justify-content version for the cross-axis (perpendicular to the main-axis).

<img src="https://user-images.githubusercontent.com/56179268/201709209-1fa8aadd-d52c-4722-ab9e-e4c6dca56692.png" width="300"/>


**For more info, see:**
* [yogalayout](https://yogalayout.com/docs/align-items) 
* [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-align-items)

<table><details>
<summary>EXAMPLES (Click to expand)</summary>
<div markdown="1">

#### `center` (default)

```xml
<Frame layout="flex" alignItems="center" frameImageColor="r: 0.3, g: 0.3, b: 0.3, a: 1" widthPercent="100" heightPercent="50">
    <include name="DemoAttributes/BasicBlockA" />
    <include name="DemoAttributes/BasicBlockB" />
    <include name="DemoAttributes/BasicBlockC" />
    <include name="DemoAttributes/BasicBlockD" />
</Frame>
```
<img src="https://github.com/funovus/editor-wiki/assets/60531792/bf7fd553-6375-4724-9607-adb2dfb4d359" width="500"/>

---

#### `flex-start`

```xml
<Frame layout="flex" alignItems="flex-start" frameImageColor="r: 0.3, g: 0.3, b: 0.3, a: 1" widthPercent="100" heightPercent="50">
    <include name="DemoAttributes/BasicBlockA" />
    <include name="DemoAttributes/BasicBlockB" />
    <include name="DemoAttributes/BasicBlockC" />
    <include name="DemoAttributes/BasicBlockD" />
</Frame>
```
<img src="https://github.com/funovus/editor-wiki/assets/60531792/a74a6e02-2387-4e6c-a2c0-07ad2e23aedd" width="500"/>

---

#### `flex-end`

```xml
<Frame layout="flex" alignItems="flex-end" frameImageColor="r: 0.3, g: 0.3, b: 0.3, a: 1" widthPercent="100" heightPercent="50">
    <include name="DemoAttributes/BasicBlockA" />
    <include name="DemoAttributes/BasicBlockB" />
    <include name="DemoAttributes/BasicBlockC" />
    <include name="DemoAttributes/BasicBlockD" />
</Frame>
```
<img src="https://github.com/funovus/editor-wiki/assets/60531792/e9967765-12f4-4381-aa71-34511d029de3" width="500"/>

---

#### `baseline`

```xml
<Frame layout="flex" alignItems="baseline" frameImageColor="r: 0.3, g: 0.3, b: 0.3, a: 1" widthPercent="100" heightPercent="50">
    <include name="DemoAttributes/BasicBlockA" widthPercent="1" height="300" />
    <include name="DemoAttributes/BasicBlockB" widthPercent="1" height="250" />
    <include name="DemoAttributes/BasicBlockC" widthPercent="1" height="200" />
    <include name="DemoAttributes/BasicBlockD" widthPercent="1" />
</Frame>
```
<img src="https://github.com/funovus/editor-wiki/assets/60531792/68990421-144e-4a3d-912a-90922e19076d" width="500"/>

---

#### `stretch`

```xml
<Frame layout="flex" alignItems="stretch" frameImageColor="r: 0.3, g: 0.3, b: 0.3, a: 1" widthPercent="100" heightPercent="50">
    <include name="DemoAttributes/BasicBlockA" />
    <include name="DemoAttributes/BasicBlockB" />
    <include name="DemoAttributes/BasicBlockC" />
    <include name="DemoAttributes/BasicBlockD" />
</Frame>
```
<img src="https://github.com/funovus/editor-wiki/assets/60531792/4ec8a204-0e35-45c3-bc76-83ca2a39c752" width="500"/>

</div>
</details></table>
  
---
### alignContent


**Values**: `flex-start`, `flex-end`, `center`, `stretch`, `space-between`, `space-around`


This aligns a flex container’s lines within when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis.

Note: This property only takes effect on multi-line flexible containers, where flex-wrap is set to either wrap or wrap-reverse). A single-line flexible container (i.e. where flex-wrap is set to its default value, no-wrap) will not reflect align-content.

<img src="https://user-images.githubusercontent.com/56179268/201718757-be14528b-3997-4342-b005-c3a5d9e34be5.png" width="300"/>

**For more info, see:**
* [yogalayout](https://yogalayout.com/docs/align-content) 
* [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-align-content)

<table><details>
<summary>EXAMPLES (Click to expand)</summary>
<div markdown="1">

#### `flex-start`

```xml
<Frame layout="flex" flexWrap="wrap" heightPercent="50" alignContent="flex-start" frameImageColor="r: 0.3, g: 0.3, b: 0.3, a: 1">
    <include name="BasicBlockA" width="400" />
    <include name="BasicBlockB" width="400" />
    <include name="BasicBlockC" width="400" />
    <include name="BasicBlockD" width="400" />
</Frame>
```
<img src="https://github.com/funovus/editor-wiki/assets/60531792/608c4534-87ba-4c6a-aa9b-2264daa15468" width="500"/>

---

#### `flex-end`

```xml
<Frame layout="flex" flexWrap="wrap" heightPercent="50" alignContent="flex-end" frameImageColor="r: 0.3, g: 0.3, b: 0.3, a: 1">
    <include name="BasicBlockA" width="400" />
    <include name="BasicBlockB" width="400" />
    <include name="BasicBlockC" width="400" />
    <include name="BasicBlockD" width="400" />
</Frame>
```
<img src="https://github.com/funovus/editor-wiki/assets/60531792/474c6897-82bf-4db4-9b04-9ee789d97f1a" width="500"/>

---

#### `center`

```xml
<Frame layout="flex" flexWrap="wrap" heightPercent="50" alignContent="center" frameImageColor="r: 0.3, g: 0.3, b: 0.3, a: 1">
    <include name="BasicBlockA" width="400" />
    <include name="BasicBlockB" width="400" />
    <include name="BasicBlockC" width="400" />
    <include name="BasicBlockD" width="400" />
</Frame>
```
<img src="https://github.com/funovus/editor-wiki/assets/60531792/a2d8f926-f462-439b-8db3-7d9b3e021ee4" width="500"/>

---

#### `stretch`

```xml
<Frame layout="flex" flexWrap="wrap" heightPercent="50" alignContent="stretch" frameImageColor="r: 0.3, g: 0.3, b: 0.3, a: 1">
    <include name="BasicBlockA" width="400" />
    <include name="BasicBlockB" width="400" />
    <include name="BasicBlockC" width="400" />
    <include name="BasicBlockD" width="400" />
</Frame>
```
<img src="https://github.com/funovus/editor-wiki/assets/60531792/49037407-c619-499d-9788-b1111da5677d" width="500"/>

---

#### `space-between`

```xml
<Frame layout="flex" flexWrap="wrap" heightPercent="50" alignContent="space-between" frameImageColor="r: 0.3, g: 0.3, b: 0.3, a: 1">
    <include name="BasicBlockA" width="400" />
    <include name="BasicBlockB" width="400" />
    <include name="BasicBlockC" width="400" />
    <include name="BasicBlockD" width="400" />
</Frame>
```
<img src="https://github.com/funovus/editor-wiki/assets/60531792/388ff7e6-4034-40c8-b3de-a9ebbe489821" width="500"/>

---

#### `space-around`

```xml
<Frame layout="flex" flexWrap="wrap" heightPercent="50" alignContent="space-around" frameImageColor="r: 0.3, g: 0.3, b: 0.3, a: 1">
    <include name="BasicBlockA" width="400" />
    <include name="BasicBlockB" width="400" />
    <include name="BasicBlockC" width="400" />
    <include name="BasicBlockD" width="400" />
</Frame>
```
<img src="https://github.com/funovus/editor-wiki/assets/60531792/f1ebf26f-fce8-47bd-acf2-f78c7d02c9b5" width="500"/>

</div>
</details></table>

---
### alignSelf
**Values**: `baseline`, `center`, `flex-end`, `flex-start`, `stretch`

This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items.

<img src="https://user-images.githubusercontent.com/56179268/201765048-101ae3d1-1ed9-45c5-8b8f-d53b404f8dbe.png" width="300"/>

**For more info, see:**
* [yogalayout](https://yogalayout.com/docs/align-content) 
* [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-align-self)

<table><details>
<summary>EXAMPLE (Click to expand)</summary>

<div markdown="1">

```xml
<Frame layout="flex" alignItems="flex-start" heightPercent="60" frameImageColor="r: 0.3, g: 0.3, b: 0.3, a: 1">
    <include name="DemoAttributes/BasicBlockA" heightPercent="45" />
    <include name="DemoAttributes/BasicBlockB" heightPercent="45" />
    <include name="DemoAttributes/BasicBlockC" heightPercent="45" alignSelf="flex-end" />
    <include name="DemoAttributes/BasicBlockD" heightPercent="45" />
</Frame>
```

<img src="https://github-production-user-asset-6210df.s3.amazonaws.com/60531792/255295219-843f300e-d03b-48cb-acd5-f1d9d2067808.png" width="500"/>

</div>
</details></table>

---
### Margins
Includes:
#### `marginLeft`
#### `marginRight`
#### `marginTop`
#### `marginBottom`

**Values**: `number`

Margin effects the spacing around the outside of a node. A node with margin will offset itself from the bounds of its parent but also offset the location of any siblings. The margin of a node contributes to the total size of its parent if the parent is auto sized.

**For more info, see:**
* [yogalayout](https://yogalayout.com/docs/margins-paddings-borders) 

<table><details>
<summary>EXAMPLES (Click to expand)</summary>

<div markdown="1">

```xml
<Frame layout="flex" flexDirection="row" flexWrap="no-wrap" heightPercent="100" widthPercent="100" alignContent="stretch" backgroundImageColor="r: 0, g: 0, b: 0, a: 1"> 
    <include name="DemoAttributes/BasicBlockA" widthPercent="30" maxWidth="1100" flexShrink="1" />
    <include name="DemoAttributes/BasicBlockB" widthPercent="30" maxWidth="1100" flexShrink="1" marginLeft="45" marginRight="45" marginBottom="45" marginTop="45" />
    <include name="DemoAttributes/BasicBlockC" widthPercent="30" maxWidth="1100" flexShrink="1" />
    <include name="DemoAttributes/BasicBlockD" widthPercent="30" maxWidth="1100" flexShrink="1" />
</Frame>
```

<img src="https://user-images.githubusercontent.com/56179268/201965366-03861ba7-e0b9-4724-b0a5-3c0d515aa64b.png" width="500"/>

</div>
</details></table>

---

### widthPercent
**Values**: Typically `0`-`100`

This defines a frame's width as a percentage of it's parent's width. 


---

### heightPercent
**Values**: Typically `0`-`100`

This defines a frame's height as a percentage of it's parent's height. 

---

### position


`relative`  By default an element is positioned relatively. This means an element is positioned according to the normal flow of the layout, and then offset relative to that position based on the values of top, right, bottom, and left. The offset does not affect the position of any sibling or parent elements.

`absolute` When positioned absolutely an element doesn't take part in the normal layout flow. It is instead laid out independent of its siblings. The position is determined based on the top, right, bottom, and left values.

**Offsets:**
#### `left`
#### `right`
#### `top`
#### `bottom`

Offsets in each direction (different behavior depending if the position is absolute or relative)

**For more info, see:**
* [yogalayout](https://yogalayout.com/docs/absolute-relative-layout) 

<table><details>
<summary>EXAMPLES (Click to expand)</summary>

<div markdown="1">

```xml
<Frame layout="flex" alignItems="center" flexDirection="row" backgroundImageColor="r: 0.3, g: 0.3, b: 0.3, a: 1">
    <include name="DemoAttributes/BasicBlockA" position="relative" top="15" />
    <include name="DemoAttributes/BasicBlockB" position="relative" />
    <include name="DemoAttributes/BasicBlockC" position="relative" bottom="15" />
    <include name="DemoAttributes/BasicBlockD" position="absolute" bottom="50" right="50" />
</Frame>
```

<img src="https://user-images.githubusercontent.com/56179268/201978680-868a36f4-b6f0-47f6-ad9c-23ab873b9934.png" width="500"/>

</div>
</details></table>


---

### aspectRatio
**Value type: `number`**
**Values**: >= 0

`aspectRatio` describes the ratio of the width to the height. For instance, when the aspect ratio is set to 2, it means the width will be twice as large as the height.

The `width` or `height` is adjusted depending on which one is not set. If both are set, `aspectRatio` will adjust the `height`.

**For more info, see:**
* [yogalayout](https://yogalayout.com/docs/aspect-ratio) 

<table><details>
<summary>EXAMPLE (Click to expand)</summary>

<div markdown="1">

```xml
<Frame layout="flex" frameImageColor="r: 0.3, g: 0.3, b: 0.3, a: 1" widthPercent="100" heightPercent="50">
    <include name="DemoAttributes/BasicBlockA" aspectRatio="1" />
    <include name="DemoAttributes/BasicBlockB" aspectRatio="2" />
    <include name="DemoAttributes/BasicBlockC" aspectRatio="4" />
    <include name="DemoAttributes/BasicBlockD" aspectRatio="0.5" />
</Frame>
```

<img src="https://github.com/funovus/editor-wiki/assets/60531792/7458d8f0-f131-431c-8d86-b23cf78d60aa" width="500"/>

</div>
</details></table>

---