import { CartPage } from "./CartPage"
import { CheckoutStepOnePage } from "./CheckoutStepOnePage"
import { CheckoutStepTwoPage } from "./CheckoutStepTwoPage"
import { InventoryPage } from "./InventoryPage"
import { LoginPage } from "./LoginPage"
import { CheckoutCompletePage } from "./CheckoutCompletePage"


export class PomManager{
    
    
    constructor(page){
        
         this.loginPage = new LoginPage(page)
         this.inventoryPage = new InventoryPage(page)
         this.cartPage = new CartPage(page)
         this.checkoutStepOnePage = new CheckoutStepOnePage(page)
         this.checkoutStepTwoPage = new CheckoutStepTwoPage(page)
         this.checkoutCompletePage = new CheckoutCompletePage(page)
    }
}