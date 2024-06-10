import Loginpage from "../../support/PageObjects/Herouk/Login";

describe('Heroku Test', () => {
    const login = new Loginpage();

    it('Login', () => {

        login.visiturl();
        login.Login();

            
        
    });
});