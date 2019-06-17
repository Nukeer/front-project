import { UsuarioShort } from "./UsuarioShort";
import { EmpresaShort } from "./Empresa/EmpresaShort";
import { DepartamentoShort } from "./DepartamentoShort";

export class Usuario {
    id: number;

    nome: string;

    email: string;

    senha: string;

    nivelUsuario: number;

    tipoUsuario: number;

    situacao: number;

    notificaUsuario: boolean;

    permiteAlterarRemetente: boolean;

    recebeEmailCircular: boolean;

    enviaCircular: boolean;

    enxergaComoCliente: boolean;

    gerente: UsuarioShort;

    departamento: DepartamentoShort;

    empresa: EmpresaShort;

    comunicacaoContactId: number;

    tagDescription: string;

    consultaGestaoServicos: boolean;

    constructor(build) {
        this.id = build.id;

        this.nome = build.nome;

        this.email = build.email;

        this.senha = build.senha;

        this.nivelUsuario = build.nivelUsuario;

        this.tipoUsuario = build.tipoUsuario;

        this.situacao = build.situacao;

        this.notificaUsuario = build.notificaUsuario;

        this.permiteAlterarRemetente = build.permiteAlterarRemetente;

        this.recebeEmailCircular = build.recebeEmailCircular;

        this.enviaCircular = build.enviaCircular;

        this.enxergaComoCliente = build.enxergaComoCliente;

        this.tagDescription = build.tagDescription;

        this.consultaGestaoServicos = build.consultaGestaoServicos;

        if (build.gerente != "undefined" && build.gerente != null) {
            this.gerente = build.gerente;
        } else {
            this.gerente = null;
        }

        if (build.departamento != "undefined" && build.departamento != null) {
            this.departamento = build.departamento;
        } else {
            this.departamento = null;
        }

        if (build.empresa != "undefined" && build.empresa != null) {
            this.empresa = build.empresa;
        } else {
            this.empresa = null;
        }

        this.comunicacaoContactId = build.comunicacaoContactId;
    }

    static get Builder() {
        class Builder {
            id: number;

            nome: string;

            email: string;

            senha: string;

            nivelUsuario: number;

            tipoUsuario: number;

            situacao: number;

            notificaUsuario: boolean;

            permiteAlterarRemetente: boolean;

            recebeEmailCircular: boolean;

            enviaCircular: boolean;

            enxergaComoCliente: boolean;

            gerente: UsuarioShort;

            departamento: DepartamentoShort;

            empresa: EmpresaShort;

            comunicacaoContactId: number;

            tagDescription: string;

            consultaGestaoServicos: boolean;

            constructor(id){
                this.id = id;
            }

            public withNome(nome: string) {
                this.nome = nome;
                return this;
            }


            public withEmail(email: string) {
                this.email = email;
                return this;
            }
            
            public withTagDescription(tagDescription: string) {
                this.tagDescription = tagDescription;
                return this;
            }

            public withSenha(senha: string) {
                this.senha = senha;
                return this;
            }

            public withNivelUsuario(nivelUsuario: number) {
                this.nivelUsuario = nivelUsuario;
                return this;
            }

            public withTipoUsuario(tipoUsuario: number) {
                this.tipoUsuario = tipoUsuario;
                return this;
            }

            public withSituacao(situacao: number) {
                this.situacao = situacao;
                return this;
            }

            public withNotificaUsuario(notificaUsuario: boolean) {
                this.notificaUsuario = notificaUsuario;
                return this;
            }

            public withPermiteAlterarRemetente(permiteAlterarRemetente: boolean) {
                this.permiteAlterarRemetente = permiteAlterarRemetente;
                return this;
            }

            public withRecebeEmailCircular(recebeEmailCircular: boolean) {
                this.recebeEmailCircular = recebeEmailCircular;
                return this;
            }

            public withEnviaCircular(enviaCircular: boolean) {
                this.enviaCircular = enviaCircular;
                return this;
            }

            public withEnxergaComoCliente(enxergaComoCliente: boolean) {
                this.enxergaComoCliente = enxergaComoCliente;
                return this;
            }
           
            public withConsultaGestaoServicos(consultaGestaoServicos: boolean) {
                this.consultaGestaoServicos = consultaGestaoServicos;
                return this;
            }

            public withGerente(gerente: any) {
                if (typeof gerente != "undefined" && gerente != null) {
                    this.gerente = new UsuarioShort(gerente);
                } else {
                    this.gerente = null;
                }
                return this;
            }

            public withDepartamento(departamento: any) {
                if (typeof departamento != "undefined" && departamento != null) {
                    this.departamento = new DepartamentoShort(departamento);
                } else {
                    this.departamento = null;
                }
                return this;
            }

            public withEmpresa(empresa: any) {
                if (typeof empresa != "undefined" && empresa != null) {
                    this.empresa = new EmpresaShort(empresa);
                } else {
                    this.empresa = null;
                }
                return this;
            }

            public withComunicacaoContactId(comunicacaoContactId: number) {
                this.comunicacaoContactId = comunicacaoContactId;
                return this;
            }

            build(){
                return new Usuario(this);
            }
        }
        return Builder;
    }



}
//             nome: '', email: '', senha: '', nivelUsuario: 1, tipoUsuario: 1,
//             situacao: 2, recebeEmailCopiaExterna: false, permiteAlterarRemetente: false,
//             recebeEmailCircular: false