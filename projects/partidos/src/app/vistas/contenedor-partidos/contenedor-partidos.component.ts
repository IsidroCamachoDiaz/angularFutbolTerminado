import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../servicios/firebase.service';
import { Partido } from '../../modelo/partido';

@Component({
  selector: 'app-contenedor-partidos',
  templateUrl: './contenedor-partidos.component.html',
  styleUrls: ['./contenedor-partidos.component.css']
})
export class ContenedorPartidosComponent {
  title="Gestion De Partidos y Jornadas"
  constructor() { }

  //Metodo para mostrar si el servicio es capaz de guardar un partido
  /*setPartido(){
    this.fbs.setPartido(this.p)
    .then(()=>console.log("Partido Guardado"))
    .catch((error:any)=>console.log(error));
  }*/

  
}
