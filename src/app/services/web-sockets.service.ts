import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class WebSocketsService {
  public socketStatus = false;
  constructor(private socket: Socket) {
    this.checkStatus();
  }

  public checkStatus() {
    this.socket.on('connect', () => {
      console.log('conectado al servidor');
      this.socketStatus = true;
    });
    this.socket.on('disconnect', () => {
      console.log('desconectado del servidor');
      this.socketStatus = false;
    });
  }

  public emit(evento: string, payload?: any, callback?: any) {
    // emit('EVENTO', payload)
    console.log('emitiendo', evento);

    this.socket.emit(evento, payload, callback);
  }

  public listen(event: string) {
    return this.socket.fromEvent(event);
  }
}
