import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../Storage.service';
import { AppComponent } from '../../app.component';
import { SwPush } from '@angular/service-worker';

@Injectable()
export class UserEndpointService {

  readonly VAPID_PUBLIC_KEY = 'BLSKBIHrsFCeLUO3FwI95mfSubQiZlno-CTZPDBBoTH6P4CQ-SnEZtlBNM-TWRlk-u3Q36JdjLLk69WYNWJ2rOw';

  constructor(private httpClient: HttpClient,
    private storageService: StorageService,
    private swPush: SwPush) {
  }

  public saveWebPushEndpoint(endpoint: any): Observable<any> {
    const url = `${AppComponent.ottimizzaAPIComunicacaoServicesURL}/users_endpoint`;
    const currentUser = this.storageService.get('currentUser:usuario');

    const bearer = this.storageService.get(`userComunicacao-${currentUser.id}:user`).token;

    return this.httpClient.post(url, endpoint, this.httpHeaders(bearer));
  }

  public subscribeToNotifications(): void {
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    }).then((subscription) => {
      console.log('Accepted Notifications.');
      this.saveWebPushEndpoint(subscription).subscribe((response: any) => {
        console.log(response);
      });
    }).catch(err => {
      console.error('Could not subscribe to notifications', err);
    });
  }

  private httpHeaders(bearer: string): any {
    return {
      'headers': new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${bearer}`
      })
    };
  }

}
