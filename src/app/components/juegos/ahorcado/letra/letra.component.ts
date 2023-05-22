import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-letra',
  templateUrl: './letra.component.html',
  styleUrls: ['./letra.component.sass'],
})
export class LetraComponent {

  @Input('letra') letra: Letra;
  @ViewChild('botonLetra', { read: ElementRef }) botonLetra: any;
  @Output() letraElegida = new EventEmitter<Letra>();

  elegirLetra($event: any) {
    $event.target.disabled = true;
    const audio = new Audio('assets/ahorcado/sfx/ahorcado-button.mp3');
    audio.volume = .35;
    audio.play();

    this.letraElegida.emit(this.letra);
  }

  public habilitarBoton() {
    this.botonLetra.nativeElement.disabled = false;
  }
}

export interface Letra {
  letra: string,
}