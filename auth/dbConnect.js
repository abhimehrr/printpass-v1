const mysql = require('mysql')
const secret = require('./secrets')

// Server

// module.exports = mysql.createConnection({
//     host: 'localhost',
//     user: secret.db.user,
//     password: secret.db.password,
//     database: secret.db.database
// })


// Local Host 

module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'printpass'
})