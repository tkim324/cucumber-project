'use strict';
const {By, Key, Builder} = require('selenium-webdriver');
const {Given, When, Then} = require('@cucumber/cucumber');
const {expect} = require('chai');

Given(/^I open the Browser with url '(.*)'$/, async function (link) {
    this.driver = new Builder().forBrowser('chrome').build();
    await this.driver.get(link);
    await this.driver.sleep(1000);
    await this.driver.findElement(By.id("sp-cc-accept")).click();
});

When(/^I search '(.*)' on input field id with '(.*)'$/, async function (value, inputFieldId) {
    await this.driver.sleep(1000);
    await this.driver.findElement(By.css(inputFieldId)).sendKeys(value, Key.RETURN);
});

Then(/^This attribute '(.*)' should be shown$/, async function (value) {
    await this.driver.sleep(1000);
    await this.driver.findElements(By.css(value)).then(elements => {
        expect(elements.length).to.above(1);
    });
});
//expect 는 괄화안에 내용이 있는지 없는 지를 확인함.

When(/^I click on the '(.*)' element$/, async function(elementName){
    await this.driver.findElement(By.css(elementName)).click();
});
