const express = require('express')
const route = express.Router()
const limiter = require('../auth/limiter')
const con = require('../auth/dbConnect')

const commonController = require('../controller/commonController')
const { isLogin, isLogout } = require('../auth/auth')

// Load Home
route.get('/', commonController.loadHome)

//Login 
route.get('/login', isLogout, commonController.loadLogin)
route.post('/login', commonController.login)

// User Registration 
route.get('/register', isLogout, commonController.loadRegister)
route.post('/register', commonController.userRegistration)

//Forget Password 
route.get('/forget-password', commonController.loadForgetPassword)
route.post('/forget-password', commonController.forgetPassword)
route.get('/reset-password', isLogout, commonController.verifyResetPassword)
route.post('/reset-password', commonController.resetPassword)


// Request Verification Email
route.get('/request-verification-email', limiter, commonController.loadRequestVerificationEmail)
route.post('/request-verification-email', commonController.requestVerificationEmail)
route.get('/verify-email', commonController.verifyEmail)






//temp
route.get('/show-users', (req, res) => {
    con.query("SELECT * from users", (errors, result) => {
      // if(errors) return res.redirect('/error')
      if (errors) console.log("Show users (Query) : ", errors);
  
      return res.json({ result });
    });
})

route.get('/cookie', (req, res) => {
    res.json(req.session)
})

route.get('/auth', (req, res) => {
    con.query('SELECT * FROM auth', (e, r) => {
        if(e) {
            return console.log("error in auth : ", e);
        }
        return res.json(r)
    })
})
route.get('/token-history', (req, res) => {
    con.query('SELECT * FROM `token-history`', (e, r) => {
        if(e) {
            return console.log("error in auth : ", e);
        }
        return res.json(r)
    })
})
route.get('/user-token', (req, res) => {
    con.query('SELECT * FROM usertoken', (e, r) => {
        if(e) {
            return console.log("error in auth : ", e);
        }
        return res.json(r)
    })
})
route.get('/tempprint', (req, res) => {
    con.query('SELECT * FROM tempprint', (e, r) => {
        if(e) {
            return console.log("error in auth : ", e);
        }
        return res.json(r)
    })
})

module.exports = route;