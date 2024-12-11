/* eslint-disable */
require('Documents/phoenix-config/dist/PhoenixTWM.js');

// PhoenixTWM.setActiveBorderColor('0xffe1e3e4');
// PhoenixTWM.setInactiveBorderColor('0xff494d64');
// PhoenixTWM.setBorderWidth(5);
// PhoenixTWM.enableJankyBorders();

// PhoenixTWM.setGap(10);

const CTRL = ['ctrl'];
const CTRL_OPT = ['ctrl', 'option'];

Key.on('r', CTRL_OPT, () => {
  PhoenixTWM.refreshCurrentScreenLayout();
});

Key.on('s', CTRL_OPT, () => {
  PhoenixTWM.moveFocusedWindowForward();
});

Key.on('t', CTRL_OPT, () => {
  PhoenixTWM.moveFocusedWindowBackward();
});
