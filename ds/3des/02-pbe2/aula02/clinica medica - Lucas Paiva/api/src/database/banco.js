const mysql = require('mysql');

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'clinica'
})

module.exports = con;