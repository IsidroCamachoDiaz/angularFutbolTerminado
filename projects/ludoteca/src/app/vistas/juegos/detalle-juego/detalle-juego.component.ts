import { Component } from '@angular/core';
import { Juego } from '../../../modelo/juegos';
import { ServicioFirebaseService } from '../../../servicios/servicio-firebase.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-juego',
  templateUrl: './detalle-juego.component.html',
  styleUrls: ['./detalle-juego.component.css']
})
export class DetalleJuegoComponent {
  j:Juego={id:"",titulo:"Nuevo Juego",precioAlquiler:0,fotoJuego:"",genero:""};
  id="";
  anadido:boolean=false;
  modificado:boolean=false;
  constructor(private fbs: ServicioFirebaseService,public ruta:ActivatedRoute) { }
  ngOnInit(){

    if(this.ruta.snapshot.paramMap.get("id")){
      this.id =this.ruta.snapshot.paramMap.get("id")!;
      this.fbs.getJuegoById(this.id).subscribe(res => this.j=res);
    }
  }

  actualizarJuego(j:Juego,id:string){
    this.fbs.updateJuego(j,id);
    this.modificado=true;
  }
  meterJuego(j:Juego){
    this.fbs.setJuego(j);
    this.anadido=true;
  }
}
