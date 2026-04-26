import { CommonActions } from "../helpers/CommonActions"

export class CheckoutStepTwoPage{

    constructor(page){
        this.actions = new CommonActions(page)
        this.finishButtonSelector = '[data-test="finish"]'
        this.pageTitleSelector = '[data-test="title"]'
    }

    async navigateToCheckoutComlete(){
        await this.actions.click(this.finishButtonSelector)
    }
}