// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const newFunctions = require('./utils/newFunctions');


// TODO: Create an array of questions for user input
const promptUser = () =>
inquirer.prompt([
  {
    type: 'input',
    name: 'title',
    message: 'Enter a title',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description of your readme',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions',
  },
  {
    type: 'input',
    name: 'liscense',
    message: 'Enter the liscense used',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter all contributing',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter the tests used',
  },
  {
    type: 'input',
    name: 'questions',
    message: 'Enter questions',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your github username',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email and instructions on how you want to be contacted',
  },
  {
    type: 'list',
    name: 'liscense',
    message: 'Chose which liscense you want to use',
    choices: ['MIT', 'GNU AGPLv3', 'GNU GPLv3'],
  },
]);

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
// const writeToFile = (answers) =>
// ``


// TODO: Create a function to initialize app
function init() {
    promptUser().then((answers) => {
    try {
      const readme = generateMarkdown(answers);
      fs.writeFileSync('README.md', readme);
      console.log('Successfully wrote to README.md');
    } catch (error) {
      console.log(error);
    }
  });}

// Function call to initialize app
init();
