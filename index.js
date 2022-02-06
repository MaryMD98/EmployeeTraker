// acrodign to instructoronly need the index,js ad db folder
// dist, helpers, lib, middleware, public, routes, src and server.js are extra
const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

const result = []
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
                choices:["View all departments", "View all roles", "View all employees",  
                        "Add a department", "Add a role", "Add an employee",
                        "Update an employee role"]
            }
        ])
        .then((response) =>{
            switch(response.choice){
                case "View all departments":
                    return view_DEPA();
                case "View all roles":
                    return view_ROLE();
                case "View all employees":
                    return view_EMPL();
                case "Add a department":
                    return add_DEPA();
                case "Add a role":
                    return add_ROLE();
                case "Add an employee":
                    return add_EMPL();
                default: // ""Update an employee role"
                    return update_EMPL();
            }
        })
}

mainP();

///**************************************************** */
/// CHOICES from main prompt
///**************************************************** */
// * view all departments, will display departemnts table
function view_DEPA (){
    console.log("I am on view_DEPA");
    mainP();
}
// * view all roles,will display roles table 
function view_ROLE (){
    console.log("I am on view_ROLE");
    mainP();
}
// * view all employees, will display employee table
function view_EMPL (){
    console.log("I am on view_EMPL");
    mainP();
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
            console.log(`${response.newDEPA} This is the new Department`);
            // create a new class with the information from prompt and save to database
            mainP();
        })
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
                type: 'input',
                name: 'depa',
                message: "What department is this role related to?"
            }
        ])
        .then((response) => {
            console.log(`New Role added, ${response.newRole} is part of ${response.depa} and has ${response.newSalary} salary`);
            mainP();
        })
}
// * add an employee, will prompt questions
// Questions: the employee’s first name, last name, role, and manager,
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
                type: 'input',
                name: 'role',
                message: "what is the role of the new Employee?"
            },
            {
                type: 'input',
                name: 'Manager',
                message: "who is the direct Manager of the new Employee?"
            }
        ])
        .then((response) =>{
            console.log(`New associate: ${response.firstNAME} ${response.lastNAME} its role is ${response.role}, and its direct manager is ${response.Manager}`);
            mainP();
        })
}
// * update an employee role, will prompt questions
// Queston: select an employee to update
// and their new role and  updated it in the database
// what is the employee full name to update?
function update_EMPL(){
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'employee',
                message: "What employee would you like to update?"
            },
            {
                type: 'input',
                name: 'newROLE',
                message: "What is the new employee Role?"
            }
        ])
        .then((response) =>{
            console.log(`Updated ${response.employee} role to ${response.newROLE}`);
            mainP();
        })
}
