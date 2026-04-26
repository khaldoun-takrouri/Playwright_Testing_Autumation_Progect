import dotenv from 'dotenv'
import {test, expect} from '@playwright/test'
import { PomManager } from '../pages/PomManager'
import {CommonActions}  from '../helpers/CommonActions'
import * as XLSX from 'xlsx'
import path from 'path'

dotenv.config({path: './data/.env'})
let pm
let actions

//This test getting users data from users_data.xlsx file and convert it to json object
const usersExcelDataFile = path.join(__dirname, '../data/users_data.xlsx')
const workbook = XLSX.readFile(usersExcelDataFile)
const worksheet = workbook.Sheets["Sheet1"]
const users = XLSX.utils.sheet_to_json(worksheet)


test.describe('Login Tests',  ()=>{ 
    test.beforeEach(async ({page})=>{
            pm = new PomManager(page)
            actions = new CommonActions(page)
    })  
    
    users.forEach(user => {
        test(`Login Test ${user.username} ` , async ()=>{
           //Login to the Swag Labs site
           await pm.loginPage.login(process.env.url, process.env.standardUser, process.env.password1)

           //assert inventory page url and title
           await actions.assertPageUrl(process.env.inventoryPageUrl)
           await actions.assertPageTitle(process.env.pageTitle)

        })
    });
    

})