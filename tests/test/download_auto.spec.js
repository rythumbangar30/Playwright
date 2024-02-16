const {test,expect} = require('@playwright/test');
const config = require('../../config');
const {DownloadDemo} = require('../pages/download_page');
let paragraph;
test.beforeAll(async(browser)=>{
    paragraph = config.paragraph;
})
test('download info',async({page})=>{
    const downloadInfo = new DownloadDemo(page);
    await downloadInfo.goto('https://demo.automationtesting.in/FileDownload.html');
    await downloadInfo.fillTextbox(paragraph);
    await downloadInfo.downloadTextFile();
    await downloadInfo.wait;
})