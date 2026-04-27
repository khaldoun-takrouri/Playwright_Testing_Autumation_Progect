
export class CheckoutStepTwoPage{

    constructor(page){
        this.page = page
        this.finishButtonLocatoer = '[data-test="finish"]'
        this.pageTitleLocator = '[data-test="title"]'
    }

    async navigateToCheckoutComlete(){
        await this.page.click(this.finishButtonLocatoer)        
    }
}