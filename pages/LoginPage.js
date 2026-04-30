import {expect} from "@playwright/test";
import { urls } from '../data/users.js'

export class LoginPage {
 
    constructor(page){
        this.page = page
        this.usernameFiled = '[data-test="username"]'
        this.passwordFiled = '[data-test="password"]'
        this.loginButton = '[data-test="login-button"]'
        this.errorMessage = '[data-test="error"]'
    }

    async goToLoginPage(){
        await this.page.goto(urls.loginPageUrl)
    }

    async login(username, password){
           await this.page.locator(this.usernameFiled).fill(username )
           await this.page.locator(this.passwordFiled).fill(password)
           await this.page.locator(this.loginButton).click() 
    }       
    
}
