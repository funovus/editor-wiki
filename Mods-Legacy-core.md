
***
# [Trigger API Reference](Trigger-API-Reference)\\Core Functions

These functions are available from the built-in `core` registry dependency and are implemented in Lua. These functions provide utility and shortcuts rather than strictly providing any new functionality.

For an explanation of what registry dependencies are and what other officially supported first-party mods there are, see [Registry Mods](Mods-About).

# WARNING: This mod is deprecated. See [Core](Mods-Core-Overview) instead.


#### Example Usage
```lua
local core = require("core")

core.DamageUnit(some_unit, 10)
```


## Color
### HexToRGBA()
```lua
HexToRGBA( hex )
```

Returns a `table` array of RGBA values (0 - 255) from a hexadecimal string. If no alpha value is supplied, the returned color will have full opacity.

#### Example Usage
```lua
local hex_color = "#f17aed"

local magenta = core.HexToRGBA(hex_color)
-- magenta = {241, 122, 237, 255}

DCEI.SetFrameImage(DCEI.GetUiRootFrame(), magenta[1]/255, magenta[2]/255, magenta[3]/255, magenta[4]/255)
```

### HexToValues()
```lua
HexToValues( hex )
```

Returns a `table` array of RGBA values (0 - 1) from a hexadecimal string. If no alpha value is supplied, the returned color will have full opacity.

#### Example Usage
```lua
local hex_color = "#f17aed"

local magenta = core.HexToValues(hex_color)

DCEI.SetFrameImage(DCEI.GetUiRootFrame(), magenta[1], magenta[2], magenta[3], magenta[4])
```

### RGBAToHex()
```lua
RGBAToHex( rgba )
```
Returns a hexadecimal color value as a `string` from a `table` array of RGBA values. If no alpha value is supplied, the returned color will have full opacity.

#### Example Usage
```lua
local rgba = {241, 122, 237}

local magenta = core.RGBAToHex(rgba)
local tag = "<color=" .. magenta .. ">"
-- magenta = "#f17aed"

local text = tag .. "Magenta"
local label = DCEI.CreateTextFrame(DCEI.GetUiRootFrame())
DCEI.SetTextFrameText(label, text)
```

### RGBAToValues()
```lua
RGBAToValues( rgba )
```
Returns a `table` array of RGBA percentage values (0 - 1) from a hexadecimal string. If no alpha value is supplied, the returned color will have full opacity.

#### Example Usage
```lua
local rgba = {0, 0, 0, 160}

local faded_black = core.RGBAToValues(rgba)
-- faded_black = {0, 0, 0, 0.63}

DCEI.SetFrameImageColor(DCEI.GetUiRootFrame(), {r = faded_black[1], g = faded_black[2], b = faded_black[3], a = faded_black[4]})
```


## Effect
### CreateEffect()
```lua
CreateEffect( effect_name, x, y )
```

Creates an [effect](Data-Effect) at a location. The effect will be executed as if by a neutral caster unit.

#### Example Usage
```lua
local effect = DCEI.Effect("DebugPoint")
core.CreateEffect(effect, 16, 16)
```


## Game
### MapStartTime()
```lua
MapStartTime()
```

Returns the map start time as a unix timestamp `number` (in seconds.)

#### Example Usage
```lua
local date_time = os.date("%c", core.MapStartTime())
DCEI.LogMessage("Map started at " .. date_time)
-- see: https://www.lua.org/pil/22.1.html for more on date/time
```

### MapTime()
```lua
MapTime()
```

Returns the time elapsed since the map started in seconds.

#### Example Usage
```lua
local t = core.MapTime()
DCEI.LogMessage("Map has been played for " .. t .. " seconds)
```

