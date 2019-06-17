// Core
import { Injectable } from '@angular/core';

// HttpClientModule
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { Subject, Observable } from 'rxjs';
import { RxEvent } from './rx-event';
import { StorageService } from './Storage.service';
import { AuthServiceWebView } from './WebView/Auth.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { ServiceMessage } from './message.service';

@Injectable()
export class AppConfigService {

    public subject = new Subject<any>();

    toggleSidebar() {
        this.subject.next();
    }

    getSidebarState() {
        return this.subject.asObservable();
    }

    public static serviceUrl: string;
    public static appRelease: string;
    public static ottimizzaAPIComunicacaoURL: string;
    public static ottimizzaAPIComunicacaoServicesURL: string;

    public static ottimizzaWSComunicacaoURL: string;
    public static ottimizzaWSComunicacaoServicesURL: string;

    public appConfig: any = {
        'serviceUrl': '',
        'appRelease': '',
        'ottimizzaAPIComunicacaoURL': '',
        'ottimizzaAPIComunicacaoServicesURL': '',
        'ottimizzaWSComunicacaoURL': '',
        'ottimizzaWSComunicacaoServicesURL': ''
    };

    constructor(private http: HttpClient, private events: RxEvent,
        private storageService: StorageService, private comunicacaoAuthService: AuthServiceWebView,
        private messageService: ServiceMessage, private toast: MessageService) {
    }

    public async loadAppConfig(): Promise<any> {
        return this.http.get('/assets/data/appConfig.json').toPromise().then((data: any) => {
            try {
                return JSON.parse(data);
            } catch (e) {
                return data;
            }
        });
    }

    public async setDefautlVariables(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.loadAppConfig().then((data: any) => {
                AppComponent.serviceUrl = data.serviceUrl;
                AppComponent.appRelease = data.appRelease;
                AppComponent.ottimizzaAPIComunicacaoURL = data.ottimizzaAPIComunicacaoURL;
                AppComponent.ottimizzaAPIComunicacaoServicesURL = data.ottimizzaAPIComunicacaoServicesURL;
                AppComponent.ottimizzaWSComunicacaoURL = data.ottimizzaWSComunicacaoURL;
                AppComponent.ottimizzaWSComunicacaoServicesURL = data.ottimizzaWSComunicacaoServicesURL;

                resolve();
            });
        })
    }

    public async connect() {
        this.events.subscribe(`socket::connect`, (() => {
            if (!ServiceMessage.connected) {
                this.getUser().then((user: any) => {
                    if (typeof user != "undefined" && user != null) {
                        this.iniciarServicoDeMensagens(user);
                    }
                })
            }
        }))
    }

    public getUser(): Promise<void> {
        const that = this;
        return new Promise((resolve, reject) => {
            const password = this.storageService.get('userPassword:password');
            const userGestao = this.storageService.get('currentUser:usuario');
            const email = userGestao.email;

            const user = { 'email': email, 'password': password };

            this.comunicacaoAuthService.login(user).subscribe((response: any) => {
                if (response.status === 'success') {
                    const storage = { 'user': response.record.user, 'token': response.record.token };
                    this.storageService.put(`userComunicacao-${userGestao.id}:user`, storage);
                    this.events.next(`send::user`, response.record.user);
                    resolve(response.record.user);
                } else if (response.status === 'error') {
                    this.toast.add({ severity: 'warn', summary: 'Aviso', detail: response.message });
                    reject();
                }
            });
        })
    }

    public iniciarServicoDeMensagens(user: any): void {
        this.messageService.connect(user);
    }
}
