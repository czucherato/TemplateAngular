import { NgModule } from "@angular/core";
import localePt from '@angular/common/locales/pt';
import { ProdutoRoutingModule } from './produto.route';
import { ProdutoAppComponent } from './produto.app.component';
import { ProdutoResolve } from 'src/app/services/produto.resolve';
import { ProdutoService } from 'src/app/services/produto.service';
import { CommonModule, registerLocaleData } from '@angular/common';
import { ProdutoCountComponent } from './componentes/produto-count.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { ProdutoDetalheComponent } from './componentes/produto-card-detalhe.component';
import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';


registerLocaleData(localePt);

@NgModule({
    declarations: [
        ProdutoAppComponent,
        ProdutoCountComponent,
        ProdutoDetalheComponent,
        ProdutoDashboardComponent,
        EditarProdutoComponent
    ],
    imports: [
        CommonModule,
        ProdutoRoutingModule
    ],
    providers: [
        ProdutoService,
        ProdutoResolve
    ]
})
export class ProdutoModule {}