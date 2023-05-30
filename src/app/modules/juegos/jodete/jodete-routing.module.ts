import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JodeteComponent } from 'src/app/components/juegos/jodete/jodete/jodete.component';

const routes: Routes = [
  {
    path: '',
    component: JodeteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JodeteRoutingModule { }
