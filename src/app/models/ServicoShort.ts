export class ServicoShortCompetencia {

	id: number;

	nome: string;

	competencia: number;

	constructor(build) {

		this.id = build.id;

		this.nome = build.nome;

		this.competencia = build.competencia;

	}

	static get Builder() {

		class Builder {

			id: number;

			nome: string;

			competencia: number;

			constructor(id) {
				this.id = id;
			}

			public withNome(nome: string) {
				this.nome = nome;
				return this;
			}

			public withCompetencia(competencia: number) {
				this.competencia = competencia;
				return this;
			}


			public build() {
				return new ServicoShort(this);
			}

		}

		return Builder;
	}

}

export class ServicoShort {

	id: number;

	nome: string;

	competencia: number;

	constructor(build) {

		this.id = build.id;

		this.nome = build.nome;


	}

	static get Builder() {

		class Builder {

			id: number;

			nome: string;


			constructor(id) {
				this.id = id;
			}

			public empty(){
				this.id = null;
				this.nome = '';
				return this;
			}

			public withNome(nome: string) {
				this.nome = nome;
				return this;
			}


			public build() {
				return new ServicoShort(this);
			}

		}

		return Builder;
	}

}
