import { Component, OnInit } from '@angular/core';
import { Alquiler } from '../../../modelo/alquiler';
import { ServicioFirebaseService } from '../../../servicios/servicio-firebase.service';
import { Juego } from '../../../modelo/juegos';
import { Usuario } from '../../../modelo/usuarios';
import { formatDate } from '@angular/common';
import { format, parse } from 'date-fns';
import { es } from 'date-fns/locale';

@Component({
  selector: 'app-contenedor-alquileres',
  templateUrl: './contenedor-alquileres.component.html',
  styleUrls: ['./contenedor-alquileres.component.css']
})
export class ContenedorAlquileresComponent implements OnInit{
  constructor(private fbs:ServicioFirebaseService){}
  alquileres:Alquiler[]=[];
  juegos:Juego[]=[];
  usuarios:Usuario[]=[];
  a!:Alquiler;
  
  ngOnInit(): void {
    this.fbs.getJuegos().subscribe(data=>{this.juegos=data;console.log(this.juegos.length);});
    this.fbs.getUsuarios().subscribe(data=>{this.usuarios=data;console.log(this.usuarios.length);});
    this.fbs.getAlquileres().subscribe(data=>this.alquileres=data);
  }
  meterAlquiler(){
    this.a={usuarioAlquiler:this.usuarios[2],juegoAlquiler:this.juegos[2],fechaEntrega:"2023-2-2"};
    this.fbs.setAlquiler(this.a);
  }
  ponerEspanol(fechaString:string){
    const fecha = parse(fechaString, 'yyyy-MM-dd', new Date());
    // Formatea la fecha en español usando date-fns 'format'
    return format(fecha, 'dd-MM-yyyy', { locale:es });
  }
  eliminarAlquiler(alquiler:Alquiler){
    this.fbs.deleteAlquiler(alquiler);
  }
}
