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
    FOREIGN KEY (dep_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);

--   employee (role_id, first_name, last_name, manager_id)
CREATE TABLE employee(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    role_id INT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    manager_id INT,
    FOREIGN KEY (role_id)
    REFERENCES role(id)
    FOREIGN KEY (manager_id)
    REFERENCES employee(id)
    ON DELETE SET NULL
);
