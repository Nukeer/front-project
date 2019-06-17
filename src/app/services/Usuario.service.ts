import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

import { Observable, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class UsuarioService {

	private api: string = AppComponent.serviceUrl;

	handler(error) {
		if (error.error instanceof Error) {
			// A client-side or network error occurred. Handle it accordingly.
			console.error('An error occurred:', error.error.message);
		} else {
			if (error.status == 401) {
				this.router.navigate(['/login']);
			}
		}

		return EMPTY;
	}

	constructor(private httpClient: HttpClient, private router: Router) {
	}

	public selectAllUsuariosPaginatedAndFiltered(filters: any, rowsPerPage: number, pageIndex: number): Observable<any> {
		return this.httpClient.post(`${AppComponent.serviceUrl}/usuarios/p/${rowsPerPage}/page/${pageIndex}/f`, JSON.stringify(filters), this.httpHeaders())
			.pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	public selectUniqueUsuarioById(id: string): Observable<any> {
		return this.httpClient.get(`${AppComponent.serviceUrl}/usuarios/${id}/`, this.httpHeaders())
			.pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	public selectUniqueUsuarioByNome(nome: string): Observable<any> {
		return this.httpClient.post(`${AppComponent.serviceUrl}/usuarios/s/by/nome`, nome, this.httpHeaders())
			.pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	public selectUniqueUsuarioContadorByNome(nome: string, departamentoId = null): Observable<any> {
		let url = `${AppComponent.serviceUrl}/usuarios/type/1/s/nome`;
		if (departamentoId != null) {
			url += `?departamento_id=${departamentoId}`;
		}
		return this.httpClient.post(url, nome, this.httpHeaders())
			.pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	public insertUniqueUsuario(record: any, tipoExportarComunicacao: boolean = false): Observable<any> {
		const url = `${AppComponent.serviceUrl}/usuarios?exportar_para_comunicacao=${tipoExportarComunicacao}`;
		const body = JSON.stringify(record);
		const headers = this.httpHeaders();

		return this.httpClient.post(url, body, headers)
			.pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	public deleteUniqueUsuario(id: string): Observable<any> {
		return this.httpClient.delete(`${AppComponent.serviceUrl}/usuarios/${id}`, this.httpHeaders())
			.pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	public updateUniqueUsuario(id: number, record: any, tipoExportarComunicacao: boolean = false): Observable<any> {
		const url = `${AppComponent.serviceUrl}/usuarios/${id}?exportar_para_comunicacao=${tipoExportarComunicacao}`;
		const body = JSON.stringify(record);
		const headers = this.httpHeaders();

		return this.httpClient.put(url, body, headers)
			.pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	/* ************************************************************************************************************* **
	 * EMPRESAS COM SERVIÇO ATUAL
	 * ************************************************************************************************************* */
	public buscarEmpresasComEsteUsuario(usuarioId: number, pageSize: number, pageIndex: number): Observable<any> {
		return this.httpClient.get(`${AppComponent.serviceUrl}/usuarios/${usuarioId}/empresas?page_size=${pageSize}&page_index=${pageIndex}`, this.httpHeaders()
		).pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	public buscarEmpresasComEsteUsuarioPerfil(usuarioId: number, pageSize: number, pageIndex: number): Observable<any> {
		return this.httpClient.get(`${AppComponent.serviceUrl}/empresas/usuarios/${usuarioId}/empresas/perfis/p/${pageSize}/page/${pageIndex}`, this.httpHeaders()
		).pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	public adicionarEmpresaNoUsuario(usuarioId: number, empresaId: number): Observable<any> {
		return this.httpClient.get(`${AppComponent.serviceUrl}/usuarios/${usuarioId}/empresas/adicionar/${empresaId}`, this.httpHeaders()
		).pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	public adicionarEmpresaNoUsuarioComPerfil(usuarioId: number, empresaId: number, perfil: any): Observable<any> {
		return this.httpClient.post(`${AppComponent.serviceUrl}/empresas/usuarios/${usuarioId}/empresas/${empresaId}/perfis/adicionar`, perfil, this.httpHeaders()
		).pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	public removerEmpresaDoUsuario(usuarioId: number, empresaId: number): Observable<any> {
		return this.httpClient.delete(`${AppComponent.serviceUrl}/usuarios/${usuarioId}/empresas/remover/${empresaId}`, this.httpHeaders()
		).pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	public adicionarPerfil(usuarioId: number, idPerfis: number): Observable<any> {
		return this.httpClient.get(`${AppComponent.serviceUrl}/usuarios/${usuarioId}/perfis/adicionar/${idPerfis}`, this.httpHeaders()
		).pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	public adicionarPerfis(usuarioId: number, idPerfis: number[]): Observable<any> {
		return this.httpClient.post(`${AppComponent.serviceUrl}/usuarios/${usuarioId}/perfis/adicionar`, idPerfis, this.httpHeaders()
		).pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	public buscarPerfisPorUsuarioId(usuarioId: number): Observable<any> {
		return this.httpClient.get(`${AppComponent.serviceUrl}/usuarios/${usuarioId}/perfis`, this.httpHeaders()
		).pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	private httpHeaders(): any {
		return {
			'headers': new HttpHeaders({
				'Accept': 'application/json',
				'Content-Type': 'application/json;charset=utf-8',
				'Authorization': JSON.parse(localStorage.getItem('currentUser')).token
			})
		};
	}

}
