import dotenv from 'dotenv'
import {test, expect} from '@playwright/test'
import { PomManager } from '../pages/PomManager'
import {CommonActions}  from '../helpers/CommonActions'

let pm 
let actions

dotenv.config({path: './data/.env'})

test.describe('Negative Testes', ()=>{

    test.beforeEach(async ({page})=>{
        pm = new PomManager(page)
        actions = new CommonActions(page)
    })

    test('locked out user Login' ,async ({page})=>{
        await pm.loginPage.login(process.env.url, process.env.lockedOutUser, process.env.password1)
        await actions.assertPageUrl(process.env.loginPageUrl)
        await actions.assertErrorMessageText(pm.loginPage.errorMessageLocator, process.env.lockedUserMessage )
    })


    test('Correct UserName and wrong Password' ,async ({page})=>{
        await pm.loginPage.login(process.env.url, process.env.standardUser, process.env.notMatchUserMessage)
        await actions.assertPageUrl(process.env.loginPageUrl)
        await actions.assertErrorMessageText(pm.loginPage.errorMessageLocator, process.env.notMatchUserMessage )

    })

    test('Wrong UserName and Correct Password' ,async ({page})=>{
        await pm.loginPage.login(process.env.url, process.env.wrongUserName, process.env.password1)
        await actions.assertPageUrl(process.env.loginPageUrl)
        await actions.assertErrorMessageText(pm.loginPage.errorMessageLocator, process.env.notMatchUserMessage )

    })

     

    test('Wrong UserName and Wrong Password' ,async ({page})=>{
        await pm.loginPage.login(process.env.url, process.env.wrongUserName, process.env.wrongPassword)
        await actions.assertPageUrl(process.env.loginPageUrl)
        await actions.assertErrorMessageText(pm.loginPage.errorMessageLocator, process.env.notMatchUserMessage )

    })

    test('Empty UserName and Correct Password' ,async ({page})=>{
        await pm.loginPage.login(process.env.url, "", process.env.password1)
        await actions.assertPageUrl(process.env.loginPageUrl)
        await actions.assertErrorMessageText(pm.loginPage.errorMessageLocator, process.env.userNameRequierdMessage )

    })

    test('Correct UserName and Empty Password' ,async ({page})=>{
        await pm.loginPage.login(process.env.url, process.env.standardUser, "")
        await actions.assertPageUrl(process.env.loginPageUrl)
        await actions.assertErrorMessageText(pm.loginPage.errorMessageLocator, process.env.passwordRequierdMessage )

    })

    test('Empty UserName and Empty Password' ,async ({page})=>{
        await pm.loginPage.login(process.env.url, "", "")
        await actions.assertPageUrl(process.env.loginPageUrl)
        await actions.assertErrorMessageText(pm.loginPage.errorMessageLocator, process.env.userNameRequierdMessage )

    })
})