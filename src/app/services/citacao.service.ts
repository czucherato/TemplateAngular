import { Injectable } from '@angular/core';
import { Citacao } from '../models/citacao.model';

@Injectable({
  providedIn: 'root'
})
export class CitacaoService {

  constructor() { }

  public citacoes: Citacao[] = [];
  private diasDaSemana  = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Fri", "Sábado"];


  filtrar(): Citacao[] {
    return this.citacoes;
  }

  filtrarDoServidor(): Promise<Citacao[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([new Citacao("I love unit testing", "Mon 4, 2018")]);
      }, 2000);
    });
  }

  adicionar(texto: string) {
    const data = new Date();
    console.log(data.getDate());
    const diaDaSemana = this.diasDaSemana[data.getDate()];
    const dia = data.getDay();
    const ano = data.getFullYear();
    this.citacoes.push(new Citacao(texto, `${diaDaSemana} ${dia} ${ano}`))
  }

  remover(indice: number) {
    this.citacoes.splice(indice, 1);
  }
}