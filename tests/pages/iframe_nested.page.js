const{expect} = require('@playwright/test');
exports.NestediFrame = class NestediFrame{
    constructor(page){
        this.page = page;
        const singleframe = page.frameLocator('iframe[src="MultipleFrames.html"]');
        this.mulitpleframe = singleframe.frameLocator('iframe[src="SingleFrame.html"]').locator('input[type="text"]');
        this.wait = page.waitForTimeout(4000);
    }
     async multipleFrameTextbox(text){
        await this.mulitpleframe.fill(text);
    }
    async waitScreen(){
        await this.wait;
    }
}