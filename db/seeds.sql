INSERT INTO departments (name) VALUES
('Human Resources'),
('Marketing'),
('Sales'),
('Customer Service'),
('Engineering'),
('Executive');

INSERT INTO roles (title, salary, department) VALUES
('HR Manager', 60000, 1),
('Marketing Coordinator',70000, 2 ),
('Customer Service Representative',45000, 4),
('Executive', 90000, 6),
('Sale Representative', 45000, 3),
('Software Engineer', 75000, 5),
('Senior Software Engineer', 95000, 6);

INSERT INTO employees (first_name, last_name, role_id, title, department, salary, manager_id) VALUES
('Austin', 'Powers', 1 ,'HR Manager', 3, 60000, 7 ),
('Jane', 'Smith', 2,'Marketing Coordinator', 2, 70000, 5 ),
('John', 'Doe', 3,'Sale Representative',3, 45000, NULL),
('Cindy', 'White', 1,'Software Engineer',5, 75000, 1),
('Michael', 'Johnson', 5,'Senior Software Engineer', 5, 95000, NULL),
('Emily', 'Davis', 4,'Customer Service Representative', 4, 45000, NULL),
('William', 'Brown', 5,'Executive',6, 90000, NULL);