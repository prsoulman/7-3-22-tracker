
const inquirer = require('inquirer')
const mysql = require('mysql2')
const cTable = require('console.table')
const ascii = require('ascii-art')
const server = require('./server')

function startPrompt() {
    console.log(`
     
    
     ______________________________________________________   
    |                                                      | 
    |      ______                 _                        | 
    |     |  ____|_   ___   _ __ | | __  _   _  __  __     | 
    |     |   _| | '_'  _ \| _  \| |/ _\| | | |/__\/__\    |
    |     |  |___| | | | | | _)  | | |_|| |_| |   / __/    | 
    |     |______|_| |_| |_| ,__/|_|\__/ \__, |\__|\__|    | 
    |                      |_|            |__/             | 
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
    name: "choice",
    message: "What would you like to do?",
    choices: [
              "View All Employees?", 
              "Add Employee?",
              "Update Employee",
              "View All Roles",
              "Add Role",
              "View all Departments", 
              "Add Department?"
            ]
    }
])
thinkprompt(data)
};

  const thinkprompt = (data) => {
        switch (val.choice) {
            case "View All Employees?":
              viewAllEmployees();
            break;
    
          case "View All Employee's By Roles?":
              viewAllRoles();
            break;
          case "View all Employees By Deparments?":
              viewAllDepartments();
            break;
          
          case "Add Employee?":
                addEmployee();
              break;

          case "Update Employee":
                updateEmployee();
              break;
      
            case "Add Role?":
                addRole();
              break;
      
            case "Add Department?":
                addDepartment();
              break;
    
            }
console.log(data)
   }

   function viewAllEmployees() {
    db.query("SELECT * FROM employee_tracker.employee;", 
    function(err, res) {
      if (err) throw err
      console.table(res)
      startPrompt()
  })
  }
  function viewAllEmployees() {
  db.query("SELECT * FROM employee_tracker.employee;", function (err, results) {
    console.log(results);
  });
};
function viewAllEmployees() {
  db.query(
    'SELECT * FROM employee_tracker.employee;',
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );
};
module.exports=startPrompt()