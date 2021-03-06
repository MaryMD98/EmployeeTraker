const inquirer = require('inquirer');
const db = require('./db/connection.js');
const {list_dep, list_role, list_manager, list_employee, budget_dep} = require('./db/index.js');

///**************************************************** */
/// main prompt to ask user what they would like to do.
/// CHOICES: view all departments, view all roles, view all employees,  
/// add a department, add a role, add an employee, and update an employee role
/// *** will be called at the end of every funtion
///**************************************************** */
function mainP(){
    inquirer    
        .prompt([
            {
                type: 'list',
                name: 'choice',
                message: "What would you like to do?",
                choices:["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", 
                        "Update employe manager", "View employees by manager", "View employees by department", "Delete departments, roles, and employees", "View total utilized budget of a department" ]
            }
        ])
        .then((response) =>{
            switch(response.choice){
                case "View all departments": view_DEPA(); break;
                case "View all roles": view_ROLE(); break;
                case "View all employees": view_EMPL(); break;
                case "Add a department": add_DEPA(); break;
                case "Add a role": add_ROLE(); break;
                case "Add an employee": add_EMPL(); break;
                case "Update an employee role": update_EMPL(); break;
                case "Update employe manager": update_MANA(); break;
                case "View employees by manager": viewBY_MANA(); break;
                case "View employees by department": viewBY_DEPA(); break;
                case "Delete departments, roles, and employees": delete_COMP(); break;
                default: budget(); break;
            }
        })
}

mainP();

