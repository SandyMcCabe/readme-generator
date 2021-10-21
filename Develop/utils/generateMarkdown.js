// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
module.exports = function generateMarkdown(data) {
  return `
  # ${data.title}  
  
  # Description  
  
  ### ${data.description}  

  # Table of Contents  


  # Installation  
  
  ### ${data.installation}  

  # Usage  
  
  ### ${data.usage}  

  # Credits  
//
 Contribution Guidelines
  ### ${data.contribution}  

  # License  

  ### ${data.license}  

  # Features  

  ### ${data.features}  

  # Tests  

  ### ${data.test} 

  # Questions

  If you have any questions, please feel free to email me.
  ### ${data.email}

  Here is my GitHub page
  ### ${data.github}

  Thank you,
  ### ${data.name}

`;

};

// module.exports = mdTemplate;
