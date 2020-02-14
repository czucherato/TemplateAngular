import { Observable } from 'rxjs';
import { Task } from './components/Task';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(private http: HttpClient) { }
  
  getToDoList$: Observable<Task[]> = this.http.get<Task[]>('http://localhost:3000/todolist');

  // getToDoList(): Observable<Task[]> {
  //   return this.http.get<Task[]>('http://localhost:3000/todolist');
  // }
}