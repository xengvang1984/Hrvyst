const BASE_URL = 'https://hrvyst.com';

/**
 * This base page class houses all the common methods that will be used across all the pages
 */
class BasePage {
    // Default Timeout in MS
    DEFAULT_TIMEOUT_MS = 5000;

    /**
     * Go to the base url
     */
    goToHomePage() {
        cy.visit(BASE_URL);
    }
}

module.exports = new BasePage();