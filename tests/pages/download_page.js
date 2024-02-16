const{expect} = require('@playwright/test');
exports.DownloadDemo = class DownloadDemo{
    constructor(page){
        this.page = page;
        this.textbox = page.locator('#textbox');
        this.infotext = page.locator('#createTxt');
        // this.download = page.locator('#link-to-download');
        this.downloadFile = page.getByRole('link',{name:'Download'});
        this.wait = page.waitForTimeout(5000);
    }
    async goto(url){
        await this.page.goto(url);
    }
    async fillTextbox(text){
        await this.textbox.fill(text);
    }
    async downloadTextFile(){
        const downloadPromise = await this.page.waitForEvent('download');
        await this.downloadFile.click();
        const download = await downloadPromise;
        await download.saveAs('photos//info.pdf'+download.suggestedFilename());

    }
    async waitScreen(){
        await this.wait;
    }
}