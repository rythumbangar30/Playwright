const{ test,expect } = require('@playwright/test');

const { WebDriveHomePage } = require('../pages/webdrive_home_page');
const { WebDriverProductPage } = require('../pages/webdrive_product.page');
const { WebDriverContact } = require('../pages/webdrive_contact.page');

test('WebDrive POM',async({page})=>{
    var webhomepage = new WebDriveHomePage(page);
    await webhomepage.goto("https://webdriveruniversity.com/Page-Object-Model/index.html");
    await webhomepage.changePicture();
    await webhomepage.waitScreen();
    
    await webhomepage.productPage();

    var webproductpage = new WebDriverProductPage(page);
    await webproductpage.getProductByName("Special Offers");
    await webproductpage.proceedBtn();
    const element = await page.locator('p[class="sub-heading"]').nth(0).innerHTML();
    await expect(element).toEqual("Special Offers");
    await webproductpage.waitScreen();

    await webhomepage.contactPage();

    var webcontactpage = new WebDriverContact(page);
    
    await webcontactpage.fillFirstName("bhim");
    await webcontactpage.fillLastName("Crem");
    await webcontactpage.fillemail("bhimcream@gmail.com");
    await webcontactpage.fillcomment("Gosod");
    // await webcontactpage.goReturn();
    await webcontactpage.submitBtn();
    await webcontactpage.waitScreen();

    // var webhomepage = new WebDriveHomePage(page);

    // await webhomepage.waitScreen();
})