import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenerdorUsuariosComponent } from './contenerdor-usuarios/contenerdor-usuarios.component';
import { EditorUsuarioComponent } from './editor-usuario/editor-usuario.component';
import { ContenedorGeneralUsuariosComponent } from './contenedor-general-usuarios/contenedor-general-usuarios.component';

const routes:Routes=[
  {path:"",component:ContenedorGeneralUsuariosComponent,children:[
  {path:"detalle-usuario/:id",component:EditorUsuarioComponent},
  {path:"nuevoUsuario",component:EditorUsuarioComponent},
  {path:"listado",component:ContenerdorUsuariosComponent}]}
]

@NgModule({
  //Para rutas hijas
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class UsuariosRoutingModule { }
