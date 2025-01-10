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

  constructor() {}



  getRecetas() {
    return this.recetas;
  }

  getRecetaById(id: number) {
    return this.recetas.find(receta => receta.id === id);
  }
}
