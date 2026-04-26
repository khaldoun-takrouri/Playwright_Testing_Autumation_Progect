import {expect} from "@playwright/test";
import { CommonActions } from "../helpers/CommonActions";

export class LoginPage {

    constructor(page){
        this.actions = new CommonActions(page)
        this.usernameLocator = '[data-test="username"]'
        this.passwordLocator = '[data-test="password"]'
        this.loginLocator = '[data-test="login-button"]'
        this.errorMessageLocator = '[data-test="error"]'

    }

    
    async login(url,username,password){
        await this.actions.navigate(url)
        await this.actions.fill(this.usernameLocator,username)
        await this.actions.fill(this.passwordLocator,password)
        await this.actions.click(this.loginLocator)
    }

       
    
}
