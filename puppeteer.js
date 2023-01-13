/*
 * @Todo: 请补充模块描述
 * 
 * @Author: dengpeng
 * @Date: 2023-01-12 17:09:27
 * 
 * Copyright © 2014-2023 Rabbitpre.com. All Rights Reserved.
 */

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        args: ['--remote-debugging-port=9222', '--remote-debugging-address=0.0.0.0'],
    }); const page = await browser.newPage();
    let res = await page.goto('https://www.baidu.com');

    console.log(browser.wsEndpoint());
    // output -> ws://127.0.0.1:57724/devtools/browser/705082a5-19e6-4e9a-b8a6-477b7b6e1bd6
})();