export class Cnae {

	id: number;

	codigo: string;

	descricao: string;

	constructor(build) {
		this.id = build.id;
		this.descricao = build.descricao;
		this.codigo = build.codigo;
	}

	static get Builder() {
		class Builder {
			id: number;

			codigo: string;

			descricao: string;

			constructor(id) {
				this.id = id;
			}

			public withCodigo(codigo: string) {
				this.codigo = codigo; return this;
			}

			public withDescricao(descricao: string) {
				this.descricao = descricao; return this;
			}

			build() {
				return new Cnae(this);
			}
		}

		return Builder;
	}

}