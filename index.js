const inquirer = require('inquirer');
let fs = require('fs')
const questions =  [ 
    {
        name: 'title',
        message: 'Titulo de la applicacion',
        type: 'input'
    },
    {
        name: 'description',
        message: 'Descripcion',
        type: 'input'
    },
    {
        name: 'tableOfContents',
        message: 'Tabla de contenidos',
        type: 'input'
    },
    {
        name: 'installation',
        message: 'Instalacion',
        type: 'input'
    },
    {
        name: 'usage',
        message: 'Uso',
        type: 'input'
    },
    {
        name: 'license',
        message: 'Licencia',
        type: 'list',
        choices: ['default','completa','alberto','restringida']
    },
    {
        name: 'contributing',
        message: 'Contribuciones',
        type: 'input'
    },
    {
        name: 'test',
        message: 'Test',
        type: 'input'
    },
    {
        name: 'questions',
        message: 'Cual es tu Github',
        type: 'input'
    }
]

inquirer.prompt(questions)
.then(function(answer){
    createReadme(answer)
});

function createReadme(data){
    fs.writeFile('README.md', createStruct(data), (err)=>{
        if(err){
            console.log(err)
        }else{
            console.log("File was created")
        }
    })
}

function createStruct(data){
    const gitUser = data.questions ? `# https://github.com/${data.questions}` : ''
    return `# ${data.title}
    \n # DESCRIPCION📌 <br><br>${data.description}
    \n${data.tableOfContents}<br>
    \n# INTALACION 🛠️ ${data.installation}
    \n# INSTRUCCIONES📋<br> ${data.usage}
    \n# ${data.license}
    \n# CONTRIBUYENTES🖇️<br>${data.contributing}
    \n${data.test}
    \n${gitUser}`
}