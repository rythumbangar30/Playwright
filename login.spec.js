
Running 1 test using 1 worker

[1A[2K[1/1] [chromium] › test\github.login.spec.js:7:1 › Github Login
[1A[2K  1) [chromium] › test\github.login.spec.js:7:1 › Github Login ─────────────────────────────────────

    Error: page.waitForTimeout: Test ended.

       at pages\github.login.page.js:9

       7 |         this.passwordTextBox = page.locator("input[id='password']");
       8 |         this.signButton = page.getByRole('button',{name:'Sign in'});
    >  9 |         this.wait = page.waitForTimeout(2000);
         |                          ^
      10 |     }
      11 |     async goto(url){
      12 |         await this.page.goto(url);

        at GitHubDevPage (C:\Users\ssb\Vscode\Playwright_Automation\tests\pages\github.login.page.js:9:26)
        at C:\Users\ssb\Vscode\Playwright_Automation\tests\test\github.login.spec.js:17:24


[1A[2K  1 failed
    [chromium] › test\github.login.spec.js:7:1 › Github Login ──────────────────────────────────────
