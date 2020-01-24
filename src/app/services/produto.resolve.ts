import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';
import { ProdutoService } from './produto.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class ProdutoResolve implements Resolve<Produto[]> {

    constructor(private produtoServ: ProdutoService) { }

    protutos: Produto[];

    resolve(route: ActivatedRouteSnapshot) {
        this.produtoServ.obterTodos(route.params.estado).subscribe(s => this.protutos = s)
        return this.protutos;
    }
}