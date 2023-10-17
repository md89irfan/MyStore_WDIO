import { Given, When, Then, DataTable } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page';
import OrderPage from '../pageobjects/order.page';

/**
 * @dateCreated: 16th Oct, 2023
 * @createdBy: Mohammad Irfan
 * @description: This file contains step definitions for login and placing order to test store application
 */

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I enter loginId "([^"]*)" and password "([^"]*)"$/, async (loginId: string,password: string) => {
	await LoginPage.login(loginId, password);
});

When(/^I click on Login button$/, async () => {
	await LoginPage.clickLoginButton();
});

Then(/^I should see welcome back "([^"]*)" message$/, async (userFirstName) => {
	await LoginPage.verifyWelcomeMessageContainsFName(userFirstName);
});

When(/^I hover over product menu "([^"]*)"$/, async (productMenu) => {
	await OrderPage.clickProductMenu(productMenu);
});

When(/^I click sub-product menu "([^"]*)"$/, async (subProductMenu) => {
	await OrderPage.clickSubProductMenu(subProductMenu);
});

When(/^I click on product "([^"]*)"$/, async (product: string) => {
	await OrderPage.clickProductName(product);
});

When(/^I click on Add to Cart button$/, async () => {
	await OrderPage.clickAddToCart();
});

When(/^I click on checkout button$/, async () => {
	await OrderPage.clickCheckout();
});

Then(/^I should see the product name as "([^"]*)"$/, async (productName) => {
	await OrderPage.verifyProductName(productName);
});

When(/^I click on Confirm Order$/, async () => {
	await OrderPage.clickConfirmOrder();
});

Then(/^I should see order confirmation message$/, async () => {
	await OrderPage.verifyOrderConfirmationMessage();
});









