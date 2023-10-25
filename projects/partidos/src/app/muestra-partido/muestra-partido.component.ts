import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Partido } from '../modelo/partido';

@Component({
  selector: 'app-muestra-partido',
  templateUrl: './muestra-partido.component.html',
  styleUrls: ['./muestra-partido.component.css']
})
export class MuestraPartidoComponent {
@Input() partido?:Partido;
@Input() indice:number=0;

@Output() emitePartido= new EventEmitter<Partido>();
@Output() emiteIndice= new EventEmitter<number>();
cambiarPartido(partido:Partido,i:number){
  this.emitePartido.emit(partido);
  this.emiteIndice.emit(i);
}
}
