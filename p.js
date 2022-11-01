const { Builder, By, Key } = require("selenium-webdriver");
var webdriver = require("selenium-webdriver");

async function example() {
  let chrome = require("selenium-webdriver/chrome");
  let options = new chrome.Options();
  
  // options.addArguments("--headless")
  let driver = new webdriver.Builder()
    .forBrowser("chrome")
 
    // .findElement(webdriver.By.xpath('/html/body/div[1]/div/div[2]/div/div/div/button')).click()
    .build();

  await driver.manage().window().maximize();
  driver.get("https://baidu.com");
  // Get mouse position.
  var robot = require("robotjs");
  await sleep(3000);
var mouse = robot.getMousePos();

// Get pixel color in hex format.
// var hex = robot.getPixelColor(mouse.x, mouse.y);
console.log( " at x:" + mouse.x + " y:" + mouse.y);
}

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }


example()