const cTable = require('console.table');
const db = require('./connection.js');

// Function will return a list of departments for the user to chose from
const list_dep = async () => {
    const sql = `SELECT * FROM department;`;
    const sql_QR = await db.promise().query(sql);
    
    let result = sql_QR[0].map(({dep_name, id}) => ({
        name: `${dep_name}`,
        value: id
    }));
    
    return result;
}

// Function will return a list of the roles available
const list_role = async () => {
    const sql = `SELECT role.id, role.role_title
    FROM role;`;
    const sql_QR = await db.promise().query(sql);
    console.log(sql_QR[0]);
    let result = sql_QR[0].map(({id, role_title}) => ({
        name: `${role_title}`,
        value: id
    }));
    console.log(result);
    return result;
}

// function will return a list of managers
const list_manager = async () => {
    const sql = `SELECT	employee.id,
        CONCAT(employee.first_name, " ", employee.last_name) AS manager
    FROM employee
    WHERE employee.manager_id IS NULL;`;
    const sql_QR = await db.promise().query(sql);
    console.log(sql_QR[0]);
    let result = sql_QR[0].map(({id, manager}) => ({
        name: `${manager}`,
        value: id
    }));
    console.log(result);
    return result;
} 

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


module.exports = {list_dep, list_role, list_manager};