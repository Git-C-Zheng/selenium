
// import {Builder, Capabilities} from 'selenium-webdriver';
const{Builder,By,Key} = require("selenium-webdriver") 
var webdriver = require("selenium-webdriver") 


async function example (){
    //launch the brower
    

let chrome = require("selenium-webdriver/chrome");
let options = new chrome.Options();
options.addExtensions("C:/Users/hp_zyt/AppData/Local/Google/Chrome/User Data/Default/Extensions/nkbihfbeogaeaoehlefnkodbefgpgknn/10.18.0_0.crx")
// options.addExtensions("/Users/apple/Library/Application Support/Google/Chrome/Default/Extensions/nkbihfbeogaeaoehlefnkodbefgpgknn/10.18.0_0.crx")
let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    // .findElement(webdriver.By.xpath('/html/body/div[1]/div/div[2]/div/div/div/button')).click()
    .build()
    // 
// driver.get("https://www.google.com")
const originalWindow = await driver.getWindowHandle();- 
// driver.findElement(webdriver.By.css('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center > input.RNmpXc')).click();  

driver.get("chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/home.html#initialize/welcome")

// driver.findElement(By.xpath( "//*[@id='app-content']/div/div[2]/div/div/div/button")).click();
// driver.findElement(By.css( "#app-content > div > div.main-container-wrapper > div > div > div > button")).click();
// handles = driver.manage.window_handles();
console.log(await(driver.getAllWindowHandles()).length)
// var handle = driver.getWindowHandle(); 
console.log("dfghjkl")
console.log(originalWindow)
// await driver.findElement(By.linkText('new window')).click();
// var browser = chrome;
// driver.getAllWindowHandles().then(function(handle){
//     driver.switchTo().window(handle[-1]).then(function(){
//         //do your stuff on the pop up window
//         console.log("cghkl")
//         driver.findElement(By.xpath( "//*[@id='app-content']/div/div[2]/div/div/div/button")).click();
//     });
// });

//open a new tab
// await driver.wait(
//     async () => (await driver.getAllWindowHandles()).length === 2,
//     10000
//   );
// await driver.switchTo().newWindow('tab');
const windows = await driver.getAllWindowHandles();
// windows.forEach(async handle => {
//   if (handle !== originalWindow) {
//     await driver.switchTo().window(handle);
//   }
// });
await driver.switchTo().window(originalWindow);
await driver.findElement(By.xpath( '//*[@id="app-content"]/div/div[2]/div/div/div/button')).click();
await driver.findElement(By.xpath('//*[@id="app-content"]/div/div[2]/div/div/div[2]/div/div[2]/div[1]/button')).click();
await driver.findElement(By.xpath('//*[@id="app-content"]/div/div[2]/div/div/div/div[5]/div[1]/footer/button[2]') ).click();
// // await driver.findElement(By.xpath('//*[@id="import-srp__srp-word-0"]')).sendKeys('jazz', 'pupil', 'clap', 'defy', 'junior', 'entry', 'youth', 'path', 'pause', 'decline', 'angle', 'unique');
// //fill in mnemonic
await driver.findElement(By.xpath('//*[@id="import-srp__srp-word-0"]')).click();

var word = [
    'jazz ',
   'pupil ',
    'clap ',
    'defy ',
    'junior ', 
   'entry ', 
    'youth ' ,
   'path ',
    'pause ',
     'decline ',
   'angle ', 
   'unique '
]
// console.log(word)
for (let i = 0;i < 12;i++){
    let a =( '//*[@id="import-srp__srp-word-' +i+  '"]').toString()
    console.log(a);
    await driver.findElement(By.xpath(a)).sendKeys(word[i]);
}

// // console.log("handle".handle);
//fill in fixed pwd
await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div/div/div[2]/form/div[2]/div[1]/div/input')).sendKeys('named by zyt')
await driver.findElement(By.xpath('//*[@id="confirm-password"]')).sendKeys('named by zyt')
await driver.findElement(By.xpath('//*[@id="create-new-vault__terms-checkbox"]')).click();
await driver.findElement(By.xpath('//*[@id="app-content"]/div/div[2]/div/div/div[2]/form/button')).click();
//全部完成

await driver.findElement(By.xpath('//*[@id="app-content"]/div/div[2]/div/div/button')).click();

await driver.findElement(By.xpath('//*[@id="popover-content"]/div/div/section/div[1]/div/button')).click();
//至此进入账号界面


// sleep(1000);
 


// function sleep (time) {
//     return new Promise((resolve) => setTimeout(resolve, time));
//   }

}   
// function sleep (time) {
//     return new Promise((resolve) => setTimeout(resolve, time));
//   }
example();