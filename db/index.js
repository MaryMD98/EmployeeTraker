
// const cTable = require('console.table');
// const { callbackify } = require('util');
const db = require('./connection.js');



// Display information of the departments
// function view_depa (){
const company_deparo = async () => {
 
    const sql = `SELECT department.dep_name AS Department_Name, department.id AS Department_ID
    FROM department
    ORDER BY department.dep_name;`; 

    const result = await db.promise().query(sql);
    console.log(`\n`);
    console.table(result[0]);
}

const company_depar = () => {
    const sqlQuery = `SELECT department.dep_name AS Department_Name, department.id AS Department_ID
    FROM department
    ORDER BY department.dep_name;`;
    db.query(sqlQuery, (err, row) => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.table(row);
        }
    })
};


module.exports = {company_deparo};