const jwt = require('jsonwebtoken')
const con = require('./dbConnect')
const ssid = require('./secrets').ssid

const isLogin = (req, res, next) => {
    const id = req.session.pid
    const accessToken = req.session.ssid

    if(id && accessToken) {
        jwt.verify(accessToken, ssid, (e, r) => {
            if(e) {
                return res.redirect('/login')
            }
            con.query('SELECT * FROM users WHERE email=?', [r.email], (err, re) => {
                if(err || re.length == 0) {
                    return res.redirect('/login')
                }
            })
        })
        return next()
    }
    return res.redirect('/login')
}



const isLogout = (req, res, next) => {
    const id = req.session.pid
    const accessToken = req.session.ssid

    if(!accessToken && !id) {
        return next()
    }

    jwt.verify(accessToken, ssid, (e, r) => {
        if(e) {
            return res.redirect('/login')
        }
        if(r.isAdmin == 1) {
            return res.redirect('/admin/dashboard')
        }
        if(r.isAdmin == 0) {
            return res.redirect('/user/dashboard')
        }
    })
}

const isAdmin = (req, res, next) => {
    const accessToken = req.session.ssid
    jwt.verify(accessToken, ssid, (e, r) => {
        if(e) {
            return res.redirect('/login')
        }
        if(r.isAdmin == 1) {
            return next()
        }
        if(r.isAdmin == 0) {
            const msg = `What are you doing?<br>This page is accessible for Admin only...`
            return res.render('error', { title : 'URL Not Found!', msg })
        }
    })
}

const isUser = (req, res, next) => {
    const accessToken = req.session.ssid
    jwt.verify(accessToken, ssid, (e, r) => {
        if(e) {
            return res.redirect('/login')
        }
        if(r.isAdmin == 0) {
            return next()
        }
        if(r.isAdmin == 1) {
            const msg = `What are you doing?<br>This page is accessible for User only...`
            return res.render('error', { title : 'URL Not Found!', msg })
        }
    })
}


module.exports = {
    isLogin,
    isLogout,
    isAdmin,
    isUser
}