import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { guestsOnlyGuard } from './guards/guests-only.guard';
import { RegistroComponent } from './components/registro/registro/registro.component';
import { loggedUsersOnlyGuard } from './guards/logged-users-only.guard';
import { SobreMiComponent } from './components/sobreMi/sobre-mi/sobre-mi.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent, canActivate: [guestsOnlyGuard]
  },
  {
    path: 'registro', component: RegistroComponent, canActivate: [guestsOnlyGuard]
  },
  {
    path: 'sobre', component: SobreMiComponent
  },
  {
    path: 'mayor-menor',
    loadChildren: () => import('./modules/juegos/mayor-menor/mayor-menor.module').then(m => m.MayorMenorModule),
    canActivate: [loggedUsersOnlyGuard]
  },
  {
    path: 'ahorcado',
    loadChildren: () => import('./modules/juegos/ahorcado/ahorcado.module').then(m => m.AhorcadoModule),
    canActivate: [loggedUsersOnlyGuard]
  },
  {
    path: 'preguntados',
    loadChildren: () => import('./modules/juegos/preguntados/preguntados.module').then(m => m.PreguntadosModule),
    /* canActivate: [loggedUsersOnlyGuard] */
  },
  {
    path: '', component: HomeComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
