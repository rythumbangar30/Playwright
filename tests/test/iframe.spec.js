const {test,expect} = require('@playwright/test');
const {SingleiFrame} = require('../pages/iframe_single.page');
const { NestediFrame } = require('../pages/iframe_nested.page');
test('iFrame page',async({page})=>{
    var singleFrame = new SingleiFrame(page);
    await singleFrame.goto("https://demo.automationtesting.in/Frames.html");
    await singleFrame.frametextbox("Cream Bhium");
    await singleFrame.waitScreen();
    await singleFrame.nestedFrameBtn();

    var nestedFrame = new NestediFrame(page);
    await nestedFrame.multipleFrameTextbox("bhim Cream");
    await nestedFrame.waitScreen();
})