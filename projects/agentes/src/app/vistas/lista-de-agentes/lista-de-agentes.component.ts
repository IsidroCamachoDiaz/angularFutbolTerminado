import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AgentesService } from '../../servicios/agentes.service';

@Component({
  selector: 'app-lista-de-agentes',
  templateUrl: './lista-de-agentes.component.html',
  styleUrls: ['./lista-de-agentes.component.css']
})
export class ListaDeAgentesComponent {
  usuarios:any;
  constructor(private agentesService:AgentesService){}
  ngOnInit(){
    this.agentesService.get().subscribe(data =>this.usuarios=data);
  }
  
  
}
