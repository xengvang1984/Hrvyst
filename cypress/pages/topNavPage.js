import BasePage from "./basePage";

const TOP_NAV_LINK_CSS_SELECTOR = 'nav a.nav-link'; // Needs test id
const TOP_NAV_ACTIVE_LINK_CSS_SELECTOR = 'nav a.nav-link.active';

class TopNavPage {

    // Top Navigation Menu Options
    // Needs test ids
    TOP_NAVS = Object.freeze({
        Explore_Hrvyst: 'Explore Hrvyst',
        Benefits: 'Benefits',
        About_Hrvyst_and_RJO: 'About Hrvyst and RJO',
        Projects: 'Projects',
        Contact: 'Contact',
        Login: 'Login'
    });

    /**
     * Clicks on the available Top Navigation Menus and navigates to the specified page
     * @param {*} TOP_NAVS 
     */
    goToTopNav(TOP_NAVS) {
        cy.contains(TOP_NAV_LINK_CSS_SELECTOR, TOP_NAVS)
            .should('be.visible')
            .click();
    }

    /**
     * Validate that the specified top nav is active
     * @param {*} TOP_NAVS 
     */
    validateActiveTopNav(TOP_NAVS) {
        cy.get(TOP_NAV_ACTIVE_LINK_CSS_SELECTOR)
            .should('be.visible')
            .should('equal', TOP_NAVS);
    }
}

module.exports = new TopNavPage();