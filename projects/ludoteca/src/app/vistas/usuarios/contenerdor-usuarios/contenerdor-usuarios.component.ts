import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../modelo/usuarios';
import { ServicioFirebaseService } from '../../../servicios/servicio-firebase.service';

@Component({
  selector: 'app-contenerdor-usuarios',
  templateUrl: './contenerdor-usuarios.component.html',
  styleUrls: ['./contenerdor-usuarios.component.css']
})
export class ContenerdorUsuariosComponent implements OnInit{
  constructor(private fbs:ServicioFirebaseService){}
  usuarios:Usuario[]=[];
  u:Usuario={nombre:"Manuel",saldo:0,estaBloqueado:false,puntos:0}
  borro:boolean=false;
  ngOnInit(): void {
    this.fbs.getUsuarios().subscribe(data=>{this.usuarios=data;})
  }
  eliminarUsuario(u:Usuario){
    this.fbs.deleteUsuario(u);
    this.borro=true;
  }
  cerrar(){
    this.borro=false;
  }

}
