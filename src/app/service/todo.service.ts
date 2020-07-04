import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { TodoModel } from './../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  // Creating a todos array using our custom model;
  todos:TodoModel[];

  // Constructor part defined here
  constructor() { 
    // Hard code first some sample data
    this.todos = [
      {
        id: '111',
        title: 'Learn Angular',
        isCompleted: true,
        date: new Date()
      },
      {
        id: '222',
        title: 'Learn React',
        isCompleted: true,
        date: new Date()
      },
      {
        id: '333',
        title: 'Learn MEAN Stack',
        isCompleted: false,
        date: new Date()
      },
    ]
  }// Hard code first some sample data

  // Read todos list
  getTodos() {
    return of(this.todos);
  }// Read todos list

  // Add todos list
  addTodos(todo:TodoModel) {
    this.todos.push(todo);
  }// Add todos list

  // Change status to opposite of previous one
  changeStatus(todo:TodoModel) {
    this.todos.map((singleTodo) => {
      if(singleTodo.id == todo.id) {
        todo.isCompleted = !todo.isCompleted;
      }
    })
  }// Change status to opposite of previous one

  // Delete the selected todo item
  deleteTodo(todo:TodoModel) {
    const indexOfTodo:number = this.todos.indexOf(todo);

    if(indexOfTodo != -1) {
      this.todos.splice(indexOfTodo, 1)
      // splice(item(id), range) -> Splice method 
    }
  }// Delete the selected todo item

}
