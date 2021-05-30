import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/Produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  public lista:Produto[] = []

  constructor(private service:ProdutoService) { 
    this.service.recuperarTodos().subscribe(
      (res:Produto[])=>{
        this.lista=res
        },)
      

  }

  ngOnInit() {
  }

  public destaca(produto:Produto){

    console.log("Destacando = " + produto.id + "destaque = " + produto.destaque)
    produto.destaque =(produto.destaque)? 1 : 0
    this.service.atualizarProduto(produto).subscribe(
      (res:Produto) =>{
        console.log("Produto " + res); 
      },(err)=>{
        alert("Erro ao atualizar destaque do produto" + produto.nome)
      }
    )
  }

  public disponibiliza(produto:Produto){
    produto.disponivel = (produto.disponivel)? 1 : 0
    this.service.atualizarProduto(produto).subscribe(
      (res:Produto) =>{
        console.log("Produto " + res); 
      },(err)=>{
        alert("Erro ao atualizar a disponibilidade do produto" + produto.nome)
      }
    )
    console.log("Disponibiliza = " + produto.id + " disponibiliza = " + produto.disponivel)
  }
}
