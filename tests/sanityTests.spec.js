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
        
           //Loading the Login Page
           await loginPage.goToLoginPage()

           // Verify that the Login page is loaded by asserting the URL and Page Title
           await expect(page).toHaveURL(urls.loginPageUrl)
           await expect(page).toHaveTitle('Swag Labs')
           
           await loginPage.login(credentials.standardUser, credentials.password1)
       
           //Verify that the Inventory page is loaded by asserting the URL and Title
           await expect(page).toHaveURL(urls.inventoryPageUrl)
           await expect(page.locator(inventoryPage.pageTitle)).toHaveText('Products')
    })  

    test('Sanity Test - Purchase Flow', async ({page})=>{

           await inventoryPage.addTwoItems()
           //Verify that two items adeded to the shopping cart
           await expect(page.locator(cartPage.cartBadge)).toHaveText('2')
           
           await inventoryPage.goToCartPage()
           //Verify that the Cart page is loaded by asserting the URL and Title and Verify Cart Bagde has 2 value
           await expect(page).toHaveURL(urls.cartPageUrl)    
           await expect(page.locator(cartPage.cartBadge)).toHaveText('2')
           await expect(page.locator(cartPage.pageTitle)).toHaveText('Your Cart')

           await cartPage.goToCheckoutStepOnePage()
           //Verify that the CheckoutStepOnePage page is loaded by asserting the URL and Title
           await expect(page).toHaveURL(urls.checkoutStepOnePageUrl) 
           await expect(page.locator(checkoutStepOnePage.pageTitle)).toHaveText('Checkout: Your Information')
   
           await checkoutStepOnePage.fillInformation()  

           await checkoutStepOnePage.goToCheckoutStepTwoPage()
           //Verify that the CheckoutStepTwoPage page is loaded by asserting the URL and Title
           await expect(page).toHaveURL(urls.checkoutStepTwoPageUrl)
           await expect(page.locator(checkoutStepTwoPage.pageTitle)).toHaveText('Checkout: Overview')

           await checkoutStepTwoPage.goToCheckoutComplete()
           //Verify that the CheckoutCompletePage page is loaded by asserting the URL and Title and thank you thankYouMessage
           await expect(page).toHaveURL(urls.checkoutCompletePageUrl)
           await expect(page.locator(checkoutCompletePage.pageTitle)).toHaveText('Checkout: Complete!')
           await expect(page.locator(checkoutCompletePage.thankYouMessage)).toHaveText('Thank you for your order!')    
    })
})