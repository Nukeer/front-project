import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  display: boolean;

  public static serviceUrl: string;
  public static appRelease: string;
  public static ottimizzaAPIComunicacaoURL: string;
  public static ottimizzaAPIComunicacaoServicesURL: string;

  public static ottimizzaWSComunicacaoURL: string;
  public static ottimizzaWSComunicacaoServicesURL: string;

  public static newVersion: boolean;

  constructor(private swUpdate: SwUpdate){}

  onMobileMenuButton(event) {
    this.display = !this.display;
    event.preventDefault();
  }

  hideMobileMenu(event) {
    this.display = false;
    event.preventDefault();
  }

  ngOnInit() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm("New version available. Load New Version?")) {
          window.location.reload();
        }
      });
    }
    this.display = false;
  }
}
