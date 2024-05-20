const inquirer = require("inquirer");
const express = require("express");
const { Pool } = require("pg");

const app = express();
const PORT = process.env.PORT || 3001;

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "password",
  database: "employee_tracker",
});

const mainMenu = async () => {
  const { action } = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
        "Exit",
      ],
    },
  ]);

  switch (action) {
    case "View all departments":
      viewAllDepartments();
      break;
    case "View all roles":
      viewAllRoles();
      break;
    case "View all employees":
      viewAllEmployees();
      break;
    case "Add a department":
      addDepartment();
      break;
    case "Add a role":
      addRole();
      break;
    case "Add an employee":
      addEmployee();
      break;
    case "Update an employee role":
      updateEmployeeRole();
      break;
    case "Exit":
      await pool.end();
      console.log("Goodbye!");
      return;
  }
  mainMenu();
};

const viewAllDepartments = async () => {
  const res = await pool.query("SELECT * FROM departments");
  console.table(res.rows);
};

const viewAllRoles = async () => {
  const res = await pool.query("SELECT * FROM roles");
  console.table(res.rows);
};

const viewAllEmployees = async () => {
  const res = await pool.query("SELECT * FROM employees");
  console.table(res.rows);
};

const addDepartment = async () => {
  const { name } = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter a name of the department:",
    },
  ]);

  await pool.query("INSERT INTO departments (name) VALUE ($1)", [name]);
  console.log(`Added department: ${name}`);
};

const addRole = async () => {
  const departments = await pool.query("SELECT * FROM departments");
  const departmentChoices = departments.rows.map((dept) => ({
    name: dept.name,
    value: dept.id,
  }));

  const { title, salary, department } = await inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Enter the title of the role:",
    },
    {
      type: "input",
      name: "salary",
      message: " Enter the salary for the role:",
    },
    {
      type: "input",
      name: "department",
      message: "Select the department for the role",
      choices: departmentChoices,
    },
  ]);

  await pool.query(
    `INSERT INTO ROLES (title, salary, department) VALUES ($1, $2, $3) `[
      (title, salary, department)
    ]
  );
  console.log(`Added role: ${title}`);
};

const addEmployee = async () => {
  const roles = await pool.query("SELECT * FROM roles");
  const roleChoices = roles.rows.map((role) => ({
    name: `${emp.first_name} ${emp.last_name}`,
    value: emp.id,
  }));
  managerChoices.push({ name: "None", value: null });

  const { firstName, lastName, role, manager } = await inquirer.prompt([
    {
      type: "input",
      name: "firstName",
      message: "Enter the first name of the employee:",
    },
    {
      type: "input",
      name: "lastName",
      message: " Enter the last name of the employee:",
    },
    {
      type: "input",
      name: "role",
      message: "Select the role for the employee",
      choices: roleChoices,
    },
    {
      type: "list",
      name: "manager",
      message: "Select the manager for the employee",
      choices: managerChoices,
    },
  ]);

  await pool.query(
    "INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3,$4) "[
      (firstName, lastName, role, manager)
    ]
  );
  console.log(`Added employee: ${firstNmae} ${lastName}`);
};
