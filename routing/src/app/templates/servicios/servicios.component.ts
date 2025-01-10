import { Component, OnInit } from '@angular/core';
import { RecetasService } from 'src/app/services/recetas.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

/* Los servicios en Angular son clases que permiten compartir lógica y datos entre componentes, ideal para la reutilización del código y la separación de responsabilidades. 
Se usan para...
  - Acceso a datos (APIs, bases de datos).
  - Lógica empresarial reutilizable.
  - Almacenamiento de estados compartidos entre componentes.

¿Cómo creamos un servicio?

  - ng generate service nombre-del-servicio
  - ng g s ruta/nombre-del-servicio


*/

recetas: any[] = [];

/*   El constructor es una función especial en la clase de TypeScript que se ejecuta al crear una instancia de la clase (en este caso, del componente).
Características:
  - Se utiliza para inicializar propiedades de la clase y para la inyección de dependencias.
  - Se ejecuta antes de que Angular termine de configurar el componente.
  - Se utiliza para inyectar servicios o dependencias, y asignar valores iniciales simples que no dependan de la interacción con el DOM o de datos externos. */
constructor(private recetasService: RecetasService) {}


/* El ngOnInit es un método del ciclo de vida del componente en Angular que pertenece a la interfaz OnInit.
Características:
  - Es un método de Angular que se llama después de que Angular inicialice el componente y todas sus propiedades vinculadas estén listas.
  - Se utiliza para realizar tareas de inicialización relacionadas con el componente.
  - Es el lugar recomendado para poner lógica que requiera:
      · Interacción con el DOM.
      · Datos provenientes de servicios externos.
    · Suscripciones iniciales.
Se utiliza para: 
  - Inicializar datos que provienen de servicios o API.
  - Configurar variables que dependan de propiedades del componente que ya estén listas.
  - Configurar suscripciones. */

ngOnInit() {
  this.recetas = this.recetasService.getRecetas();
}

}
