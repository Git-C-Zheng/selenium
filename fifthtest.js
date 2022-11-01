var robot = require("robotjs");
var modifiers = []
async function tttt (){
    var webdriver = require("selenium-webdriver")
let driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build()
driver.get("https://github.com/octalmage/robotjs/blob/master/test/keyboard.js")
console.log(new Date().getTime());


// console.log()
// await sleep(3000);

console.log(new Date().getTime());

robot.setMouseDelay(3)
// Speed up the mouse.
// await robot.setMouseDelay(3000);

robot.mouseClick();
modifiers.push('command')


robot.keyToggle("a", "down", modifiers)

robot.keyToggle("a", "up", modifiers)

}
tttt();
// robot.keyTap("command","down")

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

