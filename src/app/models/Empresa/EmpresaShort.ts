import { EmpresaContabilidadeShort } from './EmpresaContabilidadeShort';

export class EmpresaShort {

    id: number;
    codigoErp: string;
    razaoSocial: string;
    nomeResumido: string;
    empresaContabilidade: EmpresaContabilidadeShort;

    constructor(build) {
        this.id = build.id;
        this.codigoErp = build.codigoErp;
        this.razaoSocial = build.razaoSocial;
        this.nomeResumido = build.nomeResumido;

        if (typeof build.empresaContabilidade != "undefined" && build.empresaContabilidade != null) {
            this.empresaContabilidade = new EmpresaContabilidadeShort(build.empresaContabilidade);
        } else {
            this.empresaContabilidade = null;
        }
    }

    static get Builder() {
        class Builder {
            id: number;
            codigoErp: string;
            razaoSocial: string;
            nomeResumido: string;
            empresaContabilidade: any;

            constructor(id) {
                this.id = id;
            }

            public withCodigoERP(codigoErp: string) {
                this.codigoErp = codigoErp;
                return this;
            }

            public withRazaoSocial(razaoSocial: string) {
                this.razaoSocial = razaoSocial;
                return this;
            }

            public withNomeResumido(nomeResumido: string) {
                this.nomeResumido = nomeResumido;
                return this;
            }

            public withEmpresaContabilidade(empresaContabilidade: any) {
                if (typeof empresaContabilidade != "undefined" && empresaContabilidade != null) {
                    this.empresaContabilidade = new EmpresaContabilidadeShort(empresaContabilidade);
                } else {
                    this.empresaContabilidade = null;
                }
                return this;
            }

            build() {
                return new EmpresaShort(this);
            }
        }
        return Builder;
    }
}