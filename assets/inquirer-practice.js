const fs = require('fs')
const process = require('process');
const inquirer = require('inquirer');
const util = require('util')

// const writeReadMe = util.promisify(fs.writeFile)

let datarg = process.argv
// this asks the questions from the command line to gather data
inquirer.prompt ([
    // it appears prompt only allows 3 questions
    {
    type: 'input', 
    name:"input_type", 
    message:'what is filename.md?',
    validate: (answer) => {
        if(answer === '') {
            return 'please enter a valid name'
        }
        return true
        }
    },
    {
        type:'checkbox',
        name:'check_question',
        message: 'what will the table of contents include?',
        choices:['Instillation','Usage','Credits','License'],
        default: 'Instillation'
        },
    {
    type:'input',
    name:'content_question',
    message: 'what will the ReadMe file contain?',
    validate: (answer) => {
        if(answer === '') {
            return 'please enter a valid name'
        }
        return true
        }
    },
]).then(answers => {
    const fileName = answers.input_type;
    const table = answers.check_questions
    const content = answers.content_question;

    console.log('file name is '+ fileName)
    console.log('known programs include '+ content)
    console.log(answers)
    fs.writeFile(fileName, table, content, function (err) {
        if (err) throw err;
        console.log('saved')

    })
})

// C:\Users\Ben\Desktop\_Coding BootCamp\_weeks lessons\week 9\node-assignment\Readme-Generator\assets\inquirer-practice.js