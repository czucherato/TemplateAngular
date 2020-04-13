import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  constructor() { }

  @Input() passo: number = 1;
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Output() alterado = new EventEmitter<number>();
  valor: number = 0;
  foco: boolean;

  ngOnInit() {
  }

  incrementar() {
    if (this.valor < this.max) {
      this.valor = this.valor + this.passo;
      this.alterado.emit(this.valor);
    }
  }

  decrementar() {
    if (this.valor > this.min) {
      this.valor = this.valor - this.passo;
      this.alterado.emit(this.valor);
    }
  }

  onBlur(event: FocusEvent) {
    this.foco = false;
    event.preventDefault();
    event.stopPropagation();
  }

  onKeyUp(event: KeyboardEvent) {
    let handlers = {
      ArrowDown: () => this.decrementar(),
      ArrowUp: () => this.incrementar()
    };

    if (handlers[event.code]) {
      handlers[event.code]();
      event.preventDefault();
      event.stopPropagation();
    }
  }

  onFocus(event: FocusEvent) {
    this.foco = true;
    event.preventDefault();
    event.stopPropagation();
  }
}
