import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './components/util/nav/nav.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { SobreMiComponent } from './components/sobreMi/sobre-mi/sobre-mi.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './components/home/home.component';
import { ListadoJuegosComponent } from './components/juegos/listado-juegos/listado-juegos.component';
import { CardJuegoComponent } from './components/juegos/card-juego/card-juego.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from './services/Usuario/usuario.service';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { RegistroComponent } from './components/registro/registro/registro.component';
import { ChatModule } from './modules/shared/chat/chat/chat.module';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SobreMiComponent,
    HomeComponent,
    ListadoJuegosComponent,
    CardJuegoComponent,
    LoginComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    AngularFireAuthModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    ChatModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "es-ES" }, UsuarioService, { provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
  bootstrap: [AppComponent]
})

export class AppModule {
}
