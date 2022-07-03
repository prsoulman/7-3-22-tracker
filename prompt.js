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
        addEmployee();
      } else if (choice === "Update Employee") {
        updateEmployee();
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

//TODO refactor this code to a menu that asks the User for corresponding data

    inquirer.prompt([{
        type: 'input',
        name: 'id',
        message: 'What is the employees ID?',
    }, 
    {
        type: 'input',
        name: 'first',
        message: 'What is the employees first name?',
    },
    {
        type: 'input',
        name: 'last',
        message: 'What is the employees last name?',
    },
    {
        type: 'input',
        name: 'manager',
        message: 'What is the manager ID?',
    },
    {
        type: 'input',
        name: 'role',
        message: 'What is the role ID?',
    },
]) .then(({id, first, last, manager, role}) => {
    const employee = new Employee(id, first, last, manager, role)

    db.query("UPDATE employee_tracker.employee (id,
       first_name, last_name, manager_id, role_id) VALUES (${id}, first, last, manager, role);", function (err, results) {
      console.log(results);


     

    mainMenu()
})

} 



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
const updateEmployee = () => {
  console.log("update employee");
  inquirer
  .prompt({
    type: "list",
    name: "choice",
    message: "What would you like Update?",
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



};












module.exports = startPrompt();
