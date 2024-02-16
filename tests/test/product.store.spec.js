const{test,expect} = require('@playwright/test');
const config = require('../../config');
const {ProductStoreHome } = require('../pages/product.home.page');
const { ProductSeven } = require('../pages/product.seven.page');
const { ProductCartPage } = require('../pages/product.cart.page');
const { ProductAddCart } = require('../pages/product_addtocart_page');

test('Product Store ',async({page})=>{
    var producthome = new ProductStoreHome(page);

    var baseuri = config.productstorebaseUrl;
    await producthome.goto(baseuri);
    await producthome.selectMobileByName('HTC One M9');      // Going to mobile Info.

    var productone = new ProductAddCart(page);

    // await productseven.addBtn();        // Add to cart
    // await productseven.waitScreen();
    // await productseven.returnBack();
    // await productseven.waitScreen();

    await productone.addToCart();    

    await producthome.selectMobileByName('Samsung galaxy s6');      // Going to mobile Info.
 
    // var productone = new ProductAddCart (page);

    // await productone.addBtn();           // Add to cart
    // await productone.waitScreen();
    // await productone.returnBack();
    // await productone.waitScreen();

    await productone.addToCart();
    
    await producthome.cartBtn();         //Going To Cart

    await expect(page.locator('tr:has-text("HTC One M9")')).toContainText("HTC One M9");
    
    await expect(page.locator('tr:has-text("Samsung galaxy s6")')).toContainText("Samsung galaxy s6");    

    var productcart = new ProductCartPage(page);

    page.setDefaultTimeout(5000);
    await productcart.placeOrderItem();   //Place Order

    await productcart.waitScreen(); 

    // await productcart.fillname('Bhim');   //Fill Details
    // await productcart.fillcountry('India');
    // await productcart.fillcity('Bhopal');
    // await productcart.fillcard('Sbi');
    // await productcart.fillmonth("Feb");
    // await productcart.fillyear("2024");

    await productcart.fillDetail('Bhim','India','Indore','Sbi','June','2024');

    await productcart.purchaseBtn();       //Order Placed
    await productcart.submitBtn();         
    await productcart.waitScreen();
    
})