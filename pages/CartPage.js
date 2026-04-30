import { urls } from '../data/users.js'
import {expect} from '@playwright/test'


export class CartPage{


    constructor(page){
        this.page = page
        this.cartBadge = '[data-test="shopping-cart-badge"]'
        this.checkoutButton = '[data-test="checkout"]'
        this.pageTitle = '[data-test="title"]'
    }


    async goToCheckoutStepOnePage(){
        await this.page.locator(this.checkoutButton).click() 
    }

}