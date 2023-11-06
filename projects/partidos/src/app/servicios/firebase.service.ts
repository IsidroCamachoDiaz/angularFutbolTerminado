import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, doc, setDoc } from '@angular/fire/firestore';
import { Partido } from '../modelo/partido';
import { Observable } from 'rxjs/internal/Observable';

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
}
