import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaDeAgentesComponent } from './vistas/lista-de-agentes/lista-de-agentes.component';
import { EditorDeAgenteComponent } from './vistas/editor-de-agente/editor-de-agente.component';

const routes: Routes = [
  {path:"",component:ListaDeAgentesComponent},
  {path:"edicion/:id",component:EditorDeAgenteComponent},
  {path:"nuevo",component:EditorDeAgenteComponent},
  {path:"**",redirectTo:"",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
