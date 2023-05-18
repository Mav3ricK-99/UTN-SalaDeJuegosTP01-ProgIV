import { Component, Input } from '@angular/core';
import { Chat } from 'src/app/classes/chat/chat';
import { UsuarioService } from 'src/app/services/Usuario/usuario.service';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.sass']
})
export class MensajeComponent {

  @Input('chat') chat: Chat;

  constructor(private usuarioService: UsuarioService) {

  }

  esAutor(): boolean {
    return this.usuarioService.usuarioIngresado?.getNombreUsuario() == this.chat.getUsuario()?.getNombreUsuario();
  }
}
