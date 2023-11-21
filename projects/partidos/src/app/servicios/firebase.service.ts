import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, doc, setDoc, updateDoc } from '@angular/fire/firestore';
import { Partido } from '../modelo/partido';
import { Observable } from 'rxjs/internal/Observable';
import { deleteDoc, query, where } from 'firebase/firestore/lite';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private fb:Firestore) { }

  setPartido(p:Partido){
    const partidoRef=collection(this.fb,`partidos`);
    return addDoc(partidoRef,p);
  }
  getPartidos():Observable<Partido[]>{
    const partidosRef=collection(this.fb,"partidos");
    return collectionData(partidosRef,{idField:"id"}) as Observable <Partido[]>
  }
  updatePartido(p:Partido, id: string) {
    const pRef = doc(this.fb, `partidos/${p.id}`);
    return updateDoc(pRef, {nombreLocal:p.nombreLocal,nomberVisitante:p.nombreVisitante,golesLocal:p.golesLocal,golesVisitante:p.golesVisitante,grupo:p.grupo,jornada:p.jornada});
  }

  deletePartido(p:Partido){
    const pRef = doc(this.fb, `partidos/${p.id}`);
    return deleteDoc(pRef);
  }

  getPartidoByOther(campo: string, valor: any){
    const collectionRef = collection(this.fb, 'partidos');
    const queryRef = query(collectionRef, where(campo, '==', valor));
    return collectionData(queryRef) as Observable<Partido[]>;
  }

}
