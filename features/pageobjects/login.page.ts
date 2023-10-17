import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * @dateCreated: 16th Oct, 2023
 * @createdBy: Mohammad Irfan
 * @description: This file contains page elements and methods for login to test store application
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    public get loginNameTextbox () { return $('#loginFrm_loginname'); }

    public get passwordTextbox () { return $('#loginFrm_password'); }

    public get btnLogin () { return $('//button[@title="Login"]'); }

    public get welcomeText () { return $('//*[@class="menu_text" and contains(text(),"Welcome back")]') ;}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (loginName: string, password: string) {
        await this.loginNameTextbox.setValue(loginName);
        await this.passwordTextbox.setValue(password);     
    }

    public async clickLoginButton(){
        await this.btnLogin.click();
    }

    public async verifyWelcomeMessageContainsFName(fname: string){
        await browser.pause(500);
        let message:string = await (await this.welcomeText).getText();
        expect(message).toHaveText(fname);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new LoginPage();
