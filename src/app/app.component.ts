import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  display: boolean;

  onMobileMenuButton(event) {
    this.display = !this.display;
    event.preventDefault();
  }

  hideMobileMenu(event) {
    this.display = false;
    event.preventDefault();
  }

  ngOnInit() {
    this.display = false;
  }
}
