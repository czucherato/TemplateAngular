import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';
import { Produto } from 'src/app/models/produto.model';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html'
})
export class EditarProdutoComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtoServ: ProdutoService) { }

    produto: Produto;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.produtoServ.obterPorId(params['id']).subscribe(produto => {
        this.produto = produto;
      })
      console.log(this.produto);
    });
  }

  salvar(): void {
    this.router.navigate(['/produtos']);
    // this.router.navigateByUrl('/produtos');
  }
}