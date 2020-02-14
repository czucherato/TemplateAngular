import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoListService } from '../../todo-list.service';

@Component({
  selector: 'app-tasks-finalizadas',
  templateUrl: './tasks-finalizadas.component.html',
  styleUrls: ['./tasks-finalizadas.component.css']
})
export class TasksFinalizadasComponent implements OnInit {

  constructor(private todoListService: TodoListService) { }

  todoList$: Observable<any[]>;

  ngOnInit() {
    this.todoList$ = this.todoListService.getToDoList$;
  }
}
