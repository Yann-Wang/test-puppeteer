const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch({
    executablePath: '../chrome-mac/Chromium.app/Contents/MacOS/Chromium'
  });
  const page = await browser.newPage();
  
  await page.goto('https://github.com');
  await page.screenshot({ path: 'screenshots/github.png' });
  
  browser.close();
}

run();

//jjadf8721