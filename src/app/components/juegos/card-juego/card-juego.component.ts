import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-juego',
  templateUrl: './card-juego.component.html',
  styleUrls: ['./card-juego.component.sass']
})
export class CardJuegoComponent {

  @Input('juego') juego: any;
}
