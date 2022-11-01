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

  await driver.manage().window().maximize();
  await driver.get("https://aster.so/nft");
  const originalWindow = await driver.getWindowHandle();
  console.log(originalWindow);
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
  
  robot.setMouseDelay(3000)
  await robot.moveMouse(1401, 200);
  await robot.mouseClick();
  await sleep(5000);
  await robot.moveMouse(600, 400);
  await robot.mouseClick(); 
 
await sleep(5000);
//   modifiers.push('command')

//   robot.keyToggle("a", "down", modifiers)

//   robot.keyToggle("a", "up", modifiers)
  const windows = await driver.getAllWindowHandles();
//   const ele = await driver.getAllWindowHandles();
  //查看window编号

  await driver.switchTo().window(windows[windows.length - 1]);
//   windows.forEach(async (handle) => {
//     if (handle !== originalWindow) {
//       await driver.switchTo().window(handle);
//       const secondwindow = handle;
//       console.log("handle", handle);
//     }
//   });
  // this.driver.manage().setTimeouts({ implicit: 20000, pageLoad: 10000 })
  // this.driver.manage().timeouts().implicitlyWait(1);
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
    .sendKeys("11111111");
  await driver
    .findElement(By.xpath('//*[@id="confirm-password"]'))
    .sendKeys("11111111");
  await driver
    .findElement(By.xpath('//*[@id="create-new-vault__terms-checkbox"]'))
    .click();
  
//   handle0 = await driver.getWindowHandle();
//   console.log("handle0", handle0);
  await driver
    .findElement(
      By.xpath('//*[@id="app-content"]/div/div[2]/div/div/div[2]/form/button')
    )
    .click();
  //等注册页面加载完毕
  await sleep(2000);

//   handle2 = await driver.getWindowHandle();
//   console.log("handle2", handle2);
//   driver.close();
  await sleep(2000);
//   await driver.switchTo().window(originalWindow);   
//   await sleep(5000);
//   var robot = require("robotjs");
  
//   robot.setMouseDelay(3000)
//   robot.moveMouse(1401, 200);
//   robot.mouseClick();
//   sleep(5000);
//   robot.moveMouse(600, 400);
//   robot.mouseClick(); 
//   const ele = await driver.getAllWindowHandles();
//   console.log("length", ele.length);
//   // console.log("length",ele[ele.length-1]);

//   //查看window编号
//   for (let i = 0; i < ele.length; i++) {
//     console.log("win_id", ele[i]);
//   }
//   await driver.switchTo().window(ele[ele.length - 1]);
  //新建一个窗口
  await robot.moveMouse(667, 760);
  await robot.mouseClick();
//*[@id="app-content"]/div/div[2]/div/div/button
  // await driver.switchTo().newWindow("tab");
//   await driver.get('chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/home.html');
  // await driver.get(
  //   "chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/popup.html"
  // );
  await sleep(3000);

// const ele = await driver.getAllWindowHandles();
//   //查看window编号
//   for (let i = 0; i < ele.length; i++) {
//     console.log("win_id", ele[i]);
//   }
//   await driver.switchTo().window(ele[ele.length - 1]);
  // await driver.findElement(By.xpath('//*[@id="password"]')).sendKeys("11111111");
  // await sleep(2000);
  // robot.moveMouse(900, 628);
  // robot.mouseClick();
//   await driver.findElement(By.xpath('//*[@id="app-content"]/div/div[3]/div/div/div/button')).click();

//  await sleep(30000);
//   await driver.findElement(By.xpath('//*[@id="app-content"]/div/div[2]/div/div/div[2]/div/div[1]/div[2]/button')).click();
// await rlookfor(driver,'//*[@id="app-content"]/div/div[2]/div/div/div[2]/div/div[1]/div[2]/button');

// await rlookfor(driver,'//*[@id="app-content"]/div/div[2]/div/div/div[2]/div[2]/button[1]');
// await rlookfor(driver,'//*[@id="popover-content"]/div/div/section/div[1]/div/button');

