import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { ProdutoAppComponent } from './produto.app.component';
import { ProdutoResolve } from 'src/app/services/produto.resolve';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';

const produtoRouterConfig: Routes = [
    {
        path: '', component: ProdutoAppComponent, 
        children: [
            {path: '', redirectTo: 'todos' },
            { 
                path: ':estado', 
                component: ProdutoDashboardComponent,
                resolve: {
                    produtos: ProdutoResolve
                },
                data: {
                    teste: 'informação'
                }
             },
            { path: 'editar/:id', component: EditarProdutoComponent }
        ]
    },
]

@NgModule({
    imports: [
        RouterModule.forChild(produtoRouterConfig)
    ],
    exports: [
        RouterModule
    ]
})
export class ProdutoRoutingModule { }