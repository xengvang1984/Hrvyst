import ExploreHrvystPage from '../../../pages/exploreHrvystPage';

describe('Test Explore Hrvyst Page', () => {

    beforeEach('', () => {
        ExploreHrvystPage.goTo();
    })

    it('Validate all the contents on the Explore Hrvyst Page', () => {
        ExploreHrvystPage.validatePageTitle();
        ExploreHrvystPage.validatePageSubHeading();
        ExploreHrvystPage.validateAllTopicHeadings();
    })
    
})