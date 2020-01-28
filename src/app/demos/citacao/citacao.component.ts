import { Component, OnInit } from '@angular/core';
import { CitacaoService } from 'src/app/services/citacao.service';
import { Citacao } from 'src/app/models/citacao.model';

@Component({
  selector: 'app-citacao',
  templateUrl: './citacao.component.html',
  styleUrls: ['./citacao.component.css']
})
export class CitacaoComponent implements OnInit {

  constructor(private service: CitacaoService) { }

  public citacoes: Citacao[];
  public texto: string;

  ngOnInit() {
    this.citacoes = this.service.filtrar();
    this.service.filtrarDoServidor().then(x => this.citacoes = x);
  }

  adicionar(): void {
    this.service.adicionar(this.texto);
    this.texto = null;
  }

  remover(indice: number) {
    this.service.remover(indice);
  }
}