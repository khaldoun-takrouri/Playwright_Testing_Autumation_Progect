import { CommonActions } from "../helpers/CommonActions"



export class CheckoutStepOnePage{

    constructor(page){
        this.actions = new CommonActions(page)
        this.firstNameSelector = '[data-test="firstName"]'
        this.lastNameSelector = '[data-test="lastName"]'
        this.postalCodeSelector = '[data-test="postalCode"]'
        this.continueButtonSelector = '[data-test="continue"]'
        this.pageTitleSelector = '[data-test="title"]'
    }

    async fillInformation(firstName, lastName , postalCode){
       await this.actions.fill(this.firstNameSelector, firstName)
       await this.actions.fill(this.lastNameSelector , lastName) 
       await this.actions.fill(this.postalCodeSelector, postalCode)
    }

    async navigateToCheckoutStepTwoPage(){
        await this.actions.click(this.continueButtonSelector)
    }

    


}