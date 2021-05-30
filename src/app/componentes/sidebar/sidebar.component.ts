import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public navegar : number
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
      //console.log(numero);
      console.log(this.navegar);
  }

 
  


}
