import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public navegar : number
  public mode : number;
  constructor(private route:Router) { }

  
  ngOnInit() {
  }

  public navegarSideBar(numero:number){
      if(numero ==1){
        this.navegar = 1;
      }
      if(numero == 2){
        this.navegar = 2;
      }
      if(numero == 3){
        this.navegar = 3;
        this.route.navigate['/produtos']
      }
      if(numero == 4){
        this.navegar = 4;
        this.route.navigate['/editorproduto/new']
        
      }
      if(numero == 5){
        this.navegar = 5;
        this.route.navigate['/editorproduto/new']
        
      }
      if(numero == 6){
        this.navegar = 6;
        
      }
      if(numero == 8){
        this.navegar = 8;
        
      }

      if(numero == 9){
        this.navegar = 9;
        this.mode == 0;
        
      }
      if(numero == 10){
        this.navegar = 10;
      }
      //console.log(numero);
      console.log(this.navegar);
  }

 
  


}
