import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Mensaje } from '../interface/mensaje.interface';
import { map } from 'rxjs/operators';

import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  public chats: Mensaje[] = [];
  public usuario: any = {};

  constructor( private afs: AngularFirestore,
              public auth: AngularFireAuth ) {

                this.auth.authState.subscribe( user => {

                  if (!user) {
                    return;
                  }

                  this.usuario.nombre = user.displayName;
                  this.usuario.uid = user.uid;
                  this.usuario.correo = user.email;
                })
  }





  login( pltform: string) {

    if (pltform === 'google') {
      this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }else{
      this.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
    }

  }

  logout() {
    this.auth.signOut();
    this.usuario = {};
  }






  cargarMensajes(){

    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref => ref.orderBy('fecha', 'desc')
                                                                            .limit(5));

    return this.itemsCollection.valueChanges()
                              .pipe(
                                map( (mensajes: Mensaje[]) =>{

                                  this.chats = [];
                                  for( let mensaje of mensajes){
                                    this.chats.unshift(mensaje);
                                  }
                                })
                              );
  }





  agregarMensajes( texto: string){


    let mensaje: Mensaje = {
      nombre: this.usuario.nombre,
      mensaje: texto,
      fecha: new Date().getTime(),
      uid:  this.usuario.uid
    }

    return this.itemsCollection.add( mensaje );
  }

}
