<div id="toc" markdown="1">
- [Trigger API Reference\DCEI Functions\Debug](#trigger-api-referencedcei-functionsdebug)
  * [DebugPause](#debugpause-0)

</div>

***

# [Trigger API Reference](Trigger-API-Reference)\\DCEI Functions\Debug {Trigger-API-ReferenceDCEI-FunctionsDebug}

[](overview-start)

[](overview-end)

## void DebugPause() {debugpause-0}
```cs
void DebugPause()
```
#### Description
[](description-start)
Triggers a game pause. Useful when you need to debug the game state at a certain point. 
[](description-end)

#### Example Usage
[](example-usage-start)
In this example, we use an Effect Hook to pause the game as soon as an effect launches. 

```lua
DCEI.TriggerAddEffectHookEvent(
    DCEI.Effect("Standard RangedUnit Weapon Launch"),
    function(context)
        DCEI.DebugPause()
    end
)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

