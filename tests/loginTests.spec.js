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
    })  
    
   users.forEach(user => {
        test(`Login Test ${user.username} ` , async ({page})=>{           
            await loginPage.login(user.username, user.password)
        })
    })
})