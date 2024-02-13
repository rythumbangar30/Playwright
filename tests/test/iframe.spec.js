const {test,expect} = require('@playwright/test');
const {SingleiFrame} = require('../pages/iframe_single.page');
const { NestediFrame } = require('../pages/iframe_nested.page');
const config = require('../../config');
let baseUrl,text;
test.beforeAll(async(browser)=>{
    baseUrl = config.iframebaseUrl;
    text = config.text;
})
test('iFrame page',async({page})=>{
    var singleFrame = new SingleiFrame(page);
    await singleFrame.goto(baseUrl);
    await singleFrame.frametextbox(text);
    await singleFrame.waitScreen();
    await singleFrame.nestedFrameBtn();

    var nestedFrame = new NestediFrame(page);
    await nestedFrame.multipleFrameTextbox(text);
    await nestedFrame.waitScreen();
})