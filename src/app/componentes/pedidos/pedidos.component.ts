import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/Cliente';
import { Pedido } from 'src/app/model/pedido';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  public lista : Pedido[] = [];
  public detalhe : Pedido = new Pedido();

  constructor(private service:PedidoService) { 
    this.detalhe.cliente = new Cliente();
    this.service.getAllPedidos().subscribe(
      (res:Pedido[])=>{
        this.lista = res
      },
      (err)=> {
        alert("Erro ao recuperar o produto");
      }
    )
  }

  ngOnInit() {
  }

  public alterarStatus(idPedido:number,status:number){
    this.service.alterarStatus(idPedido,status).subscribe(
      (res= Pedido) => {
        alert("Status alterado com sucesso");
      },
      (err)=>{
        alert("Erro ao alterar status do pedido");
      }
    )
  }

  public enviarDetalhes(pedido:Pedido){
    this.detalhe = pedido;
    //console.log("Entrei no Modal" + this.detalhe.idPedido)
    document.getElementById("btnModal").click();

  }
 

}
