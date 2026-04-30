import { checkoutData , urls} from '../data/users.js'
import {expect} from '@playwright/test'



export class CheckoutStepOnePage{

    constructor(page){
        this.page = page
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
    }

}