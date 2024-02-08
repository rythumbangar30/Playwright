const {expect} = require('@playwright/test');
exports.WebDriverContact = class WebDriverContact{
    constructor(page){
        this.page = page;
        this.firstname = page.getByPlaceholder("First Name");
        this.lastname = page.getByPlaceholder("Last Name");
        this.email = page.getByPlaceholder("Email Address");
        this.comment = page.getByPlaceholder("Comments");
        this.submit = page.locator('input[type="submit"]');
        this.back = page.goBack;
        this.wait = page.waitForTimeout(5000);
    }
    async fillFirstName(name){
        await this.firstname.fill(name);
    }
    async fillLastName(surname){
        await this.lastname.fill(surname);
    }
    async fillemail(mail){
        await this.email.fill(mail);
    }
    async fillcomment(review){
        await this.comment.fill(review);
    }
    async submitBtn(){
        await this.submit.click();
    }
    async goReturn(){
        await this.back;
    }
    async waitScreen(){
        await this.wait;
    }
}