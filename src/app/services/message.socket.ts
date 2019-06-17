import { Injectable, NgModule } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { AppComponent } from '../app.component';

@Injectable()
export class MessageSocket extends Socket {

  constructor(private userId: string, private ticket: string) {
    super({
      url: `${AppComponent.ottimizzaWSComunicacaoURL}/messages?user_id=${userId}&ticket=${ticket}&application_id=tareffa`, options: {
        transports: ['websocket']
      }
    });
  }

}
