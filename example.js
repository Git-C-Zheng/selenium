const {Builder, By} = require('selenium-webdriver');
let fs = require('fs');

(async function example() {
   let driver = await new Builder()
       .forBrowser('chrome')
       .build();

   await driver.get('https://twitter.com/crypto_birb/status/1506595710447280136');
   let ele = await driver.findElement(By.css("article"));
   // Captures the element screenshot
   let encodedString = await ele.takeScreenshot(true);
   await fs.writeFileSync('./image.png', encodedString, 'base64');
   await driver.quit();
}())
