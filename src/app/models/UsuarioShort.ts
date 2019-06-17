import { Contabilidade } from './Contabilidade';
import { Empresa } from './Empresa/Empresa';

export class UsuarioShort {

	id: number;
	nome: string;
	email: string;

	constructor(build) {
		this.id = build.id;
		this.nome = build.nome;
		this.email = build.email;
	}

	static get Builder() {
		class Builder {
			id: number;
			nome: string;
			email: string;

			constructor(id) {
				this.id = id;
			}

			public empty() {
				this.id = null;
				this.nome = '';
				this.email = '';
				return this;
			}

			public withNome(nome: string) {
				this.nome = nome;
				return this;
			}

			public withEmail(email: string) {
				this.email = email;
				return this;
			}

			build() {
				return new UsuarioShort(this);
			}
		}
		return Builder;
	}
}

export class Usuario {

	public id: number;

	public nome: string;

	public email: string;

	public senha: string;

	public contabilidade: Contabilidade;

	public empresa: Empresa;

	public Usuario() {
	}

	public fromJson(json): Usuario {
		for (var property in json) {
			switch (property) {
				default:
					this[property] = json[property];
					break;
			}
		}
		return this;
	}


	public getId(): number {
		return this.id;
	}

	public setId(id: number): void {
		this.id = id;
	}

	public getNome(): string {
		return this.nome;
	}

	public setNome(nome: string): void {
		this.nome = nome;
	}

	public getEmail(): string {
		return this.email;
	}

	public setEmail(email: string): void {
		this.email = email;
	}

	public getSenha(): string {
		return this.senha;
	}

	public setSenha(senha: string): void {
		this.senha = senha;
	}

	public getContabilidade(): Contabilidade {
		return this.contabilidade;
	}

	public setContabilidade(contabilidade: Contabilidade): void {
		this.contabilidade = contabilidade;
	}

	public getEmpresa(): Empresa {
		return this.empresa;
	}

	public setEmpresa(empresa: Empresa): void {
		this.empresa = empresa;
	}


}
