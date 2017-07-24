// Add the reference to the "TodoInterface"
import { TodoInt } from './todoInterface';

// 1. Create a class Todo that implements the Interface created before.

class Todo implements TodoInt {
    constructor (public list: string[]) {}

    addTask(task: string): number {
        this.list.push(task);
        console.log('Task ', task, ' inserted in the list.');
        return this.list.length;
    }


    listAllTasks(): any {
        for (let task of this.list) {
            console.log(task);
        }
    }


    deleteTask(task: string): number {
        this.list.splice(this.list.indexOf(task), 1);
        console.log('Task ', task, ' deleted from the list.');
        return this.list.length;
    }

}


// Execution
let myTodos = new Todo([]);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
