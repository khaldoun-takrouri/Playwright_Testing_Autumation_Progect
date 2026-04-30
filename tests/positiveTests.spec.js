import {test, expect} from '@playwright/test'
import { credentials, messages, urls } from '../data/users.js'
import { LoginPage } from '../pages/LoginPage.js'
import { InventoryPage } from '../pages/InventoryPage.js'

let loginPage
let inventoryPage


test.describe('Positive Testes', ()=>{

    test.beforeEach(async ({page})=>{
        loginPage = new  LoginPage(page) 
        inventoryPage = new InventoryPage(page)
        await loginPage.goToLoginPage()

        //Verify that the Login page is loaded by asserting the URL and Page Title
        await expect(page).toHaveURL(urls.loginPageUrl)
        await expect(page).toHaveTitle('Swag Labs')

    })

    test('StandardUser Login' ,async ({page})=>{
        await loginPage.login(credentials.standardUser, credentials.password1)
                    
        //Verify that the Inventory page is loaded by asserting the URL and Title
        await expect(page).toHaveURL(urls.inventoryPageUrl)
        await expect(page.locator(inventoryPage.pageTitle)).toHaveText('Products')
        
    })


    test('problemUser Login' ,async ({page})=>{
        await loginPage.login(credentials.problemUser, credentials.password1)

        //Verify that the Inventory page is loaded by asserting the URL and Title
        await expect(page).toHaveURL(urls.inventoryPageUrl)
        await expect(page.locator(inventoryPage.pageTitle)).toHaveText('Products')

    })

    test('performanceGlitchUser Login' ,async ({page})=>{
        await loginPage.login(credentials.performanceGlitchUser, credentials.password1)

        //Verify that the Inventory page is loaded by asserting the URL and Title
        await expect(page).toHaveURL(urls.inventoryPageUrl)
        await expect(page.locator(inventoryPage.pageTitle)).toHaveText('Products')

    })
     

    test('errorUser Login' ,async ({page})=>{
        await loginPage.login(credentials.errorUser, credentials.password1)

        //Verify that the Inventory page is loaded by asserting the URL and Title
        await expect(page).toHaveURL(urls.inventoryPageUrl)
        await expect(page.locator(inventoryPage.pageTitle)).toHaveText('Products')

    })

    test('visualUser Login' ,async ({page})=>{
        await loginPage.login(credentials.visualUser, credentials.password1)

        //Verify that the Inventory page is loaded by asserting the URL and Title
        await expect(page).toHaveURL(urls.inventoryPageUrl)
        await expect(page.locator(inventoryPage.pageTitle)).toHaveText('Products')
    })
})


test.describe('Negative Testes', ()=>{

    test.beforeEach(async ({page})=>{
        loginPage = new  LoginPage(page) 
        await loginPage.goToLoginPage()

        //Verify that the Login page is loaded by asserting the URL and Page Title
        await expect(page).toHaveURL(urls.loginPageUrl)
        await expect(page).toHaveTitle('Swag Labs')

    })

    test('locked out user Login' ,async ({page})=>{
        await loginPage.login(credentials.lockedOutUser, credentials.password1)
         
        //Verify error message locked_out_user
        await expect(page.locator(loginPage.errorMessage)).toHaveText(messages.lockedUserMessage)

    })

    test('Correct UserName and wrong Password' ,async ({page})=>{
        await loginPage.login(credentials.standardUser, credentials.wrongPassword)

        //Verify error message notMatchUserMessage
        await expect(page.locator(loginPage.errorMessage)).toHaveText(messages.notMatchUserMessage)
    })

    test('Wrong UserName and Correct Password' ,async ({page})=>{
        await loginPage.login(credentials.wrongUserName, credentials.password1)
        
        //Verify error message notMatchUserMessage
        await expect(page.locator(loginPage.errorMessage)).toHaveText(messages.notMatchUserMessage)        
    })

    test('Wrong UserName and Wrong Password' ,async ({page})=>{
        await loginPage.login(credentials.wrongUserName, credentials.wrongPassword)
        
        //Verify error message notMatchUserMessage
        await expect(page.locator(loginPage.errorMessage)).toHaveText(messages.notMatchUserMessage)

    })

    test('Empty UserName and Correct Password' ,async ({page})=>{
        await loginPage.login( "", credentials.password1)
        
        //Verify error message userNameRequiredMessage
        await expect(page.locator(loginPage.errorMessage)).toHaveText(messages.userNameRequiredMessage)

    })

    test('Correct UserName and Empty Password' ,async ({page})=>{
        await loginPage.login(credentials.standardUser, "" )
    
        //Verify error message passwordRequiredMessage
        await expect(page.locator(loginPage.errorMessage)).toHaveText(messages.passwordRequiredMessage)
    })

    test('Empty UserName and Empty Password' ,async ({page})=>{
        await loginPage.login("", "")

        //Verify error message userNameRequiredMessage
        await expect(page.locator(loginPage.errorMessage)).toHaveText(messages.userNameRequiredMessage)
    })
})