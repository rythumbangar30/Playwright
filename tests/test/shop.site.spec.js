const{test,expect} = require('@playwright/test');
const {ShopHomePage} = require('../pages/shopsite.home.page');
const { ShopJacketPage } = require('../pages/shopsite.jacket.page');
const { ShopJack1Page, ShopSizePage } = require('../pages/shopsite.jack1.page');
const { ShopShipPage } = require('../pages/shopsite_shipping.page');
const { ShopPaymentPage } = require('../pages/shopsite_payment_page');
test('Shopsite',async({page})=>{
    test.setTimeout(6*15000);
    var shophome = new ShopHomePage(page);
    await shophome.goto("https://magento.softwaretestingboard.com/");
    // await shophome.womensection();
    // await shophome.topssection();
    // await shophome.brastankssection();
    await shophome.jacketsection();

    await shophome.waitScreen();
     
    var shopjacket = new ShopJacketPage(page);
    // await shopjacket.adriennejacket(); 

    await shopjacket.addJacketByName('Adrienne Trek Jacket');

    var shopsizepage = new ShopSizePage(page);

    // await shopjack1.selectColor();
    // await shopjack1.selectSize();
    // await shopjack1.selectQuantity('2');
    // await shopjack1.addBtn();

    await shopsizepage.addToCart('S','Orange','5');
    await shopsizepage.waitScreen();
    await shopsizepage.cartIconBtn();
    const element = await page.locator('strong[class="product-item-name"]').innerHTML();
    
    await expect(element).toContain('Adrienne Trek Jacket');
    // await expect(page.getByText("Adrienne Trek Jacket").innerHTML()).toContain('Adrienne Trek Jacket');
    // await expect(page.locator('strong[class="product-item-name"]').innerText()).toContain('Adrienne Trek Jacket');
    
    await shopsizepage.checkoutBtn();

    var shopshippage = new ShopShipPage(page);

    await shopshippage.waitScreen(); 
    await shopshippage.fillDetail("Bhim","Cream","Lise","Sampat","Indore",'456123',"India","Madhya Pradesh",'8954213584','bhim6cream9@gmail.com');
    await shopshippage.shipCharges();
    // await expect(page.locator('strong[class="product-item-name"]').nth(0).innerHTML()).toContain('Adrienne Trek Jacket');
    // expect(page.getByText("Adrienne Trek Jacket").innerText()).toContain('Adrienne Trek Jacket');
    // await expect(page.getByRole('strong',{name:"product-item-name"}).innerHTML()).toContain("Adrienne Trek Jacket");
    // await expect(page.locator('strong[class="product-item-name"]').innerText()).toContain("Adrienne Trek Jacket");
    await shopshippage.nextBtn();
    
           

    var shoppaymentpage = new ShopPaymentPage(page);
    await shoppaymentpage.checkAddress();
    await expect(page.getByRole('checkbox',{name:"My billing and shipping address are the same"})).toBeChecked();

    await shoppaymentpage.submitBtn();



})