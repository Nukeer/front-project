import { UsuarioShort } from "../UsuarioShort";
import { Cnae } from "../Cnae";
import { EmpresaContabilidadeShort } from "./EmpresaContabilidadeShort";
import { RegimeTributario } from "../RegimeTributario";
import { Classificacao } from "../Classificacao";
import { EmpresaContabilidade } from "./EmpresaContabilidade";

export class Empresa {

    id: number;
    situacao: number;

    inicioValidadeClassificacao: number;
    terminoValidadeClassificacao: number;

    empresaContabilidade: EmpresaContabilidade;
    createdBy: UsuarioShort;
    // dono: UsuarioShort;
    regimeTributario: RegimeTributario;
    classificacao: Classificacao;
    cnaePrimario: Cnae;

    ativo: boolean;

    razaoSocial: string;
    nomeResumido: string;
    inscricaoEstadual: string;
    codigoErp: string;

    classificacoes: [any];
    cnaesSecundarios: [any];

    constructor(build) {
        this.id = build.id;

        if (build.inicioValidadeClassificacao != new Date(0) && build.inicioValidadeClassificacao != null) {
            this.inicioValidadeClassificacao = new Date(build.inicioValidadeClassificacao).getTime();
        } else {
            this.inicioValidadeClassificacao = null;
        }

        if (build.terminoValidadeClassificacao != new Date(0) && build.terminoValidadeClassificacao != null) {
            this.terminoValidadeClassificacao = new Date(build.terminoValidadeClassificacao).getTime();
        } else {
            this.terminoValidadeClassificacao = null;
        }

        if (typeof build.createdBy != "undefined" && build.createdBy != null) {
            this.createdBy = new UsuarioShort(build.createdBy);
        } else {
            this.createdBy = null;
        }

        // if (typeof build.dono != "undefined" && build.dono != null) {
        //     this.dono = new UsuarioShort(build.dono);
        // } else {
        //     this.dono = null;
        // }

        this.ativo = build.ativo;

        this.razaoSocial = build.razaoSocial;

        this.nomeResumido = build.nomeResumido;

        this.inscricaoEstadual = build.inscricaoEstadual;

        this.codigoErp = build.codigoErp;

        this.situacao = build.situacao;

        if (typeof build.classificacao != "undefined" && build.classificacao != null) {
            this.classificacao = new Classificacao(build.classificacao);
        } else {
            this.classificacao = null;
        }

        this.classificacoes = build.classificacoes;

        if (typeof build.regimeTributario != "undefined" && build.regimeTributario != null) {
            this.regimeTributario = new RegimeTributario(build.regimeTributario);
        } else {
            this.regimeTributario = null;
        }

        if (typeof build.cnaePrimario != "undefined" && build.cnaePrimario != null) {
            this.cnaePrimario = new Cnae(build.cnaePrimario);
        } else {
            this.cnaePrimario = null;
        }

        this.cnaesSecundarios = build.cnaesSecundarios;

        if (typeof build.empresaContabilidade != "undefined" && build.empresaContabilidade != null) {
            this.empresaContabilidade = new EmpresaContabilidade(build.empresaContabilidade);
        } else {
            this.empresaContabilidade = null;
        }

    }

    static get Builder() {
        class Builder {
            id: number;
            situacao: number;

            inicioValidadeClassificacao: number;
            terminoValidadeClassificacao: number;

            empresaContabilidade: EmpresaContabilidade;
            createdBy: UsuarioShort;
            // dono: UsuarioShort;
            regimeTributario: RegimeTributario;
            classificacao: Classificacao;
            cnaePrimario: Cnae;

            ativo: boolean;

            razaoSocial: string;
            nomeResumido: string;
            inscricaoEstadual: string;
            codigoErp: string;

            classificacoes: [any];
            cnaesSecundarios: [any];

            constructor(id) {
                this.id = id;
            }

            public withSituacao(situacao: number) {
                this.situacao = situacao;
                return this;
            }

            public withInicioValidadeClassificacao(inicioValidadeClassificacao: Date) {
                if (inicioValidadeClassificacao != new Date(0) && inicioValidadeClassificacao != null) {
                    this.inicioValidadeClassificacao = new Date(inicioValidadeClassificacao).getTime();
                } else {
                    this.inicioValidadeClassificacao = null;
                }
                return this;
            }

            public withTerminoValidadeClassificacao(terminoValidadeClassificacao: Date) {
                if (terminoValidadeClassificacao != new Date(0) && terminoValidadeClassificacao != null) {
                    this.terminoValidadeClassificacao = new Date(terminoValidadeClassificacao).getTime();
                } else {
                    this.terminoValidadeClassificacao = null;
                }
                return this;
            }

            public withEmpresaContabilidade(empresaContabilidade: any) {
                if (typeof empresaContabilidade != "undefined" && empresaContabilidade != null) {
                    this.empresaContabilidade = new EmpresaContabilidade(empresaContabilidade);
                } else {
                    this.empresaContabilidade = null;
                }
                return this;
            }

            public withCreatedBy(createdBy: any) {
                if (typeof createdBy != "undefined" && createdBy != null) {
                    this.createdBy = new UsuarioShort(createdBy);
                } else {
                    this.createdBy = null;
                }
                return this;
            }

            // public withDono(dono: any) {
            //     if (typeof dono != "undefined" && dono != null) {
            //         this.dono = new UsuarioShort(dono);
            //     } else {
            //         this.dono = null;
            //     }
            //     return this;
            // }

            public withRegimeTributario(regimeTributario: any) {
                if (typeof regimeTributario != "undefined" && regimeTributario != null) {
                    this.regimeTributario = new RegimeTributario(regimeTributario);
                } else {
                    this.regimeTributario = null;
                }
                return this;
            }

            public withClassificacao(classificacao: any) {
                if (typeof classificacao != "undefined" && classificacao != null) {
                    this.classificacao = new Classificacao(classificacao);
                } else {
                    this.classificacao = null;
                }
                return this;
            }

            public withCnaePrimario(cnaePrimario: any) {
                if (typeof cnaePrimario != "undefined" && cnaePrimario != null) {
                    this.cnaePrimario = new Cnae(cnaePrimario);
                } else {
                    this.cnaePrimario = null;
                }
                return this;
            }

            public withAtivo(ativo: boolean) {
                this.ativo = ativo;
                return this;
            }

            public withRazaoSocial(razaoSocial: string){
                this.razaoSocial = razaoSocial;
                return this;
            }
            
            public withNomeResumido(nomeResumido: string){
                this.nomeResumido = nomeResumido;
                return this;
            }

            public withInscricaoEstadual(inscricaoEstadual: string) {
                this.inscricaoEstadual = inscricaoEstadual;
                return this;
            }

            public withCodigoErp(codigoErp: string){
                this.codigoErp = codigoErp;
                return this;
            }

            public withClassificacoes(classificacoes: any){
                if(classificacoes != "undefined" && classificacoes != null){
                    this.classificacoes = classificacoes;
                } else {
                    this.classificacoes = null;
                }
                return this;
            }

            public withCnaesSecundarios(cnaesSecundarios: [any]) {
                if(typeof cnaesSecundarios != "undefined" && cnaesSecundarios != null){
                    this.cnaesSecundarios = cnaesSecundarios;
                } else {
                    this.cnaesSecundarios = null;
                }
                return this;
            }
            build() {
				return new Empresa(this);
			}
        }
        return Builder;
    }

}