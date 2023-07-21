<div id="toc" markdown="1">
- [Trigger API Reference\DCEI Functions\Settings](#trigger-api-referencedcei-functionssettings)
  * [Settings.SetSelectedLanguage](#setselectedlanguage-1)
  * [Settings.GetSelectedLanguage](#getselectedlanguage-0)
  * [Settings.GetDisplayLanguage](#getdisplaylanguage-0)
  * [Settings.GetSaveDataHistory](#getsavedatahistory-2)
  * [Settings.RestoreSaveDataByIndex](#restoresavedatabyindex-1)
  * [Settings.UploadSaveData](#uploadsavedata-1)
  * [Settings.GetResolutionLevel](#getresolutionlevel-0)
  * [Settings.SetResolutionLevel](#setresolutionlevel-1)
  * [Settings.IsDynamicShadowEnabled](#isdynamicshadowenabled-0)
  * [Settings.SetDynamicShadowEnabled](#setdynamicshadowenabled-1)
  * [Settings.IsFps30](#isfps30-0)
  * [Settings.SetFps30Enabled](#setfps30enabled-1)
  * [Settings.IsFacebookConnected](#isfacebookconnected-0)
  * [Settings.ConnectFacebook](#connectfacebook-1)
  * [Settings.DisconnectFacebook](#disconnectfacebook-1)
  * [Settings.RestoreAccountByFacebook](#restoreaccountbyfacebook-1)
  * [Settings.IsGoogleConnected](#isgoogleconnected-0)
  * [Settings.ConnectGoogle](#connectgoogle-1)
  * [Settings.DisconnectGoogle](#disconnectgoogle-1)
  * [Settings.RestoreAccountByGoogle](#restoreaccountbygoogle-1)
  * [Settings.IsAppleConnected](#isappleconnected-0)
  * [Settings.ConnectApple](#connectapple-1)
  * [Settings.DisconnectApple](#disconnectapple-1)
  * [Settings.RestoreAccountByApple](#restoreaccountbyapple-1)
  * [Settings.SendSupportEmail](#sendsupportemail-2)

</div>

***

# [Trigger API Reference](Trigger-API-Reference)\\DCEI Functions\Settings {Trigger-API-ReferenceDCEI-FunctionsSettings}

[](overview-start)
Used for letting users be able to fully customize the in-game settings page.
[](overview-end)

## void Settings.SetSelectedLanguage(string language) {setselectedlanguage-1}
```cs
void Settings.SetSelectedLanguage(string language)
```
#### Description
[](description-start)
Set the selected game language. Note: New selected language will be applied after restart.
Supported languages:

* English
* French
* German
* Spanish
* Portuguese
* Russian
* Chinese (Simplified)
* Chinese (Traditional)
* Japanese
* Korean
* Italian
* Thai
* Arabic
[](description-end)

#### Parameters
[](parameters-start)
- *string* `language` the language to set.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function SettingsMenu.InitializeLanguage(layout, language_args)
    layout.language_buttons = {}

    -- Load override language options
    for k, v in pairs(language_args) do
        languages[k] = v
    end

    -- Load current language
    selected_language = DCEI.Settings.GetSelectedLanguage() or DCEI.Settings.GetDisplayLanguage() or "English"

    -- Callbacks
    DCEI.SetOnClickCallback(layout.SetLanguage.Frame, function()
        layout.LanguagePopup:Show()
    end)
    DCEI.SetOnClickCallback(layout.LanguagePopup.CloseButton, function()
        layout.LanguagePopup:Hide()
    end)

    local function OnLanguageButtonPress(k, v)
        layout.language_buttons[selected_language].state.is_selected = false
        layout.language_buttons[k].state.is_selected = true
        selected_language = k
        DCEI.Settings.SetSelectedLanguage(k)
        DCEI.ShowFeedbackMessage(DCEI.GetTranslationText("ui/general/change_language_need_restart"))
    end

    for k, v in pairs(languages) do
        if v then
            layout.language_buttons[k] =
                GMUI.Layout.New({ name = "UI/PauseMenu/LanguageButton", parent = layout.LanguagePopup.ContentStack })
            layout.language_buttons[k].language = k
            DCEI.SetTextFrameText(layout.language_buttons[k].Label, k)
            DCEI.SetOnClickCallback(layout.language_buttons[k].Frame, function()
                OnLanguageButtonPress(k, v)
            end)
            if not layout.language_buttons[k].state then
                layout.language_buttons[k].state = DCEI.GetFrameState(layout.language_buttons[k].Frame)
            end
        end
    end
    layout.language_buttons[selected_language].state.is_selected = true
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## string Settings.GetSelectedLanguage() {getselectedlanguage-0}
```cs
string Settings.GetSelectedLanguage()
```
#### Description
[](description-start)
Get the selected game language. Note: New selected language will be applied after restart, so the language returned by this api may differ from the current display language.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
---@class _LanguageArgs table
local languages = {
    ["English"] = true,
    ["Chinese (Simplified)"] = true,
    ["Chinese (Traditional)"] = true,
    ["Japanese"] = true,
    ["Korean"] = true,
    ["Spanish"] = true,
    ["German"] = true,
    ["Portuguese"] = true,
    ["Russian"] = true,
    ["French"] = true,
    ["Italian"] = true,
    ["Thai"] = true,
    ["Arabic"] = true,
}
local selected_language = DCEI.Settings.GetSelectedLanguage()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## string Settings.GetDisplayLanguage() {getdisplaylanguage-0}
```cs
string Settings.GetDisplayLanguage()
```
#### Description
[](description-start)
Get the current display game language.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
---@private
function SettingsMenu.InitializeLanguage(layout, language_args)
    layout.language_buttons = {}

    -- Load override language options
    for k, v in pairs(language_args) do
        languages[k] = v
    end

    -- Load current language
    selected_language = DCEI.Settings.GetSelectedLanguage() or DCEI.Settings.GetDisplayLanguage() or "English"

    -- Callbacks
    DCEI.SetOnClickCallback(layout.SetLanguage.Frame, function()
        layout.LanguagePopup:Show()
    end)
    DCEI.SetOnClickCallback(layout.LanguagePopup.CloseButton, function()
        layout.LanguagePopup:Hide()
    end)

    local function OnLanguageButtonPress(k, v)
        layout.language_buttons[selected_language].state.is_selected = false
        layout.language_buttons[k].state.is_selected = true
        selected_language = k
        DCEI.Settings.SetSelectedLanguage(k)
        DCEI.ShowFeedbackMessage(DCEI.GetTranslationText("ui/general/change_language_need_restart"))
    end

    for k, v in pairs(languages) do
        if v then
            layout.language_buttons[k] =
                GMUI.Layout.New({ name = "UI/PauseMenu/LanguageButton", parent = layout.LanguagePopup.ContentStack })
            layout.language_buttons[k].language = k
            DCEI.SetTextFrameText(layout.language_buttons[k].Label, k)
            DCEI.SetOnClickCallback(layout.language_buttons[k].Frame, function()
                OnLanguageButtonPress(k, v)
            end)
            if not layout.language_buttons[k].state then
                layout.language_buttons[k].state = DCEI.GetFrameState(layout.language_buttons[k].Frame)
            end
        end
    end
    layout.language_buttons[selected_language].state.is_selected = true
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void Settings.GetSaveDataHistory(int count, TypedCallback\<object> callback) {getsavedatahistory-2}
```cs
void Settings.GetSaveDataHistory(int count, TypedCallback<object> callback)
```
#### Description
[](description-start)
Attempts to fetch the player's save history. If successful, the callback will return with the save history as a table as its first parameter.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `count` the number of save data instances to include in the callback table, with the most recent saves returned first. Max 10.
- *TypedCallback\<object>* `callback` the callback function to handle the returned save data instances.

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local function ResultCallback(result)
    if result then
        for _, save in ipairs(result.saves) do
            DCEI.LogMessage("Save data timestamp:" .. save.time)
        end       
    end
end
DCEI.Settings.GetSaveDataHistory(count, ResultCallback)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void Settings.RestoreSaveDataByIndex(int index) {restoresavedatabyindex-1}
```cs
void Settings.RestoreSaveDataByIndex(int index)
```
#### Description
[](description-start)
Attempts to resets the saved map data at the given index.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `index` the saved map data index to reset.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function SettingsMenu.InitializeSaveButtons(layout)
    DCEI.SetOnClickCallback(layout.LoadProgress.Frame, function()
        local function ResultCallback(result)
            if result then
                SettingsMenu.ShowAreYouSurePopup({
                    Title = DCEI.GetTranslationText("ui/profilepage/are_you_sure"),
                    Content = DCEI.GetTranslationText("ui/profilepage/unsaved_progress_lost"),
                    YesCallback = function()
                        DCEI.Settings.RestoreSaveDataByIndex(1)
                    end,
                })
            else
                DCEI.ShowFeedbackMessage(DCEI.GetTranslationText("ui/profilepage/nothing_to_load"))
            end
        end
        DCEI.Settings.GetSaveDataHistory(10, ResultCallback)
    end)
    DCEI.SetOnClickCallback(layout.SaveProgress.Frame, function()
        local pass = DCEI.Settings.UploadSaveData(function()
            DCEI.ShowFeedbackMessage(DCEI.GetTranslationText("ui/profilepage/save_successful"))
        end)
        if not pass then
            DCEI.ShowFeedbackMessage(DCEI.GetTranslationText("ui/homepage/require_internet"))
        end
    end)
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void Settings.UploadSaveData(TypedCallback\<object> callback) {uploadsavedata-1}
```cs
void Settings.UploadSaveData(TypedCallback<object> callback)
```
#### Description
[](description-start)
Attempts to upload player's saved map data.
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback\<object>* `callback` the callback function that will get called after upload.

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua

---@private
function SettingsMenu.InitializeSaveButtons(layout)
    DCEI.SetOnClickCallback(layout.LoadProgress.Frame, function()
        local function ResultCallback(result)
            if result then
                SettingsMenu.ShowAreYouSurePopup({
                    Title = DCEI.GetTranslationText("ui/profilepage/are_you_sure"),
                    Content = DCEI.GetTranslationText("ui/profilepage/unsaved_progress_lost"),
                    YesCallback = function()
                        DCEI.Settings.RestoreSaveDataByIndex(1)
                    end,
                })
            else
                DCEI.ShowFeedbackMessage(DCEI.GetTranslationText("ui/profilepage/nothing_to_load"))
            end
        end
        DCEI.Settings.GetSaveDataHistory(10, ResultCallback)
    end)
    DCEI.SetOnClickCallback(layout.SaveProgress.Frame, function()
        local pass = DCEI.Settings.UploadSaveData(function()
            DCEI.ShowFeedbackMessage(DCEI.GetTranslationText("ui/profilepage/save_successful"))
        end)
        if not pass then
            DCEI.ShowFeedbackMessage(DCEI.GetTranslationText("ui/homepage/require_internet"))
        end
    end)
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## int Settings.GetResolutionLevel() {getresolutionlevel-0}
```cs
int Settings.GetResolutionLevel()
```
#### Description
[](description-start)
Get current game resolution level. 0 -> low, 1 -> medium, 2 -> high.  The level will be clamp to (0, max_level), and this max level depends on user's device, 1 for low end, 2 for high end.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function SettingsMenu.InitializeGraphicsPopup(layout)
    DCEI.SetOnClickCallback(layout.GraphicSettings.Frame, function()
        layout.GraphicsPopup:Show()
    end)
    DCEI.SetOnClickCallback(layout.GraphicsPopup.CloseButton, function()
        layout.GraphicsPopup:Hide()
    end)

    if not layout.GraphicsPopup.state then
        layout.GraphicsPopup.state = DCEI.GetFrameState(layout.GraphicsPopup.Frame)
    end

    layout.GraphicsPopup.state.fps_60 = not DCEI.Settings.IsFps30()
    layout.GraphicsPopup.state.dynamic_shadows = DCEI.Settings.IsDynamicShadowEnabled()
    DCEI.SetOnClickCallback(layout.GraphicsPopup.FPS60.Frame, function()
        DCEI.Settings.SetFps30Enabled(not DCEI.Settings.IsFps30())
        DCEI.ShowFeedbackMessage(DCEI.GetTranslationText("ui/settings/graphics_reminder"))
    end)
    DCEI.SetOnClickCallback(layout.GraphicsPopup.DynamicShadows.Frame, function()
        DCEI.Settings.SetDynamicShadowEnabled(not DCEI.Settings.IsDynamicShadowEnabled())
        DCEI.ShowFeedbackMessage(DCEI.GetTranslationText("ui/settings/graphics_reminder"))
    end)

    for i = 0, 2 do
        if not layout.GraphicsPopup["Quality" .. i].state then
            layout.GraphicsPopup["Quality" .. i].state = DCEI.GetFrameState(layout.GraphicsPopup["Quality" .. i].Frame)
        end
        DCEI.SetOnClickCallback(layout.GraphicsPopup["Quality" .. i].Frame, function()
            layout.GraphicsPopup["Quality" .. resolution_level].state.is_selected = false
            layout.GraphicsPopup["Quality" .. i].state.is_selected = true
            resolution_level = i
            DCEI.Settings.SetResolutionLevel(i)
            DCEI.ShowFeedbackMessage(DCEI.GetTranslationText("ui/settings/graphics_reminder"))
        end)
    end
    resolution_level = DCEI.Settings.GetResolutionLevel()
    layout.GraphicsPopup["Quality" .. resolution_level].state.is_selected = true
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void Settings.SetResolutionLevel(int level) {setresolutionlevel-1}
```cs
void Settings.SetResolutionLevel(int level)
```
#### Description
[](description-start)
Set the game resolution level. Note: New resolution level will be applied after restart.

0 -> low, 1 -> medium, 2 -> high.  The level will be clamp to (0, max_level), and this max level depends on user's device, 1 for low end, 2 for high end.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `level` the resolution level to set.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function SettingsMenu.InitializeGraphicsPopup(layout)
    DCEI.SetOnClickCallback(layout.GraphicSettings.Frame, function()
        layout.GraphicsPopup:Show()
    end)
    DCEI.SetOnClickCallback(layout.GraphicsPopup.CloseButton, function()
        layout.GraphicsPopup:Hide()
    end)

    if not layout.GraphicsPopup.state then
        layout.GraphicsPopup.state = DCEI.GetFrameState(layout.GraphicsPopup.Frame)
    end

    layout.GraphicsPopup.state.fps_60 = not DCEI.Settings.IsFps30()
    layout.GraphicsPopup.state.dynamic_shadows = DCEI.Settings.IsDynamicShadowEnabled()
    DCEI.SetOnClickCallback(layout.GraphicsPopup.FPS60.Frame, function()
        DCEI.Settings.SetFps30Enabled(not DCEI.Settings.IsFps30())
        DCEI.ShowFeedbackMessage(DCEI.GetTranslationText("ui/settings/graphics_reminder"))
    end)
    DCEI.SetOnClickCallback(layout.GraphicsPopup.DynamicShadows.Frame, function()
        DCEI.Settings.SetDynamicShadowEnabled(not DCEI.Settings.IsDynamicShadowEnabled())
        DCEI.ShowFeedbackMessage(DCEI.GetTranslationText("ui/settings/graphics_reminder"))
    end)

    for i = 0, 2 do
        if not layout.GraphicsPopup["Quality" .. i].state then
            layout.GraphicsPopup["Quality" .. i].state = DCEI.GetFrameState(layout.GraphicsPopup["Quality" .. i].Frame)
        end
        DCEI.SetOnClickCallback(layout.GraphicsPopup["Quality" .. i].Frame, function()
            layout.GraphicsPopup["Quality" .. resolution_level].state.is_selected = false
            layout.GraphicsPopup["Quality" .. i].state.is_selected = true
            resolution_level = i
            DCEI.Settings.SetResolutionLevel(i)
            DCEI.ShowFeedbackMessage(DCEI.GetTranslationText("ui/settings/graphics_reminder"))
        end)
    end
    resolution_level = DCEI.Settings.GetResolutionLevel()
    layout.GraphicsPopup["Quality" .. resolution_level].state.is_selected = true
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## bool Settings.IsDynamicShadowEnabled() {isdynamicshadowenabled-0}
```cs
bool Settings.IsDynamicShadowEnabled()
```
#### Description
[](description-start)
Get the Dynamic Shadow enable state.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function SettingsMenu.InitializeGraphicsPopup(layout)
    DCEI.SetOnClickCallback(layout.GraphicSettings.Frame, function()
        layout.GraphicsPopup:Show()
    end)
    DCEI.SetOnClickCallback(layout.GraphicsPopup.CloseButton, function()
        layout.GraphicsPopup:Hide()
    end)

    if not layout.GraphicsPopup.state then
        layout.GraphicsPopup.state = DCEI.GetFrameState(layout.GraphicsPopup.Frame)
    end

    layout.GraphicsPopup.state.fps_60 = not DCEI.Settings.IsFps30()
    layout.GraphicsPopup.state.dynamic_shadows = DCEI.Settings.IsDynamicShadowEnabled()
    DCEI.SetOnClickCallback(layout.GraphicsPopup.FPS60.Frame, function()
        DCEI.Settings.SetFps30Enabled(not DCEI.Settings.IsFps30())
        DCEI.ShowFeedbackMessage(DCEI.GetTranslationText("ui/settings/graphics_reminder"))
    end)
    DCEI.SetOnClickCallback(layout.GraphicsPopup.DynamicShadows.Frame, function()
        DCEI.Settings.SetDynamicShadowEnabled(not DCEI.Settings.IsDynamicShadowEnabled())
        DCEI.ShowFeedbackMessage(DCEI.GetTranslationText("ui/settings/graphics_reminder"))
    end)

    for i = 0, 2 do
        if not layout.GraphicsPopup["Quality" .. i].state then
            layout.GraphicsPopup["Quality" .. i].state = DCEI.GetFrameState(layout.GraphicsPopup["Quality" .. i].Frame)
        end
        DCEI.SetOnClickCallback(layout.GraphicsPopup["Quality" .. i].Frame, function()
            layout.GraphicsPopup["Quality" .. resolution_level].state.is_selected = false
            layout.GraphicsPopup["Quality" .. i].state.is_selected = true
            resolution_level = i
            DCEI.Settings.SetResolutionLevel(i)
            DCEI.ShowFeedbackMessage(DCEI.GetTranslationText("ui/settings/graphics_reminder"))
        end)
    end
    resolution_level = DCEI.Settings.GetResolutionLevel()
    layout.GraphicsPopup["Quality" .. resolution_level].state.is_selected = true
end

```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void Settings.SetDynamicShadowEnabled(bool enable) {setdynamicshadowenabled-1}
```cs
void Settings.SetDynamicShadowEnabled(bool enable)
```
#### Description
[](description-start)
Enable/Disable Dynamic Shadow.  Note: New dynamic shadow setting will be applied after restart.
[](description-end)

#### Parameters
[](parameters-start)
- *bool* `enable` the state to set

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function SettingsMenu.InitializeGraphicsPopup(layout)
    DCEI.SetOnClickCallback(layout.GraphicSettings.Frame, function()
        layout.GraphicsPopup:Show()
    end)
    DCEI.SetOnClickCallback(layout.GraphicsPopup.CloseButton, function()
        layout.GraphicsPopup:Hide()
    end)

    if not layout.GraphicsPopup.state then
        layout.GraphicsPopup.state = DCEI.GetFrameState(layout.GraphicsPopup.Frame)
    end

    layout.GraphicsPopup.state.fps_60 = not DCEI.Settings.IsFps30()
    layout.GraphicsPopup.state.dynamic_shadows = DCEI.Settings.IsDynamicShadowEnabled()
    DCEI.SetOnClickCallback(layout.GraphicsPopup.FPS60.Frame, function()
        DCEI.Settings.SetFps30Enabled(not DCEI.Settings.IsFps30())
        DCEI.ShowFeedbackMessage(DCEI.GetTranslationText("ui/settings/graphics_reminder"))
    end)
    DCEI.SetOnClickCallback(layout.GraphicsPopup.DynamicShadows.Frame, function()
        DCEI.Settings.SetDynamicShadowEnabled(not DCEI.Settings.IsDynamicShadowEnabled())
        DCEI.ShowFeedbackMessage(DCEI.GetTranslationText("ui/settings/graphics_reminder"))
    end)

    for i = 0, 2 do
        if not layout.GraphicsPopup["Quality" .. i].state then
            layout.GraphicsPopup["Quality" .. i].state = DCEI.GetFrameState(layout.GraphicsPopup["Quality" .. i].Frame)
        end
        DCEI.SetOnClickCallback(layout.GraphicsPopup["Quality" .. i].Frame, function()
            layout.GraphicsPopup["Quality" .. resolution_level].state.is_selected = false
            layout.GraphicsPopup["Quality" .. i].state.is_selected = true
            resolution_level = i
            DCEI.Settings.SetResolutionLevel(i)
            DCEI.ShowFeedbackMessage(DCEI.GetTranslationText("ui/settings/graphics_reminder"))
        end)
    end
    resolution_level = DCEI.Settings.GetResolutionLevel()
    layout.GraphicsPopup["Quality" .. resolution_level].state.is_selected = true
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## bool Settings.IsFps30() {isfps30-0}
```cs
bool Settings.IsFps30()
```
#### Description
[](description-start)
Get if the game is set to 30 FPS.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function SettingsMenu.InitializeGraphicsPopup(layout)
    DCEI.SetOnClickCallback(layout.GraphicSettings.Frame, function()
        layout.GraphicsPopup:Show()
    end)
    DCEI.SetOnClickCallback(layout.GraphicsPopup.CloseButton, function()
        layout.GraphicsPopup:Hide()
    end)

    if not layout.GraphicsPopup.state then
        layout.GraphicsPopup.state = DCEI.GetFrameState(layout.GraphicsPopup.Frame)
    end

    layout.GraphicsPopup.state.fps_60 = not DCEI.Settings.IsFps30()
    layout.GraphicsPopup.state.dynamic_shadows = DCEI.Settings.IsDynamicShadowEnabled()
    DCEI.SetOnClickCallback(layout.GraphicsPopup.FPS60.Frame, function()
        DCEI.Settings.SetFps30Enabled(not DCEI.Settings.IsFps30())
        DCEI.ShowFeedbackMessage(DCEI.GetTranslationText("ui/settings/graphics_reminder"))
    end)
    DCEI.SetOnClickCallback(layout.GraphicsPopup.DynamicShadows.Frame, function()
        DCEI.Settings.SetDynamicShadowEnabled(not DCEI.Settings.IsDynamicShadowEnabled())
        DCEI.ShowFeedbackMessage(DCEI.GetTranslationText("ui/settings/graphics_reminder"))
    end)

    for i = 0, 2 do
        if not layout.GraphicsPopup["Quality" .. i].state then
            layout.GraphicsPopup["Quality" .. i].state = DCEI.GetFrameState(layout.GraphicsPopup["Quality" .. i].Frame)
        end
        DCEI.SetOnClickCallback(layout.GraphicsPopup["Quality" .. i].Frame, function()
            layout.GraphicsPopup["Quality" .. resolution_level].state.is_selected = false
            layout.GraphicsPopup["Quality" .. i].state.is_selected = true
            resolution_level = i
            DCEI.Settings.SetResolutionLevel(i)
            DCEI.ShowFeedbackMessage(DCEI.GetTranslationText("ui/settings/graphics_reminder"))
        end)
    end
    resolution_level = DCEI.Settings.GetResolutionLevel()
    layout.GraphicsPopup["Quality" .. resolution_level].state.is_selected = true
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void Settings.SetFps30Enabled(bool enable) {setfps30enabled-1}
```cs
void Settings.SetFps30Enabled(bool enable)
```
#### Description
[](description-start)
Enable/Disable game FPS 30 setting.  Note: New fps setting will be applied after restart.
[](description-end)

#### Parameters
[](parameters-start)
- *bool* `enable` the state to set

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function SettingsMenu.InitializeGraphicsPopup(layout)
    DCEI.SetOnClickCallback(layout.GraphicSettings.Frame, function()
        layout.GraphicsPopup:Show()
    end)
    DCEI.SetOnClickCallback(layout.GraphicsPopup.CloseButton, function()
        layout.GraphicsPopup:Hide()
    end)

    if not layout.GraphicsPopup.state then
        layout.GraphicsPopup.state = DCEI.GetFrameState(layout.GraphicsPopup.Frame)
    end

    layout.GraphicsPopup.state.fps_60 = not DCEI.Settings.IsFps30()
    layout.GraphicsPopup.state.dynamic_shadows = DCEI.Settings.IsDynamicShadowEnabled()
    DCEI.SetOnClickCallback(layout.GraphicsPopup.FPS60.Frame, function()
        DCEI.Settings.SetFps30Enabled(not DCEI.Settings.IsFps30())
        DCEI.ShowFeedbackMessage(DCEI.GetTranslationText("ui/settings/graphics_reminder"))
    end)
    DCEI.SetOnClickCallback(layout.GraphicsPopup.DynamicShadows.Frame, function()
        DCEI.Settings.SetDynamicShadowEnabled(not DCEI.Settings.IsDynamicShadowEnabled())
        DCEI.ShowFeedbackMessage(DCEI.GetTranslationText("ui/settings/graphics_reminder"))
    end)

    for i = 0, 2 do
        if not layout.GraphicsPopup["Quality" .. i].state then
            layout.GraphicsPopup["Quality" .. i].state = DCEI.GetFrameState(layout.GraphicsPopup["Quality" .. i].Frame)
        end
        DCEI.SetOnClickCallback(layout.GraphicsPopup["Quality" .. i].Frame, function()
            layout.GraphicsPopup["Quality" .. resolution_level].state.is_selected = false
            layout.GraphicsPopup["Quality" .. i].state.is_selected = true
            resolution_level = i
            DCEI.Settings.SetResolutionLevel(i)
            DCEI.ShowFeedbackMessage(DCEI.GetTranslationText("ui/settings/graphics_reminder"))
        end)
    end
    resolution_level = DCEI.Settings.GetResolutionLevel()
    layout.GraphicsPopup["Quality" .. resolution_level].state.is_selected = true
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## bool Settings.IsFacebookConnected() {isfacebookconnected-0}
```cs
bool Settings.IsFacebookConnected()
```
#### Description
[](description-start)
Whether player has link the account to Facebook.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function SettingsMenu.InitializePlatformButtons(layout)
    -- Set initial state of platform buttons
    layout.state.is_apple = DCEI.Platform == "IPhonePlayer"
    layout.state.platform_connect = DCEI.Settings.IsGoogleConnected() or DCEI.Settings.IsAppleConnected()
    layout.state.facebook_connect = DCEI.Settings.IsFacebookConnected()

    local function PlatformConnect() --success, used or failed
        if DCEI.Platform == "IPhonePlayer" then
            SocialConnect("Apple")
            layout.state.platform_connect = DCEI.Settings.IsAppleConnected()
        else
            SocialConnect("Google")
            layout.state.platform_connect = DCEI.Settings.IsGoogleConnected()
        end
    end

    local function FacebookConnect()
        SocialConnect("Facebook")
        layout.state.facebook_connect = DCEI.Settings.IsFacebookConnected()
    end

    -- Callbacks
    DCEI.SetOnClickCallback(layout.ConnectOsPlatform.Frame, PlatformConnect)
    DCEI.SetOnClickCallback(layout.ConnectFacebook.Frame, FacebookConnect)
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void Settings.ConnectFacebook(TypedCallback\<object> callback) {connectfacebook-1}
```cs
void Settings.ConnectFacebook(TypedCallback<object> callback)
```
#### Description
[](description-start)
Try connect player's account to a Facebook account.
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback\<object>* `callback` the callback function that handles a return.

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function ClickFacebookConnectCallback()
    DCEI.ConnectFacebook(
        function(result)
            if result == "success" then
                -- Handle connect success case
            elseif result == "failed" then
                -- Handle connect failed case
            elseif result == "used" then
                -- Handle account used case
            end
        end
    )
end
DCEI.SetOnClickCallback(button_connect_facebook, ClickFacebookConnectCallback)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void Settings.DisconnectFacebook(TypedCallback\<object> callback) {disconnectfacebook-1}
```cs
void Settings.DisconnectFacebook(TypedCallback<object> callback)
```
#### Description
[](description-start)
Try disconnect player's account to a Facebook account.
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback\<object>* `callback` the callback function that handles a return.

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function ClickFacebookDisconnectCallback()
    DCEI.DisconnectFacebook(
        function(result)
            if result == "success" then
                -- Handle disconnect success case
            elseif result == "failed" then
                -- Handle disconnect failed case
            end
        end
    )
end
DCEI.SetOnClickCallback(button_disconnect_facebook, ClickFacebookDisconnectCallback)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void Settings.RestoreAccountByFacebook(TypedCallback\<object> callback) {restoreaccountbyfacebook-1}
```cs
void Settings.RestoreAccountByFacebook(TypedCallback<object> callback)
```
#### Description
[](description-start)
Try restore player's account by facebook. Only call this api when [Settings.ConnectFacebook](#connectfacebook-1) api return "used".

Note: if restore succeed, the game will restart automatically and the callback won't be called.
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback\<object>* `callback` the callback function that handles a return.

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function ClickFacebookRestoreCallback()
    DCEI.RestoreAccountByFacebook(
        function(result)
            if result == "failed" then
                -- Handle disconnect failed case
            end
        end
    )
end
DCEI.SetOnClickCallback(button_restore_facebook, ClickFacebookRestoreCallback)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## bool Settings.IsGoogleConnected() {isgoogleconnected-0}
```cs
bool Settings.IsGoogleConnected()
```
#### Description
[](description-start)
Whether player has link the account to Google.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function SettingsMenu.InitializePlatformButtons(layout)
    -- Set initial state of platform buttons
    layout.state.is_apple = DCEI.Platform == "IPhonePlayer"
    layout.state.platform_connect = DCEI.Settings.IsGoogleConnected() or DCEI.Settings.IsAppleConnected()
    layout.state.facebook_connect = DCEI.Settings.IsFacebookConnected()

    local function PlatformConnect() --success, used or failed
        if DCEI.Platform == "IPhonePlayer" then
            SocialConnect("Apple")
            layout.state.platform_connect = DCEI.Settings.IsAppleConnected()
        else
            SocialConnect("Google")
            layout.state.platform_connect = DCEI.Settings.IsGoogleConnected()
        end
    end

    local function FacebookConnect()
        SocialConnect("Facebook")
        layout.state.facebook_connect = DCEI.Settings.IsFacebookConnected()
    end

    -- Callbacks
    DCEI.SetOnClickCallback(layout.ConnectOsPlatform.Frame, PlatformConnect)
    DCEI.SetOnClickCallback(layout.ConnectFacebook.Frame, FacebookConnect)
end

```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void Settings.ConnectGoogle(TypedCallback\<object> callback) {connectgoogle-1}
```cs
void Settings.ConnectGoogle(TypedCallback<object> callback)
```
#### Description
[](description-start)
Try connect player's account to a Google account.
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback\<object>* `callback` the callback function that handles a return.

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function ClickGoogleConnectCallback()
    DCEI.ConnectGoogle(
        function(result)
            if result == "success" then
                -- Handle connect success case
            elseif result == "failed" then
                -- Handle connect failed case
            elseif result == "used" then
                -- Handle account used case
            end
        end
    )
end
DCEI.SetOnClickCallback(button_connect_google, ClickGoogleConnectCallback)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void Settings.DisconnectGoogle(TypedCallback\<object> callback) {disconnectgoogle-1}
```cs
void Settings.DisconnectGoogle(TypedCallback<object> callback)
```
#### Description
[](description-start)
Try disconnect player's account to a Google account.
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback\<object>* `callback` the callback function that handles a return.

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function ClickGoogleDisconnectCallback()
    DCEI.DisconnectGoogle(
        function(result)
            if result == "success" then
                -- Handle disconnect success case
            elseif result == "failed" then
                -- Handle disconnect failed case
            end
        end
    )
end
DCEI.SetOnClickCallback(button_disconnect_google, ClickGoogleDisconnectCallback)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void Settings.RestoreAccountByGoogle(TypedCallback\<object> callback) {restoreaccountbygoogle-1}
```cs
void Settings.RestoreAccountByGoogle(TypedCallback<object> callback)
```
#### Description
[](description-start)
Try restore player's account by facebook. Only call this api when [Settings.ConnectGoogle](#connectgoogle-1) api return "used".
Note: if restore succeed, the game will restart automatically and the callback won't be called.
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback\<object>* `callback` the callback function that handles a return.

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function ClickGoogleRestoreCallback()
    DCEI.RestoreAccountByGoogle(
        function(result)
            if result == "failed" then
                -- Handle disconnect failed case
            end
        end
    )
end
DCEI.SetOnClickCallback(button_restore_google, ClickGoogleRestoreCallback)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## bool Settings.IsAppleConnected() {isappleconnected-0}
```cs
bool Settings.IsAppleConnected()
```
#### Description
[](description-start)
Whether player has linked the account to Apple.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local is_apple_connect = DCEI.Settings.IsAppleConnected()
if not is_apple_connect then
    DCEI.ConnectApple(
        function(result)
            if result == "success" then
                -- Handle connect success case
            elseif result == "failed" then
                -- Handle connect failed case
            elseif result == "used" then
                -- Handle account used case
            end
        end
    )
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void Settings.ConnectApple(TypedCallback\<object> callback) {connectapple-1}
```cs
void Settings.ConnectApple(TypedCallback<object> callback)
```
#### Description
[](description-start)
Try connect player's account to a Apple account.
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback\<object>* `callback` the callback function that handles a return.

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function ClickAppleConnectCallback()
    DCEI.ConnectApple(
        function(result)
            if result == "success" then
                -- Handle connect success case
            elseif result == "failed" then
                -- Handle connect failed case
            elseif result == "used" then
                -- Handle account used case
            end
        end
    )
end
DCEI.SetOnClickCallback(button_connect_apple, ClickAppleConnectCallback)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void Settings.DisconnectApple(TypedCallback\<object> callback) {disconnectapple-1}
```cs
void Settings.DisconnectApple(TypedCallback<object> callback)
```
#### Description
[](description-start)
Try disconnect player's account to a Apple account.
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback\<object>* `callback` the callback function that handles a return.

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function ClickAppleDisconnectCallback()
    DCEI.DisconnectApple(
        function(result)
            if result == "success" then
                -- Handle disconnect success case
            elseif result == "failed" then
                -- Handle disconnect failed case
            end
        end
    )
end
DCEI.SetOnClickCallback(button_disconnect_apple, ClickAppleDisconnectCallback)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void Settings.RestoreAccountByApple(TypedCallback\<object> callback) {restoreaccountbyapple-1}
```cs
void Settings.RestoreAccountByApple(TypedCallback<object> callback)
```
#### Description
[](description-start)
Try restore player's account by Apple. Only call this api when [Settings.ConnectApple](#connectapple-1) api return "used".
Note: if restore succeed, the game will restart automatically and the callback won't be called.
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback\<object>* `callback` the callback function that handles a return.

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function ClickAppleRestoreCallback()
    DCEI.RestoreAccountByApple(
        function(result)
            if result == "failed" then
                -- Handle disconnect failed case
            end
        end
    )
end
DCEI.SetOnClickCallback(button_restore_apple, ClickAppleRestoreCallback)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void Settings.SendSupportEmail(string subject, string content) {sendsupportemail-2}
```cs
void Settings.SendSupportEmail(string subject, string content)
```
#### Description
[](description-start)
Sends a email to the game's support email address.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `subject` title of the email.
- *string* `content` body message text of the email.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
    -- Support
    -- The API automatically prefixes the game name and appends the player's id at the end of the subject line
    local subject = "Support"
    -- The API automatically appends the player ID, version, and platform at the end of the content.
    local content = "\n\n\n\n --------------------------- \n" .. "Reply above this line. \n \n"
    DCEI.SetOnClickCallback(layout.Support.Frame, function()
        DCEI.Settings.SendSupportEmail(subject, content)
    end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

