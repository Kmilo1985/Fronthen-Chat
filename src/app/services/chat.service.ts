import { Injectable } from '@angular/core';
import { WebSocketsService } from './web-sockets.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(public wsService: WebSocketsService) {}

  public sendMessage(mensaje: string) {
    const payload = {
      de: 'Kmilo',
      cuerpo: mensaje
    };

    this.wsService.emit('mensaje', payload);
  }

  public getMessages(){
    return this.wsService.listen('mensaje-nuevo');
  }
}
