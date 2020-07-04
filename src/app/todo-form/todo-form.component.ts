import { Component, OnInit } from '@angular/core';
import { TodoModel } from '../model/todo';
import { v4 as uuidv4 } from 'uuid';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todoTitle:string;
  alertModal:boolean = false;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  handleAdd() {
    const newTodo: TodoModel = {
      id: uuidv4(),
      title: this.todoTitle,
      isCompleted: false,
      date: new Date()
    }

    if(newTodo.title != '') {
      this.todoService.addTodos(newTodo);
      this.todoTitle = "";
      this.alertModal = false;
    } else {
      this.alertModal = true;
    }
  }

}
