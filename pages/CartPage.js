export class CartPage {
	constructor(page) {
		this.page = page
		this.cartLocator = '[data-test="shopping-cart-badge"]'
		this.checkoutButtonLocator = '[data-test="checkout"]'
		this.pageTitleLocator = '[data-test="title"]'
	}

	async navigateToCheckoutStepOnePage() {
		await this.page.click(this.checkoutButtonLocator)
	}
}
