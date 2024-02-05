
const { expect } = require('@playwright/test');
exports.FacebookDevPage = class FacebookDevPage{
   constructor(page){
      this.page = page;
      this.emailLogin = page.locator('input[id="email"]');
      this.passwordLogin = page.locator('input[id="pass"]');
      this.loginButton = page.getByRole('button',{name : 'Log in'});


      this.createButton = page.getByTestId("open-registration-form-button");
      this.firstNameTextBox = page.getByPlaceholder("First name");
      this.lastNameTextBox = page.locator('input[name="lastname"]');
      this.emailTextBox = page.locator('input[name="reg_email__"]');
      this.passwordTextBox = page.getByLabel("New password");
      this.reEmailTextBox = page.locator("input[name='reg_email_confirmation__']");
      this.dayDrop = page.selectOption('#day',{index:23})
      this.monthDrop = page.selectOption('#month',{label:'Jun'})
      this.yearDrop = page.selectOption('#year',{value:'2000'})
      this.genderOption = page.locator('input[value="1"]');
      this.wait= page.waitForTimeout(10000);
   }
   async goto(url){
     await this.page.goto(url);
   }
   async loginEmail(email){
      await this.emailLogin.fill(email);
   }
   async loginPassword(password){
      await this.passwordLogin.fill(password);
   }
   async clickLogin(){
      await this.loginButton.click();
   }
   async clickCreateAcc(){
      await this.createButton.click();
   }
   async enterFirstName(firstname){
      await this.firstNameTextBox.fill(firstname);
   }
   async enterLastName(lastname){
      await this.lastNameTextBox.fill(lastname);
   }
   async enterEmail(email){
      await this.emailTextBox.fill(email);
   }
   async enterPassword(password){
      await this.passwordTextBox.fill(password);
   }
   async re_enterEmail(re_email){
      await this.reEmailTextBox.fill(re_email);
   }
   async day(){
      await this.dayDrop;
   }
   async month(){
      await this.monthDrop;
   }
   async year(){
      await this.yearDrop;
   }
   async gender(){
      await this.genderOption.check();
   }
   async waitTime(){
      await this.wait;
   }
}
