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
-- Managers
('Austin', 'Powers', 1, 'HR Manager', 1, 60000, NULL), -- HR Manager
('Jane', 'Smith', 2, 'Marketing Coordinator', 2, 70000, NULL), -- Marketing Coordinator
('Michael', 'Johnson', 7, 'Senior Software Engineer', 5, 95000, NULL), -- Senior Software Engineer
('William', 'Brown', 4, 'Executive', 6, 90000, NULL), -- Executive (No manager)
-- Employees with managers
('Cindy', 'White', 6, 'Software Engineer', 5, 75000, 1), -- Managed by HR Manager
('Emily', 'Davis', 3, 'Customer Service Representative', 4, 45000, 1), -- Managed by HR Manager
('John', 'Doe', 5, 'Sales Representative', 3, 45000, 2), -- Managed by Marketing Coordinator
('Lisa', 'Simpson', 6, 'Software Engineer', 5, 75000, 7), -- Managed by Senior Software Engineer
('Naruto', 'Uzumaki', 3, 'Customer Service Representative', 4, 45000, 7), -- Managed by Senior Software Engineer
('Itachi', 'Uchiha', 2, 'Marketing Coordinator', 2, 70000, 2), -- Managed by Marketing Coordinator
('Sasuke', 'Uchiha', 5, 'Sales Representative', 3, 45000, 7), -- Managed by Senior Software Engineer
('Hinata', 'Hyuga', 7, 'Senior Software Engineer', 5, 95000, 1); -- Managed by HR Manager