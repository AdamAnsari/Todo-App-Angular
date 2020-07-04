import { Component, OnInit } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons/faTrashAlt';
// import faTrashAlt from '@fortawesome/fontawesome-free-regular/faTrashAlt';


import { TodoModel } from 'src/app/model/todo';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  faTrashAlt = faTrashAlt;
  todos: TodoModel[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    })
  }

  changeTodoStatus(todo:TodoModel) {
    this.todoService.changeStatus(todo);
  }

  deleteTodo(todo:TodoModel) {
    this.todoService.deleteTodo(todo);
  }

}
