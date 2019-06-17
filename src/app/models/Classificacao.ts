import { RegimeTributario } from "./RegimeTributario";
import { EmpresaContabilidadeShort } from "./Empresa/EmpresaContabilidadeShort";

export class Classificacao {

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

			public withDescricao(descricao: string) {
				this.descricao = descricao;
				return this;
			}

			build() {
				return new Classificacao(this);
			}
		}
		return Builder;
	}
}