import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenedorAlquileresComponent } from './vistas/alquileres/contenedor-alquileres/contenedor-alquileres.component';
import { EditorAlquileresComponent } from './vistas/alquileres/editor-alquileres/editor-alquileres.component';

const routes: Routes = [
{path:"juegos",loadChildren:()=>import("./vistas/juegos/juegos.module").then(m=>m.JuegosModule) },
//importa rutas hijas
{path:"usuarios",loadChildren:()=>import("./vistas/usuarios/usuarios.module").then(m=>m.UsuariosModule)},
{path:"alquileres",loadChildren:()=>import("./vistas/alquileres/alquileres.module").then(m=>m.AlquileresModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
