import { TestBed } from '@angular/core/testing';

import { CitacaoService } from './citacao.service';

describe('CitacaoService', () => {
  let service: CitacaoService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(CitacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should create a post in an array", () => {
    const citacao = "Essa é a minha primeira citação";
    service.adicionar(citacao);
    expect(service.citacoes.length).toBeGreaterThanOrEqual(1);
  });

  it("should remove a created post from the array of posts", () => {
    service.adicionar("TEssa é a minha primeira citação");
    service.remover(0);
    expect(service.citacoes.length).toBeLessThan(1);
  });

});