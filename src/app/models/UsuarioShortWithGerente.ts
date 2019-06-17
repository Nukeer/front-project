import { UsuarioShort } from "./UsuarioShort";

export class UsuarioShortWithGerente {

    id: number;

    nome: string;
    email: string;

    tipoUsuario: number;
    nivelUsuario: number;

    gerente: UsuarioShort;

    constructor(build){
        this.id = build.id

        this.nome = build.nome;
        this.email = build.email;

        this.tipoUsuario = build.tipoUsuario;
        this.nivelUsuario = build.nivelUsuario;

        if (typeof build.gerente != "undefined" && build.gerente != null){
            this.gerente = new UsuarioShort(build.gerente);
        } else {
            this.gerente = null;
        }
    }

    static get Builder(){
        class Builder {
            id: number;

            nome: string;
            email: string;
        
            tipoUsuario: number;
            nivelUsuario: number;
        
            gerente: UsuarioShort;

            constructor(id) {
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

            public withTipoUsuario(tipoUsuario: number) {
                this.tipoUsuario = tipoUsuario;
                return this;
            }

            public withNivelUsuario(nivelUsuario: number) {
                this.nivelUsuario = nivelUsuario;
                return this;
            }

            public withGerente(gerente: any){
                if(typeof gerente != "undefined" && gerente != null){
                    this.gerente = new UsuarioShort(gerente);
                } else {
                    this.gerente = null;
                }
                return this;
            }
            
            build() {
                return new UsuarioShortWithGerente(this);
            }
        }
        return Builder;
    }

}