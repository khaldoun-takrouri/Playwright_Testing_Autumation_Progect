import { CommonActions } from "../helpers/CommonActions";

export class CartPage{

    constructor(page){
        this.actions = new CommonActions(page)
        this.shoppingCartSelector = '[data-test="shopping-cart-badge"]'
        this.checkoutButtonSelector = '[data-test="checkout"]'
        this.pageTitleSelector = '[data-test="title"]'
    }

    async getShoppingCartValue(){
        return await this.actions.getText(this.shoppingCartSelector)
    }

    async navigateToCheckoutStepOnePage(){
        await this.actions.click(this.checkoutButtonSelector)
    }


}