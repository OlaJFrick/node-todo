console.log('Starting app.js');

const fs = require('fs');
const todos = require('./todos.js');
const yargs = require('yargs');

let cmd = process.argv[2];
let argv = yargs.help().argv;

if (cmd === 'create') {
  let item = createTask(argv.item);
  if(item){
    console.log(`ToDo: ${item} created`);
    console.log('----------------------')
  } else {
    console.log(`Item not created, there's already a task with that name`);
  }
} else if (cmd === 'remove') {
  console.log('Todo item is removed');
} else if (cmd === 'list') {
  console.log('All todo items listed');
} else if (!cmd) {
  console.log('no command added, node app.js --help for instructions')
} else {
  console.log('unknown command');
}
