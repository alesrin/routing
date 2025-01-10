import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css'],
})
export class RecetaComponent implements OnInit {
  recetaId: number = 0
  recetaNombre: string | null = null;
  recetaDescripcion: string | null = null;
  
  //Inicializa propiedades, métodos, servicios... antes de que se cargue el componente
  constructor(private route: ActivatedRoute) {}

  //Inicializa propiedades, métodos, servicios... inmediatamente después cargue el componente
  ngOnInit() {
    //1. OBTENEMOS EL ID DE LA URL
    this.recetaId = Number(this.route.snapshot.paramMap.get('id'))
    //2. VER LOS DETALLES DE LA RECETA EN CUESTIÓN
    this.recetaNombre = this.route.snapshot.queryParamMap.get('nombre');
    this.recetaDescripcion = this.route.snapshot.queryParamMap.get('descripcion');
  }
  }

