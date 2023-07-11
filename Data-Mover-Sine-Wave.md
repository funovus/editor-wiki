<div id="toc" markdown="1">
- [Data\Mover\Sine Wave](#datamoversine-wave)
  * [Amplitude](#amplitude)
  * [Peak Count](#peak-count)
  * [Speed](#speed)
  * [Speed Expressions](#speed-expressions)

</div>

***

# [](dcei.engine.proto.Mover.sine_wave)**[Data](Data)\\[Mover](Data-Mover)\Sine Wave** {dataMoverSine-Wave}
Moves the missile in a wave pattern towards the target with tracking.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.SineWaveMover.amplitude)**Amplitude** {Amplitude}
The width of the wave. Positive values mean the wave will start from the left while negative values mean the wave will start from the right. If set to 0, there will be no wave motion.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.SineWaveMover.peak_count)**Peak Count** {Peak-Count}
The number of peaks the wave will make between its origin and target. If set to 0, one peak will be used.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.SineWaveMover.speed)**Speed** {Speed}
The missile unit's speed, in terrain grid-units-per-second.

[](manual-wiki-start)

[](manual-wiki-end)

## [](dcei.engine.proto.SineWaveMover.speed_expressions)**Speed Expressions** {Speed-Expressions}
If set, the evaluated expression will be added to the speed when the missile unit is launched.

[](manual-wiki-start)

[](manual-wiki-end)

