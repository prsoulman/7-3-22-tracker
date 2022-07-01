//Packages

const inquirer = require('inquirer')
const mysql = require('mysql2')
const conTable = require('console.table')

const serverConnection = mysql.createConnection({
    host: "localhost",
    port: 3001,
    user: "root",
    password: "password123",
    database: "employee_tracker"
  });
  connection.connect(function(err) {
    if (err) throw err
    console.log("Connected as Id" + connection.threadId)
    startPrompt();
});




