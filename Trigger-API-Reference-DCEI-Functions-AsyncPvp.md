<div id="toc" markdown="1">
- [Trigger API Reference\DCEI Functions\AsyncPvp](#trigger-api-referencedcei-functionsasyncpvp)
  * [AsyncPvp.GetCurrentSeasonInfo](#getcurrentseasoninfo-1)
  * [AsyncPvp.GetCurrentUserInfo](#getcurrentuserinfo-2)
  * [AsyncPvp.SetDefenseBoard](#setdefenseboard-3)
  * [AsyncPvp.GetDefenseHistory](#getdefensehistory-2)
  * [AsyncPvp.SetDefenseProtectionTime](#setdefenseprotectiontime-3)
  * [AsyncPvp.NewSession](#newsession-2)
  * [AsyncPvp.SwitchOpponent](#switchopponent-2)
  * [AsyncPvp.FinishOpponent](#finishopponent-4)
  * [AsyncPvp.FinishOpponent](#finishopponent-3)
  * [AsyncPvp.UseBotOpponent](#usebotopponent-3)
  * [AsyncPvp.FinishSession](#finishsession-2)
  * [AsyncPvp.GetLeaderBoard](#getleaderboard-3)
  * [AsyncPvp.GetDailyRankHistory](#getdailyrankhistory-2)

</div>

***

# [Trigger API Reference](Trigger-API-Reference)\\DCEI Functions\AsyncPvp {Trigger-API-ReferenceDCEI-FunctionsAsyncPvp}

[](overview-start)

[](overview-end)

## void AsyncPvp.GetCurrentSeasonInfo(TypedCallback\<object> callback) {getcurrentseasoninfo-1}
```cs
void AsyncPvp.GetCurrentSeasonInfo(TypedCallback<object> callback)
```
#### Description
[](description-start)
Returns the latest season information in a Lua table, formatted as:
```lua
{
  id = string,
  status = number, -- 0 => not started, 1 => running, 2 => finished
  start_time = seconds since unix epoch,
  end_time = seconds since unix epoch,
  next_season_start_time = seconds since unix epoch, -- set when status is 2.
}
```
You can use Lua “os.time” to get the current time in seconds from unix epoch and compare it against the start/end time to know how long the season has started and how long it will end. Use Lua “os.date” to format the time into human-readable strings.

The season “id” returned from this API is required for all following `AsyncPvp` API calls
[](description-end)

#### Parameters
[](parameters-start)
- *TypedCallback\<object>* `callback` the callback function to handle the returned season info.

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
Demo map with source code: https://platform.wildsky.dev/arcade/game/775
```lua
DCEI.AsyncPvp.GetCurrentSeasonInfo(function(result)
    season = result
    season_info:SetSeasonInfo(season)
    DCEI.AsyncPvp.GetCurrentUserInfo(season.id, function(result)
        user_info:SetUserInfo(result)
        if result.board == nil or #result.board == 0 then
            DCEI.AsyncPvp.SetDefenseBoard(season.id, string.format("b%s", DCEI.GetUserTag()), function()
                self:Refresh()
            end)
        else
            DCEI.AsyncPvp.GetLeaderBoard(season.id, "season", function(result)
                season_leader_board:SetLeaderBoard("season", result.players)
            end)
            DCEI.AsyncPvp.GetLeaderBoard(season.id, "today", function(result)
                daily_leader_board:SetLeaderBoard("today", result.players)
            end)
        end
    end)
    session_info:ClearSessionInfo()
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void AsyncPvp.GetCurrentUserInfo(string season, TypedCallback\<object> callback) {getcurrentuserinfo-2}
```cs
void AsyncPvp.GetCurrentUserInfo(string season, TypedCallback<object> callback)
```
#### Description
[](description-start)
The season id from `AsyncPvp.GetCurrentSeasonInfo` is required. This API returns the info about the current user in the specified season:
```lua
{
  elo = number,
  board = string, -- You may want to check if board is empty or not
  season_rank = number,
  daily_rank = number,
}
```
Each user belongs to a group; both season rank and daily rank are for that group. The group info is transparent to the users, and client APIs do not include that info.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `season` The season id from `AsyncPvp.GetCurrentSeasonInfo`
- *TypedCallback\<object>* `callback` the callback function to handle the returned user info.

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
Demo map with source code: https://platform.wildsky.dev/arcade/game/775
```lua
DCEI.AsyncPvp.GetCurrentSeasonInfo(function(result)
    season = result
    season_info:SetSeasonInfo(season)
    DCEI.AsyncPvp.GetCurrentUserInfo(season.id, function(result)
        user_info:SetUserInfo(result)
        if result.board == nil or #result.board == 0 then
            DCEI.AsyncPvp.SetDefenseBoard(season.id, string.format("b%s", DCEI.GetUserTag()), function()
                self:Refresh()
            end)
        else
            DCEI.AsyncPvp.GetLeaderBoard(season.id, "season", function(result)
                season_leader_board:SetLeaderBoard("season", result.players)
            end)
            DCEI.AsyncPvp.GetLeaderBoard(season.id, "today", function(result)
                daily_leader_board:SetLeaderBoard("today", result.players)
            end)
        end
    end)
    session_info:ClearSessionInfo()
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void AsyncPvp.SetDefenseBoard(string season, string board, TypedCallback\<object> callback) {setdefenseboard-3}
```cs
void AsyncPvp.SetDefenseBoard(string season, string board, TypedCallback<object> callback)
```
#### Description
[](description-start)
Set the defense board of the user. The API returns an empty table when successful.

A new user can only start to participate in async-pvp after they set a defense board. Before that, they can’t start async-pvp sessions, can’t be attacked by others, and won’t appear in the leaderboards. 
[](description-end)

#### Parameters
[](parameters-start)
- *string* `season` The season id from `AsyncPvp.GetCurrentSeasonInfo`
- *string* `board` An arbitrary string to assign to the player; the server doesn't do anything with this besides return it with the other player info in other APIs. Use this to store player-specific info that your own Lua script interprets, such as a players card collection, army layout, or board arrangement.
- *TypedCallback\<object>* `callback` the callback function to handle the returned user info. Results parameter includes `next_season_start_time`  field if the current season has finished.

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
Demo map with source code: https://platform.wildsky.dev/arcade/game/775
```lua
DCEI.AsyncPvp.GetCurrentSeasonInfo(function(result)
    season = result
    season_info:SetSeasonInfo(season)
    DCEI.AsyncPvp.GetCurrentUserInfo(season.id, function(result)
        user_info:SetUserInfo(result)
        if result.board == nil or #result.board == 0 then
            DCEI.AsyncPvp.SetDefenseBoard(season.id, string.format("b%s", DCEI.GetUserTag()), function()
                self:Refresh()
            end)
        else
            DCEI.AsyncPvp.GetLeaderBoard(season.id, "season", function(result)
                season_leader_board:SetLeaderBoard("season", result.players)
            end)
            DCEI.AsyncPvp.GetLeaderBoard(season.id, "today", function(result)
                daily_leader_board:SetLeaderBoard("today", result.players)
            end)
        end
    end)
    session_info:ClearSessionInfo()
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void AsyncPvp.GetDefenseHistory(string season, TypedCallback\<object> callback) {getdefensehistory-2}
```cs
void AsyncPvp.GetDefenseHistory(string season, TypedCallback<object> callback)
```
#### Description
[](description-start)

[](description-end)

#### Parameters
[](parameters-start)

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)

[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void AsyncPvp.SetDefenseProtectionTime(string season, int timestamp, TypedCallback\<object> callback) {setdefenseprotectiontime-3}
```cs
void AsyncPvp.SetDefenseProtectionTime(string season, int timestamp, TypedCallback<object> callback)
```
#### Description
[](description-start)

[](description-end)

#### Parameters
[](parameters-start)

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)

[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void AsyncPvp.NewSession(string season, TypedCallback\<object> callback) {newsession-2}
```cs
void AsyncPvp.NewSession(string season, TypedCallback<object> callback)
```
#### Description
[](description-start)
This API should only be called when the season is still active.

Start a new async-pvp session. This API returns the following:

```lua
{
  id = string,
  start_time = seconds since unix epoch,
  finished_opponents = number,
  current_opponent = {
    uuid = string, tag = string, name = string, elo = number, board = string
  }
}
```

The server will create a new session and find the first opponent to return in the “current_opponent” field. The opponent will be selected based on the server’s async-pvp configuration and the position of the opponent. If no opponent can be found, the “current_opponent” field will be nil.

NOTE: if a session hasn’t been finished with the FinishSeason API, NewSession() will return that session instead of creating a new one. The “finished_opponents” field will be set to the number of finished matches so the client knows how many matches are left.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `season` The season id from `AsyncPvp.GetCurrentSeasonInfo`
- *TypedCallback\<object>* `callback` the callback function to handle the returned session data.

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
Demo map with source code: https://platform.wildsky.dev/arcade/game/775
```lua
DCEI.SetOnClickCallback(refresh_button, function()
    self:Refresh()
end)
session_info:SetCallbacks(function()
    DCEI.AsyncPvp.NewSession(season.id, function(result)
        session = result
        session_info:SetSessionInfo(session)
    end)
end, function()
    DCEI.AsyncPvp.FinishSession(session.id, {1, 1, 1, -1, 0}, function(result)
        session_info:ClearSessionInfo()
        self:Refresh()
    end)
end)
self:Refresh()
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void AsyncPvp.SwitchOpponent(string session, TypedCallback\<object> callback) {switchopponent-2}
```cs
void AsyncPvp.SwitchOpponent(string session, TypedCallback<object> callback)
```
#### Description
[](description-start)
If the player doesn’t like the current selected opponent, the client can call this API to select a different opponent.

```lua
{
  opponent = {
    uuid = string, tag = string, name = string, elo = number, board = string
  }
}
```

Similar to NewSession, the “opponent” field may be nil if the server can’t find a match (e.g., the client has called this API many times and all available opponents have been skipped).
[](description-end)

#### Parameters
[](parameters-start)
- *string* `session` The session id
- *TypedCallback\<object>* `callback` the callback function to handle the returned session data.

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.AsyncPvp.SwitchOpponent(
    session_info.id,
    function(result)
        session_info.current_opponent = result.opponent
        controller:SetSessionInfo(session_info)
    end
)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void AsyncPvp.FinishOpponent(string session, int result, string payload, TypedCallback\<object> callback) {finishopponent-4}
```cs
void AsyncPvp.FinishOpponent(string session, int result, string payload, TypedCallback<object> callback)
```
#### Description
[](description-start)

[](description-end)

#### Parameters
[](parameters-start)

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)

[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void AsyncPvp.FinishOpponent(string session, int result, TypedCallback\<object> callback) {finishopponent-3}
```cs
void AsyncPvp.FinishOpponent(string session, int result, TypedCallback<object> callback)
```
#### Description
[](description-start)
Use this API to send the result of a match. This should only be called if the current opponent is not nil. The “result” parameter is a number. 1 = win, -1 = lose, 0 = other.

The server will return the following in the callback:

```lua
{
  next_opponent = {
    uuid = string, tag = string, name = string, elo = number, board = string
  }
}
```

The server will return a Lua table {next_opponent={uuid, tag, name, board, elo}}. If there are no more matches or no opponents can be found, "next_opponent" will be nil.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `session` The session id
- *int* `result` The result of the match.  1 = win, -1 = lose, 0 = other.
- *TypedCallback\<object>* `callback` the callback function to handle the returned session data.

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.AsyncPvp.FinishOpponent(
    session_info.id,
    -1,
    function(result)
        session_info.finished_opponents = session_info.finished_opponents + 1
        session_info.current_opponent = result.next_opponent
        controller:SetSessionInfo(session_info)
    end
)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void AsyncPvp.UseBotOpponent(string session, AsyncPvpBot bot, TypedCallback\<object> callback) {usebotopponent-3}
```cs
void AsyncPvp.UseBotOpponent(string session, AsyncPvpBot bot, TypedCallback<object> callback)
```
#### Description
[](description-start)
If the server cannot find an opponent for the player, the client should generate a bot and use this API to send the bot info to the server. The “bot” parameter should be a Lua table in the following format:

```lua
{
   uuid = string, tag = string, name = string, elo = number, board = string
}
```

The “uuid” field must have the prefix “bot:” for the server to distinguish the generated bot from actual players.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `session` The session id
- *[AsyncPvpBot](Trigger-API-Reference-DCEI-Types#asyncpvpbot)* `bot` The bot table of info: `{ uuid = string, tag = string, name = string, elo = number, board = string }`
- *TypedCallback\<object>* `callback` the callback function to handle the returned session data.

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.AsyncPvp.UseBotOpponent(
    session_info.id,
    bot,
    function(result)
        if not result then
            return
        end
        session_info.current_opponent = bot
        controller:SetSessionInfo(session_info)
    end
)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void AsyncPvp.FinishSession(string session, TypedCallback\<object> callback) {finishsession-2}
```cs
void AsyncPvp.FinishSession(string session, TypedCallback<object> callback)
```
#### Description
[](description-start)
This API should only be called when the season is still active.

Finish a session and apply elo rating changes. This can be called anytime as long as the session and season are both active. Usually you will call it after finishing 5 matches, but it can also be called sooner (e.g., when the user decide to quit the remaining matches).

The API will returned a Lua table with the updated elo for the current user: {elo = number}.

NOTE: if a session has timed out, it’s up to the client to report the result with FinishSession. The server doesn’t enforce any session timeout rules (except that when the season has finished).
[](description-end)

#### Parameters
[](parameters-start)
- *string* `session` The session id
- *TypedCallback\<object>* `callback` the callback function to handle the returned session data.

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
```lua
DCEI.AsyncPvp.FinishSession(session.id, function()
    session_info:ClearSessionInfo()
    self:Refresh()
end)
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void AsyncPvp.GetLeaderBoard(string season, string type, TypedCallback\<object> callback) {getleaderboard-3}
```cs
void AsyncPvp.GetLeaderBoard(string season, string type, TypedCallback<object> callback)
```
#### Description
[](description-start)
Get the top 50 players of the season that belong to the same group as the current user. `type` can be either “season” or “today” to get the season leaderboard or daily leaderboard. Note that the daily leaderboard resets at the same time as the season start time (e.g., if each season starts at 7:00 AM, the daily leaderboard will reset 7:00 AM everyday).

The API returns the following format:

```lua
{
  players = {
    {uuid = string, tag = string, name = string, elo = number, board = string},
    {uuid = string, tag = string, name = string, elo = number, board = string},
    {uuid = string, tag = string, name = string, elo = number, board = string},
    ... up to 50 ...
  }
}
```

NOTE: order of players with the same elo is undefined.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `season` the season id from `AsyncPvp.GetCurrentSeasonInfo`
- *string* `type` an be either `“season”` or `“today”` to get the season leaderboard or daily leaderboard
- *TypedCallback\<object>* `callback` the callback function to handle the returned data

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)
Demo map with source code: https://platform.wildsky.dev/arcade/game/775
```lua
function controller:Refresh()
    DCEI.AsyncPvp.GetCurrentSeasonInfo(function(result)
        season = result
        season_info:SetSeasonInfo(season)
        DCEI.AsyncPvp.GetCurrentUserInfo(season.id, function(result)
            user_info:SetUserInfo(result)
            if result.board == nil or #result.board == 0 then
                DCEI.AsyncPvp.SetDefenseBoard(season.id, string.format("b%s", DCEI.GetUserTag()), function()
                    self:Refresh()
                end)
            else
                DCEI.AsyncPvp.GetLeaderBoard(season.id, "season", function(result)
                    season_leader_board:SetLeaderBoard("season", result.players)
                end)
                DCEI.AsyncPvp.GetLeaderBoard(season.id, "today", function(result)
                    daily_leader_board:SetLeaderBoard("today", result.players)
                end)
            end
        end)
        session_info:ClearSessionInfo()
    end)
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void AsyncPvp.GetDailyRankHistory(string season, TypedCallback\<object> callback) {getdailyrankhistory-2}
```cs
void AsyncPvp.GetDailyRankHistory(string season, TypedCallback<object> callback)
```
#### Description
[](description-start)

[](description-end)

#### Parameters
[](parameters-start)

[](parameters-end)

#### Callback Parameters
- *Object* `result`

[](callback-parameters-start)

[](callback-parameters-end)

#### Example Usage
[](example-usage-start)

[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

