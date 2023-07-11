<div id="toc" markdown="1">
- [Trigger API Reference\DCEI Functions\Lighting](#trigger-api-referencedcei-functionslighting)
  * [SetCustomLightColor](#setcustomlightcolor-3)
  * [SetCustomLightIntensity](#setcustomlightintensity-3)
  * [SetCustomLightPosition](#setcustomlightposition-3)
  * [GetCustomLightColor](#getcustomlightcolor-1)

</div>

***

# [Trigger API Reference](Trigger-API-Reference)\\DCEI Functions\Lighting {Trigger-API-ReferenceDCEI-FunctionsLighting}

[](overview-start)

[](overview-end)

## void SetCustomLightColor(string name, ColorRGB color, float duration) {setcustomlightcolor-3}
```cs
void SetCustomLightColor(string name, ColorRGB color, float duration)
```
#### Description
[](description-start)
Change a custom light's color gradually over duration time.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `name` the name of the light.
- *[ColorRGB](Trigger-API-Reference-DCEI-Types#colorrgb)* `color` the RGB values for the line. Also accepts hex values such as `"#32a852"`
- *float* `duration` the duration of this change.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```Lua
DCEI.SetCustomLightColor("fire_light", {r = 0.5, g = 0.5, b = 0, a = 0.5}, 1)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetCustomLightIntensity(string name, float intensity, float duration) {setcustomlightintensity-3}
```cs
void SetCustomLightIntensity(string name, float intensity, float duration)
```
#### Description
[](description-start)
Change a custom light's intensity gradually over duration time.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `name` the name of the light.
- *float* `intensity` thew new intensity of the light.
- *float* `duration` the duration of this change.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```Lua
DCEI.SetCustomLightIntensity("fire_light", 8, 1)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetCustomLightPosition(string name, Float3 position, float duration) {setcustomlightposition-3}
```cs
void SetCustomLightPosition(string name, Float3 position, float duration)
```
#### Description
[](description-start)
Change a custom light's position gradually over duration time.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `name` the name of the light.
- *[Float3](Trigger-API-Reference-DCEI-Types#float3)* `position` the position of the light.
- *float* `duration` the duration of this change.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```Lua
DCEI.SetCustomLightPosition("fire_light", {x = 1, y = 1, z = 15}, 1)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## ColorRGB GetCustomLightColor(string name) {getcustomlightcolor-1}
```cs
ColorRGB GetCustomLightColor(string name)
```
#### Description
[](description-start)
Get the current RGB value of the light.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `name` the name of the light.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```Lua
DCEI.GetCustomLightColor("fire_light")
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

