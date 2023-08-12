const express = require('express')
const ejsLayout = require('express-ejs-layouts')
const session = require('express-session')
const auth = require('./auth/auth')
const app = express()
const secret = require('./auth/secrets')


// Connect to DB
const con = require('./auth/dbConnect')
con.connect((e) => !e ? console.log("dbConnected...") : console.log("Error in dbConnect..."));

/* 
    * Setting of View Engine and Layouts
*/
app.use(ejsLayout)
app.set('view engine', 'ejs')
app.set('layout', 'main')
app.use('/static', express.static('static'))
app.use('/static/vendor', express.static('static/vendor'))


/* 
    * Use session
*/

// if (app.get('env') === 'production') {
//     app.set('trust proxy', 1)
//     session.cookie.secure = true
// }


app.use(session({ 
    secret: secret.ssid,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 86400 * 1000,
        secure : false
    }
}));

// For Server 
app.set('trust proxy', 1)


/* 
    * MiddleWares
*/
app.use(express.json())
app.use(express.urlencoded({ extended : true }))


/* 
    * Importing Routers
*/

// Common
app.use(require('./route/commonRoute'))
// User
app.get('/user', (req, res) => {
    return res.redirect('/user/dashboard')
})
app.use('/user', auth.isLogin, auth.isUser, require('./route/userRoute'))
// Admin
app.get('/admin', (req, res) => {
    return res.redirect('/admin/dashboard')
})
app.use('/admin', auth.isLogin, auth.isAdmin, require('./route/adminRoute'))


// Logout
app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if(!err) {
            return res.redirect('/')
        } else {}
    })
})


//Error Page
app.get('*', (req, res) => {
    const msg = `Uh oh! Sorry,<br>Requested URL or Page not Found!`
    return res.render('error', { title : 'URL Not Found!', msg })
})

app.listen(secret.port, () => console.log('Server running...'))
