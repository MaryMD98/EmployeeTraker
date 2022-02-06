-----------------------------------------------------
-- department( id , dep_name );
-- role(id, dep_id , role_title ,  role_salary );
-- employee(id , role_id, first_name, last_name,  manager_id );
-----------------------------------------------------

-- view all departments function will display all departments
SELECT department.dep_name AS department_Name, department.id AS department_ID
FROM department
ORDER BY department.dep_name;

-- view all roles function will display all job titles
SELECT  role.role_title AS job_Title, 
        role.id AS role_ID, 
        department.dep_name AS department, 
        role.role_salary AS salary
FROM role
JOIN department 
ON role.dep_id = department.id
ORDER BY role.role_title;

-- view all employees function will display all employee data


-- selft Join of employee data
SELECT  associate.id, 
        associate.first_name,
        associate.last_name,
        manager.first_name AS manager_first, manager.last_name AS manager_Last
FROM employee associate
JOIN employee manager
ON associate.manager_id = manager.id;

-----------------------------------------------------
-- FOR REFERECE -- ** Testing different ways to display tables **
-----------------------------------------------------

-- testing the all employees function

SELECT  employee.id AS ID, 
        employee.first_name AS First_Name, 
        employee.last_name AS Last_Name, 
        role.role_title AS job_Title, 
        role.dep_id AS department, 
        role.role_salary AS salary, 
        employee.manager_id AS manager 
FROM employee
INNER JOIN role ON employee.role_id = role.id
INNER JOIN employee ON employee.manager_id = employee.id
INNER JOIN department ON role.dep_id = department.id
JOIN role
ON employee.role_id = role.id
ON employee.manager_id = employee.id
ORDER BY employee.id;


SELECT *
FROM department
INNER JOIN role ON role.dep_id = department.id 
INNER JOIN employee ON employee.role_id = role.id
-- INNER JOIN employee ON employee.manager_id = employee.id
ORDER BY employee.id;

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