// Import and require mysql2
const mysql = require('mysql2');
// add .env file to hide password
require('dotenv').config();

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: process.user.DB_USER,
        pasword: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    console.log(`Connected to the company_db`)
);

module.exports = db;