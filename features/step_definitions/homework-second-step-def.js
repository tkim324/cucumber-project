/*
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

//2. 검색창에 kleid damen 입력
When(/^I search '(.*)' in the input-box '(.*)'$/, async function (value, cssValue) {
    await this.driver.findElement(By.css(cssValue)).sendKeys(value, Key.RETURN);
});
//
//3. 세부 선택 사항이 표시됨
Then(/^This attribute '(.*)' should be shown$/, async function (cssValue) {
    let isDisplayed = await this.driver.findElements(By.css(cssValue)).isDisplayed();
    return expect(isDisplayed).to.equal(true);
});
// // 3번에서 안 넘어감;; 클래스 네임, 다 붙여봐도 안 찾아짐;;


//4. Blau 색상 버튼을 누름
When(/^I click on the '(.*)' element$/, async function (cssValue) {
    await this.driver.findElement(By.id(cssValue)).click();
});

//5. 검색결과에 Blau가 포함되어 있는지 확인
Then(/^A text of attribute '(.*)' should be same with '(.*)'$/, async function (cssValue, comparisonText) {
    let text = await this.driver.findElement(By.css(cssValue)).getText();
    return expect(text).to.equal(comparisonText);
});

Then(/^The elements '(.*)' (has|contains) '(.*)' attribute with text value '(.*)'$/, async function (cssValue, option,attributeName,comparisonText) {
    let attributeValue = await this.driver.findElement(By.css(cssValue)).getAttribute(attributeName);
    if(option && option.trim() === 'has'){
        return expect(attributeValue).to.equal(comparisonText);
    } else {
        return expect(attributeValue).to.contains(comparisonText);
    }
});

Then (/^The browser is closed$/, async function(){
    await this.driver.quit();
});
*/
