export class DepartamentoShort {

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

            public empty() {
                this.id = null;
                this.descricao = '';
                return this;
            }

            public withDescricao(descricao: string) {
                this.descricao = descricao;
                return this;
            }

            build() {
                return new DepartamentoShort(this);
            }
        }
        return Builder;
    }

}
