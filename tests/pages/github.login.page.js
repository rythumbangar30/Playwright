const {expect} = require('@playwright/test')
exports.GitHubDevPage=class GitHubDevPage{
    constructor(page){
        this.page = page;
        // this.signInLink = page.getByRole('link',{name:'Sign in'});
        this.loginTextBox = page.locator('input[id="login_field"]');
        this.passwordTextBox = page.locator("input[id='password']");
        this.signButton = page.getByRole('button',{name:'Sign in'});
        this.wait = page.waitForTimeout(2000);
    }
    async goto(url){
        await this.page.goto(url);
    }
    // async signIn(){
    //     await this.signInLink.click();
    // }
    async userDetail(username){
        await this.loginTextBox.fill(username);
    }
    async userPassword(password){
        await this.passwordTextBox.fill(password);
    }
    async loginButton(){
        await this.signButton.click();
    }
    async waitScreen(){
        await this.wait;
    }
}