const { test, expect } = require('@playwright/test');
const config = require('../../config.js');
const { FacebookDevPage } = require('../pages/facebook.login.page.js');

let baseUrl,email,firstname,lastname,password;
test.beforeAll(async(browser)=>{
     baseUrl =config.facebookbaseUrl;
     firstname = config.firstname;
     lastname = config.lastname;
     email = config.email;
     password = config.password;
});
test("Shyam Logining Facebook",async({page})=>{
    
    
    const facebookDevPage = new FacebookDevPage (page);
    await facebookDevPage.goto(baseUrl); 
    await facebookDevPage.loginEmail(email);
    await facebookDevPage.loginPassword(password);
    // await facebookDevPage.clickLogin();
    // await facebookDevPage.waitTime();

    await facebookDevPage.clickCreateAcc();
    await facebookDevPage.enterFirstName(firstname);
    await facebookDevPage.enterLastName(lastname);
    await facebookDevPage.enterEmail(email);
    await facebookDevPage.enterPassword(password);
    await facebookDevPage.day();
    await facebookDevPage.month();
    await facebookDevPage.year();
    await facebookDevPage.re_enterEmail(email);
    await facebookDevPage.gender();
    await facebookDevPage.waitTime();


})

