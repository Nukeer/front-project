import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { UsuarioService } from "../../../../../services/Services";

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ListagemUsuariosComponent implements OnInit {

  nome: string;
  email: string;

  cols: any[];
  cars: any[];

  constructor(private wsUsuario: UsuarioService) {

  }

  selectAllUsuariosPaginatedAndFiltered(): void {
    const that = this;
    this.wsUsuario.selectAllUsuariosPaginatedAndFiltered(
      { nome: '', email: '' }, 10, 1
    ).subscribe((response: any) => {
      if (response.status === 'success') {
        this.cars = response.records;
      }
    });
  }

  ngOnInit() {
    this.cols = [
      { field: 'nome', header: 'Nome' },
      { field: 'email', header: 'Email' },
      { field: 'tipoUsuario', header: 'Tipo de Usuário' },
      { field: 'gerente', header: 'Gerente' }
    ];
    this.selectAllUsuariosPaginatedAndFiltered();
  }
}