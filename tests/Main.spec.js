const { test, expect } = require('@playwright/test');
const {POmanager} = require('../pageobjects/POmanager');




test('End to End Automation', async ({ page }) => {

    //here we will create 2 sperate page for POM 1. Login, 2. Dashboard, Order.

    
    const productName = 'ZARA COAT 3'


    const userE = "kundosaswati@gmail.com";
    const userP = "Subir1234##";


    

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






// {
//     "id": 49,
//     "rStatus": 1,
//     "structureName": "HEU Trade (March 2026)",
//     "commissionStructureDetail": [
//         {
//             "itemPercentage": "0.25",
//             "fkCommissionItemId": 26,
//             "fkProjectCategory": 637,
//             "rStatus": 1,
//             "id": 0
//         },
//         {
//             "itemPercentage": "0.13",
//             "fkCommissionItemId": 3,
//             "fkProjectCategory": 637,
//             "rStatus": 1,
//             "id": 0
//         },
//         {
//             "itemPercentage": "0.35",
//             "fkCommissionItemId": 61,
//             "fkProjectCategory": 637,
//             "rStatus": 1,
//             "id": 0
//         },
//         {
//             "itemPercentage": "0.75",
//             "fkCommissionItemId": 33,
//             "fkProjectCategory": 637,
//             "rStatus": 1,
//             "id": 0
//         },
//         {
//             "itemPercentage": "0.25",
//             "fkCommissionItemId": 69,
//             "fkProjectCategory": 637,
//             "rStatus": 1,
//             "id": 0
//         },
//         {
//             "itemPercentage": "0.25",
//             "fkCommissionItemId": 70,
//             "fkProjectCategory": 637,
//             "rStatus": 1,
//             "id": 0
//         },
//         {
//             "itemPercentage": "2.00",
//             "fkCommissionItemId": 36,
//             "fkProjectCategory": 637,
//             "rStatus": 1,
//             "id": 0
//         },
//         {
//             "itemPercentage": "1.00",
//             "fkCommissionItemId": 23,
//             "fkProjectCategory": 637,
//             "rStatus": 1,
//             "id": 0
//         },
//         {
//             "itemPercentage": "1.00",
//             "fkCommissionItemId": 29,
//             "fkProjectCategory": 637,
//             "rStatus": 1,
//             "id": 0
//         },
//         {
//             "itemPercentage": "0.50",
//             "fkCommissionItemId": 64,
//             "fkProjectCategory": 637,
//             "rStatus": 1,
//             "id": 0
//         },
//         {
//             "itemPercentage": "0.00",
//             "fkCommissionItemId": 2,
//             "fkProjectCategory": 637,
//             "rStatus": 1,
//             "id": 0
//         },
//         {
//             "itemPercentage": "0.87",
//             "fkCommissionItemId": 4,
//             "fkProjectCategory": 637,
//             "rStatus": 1,
//             "id": 0
//         },
//         {
//             "itemPercentage": "0.62",
//             "fkCommissionItemId": 7,
//             "fkProjectCategory": 637,
//             "rStatus": 1,
//             "id": 0
//         },
//         {
//             "itemPercentage": "1.50",
//             "fkCommissionItemId": 32,
//             "fkProjectCategory": 637,
//             "rStatus": 1,
//             "id": 0
//         },
//         {
//             "itemPercentage": "1.39",
//             "fkCommissionItemId": 12,
//             "fkProjectCategory": 637,
//             "rStatus": 1,
//             "id": 0
//         },
//         {
//             "itemPercentage": "0.20",
//             "fkCommissionItemId": 71,
//             "fkProjectCategory": 637,
//             "rStatus": 1,
//             "id": 0
//         },
//         {
//             "itemPercentage": "2.09",
//             "fkCommissionItemId": 1,
//             "fkProjectCategory": 637,
//             "rStatus": 1,
//             "id": 0
//         },
//         {
//             "itemPercentage": "0.20",
//             "fkCommissionItemId": 72,
//             "fkProjectCategory": 637,
//             "rStatus": 1,
//             "id": 0
//         }
//     ],
//     "commissionItems": null,
//     "commissionTypeList": null,
//     "fkProjectCategory": 637
// }


