export class EmpresaContabilidadeShort {

    id: number;
    cnpj: string;

    constructor(build) {
        this.id = build.id;
        this.cnpj = build.cnpj;
    }

    static get Builder() {
        class Builder {
            id: number;
            cnpj: string;

            constructor(id) {
                this.id = id;
            }

            public withCNPJ(cnpj: string) {
                this.cnpj = cnpj;
                return this;
            }

            build() {
                return new EmpresaContabilidadeShort(this);
            }
        }
        return Builder;
    }

}