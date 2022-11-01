const{Builder,By,Key} = require("selenium-webdriver") 
var webdriver = require("selenium-webdriver") 


async function example (){
    //launch the brower
    

// let chrome = require("selenium-webdriver/chrome");
// let options = new chrome.Options();
// options.addExtensions("/Users/apple/Library/Application Support/Google/Chrome/Default/Extensions/nkbihfbeogaeaoehlefnkodbefgpgknn/10.17.0_0.crx")
let driver = new webdriver.Builder()
    .forBrowser('chrome')
    // .setChromeOptions(options)
    .build()
    // .findElement(webdriver.By.xpath('/html/body/div[1]/div/div[2]/div/div/div/button')).click();

    console.log(driver)
  
    driver.get("https://www.selenium.dev/zh-cn/documentation/webdriver/browser/alerts/")
    // driver.get("chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/home.html#initialize/create-password/import-with-seed-phrase")
    // driver.findElement(By.xpath('/html/body/div[1]/div[1]/div[3]/div/a')).click();
    //*[@id="s-top-left"]/div/a
    // await driver.findElement(By.linkText('See a sample prompt')).click();

    await driver.findElement(By.xpath('//*[@id="tabs-1-4-tab"]')).click();
    await driver.findElement(By.xpath('/html/body/div/div[1]/div/main/div/p[2]/a')).click();
//   await driver.findElement(By.linkText('See an example alert')).click();
let alert = await driver.switchTo().alert();
let alertText = await alert.getText();
await sleep(20000);
// await driver.wait(
//      ()=>console.log("ssss"),
//     50000);
await alert.accept();

    // await driver.wait(
    //     async () => (await driver.getAllWindowHandles()).length === 2,
    //     20000
    //   );
    // await driver.switchTo().newWindow('tab');

    // console.log(await(driver.getAllWindowHandles()).length)

    // assert((await driver.getAllWindowHandles()).length === 1)

// build();
//*[@id="app-content"]/div/div[2]/div/div/div/button
// await driver.findElement(By.xpath( "//*[@id='app-content']/div/div[2]/div/div/div/button")).click();
// driver.findElement(webdriver.By.css('button')).then(
//     e=>{console.log("success"+e);}
// )
// #app-content > div > div.main-container-wrapper > div > div > div > button

// /html/body/div[1]/div/div[2]/div/div/div/button
// getElementByXpath("*[@id='app-content']");

// var result = document.evaluate("/html/body/div[1]/div/div[2]/div/div/div/button", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
// result.singleNodeValue.click();


sleep(1000);

// elem.click();

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
// function getElementByXpath(path) {
//     return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
//   }

}   
example();