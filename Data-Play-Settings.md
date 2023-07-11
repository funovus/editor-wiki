<table ><tbody ><tr></tr><tr><td><details>
<summary><b>Table of Contents</b></summary><hr>

<div markdown="1">
- [Play Settings](#play-settings-window)
    * [Resolution](#resolution)
    * [Trigger Context](#trigger-context)
        - [Is Dev](#is-dev)
        - [Attempted [Wild Sky]](#attempted-wild-sky)
        - [Completed [Wild Sky]](#completed-wild-sky)
        - [Difficulty [Wild Sky]](#difficulty-wild-sky)
        - [Prefix [Wild Sky]](#prefix-wild-sky)
        - [Damage Multiplier [Wild Sky]](#damage-multiplier-wild-sky)
    * [Other Settings](#other-settings)
        - [Level Name](#level-name)
        - [Simulate Online](#simulate-online)
        - [Simulate Ads](#simulate-ads)
        - [Simulate Gems](#simulate-gems)
        - [Simulate User Id](#simulate-user-id)
        - [Simulate Leaderboard Top Score](#simulate-leaderboard-top-score)
        - [Simulate Leader Board Group](#simulate-leader-board-group)
        - [Throw Trigger Error As Exception](#throw-trigger-error-as-exception)
        - [Language](#language)
        - [Show Iphone X Frame](#show-iphone-x-frame)
        - [Vscode Path](#vscode-path)
        - [Save Data](#save-data)

</div>
</details></td></tr></tbody></table>

***
# Play Settings Window

Play settings provide some testing configurations for playing games through the editor, in addition to providing access to the local player's save data and log console.

Play settings can be accessed through Window > Play Settings Window, or `Ctrl+Shift+L` (L for log).

Note that all of these options are local to the editor, and are *not* saved as part of map data.

## Resolution
Sets the height and width of the Play Window. The Play Window must be closed for a new resolution to be applied.

A standard 16:9 resolution is recommended for testing landscape games (such as 1080 x 1920 or 720 x 1280). A resolution of 576 x 1024 is recommended for testing portrait games.

## Trigger Context

### Is Dev
When checked, enables the debug menu checkbox in the Play Window.

### Attempted [Wild Sky]
Trigger context settings for Wild Sky.

### Completed [Wild Sky]
Trigger context settings for Wild Sky.

### Difficulty [Wild Sky]
Trigger context settings for Wild Sky.

### Prefix [Wild Sky]
Trigger context settings for Wild Sky.

### Damage Multiplier [Wild Sky]
Trigger context settings for Wild Sky.

## Other Settings 

### Level Name
If the current opened project is a [mod](Data-Setting#dceiengineprotomapsettingstypetype), the level referenced here will be played using the mod as a dependency. This is useful for testing mods.

### Simulate Online
When checked, [DCEI.IsOnline()](Trigger-API-Reference-DCEI-Functions-Service#bool-isonline) will return true in editor play mode.

### Simulate Ads
When checked, the [DCEI.ShowAds()](Trigger-API-Reference-DCEI-Functions-Service#void-showadstypedcallbackbool-callback-bool-fallbacktounityads) callback will return successfully in editor play mode.

### Simulate User Id
When set, [DCEI.GetUserId()](Trigger-API-Reference-DCEI-Functions-Service#string-getuserid) will return this value in editor play mode.

### Simulate Leaderboard Top Score
When set, sets the top leaderboard score to this value in editor play mode.

### Simulate Leader Board Group
Determines which leaderboard group is displayed in editor play mode. 0 is default, 1 is cheater.

### Throw Trigger Error As Exception
When checked, trigger errors will be thrown as exceptions with a full stack trace. This is useful for gathering context while debugging (ie finding the error line number).

### Language
Sets the localization langauge to use in editor play mode, affecting which text is returned by [DCEI.GetTranslationText()](Trigger-API-Reference-DCEI-Functions-Service#string-gettranslationtextstring-key-dictionarystring-object-parameters). The Play Window must be closed for a new language to be applied.

### Show Iphone X Frame
When checked, overlays the iPhone X frame on top of the game view in editor play mode. Useful for adjusting to UI to work with the pesky notch.

### Vscode Path
Add your Visual Studio Code install path here for non-default install locations to open the game's triggers in vscode with the "Open Lua Script" button.

### Save Data
Displays an editable table of the player's save data. While the save data is updated live, the game must be resarted via the play button for any manual edits to take effect.