import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, EMPTY } from "rxjs";
import { AppComponent } from "../../app.component";
import { StorageService } from "../Storage.service";
import { Router } from "@angular/router";
import { catchError } from "rxjs/operators";

@Injectable()
export class ContactService {

  constructor(private httpClient: HttpClient, private storageService: StorageService, private router: Router) {
  }

  public create(contact: any): Observable<any> {
    const url: string = `${AppComponent.ottimizzaAPIComunicacaoServicesURL}/contacts`;
    const headers: any = this.httpHeaders();

    return this.httpClient.post(url, JSON.stringify(contact), headers).pipe(catchError((err: HttpErrorResponse) => this.handler(err)));
  }

  public getOrganizationByContactId(id: number): Observable<any> {
    const url: string = `${AppComponent.ottimizzaAPIComunicacaoServicesURL}/contacts/${id}/organizations`;
    const headers: any = this.httpHeaders();

    return this.httpClient.get(url, headers).pipe(catchError((err: HttpErrorResponse) => this.handler(err)));
  }

  public getContactsByContactId(contactId: any) {
    const url: string = `${AppComponent.ottimizzaAPIComunicacaoServicesURL}/contacts/${contactId}/contacts?is_active=true`;
    const headers: any = this.httpHeaders();

    return this.httpClient.get(url, headers).pipe(catchError((err: HttpErrorResponse) => this.handler(err)));
  }

  public getContactsByOrganizationId(organizationId: any, input: string) {
    const url: string = `${AppComponent.ottimizzaAPIComunicacaoServicesURL}/contacts/organization/${organizationId}/contacts?description=${input}`;
    const headers: any = this.httpHeaders();

    return this.httpClient.get(url, headers).pipe(catchError((err: HttpErrorResponse) => this.handler(err)));
  }

  public getOrganizationsByContabilityId(contabilityId: any, input: string) {
    const url: string = `${AppComponent.ottimizzaAPIComunicacaoServicesURL}/contacts/organization/${contabilityId}/list?description=${input}`;
    const headers: any = this.httpHeaders();

    return this.httpClient.get(url, headers).pipe(catchError((err: HttpErrorResponse) => this.handler(err)));
  }

  public selectContactByContactIdAndDescriptionAndShortDescription(contactId: any, input: string, includeSelf: boolean = false) {
    let url: string = `${AppComponent.ottimizzaAPIComunicacaoServicesURL}/contacts/${contactId}/contacts?full_description=${input}&is_active=true&include_self=${includeSelf}`;
    const headers: any = this.httpHeaders();

    return this.httpClient.get(url, headers).pipe(catchError((err: HttpErrorResponse) => this.handler(err)));
  }

  public selectContactContabilByContactIdAndFullDescription(contactId: any, input: string) {
    const url: string = `${AppComponent.ottimizzaAPIComunicacaoServicesURL}/contacts/${contactId}/contacts?full_description=${input}&is_active=true&contact_organization=0`;
    const headers: any = this.httpHeaders();

    return this.httpClient.get(url, headers).pipe(catchError((err: HttpErrorResponse) => this.handler(err)));
  }

  public selectContactClientByContactIdAndFullDescription(contactId: any, input: string) {
    const url: string = `${AppComponent.ottimizzaAPIComunicacaoServicesURL}/contacts/${contactId}/contacts?full_description=${input}&is_active=true&contact_organization=1`;
    const headers: any = this.httpHeaders();

    return this.httpClient.get(url, headers).pipe(catchError((err: HttpErrorResponse) => this.handler(err)));
  }

  public selectContactByContactIdAndShortDescription(contactId: any, input: string) {
    const url: string = `${AppComponent.ottimizzaAPIComunicacaoServicesURL}/contacts/${contactId}/contacts?short_description=${input}`;
    const headers: any = this.httpHeaders();

    return this.httpClient.get(url, headers).pipe(catchError((err: HttpErrorResponse) => this.handler(err)));
  }

  public getChatsByContactId(contactId: any) {
    const url: string = `${AppComponent.ottimizzaAPIComunicacaoServicesURL}/contacts/${contactId}/chat_summary`;
    const headers: any = this.httpHeaders();

    return this.httpClient.get(url, headers).pipe(catchError((err: HttpErrorResponse) => this.handler(err)));
  }

  public getFilteredChatComunication(contactId: any, filter: any, limit: number, beforeDate: Date, description?: string) {
    let url: string = `${AppComponent.ottimizzaAPIComunicacaoServicesURL}/contacts/${contactId}/chat_summary?limit=${limit}`;
    if (beforeDate != null) url += `&before_date=${beforeDate}`;
    if (description != null && description != 'undefined') url += `&description=${description}`;
    const headers: any = this.httpHeaders();

    return this.httpClient.post(url, JSON.stringify(filter), headers).pipe(
      catchError((err: HttpErrorResponse) => this.handler(err))
    );
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