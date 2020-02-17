import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../Task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  constructor() { }

  @Input() list: Task[];
  @Output() toggle = new EventEmitter<any>();

  toggleItem(index: number, acao: string) {
    const task = this.list[index];
    
    switch(acao) {
      case 'iniciar':
        task.finalizado = false;
        task.iniciado = true;
        break;
      case 'finalizar':
        task.finalizado = true;
        task.iniciado = false;
        break;
      case 'retomar':
        task.finalizado = false;
        task.iniciado = true;
        break;
      case 'cancelar':
        task.finalizado = false;
        task.iniciado = false;
        break;
    }

    this.toggle.emit({
      task: { ...task }
    });
  }
}