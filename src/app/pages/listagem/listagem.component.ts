import { OnInit, Component } from '@angular/core';
import { Produto } from '../../models/produto';
import { StorageService } from '../../services/Storage.service';
import { Router } from '@angular/router';

@Component({
    selector: 'listagem-component',
    templateUrl: './listagem.component.html',
    styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

    produtos: Array<Produto[]>;

    constructor(private storage: StorageService, private router: Router) { }

    buscarProdutosDoStorage() {
        const storage = this.storage.get('produtos');

        if (storage && storage.length > 0) {
            for (const produto of storage) {
                this.produtos.push(produto);
            }
        }
    }

    editItem(index: number) {
        this.router.navigate(['/formulario', index]);
    }

    deleteItem(index: number) {
        this.produtos.splice(index, 1);
        this.storage.put('produtos', this.produtos);
    }

    ngOnInit() {
        this.produtos = new Array<Produto[]>();
        this.buscarProdutosDoStorage();
    }
}
