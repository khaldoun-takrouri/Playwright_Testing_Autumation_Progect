import {test, expect} from '@playwright/test'
import { credentials, messages, urls } from '../data/users.js'
import { LoginPage } from '../pages/LoginPage.js'
import { InventoryPage } from '../pages/InventoryPage.js'

let loginPage


test.describe('Positive Testes', ()=>{

    test.beforeEach(async ({page})=>{
        loginPage = new  LoginPage(page) 
        await loginPage.goToLoginPage()
    })

    test('StandardUser Login' ,async ({page})=>{
        await loginPage.login(credentials.standardUser, credentials.password1)
    })


    test('problemUser Login' ,async ({page})=>{
        await loginPage.login(credentials.problemUser, credentials.password1)
    })

    test('performanceGlitchUser Login' ,async ({page})=>{
        await loginPage.login(credentials.performanceGlitchUser, credentials.password1)
    })

     

    test('errorUser Login' ,async ({page})=>{
        await loginPage.login(credentials.errorUser, credentials.password1)
    })

    test('visualUser Login' ,async ({page})=>{
        await loginPage.login(credentials.visualUser, credentials.password1)
    })
})


test.describe('Negative Testes', ()=>{

    test.beforeEach(async ({page})=>{
        loginPage = new  LoginPage(page) 
        await loginPage.goToLoginPage()
    })

    test('locked out user Login' ,async ({page})=>{
        await loginPage.login1(credentials.lockedOutUser, credentials.password1)
        await expect(page.locator(loginPage.errorMessage)).toHaveText(messages.lockedUserMessage)
    })


    test('Correct UserName and wrong Password' ,async ({page})=>{
        await loginPage.login1(credentials.standardUser, credentials.wrongPassword)
        await expect(page.locator(loginPage.errorMessage)).toHaveText(messages.notMatchUserMessage)        
    })

    test('Wrong UserName and Correct Password' ,async ({page})=>{
        await loginPage.login1(credentials.wrongUserName, credentials.password1)
        await expect(page.locator(loginPage.errorMessage)).toHaveText(messages.notMatchUserMessage)        
    })

    test('Wrong UserName and Wrong Password' ,async ({page})=>{
        await loginPage.login1(credentials.wrongUserName, credentials.wrongPassword)
        await expect(page.locator(loginPage.errorMessage)).toHaveText(messages.notMatchUserMessage)        

    })

    test('Empty UserName and Correct Password' ,async ({page})=>{
        await loginPage.login1( "", credentials.password1)
        await expect(page.locator(loginPage.errorMessage)).toHaveText(messages.userNameRequiredMessage)
    })

    test('Correct UserName and Empty Password' ,async ({page})=>{
        await loginPage.login1(credentials.standardUser, "")
        await expect(page.locator(loginPage.errorMessage)).toHaveText(messages.passwordRequiredMessage)
    })

    test('Empty UserName and Empty Password' ,async ({page})=>{
        await loginPage.login1("", "")
        await expect(page.locator(loginPage.errorMessage)).toHaveText(messages.userNameRequiredMessage)
    })
})