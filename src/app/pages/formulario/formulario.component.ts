import { OnInit, Component } from '@angular/core';
import { Produto } from '../../models/produto';

@Component({
    selector: 'formulario-component',
    templateUrl: './formulario.component.html',
    styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

    produto: Produto;

    ngOnInit() {
        this.produto = new Produto.Builder()
            .withNome('')
            .withPreco('')
            .withDataFabricacao(new Date())
            .withDataValidade(new Date())
            .withQuantidade(0)
            .withUnidadeMedida('')
            .withPericivel(false).build();

    }
}
