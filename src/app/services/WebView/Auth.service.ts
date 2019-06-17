import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { StorageService } from "../Storage.service";
import { AppComponent } from "../../app.component";

@Injectable()
export class AuthServiceWebView {

    constructor(private httpClient: HttpClient, private storageService: StorageService) {
    }

    public login(credentials: any): Observable<any> {
        const url: string = `${AppComponent.ottimizzaAPIComunicacaoServicesURL}/auth/token`;
        const headers: any = this.httpHeaders();
        const usuarioAtual = this.storageService.get('currentUser:usuario');

        let userToken = this.storageService.get(`userComunicacao-${usuarioAtual.id}:user`);

        return this.httpClient.post(url, JSON.stringify(credentials), {
            'headers': new HttpHeaders({
                'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': `Bearer ${userToken}`
            })
        });
    }

    public ticket(): Observable<any> {
        const url: string = `${AppComponent.ottimizzaAPIComunicacaoServicesURL}/auth/ws/ticket`;
        const usuarioAtual = this.storageService.get('currentUser:usuario');

        let userToken = this.storageService.get(`userComunicacao-${usuarioAtual.id}:user`);
        
        userToken = userToken.token;
        return this.httpClient.get(url, {
            'headers': new HttpHeaders({
                'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': `Bearer ${userToken}`
            })
        });
    }

    private httpHeaders(): any {
        return {
            'headers': new HttpHeaders({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            })
        };
    }

}