import { DepartamentoShort } from './DepartamentoShort';
import { ServicoShort } from './ServicoShort';
import { UsuarioShort } from './UsuarioShort';

export class GestaoServicos {
    dataProgramadaInicio: Date;
    dataProgramadaTermino: Date;

    departamento: DepartamentoShort;
    servico: ServicoShort;
    usuario: UsuarioShort;

    empresa: string[];

    constructor(build) {
        if (build.dataProgramadaInicio != new Date(0) && build.dataProgramadaInicio != null) {
            this.dataProgramadaInicio = new Date(build.dataProgramadaInicio);
        } else {
            this.dataProgramadaInicio = null;
        }

        if (build.dataProgramadaTermino != new Date(0) && build.dataProgramadaTermino != null) {
            this.dataProgramadaTermino = new Date(build.dataProgramadaTermino);
        } else {
            this.dataProgramadaTermino = null;
        }

        if (build.departamento) {
            this.departamento = new DepartamentoShort(build.departamento);
        } else {
            this.departamento = null;
        }

        if (build.servico) {
            this.servico = new ServicoShort(build.servico);
        } else {
            this.servico = null;
        }

        if (build.usuario) {
            this.usuario = new UsuarioShort(build.usuario);
        } else {
            this.usuario = null;
        }

        if (build.empresa != null && build.empresa != 'undefined') {
            this.empresa = build.empresa;
        } else {
            this.empresa = null;
        }
    }

    static get Builder() {
        class Builder {
            dataProgramadaInicio: Date;
            dataProgramadaTermino: Date;

            departamento: DepartamentoShort;
            servico: ServicoShort;
            usuario: UsuarioShort;

            empresa: string[];

            constructor() { }

            public empty() {
                let date = new Date(), y = date.getFullYear(), m = date.getMonth();
                this.dataProgramadaInicio = new Date(y, m - 1, 1);
                this.dataProgramadaTermino = new Date(y, m + 1, 0);
                this.departamento = new DepartamentoShort.Builder(null).empty().build();;
                this.servico = new ServicoShort.Builder(null).empty().build();;
                this.usuario = new UsuarioShort.Builder(null).empty().build();
                this.empresa = [];
                return this;
            }

            withDataProgramadaInicio(dataProgramadaInicio: Date) {
                if (dataProgramadaInicio != new Date(0) && dataProgramadaInicio != null) {
                    this.dataProgramadaInicio = new Date(dataProgramadaInicio);
                } else {
                    this.dataProgramadaInicio = null;
                }
                return this;
            }

            withDataProgramadaTermino(dataProgramadaTermino: Date) {
                if (dataProgramadaTermino != new Date(0) && dataProgramadaTermino != null) {
                    this.dataProgramadaTermino = new Date(dataProgramadaTermino);
                } else {
                    this.dataProgramadaTermino = null;
                }
                return this;
            }

            withDepartamento(departamento: DepartamentoShort) {
                if (departamento != null && typeof departamento != 'undefined') {
                    this.departamento = new DepartamentoShort(departamento);
                } else {
                    this.departamento = null;
                }
                return this;
            }

            withServico(servico: ServicoShort) {
                if (servico != null && typeof servico != 'undefined') {
                    this.servico = new ServicoShort(servico);
                } else {
                    this.servico = null;
                }
                return this;
            }

            withUsuario(usuario: UsuarioShort) {
                if (usuario != null && typeof usuario != 'undefined') {
                    this.usuario = new UsuarioShort(usuario);
                } else {
                    this.usuario = null;
                }
                return this;
            }

            withEmpresa(empresa: string[]) {
                if (empresa != null && typeof empresa != 'undefined') {
                    this.empresa = empresa;
                } else {
                    this.empresa = null;
                }
                return this;
            }

            build() {
                return new GestaoServicos(this);
            }

        }
        return Builder;
    }

}
