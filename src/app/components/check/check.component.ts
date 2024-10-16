import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent {
  selectedCategories: any[] = [];

  // Definir las categorías disponibles
  categories: any[] = [
    { name: 'Cédula', key: 'C' },
    { name: 'Nombre', key: 'N' },
    { name: 'Unidad', key: 'U' },
    { name: 'Programa', key: 'P' },
    { name: 'Fecha', key: 'F' }
  ];

  // Emite cuando cambian las categorías seleccionadas
  @Output() selectedCategoriesChange = new EventEmitter<any[]>();

  // Método para manejar cambios en la selección
  onCategoryChange() {
    this.selectedCategoriesChange.emit(this.selectedCategories);
  }
}
