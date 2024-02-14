// import { defineConfig } from "@playwright/test";
import { faker } from '@faker-js/faker/locale/en';
// defineConfig
module.exports={
  facebookbaseUrl:'https://www.facebook.com/',
  githubbaseUrl:'https://github.com/',
  iframebaseUrl:'https://demo.automationtesting.in/Frames.html',
  productstorebaseUrl:'https://www.demoblaze.com/index.html',
  // username:"rythum.bangar@liseinfotech.com",
  username:faker.internet.userName(),
  gitpass:'Rythum30@',
  firstname:faker.person.firstName(),
  lastname:faker.person.lastName(),
  email:faker.internet.email(),
  password:faker.internet.password(),
  text:faker.word.noun()
};