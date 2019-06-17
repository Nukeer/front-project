import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService, RxEvent } from '../../services/Services';

enum SidebarOptions {
    EMPRESAS, CADASTRO_CNAE, REGIME_TRIBUTARIO, USUARIOS, CLASSIFICACOES,
    GRUPO_SERVICOS, SERVICOS, GERAR_PROGRAMACAO, SERVICOS_PROGRAMADOS,
    NOT_READ, CUSTOM, REPOSITORIOS, COMUNICACAO, CARACTERISTICAS, DEPARTAMENTO_PESSOAL,
    DASHBOARD, HISTORICO, CIRCULAR, GESTAOMENSAGENS
}

@Component({
    selector: 'app-home-page',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    exportAs: 'HomePageComponent'
})

export class HomePageComponent implements OnInit {

    constructor(private wsAuth: AuthService,
        private events: RxEvent) {
    }

    isMobile: boolean;

    logout() {
        this.wsAuth.doLogout();
    }

    public onRouteChange($event) {
        alert($event);
    }

    @ViewChild('sidebarWeb') sidebarWeb: ElementRef;

    state = 'close';

    toggleSidebarWeb(state: string = this.state === 'close' ? 'open' : 'close') {
        switch (state) {
            case 'open':
                this.state = 'open';
                this.sidebarWeb.nativeElement.style.display = 'none';
                break;
            case 'close':
                this.state = 'close';
                this.sidebarWeb.nativeElement.style.display = 'block';
                break;
        }
    }

    @ViewChild('sidebarMobile') sidebarMobile: ElementRef;

    toggleSidebarMobile(state: string = this.state === 'close' ? 'open' : 'close') {
        switch (state) {
            case 'open':
                this.state = 'open';
                break;
            case 'close':
                this.state = 'close';
                break;
        }
    }


    ngOnInit() {
        this.events.subscribe(`openSidebarMobile:toggle`, (data: any) => {
            this.toggleSidebarMobile();
        });

        this.events.subscribe(`openSidebarWeb:toggle`, (data: any) => {
            this.toggleSidebarWeb();
        });

        if (window.screen.width < 365) {
            this.isMobile = true;
        }
       
    }

}