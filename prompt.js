const inquirer = require("inquirer")
const mysql = require("mysql2")
const cTable = require("console.table");

function startPrompt() {
    console.log(`
     ______________________________________________________
    |                                                      |
    |     _______                   _                      |
    |     |  ____|  _   ___   _ __ | | __  _   _  __  __   |
    |     |   _| | | '_'  _ \| _  \| |/ _\| | | |/__\/__\  |
    |     |  |___| | | | | | | _)  | | |_|| |_| |   / __/  |
    |     |______|_|_| |_| |_| ,__/|_|\__/ \__, |\__|\__|  |
    |                        |_|            |__/           |
    |      __  __                                          |
    |     |  \/  | __ _ _ __   __ _  __ _  ___ _ __        |
    |     | |\/| |/ _' | '_ \ / _' |/ _' |/ _ \ '__|       |
    |     | |  | | ( | | | | | (_| | (_| |  __/| |         |
    |     |_|  |_|\__,_|_| | |\__,_|\__, |\____|_|         |
    |                               |___/                  |
    |                                                      |
    |______________________________________________________| 

    `);
    inquirer.prompt([
    {
    type: "list",
    message: "What would you like to do?",
    name: "choice",
    choices: [
              "View All Employees?", 
              "View All Employee's By Roles?",
              "View all Emplyees By Deparments", 
              "Update Employee",
              "Add Employee?",
              "Add Role?",
              "Add Department?"
            ]
    }
])
};

startPrompt()
// ]).then(function(val) {
//         switch (val.choice) {
//             case "View All Employees?":
//               viewAllEmployees();
//             break;
    
//           case "View All Employee's By Roles?":
//               viewAllRoles();
//             break;
//           case "View all Emplyees By Deparments":
//               viewAllDepartments();
//             break;
          
//           case "Add Employee?":
//                 addEmployee();
//               break;

//           case "Update Employee":
//                 updateEmployee();
//               break;
      
//             case "Add Role?":
//                 addRole();
//               break;
      
//             case "Add Department?":
//                 addDepartment();
//               break;
    
//             }
//    })