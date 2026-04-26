import { CommonActions } from "../helpers/CommonActions"

export class InventoryPage{
   
    constructor(page){
        this.actions = new CommonActions(page)
        this.bikeLiteSelector = '[data-test = "add-to-cart-sauce-labs-bike-light"]'
        this.backPackSelector = '[data-test="add-to-cart-sauce-labs-backpack"]'
        this.shoppingCartSelector = '[data-test="shopping-cart-badge"]'
    }
    
    async addItems(){
        await this.actions.click(this.bikeLiteSelector)
        await this.actions.click(this.backPackSelector)
    }

    async navigateToShoppingCartPage(){
        await this.actions.click(this.shoppingCartSelector)
    }

     
}

