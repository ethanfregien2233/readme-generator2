const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateMarkdown")
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the project's title?",
        },
        {
            type: "input",
            name: "description",
            message: "Write a description of your project: "
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process (if applicable) ",
        },
        {
            type: "input",
            name: "usage",
            message: "What is this project used for?"
        },
        {
            type: "list",
            name: "license",
            message: "Choose the license for this project: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "List project contributors"
        },
        {
            type: "input",
            name: "tests",
            message: "Are tests included?"
        },
        {
            type: "input",
            name: "questions",
            message: "What should I do if I have an issue? "
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        }
    ]);
} 