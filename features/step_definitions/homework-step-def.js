// 'use strict';
// const {By, Key, Builder} = require('selenium-webdriver');
// const {Given, When, Then} = require('@cucumber/cucumber');
// const {expect} = require('chai');
// require('chromedriver')
//
//
// //1. 네이버 열기
// Given(/^I open the Browser with url '(.*)'$/, async function (link) {
//     this.driver = new Builder().forBrowser('chrome').build();
//     await this.driver.get(link);
// });
//
// //2. 검색에 감자튀김을 입력
// When(/^I search '(.*)' in the input-box '(.*)'$/, async function (value, cssValue) {
//     await this.driver.findElement(By.id(cssValue)).sendKeys(value, Key.RETURN);
// });
//
// // 3. 첫번째 페이지에 감자튀김이라는 텍스트가 있는지 확인
// // 3-1. 해당 엘리멘트에서 클래스를 확인 한 후, 실제 "감자튀김"이라는 텍스트 있는지 확인.
// Then(/^This attribute '(.*)' should be same with '감자튀김'$/, async function (cssValue) {
//     let text = await this.driver.findElement(By.css(cssValue)).getText();
//     return expect(text).to.equal("감자튀김");
// });
//
// // 4. 검색 결과가 10개 넘는지 확인
// Then(/^The result of attribute '(.*)' is more then 10$/, async function (cssValue) {
//     let count = (await this.driver.findElements(By.css(cssValue))).length;
//     return expect(Number(count)).to.above(10);
// });
//
//
//
// // 맨위에 있는 expect 속에 들어간 chai << assertion 결과값을 도출할 때
// // 필요한 수식어들을 포함하고 있기 때문에 expect -to- above 형태로 작성할 수 있다. 다른 수식어 찾아보기.