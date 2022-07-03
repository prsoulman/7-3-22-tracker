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
        updateEmployeeRole();
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
  const queryEmployees = `
  SELECT * FROM employee_tracker.employee;
  `
  db.query(queryEmployees, function (err, res) {
    console.table(res);
    startPrompt();
  });
};

const viewAllRoles = () => {
  console.log("Roles");
  const queryEmployees = `
  SELECT * FROM employee_tracker.role;
  `
  db.query(queryEmployees, function (err, res) {
    console.table(res);
    startPrompt();
  });
};

const viewAllDepartments = () => {
  console.log("Departments");
  const queryEmployees = `
  SELECT * FROM employee_tracker.department;
  `
  db.query(queryEmployees, function (err, res) {
    console.table(res);
    startPrompt();
  });
};




//========add Functions==============

//Add Employee Functions
const addEmployee = () => {
  console.log("add employees");

//TODO refactor this code to a menu that asks the User for corresponding data

    inquirer.prompt([
      {
        type: 'input',
        name: 'role',
        message: 'What is the role ID?',
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
        message: 'What is the manager?',
    },

]) .then(({first, last, manager, role}) => {
    //const employee = new Employee(first, last, manager, role)
    db.query(`USE employee_tracker INSERT INTO employee_tracker.employee (ID, first_name, last_name, manager_id, role_id) VALUES (${role}, ${first}, ${last}, ${manager}, ${role})`), function (err, results) {
      console.table(results);
      viewAllEmployees()
    startPrompt()
    }
}) 
};




startPrompt()

//Testing all the querys

//View all Employees
// db.query("SELECT * FROM employee_tracker.employee;", function (err, results) {
//   console.log(results);
// });

// //View all Roles
// db.query("SELECT * FROM employee_tracker.role;", function (err, results) {
//   console.log(results);
// });

// //View all Departments
// db.query("SELECT * FROM employee_tracker.department;", function (err, results) {
//   console.log(results);
// });





// //Add Employee Written test sql 
// db.query("SELECT * FROM employee_tracker.employee;", function (err, results) {
//   console.log(results);
//   console.table(results);
// });
// //Update Employee (add)
// db.query("SELECT * FROM employee_tracker.employee;", function (err, results) {
//   console.log(results);
//   console.table(results);
// });
// //Add Role test INSERT function
// db.query("SELECT * FROM employee_tracker.employee;", function (err, results) {
//   console.log(results);
//   console.table(results);
// });
// //Add Department test INSERT function
// db.query("SELECT * FROM employee_tracker.employee;", function (err, results) {
//   console.log(results);
//   console.table(results);
// });

// Console.table tests

// call once somewhere in the beginning of the app
// const cTable = require('console.table');
// console.table([
//   {
//     name: 'foo',
//     age: 10
//   }, {
//     name: 'bar',
//     age: 20
//   }
// ]);