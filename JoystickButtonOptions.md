- <i>int</i> `buttonId` which joystick button index to use. Accepted values: `[0, 3]` (see below).
- <i>function</i> `trigger` the callback function for when the joystick button is used.
- <i>table</i> `options` accepted values:
  - <i>string</i> `icon` the icon to use for the joystick button.
  - <i>bool</i> `hide` if true, hides the joystick button.
```
Button Ids
-------------------
|                 |
|             (3) |
|          (2)    |
|       (1)   (0) |
|-----------------|
```