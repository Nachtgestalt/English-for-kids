import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LeccionesComponent } from './components/lecciones/lecciones.component'

import { HOME_ROUTES } from './components/home/home.routes';
import { LECCIONES_ROUTES } from './components/lecciones/lecciones.routes'

const APP_ROUTES: Routes = [
    // { path: 'lecciones',
    //   component: LeccionesComponent,
    //   children : LECCIONES_ROUTES
    // },
    // {
    //   path: 'usuarios',
    //   component: UsuariosComponent,
    //   children : USUARIOS_ROUTES
    // },
    // { path: 'dashboard',
    //   component: DashboardComponent,
    //   children: DASHBOARD_ROUTES },
    { path: 'home',
      component: HomeComponent,
      children: HOME_ROUTES },
    { path: 'login', component: LoginComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'login'}
  ];

  export class NameRoutingModule { }
  export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);