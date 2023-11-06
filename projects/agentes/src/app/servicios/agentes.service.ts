import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentesService {
  ruta = "https://reqres.in/api/users";

  constructor(private http: HttpClient) { };
  get(): Observable<any> {
    return this.http.get(this.ruta);
  }
  getByAgente(id: number): Observable<any> {
    return this.http.get(this.ruta + "/"+id);

  }
}
