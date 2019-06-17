import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { Subject, Observable } from 'rxjs';
import { MessageSocket } from './message.socket';
import { RxEvent } from './rx-event';
import { Message } from '../models/WebView/Message';
import { StorageService } from './Storage.service';
import { Contact } from '../models/WebView/Contact';

@Injectable()
export class ServiceMessage {
  public static EVENT_MESSAGE_CREATED = `message::created`;
  public static EVENT_MESSAGE_UPDATED = `message::updated`;

  public static EVENT_MESSAGE_RECEIVED = `message::received`;
  public static EVENT_MESSAGE_SEEN = `message::seen`;

  public static connected: boolean = false;
  public static connecting: boolean = false;
  private static authorized: boolean;

  public static socket: MessageSocket;

  private user: any;
  private userId: string;

  constructor(private httpClient: HttpClient,
    private storageService: StorageService,
    private events: RxEvent) {
  }

  public ticket(): Observable<any> {
    const url = `${AppComponent.ottimizzaWSComunicacaoServicesURL}/auth/ticket`;
    const headers = this.httpHeadersWithBearerAuthorization();

    return this.httpClient.get(url, headers);
  }

  public getMessagesByChatId(chatId: number, limit: number = 200, beforeId: number = 0): Observable<any> {
    const url = `${AppComponent.ottimizzaAPIComunicacaoServicesURL}/chats/${chatId}/messages?limit=${limit}&before_id=${beforeId}`;
    const headers: any = this.httpHeadersWithBearerAuthorization();

    return this.httpClient.get(url, headers);
  }

  public connect(user: any) {
    const that = this;
    that.user = user;
    that.userId = user.id;

    if (ServiceMessage.connecting || ServiceMessage.connected) {
      return;
    }

    ServiceMessage.connecting = true;
    this.ticket().subscribe((response: any) => {
      if (response.status === 'success') {
        try {
          ServiceMessage.socket.disconnect();
        } catch (e) { }
        ServiceMessage.socket = new MessageSocket(that.userId, response.ticket);
        ServiceMessage.socket.on(`connect`, () => console.log('connecting...'));
        ServiceMessage.socket.on(`disconnect`, () => { console.log('disconnected...'); that.onClose(false); });
        ServiceMessage.socket.on(`connect::success`, () => that.onOpen());
        ServiceMessage.socket.on(`connect::failed`, () => that.onClose());
        ServiceMessage.socket.on(`message::created`, (message: Message) => that.onMessageCreated(message));
        ServiceMessage.socket.on(`message::updated`, (message: Message) => that.onMessageUpdated(message));
      }
    });
  }

  public disconnect() {
    ServiceMessage.socket.disconnect();
  }

  public emit(eventName: string, data: any) {
    return new Promise<void>((resolve, reject) => {
      ServiceMessage.socket.emit(eventName, data);
      resolve();
    });
  }

  private onClose(reconnect = true): void {
    ServiceMessage.authorized = false;
    ServiceMessage.connecting = false;
    ServiceMessage.connected = false;
    this.events.next(`messages:ws:onclose`, { record: {} });
    if (reconnect) this.connect(this.userId);
  }

  private onOpen(): void {
    ServiceMessage.authorized = true;
    ServiceMessage.connecting = false;
    ServiceMessage.connected = true;
    this.events.next(`messages:ws:onopen`, { record: {} });
  }

  private onMessageCreated(message: Message): void {
    const that = this;
    that.setMessageAsReceived(message.serverId, that.user.contact);
    that.events.next(`message::created`, message);
    that.events.next(`message:${message.chat.id}:created`, message);
  }

  private onMessageUpdated(message: Message): void {
    const that = this;
    that.setMessageAsReceived(message.serverId, that.user.contact);
    that.events.next(`message::updated`, message);
    that.events.next(`message:${message.chat.id}:updated`, message);
  }

  public setMessageAsReceived(serverId: number, contact: Contact): void {
    this.emit(ServiceMessage.EVENT_MESSAGE_RECEIVED, {
      serverId: serverId, contact: contact
    });
  }

  public setMessageAsSeen(serverId: number, contact: Contact): void {
    this.emit(ServiceMessage.EVENT_MESSAGE_SEEN, {
      serverId: serverId, contact: contact
    });
  }

  public isOpen() {
    return ServiceMessage.connected;
  }

  public isAuthorized() {
    return ServiceMessage.authorized;
  }

  private httpHeadersWithBearerAuthorization(): any {
    const usuarioAtual = this.storageService.get('currentUser:usuario');
    let userToken = this.storageService.get(`userComunicacao-${usuarioAtual.id}:user`);

    userToken = userToken.token;
    return {
      'headers': new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`
      })
    };
  }

}
