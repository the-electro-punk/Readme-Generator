// allows me to use the file system
const fs = require('fs')
// allows me to use inquirer to ask questions
const inquirer = require('inquirer');

// inquirer.registerPrompt('loop', require('inquirer-loop')(inquirer));


// this asks the questions from the command line to gather data
inquirer.prompt (
    {
    // this is supposed to cause the questions to loop and add more if needed
    type: 'loop',
    name: 'items',
    message: 'add something else?',
    questions: 
    [

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
    type:'input',
    name:'check_question',
    message: 'what will the header be?',
    validate: (answer) => {
        if(answer === '') {
            return 'please enter a valid name'
        }
        return true
        }
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
    // {
    //     type:'confirm',
    //     name: 'askAgain',
    //     message: 'is there more to add?',
    //     default: false
    // },
]}).then(answers => {
    const fileName = answers.input_type;
    const table = answers.check_question;
    const content = answers.content_question;
    const fullstring = '# '+ table + '\n' + content

    // this adds the content to a new file
    console.log(answers)
    fs.appendFile(fileName, fullstring, function (err) {
        if (err) throw err;
        console.log('saved')
    })
})


// inquirer.prompt ([
//     // it appears prompt only allows 3 questions
//     {
//     type: 'list', 
//     name:"repeat_type", 
//     message:'is there more content?',
//     choices:['yes','no'],
//     },
//     {
//     type:'input',
//     name:'check_question',
//     message: 'what will the table of contents include?',
//     validate: (answer) => {
//         if(answer === '') {
//             return 'please enter a valid name'
//         }
//         return true
//         }
//     },
//     {
//     type:'input',
//     name:'content_question',
//     message: 'what will the ReadMe file contain?',
//     validate: (answer) => {
//         if(answer === '') {
//             return 'please enter a valid name'
//         }
//         return true
//         }
//     },
// ]).then(answers => {
//     const repeat = answers.repeat_type;
//     const table = answers.check_question;
//     const content = answers.content_question;
//     const fullstring = '# '+ table + '\n\n' + content

//     // console.log('file name is '+ fileName)
//     // console.log('known programs include '+ content)
//     console.log(answers)

//     fs.writeFile(fileName, fullstring, function (err) {
//         if (err) throw err;
//         console.log('saved')
//     })
// })
// add more prompts???

// C:\Users\Ben\Desktop\_Coding BootCamp\_weeks lessons\week 9\node-assignment\Readme-Generator\assets\inquirer-practice.js