// import {Builder, Capabilities} from 'selenium-webdriver';
const{Builder,By,Key} = require("selenium-webdriver") 
var webdriver = require("selenium-webdriver") 


async function example (){
    //launch the brower
    

let chrome = require("selenium-webdriver/chrome");
let options = new chrome.Options();
options.addExtensions("/Users/apple/Library/Application Support/Google/Chrome/Default/Extensions/nkbihfbeogaeaoehlefnkodbefgpgknn/10.18.0_0.crx")
let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    // .findElement(webdriver.By.xpath('/html/body/div[1]/div/div[2]/div/div/div/button')).click()
    .build()
    // 
// driver.get("https://www.google.com")
const originalWindow = await driver.getWindowHandle();
// driver.findElement(webdriver.By.css('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center > input.RNmpXc')).click();  

driver.get(" https://aster.so/nft")




sleep(1000);



function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

}   
example();