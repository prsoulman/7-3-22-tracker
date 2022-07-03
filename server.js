//Packages

const inquirer = require('inquirer')
const mysql = require('mysql2')
const conTable = require('console.table')
const express = require('express')

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'password123',
    database: 'employee_tracker'
  },
  console.log(`Connected to the employee_tracker`)
);

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//Testing all the querys

//View all Employees
db.query("SELECT * FROM employee_tracker.employee;", function (err, results) {
  console.log(results);
});

//View all Roles
db.query("SELECT * FROM employee_tracker.role;", function (err, results) {
  console.log(results);
});

//View all Departments
db.query("SELECT * FROM employee_tracker.department;", function (err, results) {
  console.log(results);
});





//Add Employee Written test sql 
db.query("SELECT * FROM employee_tracker.employee;", function (err, results) {
  console.log(results);
  console.table(results);
});
//Update Employee (add)
db.query("SELECT * FROM employee_tracker.employee;", function (err, results) {
  console.log(results);
  console.table(results);
});
//Add Role test INSERT function
db.query("SELECT * FROM employee_tracker.employee;", function (err, results) {
  console.log(results);
  console.table(results);
});
//Add Department test INSERT function
db.query("SELECT * FROM employee_tracker.employee;", function (err, results) {
  console.log(results);
  console.table(results);
});

