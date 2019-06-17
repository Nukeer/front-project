import { Usuario } from './UsuarioShort';

export class UsuarioAutenticado {
	
	public usuario: Usuario;
	
	public token: string;
	
	public UsuarioAutenticado(usuario: Usuario, token: string) {
		this.usuario = usuario;
		this.token = token;
	}
	
	fromJson(json: any): UsuarioAutenticado {
		for (let property in json) {
			switch(property) {
				case 'usuario':
					this[property] = new Usuario().fromJson(json[property]);
					break;
				default:
					this[property] = json[property];
			}
		}
		return this;
	}
	
	public setUsuario(usuario: Usuario): void {
		this.usuario = usuario;
	}
	
	public getUsuario(): Usuario {
		return this.usuario;
	}
	
	public setToken(token: string): void {
		this.token = token;
	}
	
	public getToken(): string {
		return this.token;
	}
	
}