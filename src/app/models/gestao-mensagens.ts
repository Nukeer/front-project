import { DepartamentoShort } from './DepartamentoShort';

export class GestaoMensagensGroupBy {

    public static ASSUNTO = 2;
    public static EMPRESA = 1;
    public static CONTATO = 0;

}



export class GestaoMensagens {
    assunto: string;
    empresaCodId: string[];

    groupBy: number;
    statusConversa: number;
    tipoConversa: number;
    organizacoes: number;
    usuarioContabil: any;
    usuarioCliente: number;

    departamento: DepartamentoShort;

    dataInicio: Date;
    dataFim: Date;

    enviou: number;

    constructor(build) {
        this.assunto = build.assunto;

        this.groupBy = build.groupBy;
        this.statusConversa = build.statusConversa;
        this.tipoConversa = build.tipoConversa;
        this.organizacoes = build.organizacoes;

        if (build.empresaCodId != null && build.empresaCodId != 'undefined') {
            this.empresaCodId = build.empresaCodId;
        } else {
            this.empresaCodId = null;
        }

        this.usuarioContabil = build.usuarioContabil;

        this.usuarioCliente = build.usuarioCliente;

        // Comentado porque o server não recebe o Departamento ainda
        // if (build.departamento) {
        //     this.departamento = new DepartamentoShort(build.departamento);
        // } else {
        //     this.departamento = null;
        // }

        if (build.dataInicio != new Date(0) && build.dataInicio != null) {
            this.dataInicio = new Date(build.dataInicio);
        } else {
            this.dataInicio = null;
        }

        if (build.dataFim != new Date(0) && build.dataFim != null) {
            this.dataFim = new Date(build.dataFim);
        } else {
            this.dataFim = null;
        }

        this.enviou = build.enviou;
    }

    static get Builder() {
        class Builder {
            assunto: string;
            empresaCodId: string[];

            groupBy: number;
            statusConversa: number;
            tipoConversa: number;
            organizacoes: number;
            usuarioContabil: any;
            usuarioCliente: number;

            departamento: DepartamentoShort;

            dataInicio: Date;
            dataFim: Date;

            enviou: number;

            constructor() { }

            withAssunto(assunto: string) {
                this.assunto = assunto;
                return this;
            }

            withGroupBy(groupBy: number) {
                this.groupBy = groupBy;
                return this;
            }

            withStatusConversa(statusConversa: number) {
                this.statusConversa = statusConversa;
                return this;
            }

            withOrganizacoes(organizacoes: number) {
                this.organizacoes = organizacoes;
                return this;
            }

            withTipoConversa(tipoConversa: number) {
                this.tipoConversa = tipoConversa;
                return this;
            }

            withEmpresa(empresaCodId: string[]) {
                if (empresaCodId != null && typeof empresaCodId != 'undefined') {
                    this.empresaCodId = empresaCodId;
                } else {
                    this.empresaCodId = null;
                }
                return this;
            }

            withUsuarioContabil(usuarioContabil: any) {
                this.usuarioContabil = usuarioContabil;
                return this;
            }

            withUsuarioCliente(usuarioCliente: number) {
                this.usuarioCliente = usuarioCliente
                return this;
            }

            // Comentado porque o server não recebe o Departamento ainda
            // withDepartamento(departamento: DepartamentoShort) {
            //     if (departamento != null && typeof departamento != 'undefined') {
            //         this.departamento = new DepartamentoShort(departamento);
            //     } else {
            //         this.departamento = null;
            //     }
            //     return this;
            // }

            withDataInicio(dataInicio: Date) {
                if (dataInicio != new Date(0) && dataInicio != null) {
                    this.dataInicio = new Date(dataInicio);
                } else {
                    this.dataInicio = null;
                }
                return this;
            }

            withDataFim(dataFim: Date) {
                if (dataFim != new Date(0) && dataFim != null) {
                    this.dataFim = new Date(dataFim);
                } else {
                    this.dataFim = null;
                }
                return this;
            }

            withEnviou(enviou: number) {
                this.enviou = enviou;
                return this;
            }

            build() {
                return new GestaoMensagens(this);
            }

        }
        return Builder;
    }

}
