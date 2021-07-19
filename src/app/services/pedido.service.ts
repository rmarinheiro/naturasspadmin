import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FiltroPedidoDTO } from '../model/FiltroPedidoDTO';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http:HttpClient) {

   }

   public getAllPedidos(filtro:FiltroPedidoDTO){
    let token = localStorage.getItem("LTRTk");
    token = localStorage.getItem("LTRTk")
  
    let header = {
      'Authorization': token
    }
    return this.http.post("http://localhost:8080/pedido/filtrar",filtro,{headers:header});
  }

  public recuperaTotaisDaSemana(inicio: string, fim:string){
    let token = localStorage.getItem("LTRTk");
    token = localStorage.getItem("LTRTk")
  
    let header = {
      'Authorization': token
    }
    return this.http.get("http://localhost:8080/pedido/recentes?inicio="+inicio+"&fim="+fim,{headers:header});
  }

  public alterarStatus(idPedido:number,status:number){
    let token = localStorage.getItem("LTRTk");
    token = localStorage.getItem("LTRTk")
  
    let header = {
      'Authorization': token
    }
    return this.http.get("http://localhost:8080/pedido/"+idPedido+"?status=" + status,{headers:header})
  }

  
}


