import BasePage from './basePage';
import TopNavPage from './topNavPage';

const LOGIN_BTN_CSS_SELECTOR = '[data-testid="login-button"]';
const FORGOT_PASSWORD_LINK_CSS_SELECTOR = 'a.login__hrvyst-forget-pass'; // Need test id
const MICROSOFT_LOGIN_PAGE_BASE_URL = 'login.microsoftonline.com';
const MICROSOFT_FORGOT_PASSWORD_PAGE_BASE_URL = 'passwordreset.microsoftonline.com';

class LoginPage {
    /**
     * Go to the login page
     */
    goTo() {
        BasePage.goToHomePage();
        TopNavPage.goToTopNav(TopNavPage.TOP_NAVS.Login);
    }
    
    /**
     * Click the login button
     */
    clickLoginBtn() {
        cy.get(LOGIN_BTN_CSS_SELECTOR, { timeout: BasePage.DEFAULT_TIMEOUT_MS })
            .should('be.visible')
            .click();
    }

    /**
     * Click the forgot password link
     */
    clickForgotPasswordLink() {
        cy.get(FORGOT_PASSWORD_LINK_CSS_SELECTOR, { timeout: BasePage.DEFAULT_TIMEOUT_MS })
            .should('be.visible')
            .click();
    }

    // Looks like Login is integrated with Microsoft Authentication and will most likely need special handling. See link for examples:
    // https://docs.cypress.io/guides/end-to-end-testing/azure-active-directory-authentication
    login(username) {
        /*
        cy.origin(MICROSOFT_LOGIN_PAGE_BASE_URL, {
            args: {
                username,
            },
            },
            ({ username }) => {
            cy.get('input[type="email"]').type(username, { log: false });
            cy.get('input[type="submit"]').click();
            }
        )
            */
    }

}

module.exports = new LoginPage();