import { Contabilidade } from './Contabilidade';
import { UsuarioShort } from './UsuarioShort';

export class GrupoServico {

	id: number;

	descricao: string;

	gerente: UsuarioShort;

	tipoContabilidade: boolean;

	tipoCliente: boolean;

	isGrupo: boolean;

	tagDescription: string;

	usarComunicacao: boolean;

	constructor(build) {
		this.id = build.id;
		this.descricao = build.descricao;

		if (build.gerente != "undefined" && build.gerente != null) {
			this.gerente = new UsuarioShort(build.gerente);
		} else {
			this.gerente = null;
		}

		this.tagDescription = build.tagDescription;
		this.tipoContabilidade = build.tipoContabilidade;
		this.tipoCliente = build.tipoCliente;
		this.isGrupo = build.isGrupo;
		this.usarComunicacao = build.usarComunicacao;

	}

	static get Builder() {
		class Builder {
			id: number;

			descricao: string;

			gerente: UsuarioShort;

			tipoContabilidade: boolean;

			tipoCliente: boolean;

			isGrupo: boolean;

			tagDescription: string;

			usarComunicacao: boolean;

			constructor(id) {
				this.id = id;
			}

			public withGerente(gerente: any) {
				if (gerente != "undefined" && gerente != null) {
					this.gerente = new UsuarioShort(gerente);
				} else {
					this.gerente = null;
				}
				return this;
			}

			public withDescricao(descricao: string) {
				this.descricao = descricao;
				return this;
			}

			public withTagDescription(tagDescription: string) {
				this.tagDescription = tagDescription;
				return this;
			}

			public withTipoContabilidade(tipoContabilidade: boolean) {
				this.tipoContabilidade = tipoContabilidade;
				return this;
			}

			public withTipoCliente(tipoCliente: boolean) {
				this.tipoCliente = tipoCliente;
				return this;
			}

			public withIsGrupo(isGrupo: boolean) {
				this.isGrupo = isGrupo;
				return this;
			}

			public withUsarComunicacao(usarComunicacao: boolean) {
				this.usarComunicacao = usarComunicacao;
				return this;
			}

			build() {
				return new GrupoServico(this);
			}
		}
		return Builder;
	}

}
