INSERT INTO department (dep_name)
VALUES  ("Human Resources"),
        ("Finance"),
        ("Front Office"),
        ("Sales");

INSERT INTO role (dep_id, role_title, role_salary)
VALUES  (1, "HR Manager", 70000.00),
        (1, "HR Assistance", 60000.00),
        (2, "Accounting Director", 100000.00),
        (2, "Accountant", 80000.00),
        (2, "Cashier", 40000.00),
        (3, "Front Office Manager", 65000.00),
        (3, "Front Desk Assistant", 58000.00),
        (3, "Front Desk Agent", 42000.00),
        (3, "Valet Parking", 37000.00),
        (4, "Sales Manager", 90000.00),
        (4, "Sales Manager Assistant", 68000.00),
        (4, "Sales Coordinator", 54000.00),
        (4, "Purchase Supervisor", 36000.00);

INSERT INTO employee (role_id, first_name, last_name, manager_id)
VALUES  (1, "Cinthya", "Salinas", null),
        (2, "Kenia", "Ramirez", 1),
        (3, "Megan", "White", null),
        (4, "Travis", "Combest", 3),
        (4, "Dori", "Vargas", 3),
        (5, "Jessie", "Rodriquez",3),
        (6, "Nick", "Allen", null),
        (7, "Ben", "Carter", 7),
        (8, "Moe", "Issam", 7),
        (8, "Bonney", "Calderon", 7),
        (8, "Sheldy", "Lee", 7),
        (9, "Erik", "Brito", 7),
        (10, "Hannah", "Dale", null),
        (11, "Angela", "Hung", 13),
        (12, "Yisenia", "Vasquez", 13),
        (12, "Victor", "Sanchez", 13),
        (13, "Jeremy", "Cardenas", 13);
