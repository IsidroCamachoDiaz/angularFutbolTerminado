import { Component, OnInit } from '@angular/core';
import { Partido } from '../../../modelo/partido';
import { FirebaseService } from '../../../servicios/firebase.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit{
  partidos:Partido[]=[];
  constructor(private fbs:FirebaseService){}

  ngOnInit(): void {
    this.pedirJornada(1);
  }

  pedirJornada(numJ:number){
    this.fbs.getPartidoByOther("jornada",numJ).subscribe(res=>{
      this.partidos = res;console.log(res);})
  }
}
