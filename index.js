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
            type: "list",
            message: "License:",
            name: "license",
            choices: ['Apache License 2.0','MIT License','GNU General Public License v3.0']
         },
         {
            type: "input",
            message: "Contributing:",
            name: "contributing"
         },
         {
            type: "input",
            message: "Tests:",
            name: "tests"
         },
         {
            type: "input",
            message: "Github User Name:",
            name: "gitHubName"
         },
         {
            type: "input",
            message: "Email:",
            name: "email"
         }
    ])
    .then(response => {
        let readmeText = "";
        if(response.title){
            if(response.license==='Apache License 2.0'){
                readmeText+=`[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n`;}
            if(response.license==='MIT License'){
                readmeText+=`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n`;
            }
            if(response.license==='GNU General Public License v3.0'){
                readmeText+=`[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)\n`;
            }



            //Title
            readmeText += `# ${response.title}\n\n`;
            //Description
            if(response.description){
                readmeText+=`## Description\n`;
                readmeText+=`${response.description}\n\n`;
            }
            //Table of contents
            readmeText+=`## Table of Contents\n`
            if(response.instalation){
                readmeText+=`* [Installation](#instalation)\n`;
            }
            if(response.usage){
                readmeText+=`* [Usage](#usage)\n`;
            }
            readmeText+=`* [License](#license)\n`;
            if(response.contributing){
                readmeText+=`* [Contributing](#contributing)\n`;
            }
            if(response.tests){
                readmeText+=`* [Tests](#tests)\n`;
            }
            if(response.tests){
                readmeText+=`* [Tests](#tests)\n`;
            }
            readmeText+=`* [Questions](#questions)\n`;
            readmeText+=`\n`;
            //Installation
            if(response.instalation){
                readmeText+=`## Instalation\n`;
                readmeText+=`${response.instalation}\n\n`;
            }
            //Usage
            if(response.usage){
                readmeText+=`## Usage\n`;
                readmeText+=`${response.usage}\n\n`;
            }
            //License
            if(response.license){
                readmeText+=`## License\n`;
                if(response.license==='Apache License 2.0'){
                    readmeText+=`[Apache License 2.0](LICENSE.md)\n`;
                    fs.copyFile('./data/apache2.0.txt','./LICENSE.md',(error)=>{if(error)console.log(error)});
                }
                if(response.license==='MIT License'){
                    readmeText+=`[MIT License](LICENSE.md)\n`;
                    fs.copyFile('./data/mit.txt','./LICENSE.md',(error)=>{if(error)console.log(error)});
                }
                if(response.license==='GNU General Public License v3.0'){
                    readmeText+=`[GNU General Public License v3.0](LICENSE.md)\n`;
                    fs.copyFile('./data/gnu3.0.txt','./LICENSE.md',(error)=>{if(error)console.log(error)});
                }
            }
            //Contributing
            if(response.contributing){
                readmeText+=`## Credits\n`;
                readmeText+=`${response.contributing}\n\n`;
            }
            //Tests
            if(response.tests){
                readmeText+=`## Tests\n`;
                readmeText+=`${response.tests}\n\n`;
            }
            //Questions
            if(response.gitHubName || response.email){
                readmeText+=`## Questions\n`;
                if(response.gitHubName){
                    readmeText+=`${response.gitHubName}: [Github](https://github.com/${response.gitHubName})\n\n`;
                }
                if(response.email){
                    readmeText+=`For additional questions: <${response.email}>\n\n`;
                }
            }
            fs.writeFile('README.md',readmeText,(error) => {if(error) console.log(error)});
        } else {
            console.log("You must enter a title for the project");
        }
    })
    .catch(error => error ? console.log(error) : console.log("success"))
