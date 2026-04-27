import {test, expect} from '@playwright/test'
import { PomManager } from '../pages/PomManager'
import {info} from '../data/info.js'


let pm
let actions

test.describe('Sanity Test Suite', ()=>{
    
    test.beforeEach(async ({page})=>{
           pm = new PomManager(page)
    })  

    test('Sanity Test - Purchase Flow', async ({page})=>{
           //Login to the Swag Labs site
           await page.goto(info.url)
           await pm.loginPage.login(info.standardUser, info.password1)
           
           //assert inventory page url and title
           await expect(page).toHaveURL(info.inventoryPageUrl)
           await expect(page).toHaveTitle(info.pageTitle)
           

           //add 2 items to shopping cart
           await pm.inventoryPage.addTwoItems()
           
           //assert 2 items added to Shopping Cart 
           await expect(page.locator(pm.inventoryPage.cartLocator)).toHaveText('2')
           //page.locator('.shopping_cart_badge').innerText()
    
           //Click on the cart to Move to Cart Page
           await pm.inventoryPage.navigateToCartPage()
           
           //assert Cart Page url and Title and Your Cart value 
           await expect(page).toHaveURL(info.cartPageUrl)    
           await expect(page.locator(pm.cartPage.cartLocator)).toHaveText('2')
           await expect( page.locator(pm.cartPage.pageTitleLocator)).toHaveText('Your Cart')
           
          
           //Click on the Checkout Button to Move to Checkout Step One Page
           await pm.cartPage.navigateToCheckoutStepOnePage()
           
           //assert "Checkout Step One page"  url and title
           await expect(page).toHaveURL(info.checkoutStepOnePageUrl)
           await expect(page.locator(pm.checkoutStepOnePage.pageTitleLocator)).toHaveText('Checkout: Your Information')
           
           //Fill information first name and last name and postal Code
           await page.fill(pm.checkoutStepOnePage.firstNameLocator, info.firstName)
           await page.fill(pm.checkoutStepOnePage.lastNameLocator, info.lastName)
           await page.fill(pm.checkoutStepOnePage.postalCodeLocator, info.postalCode)
          
           
           //Click on the Continue Button to Move to Checkout Step two Page
           await pm.checkoutStepOnePage.navigateToCheckoutStepTwoPage()
          
           //assert "Checkout Step Two Page" url and title
           await expect(page).toHaveURL(info.checkoutStepTwoPageUrl)
           await expect(page.locator(pm.checkoutStepTwoPage.pageTitleLocator)).toHaveText('Checkout: Overview')
          
           //navigate to Checkout Complete Page
           await pm.checkoutStepTwoPage.navigateToCheckoutComlete()
          
           //assert "Checkout Complete Page" url and title and Thank you message
           await expect(page).toHaveURL(info.checkoutCompletePageUrl)
           await expect( page.locator(pm.checkoutCompletePage.pageTitleLocator)).toHaveText('Checkout: Complete!')
           await expect( page.locator(pm.checkoutCompletePage.thankYouMessageLocator)).toHaveText('Thank you for your order!')

    })
})