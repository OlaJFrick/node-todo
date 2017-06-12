const fs = require('fs');
const todos = require('./todos.js');
const yargs = require('yargs');

let cmd = process.argv[2];
let argv = yargs.argv;

if (cmd === 'create') {
  let item = createTask(argv.todo);
  if(item){
    console.log(`Created ToDo: ${item} created`);
    console.log('----------------------')
  } else {
    console.log(`Item not created, there's already a task with that name`);
  }
} else if (cmd === 'remove') {
  let removeItem = removeTask(argv.todo);
  let msg = removeItem ? `Todo item '${argv.todo}' has been removed` : `Task '${argv.todo}' does not exist and was not removed`
  console.log(msg);
} else if (cmd === 'list') {
  let tasks = listTasks();
  if(!tasks){
    console.log('----------------------');
    console.log('Sorry, currently no To Do tasks stored');
  }
} else if (!cmd) {
  console.log('no command added, node app.js --help for instructions')
} else {
  console.log('unknown command');
}

/*
 Created by Ola Frick https://github.com/OlaJFrick 2017-06-11
*/
