BaseUrl = {
    Twitter: 'https://twitter.com',
    Facebook: '',
    TikTok: '',
}

vState = {
    driver: undefined
}
const { Builder, By, Key, until, WebElement } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const webdriver = require('selenium-webdriver');
const chromedriver = require('chromedriver');
const TweetHandler = require('./twitter')

const validate = async (opt) => {
    let response
    let driver
    try {
        driver = await startDriver();
        // await driver.getCapabilities().then(capabilities => {
        //     console.log(capabilities)
        // })
        // console.log('driver', driver)
        if (opt) {
            switch (opt.type) {
                case 'Twitter':
                    response = await TweetHandler.validateTweet(driver, opt.content, opt.url);
                    break;
                case 'Facebook':
                    break;
                case 'TikTok':
                    break;
                default:
                // todo
            }
        }
        await driver.sleep(3000)
    } catch (e) {
        // todo
        console.error(e)
        await driver?.takeScreenshot().then(base64 => {
            require('fs').writeFile('error.png', base64, 'base64', function (err) {
                console.log(err);
            });
        })
    } finally {
        if (driver)
            await driver.quit();
    }
    return response
}

const startDriver = async () => {

    let options = new chrome.Options()
	.windowSize({ width: 3840, height: 2160 })
        .addArguments('headless')
        .addArguments('no-sandbox')
        .addArguments('--lang=en-us')
    chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());
    return await new Builder()
        .withCapabilities(webdriver.Capabilities.chrome())
        .setChromeOptions(options)
        .build();
}

module.exports = {
    validate
}