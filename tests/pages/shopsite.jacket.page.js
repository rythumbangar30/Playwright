const{expect} = require('@playwright/test');
exports.ShopJacketPage = class ShopJacketPage{
    constructor(page){
        this.page = page;
        this.adrienneJacket = page.getByText('Adrienne Trek Jacket');
        this.oliviaJacket = page.getByText('Olivia 1/4 Zip Light Jacket');
        this.junoJacket = page.getByText('Juno Jacket');
        this.neveDanceJacket = page.getByText('Neve Studio Dance Jacket');
        this.nadiaShell = page.getByText('Nadia Elements Shell ');
        this.wait = page.waitForTimeout(5000);

    }
    async addJacketByName(txt){
        await this.page.getByText(txt).click();
    }
    async adriennejacket(){
        await this.adrienneJacket.click();
    }
    async oliviajacket(){
        await this.adrienneJacket.click();
    }
    async junojacket(){
        await this.junoJacket.click();
    }
    async nevedancejacket(){
        await this.neveDanceJacket.click();
    }
    async nadiashelljacket(){
        await this.nadiaShell.click();
    }
    async waitScreen(){
        await this.wait;
    }
}