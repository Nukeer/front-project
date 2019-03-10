import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListagemComponent } from './pages/listagem/listagem.component';
import { FormularioComponent } from './pages/formulario/formulario.component';

const routes: Routes = [
  {
    path: 'listar', component: ListagemComponent, pathMatch: 'full'
  },
  {
    path: 'formulario', component: FormularioComponent, pathMatch: 'full'
  },
  {
    path: 'formulario/:id', component: FormularioComponent, pathMatch: 'full'
  },
  {
    path: '', redirectTo: '/listar', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: '/listar', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
