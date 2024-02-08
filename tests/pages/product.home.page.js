const {expect} = require('@playwright/test');
exports.ProductStoreHome = class ProductStoreHome{
    constructor(page){
        this.page = page;
        this.product7= page.getByRole('link',{name:"HTC One M9"});
        // this.product1 = page.getByRole('link',{name:'Samsung galaxy s6'});
        this.cart = page.getByRole('link',{name:" Cart ",exact:true});
    }
    async goto(url){
        await this.page.goto(url);
    }
    async htcMobile(){
        await this.product7.click();
    }
    async selectMobileByName(txt){
        await this.page.getByRole('link',{name:txt}).click();
    }
    async cartBtn(){
        await this.cart.click();
    }
}