// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { title, listenerCount } = require('process');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Page? (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub Page!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a brief description of your project (Required)',
            validate: descInput => {
                if (descInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide any installation instructions',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide any usage information',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please provide any credits to other people or external resources used in this project',
        },
        {
            type: 'input',
            name: 'features',
            message: 'Are their special features to highlight?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Are their special test instructions?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What type of license applies to this code? (Check all that apply)',
            choices: ['MIT', 'GPL', 'Apache', 'none']
        },
    ]);
};

// TODO: Create a function to write README file
function writeToFile(mdContent) {
    fs.writeFile('./utils/README.md', mdContent, err => {
        if (err) {
            reject(err);
            return;
        } else {
            console.log('File created!')
        }
    });
};


// TODO: Create a function to initialize app
function init() {
    //prompt the user
    questions()
    //then send the answers over to make the MD content
    .then(questionsData => {
        return generateMarkdown(questionsData);
    })
    //then write the MD file
    .then(mdData => {
        return writeToFile(mdData);
    })
    .catch(err => console.error(err))
}

// Function call to initialize app
init();




