import { checkoutData , urls} from '../data/users.js'
import { CheckoutStepTwoPage } from '../pages/CheckoutStepTwoPage.js'
import {expect} from '@playwright/test'



export class CheckoutStepOnePage{

    constructor(page){
        this.page = page
        this.checkoutStepTwoPage = new CheckoutStepTwoPage(page)
        this.firstNameFiled = '[data-test="firstName"]'
        this.lastNameFiled = '[data-test="lastName"]'
        this.postalCodeFiled = '[data-test="postalCode"]'
        this.continueButton = '[data-test="continue"]'
        this.pageTitle = '[data-test="title"]'
    }

    async fillInformation(){
        await this.page.locator(this.firstNameFiled).fill(checkoutData.firstName)
        await this.page.locator(this.lastNameFiled).fill(checkoutData.lastName)
        await this.page.locator(this.postalCodeFiled).fill(checkoutData.postalCode)
    }

    async goToCheckoutStepTwoPage(){
        await this.page.locator(this.continueButton).click() 
        await expect(this.page).toHaveURL(urls.checkoutStepTwoPageUrl)
        await expect(this.page.locator(this.checkoutStepTwoPage.pageTitle)).toHaveText('Checkout: Overview')
    }

}