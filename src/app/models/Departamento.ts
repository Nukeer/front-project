import { Contabilidade } from "./Contabilidade";

export class Departamento {

    id: number;

    descricao: string;

    contabilidade: Contabilidade;

    constructor(build) {
        this.id = build.id;
        this.descricao = build.descricao;
        if (typeof build.contabilidade != "undefined" && build.contabilidade != null) {
            this.contabilidade = new Contabilidade(build.contabilidade);
        } else {
            this.contabilidade = null
        }
    }

    static get Builder() {
        class Builder {
            id: number;

            descricao: string;

            contabilidade: Contabilidade;

            constructor(id) {
                this.id = id;
            }

            public withContabilidade(contabilidade: Contabilidade) {
                if (typeof contabilidade != "undefined" && contabilidade != null) {
                    this.contabilidade = new Contabilidade(contabilidade);
                } else {
                    this.contabilidade = null
                }
                return this;
            }

            public withDescricao(descricao: string) {
                this.descricao = descricao;
                return this;
            }

            build() {
				return new Departamento(this);
			}
        }
        return Builder;
    }

}
