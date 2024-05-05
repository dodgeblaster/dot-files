import { GlobalKeyboardListener } from '@futpib/node-global-key-listener'
import { exec } from 'node:child_process'
const v = new GlobalKeyboardListener()

const APPS = {
    notes: 'Notes',
    chrome: '"Google Chrome"',
    vsCode: '"Visual Studio Code"',
    slack: 'Slack',
    brave: '"Brave Browser"',
    iterm: 'iTerm',
    discord: 'Discord'
}

const isPressed = (e, down, x) => {
  console.log('DOWN: ', down)
    return (
        e.state == 'DOWN' &&
        e.name == x &&
        // (down['LEFT ALT'] || down['RIGHT ALT']) &&
        (down['LEFT ALT'] || down['RIGHT ALT']) //&&
        // (down['LEFT META'] || down['RIGHT META'])
    )
}
function select(e, down, key, app) {
    if (isPressed(e, down, key)) {
        exec('open -a ' + app)
        return true
    }
}

v.addListener(function (e, down) {
    select(e, down, 'A', APPS.discord)
    select(e, down, 'S', APPS.brave)
    select(e, down, 'D', APPS.iterm)
    select(e, down, '4', APPS.chrome)
})
