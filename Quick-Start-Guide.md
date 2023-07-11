## Quick Start Guide

If you have any issues installing or running the editor, contact editor-support@funovus.com

If this is your first foray into RTS editors we recommend you get started with [running the editor](Getting-Started) and going through our editor basics tutorials:

**Note:** some of the tutorial screenshots may be outdated and not match the latest editor version, but the tutorial steps should still be largely unchanged.

* [Tutorial 1–1: Creating A Unit](Tutorial-1%E2%80%931)
* [Tutorial 1–2: Creating A Weapon](Tutorial-1%E2%80%932)
* [Tutorial 1–3: Improving Things With Actors](Tutorial-1%E2%80%933)
* [Tutorial 1–4: Writing Triggers In Lua](Tutorial-1%E2%80%934)
* [Tutorial 1–5: Writing More Triggers In Lua](Tutorial-1%E2%80%935)

After you've finished up the tutorials, the next recommended stop would be to check out the [Wild Zombie Survival Demo Project](https://platform.wildsky.dev/arcade/game/261). Note that you can download the project with the "Source" button. See [Demo Projects](Demo-Projects) for any other demos.

## Data
You'll want to slowly familiarize yourself with the [Data Window](Data), which is used to build and modify basic game objects such as [units](Data-Unit), [abilities](Data-Ability), [behaviors](Data-Behavior), [weapons](Data-Weapon), and [effects](Data-Effect)—all of which are touched on in the getting started tutorial series above.

### Data Resources
* [Data Overview](Data)
* [Node Editor](Data-Node-Editor)
* [Useful Data Parent Objects](Useful-Data-Parent-Objects)
* [Data\Unit](Data-Unit)
* [Data\Weapon](Data-Weapon)
* [Data\Ability](Data-Ability)
* [Data\Effect](Data-Effect)
* [Data\Behavior](Data-Behavior)
* [Data\ProjectSettings](Data-ProjectSetting)

## Scripting
Game logic is handled by [Lua scripting](https://www.lua.org/pil/1.html). If this is your first time with Lua, don't be afraid! It's very easy to pick up, as far as scripting languages go. We recommend you brush up on some [Lua gotchas](https://www.luafaq.org/gotchas.html) and stop by our [style guide](https://funovus.notion.site/Lua-Scripting-8f54f72df8044482a37463180a15fc79).

### Scripting Resources
* [Trigger API Reference](Trigger-API-Reference)
* [Core Library Reference](Mods-Core-Overview)

## UI
UI can be created [with Lua scripting](Trigger-API-Reference#custom-ui) and directly with XML through the `UI Editor` window (Windows > UI Editor).

The best practice for creating custom UI is to create the UI in xml and hook it up using the [gmui library](Mods-GMUI-Overview).

### UI Resources
* [Custom UI via XML Overview](Using-XML-For-UI)
* [GMUI Demo Project](https://platform.wildsky.dev/arcade/game/576) ([source](https://platform.wildsky.dev/api/store/project/576/source))
* [UI XML Reference](Ui-XML)

## Debugging
Last but not least you'll want to be aware of the editor's available debugging features.

### Debugging Resources
* [Debugging Features](Debugging-Features)

### Guides
* [See more helpful guides](https://www.notion.so/funovus/ada979ff3c6d48ee9482633fa776cdf5?v=1e8ba7c02f6049dea1339bab0f2ef702&pvs=4)