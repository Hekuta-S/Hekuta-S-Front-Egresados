import { Component } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent { 
  selectedCategories: any[] = [];

  // Actualización de las categorías
  categories: any[] = [
    { name: 'Cédula', key: 'C' },
    { name: 'Nombre', key: 'N' },
    { name: 'Unidad', key: 'U' },
    { name: 'Programa', key: 'P' },
    { name: 'Fecha', key: 'F' }
  ]; 
}
