<div id="toc" markdown="1">
- [Data\Mover\Multi Stage](#datamovermulti-stage)
  * [Stages](#stages)
  * [Overlays](#overlays)

</div>

***

# [](dcei.engine.proto.Mover.multi_stage)**[Data](Data)\\[Mover](Data-Mover)\Multi Stage** {dataMoverMulti-Stage}
A mover with multiple stages and motion overlays.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.MultiStageMover.stages)**Stages** {Stages}

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.MultiStageMover.MoverStage.oneof_motion_type)**Motion Type** {Motion-Type}
[](dcei.engine.proto.MultiStageMover.MoverStage.oneof_motion_type)**SelectableType: [MultiStageMover.MoverStage.Motion Type](SelectableType#multistagemovermoverstagemotion-type)**


[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.MultiStageMover.MoverStage.exit_time)**Exit Time** {Exit-Time}
If set, the time in seconds after entering this stage to start to transition to the next stage. If neither exit_time nor exit_distance is set, the current stage will last indefinitely.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.MultiStageMover.MoverStage.exit_distance)**Exit Distance** {Exit-Distance}
If set, the travel distance after entering this stage to start to transition to the next stage. If neither exit_time nor exit_distance is set, the current stage will last indefinitely.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.MultiStageMover.MoverStage.transition_time)**Transition Time** {Transition-Time}
If set, the time in seconds to blend the current stage and the next stage while transitioning. If both transition_time and transition_distance are 0, the transition to the next stage will finish instantly.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.MultiStageMover.MoverStage.transition_distance)**Transition Distance** {Transition-Distance}
If set, the travel distance to blend the current stage and the next stage while transitioning. If both transition_time and transition_distance are 0, the transition to the next stage will finish instantly.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.MultiStageMover.MoverStage.motion_overlay_scales)**Motion Overlay Scales** {Motion-Overlay-Scales}
The intensity of each motion overlay in this stage. It should have the same number of entries as the number of overlays. Missing entries are treated as 0.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.MultiStageMover.overlays)**Overlays** {Overlays}
Motion overlays apply a pattern of movement (like a wave or spiral) on top of a mover's base motion.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.MultiStageMover.MotionOverlay.oneof_overlay_type)**Overlay Type** {Overlay-Type}
[](dcei.engine.proto.MultiStageMover.MotionOverlay.oneof_overlay_type)**SelectableType: [MultiStageMover.MotionOverlay.Overlay Type](SelectableType#multistagemovermotionoverlayoverlay-type)**


[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.MultiStageMover.MotionOverlay.scale_adjustment_speed)**Scale Adjustment Speed** {Scale-Adjustment-Speed}
When the scale of the overlay needs to change to a new value (e.g., from the initial launch scale of 0 to the target scale in the first stage, or between stages with different scale values), how fast it adjusts. The speed is relative to the mover's moving speed. A speed of 1 means the scale changes by 1 when the mover travels by 1 terrain grid-unit distance.

[](manual-wiki-start)

[](manual-wiki-end)

### [](dcei.engine.proto.MultiStageMover.MotionOverlay.rotation)**Rotation** {Rotation}
[](dcei.engine.proto.ValueWithRangeAndExpression)**MessageType: [ValueWithRangeAndExpression](GenericMessage#valuewithrangeandexpression)**

Overlays apply offsets to the mover position on the x-z plane (i.e., parallel to the terrain plane) by default. Set this rotation value to rotate the offset plane around the moving direction. E.g., sine-wave overlay moves the missile left then right; a rotation value of 180 will flip the offset plane and make the missile go right first.

[](manual-wiki-start)

[](manual-wiki-end)

