// TODO: Include packages needed for this application
const genMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');



// TODO: Create an array of questions for user input
const questions = [
  
  {
    type: 'input',
    name: 'title',
    message: 'What is the project title?',
  },

  {
    type: 'input',
    name: 'repo',
    message: 'Enter the repository name:',
  },

  {
    type: 'input',
    name: 'description',
    message: 'Write a brief description of the project:',
  },

  {
    type: 'list',
    message: 'What kind of project it is?',
    name: 'installation',
    choices: ['Website (HTML/JS/CSS)', 'NodeJS', 'Other'],
  },

  {
    type: 'input', 
    name: 'packages',
    message: 'What packages (if any) are required to run your project?',
  },

  {
    type: 'list',
    name: 'test',
    message: 'Does you project has a test script?',
    choices:['Yes','No'],
  },

{
  type: 'input',
  name: 'username',
  message: 'What is your github username?',
},

{
    type: 'input',
    name: 'email',
    message: 'Enter your Email address?',
  },

{
    type: 'list',
    message: 'Select license type?',
    name: 'license',
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0','The Unlicense', 'No License'],
  }

];


// TODO: Create a function to write README file

function writeToFile(fileName, data) {

    fs.writeFile('READ-ME.md', data, (error) =>
        error ? console.error(`Error: ${error}`) : console.log('File has been created.')
    );

}

// TODO: Create a function to initialize app
function init() {

    inquirer
    .prompt(questions)
       
    .then((data) => {
        // let dataString = JSON.stringify(data);
        writeToFile('filename', genMarkdown.generateMarkdown(data));
        console.log(genMarkdown.generateMarkdown(data));    
    });

}






// Function call to initialize app
init();






// Acceptance Criteria
/*
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README

WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled 
    -   Description, 
    -   Installation, 
    -   Usage, 
    -   Contributing, and 
    -   Tests

WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under : 

From https://gist.github.com/lukas-h
https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

- GNU AGPLv3 [![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)

- GNU GPLv3 [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

- GNU LGPLv3 [![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)

- Mozilla Public License 2.0 [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)

- Apache License 2.0 [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

- MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

- Boost Software License 1.0 [![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)

- The Unlicense [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)

WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README

*/