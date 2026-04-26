import dotenv from 'dotenv'
import {test, expect} from '@playwright/test'
import { PomManager } from '../pages/PomManager'
import {CommonActions}  from '../helpers/CommonActions'

let pm 
let actions

dotenv.config({path: './data/.env'})

test.describe('Positive Testes', ()=>{

    test.beforeEach(async ({page})=>{
        pm = new PomManager(page)
        actions = new CommonActions(page)
    })

    test('StandardUser Login' ,async ({page})=>{
        await pm.loginPage.login(process.env.url, process.env.standardUser, process.env.password1)
        await actions.assertPageUrl(process.env.inventoryPageUrl)
        await actions.assertPageTitle(process.env.pageTitle)
    })


    test('problemUser Login' ,async ({page})=>{
        await pm.loginPage.login(process.env.url, process.env.problemUser, process.env.password1)
        await actions.assertPageUrl(process.env.inventoryPageUrl)
        await actions.assertPageTitle(process.env.pageTitle)
    })

    test('performanceGlitchUser Login' ,async ({page})=>{
        await pm.loginPage.login(process.env.url, process.env.performanceGlitchUser, process.env.password1)
        await actions.assertPageUrl(process.env.inventoryPageUrl)
        await actions.assertPageTitle(process.env.pageTitle)
    })

     

    test('errorUser Login' ,async ({page})=>{
        await pm.loginPage.login(process.env.url, process.env.errorUser, process.env.password1)
        await actions.assertPageUrl(process.env.inventoryPageUrl)
        await actions.assertPageTitle(process.env.pageTitle)
    })

    test('visualUser Login' ,async ({page})=>{
        await pm.loginPage.login(process.env.url, process.env.visualUser, process.env.password1)
        await actions.assertPageUrl(process.env.inventoryPageUrl)
        await actions.assertPageTitle(process.env.pageTitle)
    })
})