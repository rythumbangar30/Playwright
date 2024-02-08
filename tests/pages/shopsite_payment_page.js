const{expect} = require('@playwright/test');
const exp = require('constants');
exports.ShopPaymentPage = class ShopPaymentPage{
    constructor(page){
        this.page = page;
        this.check = page.getByRole('checkbox',{name:"My billing and shipping address are the same"});
        this.submit = page.getByRole('button',{name:'Place Order'});
    }
    async checkAddress(){
        await this.check.check();
        // await expect(page.getByRole('checkbox',{name:"My billing and shipping address are the same"})).toBeChecked();
    }
    async submitBtn(){
        await this.submit.click();
    }
}