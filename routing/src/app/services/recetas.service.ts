import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Hace que el servicio esté disponible en toda la aplicación.
})
export class RecetasService {
  private recetas = [
    { id: 1, nombre: "Tarta de fresas" },
    { id: 2, nombre: "Tarta de manzana" },
    { id: 3, nombre: "Tarta de zanahoria" },
  ];

  //Ejemplo find()
  numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() {}

//Ejemplo find()
 numeroEncontrado(){
    return this.numeros.find(numero => numero > 5);
 }
  //Esto nos devuelve: 1. Pero si le ponemos un número mayor a 5, nos devolverá el primer número que sea mayor a 5, en este caso, 6.

 numerosEncontrado(){
  return this.numeros.filter(numero => numero > 5);
}

  //Esto nos devuelve: 1, 2, 3, 4. Pero si le ponemos un número mayor a 5, nos devolverá todos los que sean mayor a 5, en este caso, 6, 7, 8, 9, 10.

  getRecetas() {
    return this.recetas;
  }

  getRecetaById(id: number) {
    return this.recetas.find(receta => receta.id === id)
    //Nos sirve para BUSCAR y devolver el primer objeto de la lista de recetas que tenga el ID que le pasamos por parámetro. Siempre devuelve el primer elemento de un array, y siempre que cumpla una condición específica. Si no encuentra nada, devuelve undefined.
  }
}
