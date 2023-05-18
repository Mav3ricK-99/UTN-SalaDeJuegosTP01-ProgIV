import { Injectable } from '@angular/core';
import { CollectionReference, DocumentData, Firestore, addDoc, collection, collectionData, limit, orderBy, query } from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';
import { Chat } from 'src/app/classes/chat/chat';
import { Usuario } from 'src/app/classes/usuario';
import { UsuarioService } from '../Usuario/usuario.service';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private chatsCollection: CollectionReference<DocumentData>;

  chats$: Observable<Chat[]>;

  constructor(usuariosService: UsuarioService, private firestore: Firestore) {
    this.chatsCollection = collection(this.firestore, 'chats');
    const appQuery = query(this.chatsCollection, orderBy('fechaMensaje', 'asc'), limit(30));

    this.chats$ = collectionData(appQuery).pipe(map(collection => {
      return collection.map(c => {
        let chat = new Chat(c['uid'], c['mensaje'], c['fechaMensaje']);
        usuariosService.traerUsuario(c['user_id']).then(respuesta => {
          if (respuesta.exists()) {
            let usuario = new Usuario();
            usuario.setNombreUsuario(respuesta.data()['nombreUsuario']);
            chat.setUsuario(usuario);
          }
        });
        return chat;
      });
    }));
  }

  agregarChat(chat: Chat) {
    return addDoc(this.chatsCollection, {
      mensaje: chat.getMensaje(),
      fechaMensaje: chat.getFechaMensaje(),
      user_id: chat.getUsuario()?.getId(),
    });
  }

  public getChats(): Observable<Chat[]> {
    return this.chats$;
  }

}
