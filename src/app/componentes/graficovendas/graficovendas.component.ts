import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import * as moment from 'moment';
import { VendasPorDataDTO } from 'src/app/model/VendasPorDataTO';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-graficovendas',
  templateUrl: './graficovendas.component.html',
  styleUrls: ['./graficovendas.component.css']
})
export class GraficovendasComponent implements OnInit {

 public totais:VendasPorDataDTO[] = [];
 public total : number = 0; 
 public canvas : any;
 

 public chart : Chart;
 public labels : string[] = [];
 public data : number[] = []


  constructor(private service :PedidoService) {
    
    
   }

   public recuperarGrafico(){
    let dataFim:string = moment().format("yyyy-MM-DD")
    let dataIni:string = moment().subtract(7,'days').format("yyyy-MM-DD");
   

    this.service.recuperaTotaisDaSemana(dataIni,dataFim).subscribe(
      (res:VendasPorDataDTO[])=>{
       
        this.total =0;
        

        while(this.totais.length){
          this.totais.pop();
        }

        while(this.totais.length){
          this.data.pop();
        }

        while (this.labels.length) {
          this.labels.pop();
        }

        this.totais = res;

        
        this.totais.forEach(elem =>{
          this.total += elem.total;
          this.data.push(elem.total);
          this.labels.push(moment(elem.data).format("DD/MM/yyyy"));
          
        });

        this.chart.update();
    
        
      }
    )
   }
   public gerarGrafico(){

 

    this.canvas = document.getElementById("meugrafico");
    this.chart = new Chart(this.canvas.getContext('2d'),
      {
        type:'bar',
        data:{
          labels : this.labels,
          datasets:[{
            label:'Volume de Vendas',
            data:this.data,
            backgroundColor: [
              'rgba(255, 0,0)'
            ],
            borderColor :[
              'rgba(255, 99, 132, 0.2)'
            ]
          }]
        },
        options : {
          responsive : true,
          scales:{
            yAxis:{
              beginAtZero:true
            }
          }
        }
      });

   }

  ngOnInit() {
    setInterval(()=>this.recuperarGrafico(), 60000);
    this.gerarGrafico();
    this.recuperarGrafico();
  }

}
