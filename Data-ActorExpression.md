<div id="toc" markdown="1">
- [Data\Actor\Conditions](#dataactorconditions)
  * [Compare](#compare)
  * [Constant](#constant)
  * [Variable](#variable)
  * [Add](#add)
  * [If](#if)
  * [Random Int](#random-int)
  * [Divide](#divide)
  * [Multiply](#multiply)
  * [Subtract](#subtract)
  * [Logic Not](#logic-not)
  * [Logic And](#logic-and)
  * [Logic Or](#logic-or)
  * [Area Search Radius](#area-search-radius)
  * [Unit Weapon Range](#unit-weapon-range)
  * [Unit Ability Range](#unit-ability-range)
  * [Unit Team Id](#unit-team-id)
  * [Behavior Stack Count](#behavior-stack-count)
  * [Unit Radius](#unit-radius)
  * [Is Critical Hit](#is-critical-hit)
  * [Viewer Has Alliance Type](#viewer-has-alliance-type)
  * [Viewer Has Player Id](#viewer-has-player-id)
  * [Behavior Stack Count Delta](#behavior-stack-count-delta)

</div>

***

# [](dcei.engine.proto.ActorExpressions.Expression)**[Data](Data)\\[Actor](Data-Actor)\Conditions** {dataActorConditions}

[](manual-wiki-start)
Conditions to be met for the actions to be executed. If any of the condition evaulates to 0 or false, the actions will not be executed. 
Note that the condition will be evaulated in the context of an existing actor. If this event is used to create a new actor (e.g., create a actor when a certain behavior is turned on), the evaulation context will be the root of the actor scope (e.g., the unit actor). If no actor can be found, the conditions are assumed to be met.
[](manual-wiki-end)

## [](dcei.engine.proto.ActorExpressions.Expression.compare)**Compare** {Compare}
Compares two values/expressions and returns true or false based on the result.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ActorExpressions.Expression.constant)**Constant** {Constant}
Returns the given integer. Useful for comparing to other values.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ActorExpressions.Expression.variable)**Variable** {Variable}
Returns the given variable. Variables are set with the **Set Variable** actor action.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ActorExpressions.Expression.add)**Add** {Add}
Returns the sum of the listed expressions.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ActorExpressions.Expression.if)**If** {If}
Returns the result of the evaluated expression if the condition is true. Otherwise returns false.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ActorExpressions.Expression.random_int)**Random Int** {Random-Int}
Returns a random integer between the min and max value.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ActorExpressions.Expression.divide)**Divide** {Divide}
Returns the result of the **left** value divided by the **right** value.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ActorExpressions.Expression.multiply)**Multiply** {Multiply}
Returns the result of the listed expressions multiplied together.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ActorExpressions.Expression.subtract)**Subtract** {Subtract}
Returns the result of the **right** value subtracted from the **left** value.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ActorExpressions.Expression.logic_not)**Logic Not** {Logic-Not}
Returns the flipped value or expression (true becomes false, false becomes true).

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ActorExpressions.Expression.logic_and)**Logic And** {Logic-And}
Returns true if all listed values/expressions are true.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ActorExpressions.Expression.logic_or)**Logic Or** {Logic-Or}
Returns true if any listed values/expressions are true.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ActorExpressions.Expression.area_search_radius)**Area Search Radius** {Area-Search-Radius}
If the actor is created by an **area search** effect from an **action actor**, returns the radius of the search effect.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ActorExpressions.Expression.unit_weapon_range)**Unit Weapon Range** {Unit-Weapon-Range}
If the actor scope contains a unit, returns the maximum range of a weapon on the unit.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ActorExpressions.Expression.unit_ability_range)**Unit Ability Range** {Unit-Ability-Range}
If the actor scope contains a unit, returns the range of an ability on the unit.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ActorExpressions.Expression.unit_team_id)**Unit Team Id** {Unit-Team-Id}
If the actor scope contains a unit, returns the team id of the unit.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ActorExpressions.Expression.behavior_stack_count)**Behavior Stack Count** {Behavior-Stack-Count}
If the actor scope contains a unit, returns the current stack count of a behavior of the unit.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ActorExpressions.Expression.unit_radius)**Unit Radius** {Unit-Radius}
If the actor scope contains a unit, returns the radius of the unit.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ActorExpressions.Expression.is_critical_hit)**Is Critical Hit** {Is-Critical-Hit}
Returns true if the actor event triggered by a critical hit.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ActorExpressions.Expression.viewer_has_alliance_type)**Viewer Has Alliance Type** {Viewer-Has-Alliance-Type}
Returns true if the current viewer has a certain alliance type with the unit in the actor scope.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ActorExpressions.Expression.viewer_has_player_id)**Viewer Has Player Id** {Viewer-Has-Player-Id}
Returns true if the current viewer has a certain player id.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.ActorExpressions.Expression.behavior_stack_count_delta)**Behavior Stack Count Delta** {Behavior-Stack-Count-Delta}
If the actor event is triggered by **behavior_stack_increase** or **behavior_stack_decrease**, returns the stack count delta.

[](manual-wiki-start)

[](manual-wiki-end)

