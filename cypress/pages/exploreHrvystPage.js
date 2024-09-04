import '../support/commands';
import BasePage from './basePage';
import TopNavPage from './topNavPage';


const PAGE_TITLE_TEXT = 'Explore Hrvyst'
const PAGE_TITLE_CSS_SELECTOR = '[data-original-title] h1 strong'; // Needs test id

const PAGE_SUB_HEADING_TEXT = 'Hryvst delivers simple, powerful solutions that reduce risk and elevate productivity.';
const PAGE_SUB_HEADING_CSS_SELECTOR = '[data-id="59"] h6'; // Needs test id

const ALL_TOPIC_HEADINGS_CSS_SELECTOR = '[data-original-title] h2';
const ALL_TOPIC_HEADINGS = ['Fully Automated Hedging', 'Offer Management System', 'Contract Management\n(Basis and HTA Pricing and Rolling)', 
    'Intuitive Dashboard', 'Robust Connectivity to Third-Party Vendors'];

class ExploreHrvystPage {
    /**
     * Go to the Explore Hrvyst Page
     */
    goTo() {
        BasePage.goToHomePage();
        TopNavPage.goToTopNav(TopNavPage.TOP_NAVS.Explore_Hrvyst);
    }

    /**
     * Validate the page title heading
     */
    validatePageTitle() {
        cy.get(PAGE_TITLE_CSS_SELECTOR)
            .shouldHaveTrimmedText(PAGE_TITLE_TEXT);
    }

    /**
     * Validate the contents under the page title heading
     */
    validatePageSubHeading() {
        cy.get(PAGE_SUB_HEADING_CSS_SELECTOR)
            .shouldHaveTrimmedText(PAGE_SUB_HEADING_TEXT);
    }

    validateAllTopicHeadings() {
        const allHeadings = [];
        cy.get(ALL_TOPIC_HEADINGS_CSS_SELECTOR)
            .should('be.visible')
            .each((heading) => allHeadings.push(heading.text().trim()));
        cy.wrap(allHeadings)
            .should('deep.equal', ALL_TOPIC_HEADINGS);
    }
    
}

module.exports = new ExploreHrvystPage();