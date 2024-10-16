import { Component } from '@angular/core';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent {
  // Lista de estudiantes (puedes reemplazarla con los datos reales)
  estudiantes = [
    { PROGRAMA: 'Ingeniería' },
    { PROGRAMA: 'Medicina' },
    { PROGRAMA: 'Ingeniería' },
    { PROGRAMA: 'Derecho' },
    { PROGRAMA: 'hola' },
    { PROGRAMA: 'Medicina' },
    { PROGRAMA: 'Medicina' },
    { PROGRAMA: 'Medicina' },
    { PROGRAMA: 'Ingeniería' }
  ];
}
