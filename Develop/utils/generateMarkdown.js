var TOCList = "";



// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  if (license === "MIT") {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';

  } else if (license === "GPL") {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';

  } else if (license === "Apache") {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';

  } else if (license === "none") {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return 'https://choosealicense.com/licenses/mit/';

  } else if (license === "GPL") {
    return 'https://choosealicense.com/licenses/gpl-3.0/'

  } else if (license === "Apache") {
    return 'https://choosealicense.com/licenses/apache-2.0/';

  } else if (license === "none") {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
    return ``
  } else {

    var link = renderLicenseLink(license)

    return `
  # License  

  ### [${license}](${link})
  <br /><br />
  `
  }
};

function renderMd(data, title) {
  if (!data) {
    return ``
  } else {
    if (!TOCList){
      TOCList = title
    }else{
      TOCList += ('     ' + title)
    }
    return `
  # ${title} 
  
  ### ${data}  
  $~$
  $~$ 
  <br /><br />

  `
  }
};



// TODO: Create a function to generate markdown for README
module.exports = function generateMarkdown(data) {
  return `
  # ${data.title}   
  ${renderLicenseBadge(data.license)}      
  
    
  # Description    
     
  ### ${data.description}   
  <br /><br />

  # Table of Contents 
  ### [Description]
  ### ${[TOCList]}
  ### [Questions]

  ${renderMd(data.installation, 'Installation Instructions')}    
  ${renderMd(data.usage, "Usage Instructions")}      
  ${renderMd(data.contribution, "Contribution Credits")}
  ${renderMd(data.features, "Features")}
  ${renderMd(data.test, 'Tests')}          
  ${renderLicenseSection(data.license)}        
 
  # Questions

  If you have any questions, please feel free to email me.
  ### ${data.email}
  <br /><br />
  Here is my GitHub page
  ### ${data.github}
  <br /><br />
  Thank you,
  ### ${data.name}

`;

};


