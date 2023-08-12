const express = require('express')
const route = express.Router()
 
const userController = require('../controller/userController')

// Dashboard
route.get('/dashboard', userController.loadDashboard)
route.get('/passbook-generator', (req, res) => {
    return res.redirect('/user/dashboard')
})
route.post('/passbook-generator', userController.generatePassbook)

// Print Preview
route.get('/print-preview', (req, res) => {
    return res.render('user/print-preview', {title: 'Print Preview'})
})
route.get('/print-page-redirect', userController.printPageRedirect)
route.get('/print-page', userController.printPage)

// Help
route.get('/help', userController.loadHelp)
route.post('/help', userController.help)

// Profile 
route.get('/profile', userController.profile)

// Token History
route.get('/token-history', userController.tokenHistory)
route.post('/token-history', userController.searchToken)

// Change Password
route.post('/change-password', userController.changePassword)




const pdf = require('html-pdf')
const ejs = require('ejs')
const fs = require('fs')
const path = require('path')

const genPDF = () => {
    const htmlString = fs.readFileSync(path.join(__dirname, '../views/user/pass-pdf.ejs')).toString()
    const rednderedData = ejs.render(htmlString)
    
    pdf.create(rednderedData).toFile('passas.pdf', (e, res) => {
        if(e) {
            console.log("error : ", e)
        }
        console.log('Generated...')
    })

}

const excelJS = require('exceljs')

const readExcel = () => {
    var workbook = new excelJS.Workbook();

    workbook.xlsx.readFile(path.join(__dirname, '../views/user/pass.xlsx'))
    .then(function() {
        var worksheet = workbook.getWorksheet('Sheet1');
        
        console.log(worksheet.getCell('D11').value)
        console.log(worksheet.getCell('B17').value)
    })

}

// readExcel()





module.exports = route