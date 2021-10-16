const fs = require('fs')
const process = require('process')
const inquirer = require('inquirer')
let datarg = process.argv

console.log('process is ' + datarg.length)
datarg.forEach((val, index) => {
    console.log(`${index}: ${val}`)
})

const RMgen = require('../potential-enigma/Develop/utils/generateMarkdown.js')
// const { isArgumentsObject } = require('util/types')

const questions = [
    {type: 'input', id:'main', message:'what is filename.md?'},
    {type: 'input', id:'content', message:'what will be the content?'},
    {type: 'input', id:'tasks', message:'what are the tasks'}
]
const answers = []

// fs.writeFile('filename.MD', 'description', function (err) {
//     if (err) throw err;
//     console.log('saved')
// })
inquirer.prompt(questions, answers)
inquirer.registerPrompt(name,prompt)

// fs.writeFile(fileName, content, tasks); {
//     fileName = questions[0]
//     content = questions[1]
//     tasks = questions[2]
//     console.log('fileName is ' + fileName)
// }

// https://www.tutorialkart.com/nodejs/create-file-in-nodejs-using-node-fs-module/
// https://www.journaldev.com/7821/node-fs-js-create-file-read-write
// https://www.youtube.com/watch?v=B047pkqRCak&ab_channel=JavaBrains