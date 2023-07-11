# Bank

The Bank mod is a [registry dependency](https://wiki.funovus.com/master/Mods-About) that handles saving and loading player data between sessions.
First you define the data structure using `SetDefaultData`, then `Load` the saved data. Basic usage looks like:
```lua
local Bank = require("Bank")

-- SAVE DATA
local DEFAULT_SAVE_DATA = {
    currencies = {
        gold = 0,
        gems = 0,
        energy = -1,
    },
    stage_selected = "stage_1",
}

local SaveSystem = {}

function SaveSystem.Initialize()
    -- initialize default data
    Bank.SetDefaultData(DEFAULT_SAVE_DATA)
    Bank.Load()
end
```
Then, values can be set or retrieved with `CommitModifyValue`, `CommitSetValue` or `GetValue`:
```lua
local Bank = require("Bank")

local SaveSystem = {}

function SaveSystem.GetGoldCurrency()
    local bank_key = "currencies.gold"
    return Bank.GetValue(bank_key)
end

function SaveSystem.ModifyGoldCurrency(value)
    local bank_key = "currencies.gold"
    return Bank.CommitModifyValue(bank_key, value)
end

function SaveSystem.SetSelectedStage(value)
    local key = "stage_selected"
    return Bank.CommitSetValue(key, value)
end
```
The Bank system automatically saves when you modify values.

## CommitModifyValue


```lua
(method) Bank.CommitModifyValue(value: number)
```

Adds value to the current value and commits (saves) a value in saved player data using a string path based on the structure of your default data set with `Bank.SetDefaultData`. For an example:
```lua
local DEFAULT_SAVE_DATA = {
    currencies = {
        gold = 0,
        gems = 0,
        energy = -1,
    },
    meta = {
        next_energy_at = -1,
    },
}
Bank.SetDefaultData(DEFAULT_SAVE_DATA)
Bank.CommitModifyValue("meta.next_energy_at", 1) --Add one to the current value
Bank.CommitModifyValue("meta.next_energy_at", -2) --Subtract two from the current value
```

## CommitSetValue


```lua
(method) Bank.CommitSetValue(value: any)
```

Sets and commits (saves) a value in saved player data using a string path based on the structure of your default data set with `Bank.SetDefaultData`. For an example:
```lua
local DEFAULT_SAVE_DATA = {
    currencies = {
        gold = 0,
        gems = 0,
        energy = -1,
    },
    meta = {
        next_energy_at = -1,
    },
}
Bank.SetDefaultData(DEFAULT_SAVE_DATA)
Bank.CommitSetValue("meta.next_energy_at", 1)
```

## GetValue


```lua
(method) Bank.GetValue()
  -> any
```

Gets a value from saved player data using a string path based on the structure of your default data set with `Bank.SetDefaultData`. For an example:
```lua
local DEFAULT_SAVE_DATA = {
    currencies = {
        gold = 0,
        gems = 0,
        energy = -1,
    },
    meta = {
        next_energy_at = -1,
    },
}
Bank.SetDefaultData(DEFAULT_SAVE_DATA)
local value = Bank.GetValue("meta.next_energy_at") -- Will return -1
```

## Load


```lua
(method) Bank.Load()
```

Loads player save data from the Bank using the data structure provided by `Bank.SetDefaultData`, including loading default values if no value has been saved.

## OnLoad


```lua
(method) Bank.OnLoad()
```

Intentionally left blank so it can be overridden, this function will run after the Bank finishes loading when `Bank.Load()` is used.
Useful if you need to access saved player data immediately after loading. Ex, if you need to update save data structure between game versions.

## SetDefaultData


```lua
(method) Bank.SetDefaultData()
```

Takes a table to use as the default player save data. This is the data that will be used for a new user or when values are not found.
However, it also serves as a map/directory of your save data structure so that the Bank mod and anyone looking at your script can understand what data is being stored and where.
The structure of the table depends entirely on the type of data you need to save for your project; but here is an example:
```lua
local DEFAULT_SAVE_DATA = {
    currencies = {
        gold = 0,
        gems = 0,
        energy = -1,
    },
    meta = {
        next_energy_at = -1,
    },
    stage_selected = "stage_1"
}
Bank.SetDefaultData(DEFAULT_SAVE_DATA)
```

## debug_logging


```lua
boolean
```

Enables a Log Message in the player log every time the Bank data is saved.