//上述操作，到达账户
await sleep(4000);
await driver.switchTo().window(originalWindow);
await robot.moveMouse(1401, 200);
  await robot.mouseClick();
  await sleep(2000);
  await robot.moveMouse(600, 400);
  await robot.mouseClick();
 

//   await sleep(3000);

  //下一步

//   await driver
//     .findElement(
//       By.xpath('//*[@id="app-content"]/div/div[2]/div/div[3]/div[2]/button[2]')
//     )
//     .then(
//       () => {
//         driver.findElement(By.xpath('//*[@id="app-content"]/div/div[2]/div/div[3]/div[2]/button[2]')).click();
//       },
//       (error) => {
//         if (error instanceof webdriver.error.NoSuchElementError) {
//           console.log("Element not found.");
//         }
       
//       }
//     );



//   console.log(
//     driver.findElement(
//       By.xpath('//*[@id="app-content"]/div/div[2]/div/div[3]/div[2]/button[2]')
//     )
//       ? "1"
//       : "2"
//   );
// const fs = require('fs')

// const content = 'Apple'

// fs.writeFile('/Users/apple/Documents/zyt/seesee.txt', content,{ flag: 'a+' }, err => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   //文件写入成功。
// })

 await sleep(2000)
//  await l1(driver);
 await checkwin(driver);
 await rlookfor(driver,' //*[@id="app-content"]/div/div[2]/div/div[3]/div[2]/button[2]');
 await rlookfor(driver,' //*[@id="app-content"]/div/div[2]/div/div[2]/div[2]/div[2]/footer/button[2]');

 await robot.moveMouse(301, 400);
  await robot.mouseClick();
  await sleep(2000);
 

//  try {
//     await l1(driver);
//  } catch (error) {
//     console.log("粗啊呜");
//     return
//  }

//   await sleep(2000)

//   await sleep(3000);
//   await l2(driver);

  //连接
    //   await driver.findElement(By.xpath('//*[@id="app-content"]/div/div[2]/div/div[2]/div[2]/div[2]/footer/button[2]')).click();

    //   await sleep(3000);
  //   x
    //   await driver.findElement(By.xpath('//*[@id="popover-content"]/div/div/section/div[1]/div/button')).click();
//   l3(driver);
  // }

  // //至此进入钱包页面
//   await sleep(2000);

  await driver.switchTo().window(originalWindow);

  //click on my account
  await driver
    .findElement(
      By.xpath('//*[@id="app"]/div/div[1]/div/div[2]/div[3]/div[1]/div[1]')
    )
    .click();

  //my collection
  await driver.findElement(By.xpath('//*[@id="collections"]/div[2]')).click();

  await sleep(5000);

//   //create collection
//   // await driver.findElement(By
//   //     .xpath('//*[@id="app"]/div[2]/div[1]/div[2]/div[2]/div[2]')).click();
//   // await sleep(2000);
  //...

  await driver
    .findElement(By.xpath('//*[@id="app"]/div[2]/div[2]/div[2]/div[2]/img'))
    .click();
  
//   await sleep(5000);
  //edit
  // await driver.findElement(By
  //     .xpath('//*[@id="creator-earnings"]')).click();
  text = await driver
    .findElement(By.xpath('//*[@id="app"]/div[2]/div[2]/div[3]/div[1]'))
    .getText();

  let url = ("https://aster.so/collection/edit/" + text).toString();

  // await driver.get("https://aster.so/collection/edit/hj");
  await driver.get(url);
