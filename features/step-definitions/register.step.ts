import { Given, When, Then, DataTable } from '@wdio/cucumber-framework';
import RegisterPage from '../pageobjects/register.page';

const pages = {
    register: RegisterPage
}

When(/^I click on Login or Register link$/, async () => {    
    await RegisterPage.clickLoginOrRegister();
});

When(/^I click on Continue button$/, async () => {
	await RegisterPage.clickContinue();
});

When(/^I enter "([^"]*)", "([^"]*)" and "([^"]*)" details$/, async (fname: string,lname: string,email: string) => {
	await RegisterPage.enterUserDetails(fname, lname, email);
});

When(/^I enter "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)"$/, async (company: string,address1: string,city: string,state: string,postcode: string,country: string) => {
	
	await RegisterPage.enterAddressDetails(company,address1,city,state,postcode,country);
});

When(/^I enter "([^"]*)" and "([^"]*)"$/, async (loginId: string,password: string) => {
	await RegisterPage.enterLoginDetails(loginId,password);
});


When(/^I select privacy policy checkbox$/, async () => {
	await RegisterPage.checkPrivacyPolicy();
});


Then(/^I should see account successfully created message$/, async () => {
	await RegisterPage.verifyAccountCreatedMessage();
});



