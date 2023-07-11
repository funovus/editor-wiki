*This update base on branch: master.*


*Found 38 wiki entry(ies) without any document:*

* `void SetOnMouseExitCallback(InGameUILayoutComponent ui, TypedCallback trigger)` 
* `string Particle(string particle)` 
* `void LogEndGameUnitHpPercentage(string name, unit u)` 
* `void ApplyTransformAnimationToSimpleUnit(unit unit, SimpleUnitTransformAnimationOptions options)` 
* `void ApplyTintColorAnimationToSimpleUnit(unit unit, SimpleUnitTintColorAnimationOptions options)` 
* `void SetDefaultSimpleDamageNumberStyle(SimpleDamageNumberStyleOptions options)` 
* `void RegisterSimpleParticle(SimpleParticleSpawnOptions options)` 
* `bool SimpleUnitExists(unit unit)` 
* `void CreateEffectAtSelf(string effectName, unit target)` 
* `void CreateEffectAtTarget(string effectName, unit target, unit caster, unit source = default)` 
* `void SetDisableWaveAutoStart(bool disable)` 
* `void SetMasterVolume(float volume)` 
* `float GetMasterVolume()` 
* `float GetMusicVolume()` 
* `void SetSoundVolume(float volume)` 
* `float GetSoundVolume()` 
* `void SetTranslationText(string key, string text)` 
* `void QuitApplication()` 
* `void SetResolution(int width, int height, FullScreenMode mode)` 
* `object GetCurrentResolution()` 
* `object GetSupportedResolutions()` 
* `void GenerateDeepLink(string payload, TypedCallback<string> callback)` 
* `void TriggerAddDeepLinkEvent(TypedCallback<string> callback)` 
* `void AsyncPvp.GetDefenseHistory(string season, TypedCallback<object> callback)` 
* `void AsyncPvp.SetDefenseProtectionTime(string season, int timestamp, TypedCallback<object> callback)` 
* `void AsyncPvp.FinishOpponent(string session, int result, string payload, TypedCallback<object> callback)` 
* `void AsyncPvp.GetDailyRankHistory(string season, TypedCallback<object> callback)` 
* `void Steam.UnlockAchievement(string achievementId)` 
* `bool Steam.IsAchievementUnlocked(string achievementId)` 
* `Enum FullScreenMode` 
* `Type SimpleUnitMoverOptions` 
* `Type SimpleUnitLocalAvoidanceOptions` 
* `Type SimpleUnitTimerOptions` 
* `Type SimpleUnitAnimationOptions` 
* `Type SimpleUnitShadowOptions` 
* `Type SimpleUnitAnimatorOptions` 
* `Type SimpleParticleSpawnOptions` 
* `Type AsyncPvpBot` 

*Found 31 missing wiki for parameter(s):*

* `SetOnMouseEnterCallback` missing wiki for parameter(s):  `trigger`.
* `SetOnMouseExitCallback` missing wiki for parameter(s):  `ui` `trigger`.
* `SimpleUnit` missing wiki for parameter(s):  `unit`.
* `Particle` missing wiki for parameter(s):  `particle`.
* `LogEndGameUnitHpPercentage` missing wiki for parameter(s):  `name` `u`.
* `ApplyTransformAnimationToSimpleUnit` missing wiki for parameter(s):  `unit` `options`.
* `ApplyTintColorAnimationToSimpleUnit` missing wiki for parameter(s):  `unit` `options`.
* `SetDefaultSimpleDamageNumberStyle` missing wiki for parameter(s):  `options`.
* `RegisterSimpleParticle` missing wiki for parameter(s):  `options`.
* `SimpleUnitExists` missing wiki for parameter(s):  `unit`.
* `CreateEffectAtSelf` missing wiki for parameter(s):  `effectName` `target`.
* `CreateEffectAtTarget` missing wiki for parameter(s):  `effectName` `target` `caster` `source`.
* `SetDisableWaveAutoStart` missing wiki for parameter(s):  `disable`.
* `FindClosestPointOnRoad` missing wiki for parameter(s):  `z`.
* `PlayLevel` missing wiki for parameter(s):  `projectName`.
* `SetMasterVolume` missing wiki for parameter(s):  `volume`.
* `SetSoundVolume` missing wiki for parameter(s):  `volume`.
* `SetTranslationText` missing wiki for parameter(s):  `key` `text`.
* `SetResolution` missing wiki for parameter(s):  `width` `height` `mode`.
* `GenerateDeepLink` missing wiki for parameter(s):  `payload` `callback`.
* `TriggerAddDeepLinkEvent` missing wiki for parameter(s):  `callback`.
* `WildCastleUpdateGuildSettings` missing wiki for parameter(s):  `announcement` `guildJoinType`.
* `WildCastleUpdateGuildBadge` missing wiki for parameter(s):  `background` `pattern` `icon`.
* `WildCastleUpdatePlayerBadge` missing wiki for parameter(s):  `background` `pattern` `icon`.
* `WildCastlePostContribution` missing wiki for parameter(s):  `contribution`.
* `GetDefenseHistory` missing wiki for parameter(s):  `season` `callback`.
* `SetDefenseProtectionTime` missing wiki for parameter(s):  `season` `timestamp` `callback`.
* `FinishOpponent` missing wiki for parameter(s):  `session` `result` `payload` `callback`.
* `GetDailyRankHistory` missing wiki for parameter(s):  `season` `callback`.
* `UnlockAchievement` missing wiki for parameter(s):  `achievementId`.
* `IsAchievementUnlocked` missing wiki for parameter(s):  `achievementId`.

