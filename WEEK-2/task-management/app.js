import {addTask,getAllTasks,completeTask} from './task.js'
addTask(1,"eating","high","2024-12-13")
addTask(2,"sleeping","high","2024-12-13")
console.log(getAllTasks())
console.log(completeTask(1))
console.log(getAllTasks())
