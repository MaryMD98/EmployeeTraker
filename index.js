// acrodign to instructoronly need the index,js ad db folder
// dist, helpers, lib, middleware, public, routes, src and server.js are extra

///**************************************************** */
/// main prompt to ask user what they would like to do.
/// CHOICES: view all departments, view all roles, view all employees,  
/// add a department, add a role, add an employee, and update an employee role
/// *** will be called at the end of every funtion
///**************************************************** */
function mainP(){}

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
