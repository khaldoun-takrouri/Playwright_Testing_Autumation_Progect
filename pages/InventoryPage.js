import { urls } from '../data/users.js'
import {expect} from '@playwright/test'



export class InventoryPage{
   
    constructor(page){
        this.page = page
        this.bikeLiteAddToCart = '[data-test = "add-to-cart-sauce-labs-bike-light"]'
        this.backPackAddToCart = '[data-test="add-to-cart-sauce-labs-backpack"]'
        this.cartBadge = '[data-test="shopping-cart-badge"]'
        this.pageTitle = '[data-test="title"]'
    }
    
    async addTwoItems(){
        await this.page.locator(this.bikeLiteAddToCart).click()    
        await this.page.locator(this.backPackAddToCart).click()
    }

    
    async goToCartPage(){
        await this.page.locator(this.cartBadge).click() 
    }

     
}

