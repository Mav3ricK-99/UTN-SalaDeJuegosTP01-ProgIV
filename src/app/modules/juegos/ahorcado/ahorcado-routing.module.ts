import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from 'src/app/components/juegos/ahorcado/ahorcado/ahorcado.component';

const routes: Routes = [
  {
    path: '',
    component: AhorcadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class AhorcadoRoutingModule { }
