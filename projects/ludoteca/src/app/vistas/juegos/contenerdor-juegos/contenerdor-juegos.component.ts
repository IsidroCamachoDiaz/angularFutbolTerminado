import { Component, OnInit } from '@angular/core';
import { ServicioFirebaseService } from '../../../servicios/servicio-firebase.service';
import { Juego } from '../../../modelo/juegos';

@Component({
  selector: 'app-contenerdor-juegos',
  templateUrl: './contenerdor-juegos.component.html',
  styleUrls: ['./contenerdor-juegos.component.css']
})
export class ContenerdorJuegosComponent implements OnInit{
  constructor(private fbs:ServicioFirebaseService){}

  juegos:Juego[]=[];
  j:Juego={id:"",titulo:"",precioAlquiler:0,fotoJuego:"",genero:""};

  ngOnInit(): void {
   this.fbs.getJuegos().subscribe(data =>this.juegos=data);
  }
  eliminarJuego(j:Juego){
    this.fbs.deleteJuego(j);
  }
}
