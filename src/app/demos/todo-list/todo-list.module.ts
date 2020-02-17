import { NgModule } from '@angular/core';
import { Store } from './todo-list.store';
import { CommonModule } from '@angular/common';
import { TodoListService } from './todo-list.service';
import { HttpClientModule } from '@angular/common/http';
import { TodoListComponent } from './todo-list.component';
import { TodoComponent } from './components/todo/todo.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TasksIniciadasComponent } from './components/tasks-iniciadas/tasks-iniciadas.component';
import { TasksFinalizadasComponent } from './components/tasks-finalizadas/tasks-finalizadas.component';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoComponent,
    TasksComponent,
    TasksIniciadasComponent,
    TasksFinalizadasComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    Store,
    TodoListService,
  ],
  exports: [
    TodoListComponent,
    TodoComponent,
    TasksComponent,
    TasksIniciadasComponent,
    TasksFinalizadasComponent
  ]
})
export class TodoListModule { }