const { Builder, By, Key } = require("selenium-webdriver")
var webdriver = require("selenium-webdriver")

async function example() {

    let chrome = require("selenium-webdriver/chrome");
    let options = new chrome.Options();
    options.addExtensions("/Users/apple/Library/Application Support/Google/Chrome/Default/Extensions/nkbihfbeogaeaoehlefnkodbefgpgknn/10.18.0_0.crx")
    // options.addArguments("--headless")
    let driver = new webdriver.Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        // .findElement(webdriver.By.xpath('/html/body/div[1]/div/div[2]/div/div/div/button')).click()
        .build()

    await driver.manage().window().maximize();
    driver.get("https://aster.so/nft")
const originalWindow = await driver.getWindowHandle(); 
console.log(originalWindow)
        await driver.switchTo().window(originalWindow);
    await driver.findElement(By.xpath('//*[@id="app"]/div/div[1]/div/div[2]/div[3]/div[1]/div')).click();
    await driver.findElement(By.xpath('//*[@id="WEB3_CONNECT_MODAL_ID"]/div/div/div[2]/div[1]/div/div[2]')).click();

    const windows = await driver.getAllWindowHandles();
    windows.forEach(async handle => {
        if (handle !== originalWindow) {
            await driver.switchTo().window(handle);
            const secondwindow = handle;
            console.log("handle", handle);
        }
    });
    // this.driver.manage().setTimeouts({ implicit: 20000, pageLoad: 10000 })
    // this.driver.manage().timeouts().implicitlyWait(1);
    //进入metamask登录界面
    await sleep(1000);
    await driver.findElement(By.xpath('//*[@id="app-content"]/div/div[2]/div/div/div/button')).click();
    //导入钱包
    await driver.findElement(By.xpath('//*[@id="app-content"]/div/div[2]/div/div/div[2]/div/div[2]/div[1]/button')).click();
    //我同意
    await driver.findElement(By.xpath('//*[@id="app-content"]/div/div[2]/div/div/div/div[5]/div[1]/footer/button[2]')).click();
    //开始填助记词
    await driver.findElement(By.xpath('//*[@id="import-srp__srp-word-0"]')).click();
    //助记词
    var word = [
        'jazz ',
        'pupil ',
        'clap ',
        'defy ',
        'junior ',
        'entry ',
        'youth ',
        'path ',
        'pause ',
        'decline ',
        'angle ',
        'unique '
    ]
    for (let i = 0; i < 12; i++) {
        let a = ('//*[@id="import-srp__srp-word-' + i + '"]').toString()
        // console.log(a);
        await driver.findElement(By.xpath(a)).sendKeys(word[i]);
    }


    //fill in fixed pwd
    await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div/div/div[2]/form/div[2]/div[1]/div/input')).sendKeys('named by zyt')
    await driver.findElement(By.xpath('//*[@id="confirm-password"]')).sendKeys('named by zyt')
    await driver.findElement(By.xpath('//*[@id="create-new-vault__terms-checkbox"]')).click();
    handle0 = await driver.getWindowHandle(); 
        console.log("handle0", handle0)
    await driver.findElement(By.xpath('//*[@id="app-content"]/div/div[2]/div/div/div[2]/form/button')).click()
    //等注册页面加载完毕

    // await setTimeout()
    // await driver.wait(until.elementLocated(By.css('#app-content > div > div.main-container-wrapper > div')),10000);
 
    handle2 = await driver.getWindowHandle(); 
    console.log("handle2", handle2);
    await sleep(5000);
    // await driver.findElement(By.xpath('//*[@id="app-content"]/div/div[2]/div/div/button')).click();//已经证明是同一个window
    // const finishbutton = await driver.findElement(By.xpath('//*[@id="app-content"]/div/div[2]/div/div'))
    // await finishbutton.click({ x: 44,y:304 })
    //这里总是出问题
    // handle1 = await driver.getWindowHandle(); 
    //     console.log("handle1", handle1)
    // await driver.switchTo().window(handle1);//找不到？？？
    


    // console.log("handle1", handle)
    // await driver.findElement(By.xpath('//*[@id="app-content"]/div/div[2]/div/div/button')).click();
    // await driver.switchTo().newWindow('tab');
    // await driver.get("chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/home.html#")
    // await driver.findElement(By.xpath('//*[@id="popover-content"]/div/div/section/div[1]/div/button')).click();
    // await driver.findElement(By.xpath('//*[@id="app-content"]/div/div[2]/div/div/button')).click();
    // windows.forEach(async handle => {
    //     if (handle !== originalWindow) {
    //       await driver.switchTo().window(handle);

    //     }
    //   });
    // await driver.findElement(By.xpath('//*[@id="password"]')).click();
    // await driver.findElement(By.xpath('//*[@id="password"]')).sendKeys('named by zyt');


    //打开插件
    // chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/notification.html
    // await driver.get('chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/notification.html')
    // windows.forEach(async handle => {
    //     if (handle !== originalWindow) {
    //         await driver.switchTo().window(handle);
    //         const secondwindow = handle;
    //         console.log("handle", handle);
    //     }
    // });
    // console.log("handle3",driver.getWindowHandle())
   
    //跳回第一个窗口
    // await driver.switchTo().window(originalWindow);
    //新建一个窗口
    await driver.switchTo().newWindow('tab');
    // await driver.get('chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/home.html');
    await driver.get('chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/popup.html')
    await sleep(3000);
    // console.log("nowwindow",driver.getWindowHandle());
    // let ele = await driver.getAllWindowHandles();
    // console.log("ele",ele[0]);
    const ele = await driver.getAllWindowHandles();
    console.log("length",ele.length);
    // console.log("length",ele[ele.length-1]);
    
    //查看window编号
    for (let i = 0; i < ele.length; i++){
        console.log("win_id",ele[i]);
    }
    await driver.switchTo().window(ele[ele.length-1]);
    
    
    await sleep(3000);
  
    //下一步
    // await driver.findElement(By.xpath('//*[@id="app-content"]/div/div[2]/div/div[3]/div[2]/button[2]')).click();
    // let value = await driver.findElement(By.xpath('//*[@id="app-content"]/div/div[2]/div/div[3]/div[2]/button[2]'));
    // await value.click();
    l1();

    
  
    await sleep(3000);
    l2();

    //连接
    //     await driver.findElement(By.xpath('//*[@id="app-content"]/div/div[2]/div/div[2]/div[2]/div[2]/footer/button[2]')).click();


    //     await sleep(3000);
    //   x
    //     await driver.findElement(By.xpath('//*[@id="popover-content"]/div/div/section/div[1]/div/button')).click();
    // }
    
    // //至此进入钱包页面
    await sleep(2000);
    await driver.switchTo().window(originalWindow);
    //click on my account
    await driver.findElement(By
        .xpath('//*[@id="app"]/div/div[1]/div/div[2]/div[3]/div[1]/div[1]')).click();
    
    //my collection
    await driver.findElement(By
        .xpath('//*[@id="collections"]/div[2]')).click();
    
    await sleep(5000);
    
    //create collection
    // await driver.findElement(By
    //     .xpath('//*[@id="app"]/div[2]/div[1]/div[2]/div[2]/div[2]')).click();
    // await sleep(2000);
    //... 
    
    await driver.findElement(By
            .xpath('//*[@id="app"]/div[2]/div[2]/div[2]/div[2]/img')).click();
    //*[@id="app"]/div[2]/div[2]/div[2]
    await sleep(5000);
    //edit
    // await driver.findElement(By
    //     .xpath('//*[@id="creator-earnings"]')).click();
    text = await driver.findElement(By
        .xpath('//*[@id="app"]/div[2]/div[2]/div[3]/div[1]')).getText();
    
    let url = ('https://aster.so/collection/edit/'+text).toString()

    // await driver.get("https://aster.so/collection/edit/hj");
    await driver.get(url);
    // await driver.get("https://aster.so/collection/create");
    await sleep(3000);

    //edit name
    
    await driver.findElement(By
        .xpath('//*[@id="app"]/div[2]/div[2]/div/input[1]')).sendKeys('editted success');
    await sleep(6000);
    //edit image
    // await driver.findElement(By
    //     .xpath(' //*[@id="app"]/div[2]/div[2]/div/div[2]/label')).click();
    // await sleep(2000);
    // var robot = require("robotjs");
    // var modifiers = []
    // robot.setMouseDelay(3000)
   
    // robot.moveMouse(850, 250);
    // robot.mouseClick();


    // modifiers.push('command')

    // robot.keyToggle("a", "down", modifiers)

    // robot.keyToggle("a", "up", modifiers)
    // await driver.findElement(By
    //     .xpath('//*[@id="app"]/div[2]/div[2]/div/div[2]/label')).sendKeys("/Users/apple/Downloads/logo.jpeg");

    //submit
     console.log(driver.findElement(By
        .xpath('//*[@id="submit-button"]')))


 await driver.findElement(By
        .xpath('//*[@id="submit-button"]')).click();
    await sleep(1000);

    
   //image
    // await driver.findElement(By
    //     .xpath(' //*[@id="app"]/div[2]/div[2]/div/div[2]/label')).click();
    // await sleep(2000);
    // await driver.findElement(By
    //     .xpath('//*[@id="app"]/div[2]/div[2]/div/div[2]/label')).sendKeys("/Users/apple/Downloads/logo.jpeg");


}

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

