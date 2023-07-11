<div id="toc" markdown="1">
- [Data\Effect\Apply Tag](#dataeffectapply-tag)
  * [Which Unit](#which-unit)
  * [Tag Name](#tag-name)
  * [Duration](#duration)
  * [Stack Count](#stack-count)

</div>

***

# [](dcei.engine.proto.Effect.apply_tag)**[Data](Data)\\[Effect](Data-Effect)\Apply Tag** {dataEffectApply-Tag}
Applies a local Tag to a unit within the given effect tree. Tags are arbitrary counters that can be referenced by Expressions and Validators

[](manual-wiki-start)
This can be used to prevent periodic search effect from damaging a unit multiple times by excluding it from future searches when combined with a validator.
[](manual-wiki-end)

## [](dcei.engine.proto.EffectApplyTag.which_unit)**Which Unit** {Which-Unit}

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectApplyTag.tag_name)**Tag Name** {Tag-Name}
The tag reference.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectApplyTag.duration)**Duration** {Duration}
The duration of the tag. Use -1 to make the duration infinite.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.EffectApplyTag.stack_count)**Stack Count** {Stack-Count}
The number of stacks of the tag to apply.

[](manual-wiki-start)

[](manual-wiki-end)

