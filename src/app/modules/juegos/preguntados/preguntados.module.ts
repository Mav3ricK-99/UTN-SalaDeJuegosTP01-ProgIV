import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreguntadosRoutingModule } from './preguntados-routing.module';
import { PreguntadosComponent } from 'src/app/components/juegos/preguntados/preguntados/preguntados.component';
import { HttpClientModule } from '@angular/common/http';
import { RuedaPreguntasComponent } from 'src/app/components/juegos/preguntados/rueda-preguntas/rueda-preguntas.component';
import { ModalPreguntaComponent } from 'src/app/components/juegos/preguntados/modal-pregunta/modal-pregunta.component';
import { ManejadorPreguntasComponent } from 'src/app/components/juegos/preguntados/manejador-preguntas/manejador-preguntas.component';


@NgModule({
  declarations: [
    PreguntadosComponent,
    RuedaPreguntasComponent,
    ModalPreguntaComponent,
    ManejadorPreguntasComponent
  ],
  imports: [
    CommonModule,
    PreguntadosRoutingModule,
    HttpClientModule
  ]
})
export class PreguntadosModule { }
