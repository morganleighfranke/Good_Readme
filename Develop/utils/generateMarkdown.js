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

function generateMarkdown(data) {
  let licenseBadge = renderLicenseBadge(data.license);

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
