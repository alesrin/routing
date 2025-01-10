import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './templates/inicio/inicio.component';
import { ContactoComponent } from './templates/contacto/contacto.component';
import { AboutComponent } from './templates/about/about.component';
import { RecetaComponent } from './templates/receta/receta.component';
import { HomeRecetasComponent } from './templates/home-recetas/home-recetas.component';
import { TareasComponent } from './templates/tareas/tareas.component';
import { ServiciosComponent } from './templates/servicios/servicios.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  //path: cadena que coincide con la URL en la barra de direcciones del navegador "www.miapp.com/inicio". Además debo utilizar esta cadena para ejecutar las redirecciones dentro de los templates de HTML utilizando el atributo routerLink -> <a routerLink="/inicio">Inicio </a>
  //component: el componente que mi enrutador (el navegador) debe crear al navegar a esta ruta
  { path: 'inicio', component: InicioComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'acerca', component: AboutComponent },
  { path: 'tareas', component: TareasComponent },
  { path: 'servicios', component: ServiciosComponent },
  //{ path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Redirige a inicio por defecto "www.miapp.com"
  //{ path: '**', redirectTo: '/inicio', pathMatch: 'full' }, // Redirige a inicio por defecto "www.miapp.com" en todas las URL que no existan
  { path: 'about', redirectTo: '/acerca', pathMatch: 'full' }, // Redirige a acerca por defecto "www.miapp.com/about" 
  { path: 'home-recetas', component: HomeRecetasComponent }, // RUTA ESTÁTICA: Página principal de recetas
  { path: 'home-recetas/:id', component: RecetaComponent },  // RUTA DINÁMICA: Detalles de una receta específica

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
