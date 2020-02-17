import { map } from 'rxjs/operators';
import { Store } from '../../todo-list.store';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoListService } from '../../todo-list.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, OnDestroy {

  constructor(
    private todoListService: TodoListService,
    private store: Store) { }

  todoList$: Observable<any[]>;
  subscription: Subscription;

  ngOnInit() {
    this.todoList$ = this.store.getTodoList()
    .pipe(
      map(todoList => todoList.filter(task => !task.iniciado && !task.finalizado))
    );
    this.subscription = this.todoListService.getToDoList$.subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onToggle(event) {
    this.todoListService.toggle(event);
  }
}