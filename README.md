# PhoenixTWM

This is a helper library for [Phoenix](https://kasper.github.io/phoenix/).
It allows users to control windows like using a tiling window manager such as i3wm.

It is recommended to use with [JankyBorders](https://github.com/FelixKratz/JankyBorders).

## Motivations

I am a long term i3wm user. However, my current job require me to use MacOS. And I found that multi-tasking in MacOS is not very convenience, so I make this.

Phoenix allows a lot of freedom to customize. This can solve some each cases when [yabai](https://github.com/koekeishiya/yabai) and [Amethyst](https://github.com/ianyh/Amethyst) don't fit my workflow very well.

## Example

```js
require('PhoenixTWM.js');
Key.on('r', CTRL_OPT, () => {
  // console.log(PhoenixTWM.refreshCurrentScreenLayout);
  PhoenixTWM.refreshCurrentScreenLayout();
});
```

For details, see [example]("./exmaple/basic.js")

## Shortcuts

It is recommended to use MacOS built-in shortcut to control space and focused windows.
They are usually have better performance and very stable, and will not stop working after MacOS updates.

Below are some default keybindings of some useful shortcuts.

- `^1` - `^9` can scroll to the related space.
- `^F4` can change focused window on current space.
