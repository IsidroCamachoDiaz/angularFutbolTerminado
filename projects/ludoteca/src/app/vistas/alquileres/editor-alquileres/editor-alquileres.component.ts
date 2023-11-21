import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioFirebaseService } from '../../../servicios/servicio-firebase.service';
import { Alquiler } from '../../../modelo/alquiler';
import { Juego } from '../../../modelo/juegos';
import { Usuario } from '../../../modelo/usuarios';

@Component({
  selector: 'app-editor-alquileres',
  templateUrl: './editor-alquileres.component.html',
  styleUrls: ['./editor-alquileres.component.css']
})
export class EditorAlquileresComponent {
  id!:string;
  juego:Juego={titulo:"",precioAlquiler:0,fotoJuego:"",genero:""};
  usuario:Usuario={nombre:"",saldo:0,estaBloqueado:false,puntos:0};
  alquiler:Alquiler={usuarioAlquiler:this.usuario,juegoAlquiler:this.juego,fechaEntrega:""};
  juegos:Juego[]=[];
  usuarios:Usuario[]=[];

  constructor(private fbs: ServicioFirebaseService,public ruta:ActivatedRoute) { }
  
  ngOnInit(){
    if(this.ruta.snapshot.paramMap.get("id")){
      this.id =this.ruta.snapshot.paramMap.get("id")!;
      this.fbs.getAlquilerById(this.id).subscribe(res => this.alquiler=res);
    }
    
    this.fbs.getJuegos().subscribe(data=>this.juegos=data);
    this.fbs.getUsuarios().subscribe(data=>this.usuarios=data);
  }

  actualizarAlquiler(alquiler:Alquiler){
    console.log(alquiler);
    this.fbs.updateAlquiler(alquiler);
  }
  meterAlquiler(alquiler:Alquiler){
    if(alquiler.usuarioAlquiler.estaBloqueado==true)
      alert("Este Usuario etsa bloqueado y no puedo alquilar juegos")
    else
      this.fbs.setAlquiler(alquiler);
  }
}
