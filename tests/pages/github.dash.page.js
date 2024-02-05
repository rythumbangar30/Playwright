const {expect} = require('@playwright/test')
exports.GithubDashPage = class GithubDashPage{
    constructor(page){
        this.page = page;
        this.signUp = page.getByText("Email address").nth(1);
        this.signUpButton = page.getByRole('button', { name: 'Sign up for GitHub' }).first();
        this.signInLink = page.getByRole('link',{name:'Sign in'});
        this.wait = page.waitForTimeout(2000);
    }
    async goto(url){
        await this.page.goto(url);
    }
    async signUrl(username){
        await this.signUp.fill(username);
    }
    async signupBtn(){
        await this.signUpButton.click();
    }
    async signIn(){
        await this.signInLink.click();
    }
    async waitScreen(){
        await this.wait;
    }
}