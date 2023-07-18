<div id="toc" markdown="1">
- [Trigger API Reference\DCEI Functions\Math](#trigger-api-referencedcei-functionsmath)
  * [Random](#random-2)
  * [CreateRandomGenerator](#createrandomgenerator-1)
  * [NextRandomInteger](#nextrandominteger-2)

</div>

***

# [Trigger API Reference](Trigger-API-Reference)\\DCEI Functions\Math {Trigger-API-ReferenceDCEI-FunctionsMath}

[](overview-start)

[](overview-end)

## float Random(float min, float max) {random-2}
```cs
float Random(float min, float max)
```
#### Description
[](description-start)
Returns a float between the min and max values. Use `math.random(min, max)` for integer values.
[](description-end)

#### Parameters
[](parameters-start)
- *float* `min` the minimum value for the new random float.
- *float* `max` the maximum value for the new random float.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
for _ = 1, 10, 1 do
    local random_float = DCEI.Random(1, 10)
    DCEI.LogMessage(random_float)
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## object CreateRandomGenerator(int seed) {createrandomgenerator-1}
```cs
object CreateRandomGenerator(int seed)
```
#### Description
[](description-start)
Returns a new random generator given a seed.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `seed` the new random seed.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local random_gen = DCEI.CreateRandomGenerator(12345)
local next_random = DCEI.NextRandomInteger(random_gen, 500)
DCEI.LogMessage(next_random)
next_random = DCEI.NextRandomInteger(random_gen, -500)
DCEI.LogMessage(next_random)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## int NextRandomInteger(object generator, int max) {nextrandominteger-2}
```cs
int NextRandomInteger(object generator, int max)
```
#### Description
[](description-start)
Returns the next random integer between 1 and the given `max` value, given a random generator.
[](description-end)

#### Parameters
[](parameters-start)
- *object* `generator` a random generator created by [CreateRandomGenerator](Trigger-API-Reference-DCEI-Functions-Math#createrandomgenerator-1).
- *int* `max` the bounds on the value that can be generated. This number can be negative.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local random_gen = DCEI.CreateRandomGenerator(12345)
local next_random = DCEI.NextRandomInteger(random_gen, 500)
DCEI.LogMessage(next_random)
next_random = DCEI.NextRandomInteger(random_gen, -500)
DCEI.LogMessage(next_random)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

