'use strict';
const {By, Key, Builder} = require('selenium-webdriver');
const {Given, When, Then} = require('@cucumber/cucumber');
const {expect} = require('chai');
require('chromedriver')

//1. 아마존 열기
Given(/^I open the Browser with url '(.*)'$/, async function (link) {
    this.driver = new Builder().forBrowser('chrome').build();
    await this.driver.get(link);
    await this.driver.findElement(By.id("sp-cc-accept")).click();
});

//2. 아마존에서 검색하기
When(/^I search '(.*)' in the input-box '(.*)'$/, async function (value, cssValue) {
    await this.driver.findElement(By.css(cssValue)).sendKeys(value, Key.RETURN);
});


//4. 검색결과 내 베스트셀러가 표기되어 있는지 확인
Then(/^This attribute '(.*)' should be shown$/, async function (cssValue) {
    let isDisplayed = await this.driver.findElement(By.css(cssValue)).isDisplayed();
    return expect(isDisplayed).to.equal(true);
 });

//5. 베스트셀러 링크 클릭
When(/^I click on the '(.*)' element$/, async function (cssValue) {
    await this.driver.findElement(By.css(cssValue)).click();
});

//6. 베스트셀러 내 검색결과 갯수 확인
Then(/^The result of attribute '(.*)' is more then 10$/, async function (cssValue) {
     let count = (await this.driver.findElements(By.css(cssValue))).length;
     return expect(Number(count)).to.above(10);
 });

Then (/^The browser is closed$/, async function(){
    await this.driver.quit();
});