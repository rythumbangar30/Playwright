import {test , expect} from '@playwright/test';
import { link } from 'fs';
// test.describe.configure({ mode:'parallel' });
test('Facebook Login Page',async({ page })=>{
    await page.goto("https://www.facebook.com/");
     
    await expect(page).toHaveTitle("Facebook – log in or sign up");

    await page.locator('input[id="email"]').fill("acbd@gmail.com");
    // await page.getByPlaceholder("Email address or phone number").fill("abc@gmail.com");
    // await expect(page.locator('input[id="email"]')).toContainText("acbd@gmail.com");
    await expect(page).toHaveURL("https://www.facebook.com/");

    // await page.locator('input[id="pass"]').fill("gadhcvbh@345");
    await page.getByTestId("royal_pass").fill("gadhcvbh@345");

    // await expect(page.locator('input[id="pass"]')).toContainText;

    
    await page.getByRole('button',{name : 'Log in'}).click();
    
    await page.waitForTimeout(5000);
})

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

// test("Github Login",async({page})=>{
//     await page.goto("https://github.com/");

//     await page.getByRole('link',{name:'Sign in'}).click();
//     // await page.getByText("Sign in").click();

//     await page.locator('input[id="login_field"]').fill("rythum.bangar@liseinfotech.com");
//     await page.locator("input[id='password']").fill("Rythum30@"); 
//     await page.getByRole("button",{name:'Sign in'}).click();
//     await page.getByRole('link',{name: 'rythumbangar30/Test',exact: true}).click();//For test repo need to add exact:true
//     await page.getByRole('link',{name:'Pull requests Pull requests'}).click();
//     await page.getByText("New pull request").click();
//     await page.getByRole('link',{name:'newBranch'}).click();
//     await page.getByRole('button',{name:'Create pull request'}).click();
//     await page.locator('input[id="pull_request_title"]').clear();
//     await page.locator('input[id="pull_request_title"]').fill("Initial Commit");
//     // await page.locator('input[id="CommentBox-placeholder"]').fill("qetrerfiuh;dsnxcbhbndvcdsjfhbcbabckdfbcncdfcvb");
//     await page.locator('textarea[id="pull_request_body"]').fill("qetrerfiuh;dsnxcbhbndvcdsjfhbcbabckdfbcncdfcvb");
//     await page.locator('#reviewers-select-menu').click();
//     await page.locator('#review-filter-field').fill("jimmyboi");
//     await page.locator('#reviewers-select-menu').click();

//     await page.locator('#assignees-select-menu').click();
//     await page.locator('#assignee-filter-field').fill("rythumbangar30");
//     await page.locator('#assignees-select-menu').click();

//     await page.locator('#labels-select-menu').click();
//     await page.locator('#label-filter-field').fill("bug");
//     await page.locator('#labels-select-menu').click();

//     await page.getByRole('button',{name:'Create pull request'});
//     // await page.waitForTimeout(5000);
// })


// test('Product Store ',async({page})=>{
//     await page.goto("https://www.demoblaze.com/index.html");
//     // await page.mouse.move(0,1000);
//     // await Mouse.down();
    
//     await page.getByRole('link',{name:"HTC One M9"}).click();
//     await page.getByRole('link',{name:" Add to cart "}).click();
//     await page.getByRole('link',{name:" Cart ",exact:true}).click();
//     await expect(page.getByText("HTC One M9")).toContainText("HTC One M9");
//     // await expect(page.getByText("700")).toContainText('700');

//     await page.getByRole('button',{name:'Place order'}).click();
//     await page.locator('#name').fill("Bhim");
//     await page.locator('#country').fill("India");
//     await page.locator('#city').fill("Indore");
//     await page.locator('#card').fill("7984561");
//     await page.locator('#month').fill("June");
//     await page.locator('#year').fill("2002");
//     await page.getByRole('button',{name:'Purchase'}).click();
//     await page.getByRole('button',{name:"OK"}).click();
    
