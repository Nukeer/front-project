import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

/* Components */
import { LoginComponent } from './login.component';
import { LoginPageRoutingModule } from './login.routing';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        LoginPageRoutingModule,

        CommonModule,
        FormsModule,

        MatFormFieldModule,
        CardModule,
        InputTextModule
    ],
    providers: [
    ],
    bootstrap: [
        LoginComponent
    ],
    entryComponents: [
    ]
})

export class LoginPageModule { }
