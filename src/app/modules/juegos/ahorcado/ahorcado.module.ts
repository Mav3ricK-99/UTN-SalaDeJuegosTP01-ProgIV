import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AhorcadoRoutingModule } from './ahorcado-routing.module';
import { ChatModule } from '../../shared/chat/chat/chat.module';
import { LetraComponent } from 'src/app/components/juegos/ahorcado/letra/letra.component';
import { AhorcadoComponent } from 'src/app/components/juegos/ahorcado/ahorcado/ahorcado.component';


@NgModule({
  declarations: [
    LetraComponent,
    AhorcadoComponent
  ],
  imports: [
    CommonModule,
    AhorcadoRoutingModule,
    ChatModule
  ]
})
export class AhorcadoModule { }
