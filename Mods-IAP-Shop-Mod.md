
***

# Mods\IAP Shop Mod

The IAP Shop Mod is used to create and manage in-game shop UI for IAP and currency spending.

## Features
* Create and manage in-game shop page UI
* Hookup shop items as IAP or custom currency (such as gems)
* Customizable UI for shop items via XML
* Supports portrait and landscape games

Need a feature prioritized or a feature missing from this list? Let [@coffee](https://github.com/coffee8479) know!


**Download the demo maps [HERE](https://github.com/crunchystudio/editor-wiki/files/6601754/Shop.Mod.Demo.zip) or play them on the arcade:** 
- [Portrait Shop Demo](https://platform.wildsky.dev/arcade/game/114)
- [Portrait Shop Demo (Custom UI)](https://platform.wildsky.dev/arcade/game/139)
- [Landscape Shop Demo](https://platform.wildsky.dev/arcade/game/117)

![landscape](https://user-images.githubusercontent.com/56179276/108011845-d4396c80-6fbc-11eb-8503-1d6f0642b454.png)

## Usage Instructions
- To use this mod, add the `shop` registry module to your project using the latest version `^1.0.0`.

### Shop Mod 2.0.0 Compatibility
Shop Mod 2.0.0 has some significant changes that break compatibility with earlier versions. Here are the key changes to look out for when upgrading from an earlier version.

- Initialize the shop ui with [shop.NewShopUI()](#newshopui-transform-parent-table-options-) instead of NewLandscapeShopUI or NewPortraitShopUI.
- Initialize the shop sections and default items with [ui.shop:Initialize()](#uishopinitialize-table-shop_data-) instead of creating sections and items individually.
- Update [shop.InitializeIAP()](#initializeiap-table-iap_data-) parameters as table keys.
- Get product items data with [item_data:GetItemsData()](#item-data-getitemsdata-) instead of `item_data.items`.
- Get product price data with [item_data:GetPriceData()](#item-data-getpricedata-) instead of `item_data.price`.
- Replace any direct local calls to OnAnyItemPurchase() with [shop.OnAnyItemPurchase](#onanyitempurchase-string-product_id-).
- Customize item layouts by [adding and referencing](#optional-table-custom) custom XML and remove any item:UpdateSize() or item:UpdateWidthPreset() calls.

## Shop Methods

For ease of use, the shop layout (as created by [NewShopUI](#newshopui-transform-parent-table-options-) will be referenced as `ui.shop` throughout this documentation.

The following functions can be used such as:

```lua
local shop = require("shop")

local ui = {
  root = DCEI.GetUiRootFrame()
}

-- product definitions
local product_list = {
  {
    product_id = "com.wildsky.example.iap.gold01",
    label = "Handful of Gold",
    display = "shop_gold_lv2",
    price = { usd = 2.99 },
    items = { gold = 1000 }
  },
  {
    product_id = "com.wildsky.example.iap.gold02",
    label = "Barrel of Gold",
    display = "shop_gold_lv4",
    price = { usd = 4.99 },
    items = { gold = 5000 }
  }
}

-- initialize IAP items
shop.InitializeIAP({
  on_purchase_attempt_callback = AttemptAnyItemPurchase,
  on_purchase_success_callback = OnAnyItemPurchase,
  product_list = product_list,
})

-- creates a new shop UI
ui.shop = shop.NewShopUI({ parent = ui.root })

-- initializes a shop with a "Gold" section and gold items
local shop_data = {
  {
    name = "gold",
    display_name = "Gold",
    rows = {
      {
        "com.wildsky.example.iap.gold01",
        "com.wildsky.example.iap.gold02",
      }
    }
  }
}

ui.shop:Initialize(shop_data)

-- show the shop after it's been initialized
ui.shop:Show()
```

### ui.shop:Show()
Shows the in-game shop UI.

### ui.shop:Hide()
Hides the in-game shop UI. Note that is automatically called when the close button (`ui.shop.CloseButton`) on the upper right of the shop UI is pressed.


### ui.shop:Initialize( <i>table</i> shop_data )
Initializes the shop layout and generates the shop's sections and starting items. The `shop_data` parameter should be a list of `section_data` tables that describe each shop section.

In **portrait** games, shop sections are created in a vertical list separated by banners. In **landscape** games, shop sections are created as individual shop tabs. Whether a shop is **landscape** or **portrait** is automatically determined by the resolution of the game window.

#### Example Usage
```lua
local shop_data = {
  {
    name = "bundles",
    display_name = "Value Packs",
    navigation = {
      use_display_name = true,
    },
    rows = {
      {
        "com.wildsky.test.iap.bundle.starter01"
      }
    },
    custom = {
      layout = "Portrait/Shop/Section_StarterPack"
    }
  },
  {
    name = "chests",
    display_name = "Chests",
    navigation = {
      use_display_name = true,
    },
    display_timer = {
      label = "Next free chest in:"
    },
    rows = {
      {
        "com.wildsky.test.shop.chest01",
        "com.wildsky.test.shop.chest02"
      }
    }
  },
}

ui.shop:Initialize(shop_data)
```

#### <i>table</i> `section_data` Parameters
- <i>string</i> `name` defines the section name so it can be referenced elsewhere.
- <i>string</i> `display_name` determines the text to display on the shop section banner. This is a separate value from `name` so that it can use localized text.
- <i>table</i> `rows` a list of `row` tables that determine the items displayed in each row.
  - <i>table</i> `row` a list of [product id's](#string-product_id) to display in the row.
- (optional) <i>table</i> `items` a list of [product id's](#string-product_id) to display that can be used instead of `rows` when a section contains only one row (such as for **landscape** shops).
- (optional) <i>bool</i> `scrollable` if true, sets the section to be scrollable horizontally. Only works with **landscape** shops. Useful for displaying more than 5 items per row.
- (optional) <i>table</i> `navigation` used in **portrait** shops to generate a navigation button for the section with additional parameters.
  - (optional) <i>bool</i> `use_display_name` if true, the navigation button will use the section's display name.
  - (optional) <i>string</i> `display_name` if set, the navigation button will use this text. Cannot be used with `use_display_name`
  - (optional) <i>string</i> `icon` if set, the navigation button will display this icon in addition to any displayed text.
- (optional) <i>table</i> `display_timer` creates a timer display for the shop section that counts down to the next [server day](#initializeserver-table-server-data-).
  - <i>string</i> `label` sets the text of the timer display.
- (optional) <i>table</i> `custom` used to define custom attributes of the section.
  - (optional) <i>string</i> `layout` the name of the XML layout to use for this shop section.
  - (optional) <i>string</i> `layout_func` this function will be run using the section layout as self when the section is created.



### ui.shop:AddItemsToSection( <i>string</i> section_name, <i>table</i> items_list, <i>table</i> options )
Dynamically adds items to a shop section. By default, these items will added to the current row for **landscape** shops and added to a new row for **portrait** shops.

Items added to the shop in this way can be set to expire at a given time using the `expires_at` and `expires_in` options, which will save the expiry time of the item to player save data. An item's expiration time can be cleared with [ClearItemTimerData()](#clearitemtimerdata-string-product_id-). Note that item expiry time is tracked with local OS time and NOT with server time, and thus can used without needing to call [InitializeServer()](#initializeserver-table-server-data-).

If an item is given an expiry time and its layout contains a frame with the id `TimerFrame`, it will attempt to hookup and activate the `TimerFrame` to display the time remaining. If the timer frame has a `TimerValueLabel` text frame, this text will display the remaining time using [FormatTimeDHM()](#formattimedhm-number-seconds-) formatting. If the timer frame has a `ClockHand` frame, it will become animated. The included UI templates `Landscape/Template/TimerFrame` and `Portrait/Template/TimerFrame` are for this expressed purpose.


#### Example Usage
```lua
-- adds an item that will expire in 3 days
local day_length_in_seconds = 86400
local options = { expires_in = day_length_in_seconds * 3 }
ui.shop:AddItemsToSection("bundles", { "com.wildsky.test.iap.bundle.starter01" }, options)
```

#### Parameters
- *string* `section_name` the section to add the items to.
- *table* `items_list` a list of [product id's](#string-product_id) to add to the section.
- (optional) *table* `options`
  - (optional) *number* `expires_at` if set, the items will be removed from the shop at the time of the given [unix timestamp](https://www.unixtimestamp.com/index.php).
  - (optional) *number* `expires_in` if set, the items will be removed from the shop after this many seconds have passed.
  - (optional) *number* `row` if set, the items will be added to the specified row index.

### ui.shop:RemoveItems( <i>table</i> items_list )
Dynamically removes items from the shop. Rows with no items will be removed. Sections with no items will be hidden until they have items again.

#### Example Usage
```lua
local items_list = {
  "com.wildsky.test.iap.bundle.starter01",
  "com.wildsky.test.iap.bundle.starter02",
}
ui.shop:RemoveItems(items_list)
```

### ui.shop:RemoveAllItemsFromSection( <i>string</i> section_name )
Dynamically removes all items from the specified shop section.

#### Example Usage
```lua
ui.shop:RemoveAllItemsFromSection("gold")
```

### ui.shop:RemoveAllItems()
Dynamically removes ALL items from the shop.

#### Example Usage
```lua
ui.shop:RemoveAllItems()
```


### ui.shop:AddTimerUpdateFunction( <i>string</i> timer_id, <i>function</i> update_function )
Adds an update function to the shop's update timer. The shop's update timer is a [Real Timer](Mods-Core#RealTimer) that pauses itself when the shop is hidden and resumes itself when the shop is shown. Any update functions added in this way will be executed each time the shop's update timer ticks, using the [global tick rate](Mods-Core#SetGlobalTickRate).

This can be useful for creating your own custom timer displays or otherwise want to constantly update something while the shop is open.

#### Example Usage
```lua
local TIME_SPENT_WITH_SHOP_OPEN = 0
local GLOBAL_TICK_RATE = 0.0625

local timer_id = "shop_time_tracking_timer"
function UpdateShopTimeTracking()
  TIME_SPENT_WITH_SHOP_OPEN = TIME_SPENT_WITH_SHOP_OPEN + GLOBAL_TICK_RATE
end

-- adds a timer that tracks the total time the shop has been open
ui.shop:AddTimerUpdateFunction(timer_id, UpdateShopTimeTracking)
```

### ui.shop:RemoveTimerUpdateFunction( <i>string</i> timer_id )
Removes an existing update function from the shop's update timer.

#### Example Usage
```lua
-- stop tracking the total time the shop has been open
local timer_id = "shop_time_tracking_timer"
ui.shop:RemoveTimerUpdateFunction(timer_id)
```


## Popup Methods
For ease of use, the popup layout (as created by [NewPopupUI](#newpopupui-table-options-) will be referenced as `ui.popup` throughout this documentation.

The following functions can be used such as:
```lua
local shop = require("shop")

local ui = {
  root = DCEI.GetUiRootFrame()
}

-- product definitions
local product_list = {
  {
    product_id = "com.wildsky.example.iap.gold01",
    label = "Handful of Gold",
    display = "shop_gold_lv2",
    price = { usd = 2.99 },
    items = { gold = 1000 }
  },
  {
    product_id = "com.wildsky.example.iap.gold02",
    label = "Barrel of Gold",
    display = "shop_gold_lv4",
    price = { usd = 4.99 },
    items = { gold = 5000 }
  }
}

-- initialize IAP items
shop.InitializeIAP({
  on_purchase_attempt_callback = AttemptAnyItemPurchase,
  on_purchase_success_callback = OnAnyItemPurchase,
  product_list = product_list,
})

-- creates a new popup UI
ui.popup = shop.NewPopupUI()

-- shows a popup with the "Handful of Gold" item
local items_list = { "com.wildsky.example.iap.gold01" }
local options = { display_name = "Deal of the Day" }
ui.popup:Show(items_list, options)
```

### ui.popup:Show( <i>table</i> items_list, <i>table</i> options )
Shows the UI popup with the given items and display options.

#### Example Usage
```lua
local items_list = { "com.wildsky.example.iap.gold01" }
local options = { display_name = "Deal of the Day" }
ui.popup:Show(items_list, options)
```

#### Parameters
- *table* `items_list` a list of [product id's](#string-product_id) to add to the popup.
- (optional) *table* `options`
  - (optional) *string* `display_name` determines the banner text to display on the popup. The default text is "Daily Deals".

### ui.popup:Update( <i>table</i> items_list )
Removes all existing items in the popup and replaces them with the given items.

#### Example Usage
```lua
local items_list = { "com.wildsky.example.iap.gold02" }
ui.popup:Update(items_list)
```

#### Parameters
- *table* `items_list` a list of [product id's](#string-product_id) to update the popup with.

### ui.popup:Hide()
Hides the popup. Note that is automatically called when the close button (`ui.popup.CloseButton`) on the upper right of the popup UI is pressed.

### ui.popup:AddTimerUpdateFunction( <i>string</i> timer_id, <i>function</i> update_function )
Adds an update function to the popup's update timer. Functions the same as the [shop update timer](#uishopaddtimerupdatefunction-string-timer_id-function-update_function-), but instead pauses when the popup is hidden.
### ui.popup:RemoveTimerUpdateFunction( <i>string</i> timer_id )
Removes an existing update function from the popup's update timer.


## Item Methods
These methods can be used on item layouts in the shop or popup UI. Use [shop.GetItemLayout()](#getitemlayout-string-product_id-) to get an item's shop layout and [shop.GetItemLayoutFromPopup()](#getitemlayoutfrompopup-string-product_id-) to get an item's popup layout.

### item:Remove()
Removes an item, similiar to calling [ui.shop.RemoveItems()](#uishopremoveitems-table-items_list-) with a single product id.

#### Example Usage
```lua
local product_id = "com.wildsky.example.iap.gold01"
local item = shop.GetItemLayout(product_id)
item:Remove()
```

### item:ShowPip()
Shows a [red pip](Mods-Legacy-gmui#newpip) on the top left of item's layout and the item's section banner. All pips are cleared when the shop is closed.

### item:HidePip()
Hide's an item's [red pip](Mods-Legacy-gmui#newpip).


## Mod Functions
These are the functions exported by the shop mod. They can be used such as:
```lua
local shop = require("shop")

local ui = {
  root = DCEI.GetUiRootFrame()
}

-- creates and shows the shop UI
ui.shop = shop.NewShopUI({ parent = ui.root })

-- initialize IAP data
shop.InitializeIAP({
  on_purchase_attempt_callback = AttemptAnyItemPurchase,
  on_purchase_success_callback = OnAnyItemPurchase,
  product_list = GetProductList(),
  currency_list = CURRENCIES
})
```

### InitializeIAP( <i>table</i> iap_data )
Initializes IAP from IAP data. This requires a product list, functions for purchase attempt and purchase success, and can optionally initialize [currencies](#currencies). This should be called in `OnMapStart()`.

#### Example Usage
```lua
local shop = require("shop")

local ui = {
  root = DCEI.GetUiRootFrame()
}

-- product definitions
local product_list = {
  {
    product_id = "com.wildsky.example.iap.gold01",
    label = "1,000 Gold",
    display = "shop_gold_lv2",
    price = { usd = 2.99 },
    items = { gold = 1000 }
  },
  {
    product_id = "com.wildsky.example.iap.gold02",
    label = "5,000 Gold",
    display = "shop_gold_lv4",
    price = { usd = 4.99 },
    items = { gold = 5000 }
  }
}

-- currency definitions
local currency_list = {
  {
    name = "gold",
    icon = "icon_item_coin"
  }
}

function AttemptAnyItemPurchase(product_id)
  -- if your game has products that can be purchased for in-game currency or by watching ads, you should include the purchase attempt logic for those items here

  if DCEI.Platform == "WindowsPlayer" then
    -- simulate successful purchase when using editor
    -- NOTE: shop.OnAnyItemPurchase() calls the on_purchase_success_callback after updating the item's layout and stock data
    shop.OnAnyItemPurchase(product_id)
  else
    -- otherwise continue standard IAP flow
    -- NOTE: DCEI.PurchaseIapProduct() takes a few seconds to execute and thus acts similarly to a DCEI.Wait() so avoid subsequent code in the same thread
    DCEI.PurchaseIapProduct(product_id)
  end
end

function OnAnyItemPurchase(product_id)
  local item_data = shop.GetProductData(product_id)

  -- deliver purchased items to player
  local items = item_data:GetItemsData()
  if items and items.gold then
    local player_id = 1
    DCEI.AddGold(player_id, items.gold)
  end
end

-- initialize IAP data
shop.InitializeIAP({
  on_purchase_attempt_callback = AttemptAnyItemPurchase,
  on_purchase_success_callback = OnAnyItemPurchase,
  product_list = product_list,
  currency_list = currency_list
})

-- creates a new shop UI
ui.shop = shop.NewShopUI({ parent = ui.root })

-- initializes a shop with a "Gold" section and gold items
local shop_data = {
  {
    name = "gold",
    display_name = "Gold",
    rows = {
      {
        "com.wildsky.example.iap.gold01",
        "com.wildsky.example.iap.gold02",
      }
    }
  }
}

ui.shop:Initialize(shop_data)

-- show the shop after it's been initialized
ui.shop:Show()
```

#### <i>table</i> `iap_data` Parameters
- <i>function</i> `on_purchase_attempt_callback` this function is called when an item purchase button is pressed, with the item's `product_id` as the first argument. See [Purchase Attempt Function](#purchase-attempt-function) for more details.
- <i>function</i> `on_purchase_success_callback` this function is called when `DCEI.PurchaseIapProduct(product_id)` succeeds, with the item's `product_id` as the first argument. See [Purchase Success Function](#purchase-success-function) for more details.
- <i>table</i> `product_list` the list of IAP in [`item_data`](#item-data) format.
- (optional) <i>table</i> `currency_list` the list of [currencies](#currencies) used in the shop.
- (optional) <i>bool</i> `is_game_localized` if set, uses localized text for all built-in text values of the shop instead of the hardcoded english text (ex: [DHM formatting](#formattimedhm-number-seconds-)). Set this to true if your game is using localization.

### OnAnyItemPurchase( <i>string</i> product_id )
Use this function instead of the `on_purchase_success_callback` defined in [InitializeIAP()](#initializeiap-table-iap_data-) when you need to directly call your item purchase function, such as when simulating successful purchase in editor play mode or when successfully purchasing items that cost in-game currency or watching ads.

This function will update the item's layout and stock data before calling the locally defined `on_purchase_success_callback`.

### InitializeServer( <i>table</i> server_data )
Initializes server time tracking from the given data. This is useful for creating items that refresh stock on a daily basis or rotate depending on the day of the week. In server data you can define a callback that occurs whenever server time is fetched or a new day occurs, along with some additional debugging options.

A new server day occurs at 6AM PST. Note that the editor uses your local OS time as it's not connected to the game server.

Once initalized, the shop will attempt to fetch server time whenever any of the following occurs:
  1. When [ui.shop:Initialize()](#uishopinitialize-table-shop_data-) is called
  2. When a new server day occurs (at 6AM PST)
  3. The next time the shop is opened IF the previous fetch failed
  
You can manually call a shop fetch server attempt with [AttemptGetServerTime()](#attemptgetservertime).

#### <i>table</i> `server_data` Parameters
- <i>function</i> `on_server_time_update_callback` this function is called whenever server time is successfully fetched, regardless of whether a new day has occurred. This is where you want to add "daily deal" items to the shop, though take care to not add duplicate items.
- <i>function</i> `on_new_server_day_callback` this function is called when a new server day is detected. This typically occurs when the shop is initialized during the player's first session of the day but can also occur at 6AM PST. This where you want to advance any "daily deal" index and [reset the stock limit](#clearitempurchasedata-string-product_id-) of items that refresh on a daily basis.
- (optional) <i>table</i> `options`
  - (optional) <i>number</i> `update_delay` this debug option will add a delay on shop fetch server time calls to simulate network latency.
  - (optional) <i>bool</i> `update_fails` this debug option will cause all shop fetch server time calls to fail.
  - (optional) <i>bool</i> `use_os_time` this debug option will cause shop fetch server time calls to use local OS time. This is only useful for publishing to arcade, where server time currently fails.

#### Example Usage
```lua
function OnShopFetchNewDay()
  -- reset daily ads chest
  local product_id = "com.wildsky.test.shop.chest01"
  local layout = shop.GetItemLayout(product_id)

  shop.ClearItemPurchaseData(product_id)
  layout:Update()

  ui.shop.sections["chests"].timer_display:Reset()
end

-- initialize server data
shop.InitializeServer({
  on_new_server_day_callback = OnShopFetchNewDay 
})
```

### AttemptGetServerTime()
Manually attempts to fetch server time for shop server time tracking using the data given in [InitializeServer()](#initializeserver-table-server-data-). If successful this will call the `on_server_time_update_callback`. If successful and a new day has occurred since the last server time check, this will call the `on_new_server_day_callback`.

### NewShopUI( <i>transform</i> parent, <i>table</i> options )
Initializes and returns the shop UI [`layout`](#layout-methods). If no parent frame is specified by `options.parent`, the shop will be created in [ui.root](Trigger-API-Reference-DCEI-Functions-Custom-UI#transform-getuirootframe). By default, whether a shop is **landscape** or **portrait** is automatically determined by the resolution of the game window.

The shop UI must be initialized before any [shop methods](#shop-methods) can be used.

#### Parameters
- (optional) *table* `options`
  - (optional) *tranform* `parent` sets the parent frame for the shop UI.
  - (optional) *bool* `is_landscape` if true, the shop will be created using **landscape** mode regardless of game resolution. If false, the shop will be created using **portrait** mode regardless of game resolution.

### NewPopupUI( <i>table</i> options )
Initializes and returns the popup UI [`layout`](#layout-methods). If no parent frame is specified by `options.parent`, the shop will be created in [ui.root](Trigger-API-Reference-DCEI-Functions-Custom-UI#transform-getuirootframe).

The popup UI must be initialized before any [popup methods](#popup-methods) can be used.

#### Parameters
- (optional) *table* `options`
  - (optional) *tranform* `parent` sets the parent frame for the popup UI.
  - (optional) *string* `display_name` if set, this display name will be used on the popup's banner label.

### NewItemInfoUI( <i>table</i> options )
Creates and returns a new item info UI [`layout`](#layout-methods). This is the UI that displays when an item's [info button](#optional-table-info) is pressed. One is created automatically when the shop is created, but this function can be used to overwrite the existing item info UI under a new parent.

#### Parameters
- (optional) *table* `options`
  - (optional) *tranform* `parent` sets the parent frame for the item info UI.

#### ui.shop.info_popup:OnReset()
The Item Info UI has a builtin OnReset() method that gets called when the item info layout is updated with its item data. You can overwrite this function for your own purposes, which is useful for reseting any additional UI added to this UI in its [`update_func`](#optional-table-info).


### GetProductData( <i>string</i> product_id )
Returns an `item_data` table from its `product_id`.


### GetProductPriceUSD( <i>string</i> product_id )
Returns an item's USD price from its `product_id`.


### GetProductPriceLocalized( <i>string</i> product_id )
Returns an item's localized price from its `product_id`, if available.

Note that this will only work for published mobile game builds, as it relies on mobile IAP configurations. This will always return `nil` in editor play mode.

### GetProductCustomPriceData( <i>string</i> product_id )
Returns an item's [price table](#table-price) from its `product_id` if the price table contains `type` and `amount` values (thus indicating it uses a custom currency).

### GetItemLayout( <i>string</i> product_id )
Returns the item's [layout](#layout-methods) from its `product_id` if the item exists in the [Shop UI](#newshopui-transform-parent-table-options-).

### GetItemLayoutFromPopup( <i>string</i> product_id )
Returns the item's [layout](#layout-methods) from its `product_id` if the item exists in the [Popup UI](#newpopupui-table-options-).

### GetItemStockAvailable( <i>string</i> product_id )
Returns the number of stock available for an item from its `product_id`. Stock available is equal to number of times the player has purchased this item subtracted from its [`stock_limit`](#optional-number-stock_limit). Stock available can be reset to its stock limit using [ClearItemPurchaseData()](#clearitempurchasedata-string-product_id-).

Returns `-1` if the item doesn't have a stock limit.

### ClearItemPurchaseData( <i>string</i> product_id )
Resets the purchase count of an item from its `product_id`. Purchase count is only tracked for items that have a [`stock_limit`](#optional-number-stock_limit).

### GetTimedOfferData( <i>string</i> product_id )
Returns a table of an item's timed offer data from its `product_id`. If the item was added to the shop with an [`expires_at` or `expires_in` option](#uishopadditemstosection-string-section_name-table-items_list-table-options-), the returned table will have a key for `expires_at` with a timestamp of when the item expires.

### TimedOfferStillValid( <i>string</i> product_id )
Returns `true` if the item specified by the `product_id` has timed offer data and has not expired yet. 

Returns `true` if no timed offer data exists for the item.

### ClearItemTimerData( <i>string</i> product_id )
Removes the item specified by the `product_id`'s timer data, preventing such items from [expiring](#uishopadditemstosection-string-section_name-table-items_list-table-options-).

### FormatTimeHM( <i>number</i> seconds )
Returns a formatted string in hours and minutes from the given duration in seconds.

#### Example Usage
```lua
local duration = 4500
local display_time = shop.FormatTimeHM(duration)

local label = DCEI.CreateTextFrame(DCEI.GetUiRootFrame())
DCEI.SetTextFrameText(label, display_time)
-- displays time as 1H 15M
```

### FormatTimeDHM( <i>number</i> seconds )
Returns a formatted string in days, hours, and minutes from the given duration in seconds.

#### Example Usage
```lua
local duration = 240000
local display_time = shop.FormatTimeDHM(duration)

local label = DCEI.CreateTextFrame(DCEI.GetUiRootFrame())
DCEI.SetTextFrameText(label, display_time)
-- displays time as 2D 18H 40M
```

## Purchase Attempt Function
This function is automatically called to initiate an item purchase when a product is selected in the shop UI using either IAP or custom currency.

For IAP items, this function should call `DCEI.PurchaseIapProduct(product_id)`. Note that `DCEI.PurchaseIapProduct()` will not succeed in the editor so you may want to provide code path for testing (such as in the example below).

For custom currency items, this function should check if the player can afford the item and should subtract the currency amount and call [shop.OnAnyItemPurchase()](#onanyitempurchase-string-product_id-) function on success. Be sure to call the mod's [shop.OnAnyItemPurchase()](#onanyitempurchase-string-product_id-) function and not the locally declared [OnAnyItemPurchase()](#purchase-success-function).

#### Example
```lua
function AttemptAnyItemPurchase( product_id )

  DCEI.LogMessage("> Attempt Purchase " .. tostring(product_id))
    
  local custom_price_data = shop.GetProductCustomPriceData( product_id )
  if custom_price_data then
      
    -- check conditions for items with custom currency cost
    if custom_price_data.type == "gems" then

      -- for currency gems
      local cost = custom_price_data.amount
      if Player:GetGems() >= cost then
        -- if player can afford purchase, subtract cost and deliver items
        Player:AddGems( -1 * cost )
        shop.OnAnyItemPurchase(product_id)
      else
        -- display feedback for not enough gems
        local text = "Not Enough Gems!"
        DCEI.ShowFeedbackMessage("<color=red>" ..  text)
      end
    end
  
  else

    -- otherwise attempt standard IAP flow
    if DCEI.Platform == "WindowsPlayer" then
      -- simulate successful purchase when using editor
      shop.OnAnyItemPurchase(product_id)
    else
      -- otherwise continue standard IAP flow
      DCEI.PurchaseIapProduct(product_id)
    end
  end

end
```

## Purchase Success Function
This function is automatically called via [shop.OnAnyItemPurchase()](#onanyitempurchase-string-product_id-) when `DCEI.PurchaseIapProduct()` succeeds. This function should be used to deliver items for IAP or custom currency purchases.

This function is also a good place to log item purchases. 

#### Example
```lua
function OnAnyItemPurchase( product_id )

  DCEI.LogMessage("> Successful Purchase " .. tostring(product_id))

  local item_data = shop.GetProductData( product_id )
    
  -- deliver purchased items to player
  local items = item_data.items
  if items then

    -- deliver gold
    if items.gold then
      Player:AddGold( items.gold )
    end

    -- deliver gems
    if items.gems then
      Player:AddGems( items.gems )
    end

    -- deliver hero shards
    local shards = GetProductShards( items )
    if shards then

      for _, shard in pairs(shards) do
        Player:AddShards( shard.name, shard.count )
      end
    end

    -- roll gacha results and deliver hero shards
    local gacha = GetProductGacha( items )
    if gacha then

      local rolled_shards = ConvertGachaToShards( gacha )
      local shards = GetProductShards( rolled_shards )

      for _, shard in pairs(shards) do
          Player:AddShards( shard.name, shard.count )
      end
    end
  end

  -- log item purchase
  local event_name = "Buy Item"
  local props = {product_id = product_id}

  local price_data = item_data.price
  for k, v in pairs(price_data) do
    props[k] = v
  end

  DCEI.Event.Log(name, props)
end
```

## Item Data
Item data defines each IAP (and custom currency purchase) and allows for customization of the item layout in the shop UI. Item data has 5 required properties.

```lua
local item_data = {
  product_id = "com.wildsky.example.iap.gold01",
  label = "Handful of Gold",
  display = "shop_gold_lv2",
  price = { usd = 2.99 },
  items = { gold = 1000 }
}
```

### Properties

#### <i>string</i> `product_id`
The product ID of the item. For IAP this **must** match the item's product ID in the product configuration (such as on [Google Play Console](https://play.google.com/console/u/0/developers) or [App Store Connect](https://appstoreconnect.apple.com/)). 

The product_id can also be used to reference the `item_data` or item layout through the various [Mod Functions](#mod-functions).

#### <i>table</i> or <i>string</i> `label` 
Determines the label displayed at the top of the item layout (such as "Starter Pack" or "💎 500"). Using a string here will set the `name` property.

- (optional) <i>string</i> `name` used to directly set the text of the display label. Cannot be used with `item_type`.
- (optional) <i>string</i> `color` used to set the color of the display label. Note that this accepts a color tag value such as `"<color=yellow>"` or `"<color=#42cdff>"`.
- (optional) <i>string</i> `icon` used to display an icon to the left of the display label.
- (optional) <i>string</i> `item_type` used to display a value from `items` as the display label, using `item_type` as the `items` key. Cannot be used with `name`.
- (optional) <i>bool</i> `format_with_commas` used in conjunction with `item_type` to format a number with commas (eg, `12345` will display as `12,345`).

##### Example
```c
{
  product_id = "com.wildsky.example.shop.gold02",
  label = {
    icon = DCEI.Texture("icon_coin00"),
    item_type = "gold",
    color = "<color=yellow>",
    format_with_commas = true
  },
  display = "shop_gold_lv4",
  items = {
    gold = 10000
  },
  price = {
    type = "gems",
    amount = 500
  }
}
```

![item_label](https://user-images.githubusercontent.com/56179276/92803440-48b41380-f36c-11ea-9049-0549ff8fab94.png)


#### <i>table</i> or <i>string</i> `display`
Determines the image display of the item layout. Using a string here will set the `image` property.

- <i>string</i> `image` sets the displayed image of the item layout. Cannot be used with `use_item_bundle`.
- (optional) <i>number</i> `scale` used to adjust the size of the displayed image as a percent (eg `scale = 2` is 200%).
- (optional) <i>table</i> `offset` used to adjust the offset of the displayed image (eg `offset = {x = 0, y = 10}` moves the image up by 10).
- (optional) <i>bool</i> `use_item_bundle` when set, generates a bundle display using the listed `items`. Only items registered as [currency_list](#currency_list) will be displayed.
- (optional) <i>bool</i> `use_stock_display` when set, enables the layout's `StockFrame` if it has one and attempts to update the `StockFrame.StockLabel` with the remaining stock.
- (optional) <i>bool</i> `format_with_commas` used in conjunction with `use_item_bundle` to format bundle item values with commas (eg, `12345` will display as `12,345`).
- (optional) <i>bool</i> `disable_rtl_support` when set, disables RTL language support for the layout's `TitleLabel`. This is useful for displaying formatted numeric text (ex: `"1,234k"`) correctly in RTL languages (such as Arabic).

##### Example
```c
{
  product_id = "com.wildsky.test.iap.bundle.starter02",
  label = "Founder's Pack",
  display = {
    use_item_bundle = true,
    format_with_commas = true
  },
  items = {
    gold = 20000,
    hero_shards_windknight = 8,
    hero_shards_icemage = 8
  },
  price = {
    usd = 9.99
  }
}
```

![item bundle](https://user-images.githubusercontent.com/56179276/92803258-1a363880-f36c-11ea-8e9e-3f17cbd0342f.png)


#### <i>table</i> `price`
Determines if the item is purchased as an IAP or with custom currency.

The `usd` price must be set for IAP using the corresponding value in the product configuration (such as on [Google Play Console](https://play.google.com/console/u/0/developers) or [App Store Connect](https://appstoreconnect.apple.com/)). If the product configuration is correct, regional pricing will be displayed. The `usd` price must still be set for proper revenue logging.

When using custom currency_list, you will have to configure how these are checked in your [purchase attempt function](#purchase-attempt-function).

Note that a product's price data must be retrieved at runtime with [item_data:GetPriceData](#item-data-getpricedata-) and *cannot* be retrieved with `item_data.price`. This is enforced as anti-cheat method as static data is vulnerable to memory hacking on mobile builds.

- <i>number</i> `usd` used to mark items as IAP with revenue logging. Cannot be used with `type` and `amount`.
- <i>string</i> `type` used to set the custom currency type used to purchase the item using a [registered currency](#currencies). Cannot be used with `usd`.
- <i>number</i> `amount` used in conjunction with `type` to set the cost of custom currency purchases. Cannot be used with `usd`.


#### <i>table</i> `items`
The list of items (such as gold, gems, chests, etc) delivered to the player on purchase. These items can be used to construct bundle displays by using a [registered currency](#currencies) and the [display.use_item_bundle](#table-or-string-display) option.

You will have to configure how these items are handled in your [purchase success function](#purchase-success-function).

Note that a product's items data must be retrieved at runtime with [item_data:GetItemsData](#item-data-getitemsdata-) and *cannot* be retrieved with `item_data.items`. This is enforced as anti-cheat method as static data is vulnerable to memory hacking on mobile builds.

#### (optional) <i>table</i> `info`
If set, attempts to hookup and show an item's `InfoPip` and `InfoButton` frame. When the `InfoButton` frame is selected, the shop's [item info frame](#newiteminfoui-table-options-) will be shown.

- <i>string</i> `label` text to be displayed in the item info frame.
- (optional) <i>function</i> `update_func` this function will be run using the item info frame layout as `self` when the info frame is shown for an item.

##### Example
```lua
local product_list = {
  product_id = "com.wildsky.test.shop.chest01",
  label = {
    name = "Rare Chest",
    color = "<color=#00ffff>",
  },
  display = {
    image = DCEI.Texture("hero_chest_t1"),
    scale = 1.1,
    offset = { y = 4 }
  },
  items = {
    hero_shards_gacha_rare = 8,
  },
  price = {
    type = "gems",
    amount = 250,
  },
  info = {
    update_func = CustomizeStoreItemInfo_Chest,
    label = "Contains 8 [[Rare]] hero shards." 
      .. "\n\n" .. "Drop Rates:"
      .. "\n" .. "[50%] - [[Wind Knight]]"
      .. "\n" .. "[50%] - [[Ice Mage]]"
  },
}

function CustomizeStoreItemInfo_Chest( self )

  -- format text colors
  local text = self.item_data.info.label
  text = text:gsub("%[%[", COLORS.rare)
  text = text:gsub("%]%]", "</color>")
  text = text:gsub("%[", COLORS.yellow)
  text = text:gsub("%]", "</color>")

  DCEI.SetTextFrameText(self.InfoLabel, text)
end
```

![info_a](https://user-images.githubusercontent.com/56179276/108004090-a39c0780-6fa9-11eb-84c5-d8c89bb2aff9.png) > ![info_b](https://user-images.githubusercontent.com/56179276/108004691-5e78d500-6fab-11eb-99ae-b4aa2e2c6c42.png)


#### (optional) <i>number</i> `stock_limit`
Used to indicate an item has limited stock. Can be used in conjunction with the `display.use_stock_display` parameter to show the remaining stock for items using the standard layouts.

Note that items are *not* automatically removed or disabled when they have 0 stock remaining. You can customize this behavior yourself by checking the item's [available stock](#getitemstockavailable-string-product_id-) in its [custom update function](#newiteminfoui-table-options-).

#### (optional) <i>table</i> `custom`
Used to customize an item layout. You may find it useful to define your IAP list with a function, rather than a variable declaration when using `layout_func` to avoid having to juggle declaration ordering.

It's suggested to put any of your own custom item properties (such as subtitles or additional callback functionality) here for organizational purposes.

- (optional) <i>string</i> `layout` if set, this XML layout will be used rather than the default `../Shop/Section/Item/..` XML for the item's layout. Use this to customize the look of shop items.
- (optional) <i>function</i> `layout_func` this function will be run using the item layout as `self` when the item is created.
- (optional) <i>function</i> `update_func` this function will be run using the item layout as `self` when the item is created or updated (such as on purchase).
- (optional) <i>function</i> `remove_func` this function will be run using the item layout as `self` when the item is removed.
- (optional) <i>function</i> `onshow_func` this function will be run using the item layout as `self` when the shop is opened. This is useful for updating products that scale with game progress.


### Methods
These methods can be called with a product's item_data.

##### Example
```lua
local product_id = "com.wildsky.test.shop.chest01"
local item_data = shop.GetProductData(product_id)

-- gets the product's price data
local price_data = item_data:GetPriceData()
```

#### item_data:GetPriceData()
Gets a product's [price data](#table-price). This must be retrieved as a function rather than directly as `item_data.price` as an anti-cheat measure as static data is vulnerable to memory hacking in mobile builds.

#### item_data:GetItemsData()
Gets a product's [items data](#table-items). This must be retrieved as a function rather than directly as `item_data.items` as an anti-cheat measure as static data is vulnerable to memory hacking in mobile builds.

#### item_data:SetPriceData( <i>table</i> price_data )
Sets a product's [price data](#table-price) in case you want to dynamically change the price of an item during gameplay. This may be useful for items that are free or an ads reward once per day and then use a normal IAP or in-game currency price.
#### item_data:SetItemsData( <i>table</i> items_data )
Sets a product's [items data](#table-items) in case you want to dynamically change the items contained in a product during gameplay. This may be useful for bundles with rotating item availability without needing to create multiple unique product ids.


## Currencies
The currency table is used to associate a currency with an icon for shop display purposes.

### Parameters
- *string* `name` the name of the registered currency to be referenced elsewhere.
- *string* `icon` the icon to use for this currency (used in custom currency prices and bundle displays).
- (optional) *string* `bundle_layout` if set, this XML layout will be used for this currency in bundle displays instead of the default `Shared/Shop/Section/Item/BundleItem` XML.
- (optional) *string* `bundle_image` if set, this image will be used for this currency in bundle displays instead of the `icon` (which will still be used for price displays)
- (optional) *string* `bundle_label_format` used to customize currency formatting in bundle displays. The `"{[x]}"` key will be replaced with the currency value (see example below).
- (optional) *string* `bundle_label_format_single` used to customize currency formatting in bundle displays if the currency value is `1`. The `"{[x]}"` key will be replaced with the currency value (see example below).
- (optional) *number* `priority` if set, these items will be ordered from high `priority` to low in bundle displays, otherwise they will be ordered by the alphabet of the `name`. The item with `priority` nil will be counted as lowest priority vs an item with `priority` parameter.

### Example
```lua
local CURRENCY_LIST = {
  {
    name = "gold",
    icon = "icon_item_coin",
    priority = 10
  },
  {
    name = "gems",
    icon = "icon_item_gem",
    priority = 9
  },
  {
    name = "hero_shards_windknight",
    icon = "shard_hero_wind_knight",
    bundle_label_format = "{[x]} shards",
    bundle_label_format_single = "{[x]} shard",
  },
  {
    name = "hero_shards_icemage",
    icon = "shard_hero_traveling_mage",
    bundle_label_format = "{[x]} shards",
    bundle_label_format_single = "{[x]} shard",
  },
  {
    name = "hero_shards_tinker",
    icon = "shard_hero_lava_chef",
    bundle_label_format = "{[x]} shards",
    bundle_label_format_single = "{[x]} shard",
  }
}
```

## Customizing Shop UI
Any piece of the shop UI can be customized by forking and overwriting the original layout XML in the UI Editor window. Individual items in the shop can be customized by using the custom `layout` [properties](#optional-table-custom).

![customize2](https://user-images.githubusercontent.com/56179276/108011725-8cb2e080-6fbc-11eb-976a-178e13b1f13c.png)

## Change Log

### 2.0.4 (released 3/9/21)
- added `layout_func` option to `section_data.custom` in [ui.shop:Initialize](#uishopinitialize-table-shop_data-)
- Fixed an issue where some items indices weren't updated properly on removal
- Fixed popups that wouldn't update correctly after the first time they're shown
- Fixed localized prices not being initialized correctly
- Fixed an issue that could re-arrange UI layers unexpectedly when NewItemInfoUI is created under a non-root parent
### 2.0.2 (released 2/18/21)
- Add item_data option for `custom.onshow_func` that runs an update function when the shop or popup is shown
- Add item_data option for `label.disable_rtl_support` that forces off RTL support for the item's title text
- Add currency_data option for `bundle_label_format` and `bundle_label_format_single` for customizing bundle display text
- Add `is_game_localized` argument to `iap_data` in shop.InitializeIAP() 
- Fix an issue that created additional "+" icons when using non-currency values in `item_data.items`

### 2.0.0 (released 2/15/21)
- Reworked shop data initialization and removed ui.shop:AddItem() and ui.shop:AddSection()
- Converted all built-in UI to XML for better customization options
- Add support for dynamically adding and removing shop items at runtime
- Add anti-cheat features that move item and price data out of static variables and into functions
- Add support for info popups for items to display more information
- Add support for limited time offer items, rotating stock, and timer displays
- Add support for limited stock items
- Add support for sales offer popups
- Add support for navigation bar in **portrait** mode shops

### 1.1.1 (released 9/29/20)
- Support displaying localized currency prices
- Added [GetProductPriceLocalized()](#getproductpricelocalized-string-product_id-) mod function

### 1.1.0 (released 9/16/20)
- Added landscape shop support

### 1.0.0 (released 9/10/20)
- IAP Shop Mod released