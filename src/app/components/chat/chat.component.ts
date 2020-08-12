import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ChatService } from '../../services/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public mensajesSubscription: Subscription;
  public mensajes: any = [];
  elemento: HTMLElement;
  constructor(private fb: FormBuilder, private chatService: ChatService) {}

  ngOnInit() {
    this.elemento = document.getElementById('chat-mensajes');
    this.inicializarFormulario();
    this.mensajesSubscription = this.chatService
      .getMessages()
      .subscribe((msj) => {
        this.mensajes.push(msj);
        setTimeout(() => {
          this.elemento.scrollTop = this.elemento.scrollHeight;
        }, 50);
        console.log(msj);
      });
  }

  ngOnDestroy() {
    this.mensajesSubscription.unsubscribe();
  }

  public inicializarFormulario() {
    this.form = this.fb.group({
      mensaje: ['', [Validators.required]],
      de: ['', [Validators.required]],
    });
  }

  public enviar() {
    console.log(this.form.value);
    this.chatService.sendMessage(this.form.get('mensaje').value);
  }
}
