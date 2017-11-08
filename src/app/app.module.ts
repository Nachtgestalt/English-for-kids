import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    ComidaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
