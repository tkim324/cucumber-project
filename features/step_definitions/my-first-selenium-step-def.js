// 'use strict';
// const {By, Key, Builder} = require('selenium-webdriver');
// const {Given, When, Then} = require('@cucumber/cucumber');
// const {expect} = require('chai');
// require('chromedriver')
//
// Given(/^I open the Browser with url '(.*)'$/, async function (link) {
//     this.driver = new Builder().forBrowser('chrome').build();
//     await this.driver.get(link);
//     // await this.driver.sleep(1000);
//     await this.driver.findElement(By.id("sp-cc-accept")).click();
// });
//
// When(/^I search '(.*)' in the input-box '(.*)'$/, async function (value, cssValue) {
//     await this.driver.findElement(By.id(cssValue)).sendKeys(value, Key.RETURN);
// })
//
// Then(/^This attribute '(.*)' should be shown$/, async function (cssValue) {
//     let isDisplayed = await this.driver.findElements(By.css(cssValue)).isDisplayed();
//     return expect(isDisplayed).to.equal(true);
// });
//
// When(/^I click on the '(.*)' element$/, async function (cssValue) {
//     await this.driver.findElement(By.css(cssValue)).click();
// });
//
// Then(/^The text contains '(.*)' in element '(.*)'$/, async function (text, cssValue) {
//     let currentText = await this.driver.findElement(By.css(cssValue)).getText();
//     return expect(currentText).to.contains(text);
// });
//
//
// //expect 는 괄화안에 내용이 있는지 없는 지를 확인함.
