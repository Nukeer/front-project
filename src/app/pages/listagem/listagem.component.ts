import { OnInit, Component } from '@angular/core';
import { Produto } from '../../models/produto';
import { StorageService } from '../../services/Storage.service';

@Component({
    selector: 'listagem-component',
    templateUrl: './listagem.component.html',
    styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

    produtos: Array<Produto[]>;

    constructor(private storage: StorageService) { }

    buscarProdutosDoStorage() {
        const storage = this.storage.get('produtos');

        if (storage && storage.length > 0) {
            for (const produto of storage) {
                this.produtos.push(produto);
            }
        }
    }

    ngOnInit() {
        this.produtos = new Array<Produto[]>();
        this.buscarProdutosDoStorage();
    }
}
