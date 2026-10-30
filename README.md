# Playwright E-Commerce E2E Automation

End-to-end test automation using **Playwright, JavaScript, and the Page Object Model (POM)**.

This project automates an e-commerce purchase journey, covering login, product selection, cart navigation, checkout, and order confirmation.

## Tech Stack

* **Automation:** Playwright
* **Language:** JavaScript
* **Design Pattern:** Page Object Model (POM)
* **Test Runner:** Playwright Test
* **CI/CD:** GitHub Actions
* **Version Control:** Git & GitHub

## Project Structure

```text
PomE2E/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── pageobjects/
│   ├── CheckOut.js
│   ├── DashBoard.js
│   ├── LoginPage.js
│   └── POmanager.js
├── tests/
│   └── Main.spec.js
├── .gitignore
├── package.json
├── package-lock.json
└── playwright.config.js
```

## Automated Test Scenario

The main end-to-end test covers the following journey:

1. Navigate to the application.
2. Log in with valid test credentials.
3. Search for a product.
4. Add the product to the cart.
5. Navigate to checkout.
6. Complete the checkout process.
7. Verify the order confirmation.

## Getting Started

### Prerequisites

* Node.js (LTS recommended)
* npm
* Git

### 1. Clone the Repository

```bash
git clone https://github.com/subirkundu/playwright-ecommerce-e2e-automation.git
```

Navigate into the project:

```bash
cd playwright-ecommerce-e2e-automation
```

### 2. Install Dependencies

```bash
npm ci
```

### 3. Install Playwright Browsers

```bash
npx playwright install
```

### 4. Configure Test Credentials

Configure the test account credentials using environment variables:

```text
USER_EMAIL=your-test-email
USER_PASSWORD=your-test-password
```

Keep actual credentials private. Never commit `.env` or other files containing secrets.

### 5. Run the Tests

Run all tests:

```bash
npx playwright test
```

Run tests with a visible browser:

```bash
npx playwright test --headed
```

Run a specific test file:

```bash
npx playwright test tests/Main.spec.js
```

### 6. View the HTML Report

```bash
npx playwright show-report
```

## Page Object Model

The framework separates page-specific actions from test scenarios.

* **LoginPage.js:** Login-related interactions.
* **DashBoard.js:** Product search and cart navigation.
* **CheckOut.js:** Checkout and order confirmation.
* **POmanager.js:** Centralizes the creation and access of page objects.
* **Main.spec.js:** Executes the end-to-end test scenario.

This structure improves code reusability, maintainability, and readability.

## CI/CD with GitHub Actions

The repository includes a GitHub Actions workflow at:

```text
.github/workflows/playwright.yml
```

The workflow is configured to run Playwright tests when changes are pushed to `main` or `master`, and when pull requests target those branches.

It installs dependencies, installs Playwright browsers, executes the tests, and uploads the HTML report as a workflow artifact.

## Future Improvements

* Expand test coverage with additional positive and negative scenarios.
* Add stronger assertions for cart and order confirmation.
* Improve reporting and failure diagnostics.
* Expand browser coverage.
* Introduce reusable test fixtures and test data management.

## Author

**Subir Kundu**

Software QA Engineer | Test Automation | Playwright | API Testing

GitHub: [@subirkundu](https://github.com/subirkundu)
