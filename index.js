//npm packages tu run the app
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs'); 

//Create an outpoot directory to create the HTML file
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

// javaScript that renders the final HTML app with cards
const render = require('./src/employeeHTML.js')

//import Classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Declare arrays that will save the information of the team
const teamData = [];
const employeeID = [];

// main inquirer questionary 

function employeeApp() {

    function addManager() {
        console.log("Initiate your team build");
        inquirer.prompt([
            {
                type: "input",
                name: "Name",
                message: "What is the manager's name?",
                validate: res => {
                    if (res !== "") {
                        return true;
                    }
                    return "Name is required.";
                }
            },
            {
                type: "input",
                name: "managerID",
                message: "What is the manager's ID?",
                validate: res => {
                    const resID = res.match(/^[1-9]\d*$/);
                    if (resID) {
                      return true;
                    }
                    return "Please enter a positive number greater than zero.";
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is the manager's email?",
                validate: res => {
                    const resEmail = res.match(/\S+@\S+\.\S+/);
                    if (resEmail) {
                      return true;
                    }
                    return "Please enter a valid email.";
                }
            },
            {
                type: "input",
                name: "OfficeNumber",
                message: "What is the manager's office number?",
                validate: res => {
                    const resNumber = res.match(/^[1-9]\d*$/);
                    if (resNumber) {
                      return true;
                    }
                    return "Please enter a valid office number.";
                }
            }
        ]).then(res => {
            const manager = new Manager(res.Name, res.managerID, res.email, res.OfficeNumber);
            teamData.push(manager);
            employeeID.push(res.managerID);
            createTeam();
        });
    }

    function createTeam(){

        inquirer.prompt([
            {
                type: "list",
                name: "role",
                message: "What type of role would you like to add?",
                choices: [
                    "Engineer",
                    "Intern",
                    "Exit App"
                ]
            }
        ]).then(userChoice => {
            switch (userChoice.role) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    generateTeam();
            }
        });
    }

    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "Name",
                message: "What is the engineer's name?",
                validate: res => {
                    if (res !== "") {
                        return true;
                    }
                    return "Name is required.";
                }
            },
            {
                type: "input",
                name: "engineerID",
                message: "What is the engineer's ID?",
                validate: res => {
                    const resID = res.match(/^[1-9]\d*$/);
                    if (resID) {
                      return true;
                    }
                    return "Please enter a positive number greater than zero.";
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is the engineer's email?",
                validate: res => {
                    const resEmail = res.match(/\S+@\S+\.\S+/);
                    if (resEmail) {
                      return true;
                    }
                    return "Please enter a valid email.";
                }
            },
            {
                type: "input",
                name: "GitHub",
                message: "What is the engineer's GitHub username?",
                validate: res => {
                    if (res !== "") {
                        return true;
                    }
                    return "GitHub username is required.";
                }
            }
        ]).then(res => {
            const engineer = new Engineer(res.Name, res.engineerID, res.email, res.GitHub);
            teamData.push(engineer);
            employeeID.push(res.engineerID);
            createTeam();
        });
    }

    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "Name",
                message: "What is the intern's name?",
                validate: res => {
                    if (res !== "") {
                        return true;
                    }
                    return "Name is required.";
                }
            },
            {
                type: "input",
                name: "internID",
                message: "What is the intern's ID?",
                validate: res => {
                    const resID = res.match(/^[1-9]\d*$/);
                    if (resID) {
                      return true;
                    }
                    return "Please enter a positive number greater than zero.";
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is the intern's email?",
                validate: res => {
                    const resEmail = res.match(/\S+@\S+\.\S+/);
                    if (resEmail) {
                      return true;
                    }
                    return "Please enter a valid email.";
                }
            },
            {
                type: "input",
                name: "School",
                message: "What is the intern's school?",
                validate: res => {
                    if (res !== "") {
                        return true;
                    }
                    return "School name is required.";
                }
            }
        ]).then(res => {
            const intern = new Intern(res.Name, res.internID, res.email, res.School);
            teamData.push(intern);
            employeeID.push(res.internID);
            createTeam();
        });
    }

    function generateTeam() {
        // Create the output directory if the output path doesn't exist
        if (!fs.existsSync(OUTPUT_DIR)) {
          fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(teamData), "utf-8");
    }

    addManager();
  
}

employeeApp();