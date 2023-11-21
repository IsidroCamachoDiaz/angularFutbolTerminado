import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlquileresRoutingModule } from './alquileres-routing.module';
import { ContenedorAlquileresComponent } from './contenedor-alquileres/contenedor-alquileres.component';
import { EditorAlquileresComponent } from './editor-alquileres/editor-alquileres.component';
import { ContenedorGeneralAlquileresComponent } from './contenedor-general-alquileres/contenedor-general-alquileres.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  //Se añade componentes
  declarations: [
    ContenedorAlquileresComponent,
    EditorAlquileresComponent,
    ContenedorGeneralAlquileresComponent
  ],
  imports: [
    CommonModule,
    AlquileresRoutingModule,
    FormsModule
  ]
})
export class AlquileresModule { }
