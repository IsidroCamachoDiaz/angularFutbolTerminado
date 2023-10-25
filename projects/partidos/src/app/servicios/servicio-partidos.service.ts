import { Injectable } from '@angular/core';
import { Partido } from '../modelo/partido';
import { PARTIDOS } from '../modelo/listadoPartidos';

@Injectable({
  providedIn: 'root'
})
export class ServicioPartidosService {

  constructor() { }
  partidos=PARTIDOS;

  getPartidos():Partido[]{
    return this.partidos;
  }
  setPartidos(partidos2:Partido[]):void{
    this.partidos=partidos2;
  }
}
