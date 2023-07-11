<div id="toc" markdown="1">
- [Trigger API Reference\DCEI Functions\Video](#trigger-api-referencedcei-functionsvideo)
  * [Video.StartRecording](#startrecording-1)
  * [Video.CancelRecording](#cancelrecording-0)
  * [Video.StopRecording](#stoprecording-0)
  * [Video.ViewRecording](#viewrecording-0)
  * [Video.ShareRecording](#sharerecording-1)

</div>

***

# [Trigger API Reference](Trigger-API-Reference)\\DCEI Functions\Video {Trigger-API-ReferenceDCEI-FunctionsVideo}

[](overview-start)
These APIs allow you to record gameplay footage and even let players share these clips with friends. 
[](overview-end)

## bool Video.StartRecording(string filename) {startrecording-1}
```cs
bool Video.StartRecording(string filename)
```
#### Description
[](description-start)
Starts the recording process. Returns true/false if successful or not. 
[](description-end)

#### Parameters
[](parameters-start)
- *string* `filename` the file name

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function SharingSystem:AttemptStartRecording()
    local filename = "SuperMediaHero"
    local can_record_video = DCEI.Video.StartRecording(filename)

    -- store if video recording started successfully
    self.has_video_to_share = can_record_video
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void Video.CancelRecording() {cancelrecording-0}
```cs
void Video.CancelRecording()
```
#### Description
[](description-start)
Cancels recording. 
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function SharingSystem:CancelRecording()
    if self:HasVideoToShare() then
        DCEI.Video.CancelRecording()
        self.has_video_to_share = false
    end
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void Video.StopRecording() {stoprecording-0}
```cs
void Video.StopRecording()
```
#### Description
[](description-start)
Stops recording.
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function SharingSystem:StopRecording()
    if self:HasVideoToShare() then
        DCEI.Video.StopRecording()
    end
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void Video.ViewRecording() {viewrecording-0}
```cs
void Video.ViewRecording()
```
#### Description
[](description-start)
View the recorded video
[](description-end)

#### Example Usage
[](example-usage-start)
```lua
function SharingSystem:ViewRecording()
    DCEI.Video.ViewRecording()
end

```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

## void Video.ShareRecording(string text) {sharerecording-1}
```cs
void Video.ShareRecording(string text)
```
#### Description
[](description-start)
The device will attempt to share the video recording. The result depends on how the users device (or chosen app) responds to the request.
[](description-end)

#### Parameters
[](parameters-start)
- *string* `text` text to share along with the video recording

[](parameters-end)

#### Example Usage
[](example-usage-start)
```lua
function SharingSystem:ShareRecording()
    local text = "I just beat Level 10 with the power of emojis!"
    local hashtag = "#supermediahero"
    local url = "https://www.funovus.com/games/super-media-hero"
    local share_text = text .. " " .. hashtag .. " " .. url
    DCEI.Video.ShareRecording(share_text)
end
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

