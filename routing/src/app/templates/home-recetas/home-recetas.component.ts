import { Component } from '@angular/core';

@Component({
  selector: 'app-home-recetas',
  templateUrl: './home-recetas.component.html',
  styleUrls: ['./home-recetas.component.css']
})
export class HomeRecetasComponent {
recetas = [
  {id: 1, nombre: "Tarta de fresas", descripcion: "descripcion de la receta 1"},
  {id: 2, nombre: "Tarta de manzana", descripcion: "descripcion de la receta 2"},
  {id: 3, nombre: "Tarta de cereza", descripcion: "descripcion de la receta 3"},
  {id: 4, nombre: "Tarta de zanahoria", descripcion: "descripcion de la receta 4"},
  {id: 5, nombre: "Tarta de chocolate", descripcion: "descripcion de la receta 5"},
  {id: 6, nombre: "Tarta red velvet", descripcion: "descripcion de la receta 6"},
  {id: 7, nombre: "Tarta de limón", descripcion: "descripcion de la receta 7"}
]
}
