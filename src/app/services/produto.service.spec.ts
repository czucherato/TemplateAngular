import { TestBed } from '@angular/core/testing';
import { Produto } from '../models/produto.model';
import { ProdutoService } from './produto.service';
import { Observable, Subscriber } from 'rxjs';

const produtosFake: Produto[] = [{
    id: 1,
    nome: 'Teste',
    ativo: true,
    valor: 100,
    imagem: 'celular.jpg'
},
{
    id: 2,
    nome: 'Teste 2',
    ativo: true,
    valor: 200,
    imagem: 'gopro.jpg'
},
{
    id: 3,
    nome: 'Teste 3',
    ativo: true,
    valor: 300,
    imagem: 'laptop.jpg'
}];

const produtoFake: Produto = {
    id: 2,
    nome: 'Teste 2',
    ativo: true,
    valor: 200,
    imagem: 'gopro.jpg'
}

describe('ProdutoService', () => {
    let service: ProdutoService;
    let $produtosFake: Observable<Produto[]>;
    let $produtoFake: Observable<Produto>;

    beforeEach(() => {
        const bed = TestBed.configureTestingModule({
            providers:[ProdutoService]
        });

        service = bed.get(ProdutoService);
        $produtosFake = new Observable((subscriber) => subscriber.next(produtosFake));
        $produtoFake = new Observable((subscriber) => subscriber.next(produtoFake));
    });

    it('Deve retornar uma lista de produtos', () => {
        spyOn(service, 'obterTodos').and.returnValue($produtosFake);
        service.obterTodos('ativos').subscribe(result => {
            expect(result.length).toBe(3);
            expect(result).toEqual(produtosFake);
        });
    });

    it('Deve retornar um produto', () => {
        spyOn(service, 'obterPorId').and.returnValue($produtoFake);
        service.obterPorId(2).subscribe(result => {
            expect(result).toEqual(produtoFake);
        });
    });
    
});