const {expect} = require ('@playwright/test');
exports.SingleiFrame = class SingleiFrame{
    constructor(page){
        this.page = page;
        this.singleFrameTextbox = page.frameLocator('#singleframe').locator('input[type="text"]');
        this.nestedFrame = page.getByText('Iframe with in an Iframe');
        this.wait = page.waitForTimeout(4000);
    }
    async goto(url){
        await this.page.goto(url);
    }
    async frametextbox(text){
        await this.singleFrameTextbox.fill(text);
    }
    async nestedFrameBtn(){
        await this.nestedFrame.click();
    }
    async waitScreen(){
        await this.wait;
    }
}