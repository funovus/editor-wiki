### Data Binding

Some UI fields can be bound to unit properties; so they automatically update based on the unit's properties.
For more information, see the [notion guide on Data Binding.](https://funovus.notion.site/Data-Binding-Text-Expressions-3cf526b1dccb413c89b9e4d66370c2fa)

Data bound values can be formatted to specific decimal values by appending the expression such as `:F2`. DreamEditor also provides an additional specifier `:K` to format huge numbers as "xxxK", "xxxM" or "xxxB". The default parameter for `:K` is `:K2`. You can find more documentation [here](https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-numeric-format-strings)

#### Related Trigger Function(s):

- [SetTextFrameTextExpression()](Trigger-API-Reference-DCEI-Functions-Custom-UI#settextframetextexpression-2)
- [BindUnitData()](Trigger-API-Reference-DCEI-Functions-Custom-UI#bindunitdata-2)

#### The following unit properties can be bound:

```
unit.Info.Icon
unit.Info.Name
unit.Health.Current
unit.Health.Max
unit.Health.Percentage
unit.Health.Fraction
unit.Health.Regeneration
unit.Shield.Current
unit.Shield.Max
unit.Shield.Percentage
unit.Shield.Fraction
unit.Shield.Regeneration
unit.MoveSpeed
unit.Mana.Current
unit.Mana.Max
unit.Mana.Percentage
unit.Mana.Fraction
unit.Mana.Regeneration
unit.Ability.ability_name.CooldownRatio
unit.Ability.ability_name.MaxCharge
unit.Ability.ability_name.ChargeCount
unit.Ability.some_named_ability.Speed
unit.Expression.some_named_expression
unit.Weapon.some_named_weapon.CooldownRatio
unit.Weapon.some_named_weapon.Speed
unit.Behavior.some_named_behavior.StackCount
unit.Behavior.some_named_behavior.MaxStackCount

```