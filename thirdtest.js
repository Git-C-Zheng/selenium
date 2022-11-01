import {Builder, Capabilities} from 'selenium-webdriver';
import {Options, ServiceBuilder, setDefaultService} from 'selenium-webdriver/chrome';
import * as chromedriver from 'chromedriver';
import * as path from 'path';
import * as fs from 'fs';

// const encodeExt = file => {
//   const stream = fs.readFileSync(path.resolve(file));
//   return Buffer.from(stream).toString('base64');
// };

// const service = new ServiceBuilder(chromedriver.path).build();
// setDefaultService(service);

const driver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .setChromeOptions(new Options()
    .addExtensions(encodeExt('/Users/apple/Library/Application Support/Google/Chrome/Default/Extensions/nkbihfbeogaeaoehlefnkodbefgpgknn/10.17.0_0.crx')))       
  .build(); 