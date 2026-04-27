import {test, expect} from '@playwright/test'
import { PomManager } from '../pages/PomManager'
import {info} from '../data/info.js'


let pm 
let actions


test.describe('Positive Testes', ()=>{

    test.beforeEach(async ({page})=>{
        pm = new PomManager(page)
    })

    test('StandardUser Login' ,async ({page})=>{
        await page.goto(info.url)
        await pm.loginPage.login(info.standardUser, info.password1)
        
        await expect(page).toHaveURL(info.inventoryPageUrl)
        await expect(page).toHaveTitle(info.pageTitle)

    })


    test('problemUser Login' ,async ({page})=>{
        await page.goto(info.url)
        await pm.loginPage.login(info.problemUser, info.password1)
        
        await expect(page).toHaveURL(info.inventoryPageUrl)
        await expect(page).toHaveTitle(info.pageTitle)
    })

    test('performanceGlitchUser Login' ,async ({page})=>{
        await page.goto(info.url)
        await pm.loginPage.login(info.performanceGlitchUser, info.password1)
        
        await expect(page).toHaveURL(info.inventoryPageUrl)
        await expect(page).toHaveTitle(info.pageTitle)
    })

     

    test('errorUser Login' ,async ({page})=>{
        await page.goto(info.url)
        await pm.loginPage.login(info.errorUser, info.password1)
        
        await expect(page).toHaveURL(info.inventoryPageUrl)
        await expect(page).toHaveTitle(info.pageTitle)
    })

    test('visualUser Login' ,async ({page})=>{
        await page.goto(info.url)
        await pm.loginPage.login(info.visualUser, info.password1)
        
        await expect(page).toHaveURL(info.inventoryPageUrl)
        await expect(page).toHaveTitle(info.pageTitle)
    })
})