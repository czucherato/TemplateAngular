import { Injectable, Inject, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BAR_UNIDADE_CONFIG, BarUnidadeConfig } from './bar.config';

// export function BarFactory(http: HttpClient, config: BarUnidadeConfig) {
//   return new BarService(http, config);
// }

export function BarFactory(http: HttpClient, injector: Injector) {
  return new BarService(http, injector.get(BAR_UNIDADE_CONFIG));
}

@Injectable()
export class BarService {

  constructor(
    private http: HttpClient,
    @Inject(BAR_UNIDADE_CONFIG) private config: BarUnidadeConfig) { }

  public obterUnidade(): string {
    return 'Unidade ID: ' + this.config.unidadeId + ' Token: ' + this.config.unidadeToken;
  }

  obterBebidas(): string {
    return 'Bebidas';
  }

  obterPorcoes(): string {
    return 'Porções';
  }

  obterRefeicoes(): string {
    return 'Refeições';
  }
}

export class BarServiceMock {
  obterBebidas(): string {
    return 'Mock';
  }

  obterPorcoes(): string {
    return 'Mock';
  }

  obterRefeicoes(): string {
    return 'Mock';
  }
}

export abstract class BebidaService {
  obterBebidas: () => string;
}