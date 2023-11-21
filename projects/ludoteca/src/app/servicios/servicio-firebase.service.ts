import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, docData, updateDoc } from '@angular/fire/firestore';
import { Juego } from '../modelo/juegos';
import { Observable } from 'rxjs';
import { Usuario } from '../modelo/usuarios';
import { Alquiler } from '../modelo/alquiler';

@Injectable({
  providedIn: 'root'
})
export class ServicioFirebaseService {

  constructor(private fb:Firestore) { }

  setJuego(j:Juego){
    const juegoRef=collection(this.fb,`juegos`);
    return addDoc(juegoRef,j);
  }
  getJuegoById(id:string){
    const partidoRef = doc(this.fb, `juegos/${id}`);
    return docData(partidoRef, {idField: 'id'}) as Observable<Juego>;
  }
  
  getJuegos():Observable<Juego[]>{
    const juegosRef=collection(this.fb,"juegos");
    return collectionData(juegosRef,{idField:"id"}) as Observable <Juego[]>
  }
  updateJuego(j:Juego,id:string){
    const pRef = doc(this.fb, `juegos/${j.id}`);
    return updateDoc(pRef, {titulo:j.titulo,genero:j.genero,fotoJuego:j.fotoJuego,precioAlquiler:j.precioAlquiler});
  }
  deleteJuego(j:Juego){
    const jDocRef = doc(this.fb, `juegos/${j.id}`);
    return deleteDoc(jDocRef);
  }
  setUsuario(u:Usuario){
    const juegoRef=collection(this.fb,`usuarios`);
    return addDoc(juegoRef,u);
  }
  getUsuarios():Observable<Usuario[]>{
    const usuariosRef=collection(this.fb,"usuarios");
    return collectionData(usuariosRef,{idField:"id"}) as Observable <Usuario[]>
  }
  getUsuarioById(id:string){
    const uRef = doc(this.fb, `usuarios/${id}`);
    return docData(uRef, {idField: 'id'}) as Observable<Usuario>;
  }
  updateUsuario(u:Usuario,id:string){
    const pRef = doc(this.fb, `usuarios/${u.id}`);
    return updateDoc(pRef, {nombre:u.nombre,estaBloqueado:u.estaBloqueado,saldo:u.saldo,puntos:u.puntos,imagen:u.imagen});
  }
  deleteUsuario(u:Usuario){
    const uDocRef = doc(this.fb, `usuarios/${u.id}`);
    return deleteDoc(uDocRef);
  }
  setAlquiler(a:Alquiler){
    const aRef=collection(this.fb,'alquileres');
    return addDoc(aRef,a);
  }
  getAlquilerById(id:string){
    const aRef = doc(this.fb, `alquileres/${id}`);
    return docData(aRef, {idField: 'id'}) as Observable<Alquiler>;
  }
  getAlquileres():Observable<Alquiler[]>{
    const aRef=collection(this.fb,"alquileres");
    return collectionData(aRef,{idField:"id"}) as Observable <Alquiler[]>
  }
  updateAlquiler(a:Alquiler){
    const aRef = doc(this.fb, `alquileres/${a.id}`);
    return updateDoc(aRef, {usuarioAlquiler:a.usuarioAlquiler,juegoAlquiler:a.juegoAlquiler,fechaEntrega:a.fechaEntrega});
  }
  deleteAlquiler(a:Alquiler){
    const aDocRef = doc(this.fb, `alquileres/${a.id}`);
    return deleteDoc(aDocRef);
  }
}
