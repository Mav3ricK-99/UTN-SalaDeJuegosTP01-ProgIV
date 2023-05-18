import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MayorMenorRoutingModule } from './mayor-menor-routing.module';
import { ChatModule } from '../../shared/chat/chat/chat.module';
import { MazoComponent } from 'src/app/components/juegos/mayor-menor/mazo/mazo/mazo.component';
import { MayorMenorComponent } from 'src/app/components/juegos/mayor-menor/mayor-menor/mayor-menor.component';
import { CartaComponent } from 'src/app/components/juegos/mayor-menor/carta/carta/carta.component';
import { ControlesComponent } from 'src/app/components/juegos/mayor-menor/controles/controles.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    MayorMenorComponent,
    MazoComponent,
    CartaComponent,
    ControlesComponent
  ],
  imports: [
    CommonModule,
    MayorMenorRoutingModule,
    ChatModule,
    NgbAlertModule
  ]
})
export class MayorMenorModule { }
