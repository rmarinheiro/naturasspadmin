import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { EditorcategoriaComponent } from './componentes/editorcategoria/editorcategoria.component';
import { EditorprodutosComponent } from './componentes/editorprodutos/editorprodutos.component';
import { EditorusuariosComponent } from './componentes/editorusuarios/editorusuarios.component';
import { LoginComponent } from './componentes/login/login.component';
import { PedidosComponent } from './componentes/pedidos/pedidos.component';
import { ProdutosComponent } from './componentes/produtos/produtos.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';



const routes: Routes = [
  {path: '' , component:LoginComponent},
  {path:'admin' , component:SidebarComponent},
  {path:'categorias' , component:CategoriasComponent},
  {path:'editorcategoria/:id' ,component:EditorcategoriaComponent},
  {path:'produtos',component:ProdutosComponent},
  {path:'editorproduto/:id', component:EditorprodutosComponent},
  {path:'pedidos', component:PedidosComponent},
  {path:'clientes',component:ClientesComponent},
  {path:'usuarios',component:UsuariosComponent},
  {path:'editorusuarios/:id',component:EditorusuariosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
