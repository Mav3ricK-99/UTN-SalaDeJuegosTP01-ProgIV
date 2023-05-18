import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from 'src/app/components/chat/chat/chat.component';
import { MensajeComponent } from 'src/app/components/chat/mensaje/mensaje.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ChatComponent,
    MensajeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ChatComponent,
    MensajeComponent
  ],
})
export class ChatModule { }
