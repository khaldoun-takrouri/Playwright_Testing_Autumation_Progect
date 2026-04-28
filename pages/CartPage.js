import { CheckoutStepOnePage } from '../pages/CheckoutStepOnePage.js'
import { urls } from '../data/users.js'
import {expect} from '@playwright/test'


export class CartPage{


    constructor(page){
        this.page = page
        this.checkoutStepOnePage = new CheckoutStepOnePage(page)
        this.cartBadge = '[data-test="shopping-cart-badge"]'
        this.checkoutButton = '[data-test="checkout"]'
        this.pageTitle = '[data-test="title"]'
    }


    async goToCheckoutStepOnePage(){
        await this.page.locator(this.checkoutButton).click() 
        await expect(this.page).toHaveURL(urls.checkoutStepOnePageUrl)
        await expect(this.page.locator(this.checkoutStepOnePage.pageTitle)).toHaveText('Checkout: Your Information')
    }

}