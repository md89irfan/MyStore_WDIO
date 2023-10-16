import { ChainablePromiseElement } from 'webdriverio';

import { DataTable } from "@wdio/cucumber-framework";
import Page from "./page";
let firstName: string = "";
let lastName: string = "";

class RegisterPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get linkLoginOrRegister () { return $('//a[text()="Login or register"]'); }
    public get btnContinue() { return $('//button[@title="Continue" and @type="submit"]'); }

    public get firstNameTextBox() { return $('#AccountFrm_firstname'); }
    public get lastNameTextBox() { return $('#AccountFrm_lastname'); }
    public get emailTextBox() { return $('#AccountFrm_email'); }

    public get companyTextBox() { return $('#AccountFrm_company'); }
    public get address1TextBox() { return $('#AccountFrm_address_1'); }
    public get cityTextBox() { return $('#AccountFrm_city'); }
    public get stateDropdown() { return $('#AccountFrm_zone_id'); }
    public get zipcodeTextBox() { return $('#AccountFrm_postcode'); }
    public get countryDropdown() { return $('#AccountFrm_country_id'); }

    public get loginNameTextBox() { return $('#AccountFrm_loginname'); }
    public get passwordTextBox() { return $('#AccountFrm_password'); }
    public get confirmPasswordTextBox() { return $('#AccountFrm_confirm'); }

    public get newsletterNoRadio() { return $('#AccountFrm_newsletter0'); }
    public get privacyPolicyChkbox() { return $('#AccountFrm_agree'); }


    public get accountCreatedText() { return $('.maintext'); }


    /** Register page methods start */
    public async clickLoginOrRegister(){
        await (await this.linkLoginOrRegister).click();
    }

    public async clickContinue(){
        await (await this.btnContinue).click();
    }

    public async enterUserDetails(fname: string, lname: string, email: string) {
        console.log("Register page");
        await browser.pause(2000);
        await (await this.firstNameTextBox).setValue(fname);
        await (await this.lastNameTextBox).setValue(lname);
        await (await this.emailTextBox).setValue(email);
        firstName = fname;
        lastName = lname;
    }

    public async enterAddressDetails(company: string, address1: string, city: string, state: string, postcode: string, country: string) {
        await browser.pause(2000);

        await (await this.companyTextBox).setValue(company);
        await (await this.address1TextBox).setValue(address1);
        await (await this.cityTextBox).setValue(city);
        await (await this.countryDropdown).selectByVisibleText(country);
        await browser.pause(1000);
        await (await this.stateDropdown).selectByVisibleText(state);
        await (await this.zipcodeTextBox).setValue(postcode);

    }

    public async enterLoginDetails(loginId: string,password: string) {
        await (await this.loginNameTextBox).setValue(loginId);
        await (await this.passwordTextBox).setValue(password);
        await (await this.confirmPasswordTextBox).setValue(password);
    }

    public async checkPrivacyPolicy(){
        await (await this.privacyPolicyChkbox).click();
    }

    public async verifyAccountCreatedMessage(){
         let message: string = await (await this.accountCreatedText).getText();
         console.log('msg is: '+message);
         expect(message).toEqual("YOUR ACCOUNT HAS BEEN CREATED!");
    }



} export default new RegisterPage();