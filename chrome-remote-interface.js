/*
 * @Todo: 请补充模块描述
 * 
 * @Author: dengpeng
 * @Date: 2023-01-11 15:01:19
 * 
 * Copyright © 2014-2023 Rabbitpre.com. All Rights Reserved.
 */

const CDP = require('chrome-remote-interface');

async function example() {
    let client;
    try {
        // connect to endpoint
        client = await CDP();
        // extract domains
        const { Network, Page } = client;
        // setup handlers
        Network.requestWillBeSent((params) => {
            console.log(params.request.url);
        });
        // enable events then start!
        await Network.enable();
        await Page.enable();
        await Page.navigate({ url: 'https://github.com' });
        await Page.loadEventFired();
    } catch (err) {
        console.error(err);
    } finally {
        if (client) {
            await client.close();
        }
    }
}

example();