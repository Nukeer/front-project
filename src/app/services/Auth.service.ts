// Core
import { Injectable } from '@angular/core';

// Router
import { Router } from '@angular/router';

// HttpClientModule
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Rxjs
import { Observable, from } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';


// Models
import { Usuario } from '../models/UsuarioShort';

// Services
import { AppComponent } from '../app.component';
import { ServiceMessage } from './message.service';
import { AppConfigService } from './AppConfig.service';

@Injectable()
export class AuthService {

	private api: string = AppComponent.serviceUrl;

	constructor(private appConfig: AppConfigService, private router: Router, private httpClient: HttpClient, private messageService: ServiceMessage) {
	}

	public ticket(): Observable<any> {
		const url: string = `${AppComponent.serviceUrl}/auth/ticket`;
		const headers: any = this.httpJWTHeaders();

		return this.httpClient.get(url, headers);
	}

	public doLogin(usuario: Usuario): Observable<any> {
		const url: string = `${AppComponent.serviceUrl}/auth/token`;
		const body: any = JSON.stringify(usuario);
		const headers: any = this.httpHeaders();

		return this.httpClient.post(url, body, headers);
	}

	public doLogout(): void {
		const conversas = window.localStorage.getItem("conversas");
		this.messageService.emit(`disconnect`, {});
		this.router.navigate(['/login']);
		window.localStorage.clear();
		window.localStorage.setItem("conversas", conversas);
	}
	
	public doClearCache(): void{
		const currentUser = window.localStorage.getItem("currentUser");
		const currentPasswordi = window.localStorage.getItem("userPassword");
		const conversas = window.localStorage.getItem("conversas");
		window.localStorage.clear();
		window.localStorage.setItem("currentUser", currentUser);
		window.localStorage.setItem("userPassword", currentPasswordi);
		window.localStorage.setItem("conversas", conversas);
		window.location.reload(true);
	}

	public checkToken(token: string): Observable<boolean> {
		return from(this.appConfig.loadAppConfig()).pipe(
			mergeMap((data: any) => {
				const url = `${data.serviceUrl}/auth/authorize`;
				const body = token;
				const headers = this.httpHeaders();

				return this.httpClient.post(url, body, headers).pipe(
					map((response: any) => {
						return response.valid;
					})
				);
			})
		);
	}

	private httpHeaders(): any {
		return {
			'headers': new HttpHeaders({
				'Accept': 'application/json',
				'Content-Type': 'application/json;charset=utf-8'
			})
		};
	}

	private httpJWTHeaders(): any {
		return {
			'headers': new HttpHeaders({
				'Accept': 'application/json',
				'Content-Type': 'application/json;charset=utf-8',
				'Authorization': JSON.parse(localStorage.getItem('currentUser')).token
			})
		};
	}

}
