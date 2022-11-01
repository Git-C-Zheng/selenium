
// import {Builder, Capabilities} from 'selenium-webdriver';
const{Builder,By,Key} = require("selenium-webdriver") 
var webdriver = require("selenium-webdriver") 


async function example (){
    //launch the brower
    

let chrome = require("selenium-webdriver/chrome");
let options = new chrome.Options();
options.addExtensions("C:/Users/hp_zyt/AppData/Local/Google/Chrome/User Data/Default/Extensions/nkbihfbeogaeaoehlefnkodbefgpgknn/10.18.0_0.crx")
// options.addExtensions("/Users/apple/Library/Application Support/Google/Chrome/Default/Extensions/nkbihfbeogaeaoehlefnkodbefgpgknn/10.18.0_0.crx")
// options.addArguments('headless')
let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    // .findElement(webdriver.By.xpath('/html/body/div[1]/div/div[2]/div/div/div/button')).click()
    .build()
    // 
// driver.get("https://www.google.com")
const originalWindow = await driver.getWindowHandle();- 

driver.get("https://aster.so/nft")

const windows = await driver.getAllWindowHandles();
// windows.forEach(async handle => {
//   if (handle !== originalWindow) {
//     await driver.switchTo().window(handle);
//   }
// });
await driver.switchTo().window(originalWindow);
await driver.findElement(By.xpath( '//*[@id="app"]/div/div[1]/div/div[2]/div[3]/div[1]/div')).click();
await driver.findElement(By.xpath( '//*[@id="WEB3_CONNECT_MODAL_ID"]/div/div/div[2]/div[1]/div/div[2]')).click();

// const newWindow = await driver.getWindowHandle();- 
// await driver.switchTo().window(newWindow[0]);
windows.forEach(async handle => {
  if (handle !== originalWindow) {
    await driver.switchTo().window(handle);
    const secondwindow = handle;
    console.log("handle",handle);
  }
});

// await driver.switchTo().newWindow();
//进入metamask登录界面
await driver.findElement(By.xpath( '//*[@id="app-content"]/div/div[2]/div/div/div/button')).click();
//导入钱包
await driver.findElement(By.xpath('//*[@id="app-content"]/div/div[2]/div/div/div[2]/div/div[2]/div[1]/button')).click();
//我同意
await driver.findElement(By.xpath('//*[@id="app-content"]/div/div[2]/div/div/div/div[5]/div[1]/footer/button[2]') ).click();
//开始填助记词
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
// // console.log(word)
for (let i = 0;i < 12;i++){
    let a =( '//*[@id="import-srp__srp-word-' +i+  '"]').toString()
    // console.log(a);
    await driver.findElement(By.xpath(a)).sendKeys(word[i]);
}
// console.log("handle".handle);
//fill in fixed pwd
await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div/div/div[2]/form/div[2]/div[1]/div/input')).sendKeys('named by zyt')
await driver.findElement(By.xpath('//*[@id="confirm-password"]')).sendKeys('named by zyt')
await driver.findElement(By.xpath('//*[@id="create-new-vault__terms-checkbox"]')).click();
// await driver.findElement(By.xpath('//*[@id="app-content"]/div/div[2]/div/div/div[2]/form/button')).click();
// await driver.findElement(By.xpath('//*[@id="app-content"]/div/div[2]/div/div/button')).click();

sleep(2000);
//在第一个页面上点击connect
await driver.switchTo().window(originalWindow);
await driver.findElement(By.xpath('//*[@id="app"]/div/div[1]/div/div[2]/div[3]/div[1]/div')).click();
await driver.findElement(By.xpath('//*[@id="WEB3_CONNECT_MODAL_ID"]/div/div/div[2]/div[1]/div')).click();

// await driver.switchTo().window(originalWindow);
// await driver.findElement(By.xpath('//*[@id="app"]/div/div[1]/div/div[2]/div[3]/div[1]/div')).click();
// await driver.findElement(By.xpath('//*[@id="WEB3_CONNECT_MODAL_ID"]/div/div/div[2]/div[1]/div')).click();
//新界面输入密码
// await driver.findElement(By.xpath('//*[@id="password"]')).sendKeys('named by zyt')



//跳转页面
// await windows.forEach(async handle => {
//   if (handle !== originalWindow) {
//     await driver.switchTo().window(handle);
//   }
// });
// await driver.switchTo().window(secondwindow);
// await driver.findElement(By.xpath('//*[@id="app-content"]/div/div[3]/div/div/div/form/div')).sendKeys('named by zyt')

// await driver.findElement(By.xpath('//*[@id="app-content"]/div/div[2]/div/div/button')).click();
// await driver.findElement(By.xpath('/div/div/button')).click();
//至此进入账号界面
//连上钱包之后，进行collection相关操作
// driver.findElement(By.xpath( '//*[@id="app"]/div/div[1]/div/div[2]/div[3]/div[1]/div[1]')).click();
// driver.findElement(By.xpath( '//*[@id="collections"]/div[2]')).click();


}   
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
example();