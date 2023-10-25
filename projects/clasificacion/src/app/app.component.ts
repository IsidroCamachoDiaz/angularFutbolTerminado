import { Component } from '@angular/core';
import { Equipo } from './modelo/equipo';
import { ServicioClasificacionService } from './servicios/servicio-clasificacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Clasifucacion';
  constructor(public sc:ServicioClasificacionService){}
equipos:Equipo[]=this.sc.getEquipos();

}
