const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");
const ascii = require("ascii-art");
const server = require("./server");
const cTable = require("console.tabl")

//console.table Example
// console.table([
//   {
//     name: 'foo',
//     age: 10
//   }, {
//     name: 'bar',
//     age: 20
//   }
// ]);




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

  // Connection.execute("SELECT * FROM employee_tracker.employee;", function (err, res) {
  //   if (err) throw err;
  //   console.table(res);
  // }
  //console.table Example all Employees
// console.table([
//   {
//     name: 'foo',
//     age: 10
//   }, {
//     name: 'bar',
//     age: 20
//   }
// ]);
};

const viewAllRoles = () => {
  console.log("roles")
  const queryRoles = `
  SELECT * FROM role
  `;

connection.query(queryRoles, function (err, res) {
  if (err) throw err;
  console.table(res);

  startPrompt();
});
}


const addEmployee = () => {
  console.log("add employees");

//TODO refactor this code to a menu that asks the User for corresponding data

    inquirer.prompt([
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
]) .then(({first, last, manager, role}) => {
    const employee = new Employee(first, last, manager, role)
    db.query(`"INSERT INTO employee_tracker (first_name, last_name, manager_id, role_id) VALUES (${first}, ${last}, ${manager}, ${role})"`), function (err, results) {
      console.table(results);
    mainMenu()
    }
}) 
};

const addRole = () => {
  console.log("add role");
  //*Add Role
	inquirer
		.prompt([
			{
				name: 'newRole',
				type: 'input',
				message: 'What Is The Title Of The New Role You Want To Add?',
			},
			{
				name: 'newRoleSalary',
				type: 'number',
				message: 'What Is The Salary Of This New Role?',
			},
		])
		.then(function (answer) {
			//*Need to add role name and then find length of role array to add ID #
			let newRoleName = answer.newRole;
			let newRoleSalary = answer.newRoleSalary;
			let newRoleID = roleArray.length + 1;

			//* Take information and build new role constructor
			console.log(`
			-------------------------------------------------------------------------------------------------
			Adding New Role | Role Title: ${newRoleName} | Role Salary ${newRoleSalary} | Role ID ${newRoleID} to Database!
			-------------------------------------------------------------------------------------------------
			`);
			let addNewRole = new role(newRoleName, newRoleSalary, newRoleID);
			connection.query('INSERT INTO role SET ?', addNewRole, function (err, res) {
				if (err) throw err;
			});
			startPrompt();
		});
  
}

const viewAllDepartments = () => {
  console.log("view department")  
  const queryDepartments = `
  SELECT * FROM employee_tracker.departments;
  `
  db.query(queryDepartments, function (err, res) {
    console.table(res);
    startPrompt();
  });
};


const addDepartment = () => {
  console.log("add department");
};
const updateEmployeeRole = () => {
  console.log("update employee");

  //need two prompts one to find the employee select than find what they would like to update.
  // inquirer
  // .prompt({
  //   type: "list",
  //   name: "choice",
  //   message: "What would you like Update?",
  //   choices: [
  //     "View All Employees?",
  //     "Add Employee?",
  //     "Update Employee",
  //     "View All Roles",
  //     "Add Role",
  //     "View all Departments",
  //     "Add Department?",
  //   ],
  // })

  // `"UPDATE employee_tracker.employee (first_name, last_name, manager_id, role_id) VALUES (${first}, ${last}, ${manager}, ${role};"
// 















//module.exports = startPrompt()
