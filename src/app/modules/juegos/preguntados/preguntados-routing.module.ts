import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreguntadosComponent } from 'src/app/components/juegos/preguntados/preguntados/preguntados.component';

const routes: Routes = [{
  path: '',
  component: PreguntadosComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreguntadosRoutingModule { }
