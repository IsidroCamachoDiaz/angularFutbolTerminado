import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MuestraPartidoComponent } from './muestra-partido/muestra-partido.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment.development';
import { ContenedorPartidosComponent } from './vistas/contenedor-partidos/contenedor-partidos.component';
import { ListadoComponent } from './vistas/contenedor-partidos/listado/listado.component';
import { DetalleComponent } from './vistas/contenedor-partidos/detalle/detalle.component';
import { MenuComponent } from './vistas/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MuestraPartidoComponent,
    ContenedorPartidosComponent,
    ListadoComponent,
    DetalleComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
