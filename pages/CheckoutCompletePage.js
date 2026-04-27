
export class CheckoutCompletePage{

    constructor(page){
        this.page = page
        this.pageTitleLocator = '[data-test="title"]'
        this.thankYouMessageLocator = '[data-test="complete-header"]'
    }
}
