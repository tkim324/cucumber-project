'use strict';
const {By, Key, Builder} = require("selenium-webdriver");
require("chromedriver");

const { Given, When, Then } = require('@cucumber/cucumber');
let driver;

Given(/^I open the Browser with url '(.*)'$/, async function (link) {
    this.driver = await (new Builder().forBrowser('chrome')).build();
    await this.driver.get(link);
    await this.driver.findElement(By.id("sp-cc-accept")).click();
});

When(/^I search '(.*)'$/, async function (value) {
    await this.driver.findElement(By.id("twotabsearchtextbox")).sendKeys(value, Key.RETURN);

});

Then(/^This attribute '(.*)' should be shown$/, async function (value) {
    let attributeId = await this.driver.findElements(By.id(value));
    return expect(attributeId).to.equal("asdfasdfasdf");
});
//expect 는 괄화안에 내용이 있는지 없는 지를 확인함.
