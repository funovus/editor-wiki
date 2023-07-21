<div id="toc" markdown="1">
- [Trigger API Reference\DCEI Functions\Save](#trigger-api-referencedcei-functionssave)
  * [Save.Set](#set-2)
  * [Save.Get](#get-1)
  * [Save.Commit](#commit-0)
  * [Save.SetMapEntry](#setmapentry-1)

</div>

***

# [Trigger API Reference](Trigger-API-Reference)\\DCEI Functions\Save {Trigger-API-ReferenceDCEI-FunctionsSave}

[](overview-start)

[](overview-end)

## void Save.Set(string key, object value) {set-2}
```cs
void Save.Set(string key, object value)
```
#### Description
[](description-start)
Sets the specified key-value pair in the save data. Save data must be committed with `DCEI.Save.Commit()` to actually save the data.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `key` the key of the pair.
- *object* `value` the value of the pair.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.Save.Set("key", "value")
DCEI.Save.Commit()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## object Save.Get(string key) {get-1}
```cs
object Save.Get(string key)
```
#### Description
[](description-start)
Returns the value associated with the given key.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `key` the key to return the value of.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.Save.Set("key", "value")
DCEI.Save.Commit()
local save_val = DCEI.Save.Get("key")
DCEI.LogMessage(save_val)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void Save.Commit() {commit-0}
```cs
void Save.Commit()
```
#### Description
[](description-start)
Writes the current save data to the user's save data. You can view the editor's local save data under [Play Settings](Data-Play-Settings).
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.Save.Set("key", "value")
DCEI.Save.Commit()
local save_val = DCEI.Save.Get("key")
DCEI.LogMessage(save_val)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void Save.SetMapEntry(string entry) {setmapentry-1}
```cs
void Save.SetMapEntry(string entry)
```
#### Description
[](description-start)
Sets the map entry in save data. Only works in mobile or web builds. Useful if your game has a series of maps to progress through instead of always loading the same entry map. 
[](description-end)

#### Parameters
[](parameters-start)
- *string* `entry` the map entry name.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.Save.SetMapEntry("Map Entry")
DCEI.Save.Commit()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

