'use strict';
const {By, Key, Builder} = require('selenium-webdriver');
const {Given, When, Then} = require('@cucumber/cucumber');
const {expect} = require('chai');
require('chromedriver')

//4-1. 셀레니움 자동화시스템 연습용 사이트 열기
Given(/^I open the Browser with url '(.*)'$/, async function (link) {
    this.driver = new Builder().forBrowser('chrome').build();
    await this.driver.get(link);
    //await this.driver.findElement(By.id("sp-cc-accept")).click(); 쿠키설정
});

//4-2. 메인 로고 확인
Then(/^This attribute '(.*)' should be shown$/, async function (cssValue) {
    let isDisplayed = await this.driver.findElement(By.css(cssValue)).isDisplayed();
});

//4-3. 로그인 페이지로 이동
When(/^I click on the '(.*)' element$/, async function (cssValue) {
    await this.driver.findElement(By.css(cssValue)).click();
});

When(/^I wait element about 1000ms$/, async function () {
    await this.driver.sleep(2000);
    // await this.driver.wait(until.elementLocated(By.css(cssValue)),10000);
});

//4-4. 계정 생성 클릭
//4-5. 에러메세지 확인
Then(/^This attribute '(.*)' should be with 'Invalid email address'$/, async function (cssValue) {
    let text = await this.driver.findElement(By.xpath(cssValue)).getText();
    return expect(text).to.equal("Invalid email address");
});

Then (/^The browser is closed$/, async function(){
    await this.driver.quit();
});

/*
//3-1. 아마존 열기
Given(/^I open the Browser with url '(.*)'$/, async function (link) {
    this.driver = new Builder().forBrowser('chrome').build();
    await this.driver.get(link);
    await this.driver.findElement(By.id("sp-cc-accept")).click();
});

//3-2. 아마존에서 검색하기
When(/^I search '(.*)' in the input-box '(.*)'$/, async function (value, cssValue) {
    await this.driver.findElement(By.css(cssValue)).sendKeys(value, Key.RETURN);
});

//3-3.
When(/^This attribute '(.*)' should be shown with 'geld, börse, beutel'$/, async function (cssValue) {
    let elements = await this.driver.findElements(By.css(cssValue));

    await Promise.all(elements.map(async elem =>{
        const text = await elem.getText();
        const keywords = ['geld', 'börse', 'beutel']
        return expect(text.toLowerCase()).to.contains(keywords );
    //    console.log(await elem.getText());
    }));
});
//3-4. 검색결과 내 베스트셀러가 표기되어 있는지 확인
Then(/^This attribute '(.*)' should be shown$/, async function (cssValue) {
    let isDisplayed = await this.driver.findElement(By.css(cssValue)).isDisplayed();
    return expect(isDisplayed).to.equal(true);
 });

//3-5. 베스트셀러 링크 클릭
When(/^I click on the '(.*)' element$/, async function (cssValue) {
    await this.driver.findElement(By.css(cssValue)).click();
});

//3-6. 베스트셀러 내 검색결과 갯수 확인
Then(/^The result of attribute '(.*)' is more then 10$/, async function (cssValue) {
     let count = (await this.driver.findElements(By.css(cssValue))).length;
     return expect(Number(count)).to.above(10);
 });

Then (/^The browser is closed$/, async function(){
    await this.driver.quit();
});
*/


