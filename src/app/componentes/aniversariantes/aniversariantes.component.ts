import { Component, OnInit } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import { Cliente } from 'src/app/model/Cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-aniversariantes',
  templateUrl: './aniversariantes.component.html',
  styleUrls: ['./aniversariantes.component.css']
})
export class AniversariantesComponent implements OnInit {

  private dataHoje:Date;
  public lista : Cliente[] = [];
  constructor(private cliService:ClientesService) { 
    this.dataHoje = new Date();
    let mes = this.dataHoje.getMonth() + 1;
    this.aniv(mes);

    
    

  }

  ngOnInit() {
  }

  public  aniv(mes:number):void{
    this.cliService.buscarAniversariantes(mes).subscribe(
      (res:Cliente[])=>{this.lista = res}
    );
  }

}
