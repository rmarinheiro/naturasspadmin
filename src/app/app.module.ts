import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { EditorcategoriaComponent } from './componentes/editorcategoria/editorcategoria.component';
import { ProdutosComponent } from './componentes/produtos/produtos.component';
import { EditorprodutosComponent } from './componentes/editorprodutos/editorprodutos.component';
import { PedidosComponent } from './componentes/pedidos/pedidos.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { EditorusuariosComponent } from './componentes/editorusuarios/editorusuarios.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { GraficovendasComponent } from './componentes/graficovendas/graficovendas.component';
import { UltimosPedidosComponent } from './componentes/ultimos-pedidos/ultimos-pedidos.component';
import { AniversariantesComponent } from './componentes/aniversariantes/aniversariantes.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    CategoriasComponent,
    EditorcategoriaComponent,
    ProdutosComponent,
    EditorprodutosComponent,
    PedidosComponent,
    ClientesComponent,
    UsuariosComponent,
    EditorusuariosComponent,
    DashboardComponent,
    GraficovendasComponent,
    UltimosPedidosComponent,
    AniversariantesComponent,
	 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
