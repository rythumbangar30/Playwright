const{expect} = require('@playwright/test');
exports.DatePickPage = class DatePickPage{
    constructor(page){
        this.page = page;
        this.datepick = page.locator('#datepicker1');
        this.wait = page.waitForTimeout(5000);
        this.selectyear = page.locator('span[class="ui-icon ui-icon-circle-triangle-w"]');
        this.optiondatepick = page.locator('#datepicker2');
    }
    async goto(url){
        await this.page.goto(url);
    }
    async date_pick(){
        await this.datepick.click();
    }
    async pick_year(year,month){
        year = 2024-year;
        month = month*year;
        while(month!=2){
            await this.selectyear.click();
            month--;
        } 
    }
    async pick_date(date){
        // await this.page.locator('td[class=" ui-datepicker-week-end "].has-text(date)').click();
        // await this.page.locator('#ui-datepicker-week-end .has-text("2")').click();
        await this.page.getByRole('link',{name:date}).click();
    }
    async pickmonth(month){
        await this.optiondatepick.click();
        await this.page.selectOption('select[title="Change the month"]',{label:month})
    }
    async pickyear(year){
        await this.page.selectOption('select[title="Change the year"]',{label:year})
    }
    async pickdate(date){
        await this.page.getByRole('link',{name:date}).click();
    }
    async waitScreen(){
        await this.wait;
    }
}