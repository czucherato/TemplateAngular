import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../../todo-list.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private todoListService: TodoListService) { }

  todoList$: Observable<any[]>;

  ngOnInit() {
    this.todoList$ = this.todoListService.getToDoList$;
  }
}
