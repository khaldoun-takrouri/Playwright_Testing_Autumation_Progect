import {test, expect} from '@playwright/test'
import { PomManager } from '../pages/PomManager'
import {info} from '../data/info.js'



let pm 
let actions


test.describe('Negative Testes', ()=>{

    test.beforeEach(async ({page})=>{
        pm = new PomManager(page)
    })

    test('locked out user Login' ,async ({page})=>{
        await page.goto(info.url)
        await pm.loginPage.login(info.lockedOutUser, info.password1)
        await expect(page.locator(pm.loginPage.errorMessageLocator)).toHaveText(info.lockedUserMessage)
    })


    test('Correct UserName and wrong Password' ,async ({page})=>{
        await page.goto(info.url)
        await pm.loginPage.login(info.standardUser, info.wrongPassword)
        await expect(page.locator(pm.loginPage.errorMessageLocator)).toHaveText(info.notMatchUserMessage)        
    })

    test('Wrong UserName and Correct Password' ,async ({page})=>{
        await page.goto(info.url)
        await pm.loginPage.login(info.wrongUserName, info.password1)
        await expect(page.locator(pm.loginPage.errorMessageLocator)).toHaveText(info.notMatchUserMessage)        

    })

    

    test('Wrong UserName and Wrong Password' ,async ({page})=>{
        await page.goto(info.url)
        await pm.loginPage.login(info.wrongUserName, info.wrongPassword)
        await expect(page.locator(pm.loginPage.errorMessageLocator)).toHaveText(info.notMatchUserMessage)        

    })

    test('Empty UserName and Correct Password' ,async ({page})=>{
        await page.goto(info.url)
        await pm.loginPage.login( "", info.password1)
        await expect(page.locator(pm.loginPage.errorMessageLocator)).toHaveText(info.userNameRequiredMessage)
    })

    test('Correct UserName and Empty Password' ,async ({page})=>{
        await page.goto(info.url)
        await pm.loginPage.login(info.standardUser, "")
        await expect(page.locator(pm.loginPage.errorMessageLocator)).toHaveText(info.passwordRequiredMessage)
    })

    test('Empty UserName and Empty Password' ,async ({page})=>{
        await page.goto(info.url)
        await pm.loginPage.login("", "")
        await expect(page.locator(pm.loginPage.errorMessageLocator)).toHaveText(info.userNameRequiredMessage)
    })
})