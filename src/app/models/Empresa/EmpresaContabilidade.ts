export class EmpresaContabilidade {

	id: number;

	cnpj: string;

	inicioPrestacaoServicos: Date;

	constructor(build) {
		this.id = build.id;

		if (build.inicioPrestacaoServicos != new Date(0) && build.inicioPrestacaoServicos != null) {
			this.inicioPrestacaoServicos = build.inicioPrestacaoServicos;
		} else {
			this.inicioPrestacaoServicos = null;
		}

		this.cnpj = build.cnpj;
	}

	static get Builder() {
		class Builder {
			id: number;

			cnpj: string;

			inicioPrestacaoServicos: Date;

			constructor(id) {
				this.id = id;
			}

			public withCNPJ(cnpj: string) {
				this.cnpj = cnpj;
				return this;
			}

			public withInicioPrestacaoServicos(inicioPrestacaoServicos: Date) {
				if (inicioPrestacaoServicos != new Date(0) && inicioPrestacaoServicos != null) {
					this.inicioPrestacaoServicos = new Date(inicioPrestacaoServicos);
				} else {
					this.inicioPrestacaoServicos = null;
				}
				return this;
			}

			build() {
				return new EmpresaContabilidade(this);
			}
		}
		return Builder;
	}

}