//   // await driver.get("https://aster.so/collection/create");
//   await sleep(3000);


  // await sleep(6000);
  //edit image
  // await driver.findElement(By
  //     .xpath(' //*[@id="app"]/div[2]/div[2]/div/div[2]/label')).click();
  await sleep(5000);
  var robot = require("robotjs");
  var modifiers = []
  robot.setMouseDelay(3000)

  robot.moveMouse(850, 450);
  robot.mouseClick();

  modifiers.push('command')

  robot.keyToggle("a", "down", modifiers)

  robot.keyToggle("a", "up", modifiers)
  modifiers.push('enter')  
  await sleep(3000);
  //edit name

  await driver
    .findElement(By.xpath('//*[@id="app"]/div[2]/div[2]/div/input[1]'))
    .sendKeys("editted success");
  // await driver.findElement(By
  //     .xpath('//*[@id="app"]/div[2]/div[2]/div/div[2]/label')).sendKeys("/Users/apple/Downloads/logo.jpeg");

  //submit
  // console.log(driver.findElement(By.xpath('//*[@id="submit-button"]')));

  await driver.findElement(By.xpath('//*[@id="submit-button"]')).click();
  await sleep(1000);

  //image
  // await driver.findElement(By
  //     .xpath(' //*[@id="app"]/div[2]/div[2]/div/div[2]/label')).click();
  // await sleep(2000);
  // await driver.findElement(By
  //     .xpath('//*[@id="app"]/div[2]/div[2]/div/div[2]/label')).sendKeys("/Users/apple/Downloads/logo.jpeg");
}

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
async function rlookfor(driver,path) {
    await driver
    .findElement(
      By.xpath(
        path
      )
    )
    .then(
      () => {
        
        driver
          .findElement(
            By.xpath(
                path
            )
          )
          .click();
          flg = 0;
          sleep(3000);
      },
      (error) => {
          flg = 1; 
          sleep(3000);
       
      }
    );
    // flg = 1;
    while (flg === 1) {
     
      await sleep(3000);
      await driver
        .findElement(
          By.xpath(
            path
          )
        )
        .then(
          () => {
            
            driver
              .findElement(
                By.xpath(
                    path
                )
              )
              .click();
              flg = 0;
          },
          (error) => {
              flg = 1; 
             sleep(3000);
          }
        );
    }
  }
async function lookfor(driver) {
    await driver
    .findElement(
      By.xpath(
        '//*[@id="app-content"]/div/div[2]/div/div/div[2]/div/div[1]/div[2]/button'
      )
    )
    .then(
      () => {
        
        driver
          .findElement(
            By.xpath(
              '//*[@id="app-content"]/div/div[2]/div/div/div[2]/div/div[1]/div[2]/button'
            )
          )
          .click();
          flg = 0;
      },
      (error) => {
          flg = 1; 
          sleep(3000);
       
      }
    );
    // flg = 1;
    while (flg === 1) {
     
      await sleep(3000);
      await driver
        .findElement(
          By.xpath(
            '//*[@id="app-content"]/div/div[2]/div/div/div[2]/div/div[1]/div[2]/button'
          )
        )
        .then(
          () => {
            
            driver
              .findElement(
                By.xpath(
                  '//*[@id="app-content"]/div/div[2]/div/div/div[2]/div/div[1]/div[2]/button'
                )
              )
              .click();
              flg = 0;
          },
          (error) => {
              flg = 1; 
             sleep(3000);
          }
        );
    }
  }

//轮询1
async function l1(driver) {
    await sleep(2000)
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
          list.push(1);
      },
      (error) => {
          flg = 1;  
        // checkwin(driver);
        // console.log("next step");
        // driver.close();
        driver.switchTo().newWindow("tab");
        // sleep(3000);
        if (error instanceof webdriver.error.NoSuchElementError) {
          console.log("Element not found.");
          // flg = 1;
        }
      }
    );
//   flg = 1;
 if (flg === 1) {
    sleep(3000)
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
            list.push(1);
        },
        (error) => {
            sleep(3000);
            driver.findElement(By.xpath('//*[@id="popover-content"]/div/div/section/div[1]/div/button')).then(
                () => {
                    driver.findElement(By.xpath('//*[@id="popover-content"]/div/div/section/div[1]/div/button')).click();
                },
                (error) => {
                    console.log("找不到x")
                    driver
                    .findElement(
                      By.xpath(
                        '//*[@id="app-content"]/div/div[2]/div/div[3]/div[2]/button[2]'                    
                      )
                    )
                    .click();
                }
                
            )
            // flg = 1;  
            // checkwin(driver);
            console.log("next step");
            // 
            // driver.quit();
        //     driver.close();
        //     checkwin(driver);
        //   driver.switchTo().newWindow("tab");  
        //   driver.get(
        //     "chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/popup.html"
        //   );
        //   closewin();

        
        //   sleep(3000);
          if (error instanceof webdriver.error.NoSuchElementError) {
            console.log("Element not found.");
            // flg = 1;
          }
        }
      );
  }
}



