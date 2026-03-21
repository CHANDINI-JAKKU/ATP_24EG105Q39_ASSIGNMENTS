import { validateTitle,validatePriority,validateDueDate } from "./validator.js";
 // 1. Add new task
 let tasks=[]
                    export function addTask(id,title, priority, dueDate) {
                      // Validate using imported functions
                      if(!id&&!validateTitle()&&!validatePriority()&&!validateDueDate()){
                       return "invalid task";
                      }
                      tasks.push({id,title,priority,dueDate})
                      // If valid, add to tasks array
                      console.log("added succesfully")
                      return true;
                      // Return success/error message
                    }

                    // 2. Get all tasks
                    export function getAllTasks() {
                      // Return all tasks
                      return tasks;
                    }
                    
                    // 3. Mark task as complete
                     export function completeTask(taskId) {
                      // Find task and mark as complete
  const task=tasks.find(t=>t.id===taskId)
  if(!task){
    return "task not found"
  }
  task.completed=true;
  return "task completed successfully"
                    }
                    
                    