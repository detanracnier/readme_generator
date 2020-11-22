const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
           type: "input",
           message: "Project title:",
           name: "title"
        },
        {
            type: "input",
            message: "Description:",
            name: "description"
         },
         {
            type: "input",
            message: "Instalation Instructions:",
            name: "instalation"
         },
         {
            type: "input",
            message: "Usage instructions:",
            name: "usage"
         },
         {
            type: "input",
            message: "Credits:",
            name: "credits"
         },
         {
            type: "input",
            message: "License:",
            name: "license"
         }
    ])
    .then(response => {
        let readmeText = "";
        if(response.title!=''){
            //Title
            readmeText += `#${response.title}\n\n`;
            //Description
            if(response.description != ''){
                readmeText+=`##Description\n`;
                readmeText+=`${response.description}\n\n`;
            }
            //Table of contents
            if(response.instalation != '' || response.usage != '' || response.credits != '' ||response.license != ''){
                readmeText+=`##Table of Contents\n`
                if(response.instalation != ''){
                    readmeText+=`*[Installation](#instalation)\n`;
                }
                if(response.usage != ''){
                    readmeText+=`*[Usage](#usage)\n`;
                }
                if(response.credits != ''){
                    readmeText+=`*[Credits](#credits)\n`;
                }
                if(response.license != ''){
                    readmeText+=`*[License](#license)\n`;
                }
                readmeText+=`\n`;
            }
            if(response.instalation != ''){
                readmeText+=`##Instalation\n`;
                readmeText+=`${response.instalation}\n\n`;
            }
            if(response.usage != ''){
                readmeText+=`##Usage\n`;
                readmeText+=`${response.usage}\n\n`;
            }
            if(response.credits != ''){
                readmeText+=`##Credits\n`;
                readmeText+=`${response.credits}\n\n`;
            }
            if(response.license != ''){
                readmeText+=`##License\n`;
                readmeText+=`${response.license}\n\n`;
            }
            fs.writeFile('README.md',readmeText,(error) => {if(error) console.log(error)});
        } else {
            console.log("You must enter a title for the project");
        }
    })
    .catch(error => error ? console.log(error) : console.log("success"))
