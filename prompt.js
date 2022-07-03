const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");
const ascii = require("ascii-art");
const server = require("./server");

const startPrompt = () => {
  // console.log(`

  //    ______________________________________________________
  //   |                                                      |
  //   |      ______                 _                        |
  //   |     |  ____|_   ___   _ __ | | __  _   _  __  __     |
  //   |     |   _| | '_'  _ \| _  \| |/ _\| | | |/__\/__\    |
  //   |     |  |___| | | | | | _)  | | |_|| |_| |   / __/    |
  //   |     |______|_| |_| |_| ,__/|_|\__/ \__, |\__|\__|    |
  //   |                      |_|            |__/             |
  //   |      __  __                                          |
  //   |     |  \/  | __ _ _ __   __ _  __ _  ___ _ __        |
  //   |     | |\/| |/ _' | '_ \ / _' |/ _' |/ _ \ '__|       |
  //   |     | |  | | ( | | | | | (_| | (_| |  __/| |         |
  //   |     |_|  |_|\__,_|_| | |\__,_|\__, |\____|_|         |
  //   |                               |___/                  |
  //   |                                                      |
  //   |______________________________________________________|

  //   `)
  inquirer
    .prompt({
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        "View All Employees?",
        "Add Employee?",
        "Update Employee",
        "View All Roles",
        "Add Role",
        "View all Departments",
        "Add Department?",
      ],
    })
    // the function is called startPrompt()
    .then(({ choice }) => {
      console.log({ choice });
      if (choice === "View All Employees?") {
        viewAllEmployees();
      } else if (choice === "Add Employee?") {
        viewAllRoles();
      } else if (choice === "Update Employee") {
        addEmployee();
      } else if (choice === "View All Roles") {
        viewAllRoles();
      } else if (choice === "Add Role") {
        addRole();
      } else if (choice === "View all Departments") {
        viewAllDepartments();
      } else if (choice === "Add Department?") {
        addDepartment();
      } else {
        console.log("Done");
      }
    });
};

const viewAllEmployees = () => {
  console.log("employees");
  db.query("SELECT * FROM employee_tracker.employee;", function (err, results) {
    console.log(results);
  });
  // Connection.execute("SELECT * FROM employee_tracker.employee;", function (err, res) {
  //   if (err) throw err;
  //   console.table(res);
  // }
};

const viewAllRoles = () => {
  console.log("roles");
};

const addEmployee = () => {
  console.log("add employees");
};

const addRole = () => {
  console.log("add role");
};

const viewAllDepartments = () => {
  console.log("view department");
};

const addDepartment = () => {
  console.log("add department");
};

module.exports = startPrompt();
