import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../Task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  @Input()
  list: Task[];

  ngOnInit() {
  }

}
