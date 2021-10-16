// TODO: Include packages needed for this application
const inquirer = require('inquirer');

inquirer.prompt ([
    {
    type: 'input', 
    name:"input_type", 
    message:'what is filename.md?',
    default:'filename.md',
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

// TODO: Create an array of questions for user input

// const questions = [{type: 'input', id:'main', message:'what is filename.md?'},{type: 'input', id:'content', message:'what will be the content?'},{type: 'input', id:'tasks', message:'what are the tasks'}];
// const answers = {}

// TODO: Create a function to write README file

// function writeToFile(fileName, content, tasks) {
//     fileName = questions[0]
//     content = questions[1]
//     tasks = questions[2]
//     console.log('fileName is ' + fileName)
// }

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();


// https://www.youtube.com/watch?v=1AxFrY2oSiw&ab_channel=Markodex