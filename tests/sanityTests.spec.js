import {test, expect} from '@playwright/test'
import { credentials, messages, urls } from '../data/users.js'
import { LoginPage } from '../pages/LoginPage.js'
import { InventoryPage } from '../pages/InventoryPage.js'
import { CartPage } from '../pages/CartPage.js'
import { CheckoutStepOnePage } from '../pages/CheckoutStepOnePage.js'
import { CheckoutStepTwoPage } from '../pages/CheckoutStepTwoPage.js'
import { CheckoutCompletePage } from '../pages/CheckoutCompletePage.js'


let loginPage 
let inventoryPage
let cartPage
let checkoutStepOnePage
let checkoutStepTwoPage
let checkoutCompletePage

test.describe('Sanity Test Suite', ()=>{

    test.beforeEach(async ({page})=>{
           loginPage = new  LoginPage(page) 
           inventoryPage = new InventoryPage(page)  
           cartPage = new CartPage(page)
           checkoutStepOnePage = new CheckoutStepOnePage(page)
           checkoutStepTwoPage = new CheckoutStepTwoPage(page)
           checkoutCompletePage = new CheckoutCompletePage(page)
           
           await loginPage.goToLoginPage()
           await loginPage.login(credentials.standardUser, credentials.password1 ,page)

    })  

    test('Sanity Test - Purchase Flow', async ({page})=>{

           await inventoryPage.addTwoItems()
           await inventoryPage.goToCartPage()
           await cartPage.goToCheckoutStepOnePage()
           await checkoutStepOnePage.fillInformation()          
           await checkoutStepOnePage.goToCheckoutStepTwoPage()
           await checkoutStepTwoPage.navigateToCheckoutComlete()
          

    })
})