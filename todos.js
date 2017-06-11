const fs = require('fs');

let getTasks = () => {
  try {
    var allTasks = fs.readFileSync('tasks.json');
    return JSON.parse(allTasks);
  } catch (err) {}
}

let saveTasks = (tasks) => {
  fs.writeFileSync('tasks.json', JSON.stringify(tasks));
}

createTask = (item) => {
  let tasks = getTasks();
  let newTask = item.toUpperCase().charAt(0) + item.slice(1);
  let duplicateCheck = tasks.filter((task) => task === newTask);

  if (duplicateCheck.length === 0) {
    tasks.push(newTask);
    saveTasks(tasks);
    return newTask;
  }
}

removeTask = (item) => {
  console.log(item, 'is removed');
}

listTasks = () => {
  console.log(item);
}

module.exports = {
  createTask,
  removeTask,
  listTasks
}
