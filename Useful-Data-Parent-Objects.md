
The [Data Window](Data) has a number of built-in objects that are useful for creating your own units, actors, weapons, and effects. Here we will go through the most commonly used ones.


## Unit

### _CUnit
Basic data for units (heroes, troops, monsters, etc)
	
### _CMissile
Basic data for missiles

### _CBuilding
Basic data for structures

### _StandardHelper
Basic data for helper/dummy units that aren’t involved in combat. They are invulnerable, ignore collision, and have the “helper” tag which makes them automatically ignored by _StandardAreaSearch


## Actor

### _StandardUnit (and variants)
Basic data suitable for most units. Provides events (via event macros) for playing the unit’s attack animation with weapons and death animation on death. Also provides the “_Unit” alias and some basic host sites for “Hit” (think missile impacts)  and “Status” (think overhead buffs). Has two variants for DecayOnDeath which uses site ops to cause the model to sink into the ground as the death anim plays, and RemoveOnDeath which destroys the model immediately on death (good to combine with death vfx such as “poof”).
	
### _StandardUnitMinimal
Same as _StandardUnit but doesn’t contain attack and death animation macros.

### _UnitModelAddition
Basic data for unit-hosted models that are destroyed when orphaned (i.e. if you attach a model to a unit and want to destroy the attached model when the unit dies).

### _FX OneShot SelfRemoving
Basic data for visual effects or particle animations. Causes the model to play it’s animation once and destroy itself. Has a failsafe timer in case the model happens to have no animations.

### _SFX OneShot SelfRemoving
Similar to _FX OneShot SelfRemoving but for sound effects.


## Weapon
_StandardMeleeWeapon
Basic data for melee weapons, just swap in your own effect.

_StandardRangedWeapon
Basic data for ranged weapons,  just swap in your own effect

## Effect
### _StandardAreaSearch

Basic data for search effects that affect enemy units. Only affects units (not missiles, or buildings), and excludes dead, invulnerable, or units with the “gt_helper” tag. Ground only.

Additionally has AllowAir variant (which includes air units) and Friendly variant (which targets player/allied units instead of enemies, and also allows air).

