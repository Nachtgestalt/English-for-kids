import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Rutas
import { APP_ROUTING } from './app.routes'

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LeccionesComponent } from './components/lecciones/lecciones.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { VideosComponent } from './components/videos/videos.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { AnimalesComponent } from './components/lecciones/animales/animales.component';
import { ColoresComponent } from './components/lecciones/colores/colores.component';
import { NumerosComponent } from './components/lecciones/numeros/numeros.component';
import { AbecedarioComponent } from './components/lecciones/abecedario/abecedario.component';
import { SaludosComponent } from './components/lecciones/saludos/saludos.component';
import { CuerpoComponent } from './components/lecciones/cuerpo/cuerpo.component';
import { CasaComponent } from './components/lecciones/casa/casa.component';
import { ComidaComponent } from './components/lecciones/comida/comida.component';
import { VideosAnimalesComponent } from './components/videos/videos-animales/videos-animales.component';
import { VideosColoresComponent } from './components/videos/videos-colores/videos-colores.component';
import { VideosNumerosComponent } from './components/videos/videos-numeros/videos-numeros.component';
import { VideosAbecedarioComponent } from './components/videos/videos-abecedario/videos-abecedario.component';
import { VideosSaludosComponent } from './components/videos/videos-saludos/videos-saludos.component';
import { VideosCuerpoComponent } from './components/videos/videos-cuerpo/videos-cuerpo.component';
import { VideosCasaComponent } from './components/videos/videos-casa/videos-casa.component';
import { VideosComidasComponent } from './components/videos/videos-comidas/videos-comidas.component';
import { ActividadesAnimalesComponent } from './components/actividades/actividades-animales/actividades-animales.component';
import { ActividadesColoresComponent } from './components/actividades/actividades-colores/actividades-colores.component';
import { ActividadesNumerosComponent } from './components/actividades/actividades-numeros/actividades-numeros.component';
import { ActividadesAbecedarioComponent } from './components/actividades/actividades-abecedario/actividades-abecedario.component';
import { ActividadesSaludosComponent } from './components/actividades/actividades-saludos/actividades-saludos.component';
import { ActividadesCuerpoComponent } from './components/actividades/actividades-cuerpo/actividades-cuerpo.component';
import { ActividadesCasaComponent } from './components/actividades/actividades-casa/actividades-casa.component';
import { ActividadesComidasComponent } from './components/actividades/actividades-comidas/actividades-comidas.component';
import {insertImport} from "@angular/cli/lib/ast-tools";
import { PresentacionLeccionesComponent } from './components/lecciones/presentacion-lecciones/presentacion-lecciones.component';
import { PresentacionActividadesComponent } from './components/actividades/presentacion-actividades/presentacion-actividades.component';
import { PresentacionVideosComponent } from './components/videos/presentacion-videos/presentacion-videos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    LeccionesComponent,
    BienvenidaComponent,
    VideosComponent,
    ActividadesComponent,
    AnimalesComponent,
    ColoresComponent,
    NumerosComponent,
    AbecedarioComponent,
    SaludosComponent,
    CuerpoComponent,
    CasaComponent,
    ComidaComponent,
    VideosAnimalesComponent,
    VideosColoresComponent,
    VideosNumerosComponent,
    VideosAbecedarioComponent,
    VideosSaludosComponent,
    VideosCuerpoComponent,
    VideosCasaComponent,
    VideosComidasComponent,
    ActividadesAnimalesComponent,
    ActividadesColoresComponent,
    ActividadesNumerosComponent,
    ActividadesAbecedarioComponent,
    ActividadesSaludosComponent,
    ActividadesCuerpoComponent,
    ActividadesCasaComponent,
    ActividadesComidasComponent,
    PresentacionLeccionesComponent,
    PresentacionActividadesComponent,
    PresentacionVideosComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
