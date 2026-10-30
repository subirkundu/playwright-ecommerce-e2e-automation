const { expect } = require('@playwright/test');
class DashBoard {

    constructor(page) {

        this.product = page.locator('.card-body');

        this.productText = page.locator(".card-body b");
        this.cartlink = page.locator("[routerlink='/dashboard/cart']");
        this.cartWait = page.locator(".cart");
        this.proText = page.locator('h3:has-text("ZARA COAT 3")');


    }

    async searchAdd(productName) {
        console.log(await this.productText.allTextContents());

        const count = await this.product.count();

        for (let i = 0; i < count; i++) {
            if (await this.product.nth(i).locator("b").textContent() === productName) {
                await this.product.nth(i).locator("text =' Add To Cart'").click();
                break;
            }
        }

    }

    async cartPage ()
    {
        await this.cartlink.click();
        await this.cartWait.first().waitFor();
        await expect(this.proText).toBeVisible();
        console.log("Added to the Cart Successfully!");
    }
}

module.exports= { DashBoard };