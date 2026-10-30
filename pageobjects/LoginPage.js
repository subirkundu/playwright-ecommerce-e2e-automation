class LoginPage {

    constructor(page) {

        this.page = page; // Local Class Variable to make available this page outside of the constructor
        
        this.userEmail = page.locator("#userEmail");
        this.userPass = page.locator("#userPassword");
        this.signIn = page.locator("#login");
    }

    async goTo() {
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
        console.log(await this.page.title());
    }

    async validLogin(userE, userP) {
        await this.userEmail.fill(userE);
        await this.userPass.fill(userP);
        await this.signIn.click();
        await this.page.waitForLoadState('networkidle');

    }

}

module.exports = { LoginPage };
