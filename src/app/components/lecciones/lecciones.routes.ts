import { Routes } from '@angular/router';
import { AnimalesComponent } from './animales/animales.component';
import { ColoresComponent } from './colores/colores.component';
import { NumerosComponent } from './numeros/numeros.component';
import { AbecedarioComponent } from './abecedario/abecedario.component';
import { SaludosComponent } from './saludos/saludos.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { CasaComponent } from './casa/casa.component';
import { ComidaComponent } from './comida/comida.component';
import { PresentacionLeccionesComponent } from './presentacion-lecciones/presentacion-lecciones.component';


export const LECCIONES_ROUTES: Routes = [
    {path: 'animales', component: AnimalesComponent},
    {path: 'colores', component: ColoresComponent},
    {path: 'numeros', component: NumerosComponent},
    {path: 'abecedario', component: AbecedarioComponent},
    {path: 'saludos', component: SaludosComponent},
    {path: 'cuerpo', component: CuerpoComponent},
    {path: 'casa', component: CasaComponent},
    {path: 'comidas', component: ComidaComponent},
    {path: 'presentacion', component: PresentacionLeccionesComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'presentacion'}
];
