const { expect } = require('@playwright/test');
exports.ShopHomePage = class ShopHomePage{
    constructor(page){
        this.page = page;
        this.womenSection = page.locator('#ui-id-4');
        this.topsSection = page.locator('#ui-id-9');
        this.bottomsSection = page.locator("ui-id-10");
        this.jacketSection = page.locator('#ui-id-11');
        this.hoodiesSweatShirtsSection = page.locator('#ui-id-12');
        this.teesSection = page.locator('#ui-id-13');
        this.brasTanksSection = page.locator('#ui-id-14');
        this.pantsSection = page.locator('#ui-id-15');
        this.shortsSection = page.locator('#ui-id-16');
        this.wait = page.waitForTimeout(5000);
    }
    async goto(url){
        await this.page.goto(url);
    }
    async womensection (){
        await this.womenSection.hover();
    }
    async topssection(){
        await this.topsSection.hover();
    }
    async bottomssection(){
        await this.bottomsSection.hover();
    }
    async jacketsection(){
        await this.womenSection.hover();
        await this.topsSection.hover();
        await this.jacketSection.click();
    }
    async hoodiesswearshirtsection(){
        await this.womenSection.hover();
        await this.topsSection.hover();
        await this.hoodiesSweatShirtsSection.click();
    }
    async pantssection(){
        await this.womenSection.hover();
        await this.topsSection.hover();
        await this.pantsSection.click();
    }
    async brastankssection(){
        await this.womenSection.hover();
        await this.topsSection.hover();
        await this.brasTanksSection.click();
    }
    async pantssection(){
        await this.pantsSection.click();
    }
    async shortssection(){
        await this.shortsSection.click();
    }
    async waitScreen(){
        await this.wait;
    }
}