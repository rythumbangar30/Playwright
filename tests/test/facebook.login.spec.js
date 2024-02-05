const { test, expect } = require('@playwright/test');
const config = require('../../config.js');
const { FacebookDevPage } = require('../pages/facebook.login.page.js');

test("Shyam Logining Facebook",async({page})=>{
    
    const baseUrl =config.baseUrl;
    const firstname = config.firstname;
    const lastname = config.lastname;
    const email = config.email;
    const password = config.password;
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

