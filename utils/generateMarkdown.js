// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Render Installation Instructions
function renderInstallation(data){
  if (data.installation === 'Website')
  {

    let websiteInstructions = `
    
  1. To install this website to a local computer, clone the repository that is found in the following link:
 
  * Repository link on GitHub website: https://github.com/${data.username}/${data.title}

  2. Double click on the index.html file to open the website. The website will open on your default web browser. If the webpage does not function as expected, verify that JavaScript is enabled in your web browser.

  Or

  1. The live webpage is served on the GitHub Pages website and it can be accessed by clicking on the following link: https://${data.username}.github.io/${data.title}/. The webpage will open on your default browser. If the webpage does not function as expected, verify that JavaScript is enabled in your web browser.`;

    return (websiteInstructions);
  }
  else if(data.instructios === 'Node JS'){

    let nodeInstructions = `

  1. To install a Node JS project, install [Node JS](https://nodejs.org/)
        
  2. Clone the GitHub repository to you local computer. Click on the following link.
 
  * Repository link : https://github.com/${data.username}/${data.title}
  
  Additional packages required: ${data.packages}.
  
  `

  }


}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
  
  
## Description
  ${data.description}


## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [How to Contribute](#How to Contribute)
  - [Tests](#Tests)
  - [License](#license)
  
  
## Installation

To install the project 

  ${renderInstallation(data)} 
  

## Usage

  ${data.usage}  
  

## How to Contribute

  Developers who are interested in contributing ideas for this application must agree to follow and comply with the Contributor Covetnant: Code of Conduct. The Contributor Covenant Code of Conduct can be found in the following address:

  [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md/)


## Tests

  ${data.tests}


## Questions

You can find additional projects on my github page: https://github.com/${data.username}.

If you have any questions please contact me at my E-Mail address: ${data.email}.

## License




`;
}

module.exports = {
  generateMarkdown
};



/*
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled 
    -   Description, 
    -   Installation, 
    -   Usage, 
    -   Contributing 
    -   Tests
    -   License
*/