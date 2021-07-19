import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  public recuperarTodos() {
    let token = localStorage.getItem("LTRTk");
    token = localStorage.getItem("LTRTk")

    let header = {
      'Authorization': token
    }
    return this.http.get("http://localhost:8080/login/usuarios", { headers: header });

  }

  public atualizarUsuario(usuario:Usuario){
    let token = localStorage.getItem("LTRTk");
    token = localStorage.getItem("LTRTk")

    let header = {
      'Authorization': token
    }
    return this.http.put("http://localhost:8080/login/usuarios/" + usuario.id_usuario,usuario,{ headers:header })

  }

  public adicionarNovoUsuario(usuario:Usuario){
    let token = localStorage.getItem("LTRTk");
    token = localStorage.getItem("LTRTk")

    let header = {
      'Authorization': token
    }

    return this.http.post("http://localhost:8080/login/usuarios", usuario , {headers:header});

  }

  public recuperarPeloId(id:number){
    let token = localStorage.getItem("LTRTk");
    token = localStorage.getItem("LTRTk")

    let header = {
      'Authorization': token
    }

    return this.http.get("http://localhost:8080/login/usuarios/"+id , {headers:header});


  }
 
}


