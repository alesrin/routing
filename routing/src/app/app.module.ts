import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './templates/inicio/inicio.component';
import { ContactoComponent } from './templates/contacto/contacto.component';
import { AboutComponent } from './templates/about/about.component';
import { HomeRecetasComponent } from './templates/home-recetas/home-recetas.component';
import { RecetaComponent } from './templates/receta/receta.component';
import { ServiciosComponent } from './templates/servicios/servicios.component';
import { TareasComponent } from './templates/tareas/tareas.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

/* const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  //path: cadena que coincide con la URL en la barra de direcciones del navegador "www.miapp.com/inicio". Además debo utilizar esta cadena para ejecutar las redirecciones dentro de los templates de HTML utilizando el atributo routerLink -> <a routerLink="/inicio">Inicio </a>
  //component: el componente que mi enrutador (el navegador) debe crear al navegar a esta ruta
  { path: 'contacto', component: ContactoComponent },
  { path: 'acerca', component: AboutComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Redirige a inicio por defecto
  { path: '**', redirectTo: '/inicio' }, // Si la URL no existe, redirige a inicio
]; */

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ContactoComponent,
    AboutComponent,
    HomeRecetasComponent,
    RecetaComponent,
    ServiciosComponent,
    TareasComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //RouterModule.forRoot(routes)
    FormsModule
  ],
  providers: [],
   //exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
