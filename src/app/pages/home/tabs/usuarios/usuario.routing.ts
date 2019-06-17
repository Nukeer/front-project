import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListagemUsuariosComponent } from './listar-usuarios/listar-usuarios.component';

const routes: Routes = [
    { path: "", component: ListagemUsuariosComponent, pathMatch: 'full' }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})

export class UsuarioRoutingModule {

}