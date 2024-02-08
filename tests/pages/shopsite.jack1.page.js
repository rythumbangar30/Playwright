const {expect} = require('@playwright/test');
exports.ShopSizePage = class ShopSizePage{
    constructor(page){
        this.page = page;
        // this.size = page.locator('#option-label-size-143-item-167');
        // this.color = page.locator('#option-label-color-93-item-57');
        this.size = page.getByLabel('S', { exact: true });
        this.color = page.getByLabel('Purple');
        this.quantity = page.locator('#qty');
        this.add = page.getByRole('button',{name:'Add to Cart'});
        this.cartIcon = page.getByRole('link',{name:'My Cart'});
        this.checkout = page.locator('#top-cart-btn-checkout');
        this.wait = page.waitForTimeout(7000);
    }
    async selectSize(){
        await this.size.click();
    }
    async selectColor(){
        await this.color.click();
    }
    async selectQuantity(number){
        await this.quantity.fill(number);
    }
    async addToCart(selectSize,selectColor,selectQuantity){
        await this.page.getByLabel(selectSize, { exact: true }).click();
        await this.page.getByLabel(selectColor).click();
        await this.page.locator('#qty').fill(selectQuantity);
        await this.add.click();
    }
    async cartIconBtn(){
        await this.cartIcon.click();
    }
    async checkoutBtn(){
        await this.checkout.click();
    }
    async waitScreen(){
        await this.wait;
    }
}