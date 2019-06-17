import { Usuario } from './UsuarioShort';

export class TesteResponse {

    id: number;

    constructor(build) {
        this.id = build.id;
    }

    static get Builder() {
        class Builder {
            id: number;

            constructor(id) {
                this.id = id;
            }

            build() { 
                return new TesteResponse(this);
            }
        }
        return Builder;
    }
}