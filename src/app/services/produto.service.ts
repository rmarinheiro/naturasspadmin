import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) {

  }

  public recuperarTodos() {
    return this.http.get("http://localhost:8080/produto/recuperarTodos");
  }
  public uploadFoto(formData: FormData) {
    let token: string
    token = localStorage.getItem("LTRTk")

    let header = {
      'Authorization': token
    }


    return this.http.post("http://localhost:8080/produto/upload", formData, { headers: header });
  }

  public enviarProduto(produto: Produto) {
    let token: string;
    token = localStorage.getItem("LTRTk");

    let header = {
      'Authorization': token
    }
    return this.http.post("http://localhost:8080/produto", produto, { headers: header });
  }

  public recuperarPeloId(idProduto: number) {
    return this.http.get("http://localhost:8080/produto/" + idProduto)
  }

  public atualizarProduto(produto: Produto) {
    let token: string;
    token = localStorage.getItem("LTRTk");

    let header = {
      'Authorization': token
    }
    return this.http.put("http://localhost:8080/produto/atualizar/" + produto.id, produto, { headers: header })
  }
}
