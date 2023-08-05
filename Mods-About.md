- [About Registry Dependencies](#about-registry-dependencies)
  - [How to Use](#how-to-use)
- [First-Party Registry Dependencies](#first-party-registry-dependencies)
    - [Core](#core)
    - [GMUI](#gmui)
    - [LegacyShop](#legacyshop)
    - [Bank](#bank)
    - [Meta](#meta)
    - [Promo](#promo)
- [Legacy Registry Dependencies](#legacy-registry-dependencies)
- [Difference between latest mods (GMUI) and legacy mods (gmui)](#difference-between-latest-mods-gmui-and-legacy-mods-gmui)


# About Registry Dependencies

In `Window > Project Settings` you can specify your project file to be `Type: Module` (rather than `Map`). You can then add this `Module` to other `Map` or `Mod` files by adding them to the `Dependencies` list of another file. Here you can also add "Registry Dependencies" also known as "Registry Mods". 

![image](https://user-images.githubusercontent.com/56179268/225920711-3ee05268-3c1b-4f5a-bb83-d24a7770967f.png)

"Registry Dependencies" are essentially `Module` type projects that have been published to the server so that multiple projects can use them, and when the author publishes an update, projects using them will automatically update to the next version\*\*. 

To publish a registry module, set the project Type to `Library` (instead of `Game`) before publishing.

![image](https://user-images.githubusercontent.com/56179268/225920935-f0ffcdb5-01c9-445e-8b86-6189fe017ffc.png)

----


*(\*\*If the `^` character prefixes the version number, any sub-versions updates will be automatically applied, e.g. `^1.0.0` will auto update from `1.0.0` to `1.1.2`. If a major version update occurs (`1.0.0` > `2.0.0`) this would require a manual update. This should only be done if there are compatability issues, meaning users have to modify their Lua to be compatible with the newer version. This way your project should never break from Registry Dependency auto-updates. The `^` character can be omitted to use a specific version. )*

----

Any user can publish a registry mod, and registry mods can be viewed at https://module.wildsky.dev/module 

However, there are several "First Party" Registry Dependencies, which are official mods created and maintained by the Funovus designer support team. These Mods are used by almost every project created in the Funovus editor, especially core which is added to every new map by default. 

## How to Use

After adding a registry mod to "Registry Dependencies" in your Project Settings, you have to require them in your Lua script to access their functions in your lua script:
```lua
local GMUI = require("GMUI")
```

Some of the first-party registry modules have their own wiki pages; however all first party mods have annotations, meaning once you `include` these in your project you can get a list of APIs and how to use them in VS Code by typing the module name:

![image](https://user-images.githubusercontent.com/56179268/225932161-8e265dd0-6b4e-46da-8594-8a760c7d8669.png)

It's helpful to understand that these are lua libraries implemented by fellow designers. The following are official first-party mods:

# First-Party Registry Dependencies
These are the latest iteration of first-party registry dependencies, utilizing [presentation scripting](https://funovus.notion.site/Presentation-vs-Simulation-Script-02155b2974e549c6afe3b3128ba841fb) and newer case formatting. (`GMUI` vs the legacy `gmui`)

### [Core](Mods-Core-Overview)
`Core` is a general purpose layer just above `DCEI` API's, providing utility and shortcuts. Comes preinstalled on newer versions of the editor.

### [GMUI](Mods-GMUI-Overview)
`GMUI` is essential for creating custom game UI. Comes preinstalled on newer versions of the editor.

### LegacyShop
`LegacyShop` handles selling in-game IAP micro-transactions and utilizes lazy loading. It's marked Legacy because it has not yet been updated to fully utilize presentation scripting.

### [Bank](Mods-Bank-Mod)
`Bank` handles save/loading user save data between sessions. 

### [Meta](Mods-Meta-Overview)
`Meta` is a mod for implementing meta features, such as a talent tree. This can be thought of as an extension of GMUI, only it includes logic on top of UI and focuses on meta-game feature implementation

### [Promo](Mods-Promo)
`Promo` is a mod for promoting Funovus games.


---

# Legacy Registry Dependencies
Legacy mods are prior to the addition of ["presentation"](https://funovus.notion.site/Presentation-vs-Simulation-Script-02155b2974e549c6afe3b3128ba841fb) layer scripting, and are used in older projects. 

* [core](Mods-Legacy-core)
* [gmui](Mods-Legacy-gmui)
* [shop](Mods-IAP-Shop-Mod)
* [lazy_shop](Mods-LazyShop-Mod)
  * `lazy_shop` is a shop branch which only creates UI elements as-needed. (e.g. [lazy loading](https://en.wikipedia.org/wiki/Lazy_loading))
*  promo
*  meta (depreciated)
   * `meta` was a mod for implementing meta features, like card collection. 

---

# Difference between latest mods (GMUI) and legacy mods (gmui)

Legacy mods are prior to the addition of ["presentation"](https://funovus.notion.site/Presentation-vs-Simulation-Script-02155b2974e549c6afe3b3128ba841fb) layer scripting, and are used in older projects. They use lower-case naming (gmui, core).

The latest iteration of first-party registry dependencies use proper case (GMUI, Core, Bank) utilizing [presentation scripting](https://funovus.notion.site/Presentation-vs-Simulation-Script-02155b2974e549c6afe3b3128ba841fb). They're also broken up into more class files with some functions renamed, e.g. `core.GetUnitFacingAngle(unit)` is now `Core.Unit.GetFacingAngle(unit)`.