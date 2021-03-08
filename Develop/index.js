const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

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
    name: 'license',
    message: 'Chose which license you want to use',
    choices: ['MIT', 'GNU AGPLv3', 'GNU GPLv3', 'no license'],
  },
]);

function init() {
    promptUser().then((answers) => {
    try {
      const readme = generateMarkdown(answers)
    
      fs.writeFileSync('README.md', readme);
      console.log('Successfully wrote to README.md');
    } catch (error) {
      console.log(error);
    }
  });}

init();
