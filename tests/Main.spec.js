const { test, expect } = require('@playwright/test');
const {POmanager} = require('../pageobjects/POmanager');



test('End to End Automation', async ({ page }) => {

    //here we will create 2 sperate page for POM 1. Login, 2. Dashboard, Order.

    
    const productName = 'ZARA COAT 3'


const userE = "your-email@example.com";
const userP = "your-password";


    

    const PoManager = new POmanager (page);


    // LoginPage.js
     // Class object to invoke the page in LoginPage Class
    //const loginPage = new LoginPage(page); // singally we can use this if don't moves to PO Manager
    const loginPage = PoManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(userE,userP);


    //DashBoard.js
    const dashboArd = PoManager.getDashboardPage();
    await dashboArd.searchAdd(productName);
    await dashboArd.cartPage();

    //CheckOut.js
    const checkOutpp = PoManager.getCheckoutPage();
    await checkOutpp.checkoutProcess(userE);
    await checkOutpp.selectCountry();
    await checkOutpp.thankyou();


    //await page.locator(".card-body").filter({hasText : productName}).getByRole("button",{name: 'Add To Cart'}).click();



    await page.pause();



});