//     await page.waitForTimeout(10000);
// })
// SET DEFAULT
// config = { timeout: 60000 }
// OVERRIDE

test('Shopping site',async({page})=>{
    test.setTimeout(120000);
    await page.goto("https://magento.softwaretestingboard.com/");
    await page.locator('#ui-id-4').hover();
    await page.locator('#ui-id-9').hover();
    await page.locator('#ui-id-11').click();
    await page.getByText('Adrienne Trek Jacket').click();
    await page.locator('#option-label-size-143-item-167').click();
    await page.locator('#option-label-color-93-item-57').click();
    await page.locator('#qty').fill('3');
    await page.getByRole('button',{name:'Add to Cart'}).click();
    await page.waitForTimeout(5000);
    await page.getByRole('link',{name:'My Cart'}).click();
    // await page.getByRole('link',{name:'View and Edit Cart'}).click();  
    await page.locator('#top-cart-btn-checkout').click();
    await page.waitForTimeout(8000);
   

    await page.locator('input[name="firstname"]').fill("gycdhfcvb");
    const checkFirstName=await page.locator('input[name="firstname"]').inputValue();
    await expect(checkFirstName).toContain('gycdhfcvb');//checking the value is correct
    
    await page.locator('input[name="lastname"]').fill("bremabndj");
    const checkLastName=await page.locator('input[name="lastname"]').inputValue();
    await expect(checkLastName).toContain('bremabndj');//checking the value is correct
    
    await page.locator('input[name="company"]').fill("lise");
    const checkCompanyName=await page.locator('input[name="company"]').inputValue();
    await expect(checkCompanyName).toContain('lise');//checking the value is correct
    
    await page.locator('input[name="street[0]"]').fill("208,Smpat Hills");
    const checkAddress=await page.locator('input[name="street[0]"]').inputValue();
    await expect(checkAddress).toContain('208,Smpat Hills');//checking the value is correct

    await page.locator('input[name="city"]').fill("Phuket");
    const checkCity=await page.locator('input[name="city"]').inputValue();
    await expect(checkCity).toContain('Phuket');//checking the value is correct

    await page.selectOption('select[name="country_id"]',{
        label:'India'
    })

    await page.selectOption('select[name="region_id"]',{
        label:'Madhya Pradesh'
    })

    await page.locator('input[name="postcode"]').fill('905367');
    const checkPostCode=await page.locator('input[name="postcode"]').inputValue();
    await expect(checkPostCode).toContain('905367');//checking the value is correct
    
    await page.locator('input[name="telephone"]').fill("5462318846");
    const checkNumber=await page.locator('input[name="telephone"]').inputValue();
    await expect(checkNumber).toContain('5462318846');//checking the value is correct
    
    await page.locator('input[name="ko_unique_2"]').check();
    
    await page.getByRole('textbox', { name: 'Email Address *' }).fill("dbfh34@gmail.com");
    const checkEmail=await page.getByRole('textbox', { name: 'Email Address *' }).inputValue();
    await expect(checkEmail).toContain('dbfh34@gmail.com');//checking the value is correct
    var imp = await page.locator('strong[class="product-item-name"]').getAttribute("value");
    console.log(imp);
    // await expect(page.locator('strong[class="product-item-name"]').getAttribute('value')).toContain("Adrienne Trek Jacket");
    await page.getByText('Next').click();
    await page.getByRole('checkbox',{name:"My billing and shipping address are the same"}).check();
    await page.getByRole('button',{name:'Place Order'}).click();
    await page.waitForTimeout(8000);
})

// test("Demo QA",async({page})=>{
//     test.setTimeout('60000');
//     await page.goto("https://demoqa.com/automation-practice-form");

//     await page.getByPlaceholder("First Name").fill("Shruki");  //Insert firstname
//     const firstname = await page.getByPlaceholder("First Name").inputValue();
//     await expect(firstname).toContain("Shruki");

//     await page.getByPlaceholder("Last Name").fill("Krama");   //Insert Lastname
//     const lastname = await page.getByPlaceholder("Last Name").inputValue();
//     await expect(lastname).toContain("Krama");

