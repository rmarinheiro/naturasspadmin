import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SubjectSubscriber } from 'rxjs/internal/Subject';
import { Usuario } from 'src/app/model/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-editorusuarios',
  templateUrl: './editorusuarios.component.html',
  styleUrls: ['./editorusuarios.component.css']
})
export class EditorusuariosComponent implements OnInit {

  public senhasiguais = true;
  public usuario:Usuario;
  public senha:string;
  public msgResultado: string;
  public sucessoGravar:boolean;
  public mode: number

  constructor(private service:UsuarioService,private router:Router,private activate:ActivatedRoute) { 
    this.usuario = new Usuario();
    this.usuario.id_usuario = 0;
    this.usuario.email = " ";
    this.usuario.username = " ";
    this.sucessoGravar = false;
    this.mode = 0;
    
    
    let idUser = this.activate.snapshot.params['id']; 
    console.log("Mode antes do recupera " + this.mode)
    console.log(idUser);
    if(idUser != "new" && idUser != undefined){
      this.mode = 1;
       this.service.recuperarPeloId(idUser).subscribe(
         (res:Usuario) =>{
           this.usuario = res;
         }
       )
    }else{
      this.mode == 0;
    }
  }

  ngOnInit() {   
  }

  public sugereUsername(){
    let arroba = (this.usuario.email.indexOf("@")>0)?this.usuario.email.indexOf("@"):this.usuario.email.length;
    this.usuario.username = this.usuario.email.substr(0,this.usuario.email.indexOf("@"));

  
  }

  public confereSenha(){

    if(this.senha == this.usuario.senha){
      this.senhasiguais = true;
    }else{
      this.senhasiguais=false;
    }

  }

  public atualizarUsuario(){
   if(this.usuario.id_usuario == 0){
     
     this.service.adicionarNovoUsuario(this.usuario).subscribe(
       (res:Usuario) =>{
         this.msgResultado = "Usuario adicionado com Sucesso";
         document.getElementById("btnModal").click();
         this.sucessoGravar = true;
      },
       (err:any)=>{
         this.msgResultado="Erro ao incluir o Usuário"
         document.getElementById("btnModal").click();
        }
     );
   }
   else{//atualizar usuario existente
      this.service.atualizarUsuario(this.usuario).subscribe(
        (res:Usuario)=>{
          this.msgResultado = "Usuario atualizado com Sucesso";
          document.getElementById("btnModal").click();
          this.sucessoGravar = true;
        },
        (err:any)=>{
          this.msgResultado = "Erro na Atualização de Usuario";
          document.getElementById("btnModal").click();
        }
      )
   }
  
  }

  public voltarOuFicar(){
      if(this.sucessoGravar){
        this.router.navigate(['/admin']);
      }else{
        this.router.navigate(['/admin']);
      }
  }

}
