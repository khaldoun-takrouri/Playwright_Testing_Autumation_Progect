import {expect} from '@playwright/test'

export class LoginPage {
	constructor(page) {
		this.page = page
		this.usernameLocator = '[data-test="username"]'
		this.passwordLocator = '[data-test="password"]'
		this.loginLocator = '[data-test="login-button"]'
		this.errorMessageLocator = '[data-test="error"]'
	}

	async login(username, password) {
		await this.page.fill(this.usernameLocator, username)
		await this.page.fill(this.passwordLocator, password)
		await expect(this.page.locator(this.loginLocator)).toBeVisible()
		await this.page.click(this.loginLocator)
	}
}
