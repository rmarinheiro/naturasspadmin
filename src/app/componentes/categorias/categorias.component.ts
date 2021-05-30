import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';
import { Categoria } from 'src/app/model/Categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  public lista: Categoria[];

  
  constructor(private service: CategoriaService, private route: Router) { }
  

  ngOnInit(): void {
  
    if (!localStorage.getItem("LTRTk")) {
      this.route.navigate(['/']);
    }

    this.service.getAllCategoriasById().subscribe(
      (res: Categoria[]) => {
        this.lista = res;

      }, (err) => {
        if(err.status == 403){
          this.route.navigate[''] 
        }
      
      }
    )

  }


 

}
