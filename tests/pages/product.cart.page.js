const {expect} = require('@playwright/test');
exports.ProductCartPage = class ProductCartPage{
    constructor(page){
        this.page = page;
        this.placeOrder = page.getByRole('button',{name:'Place order'});
        this.name = page.locator('#name');
        this.country = page.locator('#country');
        this.city = page.locator('#city');
        this.card = page.locator('#card');
        this.month = page.locator('#month');
        this.year = page.locator('#year');
        this.purchase = page.getByRole('button',{name:'Purchase'});
        this.submit = page.getByRole('button',{name:"OK"});
        this.wait = page.waitForTimeout(3000);

    }
    async placeOrderItem(){
        await this.placeOrder.click();
    }
    async fillname(personname){
        await this.name.fill(personname);
    }
    async fillcountry(personcountry){
        await this.country.fill(personcountry);
    }
    async fillcity(personcity){
        await this.city.fill(personcity);
    }
    async fillcard(personcard){
        await this.card.fill(personcard);
    }
    async fillmonth(personmonth){
        await this.month.fill(personmonth);
    }
    async fillyear(personyear){
        await this.year.fill(personyear);
    }
    async purchaseBtn(){
        await this.purchase.click();
    }
    async submitBtn(){
        await this.submit.click();
    }
    async fillDetail(personname,personcountry,personcity,personcard,personmonth,personyear){
        await this.name.fill(personname);
        await this.country.fill(personcountry);
        await this.city.fill(personcity);
        await this.card.fill(personcard);
        await this.month.fill(personmonth);
        await this.year.fill(personyear);

    }
    async waitScreen(){
        await this.wait;
    }
}