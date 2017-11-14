import { Routes } from '@angular/router';
import { LeccionesComponent } from './../lecciones/lecciones.component';
import { BienvenidaComponent } from './../bienvenida/bienvenida.component';
import { VideosComponent } from './../videos/videos.component';
import { ActividadesComponent } from './../actividades/actividades.component';

import { LECCIONES_ROUTES } from './../lecciones/lecciones.routes';
import { VIDEOS_ROUTES } from './../videos/videos.routes';
import { ACTIVIDADES_ROUTES } from './../actividades/actividades.routes';

export const HOME_ROUTES: Routes = [
    { path: 'lecciones',
        component: LeccionesComponent,
        children: LECCIONES_ROUTES
    },
    { path: 'videos',
        component: VideosComponent,
        children: VIDEOS_ROUTES
    },
    { path: 'actividades',
        component: ActividadesComponent,
        children: ACTIVIDADES_ROUTES
    },
    // {
    //     path: 'usuarios',
    //     component: UsuariosComponent,
    //     children: USUARIOS_ROUTES
    // },
    { path: 'bienvenida', component: BienvenidaComponent},
    // { path: 'lecciones', component: LeccionesComponent},
    { path: 'actividades', component: ActividadesComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'bienvenida'}
];

