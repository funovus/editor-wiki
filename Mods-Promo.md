# Promo

Promo mod is used to promote our other games with a page that has buttons which link to each of them when tapped.

For [legacy projects](difference-between-latest-mods-gmui-and-legacy-mods-gmui), use the legacy `promo` mod (lowercase p, versus `Promo`). 

## GetConfigData


```lua
(method) Promo.GetConfigData()
  -> table
```

Returns the game config data. Each game's data is formatted like:
```
{
    key = "wildarmydraft",
    title = DCEI.GetTranslationText("cross_promo/wildarmydraft"),
    description = DCEI.GetTranslationText("cross_promo/wildarmydraft_description"),
    image = DCEI.Texture("game_draft"),
    url = "https://play.google.com/store/apps/details?id=com.wildsky.wildarmydraft",
}
```
The games are listed in order, but also indexed by key.

## GetPromoButtonFrame


```lua
(method) Promo.GetPromoButtonFrame()
  -> InGameUILayoutComponent
```

Returns the promo button frame.

## GetPromoPageLayout


```lua
(method) Promo.GetPromoPageLayout()
  -> Layout
```

Returns the promo page table. Note due to the legacy nature of the Promo mod, this is not a GMUI Layout and does not have GMUI Layout methods.

## HideButton


```lua
(method) Promo.HideButton()
```

Hide the promo button.

## Initialize


```lua
(method) Promo.Initialize(options?: PromoModOptions)
```

Initialize the promo mod. Key should be the key of your game as it is written in the promo config data.
This is so that the promo mod wont promote the game players are currently playing.

## ShowButton


```lua
(method) Promo.ShowButton()
```

Display the Promo button. Won't work if you haven't initialized with a valid game key yet.


---

# PromoModOptions

## button_parent


```lua
InGameUILayoutComponent
```

Parent frame to create the button inside of.

## frame_parent


```lua
InGameUILayoutComponent
```

Parent frame to create the promo page UI inside of.

## skip_ui


```lua
boolean
```

If set to true, the UI won't be created. This allows you to create the UI yourself, using the data from GetConfigData().