

# Mods\LazyShop Mod

The LazyShop Mod is a fork of the default [Shop Mod](https://wiki.editor.funovus.com/master/Mods-IAP-Shop-Mod) that uses lazy loading to only generate shop items the first time they're shown, rather than loading everything on game initialization.

## Features
- Everything in [shop](https://wiki.editor.funovus.com/master/Mods-IAP-Shop-Mod)
- Optimized item creation that reduces load time for games with complex shops
- Item creation animations to reduce potential performance impact


![lazy shop](https://user-images.githubusercontent.com/56179276/187561854-70f09052-a253-49a0-ae3d-b0a33dec310b.gif)


## Usage Instructions
- To use this mod, add the `lazy_shop` registry module to your project using the latest version `^0.1.0`. Note as this mod is still being tested, it's not yet on version `1.0.0`.

## Compatibility 
Due to the nature of the differences between Shop and LazyShop, it may not be fully compatible with games currently using the original [shop](https://wiki.editor.funovus.com/master/Mods-IAP-Shop-Mod) mod. The main thing to be aware of is that an item's layout (typically gotten with `shop.GetItemLayout()`) won't exist until the first time the shop is actually opened. You may have to adjust your code such as:

```lua
-- updating an item in `shop`
local layout = shop.GetItemLayout("com.wildsky.test.shop.chest01")
layout:Update()

-- updating an item in `lazy_shop`
local layout = shop.GetItemLayout("com.wildsky.test.shop.chest01")
if layout and DCEI.FrameExists(layout.Frame) then
    layout:Update()
end
```


## New Features
### ui.shop:Show( options )
```md
ui.shop:Show( table options )
```
New `options` parameter. Current options:
  - (optional) *table* `section_filter` when set, only section names in this list will be shown. This can be used to only show players one section of the shop when opened from specific places (ex: only show gems when they need more gems)

**Example Usage**
```lua
-- this will open the shop with only the "gems" section visible
shop.ui:Show({ section_filter = { "gems" }})
```

### shop.InitializeIAP( iap_data )
```md
shop.InitializeIAP( table iap_data )
```
New `rows_to_load_instantly` argument in `iap_data`:
- (optional) *bool* `rows_to_load_instantly` this number of rows (including rows across different shop sections) will have their first item created instantly during the item loading animation (default value is `2`). 

This value should be set to the maximum number of visible rows when the shop is first opened, otherwise shop sections may have the wrong height during the lazy loading animation. For example, this value is set to 3 in the above gif.

**Example Usage**
```lua
shop.InitializeIAP({
  on_purchase_attempt_callback = AttemptAnyItemPurchase,
  on_purchase_success_callback = OnAnyItemPurchase,
  product_list = GetProductList(),
  currency_list = CURRENCIES,
  rows_to_load_instantly = 3, -- instantly create the first 3 rows during lazy loading
})
```

### shop.IsItemQueuedForLazyLoad( product_id )
```md
bool shop.IsItemQueuedForLazyLoad( string product_id )
```
This function returns true if the given product id is queued to be lazy loaded in the shop.

**Example Usage**
```lua
local layout = shop_mod.GetItemLayout(product_id)
local does_item_belong_to_shop = layout or shop_mod.IsItemQueuedForLazyLoad(product_id)
if does_item_belong_to_shop then
    -- do something that only applies to items that currently or will exist in the shop (but NOT in a popup), such as check if it should contribute to showing a shop pip
end
```