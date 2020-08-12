import { Component, OnInit } from '@angular/core';
import { WebSocketsService } from './services/web-sockets.service';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent  {
  title = 'basico';

  constructor(
  ) {}

}
