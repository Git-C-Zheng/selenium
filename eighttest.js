const { Builder, By, Key } = require("selenium-webdriver");
var webdriver = require("selenium-webdriver");

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

  await driver.manage().window().maximize();
  driver.get("https://aster.so/nft");
  


  const originalWindow = await driver.getWindowHandle();
  console.log(originalWindow);
  await driver.switchTo().window(originalWindow);
  await driver
    .findElement(
      By.xpath('//*[@id="app"]/div/div[1]/div/div[2]/div[3]/div[1]/div')
    )
    .click();
  await driver
    .findElement(
      By.xpath(
        '//*[@id="WEB3_CONNECT_MODAL_ID"]/div/div/div[2]/div[1]/div/div[2]'
      )
    )
    .click();

  const windows = await driver.getAllWindowHandles();
  windows.forEach(async (handle) => {
    if (handle !== originalWindow) {
      await driver.switchTo().window(handle);
      
      console.log("handle", handle);
    }
  });
//   const ele = await driver.getAllWindowHandles();
//   await driver.switchTo().window(ele[ele.length - 2]);

  

  //进入metamask登录界面
  await sleep(1000);
  await driver
    .findElement(
      By.xpath('//*[@id="app-content"]/div/div[2]/div/div/div/button')
    )
    .click();
  //导入钱包
  await driver
    .findElement(
      By.xpath(
        '//*[@id="app-content"]/div/div[2]/div/div/div[2]/div/div[2]/div[1]/button'
      )
    )
    .click();
  //我同意
  await driver
    .findElement(
      By.xpath(
        '//*[@id="app-content"]/div/div[2]/div/div/div/div[5]/div[1]/footer/button[2]'
      )
    )
    .click();
  //开始填助记词
  await driver
    .findElement(By.xpath('//*[@id="import-srp__srp-word-0"]'))
    .click();
  //助记词
  var word = [
    "jazz ",
    "pupil ",
    "clap ",
    "defy ",
    "junior ",
    "entry ",
    "youth ",
    "path ",
    "pause ",
    "decline ",
    "angle ",
    "unique ",
  ];
  for (let i = 0; i < 12; i++) {
    let a = ('//*[@id="import-srp__srp-word-' + i + '"]').toString();
    // console.log(a);
    await driver.findElement(By.xpath(a)).sendKeys(word[i]);
  }

  //fill in fixed pwd
  await driver
    .findElement(
      By.xpath(
        "/html/body/div[1]/div/div[2]/div/div/div[2]/form/div[2]/div[1]/div/input"
      )
    )
    .sendKeys("named by zyt");
  await driver
    .findElement(By.xpath('//*[@id="confirm-password"]'))
    .sendKeys("named by zyt");
  await driver
    .findElement(By.xpath('//*[@id="create-new-vault__terms-checkbox"]'))
    .click();
    
  await driver
    .findElement(
      By.xpath('//*[@id="app-content"]/div/div[2]/div/div/div[2]/form/button')
    )
    .click();
 sleep(3000);
//   //等注册页面加载完毕

//   await driver.switchTo().window(w1);

//   await driver
//     .findElement(
//       By.xpath('//*[@id="app-content"]/div/div[2]/div/div/button')
//     )
//     .click();   
//   handle2 = await driver.getWindowHandle();
//   console.log("handle2", handle2);
//   await sleep(5000);

//   await driver.switchTo().window(originalWindow);
//   await driver.get('https://aster.so/nft');
//   await driver.findElement(By
//     .xpath('//*[@id="app"]/div/div[1]/div/div[2]/div[3]/div[1]/div'))
//     .click();
//   await driver.findElement(By
//     .xpath('//*[@id="WEB3_CONNECT_MODAL_ID"]/div/div/div[2]/div[1]/div'))
//     .click();
sleep(3000);
console.log(await driver.getWindowHandle());
const ele1 = await driver.getAllWindowHandles();

  for (let i = 0; i < ele1.length; i++) {
    console.log("1win_id", ele1[i]);
  }
//   await driver.switchTo().window(ele1[ele1.length - 1]);

//新建一个窗口
await driver.switchTo().newWindow("tab");
// await driver.get('chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/home.html');
await driver.get(
  "chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/popup.html"
);
await sleep(3000);

// await l1(driver);
await driver.findElement(By
    .xpath('//*[@id="password"]')).sendKeys('named by zyt');

await driver.findElement(By
    .xpath('//*[@id="app-content"]/div/div[2]/div/div/div[2]/div/div[1]/div[2]/button')).click();

await driver.findElement(By
    .xpath('//*[@id="app-content"]/div/div[2]/div/div/div[2]/div[2]/button[1]')).click();
}






function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

//轮询1
async function l1(driver) {
    await driver
    .findElement(
      By.xpath(
        '//*[@id="app-content"]/div/div[2]/div/div[3]/div[2]/button[2]'
      )
    )
   
    .then(
      () => {
        flg = 0;
        driver
          .findElement(
            By.xpath(
              '//*[@id="app-content"]/div/div[2]/div/div[3]/div[2]/button[2]'
            )
          )
          .click();
      },
      (error) => {
          flg = 1;  
     
        console.log("next step");
        // driver.switchTo().newWindow("tab");
        // sleep(3000);
        if (error instanceof webdriver.error.NoSuchElementError) {
          console.log("Element not found.");
          // flg = 1;
        }
      }
    );
//   flg = 1;
  while (flg === 1) {
    await driver.get(
      "chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/popup.html"
    );
 
    await sleep(5000);
    await driver
      .findElement(
        By.xpath(
          '//*[@id="app-content"]/div/div[2]/div/div[3]/div[2]/button[2]'
        )
      )
      .then(
        () => {
          flg = 0;
          driver
            .findElement(
              By.xpath(
                '//*[@id="app-content"]/div/div[2]/div/div[3]/div[2]/button[2]'
              )
            )
            .click();
        },
        (error) => {
            flg = 1;  
           
            console.log("next step");
        //   driver.switchTo().newWindow("tab");
        //   sleep(3000);
          if (error instanceof webdriver.error.NoSuchElementError) {
            console.log("Element not found.");
            // flg = 1;
          }
        }
      );
  }
}


  
example()