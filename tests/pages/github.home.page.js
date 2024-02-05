const{expect} = require('@playwright/test');
exports.GitHubHomePage = class GitHubHomePage{
    constructor(page){
        this.page = page;
        this.urlLink = page.getByRole('link',{name: 'rythumbangar30/Test',exact: true});
        this.wait = page.waitForTimeout(10000);

    }
    async repoLink(){
        await this.urlLink.click();
    }
    async waitScreen(){
        await this.wait;
    }
}