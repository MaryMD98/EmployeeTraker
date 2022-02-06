// acrodign to instructoronly need the index,js ad db folder
// dist, helpers, lib, middleware, public, routes, src and server.js are extra
const inquirer = require('inquirer');

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
                case "Add a department":
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
            // if(response.choice === ""){}
        })
}

mainP();

///**************************************************** */
/// CHOICES from main prompt
///**************************************************** */
// * view all departments, will display departemnts table
function view_DEPA (){}
// * view all roles,will display roles table 
function view_ROLE (){}
// * view all employees, will display employee table
function view_EMPL (){}
// * add a department, will prompt questions
// question: the name of the department and add to the database 
function add_DEPA (){}
// * add a role, will prompt questions 
// Question: the name, salary,
//  and department for the role and add to the database
function add_ROLE (){}
// * add an employee, will prompt questions
// Questions: the employee’s first name, last name,
//  role, and manager,  add to the database 
function add_EMPL (){}
// * update an employee role, will prompt questions
// Queston: select an employee to update
// and their new role and  updated it in the database
function update_EMPL(){}
