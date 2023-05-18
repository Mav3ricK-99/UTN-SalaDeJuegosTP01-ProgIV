import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';
import { Observable } from 'rxjs';
import { Chat } from 'src/app/classes/chat/chat';
import { Usuario } from 'src/app/classes/usuario';
import { UsuarioService } from 'src/app/services/Usuario/usuario.service';
import { ChatService } from 'src/app/services/chat/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.sass']
})
export class ChatComponent implements OnInit {
  closeResult: string;

  chatForm: FormGroup;

  public chats$: Observable<Chat[]>;

  constructor(formBuilder: FormBuilder, private usuarioService: UsuarioService, private chatService: ChatService, private offcanvasService: NgbOffcanvas) {

    this.chatForm = formBuilder.group({
      mensaje: new FormControl('', [Validators.required]),
    });
  }

  abrirChat(content: TemplateRef<any>) {
    let heightOffCanvas = 0;
    if (this.offcanvasService.hasOpenOffcanvas()) {
      this.offcanvasService.dismiss(content);
    } else {
      this.offcanvasService.open(content, { position: 'bottom', backdrop: false });
      heightOffCanvas = Number($('.offcanvas-bottom').outerHeight());
      heightOffCanvas--;
    }
    this.scrollarAlUltimoMensaje();
    $('#abrirChat').css('bottom', heightOffCanvas + "px");
  }

  ngOnInit(): void {
    this.chats$ = this.chatService.getChats();
  }

  enviarMensaje(): void {
    let mensaje = this.chatForm.get('mensaje')?.value;
    let nuevoChat = new Chat();
    nuevoChat.setMensaje(mensaje);
    nuevoChat.setFechaMensaje(Date.now());
    if (this.usuarioService.usuarioIngresado instanceof Usuario) {
      nuevoChat.setUsuario(this.usuarioService.usuarioIngresado);
    }

    this.chatService.agregarChat(nuevoChat).finally(() => {
      this.scrollarAlUltimoMensaje()
    });
    this.chatForm.get('mensaje')?.setValue('');
  }

  scrollarAlUltimoMensaje() {
    setTimeout(() => {
      let ultimoMensaje = $('.mensaje').last();
      ultimoMensaje.last()[0].scrollIntoView();
    }, 1000)
  }
}
