const { expect } = require('@playwright/test');
exports.WebDriveHomePage = class WebDriveHomePage{
    constructor(page){
        this.page = page;
        this.productpage = page.getByText("Our Products");
        this.contactpage = page.getByText("Contact Us");
        this.homepage = page.getByText("Home");
        this.pomlink = page.getByRole('link',{name:"PAGE OBJECT MODEL"});
        this.picture = page.locator('span[class="glyphicon glyphicon-chevron-right"]');
        this.wait = page.waitForTimeout(5000);
    }
    async goto(url){
        await this.page.goto(url);
    }
    async changePicture(){
        await this.picture.click();
    }
    async productPage(){
        await this.productpage.click();
    }
    async contactPage(){
        await this.contactpage.click();
    }
    async homePage(){
        await this.homepage.click();
    }
    async waitScreen(){
        await this.wait;
    }
}