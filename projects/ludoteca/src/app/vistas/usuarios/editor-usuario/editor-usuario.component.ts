import { Component } from '@angular/core';
import { ServicioFirebaseService } from '../../../servicios/servicio-firebase.service';
import { Usuario } from '../../../modelo/usuarios';
import { NgbAccordionItem } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editor-usuario',
  templateUrl: './editor-usuario.component.html',
  styleUrls: ['./editor-usuario.component.css']
})
export class EditorUsuarioComponent {
constructor(private fbs:ServicioFirebaseService,private ruta:ActivatedRoute){}
usuario:Usuario={id:"",nombre:"",saldo:0,estaBloqueado:false,puntos:0};
id!:string;
registrado:boolean=false;
ngOnInit(){
  if(this.ruta.snapshot.paramMap.get("id")){
    this.id =this.ruta.snapshot.paramMap.get("id")!;
    this.fbs.getUsuarioById(this.id).subscribe(res => this.usuario=res);
  }
}
actualizarUsuario(usuario:Usuario,id:string){
  this.fbs.updateUsuario(usuario,id);
}
meterUsuario(usuario:Usuario){
  this.fbs.setUsuario(usuario);
  this.registrado=true;
}
}
