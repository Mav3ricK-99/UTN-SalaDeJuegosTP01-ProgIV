import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JodeteRoutingModule } from './jodete-routing.module';
import { ManoComponent } from 'src/app/components/juegos/jodete/mano/mano.component';
import { JodeteComponent } from 'src/app/components/juegos/jodete/jodete/jodete.component';
import { JuegoCartasModule } from '../../shared/juegos/juego-cartas/juego-cartas.module';


@NgModule({
  declarations: [
    ManoComponent,
    JodeteComponent
  ],
  imports: [
    CommonModule,
    JuegoCartasModule,
    JodeteRoutingModule
  ]
})
export class JodeteModule { }
