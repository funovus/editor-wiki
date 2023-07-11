Available by referencing the core triggers mod. For requests/suggestions, contact [@Coffee#8479](https://github.com/coffee8479).

> Example:
> ```lua
> local core = GameModules["Arcade/Core"]
> 
> core.DamageUnit(some_unit, 10)
> ```

### UI FUNCTIONS
```lua
void FadeOut(duration)

void FadeIn(duration)
```

### UNIT FUNCTIONS
```lua
bool UnitIsAlive(unit)

void UnitHoldPosition(unit)

void DamageUnit(unit, amount)

Float2 GetVectorFromUnitToPoint(unit, point)

void MakeUnitFacePoint(unit, point, duration)

void MakeUnitFaceUnitPoint(unit, target_unit, duration)
```

### POINT FUNCTIONS
```lua
Float2 PointWithPolarOffset(x, y, angle, distance)
```

### RANDOM FUNCTIONS
```lua
void SetRandomSeed(seed)

-- returns a random integer based on the random seed from SetRandomSeed()
int RandomInteger(min, max)

-- returns a random index from the table-rolled
-- never returns the same index twice in a row
int RandomTableIndex(roll_table)

-- returns a random non-repeating table value from the table-rolled
-- never returns the same index twice in a row
roll_table[index] RandomTableValue(roll_table)
```