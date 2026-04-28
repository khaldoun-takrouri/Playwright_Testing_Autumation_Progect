import { CheckoutCompletePage } from '../pages/CheckoutCompletePage.js'
import {expect} from '@playwright/test'
import { urls } from '../data/users.js'

export class CheckoutStepTwoPage{

    constructor(page){
        this.page = page
        this.checkoutCompletePage = new CheckoutCompletePage(page)
        this.finishButton = '[data-test="finish"]'
        this.pageTitle = '[data-test="title"]'
    }

    async navigateToCheckoutComlete(){
        await this.page.locator(this.finishButton).click() 
        await expect(this.page).toHaveURL(urls.checkoutCompletePageUrl)
        await expect( this.page.locator(this.checkoutCompletePage.pageTitle)).toHaveText('Checkout: Complete!')
        await expect( this.page.locator(this.checkoutCompletePage.thankYouMessage)).toHaveText('Thank you for your order!')    
    }
}