///**************************************************** */
/// CHOICES from main prompt
///**************************************************** */
// * view all departments, will display departemnts table
function view_DEPA (){
    const sql = `SELECT department.id AS Department_ID, department.dep_name AS Department_Name 
    FROM department ORDER BY department.id;`;
    db.query(sql, (err, row) => {
        if (err) { console.log(err); } 
        else { console.log(`\n`); console.table(row); mainP(); }
    })
} 
// * view all roles,will display roles table 
function view_ROLE (){
    const sql = `SELECT  role.id AS Role_ID, role.role_title AS Job_Title, department.dep_name AS Department, role.role_salary AS Salary
    FROM role JOIN department ON role.dep_id = department.id ORDER BY role.id;`;
    db.query(sql, (err, row) => {
        if (err) { console.log(err); } 
        else { console.log(`\n`); console.table(row); mainP(); }
    })
}
// * view all employees, will display employee table
function view_EMPL (){
    const sql = `SELECT  associate.id AS ID, associate.first_name AS First_Name, associate.last_name AS Last_Name, role.role_title AS Job_Title, 
        department.dep_name AS Department, role.role_salary AS Salary, CONCAT(manager.first_name, " ", manager.last_name) AS Manager
    FROM employee associate  LEFT JOIN employee manager ON associate.manager_id = manager.id
    LEFT JOIN role ON associate.role_id = role.id  LEFT JOIN department ON role.dep_id = department.id
    ORDER BY associate.id;`;
    db.query(sql, (err, row) => {
        if (err) { console.log(err); } 
        else { console.log(`\n`); console.table(row); mainP(); }
    })
}
// * add a department, will prompt questions
// question: the name of the department and add to the database 
function add_DEPA (){
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'newDEPA',
                message: "What is the Name of the new Department?"
            }
        ])
        .then((response) => {
            const sql = `INSERT INTO department (dep_name) VALUES (?)`;    
            db.query(sql, response.newDEPA, (err, result) => {
                if (err) { console.log(err); } 
                else { mainP(); }
            }); })
}
// * add a role, will prompt questions 
// Question: the name, salary, and department for the role
// add to the database
function add_ROLE (){
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'newRole',
                message: "What is the Name of the new Role?"
            },
            {
                type:'input',
                name: 'newSalary',
                message: "What is the new Salary for this role?"
            },
            {
                type: 'list',
                name: 'depa',
                message: "What department is this role related to?",
                choices: async function list() {return list_dep();}
            }
        ])
        .then((response) => {
            const sql = `INSERT INTO role (dep_id, role_title, role_salary) VALUES (?,?,?);`;
            const params = [response.depa, response.newRole, response.newSalary];
            db.query(sql, params, (err, result) => {
                if (err) { console.log(err); } 
                else { mainP(); }
            }); })
}
// * add an employee, will prompt questions
// Questions: the employee???s first name, last name, role, and manager,
// add to the database , the role  must be a list from data base
function add_EMPL (){
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'firstNAME',
                message: "What is the First Name?"
            },
            {
                type: 'input',
                name: 'lastNAME',
                message: "What is the Last Name?"
            },
            {
                type: 'list',
                name: 'role',
                message: "what is the role of the new Employee?",
                choices: async function list() { return list_role();}
            },
            {
                type: 'list',
                name: 'Manager',
                message: "who is the direct Manager of the new Employee?",
                choices: async function list() { return list_manager();}
            }
        ])
        .then((response) =>{
            const sql = `INSERT INTO employee (role_id, first_name, last_name, manager_id) VALUES (?,?,?,?);`;
            const params = [response.role, response.firstNAME, response.lastNAME, response.Manager];
            db.query(sql, params, (err, result) => {
                if (err) { console.log(err); } 
                else { mainP(); }
            }); })
}
// * update an employee role, will prompt questions
// Queston: select an employee to update
// and their new role and  updated it in the database
// what is the employee full name to update?
function update_EMPL(){
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'employee',
                message: "What employee would you like to update?",
                choices: async function list() { return list_employee();}
            },
            {
                type: 'list',
                name: 'newROLE',
                message: "What is the new employee Role?",
                choices: async function list() { return list_role();}
            }
        ])
        .then((response) =>{
            const sql = `UPDATE employee SET role_id = ? WHERE id = ?;`;
            const params = [response.newROLE, response.employee]
            db.query(sql, params, (err, result) => {
                if (err) { console.log(err); }
                else { mainP(); }
            }); })
}
// -- update employe manager
function update_MANA(){
    inquirer
        .prompt([
            {
                type: "list",
                name: "employee",
                message: "What employee would you like to update?",
                choices: async function list() { return list_employee();}
            },
            {
                type: "list",
                name: "newMANA",
                message: "What is the new employee Manager?",
                choices: async function list() { return list_manager();}
            }
        ])
        .then((response) => {
            const sql = `UPDATE employee SET manager_id = ? WHERE id = ?;`;
            const params = [response.newMANA, response.employee]
            db.query(sql, params, (err, result) => {
                if (err){ console.log(err); }
                else { mainP(); }
            }); })
}
// -- view employees by manager
// chose a manager to display the employees related to this manager
function viewBY_MANA(){
    inquirer
        .prompt([
            {
                type: "list",
                name: "manager",
                message: "Choose a manager to display employees related to that manager",
                choices: async function list() { return list_manager();}
            }
        ])
        .then((response) => {
            const sql = `SELECT  CONCAT(manager.first_name, " ", manager.last_name) AS Manager,
                CONCAT(associate.first_name, " ", associate.last_name) AS Employee_Name,
                role.role_title AS Job_Title, department.dep_name AS Department, role.role_salary AS Salary, associate.id AS ID
            FROM employee associate  LEFT JOIN employee manager ON associate.manager_id = manager.id
            LEFT JOIN role ON associate.role_id = role.id  LEFT JOIN department ON role.dep_id = department.id
            WHERE associate.manager_id = ?;`;
            db.query(sql, response.manager, (err, row) => {
                if (err){ console.log(err); }
                else { console.log(`\n`); console.table(row); mainP(); }
            }); })
}
// -- view employees by department
// chose a department and display employees on department
function viewBY_DEPA(){
    inquirer
        .prompt([
            {
                type: "list",
                name: "depa",
                message: "Choose a department to display employees on that department.",
                choices: async function list() {return list_dep();}
            }
        ])
        .then((response) => {
            const sql = `SELECT  department.dep_name AS Department, CONCAT(associate.first_name, " ", associate.last_name) AS Employee_Name, 
                role.role_title AS Job_Title, role.role_salary AS Salary, associate.id AS ID
            FROM employee associate LEFT JOIN employee manager ON associate.manager_id = manager.id
            LEFT JOIN role ON associate.role_id = role.id  LEFT JOIN department ON role.dep_id = department.id
            WHERE department.id = ?;`;
            db.query(sql, response.depa, (err, row) => {
                if(err){ console.log(err); }
                else { console.log(`\n`); console.table(row); mainP(); }
            }); })
}
// -- delete departments, roles, employees
function delete_COMP(){
    inquirer
        .prompt([
            {
                type: "list",
                name: "delete",
                message: "What would you like to delete",
                choices: ["Department", "Role", "Employee"]
            }
        ])
        .then((response) => {
            if (response.delete === "Department") {delete_DEPA();}
            if (response.delete === "Role") {delete_ROLE();}
            if (response.delete === "Employee") {delete_EMP();}
        })
}
// -- to delete a department 
function delete_DEPA(){
    inquirer
        .prompt([
            {
                type: "list",
                name: "del_depa",
                message: "what Department would you like to delete?",
                choices: async function list() {return list_dep();}
            }
        ])
        .then((response) => {
            const sql = `DELETE FROM department WHERE department.id = ?;`;
            db.query(sql, response.del_depa, (err, result) => {
                if(err){ console.log(err); } else { mainP(); }
            }); })
}
// -- to delete a role // 
function delete_ROLE(){
    inquirer
        .prompt([
            {
                type: "list",
                name: "del_role",
                message: "what Role would you like to delete?",
                choices: async function list() { return list_role();}
            }
        ])
        .then((response) => {
            const sql = `DELETE FROM role WHERE role.id = ?;`;
            db.query(sql, response.del_role, (err, result) => {
                if(err){ console.log(err); } else { mainP(); }
            }); })
}
// -- to delete a employee;
function delete_EMP(){
    inquirer
        .prompt([
            {
                type: "list",
                name: "del_emp",
                message: "what Employee would you like to delete?",
                choices: async function list() { return list_employee();}
            }
        ])
        .then((response) => {
            const sql = `DELETE FROM employee WHERE employee.id = ?;`;
            db.query(sql, response.del_emp, (err, result) => {
                if(err){ console.log(err); } else { mainP(); }
            }); })
}
// -- view the total utilized budget of a department 
function budget(){
    inquirer
        .prompt([
            {
                type: "list",
                name: "budget",
                message: "what Department would you like to see the budged?",
                choices: async function list() { return budget_dep();}
            }
        ])
        .then((response) => {
            // display all the budgets
            if(response.budget === null){
                sql = `SELECT  department.dep_name AS Department, SUM(role.role_salary) Department_Budget 
                    FROM employee LEFT JOIN role ON employee.role_id = role.id
                    LEFT JOIN department ON role.dep_id = department.id  GROUP BY department.dep_name;`;
                db.query(sql, (err, row) => {
                    if (err) { console.log(err); } 
                    else { console.log(`\n`); console.table(row); mainP(); }
                });} 
            // display by department id
            else {
                sql = `SELECT  department.dep_name AS Department, SUM(role.role_salary) Department_Budget 
                    FROM employee LEFT JOIN role ON employee.role_id = role.id
                    LEFT JOIN department ON role.dep_id = department.id WHERE department.id = ?;`;
                db.query(sql, response.budget, (err, row) => {
                    if(err){ console.log(err); }
                    else { console.log(`\n`); console.table(row); mainP(); }
                }); }
         })
}