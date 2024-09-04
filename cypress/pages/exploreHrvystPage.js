import '../support/commands';
import BasePage from './basePage';
import TopNavPage from './topNavPage';


const PAGE_TITLE_TEXT = 'Explore Hrvyst'
const PAGE_TITLE_CSS_SELECTOR = '[data-original-title] h1 strong'; // Needs test id

const PAGE_TITLE_BACKGROUND_IMAGE_CSS_SELECTOR = '[data-id="59"]'; // Need better unique test id
const PAGE_TITLE_BACKGROUND_IMAGE_FILE_NAME = ['grain-banner-1.jpg'];

const PAGE_TITLE_SUB_HEADING_TEXT = 'Hryvst delivers simple, powerful solutions that reduce risk and elevate productivity.';
const PAGE_TITLE_SUB_HEADING_CSS_SELECTOR = '[data-id="59"] h6'; // Needs test id

const ALL_TOPIC_HEADINGS_CSS_SELECTOR = '[data-original-title] h2';
const ALL_TOPIC_HEADINGS = ['Fully Automated Hedging', 'Offer Management System', 'Contract Management\n(Basis and HTA Pricing and Rolling)', 
    'Intuitive Dashboard', 'Robust Connectivity to Third-Party Vendors'];

const ALL_TOPIC_CONTENTS_CSS_SELECTOR = 'div.px-md-4 p'; // Needs test id
const ALL_TOPIC_CONTENTS = ["Hrvyst is purpose built to automate hedging by digitizing the entire grain origination and merchandising process - electronically linking grain offers, purchases and sales to the futures market and to the elevator’s grain accounting package.",
    "Hrvyst effortlessly hedges transactions other platforms cannot. Whether executing spot or forward contracts or whether pricing and rolling basis as well as HTA contracts, Hrvyst keeps you fully hedged in real-time. Slippage and error risk are virtually eliminated.", 
    "Many grain companies rely on clipboards and Post-it® notes to manage farmer offers. More progressive companies have evolved to using spreadsheets and aggregating data on shared drives or in CRMs.", 
    "While these work-arounds may improve visibility to open offers, they do little to increase productivity or minimize execution risk.  \n\nHrvyst’s automation allows companies to be more proactive in updating bids in response to changing market conditions.  Updates can be done in a matter of minutes, allowing elevators to originate more bushels without overpaying for grain.",
    "Automation continues in Hrvyst where it stops on competing platforms.  Hrvyst is built to capture every event in the life of a grain contract.  This minimizes risk while maximizing productivity and improving access to accurate information.",
    "Hrvyst easily prices Basis contracts and HTA contracts with a few simple clicks. These contracts can also be priced against offers.  And if the farmer doesn’t get an offer filled, it’s no problem.  Hrvyst can automatically roll contracts forward.",
    "Hrvyst delivers a live and consolidated view of your company’s origination, merchandising and hedging activity in a simple and easy to understand dashboard.  Hrvyst allows you to instantly spot unhedged bushels and understand potential spread risk.",
    "Mission-critical applications must stay in sync to maximize productivity and streamline information flow.  Hrvyst connects to your grain accounting package to minimize keystrokes and make the best use of your employee’s time.",
    "Hrvyst API enables connectivity to your mobile platform, allowing farmers to create contracts or submit bids."];

const ALL_TOPIC_IMAGES_CSS_SELECTOR = '.bg-image'; // Needs test id
const BASE_IMAGE_URL = BasePage.BASE_URL + '/userfiles/2088/images/';
const ALL_TOPIC_IMAGES_FILE_NAMES = ['Depositphotos_215839834_xl-2015.jpg?t=20200511100525', 
    'Depositphotos_69760503_xl-2015.jpg?t=20200511100511', 
    'Depositphotos_50954861_xl-2015.jpg?t=20200511100523', 
    'card-4.jpg', 
    'Depositphotos_171843750_xl-2015.jpg?t=20200511110536'];


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
     * Validate the the page title sub heading
     */
    validatePageTitleSubHeading() {
        cy.get(PAGE_TITLE_SUB_HEADING_CSS_SELECTOR)
            .shouldHaveTrimmedText(PAGE_TITLE_SUB_HEADING_TEXT);
    }

    /**
     * Validate all the topic headings are correct and in the correct order
     */
    validateAllTopicHeadings() {
        const allHeadings = [];
        cy.get(ALL_TOPIC_HEADINGS_CSS_SELECTOR)
            .should('be.visible')
            .each((heading) => allHeadings.push(heading.text().trim()));
        cy.wrap(allHeadings)
            .should('deep.equal', ALL_TOPIC_HEADINGS);
    }

    /**
     * Validate all contents are correct and in the correct order
     */
    validateAllTopicContents() {
        const allTopicContents = [];
        cy.get(ALL_TOPIC_CONTENTS_CSS_SELECTOR)
            .should('be.visible')
            .each((content) => {
                // Need to convert &nbsp; into a whitespace before adding to list for comparison
                const formattedContent = content.text().replace(/\xA0/g,' ');
                allTopicContents.push(formattedContent.trim())
    });
        cy.wrap(allTopicContents)
            .should('deep.equal', ALL_TOPIC_CONTENTS);
    }
    
    /**
     * Validates all background images
     */
    validateAllImages() {
        this.validateBackgroundImages(PAGE_TITLE_BACKGROUND_IMAGE_CSS_SELECTOR, PAGE_TITLE_BACKGROUND_IMAGE_FILE_NAME);
        this.validateBackgroundImages(ALL_TOPIC_IMAGES_CSS_SELECTOR, ALL_TOPIC_IMAGES_FILE_NAMES);
    }

    /**
     * Validate that all images are the correct ones and showing
     */
    validateBackgroundImages(IMAGE_CSS_SELECTOR, BACKGROUND_IMAGE_FILE_NAMES) {
        const allTopicImages = [];
        cy.get(IMAGE_CSS_SELECTOR)
            .should('be.visible')
            .each((image) => {
                const imageBackgroundUrl = image.css('background-image');
                // Check that the image url requests come back with 200 status
                cy.request(imageBackgroundUrl).then((res) => {
                    expect(res.isOkStatusCode).to.be.true;
               });
                allTopicImages.push(imageBackgroundUrl)
        });
        cy.wrap(allTopicImages)
            .should('deep.equal', this.buildImageBackgroundUrls(BACKGROUND_IMAGE_FILE_NAMES));
    }

    /**
     * This builds all the correct topic image background url full paths
     * @returns 
     */
    buildImageBackgroundUrls(fileNames) {
        if (fileNames instanceof Array) {
            const allTopicImageBackgroundUrls = [];
            for (let name of fileNames) {
                const urlPath = 'url("' + BASE_IMAGE_URL + name + '")';
                allTopicImageBackgroundUrls.push(urlPath);
            }
            return allTopicImageBackgroundUrls;
        } else {
            return 'url("' + BASE_IMAGE_URL + fileNames + '")';
        }
    }
    
}

module.exports = new ExploreHrvystPage();