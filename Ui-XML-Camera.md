<div id="toc" markdown="1">
- [Ui XML Reference\Camera](#ui-xml-referencecamera)
  * [size](#size)
  * [cameraSize](#camerasize)
  * [position](#position)
  * [cameraPosition](#cameraposition)
  * [rotation](#rotation)
  * [cameraRotation](#camerarotation)
  * [discardDepth](#discarddepth)
  * [cameraDiscardDepth](#cameradiscarddepth)
  * [cullingMask](#cullingmask)
  * [cameraCullingMask](#cameracullingmask)
  * [cameraBackgroundColor](#camerabackgroundcolor)
  * [autoSize](#autosize)
  * [cameraAutoSize](#cameraautosize)

</div>

***

# [Ui XML Reference](Ui-XML)\\Camera {ui-xml-referenceCamera}

[](overview-start)

Render world-space objects on a UI frame using a custom camera. Camera frames require either a [cameraSize](#cameraSize) or [cameraAutoSize](#cameraAutoSize) to be set.

#### Example Usage
[](example-usage-start)
```xml
<!-- This camera frame's camera will be centered on the middle of the map, rotated to face down. 
Placing a unit at x = 16, z = 16 will display it in the camera frame. -->
<Camera layout="legacy" width="200" height="200" cameraAutoSize="true" cameraPosition="x: 16, y: 1, z: 15" cameraRotation="x: 35, y: 0, z: 0" verticalOffsetInParent="200" />
```
This XML produces the following UI:
![image](https://user-images.githubusercontent.com/34138206/149421895-8212bd32-6488-4d69-a1ba-a5465d9a83ac.png)

[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [CreateCameraFrame()](Trigger-API-Reference-DCEI-Functions-Custom-UI#createcameraframe-1)
[](extra-section-end)

[](overview-end)

Render world-space objects on a UI frame using a custom camera

## [](Camera.size)size {size}
**Value type: `vector2`**

**:warning:Warning:warning::** This attribute was deprecated at editor version: 0.33.0, and will be removed after 90 days.

[](manual-wiki-start)

#### Description
[](description-start)
The size for the camera frame - this is the resolution of the camera frame. This does not impact the width or height of the camera frame. The resolution values are not capped, but excessively high resolutions will consume large amounts of RAM. If [autoSize](#autosize) is set to `false` and no explicit size is set, the camera frame will have a resolution of 1x1.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Camera width="200" height="200" size="x: 400, y: 400" position="x: 16, y: 1, z: 15" rotation="x: 35, y: 0, z: 0" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetCameraFrameViewportSize()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setcameraframeviewportsize-4)
[](extra-section-end)

[](manual-wiki-end)

## [](Camera.cameraSize)cameraSize {cameraSize}
**Value type: `vector2`**

[](manual-wiki-start)

#### Description
[](description-start)
The size for the camera frame - this is the resolution of the camera frame. This does not impact the width or height of the camera frame. The resolution values are not capped, but excessively high resolutions will consume large amounts of RAM. If [cameraAutoSize](#autosize) is set to `false` and no explicit size is set, the camera frame will have a resolution of 1x1.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Camera layout="legacy" width="200" height="200" cameraAutoSize="true" cameraPosition="x: 16, y: 1, z: 15" cameraRotation="x: 35, y: 0, z: 0" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetCameraFrameViewportSize()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setcameraframeviewportsize-4)
[](extra-section-end)

[](manual-wiki-end)

## [](Camera.position)position {position}
**Value type: `vector3`**

**:warning:Warning:warning::** This attribute was deprecated at editor version: 0.33.0, and will be removed after 90 days.

[](manual-wiki-start)

#### Description
[](description-start)
The position for the camera frame's camera. The default position for a new camera frame is {0, 0, 0}.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Camera width="200" height="200" size="x: 200, y: 200" position="x: 16, y: 1, z: 15" rotation="x: 35, y: 0, z: 0" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetCameraFrameViewportPosition()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setcameraframeviewportworldposition-4)
[](extra-section-end)

[](manual-wiki-end)

## [](Camera.cameraPosition)cameraPosition {cameraPosition}
**Value type: `vector3`**

[](manual-wiki-start)

#### Description
[](description-start)
The position for the camera frame's camera. The default position for a new camera frame is {0, 0, 0}.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Camera layout="legacy" width="200" height="200" cameraAutoSize="true" cameraPosition="x: 16, y: 1, z: 15" cameraRotation="x: 35, y: 0, z: 0" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetCameraFrameViewportPosition()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setcameraframeviewportworldposition-4)
[](extra-section-end)

[](manual-wiki-end)

## [](Camera.rotation)rotation {rotation}
**Value type: `vector3`**

**:warning:Warning:warning::** This attribute was deprecated at editor version: 0.33.0, and will be removed after 90 days.

[](manual-wiki-start)

#### Description
[](description-start)
The 3D rotation for the camera frame's camera. The default rotation for a new camera frame is {0, 0, 0}.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Camera width="200" height="200" size="x: 200, y: 200" position="x: 16, y: 1, z: 15" rotation="x: 35, y: 0, z: 0" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetCameraFrameViewportRotation()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setcameraframeviewportrotation-4)
[](extra-section-end)

[](manual-wiki-end)

## [](Camera.cameraRotation)cameraRotation {cameraRotation}
**Value type: `vector3`**

[](manual-wiki-start)

#### Description
[](description-start)
The 3D rotation for the camera frame's camera. The default rotation for a new camera frame is {0, 0, 0}.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Camera layout="legacy" width="200" height="200" cameraAutoSize="true" cameraPosition="x: 16, y: 1, z: 15" cameraRotation="x: 35, y: 0, z: 0" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetCameraFrameViewportRotation()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setcameraframeviewportrotation-4)
[](extra-section-end)

[](manual-wiki-end)

## [](Camera.discardDepth)discardDepth {discardDepth}
**Value type: `boolean`**

**:warning:Warning:warning::** This attribute was deprecated at editor version: 0.33.0, and will be removed after 90 days.

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The discard depth status for the camera frame, where `true` discards depth and `false` does not.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Camera width="200" height="200" size="x: 200, y: 200" position="x: 16, y: 1, z: 15" rotation="x: 35, y: 0, z: 0" discardDepth="true"/>
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetCameraFrameViewportSize()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setcameraframeviewportsize-4)
[](extra-section-end)

[](manual-wiki-end)

## [](Camera.cameraDiscardDepth)cameraDiscardDepth {cameraDiscardDepth}
**Value type: `boolean`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The discard depth status for the camera frame, where `true` discards depth and `false` does not.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Camera layout="legacy" width="200" height="200" cameraAutoSize="true" cameraPosition="x: 16, y: 1, z: 15" cameraRotation="x: 35, y: 0, z: 0" cameraDiscardDepth="true"/>
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetCameraFrameViewportSize()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setcameraframeviewportsize-4)
[](extra-section-end)

[](manual-wiki-end)

## [](Camera.cullingMask)cullingMask {cullingMask}
**Value type: `number`**

**:warning:Warning:warning::** This attribute was deprecated at editor version: 0.33.0, and will be removed after 90 days.

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The culling mask for the camera frame. Odd values will remove the terrain, even values will remove everything.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Camera width="100" height="100" autoSize="true" position="x: 16, y: 1, z: 15" rotation="x: 35, y: 0, z: 0" cullingMask="1" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetCameraFrameCullingMask()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setcameraframecullingmask-2)
[](extra-section-end)

[](manual-wiki-end)

## [](Camera.cameraCullingMask)cameraCullingMask {cameraCullingMask}
**Value type: `number`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The culling mask for the camera frame. Odd values will remove the terrain, even values will remove everything.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Camera layout="legacy" width="200" height="200" cameraAutoSize="true" cameraPosition="x: 16, y: 1, z: 15" cameraRotation="x: 35, y: 0, z: 0" cameraCullingMask="1" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetCameraFrameCullingMask()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setcameraframecullingmask-2)
[](extra-section-end)

[](manual-wiki-end)

## [](Camera.cameraBackgroundColor)cameraBackgroundColor {cameraBackgroundColor}
**Value type: `color`**

[](manual-wiki-start)

#### Description
[](description-start)
The background color for the camera frame. This background color will only color empty space; or anything that isn't filled by terrain or units. If combined with a culling mask, any space that is culled will be filled with this color.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Camera layout="legacy" width="200" height="200" cameraAutoSize="true" cameraPosition="x: 16, y: 1, z: 15" cameraRotation="x: 35, y: 0, z: 0" cameraCullingMask="1" cameraBackgroundColor="r: 0, g: 1, b: 0.8, a: 1" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetUiCameraBackgroundColor()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setcameraframebackgroundcolor-2)
[](extra-section-end)

[](manual-wiki-end)

## [](Camera.autoSize)autoSize {autoSize}
**Value type: `boolean`**

**:warning:Warning:warning::** This attribute was deprecated at editor version: 0.33.0, and will be removed after 90 days.

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The autoSize status for the camera frame, where `true` means the camera frame will autosize and `false` means it does not. AutoSize will attempt to match the resolution with the height and width of the camera frame. If autoSize is set to `false` and no explicit [size](#size) is set, the camera frame will have a resolution of 1x1. This attribute cannot be set via an API call.
[](description-end)

#### Example Usage
[](example-usage-start)
Example Usage:
```xml
<Camera width="400" height="400" autoSize="true" position="x: 16, y: 1, z: 15" rotation="x: 35, y: 0, z: 0"/>
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetCameraFrameViewportSize()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setcameraframeviewportsize-4)
[](extra-section-end)

[](manual-wiki-end)

## [](Camera.cameraAutoSize)cameraAutoSize {cameraAutoSize}
**Value type: `boolean`**

**Supports data binding**

[](manual-wiki-start)

#### Description
[](description-start)
The autoSize status for the camera frame, where `true` means the camera frame will autosize and `false` means it does not. CameraAutoSize will attempt to match the resolution with the height and width of the camera frame. If autoSize is set to `false` and no explicit [cameraSize](#cameraSize) is set, the camera frame will have a resolution of 1x1. This attribute cannot be set via an API call.
[](description-end)

#### Example Usage
[](example-usage-start)
Example Usage:
```xml
<Camera layout="legacy" width="200" height="200" cameraAutoSize="true" cameraPosition="x: 16, y: 1, z: 15" cameraRotation="x: 35, y: 0, z: 0"/>
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [SetCameraFrameViewportSize()](Trigger-API-Reference-DCEI-Functions-Custom-UI#setcameraframeviewportsize-4)
[](extra-section-end)

[](manual-wiki-end)

