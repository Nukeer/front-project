import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'listar', component: HomePageComponent
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
