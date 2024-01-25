import {test , expect} from '@playwright/test';

test('Facebook Page',async({ page })=>{
    await page.goto("https://www.facebook.com/");

    // await expect(page).toHaveTitle("Facebook");
    await expect(page).toHaveURL("https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg");
})