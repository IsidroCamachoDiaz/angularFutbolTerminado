import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenedorPartidosComponent } from './vistas/contenedor-partidos/contenedor-partidos.component';
import { ListadoComponent } from './vistas/contenedor-partidos/listado/listado.component';
import { DetalleComponent } from './vistas/contenedor-partidos/detalle/detalle.component';
import { MenuComponent } from './vistas/menu/menu.component';

const routes: Routes = [
{path:"partidos",component:ContenedorPartidosComponent,children:[
  {path:"listado",component:ListadoComponent},
  {path:"detalle/:id",component:DetalleComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
