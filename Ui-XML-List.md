<div id="toc" markdown="1">
- [Ui XML Reference\List](#ui-xml-referencelist)
  * [itemName](#itemname)
  * [itemSize](#itemsize)
  * [itemCount](#itemcount)

</div>

***

# [Ui XML Reference](Ui-XML)\\List {ui-xml-referenceList}

[](overview-start)

**This frame cannot have child frame.**

A virtualized list in HScroll or VScroll. Virtual lists greatly improve the performance of long lists by only creating UI elements when the user scrolls. Elements outside of the scroll view won't be created or updated, saving on performance. See [Virtual Lists.](https://funovus.notion.site/Using-Virtual-Lists-5e200de95f584e728b7019c1b271c8f2)



## **Example Map**: 
https://platform.wildsky.dev/arcade/game/471  
(Click "Source" to download)

## **Relevant XML Attributes:**

[](overview-end)

A virtualized list in HScroll or VScroll

**This frame cannot have child frame.**

## [](List.itemName)itemName {itemName}
**Value type: `string`**

[](manual-wiki-start)

The XML definition used for generating new items. 

[](manual-wiki-end)

## [](List.itemSize)itemSize {itemSize}
**Value type: `number`**

[](manual-wiki-start)



[](manual-wiki-end)

## [](List.itemCount)itemCount {itemCount}
**Value type: `number`**

[](manual-wiki-start)

## **Relevant Lua APIs:**
+ [DCEI.CreateListFrame](Trigger-API-Reference-DCEI-Functions-Custom-UI#createlistframe-1)
+ [DCEI.SetListFrameItemName](Trigger-API-Reference-DCEI-Functions-Custom-UI#setlistframeitemname-2)
+ [DCEI.SetListFrameItemSize](Trigger-API-Reference-DCEI-Functions-Custom-UI#setlistframeitemsize-2)
+ [DCEI.SetListFrameItemDataCallback](Trigger-API-Reference-DCEI-Functions-Custom-UI#setlistframeitemdatacallback-2)
+ [DCEI.SetListFrameItemCount](Trigger-API-Reference-DCEI-Functions-Custom-UI#setlistframeitemcount-2)
+ [DCEI.RefreshListFrameItems](Trigger-API-Reference-DCEI-Functions-Custom-UI#refreshlistframeitems-3)

## **XML Usage:**
```xml
    <VStack bind:active="state.mode == 1" matchParentHeight="true" matchParentWidth="true">
        <VScroll matchParentHeight="true" width="500" backgroundImageColor="r: 0.8, g: 1, b: 1, a: 1">
            <ScrollContent spacing="8" padding="16">
                <Text text="Virtual List Begin" />
                <List id="virtual_list" itemName="MyItem" itemSize="50" itemCount="100" />
                <Text text="Virtual List End" />
            </ScrollContent>
        </VScroll>
    </VStack>
```
## **Lua usage:**
```lua
  local container = DCEI.CreateFrameFromXml(DCEI.GetUiRootFrame(), "TestList")
  local virtual_list = DCEI.GetChildFrameById(container, "virtual_list")
  local virtual_list_text = DCEI.GetChildFrameById(container, "virtual_list_text")
  local virtual_list_load_more = DCEI.GetChildFrameById(container, "virtual_list_load_more")
  local virtual_list_load_even_more = DCEI.GetChildFrameById(container, "virtual_list_load_even_more")
  local refresh_button = DCEI.GetChildFrameById(container, "refresh")

  local function ShowItemAnimated(item)
      DCEI.AnimateFrameScale(item, {x = 0, y = 0, z = 0}, {x = 1, y = 1, z = 1}, 1, "OutExpo")
  end

  -- Virtual list requires a separate data storage.
  local virtual_items = {}
  DCEI.SetListFrameItemCount(virtual_list, #virtual_items)
  local refresh_count = 0
  -- Tell the virtual list how to create new items as well as how to bind the data to each item.
  DCEI.SetListFrameItemDataCallback(virtual_list, function(item, index)
      local text = DCEI.GetChildFrameById(item, "text")
      if refresh_count == 0 then
          DCEI.SetTextFrameText(text, "row " .. virtual_items[index].value .. " = {target.Health.Current}")
      else
          DCEI.SetTextFrameText(text, "r(" .. refresh_count .. ") " .. virtual_items[index].value .. " = {target.Health.Current}")
      end
      ShowItemAnimated(item)
  end)

  local function VirtualListLoadMore(count)
      -- Instead of creating items directly, we update the underlying data structure.
      for i = 1, count do
          table.insert(virtual_items, {value = #virtual_items + 1})
      end
      -- Tell the virtual list we have more items and the list to manage item creation if needed.
      DCEI.SetListFrameItemCount(virtual_list, #virtual_items)
      DCEI.SetTextFrameText(virtual_list_text, "total: " .. #virtual_items)
  end

  DCEI.SetOnClickCallback(virtual_list_load_more, function()
      VirtualListLoadMore(100)
  end)

  DCEI.SetOnClickCallback(virtual_list_load_even_more, function()
      VirtualListLoadMore(1000)
  end)

  DCEI.SetOnClickCallback(refresh_button, function()
      refresh_count = refresh_count + 1
      DCEI.RefreshListFrameItems(virtual_list, 1, #virtual_items)
  end)
```

## **Result:**
![virtual_list](https://user-images.githubusercontent.com/56179268/200616231-4daae851-1806-46f5-88d5-f2f01445e9ac.gif)

[](manual-wiki-end)

