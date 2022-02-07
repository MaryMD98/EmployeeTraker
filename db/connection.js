const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
// add .env file to hide password
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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