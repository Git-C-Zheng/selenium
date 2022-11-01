const { Builder, By, Key } = require("selenium-webdriver");
var webdriver = require("selenium-webdriver");
var list;
list = [];
// list.push(1);
// list.push('23');
// console.log(list[1]);
async function example() {
  let chrome = require("selenium-webdriver/chrome");
  let options = new chrome.Options();
  options.addExtensions(
    "/Users/apple/Library/Application Support/Google/Chrome/Default/Extensions/nkbihfbeogaeaoehlefnkodbefgpgknn/10.18.0_0.crx"
  );
  // options.addArguments("--headless")
  let driver = new webdriver.Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    // .findElement(webdriver.By.xpath('/html/body/div[1]/div/div[2]/div/div/div/button')).click()
    .build();

//   await driver.manage().window().maximize();
  await driver.get("https://aster.so/nft");
  const originalWindow = await driver.getWindowHandle();
  await driver.manage().window().maximize();
  await driver.switchTo().window(originalWindow);
//   await driver
//     .findElement(
//       By.xpath('//*[@id="app"]/div/div[1]/div/div[2]/div[3]/div[1]/div')
//     )
//     .click();
//   await driver
//     .findElement(
//       By.xpath(
//         '//*[@id="WEB3_CONNECT_MODAL_ID"]/div/div/div[2]/div[1]/div/div[2]'
//       )
//     )
//     .click();
  var robot = require("robotjs");
  var modifiers = []
  robot.setMouseDelay(3000)
  robot.moveMouse(1401, 200);
  robot.mouseClick();
  sleep(5000);
  robot.moveMouse(600, 400);
  robot.mouseClick();

  

  // Get mouse position.
// var mouse = robot.getMousePos();

// // Get pixel color in hex format.
// var hex = robot.getPixelColor(mouse.x, mouse.y);
// console.log("#" + hex + " at x:" + mouse.x + " y:" + mouse.y);

}

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}


example()