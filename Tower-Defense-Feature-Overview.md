The editor has a number of terrain, data, and trigger features developed specifically for creating tower defense type games.

Download the example map [here](https://github.com/dctopspin/Wild-Modding/files/3791728/Example_TowerDefense.zip).

* Terrain
  * [Roads](#Roads)
  * [WayPoints](#WayPoints)
* Wave Data
  * [Spawn Waves](#Spawn-Waves)
  * [Spawn Patterns](#Spawn-Patterns)
  * [Spawn Groups](#Spawn-Groups)
* Unit Data
  * [Unit AI Behaviors](#Unit-AI-Behaviors)


## Terrain

### Roads
The Road tab of the Terrain Window lets you create roads that you can be used to spawn waves of creeps. Here you can also customize the width and curvature of your roads on a per-node-basis.

![1 roads](https://user-images.githubusercontent.com/56179276/67903986-4537e500-fb2a-11e9-80f6-435564c1dff6.png)

### WayPoints
In the WayPoints tab you can create a path from a collection of road nodes to create Routes using the AddNodeToPath button.. You can also create route nodes *without roads* using the Additional Node button (useful if you want to create "hidden" roads or if you just don't want to use the default road structure in your game).

The DisableRally flag is useful for creating "hidden" lanes, and makes it so barracks-type units won't consider such lanes as valid rally positions.

![2 route](https://user-images.githubusercontent.com/56179276/67904041-6ac4ee80-fb2a-11e9-9b24-def231ddb892.png)



## Wave Data
### Spawn Waves
Spawn waves are used to spawn waves of units (shocking, right?). **Waves** are made up of **Lanes** which are made up of **Groups**. Each Lane has a Route as defined in the Waypoints tab of the Terrain Window. Each group needs either a Unit type, Count, and Pattern. Alternatively you can use Group Patterns instead of a unit type to create more complex wave patterns.

![3 spawn waves](https://user-images.githubusercontent.com/56179276/67908310-57b91b00-fb38-11e9-8ba3-4c33764196eb.png)

***

**Wave**
![3 wave](https://user-images.githubusercontent.com/56179276/67909065-2726b080-fb3b-11e9-9558-85cce9184170.png)
> **Total Gold:** The total gold that will be awarded to the player from defeating all the wave's creeps. Gold bounty is divided across the wave's creeps based on the creeps max health value. For example, if a wave awards 100 total gold and has CreepA with 50 health and CreepB with 100 health, then CreepA will drop 33.3 gold and CreepB will drop 66.6 gold.
>
> **Bonus Gold:** Bonus gold is awarded to the player for calling a wave early (for wave 2 and beyond). The player is awarded a percentage of the bonus gold depending on how quickly they click the call wave button with a short grace period. For wave 1, bonus gold is used to set the player's starting gold.
> 
> **Start Delay:** The delay (in seconds) between when the previous wave has finished spawning and when the next wave's call wave button will appear.
>
> **Call Wave Countdown:** The duration that the call wave button will be shown before the next wave is called automatically.
>
> **Disabled:** Disables the wave if checked. Useful for skipping waves for debugging or testing purposes.
>
> **Lanes:** The lanes that make up the wave.


**Lane**
![4 lane](https://user-images.githubusercontent.com/56179276/67908982-c5fedd00-fb3a-11e9-9dba-59b1fd5e633f.png)
> **Route Name:** The route to use (routes are defined in Terrain Window).
>
> **Hide Wave Indicator:** If checked, the call wave indicator for this lane won't be shown. Useful for hidden/surprise lanes.

**Subgroup**
![5 group](https://user-images.githubusercontent.com/56179276/67908998-cdbe8180-fb3a-11e9-9a40-8cf9d7ca1c09.png)
> **Initial Delay:** Delay (in seconds) before this subgroup is created.
>
> **Note:** A place for the user (ie, you) to leave notes about the subgroup. Can be useful for organizational purposes.
>
> **Group Pattern:** The Group Pattern to use for the subgroup. A subgroup can use either a group pattern or unit type, but not both.
>
> **Unit:** The Unit type to use for the subgroup.
>
> **Pattern:** The Spawn Pattern to use for the subgroup.
>
> **Count:** The number of units or group patterns to create for this subgroup.
>
> **Yield Group:** The subgroup will wait for these yield groups to finish spawning before starting its delay.


### Spawn Patterns
Spawn patterns describe the pattern to spawn subgroups of units (or spawn groups). A spawn pattern is made up of an interval and dispersal (both values are ranges).

**Interval** is the time between spawning units/groups (in seconds).

**Dispersal** is the left-to-rightness along the path to spawn the units/groups (0.0 is the left, 1.0 is the right, 0.5 is the center).

![6 pattern](https://user-images.githubusercontent.com/56179276/67909767-a3ba8e80-fb3d-11e9-8582-12e4528024ff.png)


### Spawn Groups
Spawn groups allow you to create specific patterns of units, which can then be combined with spawn patterns for more complex wave structures.

![7 spawn group](https://user-images.githubusercontent.com/56179276/67909814-d5cbf080-fb3d-11e9-89e1-f9f4a098997d.png)

> Combining the "2x1 Melee" spawn group with the "Random Standard" spawn pattern spawns pairs of creeps with random lane distribution.
>
> ![10 random payoff](https://user-images.githubusercontent.com/56179276/67909996-6d314380-fb3e-11e9-935d-8d4a70554e85.png)

## Unit AI Behaviors

Unit AI behaviors are set under the "Behavior Type" field in Unit data. There are many TD-specific AI behaviors supported.

> **TD HERO:** Used for controllable units that engage creeps, such as heroes.
> 
> **TD HERO PET:** Used for units that follows and defends a parent unit. Can engage. Must be created by triggers via [`DCEI.CreateChildUnit()`](https://wiki.funovus.com/master/Trigger-API-Reference-DCEI-Functions-Unit#createchildunit-6) to set child/parent relationship.
>
> **TD TOWER:** Used for units that attack creeps without engaging, such as towers.
>
> **TD TOWER TROOP:** used for children units of TD Tower units. Must be created through the [Spawn Troop](https://wiki.funovus.com/master/Data-Effect-Spawn-Troop) effect to set child/parent relationship. These units are removed if the parent dies/is removed.
>
> **TD CREEP:** Used for units that follow lane waypoints (when spawned via spawn wave data). Can be engaged. They can be assigned new waypoints via the [Set Waypoints](https://wiki.funovus.com/master/Data-Effect-Set-Waypoints) effect.
>
> **TD CREEP AGGRESSIVE:** Similar to TD Creep but will actively search for targets to attack even when not engaged. Used for ranged creeps if you want them to attack heroes/troops at range.
>
> **TD CREEP NO ENGAGE:** Similar to TD Creep but cannot be engaged.
>
> **TD JUNGLE CREEP:** Used for units that guard an area and can be engaged.
>
> **TD SUMMONED TROOP:** Used for units that guard an area and can engage.

Unit behavior types that support engage (ie, when a unit and creep stop and fight to the death) must have their Unit Battle Data settings configured in order to engage properly.

> **Enemy Search Range:** The radius where the unit will search for creeps to attack. Typically set to the same distance as engage radius for melee units.
>
> **Engage Radius:** The radius where the unit will search for creeps to engage. Typically set to less than the enemy search range for ranged units.
>
> **Reset Radius:** The leash radius of the unit.
