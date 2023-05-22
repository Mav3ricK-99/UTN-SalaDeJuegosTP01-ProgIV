import { Injectable } from '@angular/core';
import { CollectionReference, DocumentData, Firestore, addDoc, collection, collectionData, deleteDoc, doc, getDoc, setDoc } from '@angular/fire/firestore';
import { Usuario } from 'src/app/classes/usuario';
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable()

export class UsuarioService {

  usuariosCollection: CollectionReference<DocumentData>;

  public usuarioIngresado: Usuario | undefined;

  constructor(private firestore: Firestore, private afAuth: AngularFireAuth) {
    this.usuariosCollection = collection(this.firestore, 'usuarios');

    this.afAuth.onAuthStateChanged((user) => {
      if (user && !this.usuarioIngresado) {
        localStorage.setItem('usuarioIngresado', 'true');
        this.traerUsuario(user.uid).then(doc => {
          if (doc.exists()) {
            let data = doc.data();
            data['email'] = user?.email;
            data['uid'] = user?.uid;
            data['lastLogin'] = user?.metadata.lastSignInTime;
            data['creationTime'] = user?.metadata.creationTime;
            this.usuarioIngresado = this.armarUsuario(data);

          }
        });
      }
    });
  }

  traerTodos() {
    return collectionData(this.usuariosCollection);
  }

  crearUsuario(usuario: Usuario, id: string) {
    return setDoc(doc(this.usuariosCollection, id), {
      email: usuario.getEmail(),
      nombreUsuario: usuario.getNombreUsuario(),
    });
  }

  eliminarUsuario(usuario: Usuario) {
    const documento = doc(this.firestore, `usuarios/${usuario.getId()}`);
    return deleteDoc(documento);
  }

  //console.log(this.afAuth.user.subscribe((e) => console.log(e))) Otra forma de obtener el logeado
  async traerUsuario(id: string) {
    const documento = doc(this.firestore, `usuarios/${id}`);
    return await getDoc(documento);
  }

  async ingresarUsuario(email: string, password: string) {
    const auth = getAuth();
    let errorCode: any = 0;

    await signInWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        errorCode = error.code;
      })

    return {
      errorCode: errorCode
    }
  }

  async registrarUsuario(nuevoUsuario: Usuario, password: string) {
    let error = '';
    await this.afAuth.createUserWithEmailAndPassword(nuevoUsuario.getEmail(), password).then((res) => {
      if (res.user) {
        this.crearUsuario(nuevoUsuario, res.user.uid);
      }
    }).catch(e => {
      error = e;
    })

    if (error) {
      return { error: error }
    } else {
      return nuevoUsuario;
    }
  }

  async cerrarSesionUsuario() {
    signOut(getAuth()).then(() => {
      this.usuarioIngresado = undefined;
      localStorage.setItem('usuarioIngresado', 'false');
    });
  }

  armarUsuario(data: any): Usuario {
    let usuario = new Usuario(data['uid'], data['email'], data['nombreUsuario']);
    usuario.setFechaRegistro(data['creationTime']);
    usuario.setFechaRegistro(data['lastLogin']);

    return usuario;
  }

  hayUsuarioIngresado(): boolean {
    return this.usuarioIngresado != null;
  }
}
