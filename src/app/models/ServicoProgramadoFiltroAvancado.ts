import { EmpresaShort } from "./Empresa/EmpresaShort";
import { ServicoShort } from "./ServicoShort";
import { UsuarioShort } from "./UsuarioShort";
import { DepartamentoShort } from "./DepartamentoShort";

export class ServicoProgramadoFiltroAvancado {

    dataProgramadaInicio: Date;
    dataProgramadaTermino: Date;

    dataVencimentoInicio: Date;
    dataVencimentoTermino: Date;

    empresa: EmpresaShort;
    servico: ServicoShort;
    usuario: UsuarioShort;
    departamento: DepartamentoShort;

    competencia: string;

    status: number;
    tipoBaixa: number;

    constructor(build) {
        // COMPETENCIA
        this.competencia = build.competencia;

        // STATUS
        this.status = build.status;

        // TIPO BAIXA
        this.tipoBaixa = build.tipoBaixa;

        // DATA PROGRAMADA INICIO
        if (build.dataProgramadaInicio != new Date(0) && build.dataProgramadaInicio != null) {
            this.dataProgramadaInicio = new Date(build.dataProgramadaInicio);
        } else {
            this.dataProgramadaInicio = null;
        }

        // DATA PROGRAMADA TERMINO
        if (build.dataProgramadaTermino != new Date(0) && build.dataProgramadaTermino != null) {
            this.dataProgramadaTermino = new Date(build.dataProgramadaTermino);
        } else {
            this.dataProgramadaTermino = null;
        }

        // DATA VENCIMENTO INICIO
        if (build.dataVencimentoInicio != new Date(0) && build.dataVencimentoInicio != null) {
            this.dataVencimentoInicio = new Date(build.dataVencimentoInicio);
        } else {
            this.dataVencimentoInicio = null;
        }

        // DATA VENCIMENTO TERMINO
        if (build.dataVencimentoTermino != new Date(0) && build.dataVencimentoTermino != null) {
            this.dataVencimentoTermino = new Date(build.dataVencimentoTermino);
        } else {
            this.dataVencimentoTermino = null;
        }

        // EMPRESA
        if (typeof build.empresa != "undefined" && build.empresa != null) {
            this.empresa = new EmpresaShort(build.empresa);
        } else {
            this.empresa = null;
        }

        // SERVICO
        if (typeof build.servico != "undefined" && build.servico != null) {
            this.servico = new ServicoShort(build.servico);
        } else {
            this.servico = null;
        }

        // USUARIO
        if (typeof build.usuario != "undefined" && build.usuario != null) {
            this.usuario = new UsuarioShort(build.usuario);
        } else {
            this.usuario = null;
        }
        // DEPARTAMENTO
        if (typeof build.departamento != "undefined" && build.departamento != null) {
            this.departamento = new DepartamentoShort(build.departamento);
        } else {
            this.departamento = null;
        }
    }

    static get Builder() {
        class Builder {
            competencia: string;
            status: number;
            tipoBaixa: number;

            empresa: EmpresaShort;
            servico: ServicoShort;
            usuario: UsuarioShort;
            departamento: DepartamentoShort;

            dataProgramadaInicio: Date;
            dataProgramadaTermino: Date;
            dataVencimentoInicio: Date;
            dataVencimentoTermino: Date;

            public withCompetencia(competencia: string) {
                this.competencia = competencia;
                return this;
            }

            public withStatus(status: number) {
                this.status = status;
                return this;
            }

            public withTipoBaixa(tipoBaixa: number) {
                this.tipoBaixa = tipoBaixa;
                return this;
            }

            public withEmpresa(empresa: EmpresaShort) {
                if (typeof empresa != "undefined" && empresa != null) {
                    this.empresa = new EmpresaShort(empresa);
                } else {
                    this.empresa = null;
                }
                return this;
            }

            public withServico(servico: ServicoShort) {
                if (typeof servico != "undefined" && servico != null) {
                    this.servico = new ServicoShort(servico);
                } else {
                    this.servico = null;
                }
                return this;
            }

            public withUsuario(usuario: UsuarioShort) {
                if (typeof usuario != "undefined" && usuario != null) {
                    this.usuario = new UsuarioShort(usuario);
                } else {
                    this.usuario = null;
                }
                return this;
            }
           
            public withDepartamento(departamento: DepartamentoShort) {
                if (typeof departamento != "undefined" && departamento != null) {
                    this.departamento = new DepartamentoShort(departamento);
                } else {
                    this.departamento = null;
                }
                return this;
            }

            public withDataProgramadaInicio(dataProgramadaInicio: Date) {
                if (dataProgramadaInicio != new Date(0) && dataProgramadaInicio != null) {
                    this.dataProgramadaInicio = new Date(dataProgramadaInicio);
                } else {
                    this.dataProgramadaInicio = null;
                }
                return this;
            }
            public withDataProgramadaTermino(dataProgramadaTermino: Date) {
                if (dataProgramadaTermino != new Date(0) && dataProgramadaTermino != null) {
                    this.dataProgramadaTermino = new Date(dataProgramadaTermino);
                } else {
                    this.dataProgramadaTermino = null;
                }
                return this;
            }
            public withDataVencimentoInicio(dataVencimentoInicio: Date) {
                if (dataVencimentoInicio != new Date(0) && dataVencimentoInicio != null) {
                    this.dataVencimentoInicio = new Date(dataVencimentoInicio);
                } else {
                    this.dataVencimentoInicio = null;
                }
                return this;
            }
            public withDataVencimentoTermino(dataVencimentoTermino: Date) {
                if (dataVencimentoTermino != new Date(0) && dataVencimentoTermino != null) {
                    this.dataVencimentoTermino = new Date(dataVencimentoTermino);
                } else {
                    this.dataVencimentoTermino = null;
                }
                return this;
            }

            build() {
                return new ServicoProgramadoFiltroAvancado(this);
            }

        }

        return Builder;
    }
}