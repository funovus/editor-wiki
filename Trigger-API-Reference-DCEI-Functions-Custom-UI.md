<div id="toc" markdown="1">
- [Trigger API Reference\DCEI Functions\Custom UI](#trigger-api-referencedcei-functionscustom-ui)
  * [WaitForUiUpdateToComplete](#waitforuiupdatetocomplete-1)
  * [GetUiRootFrame](#getuirootframe-0)
  * [GetUiCanvasSize](#getuicanvassize-1)
  * [SetUiSizeMultiplier](#setuisizemultiplier-1)
  * [GetUiRootFrameForPlayer](#getuirootframeforplayer-1)
  * [DestroyFrame](#destroyframe-1)
  * [FrameExists](#frameexists-1)
  * [GetParentFrame](#getparentframe-1)
  * [CreateFrame](#createframe-1)
  * [GetFrameWidth](#getframewidth-1)
  * [GetFrameHeight](#getframeheight-1)
  * [SetFrameUseImageSizeRatio](#setframeuseimagesizeratio-2)
  * [SetFrameAlpha](#setframealpha-2)
  * [CreateMaskFrame](#createmaskframe-1)
  * [CreateStencilMaskFrame](#createstencilmaskframe-1)
  * [CreateHighlightFrame](#createhighlightframe-1)
  * [CreateCameraFrame](#createcameraframe-1)
  * [CreateVStackFrame](#createvstackframe-1)
  * [CreateHStackFrame](#createhstackframe-1)
  * [CreateGridFrame](#creategridframe-1)
  * [SetGridFrameLeftAlignment](#setgridframeleftalignment-1)
  * [SetGridFrameRightAlignment](#setgridframerightalignment-1)
  * [SetGridFrameHorizontalCenterAlignment](#setgridframehorizontalcenteralignment-1)
  * [SetGridFrameTopAlignment](#setgridframetopalignment-1)
  * [SetGridFrameBottomAlignment](#setgridframebottomalignment-1)
  * [SetGridFrameVerticalCenterAlignment](#setgridframeverticalcenteralignment-1)
  * [CreateHScrollFrame](#createhscrollframe-1)
  * [CreateVScrollFrame](#createvscrollframe-1)
  * [CreateScrollFrame](#createscrollframe-1)
  * [GetFrameIndexInParent](#getframeindexinparent-1)
  * [SetFrameIndexInParent](#setframeindexinparent-2)
  * [GetChildrenFrameCount](#getchildrenframecount-1)
  * [CreateButtonFrame](#createbuttonframe-1)
  * [CreateTextFrame](#createtextframe-1)
  * [CreateUserInputTextFrame](#createuserinputtextframe-1)
  * [CreateInputFrame](#createinputframe-1)
  * [CreateFrameFromXml](#createframefromxml-2)
  * [UpdateFrame](#updateframe-2)
  * [GetFrameState](#getframestate-1)
  * [GetFrameController](#getframecontroller-1)
  * [GetChildFrameById](#getchildframebyid-2)
  * [GetXmlConstant](#getxmlconstant-1)
  * [GetXmlFrames](#getxmlframes-0)
  * [GetChildrenFramesIdAndFrameType](#getchildrenframesidandframetype-1)
  * [IsUiRootFrame](#isuirootframe-1)
  * [SetCameraFrameViewportSize](#setcameraframeviewportsize-4)
  * [SetCameraFrameViewportWorldPosition](#setcameraframeviewportworldposition-4)
  * [SetCameraFrameViewportRotation](#setcameraframeviewportrotation-4)
  * [SetGridFrameCellWidth](#setgridframecellwidth-2)
  * [SetGridFrameCellHeight](#setgridframecellheight-2)
  * [AnimateCameraFrameViewportWorldPosition](#animatecameraframeviewportworldposition-6)
  * [AnimateCameraFrameViewportRotation](#animatecameraframeviewportrotation-6)
  * [AnimateCameraFrameOrthographicViewportSize](#animatecameraframeorthographicviewportsize-4)
  * [SetCameraFrameCullingMask](#setcameraframecullingmask-2)
  * [SetCameraFrameBackgroundColor](#setcameraframebackgroundcolor-2)
  * [SetCameraFrameViewportOrthographic](#setcameraframeviewportorthographic-2)
  * [SetCameraFrameOrthographicViewportSize](#setcameraframeorthographicviewportsize-2)
  * [CreateMiniMapFrame](#createminimapframe-2)
  * [SetCameraFrameEffectColor](#setcameraframeeffectcolor-5)
  * [GetScrollFrameContent](#getscrollframecontent-1)
  * [SetScrollFrameScrollPosition](#setscrollframescrollposition-2)
  * [GetScrollFrameScrollPosition](#getscrollframescrollposition-1)
  * [SetScrollFrameScrollPosition2D](#setscrollframescrollposition2d-2)
  * [GetScrollFrameScrollPosition2D](#getscrollframescrollposition2d-1)
  * [SetScrollFrameScrollInertia](#setscrollframescrollinertia-2)
  * [SetScrollFrameScrollEnable](#setscrollframescrollenable-2)
  * [SetScrollFrameScrollDecelerationRate](#setscrollframescrolldecelerationrate-2)
  * [SetScrollFrameScrollContentAlignment](#setscrollframescrollcontentalignment-2)
  * [SetScrollFrameSnapEnabled](#setscrollframesnapenabled-2)
  * [SetScrollFrameSnapStepSize](#setscrollframesnapstepsize-2)
  * [SetScrollFrameSnapStepCount](#setscrollframesnapstepcount-2)
  * [SetScrollFrameSnapThreshold](#setscrollframesnapthreshold-2)
  * [SetScrollFrameSnapSpeed](#setscrollframesnapspeed-2)
  * [SetTextFrameRtlSupport](#settextframertlsupport-2)
  * [SetTextFrameAlignment](#settextframealignment-2)
  * [SetTextFrameWrapping](#settextframewrapping-2)
  * [SetTextFrameOverflow](#settextframeoverflow-2)
  * [SetTextFrameText](#settextframetext-2)
  * [SetTextFrameTextExpression](#settextframetextexpression-2)
  * [SetTextFrameFontSize](#settextframefontsize-2)
  * [SetTextFrameFontSizeMin](#settextframefontsizemin-2)
  * [SetTextFrameFontSizeMax](#settextframefontsizemax-2)
  * [SetTextFrameColor](#settextframecolor-2)
  * [SetTextFrameOutline](#settextframeoutline-2)
  * [SetTextFrameShadow](#settextframeshadow-2)
  * [SetTextFrameOutlineOutside](#settextframeoutlineoutside-2)
  * [SetTextFrameOutlineColor](#settextframeoutlinecolor-2)
  * [SetTextFrameOutlineWidth](#settextframeoutlinewidth-2)
  * [SetTextFrameOutlineSoftness](#settextframeoutlinesoftness-2)
  * [SetTextFrameShadowWidth](#settextframeshadowwidth-2)
  * [SetTextFrameShadowColor](#settextframeshadowcolor-2)
  * [SetTextFrameShadowSoftness](#settextframeshadowsoftness-2)
  * [SetTextFrameShadowDirection](#settextframeshadowdirection-3)
  * [GetInputFrameText](#getinputframetext-1)
  * [SetInputFrameText](#setinputframetext-2)
  * [SetInputFrameFontSize](#setinputframefontsize-2)
  * [SetInputFrameColor](#setinputframecolor-2)
  * [SetInputFrameWrapping](#setinputframewrapping-2)
  * [SetInputFramePlaceholder](#setinputframeplaceholder-2)
  * [SetInputFramePlaceholderFontSize](#setinputframeplaceholderfontsize-2)
  * [SetInputFramePlaceholderColor](#setinputframeplaceholdercolor-2)
  * [SetInputFramePlaceholderOutline](#setinputframeplaceholderoutline-2)
  * [SetUserInputTextFrameText](#setuserinputtextframetext-2)
  * [SetUserInputTextFrameFontSize](#setuserinputtextframefontsize-2)
  * [SetUserInputTextFrameColor](#setuserinputtextframecolor-2)
  * [SetUserInputTextFrameWrapping](#setuserinputtextframewrapping-2)
  * [SetFrameMinSize](#setframeminsize-3)
  * [SetFrameMinWidth](#setframeminwidth-2)
  * [SetFrameMinHeight](#setframeminheight-2)
  * [SetFrameMaxSize](#setframemaxsize-3)
  * [SetFrameMaxWidth](#setframemaxwidth-2)
  * [SetFrameMaxHeight](#setframemaxheight-2)
  * [SetFrameSize](#setframesize-3)
  * [CreateListFrame](#createlistframe-1)
  * [SetListFrameItemName](#setlistframeitemname-2)
  * [SetListFrameItemSize](#setlistframeitemsize-2)
  * [SetListFrameItemDataCallback](#setlistframeitemdatacallback-2)
  * [SetListFrameItemCount](#setlistframeitemcount-2)
  * [RefreshListFrameItems](#refreshlistframeitems-3)
  * [CreateSpineFrame](#createspineframe-1)
  * [SetSpineFrameAsset](#setspineframeasset-2)
  * [GetSpineFrameAnimations](#getspineframeanimations-1)
  * [PlaySpineFrameAnimation](#playspineframeanimation-4)
  * [SetFrameWidth](#setframewidth-2)
  * [SetFrameHeight](#setframeheight-2)
  * [FlipFrameHorizontal](#flipframehorizontal-1)
  * [FlipFrameVertical](#flipframevertical-1)
  * [SetFrameMatchParent](#setframematchparent-3)
  * [SetFramePadding](#setframepadding-2)
  * [SetFramePaddingLeft](#setframepaddingleft-2)
  * [SetFramePaddingRight](#setframepaddingright-2)
  * [SetFramePaddingTop](#setframepaddingtop-2)
  * [SetFramePaddingBottom](#setframepaddingbottom-2)
  * [SetFrameSpacing](#setframespacing-2)
  * [SetFrameLeftAlignment](#setframeleftalignment-1)
  * [SetFrameRightAlignment](#setframerightalignment-1)
  * [SetFrameTopAlignment](#setframetopalignment-1)
  * [SetFrameBottomAlignment](#setframebottomalignment-1)
  * [SetFrameCenterAlignment](#setframecenteralignment-1)
  * [SetFrameLeftAlignmentInParent](#setframeleftalignmentinparent-1)
  * [SetFrameRightAlignmentInParent](#setframerightalignmentinparent-1)
  * [SetFrameTopAlignmentInParent](#setframetopalignmentinparent-1)
  * [SetFrameBottomAlignmentInParent](#setframebottomalignmentinparent-1)
  * [SetFrameCenterAlignmentInParent](#setframecenteralignmentinparent-1)
  * [SetFrameHorizontalOffsetInParent](#setframehorizontaloffsetinparent-2)
  * [SetFrameVerticalOffsetInParent](#setframeverticaloffsetinparent-2)
  * [SetFrameReverseChildrenFrameOrder](#setframereversechildrenframeorder-2)
  * [IsFrameUsingFlexLayout](#isframeusingflexlayout-1)
  * [SetFrameFlexDirection](#setframeflexdirection-2)
  * [SetFrameFlexGrow](#setframeflexgrow-2)
  * [SetFrameFlexShrink](#setframeflexshrink-2)
  * [SetFrameFlexWrap](#setframeflexwrap-2)
  * [SetFrameJustifyContent](#setframejustifycontent-2)
  * [SetFrameAlignItems](#setframealignitems-2)
  * [SetFrameAlignContent](#setframealigncontent-2)
  * [SetFrameAlignSelf](#setframealignself-2)
  * [SetFrameMarginLeft](#setframemarginleft-2)
  * [SetFrameMarginRight](#setframemarginright-2)
  * [SetFrameMarginTop](#setframemargintop-2)
  * [SetFrameMarginBottom](#setframemarginbottom-2)
  * [SetFrameWidthPercent](#setframewidthpercent-2)
  * [SetFrameHeightPercent](#setframeheightpercent-2)
  * [SetFramePosition](#setframeposition-2)
  * [SetFrameLeft](#setframeleft-2)
  * [SetFrameRight](#setframeright-2)
  * [SetFrameTop](#setframetop-2)
  * [SetFrameBottom](#setframebottom-2)
  * [SetFrameAspectRatio](#setframeaspectratio-2)
  * [SetFrameImage](#setframeimage-2)
  * [SetFrameImageExpression](#setframeimageexpression-2)
  * [SetFrameImageGrayScaleExpression](#setframeimagegrayscaleexpression-2)
  * [SetButtonDefaultClickAnimationEnabled](#setbuttondefaultclickanimationenabled-2)
  * [GetButtonDefaultClickAnimationEnabled](#getbuttondefaultclickanimationenabled-1)
  * [SetButtonFrameEnableExpression](#setbuttonframeenableexpression-2)
  * [SetFrameImageTiled](#setframeimagetiled-2)
  * [SetFramePixelsPerUnitMultiplier](#setframepixelsperunitmultiplier-2)
  * [SetFrameImageFillAmount](#setframeimagefillamount-2)
  * [GetFrameImageFillAmount](#getframeimagefillamount-1)
  * [SetFrameImageFillHorizontal](#setframeimagefillhorizontal-1)
  * [SetFrameImageFillVertical](#setframeimagefillvertical-1)
  * [SetFrameImageFillRadial](#setframeimagefillradial-1)
  * [SetFrameImageFillOrigin](#setframeimagefillorigin-2)
  * [SetFrameImageFillAmountExpression](#setframeimagefillamountexpression-3)
  * [SetFrameWidthExpression](#setframewidthexpression-2)
  * [SetFrameHeightExpression](#setframeheightexpression-2)
  * [SetFrameImageColor](#setframeimagecolor-2)
  * [SetFrameImageColorExpression](#setframeimagecolorexpression-5)
  * [SetFrameImageGrayScale](#setframeimagegrayscale-2)
  * [SetFrameTooltipText](#setframetooltiptext-2)
  * [SetFrameTooltipOffset](#setframetooltipoffset-1)
  * [SetFrameTooltipStyle](#setframetooltipstyle-1)
  * [SetFrameTooltipPosition](#setframetooltipposition-1)
  * [SetFrameTooltipImage](#setframetooltipimage-1)
  * [SetFrameTooltipFontSize](#setframetooltipfontsize-1)
  * [SetFrameTooltipPadding](#setframetooltippadding-4)
  * [SetFrameTooltipMaxWidth](#setframetooltipmaxwidth-1)
  * [SetFrameTooltipTextColor](#setframetooltiptextcolor-1)
  * [SetButtonFrameClickSound](#setbuttonframeclicksound-2)
  * [SetButtonFrameEnable](#setbuttonframeenable-2)
  * [SetButtonFrameDisabledImage](#setbuttonframedisabledimage-2)
  * [SetFrameRotation](#setframerotation-2)
  * [SetFrameRotation3D](#setframerotation3d-4)
  * [BindUnitData](#bindunitdata-2)
  * [BindLuaTable](#bindluatable-2)
  * [IsFrameActive](#isframeactive-1)
  * [SetFrameActive](#setframeactive-2)
  * [SetFrameBlockInput](#setframeblockinput-2)
  * [AttachFrameToUnit](#attachframetounit-4)
  * [SetMouseCursorFrame](#setmousecursorframe-1)
  * [SetMouseCursorFrameForPlayer](#setmousecursorframeforplayer-2)
  * [AttachOffscreenUnitIndicatorFrame](#attachoffscreenunitindicatorframe-3)
  * [SetOffscreenUnitIndicatorFrameCanvasOffset](#setoffscreenunitindicatorframecanvasoffset-2)
  * [MoveFrameToTop](#moveframetotop-1)
  * [MoveFrameToBottom](#moveframetobottom-1)
  * [SetPauseButtonFrame](#setpausebuttonframe-1)
  * [SetPauseMenuFrame](#setpausemenuframe-1)
  * [ShowPauseMenuFrame](#showpausemenuframe-0)
  * [HidePauseMenuFrame](#hidepausemenuframe-0)
  * [SetPauseMenuFrameMusicButton](#setpausemenuframemusicbutton-1)
  * [SetPauseMenuFrameSoundButton](#setpausemenuframesoundbutton-1)
  * [SetPauseMenuFrameResumeButton](#setpausemenuframeresumebutton-1)
  * [SetPauseMenuFrameQuitButton](#setpausemenuframequitbutton-1)
  * [SetPauseMenuFrameRestartButton](#setpausemenuframerestartbutton-1)
  * [SetPauseMenuFramePlayLevelButton](#setpausemenuframeplaylevelbutton-3)
  * [SetPauseMenuFrameSettingsButton](#setpausemenuframesettingsbutton-1)
  * [SuppressPauseMenuOnApplicationPause](#suppresspausemenuonapplicationpause-0)
  * [GetFrameCanvasPosition3D](#getframecanvasposition3d-1)
  * [GetCanvasPositionFromWorldPosition](#getcanvaspositionfromworldposition-1)
  * [MoveFrameToCanvasPosition](#moveframetocanvasposition-3)
  * [SetFrameAnimationLoops](#setframeanimationloops-3)
  * [StopFrameAnimationLoops](#stopframeanimationloops-2)
  * [AnimateFrameImageColor](#animateframeimagecolor-5)
  * [AnimateTextFrameColor](#animatetextframecolor-5)
  * [AnimateFrameScale](#animateframescale-5)
  * [AnimateFrameImageFillAmount](#animateframeimagefillamount-5)
  * [AnimateFrameRotation](#animateframerotation-5)
  * [AnimateFrameAlpha](#animateframealpha-5)
  * [AnimateFrameHorizontalOffset](#animateframehorizontaloffset-5)
  * [AnimateFrameVerticalOffset](#animateframeverticaloffset-5)
  * [AnimateFrameScrollPosition](#animateframescrollposition-5)
  * [AnimateFrameScrollPosition2D](#animateframescrollposition2d-5)
  * [GetScreenSizeInPixel](#getscreensizeinpixel-0)
  * [GetScreenSafeAreaOffsetInPixel](#getscreensafeareaoffsetinpixel-0)
  * [GetScreenSafeAreaSizeInPixel](#getscreensafeareasizeinpixel-0)

</div>

***

# [Trigger API Reference](Trigger-API-Reference)\\DCEI Functions\Custom UI {Trigger-API-ReferenceDCEI-FunctionsCustom-UI}

[](overview-start)
- UI frames will either have a default size of 0 and expand to fit any children or attempt to fill their parent.
- Placing a frame that attempts to fill its parent inside a frame with a default size of 0 will cause the parent frame to expand to fill their parent.
[](overview-end)

## void WaitForUiUpdateToComplete(TypedCallback callback) {waitforuiupdatetocomplete-1}
```cs
void WaitForUiUpdateToComplete(TypedCallback callback)
```
#### Description
[](description-start)
Runs the callback after engine finishes updating UI layout but before the updated layout is shown on the screen.
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback* `callback` the callback function that is called when the event is triggered.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local button = DCEI.CreateButtonFrame(GMUI.ui.Root)
DCEI.SetFrameSize(button, 100, 100)
DCEI.WaitForUiUpdateToComplete(function()
    DCEI.LogMessage("We can get (and set) button position after it initializes but before it renders on screen")
    local pos = DCEI.GetFrameCanvasPosition3D(button)
    DCEI.MoveFrameToCanvasPosition(button, pos, { right = 100 })
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## InGameUILayoutComponent GetUiRootFrame() {getuirootframe-0}
```cs
InGameUILayoutComponent GetUiRootFrame()
```
#### Description
[](description-start)
Returns the root UI frame.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local button_layout = GMUI.Layout.New({
    parent = DCEI.GetUiRootFrame(),
    name = "Standard/Button/Button",
})

DCEI.SetTextFrameText(button_layout.Label, "Button Example")
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## Float2 GetUiCanvasSize(bool ignoreSafeArea = False) {getuicanvassize-1}
```cs
Float2 GetUiCanvasSize(bool ignoreSafeArea = False)
```
#### Description
[](description-start)
Returns the UI canvas size.
[](description-end)

#### Parameters
[](parameters-start)
- *bool* `ignoreSafeArea` if true, ignores any safe areas.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local ui_canvas_size = DCEI.GetUiCanvasSize(true)
DCEI.LogMessage("UI canvas X dim: " .. ui_canvas_size.x .. " Y dim: " .. ui_canvas_size.y)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## float SetUiSizeMultiplier(float multiplier) {setuisizemultiplier-1}
```cs
float SetUiSizeMultiplier(float multiplier)
```
#### Description
[](description-start)
Applies a multiplier to all size parameters of all custom UI frames. This was added to help migrate legacy maps to portrait mode, due to the canvas scaling change.
[](description-end)

#### Parameters
[](parameters-start)
- *float* `multiplier` the global multiplier to apply to all custom UI.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local multiplier = 16/9
DCEI.SetUiSizeMultiplier(multiplier)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## InGameUILayoutComponent GetUiRootFrameForPlayer(int player) {getuirootframeforplayer-1}
```cs
InGameUILayoutComponent GetUiRootFrameForPlayer(int player)
```
#### Description
[](description-start)
Returns the root UI frame for the given player.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `player` the player to return the root UI frame for.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local button_layout = GMUI.Layout.New({
    parent = DCEI.GetUiRootFrameForPlayer(1),
    name = "Standard/Button/Button",
})

DCEI.SetTextFrameText(button_layout.Label, "Button Example")
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void DestroyFrame(InGameUILayoutComponent ui) {destroyframe-1}
```cs
void DestroyFrame(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Destroys the given UI frame and all its children.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the UI frame to destroy.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.DestroyFrame(frame)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## bool FrameExists(InGameUILayoutComponent ui) {frameexists-1}
```cs
bool FrameExists(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Returns true if the given UI exists.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the UI frame to check.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local ui_exists = DCEI.FrameExists(DCEI.GetUiRootFrame())
DCEI.LogMessage("Root UI exists: " .. tostring(ui_exists))
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## InGameUILayoutComponent GetParentFrame(InGameUILayoutComponent item) {getparentframe-1}
```cs
InGameUILayoutComponent GetParentFrame(InGameUILayoutComponent item)
```
#### Description
[](description-start)
Returns the parent frame of the given UI frame.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `item` the UI frame to return the parent frame of.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local parent_frame = DCEI.GetParentFrame(frame)
DCEI.CreateFrame(parent_frame)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## InGameUILayoutComponent CreateFrame(InGameUILayoutComponent parent) {createframe-1}
```cs
InGameUILayoutComponent CreateFrame(InGameUILayoutComponent parent)
```
#### Description
[](description-start)
Creates and returns a new frame as a child of the given a parent frame. This frame has a default height/width of 0 and expands to fit any children.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `parent` the parent frame.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- creates a red square
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame, 200, 200)
DCEI.SetFrameImageColor(frame, {r = 1, g = 0, b = 0, a = 1})
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## float GetFrameWidth(InGameUILayoutComponent ui) {getframewidth-1}
```cs
float GetFrameWidth(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Returns the width of a UI frame. Note that UI frame size changes are applied at the end of a game update, so you'd need to wait a frame after changing the size of a UI frame to get the new dimensions.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the UI frame.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local root_width = DCEI.GetFrameWidth(DCEI.GetUiRootFrame())
DCEI.LogMessage("The width of the root UI frame is: " .. root_width)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## float GetFrameHeight(InGameUILayoutComponent ui) {getframeheight-1}
```cs
float GetFrameHeight(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Returns the height of a UI frame. Note that UI frame size changes are applied at the end of a game update, so you'd need to wait a frame after changing the size of a UI frame to get the new dimensions.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the UI frame.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local root_height = DCEI.GetFrameHeight(DCEI.GetUiRootFrame())
DCEI.LogMessage("The height of the root UI frame is: " .. root_height)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameUseImageSizeRatio(InGameUILayoutComponent ui, float ratio) {setframeuseimagesizeratio-2}
```cs
void SetFrameUseImageSizeRatio(InGameUILayoutComponent ui, float ratio)
```
#### Description
[](description-start)
Makes the given UI frame set its sized based on the texture used for it's background image. This ratio determines the rendering size of the frame, where `1` will use the original dimensions of the texture. Once set, setting either height or width (but not both) will adjust the other dimension proportionally to match the size ratio.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the UI frame.
- *float* `ratio` the image size ratio.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImage(frame, DCEI.Texture("airship_onMap"))
DCEI.SetFrameUseImageSizeRatio(frame, 2)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [SetFrameImage](#setframeimage-2)
[](extra-section-end)

## void SetFrameAlpha(InGameUILayoutComponent ui, float alpha) {setframealpha-2}
```cs
void SetFrameAlpha(InGameUILayoutComponent ui, float alpha)
```
#### Description
[](description-start)
Sets the transparency for the given UI frame and all of its children. This option with have a compounding effect with an alpha value set by [SetFrameImageColor](#setframeimagecolor-2). Child frames cannot be made less transparent than their parent with this function.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the UI frame.
- *float* `alpha` the frame transparency, from 0 to 1, where 0 is transparent and 1 is opaque.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame, 200, 200)
DCEI.SetFrameImageColor(frame, {r = 1, g = 0, b = 0, a = 1})
DCEI.SetFrameAlpha(frame, 0.5)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## InGameUILayoutComponent CreateMaskFrame(InGameUILayoutComponent parent) {createmaskframe-1}
```cs
InGameUILayoutComponent CreateMaskFrame(InGameUILayoutComponent parent)
```
#### Description
[](description-start)
Creates a mask. Masks can be used to 'crop' child frames to the masks size/shape. If given a background image, the opaque white pixels will be used to determine the shape of the effect. By default, this frame type attempts to fill its parent size unless given explicit dimensions.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `parent` the parent frame.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- mask's its children using a circle texture
local mask = DCEI.CreateMaskFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImage(mask, DCEI.Texture("circle_mask"))
DCEI.SetFrameSize(mask, 150, 150)
    
-- frame to mask (note the original texture is square)
local frame = DCEI.CreateFrame(mask)
DCEI.SetFrameImage(frame, DCEI.Texture("question_green"))
DCEI.SetFrameSize(frame, 200, 200)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [SetFrameImage](#setframeimage-2)
- [CreateStencilMaskFrame](#createstencilmaskframe-1)
[](extra-section-end)

## InGameUILayoutComponent CreateStencilMaskFrame(InGameUILayoutComponent parent) {createstencilmaskframe-1}
```cs
InGameUILayoutComponent CreateStencilMaskFrame(InGameUILayoutComponent parent)
```
#### Description
[](description-start)
Creates a stencil mask. Stencil masks can be used to 'cut holes' in a parent mask frame. Similar to a mask frame, if given a background image, the white/opaque values will be used to determine the shape of the effect. A stencil mask will also cut through any of its sibling frames. By default, this frame type attempts to fill its parent size unless given explicit dimensions.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `parent` the parent frame.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- fullscreen mask that can be used by the stencil
local mask = DCEI.CreateMaskFrame(DCEI.GetUiRootFrame())

-- stencil used to cut out a section from the mask and its children
local stencil = DCEI.CreateStencilMaskFrame(mask)
DCEI.SetFrameSize(stencil, 100, 100)
DCEI.SetFrameImage(stencil, DCEI.Texture("circle_mask"))

-- this frame will be affected by the stencil
local frame_to_stencil = DCEI.CreateFrame(mask)
DCEI.SetFrameMatchParent(frame_to_stencil, true, true)
DCEI.SetFrameImageColor(frame_to_stencil, 0, 0, 0, 0.5)

```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateMaskFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createmaskframe-1)
- [SetFrameImage](#setframeimage-2)
[](extra-section-end)

## InGameUILayoutComponent CreateHighlightFrame(InGameUILayoutComponent parent) {createhighlightframe-1}
```cs
InGameUILayoutComponent CreateHighlightFrame(InGameUILayoutComponent parent)
```
#### Description
[](description-start)
Creates a highlight frame. If the highlight is given a background image, it will animate a highlight effect across the texture; otherwise the highlight will display a simple animation around its border. This frame type has a default size of 0 and expands to fit any children.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `parent` the parent frame.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local highlight = DCEI.CreateHighlightFrame(DCEI.GetUiRootFrame())
local frame = DCEI.CreateFrame(highlight)
DCEI.SetFrameSize(frame, 100, 100)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## InGameUILayoutComponent CreateCameraFrame(InGameUILayoutComponent parent) {createcameraframe-1}
```cs
InGameUILayoutComponent CreateCameraFrame(InGameUILayoutComponent parent)
```
#### Description
[](description-start)
Creates a new camera frame. Camera frames can be used to project views of the game world onto a UI frame. This can be used to make animated portraits using in-game models, among other uses. Requires the use of helper functions to set default values.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `parent` the parent frame.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- create unit
DCEI.CreateUnit(1, 1, DCEI.Unit("Standard MeleeUnit"), 16, 12, 0, -1)

-- create camera frame border
local container = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImage(container, DCEI.Texture("frame01"))
DCEI.SetFramePadding(container, 10)
    
-- create camera frame facing our unit
local camera = DCEI.CreateCameraFrame(container)
DCEI.SetFrameSize(camera, 150, 150)
DCEI.SetCameraFrameViewportSize(camera, 200, 200)
DCEI.SetCameraFrameViewportWorldPosition(camera, 16, 1, 11)
DCEI.SetCameraFrameViewportRotation(camera, 35, 0, 0)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [SetCameraFrameViewportSize](#setcameraframeviewportsize-4)
- [SetCameraFrameViewportWorldPosition](#setcameraframeviewportworldposition-4)
- [SetCameraFrameViewportRotation](#setcameraframeviewportrotation-4)
- [AnimateCameraFrameViewportWorldPosition](#animatecameraframeviewportworldposition-6)
- [AnimateCameraFrameViewportRotation](#animatecameraframeviewportrotation-6)
- [AnimateCameraFrameOrthographicViewportSize](#animatecameraframeorthographicviewportsize-4)
- [SetCameraFrameCullingMask](#setcameraframecullingmask-2)
- [SetCameraFrameBackgroundColor](#setcameraframebackgroundcolor-2)
- [SetCameraFrameViewportOrthographic](#setcameraframeviewportorthographic-2)
- [SetCameraFrameOrthographicViewportSize](#setcameraframeorthographicviewportsize-2)
- [CreateMiniMapFrame](#createminimapframe-2)
[](extra-section-end)

## InGameUILayoutComponent CreateVStackFrame(InGameUILayoutComponent parent) {createvstackframe-1}
```cs
InGameUILayoutComponent CreateVStackFrame(InGameUILayoutComponent parent)
```
#### Description
[](description-start)
Creates a new vertical stack. This frame will arrange child frames vertically within it. By default, child frames are stacked from top to bottom. This frame type has a default size of 0 and expands to fit any children.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `parent` the parent frame.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local stack = DCEI.CreateVStackFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(stack, 200, 600)
DCEI.SetFrameImageColor(stack, {r = 0, g = 0, b = 1, a = 0.2})

local frame1 = DCEI.CreateFrame(stack)
DCEI.SetFrameSize(frame1, 200, 100)
DCEI.SetFrameImageColor(frame1, {r = 1, g = 1, b = 0, a = 0.5})

local frame2 = DCEI.CreateFrame(stack)
DCEI.SetFrameSize(frame2, 200, 100)
DCEI.SetFrameImageColor(frame2, {r = 1, g = 0, b = 1, a = 0.4})

local frame3 = DCEI.CreateFrame(stack)
DCEI.SetFrameSize(frame3, 200, 100)
DCEI.SetFrameImageColor(frame3, {r = 1, g = 0, b = 0, a = 0.6})

local frame4 = DCEI.CreateFrame(stack)
DCEI.SetFrameSize(frame4, 200, 100)
DCEI.SetFrameImageColor(frame4, {r = 1, g = 1, b = 1, a = 0.3})

local frame5 = DCEI.CreateFrame(stack)
DCEI.SetFrameSize(frame5, 200, 100)
DCEI.SetFrameImageColor(frame5, {r = 1, g = 1, b = 0, a = 1})
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [SetFrameReverseChildrenFrameOrder](#setframereversechildrenframeorder-2)
- [SetFrameSpacing](#setframespacing-2)
- [GetFrameIndexInParent](#getframeindexinparent-1)
- [SetFrameIndexInParent](#setframeindexinparent-2)
[](extra-section-end)

## InGameUILayoutComponent CreateHStackFrame(InGameUILayoutComponent parent) {createhstackframe-1}
```cs
InGameUILayoutComponent CreateHStackFrame(InGameUILayoutComponent parent)
```
#### Description
[](description-start)
Creates a new horizontal stack. This frame will arrange child frames horizontally within it. By default, child frames are stacked from left to right. This frame type has a default size of 0 and expands to fit any children. If this frame is assigned a set size, oversized child frames will overflow.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `parent` the parent frame.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local stack = DCEI.CreateHStackFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImageColor(stack, {r = 0, g = 0, b = 1, a = 0.2})
DCEI.SetFrameSize(stack, 600, 100)

local frame1 = DCEI.CreateFrame(stack)
DCEI.SetFrameSize(frame1, 100, 100)
DCEI.SetFrameImageColor(frame1, {r = 1, g = 1, b = 0, a = 0.5})

local frame2 = DCEI.CreateFrame(stack)
DCEI.SetFrameSize(frame2, 100, 100)
DCEI.SetFrameImageColor(frame2, {r = 1, g = 0, b = 1, a = 0.4})

local frame3 = DCEI.CreateFrame(stack)
DCEI.SetFrameSize(frame3, 100, 100)
DCEI.SetFrameImageColor(frame3, {r = 1, g = 0, b = 0, a = 0.6})

local frame4 = DCEI.CreateFrame(stack)
DCEI.SetFrameSize(frame4, 100, 100)
DCEI.SetFrameImageColor(frame4, {r = 1, g = 1, b = 1, a = 0.3})

local frame5 = DCEI.CreateFrame(stack)
DCEI.SetFrameSize(frame5, 100, 100)
DCEI.SetFrameImageColor(frame5, {r = 1, g = 1, b = 0, a = 1})
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [SetFrameReverseChildrenFrameOrder](#setframereversechildrenframeorder-2)
- [SetFrameSpacing](#setframespacing-2)
- [GetFrameIndexInParent](#getframeindexinparent-1)
- [SetFrameIndexInParent](#setframeindexinparent-2)
[](extra-section-end)

## InGameUILayoutComponent CreateGridFrame(InGameUILayoutComponent parent) {creategridframe-1}
```cs
InGameUILayoutComponent CreateGridFrame(InGameUILayoutComponent parent)
```
#### Description
[](description-start)
Creates a new grid. This frame will arrange child frames in a grid by determining the number of rows/columns automatically from the cellWidth and cellHeight properties. This should be followed by [SetGridFrameCellHeight](#setgridframecellheight-2) and [SetGridFrameCellWidth](#setgridframecellwidth-2) to set the aforementioned properties, as it does not have default values for either.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `parent` the parent frame.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local grid = DCEI.CreateGridFrame(DCEI.GetUiRootFrame())
DCEI.SetGridFrameCellHeight(grid, 100)
DCEI.SetGridFrameCellWidth(grid, 100)
DCEI.SetFrameSize(grid, 200, 200)

local content1 = DCEI.CreateTextFrame(grid)
DCEI.SetTextFrameText(content1, "a")
DCEI.SetFrameSize(content1, 100, 100)
local content2 = DCEI.CreateTextFrame(grid)
DCEI.SetTextFrameText(content2, "b")
DCEI.SetFrameSize(content2, 100, 100)
local content3 = DCEI.CreateTextFrame(grid)
DCEI.SetTextFrameText(content3, "c")
DCEI.SetFrameSize(content3, 100, 100)
local content4 = DCEI.CreateTextFrame(grid)
DCEI.SetTextFrameText(content4, "d")
DCEI.SetFrameSize(content4, 100, 100)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [SetGridFrameCellHeight](#setgridframecellheight-2)
- [SetGridFrameCellWidth](#setgridframecellwidth-2)
- [SetFrameReverseChildrenFrameOrder](#setframereversechildrenframeorder-2)
- [SetFrameSpacing](#setframespacing-2)
- [GetFrameIndexInParent](#getframeindexinparent-1)
- [SetFrameIndexInParent](#setframeindexinparent-2)
[](extra-section-end)

## void SetGridFrameLeftAlignment(InGameUILayoutComponent ui) {setgridframeleftalignment-1}
```cs
void SetGridFrameLeftAlignment(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Sets left alignment for a UI frame's contents.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set content alignment for.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame1 = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame1, 200, 200)
DCEI.SetFrameImageColor(frame1, {r = 1, g = 0, b = 1, a = 0.4})
DCEI.SetGridFrameLeftAlignment(frame1)

local frame2 = DCEI.CreateFrame(frame1)
DCEI.SetFrameSize(frame2, 100, 100)
DCEI.SetFrameImageColor(frame2, {r = 0, g = 1, b = 1, a = 0.4})
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetGridFrameRightAlignment(InGameUILayoutComponent ui) {setgridframerightalignment-1}
```cs
void SetGridFrameRightAlignment(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Sets right alignment for a UI frame's contents.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set content alignment for.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame1 = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame1, 200, 200)
DCEI.SetFrameImageColor(frame1, {r = 1, g = 0, b = 1, a = 0.4})
DCEI.SetGridFrameRightAlignment(frame1)

local frame2 = DCEI.CreateFrame(frame1)
DCEI.SetFrameSize(frame2, 100, 100)
DCEI.SetFrameImageColor(frame2, {r = 0, g = 1, b = 1, a = 0.4})
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetGridFrameHorizontalCenterAlignment(InGameUILayoutComponent ui) {setgridframehorizontalcenteralignment-1}
```cs
void SetGridFrameHorizontalCenterAlignment(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Sets horizontal center alignment for a UI frame's contents.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set content alignment for.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame1 = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame1, 200, 200)
DCEI.SetFrameImageColor(frame1, {r = 1, g = 0, b = 1, a = 0.4})
DCEI.SetGridFrameHorizontalCenterAlignment(frame1)

local frame2 = DCEI.CreateFrame(frame1)
DCEI.SetFrameSize(frame2, 100, 100)
DCEI.SetFrameImageColor(frame2, {r = 0, g = 1, b = 1, a = 0.4})
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetGridFrameTopAlignment(InGameUILayoutComponent ui) {setgridframetopalignment-1}
```cs
void SetGridFrameTopAlignment(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Sets top alignment for a UI frame's contents.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set content alignment for.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame1 = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame1, 200, 200)
DCEI.SetFrameImageColor(frame1, {r = 1, g = 0, b = 1, a = 0.4})
DCEI.SetGridFrameTopAlignment(frame1)

local frame2 = DCEI.CreateFrame(frame1)
DCEI.SetFrameSize(frame2, 100, 100)
DCEI.SetFrameImageColor(frame2, {r = 0, g = 1, b = 1, a = 0.4})
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetGridFrameBottomAlignment(InGameUILayoutComponent ui) {setgridframebottomalignment-1}
```cs
void SetGridFrameBottomAlignment(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Sets bottom alignment for a UI frame's contents.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set content alignment for.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame1 = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame1, 200, 200)
DCEI.SetFrameImageColor(frame1, {r = 1, g = 0, b = 1, a = 0.4})
DCEI.SetGridFrameBottomAlignment(frame1)

local frame2 = DCEI.CreateFrame(frame1)
DCEI.SetFrameSize(frame2, 100, 100)
DCEI.SetFrameImageColor(frame2, {r = 0, g = 1, b = 1, a = 0.4})
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetGridFrameVerticalCenterAlignment(InGameUILayoutComponent ui) {setgridframeverticalcenteralignment-1}
```cs
void SetGridFrameVerticalCenterAlignment(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Sets vertical center alignment for a UI frame's contents.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set content alignment for.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame1 = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame1, 200, 200)
DCEI.SetFrameImageColor(frame1, {r = 1, g = 0, b = 1, a = 0.4})
DCEI.SetGridFrameVerticalCenterAlignment(frame1)

local frame2 = DCEI.CreateFrame(frame1)
DCEI.SetFrameSize(frame2, 100, 100)
DCEI.SetFrameImageColor(frame2, {r = 0, g = 1, b = 1, a = 0.4})
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## InGameUILayoutComponent CreateHScrollFrame(InGameUILayoutComponent parent) {createhscrollframe-1}
```cs
InGameUILayoutComponent CreateHScrollFrame(InGameUILayoutComponent parent)
```
#### Description
[](description-start)
Creates a new horizontal scrolling frame. This frame functions similarly to a [CreateHStackFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createhstackframe-1), in that it will arrange its child frames horizontally, however this frame also supports horizontal scrolling if the contents would be larger than the size of the scroll frame. Do not place content inside this frame directly, instead use [GetScrollFrameContent](#getscrollframecontent-1) to fetch the content frame. By default, this frame type attempts to fill its parent size unless given explicit dimensions.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `parent` the parent frame.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local hscroll_frame = DCEI.CreateHScrollFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImage(hscroll_frame, DCEI.Texture("frame01"))
DCEI.SetFrameSize(hscroll_frame, 350, 120)
    
local hscroll_content = DCEI.GetScrollFrameContent(hscroll_frame)
DCEI.SetFrameSpacing(hscroll_content, 10)
DCEI.SetFramePadding(hscroll_content, 10)
    
local frame1 = DCEI.CreateFrame(hscroll_content)
DCEI.SetFrameSize(frame1, 100, 100)
DCEI.SetFrameImage(frame1, DCEI.Texture("frame01_blue"))
    
local frame2 = DCEI.CreateFrame(hscroll_content)
DCEI.SetFrameSize(frame2, 100, 100)
DCEI.SetFrameImage(frame2, DCEI.Texture("frame01_brown"))
    
local frame3 = DCEI.CreateFrame(hscroll_content)
DCEI.SetFrameSize(frame3, 100, 100)
DCEI.SetFrameImage(frame3, DCEI.Texture("frame01_purple"))
    
local frame4 = DCEI.CreateFrame(hscroll_content)
DCEI.SetFrameSize(frame4, 100, 100)
DCEI.SetFrameImage(frame4, DCEI.Texture("frame01_grey"))
    
local frame5 = DCEI.CreateFrame(hscroll_content)
DCEI.SetFrameSize(frame5, 100, 100)
DCEI.SetFrameImage(frame5, DCEI.Texture("frame01_yellow"))
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateHStackFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createhstackframe-1)
- [GetScrollFrameContent](#getscrollframecontent-1)
- [SetScrollFrameScrollPosition](#setscrollframescrollposition-2)
- [GetScrollFrameScrollPosition](#getscrollframescrollposition-1)
- [SetScrollFrameScrollInertia](#setscrollframescrollinertia-2)
- [SetScrollFrameScrollEnable()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setscrollframescrollenable-2)
- [SetScrollFrameScrollDecelerationRate](#setscrollframescrolldecelerationrate-2)
- [SetScrollFrameScrollContentAlignment](#setscrollframescrollcontentalignment-2)
- [AnimateFrameScrollPosition](#animateframescrollposition-5)
[](extra-section-end)

## InGameUILayoutComponent CreateVScrollFrame(InGameUILayoutComponent parent) {createvscrollframe-1}
```cs
InGameUILayoutComponent CreateVScrollFrame(InGameUILayoutComponent parent)
```
#### Description
[](description-start)
Creates a new vertically scrolling frame. This frame functions similarly to a [CreateVStackFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createvstackframe-1), in that it will arrange its child frames vertically, however this frame also supports vertical scrolling if the contents would be larger than the size of the scroll frame. Do not place content inside this frame directly, instead use [GetScrollFrameContent](#getscrollframecontent-1) to fetch the content frame. By default, this frame type attempts to fill its parent size unless given explicit dimensions.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `parent` the parent frame.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local vscroll_frame = DCEI.CreateVScrollFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImage(vscroll_frame, DCEI.Texture("frame01"))
DCEI.SetFrameSize(vscroll_frame, 120, 350)

local vscroll_content = DCEI.GetScrollFrameContent(vscroll_frame)
DCEI.SetFrameSpacing(vscroll_content, 10)
DCEI.SetFramePadding(vscroll_content, 10)

local frame1 = DCEI.CreateFrame(vscroll_content)
DCEI.SetFrameSize(frame1, 100, 100)
DCEI.SetFrameImage(frame1, DCEI.Texture("frame01_blue"))

local frame2 = DCEI.CreateFrame(vscroll_content)
DCEI.SetFrameSize(frame2, 100, 100)
DCEI.SetFrameImage(frame2, DCEI.Texture("frame01_brown"))

local frame3 = DCEI.CreateFrame(vscroll_content)
DCEI.SetFrameSize(frame3, 100, 100)
DCEI.SetFrameImage(frame3, DCEI.Texture("frame01_purple"))

local frame4 = DCEI.CreateFrame(vscroll_content)
DCEI.SetFrameSize(frame4, 100, 100)
DCEI.SetFrameImage(frame4, DCEI.Texture("frame01_grey"))

local frame5 = DCEI.CreateFrame(vscroll_content)
DCEI.SetFrameSize(frame5, 100, 100)
DCEI.SetFrameImage(frame5, DCEI.Texture("frame01_yellow"))
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateVStackFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createvstackframe-1)
- [GetScrollFrameContent](#getscrollframecontent-1)
- [SetScrollFrameScrollPosition](#setscrollframescrollposition-2)
- [GetScrollFrameScrollPosition](#getscrollframescrollposition-1)
- [SetScrollFrameScrollInertia](#setscrollframescrollinertia-2)
- [SetScrollFrameScrollEnable()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setscrollframescrollenable-2)
- [SetScrollFrameScrollDecelerationRate](#setscrollframescrolldecelerationrate-2)
- [SetScrollFrameScrollContentAlignment](#setscrollframescrollcontentalignment-2)
- [AnimateFrameScrollPosition](#animateframescrollposition-5)
[](extra-section-end)

## InGameUILayoutComponent CreateScrollFrame(InGameUILayoutComponent parent) {createscrollframe-1}
```cs
InGameUILayoutComponent CreateScrollFrame(InGameUILayoutComponent parent)
```
#### Description
[](description-start)
Creates a horizontally and vertically scrolling frame. Useful for making scrollable maps. Do not place content inside this frame directly, instead use [GetScrollFrameContent](#getscrollframecontent-1)] to fetch the content frame. By default, this frame type attempts to fill its parent size unless given explicit dimensions.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `parent` the parent frame.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local scroll_frame = DCEI.CreateScrollFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(scroll_frame, 500, 500)
DCEI.SetFrameImageColor(scroll_frame, {r = 1, g = 0, b = 0, a = 0.3})
DCEI.SetScrollFrameScrollInertia(scroll_frame, false)
local scroll_content = DCEI.GetScrollFrameContent(scroll_frame)

local big_content = DCEI.CreateFrame(scroll_content)
DCEI.SetFrameSize(big_content, 1000, 1000)
DCEI.SetFrameImageColor(big_content, {r = 0, g = 0, b = 1, a = 0.4})

local small_content = DCEI.CreateFrame(scroll_content)
DCEI.SetFrameSize(small_content, 100, 100)
DCEI.SetFrameImageColor(small_content, {r = 0, g = 1, b = 0, a = 0.4})
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [GetScrollFrameContent](#getscrollframecontent-1)
- [SetScrollFrameScrollPosition2D](#setscrollframescrollposition2d-2)
- [GetScrollFrameScrollPosition2D](#getscrollframescrollposition2d-1)
- [SetScrollFrameScrollInertia](#setscrollframescrollinertia-2)
- [SetScrollFrameScrollEnable()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setscrollframescrollenable-2)
- [SetScrollFrameScrollDecelerationRate](#setscrollframescrolldecelerationrate-2)
- [SetScrollFrameScrollContentAlignment](#setscrollframescrollcontentalignment-2)
- [AnimateFrameScrollPosition2D](#animateframescrollposition2d-5)
[](extra-section-end)

## int GetFrameIndexInParent(InGameUILayoutComponent item) {getframeindexinparent-1}
```cs
int GetFrameIndexInParent(InGameUILayoutComponent item)
```
#### Description
[](description-start)
Returns the given UI frame's child index in its parent UI frame. This can be useful for getting an item's position from within a stack.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `item` the UI frame to return the child index of.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local stack = DCEI.CreateHStackFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(stack, 100, 100)
        
local frame1 = DCEI.CreateFrame(stack)
DCEI.SetFrameSize(frame1, 100, 100)
DCEI.SetFrameImageColor(frame1, {r = 1, g = 0, b = 0, a = 0.4})
        
local frame2 = DCEI.CreateFrame(stack)
DCEI.SetFrameSize(frame2, 100, 100)
DCEI.SetFrameImageColor(frame2, {r = 1, g = 0, b = 0, a = 0.6})
        
local frame3 = DCEI.CreateFrame(stack)
DCEI.SetFrameSize(frame3, 100, 100)
DCEI.SetFrameImageColor(frame3, {r = 1, g = 0, b = 0, a = 0.8})
        
local frame4 = DCEI.CreateFrame(stack)
DCEI.SetFrameSize(frame4, 100, 100)
DCEI.SetFrameImageColor(frame4, {r = 0, g = 1, b = 0, a = 1})
        
local frame_index = DCEI.GetFrameIndexInParent(frame4)
DCEI.LogMessage("The child index of 'frame4' is: " .. frame_index)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameIndexInParent(InGameUILayoutComponent item, int index) {setframeindexinparent-2}
```cs
void SetFrameIndexInParent(InGameUILayoutComponent item, int index)
```
#### Description
[](description-start)
Sets the given UI frame's child index in its parent UI frame. If the new index already has a UI frame assigned to it, the frame will be inserted at the new position and its siblings indices will update to match the new order. Indices must be contiguous, trying to set a child's index to a non-contiguous index will just set it to the last contiguous index. The frame index is by default the order in which the child frames were created within the parent.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `item` the UI frame to set the child index of.
- *int* `index` the new child index.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local hscroll_frame = DCEI.CreateHScrollFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImage(hscroll_frame, DCEI.Texture("frame01"))
DCEI.SetFrameSize(hscroll_frame, 350, 120)

local hscroll_content = DCEI.GetScrollFrameContent(hscroll_frame)
DCEI.SetFrameSpacing(hscroll_content, 10)
DCEI.SetFramePadding(hscroll_content, 10)

local frame1 = DCEI.CreateFrame(hscroll_content)
DCEI.SetFrameSize(frame1, 100, 100)
DCEI.SetFrameImage(frame1, DCEI.Texture("frame01_blue"))

local frame2 = DCEI.CreateFrame(hscroll_content)
DCEI.SetFrameSize(frame2, 100, 100)
DCEI.SetFrameImage(frame2, DCEI.Texture("frame01_brown"))

local frame3 = DCEI.CreateFrame(hscroll_content)
DCEI.SetFrameSize(frame3, 100, 100)
DCEI.SetFrameImage(frame3, DCEI.Texture("frame01_purple"))
-- This will move 'frame3' to the first index, causing it to display first
DCEI.SetFrameIndexInParent(frame3, 1)

local frame4 = DCEI.CreateFrame(hscroll_content)
DCEI.SetFrameSize(frame4, 100, 100)
DCEI.SetFrameImage(frame4, DCEI.Texture("frame01_grey"))

local frame5 = DCEI.CreateFrame(hscroll_content)
DCEI.SetFrameSize(frame5, 100, 100)
DCEI.SetFrameImage(frame5, DCEI.Texture("frame01_yellow"))
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## int GetChildrenFrameCount(InGameUILayoutComponent parent) {getchildrenframecount-1}
```cs
int GetChildrenFrameCount(InGameUILayoutComponent parent)
```
#### Description
[](description-start)
Returns the number of child frames.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `parent` the UI frame to get the child frame count for. This can be called on the main scroll frame to get the number of child frames attached to its content frame.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local hscroll_frame = DCEI.CreateHScrollFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImage(hscroll_frame, DCEI.Texture("frame01"))
DCEI.SetFrameSize(hscroll_frame, 350, 120)

local hscroll_content = DCEI.GetScrollFrameContent(hscroll_frame)
DCEI.SetFrameSpacing(hscroll_content, 10)
DCEI.SetFramePadding(hscroll_content, 10)

local frame1 = DCEI.CreateFrame(hscroll_content)
DCEI.SetFrameSize(frame1, 100, 100)
DCEI.SetFrameImage(frame1, DCEI.Texture("frame01_blue"))

local frame2 = DCEI.CreateFrame(hscroll_content)
DCEI.SetFrameSize(frame2, 100, 100)
DCEI.SetFrameImage(frame2, DCEI.Texture("frame01_brown"))

local frame3 = DCEI.CreateFrame(hscroll_content)
DCEI.SetFrameSize(frame3, 100, 100)
DCEI.SetFrameImage(frame3, DCEI.Texture("frame01_purple"))

local frame4 = DCEI.CreateFrame(hscroll_content)
DCEI.SetFrameSize(frame4, 100, 100)
DCEI.SetFrameImage(frame4, DCEI.Texture("frame01_grey"))

local frame5 = DCEI.CreateFrame(hscroll_content)
DCEI.SetFrameSize(frame5, 100, 100)
DCEI.SetFrameImage(frame5, DCEI.Texture("frame01_yellow"))

local child_frame_count = DCEI.GetChildrenFrameCount(hscroll_frame)
DCEI.LogMessage("The number of child frames for 'hscroll_frame': " .. child_frame_count)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## InGameUILayoutComponent CreateButtonFrame(InGameUILayoutComponent parent) {createbuttonframe-1}
```cs
InGameUILayoutComponent CreateButtonFrame(InGameUILayoutComponent parent)
```
#### Description
[](description-start)
Creates a new button frame. By default, new buttons use a [SetFramePadding](#setframepadding-2) of 12 and `btn_green` as their [SetFrameImage](#setframeimage-2). This frame type has a default size of 0 and expands to fit any children.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `parent` the parent UI frame.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local button = DCEI.CreateButtonFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(button, 120, 50)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [SetButtonFrameEnableExpression](#setbuttonframeenableexpression-2)
- [SetOnDownCallback](Trigger-API-Reference-DCEI-Events-Input#setondowncallback-2)
- [SetOnUpCallback](Trigger-API-Reference-DCEI-Events-Input#setonupcallback-2)
- [SetOnClickCallback](Trigger-API-Reference-DCEI-Events-Input#setonclickcallback-2)
- [SetButtonFrameClickSound](#setbuttonframeclicksound-2)
- [SetPauseButtonFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#setpausemenuframe-1)
- [SetPauseMenuFrameResumeButton()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setpausemenuframeresumebutton-1)
- [SetPauseMenuFrameQuitButton()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setpausemenuframequitbutton-1)
- [SetPauseMenuFrameRestartButton()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setpausemenuframerestartbutton-1)
- [SetPauseMenuFramePlayLevelButton()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setpausemenuframeplaylevelbutton-3)
- [SetPauseMenuFrameSettingsButton()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setpausemenuframesettingsbutton-1)
[](extra-section-end)

## InGameUILayoutComponent CreateTextFrame(InGameUILayoutComponent parent) {createtextframe-1}
```cs
InGameUILayoutComponent CreateTextFrame(InGameUILayoutComponent parent)
```
#### Description
[](description-start)
Creates a new text frame. This frame type has a default size of 0 and expand to fit any children.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `parent` the parent UI frame.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local text = DCEI.CreateTextFrame(button)
DCEI.SetTextFrameText(text, "Button")
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [SetTextFrameRtlSupport](#settextframertlsupport-2)
- [SetTextFrameAlignment](#settextframealignment-2)
- [SetTextFrameWrapping](#settextframewrapping-2)
- [SetTextFrameOverflow](#settextframeoverflow-2)
- [SetTextFrameText](#settextframetext-2)
- [SetTextFrameTextExpression](#settextframetextexpression-2)
- [SetTextFrameFontSize](#settextframefontsize-2)
- [SetTextFrameFontSizeMin](#settextframefontsizemin-2)
- [SetTextFrameFontSizeMax](#settextframefontsizemax-2)
- [SetTextFrameColor](#settextframecolor-2)
- [SetTextFrameOutline](#settextframeoutline-2)
- [SetTextFrameShadow](#settextframeshadow-2)
- [SetTextFrameOutlineOutside](#settextframeoutlineoutside-2)
- [SetTextFrameOutlineColor](#settextframeoutlinecolor-2)
- [SetTextFrameOutlineWidth](#settextframeoutlinewidth-2)
- [SetTextFrameOutlineSoftness](#settextframeoutlinesoftness-2)
- [SetTextFrameShadowWidth](#settextframeshadowwidth-2)
- [SetTextFrameShadowColor](#settextframeshadowcolor-2)
- [SetTextFrameShadowSoftness](#settextframeshadowsoftness-2)
- [SetTextFrameShadowDirection](#settextframeshadowdirection-3)
[](extra-section-end)

## InGameUILayoutComponent CreateUserInputTextFrame(InGameUILayoutComponent parent) {createuserinputtextframe-1}
```cs
InGameUILayoutComponent CreateUserInputTextFrame(InGameUILayoutComponent parent)
```
#### Description
[](description-start)
Creates a new text frame that handles user inputted text with support for local keyboard data. This should be used to display any text that results from user input, such as a user-created username. This frame type has a default size of 0 and expand to fit any children.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `parent` the parent UI frame.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local input_text = DCEI.CreateUserInputTextFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(input_text, 200, 50)
DCEI.SetUserInputTextFrameText(input_text, "pretend I'm user input text")
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [SetUserInputTextFrameText](#setuserinputtextframetext-2)
- [SetUserInputTextFrameFontSize](#setuserinputtextframefontsize-2)
- [SetUserInputTextFrameColor](#setuserinputtextframecolor-2)
- [SetUserInputTextFrameWrapping](#setuserinputtextframewrapping-2)
[](extra-section-end)

## InGameUILayoutComponent CreateInputFrame(InGameUILayoutComponent parent) {createinputframe-1}
```cs
InGameUILayoutComponent CreateInputFrame(InGameUILayoutComponent parent)
```
#### Description
[](description-start)
Creates an input UI frame. By default, this frame type attempts to fill its parent size unless given explicit dimensions.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `parent` the parent UI frame.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local input = DCEI.CreateInputFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(input, 300, 50)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [GetInputFrameText](#getinputframetext-1)
- [SetInputFrameText()](#setinputframetext-2)
- [SetInputFrameFontSize](#setinputframefontsize-2)
- [SetInputFrameColor](#setinputframecolor-2)
- [SetInputFrameWrapping](#setinputframewrapping-2)
- [SetInputFramePlaceholder](#setinputframeplaceholder-2)
- [SetInputFramePlaceholderFontSize](#setinputframeplaceholderfontsize-2)
- [SetInputFramePlaceholderColor](#setinputframeplaceholdercolor-2)
- [SetInputFramePlaceholderOutline](#setinputframeplaceholderoutline-2)
[](extra-section-end)

## InGameUILayoutComponent CreateFrameFromXml(InGameUILayoutComponent parent, string name) {createframefromxml-2}
```cs
InGameUILayoutComponent CreateFrameFromXml(InGameUILayoutComponent parent, string name)
```
#### Description
[](description-start)
Creates new UI frame given an XML UI element name. XML UI elements are created in the UI Editor Window.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `parent` the parent UI frame.
- *string* `name` the name of the XML UI element to create the UI from.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- Creates the UI frame defined in Data/UI Tab as "MyCustomUi"
local custom_ui_frame = DCEI.CreateFrameFromXml(DCEI.GetUiRootFrame(), "MyCustomUi")
```

Children frames can be referenced with DCEI.GetChildFrameById
[](example-usage-end)

[](extra-section-start)
#### Related
- [Using XML For UI Guide](https://funovus.notion.site/Creating-Custom-UI-b4780e85ffb14ad98e0e34bb5a130e6d)
- [UI XML Attributes](Ui-XML)
[](extra-section-end)

## void UpdateFrame(InGameUILayoutComponent ui, object callback) {updateframe-2}
```cs
void UpdateFrame(InGameUILayoutComponent ui, object callback)
```
#### Description
[](description-start)
Used to help safely update inactive UI frames. Creating new UI frames should only be done when the parent frame (and all of its ancestors) are active to ensure the child's internal state is properly initialized. This API helps by enabling the given UI frame (and all of its ancestors), running the given callback function, and then restoring the original active state of the given UI frame. 
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the UI frame to update.
- *object* `callback` the callback function to run.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local inactive_parent = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameActive(inactive_parent, false)

local function CreateChildFrame()
  DCEI.CreateFrame(inactive_parent)
end

DCEI.UpdateFrame(inactive_parent, CreateChildFrame)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## object GetFrameState(InGameUILayoutComponent ui) {getframestate-1}
```cs
object GetFrameState(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Returns the XML UI [state](Ui-XML-State) as a table for the given UI element. Updating the table values in script will update the state of the UI element.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the UI frame to get the state of.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local custom_ui_frame = DCEI.CreateFrameFromXml(DCEI.GetUiRootFrame(), "MyCustomUi")
local state = DCEI.GetFrameState(custom_ui_frame)

-- updates any lua state conditions defined in the XML element that use the `mode` state
state.mode = "default"
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## object GetFrameController(InGameUILayoutComponent ui) {getframecontroller-1}
```cs
object GetFrameController(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
See [UI Controllers](https://funovus.notion.site/Animation-Previews-with-UI-Controllers-538d53a156174cfb949d05b561b78b28). Gets the Lua script responsible for controlling UI frame.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the UI frame to get the controller of.

[](parameters-end)

#### Example Usage
[](example-usage-start)
See [UI Controllers](https://funovus.notion.site/Animation-Previews-with-UI-Controllers-538d53a156174cfb949d05b561b78b28)
```xml
<Frame layout="flex" controller="controller" >
    <Frame width="400" height="400" backgroundImage="golden_pass_overview" />
</Frame>
```

```lua
-- In trigger.lua.txt
function CreateUi()
    local ui = DCEI.CreateFrameFromXml(DCEI.GetUiRootFrame(), "GoldenPass")
    -- Get a reference to the controller object.
    local controller = DCEI.GetFrameController(ui)
    while true do
        -- Call public functions defined on the controller object.
        controller:Animate()
        DCEI.Wait(2)
    end
end

-- In controller.lua.txt
return function(ui)
    local controller = {}

    -- Define handlers of OnEnable/OnDisable event.
    -- This implementation adds a floating animation to the UI frame.
    function controller:OnEnable()
        DCEI.LogMessage("Enable")
    end
    function controller:OnDisable()
        DCEI.LogMessage("Disable")
    end

    -- Define the public interface of this controller. This one only has a single Animate function.
    function controller:Animate()
    local s1, s2 = { x = 1, y = 1, z = 1 }, { x = 0.8, y = 0.8, z = 0.8 }
    local duration = 1
    local ease = "Linear"
    local size_anim = DCEI.AnimateFrameScale(ui, s1, s2, duration, ease)
    end

    -- This OnPreview function will be called automatically when viewed in the UI previewer.
    function controller:OnPreview()
        DCEI.LogMessage("Preview")
    end

    return controller
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## InGameUILayoutComponent GetChildFrameById(InGameUILayoutComponent ui, string id) {getchildframebyid-2}
```cs
InGameUILayoutComponent GetChildFrameById(InGameUILayoutComponent ui, string id)
```
#### Description
[](description-start)
Returns XML UI frames by their ID. Useful for accessing child frames of an XML UI frame.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the parent XML UI frame.
- *string* `id` the type of the child UI frame.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local parent = DCEI.CreateFrameFromXml(DCEI.GetUiRootFrame(), "MyCustomUi")
local button_frame = DCEI.GetChildFrameById(parent, "button")
```
Source XML (MyCustomUi)
```xml
<HStack>
    <Frame backgroundImage="banner03_gray" padding="40">
        <Text id="text" text="left" color="r: 1, g: 0.5, b: 1"/>
    </Frame>
    <Button id="button" backgroundImage="arrow01_r" width="72" height="94"/>
</HStack>
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## string GetXmlConstant(string name) {getxmlconstant-1}
```cs
string GetXmlConstant(string name)
```
#### Description
[](description-start)
Gets the value of a constant, as defined in the UI xml data. 
[](description-end)

#### Parameters
[](parameters-start)
- *string* `name` name of the XML UI data constant.

[](parameters-end)

#### Example Usage
[](example-usage-start)
![image](https://user-images.githubusercontent.com/56179268/211835341-7e5cff66-0144-4835-8839-947be040ab29.png)

```lua
    local my_color = DCEI.GetXmlConstant("ConstantColor)
    DCEI.LogMessage(my_color) -- will print "#ff00ffff" to log
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## object GetXmlFrames() {getxmlframes-0}
```cs
object GetXmlFrames()
```
#### Description
[](description-start)
Returns a table of all XML UI frames defined in the Data Window. Note that this only returns the top level frames and not their children.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
-- Returns a list of all XML frames created in data
local frames = DCEI.GetXmlFrames()
--[[
    Output format:
{ 
    [1] = { 
        ["frame_type"] = Frame,
        ["name"] = Frame,
    } ,
    [2] = { 
        ["frame_type"] = Frame,
        ["name"] = block,
    } ,
} 
]]

-- Returns a list of the parent frame and child frames of "card" - the parent frame "card" will be the first frame in the list
local children = DCEI.GetChildrenFramesIdAndFrameType(card)
-- The output format is the same as GetXmlFrames()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## object GetChildrenFramesIdAndFrameType(InGameUILayoutComponent ui) {getchildrenframesidandframetype-1}
```cs
object GetChildrenFramesIdAndFrameType(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Returns a table of child XML UI frames.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the parent XML UI frame.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local parent = DCEI.CreateFrameFromXml(DCEI.GetUiRootFrame(), "MyCustomUi")
local child_frames = DCEI.GetChildrenFramesIdAndFrameType(parent)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## bool IsUiRootFrame(InGameUILayoutComponent ui) {isuirootframe-1}
```cs
bool IsUiRootFrame(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Returns true if the given UI frame is a top-level XML UI frame.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the XMl UI frame to check.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local parent = DCEI.CreateFrameFromXml(DCEI.GetUiRootFrame(), "MyCustomUi")

local xml_root = DCEI.IsUiRootFrame(parent)
DCEI.LogMessage(tostring(xml_root))
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetCameraFrameViewportSize(InGameUILayoutComponent ui, int x, int y, bool discardDepth = False) {setcameraframeviewportsize-4}
```cs
void SetCameraFrameViewportSize(InGameUILayoutComponent ui, int x, int y, bool discardDepth = False)
```
#### Description
[](description-start)
Sets the resolution of a camera frame UI. The resolution values are not capped, but excessively high resolutions will consume large amounts of RAM. The default resolution is 0.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the camera frame UI to set the size of.
- *int* `x` the X resolution.
- *int* `y` the Y resolution.
- *bool* `discardDepth` if true, discards the camera depth. This parameter is optional, and defaults to false.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local unit = DCEI.CreateUnit(1, 1, DCEI.Unit("Standard MeleeUnit"), 16, 12, 0, -1)

local container = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImage(container, DCEI.Texture("frame01"))
DCEI.SetFramePadding(container, 10)
DCEI.SetFrameTopAlignmentInParent(container)
DCEI.SetFrameLeftAlignmentInParent(container)
    
local camera = DCEI.CreateCameraFrame(container)
DCEI.SetFrameSize(camera, 150, 150)
DCEI.SetCameraFrameViewportSize(camera, 200, 200)
DCEI.SetCameraFrameViewportWorldPosition(camera, 16, 1, 11)
DCEI.SetCameraFrameViewportRotation(camera, 35, 0, 0)

DCEI.TriggerAddTimerEventElapsed(
    function()
        DCEI.SetCameraFrameViewportSize(camera, 50, 50)
    end,
    1, true
)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateCameraFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createcameraframe-1)
[](extra-section-end)

## void SetCameraFrameViewportWorldPosition(InGameUILayoutComponent ui, float x, float y, float z) {setcameraframeviewportworldposition-4}
```cs
void SetCameraFrameViewportWorldPosition(InGameUILayoutComponent ui, float x, float y, float z)
```
#### Description
[](description-start)
Sets the position of a camera frame UI. The default position for a new camera frame is {0, 0, 0}.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the camera frame UI to set the size of.
- *float* `x` the new X coordinate.
- *float* `y` the new Y coordinate.
- *float* `z` the new Z coordinate.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local unit = DCEI.CreateUnit(1, 1, DCEI.Unit("Standard MeleeUnit"), 16, 12, 0, -1)

local container = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImage(container, DCEI.Texture("frame01"))
DCEI.SetFramePadding(container, 10)
DCEI.SetFrameTopAlignmentInParent(container)
DCEI.SetFrameLeftAlignmentInParent(container)

local camera = DCEI.CreateCameraFrame(container)
DCEI.SetFrameSize(camera, 150, 150)
DCEI.SetCameraFrameViewportSize(camera, 200, 200)
DCEI.SetCameraFrameViewportWorldPosition(camera, 16, 1, 11)
DCEI.SetCameraFrameViewportRotation(camera, 35, 0, 0)

DCEI.TriggerAddTimerEventElapsed(
    function()
        DCEI.SetCameraFrameViewportWorldPosition(camera, 16, 1, 10)
    end,
    1, true
)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateCameraFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createcameraframe-1)
[](extra-section-end)

## void SetCameraFrameViewportRotation(InGameUILayoutComponent ui, float x, float y, float z) {setcameraframeviewportrotation-4}
```cs
void SetCameraFrameViewportRotation(InGameUILayoutComponent ui, float x, float y, float z)
```
#### Description
[](description-start)
Sets the rotation of a camera frame UI. The default rotation for a new camera frame is {0, 0, 0}.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the camera frame UI to set the rotation of.
- *float* `x` the rotation about the X axis in degrees. A value of 180 will make the camera face backwards and be flipped vertically.
- *float* `y` the rotation about the Y axis in degrees. A value of 180 will make the camera face backwards.
- *float* `z` the rotation about the Z axis rotation in degrees. A value of 180 will make the camera be flipped vertically.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local unit = DCEI.CreateUnit(1, 1, DCEI.Unit("Standard MeleeUnit"), 16, 12, 0, -1)

local container = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImage(container, DCEI.Texture("frame01"))
DCEI.SetFramePadding(container, 10)
DCEI.SetFrameTopAlignmentInParent(container)
DCEI.SetFrameLeftAlignmentInParent(container)

local camera = DCEI.CreateCameraFrame(container)
DCEI.SetFrameSize(camera, 150, 150)
DCEI.SetCameraFrameViewportSize(camera, 200, 200)
DCEI.SetCameraFrameViewportWorldPosition(camera, 16, 1, 11)
DCEI.SetCameraFrameViewportRotation(camera, 35, 0, 0)

DCEI.TriggerAddTimerEventElapsed(
    function()
        DCEI.SetCameraFrameViewportRotation(camera, 35, 30, 0)
    end,
    1, true
)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateCameraFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createcameraframe-1)
[](extra-section-end)

## void SetGridFrameCellWidth(InGameUILayoutComponent ui, float width) {setgridframecellwidth-2}
```cs
void SetGridFrameCellWidth(InGameUILayoutComponent ui, float width)
```
#### Description
[](description-start)
Sets the cell width for a grid.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the grid UI frame.
- *float* `width` the width of a grid cell.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local grid = DCEI.CreateGridFrame(DCEI.GetUiRootFrame())
DCEI.SetGridFrameCellHeight(grid, 100)
DCEI.SetGridFrameCellWidth(grid, 100)
DCEI.SetFrameSize(grid, 200, 200)

local content1 = DCEI.CreateTextFrame(grid)
DCEI.SetTextFrameText(content1, "a")
DCEI.SetFrameSize(content1, 100, 100)
local content2 = DCEI.CreateTextFrame(grid)
DCEI.SetTextFrameText(content2, "b")
DCEI.SetFrameSize(content2, 100, 100)
local content3 = DCEI.CreateTextFrame(grid)
DCEI.SetTextFrameText(content3, "c")
DCEI.SetFrameSize(content3, 100, 100)
local content4 = DCEI.CreateTextFrame(grid)
DCEI.SetTextFrameText(content4, "d")
DCEI.SetFrameSize(content4, 100, 100)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateGridFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#creategridframe-1)
[](extra-section-end)

## void SetGridFrameCellHeight(InGameUILayoutComponent ui, float height) {setgridframecellheight-2}
```cs
void SetGridFrameCellHeight(InGameUILayoutComponent ui, float height)
```
#### Description
[](description-start)
Sets the cell height for a grid.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the grid UI frame.
- *float* `height` the height of a grid cell.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local grid = DCEI.CreateGridFrame(DCEI.GetUiRootFrame())
DCEI.SetGridFrameCellHeight(grid, 100)
DCEI.SetGridFrameCellWidth(grid, 100)
DCEI.SetFrameSize(grid, 200, 200)

local content1 = DCEI.CreateTextFrame(grid)
DCEI.SetTextFrameText(content1, "a")
DCEI.SetFrameSize(content1, 100, 100)
local content2 = DCEI.CreateTextFrame(grid)
DCEI.SetTextFrameText(content2, "b")
DCEI.SetFrameSize(content2, 100, 100)
local content3 = DCEI.CreateTextFrame(grid)
DCEI.SetTextFrameText(content3, "c")
DCEI.SetFrameSize(content3, 100, 100)
local content4 = DCEI.CreateTextFrame(grid)
DCEI.SetTextFrameText(content4, "d")
DCEI.SetFrameSize(content4, 100, 100)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateGridFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#creategridframe-1)
[](extra-section-end)

## Tweener AnimateCameraFrameViewportWorldPosition(InGameUILayoutComponent ui, float x, float y, float z, float duration, Ease ease) {animatecameraframeviewportworldposition-6}
```cs
Tweener AnimateCameraFrameViewportWorldPosition(InGameUILayoutComponent ui, float x, float y, float z, float duration, Ease ease)
```
#### Description
[](description-start)
Animates a camera frame UI to a new position. Returns the UI animation for use in [SetFrameAnimationLoops](#setframeanimationloops-3) and [StopFrameAnimationLoops](#stopframeanimationloops-2).
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the camera frame UI to set the size of.
- *float* `x` the new X coordinate.
- *float* `y` the new Y coordinate.
- *float* `z` the new Z coordinate.
- *float* `duration` the duration of the camera frame animation. A duration of 0 will make the animation instant.
- *[Ease](Trigger-API-Reference-DCEI-Types#ease)* `ease` the easing function to use for the animation. See https://easings.net/en for examples.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local unit = DCEI.CreateUnit(1, 1, DCEI.Unit("Standard MeleeUnit"), 16, 12, 0, -1)

local container = DCEI.CreateVStackFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImage(container, DCEI.Texture("frame01"))
DCEI.SetFramePadding(container, 10)
DCEI.SetFrameTopAlignmentInParent(container)
DCEI.SetFrameLeftAlignmentInParent(container)
    
local camera = DCEI.CreateCameraFrame(container)
DCEI.SetFrameSize(camera, 150, 150)
DCEI.SetCameraFrameViewportSize(camera, 200, 200)
DCEI.SetCameraFrameViewportWorldPosition(camera, 16, 1, 11)
DCEI.SetCameraFrameViewportRotation(camera, 35, 0, 0)
    
local btn = DCEI.CreateButtonFrame(container)
DCEI.SetFrameSize(btn, 150, 80)
DCEI.SetOnClickCallback(btn, OnClick)

local text = DCEI.CreateTextFrame(btn)
DCEI.SetTextFrameText(text, "Animate")

local state = 0
DCEI.SetOnClickCallback(
    btn,
    function()
        local duration =  0.25
        local ease = "Linear"
        
        if state == 0 then
            DCEI.AnimateCameraFrameViewportWorldPosition(camera, 16, 0.75, 11.5, duration, ease)
            state = 1
        else
            DCEI.AnimateCameraFrameViewportWorldPosition(camera, 16, 1, 11, duration, ease)
            state = 0
        end
    end
)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## Tweener AnimateCameraFrameViewportRotation(InGameUILayoutComponent ui, float x, float y, float z, float duration, Ease ease) {animatecameraframeviewportrotation-6}
```cs
Tweener AnimateCameraFrameViewportRotation(InGameUILayoutComponent ui, float x, float y, float z, float duration, Ease ease)
```
#### Description
[](description-start)

[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the camera frame UI to set the size of.
- *float* `x` the new X coordinate.
- *float* `y` the new Y coordinate.
- *float* `z` the new Z coordinate.
- *float* `duration` the duration of the camera frame animation. A duration of 0 will make the animation instant.
- *[Ease](Trigger-API-Reference-DCEI-Types#ease)* `ease` the easing function to use for the animation. See https://easings.net/en for examples.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local unit = DCEI.CreateUnit(1, 1, DCEI.Unit("Standard MeleeUnit"), 16, 12, 0, -1)

local container = DCEI.CreateVStackFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImage(container, DCEI.Texture("frame01"))
DCEI.SetFramePadding(container, 10)
DCEI.SetFrameTopAlignmentInParent(container)
DCEI.SetFrameLeftAlignmentInParent(container)

local camera = DCEI.CreateCameraFrame(container)
DCEI.SetFrameSize(camera, 150, 150)
DCEI.SetCameraFrameViewportSize(camera, 200, 200)
DCEI.SetCameraFrameViewportOrthographic(camera, true)
DCEI.SetCameraFrameOrthographicViewportSize(camera, 1)
DCEI.SetCameraFrameViewportWorldPosition(camera, 16, 1, 11)
DCEI.SetCameraFrameViewportRotation(camera, 35, 0, 0)

DCEI.AnimateCameraFrameViewportRotation(camera, 60, 30, 10, 3, "Linear")
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## Tweener AnimateCameraFrameOrthographicViewportSize(InGameUILayoutComponent ui, float size, float duration, Ease ease) {animatecameraframeorthographicviewportsize-4}
```cs
Tweener AnimateCameraFrameOrthographicViewportSize(InGameUILayoutComponent ui, float size, float duration, Ease ease)
```
#### Description
[](description-start)
Animates a camera frame UI to a new orthographic size. Returns the UI animation for use in [SetFrameAnimationLoops](#setframeanimationloops-3) and [StopFrameAnimationLoops](#stopframeanimationloops-2).
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the camera frame UI to set the rotation of.
- *float* `size` the new orthographic size.
- *float* `duration` the duration of the camera frame animation. A duration of 0 will make the animation instant.
- *[Ease](Trigger-API-Reference-DCEI-Types#ease)* `ease` the easing function to use for the animation. See https://easings.net/en for examples.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local unit = DCEI.CreateUnit(1, 1, DCEI.Unit("Standard MeleeUnit"), 16, 12, 0, -1)

local container = DCEI.CreateVStackFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImage(container, DCEI.Texture("frame01"))
DCEI.SetFramePadding(container, 10)
DCEI.SetFrameTopAlignmentInParent(container)
DCEI.SetFrameLeftAlignmentInParent(container)
    
local camera = DCEI.CreateCameraFrame(container)
DCEI.SetFrameSize(camera, 150, 150)
DCEI.SetCameraFrameViewportSize(camera, 200, 200)
DCEI.SetCameraFrameViewportOrthographic(camera, true)
DCEI.SetCameraFrameOrthographicViewportSize(camera, 1)
DCEI.SetCameraFrameViewportWorldPosition(camera, 16, 1, 11)
DCEI.SetCameraFrameViewportRotation(camera, 35, 0, 0)
    
DCEI.AnimateCameraFrameOrthographicViewportSize(camera, 2, 5, "Linear")
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateCameraFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createcameraframe-1)
- [SetFrameAnimationLoops](#setframeanimationloops-3)
- [StopFrameAnimationLoops](#stopframeanimationloops-2)
- [SetCameraFrameViewportOrthographic](#setcameraframeviewportorthographic-2)
- [SetCameraFrameOrthographicViewportSize](#setcameraframeorthographicviewportsize-2)
[](extra-section-end)

## void SetCameraFrameCullingMask(InGameUILayoutComponent ui, int mask) {setcameraframecullingmask-2}
```cs
void SetCameraFrameCullingMask(InGameUILayoutComponent ui, int mask)
```
#### Description
[](description-start)
Sets a culling mask for a camera frame that can be used to remove rendering layers from a camera frame.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the camera frame.
- *int* `mask` the culling mask to apply. Odd values will remove the terrain, even values will remove everything.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local unit = DCEI.CreateUnit(1, 1, DCEI.Unit("Standard MeleeUnit"), 16, 12, 0, -1)

local container = DCEI.CreateVStackFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImage(container, DCEI.Texture("frame01"))
DCEI.SetFramePadding(container, 10)
DCEI.SetFrameTopAlignmentInParent(container)
DCEI.SetFrameLeftAlignmentInParent(container)

local camera = DCEI.CreateCameraFrame(container)
DCEI.SetFrameSize(camera, 150, 150)
DCEI.SetCameraFrameViewportSize(camera, 200, 200)
DCEI.SetCameraFrameViewportWorldPosition(camera, 16, 1, 11)
DCEI.SetCameraFrameViewportRotation(camera, 35, 0, 0)
DCEI.SetCameraFrameCullingMask(camera, 1)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateCameraFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createcameraframe-1)
[](extra-section-end)

## void SetCameraFrameBackgroundColor(InGameUILayoutComponent ui, ColorRGBA color) {setcameraframebackgroundcolor-2}
```cs
void SetCameraFrameBackgroundColor(InGameUILayoutComponent ui, ColorRGBA color)
```
#### Description
[](description-start)
Set background color for a camera frame.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the camera frame.
- *[ColorRGBA](Trigger-API-Reference-DCEI-Types#colorrgba)* `color` the RGBA values. Also accepts hex codes, such as `"#32a852"`

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local camera = DCEI.CreateCameraFrame(container)
DCEI.SetCameraFrameBackgroundColor(camera, {r = 0.5, g = 0.5, b = 0, a = 0.5})
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetCameraFrameViewportOrthographic(InGameUILayoutComponent ui, bool set) {setcameraframeviewportorthographic-2}
```cs
void SetCameraFrameViewportOrthographic(InGameUILayoutComponent ui, bool set)
```
#### Description
[](description-start)
Enables orthographic view for a camera frame. Note that orthographic camera size must be set independently using DCEI.SetCameraFrameOrthographicViewportSize().
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the camera frame.
- *bool* `set` if true, enables orthographic view.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local unit = DCEI.CreateUnit(1, 1, DCEI.Unit("Standard MeleeUnit"), 16, 12, 0, -1)

local container = DCEI.CreateVStackFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImage(container, DCEI.Texture("frame01"))
DCEI.SetFramePadding(container, 10)
DCEI.SetFrameTopAlignmentInParent(container)
DCEI.SetFrameLeftAlignmentInParent(container)

local camera = DCEI.CreateCameraFrame(container)
DCEI.SetFrameSize(camera, 150, 150)
DCEI.SetCameraFrameViewportSize(camera, 200, 200)
DCEI.SetCameraFrameViewportWorldPosition(camera, 16, 1, 11)
DCEI.SetCameraFrameViewportRotation(camera, 35, 0, 0)
DCEI.SetCameraFrameViewportOrthographic(camera, true)
DCEI.SetCameraFrameOrthographicViewportSize(camera, 1)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateCameraFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createcameraframe-1)
- [SetCameraFrameOrthographicViewportSize](#setcameraframeorthographicviewportsize-2)
[](extra-section-end)

## void SetCameraFrameOrthographicViewportSize(InGameUILayoutComponent ui, float size) {setcameraframeorthographicviewportsize-2}
```cs
void SetCameraFrameOrthographicViewportSize(InGameUILayoutComponent ui, float size)
```
#### Description
[](description-start)
Sets the orthographic size for a camera frame.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the camera frame.
- *float* `size` the orthographic size.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local unit = DCEI.CreateUnit(1, 1, DCEI.Unit("Standard MeleeUnit"), 16, 12, 0, -1)

local container = DCEI.CreateVStackFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImage(container, DCEI.Texture("frame01"))
DCEI.SetFramePadding(container, 10)
DCEI.SetFrameTopAlignmentInParent(container)
DCEI.SetFrameLeftAlignmentInParent(container)
    
local camera = DCEI.CreateCameraFrame(container)
DCEI.SetFrameSize(camera, 150, 150)
DCEI.SetCameraFrameViewportSize(camera, 200, 200)
DCEI.SetCameraFrameViewportWorldPosition(camera, 16, 1, 11)
DCEI.SetCameraFrameViewportRotation(camera, 35, 0, 0)
DCEI.SetCameraFrameViewportOrthographic(camera, true)
DCEI.SetCameraFrameOrthographicViewportSize(camera, 1)
    
DCEI.TriggerAddTimerEventElapsed(
    function()
        DCEI.SetCameraFrameOrthographicViewportSize(camera, 2)
    end,
    1, true
)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateCameraFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createcameraframe-1)
- [SetCameraFrameViewportOrthographic](Trigger-API-Reference-DCEI-Functions-Custom-UI#setcameraframeviewportorthographic-2)
[](extra-section-end)

## InGameUILayoutComponent CreateMiniMapFrame(InGameUILayoutComponent parent, bool hideTerrain = False) {createminimapframe-2}
```cs
InGameUILayoutComponent CreateMiniMapFrame(InGameUILayoutComponent parent, bool hideTerrain = False)
```
#### Description
[](description-start)
Creates a minimap frame. Use `CameraFrame` functions to modify the frame. The default resolution for the minimap is 1x1.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `parent` the parent frame.
- *bool* `hideTerrain` if true, hides the terrain.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local minimap = DCEI.CreateMiniMapFrame(DCEI.GetUiRootFrame(), false)
DCEI.SetCameraFrameViewportSize(minimap, 500, 500)
DCEI.SetFrameSize(minimap, 200, 200)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [SetCameraFrameViewportSize](Trigger-API-Reference-DCEI-Functions-Custom-UI#setcameraframeviewportsize-4)
- [SetCameraFrameViewportWorldPosition](Trigger-API-Reference-DCEI-Functions-Custom-UI#setcameraframeviewportworldposition-4)
- [SetCameraFrameViewportRotation](Trigger-API-Reference-DCEI-Functions-Custom-UI#setcameraframeviewportrotation-4)
- [AnimateCameraFrameViewportWorldPosition](Trigger-API-Reference-DCEI-Functions-Custom-UI#animatecameraframeviewportworldposition-6)
- [AnimateCameraFrameViewportRotation](Trigger-API-Reference-DCEI-Functions-Custom-UI#animatecameraframeviewportrotation-6)
- [AnimateCameraFrameOrthographicViewportSize](Trigger-API-Reference-DCEI-Functions-Custom-UI#animatecameraframeorthographicviewportsize-4)
- [SetCameraFrameCullingMask](Trigger-API-Reference-DCEI-Functions-Custom-UI#setcameraframecullingmask-2)
- [SetCameraFrameBackgroundColor](Trigger-API-Reference-DCEI-Functions-Custom-UI#setcameraframebackgroundcolor-2)
- [SetCameraFrameViewportOrthographic](Trigger-API-Reference-DCEI-Functions-Custom-UI#setcameraframeviewportorthographic-2)
- [SetCameraFrameOrthographicViewportSize](Trigger-API-Reference-DCEI-Functions-Custom-UI#setcameraframeorthographicviewportsize-2)
- [CreateMiniMapFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createminimapframe-2)
- [Unit Mini Map Config](Data-Unit#mini-map-config)
[](extra-section-end)

## void SetCameraFrameEffectColor(InGameUILayoutComponent ui, ColorRGB color, float saturation, float contrast, float brightness) {setcameraframeeffectcolor-5}
```cs
void SetCameraFrameEffectColor(InGameUILayoutComponent ui, ColorRGB color, float saturation, float contrast, float brightness)
```
#### Description
[](description-start)
Set effect color for a camera frame.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the camera frame.
- *[ColorRGB](Trigger-API-Reference-DCEI-Types#colorrgb)* `color` the RGB values. Also accepts hex values such as `"#32a852"`
- *float* `saturation` the saturation of color effect.
- *float* `contrast` the contrast of color effect.
- *float* `brightness` the brightness of color effect.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local camera = DCEI.CreateCameraFrame(container)
DCEI.SetCameraFrameEffectColor(camera, {r = 0.5, g = 0.5, b = 0}, 1, 0.5, 1)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## InGameUILayoutComponent GetScrollFrameContent(InGameUILayoutComponent parent) {getscrollframecontent-1}
```cs
InGameUILayoutComponent GetScrollFrameContent(InGameUILayoutComponent parent)
```
#### Description
[](description-start)
Returns the content frame of a scroll frame.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `parent` the scroll frame.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local scroll = DCEI.CreateScrollFrame(DCEI.GetUiRootFrame())
local content = DCEI.GetScrollFrameContent(scroll)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateHScrollFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createhscrollframe-1)
- [CreateVScrollFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createvscrollframe-1)
- [CreateScrollFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createscrollframe-1)
[](extra-section-end)

## void SetScrollFrameScrollPosition(InGameUILayoutComponent ui, float position) {setscrollframescrollposition-2}
```cs
void SetScrollFrameScrollPosition(InGameUILayoutComponent ui, float position)
```
#### Description
[](description-start)
Sets the scroll position for an [CreateHScrollFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createhscrollframe-1) or [CreateVScrollFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createvscrollframe-1) frames.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the scroll frame (not the scroll content frame).
- *float* `position` the offset to set the scroll to.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local vscroll_frame = DCEI.CreateVScrollFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(vscroll_frame, 200, 300)
DCEI.SetFrameImageColor(vscroll_frame, {r = 1, g = 0, b = 0, a = 0.3})
DCEI.SetScrollFrameScrollPosition(vscroll_frame, 300)

local content = DCEI.GetScrollFrameContent(vscroll_frame)
local frame1 = DCEI.CreateFrame(content)
DCEI.SetFrameSize(frame1, 150, 400)
DCEI.SetFrameImageColor(frame1, {r = 1, g = 0, b = 0, a = 1})

local frame2 = DCEI.CreateFrame(content)
DCEI.SetFrameSize(frame2, 150, 400)
DCEI.SetFrameImageColor(frame2, {r = 0, g = 0, b = 1, a = 1})
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateHScrollFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createhscrollframe-1)
- [CreateVScrollFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createvscrollframe-1)
- [GetScrollFrameScrollPosition](#getscrollframescrollposition-1)
[](extra-section-end)

## float GetScrollFrameScrollPosition(InGameUILayoutComponent ui) {getscrollframescrollposition-1}
```cs
float GetScrollFrameScrollPosition(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Returns the position of a scroll frame.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the scroll frame (not the scroll content frame).

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local vscroll_frame = DCEI.CreateVScrollFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(vscroll_frame, 200, 300)
DCEI.SetFrameImageColor(vscroll_frame, {r = 1, g = 0, b = 0, a = 0.3})
DCEI.SetScrollFrameScrollPosition(vscroll_frame, 300)

local content = DCEI.GetScrollFrameContent(vscroll_frame)
local frame1 = DCEI.CreateFrame(content)
DCEI.SetFrameSize(frame1, 150, 400)
DCEI.SetFrameImageColor(frame1, {r = 1, g = 0, b = 0, a = 1})

local frame2 = DCEI.CreateFrame(content)
DCEI.SetFrameSize(frame2, 150, 400)
DCEI.SetFrameImageColor(frame2, {r = 0, g = 0, b = 1, a = 1})

local scroll_pos = DCEI.GetScrollFrameScrollPosition(vscroll_frame)
DCEI.LogMessage(scroll_pos)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateHScrollFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createhscrollframe-1)
- [CreateVScrollFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createvscrollframe-1)
- [SetScrollFrameScrollPosition](Trigger-API-Reference-DCEI-Functions-Custom-UI#setscrollframescrollposition-2)
[](extra-section-end)

## void SetScrollFrameScrollPosition2D(InGameUILayoutComponent ui, Float2 position) {setscrollframescrollposition2d-2}
```cs
void SetScrollFrameScrollPosition2D(InGameUILayoutComponent ui, Float2 position)
```
#### Description
[](description-start)
Sets the position of a [CreateScrollFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createscrollframe-1) frame.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the scroll frame (not the scroll content frame).
- *[Float2](Trigger-API-Reference-DCEI-Types#float2)* `position` the new scroll position.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local scroll = DCEI.CreateScrollFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(scroll, 500, 500)
DCEI.SetFrameImageColor(scroll, {r = 1, g = 0, b = 0, a = 0.3})

local content = DCEI.GetScrollFrameContent(scroll)
local big_content = DCEI.CreateFrame(content)
DCEI.SetFrameSize(big_content, 1000, 1000)
DCEI.SetFrameImageColor(big_content, {r = 0, g = 0, b = 1, a = 0.4})

local small_content = DCEI.CreateFrame(content)
DCEI.SetFrameSize(small_content, 100, 100)
DCEI.SetFrameImageColor(small_content, {r = 0, g = 1, b = 0, a = 0.4})

DCEI.SetScrollFrameScrollPosition2D(scroll, {x = 0, y = 500})
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateScrollFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createscrollframe-1)
- [GetScrollFrameScrollPosition2D()](Trigger-API-Reference-DCEI-Functions-Custom-UI#getscrollframescrollposition2d-1)
[](extra-section-end)

## Float2 GetScrollFrameScrollPosition2D(InGameUILayoutComponent ui) {getscrollframescrollposition2d-1}
```cs
Float2 GetScrollFrameScrollPosition2D(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Returns the position of a [CreateScrollFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createscrollframe-1) frame.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the scroll frame (not the scroll content frame).

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local scroll = DCEI.CreateScrollFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(scroll, 500, 500)
DCEI.SetFrameImageColor(scroll, {r = 1, g = 0, b = 0, a = 0.3})

local content = DCEI.GetScrollFrameContent(scroll)
local big_content = DCEI.CreateFrame(content)
DCEI.SetFrameSize(big_content, 1000, 1000)
DCEI.SetFrameImageColor(big_content, {r = 0, g = 0, b = 1, a = 0.4})

local small_content = DCEI.CreateFrame(content)
DCEI.SetFrameSize(small_content, 100, 100)
DCEI.SetFrameImageColor(small_content, {r = 0, g = 1, b = 0, a = 0.4})
DCEI.SetScrollFrameScrollPosition2D(scroll, {x = 0, y = 500})

local scroll_pos = DCEI.GetScrollFrameScrollPosition2D(scroll)
DCEI.LogMessage("Scroll X position: " .. scroll_pos.x .. "\nScroll Y position: " .. scroll_pos.y)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateScrollFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createscrollframe-1)
- [SetScrollFrameScrollPosition2D](Trigger-API-Reference-DCEI-Functions-Custom-UI#setscrollframescrollposition2d-2)
[](extra-section-end)

## void SetScrollFrameScrollInertia(InGameUILayoutComponent ui, bool value) {setscrollframescrollinertia-2}
```cs
void SetScrollFrameScrollInertia(InGameUILayoutComponent ui, bool value)
```
#### Description
[](description-start)
Sets the inertia for a scroll frame. This is supported for all scroll frame types.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the scroll frame (not the scroll content frame).
- *bool* `value` if true, the frame's content will decelerate instead of stopping when scrolling stops. This is true by default for newly created scroll frames.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local scroll = DCEI.CreateScrollFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(scroll, 500, 500)
DCEI.SetFrameImageColor(scroll, {r = 1, g = 0, b = 0, a = 0.3})
DCEI.SetScrollFrameScrollInertia(scroll, false)

local content = DCEI.GetScrollFrameContent(scroll)
local big_content = DCEI.CreateFrame(content)
DCEI.SetFrameSize(big_content, 1000, 1000)
DCEI.SetFrameImageColor(big_content, {r = 0, g = 0, b = 1, a = 0.4})

local small_content = DCEI.CreateFrame(content)
DCEI.SetFrameSize(small_content, 100, 100)
DCEI.SetFrameImageColor(small_content, {r = 0, g = 1, b = 0, a = 0.4})
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateHScrollFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createhscrollframe-1)
- [CreateVScrollFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createvscrollframe-1)
- [CreateScrollFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createscrollframe-1)
- [SetScrollFrameScrollDecelerationRate](#setscrollframescrolldecelerationrate-2)
[](extra-section-end)

## void SetScrollFrameScrollEnable(InGameUILayoutComponent ui, bool value) {setscrollframescrollenable-2}
```cs
void SetScrollFrameScrollEnable(InGameUILayoutComponent ui, bool value)
```
#### Description
[](description-start)
Sets whether scrolling is enabled. This is supported for all scroll frame types.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the scroll frame (not the scroll content frame).
- *bool* `value` if true, enables scrolling for the scroll element. This is true by default for newly created scroll frames.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local scroll = DCEI.CreateScrollFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(scroll, 500, 500)
DCEI.SetFrameImageColor(scroll, {r = 1, g = 0, b = 0, a = 0.3})
DCEI.SetScrollFrameScrollEnable(scroll, false)

local content = DCEI.GetScrollFrameContent(scroll)
local big_content = DCEI.CreateFrame(content)
DCEI.SetFrameSize(big_content, 1000, 1000)
DCEI.SetFrameImageColor(big_content, {r = 0, g = 0, b = 1, a = 0.4})

local small_content = DCEI.CreateFrame(content)
DCEI.SetFrameSize(small_content, 100, 100)
DCEI.SetFrameImageColor(small_content, {r = 0, g = 1, b = 0, a = 0.4})
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateHScrollFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createhscrollframe-1)
- [CreateVScrollFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createvscrollframe-1)
- [CreateScrollFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createscrollframe-1))
[](extra-section-end)

## void SetScrollFrameScrollDecelerationRate(InGameUILayoutComponent ui, float value) {setscrollframescrolldecelerationrate-2}
```cs
void SetScrollFrameScrollDecelerationRate(InGameUILayoutComponent ui, float value)
```
#### Description
[](description-start)
Sets the deceleration rate for scroll inertia. A value of 0 will cause instant deceleration (equivalent to setting the inertia to false). Values between 0 and 1 will cause deceleration. A value of 1 will cause no deceleration. A value greater than 1 will cause acceleration. A negative value will break the scroll element. This is supported for all scroll frame types.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the scroll frame (not the scroll content frame).
- *float* `value` the scroll deceleration rate.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local scroll = DCEI.CreateScrollFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(scroll, 500, 500)
DCEI.SetFrameImageColor(scroll, {r = 1, g = 0, b = 0, a = 0.3})
DCEI.SetScrollFrameScrollDecelerationRate(scroll, 0.5)

local content = DCEI.GetScrollFrameContent(scroll)
local big_content = DCEI.CreateFrame(content)
DCEI.SetFrameSize(big_content, 1000, 1000)
DCEI.SetFrameImageColor(big_content, {r = 0, g = 0, b = 1, a = 0.4})

local small_content = DCEI.CreateFrame(content)
DCEI.SetFrameSize(small_content, 100, 100)
DCEI.SetFrameImageColor(small_content, {r = 0, g = 1, b = 0, a = 0.4})
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateHScrollFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createhscrollframe-1)
- [CreateVScrollFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createvscrollframe-1)
- [CreateScrollFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createscrollframe-1)
- [SetScrollFrameScrollInertia](Trigger-API-Reference-DCEI-Functions-Custom-UI#setscrollframescrollinertia-2)
[](extra-section-end)

## void SetScrollFrameScrollContentAlignment(InGameUILayoutComponent ui, string value) {setscrollframescrollcontentalignment-2}
```cs
void SetScrollFrameScrollContentAlignment(InGameUILayoutComponent ui, string value)
```
#### Description
[](description-start)
Sets the alignment for scroll content. The value determines where the initial display location of the scroll content is.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the scroll frame (not the scroll content frame).
- *string* `value` the alignment. Possible values: HScroll: `left (default), right` VScroll: `top (default), bottom` Scroll: `left, right, top, bottom, (top|bottom)-(left|right)`

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local vscroll_frame = DCEI.CreateVScrollFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(vscroll_frame, 200, 500)
DCEI.SetScrollFrameScrollContentAlignment(vscroll_frame, "right")
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateHScrollFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createhscrollframe-1)
- [CreateVScrollFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createvscrollframe-1)
- [CreateScrollFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createscrollframe-1)
[](extra-section-end)

## void SetScrollFrameSnapEnabled(InGameUILayoutComponent ui, bool value) {setscrollframesnapenabled-2}
```cs
void SetScrollFrameSnapEnabled(InGameUILayoutComponent ui, bool value)
```
#### Description
[](description-start)
Toggles scroll frame snapping on or off. When enabled, there are a suite of other APIs for adjusting the snap step size, step count, threshold, and speed. These APIs are useful if your scroll frame contains items of discrete sizes and you want your scroll frame to always snap to these elements rather then end up partially between two items. 
  
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the scroll frame (not the scroll content frame).
- *bool* `value` set scroll frame snapping to true or false.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local GMUI = require("GMUI")

function InitializeScrollFrame()
    -- Assuming "ScrollFrame" is an HScroll containing items 200 wide with spacing & padding of 15
    local scroll = GMUI.Layout.New({ name = "ScrollFrame" })
    local count = DCEI.GetChildrenFrameCount(scroll.Frame)

    DCEI.SetScrollFrameScrollDecelerationRate(scroll.Frame, 100)

    DCEI.SetScrollFrameSnapEnabled(scroll.Frame, true)
    DCEI.SetScrollFrameSnapStepSize(scroll.Frame, 215)
    DCEI.SetScrollFrameSnapStepCount(scroll.Frame, count)
    DCEI.SetScrollFrameSnapThreshold(scroll.Frame, 215)
    DCEI.SetScrollFrameSnapSpeed(scroll.Frame, 125)
end

InitializeScrollFrame()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetScrollFrameSnapStepSize(InGameUILayoutComponent ui, float value) {setscrollframesnapstepsize-2}
```cs
void SetScrollFrameSnapStepSize(InGameUILayoutComponent ui, float value)
```
#### Description
[](description-start)
Sets the size of steps between snap points on scroll frame snapping. Most likely, you'll want to set this to the width of individual items within the scroll frame. 
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the scroll frame (not the scroll content frame).
- *float* `value` sets the step size for the snapping behavior, e.g. width of snapping steps.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local GMUI = require("GMUI")

function InitializeScrollFrame()
    -- Assuming "ScrollFrame" is an HScroll containing items 200 wide with spacing & padding of 15
    local scroll = GMUI.Layout.New({ name = "ScrollFrame" })
    local count = DCEI.GetChildrenFrameCount(scroll.Frame)

    DCEI.SetScrollFrameScrollDecelerationRate(scroll.Frame, 100)

    DCEI.SetScrollFrameSnapEnabled(scroll.Frame, true)
    DCEI.SetScrollFrameSnapStepSize(scroll.Frame, 215)
    DCEI.SetScrollFrameSnapStepCount(scroll.Frame, count)
    DCEI.SetScrollFrameSnapThreshold(scroll.Frame, 215)
    DCEI.SetScrollFrameSnapSpeed(scroll.Frame, 125)
end

InitializeScrollFrame()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetScrollFrameSnapStepCount(InGameUILayoutComponent ui, int value) {setscrollframesnapstepcount-2}
```cs
void SetScrollFrameSnapStepCount(InGameUILayoutComponent ui, int value)
```
#### Description
[](description-start)
Sets the number of steps. In the most common use case, you would want to set this to the number of children items, most likely by using GetChildrenFrameCount. 
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the scroll frame (not the scroll content frame).
- *int* `value` the number of steps the frame can snap to.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local GMUI = require("GMUI")

function InitializeScrollFrame()
    -- Assuming "ScrollFrame" is an HScroll containing items 200 wide with spacing & padding of 15
    local scroll = GMUI.Layout.New({ name = "ScrollFrame" })
    local count = DCEI.GetChildrenFrameCount(scroll.Frame)

    DCEI.SetScrollFrameScrollDecelerationRate(scroll.Frame, 100)

    DCEI.SetScrollFrameSnapEnabled(scroll.Frame, true)
    DCEI.SetScrollFrameSnapStepSize(scroll.Frame, 215)
    DCEI.SetScrollFrameSnapStepCount(scroll.Frame, count)
    DCEI.SetScrollFrameSnapThreshold(scroll.Frame, 215)
    DCEI.SetScrollFrameSnapSpeed(scroll.Frame, 125)
end

InitializeScrollFrame()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetScrollFrameSnapThreshold(InGameUILayoutComponent ui, float value) {setscrollframesnapthreshold-2}
```cs
void SetScrollFrameSnapThreshold(InGameUILayoutComponent ui, float value)
```
#### Description
[](description-start)
Sets the threshold for scroll frame snapping. The threshold is how close a user has to scroll to the next step before they will snap to that step instead of the previous one.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the scroll frame (not the scroll content frame).
- *float* `value` this sets the threshold for how close to the next step will cause the snapping to occur. If set to half of the step width, for an example, scrolling halfway to the next step will result in snapping to that step.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local GMUI = require("GMUI")

function InitializeScrollFrame()
    -- Assuming "ScrollFrame" is an HScroll containing items 200 wide with spacing & padding of 15
    local scroll = GMUI.Layout.New({ name = "ScrollFrame" })
    local count = DCEI.GetChildrenFrameCount(scroll.Frame)

    DCEI.SetScrollFrameScrollDecelerationRate(scroll.Frame, 100)

    DCEI.SetScrollFrameSnapEnabled(scroll.Frame, true)
    DCEI.SetScrollFrameSnapStepSize(scroll.Frame, 215)
    DCEI.SetScrollFrameSnapStepCount(scroll.Frame, 1)
    DCEI.SetScrollFrameSnapThreshold(scroll.Frame, 215)
    DCEI.SetScrollFrameSnapSpeed(scroll.Frame, 125)
end

InitializeScrollFrame()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetScrollFrameSnapSpeed(InGameUILayoutComponent ui, float value) {setscrollframesnapspeed-2}
```cs
void SetScrollFrameSnapSpeed(InGameUILayoutComponent ui, float value)
```
#### Description
[](description-start)
Set how fast the snapping to the next step will occur for scroll frames with snapping enabled. 
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the scroll frame (not the scroll content frame).
- *float* `value` how fast the scroll will snap to the next step.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local GMUI = require("GMUI")

function InitializeScrollFrame()
    -- Assuming "ScrollFrame" is an HScroll containing items 200 wide with spacing & padding of 15
    local scroll = GMUI.Layout.New({ name = "ScrollFrame" })
    local count = DCEI.GetChildrenFrameCount(scroll.Frame)

    DCEI.SetScrollFrameScrollDecelerationRate(scroll.Frame, 100)

    DCEI.SetScrollFrameSnapEnabled(scroll.Frame, true)
    DCEI.SetScrollFrameSnapStepSize(scroll.Frame, 215)
    DCEI.SetScrollFrameSnapStepCount(scroll.Frame, count)
    DCEI.SetScrollFrameSnapThreshold(scroll.Frame, 215)
    DCEI.SetScrollFrameSnapSpeed(scroll.Frame, 125)
end

InitializeScrollFrame()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetTextFrameRtlSupport(InGameUILayoutComponent text, bool value) {settextframertlsupport-2}
```cs
void SetTextFrameRtlSupport(InGameUILayoutComponent text, bool value)
```
#### Description
[](description-start)
Sets RTL (right to left) support for a text frame. When true, this text will be displayed from right-to-left when using RTL languages (such as Arabic). You typically want to disable this for numeric text, which is still displayed as left-to-right in such languages. This is enabled by default on all text frames.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `text` the text frame.
- *bool* `value` if true, enables RTL support.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local text_frame = DCEI.CreateTextFrame(DCEI.GetUiRootFrame())
DCEI.SetTextFrameRtlSupport(text_frame, false)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateTextFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createtextframe-1)
[](extra-section-end)

## void SetTextFrameAlignment(InGameUILayoutComponent text, string alignment) {settextframealignment-2}
```cs
void SetTextFrameAlignment(InGameUILayoutComponent text, string alignment)
```
#### Description
[](description-start)
Sets the text alignment for a text frame.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `text` the text frame.
- *string* `alignment` the text alignment. Possible values: `start, end, top, bottom, (top|bottom)-(start|end)`

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImageColor(frame, {r = 1, g = 1, b = 0, a = 0.5})

local text_frame = DCEI.CreateTextFrame(frame)
DCEI.SetTextFrameText(text_frame, "Text")
DCEI.SetFrameSize(text_frame, 200, 100)
DCEI.SetTextFrameAlignment(text_frame, "end")
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateTextFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createtextframe-1)
[](extra-section-end)

## void SetTextFrameWrapping(InGameUILayoutComponent text, bool enable) {settextframewrapping-2}
```cs
void SetTextFrameWrapping(InGameUILayoutComponent text, bool enable)
```
#### Description
[](description-start)
Sets text wrapping for a text frame.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `text` the text frame.
- *bool* `enable` if true, enables text wrapping. This is true by default for newly created text frames.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImageColor(frame, {r = 1, g = 1, b = 0, a = 0.5})

local text_frame = DCEI.CreateTextFrame(frame)
DCEI.SetTextFrameText(text_frame, "Text")
DCEI.SetFrameSize(text_frame, 200, 100)
DCEI.SetTextFrameWrapping(text_frame, false)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateTextFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createtextframe-1)
[](extra-section-end)

## void SetTextFrameOverflow(InGameUILayoutComponent text, bool enable) {settextframeoverflow-2}
```cs
void SetTextFrameOverflow(InGameUILayoutComponent text, bool enable)
```
#### Description
[](description-start)
Sets text overflow for a text frame.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `text` the text frame.
- *bool* `enable` if true, enables text overflow. This is true by default for newly created text frames.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImageColor(frame, {r = 1, g = 1, b = 0, a = 0.5})

local text_frame = DCEI.CreateTextFrame(frame)
DCEI.SetTextFrameText(text_frame, "Text Overflow Example")
DCEI.SetFrameSize(text_frame, 200, 40)
DCEI.SetTextFrameOverflow(text_frame, false)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateTextFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createtextframe-1)
[](extra-section-end)

## void SetTextFrameText(InGameUILayoutComponent text, string content) {settextframetext-2}
```cs
void SetTextFrameText(InGameUILayoutComponent text, string content)
```
#### Description
[](description-start)
Sets the text of a text frame. Supports rich text tags See: http://digitalnativestudios.com/textmeshpro/docs/rich-text/ Use `\n` for newline.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `text` the text frame to set the text of.
- *string* `content` the text to set. Supports rich text.Supports the following parameters from bound units:
```
unit.Info.Icon
unit.Info.Name
unit.Health.Current
unit.Health.Max
unit.Health.Percentage
unit.Health.Fraction
unit.Health.Regeneration
unit.Shield.Current
unit.Shield.Max
unit.Shield.Percentage
unit.Shield.Fraction
unit.Shield.Regeneration
unit.Mana.Current
unit.Mana.Max
unit.Mana.Percentage
unit.Mana.Fraction
unit.Mana.Regeneration
unit.Ability.ability_name.CooldownRatio
unit.Ability.ability_name.MaxCharge
unit.Ability.ability_name.ChargeCount
unit.Expression.some_named_expression
```
Data bound values can be formatted to specific decimal values by appending the expression such as `:F2`.
(You can find more documentation [here](https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-numeric-format-strings))

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local text = "Here's some <b>RICH</b> text!" .. "\n" .. 
  "And here's some <size=50%>small</size> text." .. "\n" .. 
  "<color=blue>And here's some blue text.</color>"

local label = DCEI.CreateTextFrame(DCEI.GetUiRootFrame())
DCEI.SetTextFrameText(label, text)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateTextFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createtextframe-1)
[](extra-section-end)

## void SetTextFrameTextExpression(InGameUILayoutComponent text, string content) {settextframetextexpression-2}
```cs
void SetTextFrameTextExpression(InGameUILayoutComponent text, string content)
```
#### Description
[](description-start)
Sets a text expression in a text frame. Unlike other UI expressions, text expressions must be surrounded with curly brackets `{}`. These brackets are used so the expression string can be concatenated with regular text. For a list of fields that can be accessed after the unit is bound, see [Data-Binding](Data-Binding). 

* For more information, see the [notion guide on Data Binding.](https://funovus.notion.site/Data-Binding-Text-Expressions-3cf526b1dccb413c89b9e4d66370c2fa)
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `text` the text frame to set the text of.
- *string* `content` the text to set. See [Data-Binding](Data-Binding).

[](parameters-end)

#### Example Usage
[](example-usage-start)
```LUA
-- unit binding for expressions
local unit = DCEI.CreateUnit(1, 1, DCEI.Unit("Standard MeleeUnit"), 16, 16, 0, -1)
DCEI.BindUnitData("selected", unit)

local stats = {}
local vstack = DCEI.CreateVStackFrame(DCEI.GetUiRootFrame())
stats.health_label = DCEI.CreateTextFrame(vstack)
stats.mana_regen_label = DCEI.CreateTextFrame(vstack)

-- make it so that the healthbar shows <current HP>/<max HP>
DCEI.SetTextFrameTextExpression(stats.health_label, "{selected.Health.Current}/{selected.Health.Max}")
    
-- assuming the selected unit's mana regeneration is 1.228
-- this expression will display 1.2
DCEI.SetTextFrameTextExpression(stats.mana_regen_label, "{selected.Mana.Regeneration:F1}")
-- this expression will display 1.23
DCEI.SetTextFrameTextExpression(stats.mana_regen_label, "{selected.Mana.Regeneration:F2}")

-- data binding for expressions
local data_table = {text = "data bound label"}
DCEI.BindLuaTable("data", data_table)

local data_binding = DCEI.CreateTextFrame(vstack)
DCEI.SetTextFrameTextExpression(data_binding, "{data.text}")
```

DreamEditor also provides an additional specifier `:K` to format huge numbers as "xxxK", "xxxM" or "xxxB". The default parameter for `:K` is `:K2`.

```LUA
-- assuming the selected unit's max health is 1000000
-- this expression will display 1M
DCEI.SetTextFrameTextExpression(stats.health_label, "{selected.Health.Max:K0}")
-- this expression will display 1.0M
DCEI.SetTextFrameTextExpression(stats.health_label, "{selected.Health.Max:K1}")
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateTextFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createtextframe-1)
- [BindUnitData](#bindunitdata-2)
- [BindLuaTable](#bindluatable-2)
[](extra-section-end)

## void SetTextFrameFontSize(InGameUILayoutComponent text, float size) {settextframefontsize-2}
```cs
void SetTextFrameFontSize(InGameUILayoutComponent text, float size)
```
#### Description
[](description-start)
Sets the font size for a text frame. The default font size is 22.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `text` the text frame.
- *float* `size` the new text size.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImageColor(frame, {r = 1, g = 1, b = 0, a = 0.5})

local text_frame = DCEI.CreateTextFrame(frame)
DCEI.SetTextFrameText(text_frame, "Text")
DCEI.SetFrameSize(text_frame, 200, 100)
DCEI.SetTextFrameFontSize(text_frame, 50)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateTextFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createtextframe-1)
[](extra-section-end)

## void SetTextFrameFontSizeMin(InGameUILayoutComponent text, float size) {settextframefontsizemin-2}
```cs
void SetTextFrameFontSizeMin(InGameUILayoutComponent text, float size)
```
#### Description
[](description-start)
Sets a minimum font size for a text frame. To enable dynamic font sizing, a text frame needs a minium and maximum font size and either a maximum height or width. Does not work if there is a set font size. 
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `text` the text frame.
- *float* `size` the new minimum text size.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImageColor(frame, {r = 1, g = 1, b = 0, a = 0.5})
    
local text_frame = DCEI.CreateTextFrame(frame)
DCEI.SetTextFrameText(text_frame, "Text")
DCEI.SetTextFrameFontSizeMin(text_frame, 10)
DCEI.SetTextFrameFontSizeMax(text_frame, 30)
DCEI.SetFrameSize(text_frame, 50, 30)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateTextFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createtextframe-1)
[](extra-section-end)

## void SetTextFrameFontSizeMax(InGameUILayoutComponent text, float size) {settextframefontsizemax-2}
```cs
void SetTextFrameFontSizeMax(InGameUILayoutComponent text, float size)
```
#### Description
[](description-start)
Sets a maximum font size for a text frame. To enable dynamic font sizing, a text frame needs a minium and maximum font size and either a maximum height or width. Does not work if there is a set font size. 
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `text` the text frame.
- *float* `size` the new maximum text size.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImageColor(frame, {r = 1, g = 1, b = 0, a = 0.5})
    
local text_frame = DCEI.CreateTextFrame(frame)
DCEI.SetTextFrameText(text_frame, "Text")
DCEI.SetTextFrameFontSizeMin(text_frame, 10)
DCEI.SetTextFrameFontSizeMax(text_frame, 30)
DCEI.SetFrameSize(text_frame, 100, 30)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateTextFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createtextframe-1)
[](extra-section-end)

## void SetTextFrameColor(InGameUILayoutComponent text, ColorRGB color) {settextframecolor-2}
```cs
void SetTextFrameColor(InGameUILayoutComponent text, ColorRGB color)
```
#### Description
[](description-start)
Sets the color of text for a text frame.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `text` the text frame.
- *[ColorRGB](Trigger-API-Reference-DCEI-Types#colorrgb)* `color` the RGB values for the line. Also accepts hex values such as `"#32a852"`

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImageColor(frame, {r = 1, g = 1, b = 0, a = 0.5})

local text_frame = DCEI.CreateTextFrame(frame)
DCEI.SetTextFrameText(text_frame, "Text")
DCEI.SetFrameSize(text_frame, 200, 100)
DCEI.SetTextFrameColor(text_frame, {r = 0.5, g = 0.5, b = 0})
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetTextFrameOutline(InGameUILayoutComponent text, bool outline) {settextframeoutline-2}
```cs
void SetTextFrameOutline(InGameUILayoutComponent text, bool outline)
```
#### Description
[](description-start)
Sets the outline for a text frame's text.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `text` the text frame.
- *bool* `outline` if true, enables the text outline. This is true by default for newly created text frames.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImageColor(frame, {r = 1, g = 1, b = 0, a = 0.5})

local text_frame = DCEI.CreateTextFrame(frame)
DCEI.SetTextFrameText(text_frame, "Text")
DCEI.SetFrameSize(text_frame, 200, 100)
DCEI.SetTextFrameOutline(text_frame, false)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateTextFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createtextframe-1)
[](extra-section-end)

## void SetTextFrameShadow(InGameUILayoutComponent text, bool enableShadow) {settextframeshadow-2}
```cs
void SetTextFrameShadow(InGameUILayoutComponent text, bool enableShadow)
```
#### Description
[](description-start)
Sets the shadow for a text frame's text. Disabling the text shadow will also disable the outline.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `text` the text frame.
- *bool* `enableShadow` if true, enables the text shadow. This is true by default for newly created text frames.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImageColor(frame, {r = 1, g = 1, b = 0, a = 0.5})

local text_frame = DCEI.CreateTextFrame(frame)
DCEI.SetTextFrameText(text_frame, "Text")
DCEI.SetFrameSize(text_frame, 200, 100)
DCEI.SetTextFrameShadow(text_frame, false)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateTextFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createtextframe-1)
[](extra-section-end)

## void SetTextFrameOutlineOutside(InGameUILayoutComponent text, bool outside) {settextframeoutlineoutside-2}
```cs
void SetTextFrameOutlineOutside(InGameUILayoutComponent text, bool outside)
```
#### Description
[](description-start)
Sets the outline for a text frame's text.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `text` the text frame.
- *bool* `outside` if true, enables the text's outside outline. This is false by default for newly created text frames.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImageColor(frame, {r = 1, g = 1, b = 0, a = 0.5})

local text_frame = DCEI.CreateTextFrame(frame)
DCEI.SetTextFrameText(text_frame, "Text")
DCEI.SetFrameSize(text_frame, 200, 100)
DCEI.SetTextFrameOutlineOutside(text_frame, true)
DCEI.SetTextFrameOutlineWidth(text_frame, 0.5)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateTextFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createtextframe-1)
[](extra-section-end)

## void SetTextFrameOutlineColor(InGameUILayoutComponent text, ColorRGBA color) {settextframeoutlinecolor-2}
```cs
void SetTextFrameOutlineColor(InGameUILayoutComponent text, ColorRGBA color)
```
#### Description
[](description-start)
Sets the outline color for a text frame's text.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `text` the text frame.
- *[ColorRGBA](Trigger-API-Reference-DCEI-Types#colorrgba)* `color` the RGBA values for the line.  Also accepts hex codes, such as `"#32a852"`

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImageColor(frame, {r = 1, g = 1, b = 0, a = 0.5})

local text_frame = DCEI.CreateTextFrame(frame)
DCEI.SetTextFrameText(text_frame, "Text")
DCEI.SetFrameSize(text_frame, 200, 100)
DCEI.SetTextFrameOutlineColor(text_frame, {r = 0.5, g = 0.5, b = 0, a = 0.5})
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateTextFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createtextframe-1)
[](extra-section-end)

## void SetTextFrameOutlineWidth(InGameUILayoutComponent text, float width) {settextframeoutlinewidth-2}
```cs
void SetTextFrameOutlineWidth(InGameUILayoutComponent text, float width)
```
#### Description
[](description-start)
Sets the width for a text frame's text outline.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `text` the text frame.
- *float* `width` the width of the outline, scaled from 0-1. A value less than 0 will disable the outline.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImageColor(frame, {r = 1, g = 1, b = 0, a = 0.5})

local text_frame = DCEI.CreateTextFrame(frame)
DCEI.SetTextFrameText(text_frame, "Text")
DCEI.SetFrameSize(text_frame, 200, 100)
DCEI.SetTextFrameFontSize(text_frame, 50)
DCEI.SetTextFrameOutlineWidth(text_frame, 0.5)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateTextFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createtextframe-1)
[](extra-section-end)

## void SetTextFrameOutlineSoftness(InGameUILayoutComponent text, float softness) {settextframeoutlinesoftness-2}
```cs
void SetTextFrameOutlineSoftness(InGameUILayoutComponent text, float softness)
```
#### Description
[](description-start)
Set the softness for a text frame's text outline.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `text` the text frame.
- *float* `softness` the softness of the outline, scaled from 0-1.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImageColor(frame, {r = 1, g = 1, b = 0, a = 0.5})

local text_frame = DCEI.CreateTextFrame(frame)
DCEI.SetTextFrameText(text_frame, "Text")
DCEI.SetFrameSize(text_frame, 200, 100)
DCEI.SetTextFrameFontSize(text_frame, 50)
DCEI.SetTextFrameOutlineSoftness(text_frame, 0.5)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateTextFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createtextframe-1)
[](extra-section-end)

## void SetTextFrameShadowWidth(InGameUILayoutComponent text, float width) {settextframeshadowwidth-2}
```cs
void SetTextFrameShadowWidth(InGameUILayoutComponent text, float width)
```
#### Description
[](description-start)
Sets the width for a text frame's text shadow.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `text` the text frame.
- *float* `width` the width of the shadow, scaled from 0-1. A value less than 0 will remove the shadow without removing the outline.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImageColor(frame, {r = 1, g = 1, b = 0, a = 0.5})

local text_frame = DCEI.CreateTextFrame(frame)
DCEI.SetTextFrameText(text_frame, "Text")
DCEI.SetFrameSize(text_frame, 200, 100)
DCEI.SetTextFrameFontSize(text_frame, 50)
DCEI.SetTextFrameShadowWidth(text_frame, 0.5)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateTextFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createtextframe-1)
[](extra-section-end)

## void SetTextFrameShadowColor(InGameUILayoutComponent text, ColorRGBA color) {settextframeshadowcolor-2}
```cs
void SetTextFrameShadowColor(InGameUILayoutComponent text, ColorRGBA color)
```
#### Description
[](description-start)
- *Transform* `text` the text frame.
- *[ColorRGBA](Trigger-API-Reference-DCEI-Types#colorrgba)* `color` the RGBA values for the line.  Also accepts hex codes, such as `"#32a852"`
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `text` the text frame.
- *[ColorRGBA](Trigger-API-Reference-DCEI-Types#colorrgba)* `color` the RGBA values for the line.  Also accepts hex codes, such as `"#32a852"`

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImageColor(frame, {r = 1, g = 1, b = 0, a = 0.5})

local text_frame = DCEI.CreateTextFrame(frame)
DCEI.SetTextFrameText(text_frame, "Text")
DCEI.SetFrameSize(text_frame, 200, 100)
DCEI.SetTextFrameFontSize(text_frame, 50)
DCEI.SetTextFrameShadowColor(text_frame, {r = 0.5, g = 0.5, b = 0, a = 0.5})
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateTextFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createtextframe-1)
[](extra-section-end)

## void SetTextFrameShadowSoftness(InGameUILayoutComponent text, float softness) {settextframeshadowsoftness-2}
```cs
void SetTextFrameShadowSoftness(InGameUILayoutComponent text, float softness)
```
#### Description
[](description-start)
Set the softness for a text frame's text shadow.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `text` the text frame.
- *float* `softness` the softness of the shadow, scaled from 0-1.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImageColor(frame, { r = 1, g = 1, b = 0, a = 0.5 })

local text_frame = DCEI.CreateTextFrame(frame)
DCEI.SetTextFrameText(text_frame, "Text")
DCEI.SetFrameSize(text_frame, 200, 100)
DCEI.SetTextFrameFontSize(text_frame, 50)
DCEI.SetTextFrameShadowSoftness(text_frame, 1)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateTextFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createtextframe-1)
[](extra-section-end)

## void SetTextFrameShadowDirection(InGameUILayoutComponent text, float x, float y) {settextframeshadowdirection-3}
```cs
void SetTextFrameShadowDirection(InGameUILayoutComponent text, float x, float y)
```
#### Description
[](description-start)
Sets the direction for a text frame's text shadow. The coordinate's direction is based on the unit circle. The magnitude of the offset has a small effect on the shadow length.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `text` the text frame.
- *float* `x` the X coordinate.
- *float* `y` the Y coordinate.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImageColor(frame, { r = 1, g = 1, b = 0, a = 0.5 })

local text_frame = DCEI.CreateTextFrame(frame)
DCEI.SetTextFrameText(text_frame, "Text")
DCEI.SetFrameSize(text_frame, 200, 100)
DCEI.SetTextFrameFontSize(text_frame, 50)
DCEI.SetTextFrameShadowDirection(text_frame, 100, 100)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateTextFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createtextframe-1)
[](extra-section-end)

## string GetInputFrameText(InGameUILayoutComponent text) {getinputframetext-1}
```cs
string GetInputFrameText(InGameUILayoutComponent text)
```
#### Description
[](description-start)
Returns the text entered into an input text frame.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `text` the input frame.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local input_frame = DCEI.CreateInputFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(input_frame, 100, 50)
DCEI.SetInputFrameText(input_frame, "Input Frame")

local input = DCEI.GetInputFrameText(input_frame)
DCEI.LogMessage(input)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateInputFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createinputframe-1)
[](extra-section-end)

## void SetInputFrameText(InGameUILayoutComponent text, string content) {setinputframetext-2}
```cs
void SetInputFrameText(InGameUILayoutComponent text, string content)
```
#### Description
[](description-start)
Sets the text for an input frame.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `text` the input frame.
- *string* `content` the text to set.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local input_frame = DCEI.CreateInputFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(input_frame, 100, 50)
DCEI.SetInputFrameText(input_frame, "Input Frame")
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateInputFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createinputframe-1)
[](extra-section-end)

## void SetInputFrameFontSize(InGameUILayoutComponent text, float size) {setinputframefontsize-2}
```cs
void SetInputFrameFontSize(InGameUILayoutComponent text, float size)
```
#### Description
[](description-start)
Sets the text size for an input frame.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `text` the input frame.
- *float* `size` the new text size.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local input_frame = DCEI.CreateInputFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(input_frame, 100, 50)
DCEI.SetInputFrameText(input_frame, "Input Frame")
DCEI.SetInputFrameFontSize(input_frame, 50)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateInputFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createinputframe-1)
[](extra-section-end)

## void SetInputFrameColor(InGameUILayoutComponent text, ColorRGB color) {setinputframecolor-2}
```cs
void SetInputFrameColor(InGameUILayoutComponent text, ColorRGB color)
```
#### Description
[](description-start)
Sets the text color for an input frame.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `text` the input frame.
- *[ColorRGB](Trigger-API-Reference-DCEI-Types#colorrgb)* `color` the RGB values for the line. Also accepts hex values such as `"#32a852"`

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local input_frame = DCEI.CreateInputFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(input_frame, 100, 50)
DCEI.SetInputFrameText(input_frame, "Input Frame")
DCEI.SetInputFrameColor(input_frame, {r = 0.5, g = 0.5, b = 0})
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateInputFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createinputframe-1)
[](extra-section-end)

## void SetInputFrameWrapping(InGameUILayoutComponent text, bool enable) {setinputframewrapping-2}
```cs
void SetInputFrameWrapping(InGameUILayoutComponent text, bool enable)
```
#### Description
[](description-start)
Sets text wrapping for an input frame.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `text` the input frame.
- *bool* `enable` if true, enables text wrapping. This is false by default for newly created input frames.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local input_frame = DCEI.CreateInputFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(input_frame, 100, 50)
DCEI.SetInputFrameText(input_frame, "Input Frame Wrapping Test")
DCEI.SetInputFrameWrapping(input_frame, true)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateInputFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createinputframe-1)
[](extra-section-end)

## void SetInputFramePlaceholder(InGameUILayoutComponent text, string content) {setinputframeplaceholder-2}
```cs
void SetInputFramePlaceholder(InGameUILayoutComponent text, string content)
```
#### Description
[](description-start)
Sets the text placeholder for an input frame.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `text` the input frame.
- *string* `content` the text placeholder to set.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local input_frame = DCEI.CreateInputFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(input_frame, 100, 50)
DCEI.SetInputFramePlaceholder(input_frame, "Edit me")
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateInputFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createinputframe-1)
[](extra-section-end)

## void SetInputFramePlaceholderFontSize(InGameUILayoutComponent text, float size) {setinputframeplaceholderfontsize-2}
```cs
void SetInputFramePlaceholderFontSize(InGameUILayoutComponent text, float size)
```
#### Description
[](description-start)
Sets the placeholder text size for an input frame.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `text` the input frame.
- *float* `size` the font size.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local input_frame = DCEI.CreateInputFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(input_frame, 100, 50)
DCEI.SetInputFramePlaceholder(input_frame, "Input Placeholder")
DCEI.SetInputFramePlaceholderFontSize(input_frame, 50)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateInputFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createinputframe-1)
[](extra-section-end)

## void SetInputFramePlaceholderColor(InGameUILayoutComponent text, ColorRGB color) {setinputframeplaceholdercolor-2}
```cs
void SetInputFramePlaceholderColor(InGameUILayoutComponent text, ColorRGB color)
```
#### Description
[](description-start)
Sets the text placeholder's color for an input frame.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `text` the text frame.
- *[ColorRGB](Trigger-API-Reference-DCEI-Types#colorrgb)* `color` the RGB values for the line. Also accepts hex values such as `"#32a852"`

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local input_frame = DCEI.CreateInputFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(input_frame, 100, 50)
DCEI.SetInputFramePlaceholder(input_frame, "Input Placeholder")
DCEI.SetInputFramePlaceholderColor(input_frame, {r = 0.5, g = 0.5, b = 0})
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateInputFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createinputframe-1)
[](extra-section-end)

## void SetInputFramePlaceholderOutline(InGameUILayoutComponent text, bool outline) {setinputframeplaceholderoutline-2}
```cs
void SetInputFramePlaceholderOutline(InGameUILayoutComponent text, bool outline)
```
#### Description
[](description-start)
Sets the text placeholder's outline for an input frame.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `text` the input frame.
- *bool* `outline` if true, displays the outline. This is false by default for newly created input frames.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local input_frame = DCEI.CreateInputFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(input_frame, 100, 50)
DCEI.SetInputFramePlaceholder(input_frame, "Input Placeholder")
DCEI.SetInputFramePlaceholderOutline(input_frame, true)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateInputFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createinputframe-1)
[](extra-section-end)

## void SetUserInputTextFrameText(InGameUILayoutComponent text, string content) {setuserinputtextframetext-2}
```cs
void SetUserInputTextFrameText(InGameUILayoutComponent text, string content)
```
#### Description
[](description-start)
Sets the text for a user input text frame.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `text` the user input text frame.
- *string* `content` the text to set.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local vstack = DCEI.CreateVStackFrame(DCEI.GetUiRootFrame())
local input_frame = DCEI.CreateInputFrame(vstack)
DCEI.SetInputFrameText(input_frame, "Input Frame")
DCEI.SetFrameSize(input_frame, 300, 50)

local input = DCEI.GetInputFrameText(input_frame)

local user_input = DCEI.CreateUserInputTextFrame(vstack)
DCEI.SetFrameSize(user_input, 300, 50)
DCEI.SetFrameImageColor(user_input, {r = 1, g = 0, b = 1, a = 0.4})
DCEI.SetUserInputTextFrameText(user_input, input)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateUserInputTextFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createuserinputtextframe-1)
- [GetInputFrameText](Trigger-API-Reference-DCEI-Functions-Custom-UI#getinputframetext-1)
[](extra-section-end)

## void SetUserInputTextFrameFontSize(InGameUILayoutComponent text, float size) {setuserinputtextframefontsize-2}
```cs
void SetUserInputTextFrameFontSize(InGameUILayoutComponent text, float size)
```
#### Description
[](description-start)
Sets the text size for a user input text frame.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `text` the user input text frame.
- *float* `size` the new text size.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local user_input = DCEI.CreateUserInputTextFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImageColor(user_input, {r = 1, g = 0, b = 0, a = 0.5})
DCEI.SetFrameSize(user_input, 400, 100)
DCEI.SetUserInputTextFrameText(user_input, "User Input Text")
DCEI.SetUserInputTextFrameFontSize(user_input, 50)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateUserInputTextFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createuserinputtextframe-1)
[](extra-section-end)

## void SetUserInputTextFrameColor(InGameUILayoutComponent text, ColorRGB color) {setuserinputtextframecolor-2}
```cs
void SetUserInputTextFrameColor(InGameUILayoutComponent text, ColorRGB color)
```
#### Description
[](description-start)
Sets the text color for a user input text frame.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `text` the text frame.
- *[ColorRGB](Trigger-API-Reference-DCEI-Types#colorrgb)* `color` the RGB values for the line. Also accepts hex values such as `"#32a852"`

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local user_input = DCEI.CreateUserInputTextFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImageColor(user_input, {r = 1, g = 0, b = 0, a = 0.5})
DCEI.SetFrameSize(user_input, 400, 100)
DCEI.SetUserInputTextFrameText(user_input, "User Input Text")
DCEI.SetUserInputTextFrameFontSize(user_input, 50)
DCEI.SetUserInputTextFrameColor(user_input, {r = 0.5, g = 0.5, b = 0})
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateUserInputTextFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createuserinputtextframe-1)
[](extra-section-end)

## void SetUserInputTextFrameWrapping(InGameUILayoutComponent text, bool enable) {setuserinputtextframewrapping-2}
```cs
void SetUserInputTextFrameWrapping(InGameUILayoutComponent text, bool enable)
```
#### Description
[](description-start)
Sets text wrapping for a user input text frame.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `text` the input frame.
- *bool* `enable` if true, enables text wrapping. This is false by default for newly created user input text frames.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local user_input = DCEI.CreateUserInputTextFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImageColor(user_input, {r = 1, g = 0, b = 0, a = 0.5})
DCEI.SetFrameSize(user_input, 200, 100)
DCEI.SetUserInputTextFrameText(user_input, "User Input Text")
DCEI.SetUserInputTextFrameFontSize(user_input, 50)
DCEI.SetUserInputTextFrameWrapping(user_input, true)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateUserInputTextFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createuserinputtextframe-1)
[](extra-section-end)

## void SetFrameMinSize(InGameUILayoutComponent ui, float width, float height) {setframeminsize-3}
```cs
void SetFrameMinSize(InGameUILayoutComponent ui, float width, float height)
```
#### Description
[](description-start)
Sets the minimum size of a frame. The frame will still expand to fit its content if larger than this minimum size.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to adjust.
- *float* `width` the new minimum width of the frame.
- *float* `height` the new minimum height of the frame.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameMinSize(frame, 100, 100)
DCEI.SetFrameImageColor(frame, {r = 0, g = 0, b = 1, a = 0.5})
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameMinWidth(InGameUILayoutComponent ui, float width) {setframeminwidth-2}
```cs
void SetFrameMinWidth(InGameUILayoutComponent ui, float width)
```
#### Description
[](description-start)
Sets the minimum width of a frame. The frame will still expand to fit its content if larger than this minimum width.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to adjust.
- *float* `width` the new minimum width of the frame.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameMinWidth(frame, 100)
DCEI.SetFrameImageColor(frame, {r = 0, g = 0, b = 1, a = 0.5})
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameMinHeight(InGameUILayoutComponent ui, float height) {setframeminheight-2}
```cs
void SetFrameMinHeight(InGameUILayoutComponent ui, float height)
```
#### Description
[](description-start)
Sets the minimum height of a frame. The frame will still expand to fit its content if larger than this minimum height.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to adjust.
- *float* `height` the new minimum height of the frame.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameMinHeight(frame, 100)
DCEI.SetFrameImageColor(frame, {r = 0, g = 0, b = 1, a = 0.5})
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameMaxSize(InGameUILayoutComponent ui, float width, float height) {setframemaxsize-3}
```cs
void SetFrameMaxSize(InGameUILayoutComponent ui, float width, float height)
```
#### Description
[](description-start)
Sets the maximum size of a frame. The frame will still shrink to fit its content if smaller than this maximum size.

Can be used with [CreateTextFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createtextframe-1) to create dynamic text scaling (with [SetTextFrameFontSizeMin](Trigger-API-Reference-DCEI-Functions-Custom-UI#settextframefontsizemin-2)/[SetTextFrameFontSizeMax](Trigger-API-Reference-DCEI-Functions-Custom-UI#settextframefontsizemax-2)).
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to adjust.
- *float* `width` the new maximum width of the frame.
- *float* `height` the new maximum height of the frame.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local label = DCEI.CreateTextFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameMaxSize(label, 100, 48)

local text = "Some text we want to wrap."
DCEI.SetTextFrameText(label, text)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameMaxWidth(InGameUILayoutComponent ui, float width) {setframemaxwidth-2}
```cs
void SetFrameMaxWidth(InGameUILayoutComponent ui, float width)
```
#### Description
[](description-start)
Sets the maximum width of a frame. The frame will still expand to fit its content if larger than this maximum width.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to adjust.
- *float* `width` the new maximum width of the frame.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameMaxWidth(frame, 100)
DCEI.SetFrameImageColor(frame, {r = 0, g = 0, b = 1, a = 0.5})
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameMaxHeight(InGameUILayoutComponent ui, float height) {setframemaxheight-2}
```cs
void SetFrameMaxHeight(InGameUILayoutComponent ui, float height)
```
#### Description
[](description-start)
Sets the maximum height of a frame. The frame will still expand to fit its content if larger than this maximum height.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to adjust.
- *float* `height` the new maximum height of the frame.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameMaxHeight(frame, 100)
DCEI.SetFrameImageColor(frame, {r = 0, g = 0, b = 1, a = 0.5})
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameSize(InGameUILayoutComponent ui, float width, float height) {setframesize-3}
```cs
void SetFrameSize(InGameUILayoutComponent ui, float width, float height)
```
#### Description
[](description-start)
Sets the absolute size of a frame that will not expand/shrink to accommodate its children.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to adjust.
- *float* `width` the new width of the frame.
- *float* `height` the new height of the frame.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame, 100, 100)
DCEI.SetFrameImageColor(frame, {r = 0, g = 0, b = 1, a = 0.5})
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## InGameUILayoutComponent CreateListFrame(InGameUILayoutComponent parent) {createlistframe-1}
```cs
InGameUILayoutComponent CreateListFrame(InGameUILayoutComponent parent)
```
#### Description
[](description-start)
Create a virtualized list frame. Virtual lists greatly improve the performance of long lists by only creating UI elements when the user scrolls. Elements outside of the scroll view won't be created or updated, saving on performance.
See [Using Virtual Lists](https://funovus.notion.site/Using-Virtual-Lists-5e200de95f584e728b7019c1b271c8f2) for more information.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `parent` the parent frame.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local root = DCEI.GetUiRootFrame()
local v_list = DCEI.CreateListFrame(root)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetListFrameItemName(InGameUILayoutComponent ui, string itemName) {setlistframeitemname-2}
```cs
void SetListFrameItemName(InGameUILayoutComponent ui, string itemName)
```
#### Description
[](description-start)
Set the XML name for virtualized list's item.
See [Using Virtual Lists](https://funovus.notion.site/Using-Virtual-Lists-5e200de95f584e728b7019c1b271c8f2) for more information.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the virtualized list frame.
- *string* `itemName` the XML name of item frame.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local root = DCEI.GetUiRootFrame()
local v_list = DCEI.CreateListFrame(root)
DCEI.SetListFrameItemName(v_list, "ListItem")
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetListFrameItemSize(InGameUILayoutComponent ui, float itemSize) {setlistframeitemsize-2}
```cs
void SetListFrameItemSize(InGameUILayoutComponent ui, float itemSize)
```
#### Description
[](description-start)
Set the size for virtualized list's item.
See [Using Virtual Lists](https://funovus.notion.site/Using-Virtual-Lists-5e200de95f584e728b7019c1b271c8f2) for more information.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the virtualized list frame.
- *float* `itemSize` the size of item frame.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local root = DCEI.GetUiRootFrame()
local v_list = DCEI.CreateListFrame(root)
DCEI.SetListFrameItemSize(v_list, 50)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetListFrameItemDataCallback(InGameUILayoutComponent ui, TypedCallback\<InGameUILayoutComponent, int> itemDataCallback) {setlistframeitemdatacallback-2}
```cs
void SetListFrameItemDataCallback(InGameUILayoutComponent ui, TypedCallback<InGameUILayoutComponent, int> itemDataCallback)
```
#### Description
[](description-start)
Tell the virtual list how to create new items as well as how to bind the data to each item.
See [Using Virtual Lists](https://funovus.notion.site/Using-Virtual-Lists-5e200de95f584e728b7019c1b271c8f2) for more information.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the virtualized list frame.
- *TypedCallback\<InGameUILayoutComponent, int>* `itemDataCallback` the callback function to bind the data to item.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- Virtual list requires a separate data storage.
local virtual_items = {}
DCEI.SetListFrameItemCount(virtual_list, #virtual_items)
DCEI.SetListFrameItemDataCallback(virtual_list, function(item, index)
    local text = DCEI.GetChildFrameById(item, "text")
    DCEI.SetTextFrameTextExpression(text, "row " .. virtual_items[index + 1].value .. " = {target.Health.Current}")
    ShowItemAnimated(item)
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetListFrameItemCount(InGameUILayoutComponent ui, int itemCount) {setlistframeitemcount-2}
```cs
void SetListFrameItemCount(InGameUILayoutComponent ui, int itemCount)
```
#### Description
[](description-start)
Tell the virtual list we have more items and the list to manage item creation if needed.
See [Using Virtual Lists](https://funovus.notion.site/Using-Virtual-Lists-5e200de95f584e728b7019c1b271c8f2) for more information.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the virtualized list frame.
- *int* `itemCount` the count of list's items.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- Instead of creating items directly, we update the underlying data structure.
for i = 1, count do
    table.insert(virtual_items, {value = #virtual_items + 1})
end
DCEI.SetListFrameItemCount(virtual_list, #virtual_items)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void RefreshListFrameItems(InGameUILayoutComponent ui, int startIndex, int endIndex) {refreshlistframeitems-3}
```cs
void RefreshListFrameItems(InGameUILayoutComponent ui, int startIndex, int endIndex)
```
#### Description
[](description-start)
Refresh a range of list items when their underlying data has changed. The data callback registered with DCEI.[SetListFrameItemDataCallback](Trigger-API-Reference-DCEI-Functions-Custom-UI#setlistframeitemdatacallback-2)() will be called for each visible list item in the specified range to rebind data to UI. 
See [Using Virtual Lists](https://funovus.notion.site/Using-Virtual-Lists-5e200de95f584e728b7019c1b271c8f2) for more information.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the virtual list frame to update.
- *int* `startIndex` the index of the first item to be refreshed.
- *int* `endIndex` the index of the last item to be refreshed.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.SetOnClickCallback(refresh_button, function()
    refresh_count = refresh_count + 1
    DCEI.RefreshListFrameItems(virtual_list, 1, #virtual_items)
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## InGameUILayoutComponent CreateSpineFrame(InGameUILayoutComponent parent) {createspineframe-1}
```cs
InGameUILayoutComponent CreateSpineFrame(InGameUILayoutComponent parent)
```
#### Description
[](description-start)
Creates a frame for Spine animations. See [Spine animations](https://funovus.notion.site/Using-Spine-Animations-12292a90d9be4ea29a383e2f6d22577d).
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `parent` the parent frame under which to create this frame.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local spine = DCEI.CreateSpineFrame(GMUI.ui.Root)
DCEI.SetSpineFrameAsset(spine, "texiao3")
local animations = DCEI.GetSpineFrameAnimations(spine)
for _, animation in ipairs(animations) do
    DCEI.LogMessage("Animation: " .. animation)
end
DCEI.PlaySpineFrameAnimation(spine, animations[1], true, 1)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetSpineFrameAsset(InGameUILayoutComponent ui, string name) {setspineframeasset-2}
```cs
void SetSpineFrameAsset(InGameUILayoutComponent ui, string name)
```
#### Description
[](description-start)
Sets the Spine frame to the Spine asset. The asset must be in your map or mod’s `Assets\SpineAnimations` folder. See [Spine animations](https://funovus.notion.site/Using-Spine-Animations-12292a90d9be4ea29a383e2f6d22577d).
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the Spine frame to set the asset on.
- *string* `name` the name of the Spine asset to be used.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local spine = DCEI.CreateSpineFrame(GMUI.ui.Root)
DCEI.SetSpineFrameAsset(spine, "texiao3")
local animations = DCEI.GetSpineFrameAnimations(spine)
for _, animation in ipairs(animations) do
    DCEI.LogMessage("Animation: " .. animation)
end
DCEI.PlaySpineFrameAnimation(spine, animations[1], true, 1)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## object GetSpineFrameAnimations(InGameUILayoutComponent ui) {getspineframeanimations-1}
```cs
object GetSpineFrameAnimations(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Gets a table of spine animations from the given spine frame. See [Spine animations](https://funovus.notion.site/Using-Spine-Animations-12292a90d9be4ea29a383e2f6d22577d)
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the Spine frame to get the Spine animations from.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local spine = DCEI.CreateSpineFrame(GMUI.ui.Root)
DCEI.SetSpineFrameAsset(spine, "texiao3")
local animations = DCEI.GetSpineFrameAnimations(spine)
for _, animation in ipairs(animations) do
    DCEI.LogMessage("Animation: " .. animation)
end
DCEI.PlaySpineFrameAnimation(spine, animations[1], true, 1)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void PlaySpineFrameAnimation(InGameUILayoutComponent ui, string name, bool loop = False, int track = 0) {playspineframeanimation-4}
```cs
void PlaySpineFrameAnimation(InGameUILayoutComponent ui, string name, bool loop = False, int track = 0)
```
#### Description
[](description-start)
See [Spine animations](https://funovus.notion.site/Using-Spine-Animations-12292a90d9be4ea29a383e2f6d22577d)
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the Spine ui frame.
- *string* `name` the name of the Spine animation.
- *bool* `loop` loop the animation or not.
- *int* `track` which track of the animation to play.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local spine = DCEI.CreateSpineFrame(GMUI.ui.Root)
DCEI.SetSpineFrameAsset(spine, "texiao3")
local animations = DCEI.GetSpineFrameAnimations(spine)
for _, animation in ipairs(animations) do
    DCEI.LogMessage("Animation: " .. animation)
end
DCEI.PlaySpineFrameAnimation(spine, animations[1], true, 1)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameWidth(InGameUILayoutComponent ui, float width) {setframewidth-2}
```cs
void SetFrameWidth(InGameUILayoutComponent ui, float width)
```
#### Description
[](description-start)
Sets the absolute width of a frame that will not expand/shrink to accommodate its children.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to adjust.
- *float* `width` the new width of the frame.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameWidth(frame, 100)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameHeight(InGameUILayoutComponent ui, float height) {setframeheight-2}
```cs
void SetFrameHeight(InGameUILayoutComponent ui, float height)
```
#### Description
[](description-start)
Sets the absolute height of a frame that will not expand/shrink to accommodate its children.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to adjust.
- *float* `height` the new height of the frame.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameHeight(frame, 100)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void FlipFrameHorizontal(InGameUILayoutComponent ui) {flipframehorizontal-1}
```cs
void FlipFrameHorizontal(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Flips the given UI frame and its children horizontally. Does not work on the root UI.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the UI frame to flip.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImage(frame, DCEI.Texture("airship_onMap"))
DCEI.SetFrameUseImageSizeRatio(frame, 1)
DCEI.FlipFrameHorizontal(frame)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void FlipFrameVertical(InGameUILayoutComponent ui) {flipframevertical-1}
```cs
void FlipFrameVertical(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Flips the given UI frame and its children vertically. Does not work on the root UI.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the UI frame to flip.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImage(frame, DCEI.Texture("airship_onMap"))
DCEI.SetFrameUseImageSizeRatio(frame, 1)
DCEI.FlipFrameVertical(frame)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameMatchParent(InGameUILayoutComponent ui, bool matchWidth, bool matchHeight) {setframematchparent-3}
```cs
void SetFrameMatchParent(InGameUILayoutComponent ui, bool matchWidth, bool matchHeight)
```
#### Description
[](description-start)
Sets the dimensions of a UI frame to match that of its parent.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to adjust.
- *bool* `matchWidth` whether to set the frame's width to that of its parent.
- *bool* `matchHeight` whether to set the frame's height to that of its parent.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local fullscreen_mask = DCEI.CreateFrame(DCEI.GetUiRootFrame())

DCEI.SetFrameMatchParent(fullscreen_mask, true, true)
DCEI.SetFrameImageColor(fullscreen_mask, {r = 0, g = 0, b = 0, a = 0.5})
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFramePadding(InGameUILayoutComponent ui, float padding) {setframepadding-2}
```cs
void SetFramePadding(InGameUILayoutComponent ui, float padding)
```
#### Description
[](description-start)
Sets the padding for a UI frame.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set padding for.
- *float* `padding` the padding to set.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame1 = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImageColor(frame1, {r = 1, g = 0, b = 1, a = 0.4})
DCEI.SetFramePadding(frame1, 20)

local frame2 = DCEI.CreateFrame(frame1)
DCEI.SetFrameSize(frame2, 100, 100)
DCEI.SetFrameImageColor(frame2, {r = 0, g = 1, b = 1, a = 0.4})
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFramePaddingLeft(InGameUILayoutComponent ui, float padding) {setframepaddingleft-2}
```cs
void SetFramePaddingLeft(InGameUILayoutComponent ui, float padding)
```
#### Description
[](description-start)
Sets the left padding for a UI frame.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set left padding for.
- *float* `padding` the left padding to set.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame1 = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImageColor(frame1, {r = 1, g = 0, b = 1, a = 0.4})
DCEI.SetFramePaddingLeft(frame, 20)

local frame2 = DCEI.CreateFrame(frame1)
DCEI.SetFrameSize(frame2, 100, 100)
DCEI.SetFrameImageColor(frame2, {r = 0, g = 1, b = 1, a = 0.4})
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFramePaddingRight(InGameUILayoutComponent ui, float padding) {setframepaddingright-2}
```cs
void SetFramePaddingRight(InGameUILayoutComponent ui, float padding)
```
#### Description
[](description-start)
Sets the right padding for a UI frame.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set right padding for.
- *float* `padding` the right padding to set.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame1 = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImageColor(frame1, {r = 1, g = 0, b = 1, a = 0.4})
DCEI.SetFramePaddingRight(frame1, 20)

local frame2 = DCEI.CreateFrame(frame1)
DCEI.SetFrameSize(frame2, 100, 100)
DCEI.SetFrameImageColor(frame2, {r = 0, g = 1, b = 1, a = 0.4})
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFramePaddingTop(InGameUILayoutComponent ui, float padding) {setframepaddingtop-2}
```cs
void SetFramePaddingTop(InGameUILayoutComponent ui, float padding)
```
#### Description
[](description-start)
Sets the top padding for a UI frame.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set top padding for.
- *float* `padding` the top padding to set.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame1 = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImageColor(frame1, {r = 1, g = 0, b = 1, a = 0.4})
DCEI.SetFramePaddingTop(frame1, 20)

local frame2 = DCEI.CreateFrame(frame1)
DCEI.SetFrameSize(frame2, 100, 100)
DCEI.SetFrameImageColor(frame2, {r = 0, g = 1, b = 1, a = 0.4})
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFramePaddingBottom(InGameUILayoutComponent ui, float padding) {setframepaddingbottom-2}
```cs
void SetFramePaddingBottom(InGameUILayoutComponent ui, float padding)
```
#### Description
[](description-start)
Sets the bottom padding for a UI frame.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set bottom padding for.
- *float* `padding` the bottom padding to set.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame1 = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImageColor(frame1, {r = 1, g = 0, b = 1, a = 0.4})
DCEI.SetFramePaddingBottom(frame1, 20)

local frame2 = DCEI.CreateFrame(frame1)
DCEI.SetFrameSize(frame2, 100, 100)
DCEI.SetFrameImageColor(frame2, {r = 0, g = 1, b = 1, a = 0.4})
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameSpacing(InGameUILayoutComponent ui, float spacing) {setframespacing-2}
```cs
void SetFrameSpacing(InGameUILayoutComponent ui, float spacing)
```
#### Description
[](description-start)
Sets the spacing between child elements for a UI frame. This function affects frames that automatically position their children, such as stacks or scrolls. For scrolls, this function should be called on the content frame returned by [GetScrollFrameContent](Trigger-API-Reference-DCEI-Functions-Custom-UI#getscrollframecontent-1).
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set spacing for.
- *float* `spacing` the spacing to set.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local stack = DCEI.CreateVStackFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImageColor(stack, {r = 0, g = 0, b = 0, a = 0.4})
DCEI.SetFrameSpacing(stack, 20)
DCEI.SetFramePadding(stack, 20)

local frame1 = DCEI.CreateFrame(stack)
DCEI.SetFrameSize(frame1, 100, 100)
DCEI.SetFrameImageColor(frame1, {r = 1, g = 0, b = 1, a = 0.4})

local frame2 = DCEI.CreateFrame(stack)
DCEI.SetFrameSize(frame2, 100, 100)
DCEI.SetFrameImageColor(frame2, {r = 0, g = 1, b = 1, a = 0.4})
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateVStackFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createvstackframe-1)
- [CreateHStackFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createhstackframe-1)
- [CreateGridFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#creategridframe-1)
- [CreateHScrollFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createhscrollframe-1)
- [CreateVScrollFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createvscrollframe-1)
[](extra-section-end)

## void SetFrameLeftAlignment(InGameUILayoutComponent ui) {setframeleftalignment-1}
```cs
void SetFrameLeftAlignment(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Sets left alignment for a UI frame's contents.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set content alignment for.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame1 = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame1, 200, 200)
DCEI.SetFrameImageColor(frame1, {r = 1, g = 0, b = 1, a = 0.4})
DCEI.SetFrameLeftAlignment(frame1)

local frame2 = DCEI.CreateFrame(frame1)
DCEI.SetFrameSize(frame2, 100, 100)
DCEI.SetFrameImageColor(frame2, {r = 0, g = 1, b = 1, a = 0.4})
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameRightAlignment(InGameUILayoutComponent ui) {setframerightalignment-1}
```cs
void SetFrameRightAlignment(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Sets right alignment for a UI frame's contents.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set content alignment for.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame1 = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame1, 200, 200)
DCEI.SetFrameImageColor(frame1, {r = 1, g = 0, b = 1, a = 0.4})
DCEI.SetFrameRightAlignment(frame1)

local frame2 = DCEI.CreateFrame(frame1)
DCEI.SetFrameSize(frame2, 100, 100)
DCEI.SetFrameImageColor(frame2, {r = 0, g = 1, b = 1, a = 0.4})
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameTopAlignment(InGameUILayoutComponent ui) {setframetopalignment-1}
```cs
void SetFrameTopAlignment(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Sets top alignment for a UI frame's contents.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set content alignment for.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame1 = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame1, 200, 200)
DCEI.SetFrameImageColor(frame1, {r = 1, g = 0, b = 1, a = 0.4})
DCEI.SetFrameTopAlignment(frame1)

local frame2 = DCEI.CreateFrame(frame1)
DCEI.SetFrameSize(frame2, 100, 100)
DCEI.SetFrameImageColor(frame2, {r = 0, g = 1, b = 1, a = 0.4})
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameBottomAlignment(InGameUILayoutComponent ui) {setframebottomalignment-1}
```cs
void SetFrameBottomAlignment(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Sets bottom alignment for a UI frame's contents.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set content alignment for.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame1 = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame1, 200, 200)
DCEI.SetFrameImageColor(frame1, {r = 1, g = 0, b = 1, a = 0.4})
DCEI.SetFrameBottomAlignment(frame1)

local frame2 = DCEI.CreateFrame(frame1)
DCEI.SetFrameSize(frame2, 100, 100)
DCEI.SetFrameImageColor(frame2, {r = 0, g = 1, b = 1, a = 0.4})
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameCenterAlignment(InGameUILayoutComponent ui) {setframecenteralignment-1}
```cs
void SetFrameCenterAlignment(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Sets center alignment for a UI frame's contents. This is the default alignment.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set content alignment for.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame1 = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame1, 200, 200)
DCEI.SetFrameImageColor(frame1, {r = 1, g = 0, b = 1, a = 0.4})
DCEI.SetFrameBottomAlignment(frame1)

local frame2 = DCEI.CreateFrame(frame1)
DCEI.SetFrameSize(frame2, 100, 100)
DCEI.SetFrameImageColor(frame2, {r = 0, g = 1, b = 1, a = 0.4})

DCEI.TriggerAddTimerEventElapsed(
    function()
        DCEI.SetFrameCenterAlignment(frame1)
    end,
    1, true
)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameLeftAlignmentInParent(InGameUILayoutComponent ui) {setframeleftalignmentinparent-1}
```cs
void SetFrameLeftAlignmentInParent(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Aligns a frame to its parent's left edge.

Note that setting left/right alignment won't work for frames that have their horizontal alignment determined by another source (ex, the children frames of an HStack). This can be worked around by wrapping the frame you want to reposition inside a blank frame.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set alignment for.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame1 = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame1, 200, 200)
DCEI.SetFrameImageColor(frame1, {r = 1, g = 0, b = 1, a = 0.4})

local frame2 = DCEI.CreateFrame(frame1)
DCEI.SetFrameSize(frame2, 100, 100)
DCEI.SetFrameImageColor(frame2, {r = 0, g = 1, b = 1, a = 0.4})
DCEI.SetFrameLeftAlignmentInParent(frame2)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameRightAlignmentInParent(InGameUILayoutComponent ui) {setframerightalignmentinparent-1}
```cs
void SetFrameRightAlignmentInParent(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Aligns a frame to its parent's right edge.

Note that setting left/right alignment won't work for frames that have their horizontal alignment determined by another source (ex, the children frames of a HStack). This can be worked around by wrapping the frame you want to reposition inside a blank frame.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set alignment for.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame1 = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame1, 200, 200)
DCEI.SetFrameImageColor(frame1, {r = 1, g = 0, b = 1, a = 0.4})

local frame2 = DCEI.CreateFrame(frame1)
DCEI.SetFrameSize(frame2, 100, 100)
DCEI.SetFrameImageColor(frame2, {r = 0, g = 1, b = 1, a = 0.4})
DCEI.SetFrameRightAlignmentInParent(frame2)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameTopAlignmentInParent(InGameUILayoutComponent ui) {setframetopalignmentinparent-1}
```cs
void SetFrameTopAlignmentInParent(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Aligns a frame to its parent's top edge.

Note that setting top/bottom alignment won't work for frames that have their vertical alignment determined by another source (ex, the children frames of a VStack). This can be worked around by wrapping the frame you want to reposition inside a blank frame.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set alignment for.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame1 = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame1, 200, 200)
DCEI.SetFrameImageColor(frame1, {r = 1, g = 0, b = 1, a = 0.4})

local frame2 = DCEI.CreateFrame(frame1)
DCEI.SetFrameSize(frame2, 100, 100)
DCEI.SetFrameImageColor(frame2, {r = 0, g = 1, b = 1, a = 0.4})
DCEI.SetFrameTopAlignmentInParent(frame2)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameBottomAlignmentInParent(InGameUILayoutComponent ui) {setframebottomalignmentinparent-1}
```cs
void SetFrameBottomAlignmentInParent(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Aligns a frame to its parent's bottom edge.

Note that setting top/bottom alignment won't work for frames that have their vertical alignment determined by another source (ex, the children frames of a VStack). This can be worked around by wrapping the frame you want to reposition inside a blank frame.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set alignment for.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame1 = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame1, 200, 200)
DCEI.SetFrameImageColor(frame1, {r = 1, g = 0, b = 1, a = 0.4})

local frame2 = DCEI.CreateFrame(frame1)
DCEI.SetFrameSize(frame2, 100, 100)
DCEI.SetFrameImageColor(frame2, {r = 0, g = 1, b = 1, a = 0.4})
DCEI.SetFrameBottomAlignmentInParent(frame2)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameCenterAlignmentInParent(InGameUILayoutComponent ui) {setframecenteralignmentinparent-1}
```cs
void SetFrameCenterAlignmentInParent(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Aligns a frame to its parent's center. This is the default alignment.

Note that setting top/bottom alignment won't work for frames that have their alignment determined by another source (ex, the children frames of a VStack or HStack). This can be worked around by wrapping the frame you want to reposition inside a blank frame.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set alignment for.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame1 = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame1, 200, 200)
DCEI.SetFrameImageColor(frame1, {r = 1, g = 0, b = 1, a = 0.4})

local frame2 = DCEI.CreateFrame(frame1)
DCEI.SetFrameSize(frame2, 100, 100)
DCEI.SetFrameImageColor(frame2, {r = 0, g = 1, b = 1, a = 0.4})
DCEI.SetFrameBottomAlignmentInParent(frame2)

DCEI.TriggerAddTimerEventElapsed(
    function()
        DCEI.SetFrameCenterAlignmentInParent(frame2)
    end,
    1, true
)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameHorizontalOffsetInParent(InGameUILayoutComponent ui, float value) {setframehorizontaloffsetinparent-2}
```cs
void SetFrameHorizontalOffsetInParent(InGameUILayoutComponent ui, float value)
```
#### Description
[](description-start)
Offsets a frame horizontally from its starting position in its parent.

Note that setting an offset won't work for frames that have their alignment determined by another source (ex, the children frames of a VStack or HStack). This can be worked around by wrapping the frame you want to reposition inside a blank frame.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set the offset for.
- *float* `value` the offset distance.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame, 200, 200)
DCEI.SetFrameImageColor(frame, {r = 1, g = 0, b = 1, a = 0.4})
DCEI.SetFrameHorizontalOffsetInParent(frame, 200)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameVerticalOffsetInParent(InGameUILayoutComponent ui, float value) {setframeverticaloffsetinparent-2}
```cs
void SetFrameVerticalOffsetInParent(InGameUILayoutComponent ui, float value)
```
#### Description
[](description-start)
Offsets a frame vertically from its starting position in its parent.

Note that setting an offset won't work for frames that have their alignment determined by another source (ex, the children frames of a VStack or HStack). This can be worked around by wrapping the frame you want to reposition inside a blank frame.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set the offset for.
- *float* `value` the offset distance.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame, 200, 200)
DCEI.SetFrameImageColor(frame, {r = 1, g = 0, b = 1, a = 0.4})
DCEI.SetFrameVerticalOffsetInParent(frame, 100)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameReverseChildrenFrameOrder(InGameUILayoutComponent ui, bool value) {setframereversechildrenframeorder-2}
```cs
void SetFrameReverseChildrenFrameOrder(InGameUILayoutComponent ui, bool value)
```
#### Description
[](description-start)
Reverses the order in which frames are added to a [CreateHStackFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createhstackframe-1), [CreateVStackFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createvstackframe-1), [CreateHScrollFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createhscrollframe-1), or [CreateVScrollFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createvscrollframe-1). This will affect newly added child frames as well as any child frames that have already been added.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to reverse the layout order for.
- *bool* `value` if true, reverses the layout order.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local stack = DCEI.CreateVStackFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImageColor(stack, {r = 0, g = 0, b = 0, a = 0.4})
DCEI.SetFrameSpacing(stack, 20)
DCEI.SetFramePadding(stack, 20)

local frame1 = DCEI.CreateFrame(stack)
DCEI.SetFrameSize(frame1, 100, 100)
DCEI.SetFrameImageColor(frame1, {r = 1, g = 0, b = 1, a = 0.4})

local frame2 = DCEI.CreateFrame(stack)
DCEI.SetFrameSize(frame2, 100, 100)
DCEI.SetFrameImageColor(frame2, {r = 0, g = 1, b = 1, a = 0.4})

DCEI.TriggerAddTimerEventElapsed(
    function()
        DCEI.SetFrameReverseChildrenFrameOrder(stack, true)
    end,
    1, true
)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateVStackFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createvstackframe-1)
- [CreateHStackFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createhstackframe-1)
- [CreateGridFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#creategridframe-1)
- [CreateHScrollFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createhscrollframe-1)
- [CreateVScrollFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createvscrollframe-1)
[](extra-section-end)

## bool IsFrameUsingFlexLayout(InGameUILayoutComponent ui) {isframeusingflexlayout-1}
```cs
bool IsFrameUsingFlexLayout(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Check if a given frame is using Flex layouts. For the difference between Flex and Legacy layouts, see [this notion guide.](https://www.notion.so/funovus/Using-Flex-Layouts-7b4216836da249dfa568c99c23b704fd?pvs=4)
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to check if using flex layout rather than legacy layout.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local function IsFrameFlex()
    local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
    local is_flex = DCEI.IsFrameUsingFlexLayout(frame)
    -- As of March 2023, "is_flex" would be false as frames default to legacy rather than flex.
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameFlexDirection(InGameUILayoutComponent ui, YogaFlexDirection direction) {setframeflexdirection-2}
```cs
void SetFrameFlexDirection(InGameUILayoutComponent ui, YogaFlexDirection direction)
```
#### Description
[](description-start)
Sets the frames Flex Direction. Flex direction controls the direction in which children of a node are laid out. 

For more info (including visualizations of each property) see [flexDirection XML attribute.](https://wiki.funovus.com/master/Ui-FlexLayouts#flexdirection)
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set the flexDirection attribute on.
- *[YogaFlexDirection](Trigger-API-Reference-DCEI-Types#yogaflexdirection)* `direction` the flexDirection value to set. Values: `column, column-reverse, row, row-reverse`

[](parameters-end)

#### Example Usage
[](example-usage-start)
XML "FlexLayout":
```xml
<Frame layout="flex">
    <Frame frameImageColor="#ff0000ff" width="50" height="50" />
    <Frame frameImageColor="#00ff00ff" width="50" height="50" />
</Frame>

```
Lua: 
```lua
local GMUI = require("GMUI")

local function TestFlexProperty()
    local NewFlexLayout = GMUI.Layout.New({ name = "FlexLayout" })
    DCEI.SetFrameFlexDirection(NewFlexLayout.Frame, "column")
end

TestFlexProperty()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameFlexGrow(InGameUILayoutComponent ui, float grow) {setframeflexgrow-2}
```cs
void SetFrameFlexGrow(InGameUILayoutComponent ui, float grow)
```
#### Description
[](description-start)
flexGrow describes how any space within a container should be distributed among its children along the main axis. After laying out its children, a container will distribute any remaining space according to the flexGrow values specified by its children.

For more info (including visualizations of each property) see [flexGrow XML attribute.](https://wiki.funovus.com/master/Ui-FlexLayouts#flexgrow)
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set the flexGrow attribute on.
- *float* `grow` what percent of availible space the frame can grow to fit.

[](parameters-end)

#### Example Usage
[](example-usage-start)
XML "FlexLayout":
```xml
<Frame layout="flex" width="600">
    <Frame id="child1" frameImageColor="#ff0000ff" minWidth="50" height="50" />
    <Frame id="child2" frameImageColor="#00ff00ff" minWidth="50" height="50" />
</Frame>
```

Lua: 
```lua
local GMUI = require("GMUI")

local function TestFlexProperty()
    local NewFlexLayout = GMUI.Layout.New({ name = "FlexLayout" })
    DCEI.SetFrameFlexGrow(NewFlexLayout.child1, 0.5)
    DCEI.SetFrameFlexGrow(NewFlexLayout.child2, 1)
end

TestFlexProperty()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameFlexShrink(InGameUILayoutComponent ui, float shrink) {setframeflexshrink-2}
```cs
void SetFrameFlexShrink(InGameUILayoutComponent ui, float shrink)
```
#### Description
[](description-start)
`flexShrink` is very similar to `flexGrow` and can be thought of in the same way if any overflowing size is considered to be negative remaining space. 

For more info (including visualizations of each property) see [flexShrink XML attribute.](https://wiki.funovus.com/master/Ui-FlexLayouts#flexshrink)
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set the flexShrink attribute on.
- *float* `shrink` what percent of availible space the frame can grow to fit.

[](parameters-end)

#### Example Usage
[](example-usage-start)
XML "FlexLayout":
```xml
<Frame layout="flex" width="200">
    <Frame id="child1" frameImageColor="#ff0000ff" widthPercent="100" height="50" />
    <Frame id="child2" frameImageColor="#00ff00ff" widthPercent="100" height="50" />
</Frame>
```

Lua: 
```lua
local GMUI = require("GMUI")

local function TestFlexProperty()
    local NewFlexLayout = GMUI.Layout.New({ name = "FlexLayout" })
    DCEI.SetFrameFlexShrink(NewFlexLayout.child1, 0.3)
    DCEI.SetFrameFlexShrink(NewFlexLayout.child2, 0.6)
end

TestFlexProperty()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameFlexWrap(InGameUILayoutComponent ui, YogaWrap wrap) {setframeflexwrap-2}
```cs
void SetFrameFlexWrap(InGameUILayoutComponent ui, YogaWrap wrap)
```
#### Description
[](description-start)
By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.

For more info (including visualizations of each property) see [flexWrap XML attribute.](https://wiki.funovus.com/master/Ui-FlexLayouts#flexwrap)
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set the flexWrap attribute on.
- *[YogaWrap](Trigger-API-Reference-DCEI-Types#yogawrap)* `wrap` the type of wrapping to use: `wrap, wrap-reverse, no-wrap`

[](parameters-end)

#### Example Usage
[](example-usage-start)
XML "FlexLayout":
```xml
<Frame layout="flex" width="200" >
    <Frame id="child1" frameImageColor="#ff0000ff" widthPercent="100" height="50" />
    <Frame id="child2" frameImageColor="#00ff00ff" widthPercent="100" height="50" />
</Frame>
```

Lua: 
```lua
local GMUI = require("GMUI")

local function TestFlexProperty()
    local NewFlexLayout = GMUI.Layout.New({ name = "FlexLayout" })
    DCEI.SetFrameFlexWrap(NewFlexLayout.Frame, "wrap")
end

TestFlexProperty()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameJustifyContent(InGameUILayoutComponent ui, YogaJustify justifyContent) {setframejustifycontent-2}
```cs
void SetFrameJustifyContent(InGameUILayoutComponent ui, YogaJustify justifyContent)
```
#### Description
[](description-start)
This defines the alignment along the main axis. For more info (including visualizations of each property) see [justifyContent XML attribute.](https://wiki.funovus.com/master/Ui-FlexLayouts#justifycontent)
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set the justifyContent attribute on.
- *[YogaJustify](Trigger-API-Reference-DCEI-Types#yogajustify)* `justifyContent` the type of justification to use: `center, flex-end, flex-start, flex-start, space-around, space-between`

[](parameters-end)

#### Example Usage
[](example-usage-start)
XML "FlexLayout":
```xml
<Frame layout="flex" width="200">
    <Frame id="child1" frameImageColor="#ff0000ff" width="50" height="50" />
    <Frame id="child2" frameImageColor="#00ff00ff" width="50" height="50" />
</Frame>
```

Lua: 
```lua
local GMUI = require("GMUI")

local function TestFlexProperty()
    local NewFlexLayout = GMUI.Layout.New({ name = "FlexLayout" })
    DCEI.SetFrameJustifyContent(NewFlexLayout.Frame, "space-between")
end

TestFlexProperty()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameAlignItems(InGameUILayoutComponent ui, YogaAlign alignItems) {setframealignitems-2}
```cs
void SetFrameAlignItems(InGameUILayoutComponent ui, YogaAlign alignItems)
```
#### Description
[](description-start)
This defines the default behavior for how flex items are laid out along the cross axis on the current line. Think of it as the justify-content version for the cross-axis (perpendicular to the main-axis). 

For more info (including visualizations of each property) see [alignItems XML attribute.](https://wiki.funovus.com/master/Ui-FlexLayouts#alignitems)
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set the alignItems attribute on.
- *[YogaAlign](Trigger-API-Reference-DCEI-Types#yogaalign)* `alignItems` the type of justification to use: `baseline, center, flex-end, flex-start, stretch`

[](parameters-end)

#### Example Usage
[](example-usage-start)
XML "FlexLayout":
```xml
<Frame layout="flex" width="200">
    <Frame id="child1" frameImageColor="#ff0000ff" width="50" height="150" />
    <Frame id="child2" frameImageColor="#00ff00ff" width="50" height="50" />
</Frame>
```

Lua: 
```lua
local GMUI = require("GMUI")

local function TestFlexProperty()
    local NewFlexLayout = GMUI.Layout.New({ name = "FlexLayout" })
    DCEI.SetFrameAlignItems(NewFlexLayout.Frame, "center")
end

TestFlexProperty()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameAlignContent(InGameUILayoutComponent ui, YogaAlign alignContent) {setframealigncontent-2}
```cs
void SetFrameAlignContent(InGameUILayoutComponent ui, YogaAlign alignContent)
```
#### Description
[](description-start)
This aligns a flex container’s lines within when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis.

Note: This property only takes effect on multi-line flexible containers, where flex-wrap is set to either wrap or wrap-reverse). A single-line flexible container (i.e. where flex-wrap is set to its default value, no-wrap) will not reflect align-content.

For more info (including visualizations of each property) see [alignContent XML attribute.](https://wiki.funovus.com/master/Ui-FlexLayouts#aligncontent)
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set the alignContent attribute on.
- *[YogaAlign](Trigger-API-Reference-DCEI-Types#yogaalign)* `alignContent` the type of justification to use: `baseline, center, flex-end, flex-start, stretch`

[](parameters-end)

#### Example Usage
[](example-usage-start)
XML "FlexLayout":
```xml
<Frame layout="flex" width="200" height="200" flexWrap="wrap" frameImageColor="#000000ff">
    <Frame id="child1" frameImageColor="#ff0000ff" widthPercent="25" heightPercent="25"/>
    <Frame id="child2" frameImageColor="#00ff00ff" widthPercent="25" heightPercent="25"/>
    <Frame id="child3" frameImageColor="#ff0000ff" widthPercent="25" heightPercent="25"/>
    <Frame id="child4" frameImageColor="#00ff00ff" widthPercent="25" heightPercent="25"/>
    <Frame id="child5" frameImageColor="#ff0000ff" widthPercent="25" heightPercent="25"/>
    <Frame id="child6" frameImageColor="#00ff00ff" widthPercent="25" heightPercent="25"/>
</Frame>

```

Lua: 
```lua
local GMUI = require("GMUI")

local function TestFlexProperty()
    local NewFlexLayout = GMUI.Layout.New({ name = "FlexLayout" })
    DCEI.SetFrameAlignContent(NewFlexLayout.Frame, "flex-end")
end

TestFlexProperty()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameAlignSelf(InGameUILayoutComponent ui, YogaAlign alignSelf) {setframealignself-2}
```cs
void SetFrameAlignSelf(InGameUILayoutComponent ui, YogaAlign alignSelf)
```
#### Description
[](description-start)
This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items.

For more info (including visualizations of each property) see [alignSelf XML attribute.](https://wiki.funovus.com/master/Ui-FlexLayouts#alignself)
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set the alignSelf attribute on.
- *[YogaAlign](Trigger-API-Reference-DCEI-Types#yogaalign)* `alignSelf` the type of justification to use: `baseline, center, flex-end, flex-start, stretch`

[](parameters-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame layout="flex" width="200" height="200" flexWrap="wrap" alignItems="stretch" frameImageColor="#000000ff">
    <Frame id="child1" frameImageColor="#ff0000ff" widthPercent="25" heightPercent="25" />
    <Frame id="child2" frameImageColor="#00ff00ff" widthPercent="25" heightPercent="25" />
    <Frame id="child3" frameImageColor="#ff0000ff" widthPercent="25" heightPercent="25" />
    <Frame id="child4" frameImageColor="#00ff00ff" widthPercent="25" heightPercent="25" />
    <Frame id="child5" frameImageColor="#ff0000ff" widthPercent="25" heightPercent="25" />
    <Frame id="child6" frameImageColor="#00ff00ff" widthPercent="25" heightPercent="25" />
</Frame>


```

Lua: 
```lua
local GMUI = require("GMUI")

local function TestFlexProperty()
    local NewFlexLayout = GMUI.Layout.New({ name = "FlexLayout" })
    DCEI.SetFrameAlignSelf(NewFlexLayout.child6, "flex-end")
end

TestFlexProperty()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameMarginLeft(InGameUILayoutComponent ui, float marginLeft) {setframemarginleft-2}
```cs
void SetFrameMarginLeft(InGameUILayoutComponent ui, float marginLeft)
```
#### Description
[](description-start)
Margin effects the spacing around the outside of a node. A node with margin will offset itself from the bounds of its parent but also offset the location of any siblings. The margin of a node contributes to the total size of its parent if the parent is auto sized.

For more info (including visualizations of each property) see [margin XML attributes.](https://wiki.funovus.com/master/Ui-FlexLayouts#margins)
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set the marginLeft attribute on.
- *float* `marginLeft` the amount of left margin

[](parameters-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame layout="flex" width="200" height="200" flexWrap="wrap">
    <Frame id="child1" frameImageColor="#ff0000ff" width="55" height="55" />
    <Frame id="child2" frameImageColor="#00ff00ff" width="55" height="55" />
    <Frame id="child3" frameImageColor="#0000ffff" width="55" height="55" />
    <Frame id="child4" frameImageColor="#ff0000ff" width="55" height="55" />
    <Frame id="child5" frameImageColor="#00ff00ff" width="55" height="55" />
    <Frame id="child6" frameImageColor="#0000ffff" width="55" height="55" />
    <Frame id="child7" frameImageColor="#ff0000ff" width="55" height="55" />
    <Frame id="child8" frameImageColor="#00ff00ff" width="55" height="55" />
    <Frame id="child9" frameImageColor="#0000ffff" width="55" height="55" />
</Frame>
```

Lua: 
```lua
local GMUI = require("GMUI")

local function TestFlexProperty()
    local NewFlexLayout = GMUI.Layout.New({ name = "FlexLayout" })
    DCEI.SetFrameMarginBottom(NewFlexLayout.child5, 5)
end

TestFlexProperty()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameMarginRight(InGameUILayoutComponent ui, float marginRight) {setframemarginright-2}
```cs
void SetFrameMarginRight(InGameUILayoutComponent ui, float marginRight)
```
#### Description
[](description-start)
Margin effects the spacing around the outside of a node. A node with margin will offset itself from the bounds of its parent but also offset the location of any siblings. The margin of a node contributes to the total size of its parent if the parent is auto sized.

For more info (including visualizations of each property) see [margin XML attributes.](https://wiki.funovus.com/master/Ui-FlexLayouts#margins)
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set the marginRight attribute on.
- *float* `marginRight` the amount of right margin

[](parameters-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame layout="flex" width="200" height="200" flexWrap="wrap">
    <Frame id="child1" frameImageColor="#ff0000ff" width="55" height="55" />
    <Frame id="child2" frameImageColor="#00ff00ff" width="55" height="55" />
    <Frame id="child3" frameImageColor="#0000ffff" width="55" height="55" />
    <Frame id="child4" frameImageColor="#ff0000ff" width="55" height="55" />
    <Frame id="child5" frameImageColor="#00ff00ff" width="55" height="55" />
    <Frame id="child6" frameImageColor="#0000ffff" width="55" height="55" />
    <Frame id="child7" frameImageColor="#ff0000ff" width="55" height="55" />
    <Frame id="child8" frameImageColor="#00ff00ff" width="55" height="55" />
    <Frame id="child9" frameImageColor="#0000ffff" width="55" height="55" />
</Frame>
```

Lua: 
```lua
local GMUI = require("GMUI")

local function TestFlexProperty()
    local NewFlexLayout = GMUI.Layout.New({ name = "FlexLayout" })
    DCEI.SetFrameMarginRight(NewFlexLayout.child5, 5)
end

TestFlexProperty()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameMarginTop(InGameUILayoutComponent ui, float marginTop) {setframemargintop-2}
```cs
void SetFrameMarginTop(InGameUILayoutComponent ui, float marginTop)
```
#### Description
[](description-start)
Margin effects the spacing around the outside of a node. A node with margin will offset itself from the bounds of its parent but also offset the location of any siblings. The margin of a node contributes to the total size of its parent if the parent is auto sized.

For more info (including visualizations of each property) see [margin XML attributes.](https://wiki.funovus.com/master/Ui-FlexLayouts#margins)
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set the marginTop attribute on.
- *float* `marginTop` the amount of top margin

[](parameters-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame layout="flex" width="200" height="200" flexWrap="wrap">
    <Frame id="child1" frameImageColor="#ff0000ff" width="55" height="55" />
    <Frame id="child2" frameImageColor="#00ff00ff" width="55" height="55" />
    <Frame id="child3" frameImageColor="#0000ffff" width="55" height="55" />
    <Frame id="child4" frameImageColor="#ff0000ff" width="55" height="55" />
    <Frame id="child5" frameImageColor="#00ff00ff" width="55" height="55" />
    <Frame id="child6" frameImageColor="#0000ffff" width="55" height="55" />
    <Frame id="child7" frameImageColor="#ff0000ff" width="55" height="55" />
    <Frame id="child8" frameImageColor="#00ff00ff" width="55" height="55" />
    <Frame id="child9" frameImageColor="#0000ffff" width="55" height="55" />
</Frame>
```

Lua: 
```lua
local GMUI = require("GMUI")

local function TestFlexProperty()
    local NewFlexLayout = GMUI.Layout.New({ name = "FlexLayout" })
    DCEI.SetFrameMarginTop(NewFlexLayout.child5, 5)
end

TestFlexProperty()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameMarginBottom(InGameUILayoutComponent ui, float marginBottom) {setframemarginbottom-2}
```cs
void SetFrameMarginBottom(InGameUILayoutComponent ui, float marginBottom)
```
#### Description
[](description-start)
Margin effects the spacing around the outside of a node. A node with margin will offset itself from the bounds of its parent but also offset the location of any siblings. The margin of a node contributes to the total size of its parent if the parent is auto sized.

For more info (including visualizations of each property) see [margin XML attributes.](https://wiki.funovus.com/master/Ui-FlexLayouts#margins)
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set the marginBottom attribute on.
- *float* `marginBottom` the amount of bottom margin

[](parameters-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame layout="flex" width="200" height="200" flexWrap="wrap">
    <Frame id="child1" frameImageColor="#ff0000ff" width="55" height="55" />
    <Frame id="child2" frameImageColor="#00ff00ff" width="55" height="55" />
    <Frame id="child3" frameImageColor="#0000ffff" width="55" height="55" />
    <Frame id="child4" frameImageColor="#ff0000ff" width="55" height="55" />
    <Frame id="child5" frameImageColor="#00ff00ff" width="55" height="55" />
    <Frame id="child6" frameImageColor="#0000ffff" width="55" height="55" />
    <Frame id="child7" frameImageColor="#ff0000ff" width="55" height="55" />
    <Frame id="child8" frameImageColor="#00ff00ff" width="55" height="55" />
    <Frame id="child9" frameImageColor="#0000ffff" width="55" height="55" />
</Frame>
```

Lua: 
```lua
local GMUI = require("GMUI")

local function TestFlexProperty()
    local NewFlexLayout = GMUI.Layout.New({ name = "FlexLayout" })
    DCEI.SetFrameMarginBottom(NewFlexLayout.child5, 5)
end

TestFlexProperty()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameWidthPercent(InGameUILayoutComponent ui, float widthPercent) {setframewidthpercent-2}
```cs
void SetFrameWidthPercent(InGameUILayoutComponent ui, float widthPercent)
```
#### Description
[](description-start)
This defines a frame's width as a percentage of it's parent's width. For more info see [widthPercent XML attributes.](https://wiki.funovus.com/master/Ui-FlexLayouts#widthpercent)
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set the widthPercent attribute on.
- *float* `widthPercent` a frame's width as a percentage of it's parent's width

[](parameters-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame layout="flex" width="200" height="200" flexWrap="wrap">
    <Frame id="child1" frameImageColor="#ff0000ff" widthPercent="50" height="55" />
    <Frame id="child2" frameImageColor="#00ff00ff" widthPercent="50" height="55" />
</Frame>

```

Lua: 
```lua
local GMUI = require("GMUI")

local function TestFlexProperty()
    local NewFlexLayout = GMUI.Layout.New({ name = "FlexLayout" })
    DCEI.SetFrameWidthPercent(NewFlexLayout.child1, 30)
    DCEI.SetFrameWidthPercent(NewFlexLayout.child2, 60)
end

TestFlexProperty()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameHeightPercent(InGameUILayoutComponent ui, float heightPercent) {setframeheightpercent-2}
```cs
void SetFrameHeightPercent(InGameUILayoutComponent ui, float heightPercent)
```
#### Description
[](description-start)
This defines a frame's height as a percentage of it's parent's height. For more info see [heightPercent XML attributes.](https://wiki.funovus.com/master/Ui-FlexLayouts#heightpercent)
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set the heightPercent attribute on.
- *float* `heightPercent` a frame's height as a percentage of it's parent's height

[](parameters-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame layout="flex" width="200" height="200" flexWrap="wrap">
    <Frame id="child1" frameImageColor="#ff0000ff" width="50" heightPercent="50" />
    <Frame id="child2" frameImageColor="#00ff00ff" width="50" heightPercent="50" />
</Frame>

```

Lua: 
```lua
local GMUI = require("GMUI")

local function TestFlexProperty()
    local NewFlexLayout = GMUI.Layout.New({ name = "FlexLayout" })
    DCEI.SetFrameHeightPercent(NewFlexLayout.child1, 30)
    DCEI.SetFrameHeightPercent(NewFlexLayout.child2, 60)
end

TestFlexProperty()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFramePosition(InGameUILayoutComponent ui, YogaPositionType position) {setframeposition-2}
```cs
void SetFramePosition(InGameUILayoutComponent ui, YogaPositionType position)
```
#### Description
[](description-start)
Position `Relative` or `Absolute`.

`Relative`  By default an element is positioned relatively. This means an element is positioned according to the normal flow of the layout, and then offset relative to that position based on the values of top, right, bottom, and left. The offset does not affect the position of any sibling or parent elements.

`Absolute` When positioned absolutely an element doesn't take part in the normal layout flow. It is instead laid out independent of its siblings. The position is determined based on the top, right, bottom, and left values.

For more info see [position XML attribute.](https://wiki.funovus.com/master/Ui-FlexLayouts#position)
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set the position attribute on.
- *[YogaPositionType](Trigger-API-Reference-DCEI-Types#yogapositiontype)* `position` position `Relative` or `Absolute`.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame layout="flex" width="200" height="200" flexWrap="wrap">
    <Frame id="child1" frameImageColor="#ff0000ff" widthPercent="50" height="55" />
    <Frame id="child2" frameImageColor="#00ff00ff" widthPercent="50" height="55" />
</Frame>

```

Lua: 
```lua
local GMUI = require("GMUI")

local function TestFlexProperty()
    local NewFlexLayout = GMUI.Layout.New({ name = "FlexLayout" })
    DCEI.SetFramePosition(NewFlexLayout.child1, "Absolute")
    DCEI.SetFrameLeft(NewFlexLayout.child1, 150)
end

TestFlexProperty()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameLeft(InGameUILayoutComponent ui, float left) {setframeleft-2}
```cs
void SetFrameLeft(InGameUILayoutComponent ui, float left)
```
#### Description
[](description-start)
Offset position left, relative to the frames normal position if the position type is `relative`. If position type is `absolute`, this is the offset from the center of the parent frame rather than from this frames normal position in the flow of the frame.

For more info see [position XML attribute.](https://wiki.funovus.com/master/Ui-FlexLayouts#position)
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set the position attribute on.
- *float* `left` left position offset amount

[](parameters-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame layout="flex" width="200" height="200" flexWrap="wrap">
    <Frame id="child1" frameImageColor="#ff0000ff" widthPercent="50" height="55" />
    <Frame id="child2" frameImageColor="#00ff00ff" widthPercent="50" height="55" />
</Frame>

```

Lua: 
```lua
local GMUI = require("GMUI")

local function TestFlexProperty()
    local NewFlexLayout = GMUI.Layout.New({ name = "FlexLayout" })
    DCEI.SetFramePosition(NewFlexLayout.child1, "Absolute")
    DCEI.SetFrameLeft(NewFlexLayout.child1, 150)
end

TestFlexProperty()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameRight(InGameUILayoutComponent ui, float right) {setframeright-2}
```cs
void SetFrameRight(InGameUILayoutComponent ui, float right)
```
#### Description
[](description-start)
Offset position right, relative to the frames normal position if the position type is `relative`. If position type is `absolute`, this is the offset from the center of the parent frame rather than from this frames normal position in the flow of the frame.

For more info see [position XML attribute.](https://wiki.funovus.com/master/Ui-FlexLayouts#position)
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set the position attribute on.
- *float* `right` right position offset amount

[](parameters-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame layout="flex" width="200" height="200" flexWrap="wrap">
    <Frame id="child1" frameImageColor="#ff0000ff" widthPercent="50" height="55" />
    <Frame id="child2" frameImageColor="#00ff00ff" widthPercent="50" height="55" />
</Frame>

```

Lua: 
```lua
local GMUI = require("GMUI")

local function TestFlexProperty()
    local NewFlexLayout = GMUI.Layout.New({ name = "FlexLayout" })
    DCEI.SetFramePosition(NewFlexLayout.child1, "Absolute")
    DCEI.SetFrameRight(NewFlexLayout.child1, 150)
end

TestFlexProperty()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameTop(InGameUILayoutComponent ui, float top) {setframetop-2}
```cs
void SetFrameTop(InGameUILayoutComponent ui, float top)
```
#### Description
[](description-start)
Offset position top, relative to the frames normal position if the position type is `relative`. If position type is `absolute`, this is the offset from the center of the parent frame rather than from this frames normal position in the flow of the frame.

For more info see [position XML attribute.](https://wiki.funovus.com/master/Ui-FlexLayouts#position)
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set the position attribute on.
- *float* `top` top position offset amount

[](parameters-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame layout="flex" width="200" height="200" flexWrap="wrap">
    <Frame id="child1" frameImageColor="#ff0000ff" widthPercent="50" height="55" />
    <Frame id="child2" frameImageColor="#00ff00ff" widthPercent="50" height="55" />
</Frame>

```

Lua: 
```lua
local GMUI = require("GMUI")

local function TestFlexProperty()
    local NewFlexLayout = GMUI.Layout.New({ name = "FlexLayout" })
    DCEI.SetFramePosition(NewFlexLayout.child1, "Absolute")
    DCEI.SetFrameTop(NewFlexLayout.child1, 150)
end

TestFlexProperty()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameBottom(InGameUILayoutComponent ui, float bottom) {setframebottom-2}
```cs
void SetFrameBottom(InGameUILayoutComponent ui, float bottom)
```
#### Description
[](description-start)
Offset position bottom, relative to the frames normal position if the position type is `relative`. If position type is `absolute`, this is the offset from the center of the parent frame rather than from this frames normal position in the flow of the frame.

For more info see [position XML attribute.](https://wiki.funovus.com/master/Ui-FlexLayouts#position)
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set the position attribute on.
- *float* `bottom` bottom position offset amount

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local GMUI = require("GMUI")

local function TestFlexProperty()
    local NewFlexLayout = GMUI.Layout.New({ name = "FlexLayout" })
    DCEI.SetFramePosition(NewFlexLayout.child1, "Absolute")
    DCEI.SetFrameBottom(NewFlexLayout.child1, 150)
end

TestFlexProperty()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameAspectRatio(InGameUILayoutComponent ui, float aspectRatio) {setframeaspectratio-2}
```cs
void SetFrameAspectRatio(InGameUILayoutComponent ui, float aspectRatio)
```
#### Description
[](description-start)
Set a Flex frame's aspect ratio. 

For more info see [aspectRatio XML attribute.](https://wiki.funovus.com/master/Ui-XML-CommonAttributes#aspectratio)
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set the aspect ratio attribute on.
- *float* `aspectRatio` aspectRatio amount

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local GMUI = require("GMUI")

local function TestFlexProperty()
    local NewFlexLayout = GMUI.Layout.New({ name = "FlexLayout" })
    DCEI.SetFrameAspectRatio(NewFlexLayout.child1, 0.5)
end

TestFlexProperty()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameImage(InGameUILayoutComponent ui, string name) {setframeimage-2}
```cs
void SetFrameImage(InGameUILayoutComponent ui, string name)
```
#### Description
[](description-start)
Sets the background image of a UI frame.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set the background image for.
- *string* `name` the image name.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame, 100, 100)
DCEI.SetFrameImage(frame, DCEI.Texture("airship_onMap"))
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameImageExpression(InGameUILayoutComponent ui, string expression) {setframeimageexpression-2}
```cs
void SetFrameImageExpression(InGameUILayoutComponent ui, string expression)
```
#### Description
[](description-start)
Sets the background image of a frame to the given expression. Expressions use data bound by [BindLuaTable](#bindluatable-2) or [BindUnitData](#bindunitdata-2). 

* For more information, see the [notion guide on Data Binding.](https://funovus.notion.site/Data-Binding-Text-Expressions-3cf526b1dccb413c89b9e4d66370c2fa)
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set the background image for.
- *string* `expression` the expression.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local vstack = DCEI.CreateVStackFrame(DCEI.GetUiRootFrame())

local data_frame = DCEI.CreateFrame(vstack)
DCEI.SetFrameSize(data_frame, 100, 100)

local data = {image = DCEI.Texture("airship_onMap")}
DCEI.BindLuaTable("data", data)
DCEI.SetFrameImageExpression(data_frame, "data.image")

local unit_frame = DCEI.CreateFrame(vstack)
DCEI.SetFrameSize(unit_frame, 100, 100)

local unit = DCEI.CreateUnit(1, 1, DCEI.Unit("Standard MeleeUnit"), 16, 16, 0, -1)
DCEI.BindUnitData("selected", unit)

-- this will display the icon of the bound unit, however none of the default units have icons
DCEI.SetFrameImageExpression(unit_frame, "selected.Info.Icon")
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [BindUnitData](#bindunitdata-2)
- [BindLuaTable](#bindluatable-2)
[](extra-section-end)

## void SetFrameImageGrayScaleExpression(InGameUILayoutComponent ui, string expression) {setframeimagegrayscaleexpression-2}
```cs
void SetFrameImageGrayScaleExpression(InGameUILayoutComponent ui, string expression)
```
#### Description
[](description-start)
Sets the background image of a frame to the given expression in gray scale. Expressions use data bound by [BindLuaTable](#bindluatable-2) or [BindUnitData](#bindunitdata-2).

* For more information, see the [notion guide on Data Binding.](https://funovus.notion.site/Data-Binding-Text-Expressions-3cf526b1dccb413c89b9e4d66370c2fa)
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set the background image for.
- *string* `expression` the expression. The expression should evaluate out to a `0` or `1`, corresponding to a `false` or `true`, respectively. Does not accept `true` or `false` by itself.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local vstack = DCEI.CreateVStackFrame(DCEI.GetUiRootFrame())

local data_frame = DCEI.CreateFrame(vstack)
DCEI.SetFrameSize(data_frame, 100, 100)

local data = {image = DCEI.Texture("airship_onMap"), gray = 1}
DCEI.BindLuaTable("data", data)
DCEI.SetFrameImageExpression(data_frame, "data.image")
DCEI.SetFrameImageGrayScaleExpression(data_frame, "data.gray")

local unit_frame = DCEI.CreateFrame(vstack)
DCEI.SetFrameSize(unit_frame, 100, 100)

local unit = DCEI.CreateUnit(1, 1, DCEI.Unit("Standard MeleeUnit"), 16, 16, 0, -1)
DCEI.BindUnitData("selected", unit)

-- this will display the icon of the bound unit, however none of the default units have icons
DCEI.SetFrameImageExpression(unit_frame, "selected.Info.Icon")

-- background image will be grayed out while the unit's health is >0
DCEI.SetFrameImageGrayScaleExpression(unit_frame, "selected.Health.Fraction")
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [BindUnitData](#bindunitdata-2)
- [BindLuaTable](#bindluatable-2)
[](extra-section-end)

## void SetButtonDefaultClickAnimationEnabled(InGameUILayoutComponent ui, bool enable) {setbuttondefaultclickanimationenabled-2}
```cs
void SetButtonDefaultClickAnimationEnabled(InGameUILayoutComponent ui, bool enable)
```
#### Description
[](description-start)
Enable or disable a Button frame's default click animation. This is the animation that makes buttons bounce a little when click/tapped. 
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the button frame to enable/disable the animation for.
- *bool* `enable` enable animation with `true`, disable with `false`.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local function ButtonAnimationDisable()
    local root = DCEI.GetUiRootFrame()
    local new_button = DCEI.CreateButtonFrame(root)
    
    DCEI.SetButtonDefaultClickAnimationEnabled(new_button, false)
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## bool GetButtonDefaultClickAnimationEnabled(InGameUILayoutComponent ui) {getbuttondefaultclickanimationenabled-1}
```cs
bool GetButtonDefaultClickAnimationEnabled(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Get current state (enabled or disabled) of a Button frame's default click animation. This is the animation that makes buttons bounce a little when click/tapped. 
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the button frame to get the enable/disabled on click animation stat for.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local function ButtonAnimationDisable()
    local root = DCEI.GetUiRootFrame()
    local new_button = DCEI.CreateButtonFrame(root)
    
    DCEI.SetButtonDefaultClickAnimationEnabled(new_button, false)

    -- Will be false
    local button_state = DCEI.GetButtonDefaultClickAnimationEnabled(new_button)
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetButtonFrameEnableExpression(InGameUILayoutComponent ui, string expression) {setbuttonframeenableexpression-2}
```cs
void SetButtonFrameEnableExpression(InGameUILayoutComponent ui, string expression)
```
#### Description
[](description-start)
Sets an expression to enable a button. Expressions use data bound by [BindLuaTable](#bindluatable-2) or [BindUnitData](#bindunitdata-2).

* For more information, see the [notion guide on Data Binding.](https://funovus.notion.site/Data-Binding-Text-Expressions-3cf526b1dccb413c89b9e4d66370c2fa)
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the button to enable.
- *string* `expression` the expression. The expression should evaluate out to a `0` or `1`, corresponding to a `false` or `true`, respectively. Does not accept `true` or `false` by itself.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local vstack = DCEI.CreateVStackFrame(DCEI.GetUiRootFrame())

local data_button = DCEI.CreateButtonFrame(vstack)
DCEI.SetFrameSize(data_button, 100, 100)

local btn_data = {enable = 0}
DCEI.BindLuaTable("data", btn_data)
DCEI.SetButtonFrameEnableExpression(data_button, "data.enable")

local unit_button = DCEI.CreateButtonFrame(vstack)
DCEI.SetFrameSize(unit_button, 100, 100)

local unit = DCEI.CreateUnit(1, 1, DCEI.Unit("Standard MeleeUnit 2"), 16, 16, 0, -1)
DCEI.BindUnitData("selected", unit)

-- button will be disabled when the unit is dead
DCEI.SetButtonFrameEnableExpression(unit_button, "selected.Health.Fraction")
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [BindUnitData](#bindunitdata-2)
- [BindLuaTable](#bindluatable-2)
- [](extra-section-end)

## SetFrameImageTiled()
```cs
void SetFrameImageTiled(Transform ui, bool setTiled)
```
#### Description
[](description-start)
Sets the tiling of the background image for a UI frame. If tiling is disabled, the image is stretched to fill the frame. You can adjust the tiling resolution with [SetFramePixelsPerUnitMultiplier](#setframepixelsperunitmultiplier-2).
[](description-end)

#### Parameters
[](parameters-start)
- *Transform* `ui` the frame to set the background image for.
- *bool* `setTiled` if true, enables background image tiling (with the original resolution of the background image). This is false by default for newly created frames.
[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame, 400, 400)
DCEI.SetFrameImage(frame, DCEI.Texture("airship_onMap"))
DCEI.SetFrameImageTiled(frame, true)
```
[](example-usage-end)

[](extra-section-start)
[](extra-section-end)

## void SetFrameImageTiled(InGameUILayoutComponent ui, bool setTiled) {setframeimagetiled-2}
```cs
void SetFrameImageTiled(InGameUILayoutComponent ui, bool setTiled)
```
#### Description
[](description-start)
Sets the tiling of the background image for a UI frame. If tiling is disabled, the image is stretched to fill the frame. You can adjust the tiling resolution with [SetFramePixelsPerUnitMultiplier](#setframepixelsperunitmultiplier-2).
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set the background image for.
- *bool* `setTiled` if true, enables background image tiling (with the original resolution of the background image). This is false by default for newly created frames.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame, 400, 400)
DCEI.SetFrameImage(frame, DCEI.Texture("airship_onMap"))
DCEI.SetFrameImageTiled(frame, true)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFramePixelsPerUnitMultiplier(InGameUILayoutComponent ui, float pixelsPerUnitMultiplier) {setframepixelsperunitmultiplier-2}
```cs
void SetFramePixelsPerUnitMultiplier(InGameUILayoutComponent ui, float pixelsPerUnitMultiplier)
```
#### Description
[](description-start)
Sets the pixels per unit multiplier for a UI frame. This multiplier is the ratio between screen units and image pixels. This can be used to adjust the tiling resolution of frames using [SetFrameImageTiled](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagetiled-2) and the edge/corner resolution of nineslice textures.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set the multiplier for.
- *float* `pixelsPerUnitMultiplier` the pixels per unit multiplier.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- This would reduce the frame's background image's size to 1/5.
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImage(frame, DCEI.Texture("airship_onMap"))
DCEI.SetFrameSize(frame, 500, 500)
DCEI.SetFramePixelsPerUnitMultiplier(frame, 5)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [SetFrameImageTiled](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagetiled-2)
[](extra-section-end)

## void SetFrameImageFillAmount(InGameUILayoutComponent ui, float fill) {setframeimagefillamount-2}
```cs
void SetFrameImageFillAmount(InGameUILayoutComponent ui, float fill)
```
#### Description
[](description-start)
Sets the fill amount for the background image.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set the background image fill amount for.
- *float* `fill` the fill amount (between 0 and 1).

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame, 100, 100)
DCEI.SetFrameImage(frame, DCEI.Texture("airship_onMap"))
DCEI.SetFrameImageFillAmount(frame, 0.5)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [GetFrameImageFillAmount](#getframeimagefillamount-1)
- [SetFrameImageFillHorizontal](#setframeimagefillhorizontal-1)
- [SetFrameImageFillVertical](#setframeimagefillvertical-1)
- [SetFrameImageFillRadial](#setframeimagefillradial-1)
- [SetFrameImageFillOrigin](#setframeimagefillorigin-2)
- [SetFrameImageFillAmountExpression](#setframeimagefillamountexpression-3)
- [AnimateFrameImageFillAmount](#animateframeimagefillamount-5)
[](extra-section-end)

## float GetFrameImageFillAmount(InGameUILayoutComponent ui) {getframeimagefillamount-1}
```cs
float GetFrameImageFillAmount(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Returns the background image fill amount.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to get the background image fill amount of.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame, 100, 100)
DCEI.SetFrameImage(frame, DCEI.Texture("airship_onMap"))
DCEI.SetFrameImageFillAmount(frame, 0.5)

local fill = DCEI.GetFrameImageFillAmount(frame)
DCEI.LogMessage("Frame background image fill amount: " .. fill)
```
[](example-usage-end)

[](extra-section-start)
- [SetFrameImageFillAmount](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagefillamount-2)
- [SetFrameImageFillHorizontal](#setframeimagefillhorizontal-1)
- [SetFrameImageFillVertical](#setframeimagefillvertical-1)
- [SetFrameImageFillRadial](#setframeimagefillradial-1)
- [SetFrameImageFillOrigin](#setframeimagefillorigin-2)
- [SetFrameImageFillAmountExpression](#setframeimagefillamountexpression-3)
- [AnimateFrameImageFillAmount](#animateframeimagefillamount-5)
[](extra-section-end)

## void SetFrameImageFillHorizontal(InGameUILayoutComponent ui) {setframeimagefillhorizontal-1}
```cs
void SetFrameImageFillHorizontal(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Sets the background image fill for a frame to be horizontal. This is the default fill direction.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set the background image fill direction for.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame, 100, 100)
DCEI.SetFrameImage(frame, DCEI.Texture("airship_onMap"))
DCEI.SetFrameImageFillAmount(frame, 0.5)
DCEI.SetFrameImageFillHorizontal(frame)
```
[](example-usage-end)

[](extra-section-start)
- [SetFrameImageFillAmount](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagefillamount-2)
- [GetFrameImageFillAmount](Trigger-API-Reference-DCEI-Functions-Custom-UI#getframeimagefillamount-1)
- [SetFrameImageFillVertical](#setframeimagefillvertical-1)
- [SetFrameImageFillRadial](#setframeimagefillradial-1)
- [SetFrameImageFillOrigin](#setframeimagefillorigin-2)
- [SetFrameImageFillAmountExpression](#setframeimagefillamountexpression-3)
- [AnimateFrameImageFillAmount](#animateframeimagefillamount-5)
[](extra-section-end)

## void SetFrameImageFillVertical(InGameUILayoutComponent ui) {setframeimagefillvertical-1}
```cs
void SetFrameImageFillVertical(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Sets the background image fill for a frame to be vertical. The default fill direction is horizontal.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set the background image fill direction for.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame, 100, 100)
DCEI.SetFrameImage(frame, DCEI.Texture("airship_onMap"))
DCEI.SetFrameImageFillAmount(frame, 0.5)
DCEI.SetFrameImageFillVertical(frame)
```
[](example-usage-end)

[](extra-section-start)
- [SetFrameImageFillAmount](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagefillamount-2)
- [GetFrameImageFillAmount](Trigger-API-Reference-DCEI-Functions-Custom-UI#getframeimagefillamount-1)
- [SetFrameImageFillHorizontal](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagefillhorizontal-1)
- [SetFrameImageFillRadial](#setframeimagefillradial-1)
- [SetFrameImageFillOrigin](#setframeimagefillorigin-2)
- [SetFrameImageFillAmountExpression](#setframeimagefillamountexpression-3)
- [AnimateFrameImageFillAmount](#animateframeimagefillamount-5)
[](extra-section-end)

## void SetFrameImageFillRadial(InGameUILayoutComponent ui) {setframeimagefillradial-1}
```cs
void SetFrameImageFillRadial(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Sets the background image fill for a frame to be radial. This is useful for making circular progress bars. The default fill direction is horizontal.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set the background image fill direction for.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame, 100, 100)
DCEI.SetFrameImage(frame, DCEI.Texture("airship_onMap"))
DCEI.SetFrameImageFillAmount(frame, 0.75)
DCEI.SetFrameImageFillRadial(frame)
```
[](example-usage-end)

[](extra-section-start)
- [SetFrameImageFillAmount](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagefillamount-2)
- [GetFrameImageFillAmount](Trigger-API-Reference-DCEI-Functions-Custom-UI#getframeimagefillamount-1)
- [SetFrameImageFillHorizontal](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagefillhorizontal-1)
- [SetFrameImageFillVertical](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagefillvertical-1)
- [SetFrameImageFillOrigin](#setframeimagefillorigin-2)
- [SetFrameImageFillAmountExpression](#setframeimagefillamountexpression-3)
- [AnimateFrameImageFillAmount](#animateframeimagefillamount-5)
[](extra-section-end)

## void SetFrameImageFillOrigin(InGameUILayoutComponent ui, int origin) {setframeimagefillorigin-2}
```cs
void SetFrameImageFillOrigin(InGameUILayoutComponent ui, int origin)
```
#### Description
[](description-start)
Sets the fill progress orientation of a UI frame.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to modify.
- *int* `origin` the fill mode to apply. Accepted values: `[0, 1] for horizontal or vertical fills ([left, right] and [bottom, top])` `[0, 1, 2, 3] for radial fills ([bottom, right, top, left])`

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local countdown = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImage(countdown, DCEI.Texture("circle01"))
DCEI.SetFrameSize(countdown, 128, 128)

DCEI.SetFrameImageFillRadial(countdown)
DCEI.SetFrameImageFillOrigin(countdown, 1)
DCEI.SetFrameImageFillAmount(countdown, 0.75)
```
[](example-usage-end)

[](extra-section-start)
- [SetFrameImageFillAmount](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagefillamount-2)
- [GetFrameImageFillAmount](Trigger-API-Reference-DCEI-Functions-Custom-UI#getframeimagefillamount-1)
- [SetFrameImageFillHorizontal](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagefillhorizontal-1)
- [SetFrameImageFillVertical](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagefillvertical-1)
- [SetFrameImageFillRadial](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagefillradial-1)
- [SetFrameImageFillAmountExpression](#setframeimagefillamountexpression-3)
- [AnimateFrameImageFillAmount](#animateframeimagefillamount-5)
[](extra-section-end)

## void SetFrameImageFillAmountExpression(InGameUILayoutComponent ui, string expression, bool inverse = False) {setframeimagefillamountexpression-3}
```cs
void SetFrameImageFillAmountExpression(InGameUILayoutComponent ui, string expression, bool inverse = False)
```
#### Description
[](description-start)
Sets the fill amount for the background image. Expressions use data bound by [BindLuaTable](#bindluatable-2) or [BindUnitData](#bindunitdata-2).

* For more information, see the [notion guide on Data Binding.](https://funovus.notion.site/Data-Binding-Text-Expressions-3cf526b1dccb413c89b9e4d66370c2fa)
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set the background image fill amount for.
- *string* `expression` an expression for the fill amount (between 0 and 1).
- *bool* `inverse` if true, inverts the fill amount (does 1-expression).

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local vstack = DCEI.CreateVStackFrame(DCEI.GetUiRootFrame())

local data = {fill = 0.7}
DCEI.BindLuaTable("data", data)

local data_frame = DCEI.CreateFrame(vstack)
DCEI.SetFrameSize(data_frame, 100, 100)
DCEI.SetFrameImage(data_frame, DCEI.Texture("airship_onMap"))
DCEI.SetFrameImageFillAmountExpression(data_frame, "data.fill", false)

local unit_frame = DCEI.CreateFrame(vstack)
DCEI.SetFrameImage(unit_frame, "quest_page_progression_fill")
DCEI.SetFrameSize(unit_frame, 100, 10)

local unit = DCEI.CreateUnit(1, 1, DCEI.Unit("Standard MeleeUnit"), 16, 16, 0, -1)
DCEI.BindUnitData("selected", unit)
DCEI.SetFrameImageFillAmountExpression(unit_frame, "selected.Health.Fraction", false)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [BindUnitData](#bindunitdata-2)
- [BindLuaTable](#bindluatable-2)
- [SetFrameImageFillAmount](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagefillamount-2)
- [GetFrameImageFillAmount](Trigger-API-Reference-DCEI-Functions-Custom-UI#getframeimagefillamount-1)
- [SetFrameImageFillHorizontal](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagefillhorizontal-1)
- [SetFrameImageFillVertical](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagefillvertical-1)
- [SetFrameImageFillRadial](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagefillradial-1)
- [SetFrameImageFillOrigin](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagefillorigin-2)
- [AnimateFrameImageFillAmount](#animateframeimagefillamount-5)
[](extra-section-end)

## void SetFrameWidthExpression(InGameUILayoutComponent ui, string expression) {setframewidthexpression-2}
```cs
void SetFrameWidthExpression(InGameUILayoutComponent ui, string expression)
```
#### Description
[](description-start)
Sets the width of a UI frame. Expressions use data bound by [BindLuaTable](#bindluatable-2) or [BindUnitData](#bindunitdata-2).

* For more information, see the [notion guide on Data Binding.](https://funovus.notion.site/Data-Binding-Text-Expressions-3cf526b1dccb413c89b9e4d66370c2fa)
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set the width for.
- *string* `expression` an expression for the width.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local vstack = DCEI.CreateVStackFrame(DCEI.GetUiRootFrame())

local data_frame = DCEI.CreateFrame(vstack)
DCEI.SetFrameImageColor(data_frame, {r = 0.5, g = 0, b = 1, a = 1})

local data = {width = 100, height = 100}
DCEI.BindLuaTable("data", data)
DCEI.SetFrameWidthExpression(data_frame, "data.width")
DCEI.SetFrameHeightExpression(data_frame, "data.height")

local unit_frame = DCEI.CreateFrame(vstack)
DCEI.SetFrameImageColor(unit_frame, {r = 0, g = 1, b = 0.5, a = 1})

local unit = DCEI.CreateUnit(1, 1, DCEI.Unit("Standard MeleeUnit"), 16, 16, 0, -1)
DCEI.BindUnitData("selected", unit)
DCEI.SetFrameWidthExpression(unit_frame, "selected.Health.Max")
DCEI.SetFrameHeightExpression(unit_frame, "selected.Health.Current")
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [BindUnitData](#bindunitdata-2)
- [BindLuaTable](#bindluatable-2)
[](extra-section-end)

## void SetFrameHeightExpression(InGameUILayoutComponent ui, string expression) {setframeheightexpression-2}
```cs
void SetFrameHeightExpression(InGameUILayoutComponent ui, string expression)
```
#### Description
[](description-start)
Sets the height of a UI frame. Expressions use data bound by [BindLuaTable](#bindluatable-2) or [BindUnitData](#bindunitdata-2).

* For more information, see the [notion guide on Data Binding.](https://funovus.notion.site/Data-Binding-Text-Expressions-3cf526b1dccb413c89b9e4d66370c2fa)
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set the height for.
- *string* `expression` an expression for the height.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local vstack = DCEI.CreateVStackFrame(DCEI.GetUiRootFrame())

local data_frame = DCEI.CreateFrame(vstack)
DCEI.SetFrameImageColor(data_frame, {r = 0.5, g = 0, b = 1, a = 1})

local data = {width = 100, height = 100}
DCEI.BindLuaTable("data", data)
DCEI.SetFrameWidthExpression(data_frame, "data.width")
DCEI.SetFrameHeightExpression(data_frame, "data.height")

local unit_frame = DCEI.CreateFrame(vstack)
DCEI.SetFrameImageColor(unit_frame, {r = 0, g = 1, b = 0.5, a = 1})

local unit = DCEI.CreateUnit(1, 1, DCEI.Unit("Standard MeleeUnit"), 16, 16, 0, -1)
DCEI.BindUnitData("selected", unit)
DCEI.SetFrameWidthExpression(unit_frame, "selected.Health.Max")
DCEI.SetFrameHeightExpression(unit_frame, "selected.Health.Current")
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [BindUnitData](#bindunitdata-2)
- [BindLuaTable](#bindluatable-2)
[](extra-section-end)

## void SetFrameImageColor(InGameUILayoutComponent ui, ColorRGBA color) {setframeimagecolor-2}
```cs
void SetFrameImageColor(InGameUILayoutComponent ui, ColorRGBA color)
```
#### Description
[](description-start)
Applies a tint color to the frame using RGBA values (valid values are between 0 and 1). Note that frames without background images can be tinted a solid color. Alpha 1 is completely opaque, alpha 0 is completely transparent.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to tint.
- *[ColorRGBA](Trigger-API-Reference-DCEI-Types#colorrgba)* `color` the RGBA values for the line.  Also accepts hex codes, such as `"#32a852"`

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImageColor(frame, {r = 0.5, g = 0.5, b = 0, a = 0.5})
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameImageColorExpression(InGameUILayoutComponent ui, string r, string g, string b, string a) {setframeimagecolorexpression-5}
```cs
void SetFrameImageColorExpression(InGameUILayoutComponent ui, string r, string g, string b, string a)
```
#### Description
[](description-start)
Applies a tint color to the frame using RGBA values (valid values are between 0 and 1). Note that frames without background images can be tinted a solid color. Alpha 1 is completely opaque, alpha 0 is completely transparent. Expressions use data bound by [BindLuaTable](#bindluatable-2) or [BindUnitData](#bindunitdata-2).

* For more information, see the [notion guide on Data Binding.](https://funovus.notion.site/Data-Binding-Text-Expressions-3cf526b1dccb413c89b9e4d66370c2fa)
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to tint.
- *string* `r` an expression for the red value of the tint color (between 0 and 1).
- *string* `g` an expression for the green value of the tint color (between 0 and 1).
- *string* `b` an expression for the blue value of the tint color (between 0 and 1).
- *string* `a` an expression for the alpha value of the tint color (between 0 and 1).

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local vstack = DCEI.CreateVStackFrame(DCEI.GetUiRootFrame())

local data = {bg_color = {r = 0.5, g = 0, b = 1, a = 1}}
DCEI.BindLuaTable("data", data)

local data_frame = DCEI.CreateFrame(vstack)
DCEI.SetFrameSize(data_frame, 200, 100)
DCEI.SetFrameImageColorExpression(data_frame, "data.bg_color.r", "data.bg_color.g", "data.bg_color.b", "data.bg_color.a")

local unit_frame = DCEI.CreateFrame(vstack)
DCEI.SetFrameSize(unit_frame, 200, 100)

local unit = DCEI.CreateUnit(1, 1, DCEI.Unit("Standard MeleeUnit"), 16, 16, 0, -1)
DCEI.BindUnitData("selected", unit)

local rgbval = "selected.Health.Fraction"
DCEI.SetFrameImageColorExpression(unit_frame, rgbval, rgbval, rgbval, rgbval)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [BindUnitData](#bindunitdata-2)
- [BindLuaTable](#bindluatable-2)
[](extra-section-end)

## void SetFrameImageGrayScale(InGameUILayoutComponent ui, bool isGrayScale) {setframeimagegrayscale-2}
```cs
void SetFrameImageGrayScale(InGameUILayoutComponent ui, bool isGrayScale)
```
#### Description
[](description-start)
Sets if the background image is rendered in gray scale for a UI frame.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set the background image gray scale for.
- *bool* `isGrayScale` if true, renders the background image in gray scale. The default value is false for newly created frames.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame, 100, 100)
DCEI.SetFrameImage(frame, DCEI.Texture("airship_onMap"))
DCEI.SetFrameImageGrayScale(frame, true)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameTooltipText(InGameUILayoutComponent ui, string text) {setframetooltiptext-2}
```cs
void SetFrameTooltipText(InGameUILayoutComponent ui, string text)
```
#### Description
[](description-start)
Sets the tooltip text for a UI frame. Child frame tooltips will display over parent frame tooltips.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to set the tooltip text for.
- *string* `text` the text of the tooltip.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame, 100, 100)
DCEI.SetFrameImage(frame, DCEI.Texture("airship_onMap"))
DCEI.SetFrameTooltipText(frame, "Frame 1")
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [SetFrameTooltipOffset](#setframetooltipoffset-1)
- [SetFrameTooltipStyle](#setframetooltipstyle-1)
- [SetFrameTooltipPosition](#setframetooltipposition-1)
- [SetFrameTooltipImage](#setframetooltipimage-1)
- [SetFrameTooltipFontSize](#setframetooltipfontsize-1)
- [SetFrameTooltipPadding](#setframetooltippadding-4)
- [SetFrameTooltipMaxWidth](#setframetooltipmaxwidth-1)
- [SetFrameTooltipTextColor](#setframetooltiptextcolor-1)
[](extra-section-end)

## void SetFrameTooltipOffset(int offset) {setframetooltipoffset-1}
```cs
void SetFrameTooltipOffset(int offset)
```
#### Description
[](description-start)
Sets the tooltip offset from the cursor. This will affect all tooltips.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `offset` the offset from the cursor. Negative numbers will cause the tooltip to flicker.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame, 100, 100)
DCEI.SetFrameImage(frame, DCEI.Texture("airship_onMap"))
DCEI.SetFrameTooltipText(frame, "Frame 1")
DCEI.SetFrameTooltipOffset(100)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [SetFrameTooltipText()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetooltiptext-2)
- [SetFrameTooltipStyle](#setframetooltipstyle-1)
- [SetFrameTooltipPosition](#setframetooltipposition-1)
- [SetFrameTooltipImage](#setframetooltipimage-1)
- [SetFrameTooltipFontSize](#setframetooltipfontsize-1)
- [SetFrameTooltipPadding](#setframetooltippadding-4)
- [SetFrameTooltipMaxWidth](#setframetooltipmaxwidth-1)
- [SetFrameTooltipTextColor](#setframetooltiptextcolor-1)
[](extra-section-end)

## void SetFrameTooltipStyle(int style) {setframetooltipstyle-1}
```cs
void SetFrameTooltipStyle(int style)
```
#### Description
[](description-start)
Sets the tooltip style. This will affect all tooltips. By default, tooltips are displayed next to the cursor.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `style` the style. A value of `0` will display the tooltip next to the cursor (default). A value of `1` will display the tooltip next to the frame.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame, 100, 100)
DCEI.SetFrameImage(frame, DCEI.Texture("airship_onMap"))
DCEI.SetFrameTooltipText(frame, "Frame 1")
DCEI.SetFrameTooltipStyle(1)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [SetFrameTooltipText()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetooltiptext-2)
- [SetFrameTooltipOffset](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetooltipoffset-1)
- [SetFrameTooltipPosition](#setframetooltipposition-1)
- [SetFrameTooltipImage](#setframetooltipimage-1)
- [SetFrameTooltipFontSize](#setframetooltipfontsize-1)
- [SetFrameTooltipPadding](#setframetooltippadding-4)
- [SetFrameTooltipMaxWidth](#setframetooltipmaxwidth-1)
- [SetFrameTooltipTextColor](#setframetooltiptextcolor-1)
[](extra-section-end)

## void SetFrameTooltipPosition(int position) {setframetooltipposition-1}
```cs
void SetFrameTooltipPosition(int position)
```
#### Description
[](description-start)
Sets the tooltip position. This will affect all tooltips.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `position` the position of the tooltip. A value of `0` will display the tooltip to the right of the frame. A value of `1` will display the tooltip at the top.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame, 100, 100)
DCEI.SetFrameImage(frame, DCEI.Texture("airship_onMap"))
DCEI.SetFrameTooltipText(frame, "Frame 1")
DCEI.SetFrameTooltipPosition(1)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [SetFrameTooltipText()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetooltiptext-2)
- [SetFrameTooltipOffset](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetooltipoffset-1)
- [SetFrameTooltipStyle](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetooltipstyle-1)
- [SetFrameTooltipImage](#setframetooltipimage-1)
- [SetFrameTooltipFontSize](#setframetooltipfontsize-1)
- [SetFrameTooltipPadding](#setframetooltippadding-4)
- [SetFrameTooltipMaxWidth](#setframetooltipmaxwidth-1)
- [SetFrameTooltipTextColor](#setframetooltiptextcolor-1)
[](extra-section-end)

## void SetFrameTooltipImage(string name) {setframetooltipimage-1}
```cs
void SetFrameTooltipImage(string name)
```
#### Description
[](description-start)
Sets a background image for tooltips. This will affect all tooltips.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `name` the name of the background image.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame, 100, 100)
DCEI.SetFrameImage(frame, DCEI.Texture("airship_onMap"))
DCEI.SetFrameTooltipText(frame, "Frame 1")
DCEI.SetFrameTooltipImage(DCEI.Texture("airship_onMap"))
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [SetFrameTooltipText()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetooltiptext-2)
- [SetFrameTooltipOffset](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetooltipoffset-1)
- [SetFrameTooltipStyle](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetooltipstyle-1)
- [SetFrameTooltipPosition](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetooltipposition-1)
- [SetFrameTooltipFontSize](#setframetooltipfontsize-1)
- [SetFrameTooltipPadding](#setframetooltippadding-4)
- [SetFrameTooltipMaxWidth](#setframetooltipmaxwidth-1)
- [SetFrameTooltipTextColor](#setframetooltiptextcolor-1)
[](extra-section-end)

## void SetFrameTooltipFontSize(int size) {setframetooltipfontsize-1}
```cs
void SetFrameTooltipFontSize(int size)
```
#### Description
[](description-start)
Sets the tooltip font size. This will affect all tooltips.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `size` the font size.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame, 100, 100)
DCEI.SetFrameImage(frame, DCEI.Texture("airship_onMap"))
DCEI.SetFrameTooltipText(frame, "Frame 1")
DCEI.SetFrameTooltipFontSize(50)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [SetFrameTooltipText()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetooltiptext-2)
- [SetFrameTooltipOffset](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetooltipoffset-1)
- [SetFrameTooltipStyle](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetooltipstyle-1)
- [SetFrameTooltipPosition](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetooltipposition-1)
- [SetFrameTooltipImage](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetooltipimage-1)
- [SetFrameTooltipPadding](#setframetooltippadding-4)
- [SetFrameTooltipMaxWidth](#setframetooltipmaxwidth-1)
- [SetFrameTooltipTextColor](#setframetooltiptextcolor-1)
[](extra-section-end)

## void SetFrameTooltipPadding(int left, int right, int top, int bottom) {setframetooltippadding-4}
```cs
void SetFrameTooltipPadding(int left, int right, int top, int bottom)
```
#### Description
[](description-start)
Sets the tooltip padding. This will affect all tooltips.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `left` the left padding.
- *int* `right` the right padding.
- *int* `top` the top padding.
- *int* `bottom` the bottom padding.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame, 100, 100)
DCEI.SetFrameImage(frame, DCEI.Texture("airship_onMap"))
DCEI.SetFrameTooltipText(frame, "Frame 1")
DCEI.SetFrameTooltipPadding(30, 30, 30, 30)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [SetFrameTooltipText()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetooltiptext-2)
- [SetFrameTooltipOffset](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetooltipoffset-1)
- [SetFrameTooltipStyle](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetooltipstyle-1)
- [SetFrameTooltipPosition](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetooltipposition-1)
- [SetFrameTooltipImage](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetooltipimage-1)
- [SetFrameTooltipFontSize](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetooltipfontsize-1)
- [SetFrameTooltipMaxWidth](#setframetooltipmaxwidth-1)
- [SetFrameTooltipTextColor](#setframetooltiptextcolor-1)
[](extra-section-end)

## void SetFrameTooltipMaxWidth(int width) {setframetooltipmaxwidth-1}
```cs
void SetFrameTooltipMaxWidth(int width)
```
#### Description
[](description-start)
Sets the tooltip max width. Tooltip text that exceeds this width will wrap. This will affect all tooltips.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `width` the max width.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame, 100, 100)
DCEI.SetFrameImage(frame, DCEI.Texture("airship_onMap"))
DCEI.SetFrameTooltipText(frame, "Frame 1")
DCEI.SetFrameTooltipFontSize(50)
DCEI.SetFrameTooltipMaxWidth(100)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [SetFrameTooltipText()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetooltiptext-2)
- [SetFrameTooltipOffset](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetooltipoffset-1)
- [SetFrameTooltipStyle](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetooltipstyle-1)
- [SetFrameTooltipPosition](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetooltipposition-1)
- [SetFrameTooltipImage](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetooltipimage-1)
- [SetFrameTooltipFontSize](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetooltipfontsize-1)
- [SetFrameTooltipPadding](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetooltippadding-4)
- [SetFrameTooltipTextColor](#setframetooltiptextcolor-1)
[](extra-section-end)

## void SetFrameTooltipTextColor(ColorRGB color) {setframetooltiptextcolor-1}
```cs
void SetFrameTooltipTextColor(ColorRGB color)
```
#### Description
[](description-start)
Sets the tooltip text color. This will affect all tooltips.
[](description-end)

#### Parameters
[](parameters-start)
- *[ColorRGB](Trigger-API-Reference-DCEI-Types#colorrgb)* `color` the RGB values for the line. Also accepts hex values such as `"#32a852"`

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame, 100, 100)
DCEI.SetFrameImage(frame, DCEI.Texture("airship_onMap"))
DCEI.SetFrameTooltipText(frame, "Frame 1")
DCEI.SetFrameTooltipTextColor({r = 0.5, g = 0.5, b = 0})
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [SetFrameTooltipText()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetooltiptext-2)
- [SetFrameTooltipOffset](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetooltipoffset-1)
- [SetFrameTooltipStyle](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetooltipstyle-1)
- [SetFrameTooltipPosition](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetooltipposition-1)
- [SetFrameTooltipImage](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetooltipimage-1)
- [SetFrameTooltipFontSize](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetooltipfontsize-1)
- [SetFrameTooltipPadding](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetooltippadding-4)
- [SetFrameTooltipMaxWidth](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetooltipmaxwidth-1)
[](extra-section-end)

## void SetButtonFrameClickSound(InGameUILayoutComponent ui, string path) {setbuttonframeclicksound-2}
```cs
void SetButtonFrameClickSound(InGameUILayoutComponent ui, string path)
```
#### Description
[](description-start)
Sets the click sound for the given button.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the button.
- *string* `path` the sound file.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local button = DCEI.CreateButtonFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(button, 100, 100)
DCEI.SetButtonFrameClickSound(button, DCEI.Sound("ancienttree_ability_01"))
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateButtonFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createbuttonframe-1)
[](extra-section-end)

## void SetButtonFrameEnable(InGameUILayoutComponent ui, bool enable) {setbuttonframeenable-2}
```cs
void SetButtonFrameEnable(InGameUILayoutComponent ui, bool enable)
```
#### Description
[](description-start)
Enables or disables a button. Disabled buttons don't accept mouse input and have their background image tinted darker unless given a [SetButtonFrameDisabledImage](Trigger-API-Reference-DCEI-Functions-Custom-UI#setbuttonframedisabledimage-2).
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the button frame.
- *bool* `enable` if true, enables the button. This is true by default for newly created buttons.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local button = DCEI.CreateButtonFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(button, 100, 100)
DCEI.SetButtonFrameEnable(button, false)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateButtonFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createbuttonframe-1)
[](extra-section-end)

## void SetButtonFrameDisabledImage(InGameUILayoutComponent ui, string name) {setbuttonframedisabledimage-2}
```cs
void SetButtonFrameDisabledImage(InGameUILayoutComponent ui, string name)
```
#### Description
[](description-start)
Sets the background image for a button while it is disabled.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the button frame.
- *string* `name` the name of the background image.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local button = DCEI.CreateButtonFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(button, 100, 100)
DCEI.SetButtonFrameEnable(button, false)
DCEI.SetButtonFrameDisabledImage(button, DCEI.Texture("airship_onMap"))
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameRotation(InGameUILayoutComponent ui, float degrees) {setframerotation-2}
```cs
void SetFrameRotation(InGameUILayoutComponent ui, float degrees)
```
#### Description
[](description-start)
Sets the rotation for a UI frame and its children.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the UI frame to rotate.
- *float* `degrees` the degrees to rotate counterclockwise. Negative values will cause clockwise rotation.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame, 100, 100)
DCEI.SetFrameImageColor(frame, {r = 1, g = 0, b = 1, a = 0.5})
DCEI.SetFrameRotation(frame, 45)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameRotation3D(InGameUILayoutComponent ui, float x, float y, float z) {setframerotation3d-4}
```cs
void SetFrameRotation3D(InGameUILayoutComponent ui, float x, float y, float z)
```
#### Description
[](description-start)
Rotates a frame and its children in 3D space. ```DCEI.SetFrameRotation3D(ui, 0, 180, 0)``` will flip an image horizontally.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to rotate.
- *float* `x` the angle to rotate the frame in the "x" plane.
- *float* `y` the angle to rotate the frame in the "y" plane.
- *float* `z` the angle to rotate the frame in the "z" plane.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local big_hand = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImage(big_hand, DCEI.Texture("pointy_finger"))
DCEI.SetFrameSize(big_hand, 108, 87)
DCEI.SetFrameRotation3D(big_hand, 0, 180, 0)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void BindUnitData(string name, unit unit) {bindunitdata-2}
```cs
void BindUnitData(string name, unit unit)
```
#### Description
[](description-start)
Bind a given unit to a key, allowing the unit's attributes to be accessed by expressions. 
* [Accessible data bound values.](Data-Binding)
* For more information, see the [notion guide on Data Binding.](https://funovus.notion.site/Data-Binding-Text-Expressions-3cf526b1dccb413c89b9e4d66370c2fa)
[](description-end)

#### Parameters
[](parameters-start)
- *string* `name` the string to bind the unit to.
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit.. Unit attributes list:

```
unit.Info.Icon
unit.Info.Name
unit.Health.Current
unit.Health.Max
unit.Health.Percentage
unit.Health.Fraction
unit.Health.Regeneration
unit.Shield.Current
unit.Shield.Max
unit.Shield.Percentage
unit.Shield.Fraction
unit.Shield.Regeneration
unit.Mana.Current
unit.Mana.Max
unit.Mana.Percentage
unit.Mana.Fraction
unit.Mana.Regeneration
unit.Ability.ability_name.CooldownRatio
unit.Ability.ability_name.MaxCharge
unit.Ability.ability_name.ChargeCount
unit.Expression.some_named_expression
```

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- create and bind a unit
local unit = DCEI.CreateUnit(1, 1, DCEI.Unit("Standard MeleeUnit"), 16, 16, 0, -1)
DCEI.BindUnitData("selected", unit)

local stats = {}
local vstack = DCEI.CreateVStackFrame(DCEI.GetUiRootFrame())
stats.health_label = DCEI.CreateTextFrame(vstack)

-- make it so that the healthbar shows <current HP>/<max HP>
DCEI.SetTextFrameTextExpression(stats.health_label, "{selected.Health.Current}/{selected.Health.Max}")

-- damage unit every second
DCEI.TriggerAddTimerEventPeriodicIndefinite(
    function()
        DCEI.SetHealth(unit, DCEI.GetHealth(unit) - 1)
    end,
    1, true
)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [SetTextFrameTextExpression()](Trigger-API-Reference-DCEI-Functions-Custom-UI#settextframetextexpression-2)
- [SetFrameImageExpression()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimageexpression-2)
- [SetFrameImageGrayScaleExpression()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagegrayscaleexpression-2)
- [SetButtonFrameEnableExpression()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setbuttonframeenableexpression-2)
- [SetFrameImageFillAmountExpression()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagefillamountexpression-3)
- [SetFrameWidthExpression()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframewidthexpression-2)
- [SetFrameHeightExpression()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeheightexpression-2)
- [SetFrameImageColorExpression()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagecolorexpression-5)
[](extra-section-end)

## void BindLuaTable(string name, object value) {bindluatable-2}
```cs
void BindLuaTable(string name, object value)
```
#### Description
[](description-start)
Binds a lua table to a string, allowing the data inside to be accessed by expressions. Updating the bound table values will update any UI that reference these values in an expression. Some expressions evaluate `1` and `0` as `true` and `false`, respectively. See also [BindUnitData](Trigger-API-Reference-DCEI-Functions-Custom-UI#bindunitdata-2)
[](description-end)

#### Parameters
[](parameters-start)
- *string* `name` the string to bind the data to.
- *object* `value` the lua table.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- create and bind a data table
local data_table = {
    score = 0
}
DCEI.BindLuaTable("data", data_table)

-- create a new text frame and bind its text to the score variable
local label = DCEI.CreateTextFrame(DCEI.GetUiRootFrame())
DCEI.SetTextFrameTextExpression(label, "Score: {data.score}")

-- increment score every second
DCEI.TriggerAddTimerEventPeriodicIndefinite(
    function()
        data_table.score = data_table.score + 1 
    end,
    1, true
)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [SetTextFrameTextExpression()](Trigger-API-Reference-DCEI-Functions-Custom-UI#settextframetextexpression-2)
- [SetFrameImageExpression()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimageexpression-2)
- [SetFrameImageGrayScaleExpression()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagegrayscaleexpression-2)
- [SetButtonFrameEnableExpression()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setbuttonframeenableexpression-2)
- [SetFrameImageFillAmountExpression()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagefillamountexpression-3)
- [SetFrameWidthExpression()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframewidthexpression-2)
- [SetFrameHeightExpression()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeheightexpression-2)
- [SetFrameImageColorExpression()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagecolorexpression-5)
[](extra-section-end)

## bool IsFrameActive(InGameUILayoutComponent ui) {isframeactive-1}
```cs
bool IsFrameActive(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Returns whether the given UI frame is active.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the UI frame to return the status of.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame, 100, 100)
DCEI.SetFrameImageColor(frame, {r = 1, g = 0, b = 1, a = 0.5})

local is_active = DCEI.IsFrameActive(frame)
DCEI.LogMessage(tostring(is_active))
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [SetFrameActive](#setframeactive-2)
[](extra-section-end)

## void SetFrameActive(InGameUILayoutComponent ui, bool value) {setframeactive-2}
```cs
void SetFrameActive(InGameUILayoutComponent ui, bool value)
```
#### Description
[](description-start)
Sets whether the given UI frame and its children are active. Inactive frames are not displayed.

Creating new UI frames under inactive parent frames can cause issues and should be avoided. You can use [UpdateFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#updateframe-2) to safely create new frames under inactive parents.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the UI frame to set the status of.
- *bool* `value` if true, sets the frame to active. Newly created frames are active by default.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame, 100, 100)
DCEI.SetFrameImageColor(frame, {r = 1, g = 0, b = 1, a = 0.5})

DCEI.SetFrameActive(frame, false)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameBlockInput(InGameUILayoutComponent ui, bool value) {setframeblockinput-2}
```cs
void SetFrameBlockInput(InGameUILayoutComponent ui, bool value)
```
#### Description
[](description-start)
Makes a UI frame block all input. Requires a [SetFrameImage](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimage-2) to be set (but it can be made [SetFrameImageColor](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagecolor-2)).
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to adjust.
- *bool* `value` whether or not the frame blocks input.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local fullscreen_mask = DCEI.CreateFrame(DCEI.GetUiRootFrame())

DCEI.SetFrameMatchParent(fullscreen_mask, true)
DCEI.SetFrameImageColor(fullscreen_mask, {r = 0, g = 0, b = 0, a = 0.5})
DCEI.SetFrameBlockInput(fullscreen_mask, true)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void AttachFrameToUnit(InGameUILayoutComponent ui, unit unit, UnitLabelOptions options, bool useCurrentUiRoot = False) {attachframetounit-4}
```cs
void AttachFrameToUnit(InGameUILayoutComponent ui, unit unit, UnitLabelOptions options, bool useCurrentUiRoot = False)
```
#### Description
[](description-start)
Attaches a UI frame to a unit, useful for creating custom health and status bars.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to attach.
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to attach the frame to.
- *[UnitLabelOptions](Trigger-API-Reference-DCEI-Types#unitlabeloptions)* `options` [accepted values](UnitLabelOptions)
- *bool* `useCurrentUiRoot` (optional) when true, uses the existing UI root for the attached UI layer. Otherwise the attached UI will be rendered beneath UI root.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateTextFrame(DCEI.GetUiRootFrame())
DCEI.SetTextFrameText(frame, "Bob")

local unit = DCEI.CreateUnit(1, 1, DCEI.Unit("Standard MeleeUnit"), 16, 16, 0, -1)

local options = {
    offset = {up = 1.2},
    center_at_unit_origin = true
}

DCEI.AttachFrameToUnit(frame, unit, options)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetMouseCursorFrame(InGameUILayoutComponent ui) {setmousecursorframe-1}
```cs
void SetMouseCursorFrame(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Using an UI to replace current cursor image
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the frame to attach.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateTextFrame(DCEI.GetUiRootFrame())
DCEI.SetTextFrameText(frame, "Bob")

DCEI.SetMouseCursorFrame(frame)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetMouseCursorFrameForPlayer(int player, InGameUILayoutComponent ui) {setmousecursorframeforplayer-2}
```cs
void SetMouseCursorFrameForPlayer(int player, InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Set cursor image only for a specific player. Only useful in multiplayer.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `player` player id
- *InGameUILayoutComponent* `ui` the frame to attach.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateTextFrame(DCEI.GetUiRootFrame())
DCEI.SetTextFrameText(frame, "Bob")

DCEI.SetMouseCursorFrameForPlayer(1, frame)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void AttachOffscreenUnitIndicatorFrame(InGameUILayoutComponent ui, unit unit, InGameUILayoutComponent rotatingPointerChildFrame = null) {attachoffscreenunitindicatorframe-3}
```cs
void AttachOffscreenUnitIndicatorFrame(InGameUILayoutComponent ui, unit unit, InGameUILayoutComponent rotatingPointerChildFrame = null)
```
#### Description
[](description-start)
Attaches a UI frame as an offscreen indicator to a unit. This frame will only be visible if the related unit is off screen for the viewing player.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the UI frame to use as an offscreen indicator.
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to attach the indicator to.
- *InGameUILayoutComponent* `rotatingPointerChildFrame` (optional) if set, this frame will rotate towards the direction of the offscreen unit.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local unit = DCEI.CreateUnit(1, 1, DCEI.Unit("Standard MeleeUnit"), 30, 30, 0, -1)
DCEI.Move(unit, 30, 0)

local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImageColor(frame, {r = 1, g = 1, b = 1, a = 0.5})
DCEI.SetFrameSize(frame, 100, 100)

local frame2 = DCEI.CreateFrame(frame)
DCEI.SetFrameImage(frame2, DCEI.Texture("airship_onMap"))
DCEI.SetFrameSize(frame2, 100, 100)

DCEI.AttachOffscreenUnitIndicatorFrame(frame, unit, frame2)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetOffscreenUnitIndicatorFrameCanvasOffset(InGameUILayoutComponent ui, Float2 offset) {setoffscreenunitindicatorframecanvasoffset-2}
```cs
void SetOffscreenUnitIndicatorFrameCanvasOffset(InGameUILayoutComponent ui, Float2 offset)
```
#### Description
[](description-start)
Adjusts the offset of the frame that has been attached using the AttachOffscreenUnitIndicatorFrame API.  
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the UI frame used as an offscreen indicator.
- *[Float2](Trigger-API-Reference-DCEI-Types#float2)* `offset` the offset distance from the screen.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local unit = DCEI.CreateUnit(1, 1, DCEI.Unit("Standard MeleeUnit"), 30, 30, 0, -1)
DCEI.Move(unit, 30, 0)

local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImageColor(frame, {r = 1, g = 1, b = 1, a = 0.5})
DCEI.SetFrameSize(frame, 100, 100)

local frame2 = DCEI.CreateFrame(frame)
DCEI.SetFrameImage(frame2, DCEI.Texture("airship_onMap"))
DCEI.SetFrameSize(frame2, 100, 100)

DCEI.AttachOffscreenUnitIndicatorFrame(frame, unit, frame2)
DCEI.SetOffscreenUnitIndicatorFrameCanvasOffset(frame, 2)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void MoveFrameToTop(InGameUILayoutComponent ui) {moveframetotop-1}
```cs
void MoveFrameToTop(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Moves a UI frame (and all of its parents) above all sibling UI frames.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the UI frame to move to the top.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame1 = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame1, 200, 200)
DCEI.SetFrameHorizontalOffsetInParent(frame1, -50)
DCEI.SetFrameImageColor(frame1, {r = 1, g = 0, b = 0, a = 1})
    
local frame2 = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame2, 200, 200)
DCEI.SetFrameHorizontalOffsetInParent(frame2, 50)
DCEI.SetFrameImageColor(frame2, {r = 0, g = 0, b = 1, a = 1})

DCEI.TriggerAddTimerEventElapsed(
    function()
        -- frame1 is moved above frame2, by default frame2 will overlap frame1
        DCEI.MoveFrameToTop(frame1)
    end,
    1,
    true
)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void MoveFrameToBottom(InGameUILayoutComponent ui) {moveframetobottom-1}
```cs
void MoveFrameToBottom(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Moves a UI frame (and all of its parents) below all sibling UI frames.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the UI frame to move to the bottom.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame1 = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame1, 200, 200)
DCEI.SetFrameHorizontalOffsetInParent(frame1, -50)
DCEI.SetFrameImageColor(frame1, {r = 1, g = 0, b = 0, a = 1})
    
local frame2 = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame2, 200, 200)
DCEI.SetFrameHorizontalOffsetInParent(frame2, 50)
DCEI.SetFrameImageColor(frame2, {r = 0, g = 0, b = 1, a = 1})

DCEI.TriggerAddTimerEventElapsed(
  function()
        -- frame2 is moved below frame1, by default frame2 will overlap frame1
        DCEI.MoveFrameToBottom(frame2)
    end,
    1,
    true
)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetPauseButtonFrame(InGameUILayoutComponent ui) {setpausebuttonframe-1}
```cs
void SetPauseButtonFrame(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Sets a button to be used as the game's pause button. Setting this will replace the default pause button in the top right corner (hiding the default UI).
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the button frame to set as the pause button.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local button = DCEI.CreateButtonFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(button, 100, 100)
DCEI.SetPauseButtonFrame(button)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateButtonFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createbuttonframe-1)
- [SetPauseMenuFrame()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setpausemenuframe-1)
[](extra-section-end)

## void SetPauseMenuFrame(InGameUILayoutComponent ui) {setpausemenuframe-1}
```cs
void SetPauseMenuFrame(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Sets a UI frame to be the pause menu, replacing the default pause menu UI and functionality.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the UI frame to set as the pause menu.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- create a custom pause menu
local menu = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(menu, 400, 600)
DCEI.SetFrameImage(menu, DCEI.Texture("frame01_purple"))
DCEI.SetPauseMenuFrame(menu)
    
-- the pause menu is inactive by default but we can update it safely with UpdateFrame
DCEI.UpdateFrame(
    menu,
    function()
        local resume_button = DCEI.CreateButtonFrame(menu)
        DCEI.SetFrameSize(resume_button, 200, 100)
        DCEI.SetOnClickCallback(
            resume_button, 
            function()
                DCEI.HidePauseMenuFrame(menu)
            end
        )
    end
)

-- create a custom pause menu button
local pause_button = DCEI.CreateButtonFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImage(pause_button, DCEI.Texture("btn_red"))
DCEI.SetFrameTopAlignmentInParent(pause_button)
DCEI.SetFrameLeftAlignmentInParent(pause_button)
DCEI.SetFrameSize(pause_button, 200, 200)

-- hookup the pause menu button callback
DCEI.SetOnClickCallback(
    pause_button,
    function()
        DCEI.ShowPauseMenuFrame(menu)
    end
)

-- add custom pause menu callback
DCEI.SetPauseMenuCallback(
    function(pause)
        if pause then
            Core.GameSpeed.Set(0)
        else
            Core.GameSpeed.Set(1)
        end
    end
)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [SetPauseButtonFrame()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setpausemenuframe-1)
- [ShowPauseMenuFrame()](#showpausemenuframe-0)
- [HidePauseMenuFrame()](#hidepausemenuframe-0)
- [SetPauseMenuCallback()](Trigger-API-Reference-DCEI-Events-Input#setpausemenucallback-1)
- [SetPauseMenuFrameResumeButton()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setpausemenuframeresumebutton-1)
- [SetPauseMenuFrameQuitButton()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setpausemenuframequitbutton-1)
- [SetPauseMenuFrameRestartButton()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setpausemenuframerestartbutton-1)
- [SetPauseMenuFramePlayLevelButton()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setpausemenuframeplaylevelbutton-3)
- [SetPauseMenuFrameSettingsButton()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setpausemenuframesettingsbutton-1)
- [SuppressPauseMenuOnApplicationPause()](#suppresspausemenuonapplicationpause-0)
[](extra-section-end)

## void ShowPauseMenuFrame() {showpausemenuframe-0}
```cs
void ShowPauseMenuFrame()
```
#### Description
[](description-start)
Show the current pause menu.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
-- create a custom pause menu
local menu = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(menu, 400, 600)
DCEI.SetFrameImage(menu, DCEI.Texture("frame01_purple"))
DCEI.SetPauseMenuFrame(menu)
    
-- the pause menu is inactive by default but we can update it safely with UpdateFrame
DCEI.UpdateFrame(
    menu,
    function()
        local resume_button = DCEI.CreateButtonFrame(menu)
        DCEI.SetFrameSize(resume_button, 200, 100)
        DCEI.SetOnClickCallback(
            resume_button, 
            function()
                DCEI.HidePauseMenuFrame(menu)
            end
        )
    end
)

-- create a custom pause menu button
local pause_button = DCEI.CreateButtonFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImage(pause_button, DCEI.Texture("btn_red"))
DCEI.SetFrameTopAlignmentInParent(pause_button)
DCEI.SetFrameLeftAlignmentInParent(pause_button)
DCEI.SetFrameSize(pause_button, 200, 200)

-- hookup the pause menu button callback
DCEI.SetOnClickCallback(
    pause_button,
    function()
        DCEI.ShowPauseMenuFrame(menu)
    end
)

-- add custom pause menu callback
DCEI.SetPauseMenuCallback(
    function(pause)
        if pause then
            Core.GameSpeed.Set(0)
        else
            Core.GameSpeed.Set(1)
        end
    end
)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void HidePauseMenuFrame() {hidepausemenuframe-0}
```cs
void HidePauseMenuFrame()
```
#### Description
[](description-start)
Hide the pause menu frame.
[](description-end)

#### Example Usage
[](example-usage-start)
```Lua
-- create a custom pause menu
local menu = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(menu, 400, 600)
DCEI.SetFrameImage(menu, DCEI.Texture("frame01_purple"))
DCEI.SetPauseMenuFrame(menu)
    
-- the pause menu is inactive by default but we can update it safely with UpdateFrame
DCEI.UpdateFrame(
    menu,
    function()
        local resume_button = DCEI.CreateButtonFrame(menu)
        DCEI.SetFrameSize(resume_button, 200, 100)
        DCEI.SetOnClickCallback(
            resume_button, 
            function()
                DCEI.HidePauseMenuFrame(menu)
            end
        )
    end
)

-- create a custom pause menu button
local pause_button = DCEI.CreateButtonFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImage(pause_button, DCEI.Texture("btn_red"))
DCEI.SetFrameTopAlignmentInParent(pause_button)
DCEI.SetFrameLeftAlignmentInParent(pause_button)
DCEI.SetFrameSize(pause_button, 200, 200)

-- hookup the pause menu button callback
DCEI.SetOnClickCallback(
    pause_button,
    function()
        DCEI.ShowPauseMenuFrame(menu)
    end
)

-- add custom pause menu callback
DCEI.SetPauseMenuCallback(
    function(pause)
        if pause then
            Core.GameSpeed.Set(0)
        else
            Core.GameSpeed.Set(1)
        end
    end
)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetPauseMenuFrameMusicButton(InGameUILayoutComponent ui) {setpausemenuframemusicbutton-1}
```cs
void SetPauseMenuFrameMusicButton(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Replace default music button to this UI.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the target UI.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```Lua
local music_button = DCEI.CreateButtonFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(music_button, 200, 200)
DCEI.SetFrameImage(music_button, DCEI.Texture("btn_blue"))
DCEI.SetPauseMenuFrameMusicButton(music_button)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetPauseMenuFrameSoundButton(InGameUILayoutComponent ui) {setpausemenuframesoundbutton-1}
```cs
void SetPauseMenuFrameSoundButton(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Replace default sound button to this UI.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the target UI.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```Lua
local sound_button = DCEI.CreateButtonFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(sound_button, 200, 200)
DCEI.SetFrameImage(sound_button, DCEI.Texture("btn_blue"))
DCEI.SetPauseMenuFrameMusicButton(sound_button)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetPauseMenuFrameResumeButton(InGameUILayoutComponent ui) {setpausemenuframeresumebutton-1}
```cs
void SetPauseMenuFrameResumeButton(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Sets the pause menu resume button. This button will exit the pause menu.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the button to set as the resume button.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local button = DCEI.CreateButtonFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(button, 100, 100)
DCEI.SetPauseButtonFrame(button)

local menu = DCEI.CreateVStackFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(menu, 400, 600)
DCEI.SetFrameImage(menu,  DCEI.Texture("frame01_purple"))

local resume = DCEI.CreateButtonFrame(menu)
DCEI.SetFrameSize(resume, 400, 200)
DCEI.SetPauseMenuFrameResumeButton(resume)

local resume_text = DCEI.CreateTextFrame(resume)
DCEI.SetTextFrameText(resume_text, "Resume")

DCEI.SetPauseMenuFrame(menu)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateButtonFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createbuttonframe-1)
[](extra-section-end)

## void SetPauseMenuFrameQuitButton(InGameUILayoutComponent ui) {setpausemenuframequitbutton-1}
```cs
void SetPauseMenuFrameQuitButton(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Sets the pause menu quit button. This button will exit the game.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the button to set as the quit button.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local button = DCEI.CreateButtonFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(button, 100, 100)
DCEI.SetPauseButtonFrame(button)

local menu = DCEI.CreateVStackFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImage(menu,  DCEI.Texture("frame01_purple"))
DCEI.SetFramePadding(menu, 20)
DCEI.SetFrameSpacing(menu, 20)

local resume = DCEI.CreateButtonFrame(menu)
DCEI.SetFrameSize(resume, 200, 100)
DCEI.SetPauseMenuFrameResumeButton(resume)

local resume_text = DCEI.CreateTextFrame(resume)
DCEI.SetTextFrameText(resume_text, "Resume")

local quit = DCEI.CreateButtonFrame(menu)
DCEI.SetFrameSize(quit, 200, 100)
DCEI.SetPauseMenuFrameQuitButton(quit)

local quit_text = DCEI.CreateTextFrame(quit)
DCEI.SetTextFrameText(quit_text, "Quit")

DCEI.SetPauseMenuFrame(menu)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateButtonFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createbuttonframe-1)
[](extra-section-end)

## void SetPauseMenuFrameRestartButton(InGameUILayoutComponent ui) {setpausemenuframerestartbutton-1}
```cs
void SetPauseMenuFrameRestartButton(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Sets the pause menu restart button. This button will restart the game.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the button to set as the restart button.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local button = DCEI.CreateButtonFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(button, 100, 100)
DCEI.SetPauseButtonFrame(button)

local menu = DCEI.CreateVStackFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImage(menu,  DCEI.Texture("frame01_purple"))
DCEI.SetFramePadding(menu, 20)
DCEI.SetFrameSpacing(menu, 20)

local resume = DCEI.CreateButtonFrame(menu)
DCEI.SetFrameSize(resume, 200, 100)
DCEI.SetPauseMenuFrameResumeButton(resume)

local resume_text = DCEI.CreateTextFrame(resume)
DCEI.SetTextFrameText(resume_text, "Resume")

local quit = DCEI.CreateButtonFrame(menu)
DCEI.SetFrameSize(quit, 200, 100)
DCEI.SetPauseMenuFrameQuitButton(quit)

local quit_text = DCEI.CreateTextFrame(quit)
DCEI.SetTextFrameText(quit_text, "Quit")

local restart = DCEI.CreateButtonFrame(menu)
DCEI.SetFrameSize(restart, 200, 100)
DCEI.SetPauseMenuFrameRestartButton(restart)

local restart_text = DCEI.CreateTextFrame(restart)
DCEI.SetTextFrameText(restart_text, "Restart")

DCEI.SetPauseMenuFrame(menu)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateButtonFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createbuttonframe-1)
[](extra-section-end)

## void SetPauseMenuFramePlayLevelButton(InGameUILayoutComponent ui, string path, string displayName) {setpausemenuframeplaylevelbutton-3}
```cs
void SetPauseMenuFramePlayLevelButton(InGameUILayoutComponent ui, string path, string displayName)
```
#### Description
[](description-start)
Sets the pause menu play level button. This button will play the specified level, exiting the current one.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the button to set as the play level button.
- *string* `path` the level's path.
- *string* `displayName` the name to display for the level.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local button = DCEI.CreateButtonFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(button, 100, 100)
DCEI.SetPauseButtonFrame(button)

local menu = DCEI.CreateVStackFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImage(menu,  DCEI.Texture("frame01_purple"))
DCEI.SetFramePadding(menu, 20)
DCEI.SetFrameSpacing(menu, 20)

local resume = DCEI.CreateButtonFrame(menu)
DCEI.SetFrameSize(resume, 200, 100)
DCEI.SetPauseMenuFrameResumeButton(resume)

local resume_text = DCEI.CreateTextFrame(resume)
DCEI.SetTextFrameText(resume_text, "Resume")

local quit = DCEI.CreateButtonFrame(menu)
DCEI.SetFrameSize(quit, 200, 100)
DCEI.SetPauseMenuFrameQuitButton(quit)

local quit_text = DCEI.CreateTextFrame(quit)
DCEI.SetTextFrameText(quit_text, "Quit")

local restart = DCEI.CreateButtonFrame(menu)
DCEI.SetFrameSize(restart, 200, 100)
DCEI.SetPauseMenuFrameRestartButton(restart)

local restart_text = DCEI.CreateTextFrame(restart)
DCEI.SetTextFrameText(restart_text, "Restart")

local play_level = DCEI.CreateButtonFrame(menu)
DCEI.SetFrameSize(play_level, 200, 100)
DCEI.SetPauseMenuFramePlayLevelButton(play_level, "Workshop 02 - Debugging & Foundations", "Level")

local play_level_text = DCEI.CreateTextFrame(play_level)
DCEI.SetTextFrameText(play_level_text, "Open Workshop 02")

DCEI.SetPauseMenuFrame(menu)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateButtonFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createbuttonframe-1)
[](extra-section-end)

## void SetPauseMenuFrameSettingsButton(InGameUILayoutComponent ui) {setpausemenuframesettingsbutton-1}
```cs
void SetPauseMenuFrameSettingsButton(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Sets the pause menu settings button. Note that the settings menu only appears in standalone builds--nothing will happen if this button is used in editor play mode.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the button to set as the settings button.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local button = DCEI.CreateButtonFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(button, 100, 100)
DCEI.SetPauseButtonFrame(button)

local menu = DCEI.CreateVStackFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImage(menu,  DCEI.Texture("frame01_purple"))
DCEI.SetFramePadding(menu, 20)
DCEI.SetFrameSpacing(menu, 20)

local resume = DCEI.CreateButtonFrame(menu)
DCEI.SetFrameSize(resume, 200, 100)
DCEI.SetPauseMenuFrameResumeButton(resume)

local resume_text = DCEI.CreateTextFrame(resume)
DCEI.SetTextFrameText(resume_text, "Resume")

local quit = DCEI.CreateButtonFrame(menu)
DCEI.SetFrameSize(quit, 200, 100)
DCEI.SetPauseMenuFrameQuitButton(quit)

local quit_text = DCEI.CreateTextFrame(quit)
DCEI.SetTextFrameText(quit_text, "Quit")

local restart = DCEI.CreateButtonFrame(menu)
DCEI.SetFrameSize(restart, 200, 100)
DCEI.SetPauseMenuFrameRestartButton(restart)

local restart_text = DCEI.CreateTextFrame(restart)
DCEI.SetTextFrameText(restart_text, "Restart")

local settings = DCEI.CreateButtonFrame(menu)
DCEI.SetFrameSize(settings, 200, 100)
DCEI.SetPauseMenuFrameSettingsButton(settings)

local settings_text = DCEI.CreateTextFrame(settings)
DCEI.SetTextFrameText(settings_text, "Settings")

DCEI.SetPauseMenuFrame(menu)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [CreateButtonFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createbuttonframe-1)
[](extra-section-end)

## void SuppressPauseMenuOnApplicationPause() {suppresspausemenuonapplicationpause-0}
```cs
void SuppressPauseMenuOnApplicationPause()
```
#### Description
[](description-start)
Suppresses the pause menu on application pause. This is necessary if your game features in-game ads, as the ads screen will pause the application and show the pause menu by default.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function ResolveAds(success)
    if success then
        -- deliver ad rewards to player
    else
        -- show error message for player
    end
end

DCEI.SuppressPauseMenuOnApplicationPause()
DCEI.ShowAds(ResolveAds)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## Float3 GetFrameCanvasPosition3D(InGameUILayoutComponent ui) {getframecanvasposition3d-1}
```cs
Float3 GetFrameCanvasPosition3D(InGameUILayoutComponent ui)
```
#### Description
[](description-start)
Returns the [3D Position](Trigger-API-Reference-DCEI-Types#float3) of a UI frame. Similar to other UI getters, you may need to wait a frame after any UI adjustments to get the latest position.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the button to get the position of.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameVerticalOffsetInParent(frame, 200)
    
-- wait a frame to get the new UI position
DCEI.TriggerAddTimerEventElapsed(
    function()
        local pos = DCEI.GetFrameCanvasPosition3D(frame)
        DCEI.LogMessage(string.format("Frame X position: %f, Y position: %f, Z position: %f", pos.x, pos.y, pos.z))
    end,
    0, 
    true
)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## Float3 GetCanvasPositionFromWorldPosition(Float3 worldPosition) {getcanvaspositionfromworldposition-1}
```cs
Float3 GetCanvasPositionFromWorldPosition(Float3 worldPosition)
```
#### Description
[](description-start)
Transfomr world position to UI position
[](description-end)

#### Parameters
[](parameters-start)
- *[Float3](Trigger-API-Reference-DCEI-Types#float3)* `worldPosition` the world position

[](parameters-end)

#### Example Usage
[](example-usage-start)
```Lua
local unit_frame_position = DCEI.GetCanvasPositionFromWorldPosition(unit_position)
DCEI.MoveFrameToCanvasPosition(ui_coin_frame, unit_frame_position, {right = 0, up = 0, front = 0})
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void MoveFrameToCanvasPosition(InGameUILayoutComponent ui, Float3 canvasPosition, Offset offset = default) {moveframetocanvasposition-3}
```cs
void MoveFrameToCanvasPosition(InGameUILayoutComponent ui, Float3 canvasPosition, Offset offset = default)
```
#### Description
[](description-start)
Move a certain UI to new position
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the ui that moves
- *[Float3](Trigger-API-Reference-DCEI-Types#float3)* `canvasPosition` the canvas position
- *[Offset](Trigger-API-Reference-DCEI-Types#offset)* `offset` final offset of the position

[](parameters-end)

#### Example Usage
[](example-usage-start)
```Lua
local unit_frame_position = DCEI.GetCanvasPositionFromWorldPosition(unit_position)
DCEI.MoveFrameToCanvasPosition(ui_coin_frame, unit_frame_position, {right = 0, up = 0, front = 0})
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetFrameAnimationLoops(Tweener tweener, int loops, LoopType loopType) {setframeanimationloops-3}
```cs
void SetFrameAnimationLoops(Tweener tweener, int loops, LoopType loopType)
```
#### Description
[](description-start)
Plays a given UI animation a specified number of loops.
[](description-end)

#### Parameters
[](parameters-start)
- *Tweener* `tweener` the UI animation.
- *int* `loops` the number of loops to play. If loops is set to -1 it will loop infinitely, until stopped with [StopFrameAnimationLoops](#stopframeanimationloops-2).
- *[LoopType](Trigger-API-Reference-DCEI-Types#looptype)* `loopType` the type of loop.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImageColor(frame, {r = 1, g = 0, b = 1, a = 1})
DCEI.SetFrameSize(frame, 100, 100)
    
local k1, k2 = 0.5, 1.5
local duration = 2
local easing = "InCubic"
local anim = DCEI.AnimateFrameScale(frame, {x = k1, y = k1, z = k1}, {x = k2, y = k2, z = k2}, duration, easing)
DCEI.SetFrameAnimationLoops(anim, -1, "Yoyo")
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [AnimateCameraFrameViewportWorldPosition](Trigger-API-Reference-DCEI-Functions-Custom-UI#animatecameraframeviewportworldposition-6)
- [AnimateCameraFrameViewportRotation](Trigger-API-Reference-DCEI-Functions-Custom-UI#animatecameraframeviewportrotation-6)
- [AnimateCameraFrameOrthographicViewportSize](Trigger-API-Reference-DCEI-Functions-Custom-UI#animatecameraframeorthographicviewportsize-4)
- [AnimateFrameScale](#animateframescale-5)
- [AnimateFrameImageFillAmount](#animateframeimagefillamount-5)
- [AnimateFrameRotation](#animateframerotation-5)
- [AnimateFrameAlpha](#animateframealpha-5)
- [AnimateFrameHorizontalOffset](#animateframehorizontaloffset-5)
- [AnimateFrameVerticalOffset](#animateframeverticaloffset-5)
- [AnimateFrameScrollPosition](#animateframescrollposition-5)
- [AnimateFrameScrollPosition2D](#animateframescrollposition2d-5)
[](extra-section-end)

## void StopFrameAnimationLoops(Tweener tweener, bool waitAnimationComplete = False) {stopframeanimationloops-2}
```cs
void StopFrameAnimationLoops(Tweener tweener, bool waitAnimationComplete = False)
```
#### Description
[](description-start)
Stops an animation loop.
[](description-end)

#### Parameters
[](parameters-start)
- *Tweener* `tweener` the UI animation.
- *bool* `waitAnimationComplete` if true, waits for the current animation to complete before stopping the loop.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImageColor(frame, {r = 1, g = 0, b = 1, a = 1})
DCEI.SetFrameSize(frame, 100, 100)
    
local k1, k2 = 0.5, 1.5
local duration = 2
local easing = "InCubic"
local anim = DCEI.AnimateFrameScale(frame, {x = k1, y = k1, z = k1}, {x = k2, y = k2, z = k2}, duration, easing)
DCEI.SetFrameAnimationLoops(anim, -1, "Yoyo")

DCEI.TriggerAddTimerEventElapsed(
    function()
        DCEI.StopFrameAnimationLoops(anim, true)
    end,
    1,
    true
)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [AnimateCameraFrameViewportWorldPosition](Trigger-API-Reference-DCEI-Functions-Custom-UI#animatecameraframeviewportworldposition-6)
- [AnimateCameraFrameViewportRotation](Trigger-API-Reference-DCEI-Functions-Custom-UI#animatecameraframeviewportrotation-6)
- [AnimateCameraFrameOrthographicViewportSize](Trigger-API-Reference-DCEI-Functions-Custom-UI#animatecameraframeorthographicviewportsize-4)
- [AnimateFrameScale](#animateframescale-5)
- [AnimateFrameImageFillAmount](#animateframeimagefillamount-5)
- [AnimateFrameRotation](#animateframerotation-5)
- [AnimateFrameAlpha](#animateframealpha-5)
- [AnimateFrameHorizontalOffset](#animateframehorizontaloffset-5)
- [AnimateFrameVerticalOffset](#animateframeverticaloffset-5)
- [AnimateFrameScrollPosition](#animateframescrollposition-5)
- [AnimateFrameScrollPosition2D](#animateframescrollposition2d-5)
[](extra-section-end)

## Tweener AnimateFrameImageColor(InGameUILayoutComponent ui, ColorRGBA start, ColorRGBA end, float duration, Ease ease) {animateframeimagecolor-5}
```cs
Tweener AnimateFrameImageColor(InGameUILayoutComponent ui, ColorRGBA start, ColorRGBA end, float duration, Ease ease)
```
#### Description
[](description-start)
Animates a UI frame's color.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` which frame to animate.
- *[ColorRGBA](Trigger-API-Reference-DCEI-Types#colorrgba)* `start` the initial RGBA values.  Also accepts hex codes, such as `"#32a852"`

- *[ColorRGBA](Trigger-API-Reference-DCEI-Types#colorrgba)* `end` the final RGBA values.  Also accepts hex codes, such as `"#32a852"`

- *float* `duration` the duration of the animation.
- *[Ease](Trigger-API-Reference-DCEI-Types#ease)* `ease` the easing function to use for the animation. See https://easings.net/en for examples.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame, 100, 100)
local duration = 2
local ease = "Linear"
DCEI.AnimateFrameImageColor(frame, {r = 0, g = 0, b = 0, a = 1}, {r = 1, g = 1, b = 1, a = 1}, duration, ease)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## Tweener AnimateTextFrameColor(InGameUILayoutComponent ui, ColorRGB start, ColorRGB end, float duration, Ease ease) {animatetextframecolor-5}
```cs
Tweener AnimateTextFrameColor(InGameUILayoutComponent ui, ColorRGB start, ColorRGB end, float duration, Ease ease)
```
#### Description
[](description-start)
Animates a UI text frame's text color.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` which frame to animate.
- *[ColorRGB](Trigger-API-Reference-DCEI-Types#colorrgb)* `start` the initial RGB values. Also accepts hex values such as `"#32a852"`
- *[ColorRGB](Trigger-API-Reference-DCEI-Types#colorrgb)* `end` the final RGB values. Also accepts hex values such as `"#32a852"`
- *float* `duration` the duration of the animation.
- *[Ease](Trigger-API-Reference-DCEI-Types#ease)* `ease` the easing function to use for the animation. See https://easings.net/en for examples.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateTextFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(frame, 100, 100)
DCEI.SetTextFrameText(frame, "Hello world!")
local duration = 2
local ease = "Linear"
DCEI.AnimateTextFrameColor(frame, {r = 0, g = 0, b = 0, a = 1}, {r = 1, g = 1, b = 1, a = 1}, duration, ease)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## Tweener AnimateFrameScale(InGameUILayoutComponent ui, Float3 start, Float3 end, float duration, Ease ease) {animateframescale-5}
```cs
Tweener AnimateFrameScale(InGameUILayoutComponent ui, Float3 start, Float3 end, float duration, Ease ease)
```
#### Description
[](description-start)
Animates a UI frame's scale over time.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` which frame to animate.
- *[Float3](Trigger-API-Reference-DCEI-Types#float3)* `start` the initial scale of the frame animation as `{x = 1, y = 1, z = 1}`.
- *[Float3](Trigger-API-Reference-DCEI-Types#float3)* `end` the final scale of the frame animation as `{x = 1, y = 1, z = 1}`.
- *float* `duration` the duration of the animation.
- *[Ease](Trigger-API-Reference-DCEI-Types#ease)* `ease` the easing function to use for the animation. See https://easings.net/en for examples.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImageColor(frame, {r = 1, g = 0, b = 0, a = 1})
DCEI.SetFrameSize(frame, 100, 100)
    
local k1, k2 = 1, 2
local duration = 2
local ease = "InCubic"
DCEI.AnimateFrameScale(frame, {x = k1, y = k1, z = k1}, {x = k2, y = k2, z = k2}, duration, ease)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [SetFrameAnimationLoops](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeanimationloops-3)
- [StopFrameAnimationLoops](Trigger-API-Reference-DCEI-Functions-Custom-UI#stopframeanimationloops-2)
[](extra-section-end)

## Tweener AnimateFrameImageFillAmount(InGameUILayoutComponent ui, float start, float end, float duration, Ease ease) {animateframeimagefillamount-5}
```cs
Tweener AnimateFrameImageFillAmount(InGameUILayoutComponent ui, float start, float end, float duration, Ease ease)
```
#### Description
[](description-start)
Animates a UI frame's background image fill. Requires a background image to be set, a background image color alone does not work.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the UI frame to animate background image fill for.
- *float* `start` the starting fill, from 0-1.
- *float* `end` the ending fill, from 0-1.
- *float* `duration` the duration of the animation.
- *[Ease](Trigger-API-Reference-DCEI-Types#ease)* `ease` the easing function to use for the animation. See https://easings.net/en for examples.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImage(frame,  DCEI.Texture("quest_page_progression_fill"))
DCEI.SetFrameSize(frame, 100, 50)
        
local k1, k2 = 0, 1
local duration = 2
local ease = "Linear"
DCEI.AnimateFrameImageFillAmount(frame, k1, k2, duration, ease)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [SetFrameAnimationLoops](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeanimationloops-3)
- [StopFrameAnimationLoops](Trigger-API-Reference-DCEI-Functions-Custom-UI#stopframeanimationloops-2)
- [SetFrameImageFillAmount](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagefillamount-2)
- [GetFrameImageFillAmount](Trigger-API-Reference-DCEI-Functions-Custom-UI#getframeimagefillamount-1)
- [SetFrameImageFillHorizontal](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagefillhorizontal-1)
- [SetFrameImageFillVertical](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagefillvertical-1)
- [SetFrameImageFillRadial](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagefillradial-1)
- [SetFrameImageFillOrigin](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagefillorigin-2)
- [SetFrameImageFillAmountExpression](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagefillamountexpression-3)
[](extra-section-end)

## Tweener AnimateFrameRotation(InGameUILayoutComponent ui, Float3 start, Float3 end, float duration, Ease ease) {animateframerotation-5}
```cs
Tweener AnimateFrameRotation(InGameUILayoutComponent ui, Float3 start, Float3 end, float duration, Ease ease)
```
#### Description
[](description-start)
Animates a UI frame's rotation.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the UI frame to animate the rotation for.
- *[Float3](Trigger-API-Reference-DCEI-Types#float3)* `start` the starting rotation.
- *[Float3](Trigger-API-Reference-DCEI-Types#float3)* `end` the ending rotation.
- *float* `duration` the duration of the animation.
- *[Ease](Trigger-API-Reference-DCEI-Types#ease)* `ease` the easing function to use for the animation. See https://easings.net/en for examples.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImage(frame,  DCEI.Texture("airship_onMap"))
DCEI.SetFrameUseImageSizeRatio(frame, 1)

local k1, k2 = 0, 180
local duration = 2
local ease = "Linear"

DCEI.AnimateFrameRotation(frame, {x = 0, y = 0, z = k1}, {x = 0, y = 0, z = k2}, duration, ease)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [SetFrameAnimationLoops](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeanimationloops-3)
- [StopFrameAnimationLoops](Trigger-API-Reference-DCEI-Functions-Custom-UI#stopframeanimationloops-2)
[](extra-section-end)

## Tweener AnimateFrameAlpha(InGameUILayoutComponent ui, float start, float end, float duration, Ease ease) {animateframealpha-5}
```cs
Tweener AnimateFrameAlpha(InGameUILayoutComponent ui, float start, float end, float duration, Ease ease)
```
#### Description
[](description-start)
Animates a UI frame's alpha.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the UI frame to animate the alpha for.
- *float* `start` the starting alpha, from 0-1.
- *float* `end` the ending alpha, from 0-1.
- *float* `duration` the duration of the animation.
- *[Ease](Trigger-API-Reference-DCEI-Types#ease)* `ease` the easing function to use for the animation. See https://easings.net/en for examples.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImage(frame,  DCEI.Texture("airship_onMap"))
DCEI.SetFrameUseImageSizeRatio(frame, 1)

local k1, k2 = 0, 1
local duration = 2
local ease = "Linear"

local anim = DCEI.AnimateFrameAlpha(frame, k1, k2, duration, ease)

DCEI.SetFrameAnimationLoops(anim, -1, "Yoyo")
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [SetFrameAnimationLoops](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeanimationloops-3)
- [StopFrameAnimationLoops](Trigger-API-Reference-DCEI-Functions-Custom-UI#stopframeanimationloops-2)
[](extra-section-end)

## Tweener AnimateFrameHorizontalOffset(InGameUILayoutComponent ui, float start, float end, float duration, Ease ease) {animateframehorizontaloffset-5}
```cs
Tweener AnimateFrameHorizontalOffset(InGameUILayoutComponent ui, float start, float end, float duration, Ease ease)
```
#### Description
[](description-start)
Animates a UI frame's horizontal offset.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the UI frame to animate the horizontal offset for.
- *float* `start` the starting offset.
- *float* `end` the ending offset.
- *float* `duration` the duration of the animation.
- *[Ease](Trigger-API-Reference-DCEI-Types#ease)* `ease` the easing function to use for the animation. See https://easings.net/en for examples.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImage(frame, DCEI.Texture("airship_onMap"))
DCEI.SetFrameUseImageSizeRatio(frame, 1)

local k1, k2 = 0, 500
local duration = 2
local ease = "Linear"

DCEI.AnimateFrameHorizontalOffset(frame, k1, k2, duration, ease)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [SetFrameAnimationLoops](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeanimationloops-3)
- [StopFrameAnimationLoops](Trigger-API-Reference-DCEI-Functions-Custom-UI#stopframeanimationloops-2)
[](extra-section-end)

## Tweener AnimateFrameVerticalOffset(InGameUILayoutComponent ui, float start, float end, float duration, Ease ease) {animateframeverticaloffset-5}
```cs
Tweener AnimateFrameVerticalOffset(InGameUILayoutComponent ui, float start, float end, float duration, Ease ease)
```
#### Description
[](description-start)
Animates a UI frame's vertical offset.
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the UI frame to animate the vertical offset for.
- *float* `start` the starting offset.
- *float* `end` the ending offset.
- *float* `duration` the duration of the animation.
- *[Ease](Trigger-API-Reference-DCEI-Types#ease)* `ease` the easing function to use for the animation. See https://easings.net/en for examples.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local frame = DCEI.CreateFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImage(frame, DCEI.Texture("airship_onMap"))
DCEI.SetFrameUseImageSizeRatio(frame, 1)

local k1, k2 = 0, 500
local duration = 2
local ease = "Linear"

DCEI.AnimateFrameVerticalOffset(frame, k1, k2, duration, ease)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [SetFrameAnimationLoops](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeanimationloops-3)
- [StopFrameAnimationLoops](Trigger-API-Reference-DCEI-Functions-Custom-UI#stopframeanimationloops-2)
[](extra-section-end)

## Tweener AnimateFrameScrollPosition(InGameUILayoutComponent ui, float start, float end, float duration, Ease ease) {animateframescrollposition-5}
```cs
Tweener AnimateFrameScrollPosition(InGameUILayoutComponent ui, float start, float end, float duration, Ease ease)
```
#### Description
[](description-start)
Animates a scroll frame's scroll position. This function is for [CreateHScrollFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createhscrollframe-1) and [CreateVScrollFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createvscrollframe-1).
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the scroll frame to animate the scroll position for.
- *float* `start` the starting position.
- *float* `end` the ending position.
- *float* `duration` the duration of the animation.
- *[Ease](Trigger-API-Reference-DCEI-Types#ease)* `ease` the easing function to use for the animation. See https://easings.net/en for examples.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local hscroll_frame = DCEI.CreateHScrollFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameImage(hscroll_frame, DCEI.Texture("frame01"))
DCEI.SetFrameSize(hscroll_frame, 350, 120)

local hscroll_content = DCEI.GetScrollFrameContent(hscroll_frame)
DCEI.SetFrameSpacing(hscroll_content, 10)
DCEI.SetFramePadding(hscroll_content, 10)

local frame1 = DCEI.CreateFrame(hscroll_content)
DCEI.SetFrameSize(frame1, 100, 100)
DCEI.SetFrameImage(frame1, DCEI.Texture("frame01_blue"))

local frame2 = DCEI.CreateFrame(hscroll_content)
DCEI.SetFrameSize(frame2, 100, 100)
DCEI.SetFrameImage(frame2, DCEI.Texture("frame01_brown"))

local frame3 = DCEI.CreateFrame(hscroll_content)
DCEI.SetFrameSize(frame3, 100, 100)
DCEI.SetFrameImage(frame3, DCEI.Texture("frame01_purple"))

local frame4 = DCEI.CreateFrame(hscroll_content)
DCEI.SetFrameSize(frame4, 100, 100)
DCEI.SetFrameImage(frame4, DCEI.Texture("frame01_grey"))

local frame5 = DCEI.CreateFrame(hscroll_content)
DCEI.SetFrameSize(frame5, 100, 100)
DCEI.SetFrameImage(frame5, DCEI.Texture("frame01_yellow"))

local k1, k2 = 0, 200
local duration = 2
local ease = "Linear"

DCEI.AnimateFrameScrollPosition(hscroll_frame, k1, k2, duration, ease)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [SetFrameAnimationLoops](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeanimationloops-3)
- [StopFrameAnimationLoops](Trigger-API-Reference-DCEI-Functions-Custom-UI#stopframeanimationloops-2)
[](extra-section-end)

## Tweener AnimateFrameScrollPosition2D(InGameUILayoutComponent ui, Float2 start, Float2 end, float duration, Ease ease) {animateframescrollposition2d-5}
```cs
Tweener AnimateFrameScrollPosition2D(InGameUILayoutComponent ui, Float2 start, Float2 end, float duration, Ease ease)
```
#### Description
[](description-start)
Animates a scroll frame's scroll position. This function is for [CreateScrollFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createscrollframe-1).
[](description-end)

#### Parameters
[](parameters-start)
- *InGameUILayoutComponent* `ui` the scroll frame to animate the scroll position for.
- *[Float2](Trigger-API-Reference-DCEI-Types#float2)* `start` the starting position.
- *[Float2](Trigger-API-Reference-DCEI-Types#float2)* `end` the ending position.
- *float* `duration` the duration of the animation.
- *[Ease](Trigger-API-Reference-DCEI-Types#ease)* `ease` the easing function to use for the animation. See https://easings.net/en for examples.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local scroll_frame = DCEI.CreateScrollFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(scroll_frame, 500, 500)
DCEI.SetFrameImageColor(scroll_frame, {r = 1, g = 0, b = 0, a = 0.3})
DCEI.SetScrollFrameScrollInertia(scroll_frame, false)
local scroll_content = DCEI.GetScrollFrameContent(scroll_frame)

local big_content = DCEI.CreateFrame(scroll_content)
DCEI.SetFrameSize(big_content, 1000, 1000)
DCEI.SetFrameImageColor(big_content, {r = 0, g = 0, b = 1, a = 0.4})

local small_content = DCEI.CreateFrame(scroll_content)
DCEI.SetFrameSize(small_content, 100, 100)
DCEI.SetFrameImageColor(small_content, {r = 0, g = 1, b = 0, a = 0.4})

local k1, k2 = 0, 500
local duration = 2
local ease = "Linear"

DCEI.AnimateFrameScrollPosition2D(scroll_frame, {x = k1, y = k1}, {x = k2, y = k2}, duration, ease)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [SetFrameAnimationLoops](Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeanimationloops-3)
- [StopFrameAnimationLoops](Trigger-API-Reference-DCEI-Functions-Custom-UI#stopframeanimationloops-2)
[](extra-section-end)

## Float2 GetScreenSizeInPixel() {getscreensizeinpixel-0}
```cs
Float2 GetScreenSizeInPixel()
```
#### Description
[](description-start)
Returns the screen size in pixels.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local screen_size = DCEI.GetScreenSizeInPixel()
DCEI.LogMessage(string.format("Screen X: %f, Screen Y: %f", screen_size.x, screen_size.y))
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## Float2 GetScreenSafeAreaOffsetInPixel() {getscreensafeareaoffsetinpixel-0}
```cs
Float2 GetScreenSafeAreaOffsetInPixel()
```
#### Description
[](description-start)
Returns the screen safe area offset in pixels.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local safe_offset = DCEI.GetScreenSafeAreaOffsetInPixel()
DCEI.LogMessage(string.format("Screen safe area offset X: %f, Y: %f", safe_offset.x, safe_offset.y))
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## Float2 GetScreenSafeAreaSizeInPixel() {getscreensafeareasizeinpixel-0}
```cs
Float2 GetScreenSafeAreaSizeInPixel()
```
#### Description
[](description-start)
Returns the screen safe area in pixels.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local safe_area = DCEI.GetScreenSafeAreaSizeInPixel()
DCEI.LogMessage(string.format("Screen safe area X: %f, Y: %f", safe_area.x, safe_area.y))
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