//     await page.getByPlaceholder("name@example.com").fill("Shruki24@gmail.com");   //Insert email
//     const email = await page.getByPlaceholder("name@example.com").inputValue();
//     await expect(email).toContain("Shruki24@gmail.com");
 
//     await page.locator("label[for='gender-radio-1']").click();  //Check Radio Button
//     await expect(page.locator("label[for='gender-radio-1']")).toBeChecked();

//     await page.locator('input[id="userNumber"]').fill('8754525174');  //Insert Number
//     const number = await page.locator('input[id="userNumber"]').inputValue();
//     await expect(number).toContain("8754525174");

//     await page.locator('input[id="dateOfBirthInput"]').fill("30 Jan 2000");  //Insert DOB
//     const dateOfBirthInput = await page.locator('input[id="dateOfBirthInput"]').inputValue();
//     await expect(dateOfBirthInput).toContain("30 Jan 2000");

//     await page.locator('div[class="react-datepicker__day react-datepicker__day--030 react-datepicker__day--selected react-datepicker__day--weekend"]').click();
    
//     await page.locator('input[id="subjectsInput"]').fill("Physics");  //Insert Subject
//     const subjectsInput = await page.locator('input[id="subjectsInput"]').inputValue();
//     await expect(subjectsInput).toContain("Physics");
 
//     await page.keyboard.press('Enter');
 
//     await page.locator('label[for="hobbies-checkbox-1"]').click();   //Check Hobbies
//     await expect(page.locator("label[for='hobbies-checkbox-1']")).toBeChecked();

//     // Upload File with fileChooser but didn't work

//     // await page.getByText('Choose File').setInputFiles("C:\Users\ssb\Pictures\eod_today_work.png");
//     // const fileChooserPromise = page.waitForEvent('filechooser');
//     // await page.locator('#uploadPicture').click();
//     // const fileChooser = await fileChooserPromise;
//     // await fileChooser.setFiles(path.join(__dirname,"./photos/eod_today_work.PNG"));

//    await page.waitForSelector('#uploadPicture');    //Upload Photo
//    await page.locator('#uploadPicture').setInputFiles("photos/eod_today_work.PNG");

//    await page.getByPlaceholder('Current Address').fill('24542jfhvndfvj street');  //Insert Address
//    const address = await page.getByPlaceholder('Current Address').inputValue();
//    await expect(address).toContain("24542jfhvndfvj street");

//    await page.locator('input[id="react-select-3-input"]').fill("Jaipur");
//    await page.keyboard.press('Enter');

// //    await page.locator('button[class="btn btn-primary"]').click();
// //    await page.getByRole('button',{name:'submit'}).click();
// //    await page.locator('div[class="text-right col-md-2 col-sm-12"]').click();
// //    await page.getByLabel('Submit').click();
// //    await page.getByText('Submit').click();
// //    await page.locator('#submit').click();


   
//    await page.waitForTimeout(10000);
// })

// test('webdriver portal',async({page})=>{
//     await page.goto("https://webdriveruniversity.com/");
//     await page.getByRole('link',{name:"TO DO LIST"}).click();
    
//     // await page.locator()
//     // await page.getByPlaceholder('Add new todo').fill("Steriods Added");
//    // await page.locator('input[placeholder="Add new todo"]').click();
//     var pagePromise = page.context().waitForEvent('page', p => p.url() =='https://webdriveruniversity.com/To-Do-List/index.html');
//     const newPage = await pagePromise;
//     await newPage.locator('#plus-icon').hover();
//     await newPage.locator('input[placeholder="Add new todo"]').fill("Steriods Added");
//     // await newPage.locator('input[placeholder="Add new todo"]').click();
//     await newPage.keyboard.press('Enter');
//     await newPage.getByText(' Go to potion class').hover();
//     // await newPage.locator('Go to potion class i.fa fa-trash').click();
//     // await newPage.keyboard.press('Enter');
//     // await newPage.getByRole('listitem').filter({hasText:' Go to potion class i.fa fa-trash'}).click();
//     // await newPage.locator('i').hover();
//     // await newPage.locator('i').click();

    
//     await newPage.waitForTimeout(10000);
// })

