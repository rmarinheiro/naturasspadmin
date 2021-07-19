import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) {

  }

  public buscarTodos() {
    let token: string
    token = localStorage.getItem("LTRTk")

    let header = {
      'Authorization': token
    }

    return this.http.get("http://localhost:8080/cliente", { headers: header })

  }

  public buscarPorLetra(letra: String) {
    let token: string
    token = localStorage.getItem("LTRTk")

    let header = {
      'Authorization': token
    }

    return this.http.get("http://localhost:8080/cliente/busca/"+ letra, { headers: header })

  }
  
  public buscarPorPalavraChave(keyword: String) {
    let token: string
    token = localStorage.getItem("LTRTk")

    let header = {
      'Authorization': token
    }

    return this.http.get("http://localhost:8080/cliente/busca/" + keyword, { headers: header })

  }

  public buscarCompradores(idProduto:number){
    let token: string
    token = localStorage.getItem("LTRTk")

    let header = {
      'Authorization': token
    }

    return this.http.get("http://localhost:8080/cliente/compras/"+idProduto,{headers:header})
  }

  public buscarAniversariantes(mes:number){
    let token: string
    token = localStorage.getItem("LTRTk")

    let header = {
      'Authorization': token
    }

    return this.http.get("http://localhost:8080/cliente/aniversariantes/"+mes,{headers:header})


  }
}

