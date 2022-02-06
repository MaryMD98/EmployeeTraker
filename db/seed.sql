INSERT INTO department (dep_id, dep_name)
VALUES  (1, "Human Resources"),
        (2, "Finance"),
        (3, "Front Office"),
        (4, "Sales");

INSERT INTO role (dep_id, role_title, role_salary)
VALUES  (1, "HR Manager", 100000),
        (1, "HR Assistance", 80000),
        (2, "Accounting Director", 180000),
        (2, "Accountant", 120000),
        (2, "Cashier", 80000),
        (3, "Front Office Manager", 140000),
        (3, "Front Desk Assistant", 120000),
        (3, "Front Desk Agent", 90000),
        (3, "Valet Parking", 70000),
        (4, "Sales Manager", 160000),
        (4, "Sales Manager Assistant", 140000),
        (4, "Sales Coordinator", 100000),
        (4, "Purchase Supervisor", 100000);

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
