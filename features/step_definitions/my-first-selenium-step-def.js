'use strict';
const {By, Key, Builder} = require('selenium-webdriver');
const {Given, When, Then} = require('@cucumber/cucumber');
const {expect} = require('chai');
const {elementIsVisible} = require("selenium-webdriver/lib/until");

Given(/^I open the Browser with url '(.*)'$/, async function (link) {
    this.driver = new Builder().forBrowser('chrome').build();
    await this.driver.get(link);
    await this.driver.sleep(1000);
    await this.driver.findElement(By.id("sp-cc-accept")).click();
});
//?"sp-cc-accept"

When(/^I search '(.*)' on input field id with '(.*)'$/, async function (value, inputFieldId) {
    await this.driver.sleep(1000);
    await this.driver.findElement(By.css(inputFieldId)).sendKeys(value, Key.RETURN);
});

Then(/^This attribute '(.*)' should be shown$/, async function (value) {
    await this.driver.sleep(1000);
    await this.driver.findElement(By.className("s-main-slot s-result-list s-search-results sg-row")).elementIsVisible();
});

When(/^I click on th '(.*)' element$/, async function (value) {
    await this.driver.sleep(1000);
    await this.driver.findElement(By.className(value)).click();
});

Then(/^This attribute "(.*)' should be shown$/, async function (value) {
   await this.driver.sleep(1000);
   await this.driver.findElement(By.css("a-row stores-row stores-widget-cf")).display();
});

And(/^This attribute '(.*)' should be shown too$/, async function (value) {
    await this.sleep(1000);
    await this.driver.findElement(By.css("SearchInput__input__26kZQ")).display();
})

When(/^I serch '(.*)' on input field id with '(.*)'$/, async function (value) {
    await this.driver.sleep(1000);
    await this.driver.findElement(By.css('SearchInput__input__26kZQ')).sendKeys(value, Key.RETURN);
});

Then(/^This attribute '(.*)' should be shown$/, async function (value) {
    await driver.findElements(By.css(value));
});




// Then(/^This attribute '(.*)' should be shown$/, async function (value) {
//     await this.driver.sleep(1000)
//     await this.driver.findElements(By.css(value)).then(elements => {
//         expect(elements.length).to.above(1);
//     });
// });
//
// And(/^This arttribute '(.*)' should be shown$/, async function (value) {
//     await this.driver.sleep(1000);
//     await this.driver.findElement(By.css(a-section a-spacing-none _bGlmZ_logo_3eW0R).elementIsVisible();
// });
//
// });
// //expect 는 괄화안에 내용이 있는지 없는 지를 확인함.
//
// When(/^I click on the '(.*)' element$/, async function(elementName){
//     await this.driver.findElement(By.css(elementName)).click();
// });
// Then(/^This attribute 'a\-section a\-spacing\-none _bGlmZ_logo_3eW0R' should be shown$/, function () {
//
// });
// Then(/^This attribute '\.s\-result\-list \.s\-result\-item' should be shown$/, function () {
//
// });
//
// And