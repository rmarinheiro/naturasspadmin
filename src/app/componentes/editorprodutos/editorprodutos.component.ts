import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { PathDTO } from 'src/app/model/PathDTO';
import { Produto } from 'src/app/model/Produto';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-editorprodutos',
  templateUrl: './editorprodutos.component.html',
  styleUrls: ['./editorprodutos.component.css']
})
export class EditorprodutosComponent implements OnInit {

  public mode: number = 1;
  public listaCategoria: Categoria[] = [];
  public produto: Produto;
  public destaque: boolean;
  public disponivel: boolean;
  public arquivo: File;
  public result: number;
  public mensagemToast: string;

  constructor(private activate: ActivatedRoute,
    private catService: CategoriaService, private prodService: ProdutoService,
    private route: Router) {

    this.produto = new Produto();
    let id = this.activate.snapshot.params["id"];
    console.log("Id valor"+ id);
    if (id == undefined) {
      this.mode = 0;
    } else {
      //a ideia agora é recuperar pelo ID
      this.prodService.recuperarPeloId(id).subscribe(
        (res: Produto) => {
          this.produto = res;
          this.destaque = (this.produto.destaque == 1) ? true : false;
          this.disponivel = (this.produto.disponivel == 1) ? true : false;
        }
      )
    }

    this.result = 0;

    this.catService.getAllCategorias().subscribe(
      (res: Categoria[]) => {
        this.listaCategoria = res;
      })
  }

  ngOnInit() {

  }

  public uploadFoto() {
    const formData = new FormData();
    formData.append("arquivo", this.arquivo, this.arquivo.name)

    this.prodService.uploadFoto(formData).subscribe(
      (res: PathDTO) => {

        this.produto.link = "assets/images/" + res.pathFile
        console.log(this.produto.link);
      }
    )

  }

  public selectFile(event) {
    //console.log(event.target.files[0]);
    this.arquivo = event.target.files[0];
    this.uploadFoto();
  }

  public incluirNovoProduto() {
    this.produto.disponivel = (this.destaque) ? 1 : 0;
    this.produto.destaque = (this.destaque) ? 1 : 0;
    console.log(this.produto);
    console.log("valor do Mode" + this.mode);
    if (this.mode == 0) { 
      console.log("entrei no inserir")
      this.prodService.enviarProduto(this.produto).subscribe(
        (res = Produto) => {
          this.result = 1; //sucesso
          this.mensagemToast = "Produto inserido com Sucesso!!!"
          document.getElementById("btnModal").click();
          //alert("Produto Incluido com Sucesso!!")
        },
        (error) => {
          this.result = -1;
          this.mensagemToast = "Erro ao inserir produto!!!"
          document.getElementById("btnModal").click();
          //alert("Erro ao inserir o Produto!!!")
        }
      )
    } else {//atualizar produto
      console.log("cai no atualizar")
      this.produto.disponivel = (this.destaque) ? 1 : 0;
      this.produto.destaque = (this.destaque) ? 1 : 0;
      this.prodService.atualizarProduto(this.produto).subscribe(
        (res: Produto) => {
          this.result = 1; //sucesso
          this.mensagemToast = "Produto atualizado com Sucesso!!!"
          document.getElementById("btnModal").click();
        },
        (error) => {
          this.result = -1;
          this.mensagemToast = "Erro ao atualizar produto!!!"
          document.getElementById("btnModal").click();
        }
      )
    }
  }

  public fecharModal() {
    if (this.result == 1) {
      this.route.navigate(['/admin'])
    }
  }

}
