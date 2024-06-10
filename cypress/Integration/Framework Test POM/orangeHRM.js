import LoginPage from "../../support/PageObjects/OrangeHRM/login";
import LogoutPage from "../../support/PageObjects/OrangeHRM/logout";
import Links from "../../support/PageObjects/OrangeHRM/links";


describe('OrangeHRM', () => {

    const login = new LoginPage
    const logout1 = new LogoutPage
    const links =new Links


    it('Login', () => {

        login.visiturl();
        login.login();

        
    });

    it('Logout', () => {

        logout.visit();
        logout.logout();
        
    });

    it.only('links', () => {

        login.visiturl();
        login.login();

        links.clicklink('Admin');
        logout1.logout();

        

        
    });
});