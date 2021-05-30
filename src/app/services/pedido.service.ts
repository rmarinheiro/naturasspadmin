import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http:HttpClient) {

   }

   public getAllPedidos(){
    let token = localStorage.getItem("LTRTk");
    token = localStorage.getItem("LTRTk")
  
    let header = {
      'Authorization': token
    }
    return this.http.get("http://localhost:8080/pedido",{headers:header});
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


