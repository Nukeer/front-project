import { GrupoServico } from "./GrupoServico";

export class ServicoShortComDepartamentoEGuiaERP {

    id: number;

    nome: string;

    ativo: number;

    permiteBaixaManual: number;

    departamento: GrupoServico;

    guiaERP: any;

    constructor(build) {
        this.id = build.id;

        this.nome = build.nome;

        this.ativo = build.ativo;

        this.permiteBaixaManual = build.permiteBaixaManual;

        if (typeof build.departamento != "undefined" && build.departamento != null) {
            this.departamento = new GrupoServico(build.departamento);
        } else {
            this.departamento = null;
        }

        this.guiaERP = build.guiaERP
    }

    static get Builder() {
        class Builder {
            id: number;

            nome: string;

            departamento: GrupoServico;

            ativo: number;

            permiteBaixaManual: number;

            guiaERP: any;

            constructor(id) {
                this.id = id
            }

            public withNome(nome: string) {
                this.nome = nome;
                return this;
            }

            public withAtivo(ativo: number) {
                this.ativo = ativo;
                return this;
            }

            public withPermiteBaixaManual(permiteBaixaManual: number) {
                this.permiteBaixaManual = permiteBaixaManual;
                return this;
            }

            public withDepartamento(departamento: any) {
                if (typeof departamento != "undefined" && departamento != null) {
                    this.departamento = new GrupoServico(departamento);
                } else {
                    this.departamento = null;
                }
                return this;
            }

            public withGuiaERP(guiaERP: any) {
                if (typeof guiaERP != "undefined" && guiaERP != null) {
                    this.guiaERP = guiaERP
                } else {
                    this.guiaERP = null;
                }
                return this;
            }

            build() {
                return new ServicoShortComDepartamentoEGuiaERP(this);
            }
        }

        return Builder;
    }
}
