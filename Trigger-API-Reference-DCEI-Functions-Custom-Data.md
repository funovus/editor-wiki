<div id="toc" markdown="1">
- [Trigger API Reference\DCEI Functions\Custom Data](#trigger-api-referencedcei-functionscustom-data)
  * [GetAllCustomData](#getallcustomdata-0)
  * [GetCustomDataByType](#getcustomdatabytype-1)
  * [GetDefaultCustomDataByType](#getdefaultcustomdatabytype-1)
  * [GetCustomDataByInstance](#getcustomdatabyinstance-2)

</div>

***

# [Trigger API Reference](Trigger-API-Reference)\\DCEI Functions\Custom Data {Trigger-API-ReferenceDCEI-FunctionsCustom-Data}

[](overview-start)

[](overview-end)

## object GetAllCustomData() {getallcustomdata-0}
```cs
object GetAllCustomData()
```
#### Description
[](description-start)
Returns a table of all the custom data.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local custom_data = DCEI.GetAllCustomData()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## object GetCustomDataByType(string typeName) {getcustomdatabytype-1}
```cs
object GetCustomDataByType(string typeName)
```
#### Description
[](description-start)
Returns a table of all the custom data of the given type.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `typeName` the name of the type.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local talents = DCEI.GetCustomDataByType("Talents")
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## object GetDefaultCustomDataByType(string typeName) {getdefaultcustomdatabytype-1}
```cs
object GetDefaultCustomDataByType(string typeName)
```
#### Description
[](description-start)
Returns a table of all the default custom data of the given type.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `typeName` the name of the type.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local talent_defaults = DCEI.GetDefaultCustomDataByType("Talents")
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## object GetCustomDataByInstance(string typeName, string instanceName) {getcustomdatabyinstance-2}
```cs
object GetCustomDataByInstance(string typeName, string instanceName)
```
#### Description
[](description-start)
Returns a table of all the custom data of the given type of a specific instance.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `typeName` the name of the type.
- *string* `instanceName` the name of the instance of an object.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local talent_fireball = DCEI.GetCustomDataByInstance("Talents", "Fireball")
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

