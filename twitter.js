const { Builder, By, Key, until, WebElement } = require('selenium-webdriver');
const sharp = require('sharp')
const fs = require('fs')

const basedir = 'src/services/'

const loginTwitter = async (driver) => {

    // load login page
    await driver.get('https://twitter.com/login');

    // wait until page loaded
    // todo
    await driver.sleep(3000)
    await driver.findElement(By.name('text')).sendKeys('email', Key.RETURN);
    //

}





const validateTweet = async (driver, content, url) => {
    const response = {}
    // // if not logged in
    // no need to login twitter to see the content
    // await loginTwitter()

    // else load content page
    await driver.get(url.baseUrl + url.subDirectory);
    // await driver.manage().window().maximize();
    const zoomLevel = 1
    await driver.executeScript(`document.body.style.zoom='${zoomLevel * 100}%'`)

    // looking for content with locator
    await driver.wait(until.elementLocated(By.xpath(`//a[@href="${url.subDirectory}"]`)), 30 * 1000).then(async webElement => {
        // await webElement.getText().then(res => {
        //     console.log(res)
        // })
        await driver.executeScript("window.scrollTo(0,0)")
        //hide login and accept-cookie div
        await driver.findElement(By.id('layers')).then(async layers =>{
            console.log(layers)
            await driver.executeScript("arguments[0].style.display = 'none';" , layers);
        });
        
        await driver.takeScreenshot().then(base64 => {
            fs.writeFile('output/out.png', base64, 'base64', (err) => {
                // todo
            });
        })

        // locate the tweet
        await driver.findElement(By.css('article')).then(async article => {
            console.log('article')
            console.log(article)

            // article screenshot
            await article.takeScreenshot(true).then(articleB64 => {
                fs.writeFile('output/article.png', articleB64, 'base64', function (err) {
                    console.log(err);
                });
            })

            // location = article.location
            // size = article.size
            let rect = await article.getRect();
            console.log(rect)
            const devicePixelRatio = Number.parseInt(await driver.executeScript("return window.devicePixelRatio"))
            console.log(devicePixelRatio)
            const left = Math.round(rect.x) * zoomLevel * devicePixelRatio
            const top = Math.round(rect.y) * zoomLevel * devicePixelRatio
            const width = Math.round(rect.width) * zoomLevel * devicePixelRatio
            const height = Math.round(rect.height) * zoomLevel * devicePixelRatio
            sharp('output/out.png')
                .extract({ left, top, width, height })
                .toFile('output/verified.png', function (err) {
                    if (err) console.log(err);
                })
            
            response.imageBase64 = new Buffer.from(fs.readFileSync('output/verified.png')).toString('base64');



            await article.findElement(By.xpath('div/div/div/div[3]/div[1]/div/div')).then(async ele => {
                console.log('got tweet')
                await ele.getAttribute('innerHTML').then(async res => {
                    response['result'] = res === content.xmlString
                    response.observeredContent = res
                })
            })
        });
    }).catch(err => {
        console.error(err)
    });
    return response
}

module.exports = {
    loginTwitter,
    validateTweet
}
