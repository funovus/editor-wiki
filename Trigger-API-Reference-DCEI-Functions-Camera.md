<div id="toc" markdown="1">
- [Trigger API Reference\DCEI Functions\Camera](#trigger-api-referencedcei-functionscamera)
  * [SetEnabledCameraClamp](#setenabledcameraclamp-1)
  * [SetEnabledCameraClampForPlayer](#setenabledcameraclampforplayer-2)
  * [SetCameraFocusUnit](#setcamerafocusunit-4)
  * [ClearCameraFocusUnit](#clearcamerafocusunit-0)
  * [SetCameraFocusUnitForPlayer](#setcamerafocusunitforplayer-5)
  * [ClearCameraFocusUnitForPlayer](#clearcamerafocusunitforplayer-1)
  * [SetCameraFocus](#setcamerafocus-4)
  * [SetCameraFocusSmoothOvertimeForPlayer](#setcamerafocussmoothovertimeforplayer-5)
  * [SetCameraDistance](#setcameradistance-3)
  * [SetCameraOrthographicSize](#setcameraorthographicsize-3)
  * [SetCameraMinOrthographicSize](#setcameraminorthographicsize-1)
  * [SetCameraMaxOrthographicSize](#setcameramaxorthographicsize-1)
  * [GetCameraOrthographicSize](#getcameraorthographicsize-0)
  * [SetCameraDistanceSmoothOvertimeForPlayer](#setcameradistancesmoothovertimeforplayer-4)
  * [SetCameraPitchSmoothOvertime](#setcamerapitchsmoothovertime-3)
  * [SetCameraPitchSmoothOvertimeForPlayer](#setcamerapitchsmoothovertimeforplayer-4)
  * [SetCameraYawSmoothOvertime](#setcamerayawsmoothovertime-3)
  * [SetCameraYawSmoothOvertimeForPlayer](#setcamerayawsmoothovertimeforplayer-4)
  * [GetCameraPitch](#getcamerapitch-0)
  * [GetCameraYaw](#getcamerayaw-0)
  * [GetCameraMaxDistance](#getcameramaxdistance-0)
  * [GetCameraMinDistance](#getcameramindistance-0)
  * [GetCameraCurrentFocalPoint](#getcameracurrentfocalpoint-0)
  * [GetCameraBoundsCenterPoint](#getcameraboundscenterpoint-0)
  * [GetCameraBoundsHeight](#getcameraboundsheight-0)
  * [GetCameraBoundsWidth](#getcameraboundswidth-0)
  * [GetCameraTargetPointMaxDistance](#getcameratargetpointmaxdistance-2)
  * [BlockCameraInput](#blockcamerainput-1)
  * [BlockCameraInputForPlayer](#blockcamerainputforplayer-2)
  * [SetCameraVisibleAreaCenter](#setcameravisibleareacenter-2)
  * [SetCameraVisibleAreaWidth](#setcameravisibleareawidth-1)
  * [SetCameraVisibleAreaLength](#setcameravisiblearealength-1)
  * [SetCameraVisibleAreaWidth](#setcameravisibleareawidth-2)
  * [SetCameraVisibleAreaLength](#setcameravisiblearealength-2)
  * [SetCameraVisibleAreaCenterForPlayer](#setcameravisibleareacenterforplayer-3)
  * [SetCameraVisibleAreaWidthForPlayer](#setcameravisibleareawidthforplayer-2)
  * [SetCameraVisibleAreaLengthForPlayer](#setcameravisiblearealengthforplayer-2)
  * [SetCameraVisibleAreaWidthForPlayer](#setcameravisibleareawidthforplayer-3)
  * [SetCameraVisibleAreaLengthForPlayer](#setcameravisiblearealengthforplayer-3)

</div>

***

# [Trigger API Reference](Trigger-API-Reference)\\DCEI Functions\Camera {Trigger-API-ReferenceDCEI-FunctionsCamera}

[](overview-start)

[](overview-end)

## void SetEnabledCameraClamp(bool set) {setenabledcameraclamp-1}
```cs
void SetEnabledCameraClamp(bool set)
```
#### Description
[](description-start)
Toggles camera clamping. When clamped, camera movement will be restricted to inside the red square border displayed in the Terrain Window. In order to move the camera outside of this square, the camera must be unclamped first.
[](description-end)

#### Parameters
[](parameters-start)
- *bool* `set` if true, enables camera clamping.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local layout = GMUI.Layout.New({
    parent = DCEI.GetUiRootFrame(),
    name = "Standard/Button/Button",
})
DCEI.SetOnClickCallback(layout.Button, function()
    DCEI.SetEnabledCameraClamp(false)
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetEnabledCameraClampForPlayer(int player, bool set) {setenabledcameraclampforplayer-2}
```cs
void SetEnabledCameraClampForPlayer(int player, bool set)
```
#### Description
[](description-start)
Toggles camera clamping for the given player. When clamped, camera movement will be restricted to inside the red square border displayed in the Terrain Window. In order to move the camera outside of this square, the camera must be unclamped first.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `player` the player to set camera clamping for.
- *bool* `set` if true, enables camera clamping.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local layout = GMUI.Layout.New({
    parent = DCEI.GetUiRootFrame(),
    name = "Standard/Button/Button",
})
DCEI.SetOnClickCallback(layout.Button, function()
    DCEI.SetEnabledCameraClampForPlayer(1, true)
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetCameraFocusUnit(unit unit, float delay, float offsetX = 0, float offsetY = 0) {setcamerafocusunit-4}
```cs
void SetCameraFocusUnit(unit unit, float delay, float offsetX = 0, float offsetY = 0)
```
#### Description
[](description-start)
Sets a persistent camera focus on the given unit. Does not override previous focus, use [ClearCameraFocusUnit](#clearcamerafocusunit-0) to clear previous focus before setting a new focus.
[](description-end)

#### Parameters
[](parameters-start)
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to focus the camera on.
- *float* `delay` controls how long the camera takes to recenter on the unit if it is manually moved. A delay of 0 will cause the camera to instantly snap back.
- *float* `offsetX` the X-axis offset from the unit for the camera focus.
- *float* `offsetY` the Z-axis offset from the unit for the camera focus.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)

DCEI.SetCameraFocusUnit(unit, 3, 5, 5)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [ClearCameraFocusUnit](#clearcamerafocusunit-0)
[](extra-section-end)

## void ClearCameraFocusUnit() {clearcamerafocusunit-0}
```cs
void ClearCameraFocusUnit()
```
#### Description
[](description-start)
Removes any active camera focus.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)

-- Focuses on area above unit over 2 seconds
DCEI.SetCameraFocusUnit(unit, 2, 0, 5)

-- Clears focus after 3 seconds
DCEI.TriggerAddTimerEventElapsed(function()
    DCEI.ClearCameraFocusUnit()
end, 3)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [SetCameraFocusUnit](Trigger-API-Reference-DCEI-Functions-Camera#setcamerafocusunit-4)
[](extra-section-end)

## void SetCameraFocusUnitForPlayer(int player, unit unit, float delay, float offsetX = 0, float offsetY = 0) {setcamerafocusunitforplayer-5}
```cs
void SetCameraFocusUnitForPlayer(int player, unit unit, float delay, float offsetX = 0, float offsetY = 0)
```
#### Description
[](description-start)
Sets a persistent camera focus on the given unit for the given player. Does not override previous focus, use [ClearCameraFocusUnitForPlayer](#clearcamerafocusunitforplayer-1) to clear previous focus before setting a new focus.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `player` the player to set camera focus for.
- *[unit](Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to focus the camera on.
- *float* `delay` controls how long the camera takes to recenter on the unit if it is manually moved. A delay of 0 will cause the camera to instantly snap back.
- *float* `offsetX` the X-axis offset from the unit for the camera focus.
- *float* `offsetY` the Z-axis offset from the unit for the camera focus.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)

DCEI.SetCameraFocusUnitForPlayer(1, unit, 3, 5, 5)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [ClearCameraFocusUnitForPlayer](#clearcamerafocusunitforplayer-1)
[](extra-section-end)

## void ClearCameraFocusUnitForPlayer(int player) {clearcamerafocusunitforplayer-1}
```cs
void ClearCameraFocusUnitForPlayer(int player)
```
#### Description
[](description-start)
Removes any active camera focus for the given player.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `player` the player to clear the camera focus for.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local team_id = 1
local player_id = 1
local unit_type = DCEI.Unit("Standard MeleeUnit")
local x, y = 16, 16
local unit = DCEI.CreateUnit(team_id, player_id, unit_type, x, y)

-- Focuses on area above unit over 2 seconds
DCEI.SetCameraFocusUnitForPlayer(1, unit, 2, 0, 5)

-- Clears focus after 3 seconds
DCEI.TriggerAddTimerEventElapsed(function()
    DCEI.ClearCameraFocusUnitForPlayer(1)
end, 3)
```
[](example-usage-end)

[](extra-section-start)
#### Related
- [SetCameraFocusUnitForPlayer](Trigger-API-Reference-DCEI-Functions-Camera#setcamerafocusunitforplayer-5)
[](extra-section-end)

## void SetCameraFocus(float x, float y, float duration = 1, bool useRealTime = False) {setcamerafocus-4}
```cs
void SetCameraFocus(float x, float y, float duration = 1, bool useRealTime = False)
```
#### Description
[](description-start)
Moves camera focus to the given coordinates.Use Game Time by default
[](description-end)

#### Parameters
[](parameters-start)
- *float* `x` the X coordinate for the camera focus point.
- *float* `y` the Z coordinate for the camera focus point.
- *float* `duration` the duration of the camera transition to the given point. A duration of 0 will cause the camera to instantly snap to the given point.
- *bool* `useRealTime` if true, the duration is tracked via real time.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function MoveCamera(target_index, duration, options)
    target_index = target_index or ((cameras.current % 2) + 1)
    cameras.current = target_index

    local our_duration = duration or 0.5
    local camera = ShallowCopy(cameras[target_index])
    local use_game_time = true

    camera.x = camera.x + (options and options.x_offset or 0)
    camera.y = camera.y + (options and options.y_offset or 0)

    DCEI.SetCameraFocus(camera.x, camera.y, our_duration, use_game_time)

    local ORTHOGRAPHIC = {
        size = 8,
        pitch = 40,
    }
    local camera_size = camera.size or 8
    DCEI.SetCameraMaxOrthographicSize(camera_size)
    DCEI.SetCameraOrthographicSize(camera_size, our_duration, true)
    DCEI.SetCameraPitchSmoothOvertime(ORTHOGRAPHIC.pitch, 0, true)
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetCameraFocusSmoothOvertimeForPlayer(int player, float x, float y, float duration, bool useRealTime = False) {setcamerafocussmoothovertimeforplayer-5}
```cs
void SetCameraFocusSmoothOvertimeForPlayer(int player, float x, float y, float duration, bool useRealTime = False)
```
#### Description
[](description-start)
Moves camera focus to the given coordinates for the given player with game time. Only use in multiplayer
[](description-end)

#### Parameters
[](parameters-start)
- *int* `player` the player to move the camera for.
- *float* `x` the X coordinate for the camera focus point.
- *float* `y` the Z coordinate for the camera focus point.
- *float* `duration` the duration of the camera transition to the given point. A duration of 0 will cause the camera to instantly snap to the given point.
- *bool* `useRealTime` if true, the duration is tracked via real time.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local player_id = 1
local x, y = 30, 30
local duration = 3
local real_time = true
DCEI.SetEnabledCameraClamp(false)
DCEI.SetCameraFocusSmoothOvertimeForPlayer(player_id, x, y, duration, real_time)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetCameraDistance(float targetDistance, float duration = 1, bool useRealTime = False) {setcameradistance-3}
```cs
void SetCameraDistance(float targetDistance, float duration = 1, bool useRealTime = False)
```
#### Description
[](description-start)
Sets the camera zoom distance with smooth transition under certain duration of time. 
[](description-end)

#### Parameters
[](parameters-start)
- *float* `targetDistance` the camera distance to transition to.
- *float* `duration` the duration of the camera transition to the given distance.
- *bool* `useRealTime` if true, uses real time instead of game time.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local min_distance = DCEI.GetCameraMinDistance()
local max_distance = DCEI.GetCameraMaxDistance()

-- Sets the camera distance to the minimum, and zooms out to the maximum over 3 seconds
DCEI.SetCameraDistance(min_distance, 0, true)
DCEI.SetCameraDistance(max_distance, 3, true)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetCameraOrthographicSize(float targetSize, float duration, bool useRealTime = False) {setcameraorthographicsize-3}
```cs
void SetCameraOrthographicSize(float targetSize, float duration, bool useRealTime = False)
```
#### Description
[](description-start)
Sets the camera's orthographic size. Note that this only works if the camera is set to orthographic mode in under Project Settings -> Map Settings -> Camera -> View Mode.
[](description-end)

#### Parameters
[](parameters-start)
- *float* `targetSize` the size of the orthographic camera.
- *float* `duration` the duration of the camera transition.
- *bool* `useRealTime` if true, the duration is tracked via real time.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local max_size = 15
local duration = 3
local real_time = true
DCEI.SetCameraMaxOrthographicSize(max_size)
DCEI.SetCameraOrthographicSize(max_size, duration, real_time)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetCameraMinOrthographicSize(float targetSize) {setcameraminorthographicsize-1}
```cs
void SetCameraMinOrthographicSize(float targetSize)
```
#### Description
[](description-start)
Sets the camera's min orthographic size. Note that this only works if the camera is set to orthographic mode in under Project Settings -> Map Settings -> Camera -> View Mode.
[](description-end)

#### Parameters
[](parameters-start)
- *float* `targetSize` the min size of the orthographic camera.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local min_size = 3
local duration = 3
local real_time = true
DCEI.SetCameraMaxOrthographicSize(min_size)
DCEI.SetCameraOrthographicSize(min_size, duration, real_time)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetCameraMaxOrthographicSize(float targetSize) {setcameramaxorthographicsize-1}
```cs
void SetCameraMaxOrthographicSize(float targetSize)
```
#### Description
[](description-start)
Sets the camera's max orthographic size. Note that this only works if the camera is set to orthographic mode in under Project Settings -> Map Settings -> Camera -> View Mode.
[](description-end)

#### Parameters
[](parameters-start)
- *float* `targetSize` the max size of the orthographic camera.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local max_size = 15
local duration = 3
local real_time = true
DCEI.SetCameraMaxOrthographicSize(max_size)
DCEI.SetCameraOrthographicSize(max_size, duration, real_time)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## float GetCameraOrthographicSize() {getcameraorthographicsize-0}
```cs
float GetCameraOrthographicSize()
```
#### Description
[](description-start)
Returns the camera's orthographic size.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local size = DCEI.GetCameraOrthographicSize()
DCEI.LogMessage(size)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetCameraDistanceSmoothOvertimeForPlayer(int player, float targetDistance, float duration, bool useRealTime = False) {setcameradistancesmoothovertimeforplayer-4}
```cs
void SetCameraDistanceSmoothOvertimeForPlayer(int player, float targetDistance, float duration, bool useRealTime = False)
```
#### Description
[](description-start)
Sets the camera zoom distance for the given player.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `player` the player to set the camera for.
- *float* `targetDistance` the distance for the camera.
- *float* `duration` the duration of the camera transition. A duration of 0 will cause the camera to instantly snap to the new distance.
- *bool* `useRealTime` if true, the duration is tracked via real time.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.SetCameraDistanceSmoothOvertimeForPlayer(1, 15, 2, false)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetCameraPitchSmoothOvertime(float targetPitchDeg, float duration, bool useRealTime = False) {setcamerapitchsmoothovertime-3}
```cs
void SetCameraPitchSmoothOvertime(float targetPitchDeg, float duration, bool useRealTime = False)
```
#### Description
[](description-start)
Sets the camera pitch.
[](description-end)

#### Parameters
[](parameters-start)
- *float* `targetPitchDeg` the pitch of the camera. Acceptable values range from 11-90. Values over or under will be clamped.
- *float* `duration` the duration of the camera transition. A duration of 0 will cause the camera to instantly snap to the new pitch.
- *bool* `useRealTime` if true, the duration is tracked via real time.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.SetCameraPitchSmoothOvertime(35, 2, false)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetCameraPitchSmoothOvertimeForPlayer(int player, float targetPitchDeg, float duration, bool useRealTime = False) {setcamerapitchsmoothovertimeforplayer-4}
```cs
void SetCameraPitchSmoothOvertimeForPlayer(int player, float targetPitchDeg, float duration, bool useRealTime = False)
```
#### Description
[](description-start)
Sets the camera pitch for the given player.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `player` the player to set the camera for.
- *float* `targetPitchDeg` the pitch of the camera. Acceptable values range from 11-90. Values over or under will be clamped.
- *float* `duration` the duration of the camera transition. A duration of 0 will cause the camera to instantly snap to the new pitch.
- *bool* `useRealTime` if true, the duration is tracked via real time.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.SetCameraPitchSmoothOvertimeForPlayer(1, 35, 2, false)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetCameraYawSmoothOvertime(float targetYawDeg, float duration, bool useRealTime = False) {setcamerayawsmoothovertime-3}
```cs
void SetCameraYawSmoothOvertime(float targetYawDeg, float duration, bool useRealTime = False)
```
#### Description
[](description-start)
Sets the camera yaw to the given angle.
[](description-end)

#### Parameters
[](parameters-start)
- *float* `targetYawDeg` the degrees of Yaw to target.
- *float* `duration` the duration of the camera transition. A duration of 0 will cause the camera to instantly snap to the new yaw.
- *bool* `useRealTime` if true, the duration is tracked via real time.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.SetCameraYawSmoothOvertime(360, 4, false)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetCameraYawSmoothOvertimeForPlayer(int player, float targetYawDeg, float duration, bool useRealTime = False) {setcamerayawsmoothovertimeforplayer-4}
```cs
void SetCameraYawSmoothOvertimeForPlayer(int player, float targetYawDeg, float duration, bool useRealTime = False)
```
#### Description
[](description-start)
Sets the camera yaw to the given angle for the given player.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `player` the player to set the camera for.
- *float* `targetYawDeg` the yaw of the camera in degrees. A positive value produces a clockwise spin, while a negative value produces a counterclockwise spin. This value is not capped. Excessively high values with short durations may be inadvisable.
- *float* `duration` the duration of the camera transition. A duration of 0 will cause the camera to instantly snap to the new yaw.
- *bool* `useRealTime` if true, the duration is tracked via real time.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.SetCameraYawSmoothOvertimeForPlayer(1, -360, 4, false)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## float GetCameraPitch() {getcamerapitch-0}
```cs
float GetCameraPitch()
```
#### Description
[](description-start)
Returns the camera pitch.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.LogMessage(DCEI.GetCameraPitch())
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## float GetCameraYaw() {getcamerayaw-0}
```cs
float GetCameraYaw()
```
#### Description
[](description-start)
Returns the camera yaw.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.LogMessage(DCEI.GetCameraYaw())
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## float GetCameraMaxDistance() {getcameramaxdistance-0}
```cs
float GetCameraMaxDistance()
```
#### Description
[](description-start)
Returns the camera's maximum zoom distance.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local min_distance = DCEI.GetCameraMinDistance()
local max_distance = DCEI.GetCameraMaxDistance()

-- Sets the camera distance to the minimum, and zooms out to the maximum over 3 seconds
DCEI.SetCameraDistance(min_distance, 0, true)
DCEI.SetCameraDistance(max_distance, 3, true)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## float GetCameraMinDistance() {getcameramindistance-0}
```cs
float GetCameraMinDistance()
```
#### Description
[](description-start)
Returns the camera's minimum zoom distance.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local min_distance = DCEI.GetCameraMinDistance()
local max_distance = DCEI.GetCameraMaxDistance()

-- Sets the camera distance to the minimum, and zooms out to the maximum over 3 seconds
DCEI.SetCameraDistance(min_distance, 0, true)
DCEI.SetCameraDistance(max_distance, 3, true)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## Float2 GetCameraCurrentFocalPoint() {getcameracurrentfocalpoint-0}
```cs
Float2 GetCameraCurrentFocalPoint()
```
#### Description
[](description-start)
Returns the coordinates of the camera's focal point.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local camera_center = DCEI.GetCameraCurrentFocalPoint()
DCEI.LogMessage("x: " .. camera_center.x .. " y: " .. camera_center.y)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## Float2 GetCameraBoundsCenterPoint() {getcameraboundscenterpoint-0}
```cs
Float2 GetCameraBoundsCenterPoint()
```
#### Description
[](description-start)
Returns the coordinates of the camera bounds' center point.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local camera_bounds_center = DCEI.GetCameraBoundsCenterPoint()
DCEI.LogMessage("x: " .. camera_bounds_center.x .. " y: " .. camera_bounds_center.y)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## float GetCameraBoundsHeight() {getcameraboundsheight-0}
```cs
float GetCameraBoundsHeight()
```
#### Description
[](description-start)
Return the camera bounds height.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.LogMessage(DCEI.GetCameraBoundsHeight())
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## float GetCameraBoundsWidth() {getcameraboundswidth-0}
```cs
float GetCameraBoundsWidth()
```
#### Description
[](description-start)
Returns the camera bounds width.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.LogMessage(DCEI.GetCameraBoundsWidth())
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## float GetCameraTargetPointMaxDistance(float x, float y) {getcameratargetpointmaxdistance-2}
```cs
float GetCameraTargetPointMaxDistance(float x, float y)
```
#### Description
[](description-start)
Returns the maximum distance the camera can be from the given coordinates.
[](description-end)

#### Parameters
[](parameters-start)
- *float* `x` the X-axis coordinate.
- *float* `y` the Z-axis coordinate.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.LogMessage(DCEI.GetCameraTargetPointMaxDistance(16, 0))
DCEI.LogMessage(DCEI.GetCameraTargetPointMaxDistance(16, 16))
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void BlockCameraInput(bool set) {blockcamerainput-1}
```cs
void BlockCameraInput(bool set)
```
#### Description
[](description-start)
Toggles camera manipulation from player input.
[](description-end)

#### Parameters
[](parameters-start)
- *bool* `set` if true, disables camera manipulation.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.BlockCameraInput(true)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void BlockCameraInputForPlayer(int player, bool set) {blockcamerainputforplayer-2}
```cs
void BlockCameraInputForPlayer(int player, bool set)
```
#### Description
[](description-start)
Toggles camera manipulation from player input for the given player.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `player` the player to toggle camera manipulation for.
- *bool* `set` if true, disables camera manipulation.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.BlockCameraInputForPlayer(1, true)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetCameraVisibleAreaCenter(float x, float y) {setcameravisibleareacenter-2}
```cs
void SetCameraVisibleAreaCenter(float x, float y)
```
#### Description
[](description-start)
Moves the center of the camera visible area. This will move the players' camera(s) accordingly. This does not change the size of the camera's visible area. This can also 'overwrite' the effects of [SetEnabledCameraClamp](Trigger-API-Reference-DCEI-Functions-Camera#setenabledcameraclamp-1) if the new visible area covers previously blocked by camera clamping.
[](description-end)

#### Parameters
[](parameters-start)
- *float* `x` the X-axis coordinate.
- *float* `y` the Z-axis coordinate.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.SetCameraVisibleAreaCenter(1, 1)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetCameraVisibleAreaWidth(float width) {setcameravisibleareawidth-1}
```cs
void SetCameraVisibleAreaWidth(float width)
```
#### Description
[](description-start)
Sets the camera visible area's width. Functions as if `bool updateMaxDistance` is set to true in the next function. Should be accompanied by [SetCameraVisibleAreaLength](#setcameravisiblearealength-1).
[](description-end)

#### Parameters
[](parameters-start)
- *float* `width` the new width for the camera visible area.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.SetCameraVisibleAreaWidth(15)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetCameraVisibleAreaLength(float length) {setcameravisiblearealength-1}
```cs
void SetCameraVisibleAreaLength(float length)
```
#### Description
[](description-start)
Sets the camera visible area's length. Functions as if `bool updateMaxDistance` is set to true in the next function. Should be accompanied by [SetCameraVisibleAreaWidth](Trigger-API-Reference-DCEI-Functions-Camera#setcameravisibleareawidth-1).
[](description-end)

#### Parameters
[](parameters-start)
- *float* `length` the new length for the camera visible area.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.SetCameraVisibleAreaWidth(15)
DCEI.SetCameraVisibleAreaLength(15)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetCameraVisibleAreaWidth(float width, bool updateMaxDistance) {setcameravisibleareawidth-2}
```cs
void SetCameraVisibleAreaWidth(float width, bool updateMaxDistance)
```
#### Description
[](description-start)
Sets the camera visible area's width. Should be accompanied by [SetCameraVisibleAreaLength](Trigger-API-Reference-DCEI-Functions-Camera#setcameravisiblearealength-1).
[](description-end)

#### Parameters
[](parameters-start)
- *float* `width` the new width for the camera visible area.
- *bool* `updateMaxDistance` if true, updates and sets the camera's max distance. Will instantly snap to the new max distance if true, otherwise the camera will attempt to zoom in to the new distance slowly. The most recent update will override any pervious updates.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.SetCameraVisibleAreaWidth(15, true)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetCameraVisibleAreaLength(float length, bool updateMaxDistance) {setcameravisiblearealength-2}
```cs
void SetCameraVisibleAreaLength(float length, bool updateMaxDistance)
```
#### Description
[](description-start)
Sets the camera visible area's length. Should be accompanied by [SetCameraVisibleAreaWidth()](Trigger-API-Reference-DCEI-Functions-Camera1void-setcameravisibleareawidthfloat-width).
[](description-end)

#### Parameters
[](parameters-start)
- *float* `length` the new length for the camera visible area.
- *bool* `updateMaxDistance` if true, updates and sets the camera's max distance. Will instantly snap to the new max distance if true, otherwise the camera will attempt to zoom in to the new distance slowly. The most recent update will override any pervious updates.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.SetCameraVisibleAreaWidth(15)
DCEI.SetCameraVisibleAreaLength(15, true)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetCameraVisibleAreaCenterForPlayer(int player, float x, float y) {setcameravisibleareacenterforplayer-3}
```cs
void SetCameraVisibleAreaCenterForPlayer(int player, float x, float y)
```
#### Description
[](description-start)
Moves the center of the camera visible area for the given player. This will move the player's camera(s) accordingly. This does not change the size of the camera's visible area. This can also 'overwrite' the effects of [SetEnabledCameraClamp](Trigger-API-Reference-DCEI-Functions-Camera#setenabledcameraclamp-1) if the new visible area covers previously blocked by camera clamping.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `player` the player to set the camera for.
- *float* `x` the X-axis coordinate.
- *float* `y` the Z-axis coordinate.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.SetCameraVisibleAreaCenterForPlayer(1, -400, -400)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetCameraVisibleAreaWidthForPlayer(int player, float width) {setcameravisibleareawidthforplayer-2}
```cs
void SetCameraVisibleAreaWidthForPlayer(int player, float width)
```
#### Description
[](description-start)
Sets the camera visible area's width for the given player. Functions as if `bool updateMaxDistance` is set to true in the next function. Should be accompanied by [SetCameraVisibleAreaLengthForPlayer](#setcameravisiblearealengthforplayer-2).
[](description-end)

#### Parameters
[](parameters-start)
- *int* `player` the player to set the camera for.
- *float* `width` the new width for the camera visible area.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.SetCameraVisibleAreaLengthForPlayer(1, 15)
DCEI.SetCameraVisibleAreaWidthForPlayer(1, 15)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetCameraVisibleAreaLengthForPlayer(int player, float length) {setcameravisiblearealengthforplayer-2}
```cs
void SetCameraVisibleAreaLengthForPlayer(int player, float length)
```
#### Description
[](description-start)
Sets the camera visible area's length for the given player. Functions as if `bool updateMaxDistance` is set to true in the next function. Should be accompanied by [SetCameraVisibleAreaWidthForPlayer](Trigger-API-Reference-DCEI-Functions-Camera#setcameravisibleareawidthforplayer-2).
[](description-end)

#### Parameters
[](parameters-start)
- *int* `player` the player to set the camera for.
- *float* `length` the new length for the camera visible area.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.SetCameraVisibleAreaLengthForPlayer(1, 15)
DCEI.SetCameraVisibleAreaWidthForPlayer(1, 15)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetCameraVisibleAreaWidthForPlayer(int player, float width, bool updateMaxDistance) {setcameravisibleareawidthforplayer-3}
```cs
void SetCameraVisibleAreaWidthForPlayer(int player, float width, bool updateMaxDistance)
```
#### Description
[](description-start)
Sets the camera visible area's width for the given player. Should be accompanied by [SetCameraVisibleAreaLength](Trigger-API-Reference-DCEI-Functions-Camera#setcameravisiblearealength-1).
[](description-end)

#### Parameters
[](parameters-start)
- *int* `player` the player to set the camera for.
- *float* `width` the new width for the camera visible area.
- *bool* `updateMaxDistance` if true, updates and sets the camera's max distance immediately. Will instantly snap to the new max distance if true, otherwise the camera will attempt to zoom in to the new distance slowly. The most recent update will override any pervious updates.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.SetCameraVisibleAreaLengthForPlayer(1, 15)
DCEI.SetCameraVisibleAreaWidthForPlayer(1, 15, false)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetCameraVisibleAreaLengthForPlayer(int player, float length, bool updateMaxDistance) {setcameravisiblearealengthforplayer-3}
```cs
void SetCameraVisibleAreaLengthForPlayer(int player, float length, bool updateMaxDistance)
```
#### Description
[](description-start)
Sets the camera visible area's length for the given player. Should be accompanied by [SetCameraVisibleAreaWidthForPlayer](Trigger-API-Reference-DCEI-Functions-Camera#setcameravisibleareawidthforplayer-2).
[](description-end)

#### Parameters
[](parameters-start)
- *int* `player` the player to set the camera for.
- *float* `length` the new length for the camera visible area.
- *bool* `updateMaxDistance` if true, updates and sets the camera's max distance. Will instantly snap to the new max distance if true, otherwise the camera will attempt to zoom in to the new distance slowly. The most recent update will override any pervious updates.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.SetCameraVisibleAreaWidthForPlayer(1, 15)
DCEI.SetCameraVisibleAreaLengthForPlayer(1, 15, false)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