### GetGameSpeed()
```lua
GetGameSpeed()
```
Returns the current game speed (as set by [SetGameSpeed()](#setgamespeed)/[ClearGameSpeed()](#cleargamespeed)).


#### Example Usage
```lua
DCEI.LogMessage("Game Speed is " .. core.GetGameSpeed())
```

### SetGameSpeed()
```lua
SetGameSpeed( speed )
```

Sets the game speed. Game speed is clamped between `0` and `3`. 

This function uses a combination of [DCEI.SetUpdateFrequency()](Trigger-API-Reference-DCEI-Functions-Game#void-setupdatefrequencyfloat-value) and [DCEI.SetSpeedFactor()](Trigger-API-Reference-DCEI-Functions-Game#void-setspeedfactorfloat-value) to achieve the specified speed in one handy function.

#### Example Usage
```lua
local game_speed = core.GetGameSpeed()

local button = DCEI.CreateButtonFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(button, 128, 128)

local label = DCEI.CreateTextFrame(button)
DCEI.SetTextFrameText(label, game_speed)

local function CycleGameSpeed()
    -- cycles the game speed between 1, 2, and 3
    game_speed = core.Cycle(game_speed, 1, 1, 3)
    core.SetGameSpeed(game_speed)

    DCEI.SetTextFrameText(label, game_speed)
end

DCEI.SetOnClickCallback(button, CycleGameSpeed)
```

### ClearGameSpeed()
```lua
ClearGameSpeed()
```
Resets the current game speed to `1` by clearing the game's update frequency and speed factor.

#### Example Usage
```lua
core.ClearGameSpeed()
```


## Input
### HookupJoystick()
```lua
HookupJoystick( unit )
```

Hooks up a joystick to a unit and hides the joystick offscreen. This function is intended to quickly test unit movement and provides no customization options. To create your own joystick movement system, see the [Joystick Events](Trigger-API-Reference-DCEI-Events-Input#void-triggeraddjoystickeventtypedcallback-trigger).

#### Example Usage
```lua
local unit_type = DCEI.Unit("Standard MeleeUnit")
local unit = DCEI.CreateUnit(1, 1, unit_type, 16, 16)

core.HookupJoystick(unit)
```


## Math
### atan2()
```lua
atan2( y, x )
```
Returns the arc tangent of x and y as a `number` in radians.

#### Example Usage
```lua
local v = core.VectorBetweenPoints(p1, p2)
local angle_between_points = core.atan2(v.y, v.x)
```

### Clamp()
```lua
Clamp( n, min, max )
```

Clamps a number between the `min` and `max` values.

#### Example Usage
```lua
local values = {-10, 7, 23}
for index, value in ipairs(values) do
    values[index] = core.Clamp(value, 1, 10)
end
-- values = {1, 7, 10}
```

### Cycle()
```lua
Cycle( value, increment, min, max )
```
Increments a value while keeping it in the given range. If the value would be greater than the `max` value, it is reset to the `min` instead.

#### Example Usage
```lua
local game_speed = core.GetGameSpeed()

local button = DCEI.CreateButtonFrame(DCEI.GetUiRootFrame())
DCEI.SetFrameSize(button, 128, 128)

local label = DCEI.CreateTextFrame(button)
DCEI.SetTextFrameText(label, game_speed)

local function CycleGameSpeed()
    -- cycles the game speed between 1, 2, and 3
    game_speed = core.Cycle(game_speed, 1, 1, 3)
    core.SetGameSpeed(game_speed)

    DCEI.SetTextFrameText(label, game_speed)
end

DCEI.SetOnClickCallback(button, CycleGameSpeed)
```

### IsInt()
```lua
IsInt(n)
```

Returns `true` if a number is an integer.

#### Example Usage
```lua
IsInt(23)
-- true

IsInt(23.4)
-- false
```

### Lerp()
```lua
Lerp( start, finish, fraction )
```

Linearly interpolates between `start` and `finish` number values using the specified `fraction` (0 - 1).

#### Example Usage
```lua
local start = 1
local finish = 255

core.Lerp(start, finish, 0.5)
-- returns midpoint value of 128

core.Lerp(start, finish, 0.75)
-- returns 75% interpolation of 191.5
```

### Round()
```lua
Round( n, decimals )
```

Rounds a floating point value to the number of `decimals` specified. If no `decimals` value is given, the number will be rounded to the nearest whole number.

#### Example Usage
```lua
core.Round(1/3)
-- returns 0.0

core.Round(2/3)
-- returns 1.0

local decimals = 2
core.Round(2/3, decimals)
-- returns 0.67
```

## Point
### AngleBetweenPoints()
```lua
AngleBetweenPoints( p1, p2 )
```

Returns the angle between two points in degrees. The result will be between `-180` and `180` as follows:
```    
        90
        |
 180____|____ 0
-180    |
        |
       -90
```
#### Example Usage
```lua
local map_center_point = {x = 16, y = 16}
local unit_type = DCEI.Unit("Standard MeleeUnit")
local unit = DCEI.CreateUnit(1, 1, unit_type, 12, 12)

local pos = DCEI.GetUnitPosition2D(unit)
-- pos = {x = 12, y = 12}

local angle = core.AngleBetweenPoints(pos, map_center_point)
-- 45 degrees between spawned unit position and map center
```

### AngleToVector()
```lua
AngleToVector( angle )
```

Returns an xy vector from an angle (in degrees).

#### Example Usage
```lua
local v = core.AngleToVector(45)
-- v is {x = 0.7, y = 0.7}

DCEI.TurnUnitTowardsWithDuration(unit, v.x, v.y, 1)
```

### ArcDistanceBetweenAngles()
```lua
ArcDistanceBetweenAngles( angle1, angle2 )
```

Returns the angle between two angles. This value will be between `0` and `180`.

#### Example Usage
```lua
function GetNearestFacingEnemy( unit, enemies )
    local unit_pos = DCEI.GetUnitPosition2D(unit)
    local unit_angle = core.GetUnitFacingAngle(unit)
    local nearest_angle = 180
    local nearest_enemy

    for _, enemy in pairs(enemies) do
        local enemy_pos = DCEI.GetUnitPosition2D(enemy)
        local enemy_angle = core.AngleBetweenPoints(unit_pos, enemy_pos)

        -- gets the angle between the unit-facing angle and the unit-to-enemy angle
        local angle = core.ArcDistanceBetweenAngles( unit_angle, enemy_angle )

        if angle < nearest_angle then
            nearest_enemy = enemy           
            nearest_angle = angle
        end
    end
    
    return nearest_enemy
end
```

### DistanceBetweenPoints()
```lua
DistanceBetweenPoints( p1, p2 )
```

Returns the distance between two points.

#### Example Usage
```lua
local map_center_point = {x = 16, y = 16}
local unit_type = DCEI.Unit("Standard MeleeUnit")
local unit = DCEI.CreateUnit(1, 1, unit_type, 12, 12)

local pos = DCEI.GetUnitPosition2D(unit)
-- pos = {x = 12, y = 12}

local distance = core.DistanceBetweenPoints(pos, map_center_point)
-- distance = 5.65
```

### InterpolatedPoint()
```lua
InterpolatedPoint( p1, p2, fraction )
```

Returns a point along the line between two points, determined by the given fraction (0 - 1).

#### Example Usage
```lua
local map_center_point = {x = 16, y = 16}
local unit_type = DCEI.Unit("Standard MeleeUnit")
local unit = DCEI.CreateUnit(1, 1, unit_type, 12, 12)

local pos = DCEI.GetUnitPosition2D(unit)
-- pos = {x = 12, y = 12}

local p1 = core.InterpolatedPoint(pos, map_center_point, 0)
-- p1 = {x = 12, y = 12}, the same as pos

local p2 = core.InterpolatedPoint(pos, map_center_point, 1)
-- p2 = {x = 16, y = 16}, the same as map_center_point

local p3 = core.InterpolatedPoint(pos, map_center_point, 0.5)
-- p3 = {x = 14, y = 14}, the midpoint between the two
```

### PointFromXY()
```lua
PointFromXY( x, y )
```

Returns a point from `x` and `y` coordinates.

#### Example Usage
```lua
local map_center_point = core.PointFromXY(16, 16)
-- map_center_point = {x = 16, y = 16}
```

### PointWithPolarOffset()
```lua
PointWithPolarOffset( x, y, angle, distance )
```

Returns a point offset by a `distance` towards an `angle` (in degrees).

#### Example Usage
```lua
local pos = DCEI.GetUnitPosition2D(unit)
local facing = core.GetUnitFacingAngle(unit)

local distance = 4
local forward_point = core.PointWithPolarOffset( pos.x, pos.y, facing, angle)

-- teleports a unit forward a distance of 4
DCEI.SetUnitPosition2D(unit, forward_point.x, forward_point.y)
```

### VectorBetweenPoints()
```lua
VectorBetweenPoints( p1, p2 )
```

Returns an xy vector between two points.

#### Example Usage
```lua
local v = core.VectorBetweenPoints(p1, p2)
local angle_between_points = core.atan2(v.y, v.x)
```


## Random
### Random()
```lua
Random( min, max )
```

Returns a seed-based random float. The random number generator seed can be set with [SetRandomSeed()](#setrandomseed).

#### Example Usage
```lua
local random_number = core.Random(1, 100)
DCEI.LogMessage(random_number)
-- based on the default seed, this will always be 27.037
```

### RandomInteger()
```lua
RandomInteger( min, max )
```

Returns a seed-based random integer. The random number generator seed can be set with [SetRandomSeed()](#setrandomseed).


#### Example Usage
```lua
for n = 1, 5 do
    local d20 = core.RandomInteger(1, 20)
    DCEI.LogMessage(d20)
end

-- based on the default seed, the first five rolls will always be:
-- 5, 20, 14, 1, 4
```

### SetRandomSeed()
```lua
SetRandomSeed( seed )
```

Sets the seed for the random number generator. Use a static number (such as "wave number" or "level number") to generate the same random sequence (such as enemy spawn formation within a wave). Use a dynamic number (such as the time stamp given by `os.time()`) to generate new random numbers each time.

#### Example Usage
```lua
core.SetRandomSeed(1357056)

for n = 1, 5 do
    local d20 = core.RandomInteger(1, 20)
    DCEI.LogMessage(d20)
end
-- using this seed, the first five rolls will always be:
-- 1, 2, 3, 4, 5
```


## String
#### FormatNumberDecimalPlaces()
```lua
FormatNumberDecimalPlaces( amount, decimals, round )
```

Returns a number as a `string` to the specified number of decimal places. Has an optional `round` parameter to round the number to the given decimal place.

#### Example Usage
```lua
local display = core.FormatNumberDecimalPlaces(0.989, 4)
-- display = "0.9890"

local round = true
local display = core.FormatNumberDecimalPlaces(0.989, 2, round)
-- display = "0.99"
```

#### FormatNumberToRomanNumeral()
```lua
FormatNumberToRomanNumeral( number)
```

Returns a `string` as the roman numeral representation of a number.

#### Example Usage
```lua
local display = core.FormatNumberToRomanNumeral(114)
-- display = "CXIV"
```

### FormatNumberWithCommas()
```lua
FormatNumberWithCommas( amount )
```

Returns a number as a `string` formatted with commas.

#### Example Usage
```lua
local amount = 1234567
local display = core.FormatNumberWithCommas(amount)
-- display = "1,234,567"

local label = DCEI.CreateTextFrame(DCEI.GetUiRootFrame())
DCEI.SetTextFrameText(label, display)
```

#### FormatIntegerDigits()
```lua
FormatIntegerDigits( amount, digits )
```

Returns a number as a `string` with the minimum `digits` specified.

#### Example Usage
```lua
local display = core.FormatIntegerDigits(3, 2)
-- display = "03"
```

### FormatTimeHours()
```lua
FormatTimeHours( time_in_seconds, decimals )
```

Returns a `string` formatted as `"HH:MM:SS"`. Has an optional `decimals` parameter to display milliseconds.

#### Example Usage
```lua
local time_in_seconds = 7384.559
local display = core.FormatTimeHours(time_in_seconds, 2)
-- display = "02:03:04.56"

local label = DCEI.CreateTextFrame(DCEI.GetUiRootFrame())
DCEI.SetTextFrameText(label, display)
```

### FormatTimeMinutes()
```lua
FormatTimeMinutes( time_in_seconds, decimals )
```

Returns a `string` formatted as `"MM:SS`. Has an optional `decimals` parameter to display milliseconds.

#### Example Usage
```lua
local time_in_seconds = 7384
local display = core.FormatTimeMinutes(time_in_seconds, 2)
-- display = "123:04.00"

local label = DCEI.CreateTextFrame  (DCEI.GetUiRootFrame())
DCEI.SetTextFrameText(label, display)
```

### StripChars()
```lua
StripChars( str, chars)
```

Returns a `string` with the specified `chars` removed.

#### Example Usage
```lua
local display = core.StripChars("strip that string", "aeiou")
-- display = "strp tht strng"
```



## Terrain
### GetRandomPointInMap()
```lua
GetRandomPointInMap( args )
```

Returns a random point within the map bounds. Has table `args` with `padding` option (default `2`) to shrink the random point area.

#### Example Usage
```lua
-- if the map has dimensions of 32 x 32 the point will be generated between (4, 4) and (27, 27)
-- note that for a map of 32 x 32 the playable dimensions will span (0, 0) to (31, 31)
local options = { padding = 2 }
local pos = core.GetRandomPointInMap(options)

local unit_type = DCEI.Unit("Standard MeleeUnit")
DCEI.CreateUnit(1, 1, unit_type, pos.x, pos.y)
```


## Timers

Timers are useful for implementing various time-related gameplay functionality and using many timers is more performant than many [DCEI Timer Events](Trigger-API-Reference-DCEI-Events-Timer).

Creating a new timer by itself won't do anything, but they can be used in conjunction with the common [timer methods](#timer-methods) to accomplish things such as tracking how much time it takes for players to clear a level or to refresh a shop item in 20 minutes.

There are three types of timers, each using the same [methods](#timer-methods). Each type of timer tracks time differently:

* [GameTimers](#gametimernew) advance using game time with respect to [game speed](#setgamespeed) (ex: if game speed is set to 2x, a game timer will advance twice as fast).
* [RealTimers](#realtimernew) advance using "real time" and are not affected by [game speed](#setgamespeed).
* [OsTimers](#ostimernew) advance using os.time() and are also unaffected by [game speed](#setgamespeed). Unlike [RealTimers](#realtimernew), [OsTimers](#ostimernew) will track the passage of time if the game is running in the background (possible in mobile builds), which makes them more suitable for classic mobile game timer systems.

### Timer Update
[Game Timers](#gametimernew) and [Real Timers](#realtimernew) update every `0.0625` seconds. You can change the global time update frequency with [SetGlobalTimerTickRate](#setglobaltimertickrate). The update frequency for [OsTimers](#ostimernew) is once per second and cannot be changed.

On each timer update, the timer will check its [Condition](#timercondition)—if `true` the timer will run its [Action](#timeraction) and then [Destroy](#timerdestroy) itself, if `false` the timer will run its [Tick](#timertick) function instead. By default, a timer's [Condition](#timercondition), [Action](#timeraction), and [Tick](#timertick) functions are all blank, but can be overwritten to provide additional functionality.

```lua
if timer:Condition() then
    timer:Action()
    timer:Destroy()
else
    timer:Tick()
end
```


### GameTimer:New()
```lua
GameTimer:New( args )
```
Creates and returns a new Game timer from the given arguments. Unlike [Real](#realtimernew) and [Os](#ostimernew) timers, Game timers are affected by [game speed](#setgamespeed). By default, Game timers update every 0.0625 seconds (this can be overriden with [SetGlobalTimerTickRate](#setglobaltimertickrate)).

#### Parameters
* (optional) *table* `args` arguments for constructing the timer.
  * (optional) *float* `duration` sets the duration of the timer using the [SetDuration](#timersetduration) method. A timer with no duration will tick indefinitely.
  * (optional) *function* `action` sets the function that will be called when the timer expires by overwriting the [Action](#timeraction) method.
  * (optional) *function* `tick` sets the function that will be called when the timer updates by overwriting the [Tick](#timertick) method.
  * (optional) *function* `condition` sets the function that will be evaluated to determine if the timer has expired when the timer updates by overwriting the [Condition](#timercondition) method.

#### Example Usage
```lua
-- creates a timer that expires in 2 seconds and displays a log message when it expires
local timer_a = core.GameTimer:New()
timer_a.name = "Timer A"
timer_a:AddDuration(2)

function timer_a:Action()
    DCEI.LogMessage("[" .. self.name .. "] has expired")
end

-- timer_b does the same thing as timer_a, but written in the timer constructor
function OnTimerExpire(self)
    DCEI.LogMessage("[" .. self.name .. "] has expired")
end

local timer_b = core.GameTimer:New({ duration = 2, action = OnTimerExpire })
timer_b.name = "Timer B"
```


### RealTimer:New()
```lua
RealTimer:New( args )
```

Creates and returns a new Real timer from the given arguments. Similar to [Os](#ostimernew) timers, Real timers are not affected by [game speed](#setgamespeed). By default, Real timers update every 0.0625 seconds (this can be overridden with [SetGlobalTimerTickRate](#setglobaltimertickrate)).

#### Parameters
* (optional) *table* `args` arguments for constructing the timer.
  * (optional) *float* `duration` sets the duration of the timer using the [SetDuration](#timersetduration) method. A timer with no duration will tick indefinitely.
  * (optional) *function* `action` sets the function that will be called when the timer expires by overwriting the [Action](#timeraction) method.
  * (optional) *function* `tick` sets the function that will be called when the timer updates by overwriting the [Tick](#timertick) method.
  * (optional) *function* `condition` sets the function that will be evaluated to determine if the timer has expired when the timer updates by overwriting the [Condition](#timercondition) method.

#### Example Usage
```lua
-- creates an indefinite timer that logs time elapsed each tick
local real_timer = core.RealTimer:New()

function real_timer:Tick()
    local decimals = 2
    local time_elapsed = self:GetTimeElapsed()
    local formatted_time = core.FormatTimeMinutes(time_elapsed, decimals)
    DCEI.LogMessage("Time Elapsed: " .. formatted_time)
end
```

### OsTimer:New()
```lua
OsTimer:New( args )
```

Creates and returns a new Os timer from the given arguments. Similar to [Real](#realtimernew) timers, Os timers are not affected by [game speed](#setgamespeed). Os timers update every 1.0 seconds, using the precision of `os.time()`.

If the game is running in the background (ie, on mobile devices), Os timers will update when the game is moved to the foreground and update based on the time that passed. If a timer would have expired while the game was running in the background, it will instead expire on the first frame after the game is resumed. This makes Os timers suitable for classic mobile game timers.

Note that since Os timers rely on the device's system clock, they can be manipulated by changing the device's system clock.

#### Parameters
* (optional) *table* `args` arguments for constructing the timer.
  * (optional) *float* `duration` sets the duration of the timer using the [SetDuration](#timersetduration) method. A timer with no duration will tick indefinitely.
  * (optional) *function* `action` sets the function that will be called when the timer expires by overwriting the [Action](#timeraction) method.
  * (optional) *function* `tick` sets the function that will be called when the timer updates by overwriting the [Tick](#timertick) method.
  * (optional) *function* `condition` sets the function that will be evaluated to determine if the timer has expired when the timer updates by overwriting the [Condition](#timercondition) method.

#### Example Usage
```lua
-- creates a timer that expires after 60 seconds and displays a message when it expires
local os_timer = core.OsTimer:New({ duration = 60 })

function os_timer:Action()
    DCEI.LogMessage("Os Timer Expired")
end
```

### SetGlobalTimerTickRate()
```lua
SetGlobalTimerTickRate( value )
```

Used to set the global tick rate of [Game](#gametimernew) and [Real](#realtimernew) timers (default is `0.0625` seconds). The global tick rate must be set *before* any timers are created to take effect. It may be useful to lower the global tick rate (in increments of 1/16 seconds) to improve performance, particularly if you're using complex timer conditions.

#### Example Usage
```lua
core.SetGlobalTimerTickRate(0.25)

local real_timer = core.RealTimer:New()

function real_timer:Tick()
    local decimals = 2
    local time_elapsed = self:GetTimeElapsed()
    local formatted_time = core.FormatTimeMinutes(time_elapsed, decimals)
    DCEI.LogMessage("Time Elapsed: " .. formatted_time)
end
```


## Timer Methods

### Timer:AddDuration()
```lua
Timer:AddDuration( duration )
```
Adds time (in seconds) to the timer's duration and sets the timer's [Condition](#timercondition) to expire when the timer's [time remaining](#timergettimeremaining) reaches 0. When the timer expires it will run its [Action](#timeraction) and then be [Destroyed](#timerdestroy).

#### Example Usage
```lua
local timer = core.GameTimer:New()
timer:AddDuration(2)
```

### Timer:SetDuration()
```lua
Timer:SetDuration( duration )
```
Sets the timer's duration (in seconds) and sets the timer's [Condition](#timercondition) to expire when the timer's [time remaining](#timergettimeremaining) reaches 0. When the timer expires it will run its [Action](#timeraction) and then be [Destroyed](#timerdestroy).

#### Example Usage
```lua
local timer = core.GameTimer:New()
timer:AddDuration(2)
```

### Timer:Destroy()
```lua
Timer:Destroy()
```
Destroys a timer and stops it from updating.

#### Example Usage
```lua
local timer = core.RealTimer:New()

function timer:Tick()
    local decimals = 2
    local time_elapsed = self:GetTimeElapsed()
    local formatted_time = core.FormatTimeMinutes(time_elapsed, decimals)
    DCEI.LogMessage("Time Elapsed: " .. formatted_time)
end

DCEI.TriggerAddTimerEventElapsed(
    function()
        timer:Destroy()
    end, 
    2, true
)
```

### Timer:GetTimeElapsed()
```lua
Timer:GetTimeElapsed()
```

Returns how long the timer has been active (in seconds).

#### Example Usage
```lua
local timer = core.RealTimer:New()

function timer:Tick()
    local decimals = 2
    local time_elapsed = self:GetTimeElapsed()
    local formatted_time = core.FormatTimeMinutes(time_elapsed, decimals)
    DCEI.LogMessage("Time Elapsed: " .. formatted_time)
end
```

### Timer:GetTimeRemaining()
```lua
Timer:GetTimeRemaining()
```

Returns how long until the timer expires (in seconds). If no duration has been sit, this will return `nil`.

#### Example Usage
```lua
local timer = core.RealTimer:New({ duration = 3 })

function timer:Tick()
    local decimals = 2
    local time_remaining = self:GetTimeRemaining()
    local formatted_time = core.FormatTimeMinutes(time_remaining, decimals)
    DCEI.LogMessage("Time Remaining: " .. formatted_time)
end
```

### Timer:SetPaused()
```lua
Timer:SetPaused( flag )
```

Pauses a timer if flag is `true` or unpauses a timer if flag is `false`. Paused timers don't [update](#timer-update) or expire.

#### Example Usage
```lua
-- this timer will ultimately expire after 4 seconds, since we pause it for 1 second
local timer = core.RealTimer:New({ duration = 3 })

function timer:Tick()
    local decimals = 2
    local time_elapsed = self:GetTimeElapsed()
    local formatted_time = core.FormatTimeMinutes(time_elapsed, decimals)
    DCEI.LogMessage("Time Elapsed: " .. formatted_time)
end


DCEI.TriggerAddTimerEventElapsed(
    function()
        timer:SetPaused(true)
    end, 
    2, true
)

DCEI.TriggerAddTimerEventElapsed(
    function()
        timer:SetPaused(false)
    end, 
    3, true
)
```

### Timer:Condition()
```lua
Timer:Condition()
```
This function is evaluated each timer [update](#timer-update) to determine if the timer should expire. By default this function is blank, but can be overwritten to provide additional functionality. 

Adding a [duration](#timeraddduration) to a timer will overwrite the condition to return `true` when the time remaining becomes 0. 

Since timer conditions can be checked many times per second, it's best practice for performance if they are simple comparisons.

#### Example Usage
```lua
local hero = DCEI.CreateUnit(1, 1, DCEI.Unit("Standard MeleeUnit"), 16, 16)

local timer = core.RealTimer:New()

function timer:Condition()
    return not DCEI.UnitIsAlive(hero)
end

function timer:Action()
    local time_elapsed = self:GetTimeElapsed()
    DCEI.LogMessage("Hero survived for " .. time_elapsed .. " seconds")
end

local random_duration = core.Random(2, 5)
DCEI.TriggerAddTimerEventElapsed(
    function()
        DCEI.KillUnit(hero)
    end, 
    random_duration, true
)
```

### Timer:Action()
```lua
Timer:Action()
```

This function is called if the timer's [Condition](#timercondition) evaluates as `true` when the timer [updates](#timer-update). By default this function is blank, but can be overwritten to provide additional functionality.

#### Example Usage
```lua
local hero = DCEI.CreateUnit(1, 1, DCEI.Unit("Standard MeleeUnit"), 16, 16)

local timer = core.RealTimer:New()

function timer:Condition()
    return not DCEI.UnitIsAlive(hero)
end

function timer:Action()
    local time_elapsed = self:GetTimeElapsed()
    DCEI.LogMessage("Hero survived for " .. time_elapsed .. " seconds")
end

local random_duration = core.Random(2, 5)
DCEI.TriggerAddTimerEventElapsed(
    function()
        DCEI.KillUnit(hero)
    end, 
    random_duration, true
)
```

### Timer:Tick()
```lua
Timer:Tick()
```
This function is called if the timer's [Condition](#timercondition) evaluates as `false` when the timer [updates](#timer-update). By default this function is blank, but can be overwritten to provide additional functionality.

Since timer ticks can run many times per second, it's best practice for perfromance if they are simple actions.

#### Example Usage
```lua
local timer = core.RealTimer:New({ duration = 3 })

function timer:Tick()
    local decimals = 2
    local time_remaining = self:GetTimeRemaining()
    local formatted_time = core.FormatTimeMinutes(time_remaining, decimals)
    DCEI.LogMessage("Time Remaining: " .. formatted_time)
end
```

## UI
### FadeIn()
```lua
FadeIn( duration, color )
```

Fades the screen in over the `duration` (in seconds). An optional `color` can be set for the fade (default black `{0, 0, 0, 1}`).

#### Example Usage
```lua
-- fade to white over 1 second
local white = {1, 1, 1}
core.FadeOut(1, white)

-- pause for an additional second after fading out
DCEI.Wait(2)

-- fade in from white over 1 second
core.FadeIn(1, white)
```

### FadeOut()
```lua
FadeOut( duration, color )
```

Fades the screen out over the `duration` (in seconds). An optional `color` can be set for the fade (default black `{0, 0, 0, 1}`).

#### Example Usage
```lua
local white = {1, 1, 1}
core.FadeOut(1, white)
DCEI.Wait(2)
core.FadeIn(1, white)
```

### HideDefaultUi()
```lua
HideDefaultUi()
```

Hides the default gold display, wave display, and speed up buttons used in Wild Sky TD.

#### Example Usage
```lua
core.HideDefaultUi()
```

## Unit
### DamageUnit()
```lua
DamageUnit( unit, amount )
```

Deals damage to a unit (without a caster).

#### Example Usage
```lua
core.DamageUnit(unit, 5)
```

### GetUnitId()
```lua
GetUnitId( unit )
```

Returns a unique unit id as a `string`, which is useful for [data binding](Trigger-API-Reference-DCEI-Functions-Custom-UI#void-bindunitdatastring-name-unit-unit). The returned id will never change and never be associated with another unit.

#### Example Usage
```lua
local unit_type = DCEI.Unit("Standard MeleeUnit")
local unit = DCEI.CreateUnit(1, 1, unit_type, 16, 16)

-- returns an id such as "u4x1xxx4"
local id = core.GetUnitId(unit)
DCEI.BindUnitData(id, unit)
```

### GetUnitFacingAngle()
```lua
GetUnitFacingAngle( unit )
```
Returns the facing angle of the unit. The result will be between `-180` and `180` as follows:
```    
        90
        |
 180____|____ 0
-180    |
        |
       -90
```

#### Example Usage
```lua
local pos = DCEI.GetUnitPosition2D(unit)
local facing = core.GetUnitFacingAngle(unit)

local distance = 4
local forward_point = core.PointWithPolarOffset( pos.x, pos.y, facing, angle)

-- teleports a unit forward a distance of 4
DCEI.SetUnitPosition2D(unit, forward_point.x, forward_point.y)
```

### MakeUnitFaceAngle()
```lua
MakeUnitFaceAngle( unit, angle, duration )
```

Sets a unit's rotation to the specified `angle` (in degrees) over the `duration`. A `duration` of 0 will turn the unit instantly.

#### Example Usage
```lua
-- makes the unit instantly turn 90 degrees clockwise
local facing = core.GetUnitFacingAngle(unit)

facing = facing - 90
core.MakeUnitFaceAngle(unit, facing, 0)
```

### MakeUnitFacePoint()
```lua
MakeUnitFacePoint( unit, x, y, duration )
```
Sets a unit's rotation towards the specified point over the `duration`.  A `duration` of 0 will turn the unit instantly.

#### Example Usage
```lua
local pos = DCEI.GetUnitPosition2D(other_unit)

-- makes the unit face the other_unit over 0.5 seconds
core.MakeUnitFacePoint(unit, pos.x, pos.y, 0.5)
```


### SetBehaviorCount()
```lua
SetBehaviorCount( unit, behavior, count )
```

Sets the stack count of a [behavior](Data-Behavior) on the `unit`.

#### Example Usage
```lua
local behavior = DCEI.Behavior("Damage Taken None")
core.SetBehaviorCount(unit, behavior, 1)
```

### UnitHoldPosition()
```lua
UnitHoldPosition( unit )
```

Makes a unit with a movement order stop moving. Does not affect the targeting or firing of weapons and abilities.

#### Example Usage
```lua
core.UnitHoldPosition(unit)
```

### SendActorMessage()
```lua
SendActorMessage( unit, action, ... )
```

Sends an actor message to the specified unit. This function a variable number of arguments depending on the parameter of the actor message. Available actions and their parameters are listed in [supported actions](#supported-actions) below. Note that the parameters are listed **in order**.

See [actor actions](Data-ActorEvent#actions) for details of each actor action.

#### Supported Actions
- **create**
    - *string* `actor` the name of the actor to create.
- **destroy**
- **sendCustomEvent**
    - *string* `identifier` the custom event to send.
- **broadcastCustomEvent**
    - *string* `identifier` the custom event to broadcast.
- **setModelScale**
    - *number* `modelScale` determines the new size of the actor model.
    - (optional) *number* `duration` if set, applies the size over this duration.
- **setScaleMultiplier**
    - *table* `scale` a float3 representing the new size of the actor model for each axis (XYZ).
- **setVisibility**
    - *bool* `visibility` whether to show or hide the actor.
- **playAnimation**
    - *string* `clipId` the name of the animation to play.
- **playAnimationWithDuration**
    - *string* `clipId` the name of the animation to play.
    - *number* `duration` the length of the animation to play.
- **stopAnimation**
    - *string* `clipId` the name of the animation to stop.
- **pauseAnimation**
    - *string* `clipId` the name of the animation to pause.
- **resumeAnimation**
    - *string* `clipId` the name of the animation to resume.
- **setShadow**
    - *bool* `shadowDisplay` whether to show or hide the actor's shadow.
- **setTintColor**
    - *table* `color` a float3 representing the color to tint the unit.
- **setTeamColor**
    - *table* `color` a float4 representing the team color to apply. Only works with supported models
    - *table* `secondColor` a float4 representing the secondary team color to apply. Only works with supported models
    
#### Example Usage
```lua
-- tints the unit bright red and plays its attack animation over 2 seconds
core.SendActorMessage(unit, "setTintColor", {255, 0, 0})
core.SendActorMessage(unit, "playAnimationWithDuration", "attack", 2)
```


## Utility
These utility functions are mostly comprised of helper functions for table management. Consider brushing up on your [table knowledge](https://www.luafaq.org/gotchas.html#T6) before diving into these.

### AddToTableValue()
```lua
AddToTableValue( table_arg, key, amount )
```

Adds the `amount` to the table entry for the given `key`. Negative values are accepted. If the key doesn't exist, a new entry will be created with the `amount`.

#### Example Usage
```lua
local fruits = {
    bananas = 2,
    apples = 3
}

core.AddToTableValue(fruits, "bananas", 4)
-- fruits.bananas = 6
```

### AddToProtectedValue()
```lua
AddToProtectedValue( key, amount )
```

Adds the `amount` to the [protected value](Trigger-API-Reference-DCEI-Functions-General#float-getprotectedvaluestring-key) for the given `key`. Negative values are accepted. If the key doesn't exist, a new protected value will be created with the `amount` (though you will get a log error for attempting to read a non-existent key). Note that it is good practice to initialize protected value keys on map start.

#### Example Usage
```lua
local protected_keys = { gems = "gems", gold = "gold" }
for _, key in pairs(protected_keys) do
    DCEI.SetProtectedValue(key, 0)
end

core.AddToProtectedValue(protected_keys.gems, 10)
local gems = DCEI.GetProtectedValue(protected_keys.gems)
-- gems = 10
```

### Dump()
```lua
Dump( object )
```

Returns a `string` printout of an unpacked table (including all nested tables). Note that `nil` values won't be included. Useful for quickly debugging tables.

#### Example Usage
```lua
local mixed_table = {
    count = 42,
    yee = "haw",
    subtable = {
        negative = false,
        nix = nil,
        func = function() return 0 end
    }
}

local print = core.Dump(mixed_table)
DCEI.LogMessage(print)
-- logs: { ["count"] = 42,["subtable"] = { ["func"] = function: 0000018EF9B4AB70,["negative"] = false,} ,["yee"] = haw,} 
```

### DumpSimple()
```lua
DumpSimple( object )
```

Returns `string` printout of an unpacked table without unpacking nested tables. Note that `nil` values won't be included. Useful for quickly debugging tables.

#### Example Usage
```lua
local mixed_table = {
    count = 42,
    yee = "haw",
    subtable = {
        negative = false,
        nix = nil,
        func = function() return 0 end
    }
}

local print = core.DumpSimple(mixed_table)
DCEI.LogMessage(print)
-- logs: { ["count"] = 42,["subtable"] = table: 0000018EFC6C4190,["yee"] = haw,}
```

### LogDump()
```lua
LogDump( object )
```

Logs the result of [Dump](#dump) with [DCEI.LogMessage()](Trigger-API-Reference-DCEI-Functions-Log#void-logmessagestring-message).

#### Example Usage
```lua
local array = { 4, 8, 15, 16, 23, 42 }
core.LogDump(array)
-- logs: { [1] = 4,[2] = 8,[3] = 15,[4] = 16,[5] = 23,[6] = 42,} 
```

### LogDumpSimple()
```lua
LogDumpSimple( object )
```

Logs the result of [DumpSimple](#dumpsimple) with [DCEI.LogMessage()](Trigger-API-Reference-DCEI-Functions-Log#void-logmessagestring-message).

#### Example Usage
```lua
local array = { 4, 8, 15, 16, 23, 42, poorly_formatted_nested_table = { 1, 2, 3} }
core.LogDumpSimple(array)
-- logs: { [1] = 4,[2] = 8,[3] = 15,[4] = 16,[5] = 23,[6] = 42,["poorly_formatted_nested_table"] = table: 0000018EFCA12490,}

```

### ClearTable()
```lua
ClearTable( table_arg )
```

Removes all keys from the given table. This is useful for resetting table values while preserving table references.

#### Example Usage
```lua
local bar = {}
local baz = {}

for i = 1, 3 do
    table.insert(baz, i)
    table.insert(bar, i)
end

local foo = {
    bar = bar,
    baz = baz
}

DCEI.LogMessage(#foo.bar .. ", " .. #foo.baz)
-- logs: "3, 3"

bar = {}
core.ClearTable(baz)

for i = 1, 4 do
    table.insert(baz, i)
    table.insert(bar, i)
end

DCEI.LogMessage(#foo.bar .. ", " .. #foo.baz)
-- logs: "3, 4"
-- by re-initializing `bar` as a new table, we broke the refrence between `bar` and `foo.bar`
-- meanwhile ClearTable() allows us to delete a table's keys without breaking such references
```


### CombineTables()
```lua
CombineTables( table1, table2 )
```

Returns a new `table` as a combined list of the values of each input table. Note that this should be used with lists and not dictionaries.

#### Example Usage
```lua
local abc = { "a", "b", "c" }
local def = { "d", "e", "f" }

local abcdef = core.CombineTables(foo, bar)
-- abcdef = { "a", "b", "c", "d", "e", "f" }
```

### CopyAndShuffleTable()
```lua
CopyAndShuffleTable( table_arg )
```

Returns a new `table` with the shuffled values of the input table. Note that this should be used with lists and not dictionaries.

#### Example Usage
```lua
local deck = { "clubs", "diamonds", "hearts", "spades" }

local shuffled_deck = core.CopyAndShuffleTable(deck)
-- shuffled_deck = { "hearts", "spades", "diamonds", "clubs" }
```

### DeepCopyTable()
```lua
DeepCopyTable( table_arg )
```

Returns a new `table` as a copy of the input table, using copies of any nested tables from the original.

#### Example Usage
```lua
local original = {
  foo = { 1, 2, 3 }
}

local deep_copy = core.DeepCopyTable(original)
table.insert(deep_copy.foo, 4)

DCEI.LogMessage(#original.foo .. ", " .. #deep_copy.foo)
-- logs: "3, 4"
```

### ShallowCopyTable()
```lua
ShallowCopyTable( table_arg )
```

Returns a new `table` as a copy of the input table, using references to any nested tables from the original.

#### Example Usage
```lua
local original = {
  foo = { 1, 2, 3 }
}

local shallow_copy = core.ShallowCopyTable(original)
table.insert(shallow_copy.foo, 4)

DCEI.LogMessage(#original.foo .. ", " .. #shallow_copy.foo)
-- logs: "4, 4"
```

### GetAllKeys()
```lua
GetAllKeys( table_to_gather )
```
Returns a `table` as a list of keys from the input table.

#### Example Usage
```lua
local event_table = {
    event01 = "WaveStart",
    event02 = "WaveWin",
    event03 = "WaveLoss",
    event04 = "WaveRewards"
}

local keys = core.GetAllKeys(event_table)
-- keys = { "event01", "event02", "event03", "event04" }
-- note that the collapsed list may not be in the order of the original key-pair values
```

### GetAllValues()
```lua
GetAllValues( table_to_gather )
```
Returns a `table` as a list of values from the input table.

#### Example Usage
```lua
local event_table = {
    event01 = "WaveStart",
    event02 = "WaveWin",
    event03 = "WaveLoss",
    event04 = "WaveRewards"
}

local values = core.GetAllValues(event_table)
-- keys = { "WaveStart", "WaveWin", "WaveLoss", "WaveRewards" }
-- note that the collapsed list may not be in the order of the original key-pair values
```

### MergeTables()
```lua
MergeTables( table1, table2 )
```

Returns a new `table` of the combined key-pair values of each input table. Any overlapping keys will be overwritten by value of the second input table.

#### Example Usage
```lua
local hero_template = {
    strength = 8,
    agility = 8,
    intellect = 8,
    speed = 2,
}
local hero_data = {
    name = "Wind Knight",
    agility = 12,
    abilities = { "Wind Slash" }
}

local wind_knight = core.MergeTables(hero_template, hero_data)

-- wind_knight = {
--     name = "Wind Knight",
--     strength = 8,
--     agility = 12,
--     intellect = 8,
--     speed = 2,
--     abilities = { "Wind Slash" }
-- }
```

### TableContains()
```lua
TableContains( table_arg, value )
```
Returns `true` if the table contains the given value.

#### Example Usage
```lua
local equipment = { "sword", "shield", "helmet" }

local has_shield = core.TableContains(equipment, "shield")
-- returns true
```

### TableIsEmpty()
```lua
TableIsEmpty( table_arg )
```
Returns `true` if the table is empty

#### Example Usage
```lua
local empty_table = {}
local other_table = { false }

local is_empty = core.TableIsEmpty(empty_table)
-- returns true

local is_empty = core.TableIsEmpty(other_table)
-- returns false
```

### TableLength()
```lua
TableLength( table_arg )
```
Returns the number of values of a table.

#### Example Usage
```lua
local event_table = {
    event01 = "WaveStart",
    event02 = "WaveWin",
    event03 = "WaveLoss",
    event04 = "WaveRewards"
}

local length = core.TableLength(event_table)
-- length = 4
```

### RandomTableIndex()
```lua
RandomTableIndex( roll_table )
```
Returns a random index/key from the given (list/dictionary) table.


#### Example Usage
```lua
local deck = { "clubs", "diamonds", "hearts", "spades" }

local random_deck_index = core.RandomTableIndex(deck)
-- returns a random value between 1 and 4
```

### RandomTableIndexNoRepeat()
```lua
RandomTableIndexNoRepeat( roll_table )
```
Returns a random index/key from the given (list/dictionary) table. Will never return the same index twice in a row for tables with size greater than `1`.


#### Example Usage
```lua
local deck = { "clubs", "diamonds", "hearts", "spades" }

local random_deck_index = core.RandomTableIndexNoRepeat(deck)
-- returns a random value between 1 and 4
-- subsequent rolls will never repeat the same value twice in row
```

### RandomTableValue()
```lua
RandomTableValue( roll_table )
```
Returns a random value from the given table.


#### Example Usage
```lua
local deck = { "clubs", "diamonds", "hearts", "spades" }

local random_card_suit = core.RandomTableValue(deck)
-- returns a random card suit
```

### RandomTableValueNoRepeat()
```lua
RandomTableValueNoRepeat( roll_table )
```
Returns a random value from the given table. Will never return the same value index twice in a row for tables with size greater than `1`.


#### Example Usage
```lua
local deck = { "clubs", "diamonds", "hearts", "spades" }

local random_card_suit = core.RandomTableValueNoRepeat(deck)
-- returns a random card suit
-- subsequent rolls will never repeat the same value twice in row
```
