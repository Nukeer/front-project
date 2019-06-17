import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';

/* Components */
import { UsuarioRoutingModule } from './Usuario.routing';
import { ListagemUsuariosComponent } from './listar-usuarios/listar-usuarios.component';

@NgModule({
	declarations: [
		ListagemUsuariosComponent
	],
	imports: [
		UsuarioRoutingModule,

		CommonModule,
		FormsModule,
		ReactiveFormsModule,

		// Components Prime NG
		CardModule,
		TableModule,
		InputTextModule
	],
	providers: [
	],
	bootstrap: [
		ListagemUsuariosComponent
	],
	entryComponents: [
	]
})

export class UsuarioModule { }
