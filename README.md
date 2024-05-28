# Employee-Tracker

## Description

Employee Tracker is a command-line application designed to manage a company's employee database using Node.js, Inquirer, and PostgresSQL. This application allows business owners to view and manage the departments, roles, and employees in their company to better orginize and plan their business operations.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Database Schema](database-schema)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/BrendaHaight/e-commerce.git
```

2. Navigate to the project to your local machine:

```bash
cd employee-tracker
```

3. Install the necessary dependencies:

```bash
npm install
```

4. Set up the PostgresSQL database:

- Ensure PostgresSQL is installed and running on your machine.
- Create a database named `employee_tracker`.
- Run the `schema.sql` file to create the necessary tables:

```bash
psql -U postgres -d employee_tracker -f schema.sql
```

```bash
psql -U postgres -d employee_tracker -f seeds.sql
```

## Usage

1. Start the application by running the following command:

```bash
node index.js
```

2. Follow the prompts to view and manage the departments,roles, and employees in the database:

## Database Schema

- `departments`

  - `id`: `SERIAL PRIMARY KEY`
  - `name`: `VARCHAR(30) NOT NULL`

- `roles`
  - `id`: `SERIAL PRIMARY KEY`
  - `title`: `VARCHAR(60) NOT NULL`
  - `Salary`: `DECIMAL NOT NULL`
  - `department_id`: `INTEGER`, foreign key references `roles(id)`
  - `manager_id`: `INTEGER`, foreingn key references `employees(id)`

[Demonstration](https://drive.google.com/file/d/1att0-qMtFFkUjL6bAukn0zUFoMkPny_P/view)

## Features

- View all departments
- View all roles
- View all employees
- Add a department
- Add a role
- Add an employee
- Update an employee tole

## Technologies Used

- Node.js
- Inquirer
- PostgresSQL

## License

This project licensed under the MIT License

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Questions

If you have any questions, please feel free to reach out:

- Github: BrendaHaight
- Email: brendahaightt@gmail.com
