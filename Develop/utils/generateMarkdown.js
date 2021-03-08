// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  
    case 'GNU AGPLv3':
      return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';

    case 'GNU GPLv3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
 
    default: 
      return '';
    }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
// use choices at [index] to add badge and license to new md file
function generateMarkdown(data) {
  let licenseBadge = renderLicenseBadge(data.license);
  let licenseLink = renderLicenseLink(data.license);

  return `

  # ${data.title}
  ${licenseBadge}


  ## Description
  ${data.description}

  ## table of Contents
  * [Installation](#installation)
  * [Liscense](#liscense)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## License
  ${data.license}
  ${licenseLink}

  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}
  Github profile: https://github.com/${data.github}
  Email: ${data.email}
  `
;
}

module.exports = generateMarkdown;
