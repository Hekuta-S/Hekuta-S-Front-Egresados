import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent {
  nameTerm: string = '';
  cedulaTerm: string = '';
  selectedPrograma: string = '';
  selectedUnidad: string = ''; // Agrega esto para el dropdown de Unidad
  selectedDate: string = '';

  // Programas y unidades disponibles
  @Input() programas: string[] = [];
  @Input() unidades: string[] = []; // Agrega esto para las Unidades

  @Output() nameSearchEvent = new EventEmitter<string>();
  @Output() cedulaSearchEvent = new EventEmitter<string>();
  @Output() programaSearchEvent = new EventEmitter<string>();
  @Output() unidadSearchEvent = new EventEmitter<string>(); // Agrega esto para la Unidad
  @Output() dateSearchEvent = new EventEmitter<string>();

  onNameInputChange(event: any) {
    this.nameTerm = event.target.value.toLowerCase();
    this.nameSearchEvent.emit(this.nameTerm);
  }

  onCedulaInputChange(event: any) {
    this.cedulaTerm = event.target.value;
    this.cedulaSearchEvent.emit(this.cedulaTerm);
  }

  onProgramaChange(event: any) {
    this.selectedPrograma = event.target.value;
    this.programaSearchEvent.emit(this.selectedPrograma);
  }

  onUnidadChange(event: any) {
    this.selectedUnidad = event.target.value; // Captura el valor seleccionado de Unidad
    console.log('Unidad seleccionada:', this.selectedUnidad); // Log para depuración
    this.unidadSearchEvent.emit(this.selectedUnidad); // Emite el valor de Unidad
  }

  onDateChange(event: any) {
    this.selectedDate = event.target.value;
    this.dateSearchEvent.emit(this.selectedDate);
  }
}
