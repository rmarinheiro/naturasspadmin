import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JWTToken } from 'src/app/model/JWTToken';
import { Usuario } from 'src/app/model/Usuario';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario : Usuario;

  constructor(private router:Router,private service:LoginService) { 
    this.usuario = new Usuario();
  }

  public autenticar(){
    this.service.logarUsuario(this.usuario)
    .subscribe(
      (res:JWTToken) => {
        localStorage.setItem("LTRTk", res.token);
        this.router.navigate(["/admin"]);
      },
      (err)=>{console.log("Deu ruim no login");}
    )
  }

  ngOnInit() {
  }

}
