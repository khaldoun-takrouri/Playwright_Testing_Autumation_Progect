
export class InventoryPage{
   
    constructor(page){
        this.page = page
        this.bikeLiteLocator = '[data-test = "add-to-cart-sauce-labs-bike-light"]'
        this.backPackLocator = '[data-test="add-to-cart-sauce-labs-backpack"]'
        this.cartLocator = '[data-test="shopping-cart-badge"]'
    }
    
    async addTwoItems(){
        await this.page.click(this.bikeLiteLocator)
        await this.page.click(this.backPackLocator)   
    }

    

    async navigateToCartPage(){
        await this.page.click(this.cartLocator) 
    }

     
}

