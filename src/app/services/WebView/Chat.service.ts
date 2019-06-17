import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, EMPTY } from "rxjs";
import { Contact } from "../../models/WebView/Contact";
import { AppComponent } from "../../app.component";
import { StorageService } from "../Storage.service";
import { Router } from "@angular/router";
import { GestaoMensagens } from "../../models/models";
import { Chat } from "../../models/WebView/Chat";
import { catchError } from "rxjs/operators";

@Injectable()
export class ChatService {

    constructor(private httpClient: HttpClient, private storageService: StorageService, private router: Router) {
    }

    public create(chat: any): Observable<any> {
        const url: string = `${AppComponent.serviceUrl}/comunicacao/chats`;
        const headers: any = this.httpHeadersGestao();

        return this.httpClient.post(url, JSON.stringify(chat), headers).pipe(catchError((err: HttpErrorResponse) => this.handler(err)));
    }

    public update(chat: Chat): Observable<any> {
        const url: string = `${AppComponent.ottimizzaAPIComunicacaoServicesURL}/chats/${chat.id}`;
        const headers: any = this.httpHeaders();

        return this.httpClient.put(url, JSON.stringify(chat), headers).pipe(catchError((err: HttpErrorResponse) => this.handler(err)));
    }

    public closeChat(id: number): Observable<any> {
        const url: string = `${AppComponent.ottimizzaAPIComunicacaoServicesURL}/chats/${id}/close`;
        const headers: any = this.httpHeaders();

        return this.httpClient.get(url, headers).pipe(catchError((err: HttpErrorResponse) => this.handler(err)));
    }

    public addContacts(chatId: any, contacts: Contact[]): Observable<any> {
        const url: string = `${AppComponent.ottimizzaAPIComunicacaoServicesURL}/chats/${chatId}/contacts`;
        const body: string = JSON.stringify(contacts);
        const headers: any = this.httpHeaders();

        return this.httpClient.post(url, body, headers).pipe(catchError((err: HttpErrorResponse) => this.handler(err)));
    }

    public getChatById(chatId: any): Observable<any> {
        const url: string = `${AppComponent.ottimizzaAPIComunicacaoServicesURL}/chats/${chatId}`;
        const headers: any = this.httpHeaders();

        return this.httpClient.get(url, headers).pipe(catchError((err: HttpErrorResponse) => this.handler(err)));
    }

    public getChatContactsByChatId(chatId: any): Observable<any> {
        const url: string = `${AppComponent.ottimizzaAPIComunicacaoServicesURL}/chats/${chatId}/contacts`;
        const headers: any = this.httpHeaders();

        return this.httpClient.get(url, headers).pipe(catchError((err: HttpErrorResponse) => this.handler(err)));
    }

    public removeContactFromChat(chatId: number, contactId: number): Observable<any> {
        const url: string = `${AppComponent.ottimizzaAPIComunicacaoServicesURL}/chats/${chatId}/contacts/${contactId}`;
        const headers: any = this.httpHeaders();

        return this.httpClient.delete(url, headers).pipe(catchError((err: HttpErrorResponse) => this.handler(err)));
    }

    public transfer(chatId: any, contactFromId: any, contactToId: any): Observable<any> {
        const url: string = `${AppComponent.ottimizzaAPIComunicacaoServicesURL}/chats/${chatId}/contacts/${contactFromId}/transfer/${contactToId}`;
        const headers: any = this.httpHeaders();

        return this.httpClient.get(url, headers).pipe(catchError((err: HttpErrorResponse) => this.handler(err)));
    }
    public getContactsForTransferByChatId(chatId: any, contactFromId: any): Observable<any> {
        const url: string = `${AppComponent.ottimizzaAPIComunicacaoServicesURL}/chats/${chatId}/contacts/${contactFromId}/transfer`;
        const headers: any = this.httpHeaders();

        return this.httpClient.get(url, headers).pipe(catchError((err: HttpErrorResponse) => this.handler(err)));
    }

