'use strict';

require('chromedriver');
const {Builder} = require("selenium-webdriver");

class Driver {
    constructor() {
        this.driver = new Builder().forBrowser('chrome').build();
    }

    static getInstance() {
        if (!Driver._instance) {
            Driver._instance = new Builder().forBrowser('chrome').build();
        }
        return Driver._instance;
    }

    static getDriver() {
        return Driver.getInstance().driver;
    }

    static getCurrentURL(){
        return Driver.getDriver().then(browser => browser.getCurrentUrl())
    }
}