// test('Fake Automation with Regex',async({page})=>{
  
//     await page.goto('https://ultimateqa.com/filling-out-forms/');
//     // await page.getByRole('listitem').filter({hasText:'Fake Landing Page'}).click();
//     // await page.getByRole('link',{name:'Fill out Forms'}).click();
//     // var pagePromise = page.context().waitForEvent('page', p => p.url() =='https://ultimateqa.com/filling-out-forms');
//     // await page.waitForTimeout(3000);
//     // const pagePromise = page.context().waitForEvent('page', { timeout: 5000 }, pam => pam.url().includes('https://ultimateqa.com/filling-out-forms/'));
//     // const newPage = await pagePromise;                                                                                    
//     // await page.getByPlaceholder('Name').fill("Cream");
//     await page.locator('#et_pb_contact_name_0').fill("Shrim");
//     await page.locator('#et_pb_contact_message_0').fill("Cream");
//     const btn = await page.locator('button:has-text("Submit"):near(div[class="et_contact_bottom_container"])');
//     await btn.nth(0).click();
    
//     await page.locator('input[id="et_pb_contact_name_1"]').fill("Premi");
//     await page.locator('textarea[id="et_pb_contact_message_1"]').fill("girhim");
//     await page.locator('div[class="et_contact_bottom_container"]').nth(0).click();
//     var a=await page.locator('span[class="et_pb_contact_captcha_question"]').innerText();
   

// // With Regex(Regular expression)
//     const reg = /(\d+) \+ (\d+)/;
//     const match = a.match(reg);
//     var first = parseInt(match[1],10);
//     var Second = parseInt(match[2],10);

//     // With Javascript
//     // var number = a.split('+');
//     // var first = parseInt(number[0].trim(),10);
//     // var Second= parseInt(number[1].trim(),10);

//     var c=(first+Second).toString();
//     await page.locator('input[name="et_pb_contact_captcha_1"]').fill(c);
//     await page.locator('button[name="et_builder_submit_button"]').nth(1).click();

//     await page.waitForTimeout(10000);
// // }catch (error) {
// //     console.error('Error waiting for page event:', error);
// // }
// })

// test('Download Page',async({page})=>{
//     await page.goto('https://lazyapply.com/cover-letter-examples/quality%20assurance%20%26%20quality%20control-cover-letters/qa%20tester-cover-letter');
//     const downloadPromise = page.waitForEvent('download');
//     await page.locator('i[class="fas fa-file-download mr-2"]').click();
//     const download = await downloadPromise;
//     await download.saveAs('photos//letter.pdf' + download.suggestedFilename());
//     await page.waitForTimeout(10000);
// })

// test('Single iFrame and Nested iFrame',async({page})=>{
//     await page.goto('https://demo.automationtesting.in/Frames.html');
//     const locate= page.frameLocator('#singleframe').locator('input[type="text"]');
//     await locate.fill('Fresh');
//     await page.waitForTimeout(3000);

//     await page.getByText('Iframe with in an Iframe').click();
//     const key = await page.frameLocator('iframe[src="MultipleFrames.html"]');
//     const value=key.frameLocator('iframe[src="SingleFrame.html"]').locator('input[type="text"]');
//     await value.fill("Cream");
//     await page.waitForTimeout(10000);

// })

// test('Alert Box',async({page})=>{
//     await page.goto("https://demo.automationtesting.in/Alerts.html");
//     // await page.getByRole('button',{name:"click the button to display an  alert box:"}).click();
//     await page.locator("button[class='btn btn-danger']").click();
//     // await page.getByText("OK").nth(0).click();

//     await page.goto('https://demoqa.com/alerts');
//     await page.locator('button[id="alertButton"]').click();
//     await page.waitForTimeout(10000);

// })

