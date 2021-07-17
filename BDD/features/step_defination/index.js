const { expect } = require('chai');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { Builder, By, Key, until, sleep } = require('selenium-webdriver');
const { delay } = require('../utils/constant');
require('chromedriver');





Given('Test registration functionality', { timeout: 30000 }, async function () {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:3000/register'); 
    await driver.findElement(By.id('firstname')).sendKeys('r');
    await driver.findElement(By.id('lastname')).sendKeys('r');
    await driver.findElement(By.id('username')).sendKeys('r');
    await driver.findElement(By.id('email')).sendKeys('r@gmail.com');
    await driver.findElement(By.id('phone')).sendKeys('9876543333');
    await driver.findElement(By.id('address')).sendKeys('Kalanki');

    await driver.sleep(delay);

    await driver.findElement(By.id('password')).sendKeys('12345678');
    await driver.findElement(By.id('userType')).sendKeys('Customer');
    await driver.findElement(By.id('checkbox-terms')).click();
    await driver.findElement(By.id('register')).click();
  
    await driver.wait(until.elementLocated(By.id("login")), 30000);
    expect(await driver.wait(until.elementLocated(By.id("login"))));
    await driver.quit();
});

Given('Test login functionality', { timeout: 30000 }, async function () {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:3000/login');

    await driver.findElement(By.id('username')).sendKeys('s');
    await driver.findElement(By.id('password')).sendKeys('12345678');
    await driver.findElement(By.id('login')).click();

    await driver.wait(until.elementLocated(By.id("home-tab")), 30000);
    expect(await driver.wait(until.elementLocated(By.id("home-tab"))));
    await driver.quit();
});