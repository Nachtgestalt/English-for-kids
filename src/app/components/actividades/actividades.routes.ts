import { Routes } from '@angular/router';
import { ActividadesAnimalesComponent } from './actividades-animales/actividades-animales.component';
import { ActividadesColoresComponent } from './actividades-colores/actividades-colores.component';
import { ActividadesNumerosComponent } from './actividades-numeros/actividades-numeros.component';
import { ActividadesAbecedarioComponent } from './actividades-abecedario/actividades-abecedario.component';
import { ActividadesSaludosComponent } from './actividades-saludos/actividades-saludos.component';
import { ActividadesCuerpoComponent } from './actividades-cuerpo/actividades-cuerpo.component';
import { ActividadesCasaComponent } from './actividades-casa/actividades-casa.component';
import { ActividadesComidasComponent } from './actividades-comidas/actividades-comidas.component';
import { PresentacionActividadesComponent } from './presentacion-actividades/presentacion-actividades.component';

export const ACTIVIDADES_ROUTES: Routes = [
    {path: 'animales', component: ActividadesAnimalesComponent},
    {path: 'colores', component: ActividadesColoresComponent},
    {path: 'numeros', component: ActividadesNumerosComponent},
    {path: 'abecedario', component: ActividadesAbecedarioComponent},
    {path: 'saludos', component: ActividadesSaludosComponent},
    {path: 'cuerpo', component: ActividadesCuerpoComponent},
    {path: 'casa', component: ActividadesCasaComponent},
    {path: 'comidas', component: ActividadesComidasComponent},
    {path: 'presentacion', component: PresentacionActividadesComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'presentacion'}
];