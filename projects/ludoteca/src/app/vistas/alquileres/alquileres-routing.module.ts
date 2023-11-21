import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenedorAlquileresComponent } from './contenedor-alquileres/contenedor-alquileres.component';
import { EditorAlquileresComponent } from './editor-alquileres/editor-alquileres.component';
import { ContenedorGeneralAlquileresComponent } from './contenedor-general-alquileres/contenedor-general-alquileres.component';

const routes: Routes = [
  {path:"",component:ContenedorGeneralAlquileresComponent,children:[
  {path:"editor-alquiler/:id",component:EditorAlquileresComponent},
  {path:"nuevoAlquiler",component:EditorAlquileresComponent},
  {path:"listado",component:ContenedorAlquileresComponent}]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlquileresRoutingModule { }
