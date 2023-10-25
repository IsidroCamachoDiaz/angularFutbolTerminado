import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ServicioPartidosService } from './servicios/servicio-partidos.service';
import { Partido } from './modelo/partido';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'partidos';
  constructor(public sp: ServicioPartidosService) { }
  partidos = this.sp.getPartidos();
  cambio:boolean=false;
  partido: Partido = {
    nombreLocal: "",
    nombreVisitante: "",
    golesLocal: 0,
    golesVisitante: 0
  };
  indice: number = 0;
  partidoActivo(partido: Partido) {
    this.partido = partido;
  };
  indiceActivo(indice: number) {
    this.indice = indice;
  }
  actualizarPartidos(): void {  
    if (this.partido.nombreLocal == "" || this.partido.nombreVisitante == "")
      alert("No guardo ningun partido")
    else {
      this.sp.setPartidos(this.partidos);
      this.cambio=true;
      this.partidos[this.indice] = this.partido;
      console.log("cambio" + this.partido.golesLocal + this.partido.golesVisitante + this.partido.nombreLocal + this.partido.nombreVisitante)
    }
  }
}

