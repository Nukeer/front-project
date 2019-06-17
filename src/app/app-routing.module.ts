import { NgModule, InjectionToken } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { HomePageComponent } from './pages/home/home.component';
import { AppCustomPreloader } from './app.custompreloader';
import { environment } from '../environments/environment.prod';

const routes: Routes = [
  {
    path: 'main', component: HomePageComponent, children: [
      { path: 'usuarios', loadChildren: "../app/pages/home/tabs/usuarios/usuario.module#UsuarioModule" }
    ]
  },
  {
    path: '', redirectTo: '/main', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: '/main', pathMatch: 'full'
  },
];

const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: AppCustomPreloader })],
  exports: [RouterModule],
  providers: [
    AppCustomPreloader,
    {
      provide: externalUrlProvider,
      useValue: (route: ActivatedRouteSnapshot) => {
        const externalUrl = route.paramMap.get('externalUrl');
        window.open(externalUrl, '_self');
      },
    },
  ]
})
export class AppRoutingModule {
  AplicationRoutes = RouterModule.forRoot(
    routes, { enableTracing: !environment.production }
  );
}
