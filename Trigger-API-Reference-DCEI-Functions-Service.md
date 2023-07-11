<div id="toc" markdown="1">
- [Trigger API Reference\DCEI Functions\Service](#trigger-api-referencedcei-functionsservice)
  * [GetTranslationText](#gettranslationtext-2)
  * [SetTranslationText](#settranslationtext-2)
  * [IsAdsReady](#isadsready-0)
  * [ShowAds](#showads-2)
  * [IsOnline](#isonline-0)
  * [IsDev](#isdev-0)
  * [ShowSettings](#showsettings-0)
  * [GetSaveDataHistory](#getsavedatahistory-2)
  * [ResetSavedMapDataByIndex](#resetsavedmapdatabyindex-1)
  * [GetMail](#getmail-2)
  * [DeleteMail](#deletemail-1)
  * [ScheduleNotification](#schedulenotification-3)
  * [CancelNotification](#cancelnotification-1)
  * [GetLastNotificationId](#getlastnotificationid-0)
  * [ShowSendSMS](#showsendsms-1)
  * [RestartApplication](#restartapplication-0)
  * [QuitApplication](#quitapplication-0)
  * [SetResolution](#setresolution-3)
  * [GetCurrentResolution](#getcurrentresolution-0)
  * [GetSupportedResolutions](#getsupportedresolutions-0)
  * [OpenUrl](#openurl-1)
  * [ShareText](#sharetext-1)
  * [RequestAppStoreReview](#requestappstorereview-0)
  * [RequestInAppReview](#requestinappreview-2)
  * [GetServerTime](#getservertime-1)
  * [GetServerData](#getserverdata-1)
  * [CallServerFunction](#callserverfunction-3)
  * [GetUserId](#getuserid-0)
  * [GetUserName](#getusername-0)
  * [GetUserTag](#getusertag-0)
  * [GetReferralCode](#getreferralcode-1)
  * [UseReferralCode](#usereferralcode-2)
  * [GenerateDeepLink](#generatedeeplink-2)
  * [TriggerAddDeepLinkEvent](#triggeradddeeplinkevent-1)
  * [WildCastleCreateGuild](#wildcastlecreateguild-2)
  * [WildCastleLeaveGuild](#wildcastleleaveguild-1)
  * [WildCastlePullGuild](#wildcastlepullguild-1)
  * [WildCastleSearchGuild](#wildcastlesearchguild-2)
  * [WildCastleApplyForGuild](#wildcastleapplyforguild-2)
  * [WildCastlePullGuildApplicants](#wildcastlepullguildapplicants-1)
  * [WildCastleResponseToJoinGuild](#wildcastleresponsetojoinguild-3)
  * [WildCastleKickOutGuildMember](#wildcastlekickoutguildmember-2)
  * [WildCastleUpdateGuildSettings](#wildcastleupdateguildsettings-3)
  * [WildCastleUpdateGuildBadge](#wildcastleupdateguildbadge-4)
  * [WildCastleUpdatePlayerBadge](#wildcastleupdateplayerbadge-4)
  * [WildCastlePostContribution](#wildcastlepostcontribution-2)
  * [WildCastlePromoteGuildMember](#wildcastlepromoteguildmember-2)
  * [WildCastleDemoteGuildMember](#wildcastledemoteguildmember-2)
  * [WildCastleUpdateGuildSkill](#wildcastleupdateguildskill-3)
  * [WildCastlePullMessages](#wildcastlepullmessages-2)
  * [WildCastleClaimPuzzleChest](#wildcastleclaimpuzzlechest-2)
  * [WildCastleSendItemsToPlayer](#wildcastlesenditemstoplayer-3)
  * [RegisterWildCastleCreateGuildCallback](#registerwildcastlecreateguildcallback-1)
  * [RegisterWildCastleClaimPuzzleChestCallback](#registerwildcastleclaimpuzzlechestcallback-1)
  * [RegisterWildCastleSendItemsToPlayerCallback](#registerwildcastlesenditemstoplayercallback-1)
  * [StandaloneGetItemInventory](#standalonegetiteminventory-2)
  * [StandaloneGetUserItemInventory](#standalonegetuseriteminventory-1)
  * [WildCastlePostRequestItemMessage](#wildcastlepostrequestitemmessage-4)
  * [WildCastlePostGuildChatMessage](#wildcastlepostguildchatmessage-2)
  * [StandalonePostChatMessage](#standalonepostchatmessage-3)
  * [StandalonePullChatMessages](#standalonepullchatmessages-3)
  * [StandaloneRegisterOnReceiveMessageCallback](#standaloneregisteronreceivemessagecallback-1)
  * [GetLeaderBoardScore](#getleaderboardscore-2)
  * [GetLeaderBoardScoreList](#getleaderboardscorelist-4)
  * [GetLeaderBoardSurroundingUsers](#getleaderboardsurroundingusers-3)
  * [GetLeaderBoardUserScores](#getleaderboarduserscores-3)
  * [InitializeInAppPurchaseWithProductId](#initializeinapppurchasewithproductid-3)
  * [InitializeInAppPurchaseWithProductData](#initializeinapppurchasewithproductdata-3)
  * [PurchaseIapProduct](#purchaseiapproduct-1)
  * [GetIapProductLocalizedPrice](#getiapproductlocalizedprice-1)
  * [PostLeaderBoardScore](#postleaderboardscore-5)
  * [SetUserName](#setusername-2)

</div>

***

# [Trigger API Reference](Trigger-API-Reference)\\DCEI Functions\Service {Trigger-API-ReferenceDCEI-FunctionsService}

[](overview-start)

[](overview-end)

## string GetTranslationText(string key, Dictionary\<string, object> parameters) {gettranslationtext-2}
```cs
string GetTranslationText(string key, Dictionary<string, object> parameters)
```
#### Description
[](description-start)
Returns a localized string from localization data using the specified key. Additional parameters can be used for replacement text.

You can change what language is used in the editor in [Play Settings](Data-Play-Settings).
[](description-end)

#### Parameters
[](parameters-start)
- *string* `key` the localization key to use.
- *Dictionary\<string, object>* `parameters` (optional) a table of replacement text keys.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- key: "data/hero/ice_mage/skill01/description"
-- english text: "Slows nearby enemies by {[x]} for {[y]} seconds."
-- logged text: "Slows nearby enemies by 50% for 3 seconds."

local text = DCEI.GetTranslationText("data/hero/ice_mage/skill01/description", { x = "50%", y = "3" })
DCEI.LogMessage(text)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetTranslationText(string key, string text) {settranslationtext-2}
```cs
void SetTranslationText(string key, string text)
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

## bool IsAdsReady() {isadsready-0}
```cs
bool IsAdsReady()
```
#### Description
[](description-start)
Returns true if ads are ready.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local ads_ready = DCEI.IsAdsReady()
if ads_ready then
    DCEI.ShowAds(ResolveAds)
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ShowAds(TypedCallback\<bool> callback, bool fallbackToUnityAds = False) {showads-2}
```cs
void ShowAds(TypedCallback<bool> callback, bool fallbackToUnityAds = False)
```
#### Description
[](description-start)
Attempts to show ads in published mobile and web games. If successful, the first parameter of the callback function will return true. This can be simulated in [Play Settings](Data-Play-Settings).
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback\<bool>* `callback` this callback function is called once ShowAds() has resolved. If watching ads was successful, the first parameter of this callback function will return true.
- *bool* `fallbackToUnityAds` if true, uses unity ads as a fallback.

[](parameters-end)

#### Callback Parameters
- *Boolean* `success`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function ResolveAds(success)
  if success then
    -- deliver ad rewards to player
  else
    -- show error message for player
  end
end

DCEI.ShowAds(ResolveAds)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## bool IsOnline() {isonline-0}
```cs
bool IsOnline()
```
#### Description
[](description-start)
Returns true if the user currently has internet access. This can be simulated in [Play Settings](Data-Play-Settings).
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local is_online = DCEI.IsOnline()
if is_online then
    DCEI.LogMessage(tostring(is_online))
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## bool IsDev() {isdev-0}
```cs
bool IsDev()
```
#### Description
[](description-start)
Returns true if the user currently has developer access. This can be simulated in [Play Settings](Data-Play-Settings).
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local is_dev = DCEI.IsDev()
if is_dev then
    DCEI.LogMessage(tostring(is_dev))
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ShowSettings() {showsettings-0}
```cs
void ShowSettings()
```
#### Description
[](description-start)
Show the game settings menu. Only works on mobile.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.ShowSettings()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void GetSaveDataHistory(int count, TypedCallback\<object> callback) {getsavedatahistory-2}
```cs
void GetSaveDataHistory(int count, TypedCallback<object> callback)
```
#### Description
[](description-start)
Attempts to fetch the player's save history. If successful, the callback will return with the save history as a table as its first parameter.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `count` the number of save data instances to include in the callback table, with the most recent saves returned first. Max 10.
- *TypedCallback\<object>* `callback` the callback function to handle the returned save data instances.

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local function ResultCallback(result)
    if result then
        for _, save in ipairs(result.saves) do
            DCEI.LogMessage("Save data timestamp:" .. save.time)
        end       
    end
end
DCEI.Settings.GetSaveDataHistory(count, ResultCallback)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ResetSavedMapDataByIndex(int index) {resetsavedmapdatabyindex-1}
```cs
void ResetSavedMapDataByIndex(int index)
```
#### Description
[](description-start)
Attempts to resets the saved map data at the given index.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `index` the saved map data index to reset.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.ResetSavedMapDataByIndex(1)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void GetMail(TypedCallback\<object> callback, bool forceFetch) {getmail-2}
```cs
void GetMail(TypedCallback<object> callback, bool forceFetch)
```
#### Description
[](description-start)
Attempts to fetch the player's mail. If successful, the callback will return with the save history as a table as its first parameter.
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback\<object>* `callback` the callback function to handle the returned mail.
- *bool* `forceFetch` if true, forces a fetch.

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function MailHandler(result)
    --Handle mail
end
DCEI.GetMail(MailHandler, false)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void DeleteMail(int instanceId) {deletemail-1}
```cs
void DeleteMail(int instanceId)
```
#### Description
[](description-start)
Attempts to delete the mail with the given ID.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `instanceId` the ID of the mail to delete.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.DeleteMail(1)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## int ScheduleNotification(string title, string body, double timeInSeconds) {schedulenotification-3}
```cs
int ScheduleNotification(string title, string body, double timeInSeconds)
```
#### Description
[](description-start)
Schedules a notification and returns the ID of said notification. Only works on mobile.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `title` the title of the notification.
- *string* `body` the body text of the notification.
- *double* `timeInSeconds` the duration to wait before triggering the notification.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.ScheduleNotification("Title", "Notification", 120)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void CancelNotification(int id) {cancelnotification-1}
```cs
void CancelNotification(int id)
```
#### Description
[](description-start)
Cancels a notification from the given id. Only works on mobile.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `id` the ID of the notification to cancel.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.CancelNotification(1)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## object GetLastNotificationId() {getlastnotificationid-0}
```cs
object GetLastNotificationId()
```
#### Description
[](description-start)
Returns the last notification ID. Only works on mobile.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local last_notif_id = DCEI.GetLastNotificationId()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ShowSendSMS(int platform) {showsendsms-1}
```cs
void ShowSendSMS(int platform)
```
#### Description
[](description-start)
Shows the SMS invitation screen. Only works on mobile or web builds.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `platform` the platform used to send the SMS. Use 1 for Android and 2 for iOS.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.ShowSendSMS(1)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void RestartApplication() {restartapplication-0}
```cs
void RestartApplication()
```
#### Description
[](description-start)
Restarts the application. Only works on mobile.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.RestartApplication()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void QuitApplication() {quitapplication-0}
```cs
void QuitApplication()
```
#### Description
[](description-start)

[](description-end)

#### Example Usage
[](example-usage-start)

[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetResolution(int width, int height, FullScreenMode mode) {setresolution-3}
```cs
void SetResolution(int width, int height, FullScreenMode mode)
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

## object GetCurrentResolution() {getcurrentresolution-0}
```cs
object GetCurrentResolution()
```
#### Description
[](description-start)

[](description-end)

#### Example Usage
[](example-usage-start)

[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## object GetSupportedResolutions() {getsupportedresolutions-0}
```cs
object GetSupportedResolutions()
```
#### Description
[](description-start)

[](description-end)

#### Example Usage
[](example-usage-start)

[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void OpenUrl(string url) {openurl-1}
```cs
void OpenUrl(string url)
```
#### Description
[](description-start)
Opens a web url in the user's default browser.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `url` the url to open.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.OpenUrl("https://wiki.editor.funovus.com/master/Trigger-API-Reference-DCEI-Functions-Service#void-openurlstring-url")
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void ShareText(string text) {sharetext-1}
```cs
void ShareText(string text)
```
#### Description
[](description-start)
Share some text with other applications. It's up to the other applications to decide how to use the shared text. 
[](description-end)

#### Parameters
[](parameters-start)
- *string* `text` the text to share with other apps.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua

function layout:ShareText()
    local text = "Save social media"
    local hashtag = "#SuperMediaHero"
    local url = "https://www.funovus.com/games/super-media-hero"
    local share_text = text .. " " .. tostring(self.code) .. " " .. hashtag .. " " .. url
    DCEI.ShareText(share_text)
end

```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void RequestAppStoreReview() {requestappstorereview-0}
```cs
void RequestAppStoreReview()
```
#### Description
[](description-start)
Requests an app store review. Only works on iOS devices.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.RequestAppStoreReview()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void RequestInAppReview(Action successCallback, Action failureCallback) {requestinappreview-2}
```cs
void RequestInAppReview(Action successCallback, Action failureCallback)
```
#### Description
[](description-start)
Requests an in-app review. Only works on iOS devices.
[](description-end)

#### Parameters
[](parameters-start)
- *Action* `successCallback` the action that is taken on a successful review.
- *Action* `failureCallback` the action that is taken on a failed review.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.RequestInAppReview(SuccessCallback, FailureCallback)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void GetServerTime(TypedCallback\<int> callback) {getservertime-1}
```cs
void GetServerTime(TypedCallback<int> callback)
```
#### Description
[](description-start)
Attempts to return the server time as the first parameter of a callback function. If it fails, returns 0. 
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback\<int>* `callback` the callback function that handles the server time.

[](parameters-end)

#### Callback Parameters
- *Int32* `time_stamp`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local function ResultCallback( time_stamp )
  if time_stamp and time_stamp ~= 0 then
    -- retrieving server time was successful and time_stamp will be the current unix timestamp
  else
    -- connection failed/timeout
  end
end

DCEI.GetServerTime( ResultCallback )
```
Note that in editor mode, DCEI.GetServerTime() will always return the local os time, using a delay to simulate network latency.

In production, time_stamp can fail or take some time to return and you must account for these cases (player has no internet or is in airplane mode, most games display a "cannot connect to server" message when an offline player tries to do something that requires internet).

Ideally you only need to successfully call DCEI.GetServerTime() once (or once per day).

Say if a daily rewards calendar resets at midnight PST, that you only need to check again after midnight. For other things just use os time or keep track of in-game time.
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void GetServerData(TypedCallback\<object> callback) {getserverdata-1}
```cs
void GetServerData(TypedCallback<object> callback)
```
#### Description
[](description-start)
Fetches from the server a list of key/value pairs configured by designers. Its primary use case is to let designers configure which client version is supported and inform users on old versions to upgrade. To configure these values, make changes to a configs git repo (ask engineers to gain access).
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback\<object>* `callback` the callback function that handles the returned list of key/value pairs.

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local function ResultCallback( data )
  if data then
    -- retrieving server data was successful and `data` will be the server data config table
  else
    -- connection failed/timeout
  end
end

DCEI.GetServerData( ResultCallback )
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void CallServerFunction(string name, string request, TypedCallback\<object> callback) {callserverfunction-3}
```cs
void CallServerFunction(string name, string request, TypedCallback<object> callback)
```
#### Description
[](description-start)
This enables you to call a lua function stored on the server, passing it some data and getting data in return. The primary use case is to combat cheating and hacking especially with PvP game modes. This requires setting up the server script on the backend for an already published game project (like Wild Castle). Most likely, designers would not be utilizing this feature without first discussing the application with the engineering team.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `name` the name of the Lua script on the server to call
- *string* `request` json encoded data to pass to the server function
- *TypedCallback\<object>* `callback` the callback function that handles the returned data

[](parameters-end)

#### Callback Parameters
- *Object* `response`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
https://platform.wildsky.dev/arcade/game/789
```lua
local json = require("json")

local text = DCEI.CreateTextFrame(DCEI.GetUiRootFrame())
DCEI.SetTextFrameText(text, "test server function")

local request = json.encode({value = 1})
DCEI.CallServerFunction("IncreaseByOne", request, function(response)
    if #response == 0 then
        error("IncreaseByOne has failed.")
    end
    local result = json.decode(response)
    DCEI.SetTextFrameText(text, "server result: " .. result.value)
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## string GetUserId() {getuserid-0}
```cs
string GetUserId()
```
#### Description
[](description-start)
Returns the player's internal user ID. This can be simulated in [Play Settings](Data-Play-Settings).
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local user_id = DCEI.GetUserId()
DCEI.LogMessage(user_id)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## string GetUserName() {getusername-0}
```cs
string GetUserName()
```
#### Description
[](description-start)
Returns the player's username.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local user_name = DCEI.GetUserName()
DCEI.LogMessage(user_name)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## string GetUserTag() {getusertag-0}
```cs
string GetUserTag()
```
#### Description
[](description-start)
Returns the player's tag.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
local user_tag = DCEI.GetUserTag()
DCEI.LogMessage(user_tag)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void GetReferralCode(TypedCallback\<object> callback) {getreferralcode-1}
```cs
void GetReferralCode(TypedCallback<object> callback)
```
#### Description
[](description-start)
Get the referral code of the current player. If successful, the callback will be called with a Lua table {code = string, count = number} where code is the referral code and count is the number of players who have used the referral code. The count value should be persisted in the save data. Rewards should be given the player when the server returned count value is larger than the one in save data.
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback\<object>* `callback` the callback function for getting the referral code. If successful, the callback will be called with a Lua table {code = string, count = number} where code is the referral code and count is the number of players who have used the referral code.

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua

function AttemptFetchReferralCode()
    DCEI.GetReferralCode(function(data)
        DCEI.LogMessage("Code:" .. data.code)
        DCEI.LogMessage("Count:" .. data.count)
    end)
end

```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void UseReferralCode(string code, TypedCallback\<object> callback) {usereferralcode-2}
```cs
void UseReferralCode(string code, TypedCallback<object> callback)
```
#### Description
[](description-start)
 Use a referral code from another player. If successful, the callback will be called with a Lua table {code = string, count = number}. The returned referral code should be persisted in save data along with the referral rewards.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `code` the referral code from another player to use.
- *TypedCallback\<object>* `callback` the callback function for getting the referral code. If successful, the callback will be called with a Lua table {code = string, count = number} where code is the referral code and count is the number of players who have used the referral code.

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua

function AttemptFetchReferralCode()
    local stored_code 
    DCEI.GetReferralCode(function(data)
        local stored_code =  data.code
    end)

    DCEI.UseReferralCode(stored_code, function(data)
        DCEI.LogMessage("Code:" .. data.code)
        DCEI.LogMessage("Count:" .. data.count)
    end)
end

```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void GenerateDeepLink(string payload, TypedCallback\<string> callback) {generatedeeplink-2}
```cs
void GenerateDeepLink(string payload, TypedCallback<string> callback)
```
#### Description
[](description-start)

[](description-end)

#### Parameters
[](parameters-start)

[](parameters-end)

#### Callback Parameters
- *String* `url`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)

[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void TriggerAddDeepLinkEvent(TypedCallback\<string> callback) {triggeradddeeplinkevent-1}
```cs
void TriggerAddDeepLinkEvent(TypedCallback<string> callback)
```
#### Description
[](description-start)

[](description-end)

#### Parameters
[](parameters-start)

[](parameters-end)

#### Callback Parameters
- *String* `payload`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)

[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void WildCastleCreateGuild(string guildName, TypedCallback\<object> callback) {wildcastlecreateguild-2}
```cs
void WildCastleCreateGuild(string guildName, TypedCallback<object> callback)
```
#### Description
[](description-start)
Create a new guild. Callback parameter returns the [guild](Guild-System).
[](description-end)

#### Parameters
[](parameters-start)
- *string* `guildName` name of the guild to create
- *TypedCallback\<object>* `callback` the callback function for when the guild is created

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.WildCastleCreateGuild("My new Guild", function(guild) 
    -- "Guild" parameter contains all guild info
    DCEI.LogMessage("Guild Created!)
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void WildCastleLeaveGuild(TypedCallback\<object> callback) {wildcastleleaveguild-1}
```cs
void WildCastleLeaveGuild(TypedCallback<object> callback)
```
#### Description
[](description-start)
Causes player to leave their guild. 
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback\<object>* `callback` the callback function for when the guild is left

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.WildCastleLeaveGuild(function() 
    DCEI.LogMessage("Guild Left!)
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void WildCastlePullGuild(TypedCallback\<object> callback) {wildcastlepullguild-1}
```cs
void WildCastlePullGuild(TypedCallback<object> callback)
```
#### Description
[](description-start)
Pulls player current guild info. Callback parameter returns the [guild](Guild-System).
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback\<object>* `callback` the callback function for when the API is successful

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.WildCastlePullGuild(function(guild) 
    core.LogDump(guild)
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void WildCastleSearchGuild(string guildNameOrTag, TypedCallback\<object> callback) {wildcastlesearchguild-2}
```cs
void WildCastleSearchGuild(string guildNameOrTag, TypedCallback<object> callback)
```
#### Description
[](description-start)
Searches for a guild; return list of possible results. Callback parameter returns table of [guilds](Guild-System).
[](description-end)

#### Parameters
[](parameters-start)
- *string* `guildNameOrTag` the search term to look for
- *TypedCallback\<object>* `callback` the callback function for when the API is successful

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.WildCastleSearchGuild("search term", function(results_table) 
    -- Table of "guild" tables
    core.LogDump(results_table)
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void WildCastleApplyForGuild(string guildId, TypedCallback\<object> callback) {wildcastleapplyforguild-2}
```cs
void WildCastleApplyForGuild(string guildId, TypedCallback<object> callback)
```
#### Description
[](description-start)
Apply to join a certain guild, then guild leader will have to approve/deny. Callback returns true/false result. 
[](description-end)

#### Parameters
[](parameters-start)
- *string* `guildId` guild to apply to
- *TypedCallback\<object>* `callback` the callback function for when the API is successful

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.WildCastleApplyForGuild("Guild Name", function(result) 
    DCEI.LogMessage("API Success!" .. tostring(result))
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void WildCastlePullGuildApplicants(TypedCallback\<object> callback) {wildcastlepullguildapplicants-1}
```cs
void WildCastlePullGuildApplicants(TypedCallback<object> callback)
```
#### Description
[](description-start)
Get list of players who have applied to your guild. Callback parameter returns table of [members](Guild-System#member).
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback\<object>* `callback` the callback function for when the API is successful

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.WildCastlePullGuildApplicants(function(table_of_applicants) 
    DCEI.LogMessage("API Success!")
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void WildCastleResponseToJoinGuild(string targetPlayerUuid, bool accept, TypedCallback\<object> callback) {wildcastleresponsetojoinguild-3}
```cs
void WildCastleResponseToJoinGuild(string targetPlayerUuid, bool accept, TypedCallback<object> callback)
```
#### Description
[](description-start)
Accept/deny a request to join your guild from another user. Passes [guild](Guild-System#guild) result to callback function.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `targetPlayerUuid` the player ID to accept/deny
- *bool* `accept` true to accept, false to deny the guild join request
- *TypedCallback\<object>* `callback` the callback function for when the API is successful

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- User ID should be fetched from DCEI.WildCastlePullGuildApplicants; using a string as example
DCEI.WildCastleResponseToJoinGuild("74fffaca-bb1b-4d15-9037-5ff9abca", false, function(guild) 
    DCEI.LogMessage("API Success!" .. torstring(guild))
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void WildCastleKickOutGuildMember(string targetPlayerUuid, TypedCallback\<object> callback) {wildcastlekickoutguildmember-2}
```cs
void WildCastleKickOutGuildMember(string targetPlayerUuid, TypedCallback<object> callback)
```
#### Description
[](description-start)
Kick a member out of the guild. Passes [guild](Guild-System#guild) result to callback function.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `targetPlayerUuid` the player ID to kick
- *TypedCallback\<object>* `callback` the callback function for when the API is successful

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- User ID should be fetched from some other API; using a string as example
DCEI.WildCastleKickOutGuildMember("74fffaca-bb1b-4d15-9037-5ff9abca", function(guild) 
    DCEI.LogMessage("API Success!" .. tostring(guild))
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void WildCastleUpdateGuildSettings(string announcement, int guildJoinType, TypedCallback\<object> callback) {wildcastleupdateguildsettings-3}
```cs
void WildCastleUpdateGuildSettings(string announcement, int guildJoinType, TypedCallback<object> callback)
```
#### Description
[](description-start)
Update your guild settings. Passes [guild](Guild-System#guild) result to callback function.
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback\<object>* `callback` the callback function for when the API is successful

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- User ID should be fetched from some other API; using a string as example
DCEI.WildCastleUpdateGuildSettings("Annoucement text", 1, function(guild) 
    DCEI.LogMessage("API Success!")
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void WildCastleUpdateGuildBadge(int background, int pattern, int icon, TypedCallback\<object> callback) {wildcastleupdateguildbadge-4}
```cs
void WildCastleUpdateGuildBadge(int background, int pattern, int icon, TypedCallback<object> callback)
```
#### Description
[](description-start)
Update ther player's guild badge. Passes [guild](Guild-System#guild) result to callback function.
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback\<object>* `callback` the callback function for when the API is successful

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.WildCastleUpdateGuildBadge(1, 1, 1, function(guild) 
    DCEI.LogMessage("API Success!")
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void WildCastleUpdatePlayerBadge(int background, int pattern, int icon, TypedCallback\<object> callback) {wildcastleupdateplayerbadge-4}
```cs
void WildCastleUpdatePlayerBadge(int background, int pattern, int icon, TypedCallback<object> callback)
```
#### Description
[](description-start)
Update player badge. Passes [guild](Guild-System#guild) result to callback function.
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback\<object>* `callback` the callback function for when the API is successful

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.WildCastleUpdatePlayerBadge(1, 1, 1, function(guild) 
    DCEI.LogMessage("API Success!")
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void WildCastlePostContribution(int contribution, TypedCallback\<object> callback) {wildcastlepostcontribution-2}
```cs
void WildCastlePostContribution(int contribution, TypedCallback<object> callback)
```
#### Description
[](description-start)
Post player contribution to the guild board. Passes [guild](Guild-System#guild) result to callback function.
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback\<object>* `callback` the callback function for when the API is successful

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.WildCastlePostContribution(253, function(guild) 
    DCEI.LogMessage("API Success!")
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void WildCastlePromoteGuildMember(string targetPlayerUuid, TypedCallback\<object> callback) {wildcastlepromoteguildmember-2}
```cs
void WildCastlePromoteGuildMember(string targetPlayerUuid, TypedCallback<object> callback)
```
#### Description
[](description-start)
Promote guild member to higher rank. Passes [guild](Guild-System#guild) result to callback function.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `targetPlayerUuid` player's ID
- *TypedCallback\<object>* `callback` the callback function for when the API is successful

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- User ID should be fetched from some other API; using a string as example
DCEI.WildCastlePromoteGuildMember("24324-33fs-34wdsf", function(guild) 
    DCEI.LogMessage("API Success!")
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void WildCastleDemoteGuildMember(string targetPlayerUuid, TypedCallback\<object> callback) {wildcastledemoteguildmember-2}
```cs
void WildCastleDemoteGuildMember(string targetPlayerUuid, TypedCallback<object> callback)
```
#### Description
[](description-start)
Demote rank of guild member. Passes [guild](Guild-System#guild) result to callback function.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `targetPlayerUuid` player's ID
- *TypedCallback\<object>* `callback` the callback function for when the API is successful

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- User ID should be fetched from some other API; using a string as example
DCEI.WildCastleDemoteGuildMember("24324-33fs-34wdsf", function(guild) 
    DCEI.LogMessage("API Success!")
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void WildCastleUpdateGuildSkill(string key, int level, TypedCallback\<object> callback) {wildcastleupdateguildskill-3}
```cs
void WildCastleUpdateGuildSkill(string key, int level, TypedCallback<object> callback)
```
#### Description
[](description-start)
Update skill ranking of specified guild. Passes [guild](Guild-System#guild) result to callback function.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `key` the name of the guild to update
- *int* `level` skill level to set the guild to
- *TypedCallback\<object>* `callback` the callback function for when the API is successful

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- User ID should be fetched from some other API; using a string as example
DCEI.WildCastleUpdateGuildSkill("My Guild Name", 254, function(guild) 
    DCEI.LogMessage("API Success!")
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void WildCastlePullMessages(int limit, TypedCallback\<object> callback) {wildcastlepullmessages-2}
```cs
void WildCastlePullMessages(int limit, TypedCallback<object> callback)
```
#### Description
[](description-start)
Pull chat messages for the player's guild. Passes table of [messages](Guild-System#message) result to callback function.
[](description-end)

#### Parameters
[](parameters-start)
- *int* `limit` number of chat messages to pull
- *TypedCallback\<object>* `callback` the callback function for when the API is successful

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.WildCastlePullMessages(15, function(results_table) 
    for k, v in pairs (results_table) do
        DCEI.LogMessage("Message " .. k .. ":" .. v)
    end
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void WildCastleClaimPuzzleChest(Dictionary\<string, int> items, TypedCallback\<object> callback) {wildcastleclaimpuzzlechest-2}
```cs
void WildCastleClaimPuzzleChest(Dictionary<string, int> items, TypedCallback<object> callback)
```
#### Description
[](description-start)
Claim a chest puzzle. Passes [inventory](Guild-System#inventory) result to callback function.
[](description-end)

#### Parameters
[](parameters-start)
- *Dictionary\<string, int>* `items` possile puzzle items to unlock
- *TypedCallback\<object>* `callback` the callback function for when the API is successful

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.WildCastleClaimPuzzleChest({ puzzle1 = 1, puzzle2 = 2}, function(inventory) 
    for k, v in pairs (inventory) do
        DCEI.LogMessage("Puzzle " .. k .. ":" .. v)
    end
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void WildCastleSendItemsToPlayer(string targetPlayerUuid, Dictionary\<string, int> items, TypedCallback\<object> callback) {wildcastlesenditemstoplayer-3}
```cs
void WildCastleSendItemsToPlayer(string targetPlayerUuid, Dictionary<string, int> items, TypedCallback<object> callback)
```
#### Description
[](description-start)
Player send items to another player. Passes [inventory](Guild-System#inventory) result to callback function.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `targetPlayerUuid` player's ID to send the items to
- *Dictionary\<string, int>* `items` items to send
- *TypedCallback\<object>* `callback` the callback function for when the API is successful

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- User ID should be fetched from some other API; using a string as example
DCEI.WildCastleSendItemsToPlayer("24324-33fs-34wdsf", { item1 = 1, item2 = 2}, function(inventory) 
    DCEI.LogMessage("API Success!")
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void RegisterWildCastleCreateGuildCallback(TypedCallback\<object> callback) {registerwildcastlecreateguildcallback-1}
```cs
void RegisterWildCastleCreateGuildCallback(TypedCallback<object> callback)
```
#### Description
[](description-start)
Register a callback to occur any time a guild is created. Passes [guild](Guild-System#guild) result to callback function.
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback\<object>* `callback` the callback function for when the API is successful

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.RegisterWildCastleCreateGuildCallback(function(guild) 
    DCEI.LogMessage("Guild Created")
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void RegisterWildCastleClaimPuzzleChestCallback(TypedCallback\<object> callback) {registerwildcastleclaimpuzzlechestcallback-1}
```cs
void RegisterWildCastleClaimPuzzleChestCallback(TypedCallback<object> callback)
```
#### Description
[](description-start)
Register a callback to occur any time a puzzle chest is claimed. Passes [inventory](Guild-System#inventory) result to callback function.
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback\<object>* `callback` the callback function for when the API is successful

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.RegisterWildCastleClaimPuzzleChestCallback(function(inventory) 
    DCEI.LogMessage("Puzzle Chest Created")
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void RegisterWildCastleSendItemsToPlayerCallback(TypedCallback\<object> callback) {registerwildcastlesenditemstoplayercallback-1}
```cs
void RegisterWildCastleSendItemsToPlayerCallback(TypedCallback<object> callback)
```
#### Description
[](description-start)
Register a callback to occur any time a player sends items. Passes [inventory](Guild-System#inventory) result to callback function.
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback\<object>* `callback` the callback function for when the API is successful

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.RegisterWildCastleSendItemsToPlayerCallback(function(inventory) 
    DCEI.LogMessage("Items Sent!")
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void StandaloneGetItemInventory(string key, TypedCallback\<object> callback) {standalonegetiteminventory-2}
```cs
void StandaloneGetItemInventory(string key, TypedCallback<object> callback)
```
#### Description
[](description-start)
Get quantity of a certain item type from players inventory. Passes [item](Guild-System#item) result to callback function.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `key` the key for the type of item to fetch quantity from player's inventory
- *TypedCallback\<object>* `callback` the callback function for when the API is successful

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.StandaloneGetItemInventory("item_key", function(item) 
    DCEI.LogMessage("Quantity: " .. tostring(item))
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void StandaloneGetUserItemInventory(TypedCallback\<object> callback) {standalonegetuseriteminventory-1}
```cs
void StandaloneGetUserItemInventory(TypedCallback<object> callback)
```
#### Description
[](description-start)
Get player's complete inventory. Passes [inventory](Guild-System#inventory) result to callback function.
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback\<object>* `callback` the callback function for when the API is successful

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.StandaloneGetUserItemInventory(function(inventory_table) 
    for k, v in pairs(inventory_table) do
        DCEI.LogMessage("Item " .. k .. " quantity: " .. v)
    end
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void WildCastlePostRequestItemMessage(string key, int value, int limit, TypedCallback\<object> callback) {wildcastlepostrequestitemmessage-4}
```cs
void WildCastlePostRequestItemMessage(string key, int value, int limit, TypedCallback<object> callback)
```
#### Description
[](description-start)
Post a message to the players guild requesting an item. Passes table of [messages](Guild-System#message) result to callback function.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `key` key for item type to request
- *int* `value` number of items to ask for
- *int* `limit` maximum amount to recieve
- *TypedCallback\<object>* `callback` the callback function for when the API is successful

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.WildCastlePostRequestItemMessage("item1", 6, 10, function() 
    DCEI.LogMessage("API Success!")
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void WildCastlePostGuildChatMessage(string content, TypedCallback\<object> callback) {wildcastlepostguildchatmessage-2}
```cs
void WildCastlePostGuildChatMessage(string content, TypedCallback<object> callback)
```
#### Description
[](description-start)
Send a player message to the player's guild chat. 
[](description-end)

#### Parameters
[](parameters-start)
- *string* `content` message content to send
- *TypedCallback\<object>* `callback` the callback function for when the API is successful

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.WildCastlePostGuildChatMessage("Hey guys, new to the guild!", function() 
    DCEI.LogMessage("API Success!")
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void StandalonePostChatMessage(string targetPlayerUuid, string content, TypedCallback\<object> callback) {standalonepostchatmessage-3}
```cs
void StandalonePostChatMessage(string targetPlayerUuid, string content, TypedCallback<object> callback)
```
#### Description
[](description-start)
Send a player message directly to another player
[](description-end)

#### Parameters
[](parameters-start)
- *string* `targetPlayerUuid` player's ID to send the message to
- *string* `content` message content to send
- *TypedCallback\<object>* `callback` the callback function for when the API is successful

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- User ID should be fetched from some other API; using a string as example
local user_id = "3423sa-324aa-3787gg"
DCEI.StandalonePostChatMessage(user_id, "Hello friend!", function() 
    DCEI.LogMessage("API Success!")
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void StandalonePullChatMessages(string targetPlayerUuid, int limit, TypedCallback\<object> callback) {standalonepullchatmessages-3}
```cs
void StandalonePullChatMessages(string targetPlayerUuid, int limit, TypedCallback<object> callback)
```
#### Description
[](description-start)
Pull player chat messages (direct messages) returned as a lua table of messages. 
[](description-end)

#### Parameters
[](parameters-start)
- *string* `targetPlayerUuid` player's ID to get the messages for
- *int* `limit` number of chat messages to pull
- *TypedCallback\<object>* `callback` the callback function for when the API is successful

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
-- User ID should be fetched from some other API; using a string as example
local user_id = "3423sa-324aa-3787gg"
DCEI.StandalonePullChatMessages(user_id, 15, function(results_table) 
    for k, v in pairs (results_table) do
        DCEI.LogMessage("Message " .. k .. ":" .. v)
    end
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void StandaloneRegisterOnReceiveMessageCallback(TypedCallback\<object> callback) {standaloneregisteronreceivemessagecallback-1}
```cs
void StandaloneRegisterOnReceiveMessageCallback(TypedCallback<object> callback)
```
#### Description
[](description-start)
Register a callback to run when the player recieves a message. 
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback\<object>* `callback` the callback function for when the API is successful

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.StandaloneRegisterOnReceiveMessageCallback(function() 
    DCEI.LogMessage("Message received")
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void GetLeaderBoardScore(string type, TypedCallback\<object> callback) {getleaderboardscore-2}
```cs
void GetLeaderBoardScore(string type, TypedCallback<object> callback)
```
#### Description
[](description-start)
Attempts to fetch the leaderboard score for the player as the first parameter in the callback function.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `type` the leaderboard score to fetch.
- *TypedCallback\<object>* `callback` the callback function to handle the score.

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.GetLeaderBoardScore("type1", function(result)
    DCEI.LogMessage(string.format("Group: %i\nPayload: %s\nRank: %i\nScore: %i,\nUUID: %s\n", result.group, result.payload, result.rank, result.score, result.uuid) .. os.date("%x", result.time))
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void GetLeaderBoardScoreList(string type, int skip, int limit, TypedCallback\<object> callback) {getleaderboardscorelist-4}
```cs
void GetLeaderBoardScoreList(string type, int skip, int limit, TypedCallback<object> callback)
```
#### Description
[](description-start)
Attempts to fetch the leaderboard score list as the first parameter in the callback function, from the given parameters.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `type` the leaderboard score to fetch.
- *int* `skip` the number of entries to skip.
- *int* `limit` the number of entries to return after the skip.
- *TypedCallback\<object>* `callback` the callback function to handle the score list.

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local my_record
DCEI.GetLeaderBoardScore("type1", function(result)
    my_record = result
end)
-- Results will start at the previous multiple of 10.
local skip = math.floor((my_record.rank - 1) / 10) * 10
-- Obtain the next 10 results.
local limit = 10;

DCEI.GetLeaderBoardScoreList("type1", skip, limit, function(result)
    local text = string.format("Group %s\n", GetGroupName(result.group))
    for _, user in ipairs(result.users) do
        -- Highlight myself.
        if user.uuid == myid then
            text = text .. "<color=red>" .. Format(user) .. "</color>".. "\n"
        else
            text = text .. Format(user) .. "\n"
        end
    end
    DCEI.LogMessage(text)
end)

function Format(record)
    return string.format("Rank %d, Score %f, User %s, %s", record.rank, record.score, record.uuid, record.payload)
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void GetLeaderBoardSurroundingUsers(string type, int count, TypedCallback\<object> callback) {getleaderboardsurroundingusers-3}
```cs
void GetLeaderBoardSurroundingUsers(string type, int count, TypedCallback<object> callback)
```
#### Description
[](description-start)
Attempts to fetch the leaderboard scores for the current player and the users surrounding them, as the first parameter of the callback function.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `type` the leaderboard to fetch from.
- *int* `count` the number of users to return, including the player themselves.
- *TypedCallback\<object>* `callback` the callback function to handle the score list.

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua

local my_record
DCEI.GetLeaderBoardScore("type1", function(result)
    my_record = result
end)
-- Results will start at the previous multiple of 10.
local skip = math.floor((my_record.rank - 1) / 10) * 10
-- Obtain the next 10 results.
local limit = 10;

DCEI.GetLeaderBoardSurroundingUsers("type1", 3, function(result)
    local text = string.format("Group %s\n", GetGroupName(result.group))
    for _, user in ipairs(result.users) do
        -- Highlight myself.
        if user.uuid == myid then
            text = text .. "<color=red>" .. Format(user) .. "</color>".. "\n"
        else
            text = text .. Format(user) .. "\n"
        end
    end
    DCEI.LogMessage(text)
end)

function Format(record)
    return string.format("Rank %d, Score %f, User %s, %s", record.rank, record.score, record.uuid, record.payload)
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void GetLeaderBoardUserScores(string type, List\<string> uuids, TypedCallback\<object> callback) {getleaderboarduserscores-3}
```cs
void GetLeaderBoardUserScores(string type, List<string> uuids, TypedCallback<object> callback)
```
#### Description
[](description-start)
Returns leader board info for a list of users. Leader board entries returned by leader board APIs now have two additional fields: tag and name.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `type` the leaderboard to fetch from.
- *List\<string>* `uuids` players' uuids
- *TypedCallback\<object>* `callback` the callback function to handle the score list.

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```Lua
local function ResultCallback(result)
    if result then
        -- update player's data, only when player has network
        local self_data = player.race_event.players[1]
        self_data.cur_score = wave.data.GetMax()
        -- fake some data
        -- self_data.cur_score = self_data.cur_score + math.random(30, 40)
        for n, user in ipairs(result.users) do
            for i = 2, player_count do
                local other_player = player.race_event.players[i]
                if other_player.uuid == user.uuid then
                    other_player.cur_score = math.floor(user.score)
                    -- fake some data
                    -- other_player.cur_score = other_player.cur_score + math.random(20, 30)
                    break
                end
            end
        end
        local temp_list = {}
        local start_rank = 0
        local finish_num = 0
        local total_progress = 0
        for i = 1, player_count do
            local player_data = player.race_event.players[i]
            if player_data.finish then
                start_rank = start_rank + 1
                finish_num = finish_num + 1
            else
                local progress_increment = player_data.cur_score - player_data.prev_score
                local cur_progress = player_data.progress + progress_increment
                if player.race_event.team_event then
                    total_progress = total_progress + cur_progress
                else
                    if cur_progress >= RACE_EVENT_TOTAL_PROGRESS then
                        cur_progress = RACE_EVENT_TOTAL_PROGRESS
                        player_data.finish = true
                        finish_num = finish_num + 1
                    end
                end
                local temp_data = {
                    id = i,
                    progress = cur_progress
                }
                table.insert(temp_list, temp_data)
            end
        end
        if #temp_list > 0 then
            local function sort_by_progress(a, b)
                if a.progress == b.progress then
                    return a.id < b.id
                else
                    return a.progress > b.progress
                end
            end
            table.sort(temp_list, sort_by_progress)
            for i = 1, #temp_list do
                local id = temp_list[i].id
                player.race_event.players[id].rank = start_rank + i
            end
        end
        if player.race_event.team_event then
            player.race_event.total_progress = total_progress
            if total_progress >= TEAM_EVENT_TOTAL_PROGRESS then
                player.race_event.event_set = true
                if self_data.rank <= 3 then
                    player.race_event.rank_reward = self_data.rank
                end
            end
        else
            if self_data.finish and self_data.rank <= 3 then
                player.race_event.rank_reward = self_data.rank
                player.race_event.event_set = true
            end
            if finish_num >= 3 then
                player.race_event.event_set = true
            end
        end
        Bank:CommitRaceEvent()
    end
    ui.race_event_banner.fetching = false
end
DCEI.LogMessage("Fetching Race event data")
DCEI.GetLeaderBoardUserScores("default", uuid_list, ResultCallback)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void InitializeInAppPurchaseWithProductId(TypedCallback\<string> purchaseCallback, List\<string> productIds, TypedCallback\<bool> initializationCallback = default) {initializeinapppurchasewithproductid-3}
```cs
void InitializeInAppPurchaseWithProductId(TypedCallback<string> purchaseCallback, List<string> productIds, TypedCallback<bool> initializationCallback = default)
```
#### Description
[](description-start)
Initializes an in-app purchase. This will pass the product IDs to both callback functions.
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback\<string>* `purchaseCallback` the callback function on a successful purchase.
- *List\<string>* `productIds` a table containing the in-app product IDs.
- *TypedCallback\<bool>* `initializationCallback` the callback function for

[](parameters-end)

#### Callback Parameters
- *String* `product_id`
- *Boolean* `success`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.InitializeInAppPurchaseWithProductId(PurchaseCallback, {"prod_1", "prod_2"}, InitCallback)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void InitializeInAppPurchaseWithProductData(TypedCallback\<string> purchaseCallback, CustomIapProductData customIapProductData, TypedCallback\<bool> initializationCallback = default) {initializeinapppurchasewithproductdata-3}
```cs
void InitializeInAppPurchaseWithProductData(TypedCallback<string> purchaseCallback, CustomIapProductData customIapProductData, TypedCallback<bool> initializationCallback = default)
```
#### Description
[](description-start)
Initializes an in-app purchase. This will pass the product's ID to both callback functions.
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback\<string>* `purchaseCallback` the callback function on a successful purchase.
- *CustomIapProductData* `customIapProductData` the custom in-app product data to be purchased.
- *TypedCallback\<bool>* `initializationCallback` the callback function for initialization.

[](parameters-end)

#### Callback Parameters
- *String* `product_id`
- *Boolean* `success`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local product_list = DCEI.CreateCustomIapProductData()
DCEI.InitializeInAppPurchaseWithProductData(PurchaseCallback, product_list, InitCallback)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void PurchaseIapProduct(string productId) {purchaseiapproduct-1}
```cs
void PurchaseIapProduct(string productId)
```
#### Description
[](description-start)
Begin the purchase of an in-app product. If successful, it will call the `InitializeInAppPurchase` from `DCEI.InitializeInAppPurchase()` with the product id as the first parameter. Typically used in conjunction with the [IAP Shop Mod](https://wiki.funovus.com/master/Mods-IAP-Shop-Mod). 
[](description-end)

#### Parameters
[](parameters-start)
- *string* `productId` the ID of the product to be purchased.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local function AttemptAnyItemPurchase(product_id, on_success)
    -- Typically, we first determine if the store purchase is real money or in-game currency
    if in_game_money then
        -- This would contain separate logic for handing purchases with in-game currency (gold, gems)
        -- As this doesn't need to communicate with vendor (iOS store, google play store)
    else
        -- mark purchase type as IAP
        -- purchase isn't logged here as it can fail during the DCEI.PurchaseIapProduct process
        IS_PURCHASE_IAP = true

        -- standard IAP flow
        if Util.IsPlayingEditorMode() then
            -- simulate purchase in editor
            Shop.OnAnyItemPurchase(product_id)
        else
            DCEI.PurchaseIapProduct(product_id)
        end
    end

    -- DEBUG
    DCEI.LogWarning("> on attempt purchase [ " .. tostring(product_id) .. "]")
end

-- INITIALIZE
local function InitializeShop()
    -- Initializing the shop, we us the above `AttemptAnyItemPurchase` as the `on_purchase_attempt_callback` parameter
    Shop.InitializeIAP({
        on_purchase_attempt_callback = AttemptAnyItemPurchase,
        on_purchase_success_callback = OnAnyItemPurchase,
        product_list = product_list,
        currency_list = currency_list,
        rows_to_load_instantly = 3,
    })
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## string GetIapProductLocalizedPrice(string productId) {getiapproductlocalizedprice-1}
```cs
string GetIapProductLocalizedPrice(string productId)
```
#### Description
[](description-start)
Returns the in-app product's localized price, given its ID.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `productId` the ID of the product to return the localized price of.

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local localized_price = DCEI.GetIapProductLocalizedPrice(product_id)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void PostLeaderBoardScore(string type, double score, string payload, int spentGems, TypedCallback\<object> callback) {postleaderboardscore-5}
```cs
void PostLeaderBoardScore(string type, double score, string payload, int spentGems, TypedCallback<object> callback)
```
#### Description
[](description-start)
Attempts to post the player's score to the given leaderboard.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `type` the leaderboard to post to.
- *double* `score` the score to post.
- *string* `payload` any additional information.
- *int* `spentGems` the amount of gems spent as part of an anti-cheat measure.
- *TypedCallback\<object>* `callback` the callback function that handles a return. Passes the user's leaderboard score as per [GetLeaderBoardScore](Trigger-API-Reference-DCEI-Functions-Service#getleaderboardscore-2) as a parameter.

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
local my_score = math.random(1, 100)
local my_record

DCEI.PostLeaderBoardScore("type1", my_score, "I'm here", 0, function(result)
    my_record = result
end)

```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void SetUserName(string name, TypedCallback\<int> callback) {setusername-2}
```cs
void SetUserName(string name, TypedCallback<int> callback)
```
#### Description
[](description-start)
Attempts to set a player's username.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `name` the new username to assign to the player.
- *TypedCallback\<int>* `callback` the callback function that is run after the name is changed. Passes the number of times the player has changed their username as a parameter.

[](parameters-end)

#### Callback Parameters
- *Int32* `rename_count`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function OnMapStart()
    DCEI.SetUserName("Username", function(result)
        local user_name = DCEI.GetUserName()
        DCEI.LogMessage(user_name)
        DCEI.LogMessage(result)
    end)
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

