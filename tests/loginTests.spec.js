import {test, expect} from '@playwright/test'
import {users, urls} from '../data/users.js'
import { LoginPage } from '../pages/LoginPage.js'
import { InventoryPage } from '../pages/InventoryPage.js'


let loginPage
let inventoryPage

test.describe('Login Tests', ()=>{ 

    test.beforeEach(async ({page})=>{
            loginPage = new  LoginPage(page) 
            inventoryPage = new InventoryPage(page)  
            await loginPage.goToLoginPage()

            //Verify that the Login page is loaded by asserting the URL and Page Title
            await expect(page).toHaveURL(urls.loginPageUrl)
            await expect(page).toHaveTitle('Swag Labs')

    })  
    
   users.forEach(user => {
        test(`Login Test ${user.username} ` , async ({page})=>{           
            await loginPage.login(user.username, user.password)
            
            //Verify that the Inventory page is loaded by asserting the URL and Title
            await expect(page).toHaveURL(urls.inventoryPageUrl)
            await expect(page.locator(inventoryPage.pageTitle)).toHaveText('Products')
        })
    })
})