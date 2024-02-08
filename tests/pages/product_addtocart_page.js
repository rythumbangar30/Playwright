const {expect} = require('@playwright/test');
exports.ProductAddCart = class ProductAddCart{
    constructor(page){
        this.page = page;
        this.add = page.getByRole('link',{name:' Add to cart '});
        this.wait = page.waitForTimeout(5000);
        this.home = page.getByRole('link',{name:'Home'});

    }
    // async addBtn(){
    //     await this.add.click();
    // }
    // async waitScreen(){
    //     await this.wait;
    // }
    // async returnBack(){
    //     await this.home.click();
    // }
    async addToCart(){
        
        await this.add.click();
        await this.wait;
        await this.home.click();

        // await this.addBtn();
        // await this.waitScreen();
        // await this.returnBack();
    }
}