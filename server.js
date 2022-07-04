//Packages

const inquirer = require('inquirer')
const mysql = require('mysql2')
const conTable = require('console.table')
const express = require('express')

const PORT = process.env.PORT || 3001;
const app = express();

//Arrays
const roleArray = []


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

const addRole = async() => {
  console.log("add role");
  //*Add Role
  const [departments] = await db.promise().query("SELECT * FROM department");
  const departmentArray = departments.map(({id, name}) => ({name:name, value:id}))
  console.log(departments)
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
      {
				name: 'newRoleDepartment',
				type: 'list',
				message: 'What is the department for the new role?',
        choices: departmentArray
			},
		])
		.then(function (answer) {
			//*Need to add role name and then find length of role array to add ID #
			let newRoleName = answer.newRole;
			let newRoleSalary = answer.newRoleSalary;
			let newDepartmentId = answer.newRoleDepartment;

			//* Take information and build new role constructor
			// console.log(`
			// -------------------------------------------------------------------------------------------------
			// Adding New Role | Role Title: ${newRoleName} | Role Salary ${newRoleSalary} | Role ID ${newRoleID} to Database!
			// -------------------------------------------------------------------------------------------------
			// `);
			let addNewRole = {title:newRoleName, salary:newRoleSalary, department_id:newDepartmentId};
			db.promise().query('INSERT INTO role SET ?', addNewRole).then(res => {
        viewAllRoles()
      })
			// startPrompt();
      console.log(answer)
		});
  
}








function RoleWithID() {
	const query = `
    SELECT id, title 
    FROM role;`;

	connection.query(query, function (err, res) {
		if (err) throw err;
		for (let i = 0; i < res.length; i++) {
			roleAndIDArray.push(res[i]);
		}
	});
}



function addDepartment() {
  inquirer.prompt( {
    type: "input",
    name: "department",
    message: "What is the name of the new department?"
  }).then(answer => {
    let department = {name:answer.department};
    db.promise().query(`INSERT INTO department SET ?`, department)
    .then(res => {
    viewAllDepartments()
    })
  })
}








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