    public circular(circular: any): Observable<any> {
        const url: string = `${AppComponent.serviceUrl}/comunicacao/chats/circular`;
        const headers: any = this.httpHeadersGestao();
        const body = JSON.stringify(circular);

        return this.httpClient.post(url, body, headers).pipe(catchError((err: HttpErrorResponse) => this.handler(err)));
    }

    public mensagemLida(chatId: number, pageSize: number = 100, pageIndex: number = 1, description: string = null) {
        let url: string = `${AppComponent.ottimizzaAPIComunicacaoServicesURL}/chats/${chatId}/contacts/last?page_size=${pageSize}&page_index=${pageIndex}`
        if (description != null) {
            url += `&description=${description}`;
        }
        const headers: any = this.httpHeaders();

        return this.httpClient.get(url, headers).pipe(catchError((err: HttpErrorResponse) => this.handler(err)));
    }

    public activeFavoriteChat(chatId: number, fromId: number) {
        const url: string = `${AppComponent.ottimizzaAPIComunicacaoServicesURL}/chats/${chatId}/contacts/${fromId}/active`
        const headers: any = this.httpHeaders();

        return this.httpClient.get(url, headers).pipe(catchError((err: HttpErrorResponse) => this.handler(err)));
    }

    public inactiveFavoriteChat(chatId: number, fromId: number) {
        const url: string = `${AppComponent.ottimizzaAPIComunicacaoServicesURL}/chats/${chatId}/contacts/${fromId}/inactive`
        const headers: any = this.httpHeaders();

        return this.httpClient.get(url, headers).pipe(catchError((err: HttpErrorResponse) => this.handler(err)));
    }

    public indicadorConversas(filter: GestaoMensagens) {
        const url: string = `${AppComponent.ottimizzaAPIComunicacaoServicesURL}/chats/analytics`;
        const headers: any = this.httpHeaders();

        return this.httpClient.post(url, filter, headers).pipe(catchError((err: HttpErrorResponse) => this.handler(err)));
    }

    public detalheIndicadorConversas(filter: GestaoMensagens, pageSize: number = 1000, pageIndex: number = 0) {
        const url: string = `${AppComponent.ottimizzaAPIComunicacaoServicesURL}/chats/analytics/detail?page_size=${pageSize}&page_index=${pageIndex}`;
        const headers: any = this.httpHeaders();

        return this.httpClient.post(url, filter, headers).pipe(catchError((err: HttpErrorResponse) => this.handler(err)));
    }

    public chatHistoryPDF(chatId: number) {
        const url: string = `${AppComponent.ottimizzaAPIComunicacaoURL}/PdfServlet?chat=${chatId}`;
        const headers: any = this.httpHeaders();

        return this.httpClient.get(url, headers).pipe(catchError((err: HttpErrorResponse) => this.handler(err)));
    }

    public upload(file: File, accounting_id: string, application_id: string) {
        const url = `https://s4.ottimizzacontabil.com:55325/storage/${application_id}/accounting/${accounting_id}/store`;
        const formData = new FormData()
        formData.append('file', file);
        const headers: any = this.httpHeadersStorage();

        return this.httpClient.post(url, formData, headers).pipe(catchError((err: HttpErrorResponse) => this.handler(err)));
    }

    private httpHeaders(): any {
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

    private httpHeadersGestao(): any {
        return {
            'headers': new HttpHeaders({
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': JSON.parse(localStorage.getItem('currentUser')).token
            })
        };
    }

    private httpHeadersStorage(): any {
        return {
            'headers': new HttpHeaders({
                'Authorization': JSON.parse(localStorage.getItem('currentUser')).token
            })
        };
    }

    handler(error) {
        if (error.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            if (error.status == 401) {
                alert('Token relacionado a senha expirou ou usuário conectado em outro dispositivo. \r\nSerá necessário fazer login novamente.!')
                this.router.navigate(['/login']);
                window.location.reload(true);
            }
        }

        return EMPTY;
    }
}