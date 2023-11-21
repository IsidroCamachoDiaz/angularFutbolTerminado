import { Component } from '@angular/core';
import { FirebaseService } from '../../../servicios/firebase.service';
import { ActivatedRoute } from '@angular/router';
import { Partido } from '../../../modelo/partido';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {
  id!:string;
  partidos:Partido[]=[];
  constructor(private fbs: FirebaseService,public ruta:ActivatedRoute) { }
  ngOnInit(){
    if(this.ruta.snapshot.paramMap.get("id")){
      this.id =this.ruta.snapshot.paramMap.get("id")!;
    }
    this.fbs.getPartidos().subscribe(res => this.partidos=res);
  }

  actualizarPartido(p:Partido,id:string){
    this.fbs.updatePartido(p,id);
  }
}
