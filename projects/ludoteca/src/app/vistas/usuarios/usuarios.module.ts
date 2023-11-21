import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { ContenerdorUsuariosComponent } from './contenerdor-usuarios/contenerdor-usuarios.component';
import { ContenedorGeneralUsuariosComponent } from './contenedor-general-usuarios/contenedor-general-usuarios.component';
import { EditorUsuarioComponent } from './editor-usuario/editor-usuario.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContenerdorUsuariosComponent,
    ContenedorGeneralUsuariosComponent,
    EditorUsuarioComponent 
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    FormsModule
  ]
})
export class UsuariosModule { }
