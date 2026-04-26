import dotenv from 'dotenv'
import {test, expect} from '@playwright/test'
import { PomManager } from '../pages/PomManager'
import {CommonActions}  from '../helpers/CommonActions'

let pm
let actions
let shoppingCartValue
dotenv.config({path: './data/.env'})

test.describe('Sanity Test Suite', ()=>{
    
    test.beforeEach(async ({page})=>{
           pm = new PomManager(page)
           actions = new CommonActions(page)
    })  

    test('Sanity Test', async ({page})=>{
           //Login to the Swag Labs site
           await pm.loginPage.login(process.env.url, process.env.standardUser, process.env.password1)

           
           //assert inventory page url and title
           await actions.assertPageUrl(process.env.inventoryPageUrl)
           await actions.assertPageTitle(process.env.pageTitle)
          
           //add 2 items to shopping cart
           await pm.inventoryPage.addItems()
           
           //assert 2 items added to Shopping Cart 
           await actions.assertTextValue(pm.inventoryPage.shoppingCartSelector , '2' )
           
           //Click on the cart to Move to Cart Page
           await pm.inventoryPage.navigateToShoppingCartPage()
          
           //assert Cart Page url and Your Cart title
           await actions.assertPageUrl(process.env.cartPageUrl)
           await actions.assertTextValue(pm.checkoutStepOnePage.pageTitleSelector, 'Your Cart')
          
           //assert 2 items in the shopping cart 
           await actions.assertTextValue(pm.cartPage.shoppingCartSelector , '2' )
          
           //Click on the Checkout Button to Move to Checkout Step One Page
           await pm.cartPage.navigateToCheckoutStepOnePage()
          
           //assert "Checkout Step One page"  url and title
           await actions.assertPageUrl(process.env.chechoutStepOnePageUrl)
           await actions.assertTextValue(pm.checkoutStepOnePage.pageTitleSelector , 'Checkout: Your Information')
           
           // Fill information first name and last name and postal Code
           await pm.checkoutStepOnePage.fillInformation(process.env.firstName,process.env.lastName,process.env.postalCode)
           //Click on the Continue Button to Move to Checkout Step two Page
           await pm.checkoutStepOnePage.navigateToCheckoutStepTwoPage()
          
           //assert "Checkout Step Two Page" url and title
           await actions.assertPageUrl(process.env.chechoutStepTwoPageUrl)
           await actions.assertTextValue(pm.checkoutStepTwoPage.pageTitleSelector , 'Checkout: Overview')
          
           //navigate to Checkout Complete Page
           await pm.checkoutStepTwoPage.navigateToCheckoutComlete()
          
           //assert "Checkout Complete Page" url and title and Thank you message
           await actions.assertPageUrl(process.env.checkoutCompletePageUrl)
           await actions.assertTextValue
           await actions.assertTextValue(pm.checkoutCompletePage.pageTitleSelector , 'Checkout: Complete!')
           await actions.assertTextValue(pm.checkoutCompletePage.thankYouMessageSelector, 'Thank you for your order!')
    })
})