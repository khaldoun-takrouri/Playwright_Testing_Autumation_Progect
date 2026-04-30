import {expect} from '@playwright/test'
import { urls } from '../data/users.js'

export class CheckoutStepTwoPage{

    constructor(page){
        this.page = page
        this.finishButton = '[data-test="finish"]'
        this.pageTitle = '[data-test="title"]'
    }

    async goToCheckoutComplete(){
        await this.page.locator(this.finishButton).click() 
    }
}