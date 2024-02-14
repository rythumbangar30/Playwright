const{test,expect} = require('@playwright/test');
const { DatePickPage } = require('../pages/date_picker.page');
const config = require('../../config');
test('Date Picker',async({page})=>{
    var datePicker = new DatePickPage(page);
    await datePicker.goto("https://demo.automationtesting.in/Datepicker.html");
    await datePicker.date_pick();
    await datePicker.pick_year(2022,12);
    await datePicker.pick_date(2);
    await datePicker.pickmonth('March');
    await datePicker.pickyear('2015');
    await datePicker.pickdate('15');
    await datePicker.waitScreen();
})