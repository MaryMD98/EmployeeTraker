-----------------------------------------------------
-- Querys to display custom tables on department, employee and role
-- department( id , dep_name );
-- role(id, dep_id , role_title ,  role_salary );
-- employee(id , role_id, first_name, last_name,  manager_id );
-----------------------------------------------------

-- view all departments function will display all departments
SELECT department.id AS department_ID, department.dep_name AS department_Name 
FROM department
ORDER BY department.id;

-- view all roles function will display all job titles
SELECT  role.id AS Role_ID,
        role.role_title AS Job_Title,  
        department.dep_name AS Department, 
        role.role_salary AS Salary
FROM role
JOIN department 
ON role.dep_id = department.id
ORDER BY role.id;

-- view all employees function will display all employee data
SELECT  associate.id AS ID,
        associate.first_name AS First_Name,
        associate.last_name AS Last_Name,
        role.role_title AS Job_Title,
        department.dep_name AS Department,
        role.role_salary AS Salary,
        CONCAT(manager.first_name, " ", manager.last_name) AS Manager
FROM employee associate
LEFT JOIN employee manager ON associate.manager_id = manager.id
LEFT JOIN role ON associate.role_id = role.id
LEFT JOIN department ON role.dep_id = department.id
ORDER BY associate.id;

-- Update the employee roles
UPDATE employee SET role_id = 13  WHERE id = 17;

-- list of all departments
SELECT * FROM department;

-- list of all roles
SELECT role.id, role.role_title
FROM role;

-- list of managers 
SELECT	employee.id,
		CONCAT(employee.first_name, " ", employee.last_name) AS manager
FROM employee
WHERE employee.manager_id IS NULL;

-- List of associates
SELECT	employee.id,
		CONCAT(employee.first_name, " ", employee.last_name) AS Employees
FROM employee;

-- update employe manager
UPDATE employee SET manager_id = 13  WHERE id = 17;

-- view employees by manager ********
SELECT  CONCAT(manager.first_name, " ", manager.last_name) AS Manager,
        CONCAT(associate.first_name, " ", associate.last_name) AS Employee_Name,
        role.role_title AS Job_Title,
        department.dep_name AS Department,
        role.role_salary AS Salary,
        associate.id AS ID
FROM employee associate
LEFT JOIN employee manager ON associate.manager_id = manager.id
LEFT JOIN role ON associate.role_id = role.id
LEFT JOIN department ON role.dep_id = department.id
WHERE associate.manager_id = ?;

-- view employees by department *********
SELECT  department.dep_name AS Department,
        CONCAT(associate.first_name, " ", associate.last_name) AS Employee_Name,
        role.role_title AS Job_Title,
        role.role_salary AS Salary,
        associate.id AS ID
FROM employee associate
LEFT JOIN employee manager ON associate.manager_id = manager.id
LEFT JOIN role ON associate.role_id = role.id
LEFT JOIN department ON role.dep_id = department.id
WHERE department.id = ?; 

-- delete departments, roles, employees
-- to delete a role
DELETE FROM role WHERE role.id = ?;
-- to delete a department
DELETE FROM department WHERE department.id = ?;
-- to delete a employee
DELETE FROM employee WHERE employee.id = ?;

-- view the total utilized budget of a department 
SELECT  department.dep_name AS Department,
        SUM(role.role_salary) Department_Budget 
FROM employee 
LEFT JOIN role ON employee.role_id = role.id
LEFT JOIN department ON role.dep_id = department.id
WHERE department.id = ?;

-- display all budgets
SELECT  department.dep_name AS Department,
            SUM(role.role_salary) Department_Budget 
FROM employee 
LEFT JOIN role ON employee.role_id = role.id
LEFT JOIN department ON role.dep_id = department.id
GROUP BY department.dep_name;


-----------------------------------------------------
-- FOR REFERECE -- ** Testing different ways to display tables **
-----------------------------------------------------
-- selft Join of employee data
SELECT  associate.id, 
        associate.first_name,
        associate.last_name,
        CONCAT(manager.first_name, " ", manager.last_name) AS manager
FROM employee associate
LEFT JOIN employee manager
ON associate.manager_id = manager.id;

-- tests to see two comulns of data in different ways
SELECT department.dep_name AS department, role.role_title
FROM role
LEFT JOIN department
ON role.dep_id = department.id
ORDER BY department.dep_name;

SELECT role.role_title AS JobTitle, department.dep_name AS DepartmentName
From department
LEFT JOIN role
ON role.dep_id = department.id
ORDER BY role.role_title;

SELECT *
FROM role
JOIN department 
ON role.dep_id = department.id
ORDER BY role.role_title;
