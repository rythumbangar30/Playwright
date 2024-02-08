const{expect} = require('@playwright/test');
exports.WebDriverProductPage = class WebDriverProductPage{
    constructor(page){
        this.page = page;
        this.wait = page.waitForTimeout(5000);
        this.proceed = page.getByText('Proceed');
    }
    async getProductByName(name){
        await this.page.getByText(name).click();
    }
    async proceedBtn(){
        await this.proceed.click();
    }
    async waitScreen(){
        await this.wait;
    }
}