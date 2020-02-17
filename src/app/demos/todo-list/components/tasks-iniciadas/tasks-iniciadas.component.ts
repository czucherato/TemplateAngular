import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '../../todo-list.store';
import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../../todo-list.service';

@Component({
  selector: 'app-tasks-iniciadas',
  templateUrl: './tasks-iniciadas.component.html',
  styleUrls: ['./tasks-iniciadas.component.css']
})
export class TasksIniciadasComponent implements OnInit {

  constructor(
    private todoListService: TodoListService,
    private store: Store) { }

  todoList$: Observable<any[]>;

  ngOnInit() {
    this.todoList$ = this.store.getTodoList()
    .pipe(
      map(todoList => todoList.filter(task => task.iniciado && !task.finalizado))
    );
  }

  onToggle(event) {
    this.todoListService.toggle(event);
  }
}