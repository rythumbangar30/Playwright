const {expect} = require('@playwright/test');
exports.ProductSeven = class ProductSeven{
    constructor(page){
        // page.setDefaultTimeout(2000);
        this.page = page;
        this.add = page.getByRole('link',{name:' Add to cart '});
        this.wait = page.waitForTimeout(5000);
        this.home = page.getByRole('link',{name:'Home'});

        // this.back = page.goBack();
    }
    async addBtn(){
        await this.add.click();
    }
    async waitScreen(){
        await this.wait;
    }
    async returnBack(){
        await this.home.click();
    }

}