*Found 223 missing example usage(s):*

* SetOnMouseEnterCallback
* SetOnMouseExitCallback
* Particle
* LogEndGameUnitHpPercentage
* GetPlayerCount
* GetCurrentPlayerId
* GetPlayerTeamId
* GetPlayerDeckCards
* GetMultiplayerGamePlayerDisplayName
* GetMultiplayerGamePlayerId
* ApplyTransformAnimationToSimpleUnit
* ApplyTintColorAnimationToSimpleUnit
* SetDefaultSimpleDamageNumberStyle
* RegisterSimpleParticle
* SimpleUnitExists
* CreateEffectAtSelf
* CreateEffectAtTarget
* SetDisableWaveAutoStart
* HideFastForwardButton
* DisableQuitButton
* HideShipSpellMenu
* GetAllCustomData
* GetCustomDataByType
* GetDefaultCustomDataByType
* GetCustomDataByInstance
* SetEnabledCameraClamp
* SetEnabledCameraClampForPlayer
* ClearCameraFocusUnit
* ClearCameraFocusUnitForPlayer
* SetCameraFocusSmoothOvertimeForPlayer
* SetCameraDistance
* SetCameraOrthographicSize
* SetCameraMinOrthographicSize
* SetCameraMaxOrthographicSize
* GetCameraOrthographicSize
* SetCameraDistanceSmoothOvertimeForPlayer
* SetCameraPitchSmoothOvertime
* SetCameraPitchSmoothOvertimeForPlayer
* SetCameraYawSmoothOvertime
* SetCameraYawSmoothOvertimeForPlayer
* GetCameraPitch
* GetCameraYaw
* GetCameraMaxDistance
* GetCameraMinDistance
* GetCameraBoundsHeight
* GetCameraBoundsWidth
* BlockCameraInput
* BlockCameraInputForPlayer
* SetCameraVisibleAreaCenter
* SetCameraVisibleAreaWidth
* SetCameraVisibleAreaCenterForPlayer
* ShowFeedbackMessage
* ShowSystemUi
* HideSystemUi
* ShowAbilitiesUi
* ShowAbilitiesUiInSlot
* HideAbilitiesUi
* ShowAbilitiesUiForPlayer
* HideAbilitiesUiForPlayer
* ShowUnitStatusUi
* ShowUnitStatusUiForPlayer
* SetUnitHealthBarUiScale
* SetGoldRewardTextScale
* ShowSpeechBubble
* ShowUnitLabel
* HideUnitLabel
* ShowFloatingText
* HideSpeechBubble
* ShowUnitStatusUiInSlot
* SetHeroStatusUiVisibility
* HideUnitStatusUi
* HideUnitStatusUiForPlayer
* ShowMessageWithButtonText
* ShowBigHeadMessage
* HideBigHeadMessage
* ShowObjectiveText
* HideObjective
* HideScreenMask
* ShowSlowMotionEffect
* HideSlowMotionEffect
* HideJoystick
* ShowJoystick
* HideJoystickButton
* ShowJoystickButton
* HasUserInput
* Random
* CreateRandomGenerator
* PlayLevel
* CreateRegion
* FindRegion
* SetUpgradeLevelAsync
* AddUnitWeapon
* RemoveUnitWeapon
* SetUpdateFrequency
* ClearUpdateFrequency
* GetUpdateFrequency
* SetSpeedFactor
* GetSpeedFactor
* SetVictory
* SetDefeat
* SetVictoryForPlayer
* SetDefeatForPlayer
* ShowWorldPositionHelper
* HideWorldPositionHelper
* BlockGameWorld
* WhitelistUnit
* WhitelistWorldPosition
* WhitelistUi
* UnblockGameWorld
* IsMusicEnabled
* IsSoundEnabled
* SetMasterVolume
* GetMasterVolume
* PlayMusic
* SetMusicVolume
* GetMusicVolume
* PlaySound
* SetSoundVolume
* GetSoundVolume
* PlaySoundForPlayer
* SetTranslationText
* ShowSettings
* ResetSavedMapDataByIndex
* DeleteMail
* ScheduleNotification
* CancelNotification
* GetLastNotificationId
* ShowSendSMS
* RestartApplication
* QuitApplication
* SetResolution
* GetCurrentResolution
* GetSupportedResolutions
* OpenUrl
* RequestAppStoreReview
* RequestInAppReview
* GenerateDeepLink
* TriggerAddDeepLinkEvent
* InitializeInAppPurchaseWithProductId
* GetIapProductLocalizedPrice
* SetVfxPriorityLevel
* EnableRoute
* GetTerrainTypeAtPoint
* GetTerrainHeightAtPoint
* ChangePropLayerDisplay
* SetTerrainChunkPosition
* SetTerrainChunkPositionWithInterpolation
* DestroyTerrainChunkInstance
* GetTerrainChunkInstancePosition
* SetTerrainChunkInstancePosition
* SetTerrainChunkInstancePositionWithInterpolation
* GetWeather
* SetWeather
* GetTimeOfTheDay
* SetTimeOfTheDay
* GetCurrentLightColor
* SetOverrideLightColor
* SetSkyboxColor
* ResetSkyboxColor
* AddLine
* AddLineWithSprite
* RemoveLine
* MoveLineWithInterpolation
* RemoveAllLines
* ChangeLineColor
* ChangeLineDisplay
* AddGrid
* AddGridWithSprite
* RemoveGrid
* SetBlurredScreenCaptureAsBackground
* SetCustomLightColor
* SetCustomLightIntensity
* SetCustomLightPosition
* GetCustomLightColor
* GetUiRootFrame
* GetUiRootFrameForPlayer
* GetParentFrame
* GetFrameController
* SetGridFrameCellWidth
* SetGridFrameCellHeight
* AnimateCameraFrameViewportRotation
* RefreshListFrameItems
* CreateSpineFrame
* SetSpineFrameAsset
* GetSpineFrameAnimations
* ShowPauseMenuFrame
* HidePauseMenuFrame
* SetPauseMenuFrameMusicButton
* SetPauseMenuFrameSoundButton
* SuppressPauseMenuOnApplicationPause
* Save.Commit
* Save.SetMapEntry
* Settings.IsAppleConnected
* AsyncPvp.GetDefenseHistory
* AsyncPvp.SetDefenseProtectionTime
* AsyncPvp.FinishOpponent
* AsyncPvp.GetDailyRankHistory
* Steam.UnlockAchievement
* Steam.IsAchievementUnlocked
* Platform
* FullScreenMode
* UnitBehaviorStatus
* BehaviorFilter
* AbilityFilter
* WeaponFilter
* CriticalFilter
* UnitTagStatus
* BehaviorModifier
* EffectContext
* TextOptions
* ExplicitOffset
* PolarOffset
* SimpleUnitMoverOptions
* SimpleUnitLocalAvoidanceOptions
* SimpleUnitTimerOptions
* SimpleUnitAnimationOptions
* SimpleUnitShadowOptions
* SimpleUnitAnimatorOptions
* SimpleParticleSpawnOptions
* AttachOffsetOptions
* JoystickButtonOptions
* BigHeadMessageOptions
* AsyncPvpBot
