import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MayorMenorComponent } from 'src/app/components/juegos/mayor-menor/mayor-menor/mayor-menor.component';

const routes: Routes = [
  {
    path: '',
    component: MayorMenorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MayorMenorRoutingModule { }
