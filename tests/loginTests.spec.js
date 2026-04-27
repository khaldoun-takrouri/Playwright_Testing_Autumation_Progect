import {test, expect} from '@playwright/test'
import { PomManager } from '../pages/PomManager'
import {CommonActions}  from '../helpers/CommonActions'
import {users} from '../data/users.js'
import {info} from '../data/info.js'

let pm
let actions


test.describe('Login Tests', ()=>{ 
    test.beforeEach(async ({page})=>{
            pm = new PomManager(page)
    })  
    
   users.forEach(user => {
        test(`Login Test ${user.username} ` , async ({page})=>{
           //Login to the Swag Labs site
           await page.goto(info.url)
           await page.fill(pm.loginPage.usernameLocator, user.username)
           await page.fill(pm.loginPage.passwordLocator, user.password)
           await page.click(pm.loginPage.loginLocator)

           //assert inventory page url and title
           await expect(page).toHaveURL(info.inventoryPageUrl)


        })
    });
    

})