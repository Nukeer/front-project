import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login.component";

const routes: Routes = [
    { path: "", component: LoginComponent, pathMatch: 'full' },
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class LoginPageRoutingModule { }