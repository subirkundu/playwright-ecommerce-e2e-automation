const { LoginPage } = require('../pageobjects/LoginPage'); //exporting the Login Page
const { DashBoard } = require('../pageobjects/Dashboard');
const { CheckOut } = require('../pageobjects/CheckOut');

class POmanager {

    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.dashboArd = new DashBoard(this.page);
        this.checkOutpp = new CheckOut(this.page);
    }
    getLoginPage() {
        return this.loginPage;
    }

    getDashboardPage() {
        return this.dashboArd;
    }

    getCheckoutPage() {
        return this.checkOutpp;
    }
}

module.exports = { POmanager };