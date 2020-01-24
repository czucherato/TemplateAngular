import { Observable, fromEvent } from 'rxjs';
import { Produto } from 'src/app/models/produto.model';
import { ProdutoCountComponent } from '../componentes/produto-count.component';
import { ProdutoDetalheComponent } from '../componentes/produto-card-detalhe.component';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html',
  styles: []
})
export class ProdutoDashboardComponent implements OnInit, AfterViewInit {

  produtos: Produto[];
  @ViewChild(ProdutoCountComponent, { static: false }) contador: ProdutoCountComponent;
  @ViewChild('teste', { static: false }) mensagemTela: ElementRef;
  @ViewChildren(ProdutoDetalheComponent) botoes: QueryList<ProdutoDetalheComponent>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.produtos = this.route.snapshot.data['produtos'];
    console.log(this.route.snapshot.data["teste"]);
  }

  ngAfterViewInit(): void {
    console.log('Objeto do contador: ', this.contador.produtos);

    let clickTexto: Observable<any> = fromEvent(this.mensagemTela.nativeElement, 'click');
    clickTexto.subscribe(() => {
      alert('Clicou no texo!');
      return;
    });

    console.log(this.botoes);
    this.botoes.forEach(p => {
      console.log(p.produto);
    });
  }

  mudarStatus(event: Produto): void {
    event.ativo = !event.ativo;
  }
}
