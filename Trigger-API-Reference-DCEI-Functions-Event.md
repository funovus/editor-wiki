<div id="toc" markdown="1">
- [Trigger API Reference\DCEI Functions\Event](#trigger-api-referencedcei-functionsevent)
  * [Event.Log](#log-2)
  * [Event.SetUserProperty](#setuserproperty-2)
  * [Event.SetGameState](#setgamestate-1)

</div>

***

# [Trigger API Reference](Trigger-API-Reference)\\DCEI Functions\Event {Trigger-API-ReferenceDCEI-FunctionsEvent}

[](overview-start)
Used for live game analytics.
Notes: there are some restrictions on event names, parameter names, and values:
- Event and parameter names must be between 2 and 40 characters,
- Event and parameter names must consist of alphanumeric characters, underscores (_), or spaces,
- Parameter value must be less than 100 characters.
[](overview-end)

## void Event.Log(string key, object table) {log-2}
```cs
void Event.Log(string key, object table)
```
#### Description
[](description-start)
Logs an event.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `key` the key for the event.
- *object* `table` a table with the event data.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local key = "Stats"
local table = {
  health = DCEI.GetHealth(unit),
  shield = DCEI.GetShield(unit),
  mana = DCEI.GetMana(unit)
}

DCEI.Event.Log(key, table)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void Event.SetUserProperty(string key, object value) {setuserproperty-2}
```cs
void Event.SetUserProperty(string key, object value)
```
#### Description
[](description-start)
Logs a user property.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `key` the key for the user property.
- *object* `value` the value for the user property.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local key = "level"
local value = 10

DCEI.Event.SetUserProperty(key, value)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void Event.SetGameState(string state) {setgamestate-1}
```cs
void Event.SetGameState(string state)
```
#### Description
[](description-start)
Sets the user's game state. Useful for doing things like tracking the amount of time users spend in a particular game mode or game state, to gather relevant data and make charts on Amplitude. 
[](description-end)

#### Parameters
[](parameters-start)
- *string* `state` the string to set the state to.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua

function Log.State:Set(name)
    local state_id = STATE[name]
    Core.Assert(state_id, "Invalid state name " .. tostring(name))
    DCEI.Event.SetGameState(state_id)

    -- DEBUG
    if Debug:IsPrintingEventState() then
        DCEI.LogWarning("> LOGGING STATE [" .. state_id .. "]")
    end
end

```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

