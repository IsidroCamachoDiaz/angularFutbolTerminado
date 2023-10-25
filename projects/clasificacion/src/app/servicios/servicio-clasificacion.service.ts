import { Injectable } from '@angular/core';
import { Equipo } from '../modelo/equipo';
import { EQUIPOS } from '../modelo/listaEquipos'

@Injectable({
  providedIn: 'root'
})
export class ServicioClasificacionService {

  constructor() { }

   getEquipos():Equipo[]{
    return EQUIPOS;
   }
}
