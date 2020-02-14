import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../../todo-list.service';

@Component({
  selector: 'app-tasks-iniciadas',
  templateUrl: './tasks-iniciadas.component.html',
  styleUrls: ['./tasks-iniciadas.component.css']
})
export class TasksIniciadasComponent implements OnInit {

  constructor(private todoListService: TodoListService) { }

  todoList$: Observable<any[]>;

  ngOnInit() {
    this.todoList$ = this.todoListService.getToDoList$;
  }
}