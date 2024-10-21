import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla-filtro',
  templateUrl: './tabla-filtro.component.html',
  styleUrls: ['./tabla-filtro.component.css']
})
export class TablaFiltroComponent {
  
  estudiantes: any[] = [];  
  filteredStudents: any[] = [];
  // Valores actuales de los filtros
  nameTerm: string = '';
  cedulaTerm: string = '';
  selectedPrograma: string = '';
  selectedUnidad: string = '';
  selectedDate: string = '';

  programas: string[] = [];
  unidades: string[] = [];
  selectedCategories: any[] = []; 
// Método para recibir las categorías seleccionadas desde el componente 'check'
onSelectedCategoriesChange(selectedCategories: any[]) {
  this.selectedCategories = selectedCategories;
}
 
onExcelDataReceived(data: any[]) {
  // Aquí puedes mapear los datos recibidos del Excel
  this.estudiantes = data.map(row => ({
    PEGE_DOCUMENTOIDENTIDAD: row[3],
    NOMBRES: row[14],
    PROGRAMA: row[16],
    FECHA_INGRESO_ESTP: row[17],
    // Añadir más campos si es necesario
  }));

  // Extraer programas y unidades únicas después de cargar los datos
  this.programas = [...new Set(this.estudiantes.map(student => student.PROGRAMA))];
  this.unidades = [...new Set(this.estudiantes.map(student => student.UNIDAD))];

  // Inicialmente, los estudiantes filtrados son iguales a todos los estudiantes
  this.filteredStudents = this.estudiantes;

  console.log(this.estudiantes);  // Verifica los datos en la consola
}

  // Método que aplica todos los filtros a la vez
  applyFilters() {
    this.filteredStudents = this.estudiantes.filter(student => {
      const matchesName = student.NOMBRES.toLowerCase().includes(this.nameTerm.toLowerCase());
      const matchesCedula = String(student.PEGE_DOCUMENTOIDENTIDAD).includes(this.cedulaTerm);
      const matchesPrograma = this.selectedPrograma ? student.PROGRAMA === this.selectedPrograma : true;
      const matchesUnidad = this.selectedUnidad ? student.UNIDAD === this.selectedUnidad : true;
      const matchesDate = this.selectedDate ? student.FECHA_INGRESO_ESTP === this.selectedDate : true;
  
      // Solo si todos los filtros coinciden se mantiene al estudiante en el resultado
      return matchesName && matchesCedula && matchesPrograma && matchesUnidad && matchesDate;
    });
  
    console.log(this.filteredStudents);  // Esto te ayudará a ver en la consola si los filtros están funcionando
  }
  
  
  onNameSearch(name: string) {
    this.nameTerm = name;  // Actualiza el valor del filtro de nombre
    this.applyFilters();   // Aplica los filtros
  }
  
  onCedulaSearch(cedula: string) {
    this.cedulaTerm = cedula;  // Actualiza el valor del filtro de cédula
    this.applyFilters();       // Aplica los filtros
  }
  
  onProgramaSearch(programa: string) {
    this.selectedPrograma = programa;  // Actualiza el filtro de programa
    this.applyFilters();               // Aplica los filtros
  }
  
  onUnidadSearch(unidad: string) {
    this.selectedUnidad = unidad;      // Actualiza el filtro de unidad
    this.applyFilters();               // Aplica los filtros
  }
  
  onDateSearch(date: string) {
    this.selectedDate = date;          // Actualiza el filtro de fecha
    this.applyFilters();               // Aplica los filtros
  }

  
}
