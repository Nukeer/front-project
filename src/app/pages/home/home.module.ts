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

        // *************************************
        // * Mat                               *
        // *************************************
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatSidenavModule,
        MatExpansionModule,
        MatIconModule,
        MatAutocompleteModule,
        MatSelectModule,
        MatToolbarModule,
        MatTableModule,
        MatCardModule,
        MatPaginatorModule,
        MatChipsModule,
        MatProgressBarModule,
        MatTooltipModule,
        MatStepperModule,
        MatDividerModule,
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
