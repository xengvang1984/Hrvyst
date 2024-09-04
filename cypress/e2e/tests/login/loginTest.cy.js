/// <reference types="cypress" />

import basePage from "../../../pages/basePage";
import loginPage from "../../../pages/loginPage";

const USERNAME = 'TESTUSER';

describe('Test login page', () => {

    beforeEach(() => {
        loginPage.goTo();
    })

    it('Successful Login', () => {
        loginPage.clickLoginBtn();
        loginPage.login(USERNAME); // This currently requires more implementation with Microsoft Authentication
    })
    /*
    it('Unsuccessful Login Errors', () => {
        
    })

    it('Successful Forgot Password', () => {
        
    })

    it('Unsuccessful Forgot Password Errors', () => {
        
    })
        */
});