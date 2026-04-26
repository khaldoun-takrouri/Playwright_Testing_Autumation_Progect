
export class CheckoutCompletePage{

    constructor(page){
        this.page = page
        this.pageTitleSelector = '[data-test="title"]'
        this.thankYouMessageSelector = '[data-test="complete-header"]'
    }
}
