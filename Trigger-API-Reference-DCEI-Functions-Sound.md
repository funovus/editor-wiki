<div id="toc" markdown="1">
- [Trigger API Reference\DCEI Functions\Sound](#trigger-api-referencedcei-functionssound)
  * [IsMusicEnabled](#ismusicenabled-0)
  * [IsSoundEnabled](#issoundenabled-0)
  * [SetMasterVolume](#setmastervolume-1)
  * [GetMasterVolume](#getmastervolume-0)
  * [PlayMusic](#playmusic-2)
  * [SetMusicVolume](#setmusicvolume-1)
  * [GetMusicVolume](#getmusicvolume-0)
  * [PauseMusic](#pausemusic-0)
  * [ResumeMusic](#resumemusic-0)
  * [PlaySound](#playsound-2)
  * [SetSoundVolume](#setsoundvolume-1)
  * [GetSoundVolume](#getsoundvolume-0)
  * [PlaySoundForPlayer](#playsoundforplayer-3)

</div>

***

# [Trigger API Reference](Trigger-API-Reference)\\DCEI Functions\Sound {Trigger-API-ReferenceDCEI-FunctionsSound}

[](overview-start)

[](overview-end)

## bool IsMusicEnabled() {ismusicenabled-0}
```cs
bool IsMusicEnabled()
```
#### Description
[](description-start)
Returns if the music is enabled or not.
[](description-end)

#### Example Usage
[](example-usage-start)

[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## bool IsSoundEnabled() {issoundenabled-0}
```cs
bool IsSoundEnabled()
```
#### Description
[](description-start)
Returns if the sound is enabled.
[](description-end)

#### Example Usage
[](example-usage-start)

[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetMasterVolume(float volume) {setmastervolume-1}
```cs
void SetMasterVolume(float volume)
```
#### Description
[](description-start)

[](description-end)

#### Parameters
[](parameters-start)

[](parameters-end)

#### Example Usage
[](example-usage-start)

[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## float GetMasterVolume() {getmastervolume-0}
```cs
float GetMasterVolume()
```
#### Description
[](description-start)

[](description-end)

#### Example Usage
[](example-usage-start)

[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void PlayMusic(string name, bool smoothTransition = False) {playmusic-2}
```cs
void PlayMusic(string name, bool smoothTransition = False)
```
#### Description
[](description-start)
Plays the specified song on repeat. This will replace the default music played. Music must be declared by register api [Sound](Trigger-API-Reference-DCEI-Functions-General#sound-1).
[](description-end)

#### Parameters
[](parameters-start)
- *string* `name` the name of the music asset to play. Accepted music names:

```
Battle1
Battle2
Battle3
Hometown1
Boss1
```

- *bool* `smoothTransition` if we want a smooth transition from current music to this one

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.PlayMusic("Boss1", true)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetMusicVolume(float volume) {setmusicvolume-1}
```cs
void SetMusicVolume(float volume)
```
#### Description
[](description-start)
Sets the music volume.
[](description-end)

#### Parameters
[](parameters-start)
- *float* `volume` the new music volume.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.SetMusicVolume(0.5)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## float GetMusicVolume() {getmusicvolume-0}
```cs
float GetMusicVolume()
```
#### Description
[](description-start)

[](description-end)

#### Example Usage
[](example-usage-start)

[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void PauseMusic() {pausemusic-0}
```cs
void PauseMusic()
```
#### Description
[](description-start)
Pauses the music currently playing. Cannot be used on the game's first frame as the music hasn't initialized yet.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function OnClickRMB()
    DCEI.PauseMusic()
end

DCEI.TriggerAddMouseDownEvent(1, OnClickRMB)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ResumeMusic() {resumemusic-0}
```cs
void ResumeMusic()
```
#### Description
[](description-start)
Resumes paused music. If music is currently not paused, restarts the music currently playing.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function OnClickLMB()
    DCEI.ResumeMusic()
end

DCEI.TriggerAddMouseDownEvent(0, OnClickLMB)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void PlaySound(string nameOrPath, float volume = 1) {playsound-2}
```cs
void PlaySound(string nameOrPath, float volume = 1)
```
#### Description
[](description-start)
Plays the given sound at the given volume. A given volume of 0 will playback at the default volume. While volume doesn't have an explicit maximum value, it's recommended to keep this under 5.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `nameOrPath` the name of the sound or path to the sound.
- *float* `volume` the playback volume for the sound.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.PlaySound("ancienttree_ability_01", 0.5)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetSoundVolume(float volume) {setsoundvolume-1}
```cs
void SetSoundVolume(float volume)
```
#### Description
[](description-start)

[](description-end)

#### Parameters
[](parameters-start)

[](parameters-end)

#### Example Usage
[](example-usage-start)

[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## float GetSoundVolume() {getsoundvolume-0}
```cs
float GetSoundVolume()
```
#### Description
[](description-start)

[](description-end)

#### Example Usage
[](example-usage-start)

[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void PlaySoundForPlayer(string nameOrPath, int playerId, float volume = 1) {playsoundforplayer-3}
```cs
void PlaySoundForPlayer(string nameOrPath, int playerId, float volume = 1)
```
#### Description
[](description-start)
Play sound for a specific player. Only useful in multiplayer.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `nameOrPath` the name of the sound or path to the sound.
- *int* `playerId` the playback volume for the sound.
- *float* `volume` the playback volume for the sound.

[](parameters-end)

#### Example Usage
[](example-usage-start)

[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

