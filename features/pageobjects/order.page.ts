import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class OrderPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get addtoCartButton () { return $("//a[@class='cart']"); }
    public get checkoutButton () { return $('#cart_checkout1'); }
    public get productNameLink () { return $("//table[@class='table confirm_products']/tbody/tr/td[2]/a") ;}
    public get confirmOrderButton () { return $('#checkout_btn'); }
    public get confirmationText () { return $('.maintext') ;}

    public async clickProductMenu(productMenu: string){
        let xpath: string = "//*[@id='categorymenu']//a[contains(text(),'"+productMenu+"')]";
        await $(xpath).moveTo();
    }

    public async clickSubProductMenu(subProductMenu: string){
        await browser.pause(500);
        let xpath: string = "//*[@class='subcategories']//a[contains(text(),'"+subProductMenu+"')]";
        await $(xpath).click();
    }

    public async clickProductName(productName: string){
        await browser.pause(500);
        let xpath: string = "//*[@class='prdocutname' and contains(@title,'"+productName+"')]";
        await $(xpath).click();
    }

    public async clickAddToCart(){
        await (await this.addtoCartButton).click();
    }

    public async clickCheckout(){
        await (await this.checkoutButton).click();
    }

    public async clickConfirmOrder(){
        await (await this.confirmOrderButton).click();
    }

    public async verifyProductName(productName: string){
        await browser.pause(500);
        let productNameDisplayed:string =  await (await this.productNameLink).getText();
        expect(productName).toEqual(productNameDisplayed);
    }

    public async verifyOrderConfirmationMessage(){
        await browser.pause(500);

        let message: string = await (await this.confirmationText).getText();
        expect(message.trim()).toEqual('YOUR ORDER HAS BEEN PROCESSED!');
    }



}

export default new OrderPage();
