import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-editorcategoria',
  templateUrl: './editorcategoria.component.html',
  styleUrls: ['./editorcategoria.component.css']
})
export class EditorcategoriaComponent implements OnInit {

  public categoria: Categoria;
  public mode: number; //modo 0 = post modo 1=put
  public navegar : number;

  constructor(private activateRouter: ActivatedRoute, private service: CategoriaService, private router: Router) {
    this.categoria = new Categoria()
    let id = this.activateRouter.snapshot.params['id']
    if (id == undefined) {
      id = "new";
    }
    if (id === "new") {
      this.mode = 0;
    } else {
      this.mode = 1;
      this.navegar = 7;
      this.service.getById(id).subscribe(
        (res: Categoria) => { this.categoria = res; },
        (err) => {
          console.log("status do erro = " + err.status)
          if (err.status == 404) {

          } else {
            //reforçar a segurança
            localStorage.removeItem("LTRTk");
            this.router.navigate(['#']);
          }
        }
      )
    }
    //console.log("Recebi no link " + id);
  }

  ngOnInit() {
    this.categoria = new Categoria();
  }

  public incluirNovaCategoria() {
    if (this.mode == 0) {
      return this.service.incluirNovaCategoria(this.categoria).subscribe(
        (res: Categoria) => {
          alert("Categoria cadastrada com sucesso")
          this.router.navigate(['admin']);
        }, (err) => {
          if (err.status == 400) {
            alert("valores invalidos")
          } else {
            localStorage.removeItem("LTRTk");
          }
        }
      )
    } else {
      return this.service.atualizarCategoria(this.categoria).subscribe(
        (res: Categoria) => {
          alert("Categoria atualizada com sucesso")
          this.router.navigate(['admin']);
        }, (err) => {
          if (err.status == 400) {
            alert("valores invalidos")
          } else {
            localStorage.removeItem("LTRTk");
          }
        }
      )
    }
  }

}


