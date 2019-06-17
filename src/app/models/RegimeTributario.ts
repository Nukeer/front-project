export class RegimeTributario {

	id: number;
	descricao: string;

	constructor(build) {
		this.id = build.id;
		this.descricao = build.descricao;
	}

	static get Builder() {
		class Builder {
			id: number;
			descricao: string;

			constructor(id) {
				this.id = id;
			}

			public withDescricao(descricao: string): Builder {
				this.descricao = descricao;
				return this;
			}

			public build(): RegimeTributario {
				return new RegimeTributario(this);
			}
		}

		return Builder;
	}
}
