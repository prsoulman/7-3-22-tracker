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

  //*Add Department
function func12() {
	inquirer
		.prompt([
			{
				name: 'newDept',
				type: 'input',
				message: 'What Is The Name Of This New Department?',
			},
		])
		.then(function (answer) {
			//*Need to add role name and then find length of role array to add ID #
			let newdeptName = answer.newDept;
			let newDeptID = deptArray.length + 1;

			//* Take information and build new role constructor
			console.log(
				chalk.greenBright(`
			
			-------------------------------------------------------------------------------------------------
			Adding New Department | Department Name: ${newdeptName} | Department ID ${newDeptID} to Database!
			-------------------------------------------------------------------------------------------------
			
			`)
			);
			let addNewDept = new department(newdeptName, newDeptID);
			connection.query('INSERT INTO department SET ?', addNewDept, function (err, res) {
				if (err) throw err;
			});
			reRun();
		});
}

};
const updateEmployeeRole = () => {
  console.log("update employee");

  inquirer
  .prompt([
    {
      name: 'first_name',
      type: 'list',
      message: 'What Is The First Name Of The Employee That You Want to Update Their Role?',
      choices: employeeFirstNameArray,
    },
  ])
  .then(function (answer) {
    const query = `
    SELECT last_name 
      FROM employee
       WHERE first_name = ?`;

    connection.query(query, [answer.first_name], function (err, res) {
      let firstNameRoleUpdate = answer.first_name;
      inquirer
        .prompt([
          {
            name: 'last_name',
            type: 'list',
            message: 'What Is The Last Name Of The Employee That You Want to Update Their Role?',
            choices: function () {
              let lastNameArray = [];
              for (let i = 0; i < res.length; i++) {
                lastNameArray.push(res[i].last_name);
              }
              return lastNameArray;
            },
          },
        ])
        .then(function (answer) {
          let lastNameRoleUpdate = answer.last_name;
          const query = `
          SELECT id 
            FROM employee
             WHERE first_name = ? AND last_name = ?`;

          connection.query(query, [firstNameRoleUpdate, lastNameRoleUpdate], function (err, res) {
            inquirer
              .prompt([
                {
                  name: 'id',
                  type: 'list',
                  message: 'What Is The Employee ID Number Of The Employee That You Want to Update Their Role?',
                  choices: function () {
                    let employeeIDarray = [];
                    for (let m = 0; m < res.length; m++) {
                      employeeIDarray.push(res[m].id);
                    }
                    return employeeIDarray;
                  },
                },
              ])
              .then(function (answer) {
                let employeeIDRoleUpdate = answer.id;
                inquirer
                  .prompt([
                    {
                      name: 'role_title',
                      type: 'list',
                      message: 'What Is The New Role You Want To Update For This Employee?',
                      choices: roleArray,
                    },
                  ])
                  .then(function (answer) {
                    let newTitleRoleUpdate = answer.role_title;

                    function FindNewRoleID() {
                      for (let q = 0; q < roleAndIDArray.length; q++) {
                        if (roleAndIDArray[q].title === answer.role_title) {
                          return roleAndIDArray[q].id;
                        }
                      }
                    }

                    let updateroleID = FindNewRoleID();

                    console.log(
                      chalk.yellowBright(`
    
    -------------------------------------------------------------------------------------------------
    Employee Role Update Request:
    First Name: ${firstNameRoleUpdate} | Last Name: ${lastNameRoleUpdate} | New Role Title: ${newTitleRoleUpdate}
    -------------------------------------------------------------------------------------------------
          
          `)
                    );
                    inquirer
                      .prompt([
                        {
                          name: 'ensureRemove',
                          type: 'list',
                          message: `Are You Sure You Want To Update This Employee Role: ${firstNameRoleUpdate} ${lastNameRoleUpdate}, New Role Title: ${newTitleRoleUpdate}?`,
                          choices: ['YES', 'NO'],
                        },
                      ])
                      .then(function (answer) {
                        if (answer.ensureRemove === 'YES') {
                          //
                          console.log(
                            chalk.redBright(`
    
    -------------------------------------------------------------------------------------------------
    Employee: ${firstNameRoleUpdate} ${lastNameRoleUpdate}, New Role Title: ${newTitleRoleUpdate} Has Been Updated
    -------------------------------------------------------------------------------------------------
              
              `)

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
