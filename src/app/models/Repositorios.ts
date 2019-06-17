export class Repositorio {
    id: number;

    nome: string;

    nivel: number;

    emailAssunto: string;

    emailMensagem: string;

    departamentos: [any];

    constructor(build) {
        this.id = build.id;

        this.nome = build.nome;

        this.nivel = build.nivel;

        this.emailAssunto = build.emailAssunto;
        this.emailMensagem = build.emailMensagem;

        if (build.departamentos != "undefined" && build.departamentos != null) {
            this.departamentos = build.departamentos;
        } else {
            this.departamentos = null;
        }

    }

    static get Builder() {
        class Builder {
            id: number;

            nome: string;

            nivel: number;

            emailAssunto: string;

            emailMensagem: string;

            departamentos: [any];

            constructor(id) {
                this.id = id;
            }

            public withNome(nome: string) {
                this.nome = nome;
                return this;
            }

            public withNivel(nivel: number) {
                this.nivel = nivel;
                return this;
            }

            public withEmailAssunto(emailAssunto: string) {
                this.emailAssunto = emailAssunto;
                return this;
            }

            public withEmailMensagem(emailMensagem: string) {
                this.emailMensagem = emailMensagem;
                return this;
            }

            public withDepartamentos(departamentos: any) {
                if (departamentos != "undefined" && departamentos != null) {
                    this.departamentos = departamentos;
                } else {
                    this.departamentos = null;
                }
                return this;
            }

            build(){
                return new Repositorio(this);
            }

        }
        return Builder;
    }

}