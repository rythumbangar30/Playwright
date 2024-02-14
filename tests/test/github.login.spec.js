const { test, expect } = require('@playwright/test');
const config = require('../../config.js');
const {GitHubDevPage} = require('../pages/github.login.page.js');
const { GithubDashPage } = require('../pages/github.dash.page.js');
const { GitHubHomePage } = require('../pages/github.home.page.js');

let baseUrl,username,password;
test.beforeAll(async(browser)=>{
    baseUrl = config.githubbaseUrl;
    username = config.username;
    password = config.password;
})
test('Github Login',async({page})=>{
    var githubDash =new GithubDashPage (page);
    // const baseUrl = config.githubbaseUrl;
    // var username = config.username;
    await githubDash.goto(baseUrl);
    // await githubDash.signUrl(username);
    // await githubDash.signupBtn(); 
    // await githubDash.waitScreen();
    await githubDash.signIn();
    
    const githubPage = new GitHubDevPage (page);
    
    var username = config.username;
    const password = config.gitpass;
    // await githubPage.goto(baseUrl);
    // await githubPage.signIn();
    await githubPage.userDetail(username);
    await githubPage.userPassword(password);
    await githubPage.loginButton();
    await githubPage.waitScreen();

    // const githubHomePage = new GitHubHomePage(page); //Only Run with an sms code

    // await githubHomePage.repoLink();
    // await githubHomePage.waitScreen();
})