Opinionated and incomplete UI library/wrapper that I use for all my UI work.
Features
- CreateFrame, CreateHStack, CreateVStack (see _ApplyOptions for all possible options) 
```lua
CreateFrame(root, { bg_image = 'frame00', px = 5, left = true }) 
```
- CreateText
```lua
CreateText(frame, "some text", { font_size = 16 })
```
- CreateButton (has additional options: `image` and `message`)
```lua
local cb = function(btn) DCEI.LogMessage("I was clicked") end
-- either with message directly
CreateButton(frame, "Click me", cb)
-- or with options
CreateButton(frame, { message = "Click me", image = DCEI.Texture("btn_purple") }, cb)
```
- CreateImage
```lua
CreateImage(frame, 'frame00', { size = { 25, 25 } })
```
- CreateScreenMask
```lua
local mask = CreateScreenMask(0.5)
```
- CreateHScroll/CreateVScroll
```lua
--- applies opt to scroll - returns both scroll and scroll content
local scroll, scroll_content = CreateHScroll(frame, { spacing = 25 } )
```

Missing
- input


The code
====
```lua
function merge(a, b)
    local result = {}
    for k, v in pairs(a) do result[k] = v end
    for k, v in pairs(b) do result[k] = v end
    return result
end

local function _ApplyOptions(el, opt)
    if not opt then return el end
    if opt.y then DCEI.SetFrameVerticalOffsetInParent(el, opt.y) end
    if opt.x then DCEI.SetFrameHorizontalOffsetInParent(el, opt.x) end
    if opt.bottom then DCEI.SetFrameBottomAlignmentInParent(el) end
    if opt.left then DCEI.SetFrameLeftAlignmentInParent(el) end
    if opt.right then DCEI.SetFrameRightAlignmentInParent(el) end
    if opt.top then DCEI.SetFrameTopAlignmentInParent(el) end
    if opt.self_top then DCEI.SetFrameTopAlignment(el) end
    if opt.self_bottom then DCEI.SetFrameBottomAlignment(el) end
    if opt.self_left then DCEI.SetFrameLeftAlignment(el) end
    if opt.self_right then DCEI.SetFrameRightAlignment(el) end
    if opt.size then DCEI.SetFrameSize(el, table.unpack(opt.size)) end
    if opt.min_size then DCEI.SetFrameMinSize(el, table.unpack(opt.min_size)) end
    if opt.max_size then DCEI.SetFrameMaxSize(el, table.unpack(opt.max_size)) end
    if opt.px or opt.pl then DCEI.SetFramePaddingLeft(el, opt.pl or opt.px) end
    if opt.px or opt.pr then DCEI.SetFramePaddingRight(el, opt.pr or opt.px) end
    if opt.py or opt.pb then DCEI.SetFramePaddingBottom(el, opt.pb or opt.py) end
    if opt.py or opt.pt then DCEI.SetFramePaddingTop(el, opt.pt or opt.py) end
    if opt.p then DCEI.SetFramePadding(el, opt.p) end
    if opt.bg_image then DCEI.SetFrameImage(el, opt.bg_image) end
    if opt.bg_color then DCEI.SetFrameImageColor(el, opt.bg_color) end
    if opt.match_parent then DCEI.SetFrameMatchParent(el, table.unpack(opt.match_parent)) end
    if opt.block_input then DCEI.SetFrameBlockInput(el, opt.block_input) end
    if opt.rotate then DCEI.SetFrameRotation(el, opt.rotate) end
    if opt.rotate3d then DCEI.SetFrameRotation3D(el, table.unpack(opt.rotate3d)) end
    if opt.active ~= nil then DCEI.SetFrameActive(el, opt.active) end
    return el
end

function CreateFrame(parent, options)
    return _ApplyOptions(DCEI.CreateFrame(parent), options)
end

function _CreateStack(el, opt)
    if opt then
        if opt.spacing then DCEI.SetFrameSpacing(el, opt.spacing) end
    end
    return _ApplyOptions(el, opt)
end

function CreateHStack(parent, opt)
    return _CreateStack(DCEI.CreateHStackFrame(parent), opt)
end

function CreateVStack(parent, opt)
    return _CreateStack(DCEI.CreateVStackFrame(parent), opt)
end

function CreateVScroll(parent, opt)
    local scroll = _ApplyOptions(DCEI.CreateVScrollFrame(parent), opt)
    return scroll, DCEI.GetScrollFrameContent(scroll)
end

function CreateHScroll(parent, opt)
    local scroll = _ApplyOptions(DCEI.CreateHScrollFrame(parent), opt)
    return scroll, DCEI.GetScrollFrameContent(scroll)
end

function CreateButton(parent, opt, callback)
    local button = DCEI.CreateButtonFrame(parent)
    local text
    local image

    if opt then
        if type(opt) == 'string' then
            DCEI.SetFrameMinSize(button, 128, 60)
            CreateText(button, opt)
        else
            if opt.image then image = CreateImage(button, opt.image, opt.image_opt) end
            if opt.message then
                text = CreateText(button, opt.message)
                if opt.font_size then DCEI.SetTextFrameFontSize(text, opt.font_size) end
            end
            if not opt.size and not opt.min_size and not opt.image_opt then DCEI.SetFrameMinSize(button, 128, 60) end
            _ApplyOptions(button, opt)
        end
    end

    if callback then
        DCEI.SetOnClickCallback(button, function() callback(button, text) end)
    else
        DCEI.SetButtonFrameEnable(button, false)
    end
    return button, text, image
end

function CreateText(parent, message, options)
    local text = DCEI.CreateTextFrame(parent)
    DCEI.SetTextFrameText(text, message)
    if options then
        if options.color then DCEI.SetTextFrameColor(text, table.unpack(options.color)) end
        if options.font_size then DCEI.SetTextFrameFontSize(text, options.font_size) end
        _ApplyOptions(text, options)
    end
    return text
end

function CreateImage(parent, name, opt)
    return CreateFrame(parent, merge(opt or {}, { bg_image = name }))
end

function CreateMask(parent, opt)
    return _ApplyOptions(DCEI.CreateMaskFrame(parent), opt)
end
```