import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testes',
  templateUrl: './testes.component.html',
  styleUrls: ['./testes.component.css']
})
export class TestesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  title: string = 'angular-unit-test';
  h1: string = 'Welcome to angular-unit-test!';
}
