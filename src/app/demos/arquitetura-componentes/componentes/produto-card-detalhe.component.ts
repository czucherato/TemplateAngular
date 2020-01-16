import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Produto } from 'src/app/models/produto.model';

@Component({
    selector: 'produto-card-detalhe',
    templateUrl: './produto-card-detalhe.component.html'
})
export class ProdutoDetalheComponent {
    @Input() produto: Produto;
    @Output() status: EventEmitter<any> = new EventEmitter();

    emitirEvento(): void {
        this.status.emit(this.produto);
    }
}