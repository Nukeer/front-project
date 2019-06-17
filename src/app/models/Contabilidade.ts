export class Contabilidade {

	id: number;

	razaoSocial: string;

	nomeResumido: string;

	cnpj: string;

	constructor(build) {
		this.id = build.id;
		this.razaoSocial = build.razaoSocial;
		this.nomeResumido = build.nomeResumido;
		this.cnpj = build.cnpj;
	}

	static get Builder() {
		class Builder {
			id: number;

			razaoSocial: string;

			nomeResumido: string;

			cnpj: string;

			constructor(id){
				this.id = id;
			}

			public withRazaoSocial(razaoSocial: string) {
				this.razaoSocial = razaoSocial;
				return this;
			}
			public withNomeResumido(nomeResumido: string) {
				this.nomeResumido = nomeResumido;
				return this;
			}
			public withCNPJ(cnpj: string) {
				this.cnpj = cnpj;
				return this;
			}

			build() {
				return new Contabilidade(this);
			}

		}
		return Builder;
	}

}
