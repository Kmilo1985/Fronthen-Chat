import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Usuario } from '../calsses/usuario';

@Injectable({
  providedIn: 'root',
})
export class WebSocketsService {
  public socketStatus = false;
  public usuario: Usuario;
  constructor(private socket: Socket) {
    this.checkStatus();
  }

  /**
   *@description Metodo que permite determinar el estado del socket
   *
   * @memberof WebSocketsService
   */
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

  /**
   *
   * Permite escuchar cualquier evento
   * @param {string} event
   * @returns
   * @memberof WebSocketsService
   */
  public listen(event: string) {
    return this.socket.fromEvent(event);
  }

  public loginWs(nombre: string) {
    console.log('configurando', nombre);

    this.emit('configurar-usuario', { nombre }, (resp) => {
      console.log(resp);
    });

    // this.emit('configurar-usuario', { nombre }, (resp) => {
    //   console.log();
    // });

    // this.socket.emit('mensaje-nuevo', { nombre }, (resp) => {
    //   console.log(resp, 'configurar usuario respuesta');
    // });
  }
}
