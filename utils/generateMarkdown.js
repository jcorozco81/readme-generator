// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
return selectLicense(license).badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license){ 

let licenseText;

if (license != 'No License'){
  licenseText=`

This software/code is licensed under the ${selectLicense(license).fullName}; to use this software/code you must agree to follow and comply the License. A copy of the License can be found at:

${selectLicense(license).link}

`
}

else{
  licenseText='Not licensed.';

}
return licenseText;
}

// Function
function getYear(){
  var date = new Date();
  var n = date.getFullYear();
  return n;
}


// Function Select License Information
// 
function selectLicense(license){
let licenseInfo = {fullName: "", link:"", badge:""};

  switch(license){

    case 'GNU AGPLv3':
    licenseInfo.fullName = "GNU Affero General Public License v3.0";
    licenseInfo.link = "https://www.gnu.org/licenses/agpl-3.0.md";
    licenseInfo.badge = "https://img.shields.io/badge/License-GNU%20AGPLv3-brightgreen"
    break;
  
    case 'GNU GPLv3':
      licenseInfo.fullName = 'The GNU General Public License';
      licenseInfo.link = 'https://www.gnu.org/licenses/gpl-3.0.md';
      licenseInfo.badge = "https://img.shields.io/badge/License-GNU%20GPLv3-brightgreen";
    break;

    case 'GNU LGPLv3':
      licenseInfo.fullName = 'The GNU Lesser General Public License';
      licenseInfo.link = 'https://www.gnu.org/licenses/lgpl-3.0.md';
      licenseInfo.badge = "https://img.shields.io/badge/License-GNU%20LGPLv3-brightgreen";
    break;
    
    case 'Mozilla Public License 2.0':
      licenseInfo.fullName = 'Mozilla Public License 2.0';
      licenseInfo.link = 'https://www.mozilla.org/en-US/MPL/2.0/';
      licenseInfo.badge = "https://img.shields.io/badge/License-Mozilla%20Public%20License%202.0-orange";
    break;
    
    case 'Apache License 2.0':
      licenseInfo.fullName = 'Apache License 2.0';
      licenseInfo.link = 'https://www.apache.org/licenses/LICENSE-2.0.txt';
      licenseInfo.badge = "https://img.shields.io/badge/License-Apache%20License%202.0-red";

      /* Markdown Link: https://github.com/IQAndreas/markdown-licenses/blob/master/apache-v2.0.md*/

    break;
    
    case 'MIT License':
      licenseInfo.fullName = 'MIT License';
      licenseInfo.link = 'https://www.mit.edu/~amini/LICENSE.md';
      licenseInfo.badge = "https://img.shields.io/badge/License-MIT%20License-blue";
    break;

    case 'Boost Software License 1.0':
      licenseInfo.fullName = 'Boost Software License 1.0';
      licenseInfo.link = 'https://www.boost.org/LICENSE_1_0.txt';
      licenseInfo.badge = "https://img.shields.io/badge/License-Boost%20Software%20License%201.0-green";
    break;

    case 'The Unlicense':
      licenseInfo.fullName = 'The Unlicense';
      licenseInfo.link = 'https://unlicense.org/';
      licenseInfo.badge = "https://img.shields.io/badge/License-The%20Unlicense-yellowgreen";
    break;

    default:
      licenseInfo.fullName = ''
      licenseInfo.link = ''
      licenseInfo.badge = "https://img.shields.io/badge/License-Not%20licensed-lightgrey";
  }
  return licenseInfo;
}


// Render Installation Instructions
function renderInstallation(data){
  if (data.installation === 'Website')
  {

    let websiteInstructions = `
    
  1. To install this website to a local computer, clone the repository that is found in the following link:
 
  * Repository link on GitHub website: https://github.com/${data.username}/${data.repo}

  2. Double click on the index.html file to open the website. The website will open on your default web browser. If the webpage does not function as expected, verify that JavaScript is enabled in your web browser.

  Or

  1. The live webpage is served on the GitHub Pages website and it can be accessed by clicking on the following link: https://${data.username}.github.io/${data.repo}/. The webpage will open on your default browser. If the webpage does not function as expected, verify that JavaScript is enabled in your web browser.`;

    return (websiteInstructions);
  }

  else if(data.installation === 'NodeJS'){

    let nodeInstructions = `

  1. To install a Node JS project, install [Node JS](https://nodejs.org/)
        
  2. Clone the GitHub repository to you local computer. Click on the following link.
 
  * Repository link : https://github.com/${data.username}/${data.repo}
  
  Additional packages required: ${data.packages}.`;

  return (nodeInstructions);

  }

  else{

      let otherInstructions = `
  Clone the GitHub repository to you local computer. Click on the following link.
 
  * Repository link : https://github.com/${data.username}/${data.repo}`;

    return (otherInstructions);
  }

}

// Render Usage
function renderUsage(data){
  if (data.installation === 'Website')
  {

    let websiteUsage = `On the local installation folder, open the website by double-clicking the \u0060\u0060\u0060index.html\u0060\u0060\u0060.`;

    return websiteUsage;

  }

  else if(data.installation === 'NodeJS'){

    let nodeUsage = `To execute the script, open a Git terminal on the main project folder (cloned folder) Run the following command: \u0060\u0060\u0060node index.js\u0060\u0060\u0060.`;

    return nodeUsage;

  }
    else{

      let otherUsage = `[Contact](#Questions) the developer for additional information.`;

      return otherUsage;
    }

  }

    


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# Project: ${data.title} ![License Badge](${renderLicenseBadge(data.license)})
  

  
## Description
***

  ${data.description}



## Table of Contents
***  

  - [Installation](#installation)
  - [Usage](#usage)
  - [How to Contribute](#How)
  - [Tests](#Tests)
  - [Questions](#Questions)
  - [License](#license)

  
  
## Installation
***

The installation can be completed by following these instructions:

  ${renderInstallation(data)} 
  


## Usage
***

  ${renderUsage(data)}  
  

## How to Contribute
***

  Developers who are interested in contributing ideas for this application must agree to follow and comply with the Contributor Covetnant: Code of Conduct. The Contributor Covenant Code of Conduct can be found in the following address:

  [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md/)



## Tests
***
  
  ${data.test}


## Questions
***
  
  You can find additional projects on my github page: https://github.com/${data.username}.

  If you have any questions please contact me at my E-Mail address: ${data.email}.

## License
***

Copyright (c) ${getYear()} ${data.username}.

${renderLicenseSection(data.license)}

`;}

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