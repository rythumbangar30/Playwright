import {test , expect} from '@playwright/test';
import { link } from 'fs';

// test('Facebook Login Page',async({ page })=>{
//     await page.goto("https://www.facebook.com/");
     
//     await expect(page).toHaveTitle("Facebook – log in or sign up");

//     await page.locator('input[id="email"]').fill("acbd@gmail.com");
//     // await page.getByPlaceholder("Email address or phone number").fill("abc@gmail.com");
//     // await expect(page.locator('input[id="email"]')).toContainText("acbd@gmail.com");
//     await expect(page).toHaveURL("https://www.facebook.com/");

//     // await page.locator('input[id="pass"]').fill("gadhcvbh@345");
//     await page.getByTestId("royal_pass").fill("gadhcvbh@345");

//     // await expect(page.locator('input[id="pass"]')).toContainText;

    
//     await page.getByRole('button',{name : 'Log in'}).click();
    
//     await page.waitForTimeout(20000);
// })

test('Facebook Create Account Page', async({page})=>{

    await page.goto("https://www.facebook.com/");
    
    // await page.setDefaultTimeout(10000);
    await expect(page).toHaveTitle("Facebook – log in or sign up");

    // await page.getByRole('role',{name : 'Create new account'}).click;
    await page.getByTestId("open-registration-form-button").click();
    await expect(page).toBeDefined;

    await page.getByPlaceholder("First name").fill("Cream");
    
    await page.locator('input[name="lastname"]').fill("Vish");
    
    await page.locator('input[name="reg_email__"]').clear();
    
    await page.locator('input[name="reg_email__"]').fill("vish234@gmail.com");
    
    await page.getByLabel("New password").fill("afdgju@36487374");
    
    await page.locator("input[name='reg_email_confirmation__']").fill("vish234@gmail.com");
    
    await page.selectOption('#day',{
        index: 23
    })
    await page.selectOption('#month',{
        label:'Jun'
    })
    await page.selectOption('#year',{
        value:'2000'
    })
    
    await page.locator('input[value="1"]').check();

    await page.getByRole('button',{name:"Sign up"});
    // For male button
    // await page.locator('input[value="2"]').check();

    //Not Working Custom selector
    // await page.locator('input[value="-1"]').check();
    // await page.locator('#Select your pronoun',{
    //     value:'2'
    // })
    await page.waitForTimeout(10000);
})

test("Github Login",async({page})=>{
    await page.goto("https://github.com/");

    await page.getByRole('link',{name:'Sign in'}).click();
    // await page.getByText("Sign in").click();

    await page.locator('input[id="login_field"]').fill("rythum.bangar@liseinfotech.com");
    await page.locator("input[id='password']").fill("Rythum30@"); 
    await page.getByRole("button",{name:'Sign in'}).click();
    await page.getByRole('link',{name:'rythumbangar30/Selenium'}).click();
    await page.locator('input[id="pull-requests-tab"]').click();
    await page.waitForTimeout(20000);
})