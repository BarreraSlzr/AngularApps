import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Mensaje } from '../interfaces/mensaje.interfaces';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable()
export class ChatService {

  provedores: string[] = [
    "Google",
    "Twitter"
  ];

  usuario: any = null;
  chats: FirebaseListObservable<any[]>;
  user: Observable<firebase.User>;

  constructor(
    private db: AngularFireDatabase,
    public afAuth: AngularFireAuth ){
      this.user = afAuth.authState;
      this.checkSesion();
  }

  cargarMensajes( ){
    this.chats = this.db.list( '/chats',{
      query: {
        limitToLast: 20,
        orderByey: true
      }
    });
    return this.chats;
  }
  agregarMensaje( text: string ){
    let mensaje: Mensaje = {
      nombre: this.usuario.displayName,
      mensaje: text,
      uid: this.usuario.uid
    }

    return this.chats.push( mensaje );
  }

  checkSesion(): boolean{
    if( localStorage.getItem('usuario') ){
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
      console.log( this.usuario );
      console.log( this.user );
      return true;
    } else {
      this.usuario = null;
      return false;
    }
  }

  login( nombreProveedor:string ){
    let provedorElegido: firebase.auth.AuthProvider;

    if ( nombreProveedor == this.provedores[0] ) {
      provedorElegido = new firebase.auth.GoogleAuthProvider;
    } else if( nombreProveedor = this.provedores[1]){
      provedorElegido = new firebase.auth.TwitterAuthProvider;
    }

    this.afAuth.auth.signInWithPopup( provedorElegido )
      .then(
        result => {
          this.usuario = result.user
          localStorage.setItem( 'usuario', JSON.stringify( result.user ) )
        }
      );
  }

  logout(){
    this.afAuth.auth.signOut();
    localStorage.removeItem('usuario');
    this.usuario = null;
  }
}
