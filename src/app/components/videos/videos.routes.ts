import { Routes } from '@angular/router';

import { VideosAnimalesComponent} from './videos-animales/videos-animales.component';
import { VideosColoresComponent } from './videos-colores/videos-colores.component';
import { VideosNumerosComponent } from './videos-numeros/videos-numeros.component';
import { VideosAbecedarioComponent } from './videos-abecedario/videos-abecedario.component';
import { VideosSaludosComponent } from './videos-saludos/videos-saludos.component';
import { VideosCuerpoComponent } from './videos-cuerpo/videos-cuerpo.component';
import { VideosCasaComponent } from './videos-casa/videos-casa.component';
import { VideosComidasComponent } from './videos-comidas/videos-comidas.component';


export const VIDEOS_ROUTES: Routes = [
    { path: 'animales', component: VideosAnimalesComponent },
    { path: 'colores', component: VideosColoresComponent },
    { path: 'numeros', component: VideosNumerosComponent },
    { path: 'abecedario', component: VideosAbecedarioComponent },
    { path: 'saludos', component: VideosSaludosComponent },
    { path: 'cuerpo', component: VideosCuerpoComponent },
    { path: 'casa', component: VideosCasaComponent },
    { path: 'comidas', component: VideosComidasComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'videos'}
];