async function l2(driver) {
    await driver
    .findElement(
      By.xpath(
        '//*[@id="app-content"]/div/div[2]/div/div[2]/div[2]/div[2]/footer/button[2]'
      )
    )
    .then(
      () => {
        
        driver
          .findElement(
            By.xpath(
              '//*[@id="app-content"]/div/div[2]/div/div[2]/div[2]/div[2]/footer/button[2]'
            )
          )
          .click();
          flg = 0;
      },
      (error) => {
          flg = 1; 
          checkwin(driver);
          console.log("connect");
        //   driver.switchTo().newWindow("tab");
        //   sleep(3000);
        if (error instanceof webdriver.error.NoSuchElementError) {
          console.log("Element not found.");
          // flg = 1;
         
        }
      }
    );
    // flg = 1;
    while (flg === 1) {
      await driver.get(
        "chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/popup.html#connect/nhxUTAO02Hl2jdZZFXaNt/confirm-permissions"
      );
   
      await sleep(3000);
      await driver
        .findElement(
          By.xpath(
            '//*[@id="app-content"]/div/div[2]/div/div[2]/div[2]/div[2]/footer/button[2]'
          )
        )
        .then(
          () => {
            
            driver
              .findElement(
                By.xpath(
                  '//*[@id="app-content"]/div/div[2]/div/div[2]/div[2]/div[2]/footer/button[2]'
                )
              )
              .click();
              flg = 0;
          },
          (error) => {
              flg = 1; 
              checkwin(driver);
              console.log("connect");
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

  async function l3(driver) {
    flg = 1;
    while (flg === 1) {
      await driver.get(
        "chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/popup.html#connect/Ehhjaw9SjGcuaIpu5e700/confirm-permissions"
      );
   
      await sleep(3000);
      await driver
        .findElement(
          By.xpath(
            '//*[@id="popover-content"]/div/div/section/div[1]/div/button'
          )
        )
        .then(
          () => {
            flg = 0;
            driver
              .findElement(
                By.xpath(
                  '//*[@id="popover-content"]/div/div/section/div[1]/div/button'
                )
              )
              .click();
          },
          (error) => {
              flg = 1; 
            if (error instanceof webdriver.error.NoSuchElementError) {
              console.log("Element not found.");
             
              // flg = 1;
            }
          }
        );
    }
  }


  async function checkwin(driver){
    const ele = await driver.getAllWindowHandles();
    console.log("newest window", ele[ele.length - 1]);
    // console.log("length",ele[ele.length-1]);
    const  w = await driver.getWindowHandle();
    console.log("w", w);

    //查看window编号
    for (let i = 0; i < ele.length; i++) {
      console.log("win_id", ele[i]);
    }
    await driver.switchTo().window(ele[ele.length - 1]);
  }

 async function closewin(driver){
    const ele = await driver.getAllWindowHandles();
    await driver.switchTo().window(ele[ele.length - 2]);
    // console.log("newest window", ele[ele.length - 1]);
    // console.log("length",ele[ele.length-1]);
   

   
  }

//   example();
// async function test(){

//   i =0;
//   while (i<4){
//     try {
//          example();
//         // console.log("success",list.length)
//     }
//     finally{
//       i++
//     }

//   }
  
// }

// async function test(){

//     for(i = 0;i < 4; i++){
//         await example();
//     }
    
//   }

// async function t(){
//     await test()
//     console.log("success",list.length)

//  }


// t()
example()