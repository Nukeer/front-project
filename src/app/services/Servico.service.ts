import { Injectable } from '@angular/core';


import { timeout } from 'rxjs/operators';
import { DefaultService } from './Default.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AppConfigService } from './AppConfig.service';
import { AppComponent } from '../app.component';
import { ServicoProgramadoFiltroAvancado } from '../models/ServicoProgramadoFiltroAvancado';
import { Router } from '@angular/router';
import { Servico } from '../models/Servico';
import { EmpresaFiltroAvancado } from '../models/Empresa/EmpresaFiltroAvancado';
import { GestaoServicos } from '../models/gestao-servicos';
import { Observable } from 'rxjs';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class ServicoService {

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

	/* ************************************************************************************************************* **
	 * TRANSAÇÕES.
	 * ************************************************************************************************************* */
	transferirServicoProgramado(record: any): Observable<any> {
		const url = `${AppComponent.serviceUrl}/servicos_programados/transferencia`;
		const body = record;
		const headers = this.httpHeaders();

		return this.httpClient.post(url, body, headers).pipe(
			catchError((err: HttpErrorResponse) => this.handler(err))
		)
	}

	exportarServicoProgramadoParaCSV(filtro: any): Observable<any> {
		const url = `${AppComponent.serviceUrl}/servicos_programados/export/csv/avancado`;
		const body = filtro;
		const headers = this.httpHeaders();

		return this.httpClient.post(url, body, headers).pipe(
			catchError((err: HttpErrorResponse) => this.handler(err))
		)
	}

	/* ************************************************************************************************************* **
	 * BUSCA POR SERVIÇO PROGRAMADO (UNIQUE).
	 * ************************************************************************************************************* */
	selectUniqueServicoAvulsoByDescricao(descricao: string): Observable<any> {
		const url = `${AppComponent.serviceUrl}/servicos/avulso/s/by/descricao`;
		const headers = this.httpHeaders();

		return this.httpClient.post(url, descricao, headers).pipe(
			catchError((err: HttpErrorResponse) => this.handler(err))
		)
	}

	selectUniqueServicoProgramadoById(idServicoProgramado: number): Observable<any> {
		// Parametros para Get.
		const url = `${AppComponent.serviceUrl}/servicos_programados/${idServicoProgramado}`;
		const headers = this.httpHeaders();

		// Realiza o Request HTTP.
		return this.httpClient.get(url, headers).pipe(
			catchError((err: HttpErrorResponse) => this.handler(err))
		)
	}

	selectUniqueServicoProgramadoByResponsavel(responsavel: string): Observable<any> {
		// Parametros para Get.
		const url = `${AppComponent.serviceUrl}/servicos_programados/f/`;
		const body = responsavel;
		const headers = this.httpHeaders();

		return this.httpClient.post(url, body, headers)
			.pipe(
				catchError((err: HttpErrorResponse) => this.handler(err))
			)
	}

	buscarIndicadoresServicosProgramados(filtroAvancado: ServicoProgramadoFiltroAvancado): Observable<any> {
		const url = `${AppComponent.serviceUrl}/servicos_programados/analytics`;
		const headers = this.httpHeaders();

		return this.httpClient.post(url, JSON.stringify(filtroAvancado), headers)
			.pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	buscarIndicadoresGestaoServicos(filtroAvancado: GestaoServicos, group: number): Observable<any> {
		const url = `${AppComponent.serviceUrl}/servicos_programados/analytics?group=${group}`;
		const headers = this.httpHeaders();

		return this.httpClient.post(url, JSON.stringify(filtroAvancado), headers)
			.pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	buscarIndicadoresGestaoServicosPaginado(filtroAvancado: GestaoServicos, group: number, pageSize: number, pageIndex: number): Observable<any> {
		const url = `${AppComponent.serviceUrl}/servicos_programados/analytics?group=${group}&page_size=${pageSize}&page_index=${pageIndex}`;
		const headers = this.httpHeaders();

		return this.httpClient.post(url, JSON.stringify(filtroAvancado), headers)
			.pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	buscarDetalhesGestaoServicos(filtroAvancado: GestaoServicos, pageSize: number = 10, pageIndex: number = 0): Observable<any> {
		const url = `${AppComponent.serviceUrl}/servicos_programados/analytics/detail?page_size=${pageSize}&page_index=${pageIndex}`;
		const headers = this.httpHeaders();

		return this.httpClient.post(url, JSON.stringify(filtroAvancado), headers)
			.pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	/* ************************************************************************************************************* **
	* LISTAGEM DE SERVIÇO PROGRAMADO
	* ************************************************************************************************************* */
	selectAllServicoProgramado(filters: any, pageSize: number, pageIndex: number): Observable<any> {
		const url = `${AppComponent.serviceUrl}/servicos_programados/p/${pageSize}/page/${pageIndex}/f`;
		const headers = this.httpHeaders();
		const body = JSON.stringify(filters);

		return this.httpClient.post(url, body, headers)
			.pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	/* ************************************************************************************************************* **
	 * LISTAGEM DE SERVIÇO PROGRAMADO (FEED)
	 * ************************************************************************************************************* */
	selectAllServicoProgramadoFeed(idServicoProgramado: number, pageSize: number, pageIndex: number): Observable<any> {
		const url = `${AppComponent.serviceUrl}/servicos_programados/${idServicoProgramado}/feed/p/${pageSize}/page/${pageIndex}`;
		const headers = this.httpHeaders();

		return this.httpClient.get(url, headers)
			.pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}


	public gerarProgramacao(record: any): Observable<any> {
		const url = `${AppComponent.serviceUrl}/servicos_programados/gerar_programacao`;
		const headers = this.httpHeaders();
		const body = JSON.stringify(record);

		return this.httpClient.post(url, body, headers).pipe(
			timeout(120000)
		)
			.pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	gerarProgramaca1o(programacao: any): Observable<any> {
		const url = `${AppComponent.serviceUrl}/servicos_programados/gerar_programacao`;
		const headers = this.httpHeaders();
		const body = JSON.stringify(programacao);

		return this.httpClient.post(url, body, headers)
			.pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}


	/* ************************************************************************************************************* **
	 * BUSCA POR SERVIÇO (UNIQUE).
	 * ************************************************************************************************************* */
	selectUniqueServicoById(id: string): Observable<any> {
		const url = `${AppComponent.serviceUrl}/servicos/${id}`;
		const headers = this.httpHeaders();

		return this.httpClient.get(url, headers)
			.pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}
	selectUniqueServicoByDescricao(descricao: string): Observable<any> {
		const url = `${AppComponent.serviceUrl}/servicos/s/by/descricao`;
		const headers = this.httpHeaders();

		return this.httpClient.post(url, descricao, headers)
			.pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}
	selectUniqueServicoAtivoByDescricao(descricao: string): Observable<any> {
		const url = `${AppComponent.serviceUrl}/servicos/ativos/s/descricao`;
		const headers = this.httpHeaders();

		return this.httpClient.post(url, descricao, headers)
			.pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}
	selectUniqueServicoAtivoFiltered(record: any): Observable<any> {
		const url = `${AppComponent.serviceUrl}/servicos/ativos/f`;
		const body = JSON.stringify(record);
		const headers = this.httpHeaders();

		return this.httpClient.post(url, body, headers)
			.pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	/* ************************************************************************************************************* **
	 * LISTAGEM DE SERVIÇOS
	 * ************************************************************************************************************* */
	selectListServicosByCompany(empresaId: string): Observable<any> {
		const headers = this.httpHeaders();
		const url = `${AppComponent.serviceUrl}/empresas/${empresaId}/servicos`;

		return this.httpClient.get(url, headers)
			.pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	selectServicos(): Observable<any> {
		return this.httpClient.get(`${AppComponent.serviceUrl}/servicos`, this.httpHeaders())
			.pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	selectListServicosPaginated(page_size: number, page_index: number): Observable<any> {
		return this.httpClient.get(`${AppComponent.serviceUrl}/servicos?page_size=${page_size}&page_index=${page_index}`, this.httpHeaders())
			.pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	selectListServicos(page_size: number, page_index): Observable<any> {
		return this.httpClient.get(`${AppComponent.serviceUrl}/empresas/servicos/validacao/buscar?page_size=${page_size}&page_index=${page_index}`, this.httpHeaders())
			.pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	selectListServicosPaginatedAndFiltered(filters: any, pageSize: number, pageIndex: number): Observable<any> {
		const body = JSON.stringify(filters);

		const headers = this.httpHeaders();
		const url = `${AppComponent.serviceUrl}/servicos/p/${pageSize}/page/${pageIndex}/f`;

		return this.httpClient.post(url, body, headers)
			.pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	selectEmpresasComServicosFaltando(servicoId: number): Observable<any> {
		return this.httpClient.get(`${AppComponent.serviceUrl}/empresas/servicos/${servicoId}/faltando`, this.httpHeaders())
			.pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	selectEmpresasComServicosSobrando(servicoId: number): Observable<any> {
		return this.httpClient.get(`${AppComponent.serviceUrl}/empresas/servicos/${servicoId}/sobrando`, this.httpHeaders())
			.pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	/* ************************************************************************************************************* **
	 * CREATE, UPDATE E DELETE SERVIÇO.
	 * ************************************************************************************************************* */
	createServico(servico: Servico): Observable<any> {
		return this.httpClient.post(`${AppComponent.serviceUrl}/servicos`, JSON.stringify(servico), this.httpHeaders())
			.pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	updateServico(id: string, servico: Servico): Observable<any> {
		return this.httpClient.put(`${AppComponent.serviceUrl}/servicos/${id}`, JSON.stringify(servico), this.httpHeaders())
			.pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	addServicesToCompany(diaVencimento: number, situacao: boolean, justificativa: string, objetoEmpresa: any, objetoServico: any): Observable<any> {
		const url = `${AppComponent.serviceUrl}/empresas/servicos/`;

		let body = {
			'empresa': objetoEmpresa,
			'servico': objetoServico,
			'vencimentoAlternativo': diaVencimento,
			'ativo': situacao,
			'justificativa': justificativa
		};

		return this.httpClient.post(url, body, this.httpHeaders())
			.pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}
	//Caso precise um request pra atualizar a empresa/serviço, ta aqui
	// updateServicosFaltantes(empresaId: number, servicoId: number, diaVencimento: number, situacao: boolean, justificativa: string, objetoEmpresa: any, objetoServico: any): Observable<any> {
	// 	const url = `${AppComponent.serviceUrl}/empresas/${empresaId}/servicos/alterar/${servicoId}`;

	// 	let body = {
	// 		'empresa': {},
	// 		'servico': {},
	// 		'vencimentoAlternativo': diaVencimento,
	// 		'ativo': situacao,
	// 		'justificativa': justificativa
	// 	};

	// 	return this.httpClient.put(url, body, this.httpHeaders())
	// 		.pipe( 			catchError((err: HttpErrorResponse) => this.handler(err)) 		)
	// }

	deleteServicosFaltantes(empresaId: number, servicoId: number): Observable<any> {
		return this.httpClient.delete(`${AppComponent.serviceUrl}/empresas/${empresaId}/servicos/remover/${servicoId}`, this.httpHeaders())
			.pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	deleteServico(id: string): Observable<any> {
		return this.httpClient.delete(`${AppComponent.serviceUrl}/servicos/${id}`, this.httpHeaders())
			.pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	/* ************************************************************************************************************* **
	 * VALIDA SERVIÇO.
	 * ************************************************************************************************************* */

	validaServico(empresaId: number): Observable<any> {
		return this.httpClient.get(`${AppComponent.serviceUrl}/empresas/${empresaId}/servicos/verificar`, this.httpHeaders())
			.pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	/* ************************************************************************************************************* **
	 * CREATE, UPDATE E DELETE SERVIÇO PROGRAMADO.
	 * ************************************************************************************************************* */
	deleteAllServicosProgramados(): Observable<any> {
		const url = `${AppComponent.serviceUrl}/servicos_programados/delete/all`;
		const headers = this.httpHeaders();

		return this.httpClient.delete(url, headers)
			.pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	deleteServicosProgramadosEmLote(servicoProgramado: any[]): Observable<any> {
		const url = `${AppComponent.serviceUrl}/servicos_programados/excluir/em_lote`;
		const headers = this.httpHeaders();

		return this.httpClient.post(url, JSON.stringify(servicoProgramado), headers)
			.pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	deleteServicosProgramadosPorProgramacao(programacao: any): Observable<any> {
		const url = `${AppComponent.serviceUrl}/servicos_programados/excluir/por_programacao`;
		const headers = this.httpHeaders();

		return this.httpClient.post(url, JSON.stringify(programacao), headers)
			.pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	insertServicoProgramado(servicoProgramado: any): Observable<any> {
		const url = `${AppComponent.serviceUrl}/servicos_programados/avulso`;
		const headers = this.httpHeaders();
		const body = JSON.stringify(servicoProgramado);

		return this.httpClient.post(url, body, headers)
			.pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	updateServicoProgramado(id: number, servicoProgramado: any): Observable<any> {
		const url = `${AppComponent.serviceUrl}/servicos_programados/${id}`;
		const headers = this.httpHeaders();
		const body = JSON.stringify(servicoProgramado);

		return this.httpClient.put(url, body, headers)
			.pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	updateStatusServicoProgramado(status: any, idServicoProgramado: number): Observable<any> {
		const url = `${AppComponent.serviceUrl}/servicos_programados/${idServicoProgramado}/status`;
		const headers = this.httpHeaders();

		return this.httpClient.post(url, status, headers)
			.pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	validateServico(codigosERP: any): Observable<any> {
		const url = `${AppComponent.serviceUrl}/empresas/servicos/validacao`;
		const headers = this.httpHeaders();

		let body = {
			'codigosERP': codigosERP
		};

		return this.httpClient.post(url, body, headers)
			.pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}


	/* ************************************************************************************************************* **
	 * CREATE, UPDATE E DELETE SERVIÇO PROGRAMADO (FEED)
	 * ************************************************************************************************************* */
	insertServicoProgramadoFeed(servicoProgramadoFeed: any): Observable<any> {
		const url = `${AppComponent.serviceUrl}/servicos_programados/feed/`;
		const headers = this.httpHeaders();
		const body = JSON.stringify(servicoProgramadoFeed);

		return this.httpClient.post(url, body, headers)
			.pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	insertServicoProgramadoBaixaEmLote(record: any): Observable<any> {
		const url = `${AppComponent.serviceUrl}/servicos_programados/baixa_em_lotes/`;
		const headers = this.httpHeaders();

		const body = JSON.stringify(record);

		return this.httpClient.post(url, body, headers)
			.pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	updateServicoProgramadoFeed(idServicoProgramadoFeed: number, servicoProgramadoFeed: any): Observable<any> {
		const url = `${AppComponent.serviceUrl}/servicos_programados/feed/${idServicoProgramadoFeed}`;
		const headers = this.httpHeaders();
		const body = JSON.stringify(servicoProgramadoFeed);

		return this.httpClient.put(url, body, headers)
			.pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	togglePublishFeed(publish: boolean, idFeed: number): Observable<any> {
		const url = `${AppComponent.serviceUrl}/servicos_programados/feed/${idFeed}/publish`;
		const headers = this.httpHeaders();

		return this.httpClient.post(url, publish, headers)
			.pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}
	/* ************************************************************************************************************* **
	 * TAGS
	 * ************************************************************************************************************* */
	public buscarTagsDoServico(servicoId: number): Observable<any> {
		return this.httpClient.get(`${AppComponent.serviceUrl}/servicos/${servicoId}/tags`, this.httpHeaders()
		).pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	public adicionarTagAoServico(servicoId: number, tag: any): Observable<any> {
		return this.httpClient.post(`${AppComponent.serviceUrl}/servicos/${servicoId}/tags/adicionar`, JSON.stringify(tag), this.httpHeaders()
		).pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	public removerTagDoServico(servicoId: number, tag: any): Observable<any> {
		return this.httpClient.post(`${AppComponent.serviceUrl}/servicos/${servicoId}/tags/remover`, JSON.stringify(tag), this.httpHeaders()
		).pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	public importarTagsDoServico(servicoId: number, referenciaId: number): Observable<any> {
		return this.httpClient.get(`${AppComponent.serviceUrl}/servicos/${servicoId}/tags/importar/${referenciaId}`, this.httpHeaders()
		).pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	/* ************************************************************************************************************* **
	 * REGRAS DE NEGÓCIO
	 * ************************************************************************************************************* */
	public buscarRegras(servicoId: number, pageSize: number, pageIndex: number): Observable<any> {
		return this.httpClient.get(`${AppComponent.serviceUrl}/regra_caracteristicas/servicos/${servicoId}?page_size=${pageSize}&page_index=${pageIndex}`, this.httpHeaders()
		).pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	public criaRegras(id: number, descricao: string, idServico: number): Observable<any> {

		const url = `${AppComponent.serviceUrl}/regra_caracteristicas`
		const header = this.httpHeaders();
		const body = {
			"id": id,
			"descricao": descricao,
			"servico": { 'id': idServico }
		}

		return this.httpClient.post(url, body, header).pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	public deleteRegras(regraId: number): Observable<any> {
		return this.httpClient.delete(`${AppComponent.serviceUrl}/regra_caracteristicas/${regraId}`, this.httpHeaders()
		).pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	/* ************************************************************************************************************* **
	 * EMPRESAS COM SERVIÇO ATUAL
	 * ************************************************************************************************************* */
	public buscarEmpresasComEsteServico(servicoId: number, pageSize: number, pageIndex: number): Observable<any> {
		return this.httpClient.get(`${AppComponent.serviceUrl}/servicos/${servicoId}/empresas?page_size=${pageSize}&page_index=${pageIndex}`, this.httpHeaders()
		).pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	public adicionarEmpresaNoServico(servicoId: number, empresaId: number): Observable<any> {
		return this.httpClient.get(`${AppComponent.serviceUrl}/servicos/${servicoId}/empresas/adicionar/${empresaId}`, this.httpHeaders()
		).pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	public removerEmpresaDoServico(servicoId: number, empresaId: number): Observable<any> {
		return this.httpClient.delete(`${AppComponent.serviceUrl}/servicos/${servicoId}/empresas/remover/${empresaId}`, this.httpHeaders()
		).pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	public importarEmpresasDoServico(servicoId: number, referenciaId: number): Observable<any> {
		return this.httpClient.get(`${AppComponent.serviceUrl}/servicos/${servicoId}/empresas/importar/${referenciaId}`, this.httpHeaders()
		).pipe(catchError((err: HttpErrorResponse) => this.handler(err)))
	}

	public validarEmpresasDoServico(servicoId: number, filtroEmpresa: EmpresaFiltroAvancado, pageSize: number, pageIndex: number): Observable<any> {
		return this.httpClient.post(`${AppComponent.serviceUrl}/servicos/${servicoId}/empresas/validar?page_size=${pageSize}&page_index=${pageIndex}`, JSON.stringify(filtroEmpresa), this.httpHeaders()
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
