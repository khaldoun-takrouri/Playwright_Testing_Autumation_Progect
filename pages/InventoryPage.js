import { urls } from '../data/users.js'
import { CartPage } from '../pages/CartPage.js'
import {expect} from '@playwright/test'



export class InventoryPage{
   
    constructor(page){
        this.page = page
        this.cartPage = new CartPage(page)
        this.bikeLiteAddToCart = '[data-test = "add-to-cart-sauce-labs-bike-light"]'
        this.backPackAddToCart = '[data-test="add-to-cart-sauce-labs-backpack"]'
        this.cartBadge = '[data-test="shopping-cart-badge"]'
    }
    
    async addTwoItems(){
        await this.page.locator(this.bikeLiteAddToCart).click()    
        await this.page.locator(this.backPackAddToCart).click()
        await expect(this.page.locator(this.cartBadge)).toHaveText('2')
        
    }

    
    async goToCartPage(){
        await this.page.locator(this.cartBadge).click() 
        await expect(this.page).toHaveURL(urls.cartPageUrl)    
        await expect(this.page.locator(this.cartPage.cartBadge)).toHaveText('2')
        await expect(this.page.locator(this.cartPage.pageTitle)).toHaveText('Your Cart')
    }

     
}

