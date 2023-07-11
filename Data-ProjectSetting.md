<div id="toc" markdown="1">
- [Data\ProjectSettings](#dataprojectsettings)
  * [Project Info](#project-info)
  * [Player](#player)
  * [Display](#display)
  * [Input](#input)
  * [Font](#font)
  * [Build](#build)
  * [Game](#game)
  * [Graphics](#graphics)
  * [Canvas](#canvas)
  * [Asset Pack](#asset-pack)

</div>

***

# [](dcei.engine.proto.ProjectSettings)**[Data](Data)\ProjectSettings** {dataProjectSettings}

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ProjectSettings.project_info)**Project Info** {Project-Info}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ProjectInfo.type)**Type** {Type}

[](manual-wiki-start)

[](manual-wiki-end)

>* **GAME**: 
>* **LIBRARY**: 

### [](dcei.engine.proto.ProjectInfo.version)**Version** {Version}
Version of the project (e.g., 1.2.3). Used when publishing the project.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ProjectInfo.project_name)**Project Name** {Project-Name}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.ProjectInfo.entry_map)**Entry Map** {Entry-Map}
For game projects, this is the starting map when launching the game in arcade or in standalone build. For library projects, this is the map that will be imported by dependents.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ProjectSettings.player)**Player** {Player}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.PlayerSettings.player_count)**Player Count** {Player-Count}
Used to set the maximum number of players for multiplayer games.

[](manual-wiki-start)
Currently only 1v1 games are supported on the [arcade](https://platform.wildsky.dev/).
[](manual-wiki-end)

## [](dcei.engine.proto.ProjectSettings.display)**Display** {Display}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.DisplaySettings.orientation)**Orientation** {Orientation}
Sets the display mode to be landscape (default) or portrait.

[](manual-wiki-start)

[](manual-wiki-end)

>* **LANDSCAPE**: the game will display in landscape mode
>* **PORTRAIT**: the game will display in portrait mode

### [](dcei.engine.proto.DisplaySettings.resizable_window)**Resizable Window** {Resizable-Window}
If set, the application window can be resized.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ProjectSettings.input)**Input** {Input}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.InputSettings.key_mappings)**Key Mappings** {Key-Mappings}

[](manual-wiki-start)
Defines key mappings that trigger **[DCEI.TriggerAddMappedKeyDownEvent()](Trigger-API-Reference-DCEI-Events-Input#void-triggeraddmappedkeydowneventstring-keyeventname-typedcallbackstring-trigger)** events for PC and web games.
[](manual-wiki-end)

#### [](dcei.engine.proto.InputSettings.KeyMapping.name)**Name** {Name}
The name to use for the mapped key event (ex: "shoot").

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.InputSettings.KeyMapping.key)**Key** {Key}
The key mapped to this name.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ProjectSettings.font)**Font** {Font}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.FontSettings.override_fonts)**Override Fonts** {Override-Fonts}
Allows you to override the default text font per-language.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.FontSettings.FontSetting.language)**Language** {Language}
The language to override.

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.FontSettings.FontSetting.font)**Font** {Font}
The font to use for this language.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ProjectSettings.build)**Build** {Build}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BuildSettings.image_compression_quality)**Image Compression Quality** {Image-Compression-Quality}
The quality level (0 to 10) when compressing custom image assets. A lower value can help reduce the asset size but will also lower the image quality. Default is 10 (the highest).

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.BuildSettings.disable_language_selection)**Disable Language Selection** {Disable-Language-Selection}
Disable language selection options in the game. Use this when your game isn't localized yet.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ProjectSettings.game)**Game** {Game}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.GameSettings.simulation_frame_rate)**Simulation Frame Rate** {Simulation-Frame-Rate}
Use 32fps might reduce game latencies, but it would also greatly increase amount of work engine needs to do, resulting in game fps drop. Not recommended for mobile games.

[](manual-wiki-start)

[](manual-wiki-end)

>* **FPS_16**: 
>* **FPS_32**: 

### [](dcei.engine.proto.GameSettings.initialization_frame_count)**Initialization Frame Count** {Initialization-Frame-Count}
The number of frames at the beginning of the game that are used to initialize data/UI etc. and take a long time to finish. The engine will wait for these frames to finish before progressing the loading bar to 100% and transition into the game view.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ProjectSettings.graphics)**Graphics** {Graphics}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.GraphicsSettings.use_simple_shadows)**Use Simple Shadows** {Use-Simple-Shadows}
If true, all units will use "blob" shadows instead of detailed shadows.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.GraphicsSettings.simple_shadow_color)**Simple Shadow Color** {Simple-Shadow-Color}

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.GraphicsSettings.SimpleShadowColor.r)**R** {R}

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.GraphicsSettings.SimpleShadowColor.g)**G** {G}

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.GraphicsSettings.SimpleShadowColor.b)**B** {B}

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.GraphicsSettings.SimpleShadowColor.a)**A** {A}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.GraphicsSettings.use_legacy_shadows)**Use Legacy Shadows** {Use-Legacy-Shadows}
Set this to true if you want GpuAnimations to cast shadows on sprites. This will also disable GpuAnimations casting shadows on non-flat surfaces.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.GraphicsSettings.use_legacy_lighting)**Use Legacy Lighting** {Use-Legacy-Lighting}
Use the legacy lighting system (recommended for mobile games). This will force use_legacy_shadows to be true.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.GraphicsSettings.outline_style)**Outline Style** {Outline-Style}

[](manual-wiki-start)

[](manual-wiki-end)

>* **WITHOUT_INNER_LINES**: No inner lines on the inside of the unit and if two units overlap, the outline will only be visible around them.
>* **WITH_INNER_LINES**: Inner lines will be rendered on the inside of the unit between different body parts and between overlapping units.

### [](dcei.engine.proto.GraphicsSettings.use_legacy_outline_width_mode)**Use Legacy Outline Width Mode** {Use-Legacy-Outline-Width-Mode}
By default, an outline width of 1 means 1/100 of the screen height. When the screen height increases, the size of both units and their outline increases proportionally so the outline to unit size ratio stays the same. Set this to true if you want to use the legacy mode where an outline width of 1 means 1/100 of the screen width. In the legacy mode, the outline to unit size ratio changes with the screen aspect ratio and the outline will look different from device to device.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ProjectSettings.canvas)**Canvas** {Canvas}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.CanvasSettings.reference_width)**Reference Width** {Reference-Width}
If the device's resolution does not match the reference width or height, the UI will be scaled up until either the width or the height matches device's resolution. In order to prevent custom sprites from being scaled, either the reference width or height should match the final device's resolution. These are 1344x750 by default.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.CanvasSettings.reference_height)**Reference Height** {Reference-Height}

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ProjectSettings.asset_pack)**Asset Pack** {Asset-Pack}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.AssetPackSettings.asset_packs)**Asset Packs** {Asset-Packs}

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.AssetPack.name)**Name** {Name}

[](manual-wiki-start)

[](manual-wiki-end)

#### [](dcei.engine.proto.AssetPack.version)**Version** {Version}

[](manual-wiki-start)

[](manual-wiki-end)

