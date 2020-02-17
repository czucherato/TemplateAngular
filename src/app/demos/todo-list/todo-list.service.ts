import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Task } from './components/Task';
import { Store } from './todo-list.store';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(
    private http: HttpClient,
    private store: Store) { }
  
  getToDoList$: Observable<Task[]> = this.http
  .get<Task[]>('http://localhost:3000/todolist')
  .pipe(
    tap(next => this.store.set('todoList', next))
  );

  // getToDoList(): Observable<Task[]> {
  //   return this.http.get<Task[]>('http://localhost:3000/todolist');
  // }

  toggle(event: any) {
    this.http.put(`http://localhost:3000/todolist/${event.task.id}`, event.task)
    .subscribe(() => {
      const value = this.store.value.todoList;
      const todoList = value.map(
        (task: Task) => {
          if (event.task.id === task.id) {
            return { ...task, ...event.task };
          } else {
            return task;
          }
        });

        this.store.set('todoList', todoList);
    });
  }
}