import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/Cliente';
import { FiltroPedidoDTO } from 'src/app/model/FiltroPedidoDTO';
import { Pedido } from 'src/app/model/pedido';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  public lista : Pedido[] = [];
  public total;
  public detalhe : Pedido = new Pedido();

  public filtroPedidoDTO : FiltroPedidoDTO = new FiltroPedidoDTO();



  constructor(private service:PedidoService) { 
    this.detalhe.cliente = new Cliente();
    this.filtroPedidoDTO.cancelado = (this.filtroPedidoDTO.cancelado)?3:0;
    this.filtroPedidoDTO.pago = (this.filtroPedidoDTO.pago)?1:0;
    this.filtroPedidoDTO.entregue =(this.filtroPedidoDTO.entregue)?2:0;
    this.service.getAllPedidos(this.filtroPedidoDTO).subscribe(
      (res:Pedido[])=>{
        this.lista = res;
        this.total = 0;
        this.lista.forEach(item =>{this.total += item.valorTotal;})
      
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

  public filtrarPedidos(){
    this.filtroPedidoDTO.cancelado = (this.filtroPedidoDTO.cancelado)?3:0;
    this.filtroPedidoDTO.pago = (this.filtroPedidoDTO.pago)?1:0;
    this.filtroPedidoDTO.entregue =(this.filtroPedidoDTO.entregue)?2:0;

    this.service.getAllPedidos(this.filtroPedidoDTO).subscribe(
      (res:Pedido[])=>{
        this.lista = res
        this.total = 0;
        this.lista.forEach(item =>{this.total += item.valorTotal;})
       
      }
    );
  }

  public limpar(){
    this.filtroPedidoDTO.nome = null;
    this.filtroPedidoDTO.dataInicio = null;
    this.filtroPedidoDTO.dataFim = null;
    this.filtroPedidoDTO.pago = 0;
    this.filtroPedidoDTO.cancelado = 0;
    this.filtroPedidoDTO.entregue = 0;
  }


 

}
