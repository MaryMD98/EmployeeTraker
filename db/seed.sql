INSERT INTO department (dep_id, dep_name)
VALUES  (1, "Human Resources"),
        (2, "Finance"),
        (3, "Front Desk"),
        (4, "Housekeeping");

INSERT INTO role (dep_id, role_title, role_salary)
VALUES  (1, "Human Resources Manager", 100000),
        (1, "Human Resources Assistance", 80000),
        (2, "Accounting Director", 180000),
        (2, "Accounting Supervisr")

INSERT INTO employee (role_id, first_name, last_name, manager_id)
