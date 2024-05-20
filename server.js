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

inquirer.prompt([
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
}
