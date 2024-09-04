/// <reference types="cypress" />

import basePage from "../../../pages/basePage";
import loginPage from "../../../pages/loginPage";

describe('Test login page', () => {

    beforeEach(() => {
        loginPage.goTo();
    })

    it('Successful Login', () => {
        loginPage.clickLoginBtn();
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