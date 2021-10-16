const fs = require('fs')
const process = require('process');
const inquirer = require('inquirer');
const util = require('util')

const writeReadMe = util.promisify(fs.writeFile)

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
    type:'list',
    name:'list_question',
    message: 'what programing language do you like?',
    choices:['Javascript','C++','Java','python'],
    default: 'Javascript'
    },
    {
    type:'checkbox',
    name:'checkbox_question',
    message: 'how many programing languages do you speak?',
    choices:['Javascript','C++','Java','python'],
    default: 'Javascript'
    },
]).then(answers => {
    console.log(answers)
})


// console.log('process is ' + datarg)


// C:\Users\Ben\Desktop\_Coding BootCamp\_weeks lessons\week 9\node-assignment\Readme-Generator\potential-enigma\Develop\inquirer-practice.js