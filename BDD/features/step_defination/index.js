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
    await driver.findElement(By.id('register')).click();
    await driver.quit();
});

Given('Test login functionality', { timeout: 20000 }, async function () {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:3000/login');

    await driver.findElement(By.id('username')).sendKeys('q');
    await driver.findElement(By.id('password')).sendKeys('12345678');
    await driver.findElement(By.id('login')).click();

  
    await driver.quit();
});


Given('Test Update User Profile Functionality', async function () {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:3000/editprofile');
 
    await driver.findElement(By.id('firstname')).sendKeys('Khadga');
    await driver.findElement(By.id('lastname')).sendKeys('Chy');
    await driver.findElement(By.id('email')).sendKeys('khadgachy07@gmail.com');
    await driver.findElement(By.id('phone')).sendKeys('9812345678');
    await driver.findElement(By.id('address')).sendKeys('Shantinagar');
 
    await driver.findElement(By.id('save')).click();
    await driver.quit();
})
 
Given('Test Add Product Functionality', async function (){
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:3000/product/insert');
 
    await driver.findElement(By.id('productName')).sendKeys('Latido Jackect');
    await driver.findElement(By.id('productDescription')).sendKeys('Best for Winter');
    await driver.findElement(By.id('productVendor')).sendKeys('Latido Leathers');
    await driver.findElement(By.id('productImage')).sendKeys('LatidoJackect.jpg');
    await driver.findElement(By.id('productPrice')).sendKeys('10000');
    await driver.findElement(By.id('productStocks')).sendKeys('50');
    await driver.findElement(By.id('productRating')).sendKeys('4');
 
    await driver.findElement(By.id('submit')).click();
    
    await driver.quit();
})

Given('Test Update Product Functionality', async function (){
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:3000/product/update');
 
    await driver.findElement(By.id('productName')).sendKeys('Latido Shoe');
    await driver.findElement(By.id('productDescription')).sendKeys('Best for Causal Wearing');
    await driver.findElement(By.id('productVendor')).sendKeys('Latido Leathers');
    await driver.findElement(By.id('productImage')).sendKeys('LatidoShoe.jpg');
    await driver.findElement(By.id('productPrice')).sendKeys('5000');
    await driver.findElement(By.id('productStocks')).sendKeys('40');
    await driver.findElement(By.id('productRating')).sendKeys('4');
 
    await driver.findElement(By.id('updateProduct')).click();
    expect(await driver.wait(until.elementLocated(By.id("home-tab"))));
    await driver.quit();
})
Given('Test Become a Vendor Request', async function () {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:3000/request/beAVendor');

    await driver.findElement(By.id('storeName')).sendKeys('Hamro Pasal');
    await driver.findElement(By.id('address')).sendKeys('Putalisadak');
    await driver.findElement(By.id('contact')).sendKeys('9815952466');
    await driver.findElement(By.id('citizenship')).sendKeys('citizenship.jpg');
    await driver.findElement(By.id('logo')).sendKeys('logo.png');
    
    await driver.findElement(By.id('registrationButton')).click();
    await driver.quit();
})

Given('Test Checkout feature', async function (){
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:3000/checkout');

    await driver.findElement(By.id('firstname')).sendKeys('Khadga');
    await driver.findElement(By.id('lastname')).sendKeys('Chy');
    await driver.findElement(By.id('phone')).sendKeys('9815952466');
    await driver.findElement(By.id('address')).sendKeys('Budhashanti');
    await driver.findElement(By.id('addinfo')).sendKeys('Fine');

    await driver.findElement(By.id('buy')).click();
    await driver.quit();
})