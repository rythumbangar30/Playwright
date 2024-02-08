const{expect} = require('@playwright/test');
exports.ShopShipPage = class ShopShipPage{
    constructor(page){
        this.page =page;
        this.firstname = page.locator('input[name="firstname"]');
        this.lastname = page.locator('input[name="lastname"]');
        this.company = page.locator('input[name="company"]');
        this.street = page.locator('input[name="street[0]"]');
        this.city = page.locator('input[name="city"]');
        this.postcode = page.locator('input[name="postcode"]');
        this.telephone = page.locator('input[name="telephone"]');
        this.shipcharge = page.locator('input[name="ko_unique_2"]');
        this.email = page.getByRole('textbox', { name: 'Email Address *' });
        this.next = page.getByText('Next');
        this.wait = page.waitForTimeout(5000);
    }
    async fillDetail(fillFirstname,fillLastname,fillCompany,fillStreet,fillCity,fillPostCode,fillCountry,fillState,fillNumber,fillEmail){
        await this.firstname.fill(fillFirstname);
        await this.lastname.fill(fillLastname);
        await this.company.fill(fillCompany);
        await this.street.fill(fillStreet);
        await this.city.fill(fillCity);
        await this.postcode.fill(fillPostCode);
        await this.page.selectOption('select[name="country_id"]',{label:fillCountry})
        await this.page.selectOption('select[name="region_id"]',{label:fillState})
        await this.telephone.fill(fillNumber);
        await this.email.fill(fillEmail);
    }
    async shipCharges(){
        await this.shipcharge.check();
    }
    async nextBtn(){
        await this.next.click();
    }
    async waitScreen(){
        await this.wait;
    }
}