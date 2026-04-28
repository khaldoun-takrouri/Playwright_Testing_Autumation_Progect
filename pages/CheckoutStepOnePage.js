import {info} from '../data/users.js'

export class CheckoutStepOnePage {
	constructor(page) {
		this.page = page
		this.firstNameLocator = '[data-test="firstName"]'
		this.lastNameLocator = '[data-test="lastName"]'
		this.postalCodeLocator = '[data-test="postalCode"]'
		this.continueButtonLocator = '[data-test="continue"]'
		this.pageTitleLocator = '[data-test="title"]'
	}

	async fillInformation() {
		await this.page.fill(this.firstNameLocator, info.firstName)
		await this.page.fill(this.lastNameLocator, info.lastName)
		await this.page.fill(this.postalCodeLocator, info.postalCode)
	}

	async navigateToCheckoutStepTwoPage() {
		await this.page.click(this.continueButtonLocator)
	}
}