function waituntilfound () {

}

function cannotfindelement() {
    d
}
//轮询1
async function l1(){
    flg = 1;
    while (flg === 1) {
        await driver.get('chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/popup.html')
        await sleep(3000);
        // let value = await driver.findElement(By.xpath('//*[@id="app-content"]/div/div[2]/div/div[3]/div[2]/button[2]'));
        if( driver.findElement(By.xpath('//*[@id="app-content"]/div/div[2]/div/div[3]/div[2]/button[2]'))){
            let value =driver.findElement(By.xpath('//*[@id="app-content"]/div/div[2]/div/div[3]/div[2]/button[2]'));
            flg = 0;  
            console.log("value",value);
            await value.click();
            
        }else{
            flg = 1;
            console.log("loop ");
        }
        
    }

}
//轮询2
async function l2(){
    while(!driver.findElement(By.xpath('//*[@id="app-content"]/div/div[2]/div/div[2]/div[2]/div[2]/footer/button[2]')))  {
        l1();
        await driver.findElement(By.xpath('//*[@id="app-content"]/div/div[2]/div/div[2]/div[2]/div[2]/footer/button[2]')),click();
        await driver.findElement(By.xpath('//*[@id="popover-content"]/div/div/section/div[1]/div/button')).click();


    }
    
    

}


example()
// track_mouse()
