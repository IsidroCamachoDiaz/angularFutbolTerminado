import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegosRoutingModule } from './juegos-routing.module';
import { ContenedorGeneralJuegosComponent } from './contenedor-general-juegos/contenedor-general-juegos.component';
import { DetalleJuegoComponent } from './detalle-juego/detalle-juego.component';
import { ContenerdorJuegosComponent } from './contenerdor-juegos/contenerdor-juegos.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContenedorGeneralJuegosComponent,
    DetalleJuegoComponent,
    ContenerdorJuegosComponent
  ],
  imports: [
    CommonModule,
    JuegosRoutingModule,
    FormsModule
  ]
})
export class JuegosModule { }
