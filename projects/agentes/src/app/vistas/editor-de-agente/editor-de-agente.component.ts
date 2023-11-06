import { Component } from '@angular/core';
import { AgentesService } from '../../servicios/agentes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Agente } from 'projects/agentes/src/app/modelos/agente';

@Component({
  selector: 'app-editor-de-agente',
  templateUrl: './editor-de-agente.component.html',
  styleUrls: ['./editor-de-agente.component.css']
})
export class EditorDeAgenteComponent {
constructor(private agentesService:AgentesService,private ruta:ActivatedRoute
  ){}
  agente:Agente={id:0,email:"",first_name:"",last_name:"",avatar:""};
  idAgente!:number|null;

ngOnInit(){
  //Carga el formulario del agente si hay id con los datos del agente
  //seleccionado (a traves de la ruta)
  if(this.ruta.snapshot.paramMap.get("id")){
    this.idAgente =parseInt(this.ruta.snapshot.paramMap.get("id")!);
    this.agentesService.getByAgente(this.idAgente).subscribe(res=>this.agente=res.data);
  }
  else{
    //No hay id en la ruta, entonces es un nuevo agente

  }
  
  
}

}
