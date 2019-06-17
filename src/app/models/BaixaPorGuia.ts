export class BaixaPorGuia {

    id: number;

    descricao: string;


    constructor(build){
        this.id = build.id;
        this.descricao = build.descricao;
    }


    static get Builder() {
        class Builder{
            id: number;

            descricao: string;

            constructor(id){
                this.id = id;
            }

            withDescricao(descricao: string){
                this.descricao = descricao;
                return this;
            }

            build(){
                return new BaixaPorGuia(this);
            }
        }
        
        return Builder

    }

}