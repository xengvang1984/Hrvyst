import ExploreHrvystPage from '../../../pages/exploreHrvystPage';

describe('Test Explore Hrvyst Page', () => {

    beforeEach('', () => {
        ExploreHrvystPage.goTo();
    })

    it('Validate Page Title and Sub Heading', () => {
        ExploreHrvystPage.validatePageTitle();
        ExploreHrvystPage.validatePageTitleSubHeading();
    })

    it('Validate all topic contents', () => {
        ExploreHrvystPage.validateAllTopicHeadings();
        ExploreHrvystPage.validateAllTopicContents();
    })

    it ('Validate all topic content images', () => {
        ExploreHrvystPage.validateAllImages();
    })
    
})