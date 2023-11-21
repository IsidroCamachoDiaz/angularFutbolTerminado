import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleJuegoComponent } from './detalle-juego/detalle-juego.component';
import { ContenerdorJuegosComponent } from './contenerdor-juegos/contenerdor-juegos.component';
import { ContenedorGeneralJuegosComponent } from './contenedor-general-juegos/contenedor-general-juegos.component';

const routes: Routes = [{
  //primer contenedor
  path:"",component:ContenedorGeneralJuegosComponent,children:
  [{path:"detalle-juego/:id", component: DetalleJuegoComponent},
  {path:"nuevoJuego",component:DetalleJuegoComponent},
{path:"listado",component:ContenerdorJuegosComponent}]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
