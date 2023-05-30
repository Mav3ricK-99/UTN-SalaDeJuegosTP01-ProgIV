import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartaComponent } from 'src/app/components/juegos/mayor-menor/carta/carta/carta.component';
import { MazoComponent } from 'src/app/components/juegos/mayor-menor/mazo/mazo/mazo.component';



@NgModule({
  declarations: [
    CartaComponent,
    MazoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CartaComponent,
    MazoComponent
  ]
})
export class JuegoCartasModule { }
