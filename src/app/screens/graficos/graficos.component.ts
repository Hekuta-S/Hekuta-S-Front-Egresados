import { Component } from '@angular/core';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent {
  estudiantes = [
    {
      PROGRAMA: 'Ingeniería',
      PENG_SEXO: 'M',
      NOMBRES: 'Carlos Andrés Martínez Gómez'
    },
    {
      PROGRAMA: 'Ingeniería',
      PENG_SEXO: 'F',
      NOMBRES: 'Ana María López Pérez'
    },
    {
      PROGRAMA: 'Medicina',
      PENG_SEXO: 'M',
      NOMBRES: 'Luis Alberto Pérez Díaz'
    },
    {
      PROGRAMA: 'Medicina',
      PENG_SEXO: 'F',
      NOMBRES: 'María Fernanda Romero'
    }
    // Añade más estudiantes aquí
  ];
}
