const { expect } = require('@playwright/test');
class CheckOut {
    constructor(page) {
        this.cbutton = page.locator("[type='button']");
        this.emailCheck = page.locator("input.ng-valid");
        this.country = page.locator("[placeholder='Select Country']");
        this.dropdown = page.locator(".ta-results");
        this.placeOrder = page.getByText('Place Order');
        this.thank = page.locator('h1:has-text(" Thankyou for the order. ")');
    }

    async checkoutProcess(userE) {
        await this.cbutton.last().click();
        console.log("Checkout Successfully!");
        await expect(this.emailCheck.last()).toHaveValue(userE);
        console.log("Email Is verified Successfully!");
    }

    async selectCountry() {
        await this.country.pressSequentially("Ind");
        await expect(this.dropdown).toBeVisible();
        const options = this.dropdown.locator("button");

        const optionsCount = await options.count();

        for (let i = 0; i < optionsCount; i++) {
            const text = await options.nth(i).textContent();

            if (text.trim() === "India") {
                await options.nth(i).click();
                break;
            }
        }
    }

    async thankyou ()
    {
    await this.placeOrder.click();
    await expect(this.thank).toBeVisible();
    console.log("Verified Successfully!!")
    }
}

module.exports = { CheckOut };