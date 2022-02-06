DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

--  department (dep_name)
CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dep_name VARCHAR(30) NOT NULL
);

--  role (dep_id, role_title, role_salary)
CREATE TABLE role(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dep_id INT,
    role_title VARCHAR(30) NOT NULL,
    role_salary DECIMAL(8,2),
);
--   employee (role_id, first_name, last_name, manager_id)


-- role

-- id: INT PRIMARY KEY

-- title: VARCHAR(30) to hold role title

-- salary: DECIMAL to hold role salary

-- department_id: INT to hold reference to department role belongs to

-- employee

-- id: INT PRIMARY KEY

-- first_name: VARCHAR(30) to hold employee first name

-- last_name: VARCHAR(30) to hold employee last name

-- role_id: INT to hold reference to employee role

-- manager_id: INT to hold reference to another employee that is the manager of the current employee (null if the employee has no manager