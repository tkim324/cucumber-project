'use strict';
const assert = require('assert');

const { Given, When, Then } = require('@cucumber/cucumber');

Given(/^This "Given" is one of the pre-defined Command form Cucumber$/, function () {
    console.log('================== GIVEN ==================');
});

When(/^This "When" is one of the pre-defined Command form Cucumber(.*)?$/, function (value) {
    console.log('================== WHEN ==================');
    if(value){
        console.log(`================== ${value} ==================`);
    }
});

Then(/^This "Then" is one of the pre-defined Command form Cucumber(.*)?$/, function (value) {
    console.log('================== Then ==================');
    if(value){
        console.log(`================== ${value} ==================`);
    }
});

Then(/^This "And" is one of the pre-defined Command form Cucumber(.*)$/, function (value) {
    console.log('================== And ==================');
    if(value){
        console.log(`================== ${value} ==================`);
    }
});

