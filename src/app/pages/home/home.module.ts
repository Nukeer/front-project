import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatTooltipModule,
    MatIconModule,
    MatPaginatorIntl,
    MatSidenavModule,
    MatFormFieldModule,
    MatStepperModule,
    MatDividerModule
} from '@angular/material';

import { MatProgressBarModule } from '@angular/material/progress-bar';

import { HomePageComponent } from './home.component';
import { AppRoutingModule } from '../../app-routing.module';
import { AppSideBarComponent } from '../../components/sidebar/app.sidebar.component';
import { AppTopBarComponent } from '../../components/topbar/app.topbar.component';
import { UsuarioModule } from './tabs/usuarios/usuario.module';

@NgModule({
    declarations: [
        HomePageComponent,

        AppSideBarComponent,
        AppTopBarComponent
    ],
    imports: [

        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,

    ],
    providers: [
        // { provide: MatPaginatorIntl, useClass: PTBRMatPaginatorIntl }
    ],
    bootstrap: [
        HomePageComponent,
        
        AppSideBarComponent,
        AppTopBarComponent
    ],
    entryComponents: [
    ]
})

export class HomePageModule { }
