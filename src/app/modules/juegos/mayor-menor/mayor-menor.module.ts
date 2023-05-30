import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MayorMenorRoutingModule } from './mayor-menor-routing.module';

import { MazoComponent } from 'src/app/components/juegos/mayor-menor/mazo/mazo/mazo.component';
import { MayorMenorComponent } from 'src/app/components/juegos/mayor-menor/mayor-menor/mayor-menor.component';
import { ControlesComponent } from 'src/app/components/juegos/mayor-menor/controles/controles.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ChatModule } from '../../shared/chat/chat/chat.module';
import { JuegoCartasModule } from '../../shared/juegos/juego-cartas/juego-cartas.module';


@NgModule({
  declarations: [
    MayorMenorComponent,
    ControlesComponent
  ],
  imports: [
    CommonModule,
    MayorMenorRoutingModule,
    ChatModule,
    JuegoCartasModule,
    NgbAlertModule
  ]
})
export class MayorMenorModule { }
