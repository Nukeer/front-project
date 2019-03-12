import { OnInit, Component, ViewEncapsulation } from '@angular/core';
import { Produto } from '../../models/produto';
import { StorageService } from '../../services/Storage.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'formulario-component',
    templateUrl: './formulario.component.html',
    styleUrls: ['./formulario.component.scss'],
    // encapsulation: ViewEncapsulation.None
})
export class FormularioComponent implements OnInit {

    produto: Produto;
    unidadeMedida: any;
    unidadeSelected: any;

    pt: any;

    constructor(private storage: StorageService, private messageService: MessageService, private route: ActivatedRoute) {
        const item = this.route.snapshot.paramMap.get('id');
        if (item) {
            const storage = this.storage.get('produtos');
            this.produto = new Produto.Builder()
                .withNome(storage[item].nome)
                .withPreco(storage[item].preco)
                .withDataFabricacao(new Date(storage[item].dataFabricacao))
                .withDataValidade(new Date(storage[item].dataValidade))
                .withQuantidade(storage[item].quantidade)
                .withUnidadeMedida(storage[item].unidadeMedida)
                .withPericivel(storage[item].pericivel).build();
        } else {
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

    cadastrarProduto() {
        if (this.validate()) {
            let storage = this.storage.get('produtos');
            if (storage === null) {
                storage = new Array();
            }

            const item = this.route.snapshot.paramMap.get('id');
            if (item) {
                storage[item] = this.produto;
                this.messageService.add({ key: 'tc', severity: 'success', summary: 'Aviso', detail: 'Produto atualizado com sucesso' });
            } else {
                storage.push(this.produto);
                this.messageService.add({ key: 'tc', severity: 'success', summary: 'Aviso', detail: 'Produto cadastrado com sucesso' });
                this.ngOnInit();
            }
            this.storage.put('produtos', storage);
        } else {
            this.messageService.add({ key: 'tc', severity: 'warn', summary: 'Aviso', detail: 'Oops, Está faltando preencher algo.' });
        }
    }

    validate(): boolean {
        let valido = true;

        if (this.produto.nome === '') { valido = false; }
        if (this.produto.unidadeMedida === '') { valido = false; }
        if (this.produto.preco === '') { valido = false; }
        if (this.produto.pericivel === true) {
            if (typeof this.produto.dataValidade !== 'undefined' && this.produto.dataValidade !== null) {
                valido = false;
            }
        }
        if (this.produto.dataFabricacao.getTime() >= this.produto.dataValidade.getTime()) {
            valido = false;
        }

        return valido;
    }
    teste() {
        switch (this.unidadeMedida.id) {
            case 1:
                this.produto.unidadeMedida = this.produto.unidadeMedida.replace(this.produto.unidadeMedida, '\d{999},\d{3}\/ lt');
                break;
            case 2:
                break;
            case 3:
                break;
        }
        console.log(this.unidadeSelected);
    }

    ngOnInit() {
        this.pt = {
            firstDayOfWeek: 1,
            dayNames: [
                'domingo', 'segunda', 'terça',
                'quarta', 'quinta', 'sexta', 'sábado'
            ],
            dayNamesShort: [
                'dom', 'seg', 'ter', 'qua', 'qui',
                'sex', 'sáb'
            ],
            dayNamesMin: [
                'D', 'S', 'T', 'Q', 'Q', 'S', 'S'
            ],
            monthNames: [
                'janeiro', 'fevereiro', 'março',
                'abril', 'maio', 'junho', 'julho',
                'agosto', 'setembro', 'outubro', 'novembro',
                'dezembro'
            ],
            monthNamesShort: [
                'jan', 'fev', 'mar', 'abr',
                'mai', 'jun', 'jul', 'ago',
                'set', 'out', 'nov', 'dez'
            ],
            today: 'Hoy',
            clear: 'Borrar'
        };

        this.unidadeMedida = [
            { label: 'Selecione a Unidade de Medida', value: null },
            { label: 'lt', value: { id: 1, name: 'lt', code: '\d{999}\d{3}\/ lt' } },
            { label: 'kg', value: { id: 2, name: 'kg', code: '\d{999}\d{3}\/ kg' } },
            { label: 'un', value: { id: 3, name: 'un', code: '\d{999}\/ un' } },
        ];
    }
}

$(document).ready(function(){
    $('.dinheiro').mask('#.##0,00', {reverse: true});
});