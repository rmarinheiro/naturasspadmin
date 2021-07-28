import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { FiltroPedidoDTO } from 'src/app/model/FiltroPedidoDTO';
import { Pedido } from 'src/app/model/pedido';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-ultimos-pedidos',
  templateUrl: './ultimos-pedidos.component.html',
  styleUrls: ['./ultimos-pedidos.component.css']
})
export class UltimosPedidosComponent implements OnInit {

  private dataIni: Date;
  private dataFim: Date;
  public lista: Pedido[] = [];
  public total: number = 0;
  public totalPago: number = 0;
  public totalCancelado: number = 0;
  public totalNovo: number = 0;
  private filtroDTO: FiltroPedidoDTO;
  constructor(private service: PedidoService) {
    this.total = 0;
    this.totalCancelado = 0;
    this.totalPago = 0;
    this.totalNovo = 0;
    this.filtroDTO = new FiltroPedidoDTO();
    this.dataIni = new Date();
    this.filtroDTO.dataInicio = moment(this.dataIni).subtract(20, 'days').format("yyyy-MM-DD");
    this.filtroDTO.dataFim = moment(this.dataFim).format("yyyy-MM-DD");
    this.filtroDTO.cancelado = 0;
    this.filtroDTO.pago = 0;
    this.filtroDTO.entregue = 0;
    console.log(this.filtroDTO);
    this.service.getAllPedidos(this.filtroDTO).subscribe(
      (res: Pedido[]) => {
        this.lista = res
        this.lista.forEach(item => {
          this.total += item.valorTotal;
          if (item.status == 0) this.totalNovo += item.valorTotal;
          else if (item.status == 1 || item.status == 2) this.totalPago += item.valorTotal;
          else if(item.status == 3)this.totalCancelado +=item.valorTotal;
          console.log(item.status)
        })
      }
    )
  }




  ngOnInit() {
    this.recuperarPedidos();
    setInterval(() => this.recuperarPedidos(), 60000)
  }

  public recuperarPedidos() {

  }


}
