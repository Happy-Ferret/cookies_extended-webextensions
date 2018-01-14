var ButtonState;

browser.browserAction.onClicked.addListener(function (tab) {
  switch (ButtonState) {
    case 'turn-on':
      enable();
      break;
    case 'turn-off':
    default:
      disable();
      break;
  }
});

function enable() {
  browser.cookies.enableGlobal().then(
    message => console.log(`"${message}"`)
  );

  ButtonState = 'turn-off';

  browser.browserAction.setIcon({ path: 'icons/enabled.png', });
}

function disable() {
  browser.cookies.disableGlobal().then(
    message => console.log(`"${message}"`)
  );

  ButtonState = 'turn-on';

  browser.browserAction.setIcon({ path: 'icons/disabled.png', });
}