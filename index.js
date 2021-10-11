//reviewed github.com/malloryfaria to help with write file function, after reviewing also added the paths to create and join dist to index.html. Lastly, compared this github to my generateHTML js and updated my code.
//worked in study group with Cameron Charlesworth & Gerrit Elenbaas, code may be similar
// import required packages
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const fileDirectory = path.resolve(__dirname, "dist");
const filePath = path.join(fileDirectory, "index.html");

// import required local files
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const renderHTML = require("./lib/generateHTML");

// create empty array for employee data
let employeesArr = [];

// question template for base q's
const questions = [           
    {
        type: "input",
        name: "name",
        message: "What is the employee's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the employee's id number?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the employee's email?"
    },
    {
        type: "list",
        name: "role",
        message: "What is this employee's title?",
        choices: ["Engineer", "Intern", "Manager"]
    }
    ]

    // additional q's for manager
    managerQ = [
        {
            type: "input",
            name: "office",
            message: "What is this manager's office number?",
            validate: office => {
                if (office) {
                  return true;
                } else {
                  console.log("Please enter an office number!");
                  return false;
                }
              }
        }
    ]

    // additional q's for engineer
    engineerQ = [
        {
            type: "input",
            name: "github",
            message: "What is the engineer's Github Username?",
            validate: github => {
                if (github) {
                  return true;
                } else {
                  console.log("Please enter a GitHub username!");
                  return false;
                }
              }
        }
    ]

    // additional q's for intern
    internQ = [

        {
            type: "input",
            name: "school",
            message: "What is the intern's school?",
            validate: school => {
                if (school) {
                  return true;
                } else {
                  console.log("Please enter a school name!");
                  return false;
                }
              }
        }
    ]

    // Function to initialize the application
    const init = () => {
            console.log("You're now entering the team profile generator! Please answer the questions below to create your team:")
            newEmployee()
    
    };   

    // Function to create new employee
    const newEmployee = async () => {
        await inquirer.prompt(questions)
          .then((response) => {
            let name = response.name;
            let id = response.id;
            let email = response.email;
            let role = response.role;
            let officeNumber;
            let github;
            let school;

            if (role === "Engineer") {
            inquirer.prompt(engineerQ).then((response) =>{
                github = response.github;
                let employee = new Engineer(name, id, email, github);
                employeesArr.push(employee);
                addEmployee(employeesArr);
                });
            }
            else if (role === "Manager") {
                inquirer.prompt(managerQ).then((response) =>{
                        officeNumber = response.officeNumber;
                        let employee = new Manager(name, id, email, officeNumber);
                        employeesArr.push(employee);
                        addEmployee(employeesArr);
                    });
                }
            else if (role === "Intern") {
                inquirer.prompt(internQ).then((response) =>{
                        school = response.school;
                        let employee = new Intern(name, id, email, school);
                        employeesArr.push(employee);
                        addEmployee(employeesArr);
                    });
            }

        });    
    
    };

    // Function that asks if you would like to add an employee or end cycle and create index.html
    const addEmployee = async (array) => {
       await inquirer
        .prompt({
            type: "confirm",
            name: "addEmployee",
            message: "Would you like to add another employee?"

        }).then(async (response) => {
            var createEmployee = response.addEmployee;
            if (await createEmployee === true) {
                newEmployee();
            } 
            else if (await createEmployee === false) {
            
            // If the dist directory does not exist, then create one
            if (!fs.existsSync(fileDirectory)) {
                fs.mkdirSync(fileDirectory)
            }

            // calls the renderHTML function in the generateHTML.js file to create the index.html
            fs.writeFile(filePath, renderHTML(array), (err) => {
        
                if (err) {
                    return console.log(err);
                }
                
                // Success message
                console.log("Your index.html file has been created and can be found in the 'dist' folder!");
            });

        }
    })
};
    // initialize app
    init();