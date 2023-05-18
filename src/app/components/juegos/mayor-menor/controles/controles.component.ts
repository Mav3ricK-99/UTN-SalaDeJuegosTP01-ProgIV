import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-controles',
  templateUrl: './controles.component.html',
  styleUrls: ['./controles.component.sass']
})
export class ControlesComponent {

  @Output() elijioOpcion = new EventEmitter<boolean>();

  elejirOpcion(seraMayor: boolean) {
    this.elijioOpcion.emit(seraMayor);
  }
}
